/**
 * battle_engine.js
 * Engine de batalha para o Pokémon (Fase 2).
 */

const STAT_STAGES = {
    '-6': 2/8, '-5': 2/7, '-4': 2/6, '-3': 2/5, '-2': 2/4, '-1': 2/3,
    '0': 2/2,
    '1': 3/2, '2': 4/2, '3': 5/2, '4': 6/2, '5': 7/2, '6': 8/2
};

const ACC_STAGES = {
    '-6': 3/9, '-5': 3/8, '-4': 3/7, '-3': 3/6, '-2': 3/5, '-1': 3/4,
    '0': 3/3,
    '1': 4/3, '2': 5/3, '3': 6/3, '4': 7/3, '5': 8/3, '6': 9/3
};

class PokemonEntity {
    constructor(dbData, level, movesData, isPlayer = false) {
        this.id = dbData.id;
        this.name = dbData.name;
        this.types = dbData.types;
        this.level = level;
        this.baseExp = dbData.base_exp;
        this.growthRate = dbData.growth_rate;
        this.baseStats = dbData.stats;
        this.isPlayer = isPlayer;

        if (dbData.iv && typeof dbData.iv === 'object') {
            this.iv = { ...dbData.iv };
        } else {
            const defaultIv = typeof dbData.iv === 'number' ? dbData.iv : 15;
            this.iv = { hp: defaultIv, atk: defaultIv, def: defaultIv, spa: defaultIv, spd: defaultIv, spe: defaultIv };
        }
        if (dbData.ev && typeof dbData.ev === 'object') {
            this.ev = { ...dbData.ev };
        } else {
            this.ev = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
        }
        
        const hpIv = this.iv.hp !== undefined ? this.iv.hp : 15;
        const hpEv = this.ev.hp !== undefined ? this.ev.hp : 0;
        this.maxHp = Math.floor((2 * this.baseStats.hp + hpIv + Math.floor(hpEv / 4)) * this.level / 100) + this.level + 10;
        this.hp = this.maxHp;
        
        this.stages = { atk: 0, def: 0, spa: 0, spd: 0, spe: 0, acc: 0, eva: 0 };
        
        this.status = null; // 'paralysis', 'burn', 'poison', 'toxic', 'sleep', 'freeze'
        this.statusTurns = 0; // Contador para Sleep, Toxic, etc.

        // Determinar EXP inicial com base no nível atual
        this.exp = this.getExpAtLevel(this.level);
        
        // Copia os ataques para poder mutar o PP
        this.moves = movesData.map(m => JSON.parse(JSON.stringify(m)));
    }

    getStat(stat) {
        if (stat === 'hp') return this.maxHp;
        let base = this.baseStats[stat];
        let iv = (this.iv && this.iv[stat] !== undefined) ? this.iv[stat] : 15;
        let ev = (this.ev && this.ev[stat] !== undefined) ? this.ev[stat] : 0;
        let val = Math.floor((Math.floor((2 * base + iv + Math.floor(ev / 4)) * this.level / 100) + 5));
        
        // Aplicar Estágios (Multiplicadores -6 a +6)
        let stage = this.stages[stat];
        if (stage > 6) stage = 6;
        if (stage < -6) stage = -6;
        val = Math.floor(val * STAT_STAGES[stage.toString()]);

        // Penalidades de Status Condition
        if (this.status === 'paralysis' && stat === 'spe') {
            val = Math.floor(val / 4);
        }
        if (this.status === 'burn' && stat === 'atk') {
            val = Math.floor(val / 2);
        }

        return Math.max(1, val);
    }

    getExpNextLevel() {
        if (this.level >= 100) return this.getExpAtLevel(100);
        return this.getExpAtLevel(this.level + 1);
    }

    getExpAtLevel(level) {
        // Curvas originais (Fórmulas exatas)
        switch (this.growthRate) {
            case 'fast': 
                return Math.floor(0.8 * Math.pow(level, 3));
            case 'medium-fast': 
                return Math.floor(Math.pow(level, 3));
            case 'medium-slow': 
                return Math.floor(1.2 * Math.pow(level, 3) - 15 * Math.pow(level, 2) + 100 * level - 140);
            case 'slow': 
                return Math.floor(1.25 * Math.pow(level, 3));
            default: 
                return Math.floor(Math.pow(level, 3)); // Fallback
        }
    }

    takeDamage(amount) {
        this.hp -= amount;
        if (this.hp < 0) this.hp = 0;
    }

