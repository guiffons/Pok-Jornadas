const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

const BASE_URL = 'https://pokeapi.co/api/v2';
const MAX_POKEMON = 151;

async function fetchJson(url) {
    console.log(`Buscando: ${url}`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Falha ao buscar ${url}: ${res.statusText}`);
    return res.json();
}

// Helpers pré-Gen 4 (Categoria pelo Tipo)
const PHYSICAL_TYPES = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel'];
const SPECIAL_TYPES = ['fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark'];

function getCategoryByGen3(type, damage_class) {
    if (damage_class === 'status') return 'Status';
    if (PHYSICAL_TYPES.includes(type)) return 'Physical';
    if (SPECIAL_TYPES.includes(type)) return 'Special';
    return damage_class === 'physical' ? 'Physical' : 'Special';
}

async function run() {
    const pokemonData = [];
    const learnsets = {};
    const movesSet = new Set();
    const typeChart = {};

    console.log("=== INICIANDO FETCH DE POKÉMON E LEARNSETS (1 a 151) ===");
    for (let id = 1; id <= MAX_POKEMON; id++) {
        const pkmn = await fetchJson(`${BASE_URL}/pokemon/${id}`);
        const species = await fetchJson(`${BASE_URL}/pokemon-species/${id}`);
        
        // Stats
        const stats = {
            hp: pkmn.stats.find(s => s.stat.name === 'hp').base_stat,
            atk: pkmn.stats.find(s => s.stat.name === 'attack').base_stat,
            def: pkmn.stats.find(s => s.stat.name === 'defense').base_stat,
            spa: pkmn.stats.find(s => s.stat.name === 'special-attack').base_stat,
            spd: pkmn.stats.find(s => s.stat.name === 'special-defense').base_stat,
            spe: pkmn.stats.find(s => s.stat.name === 'speed').base_stat
        };

        // Evolution
        let evoMethod = null;
        if (species.evolution_chain && species.evolution_chain.url) {
            const chainData = await fetchJson(species.evolution_chain.url);
            
            // Função recursiva para achar a evolução DESTE pokemon para o próximo
            function findEvo(chain) {
                if (chain.species.name === pkmn.name) {
                    if (chain.evolves_to.length > 0) {
                        const evo = chain.evolves_to[0];
                        const details = evo.evolution_details[0];
                        if (details) {
                            if (details.trigger.name === 'level-up') return `Level ${details.min_level || '?'}`;
                            if (details.trigger.name === 'use-item') return `Item: ${details.item?.name}`;
                            if (details.trigger.name === 'trade') return 'Trade';
                            return details.trigger.name;
                        }
                    }
                    return null;
                }
                for (let next of chain.evolves_to) {
                    let res = findEvo(next);
                    if (res) return res;
                }
                return null;
            }
            evoMethod = findEvo(chainData.chain);
        }

        pokemonData.push({
            id: pkmn.id,
            name: pkmn.name,
            types: pkmn.types.map(t => t.type.name),
            stats,
            catch_rate: species.capture_rate,
            base_exp: pkmn.base_experience,
            growth_rate: species.growth_rate.name,
            evolution_method: evoMethod
        });

        // Learnsets (FireRed/LeafGreen)
        const pkmnLearnset = [];
        for (let m of pkmn.moves) {
            const versionDetail = m.version_group_details.find(v => v.version_group.name === 'firered-leafgreen' && v.move_learn_method.name === 'level-up');
            if (versionDetail) {
                pkmnLearnset.push({
                    level: versionDetail.level_learned_at,
                    move: m.move.name
                });
                movesSet.add(m.move.name);
            }
        }
        // Ordenar por nível
        pkmnLearnset.sort((a, b) => a.level - b.level);
        learnsets[pkmn.name] = pkmnLearnset;
    }

    // Salvar pokemon.json e learnsets.json
    fs.writeFileSync(path.join(DATA_DIR, 'pokemon.json'), JSON.stringify(pokemonData, null, 2));
    console.log("-> pokemon.json salvo!");
    
    fs.writeFileSync(path.join(DATA_DIR, 'learnsets.json'), JSON.stringify(learnsets, null, 2));
    console.log("-> learnsets.json salvo!");

    console.log("=== INICIANDO FETCH DE MOVES ===");
    const movesData = {};
    for (let moveName of movesSet) {
        const moveInfo = await fetchJson(`${BASE_URL}/move/${moveName}`);
        movesData[moveName] = {
            name: moveInfo.name,
            type: moveInfo.type.name,
            category: getCategoryByGen3(moveInfo.type.name, moveInfo.damage_class?.name || 'status'),
            power: moveInfo.power,
            accuracy: moveInfo.accuracy,
            pp: moveInfo.pp,
            priority: moveInfo.priority,
            target: moveInfo.target.name,
            stat_changes: moveInfo.stat_changes, // Efeitos secundários de status
            meta: moveInfo.meta // Contém flinch_chance, ailment, etc.
        };
    }
    fs.writeFileSync(path.join(DATA_DIR, 'moves.json'), JSON.stringify(movesData, null, 2));
    console.log("-> moves.json salvo!");

    console.log("=== INICIANDO FETCH DE TYPE CHART ===");
    const typesRes = await fetchJson(`${BASE_URL}/type`);
    for (let t of typesRes.results) {
        // Ignorar tipos nulos/desconhecidos
        if (['unknown', 'stellar'].includes(t.name)) continue;
        const typeInfo = await fetchJson(t.url);
        
        typeChart[t.name] = {
            double_damage_to: typeInfo.damage_relations.double_damage_to.map(x => x.name),
            half_damage_to: typeInfo.damage_relations.half_damage_to.map(x => x.name),
            no_damage_to: typeInfo.damage_relations.no_damage_to.map(x => x.name)
        };
    }
    fs.writeFileSync(path.join(DATA_DIR, 'type_chart.json'), JSON.stringify(typeChart, null, 2));
    console.log("-> type_chart.json salvo!");

    console.log("=== INICIANDO FETCH DE ENCOUNTERS (KANTO) ===");
    const encountersData = {};
    const kanto = await fetchJson(`${BASE_URL}/region/1`);
    for (let loc of kanto.locations) {
        const locInfo = await fetchJson(loc.url);
        for (let area of locInfo.areas) {
            const areaInfo = await fetchJson(area.url);
            const areaEncounters = [];
            
            for (let enc of areaInfo.pokemon_encounters) {
                // Pegar apenas Kanto (IDs <= 151)
                const pokemonIdUrlSplit = enc.pokemon.url.split('/');
                const pkmnId = parseInt(pokemonIdUrlSplit[pokemonIdUrlSplit.length - 2]);
                if (pkmnId > 151) continue;

                // Filtrar pra FireRed/LeafGreen
                const frlgDetails = enc.version_details.find(v => v.version.name === 'firered' || v.version.name === 'leafgreen');
                if (frlgDetails) {
                    for (let encounterDetail of frlgDetails.encounter_details) {
                        areaEncounters.push({
                            pokemon: enc.pokemon.name,
                            method: encounterDetail.method.name,
                            chance: encounterDetail.chance,
                            min_level: encounterDetail.min_level,
                            max_level: encounterDetail.max_level
                        });
                    }
                }
            }
            if (areaEncounters.length > 0) {
                encountersData[areaInfo.name] = areaEncounters;
            }
        }
    }
    fs.writeFileSync(path.join(DATA_DIR, 'encounters.json'), JSON.stringify(encountersData, null, 2));
    console.log("-> encounters.json salvo!");

    console.log("=== TODOS OS ARQUIVOS FORAM GERADOS COM SUCESSO! ===");
}

run().catch(err => {
    console.error("Erro fatal:", err);
});