    heal(amount) {
        this.hp += amount;
        if (this.hp > this.maxHp) this.hp = this.maxHp;
    }
}

class BattleEngine {
    constructor(playerPkmn, enemyPkmn, typeChart) {
        this.player = playerPkmn;
        this.enemy = enemyPkmn;
        this.typeChart = typeChart;
        this.log = []; // Armazena as mensagens do turno
    }

    pushLog(msg) {
        this.log.push(msg);
    }

    getTypeMultiplier(moveType, targetType) {
        if (!this.typeChart[moveType]) return 1;
        let tData = this.typeChart[moveType];
        if (tData.double_damage_to.includes(targetType)) return 2;
        if (tData.half_damage_to.includes(targetType)) return 0.5;
        if (tData.no_damage_to.includes(targetType)) return 0;
        return 1;
    }

    calculateDamage(attacker, defender, move) {
        if (move.category === 'Status' || move.power === null || move.power === 0) {
            return { damage: 0, isCrit: false, typeMod: 1 };
        }

        const statKeyA = move.category === 'Physical' ? 'atk' : 'spa';
        const statKeyD = move.category === 'Physical' ? 'def' : 'spd';

        // Crítico: Gen 3 chance = 1/16 (6.25%)
        let isCrit = Math.random() < 0.0625;
        
        let A = attacker.getStat(statKeyA);
        let D = defender.getStat(statKeyD);
        
        // Se for crit, ignora buffs de def do alvo e debuffs de atk do atacante (Gen 3)
        if (isCrit) {
            if (attacker.stages[statKeyA] < 0) {
                const ivA = (attacker.iv && attacker.iv[statKeyA] !== undefined) ? attacker.iv[statKeyA] : 15;
                const evA = (attacker.ev && attacker.ev[statKeyA] !== undefined) ? attacker.ev[statKeyA] : 0;
                A = Math.floor((Math.floor((2 * attacker.baseStats[statKeyA] + ivA + Math.floor(evA / 4)) * attacker.level / 100) + 5));
                if (attacker.status === 'burn' && move.category === 'Physical') A = Math.floor(A / 2);
            }
            if (defender.stages[statKeyD] > 0) {
                const ivD = (defender.iv && defender.iv[statKeyD] !== undefined) ? defender.iv[statKeyD] : 15;
                const evD = (defender.ev && defender.ev[statKeyD] !== undefined) ? defender.ev[statKeyD] : 0;
                D = Math.floor((Math.floor((2 * defender.baseStats[statKeyD] + ivD + Math.floor(evD / 4)) * defender.level / 100) + 5));
            }
        }

        A = Math.max(1, Math.floor(A));
        D = Math.max(1, Math.floor(D));

        const levelFactor = Math.floor(2 * attacker.level / 5) + 2;
        let damage = Math.floor(Math.floor((levelFactor * move.power * A) / D) / 50) + 2;
        
        // Modifiers no estilo Gen 3 (FireRed)
        if (isCrit) {
            damage = damage * 2;
        }

        if (attacker.types.includes(move.type)) {
            damage = Math.floor(damage * 1.5);
        }
        
        let typeMod = 1;
        for (let t of defender.types) {
            typeMod *= this.getTypeMultiplier(move.type, t);
        }
        damage = Math.floor(damage * typeMod);

        const r = Math.floor(Math.random() * 16) + 85; // 85 a 100
        damage = Math.floor((damage * r) / 100);
        
        if (damage === 0 && typeMod > 0) damage = 1; // Garante 1 de dano se não for imune

        return { damage, isCrit, typeMod };
    }

    // Executa o turno onde player selecionou um golpe
    executeTurn(playerMoveIndex) {
        this.log = []; // Reseta log

        let pMove = this.player.moves[playerMoveIndex];
        let eMove = this.enemy.moves[Math.floor(Math.random() * this.enemy.moves.length)];

        // Verifica PP
        if (pMove.current_pp <= 0) {
            this.pushLog(`${this.player.name} tentou usar ${pMove.name}, mas não há mais PP!`);
            return;
        }

        // Calcula Prioridade e Velocidade
        let pPriority = pMove.priority || 0;
        let ePriority = eMove.priority || 0;
        
        let pSpeed = this.player.getStat('spe');
        let eSpeed = this.enemy.getStat('spe');

        let first = null;
        let second = null;
        let firstMove = null;
        let secondMove = null;

        if (pPriority > ePriority) {
            first = this.player; second = this.enemy; firstMove = pMove; secondMove = eMove;
        } else if (ePriority > pPriority) {
            first = this.enemy; second = this.player; firstMove = eMove; secondMove = pMove;
        } else {
            if (pSpeed > eSpeed) {
                first = this.player; second = this.enemy; firstMove = pMove; secondMove = eMove;
            } else if (eSpeed > pSpeed) {
                first = this.enemy; second = this.player; firstMove = eMove; secondMove = pMove;
            } else {
                // Cara ou coroa
                if (Math.random() < 0.5) {
                    first = this.player; second = this.enemy; firstMove = pMove; secondMove = eMove;
                } else {
                    first = this.enemy; second = this.player; firstMove = eMove; secondMove = pMove;
                }
            }
        }

        // Executar ações na ordem
        let combatEnded = this.executeAction(first, second, firstMove);
        if (!combatEnded && second.hp > 0) {
            this.executeAction(second, first, secondMove);
        }

        // Fim de Turno (dano de veneno, queimadura, etc)
        this.endOfTurnEffects(first);
        this.endOfTurnEffects(second);

        return this.log;
    }

    executeAction(attacker, defender, move) {
        if (attacker.hp <= 0) return true; // Mortos não atacam

        // Checar condições de status (Sleep, Freeze, Paralysis, Flinch, etc)
        if (!this.canAttackStatusCheck(attacker)) return false;

        // Deduzir PP
        if (move.current_pp !== undefined) move.current_pp--;

        this.pushLog(`${attacker.isPlayer ? '' : 'O Pokémon selvagem '}${attacker.name} usou ${move.name}!`);

        // Acc check
        let acc = move.accuracy;
        if (acc) {
            let stageCalc = attacker.stages.acc - defender.stages.eva;
            if (stageCalc > 6) stageCalc = 6;
            if (stageCalc < -6) stageCalc = -6;
            let accMod = ACC_STAGES[stageCalc.toString()];
            if (Math.random() * 100 > (acc * accMod)) {
                this.pushLog(`O ataque de ${attacker.name} errou!`);
                return false;
            }
        }

        let { damage, isCrit, typeMod } = this.calculateDamage(attacker, defender, move);

        if (typeMod === 0) {
            this.pushLog(`Não afeta ${defender.name}...`);
            return false;
        }

        if (damage > 0) {
            defender.takeDamage(damage);
            if (isCrit) this.pushLog('Acerto crítico!');
            if (typeMod > 1) this.pushLog('É super efetivo!');
            if (typeMod < 1) this.pushLog('Não é muito efetivo...');
        }

        // Efeitos secundários (Debuffs/Buffs/Status)
        if (defender.hp > 0 && move.stat_changes && move.stat_changes.length > 0) {
            // Chance de efeito secundário é normalmente definida na move, simplificando pra 100% caso não tenha `effect_chance` no JSON.
            // Para ser 100% fiel, precisaríamos de meta.stat_chance. Vamos usar se existir, senão assumimos que é garantido.
            let chance = move.meta?.stat_chance || 100;
            if (chance === 0) chance = 100; // Alguns golpes como Swords Dance tem 0 no PokeAPI, o que significa 100% ao próprio alvo.

            if (Math.random() * 100 <= chance) {
                move.stat_changes.forEach(change => {
                    let target = move.target === 'user' ? attacker : defender;
                    this.applyStatChange(target, change.stat.name, change.change);
                });
            }
        }

        // Aplicar Status Ailments de golpes secundários (ex: Thunderbolt -> Paralyze)
        if (defender.hp > 0 && move.meta && move.meta.ailment && move.meta.ailment.name !== 'none') {
            let ailChance = move.meta.ailment_chance || 100;
            if (ailChance === 0) ailChance = 100; // Igual as stats changes

            if (Math.random() * 100 <= ailChance) {
                this.applyStatus(defender, move.meta.ailment.name);
            }
        }

        return defender.hp <= 0;
    }

    canAttackStatusCheck(pkmn) {
        if (pkmn.status === 'sleep') {
            pkmn.statusTurns--;
            if (pkmn.statusTurns <= 0) {
                pkmn.status = null;
                this.pushLog(`${pkmn.name} acordou!`);
                return true;
            }
            this.pushLog(`${pkmn.name} está dormindo profundamente...`);
            return false;
        }
        if (pkmn.status === 'freeze') {
            if (Math.random() < 0.2) { // 20% thaw chance
                pkmn.status = null;
                this.pushLog(`${pkmn.name} se descongelou!`);
                return true;
            }
            this.pushLog(`${pkmn.name} está congelado solidamente!`);
            return false;
        }
        if (pkmn.status === 'paralysis') {
            if (Math.random() < 0.25) { // 25% chance to miss turn
                this.pushLog(`${pkmn.name} está paralisado! Não consegue se mover!`);
                return false;
            }
        }
        return true;
    }

    applyStatChange(target, statName, amount) {
        // Mapear PokeAPI stat names
        let sMap = {
            'attack': 'atk', 'defense': 'def', 'special-attack': 'spa',
            'special-defense': 'spd', 'speed': 'spe', 'accuracy': 'acc', 'evasion': 'eva'
        };
        let s = sMap[statName] || statName;

        if (target.stages[s] !== undefined) {
            if (amount > 0 && target.stages[s] === 6) {
                this.pushLog(`O stat de ${s.toUpperCase()} de ${target.name} não pode subir mais!`);
                return;
            }
            if (amount < 0 && target.stages[s] === -6) {
                this.pushLog(`O stat de ${s.toUpperCase()} de ${target.name} não pode cair mais!`);
                return;
            }

            target.stages[s] += amount;
            if (target.stages[s] > 6) target.stages[s] = 6;
            if (target.stages[s] < -6) target.stages[s] = -6;

            let diffText = amount > 1 ? 'subiu drasticamente!' : amount === 1 ? 'subiu!' : amount < -1 ? 'caiu drasticamente!' : 'caiu!';
            this.pushLog(`O stat de ${s.toUpperCase()} de ${target.name} ${diffText}`);
        }
    }

    applyStatus(target, statusName) {
        if (target.status !== null) return; // Pokémon já tem status

        // Impedir imunidades (ex: Poison em tipo Poison ou Steel)
        if (statusName === 'poison' && (target.types.includes('poison') || target.types.includes('steel'))) return;
        if (statusName === 'burn' && target.types.includes('fire')) return;
        if (statusName === 'paralysis' && target.types.includes('electric')) return;
        if (statusName === 'freeze' && target.types.includes('ice')) return;

        target.status = statusName;
        
        switch (statusName) {
            case 'burn':
                this.pushLog(`${target.name} sofreu uma queimadura!`);
                break;
            case 'poison':
            case 'toxic':
                this.pushLog(`${target.name} foi envenenado!`);
                target.statusTurns = 1; // Para toxic damage tick
                break;
            case 'paralysis':
                this.pushLog(`${target.name} está paralisado! A velocidade caiu!`);
                break;
            case 'sleep':
                target.statusTurns = Math.floor(Math.random() * 3) + 1; // 1 a 3 turnos
                this.pushLog(`${target.name} adormeceu!`);
                break;
            case 'freeze':
                this.pushLog(`${target.name} foi congelado!`);
                break;
        }
    }

    endOfTurnEffects(pkmn) {
        if (pkmn.hp <= 0) return;

        if (pkmn.status === 'burn') {
            let dmg = Math.floor(pkmn.maxHp / 8) || 1;
            pkmn.takeDamage(dmg);
            this.pushLog(`${pkmn.name} sofreu devido à queimadura!`);
        } else if (pkmn.status === 'poison') {
            let dmg = Math.floor(pkmn.maxHp / 8) || 1;
            pkmn.takeDamage(dmg);
            this.pushLog(`${pkmn.name} sofreu dano de veneno!`);
        } else if (pkmn.status === 'toxic') {
            let dmg = Math.floor(pkmn.maxHp * pkmn.statusTurns / 16) || 1;
            pkmn.takeDamage(dmg);
            this.pushLog(`${pkmn.name} está gravemente envenenado!`);
            pkmn.statusTurns++;
        }
    }

    calculateExpGain(winner, loser) {
        // Formula: (Base_XP * Level_Derrotado) / 7
        // Sem modificadores de Held Item/Trade para o escopo inicial
        let exp = Math.floor((loser.baseExp * loser.level) / 7);
        return exp;
    }
}

// Exportar classes para uso local (ou navegador se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PokemonEntity, BattleEngine };
} else {
    window.PokemonEntity = PokemonEntity;
    window.BattleEngine = BattleEngine;
}
