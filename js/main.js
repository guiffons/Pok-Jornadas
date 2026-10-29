    /* =========================================================================
       IDIOMAS — UI (pt/en/es) e nomes de Pokémon/golpes (separado)
       ========================================================================= */
    let LANG = 'pt';        // idioma da interface
    let PKLANG = 'local';   // 'local' = nomes localizados | 'en' = originais | 'ja' = japonês (romaji)

    const STR = {
      pt: {
        sub: '151 Pokémon · 8 ginásios · Elite dos Quatro',
        newJourney: 'Novo jogo', continue: 'Carregar jogo', settings: 'Configurações',
        importSave: 'Importar save', exportSave: 'Exportar save',
        back: 'Voltar', ok: 'Ok', save: 'Salvar', load: 'Carregar', erase: 'Apagar', close: 'Fechar',
        language: 'Idioma do jogo', pkLanguage: 'Nomes de Pokémon e golpes',
        pkLocal: 'Localizados', pkEn: 'Originais (EN)', pkJa: 'Japonês (romaji)',
        speed: 'Velocidade do jogo', expAll: 'Exp. Compartilhada', effHint: 'Dica de efetividade',
        shinyRate: 'Taxa de Shiny', on: 'Ligado', off: 'Desligado',
        create: 'Quem é você?', yourName: 'Seu nome', boy: 'Menino', girl: 'Menina', confirm: 'Confirmar',
        nameHint: 'Toque no campo e digite. Até 10 letras.',
        lab: 'Laboratório do Prof. Carvalho',
        chooseStarter: 'Escolha o parceiro que vai começar a jornada com você.',
        slotsSave: 'Escolher slot para salvar', slotsLoad: 'Carregar jornada', emptySlot: 'Slot vazio',
        slotSaved: 'Jogo salvo no slot {0}.', confirmErase: 'Apagar o slot {0}?',
        storageOff: 'Este navegador bloqueia o salvamento em arquivos abertos direto do disco. Use o Firefox, ou sirva a pasta por um servidor local. Exportar save sempre funciona.',
        exported: 'Save exportado como arquivo.', imported: 'Save importado para o slot {0}.',
        importFail: 'Arquivo inválido ou corrompido.', importWhere: 'Importar para qual slot?',
        playtime: 'Tempo de jogo', badges: 'Insígnias', money: 'PokéDólares',
        center: 'Centro Pokémon', shop: 'Loja', team: 'Meu time', bag: 'Mochila', dex: 'Pokédex',
        mapT: 'Mapa', card: 'Cartão de Treinador',
        train: 'Treinar na grama alta', healed: 'Seus Pokémon estão curados.',
        explore: 'Explorar a área', fightTrainer: 'Enfrentar treinador', challenge: 'Desafiar {0}',
        goTo: 'Seguir para {0}', journeyDone: 'Jornada completa', travel: 'Viajar para {0}',
        travelT: 'Viagem rápida', locked: 'Bloqueado', youAreHere: 'Você está aqui',
        teamCount: 'Time atual ({0}/6) · {1}/151 registrados',
        allFainted: 'Todos os seus Pokémon estão desmaiados. Passe no Centro Pokémon.',
        exitShop: 'Sair da loja', bagEmpty: 'A mochila está vazia. A loja fica no menu do mapa.',
        onlyBattle: 'só em batalha', use: 'Usar', useOn: 'Usar {0} em quem?',
        seen: 'Vistos', caught: 'Capturados',
        moves: 'Golpes', power: 'Poder', statusMove: 'Status', acc: 'precisão',
        sendToBox: 'Enviar {0} ao depósito', swapBox: 'Trocar com o depósito', swapFor: 'Trocar por {0}',
        nickname: 'Apelido', setNick: 'Dar apelido', nickHint: 'Deixe em branco para usar o nome original.',
        nickSet: '{0} agora se chama {1}.',
        expTo: '{0}/{1} exp para o Nv {2}',
        stats: 'Ataque {0} · Defesa {1}<br>Esp.At {2} · Esp.Def {3}<br>Velocidade {4}',
        day: 'Dia', dusk: 'Entardecer', night: 'Noite',
        stoneNoUse: 'Não teve efeito nesse Pokémon.',
        fight: 'Lutar', run: 'Fugir', giveUp: 'Desistir', switchMon: 'Pokémon', info: 'Análise',
        chooseNext: 'Escolha o próximo', switchTitle: 'Trocar de Pokémon', inField: 'em campo',
        wildAppeared: 'Um {0} selvagem apareceu!', shinyFound: 'Ele está brilhando! É um Shiny!',
        trainerWants: '{0} quer batalhar!', trainerSent: '{0} enviou {1}!',
        goMon: 'Vai, {0}!', comeBack: '{0}, volte!',
        usedMove: '{0} usou {1}!', missed: 'O ataque errou o alvo!',
        superEff: 'Foi muito efetivo!', notVery: 'Não foi muito efetivo...',
        noEffect: 'Não teve efeito em {0}...', critical: 'Um golpe crítico!',
        fainted: '{0} desmaiou!', gotExp: '{0} ganhou {1} de experiência!',
        levelUp: '{0} subiu para o nível {1}!', learned: '{0} aprendeu {1}!',
        forgot: '{0} esqueceu {1} e aprendeu {2}!',
        evolving: 'O quê? {0} está evoluindo!', evolved: '{0} evoluiu para {1}!',
        threwBall: 'Você jogou uma {0}!', gotcha: 'Gotcha! {0} foi capturado!',
        joinedTeam: '{0} entrou no seu time.', toBoxMsg: '{0} foi enviado ao depósito.',
        escaped0: 'Oh não! Ele escapou na hora!', escaped1: 'Ah! Quase!', escaped2: 'Faltou tão pouco!',
        cantCatch: 'Não dá para capturar o Pokémon de outro treinador!',
        ranAway: 'Você escapou em segurança!', cantRun: 'Não conseguiu escapar!',
        noRunTrainer: 'Você não pode fugir de uma batalha de treinador!',
        defeated: 'Você derrotou {0}!', prize: 'Recebeu ¥{0} pela vitória.',
        gotBadge: 'Você conquistou a Insígnia {0}!',
        blackout: 'Você não tem mais Pokémon em condições de lutar!',
        lostMoney: 'Você correu para o Centro Pokémon e perdeu ¥{0}.',
        whiteout: 'Você apagou...', whiteoutSub: 'Seus Pokémon foram curados. Tente de novo quando estiver pronto.',
        victory: 'Vitória!', captureT: 'Captura!', ranT: 'Você fugiu',
        areaDone: '{0} concluída. {1} liberada.', allDone: 'Você completou toda a jornada de Kanto.',
        keepGoing: 'A jornada continua.', trainDone: 'Treino concluído.',
        healedUp: '{0} recuperou {1} HP.', noNeed: '{0} não precisa disso agora.',
        cured: '{0} voltou ao normal.', isFine: '{0} está bem.',
        revived: '{0} voltou à luta!', notFainted: '{0} não está desmaiado.',
        asleep: '{0} está dormindo.', wokeUp: '{0} acordou!',
        frozen: '{0} está congelado!', thawed: '{0} descongelou!',
        paralyzed: '{0} está paralisado e não conseguiu se mover!',
        hurtBy: '{0} sofreu com {1}.', poisonW: 'o veneno', burnW: 'a queimadura',
        statUp: 'O ataque de {0} aumentou muito!',
        becamePsn: '{0} foi envenenado!', becameBrn: '{0} foi queimado!',
        becamePar: '{0} ficou paralisado!', becameSlp: '{0} caiu no sono!', becameFrz: '{0} foi congelado!',
        analysis: 'Análise de {0}', weakTo: 'Fraco a', resists: 'Resiste', immuneTo: 'Imune a',
        notRegistered: 'Este Pokémon ainda não está registrado na sua Pokédex. Capture um para liberar a análise.',
        registered: 'Registrado na Pokédex', nothing: 'nada',
        pickSlot: 'Os 5 slots estão ocupados. Use Salvar para escolher onde gravar esta jornada.',
        wins: 'Batalhas vencidas', shinyC: 'Shinies encontrados', started: 'Início',
        diffTitle: 'Dificuldade', diffEasy: 'Fácil', diffNormal: 'Normal', diffHard: 'Difícil',
        nuzlockeQ: 'Modo Nuzlocke', nuzlockeD: 'Pokémon desmaiado morre permanentemente.',
        xpRuleQ: 'Regra de XP', xpNormal: 'Normal', xpShareN: 'Exp. Share',
        newRules: 'Regras da jornada (fixas)', ruleHint: 'Essas regras não podem ser alteradas depois de começar.',
        skin: 'Skin da interface', skinPoke: 'Poké Ball', skinGreat: 'Great Ball', skinUltra: 'Ultra Ball', skinMaster: 'Master Ball',
        skinLocked: 'Vença a Elite dos 4 para desbloquear', badgeGallery: 'Galeria de Insígnias', noBadgesYet: 'Nenhuma jornada salva ainda.',
        ivLabel: 'IVs', evLabel: 'EVs', natureLabel: 'Natureza', abilityLabel: 'Habilidade',
        natureUp: '(+{0})', natureDown: '(-{0})', natureNeutral: '(neutra)',
        moveReminder: 'Relembrar golpes', reminderHint: 'Escolha um golpe que {0} já poderia saber no nível atual.',
        alreadyKnows: '{0} já sabe esse golpe.', pickToForget: 'Qual golpe esquecer para aprender {0}?',
        relearned: '{0} relembrou {1}!',
        teamOrder: 'Reordenar time', moveUp: '▲', moveDown: '▼',
        effSuper: '2x Super', effSuper4: '4x Super', effWeak: '0.5x Pouco', effWeak4: '0.25x Pouco', effImmune: '0x Imune', effNormal: '1x Normal',
        healLocked: 'Área restrita: o Centro Pokémon não funciona aqui. Use itens da mochila.',
        nuzDead: '{0} desmaiou e não pode mais batalhar (Nuzlocke).', nuzTag: 'K.O. permanente',
        statHp: 'HP', statAtk: 'Ataque', statDef: 'Defesa', statSpa: 'At.Esp', statSpd: 'Def.Esp', statSpe: 'Velocidade',
        statDown: '{1} de {0} caiu!',
        abOn: 'Habilidade: {0}', intimidateMsg: '{0} intimida {1}! O ataque caiu.', staticMsg: '{0} foi paralisado pela Static!',
        sturdyMsg: '{0} aguentou com Sturdy!', gutsMsg: '{0} está com Guts ativado!',
        pc: 'PC (Caixa)', withdraw: 'Retirar', release: 'Soltar', releaseConfirm: 'Soltar {0} para sempre? Isso não pode ser desfeito.', pcEmpty: 'A caixa está vazia.',
        credits: 'Créditos', creditsBody: 'Criador: Guilherme Fonseca\n\nDesenvolvimento: criado com assistência de inteligência artificial (Claude, da Anthropic).\n\nAviso legal: projeto sem fins lucrativos, feito por fã, sem intenção de violar direitos autorais de Pokémon / Nintendo / Game Freak / Creatures Inc. Destinado à diversão e a fins didáticos sobre mecânicas de batalha.',
        gen2Note: 'Geração 2 (Johto) em breve!',
        friendship: 'Amizade', friendHint: 'Sobe batalhando e subindo de nível, cai quando desmaia.',
        forfeit: 'Desistir', forfeitConfirm: 'Desistir da batalha? Você perderá PokéDólares e voltará ao último ponto salvo.', forfeitMsg: 'Você desistiu da batalha...',
        mintName: 'Menta Misteriosa', mintDesc: 'Permite escolher uma nova natureza para um Pokémon.', pickNature: 'Escolha a nova natureza', natureSet: '{0} agora tem a natureza {1}!',
        evoTip: 'Dica do Especialista', evoTipAsk: 'Pagar ¥{0} para saber como {1} evolui?', evoTipNoData: 'Nenhum especialista sabe como esse Pokémon evolui.', evoTipNoMoney: 'Você não tem PokéDólares suficientes.',
        evoTipStone: 'Evolui usando {0}.', evoTipLevel: 'Evolui no nível {0}.',
        mewReady: 'Você completou a Pokédex! Um especialista quer lhe mostrar algo raro...', mewClaim: 'Receber Mew', mewClaimed: 'Mew já foi recebido.',
        catPhysical: 'Físico', catSpecial: 'Especial', catStatus: 'Status',
        levelCapMsg: '{0} não pode passar do Nível {1} ainda (limite da dificuldade).', diffTip: 'A dificuldade também define o Level Cap, a Exp. Share e quando a efetividade é revelada.',
        diffEasyD: 'Sem Level Cap · Exp. Share sempre ativa · Efetividade sempre visível · Captura mais tolerante.',
        diffNormalD: 'Level Cap com folga (+5 acima do líder) · Exp. Share fica à venda na loja após a 3ª insígnia · Efetividade visível só se o Pokémon já foi visto.',
        diffHardD: 'Level Cap exato do líder · Sem Exp. Share · Efetividade visível só se o Pokémon já foi capturado.',
        pickMoveForPP: 'Escolha o golpe para recuperar PP', ppRestored: '{0} recuperou PP!', ppFull: '{0} já está com PP cheio.',
        fossilConfirm: 'O fóssil foi revivido em {0}!',
        learnPrompt: '{0} quer aprender {1}! Esquecer qual golpe?', learnSkip: 'Não aprender',
        moveNotLearned: '{0} não aprendeu {1}.', continue2: 'Continuar', legendaryHere: 'Algo poderoso: {0}!', boughtExpall: 'Exp. All comprado! Seu time agora ganha XP junto.',
        receivedGift: 'Você recebeu {0}!', pickGift: 'Escolha um presente', giftHere: 'Presente: {0}',
        items: 'Itens', keyItems: 'Itens-Chave', noKeyItems: 'Nenhum item-chave ainda.', sell: 'Vender', sellConfirm: 'Vender {0} por ¥{1}?'
      },
      en: {
        sub: '151 Pokémon · 8 gyms · Elite Four',
        newJourney: 'New game', continue: 'Load game', settings: 'Settings',
        importSave: 'Import save', exportSave: 'Export save',
        back: 'Back', ok: 'Ok', save: 'Save', load: 'Load', erase: 'Erase', close: 'Close',
        language: 'Game language', pkLanguage: 'Pokémon and move names',
        pkLocal: 'Localized', pkEn: 'Original (EN)', pkJa: 'Japanese (romaji)',
        speed: 'Game speed', expAll: 'Exp. All', effHint: 'Effectiveness hint',
        shinyRate: 'Shiny rate', on: 'On', off: 'Off',
        create: 'Who are you?', yourName: 'Your name', boy: 'Boy', girl: 'Girl', confirm: 'Confirm',
        nameHint: 'Tap the field and type. Up to 10 letters.',
        lab: "Prof. Oak's Laboratory",
        chooseStarter: 'Choose the partner who will start this journey with you.',
        slotsSave: 'Choose a slot to save', slotsLoad: 'Load journey', emptySlot: 'Empty slot',
        slotSaved: 'Game saved to slot {0}.', confirmErase: 'Erase slot {0}?',
        storageOff: 'This browser blocks saving for files opened straight from disk. Use Firefox, or serve the folder from a local server. Export always works.',
        exported: 'Save exported as a file.', imported: 'Save imported into slot {0}.',
        importFail: 'Invalid or corrupted file.', importWhere: 'Import into which slot?',
        playtime: 'Play time', badges: 'Badges', money: 'PokéDollars',
        center: 'Pokémon Center', shop: 'Shop', team: 'My team', bag: 'Bag', dex: 'Pokédex',
        mapT: 'Map', card: 'Trainer Card',
        train: 'Train in the tall grass', healed: 'Your Pokémon are healed.',
        explore: 'Explore the area', fightTrainer: 'Battle a trainer', challenge: 'Challenge {0}',
        goTo: 'Head to {0}', journeyDone: 'Journey complete', travel: 'Travel to {0}',
        travelT: 'Fast travel', locked: 'Locked', youAreHere: 'You are here',
        teamCount: 'Team ({0}/6) · {1}/151 registered',
        allFainted: 'All your Pokémon have fainted. Visit the Pokémon Center.',
        exitShop: 'Leave the shop', bagEmpty: 'Your bag is empty. The shop is in the map menu.',
        onlyBattle: 'battle only', use: 'Use', useOn: 'Use {0} on whom?',
        seen: 'Seen', caught: 'Caught',
        moves: 'Moves', power: 'Power', statusMove: 'Status', acc: 'accuracy',
        sendToBox: 'Send {0} to the box', swapBox: 'Swap with the box', swapFor: 'Swap for {0}',
        nickname: 'Nickname', setNick: 'Set nickname', nickHint: 'Leave empty to use the original name.',
        nickSet: '{0} is now called {1}.',
        expTo: '{0}/{1} exp to Lv {2}',
        stats: 'Attack {0} · Defense {1}<br>Sp.Atk {2} · Sp.Def {3}<br>Speed {4}',
        day: 'Day', dusk: 'Dusk', night: 'Night',
        stoneNoUse: 'It had no effect on that Pokémon.',
        fight: 'Fight', run: 'Run', giveUp: 'Give up', switchMon: 'Pokémon', info: 'Analysis',
        chooseNext: 'Choose the next one', switchTitle: 'Switch Pokémon', inField: 'on the field',
        wildAppeared: 'A wild {0} appeared!', shinyFound: "It's shining! It's a Shiny!",
        trainerWants: '{0} wants to battle!', trainerSent: '{0} sent out {1}!',
        goMon: 'Go, {0}!', comeBack: '{0}, come back!',
        usedMove: '{0} used {1}!', missed: 'The attack missed!',
        superEff: "It's super effective!", notVery: "It's not very effective...",
        noEffect: "It doesn't affect {0}...", critical: 'A critical hit!',
        fainted: '{0} fainted!', gotExp: '{0} gained {1} experience!',
        levelUp: '{0} grew to level {1}!', learned: '{0} learned {1}!',
        forgot: '{0} forgot {1} and learned {2}!',
        evolving: 'What? {0} is evolving!', evolved: '{0} evolved into {1}!',
        threwBall: 'You threw a {0}!', gotcha: 'Gotcha! {0} was caught!',
        joinedTeam: '{0} joined your team.', toBoxMsg: '{0} was sent to the box.',
        escaped0: 'Oh no! It broke free right away!', escaped1: 'Aww! So close!', escaped2: 'Argh! Almost had it!',
        cantCatch: "You can't catch another trainer's Pokémon!",
        ranAway: 'You got away safely!', cantRun: "You couldn't escape!",
        noRunTrainer: "You can't run from a trainer battle!",
        defeated: 'You defeated {0}!', prize: 'You got ¥{0} for winning.',
        gotBadge: 'You earned the {0} Badge!',
        blackout: 'You have no Pokémon left to fight!',
        lostMoney: 'You rushed to the Pokémon Center and lost ¥{0}.',
        whiteout: 'You blacked out...', whiteoutSub: 'Your Pokémon were healed. Try again when you are ready.',
        victory: 'Victory!', captureT: 'Caught it!', ranT: 'You ran away',
        areaDone: '{0} cleared. {1} unlocked.', allDone: 'You completed the whole Kanto journey.',
        keepGoing: 'The journey continues.', trainDone: 'Training done.',
        healedUp: '{0} recovered {1} HP.', noNeed: "{0} doesn't need that right now.",
        cured: '{0} is back to normal.', isFine: '{0} is doing fine.',
        revived: '{0} is back in the fight!', notFainted: '{0} has not fainted.',
        asleep: '{0} is fast asleep.', wokeUp: '{0} woke up!',
        frozen: '{0} is frozen solid!', thawed: '{0} thawed out!',
        paralyzed: "{0} is paralyzed and couldn't move!",
        hurtBy: '{0} was hurt by {1}.', poisonW: 'poison', burnW: 'its burn',
        statUp: "{0}'s attack rose sharply!",
        becamePsn: '{0} was poisoned!', becameBrn: '{0} was burned!',
        becamePar: '{0} was paralyzed!', becameSlp: '{0} fell asleep!', becameFrz: '{0} was frozen!',
        analysis: '{0} analysis', weakTo: 'Weak to', resists: 'Resists', immuneTo: 'Immune to',
        notRegistered: 'This Pokémon is not registered in your Pokédex yet. Catch one to unlock the analysis.',
        registered: 'Registered in the Pokédex', nothing: 'nothing',
        pickSlot: 'All 5 slots are in use. Use Save to choose where to store this journey.',
        wins: 'Battles won', shinyC: 'Shinies found', started: 'Started',
        diffTitle: 'Difficulty', diffEasy: 'Easy', diffNormal: 'Normal', diffHard: 'Hard',
        nuzlockeQ: 'Nuzlocke mode', nuzlockeD: 'A fainted Pokémon dies permanently.',
        xpRuleQ: 'XP rule', xpNormal: 'Normal', xpShareN: 'Exp. Share',
        newRules: 'Journey rules (fixed)', ruleHint: 'These rules cannot be changed after you start.',
        skin: 'Interface skin', skinPoke: 'Poké Ball', skinGreat: 'Great Ball', skinUltra: 'Ultra Ball', skinMaster: 'Master Ball',
        skinLocked: 'Beat the Elite Four to unlock', badgeGallery: 'Badge Gallery', noBadgesYet: 'No saved journey yet.',
        ivLabel: 'IVs', evLabel: 'EVs', natureLabel: 'Nature', abilityLabel: 'Ability',
        natureUp: '(+{0})', natureDown: '(-{0})', natureNeutral: '(neutral)',
        moveReminder: 'Move Reminder', reminderHint: 'Pick a move {0} could already know at its current level.',
        alreadyKnows: '{0} already knows that move.', pickToForget: 'Which move should be forgotten to learn {0}?',
        relearned: '{0} remembered {1}!',
        teamOrder: 'Reorder team', moveUp: '▲', moveDown: '▼',
        effSuper: '2x Super', effSuper4: '4x Super', effWeak: '0.5x Weak', effWeak4: '0.25x Weak', effImmune: '0x Immune', effNormal: '1x Normal',
        healLocked: 'Restricted area: the Pokémon Center is disabled here. Use items from your bag.',
        nuzDead: '{0} fainted and can no longer battle (Nuzlocke).', nuzTag: 'Permanent KO',
        statHp: 'HP', statAtk: 'Attack', statDef: 'Defense', statSpa: 'Sp.Atk', statSpd: 'Sp.Def', statSpe: 'Speed',
        statDown: "{0}'s {1} fell!",
        abOn: 'Ability: {0}', intimidateMsg: '{0} intimidates {1}! Attack fell.', staticMsg: '{0} was paralyzed by Static!',
        sturdyMsg: '{0} endured with Sturdy!', gutsMsg: '{0} has Guts fired up!',
        pc: 'PC (Box)', withdraw: 'Withdraw', release: 'Release', releaseConfirm: 'Release {0} forever? This cannot be undone.', pcEmpty: 'The box is empty.',
        credits: 'Credits', creditsBody: 'Creator: Guilherme Fonseca\n\nDevelopment: built with assistance from artificial intelligence (Claude, by Anthropic).\n\nLegal notice: a non-profit fan project, with no intention of infringing on Pokémon / Nintendo / Game Freak / Creatures Inc. copyrights. Made for fun and as an educational exercise about battle mechanics.',
        gen2Note: 'Generation 2 (Johto) coming soon!',
        friendship: 'Friendship', friendHint: 'Rises from battling and leveling up, drops when fainting.',
        forfeit: 'Forfeit', forfeitConfirm: 'Forfeit the battle? You will lose PokéDollars and return to your last save point.', forfeitMsg: 'You forfeited the battle...',
        mintName: 'Mysterious Mint', mintDesc: 'Lets you choose a new nature for a Pokémon.', pickNature: 'Pick the new nature', natureSet: '{0} now has a {1} nature!',
        evoTip: 'Expert Tip', evoTipAsk: 'Pay ¥{0} to learn how {1} evolves?', evoTipNoData: 'No expert knows how this Pokémon evolves.', evoTipNoMoney: 'You do not have enough PokéDollars.',
        evoTipStone: 'Evolves using a {0}.', evoTipLevel: 'Evolves at level {0}.',
        mewReady: 'You completed the Pokédex! An expert wants to show you something rare...', mewClaim: 'Receive Mew', mewClaimed: 'Mew has already been received.',
        catPhysical: 'Physical', catSpecial: 'Special', catStatus: 'Status',
        levelCapMsg: '{0} cannot pass Level {1} yet (difficulty cap).', diffTip: 'Difficulty also sets the Level Cap, Exp. Share, and when effectiveness is revealed.',
        diffEasyD: 'No Level Cap · Exp. Share always on · Effectiveness always visible · More forgiving capture.',
        diffNormalD: 'Level Cap with a cushion (+5 above the leader) · Exp. Share goes on sale in the shop after the 3rd badge · Effectiveness visible only if the Pokémon has been seen.',
        diffHardD: 'Level Cap exactly matches the leader · No Exp. Share · Effectiveness visible only if the Pokémon has been caught.',
        pickMoveForPP: 'Choose the move to restore PP for', ppRestored: '{0} restored PP!', ppFull: '{0} already has full PP.',
        fossilConfirm: 'The fossil was revived into {0}!',
        learnPrompt: '{0} wants to learn {1}! Forget which move?', learnSkip: 'Do not learn',
        moveNotLearned: '{0} did not learn {1}.', continue2: 'Continue', legendaryHere: 'Something powerful: {0}!', boughtExpall: 'Exp. All purchased! Your team now gains XP together.',
        receivedGift: 'You received {0}!', pickGift: 'Choose a gift', giftHere: 'Gift: {0}',
        items: 'Items', keyItems: 'Key Items', noKeyItems: 'No key items yet.', sell: 'Sell', sellConfirm: 'Sell {0} for ¥{1}?'
      },
      es: {
        sub: '151 Pokémon · 8 gimnasios · Alto Mando',
        newJourney: 'Partida nueva', continue: 'Cargar partida', settings: 'Ajustes',
        importSave: 'Importar partida', exportSave: 'Exportar partida',
        back: 'Volver', ok: 'Ok', save: 'Guardar', load: 'Cargar', erase: 'Borrar', close: 'Cerrar',
        language: 'Idioma del juego', pkLanguage: 'Nombres de Pokémon y movimientos',
        pkLocal: 'Localizados', pkEn: 'Originales (EN)', pkJa: 'Japonés (romaji)',
        speed: 'Velocidad del juego', expAll: 'Rep. Experiencia', effHint: 'Aviso de eficacia',
        shinyRate: 'Probabilidad Shiny', on: 'Activado', off: 'Desactivado',
        create: '¿Quién eres?', yourName: 'Tu nombre', boy: 'Chico', girl: 'Chica', confirm: 'Confirmar',
        nameHint: 'Toca el campo y escribe. Hasta 10 letras.',
        lab: 'Laboratorio del Prof. Oak',
        chooseStarter: 'Elige al compañero que empezará este viaje contigo.',
        slotsSave: 'Elige una ranura para guardar', slotsLoad: 'Cargar viaje', emptySlot: 'Ranura vacía',
        slotSaved: 'Partida guardada en la ranura {0}.', confirmErase: '¿Borrar la ranura {0}?',
        storageOff: 'Este navegador bloquea el guardado en archivos abiertos desde el disco. Usa Firefox o sirve la carpeta desde un servidor local. Exportar siempre funciona.',
        exported: 'Partida exportada como archivo.', imported: 'Partida importada en la ranura {0}.',
        importFail: 'Archivo inválido o dañado.', importWhere: '¿En qué ranura importar?',
        playtime: 'Tiempo de juego', badges: 'Medallas', money: 'PokéDólares',
        center: 'Centro Pokémon', shop: 'Tienda', team: 'Mi equipo', bag: 'Mochila', dex: 'Pokédex',
        mapT: 'Mapa', card: 'Ficha de Entrenador',
        train: 'Entrenar en la hierba alta', healed: 'Tus Pokémon están curados.',
        explore: 'Explorar la zona', fightTrainer: 'Luchar contra un entrenador', challenge: 'Desafiar a {0}',
        goTo: 'Ir a {0}', journeyDone: 'Viaje completo', travel: 'Viajar a {0}',
        travelT: 'Viaje rápido', locked: 'Bloqueado', youAreHere: 'Estás aquí',
        teamCount: 'Equipo ({0}/6) · {1}/151 registrados',
        allFainted: 'Todos tus Pokémon están debilitados. Pasa por el Centro Pokémon.',
        exitShop: 'Salir de la tienda', bagEmpty: 'La mochila está vacía. La tienda está en el menú del mapa.',
        onlyBattle: 'solo en combate', use: 'Usar', useOn: '¿Usar {0} en quién?',
        seen: 'Vistos', caught: 'Capturados',
        moves: 'Movimientos', power: 'Potencia', statusMove: 'Estado', acc: 'precisión',
        sendToBox: 'Enviar {0} a la caja', swapBox: 'Cambiar con la caja', swapFor: 'Cambiar por {0}',
        nickname: 'Mote', setNick: 'Poner mote', nickHint: 'Déjalo vacío para usar el nombre original.',
        nickSet: '{0} ahora se llama {1}.',
        expTo: '{0}/{1} exp para el Nv {2}',
        stats: 'Ataque {0} · Defensa {1}<br>At.Esp {2} · Def.Esp {3}<br>Velocidad {4}',
        day: 'Día', dusk: 'Atardecer', night: 'Noche',
        stoneNoUse: 'No tuvo efecto en ese Pokémon.',
        fight: 'Luchar', run: 'Huir', giveUp: 'Rendirse', switchMon: 'Pokémon', info: 'Análisis',
        chooseNext: 'Elige el siguiente', switchTitle: 'Cambiar de Pokémon', inField: 'en combate',
        wildAppeared: '¡Un {0} salvaje apareció!', shinyFound: '¡Está brillando! ¡Es un Shiny!',
        trainerWants: '¡{0} quiere luchar!', trainerSent: '¡{0} envió a {1}!',
        goMon: '¡Adelante, {0}!', comeBack: '¡{0}, vuelve!',
        usedMove: '¡{0} usó {1}!', missed: '¡El ataque falló!',
        superEff: '¡Es muy eficaz!', notVery: 'No es muy eficaz...',
        noEffect: 'No afecta a {0}...', critical: '¡Un golpe crítico!',
        fainted: '¡{0} se debilitó!', gotExp: '¡{0} ganó {1} de experiencia!',
        levelUp: '¡{0} subió al nivel {1}!', learned: '¡{0} aprendió {1}!',
        forgot: '¡{0} olvidó {1} y aprendió {2}!',
        evolving: '¿Qué? ¡{0} está evolucionando!', evolved: '¡{0} evolucionó a {1}!',
        threwBall: '¡Lanzaste una {0}!', gotcha: '¡Gotcha! ¡{0} fue capturado!',
        joinedTeam: '{0} se unió a tu equipo.', toBoxMsg: '{0} fue enviado a la caja.',
        escaped0: '¡Oh, no! ¡Se escapó enseguida!', escaped1: '¡Ah! ¡Casi!', escaped2: '¡Faltó muy poco!',
        cantCatch: '¡No puedes capturar el Pokémon de otro entrenador!',
        ranAway: '¡Escapaste sin problemas!', cantRun: '¡No pudiste escapar!',
        noRunTrainer: '¡No puedes huir de un combate contra un entrenador!',
        defeated: '¡Derrotaste a {0}!', prize: 'Recibiste ¥{0} por ganar.',
        gotBadge: '¡Conseguiste la Medalla {0}!',
        blackout: '¡No te quedan Pokémon para luchar!',
        lostMoney: 'Corriste al Centro Pokémon y perdiste ¥{0}.',
        whiteout: 'Te quedaste sin fuerzas...', whiteoutSub: 'Tus Pokémon fueron curados. Inténtalo de nuevo cuando estés listo.',
        victory: '¡Victoria!', captureT: '¡Capturado!', ranT: 'Huiste',
        areaDone: '{0} completada. {1} desbloqueada.', allDone: 'Completaste todo el viaje por Kanto.',
        keepGoing: 'El viaje continúa.', trainDone: 'Entrenamiento terminado.',
        healedUp: '{0} recuperó {1} PS.', noNeed: '{0} no lo necesita ahora.',
        cured: '{0} volvió a la normalidad.', isFine: '{0} está bien.',
        revived: '¡{0} volvió al combate!', notFainted: '{0} no está debilitado.',
        asleep: '{0} está dormido.', wokeUp: '¡{0} se despertó!',
        frozen: '¡{0} está congelado!', thawed: '¡{0} se descongeló!',
        paralyzed: '¡{0} está paralizado y no pudo moverse!',
        hurtBy: '{0} sufrió por {1}.', poisonW: 'el veneno', burnW: 'la quemadura',
        statUp: '¡El ataque de {0} subió mucho!',
        becamePsn: '¡{0} fue envenenado!', becameBrn: '¡{0} fue quemado!',
        becamePar: '¡{0} fue paralizado!', becameSlp: '¡{0} se durmió!', becameFrz: '¡{0} fue congelado!',
        analysis: 'Análisis de {0}', weakTo: 'Débil a', resists: 'Resiste', immuneTo: 'Inmune a',
        notRegistered: 'Este Pokémon aún no está registrado en tu Pokédex. Captura uno para desbloquear el análisis.',
        registered: 'Registrado en la Pokédex', nothing: 'nada',
        pickSlot: 'Las 5 ranuras están ocupadas. Usa Guardar para elegir dónde grabar este viaje.',
        wins: 'Combates ganados', shinyC: 'Shinies encontrados', started: 'Inicio',
        diffTitle: 'Dificultad', diffEasy: 'Fácil', diffNormal: 'Normal', diffHard: 'Difícil',
        nuzlockeQ: 'Modo Nuzlocke', nuzlockeD: 'Un Pokémon debilitado muere permanentemente.',
        xpRuleQ: 'Regla de XP', xpNormal: 'Normal', xpShareN: 'Exp. Compartida',
        newRules: 'Reglas del viaje (fijas)', ruleHint: 'Estas reglas no se pueden cambiar después de empezar.',
        skin: 'Skin de interfaz', skinPoke: 'Poké Ball', skinGreat: 'Great Ball', skinUltra: 'Ultra Ball', skinMaster: 'Master Ball',
        skinLocked: 'Vence a la Elite Cuatro para desbloquear', badgeGallery: 'Galería de Insignias', noBadgesYet: 'Ningún viaje guardado todavía.',
        ivLabel: 'IVs', evLabel: 'EVs', natureLabel: 'Naturaleza', abilityLabel: 'Habilidad',
        natureUp: '(+{0})', natureDown: '(-{0})', natureNeutral: '(neutra)',
        moveReminder: 'Recordar movimientos', reminderHint: 'Elige un movimiento que {0} ya podría saber en su nivel actual.',
        alreadyKnows: '{0} ya sabe ese movimiento.', pickToForget: '¿Qué movimiento olvidar para aprender {0}?',
        relearned: '¡{0} recordó {1}!',
        teamOrder: 'Reordenar equipo', moveUp: '▲', moveDown: '▼',
        effSuper: '2x Súper', effSuper4: '4x Súper', effWeak: '0.5x Poco', effWeak4: '0.25x Poco', effImmune: '0x Inmune', effNormal: '1x Normal',
        healLocked: 'Área restringida: el Centro Pokémon no funciona aquí. Usa objetos de la mochila.',
        nuzDead: '¡{0} se debilitó y ya no puede luchar (Nuzlocke)!', nuzTag: 'K.O. permanente',
        statHp: 'PS', statAtk: 'Ataque', statDef: 'Defensa', statSpa: 'At.Esp', statSpd: 'Def.Esp', statSpe: 'Velocidad',
        statDown: '¡{1} de {0} bajó!',
        abOn: 'Habilidad: {0}', intimidateMsg: '¡{0} intimida a {1}! Su ataque bajó.', staticMsg: '¡{0} fue paralizado por Static!',
        sturdyMsg: '¡{0} resistió con Sturdy!', gutsMsg: '¡{0} tiene Guts activado!',
        pc: 'PC (Caja)', withdraw: 'Retirar', release: 'Soltar', releaseConfirm: '¿Soltar a {0} para siempre? Esto no se puede deshacer.', pcEmpty: 'La caja está vacía.',
        credits: 'Créditos', creditsBody: 'Creador: Guilherme Fonseca\n\nDesarrollo: creado con asistencia de inteligencia artificial (Claude, de Anthropic).\n\nAviso legal: proyecto sin fines de lucro, hecho por un fan, sin intención de infringir los derechos de autor de Pokémon / Nintendo / Game Freak / Creatures Inc. Hecho por diversión y con fines didácticos sobre mecánicas de combate.',
        gen2Note: '¡Generación 2 (Johto) próximamente!',
        friendship: 'Amistad', friendHint: 'Sube al combatir y subir de nivel, baja al debilitarse.',
        forfeit: 'Rendirse', forfeitConfirm: '¿Rendirte en el combate? Perderás PokéDólares y volverás al último punto guardado.', forfeitMsg: 'Te rendiste en el combate...',
        mintName: 'Menta Misteriosa', mintDesc: 'Te permite elegir una nueva naturaleza para un Pokémon.', pickNature: 'Elige la nueva naturaleza', natureSet: '¡{0} ahora tiene naturaleza {1}!',
        evoTip: 'Consejo del Experto', evoTipAsk: '¿Pagar ¥{0} para saber cómo evoluciona {1}?', evoTipNoData: 'Ningún experto sabe cómo evoluciona este Pokémon.', evoTipNoMoney: 'No tienes suficientes PokéDólares.',
        evoTipStone: 'Evoluciona usando {0}.', evoTipLevel: 'Evoluciona en el nivel {0}.',
        mewReady: '¡Completaste la Pokédex! Un experto quiere mostrarte algo raro...', mewClaim: 'Recibir a Mew', mewClaimed: 'Mew ya fue recibido.',
        catPhysical: 'Físico', catSpecial: 'Especial', catStatus: 'Estado',
        levelCapMsg: '{0} no puede superar el Nivel {1} todavía (límite de dificultad).', diffTip: 'La dificultad también define el Level Cap, la Exp. Compartida y cuándo se revela la efectividad.',
        diffEasyD: 'Sin Level Cap · Exp. Compartida siempre activa · Efectividad siempre visible · Captura más tolerante.',
        diffNormalD: 'Level Cap con margen (+5 sobre el líder) · Exp. Compartida se vende en la tienda tras la 3ª medalla · Efectividad visible solo si el Pokémon ya fue visto.',
        diffHardD: 'Level Cap exacto del líder · Sin Exp. Compartida · Efectividad visible solo si el Pokémon ya fue capturado.',
        pickMoveForPP: 'Elige el movimiento para recuperar PP', ppRestored: '¡{0} recuperó PP!', ppFull: '{0} ya tiene el PP lleno.',
        fossilConfirm: '¡El fósil revivió en {0}!',
        learnPrompt: '¡{0} quiere aprender {1}! ¿Qué movimiento olvidar?', learnSkip: 'No aprender',
        moveNotLearned: '{0} no aprendió {1}.', continue2: 'Continuar', legendaryHere: '¡Algo poderoso: {0}!', boughtExpall: '¡Exp. Compartida comprada! Tu equipo ahora gana XP junto.',
        receivedGift: '¡Recibiste a {0}!', pickGift: 'Elige un regalo', giftHere: 'Regalo: {0}',
        items: 'Objetos', keyItems: 'Objetos Clave', noKeyItems: 'Aún no hay objetos clave.', sell: 'Vender', sellConfirm: '¿Vender {0} por ¥{1}?'
      }
    };
    function t(key, ...a) {
      let s = (STR[LANG] && STR[LANG][key]) || STR.pt[key] || key;
      a.forEach((v, i) => { s = s.split('{' + i + '}').join(v); });
      return s;
    }
    const bi = o => (typeof o === 'string' ? o : (o[LANG] || o.pt || o.en));


/* =========================================================================
   AUDIO & VFX ENGINE (Fire Red Style)
   ========================================================================= */
const AudioEngine = {
  bgm: null,
  bgmType: null,
  muted: false,
  setMuted(m) { this.muted = m; if(this.bgm) this.bgm.muted = m; },
  playBGM(type) {
    if(this.bgmType === type) return;
    if(this.bgm) { this.bgm.pause(); }
    this.bgmType = type;
    const tracks = {
      wild: 'https://play.pokemonshowdown.com/audio/hgss-johto-wild-battle.mp3',
      trainer: 'https://play.pokemonshowdown.com/audio/hgss-johto-trainer-battle.mp3',
      gym: 'https://play.pokemonshowdown.com/audio/hgss-johto-gym-battle.mp3',
      victory: 'https://play.pokemonshowdown.com/audio/hgss-victory-wild.mp3',
      evolution: 'https://play.pokemonshowdown.com/audio/evolution.mp3'
    };
    if(!tracks[type]) return;
    this.bgm = new Audio(tracks[type]);
    this.bgm.loop = (type !== 'victory');
    this.bgm.volume = 0.3;
    if(!this.muted) this.bgm.play().catch(e => console.warn('BGM blocked:', e));
  },
  stopBGM() {
    if(this.bgm) { this.bgm.pause(); this.bgm = null; this.bgmType = null; }
  },
  playCry(id) {
    if(this.muted) return;
    const cry = new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`);
    cry.volume = 0.5;
    cry.play().catch(e => console.warn('Cry blocked:', e));
  },
  playSFX(sfx) {
    if(this.muted) return;
    const urls = {
      hit: 'https://play.pokemonshowdown.com/audio/sfx/tackle.mp3',
      supereff: 'https://play.pokemonshowdown.com/audio/sfx/supereffective.mp3',
      noteff: 'https://play.pokemonshowdown.com/audio/sfx/notveryeffective.mp3',
      faint: 'https://play.pokemonshowdown.com/audio/sfx/faint.mp3',
      level: 'https://play.pokemonshowdown.com/audio/sfx/levelup.mp3',
      heal: 'https://play.pokemonshowdown.com/audio/sfx/heal.mp3',
      run: 'https://play.pokemonshowdown.com/audio/sfx/run.mp3'
    };
    if(!urls[sfx]) return;
    const a = new Audio(urls[sfx]);
    a.volume = 0.5;
    a.play().catch(e=>e);
  }
};

const VFXEngine = {
  animate(elId, animClass, duration, onEnd) {
    const el = document.getElementById(elId);
    if(!el) { if(onEnd) onEnd(); return; }
    el.classList.add(animClass);
    setTimeout(() => {
      el.classList.remove(animClass);
      if(onEnd) onEnd();
    }, duration);
  },
  shake(elId) { this.animate(elId, 'anim-shake', 300); },
  tackle(elId, isEnemy) { this.animate(elId, isEnemy ? 'anim-tackle-enemy' : 'anim-tackle', 300); },
  blink(elId) { this.animate(elId, 'anim-blink-once', 300); },
  faint(elId) { this.animate(elId, 'anim-faint', 800); }
};

    /* =========================================================================
       151 POKÉMON — nome | tipos | hp,atk,def,spa,spd,spe | evolui,nível | nome japonês
       evoluções por pedra ficam em STONE_EVO (sem nível)
       ========================================================================= */
    const RAW = [
      "Bulbasaur|grass,poison|45,49,49,65,65,45|2,16|Fushigidane",
      "Ivysaur|grass,poison|60,62,63,80,80,60|3,32|Fushigisou",
      "Venusaur|grass,poison|80,82,83,100,100,80||Fushigibana",
      "Charmander|fire|39,52,43,60,50,65|5,16|Hitokage",
      "Charmeleon|fire|58,64,58,80,65,80|6,36|Lizardo",
      "Charizard|fire,flying|78,84,78,109,85,100||Lizardon",
      "Squirtle|water|44,48,65,50,64,43|8,16|Zenigame",
      "Wartortle|water|59,63,80,65,80,58|9,36|Kameil",
      "Blastoise|water|79,83,100,85,105,78||Kamex",
      "Caterpie|bug|45,30,35,20,20,45|11,7|Caterpie",
      "Metapod|bug|50,20,55,25,25,30|12,10|Trancell",
      "Butterfree|bug,flying|60,45,50,90,80,70||Butterfree",
      "Weedle|bug,poison|40,35,30,20,20,50|14,7|Beedle",
      "Kakuna|bug,poison|45,25,50,25,25,35|15,10|Cocoon",
      "Beedrill|bug,poison|65,90,40,45,80,75||Spear",
      "Pidgey|normal,flying|40,45,40,35,35,56|17,18|Poppo",
      "Pidgeotto|normal,flying|63,60,55,50,50,71|18,36|Pigeon",
      "Pidgeot|normal,flying|83,80,75,70,70,101||Pigeot",
      "Rattata|normal|30,56,35,25,35,72|20,20|Koratta",
      "Raticate|normal|55,81,60,50,70,97||Ratta",
      "Spearow|normal,flying|40,60,30,31,31,70|22,20|Onisuzume",
      "Fearow|normal,flying|65,90,65,61,61,100||Onidrill",
      "Ekans|poison|35,60,44,40,54,55|24,22|Arbo",
      "Arbok|poison|60,95,69,65,79,80||Arbok",
      "Pikachu|electric|35,55,40,50,50,90||Pikachu",
      "Raichu|electric|60,90,55,90,80,110||Raichu",
      "Sandshrew|ground|50,75,85,20,30,40|28,22|Sand",
      "Sandslash|ground|75,100,110,45,55,65||Sandpan",
      "Nidoran♀|poison|55,47,52,40,40,41|30,16|Nidoran",
      "Nidorina|poison|70,62,67,55,55,56||Nidorina",
      "Nidoqueen|poison,ground|90,92,87,75,85,76||Nidoqueen",
      "Nidoran♂|poison|46,57,40,40,40,50|33,16|Nidoran",
      "Nidorino|poison|61,72,57,55,55,65||Nidorino",
      "Nidoking|poison,ground|81,102,77,85,75,85||Nidoking",
      "Clefairy|fairy|70,45,48,60,65,35||Pippi",
      "Clefable|fairy|95,70,73,95,90,60||Pixy",
      "Vulpix|fire|38,41,40,50,65,65||Rokon",
      "Ninetales|fire|73,76,75,81,100,100||Kyukon",
      "Jigglypuff|normal,fairy|115,45,20,45,25,20||Purin",
      "Wigglytuff|normal,fairy|140,70,45,85,50,45||Pukurin",
      "Zubat|poison,flying|40,45,35,30,40,55|42,22|Zubat",
      "Golbat|poison,flying|75,80,70,65,75,90||Golbat",
      "Oddish|grass,poison|45,50,55,75,65,30|44,21|Nazonokusa",
      "Gloom|grass,poison|60,65,70,85,75,40||Kusaihana",
      "Vileplume|grass,poison|75,80,85,110,90,50||Ruffresia",
      "Paras|bug,grass|35,70,55,45,55,25|47,24|Paras",
      "Parasect|bug,grass|60,95,80,60,80,30||Parasect",
      "Venonat|bug,poison|60,55,50,40,55,45|49,31|Kongpang",
      "Venomoth|bug,poison|70,65,60,90,75,90||Morphon",
      "Diglett|ground|10,55,25,35,45,95|51,26|Digda",
      "Dugtrio|ground|35,100,50,50,70,120||Dugtrio",
      "Meowth|normal|40,45,35,40,40,90|53,28|Nyarth",
      "Persian|normal|65,70,60,65,65,115||Persian",
      "Psyduck|water|50,52,48,65,50,55|55,33|Koduck",
      "Golduck|water|80,82,78,95,80,85||Golduck",
      "Mankey|fighting|40,80,35,35,45,70|57,28|Mankey",
      "Primeape|fighting|65,105,60,60,70,95||Okorizaru",
      "Growlithe|fire|55,70,45,70,50,60||Gardie",
      "Arcanine|fire|90,110,80,100,80,95||Windie",
      "Poliwag|water|40,50,40,40,40,90|61,25|Nyoromo",
      "Poliwhirl|water|65,65,65,50,50,90||Nyorozo",
      "Poliwrath|water,fighting|90,95,95,70,90,70||Nyorobon",
      "Abra|psychic|25,20,15,105,55,90|64,16|Casey",
      "Kadabra|psychic|40,35,30,120,70,105|65,37|Yungerer",
      "Alakazam|psychic|55,50,45,135,95,120||Foodin",
      "Machop|fighting|70,80,50,35,35,35|67,28|Wanriky",
      "Machoke|fighting|80,100,70,50,60,45|68,40|Goriky",
      "Machamp|fighting|90,130,80,65,85,55||Kairiky",
      "Bellsprout|grass,poison|50,75,35,70,30,40|70,21|Madatsubomi",
      "Weepinbell|grass,poison|65,90,50,85,45,55||Utsudon",
      "Victreebel|grass,poison|80,105,65,100,70,70||Utsubot",
      "Tentacool|water,poison|40,40,35,50,100,70|73,30|Menokurage",
      "Tentacruel|water,poison|80,70,65,80,120,100||Dokukurage",
      "Geodude|rock,ground|40,80,100,30,30,20|75,25|Isitsubute",
      "Graveler|rock,ground|55,95,115,45,45,35|76,40|Golone",
      "Golem|rock,ground|80,120,130,55,65,45||Golonya",
      "Ponyta|fire|50,85,55,65,65,90|78,40|Ponyta",
      "Rapidash|fire|65,100,70,80,80,105||Gallop",
      "Slowpoke|water,psychic|90,65,65,40,40,15|80,37|Yadon",
      "Slowbro|water,psychic|95,75,110,100,80,30||Yadoran",
      "Magnemite|electric,steel|25,35,70,95,55,45|82,30|Coil",
      "Magneton|electric,steel|50,60,95,120,70,70||Rarecoil",
      "Farfetch'd|normal,flying|52,90,55,58,62,60||Kamonegi",
      "Doduo|normal,flying|35,85,45,35,35,75|85,31|Dodo",
      "Dodrio|normal,flying|60,110,70,60,60,110||Dodorio",
      "Seel|water|65,45,55,45,70,45|87,34|Pawou",
      "Dewgong|water,ice|90,70,80,70,95,70||Jugon",
      "Grimer|poison|80,80,50,40,50,25|89,38|Betbeter",
      "Muk|poison|105,105,75,65,100,50||Betbeton",
      "Shellder|water|30,65,100,45,25,40||Shellder",
      "Cloyster|water,ice|50,95,180,85,45,70||Parshen",
      "Gastly|ghost,poison|30,35,30,100,35,80|93,25|Ghos",
      "Haunter|ghost,poison|45,50,45,115,55,95|94,40|Ghost",
      "Gengar|ghost,poison|60,65,60,130,75,110||Gengar",
      "Onix|rock,ground|35,45,160,30,45,70||Iwark",
      "Drowzee|psychic|60,48,45,43,90,42|97,26|Sleepe",
      "Hypno|psychic|85,73,70,73,115,67||Sleeper",
      "Krabby|water|30,105,90,25,25,50|99,28|Crab",
      "Kingler|water|55,130,115,50,50,75||Kingler",
      "Voltorb|electric|40,30,50,55,55,100|101,30|Biriridama",
      "Electrode|electric|60,50,70,80,80,150||Marumine",
      "Exeggcute|grass,psychic|60,40,80,60,45,40||Tamatama",
      "Exeggutor|grass,psychic|95,95,85,125,75,55||Nassy",
      "Cubone|ground|50,50,95,40,50,35|105,28|Karakara",
      "Marowak|ground|60,80,110,50,80,45||Garagara",
      "Hitmonlee|fighting|50,120,53,35,110,87||Sawamular",
      "Hitmonchan|fighting|50,105,79,35,110,76||Ebiwalar",
      "Lickitung|normal|90,55,75,60,75,30||Beroringa",
      "Koffing|poison|40,65,95,60,45,35|110,35|Dogars",
      "Weezing|poison|65,90,120,85,70,60||Matadogas",
      "Rhyhorn|ground,rock|80,85,95,30,30,25|112,42|Sihorn",
      "Rhydon|ground,rock|105,130,120,45,45,40||Sidon",
      "Chansey|normal|250,5,5,35,105,50||Lucky",
      "Tangela|grass|65,55,115,100,40,60||Monjara",
      "Kangaskhan|normal|105,95,80,40,80,90||Garura",
      "Horsea|water|30,40,70,70,25,60|117,32|Tattu",
      "Seadra|water|55,65,95,95,45,85||Seadra",
      "Goldeen|water|45,67,60,35,50,63|119,33|Tosakinto",
      "Seaking|water|80,92,65,65,80,68||Azumao",
      "Staryu|water|30,45,55,70,55,85||Hitodeman",
      "Starmie|water,psychic|60,75,85,100,85,115||Starmie",
      "Mr. Mime|psychic,fairy|40,45,65,100,120,90||Barrierd",
      "Scyther|bug,flying|70,110,80,55,80,105||Strike",
      "Jynx|ice,psychic|65,50,35,115,95,95||Rougela",
      "Electabuzz|electric|65,83,57,95,85,105||Eleboo",
      "Magmar|fire|65,95,57,100,85,93||Boober",
      "Pinsir|bug|65,125,100,55,70,85||Kailios",
      "Tauros|normal|75,100,95,40,70,110||Kentauros",
      "Magikarp|water|20,10,55,15,20,80|130,20|Koiking",
      "Gyarados|water,flying|95,125,79,60,100,81||Gyarados",
      "Lapras|water,ice|130,85,80,85,95,60||Laplace",
      "Ditto|normal|48,48,48,48,48,48||Metamon",
      "Eevee|normal|55,55,50,45,65,55||Eievui",
      "Vaporeon|water|130,65,60,110,95,65||Showers",
      "Jolteon|electric|65,65,60,110,95,130||Thunders",
      "Flareon|fire|65,130,60,95,110,65||Booster",
      "Porygon|normal|65,60,70,85,75,40||Porygon",
      "Omanyte|rock,water|35,40,100,90,55,35|139,40|Omnite",
      "Omastar|rock,water|70,60,125,115,70,55||Omstar",
      "Kabuto|rock,water|30,80,90,55,45,55|141,40|Kabuto",
      "Kabutops|rock,water|60,115,105,65,70,80||Kabutops",
      "Aerodactyl|rock,flying|80,105,65,60,75,130||Ptera",
      "Snorlax|normal|160,110,65,65,110,30||Kabigon",
      "Articuno|ice,flying|90,85,100,95,125,85||Freezer",
      "Zapdos|electric,flying|90,90,85,125,90,100||Thunder",
      "Moltres|fire,flying|90,100,90,125,85,90||Fire",
      "Dratini|dragon|41,64,45,50,50,50|148,30|Miniryu",
      "Dragonair|dragon|61,84,65,70,70,70|149,55|Hakuryu",
      "Dragonite|dragon,flying|91,134,95,100,100,80||Kairyu",
      "Mewtwo|psychic|106,110,90,154,90,130||Mewtwo",
      "Mew|psychic|100,100,100,100,100,100||Mew"
    ];
    const DEX = RAW.map((s, i) => {
      const p = s.split('|'), st = p[2].split(',').map(Number), ev = p[3] ? p[3].split(',').map(Number) : null;
      return {
        id: i + 1, name: p[0], ja: p[4] || p[0], types: p[1].split(','),
        base: { hp: st[0], atk: st[1], def: st[2], spa: st[3], spd: st[4], spe: st[5] },
        bst: st.reduce((a, b) => a + b, 0), evo: ev ? { to: ev[0], lv: ev[1] } : null
      };
    });
    /* nome exibido conforme PKLANG (PT e ES usam os nomes globais, iguais ao inglês) */
    function dexName(id) { const p = DEX[id - 1]; return PKLANG === 'ja' ? p.ja : p.name; }

    /* evoluções por pedra: id -> {pedra: idAlvo} */
    const TM_COMPAT = {"1":["toxic","giga-drain"],"2":["toxic","giga-drain"],"3":["earthquake","toxic","giga-drain"],"4":["toxic","fire-blast"],"5":["toxic","fire-blast"],"6":["earthquake","toxic","fire-blast"],"7":["toxic","water-pulse"],"8":["toxic","water-pulse"],"9":["earthquake","toxic","water-pulse"],"10":[],"11":[],"12":["toxic","giga-drain"],"13":[],"14":[],"15":["toxic","giga-drain"],"16":["toxic"],"17":["toxic"],"18":["toxic"],"19":["toxic","shock-wave"],"20":["toxic","shock-wave"],"21":["toxic"],"22":["toxic"],"23":["earthquake","toxic","giga-drain"],"24":["earthquake","toxic","giga-drain"],"25":["toxic","shock-wave"],"26":["toxic","shock-wave"],"27":["earthquake","toxic","rock-tomb"],"28":["earthquake","toxic","rock-tomb"],"29":["toxic","shock-wave","water-pulse"],"30":["toxic","shock-wave","water-pulse"],"31":["earthquake","toxic","fire-blast","rock-tomb","shock-wave","water-pulse"],"32":["toxic","shock-wave","water-pulse"],"33":["toxic","shock-wave","water-pulse"],"34":["earthquake","toxic","fire-blast","rock-tomb","shock-wave","water-pulse"],"35":["toxic","fire-blast","calm-mind","shock-wave","water-pulse"],"36":["toxic","fire-blast","calm-mind","shock-wave","water-pulse"],"37":["toxic","fire-blast"],"38":["toxic","fire-blast"],"39":["toxic","fire-blast","shock-wave","water-pulse"],"40":["toxic","fire-blast","shock-wave","water-pulse"],"41":["toxic","giga-drain"],"42":["toxic","giga-drain"],"43":["toxic","giga-drain"],"44":["toxic","giga-drain"],"45":["toxic","giga-drain"],"46":["toxic","giga-drain"],"47":["toxic","giga-drain"],"48":["toxic","giga-drain"],"49":["toxic","giga-drain"],"50":["earthquake","toxic","rock-tomb"],"51":["earthquake","toxic","rock-tomb"],"52":["toxic","shock-wave","water-pulse"],"53":["toxic","shock-wave","water-pulse"],"54":["toxic","calm-mind","water-pulse"],"55":["toxic","calm-mind","water-pulse"],"56":["earthquake","toxic","rock-tomb"],"57":["earthquake","toxic","rock-tomb"],"58":["toxic","fire-blast"],"59":["toxic","fire-blast"],"60":["toxic","water-pulse"],"61":["earthquake","toxic","water-pulse"],"62":["earthquake","toxic","rock-tomb","water-pulse"],"63":["toxic","calm-mind","shock-wave"],"64":["toxic","calm-mind","shock-wave"],"65":["toxic","calm-mind","shock-wave"],"66":["earthquake","toxic","fire-blast","rock-tomb"],"67":["earthquake","toxic","fire-blast","rock-tomb"],"68":["earthquake","toxic","fire-blast","rock-tomb"],"69":["toxic","giga-drain"],"70":["toxic","giga-drain"],"71":["toxic","giga-drain"],"72":["toxic","giga-drain","water-pulse"],"73":["toxic","giga-drain","water-pulse"],"74":["earthquake","toxic","fire-blast","rock-tomb"],"75":["earthquake","toxic","fire-blast","rock-tomb"],"76":["earthquake","toxic","fire-blast","rock-tomb"],"77":["toxic","fire-blast"],"78":["toxic","fire-blast"],"79":["earthquake","toxic","fire-blast","calm-mind","water-pulse"],"80":["earthquake","toxic","fire-blast","calm-mind","water-pulse"],"81":["toxic","shock-wave"],"82":["toxic","shock-wave"],"83":["toxic"],"84":["toxic"],"85":["toxic"],"86":["toxic","water-pulse"],"87":["toxic","water-pulse"],"88":["toxic","fire-blast","giga-drain","rock-tomb","shock-wave"],"89":["toxic","fire-blast","giga-drain","rock-tomb","shock-wave"],"90":["toxic","water-pulse"],"91":["toxic","water-pulse"],"92":["toxic","giga-drain"],"93":["toxic","giga-drain"],"94":["toxic","giga-drain"],"95":["earthquake","toxic","rock-tomb"],"96":["toxic","calm-mind"],"97":["toxic","calm-mind"],"98":["toxic","rock-tomb","water-pulse"],"99":["toxic","rock-tomb","water-pulse"],"100":["toxic","shock-wave"],"101":["toxic","shock-wave"],"102":["toxic","giga-drain"],"103":["toxic","giga-drain"],"104":["earthquake","toxic","fire-blast","rock-tomb"],"105":["earthquake","toxic","fire-blast","rock-tomb"],"106":["earthquake","toxic","rock-tomb"],"107":["earthquake","toxic","rock-tomb"],"108":["earthquake","toxic","fire-blast","rock-tomb","shock-wave","water-pulse"],"109":["toxic","fire-blast","shock-wave"],"110":["toxic","fire-blast","shock-wave"],"111":["earthquake","toxic","fire-blast","rock-tomb","shock-wave"],"112":["earthquake","toxic","fire-blast","rock-tomb","shock-wave"],"113":["earthquake","toxic","fire-blast","rock-tomb","calm-mind","shock-wave","water-pulse"],"114":["toxic","giga-drain"],"115":["earthquake","toxic","fire-blast","rock-tomb","shock-wave","water-pulse"],"116":["toxic","water-pulse"],"117":["toxic","water-pulse"],"118":["toxic","water-pulse"],"119":["toxic","water-pulse"],"120":["toxic","water-pulse"],"121":["toxic","water-pulse"],"122":["toxic","calm-mind","shock-wave"],"123":["toxic"],"124":["toxic","calm-mind","water-pulse"],"125":["toxic","shock-wave"],"126":["toxic","fire-blast"],"127":["earthquake","toxic","rock-tomb"],"128":["earthquake","toxic","fire-blast","rock-tomb","shock-wave","water-pulse"],"129":[],"130":["earthquake","toxic","fire-blast","water-pulse"],"131":["toxic","shock-wave","water-pulse"],"132":[],"133":["toxic"],"134":["toxic","water-pulse"],"135":["toxic","shock-wave"],"136":["toxic","fire-blast"],"137":["toxic","shock-wave"],"138":["toxic","rock-tomb","water-pulse"],"139":["toxic","rock-tomb","water-pulse"],"140":["toxic","giga-drain","rock-tomb","water-pulse"],"141":["toxic","giga-drain","rock-tomb","water-pulse"],"142":["earthquake","toxic","fire-blast","rock-tomb"],"143":["earthquake","toxic","fire-blast","rock-tomb","shock-wave","water-pulse"],"144":["toxic","water-pulse"],"145":["toxic","shock-wave"],"146":["toxic","fire-blast"],"147":["toxic","fire-blast","shock-wave","water-pulse"],"148":["toxic","fire-blast","shock-wave","water-pulse"],"149":["earthquake","toxic","fire-blast","rock-tomb","shock-wave","water-pulse"],"150":["earthquake","toxic","fire-blast","rock-tomb","calm-mind","shock-wave","water-pulse"],"151":["earthquake","toxic","fire-blast","giga-drain","rock-tomb","calm-mind","shock-wave","water-pulse"]};
    const STONE_EVO = {
      25: { thunder: 26 }, 30: { moon: 31 }, 33: { moon: 34 }, 35: { moon: 36 }, 37: { fire: 38 }, 39: { moon: 40 },
      44: { leaf: 45 }, 58: { fire: 59 }, 61: { water: 62 }, 70: { leaf: 71 }, 90: { water: 91 }, 102: { leaf: 103 },
      120: { water: 121 }, 133: { water: 134, thunder: 135, fire: 136 }
    };

    /* =========================================================================
       TIPOS
       ========================================================================= */
    const TCOLOR = {
      normal: '#9099a1', fire: '#e8703a', water: '#4a90d9', grass: '#5cb85c', electric: '#e8c33a',
      ice: '#66c7d8', fighting: '#c0392b', poison: '#9b59b6', ground: '#c9a24d', flying: '#7aa6e0',
      psychic: '#e0578a', bug: '#8bbf3a', rock: '#a8934f', ghost: '#6f5a9e', dragon: '#5a4fd6',
      dark: '#5a5048', steel: '#8a9aa8', fairy: '#e79bc4'
    };
    const TNAME = {
      pt: {
        normal: 'Normal', fire: 'Fogo', water: 'Água', grass: 'Planta', electric: 'Elétrico', ice: 'Gelo',
        fighting: 'Lutador', poison: 'Venenoso', ground: 'Terrestre', flying: 'Voador', psychic: 'Psíquico',
        bug: 'Inseto', rock: 'Pedra', ghost: 'Fantasma', dragon: 'Dragão', dark: 'Sombrio', steel: 'Aço', fairy: 'Fada'
      },
      en: {
        normal: 'Normal', fire: 'Fire', water: 'Water', grass: 'Grass', electric: 'Electric', ice: 'Ice',
        fighting: 'Fighting', poison: 'Poison', ground: 'Ground', flying: 'Flying', psychic: 'Psychic',
        bug: 'Bug', rock: 'Rock', ghost: 'Ghost', dragon: 'Dragon', dark: 'Dark', steel: 'Steel', fairy: 'Fairy'
      },
      es: {
        normal: 'Normal', fire: 'Fuego', water: 'Agua', grass: 'Planta', electric: 'Eléctrico', ice: 'Hielo',
        fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador', psychic: 'Psíquico',
        bug: 'Bicho', rock: 'Roca', ghost: 'Fantasma', dragon: 'Dragón', dark: 'Siniestro', steel: 'Acero', fairy: 'Hada'
      }
    };
    const TP = k => (TNAME[LANG] || TNAME.pt)[k];
    const TCHART = {
      normal: { rock: .5, ghost: 0, steel: .5 },
      fire: { fire: .5, water: .5, grass: 2, ice: 2, bug: 2, rock: .5, dragon: .5, steel: 2 },
      water: { fire: 2, water: .5, grass: .5, ground: 2, rock: 2, dragon: .5 },
      electric: { water: 2, electric: .5, grass: .5, ground: 0, flying: 2, dragon: .5 },
      grass: { fire: .5, water: 2, grass: .5, poison: .5, ground: 2, flying: .5, bug: .5, rock: 2, dragon: .5, steel: .5 },
      ice: { fire: .5, water: .5, grass: 2, ice: .5, ground: 2, flying: 2, dragon: 2, steel: .5 },
      fighting: { normal: 2, ice: 2, poison: .5, flying: .5, psychic: .5, bug: .5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: .5 },
      poison: { grass: 2, poison: .5, ground: .5, rock: .5, ghost: .5, steel: 0, fairy: 2 },
      ground: { fire: 2, electric: 2, grass: .5, poison: 2, flying: 0, bug: .5, rock: 2, steel: 2 },
      flying: { electric: .5, grass: 2, fighting: 2, bug: 2, rock: .5, steel: .5 },
      psychic: { fighting: 2, poison: 2, psychic: .5, dark: 0, steel: .5 },
      bug: { fire: .5, grass: 2, fighting: .5, poison: .5, flying: .5, psychic: 2, ghost: .5, dark: 2, steel: .5, fairy: .5 },
      rock: { fire: 2, ice: 2, fighting: .5, ground: .5, flying: 2, bug: 2, steel: .5 },
      ghost: { normal: 0, psychic: 2, ghost: 2, dark: .5 },
      dragon: { dragon: 2, steel: .5, fairy: 0 },
      dark: { fighting: .5, psychic: 2, ghost: 2, dark: .5, fairy: .5 },
      steel: { fire: .5, water: .5, electric: .5, ice: 2, rock: 2, steel: .5, fairy: 2 },
      fairy: { fire: .5, fighting: 2, poison: .5, dragon: 2, dark: 2, steel: .5 }
    };
    const ALLT = Object.keys(TCHART);
    function eff(a, dts) { let m = 1, r = TCHART[a] || {}; dts.forEach(x => { m *= (r[x] === undefined ? 1 : r[x]) }); return m; }

    /* =========================================================================
       GOLPES — [pt, en, es, ja, poder, precisão, cat, nível, efeito]
       ========================================================================= */
    
    const MV = [
      ['Chicote de Cipó', 'Vine Whip', 'Látigo Cepa', 'Tsuru no Muchi', 45, 100, 'e', 25],
      ['Investida', 'Tackle', 'Placaje', 'Taiatari', 40, 100, 'f', 35],
      ['Grunhido', 'Growl', 'Gruñido', 'Naki Goe', 0, 100, 's', 40],
      ['leech-seed', 'leech-seed', 'leech-seed', 'leech-seed', 0, 90, 's', 10],
      ['growth', 'growth', 'growth', 'growth', 0, 100, 's', 20],
      ['Folha Navalha', 'Razor Leaf', 'Hoja Afilada', 'Happa Cutter', 55, 95, 'e', 25],
      ['Raio Solar', 'Solar Beam', 'Rayo Solar', 'Solar Beam', 120, 100, 'e', 10],
      ['Pó Venenoso', 'Poison Powder', 'Polvo Veneno', 'Dokunoko', 0, 75, 's', 35],
      ['Pó do Sono', 'Sleep Powder', 'Somnífero', 'Nemurigona', 0, 75, 's', 15],
      ['sweet-scent', 'sweet-scent', 'sweet-scent', 'sweet-scent', 0, 100, 's', 20],
      ['synthesis', 'synthesis', 'synthesis', 'synthesis', 0, 100, 's', 5],
      ['Arranhada', 'Scratch', 'Arañazo', 'Hikkaku', 40, 100, 'f', 35],
      ['Brasa', 'Ember', 'Ascuas', 'Hinoko', 40, 100, 'e', 25],
      ['Lança-Chamas', 'Flamethrower', 'Lanzallamas', 'Kaenhousha', 90, 100, 'e', 15],
      ['dragon-rage', 'dragon-rage', 'dragon-rage', 'dragon-rage', 0, 100, 'e', 10],
      ['fire-spin', 'fire-spin', 'fire-spin', 'fire-spin', 35, 85, 'e', 15],
      ['smokescreen', 'smokescreen', 'smokescreen', 'smokescreen', 0, 100, 's', 20],
      ['slash', 'slash', 'slash', 'slash', 70, 100, 'f', 20],
      ['scary-face', 'scary-face', 'scary-face', 'scary-face', 0, 100, 's', 10],
      ['Garra de Metal', 'Metal Claw', 'Garra Metal', 'Metal Claw', 50, 95, 'f', 35],
      ['Ataque Aéreo', 'Wing Attack', 'Ataque Ala', 'Tsubasa de Utsu', 60, 100, 'f', 35],
      ['heat-wave', 'heat-wave', 'heat-wave', 'heat-wave', 95, 90, 'e', 10],
      ['Cauda Chicote', 'Tail Whip', 'Látigo Cola', 'Shippo wo Furu', 0, 100, 's', 30],
      ['Mordida', 'Bite', 'Mordisco', 'Kamitsuku', 60, 100, 'e', 25],
      ['water-gun', 'water-gun', 'water-gun', 'water-gun', 40, 100, 'e', 25],
      ['Hidro Bomba', 'Hydro Pump', 'Hidrobomba', 'Haipaa Poison', 110, 80, 'e', 5],
      ['withdraw', 'withdraw', 'withdraw', 'withdraw', 0, 100, 's', 40],
      ['skull-bash', 'skull-bash', 'skull-bash', 'skull-bash', 130, 100, 'f', 10],
      ['bubble', 'bubble', 'bubble', 'bubble', 40, 100, 'e', 30],
      ['protect', 'protect', 'protect', 'protect', 0, 100, 's', 10, { priority: 4 }],
      ['rapid-spin', 'rapid-spin', 'rapid-spin', 'rapid-spin', 50, 100, 'f', 40],
      ['rain-dance', 'rain-dance', 'rain-dance', 'rain-dance', 0, 100, 's', 5],
      ['string-shot', 'string-shot', 'string-shot', 'string-shot', 0, 95, 's', 40],
      ['harden', 'harden', 'harden', 'harden', 0, 100, 's', 30],
      ['Rajada de Vento', 'Gust', 'Tornado', 'Kazeokoshi', 40, 100, 'f', 35],
      ['whirlwind', 'whirlwind', 'whirlwind', 'whirlwind', 0, 100, 's', 20],
      ['supersonic', 'supersonic', 'supersonic', 'supersonic', 0, 55, 's', 20],
      ['Psicoraio', 'Psybeam', 'Psicorrayo', 'Psycho Kousen', 65, 100, 'e', 20],
      ['stun-spore', 'stun-spore', 'stun-spore', 'stun-spore', 0, 75, 's', 30],
      ['Confusão', 'Confusion', 'Confusión', 'Nenriki', 50, 100, 'e', 25],
      ['safeguard', 'safeguard', 'safeguard', 'safeguard', 0, 100, 's', 25],
      ['silver-wind', 'silver-wind', 'silver-wind', 'silver-wind', 60, 100, 'f', 5],
      ['Picada Venenosa', 'Poison Sting', 'Picotazo Veneno', 'Dokubari', 15, 100, 'f', 35],
      ['fury-attack', 'fury-attack', 'fury-attack', 'fury-attack', 15, 85, 'f', 20],
      ['twineedle', 'twineedle', 'twineedle', 'twineedle', 25, 100, 'f', 20],
      ['pin-missile', 'pin-missile', 'pin-missile', 'pin-missile', 25, 95, 'f', 20],
      ['agility', 'agility', 'agility', 'agility', 0, 100, 's', 30],
      ['rage', 'rage', 'rage', 'rage', 20, 100, 'f', 20],
      ['focus-energy', 'focus-energy', 'focus-energy', 'focus-energy', 0, 100, 's', 30],
      ['Perseguição', 'Pursuit', 'Persecución', 'Oiuchi', 40, 100, 'e', 20],
      ['endeavor', 'endeavor', 'endeavor', 'endeavor', 0, 100, 'f', 5],
      ['sand-attack', 'sand-attack', 'sand-attack', 'sand-attack', 0, 100, 's', 15],
      ['Ataque Rápido', 'Quick Attack', 'Ataque Rápido', 'Denkousekka', 40, 100, 'f', 30, { priority: 1 }],
      ['mirror-move', 'mirror-move', 'mirror-move', 'mirror-move', 0, 100, 's', 20],
      ['feather-dance', 'feather-dance', 'feather-dance', 'feather-dance', 0, 100, 's', 15],
      ['hyper-fang', 'hyper-fang', 'hyper-fang', 'hyper-fang', 80, 90, 'f', 15],
      ['super-fang', 'super-fang', 'super-fang', 'super-fang', 0, 90, 'f', 10],
      ['leer', 'leer', 'leer', 'leer', 0, 100, 's', 30],
      ['peck', 'peck', 'peck', 'peck', 35, 100, 'f', 35],
      ['Bico Perfurante', 'Drill Peck', 'Pico Taladro', 'Drill Kuchibashi', 80, 100, 'f', 20],
      ['aerial-ace', 'aerial-ace', 'aerial-ace', 'aerial-ace', 60, 100, 'f', 20],
      ['wrap', 'wrap', 'wrap', 'wrap', 15, 90, 'f', 20],
      ['Ácido', 'Acid', 'Ácido', 'Yousekai', 40, 100, 'f', 30],
      ['screech', 'screech', 'screech', 'screech', 0, 85, 's', 40],
      ['haze', 'haze', 'haze', 'haze', 0, 100, 's', 30],
      ['glare', 'glare', 'glare', 'glare', 0, 100, 's', 30],
      ['stockpile', 'stockpile', 'stockpile', 'stockpile', 0, 100, 's', 20],
      ['spit-up', 'spit-up', 'spit-up', 'spit-up', 0, 100, 'f', 10],
      ['swallow', 'swallow', 'swallow', 'swallow', 0, 100, 's', 10],
      ['slam', 'slam', 'slam', 'slam', 80, 75, 'f', 20],
      ['Choque do Trovão', 'Thunder Shock', 'Impactrueno', 'Denkishock', 40, 100, 'e', 30],
      ['Trovoada', 'Thunderbolt', 'Rayo', '10manboruto', 90, 100, 'e', 15],
      ['Onda de Trovão', 'Thunder Wave', 'Onda Trueno', 'Denjiha', 0, 90, 's', 20],
      ['Trovão', 'Thunder', 'Trueno', 'Kaminari', 110, 70, 'e', 10],
      ['double-team', 'double-team', 'double-team', 'double-team', 0, 100, 's', 15],
      ['light-screen', 'light-screen', 'light-screen', 'light-screen', 0, 100, 's', 30],
      ['defense-curl', 'defense-curl', 'defense-curl', 'defense-curl', 0, 100, 's', 40],
      ['swift', 'swift', 'swift', 'swift', 60, 100, 'f', 20],
      ['Arranhão Fúria', 'Fury Swipes', 'Golpes Furia', 'Midare Hikkaki', 18, 80, 'f', 15],
      ['sandstorm', 'sandstorm', 'sandstorm', 'sandstorm', 0, 100, 's', 10],
      ['sand-tomb', 'sand-tomb', 'sand-tomb', 'sand-tomb', 35, 85, 'f', 15],
      ['double-kick', 'double-kick', 'double-kick', 'double-kick', 30, 100, 'f', 30],
      ['crunch', 'crunch', 'crunch', 'crunch', 80, 100, 'e', 15],
      ['flatter', 'flatter', 'flatter', 'flatter', 0, 100, 's', 15],
      ['helping-hand', 'helping-hand', 'helping-hand', 'helping-hand', 0, 100, 's', 20, { priority: 5 }],
      ['body-slam', 'body-slam', 'body-slam', 'body-slam', 85, 100, 'f', 15],
      ['superpower', 'superpower', 'superpower', 'superpower', 120, 100, 'f', 5],
      ['horn-attack', 'horn-attack', 'horn-attack', 'horn-attack', 65, 100, 'f', 25],
      ['horn-drill', 'horn-drill', 'horn-drill', 'horn-drill', 0, 30, 'f', 5],
      ['thrash', 'thrash', 'thrash', 'thrash', 120, 100, 'f', 10],
      ['megahorn', 'megahorn', 'megahorn', 'megahorn', 120, 85, 'f', 10],
      ['pound', 'pound', 'pound', 'pound', 40, 100, 'f', 35],
      ['double-slap', 'double-slap', 'double-slap', 'double-slap', 15, 85, 'f', 10],
      ['sing', 'sing', 'sing', 'sing', 0, 55, 's', 15],
      ['minimize', 'minimize', 'minimize', 'minimize', 0, 100, 's', 10],
      ['metronome', 'metronome', 'metronome', 'metronome', 0, 100, 's', 10],
      ['encore', 'encore', 'encore', 'encore', 0, 100, 's', 5],
      ['moonlight', 'moonlight', 'moonlight', 'moonlight', 0, 100, 's', 5],
      ['follow-me', 'follow-me', 'follow-me', 'follow-me', 0, 100, 's', 20, { priority: 2 }],
      ['meteor-mash', 'meteor-mash', 'meteor-mash', 'meteor-mash', 90, 90, 'f', 10],
      ['cosmic-power', 'cosmic-power', 'cosmic-power', 'cosmic-power', 0, 100, 's', 20],
      ['roar', 'roar', 'roar', 'roar', 0, 100, 's', 20],
      ['confuse-ray', 'confuse-ray', 'confuse-ray', 'confuse-ray', 0, 100, 's', 10],
      ['will-o-wisp', 'will-o-wisp', 'will-o-wisp', 'will-o-wisp', 0, 85, 's', 15],
      ['imprison', 'imprison', 'imprison', 'imprison', 0, 100, 's', 10],
      ['grudge', 'grudge', 'grudge', 'grudge', 0, 100, 's', 5],
      ['double-edge', 'double-edge', 'double-edge', 'double-edge', 120, 100, 'f', 15],
      ['disable', 'disable', 'disable', 'disable', 0, 100, 's', 20],
      ['mimic', 'mimic', 'mimic', 'mimic', 0, 100, 's', 10],
      ['rest', 'rest', 'rest', 'rest', 0, 100, 's', 5],
      ['rollout', 'rollout', 'rollout', 'rollout', 30, 90, 'f', 20],
      ['hyper-voice', 'hyper-voice', 'hyper-voice', 'hyper-voice', 90, 100, 'f', 10],
      ['leech-life', 'leech-life', 'leech-life', 'leech-life', 80, 100, 'f', 10],
      ['mean-look', 'mean-look', 'mean-look', 'mean-look', 0, 100, 's', 5],
      ['poison-fang', 'poison-fang', 'poison-fang', 'poison-fang', 50, 100, 'f', 15],
      ['astonish', 'astonish', 'astonish', 'astonish', 30, 100, 'f', 15],
      ['air-cutter', 'air-cutter', 'air-cutter', 'air-cutter', 60, 95, 'f', 25],
      ['absorb', 'absorb', 'absorb', 'absorb', 20, 100, 'e', 25],
      ['petal-dance', 'petal-dance', 'petal-dance', 'petal-dance', 120, 100, 'e', 10],
      ['mega-drain', 'mega-drain', 'mega-drain', 'mega-drain', 40, 100, 'e', 15],
      ['aromatherapy', 'aromatherapy', 'aromatherapy', 'aromatherapy', 0, 100, 's', 5],
      ['spore', 'spore', 'spore', 'spore', 0, 100, 's', 15],
      ['giga-drain', 'giga-drain', 'giga-drain', 'giga-drain', 75, 100, 'e', 10],
      ['Psíquico', 'Psychic', 'Psíquico', 'Psycho Kinesis', 90, 100, 'e', 10],
      ['foresight', 'foresight', 'foresight', 'foresight', 0, 100, 's', 40],
      ['Terremoto', 'Earthquake', 'Terremoto', 'Jishin', 100, 100, 'f', 10],
      ['fissure', 'fissure', 'fissure', 'fissure', 0, 30, 'f', 5],
      ['dig', 'dig', 'dig', 'dig', 80, 100, 'f', 10],
      ['mud-slap', 'mud-slap', 'mud-slap', 'mud-slap', 20, 100, 'f', 10],
      ['magnitude', 'magnitude', 'magnitude', 'magnitude', 0, 100, 'f', 30],
      ['tri-attack', 'tri-attack', 'tri-attack', 'tri-attack', 80, 100, 'f', 10],
      ['pay-day', 'pay-day', 'pay-day', 'pay-day', 40, 100, 'f', 20],
      ['feint-attack', 'feint-attack', 'feint-attack', 'feint-attack', 60, 100, 'e', 20],
      ['swagger', 'swagger', 'swagger', 'swagger', 0, 85, 's', 15],
      ['fake-out', 'fake-out', 'fake-out', 'fake-out', 40, 100, 'f', 10, { priority: 3 }],
      ['psych-up', 'psych-up', 'psych-up', 'psych-up', 0, 100, 's', 10],
      ['water-sport', 'water-sport', 'water-sport', 'water-sport', 0, 100, 's', 15],
      ['Caratê', 'Karate Chop', 'Golpe Kárate', 'Karate Chop', 50, 100, 'f', 25],
      ['Chute Baixo', 'Low Kick', 'Patada Baja', 'Kawarawari', 0, 100, 'f', 20],
      ['seismic-toss', 'seismic-toss', 'seismic-toss', 'seismic-toss', 0, 100, 'f', 20],
      ['cross-chop', 'cross-chop', 'cross-chop', 'cross-chop', 100, 80, 'f', 5],
      ['take-down', 'take-down', 'take-down', 'take-down', 90, 85, 'f', 20],
      ['flame-wheel', 'flame-wheel', 'flame-wheel', 'flame-wheel', 60, 100, 'e', 25],
      ['odor-sleuth', 'odor-sleuth', 'odor-sleuth', 'odor-sleuth', 0, 100, 's', 40],
      ['extreme-speed', 'extreme-speed', 'extreme-speed', 'extreme-speed', 80, 100, 'f', 5, { priority: 2 }],
      ['Hipnose', 'Hypnosis', 'Hipnosis', 'Saiminjutsu', 0, 60, 's', 20],
      ['belly-drum', 'belly-drum', 'belly-drum', 'belly-drum', 0, 100, 's', 10],
      ['submission', 'submission', 'submission', 'submission', 80, 80, 'f', 20],
      ['mind-reader', 'mind-reader', 'mind-reader', 'mind-reader', 0, 100, 's', 5],
      ['teleport', 'teleport', 'teleport', 'teleport', 0, 100, 's', 20],
      ['recover', 'recover', 'recover', 'recover', 0, 100, 's', 5],
      ['reflect', 'reflect', 'reflect', 'reflect', 0, 100, 's', 20],
      ['kinesis', 'kinesis', 'kinesis', 'kinesis', 0, 80, 's', 15],
      ['future-sight', 'future-sight', 'future-sight', 'future-sight', 120, 100, 'e', 10],
      ['trick', 'trick', 'trick', 'trick', 0, 100, 's', 10],
      ['role-play', 'role-play', 'role-play', 'role-play', 0, 100, 's', 10],
      ['calm-mind', 'calm-mind', 'calm-mind', 'calm-mind', 0, 100, 's', 20],
      ['dynamic-punch', 'dynamic-punch', 'dynamic-punch', 'dynamic-punch', 100, 50, 'f', 5],
      ['vital-throw', 'vital-throw', 'vital-throw', 'vital-throw', 70, 100, 'f', 10],
      ['revenge', 'revenge', 'revenge', 'revenge', 60, 100, 'f', 10],
      ['Bolha Explosiva', 'Bubble Beam', 'Rayo Burbuja', 'Awa', 65, 100, 'e', 20],
      ['barrier', 'barrier', 'barrier', 'barrier', 0, 100, 's', 20],
      ['constrict', 'constrict', 'constrict', 'constrict', 10, 100, 'f', 35],
      ['Jogada de Pedra', 'Rock Throw', 'Lanzarrocas', 'Iwaotoshi', 50, 90, 'f', 15],
      ['self-destruct', 'self-destruct', 'self-destruct', 'self-destruct', 200, 100, 'f', 5],
      ['explosion', 'explosion', 'explosion', 'explosion', 250, 100, 'f', 5],
      ['mud-sport', 'mud-sport', 'mud-sport', 'mud-sport', 0, 100, 's', 15],
      ['rock-blast', 'rock-blast', 'rock-blast', 'rock-blast', 25, 90, 'f', 10],
      ['stomp', 'stomp', 'stomp', 'stomp', 65, 100, 'f', 20],
      ['Explosão de Fogo', 'Fire Blast', 'Llamarada', 'Daimonji', 110, 85, 'e', 5],
      ['bounce', 'bounce', 'bounce', 'bounce', 85, 85, 'f', 5],
      ['Cabeçada', 'Headbutt', 'Golpe Cabeza', 'Zutsuki', 70, 100, 'f', 15],
      ['amnesia', 'amnesia', 'amnesia', 'amnesia', 0, 100, 's', 20],
      ['curse', 'curse', 'curse', 'curse', 0, 100, 's', 10],
      ['yawn', 'yawn', 'yawn', 'yawn', 0, 100, 's', 10],
      ['sonic-boom', 'sonic-boom', 'sonic-boom', 'sonic-boom', 0, 90, 'f', 20],
      ['zap-cannon', 'zap-cannon', 'zap-cannon', 'zap-cannon', 120, 50, 'e', 5],
      ['lock-on', 'lock-on', 'lock-on', 'lock-on', 0, 100, 's', 5],
      ['Faísca', 'Spark', 'Chispa', 'Spark', 65, 100, 'e', 20],
      ['metal-sound', 'metal-sound', 'metal-sound', 'metal-sound', 0, 85, 's', 40],
      ['Dança da Espada', 'Swords Dance', 'Danza Espada', 'Tsurugi no Mai', 0, 100, 's', 20],
      ['false-swipe', 'false-swipe', 'false-swipe', 'false-swipe', 40, 100, 'f', 40],
      ['fury-cutter', 'fury-cutter', 'fury-cutter', 'fury-cutter', 40, 95, 'f', 20],
      ['knock-off', 'knock-off', 'knock-off', 'knock-off', 65, 100, 'e', 20],
      ['uproar', 'uproar', 'uproar', 'uproar', 90, 100, 'f', 10],
      ['Raio de Gelo', 'Ice Beam', 'Rayo Hielo', 'Reitou Beam', 90, 100, 'e', 10],
      ['aurora-beam', 'aurora-beam', 'aurora-beam', 'aurora-beam', 65, 100, 'e', 20],
      ['Vento Gelado', 'Icy Wind', 'Viento Hielo', 'Koori no Kaze', 55, 95, 'e', 15],
      ['signal-beam', 'signal-beam', 'signal-beam', 'signal-beam', 75, 100, 'f', 15],
      ['sheer-cold', 'sheer-cold', 'sheer-cold', 'sheer-cold', 0, 30, 'e', 5],
      ['sludge', 'sludge', 'sludge', 'sludge', 65, 100, 'f', 20],
      ['poison-gas', 'poison-gas', 'poison-gas', 'poison-gas', 0, 90, 's', 40],
      ['acid-armor', 'acid-armor', 'acid-armor', 'acid-armor', 0, 100, 's', 20],
      ['Bomba de Lodo', 'Sludge Bomb', 'Bomba Lodo', 'Headoro Bakudan', 90, 100, 'f', 10],
      ['memento', 'memento', 'memento', 'memento', 0, 100, 's', 10],
      ['clamp', 'clamp', 'clamp', 'clamp', 35, 85, 'e', 15],
      ['icicle-spear', 'icicle-spear', 'icicle-spear', 'icicle-spear', 25, 100, 'e', 30],
      ['spike-cannon', 'spike-cannon', 'spike-cannon', 'spike-cannon', 20, 100, 'f', 15],
      ['spikes', 'spikes', 'spikes', 'spikes', 0, 100, 's', 20],
      ['night-shade', 'night-shade', 'night-shade', 'night-shade', 0, 100, 'f', 15],
      ['Lambida', 'Lick', 'Lengüetazo', 'Shitade Nameru', 30, 100, 'f', 30],
      ['dream-eater', 'dream-eater', 'dream-eater', 'dream-eater', 100, 100, 'e', 15],
      ['nightmare', 'nightmare', 'nightmare', 'nightmare', 0, 100, 's', 15],
      ['spite', 'spite', 'spite', 'spite', 0, 100, 's', 10],
      ['destiny-bond', 'destiny-bond', 'destiny-bond', 'destiny-bond', 0, 100, 's', 5],
      ['Bola Sombria', 'Shadow Ball', 'Bola Sombra', 'Shadow Ball', 80, 100, 'f', 15],
      ['shadow-punch', 'shadow-punch', 'shadow-punch', 'shadow-punch', 60, 100, 'f', 20],
      ['bind', 'bind', 'bind', 'bind', 15, 85, 'f', 20],
      ['Sopro do Dragão', 'Dragon Breath', 'Dragoaliento', 'Ryuu no Ibuki', 60, 100, 'e', 20],
      ['iron-tail', 'iron-tail', 'iron-tail', 'iron-tail', 100, 75, 'f', 15],
      ['meditate', 'meditate', 'meditate', 'meditate', 0, 100, 's', 40],
      ['vice-grip', 'vice-grip', 'vice-grip', 'vice-grip', 55, 100, 'f', 30],
      ['guillotine', 'guillotine', 'guillotine', 'guillotine', 0, 30, 'f', 5],
      ['crabhammer', 'crabhammer', 'crabhammer', 'crabhammer', 100, 90, 'e', 10],
      ['flail', 'flail', 'flail', 'flail', 0, 100, 'f', 15],
      ['mud-shot', 'mud-shot', 'mud-shot', 'mud-shot', 55, 95, 'f', 15],
      ['mirror-coat', 'mirror-coat', 'mirror-coat', 'mirror-coat', 0, 100, 'e', 20],
      ['charge', 'charge', 'charge', 'charge', 0, 100, 's', 20],
      ['barrage', 'barrage', 'barrage', 'barrage', 15, 85, 'f', 20],
      ['egg-bomb', 'egg-bomb', 'egg-bomb', 'egg-bomb', 100, 75, 'f', 10],
      ['Golpe de Ossos', 'Bone Club', 'Hueso Palo', 'Hone Konbou', 65, 85, 'f', 20],
      ['bonemerang', 'bonemerang', 'bonemerang', 'bonemerang', 50, 90, 'f', 10],
      ['bone-rush', 'bone-rush', 'bone-rush', 'bone-rush', 25, 90, 'f', 10],
      ['mega-kick', 'mega-kick', 'mega-kick', 'mega-kick', 120, 75, 'f', 5],
      ['jump-kick', 'jump-kick', 'jump-kick', 'jump-kick', 100, 95, 'f', 10],
      ['rolling-kick', 'rolling-kick', 'rolling-kick', 'rolling-kick', 60, 85, 'f', 15],
      ['Chute Giratório', 'High Jump Kick', 'Patada Salto Alta', 'Tobihiza Geri', 130, 90, 'f', 10],
      ['reversal', 'reversal', 'reversal', 'reversal', 0, 100, 'f', 15],
      ['endure', 'endure', 'endure', 'endure', 0, 100, 's', 10, { priority: 4 }],
      ['Golpe de Tijolo', 'Brick Break', 'Demolición', 'Kawarawari', 75, 100, 'f', 15],
      ['comet-punch', 'comet-punch', 'comet-punch', 'comet-punch', 18, 85, 'f', 15],
      ['mega-punch', 'mega-punch', 'mega-punch', 'mega-punch', 80, 85, 'f', 20],
      ['fire-punch', 'fire-punch', 'fire-punch', 'fire-punch', 75, 100, 'e', 15],
      ['ice-punch', 'ice-punch', 'ice-punch', 'ice-punch', 75, 100, 'e', 15],
      ['thunder-punch', 'thunder-punch', 'thunder-punch', 'thunder-punch', 75, 100, 'e', 15],
      ['counter', 'counter', 'counter', 'counter', 0, 100, 'f', 20],
      ['mach-punch', 'mach-punch', 'mach-punch', 'mach-punch', 40, 100, 'f', 30, { priority: 1 }],
      ['detect', 'detect', 'detect', 'detect', 0, 100, 's', 5, { priority: 4 }],
      ['sky-uppercut', 'sky-uppercut', 'sky-uppercut', 'sky-uppercut', 85, 90, 'f', 15],
      ['refresh', 'refresh', 'refresh', 'refresh', 0, 100, 's', 20],
      ['smog', 'smog', 'smog', 'smog', 30, 70, 'f', 20],
      ['soft-boiled', 'soft-boiled', 'soft-boiled', 'soft-boiled', 0, 100, 's', 5],
      ['ingrain', 'ingrain', 'ingrain', 'ingrain', 0, 100, 's', 20],
      ['tickle', 'tickle', 'tickle', 'tickle', 0, 100, 's', 20],
      ['dizzy-punch', 'dizzy-punch', 'dizzy-punch', 'dizzy-punch', 70, 100, 'f', 10],
      ['twister', 'twister', 'twister', 'twister', 40, 100, 'e', 20],
      ['dragon-dance', 'dragon-dance', 'dragon-dance', 'dragon-dance', 0, 100, 's', 20],
      ['waterfall', 'waterfall', 'waterfall', 'waterfall', 80, 100, 'e', 15],
      ['camouflage', 'camouflage', 'camouflage', 'camouflage', 0, 100, 's', 20],
      ['substitute', 'substitute', 'substitute', 'substitute', 0, 100, 's', 10],
      ['baton-pass', 'baton-pass', 'baton-pass', 'baton-pass', 0, 100, 's', 40],
      ['recycle', 'recycle', 'recycle', 'recycle', 0, 100, 's', 10],
      ['magical-leaf', 'magical-leaf', 'magical-leaf', 'magical-leaf', 60, 100, 'e', 20],
      ['Nevasca', 'Blizzard', 'Ventisca', 'Fubuki', 110, 70, 'e', 5],
      ['lovely-kiss', 'lovely-kiss', 'lovely-kiss', 'lovely-kiss', 0, 75, 's', 10],
      ['powder-snow', 'powder-snow', 'powder-snow', 'powder-snow', 40, 100, 'e', 25],
      ['perish-song', 'perish-song', 'perish-song', 'perish-song', 0, 100, 's', 5],
      ['fake-tears', 'fake-tears', 'fake-tears', 'fake-tears', 0, 100, 's', 20],
      ['sunny-day', 'sunny-day', 'sunny-day', 'sunny-day', 0, 100, 's', 5],
      ['splash', 'splash', 'splash', 'splash', 0, 100, 's', 40],
      ['Hiper Raio', 'Hyper Beam', 'Hiperrayo', 'Hakai Kousen', 150, 90, 'f', 5],
      ['mist', 'mist', 'mist', 'mist', 0, 100, 's', 30],
      ['transform', 'transform', 'transform', 'transform', 0, 100, 's', 10],
      ['sharpen', 'sharpen', 'sharpen', 'sharpen', 0, 100, 's', 30],
      ['conversion', 'conversion', 'conversion', 'conversion', 0, 100, 's', 30],
      ['conversion-2', 'conversion-2', 'conversion-2', 'conversion-2', 0, 100, 's', 30],
      ['ancient-power', 'ancient-power', 'ancient-power', 'ancient-power', 60, 100, 'f', 5],
      ['snore', 'snore', 'snore', 'snore', 50, 100, 'f', 15],
      ['sleep-talk', 'sleep-talk', 'sleep-talk', 'sleep-talk', 0, 100, 's', 10],
      ['block', 'block', 'block', 'block', 0, 100, 's', 5],
      ['covet', 'covet', 'covet', 'covet', 60, 100, 'f', 25],
      ['sky-attack', 'sky-attack', 'sky-attack', 'sky-attack', 140, 90, 'f', 5],
      ['outrage', 'outrage', 'outrage', 'outrage', 120, 100, 'e', 10]
    ];
    const LEARNSET_OVERRIDE = {
      1: [[1, 1], [2, 4], [3, 7], [0, 10], [7, 15], [8, 15], [5, 20], [9, 25], [4, 32], [10, 39], [6, 46]],
      2: [[1, 1], [2, 1], [3, 1], [0, 10], [7, 15], [8, 15], [5, 22], [9, 29], [4, 38], [10, 47], [6, 56]],
      3: [[0, 1], [1, 1], [2, 1], [3, 1], [7, 15], [8, 15], [5, 22], [9, 29], [4, 41], [10, 53], [6, 65]],
      4: [[11, 1], [2, 1], [12, 7], [19, 13], [16, 19], [18, 25], [13, 31], [17, 37], [14, 43], [15, 49]],
      5: [[11, 1], [2, 1], [12, 1], [19, 13], [16, 20], [18, 27], [13, 34], [17, 41], [14, 48], [15, 55]],
      6: [[11, 1], [2, 1], [12, 1], [19, 1], [21, 1], [16, 20], [18, 27], [13, 34], [20, 36], [17, 44], [14, 54], [15, 64]],
      7: [[1, 1], [22, 4], [28, 7], [26, 10], [24, 13], [23, 18], [30, 23], [29, 28], [31, 33], [27, 40], [25, 47]],
      8: [[1, 1], [22, 1], [28, 1], [26, 10], [24, 13], [23, 19], [30, 25], [29, 31], [31, 37], [27, 45], [25, 53]],
      9: [[1, 1], [22, 1], [26, 1], [28, 1], [24, 13], [23, 19], [30, 25], [29, 31], [31, 42], [27, 55], [25, 68]],
      10: [[1, 1], [32, 1]],
      11: [[33, 1]],
      12: [[39, 1], [7, 13], [38, 14], [8, 15], [36, 18], [35, 23], [34, 28], [37, 34], [40, 40], [41, 47]],
      13: [[42, 1], [32, 1]],
      14: [[33, 1]],
      15: [[43, 1], [48, 15], [44, 20], [47, 25], [49, 30], [45, 35], [46, 40], [50, 45]],
      16: [[1, 1], [51, 5], [34, 9], [52, 13], [35, 19], [20, 25], [54, 31], [46, 39], [53, 47]],
      17: [[34, 1], [51, 1], [1, 1], [52, 13], [35, 20], [20, 27], [54, 34], [46, 43], [53, 52]],
      18: [[34, 1], [51, 1], [1, 1], [52, 1], [35, 20], [20, 27], [54, 34], [46, 48], [53, 62]],
      19: [[1, 1], [22, 1], [52, 7], [55, 13], [48, 20], [49, 27], [56, 34], [50, 41]],
      20: [[1, 1], [22, 1], [52, 1], [55, 13], [18, 20], [49, 30], [56, 40], [50, 50]],
      21: [[2, 1], [58, 1], [57, 7], [43, 13], [49, 19], [60, 25], [53, 31], [59, 37], [46, 43]],
      22: [[43, 1], [57, 1], [2, 1], [58, 1], [49, 26], [53, 32], [59, 40], [46, 47]],
      23: [[61, 1], [57, 1], [42, 8], [23, 13], [65, 20], [63, 25], [62, 32], [66, 37], [67, 37], [68, 37], [64, 44]],
      24: [[61, 1], [42, 1], [57, 1], [23, 1], [65, 20], [63, 28], [62, 38], [66, 46], [67, 46], [68, 46], [64, 56]],
      25: [[2, 1], [70, 1], [22, 6], [72, 8], [52, 11], [74, 15], [69, 20], [71, 26], [46, 33], [73, 41], [75, 50]],
      26: [[22, 1], [70, 1], [71, 1], [52, 1]],
      27: [[11, 1], [76, 6], [51, 11], [42, 17], [17, 23], [77, 30], [78, 37], [80, 45], [79, 53]],
      28: [[11, 1], [51, 1], [76, 1], [42, 17], [17, 24], [77, 33], [78, 42], [80, 52], [79, 62]],
      29: [[11, 1], [2, 1], [22, 8], [81, 12], [42, 17], [23, 20], [84, 23], [78, 30], [83, 38], [82, 47]],
      30: [[11, 1], [2, 1], [22, 8], [81, 12], [42, 18], [23, 22], [84, 26], [78, 34], [83, 43], [82, 53]],
      31: [[11, 1], [81, 1], [22, 1], [42, 1], [85, 22], [86, 43]],
      32: [[57, 1], [58, 1], [48, 8], [81, 12], [42, 17], [87, 20], [84, 23], [43, 30], [83, 38], [88, 47]],
      33: [[57, 1], [58, 1], [48, 8], [81, 12], [42, 18], [87, 22], [84, 26], [43, 34], [83, 43], [88, 53]],
      34: [[81, 1], [42, 1], [58, 1], [48, 1], [89, 22], [90, 43]],
      35: [[91, 1], [2, 1], [96, 5], [93, 9], [92, 13], [98, 17], [94, 21], [76, 25], [95, 29], [100, 33], [97, 37], [75, 41], [99, 45]],
      36: [[92, 1], [93, 1], [94, 1], [95, 1]],
      37: [[12, 1], [22, 5], [101, 9], [52, 13], [103, 17], [102, 21], [104, 25], [13, 29], [40, 33], [105, 37], [15, 41]],
      38: [[12, 1], [52, 1], [102, 1], [40, 1], [15, 45]],
      39: [[93, 1], [76, 4], [91, 9], [107, 14], [110, 19], [92, 24], [109, 29], [85, 34], [108, 39], [111, 44], [106, 49]],
      40: [[92, 1], [93, 1], [107, 1], [76, 1]],
      41: [[112, 1], [115, 6], [36, 11], [23, 16], [20, 21], [102, 26], [116, 31], [113, 36], [114, 41], [64, 46]],
      42: [[36, 1], [63, 1], [112, 1], [115, 1], [23, 16], [20, 21], [102, 28], [116, 35], [113, 42], [114, 49], [64, 56]],
      43: [[117, 1], [9, 7], [7, 14], [38, 16], [8, 18], [62, 23], [97, 32], [118, 39]],
      44: [[117, 1], [7, 1], [9, 1], [38, 16], [8, 18], [62, 24], [97, 35], [118, 44]],
      45: [[117, 1], [119, 1], [38, 1], [120, 1], [118, 44]],
      46: [[11, 1], [38, 7], [7, 13], [112, 19], [121, 25], [17, 31], [4, 37], [122, 43], [120, 49]],
      47: [[11, 1], [7, 1], [38, 1], [112, 19], [121, 27], [17, 35], [4, 43], [122, 51], [120, 59]],
      48: [[1, 1], [107, 1], [124, 1], [36, 9], [39, 17], [7, 20], [112, 25], [38, 28], [37, 33], [8, 36], [123, 41]],
      49: [[1, 1], [36, 1], [107, 1], [124, 1], [41, 1], [39, 17], [7, 20], [112, 25], [38, 28], [34, 31], [37, 36], [8, 42], [123, 52]],
      50: [[11, 1], [51, 1], [2, 5], [129, 9], [127, 17], [78, 21], [128, 25], [17, 33], [125, 41], [126, 49]],
      51: [[11, 1], [51, 1], [2, 1], [130, 1], [129, 9], [127, 17], [78, 21], [128, 25], [80, 26], [17, 38], [125, 51], [126, 64]],
      52: [[11, 1], [2, 1], [23, 10], [131, 18], [132, 25], [63, 31], [78, 36], [17, 40], [134, 43], [133, 45]],
      53: [[11, 1], [23, 1], [2, 1], [131, 18], [132, 25], [63, 34], [78, 42], [17, 49], [134, 55], [133, 61]],
      54: [[11, 1], [136, 1], [22, 5], [107, 10], [39, 16], [63, 23], [135, 31], [78, 40], [25, 50]],
      55: [[11, 1], [22, 1], [107, 1], [136, 1], [39, 16], [63, 23], [135, 31], [78, 44], [25, 58]],
      56: [[11, 1], [57, 1], [138, 6], [137, 11], [78, 16], [48, 21], [139, 26], [140, 31], [133, 36], [63, 41], [89, 46]],
      57: [[11, 1], [57, 1], [138, 1], [47, 1], [137, 11], [78, 16], [48, 21], [139, 26], [140, 35], [133, 44], [63, 53], [89, 62]],
      58: [[23, 1], [101, 1], [12, 7], [57, 13], [143, 19], [141, 25], [142, 31], [84, 37], [46, 43], [13, 49]],
      59: [[23, 1], [101, 1], [12, 1], [143, 1], [144, 49]],
      60: [[28, 1], [145, 7], [24, 13], [92, 19], [31, 25], [85, 31], [146, 37], [25, 43]],
      61: [[24, 1], [145, 1], [28, 1], [92, 19], [31, 27], [85, 35], [146, 43], [25, 51]],
      62: [[92, 1], [24, 1], [147, 1], [145, 1], [148, 51]],
      63: [[149, 1]],
      64: [[39, 1], [149, 1], [152, 1], [107, 18], [37, 21], [151, 23], [150, 25], [153, 30], [155, 33], [123, 36], [154, 43]],
      65: [[39, 1], [149, 1], [152, 1], [107, 18], [37, 21], [151, 23], [150, 25], [153, 30], [156, 33], [123, 36], [154, 43]],
      66: [[57, 1], [138, 1], [48, 7], [137, 13], [139, 19], [124, 22], [159, 25], [158, 31], [147, 37], [140, 40], [18, 43], [157, 49]],
      67: [[57, 1], [138, 1], [48, 1], [137, 13], [139, 19], [124, 22], [159, 25], [158, 33], [147, 41], [140, 46], [18, 51], [157, 59]],
      68: [[57, 1], [138, 1], [48, 1], [137, 13], [139, 19], [124, 22], [159, 25], [158, 33], [147, 41], [140, 46], [18, 51], [157, 59]],
      69: [[0, 1], [4, 6], [61, 11], [8, 15], [7, 17], [38, 19], [62, 23], [9, 30], [5, 37], [69, 45]],
      70: [[0, 1], [61, 1], [4, 1], [8, 15], [7, 17], [38, 19], [62, 24], [9, 33], [5, 42], [69, 54]],
      71: [[0, 1], [5, 1], [8, 1], [9, 1], [66, 1], [67, 1], [68, 1]],
      72: [[42, 1], [36, 6], [162, 12], [62, 19], [160, 25], [61, 30], [161, 36], [63, 43], [25, 49]],
      73: [[42, 1], [36, 1], [162, 1], [62, 19], [160, 25], [61, 30], [161, 38], [63, 47], [25, 55]],
      74: [[1, 1], [76, 1], [166, 6], [163, 11], [129, 16], [164, 21], [110, 26], [167, 31], [125, 36], [165, 41], [106, 46]],
      75: [[1, 1], [163, 1], [76, 1], [166, 1], [129, 16], [164, 21], [110, 29], [167, 37], [125, 45], [165, 53], [106, 62]],
      76: [[1, 1], [163, 1], [76, 1], [166, 1], [129, 16], [164, 21], [110, 29], [167, 37], [125, 45], [165, 53], [106, 62]],
      77: [[52, 1], [2, 5], [22, 9], [12, 14], [168, 19], [15, 25], [141, 31], [46, 38], [170, 45], [169, 53]],
      78: [[22, 1], [2, 1], [12, 1], [52, 1], [168, 19], [15, 25], [141, 31], [46, 38], [43, 40], [170, 50], [169, 63]],
      79: [[1, 1], [173, 1], [174, 1], [2, 6], [24, 13], [39, 17], [107, 24], [171, 29], [172, 36], [123, 40], [135, 47]],
      80: [[1, 1], [2, 1], [173, 1], [174, 1], [24, 13], [39, 17], [107, 24], [171, 29], [172, 36], [26, 37], [123, 44], [135, 55]],
      81: [[1, 1], [179, 1], [70, 6], [36, 11], [175, 16], [72, 21], [178, 26], [177, 32], [77, 38], [63, 44], [176, 50]],
      82: [[1, 1], [36, 1], [70, 1], [179, 1], [175, 16], [72, 21], [178, 26], [177, 35], [130, 44], [63, 53], [176, 62]],
      83: [[58, 1], [51, 6], [57, 11], [43, 16], [183, 21], [182, 26], [180, 31], [46, 36], [17, 41], [181, 46]],
      84: [[2, 1], [58, 1], [49, 9], [43, 13], [130, 21], [47, 25], [184, 33], [59, 37], [46, 45]],
      85: [[43, 1], [2, 1], [58, 1], [49, 1], [130, 21], [47, 25], [184, 38], [59, 47], [46, 60]],
      86: [[171, 1], [2, 9], [187, 17], [186, 21], [109, 29], [141, 37], [185, 41], [40, 49]],
      87: [[171, 1], [2, 1], [186, 1], [187, 1], [188, 1], [109, 29], [189, 34], [141, 42], [185, 51], [40, 64]],
      88: [[91, 1], [191, 1], [33, 4], [107, 8], [190, 13], [94, 19], [63, 26], [192, 34], [193, 43], [194, 53]],
      89: [[91, 1], [33, 1], [191, 1], [107, 8], [190, 13], [94, 19], [63, 26], [192, 34], [193, 47], [194, 61]],
      90: [[1, 1], [26, 1], [196, 8], [36, 15], [186, 22], [29, 29], [57, 36], [195, 43], [185, 50]],
      91: [[36, 1], [186, 1], [26, 1], [29, 1], [198, 36], [197, 43]],
      92: [[145, 1], [200, 1], [203, 8], [173, 13], [199, 16], [102, 21], [201, 28], [204, 33], [205, 36], [202, 41], [113, 48]],
      93: [[145, 1], [200, 1], [203, 1], [173, 13], [199, 16], [102, 21], [206, 25], [201, 31], [204, 39], [205, 45], [202, 53], [113, 64]],
      94: [[145, 1], [200, 1], [203, 1], [173, 13], [199, 16], [102, 21], [206, 25], [201, 31], [204, 39], [205, 45], [202, 53], [113, 64]],
      95: [[1, 1], [63, 1], [207, 8], [163, 12], [33, 19], [47, 23], [208, 30], [79, 34], [69, 41], [209, 45], [80, 52], [106, 56]],
      96: [[91, 1], [145, 1], [107, 7], [39, 11], [171, 17], [191, 21], [210, 27], [123, 31], [135, 37], [133, 41], [153, 47]],
      97: [[91, 1], [107, 1], [39, 1], [145, 1], [202, 1], [171, 17], [191, 21], [210, 29], [123, 35], [135, 43], [133, 49], [153, 57]],
      98: [[28, 1], [57, 5], [211, 12], [33, 16], [215, 23], [168, 27], [212, 34], [29, 38], [213, 45], [214, 49]],
      99: [[211, 1], [57, 1], [33, 1], [28, 1], [19, 1], [215, 23], [168, 27], [212, 38], [29, 42], [213, 57], [214, 65]],
      100: [[1, 1], [217, 1], [63, 8], [175, 15], [178, 21], [164, 27], [110, 32], [75, 37], [77, 42], [165, 46], [216, 49]],
      101: [[1, 1], [175, 1], [63, 1], [217, 1], [178, 21], [164, 27], [110, 34], [75, 41], [77, 48], [165, 54], [216, 59]],
      102: [[145, 1], [218, 1], [184, 1], [151, 7], [3, 13], [39, 19], [38, 25], [7, 31], [8, 37], [6, 43]],
      103: [[39, 1], [145, 1], [218, 1], [168, 19], [219, 31]],
      104: [[2, 1], [22, 5], [220, 9], [171, 13], [57, 17], [48, 21], [221, 25], [47, 29], [181, 33], [89, 37], [222, 41], [106, 45]],
      105: [[171, 1], [22, 1], [2, 1], [220, 1], [57, 17], [48, 21], [221, 25], [47, 32], [181, 39], [89, 46], [222, 53], [106, 61]],
      106: [[81, 1], [159, 1], [210, 6], [225, 11], [224, 16], [229, 20], [48, 21], [226, 26], [148, 31], [124, 36], [228, 41], [223, 46], [227, 51]],
      107: [[230, 1], [159, 1], [46, 7], [49, 13], [236, 20], [232, 26], [233, 26], [234, 26], [238, 32], [231, 38], [237, 44], [235, 50]],
      108: [[200, 1], [36, 7], [76, 12], [183, 18], [168, 23], [61, 29], [107, 34], [69, 40], [63, 45], [239, 51]],
      109: [[1, 1], [191, 1], [240, 9], [164, 17], [190, 21], [16, 25], [64, 33], [165, 41], [204, 45], [194, 49]],
      110: [[1, 1], [164, 1], [240, 1], [191, 1], [190, 21], [16, 25], [64, 33], [165, 44], [204, 51], [194, 58]],
      111: [[87, 1], [22, 1], [168, 10], [43, 15], [18, 24], [167, 29], [88, 38], [141, 43], [125, 52], [90, 57]],
      112: [[168, 1], [87, 1], [43, 1], [22, 1], [18, 24], [167, 29], [88, 38], [141, 46], [125, 58], [90, 66]],
      113: [[91, 1], [2, 1], [22, 5], [239, 9], [241, 13], [92, 17], [94, 23], [93, 29], [219, 35], [76, 41], [75, 49], [106, 57]],
      114: [[162, 1], [242, 1], [8, 4], [117, 10], [4, 13], [7, 19], [0, 22], [207, 28], [119, 31], [38, 37], [69, 40], [243, 46]],
      115: [[230, 1], [57, 1], [23, 7], [22, 13], [134, 19], [231, 25], [47, 31], [228, 37], [244, 43], [227, 49]],
      116: [[28, 1], [16, 8], [57, 15], [24, 22], [245, 29], [46, 36], [25, 43], [246, 50]],
      117: [[57, 1], [24, 1], [16, 1], [28, 1], [245, 29], [46, 40], [25, 51], [246, 62]],
      118: [[22, 1], [58, 1], [136, 1], [36, 10], [87, 15], [214, 24], [43, 29], [247, 38], [88, 43], [46, 52], [90, 57]],
      119: [[22, 1], [36, 1], [58, 1], [136, 1], [87, 15], [214, 24], [43, 29], [247, 41], [88, 49], [46, 61], [90, 69]],
      120: [[1, 1], [33, 1], [24, 6], [30, 10], [150, 15], [248, 19], [77, 24], [160, 28], [94, 33], [75, 37], [100, 42], [25, 46]],
      121: [[24, 1], [150, 1], [77, 1], [30, 1], [102, 33]],
      122: [[161, 1], [39, 5], [249, 8], [210, 12], [92, 15], [75, 19], [151, 19], [252, 22], [96, 26], [37, 29], [251, 33], [154, 36], [155, 40], [123, 43], [250, 47], [40, 50]],
      123: [[57, 1], [52, 1], [48, 6], [49, 11], [181, 16], [46, 21], [20, 26], [17, 31], [180, 36], [74, 41], [182, 46]],
      124: [[91, 1], [200, 1], [254, 1], [255, 1], [92, 21], [233, 25], [113, 35], [257, 41], [85, 51], [256, 57], [253, 67]],
      125: [[234, 1], [57, 1], [52, 1], [75, 17], [77, 25], [63, 36], [71, 47], [73, 58]],
      126: [[232, 1], [57, 1], [12, 1], [240, 1], [16, 25], [258, 33], [13, 41], [102, 49], [169, 57]],
      127: [[211, 1], [48, 1], [207, 7], [139, 13], [33, 19], [159, 25], [229, 31], [212, 37], [147, 43], [180, 49]],
      128: [[1, 1], [22, 1], [47, 4], [87, 8], [18, 13], [49, 19], [133, 26], [109, 34], [89, 43], [141, 53]],
      129: [[259, 1], [1, 15], [214, 30]],
      130: [[89, 1], [23, 20], [14, 25], [57, 30], [245, 35], [25, 40], [31, 45], [246, 50], [260, 55]],
      131: [[2, 1], [93, 1], [24, 1], [261, 7], [85, 13], [102, 19], [256, 25], [185, 31], [31, 37], [40, 43], [25, 49], [189, 55]],
      132: [[262, 1]],
      133: [[1, 1], [22, 1], [84, 1], [51, 8], [2, 16], [52, 23], [23, 30], [250, 36], [141, 42]],
      134: [[1, 1], [22, 1], [84, 1], [51, 8], [24, 16], [52, 23], [23, 30], [186, 36], [64, 42], [192, 47], [25, 52]],
      135: [[1, 1], [22, 1], [84, 1], [51, 8], [70, 16], [52, 23], [81, 30], [45, 36], [72, 42], [46, 47], [73, 52]],
      136: [[1, 1], [22, 1], [84, 1], [51, 8], [12, 16], [52, 23], [23, 30], [15, 36], [240, 42], [57, 47], [13, 52]],
      137: [[1, 1], [264, 1], [265, 1], [46, 9], [37, 12], [150, 20], [263, 24], [177, 32], [130, 36], [251, 44], [176, 48]],
      138: [[26, 1], [162, 1], [23, 13], [24, 19], [215, 25], [57, 31], [29, 37], [243, 43], [266, 49], [25, 55]],
      139: [[23, 1], [24, 1], [26, 1], [162, 1], [215, 25], [57, 31], [29, 37], [197, 40], [243, 46], [266, 55], [25, 65]],
      140: [[11, 1], [33, 1], [117, 13], [57, 19], [215, 25], [51, 31], [228, 37], [179, 43], [119, 49], [266, 55]],
      141: [[11, 1], [57, 1], [117, 1], [33, 1], [182, 1], [215, 25], [51, 31], [228, 37], [17, 40], [179, 46], [119, 55], [266, 65]],
      142: [[20, 1], [46, 8], [23, 15], [36, 22], [266, 29], [18, 36], [141, 43], [260, 50]],
      143: [[1, 1], [172, 5], [76, 9], [146, 13], [171, 17], [174, 21], [109, 25], [267, 29], [85, 33], [268, 37], [269, 41], [270, 45], [110, 49], [260, 53]],
      144: [[34, 1], [255, 1], [261, 13], [46, 25], [148, 37], [185, 49], [151, 61], [253, 73], [189, 85]],
      145: [[58, 1], [70, 1], [72, 13], [46, 25], [237, 37], [59, 49], [217, 61], [75, 73], [73, 85]],
      146: [[20, 1], [12, 1], [15, 13], [46, 25], [228, 37], [13, 49], [40, 61], [21, 73], [271, 85]],
      147: [[61, 1], [57, 1], [72, 8], [245, 15], [14, 22], [69, 29], [46, 36], [40, 43], [272, 50], [260, 57]],
      148: [[61, 1], [57, 1], [72, 1], [245, 1], [14, 22], [69, 29], [46, 38], [40, 47], [272, 56], [260, 65]],
      149: [[61, 1], [57, 1], [72, 1], [245, 1], [14, 22], [69, 29], [46, 38], [40, 47], [20, 55], [272, 61], [260, 75]],
      150: [[107, 1], [39, 1], [161, 11], [261, 22], [77, 33], [150, 44], [40, 55], [123, 66], [135, 77], [153, 88], [172, 99]],
      151: [[91, 1], [262, 10], [231, 20], [95, 30], [123, 40], [266, 50]]
    };

    /* moveset automáticocas. */
    function autoLearnset(sp, id) {
      const stage = evoStage(id);
      let pool = MV.filter(m => sp.types.includes(m.t));
      [MV[1], MV[11]].forEach(m => { if (!pool.includes(m)) pool.push(m); });
      const offset = stage * 4;
      pool = pool.map(m => ({ ...m, lv: Math.max(1, m.lv + offset) }));
      pool = [...new Map(pool.map(m => [m.i, m])).values()];
      pool.sort((a, b) => a.lv - b.lv || a.p - b.p);
      const seed = (id * 2654435761) % 97;
      pool = pool.filter((m, i) => {
        if (m.lv <= 1 || i < 2) return true;
        return ((seed + i * 13) % 100) < 76;
      });
      if (pool.length < 2) pool = MV.filter(m => sp.types.includes(m.t));
      return pool;
    }
    function learnset(id) { if (LEARNSET_OVERRIDE[id]) return LEARNSET_OVERRIDE[id].map(([mi, lv]) => ({ ...MV[mi], lv, id: mi })); return []; }
    const ppOf = m => m.p >= 100 ? 8 : m.p >= 80 ? 12 : 20;
    function movesAt(id, lv) {
      const known = learnset(id).filter(m => m.lv <= lv);
      let sel = known.slice(-4);
      if (!sel.length) sel = [MV[1]];
      if (!sel.some(m => m.p > 0)) sel[0] = MV[1];
      return sel.map(m => ({ i: m.i, pp: ppOf(m), max: ppOf(m) }));
    }

    /* =========================================================================
       ITENS — inclui as 5 pedras de evolução
       ========================================================================= */
    const ITEMS = {
      ball: { n: { pt: 'Pokébola', en: 'Poké Ball', es: 'Poké Ball' }, d: { pt: 'Captura básica.', en: 'Basic capture.', es: 'Captura básica.' }, price: 200, mult: 1, kind: 'ball', sprite: 'poke-ball' },
      great: { n: { pt: 'Great Ball', en: 'Great Ball', es: 'Super Ball' }, d: { pt: 'Captura melhorada.', en: 'Better capture rate.', es: 'Mejor captura.' }, price: 600, mult: 1.6, kind: 'ball', sprite: 'great-ball' },
      ultra: { n: { pt: 'Ultra Ball', en: 'Ultra Ball', es: 'Ultra Ball' }, d: { pt: 'Alta taxa de captura.', en: 'High capture rate.', es: 'Alta tasa de captura.' }, price: 1200, mult: 2.3, kind: 'ball', sprite: 'ultra-ball' },
      potion: { n: { pt: 'Poção', en: 'Potion', es: 'Poción' }, d: { pt: 'Recupera 30 HP.', en: 'Restores 30 HP.', es: 'Restaura 30 PS.' }, price: 300, heal: 30, kind: 'heal', sprite: 'potion' },
      super: { n: { pt: 'Super Poção', en: 'Super Potion', es: 'Superpoción' }, d: { pt: 'Recupera 90 HP.', en: 'Restores 90 HP.', es: 'Restaura 90 PS.' }, price: 700, heal: 90, kind: 'heal', sprite: 'super-potion' },
      hyper: { n: { pt: 'Poção Hiper', en: 'Hyper Potion', es: 'Poción Hiper' }, d: { pt: 'Recupera 200 HP.', en: 'Restores 200 HP.', es: 'Restaura 200 PS.' }, price: 1500, heal: 200, kind: 'heal', sprite: 'hyper-potion' },
      max: { n: { pt: 'Poção Máxima', en: 'Max Potion', es: 'Poción Máxima' }, d: { pt: 'Recupera todo o HP.', en: 'Fully restores HP.', es: 'Restaura todos los PS.' }, price: 2500, heal: 999, kind: 'heal', sprite: 'max-potion' },
      
      tm39: { n: { pt: 'TM39 - Tumba de Pedra', en: 'TM39 Rock Tomb', es: 'MT39 Tumba Rocas' }, d: { pt: 'Ensina Rock Tomb.', en: 'Teaches Rock Tomb.', es: 'Enseña Tumba Rocas.' }, price: 3000, kind: 'tm', move: 'rock-tomb', sprite: 'tm-rock' },
      tm03: { n: { pt: 'TM03 - Pulso d\'Água', en: 'TM03 Water Pulse', es: 'MT03 Hidropulso' }, d: { pt: 'Ensina Water Pulse.', en: 'Teaches Water Pulse.', es: 'Enseña Hidropulso.' }, price: 3000, kind: 'tm', move: 'water-pulse', sprite: 'tm-water' },
      tm34: { n: { pt: 'TM34 - Onda de Choque', en: 'TM34 Shock Wave', es: 'MT34 Onda Voltio' }, d: { pt: 'Ensina Shock Wave.', en: 'Teaches Shock Wave.', es: 'Enseña Onda Voltio.' }, price: 3000, kind: 'tm', move: 'shock-wave', sprite: 'tm-electric' },
      tm19: { n: { pt: 'TM19 - Giga Dreno', en: 'TM19 Giga Drain', es: 'MT19 Gigadrenado' }, d: { pt: 'Ensina Giga Drain.', en: 'Teaches Giga Drain.', es: 'Enseña Gigadrenado.' }, price: 3000, kind: 'tm', move: 'giga-drain', sprite: 'tm-grass' },
      tm06: { n: { pt: 'TM06 - Tóxico', en: 'TM06 Toxic', es: 'MT06 Tóxico' }, d: { pt: 'Ensina Toxic.', en: 'Teaches Toxic.', es: 'Enseña Tóxico.' }, price: 3000, kind: 'tm', move: 'toxic', sprite: 'tm-poison' },
      tm04: { n: { pt: 'TM04 - Mente Calma', en: 'TM04 Calm Mind', es: 'MT04 Paz Mental' }, d: { pt: 'Ensina Calm Mind.', en: 'Teaches Calm Mind.', es: 'Enseña Paz Mental.' }, price: 3000, kind: 'tm', move: 'calm-mind', sprite: 'tm-psychic' },
      tm38: { n: { pt: 'TM38 - Explosão de Fogo', en: 'TM38 Fire Blast', es: 'MT38 Llamarada' }, d: { pt: 'Ensina Fire Blast.', en: 'Teaches Fire Blast.', es: 'Enseña Llamarada.' }, price: 3000, kind: 'tm', move: 'fire-blast', sprite: 'tm-fire' },
      tm26: { n: { pt: 'TM26 - Terremoto', en: 'TM26 Earthquake', es: 'MT26 Terremoto' }, d: { pt: 'Ensina Earthquake.', en: 'Teaches Earthquake.', es: 'Enseña Terremoto.' }, price: 3000, kind: 'tm', move: 'earthquake', sprite: 'tm-ground' },
      full: { n: { pt: 'Restaurar Tudo', en: 'Full Restore', es: 'Restauración Total' }, d: { pt: 'Recupera todo o HP e remove status.', en: 'Fully restores HP and cures status.', es: 'Restaura todo el PS y cura el estado.' }, price: 3000, heal: 999, kind: 'fullrestore', sprite: 'full-restore' },
      cure: { n: { pt: 'Cura Total', en: 'Full Heal', es: 'Cura Total' }, d: { pt: 'Remove status negativos.', en: 'Cures any status.', es: 'Cura cualquier estado.' }, price: 400, kind: 'cure', sprite: 'full-heal' },
            maxrevive: { n: { pt: 'Máx. Reviver', en: 'Max Revive', es: 'Max Revivir' }, d: { pt: 'Revive com HP cheio.', en: 'Revives with full HP.', es: 'Revive con todo el PS.' }, price: 4000, kind: 'revive', full: true, sprite: 'max-revive' },
      revive: { n: { pt: 'Reviver', en: 'Revive', es: 'Revivir' }, d: { pt: 'Revive com metade do HP.', en: 'Revives with half HP.', es: 'Revive con la mitad de PS.' }, price: 1500, kind: 'revive', sprite: 'revive' },
      fire: { n: { pt: 'Pedra do Fogo', en: 'Fire Stone', es: 'Piedra Fuego' }, d: { pt: 'Evolui certos Pokémon de Fogo.', en: 'Evolves certain Fire Pokémon.', es: 'Evoluciona ciertos Pokémon de Fuego.' }, price: 2100, kind: 'stone', stone: 'fire', sprite: 'fire-stone' },
      water: { n: { pt: 'Pedra da Água', en: 'Water Stone', es: 'Piedra Agua' }, d: { pt: 'Evolui certos Pokémon de Água.', en: 'Evolves certain Water Pokémon.', es: 'Evoluciona ciertos Pokémon de Agua.' }, price: 2100, kind: 'stone', stone: 'water', sprite: 'water-stone' },
      thunder: { n: { pt: 'Pedra do Trovão', en: 'Thunder Stone', es: 'Piedra Trueno' }, d: { pt: 'Evolui certos Pokémon Elétricos.', en: 'Evolves certain Electric Pokémon.', es: 'Evoluciona ciertos Pokémon Eléctricos.' }, price: 2100, kind: 'stone', stone: 'thunder', sprite: 'thunder-stone' },
      leaf: { n: { pt: 'Pedra da Folha', en: 'Leaf Stone', es: 'Piedra Hoja' }, d: { pt: 'Evolui certos Pokémon de Planta.', en: 'Evolves certain Grass Pokémon.', es: 'Evoluciona ciertos Pokémon de Planta.' }, price: 2100, kind: 'stone', stone: 'leaf', sprite: 'leaf-stone' },
      moon: { n: { pt: 'Pedra da Lua', en: 'Moon Stone', es: 'Piedra Lunar' }, d: { pt: 'Evolui certos Pokémon.', en: 'Evolves certain Pokémon.', es: 'Evoluciona ciertos Pokémon.' }, price: 2100, kind: 'stone', stone: 'moon', sprite: 'moon-stone' },
      mint: { n: { pt: 'Menta Misteriosa', en: 'Mysterious Mint', es: 'Menta Misteriosa' }, d: { pt: 'Permite escolher a natureza de um Pokémon.', en: 'Lets you choose a Pokémon nature.', es: 'Te permite elegir la naturaleza de un Pokémon.' }, price: 6000, kind: 'mint', sprite: 'data:image/png;base64,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' },
      ether: { n: { pt: 'Éter', en: 'Ether', es: 'Éter' }, d: { pt: 'Restaura 10 PP de um golpe escolhido.', en: 'Restores 10 PP of one chosen move.', es: 'Restaura 10 PP de un movimiento elegido.' }, price: 1200, kind: 'ppone', pp: 10, sprite: 'ether' },
      elixir: { n: { pt: 'Elixir', en: 'Elixir', es: 'Elixir' }, d: { pt: 'Restaura 10 PP de todos os golpes.', en: 'Restores 10 PP of every move.', es: 'Restaura 10 PP de todos los movimientos.' }, price: 3000, kind: 'ppall', pp: 10, sprite: 'elixir' },
      helixfossil: { n: { pt: 'Fóssil Hélix', en: 'Helix Fossil', es: 'Fósil Hélix' }, d: { pt: 'Pode ser revivido em Omanyte.', en: 'Can be revived into Omanyte.', es: 'Puede revivirse en Omanyte.' }, price: 4000, kind: 'fossil', revive: 138, sprite: 'helix-fossil' },
      domefossil: { n: { pt: 'Fóssil Domo', en: 'Dome Fossil', es: 'Fósil Domo' }, d: { pt: 'Pode ser revivido em Kabuto.', en: 'Can be revived into Kabuto.', es: 'Puede revivirse en Kabuto.' }, price: 4000, kind: 'fossil', revive: 140, sprite: 'dome-fossil' },
      oldamber: { n: { pt: 'Âmbar Antigo', en: 'Old Amber', es: 'Ámbar Antiguo' }, d: { pt: 'Pode ser revivido em Aerodactyl.', en: 'Can be revived into Aerodactyl.', es: 'Puede revivirse en Aerodactyl.' }, price: 5000, kind: 'fossil', revive: 142, sprite: 'old-amber' },
      expall: { n: { pt: 'Exp. All', en: 'Exp. All', es: 'Exp. Compartida' }, d: { pt: 'Todo o time em campo passa a ganhar XP junto, para sempre.', en: 'Your whole active team permanently gains XP together.', es: 'Todo tu equipo activo gana XP en conjunto, para siempre.' }, price: 5000, kind: 'key', sprite: 'exp-share' }
    };
    const BADGE = {
      boulder: { pt: 'Pedra', en: 'Boulder', es: 'Roca' }, cascade: { pt: 'Cascata', en: 'Cascade', es: 'Cascada' },
      thunder: { pt: 'Trovão', en: 'Thunder', es: 'Trueno' }, rainbow: { pt: 'Arco-Íris', en: 'Rainbow', es: 'Arcoíris' },
      soul: { pt: 'Alma', en: 'Soul', es: 'Alma' }, volcano: { pt: 'Vulcão', en: 'Volcano', es: 'Volcán' },
      marsh: { pt: 'Pântano', en: 'Marsh', es: 'Pantano' }, earth: { pt: 'Terra', en: 'Earth', es: 'Tierra' },
      champion: { pt: 'Campeão', en: 'Champion', es: 'Campeón' }
    };
    const BADGE_ORDER = ['boulder', 'cascade', 'thunder', 'rainbow', 'soul', 'marsh', 'volcano', 'earth'];
    /* Restrição da loja por insígnias: item -> nº mínimo de insígnias */
    const ITEM_TIER = {
      ball: 0, potion: 0, cure: 0, great: 2, super: 2, ultra: 5, hyper: 5, revive: 5, maxrevive: 7, ether: 5, max: 7, full: 7, elixir: 7,
      fire: 4, water: 4, thunder: 4, leaf: 4, moon: 4, mint: 8, helixfossil: 8, domefossil: 8, oldamber: 8, expall: 3
    };
    function badgeCount() { return G ? G.badges.filter(b => b !== 'champion').length : 0; }
    function itemUnlocked(k) { return badgeCount() >= (ITEM_TIER[k] || 0); }

    /* =========================================================================
       NATUREZAS — 25 naturezas, cada uma sobe 10% um status e baixa 10% outro
       ========================================================================= */
    const NATURES = [
      { n: { pt: 'Rígida', en: 'Hardy', es: 'Firme' }, up: null, down: null },
      { n: { pt: 'Solitária', en: 'Lonely', es: 'Solitaria' }, up: 'atk', down: 'def' },
      { n: { pt: 'Ousada', en: 'Bold', es: 'Audaz' }, up: 'def', down: 'atk' },
      { n: { pt: 'Curiosa', en: 'Docile', es: 'Dócil' }, up: null, down: null },
      { n: { pt: 'Suave', en: 'Relaxed', es: 'Relajada' }, up: 'def', down: 'spe' },
      { n: { pt: 'Impetuosa', en: 'Impish', es: 'Agitada' }, up: 'def', down: 'spa' },
      { n: { pt: 'Lax', en: 'Lax', es: 'Floja' }, up: 'def', down: 'spd' },
      { n: { pt: 'Tímida', en: 'Timid', es: 'Miedosa' }, up: 'spe', down: 'atk' },
      { n: { pt: 'Hasty', en: 'Hasty', es: 'Activa' }, up: 'spe', down: 'def' },
      { n: { pt: 'Serena', en: 'Serious', es: 'Seria' }, up: null, down: null },
      { n: { pt: 'Jovial', en: 'Jolly', es: 'Alegre' }, up: 'spe', down: 'spa' },
      { n: { pt: 'Ingênua', en: 'Naive', es: 'Ingenua' }, up: 'spe', down: 'spd' },
      { n: { pt: 'Modesta', en: 'Modest', es: 'Modesta' }, up: 'spa', down: 'atk' },
      { n: { pt: 'Mansa', en: 'Mild', es: 'Dulce' }, up: 'spa', down: 'def' },
      { n: { pt: 'Quieta', en: 'Quiet', es: 'Quieta' }, up: 'spa', down: 'spe' },
      { n: { pt: 'Peculiar', en: 'Bashful', es: 'Extraña' }, up: null, down: null },
      { n: { pt: 'Rude', en: 'Rash', es: 'Alocada' }, up: 'spa', down: 'spd' },
      { n: { pt: 'Calma', en: 'Calm', es: 'Calmada' }, up: 'spd', down: 'atk' },
      { n: { pt: 'Gentil', en: 'Gentle', es: 'Amable' }, up: 'spd', down: 'def' },
      { n: { pt: 'Sonolenta', en: 'Sassy', es: 'Grosera' }, up: 'spd', down: 'spe' },
      { n: { pt: 'Cuidadosa', en: 'Careful', es: 'Cauta' }, up: 'spd', down: 'spa' },
      { n: { pt: 'Travessa', en: 'Quirky', es: 'Rara' }, up: null, down: null },
      { n: { pt: 'Brava', en: 'Brave', es: 'Audaz2' }, up: 'atk', down: 'spe' },
      { n: { pt: 'Agressiva', en: 'Adamant', es: 'Firme2' }, up: 'atk', down: 'spa' },
      { n: { pt: 'Malandra', en: 'Naughty', es: 'Pícara' }, up: 'atk', down: 'spd' }
    ];
    function natureName(nt) { return nt.n[LANG] || nt.n.en; }

    /* =========================================================================
       HABILIDADES — 8 habilidades passivas funcionais
       ========================================================================= */
    const ABIL = {
      overgrow: { n: { pt: 'Overgrow', en: 'Overgrow', es: 'Espesura' }, d: { pt: 'Golpes de Planta ficam mais fortes com HP baixo.', en: 'Grass moves get stronger at low HP.', es: 'Movimientos de Planta más fuertes con poca vida.' } },
      blaze: { n: { pt: 'Blaze', en: 'Blaze', es: 'Mar Llamas' }, d: { pt: 'Golpes de Fogo ficam mais fortes com HP baixo.', en: 'Fire moves get stronger at low HP.', es: 'Movimientos de Fuego más fuertes con poca vida.' } },
      torrent: { n: { pt: 'Torrent', en: 'Torrent', es: 'Torrente' }, d: { pt: 'Golpes de Água ficam mais fortes com HP baixo.', en: 'Water moves get stronger at low HP.', es: 'Movimientos de Agua más fuertes con poca vida.' } },
      static: { n: { pt: 'Static', en: 'Static', es: 'Elec. Estática' }, d: { pt: 'Pode paralisar quem usa golpe físico contra ele.', en: 'May paralyze on contact from a physical move.', es: 'Puede paralizar al atacante físico.' } },
      intimidate: { n: { pt: 'Intimidate', en: 'Intimidate', es: 'Intimidación' }, d: { pt: 'Reduz o Ataque do oponente ao entrar em campo.', en: 'Lowers the opponent Attack on entry.', es: 'Baja el Ataque rival al entrar.' } },
      levitate: { n: { pt: 'Levitate', en: 'Levitate', es: 'Levitación' }, d: { pt: 'Imune a golpes do tipo Terrestre.', en: 'Immune to Ground-type moves.', es: 'Inmune a movimientos de Tierra.' } },
      guts: { n: { pt: 'Guts', en: 'Guts', es: 'Agallas' }, d: { pt: 'Ataque sobe quando está com status, ignora a penalidade da queimadura.', en: 'Attack rises when statused, ignores burn penalty.', es: 'El Ataque sube con estado, ignora la quemadura.' } },
      sturdy: { n: { pt: 'Sturdy', en: 'Sturdy', es: 'Robustez' }, d: { pt: 'Sobrevive com 1 HP a um golpe fatal vindo de HP cheio.', en: 'Survives a fatal hit from full HP with 1 HP.', es: 'Sobrevive con 1 PS a un golpe fatal desde PS lleno.' } },
      run_away: { n: { pt: 'Run Away', en: 'Run Away', es: 'Fuga' }, d: { pt: 'Foge de batalhas selvagens sempre.', en: 'Always escapes wild battles.', es: 'Siempre huye de salvajes.' } },
      keen_eye: { n: { pt: 'Keen Eye', en: 'Keen Eye', es: 'Vista Lince' }, d: { pt: 'A precisão não pode ser reduzida.', en: 'Accuracy cannot be lowered.', es: 'Precisión no puede bajar.' } },
      clear_body: { n: { pt: 'Clear Body', en: 'Clear Body', es: 'Cuerpo Puro' }, d: { pt: 'Atributos não podem ser reduzidos.', en: 'Stats cannot be lowered.', es: 'Estadísticas no pueden bajar.' } },
      synchronize: { n: { pt: 'Synchronize', en: 'Synchronize', es: 'Sincronía' }, d: { pt: 'Passa queimadura, paralisia ou veneno.', en: 'Passes burn, poison or paralysis.', es: 'Pasa quemadura, veneno o parálisis.' } },
      thick_fat: { n: { pt: 'Thick Fat', en: 'Thick Fat', es: 'Sebo' }, d: { pt: 'Recebe 50% de dano de Gelo e Fogo.', en: 'Takes 50% damage from Ice/Fire.', es: 'Recibe 50% daño de Hielo/Fuego.' } },
      flash_fire: { n: { pt: 'Flash Fire', en: 'Flash Fire', es: 'Absorbe Fuego' }, d: { pt: 'Imune a Fogo. Absorve para ficar mais forte.', en: 'Immune to Fire. Absorbs to boost.', es: 'Inmune a Fuego. Absorbe para boost.' } },
      water_absorb: { n: { pt: 'Water Absorb', en: 'Water Absorb', es: 'Absorbe Agua' }, d: { pt: 'Imune a Água. Absorve para curar.', en: 'Immune to Water. Absorbs to heal.', es: 'Inmune a Agua. Absorbe para curar.' } },
      volt_absorb: { n: { pt: 'Volt Absorb', en: 'Volt Absorb', es: 'Absorbe Elec' }, d: { pt: 'Imune a Elétrico. Absorve para curar.', en: 'Immune to Electric. Absorbs to heal.', es: 'Inmune a Eléctrico. Absorbe para curar.' } },
      chlorophyll: { n: { pt: 'Chlorophyll', en: 'Chlorophyll', es: 'Clorofila' }, d: { pt: 'Dobro de Velocidade no sol.', en: 'Double Speed in sun.', es: 'Doble Velocidad en sol.' } },
      swift_swim: { n: { pt: 'Swift Swim', en: 'Swift Swim', es: 'Nado Rápido' }, d: { pt: 'Dobro de Velocidade na chuva.', en: 'Double Speed in rain.', es: 'Doble Velocidad en lluvia.' } },
      shed_skin: { n: { pt: 'Shed Skin', en: 'Shed Skin', es: 'Mudar' }, d: { pt: 'Pode curar status no fim do turno.', en: 'May cure status at end of turn.', es: 'Puede curar estado al final.' } },
      compound_eyes: { n: { pt: 'Compound Eyes', en: 'Compound Eyes', es: 'Ojo Compuesto' }, d: { pt: 'Aumenta a precisão dos golpes.', en: 'Increases move accuracy.', es: 'Aumenta precisión de golpes.' } },
      pressure: { n: { pt: 'Pressure', en: 'Pressure', es: 'Presión' }, d: { pt: 'Oponente gasta 2 PP por ataque.', en: 'Opponent uses 2 PP per attack.', es: 'Rival gasta 2 PP por ataque.' } },
      rock_head: { n: { pt: 'Rock Head', en: 'Rock Head', es: 'Cabeza Roca' }, d: { pt: 'Não recebe dano de recuo.', en: 'Takes no recoil damage.', es: 'No recibe daño de retroceso.' } },
      natural_cure: { n: { pt: 'Natural Cure', en: 'Natural Cure', es: 'Cura Natural' }, d: { pt: 'Cura status ao ser trocado.', en: 'Cures status upon switching.', es: 'Cura estado al cambiar.' } }
    };
    const EXTRA_ABILS = ['cute_charm', 'sand_veil', 'inner_focus', 'damp', 'vital_spirit', 'pickup', 'oblivious', 'magnet_pull', 'stench', 'shell_armor', 'insomnia', 'hyper_cutter', 'soundproof', 'limber', 'own_tempo', 'lightning_rod', 'early_bird', 'illuminate', 'trace'];
    EXTRA_ABILS.forEach(a => {
      const name = a.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
      ABIL[a] = { n: { pt: name, en: name, es: name }, d: { pt: 'Habilidade passiva.', en: 'Passive ability.', es: 'Habilidad pasiva.' } };
    });
    function abName(k) { return k ? (ABIL[k].n[LANG] || ABIL[k].n.en) : ''; }
    const ABIL_MAP_GEN1 = "1:overgrow,4:blaze,7:torrent,10:swarm,11:shed_skin,12:compound_eyes,13:swarm,14:shed_skin,15:swarm,16:keen_eye,19:run_away,21:keen_eye,23:intimidate,25:static,27:sand_veil,29:poison_point,32:poison_point,35:cute_charm,37:flash_fire,39:cute_charm,41:inner_focus,43:chlorophyll,46:effect_spore,48:compound_eyes,50:sand_veil,52:pickup,54:damp,56:vital_spirit,58:intimidate,60:water_absorb,63:synchronize,66:guts,69:chlorophyll,72:clear_body,74:sturdy,77:run_away,79:oblivious,81:magnet_pull,83:keen_eye,85:run_away,87:thick_fat,89:stench,90:shell_armor,92:levitate,95:sturdy,96:insomnia,98:hyper_cutter,100:soundproof,102:chlorophyll,104:rock_head,106:limber,107:keen_eye,108:own_tempo,109:levitate,111:lightning_rod,113:natural_cure,114:chlorophyll,115:early_bird,116:swift_swim,118:swift_swim,120:illuminate,122:soundproof,123:swarm,124:oblivious,125:static,126:flash_fire,127:hyper_cutter,128:intimidate,129:swift_swim,130:intimidate,131:water_absorb,132:limber,133:run_away,134:water_absorb,135:volt_absorb,136:flash_fire,137:trace,138:swift_swim,140:swift_swim,142:rock_head,143:thick_fat,144:pressure,147:shed_skin,149:inner_focus,150:pressure";
    function abilityFor(id) {
      const pairs = ABIL_MAP_GEN1.split(',');
      let best = 'overgrow';
      for (let p of pairs) {
        let [pid, abil] = p.split(':');
        if (+pid <= id) best = abil;
        else break;
      }
      return ABIL[best] ? best : 'overgrow';
    }

    /* =========================================================================
       JORNADA — wild = dia, wildN = noite (quando existir)
       ========================================================================= */
    const T = (pt, en, es, sprite, mons, money, fpt, fen, fes) =>
      ({ name: { pt, en, es }, sprite, mons, money, fala: { pt: fpt, en: fen, es: fes } });
    const LOC = [
      {
        n: { pt: 'Rota 1', en: 'Route 1', es: 'Ruta 1' }, bg: 'grass',
        d: {
          pt: 'Grama alta até onde a vista alcança. Bom lugar para os primeiros passos.',
          en: 'Tall grass as far as you can see. A good place for first steps.',
          es: 'Hierba alta hasta donde alcanza la vista. Buen lugar para empezar.'
        },
        wild: [16, 19], wildN: [19, 16], lv: [3, 5],
        ev: [{ t: 'w' }, { t: 'w' },
        {
          t: 't', x: T('Jovem Joey', 'Youngster Joey', 'Chico Joey', 'youngster', [[19, 5]], 250,
            'Meu Rattata é top de linha!', 'My Rattata is in the top percentage!', '¡Mi Rattata es de los mejores!')
        },
        { t: 'w' },
        {
          t: 't', x: T('Garota Ana', 'Lass Ana', 'Chica Ana', 'lass', [[16, 6], [10, 5]], 300,
            'Vamos com tudo!', 'Let us give it everything!', '¡Vamos con todo!')
        }]
      },

      {
        n: { pt: 'Floresta de Viridian', en: 'Viridian Forest', es: 'Bosque Verde' }, bg: 'forest',
        d: {
          pt: 'Árvores fecham o céu. Insetos por todo canto — e dizem que há um Pikachu.',
          en: 'Trees blot out the sky. Bugs everywhere, and rumors of a Pikachu.',
          es: 'Los árboles tapan el cielo. Bichos por todas partes, y rumores de un Pikachu.'
        },
        wild: [10, 11, 13, 14, 25], wildN: [10, 11, 13, 14, 25], lv: [5, 8],
        ev: [{ t: 'w' }, { t: 'w' },
        {
          t: 't', x: T('Caçador Rick', 'Bug Catcher Rick', 'Cazabichos Rick', 'bugcatcher', [[10, 7], [13, 7]], 320,
            'Insetos são os melhores!', 'Bug Pokémon are the best!', '¡Los Pokémon bicho son los mejores!')
        },
        { t: 'w' }, { t: 'w' },
        {
          t: 't', x: T('Caçador Ken', 'Bug Catcher Ken', 'Cazabichos Ken', 'bugcatcher', [[11, 9], [14, 9], [15, 10]], 400,
            'Minha coleção é imbatível.', 'My collection is unbeatable.', 'Mi colección es imbatible.')
        }]
      },

      {
        n: { pt: 'Ginásio de Pewter', en: 'Pewter Gym', es: 'Gimnasio de Ciudad Plateada' }, bg: 'rock',
        d: {
          pt: 'Piso de pedra, luz baixa. Brock espera no fundo do salão.',
          en: 'Stone floor, dim light. Brock waits at the far end.',
          es: 'Suelo de piedra, poca luz. Brock espera al fondo.'
        },
        wild: [], lv: [0, 0],
        ev: [
          {
            t: 'g', x: T('Líder Brock', 'Leader Brock', 'Líder Brock', 'brock', [[74, 12], [95, 15]], 1200,
              'Minha defesa de pedra é impenetrável!', 'My rock-hard defense is impenetrable!', '¡Mi defensa de roca es impenetrable!'), badge: 'boulder'
          },
          { t: 'amber_gift' }
        ]
      },

      {
        n: { pt: 'Monte Lua', en: 'Mt. Moon', es: 'Monte Moon' }, bg: 'cave', noheal: true,
        d: {
          pt: 'Túneis escuros. Morcegos, pedras e gente da Equipe Rocket.',
          en: 'Dark tunnels. Bats, boulders and Team Rocket.',
          es: 'Túneles oscuros. Murciélagos, rocas y el Team Rocket.'
        },
        wild: [41, 74, 35, 46, 27], wildN: [41, 74, 35, 46, 27], lv: [9, 13],
        ev: [{ t: 'w' }, { t: 'w' },
        {
          t: 'R', x: T('Recruta Rocket', 'Team Rocket Grunt', 'Recluta Rocket', 'rocket', [[23, 11], [88, 12]], 600,
            'Saia do caminho, pirralho.', 'Out of my way, brat.', 'Fuera de mi camino, mocoso.')
        },
        { t: 'w' },
        {
          t: 't', x: T('Nerd Miguel', 'Super Nerd Miguel', 'Cerebrito Miguel', 'scientist', [[100, 12], [81, 13]], 550,
            'Calculei sua derrota.', 'I calculated your defeat.', 'Calculé tu derrota.')
        },
        { t: 'fossil_choice' }]
      },

      {
        n: { pt: 'Ginásio de Cerulean', en: 'Cerulean Gym', es: 'Gimnasio de Ciudad Celeste' }, bg: 'water',
        d: {
          pt: 'Uma piscina enorme separa você da líder.', en: 'A huge pool stands between you and the leader.',
          es: 'Una piscina enorme te separa de la líder.'
        },
        wild: [], lv: [0, 0],
        ev: [{
          t: 'g', x: T('Líder Misty', 'Leader Misty', 'Líder Misty', 'misty', [[120, 18], [121, 21]], 2000,
            'Minha política é ataque total com Pokémon de água!', 'My policy is an all-out offensive with Water Pokémon!',
            '¡Mi política es el ataque total con Pokémon de agua!'), badge: 'cascade'
        }]
      },

      {
        n: { pt: 'Rota 24', en: 'Route 24', es: 'Ruta 24' }, bg: 'grass',
        d: {
          pt: 'Uma ponte sobre água calma, com treinadores enfileirados esperando desafio.',
          en: 'A bridge over calm water, trainers lined up waiting for a challenge.',
          es: 'Un puente sobre agua tranquila, con entrenadores esperando desafío.'
        },
        wild: [43, 69, 63, 56, 52, 21, 54, 60, 23, 29, 32, 39], wildN: [43, 69, 63, 41, 48, 54, 23, 29, 32], lv: [12, 16],
        ev: [{ t: 'w' },
        { t: 'r', rivalId: 4, lv: 15, money: 1000, rivalMsg: { pt: 'Sabia que ia te encontrar aqui! Meu Pokémon está mais forte — vamos ver o que você sabe fazer.', en: 'Knew I would find you here! My Pokémon is stronger — show me what you can do.', es: 'Sabía que te encontraría aquí. Mi Pokémon es más fuerte — muéstrame lo que sabes.' } },
        {
          t: 't', x: T('Nadador Lucas', 'Swimmer Lucas', 'Nadador Lucas', 'swimmer', [[72, 14], [118, 15]], 700,
            'A água é meu território.', 'The water is my turf.', 'El agua es mi territorio.')
        },
        { t: 'w' }, { t: 'w' },
        {
          t: 't', x: T('Casal Bia & Téo', 'Couple Bia & Téo', 'Pareja Bia y Téo', 'couple', [[29, 16], [32, 16]], 900,
            'Lutamos juntos!', 'We battle together!', '¡Luchamos juntos!')
        }]
      },

      {
        n: { pt: 'S.S. Anne', en: 'S.S. Anne', es: 'S.S. Anne' }, bg: 'water',
        d: {
          pt: 'Um luxuoso navio de cruzeiro atracado em Vermilion.',
          en: 'A luxury cruise ship docked in Vermilion City.',
          es: 'Un lujoso crucero atracado en Carmín.'
        },
        wild: [], lv: [0, 0],
        ev: [{
          t: 't', x: T('Marinheiro Gui', 'Sailor Gui', 'Marinero Gui', 'sailor', [[66, 16], [72, 16]], 1200,
            'Bem-vindo a bordo!', 'Welcome aboard!', '¡Bienvenido a bordo!')
        },
        { t: 'r', rivalId: 7, lv: 19, money: 1200, rivalMsg: { pt: '{rival}: Você aqui de novo? Não tem limite! Vou te provar de uma vez por todas quem é melhor.', en: '{rival}: You again? Unbelievable! I will prove once and for all who is better.', es: '{rival}: ¿Tú otra vez? ¡Increíble! Te probaré de una vez quién es el mejor.' } },
        {
          t: 't', x: T('Cavalheiro Arthur', 'Gentleman Arthur', 'Caballero Arthur', 'gentleman', [[58, 16], [77, 18]], 2000,
            'Neste navio só os fortes viajam.', 'Only the strong travel on this ship.', 'Solo los fuertes viajan en este barco.')
        }]
      },

      {
        n: { pt: 'Ginásio de Vermilion', en: 'Vermilion Gym', es: 'Gimnasio de Ciudad Carmín' }, bg: 'electric',
        d: {
          pt: 'Cabos de alta tensão pelo chão. Cheiro de ozônio.',
          en: 'High-voltage cables across the floor. The air smells of ozone.',
          es: 'Cables de alta tensión por el suelo. Huele a ozono.'
        },
        wild: [], lv: [0, 0],
        ev: [{
          t: 'g', x: T('Líder Surge', 'Leader Lt. Surge', 'Líder Teniente Surge', 'ltsurge', [[100, 20], [25, 20], [26, 24]], 2600,
            'Eletricidade venceu guerras, garoto!', 'Electricity won wars, kid!', '¡La electricidad ganó guerras, chaval!'), badge: 'thunder'
        }]
      },

      {
        n: { pt: 'Túnel dos Diglett', en: 'Diglett Cave', es: 'Cueva Diglett' }, bg: 'cave',
        d: {
          pt: 'Um túnel estreito cavado por Diglett e Dugtrio entre Vermilion e a Rota 2.',
          en: 'A narrow tunnel carved by Diglett and Dugtrio connecting Vermilion and Route 2.',
          es: 'Un estrecho túnel excavado por Diglett y Dugtrio entre Carmín y la Ruta 2.'
        },
        wild: [50, 51], wildN: [50, 51], lv: [15, 29],
        ev: [{ t: 'w' }, { t: 'w' },
        {
          t: 't', x: T('Montanhista Tom', 'Hiker Tom', 'Montañero Tom', 'hiker', [[74, 18], [95, 20]], 900,
            'As pedras deste túnel são firmes!', 'The rocks in this cave are sturdy!', '¡Las rocas de esta cueva son firmes!')
        }]
      },

      {
        n: { pt: 'Torre Pokémon', en: 'Pokémon Tower', es: 'Torre Pokémon' }, bg: 'ghost',
        d: {
          pt: 'Sete andares de silêncio. Alguma coisa se move entre as lápides.',
          en: 'Seven floors of silence. Something stirs among the graves.',
          es: 'Siete pisos de silencio. Algo se mueve entre las tumbas.'
        },
        wild: [92, 93, 104], wildN: [92, 93, 104], lv: [18, 23],
        ev: [{ t: 'w' }, { t: 'w' },
        { t: 'r', rivalId: 4, lv: 22, money: 1400, rivalMsg: { pt: 'Ei! Tive que vir aqui procurar você. Cadê meu Raticate? Ah não importa... Só vou te derrotar aqui mesmo!', en: 'Hey! I had to come here looking for you. Where is my Raticate? Never mind... I will just beat you here!', es: '¡Oye! Tuve que venir aquí buscándote. ¿Dónde está mi Raticate? No importa... ¡Te derrotaré aquí mismo!' } },
        {
          t: 't', x: T('Médium Maria', 'Channeler Maria', 'Médium María', 'channeler', [[92, 21], [92, 22]], 800,
            'Os espíritos falam comigo...', 'The spirits speak to me...', 'Los espíritus me hablan...')
        },
        { t: 'w' }, { t: 'w' },
        {
          t: 'R', x: T('Recruta Rocket', 'Team Rocket Grunt', 'Recluta Rocket', 'rocket', [[41, 22], [89, 23]], 1000,
            'Ninguém atrapalha a Rocket!', 'Nobody crosses Team Rocket!', '¡Nadie se cruza con el Team Rocket!')
        }]
      },

      {
        n: { pt: 'Ginásio de Celadon', en: 'Celadon Gym', es: 'Gimnasio de Ciudad Azulona' }, bg: 'plant',
        d: {
          pt: 'Estufa quente e úmida, cheia de perfume.', en: 'A warm, humid greenhouse thick with perfume.',
          es: 'Un invernadero cálido y húmedo, lleno de perfume.'
        },
        wild: [], lv: [0, 0],
        ev: [{
          t: 'g', x: T('Líder Erika', 'Leader Erika', 'Líder Erika', 'erika', [[71, 27], [114, 27], [45, 30]], 3200,
            'Que batalha refinada teremos.', 'What a refined battle this will be.', 'Qué combate tan refinado tendremos.'), badge: 'rainbow'
        }]
      },

      {
        n: { pt: 'Mansão de Celadon', en: 'Celadon Mansion', es: 'Mansión Azulona' }, bg: 'city',
        d: {
          pt: 'O edifício mais alto de Celadon. No telhado há uma sala com estudos sobre evolução.',
          en: 'The tallest building in Celadon. On the roof is a room filled with evolution studies.',
          es: 'El edificio más alto de Azulona. En la azotea hay una sala con estudios de evolución.'
        },
        wild: [], lv: [25, 25],
        ev: [{ t: 'story_gift', id: 133, lv: 25 }]
      },

      {
        n: { pt: 'Rota 12', en: 'Route 12', es: 'Ruta 12' }, bg: 'grass',
        d: {
          pt: 'Um píer longo margeado por pescadores e grama alta.',
          en: 'A long pier lined with fishermen and tall grass.',
          es: 'Un muelle largo con pescadores y hierba alta.'
        },
        wild: [43, 69, 44, 70, 48, 96, 83, 129, 98, 116, 118, 54, 79, 72], wildN: [96, 97, 48, 49, 129, 98, 118, 72], lv: [22, 28],
        ev: [{ t: 'w' },
        {
          t: 't', x: T('Pescador Zeca', 'Fisherman Zeca', 'Pescador Zeca', 'fisherman', [[129, 25], [118, 27]], 1100,
            'Fisguei um monstro hoje!', 'I hooked a monster today!', '¡Hoy pesqué un monstruo!')
        },
        { t: 'w' }, { t: 'w' },
        {
          t: 't', x: T('Motoqueiro Rafa', 'Biker Rafa', 'Motorista Rafa', 'biker', [[88, 28], [109, 28]], 1300,
            'Vrum vrum, perdedor.', 'Vroom vroom, loser.', 'Brum brum, perdedor.')
        }]
      },

      {
        n: { pt: 'Prédio da Silph Co.', en: 'Silph Co. HQ', es: 'Edificio Silph S.A.' }, bg: 'city',
        d: {
          pt: 'Sede da gigante de tecnologia em Saffron. O prédio foi libertado da Equipe Rocket.',
          en: 'Headquarters of Kanto technology giant in Saffron, freed from Team Rocket.',
          es: 'Sede del gigante tecnológico de Kanto en Azafrán, liberada del Team Rocket.'
        },
        wild: [137], wildN: [137], lv: [25, 28],
        ev: [{ t: 'w' }, { t: 'story_gift', id: 131, lv: 25 }]
      },

      {
        n: { pt: 'Dojo de Luta de Saffron', en: 'Saffron Dojo', es: 'Dojo de Combate' }, bg: 'ground',
        d: {
          pt: 'Um tradicional mestre de artes marciais oferece um discípulo para quem vencer seus alunos.',
          en: 'A traditional martial arts master offers a disciple to whoever defeats his students.',
          es: 'Un maestro tradicional de combate ofrece un discípulo a quien venza a sus alumnos.'
        },
        wild: [66, 67, 56, 57], wildN: [66, 67, 56, 57], lv: [28, 32],
        ev: [{
          t: 't', x: T('Estudante Ken', 'Student Ken', 'Estudiante Ken', 'blackbelt', [[67, 28]], 400,
            'A força vem da disciplina!', 'Strength comes from discipline!', '¡La força viene de la disciplina!')
        },
        {
          t: 't', x: T('Estudante Rei', 'Student Rei', 'Estudiante Rei', 'blackbelt', [[66, 29]], 400,
            'Só um golpe decide tudo.', 'One strike decides everything.', 'Un solo golpe lo decide todo.')
        },
        { t: 'C', ids: [106, 107], lv: 30 }]
      },

      {
        n: { pt: 'Ginásio de Saffron', en: 'Saffron Gym', es: 'Gimnasio de Ciudad Azafrán' }, bg: 'psychic',
        d: {
          pt: 'Salas que se teletransportam. Sabrina já sabe sua próxima jogada.',
          en: 'Rooms that teleport. Sabrina already knows your next move.',
          es: 'Salas que se teletransportan. Sabrina ya sabe tu próxima jugada.'
        },
        wild: [], lv: [0, 0],
        ev: [{
          t: 'g', x: T('Líder Sabrina', 'Leader Sabrina', 'Líder Sabrina', 'sabrina', [[64, 38], [122, 38], [124, 40], [65, 45]], 5600,
            'Eu já vi o final desta batalha.', 'I have already seen how this battle ends.', 'Ya he visto cómo acaba este combate.'), badge: 'marsh'
        }]
      },

      {
        n: { pt: 'Ginásio de Fuchsia', en: 'Fuchsia Gym', es: 'Gimnasio de Ciudad Fucsia' }, bg: 'poison',
        d: {
          pt: 'Paredes invisíveis e um cheiro adocicado de veneno no ar.',
          en: 'Invisible walls and a sweet smell of poison in the air.',
          es: 'Paredes invisibles y un dulce olor a veneno.'
        },
        wild: [], lv: [0, 0],
        ev: [{
          t: 'g', x: T('Líder Koga', 'Leader Koga', 'Líder Koga', 'koga', [[109, 36], [88, 37], [49, 38], [110, 42]], 4200,
            'Fu ha ha! Sinta o poder do veneno!', 'Fu ha ha! Feel the power of poison!', '¡Fu ja ja! ¡Siente el poder del veneno!'), badge: 'soul'
        }]
      },

      {
        n: { pt: 'Zona do Safari', en: 'Safari Zone', es: 'Zona del Safari' }, bg: 'forest',
        d: {
          pt: 'Vasta reserva ecológica em Fuchsia onde vivem espécies exóticas como Dratini, Scyther, Chansey e Tauros.',
          en: 'Vast wildlife reserve in Fuchsia home to rare species like Dratini, Scyther, Chansey, and Tauros.',
          es: 'Vasta reserva ecológica en Fucsia donde habitan especies raras como Dratini, Scyther, Chansey y Tauros.'
        },
        wild: [102, 111, 113, 115, 123, 127, 128, 147, 84, 46, 48, 29, 32], wildN: [102, 111, 115, 123, 127, 147, 47, 49], lv: [25, 33],
        ev: [{ t: 'w' }, { t: 'w' },
        {
          t: 't', x: T('Guarda do Safari', 'Safari Ranger', 'Guardabosques', 'gentleman', [[102, 28], [111, 30]], 1200,
            'Preserve a vida selvagem!', 'Preserve the wildlife!', '¡Protege la vida salvaje!')
        },
        { t: 'w' }]
      },

      {
        n: { pt: 'Ilha Cinnabar', en: 'Cinnabar Island', es: 'Isla Canela' }, bg: 'volcano',
        d: {
          pt: 'Rocha vulcânica ainda morna. A mansão em ruínas e o laboratório guardam fósseis.',
          en: 'Volcanic rock still warm. The ruined mansion and lab hold fossils.',
          es: 'Roca volcánica aún tibia. La mansión en ruinas y el laboratorio guardan fósiles.'
        },
        wild: [77, 78, 58, 59, 37, 88, 89, 109, 110, 126, 72], wildN: [88, 89, 109, 110, 126, 72], lv: [30, 36],
        ev: [{ t: 'w' }, { t: 'w' },
        {
          t: 't', x: T('Queimador Léo', 'Fire Breather Léo', 'Tragafuegos Léo', 'firebreather', [[126, 33], [58, 34]], 1600,
            'Fogo não perdoa.', 'Fire forgives nothing.', 'El fuego no perdona.')
        },
        { t: 'w' },
        {
          t: 't', x: T('Cientista Yuri', 'Scientist Yuri', 'Científico Yuri', 'scientist', [[110, 34], [82, 35]], 1500,
            'Experimento em andamento.', 'Experiment in progress.', 'Experimento en curso.')
        },
        { t: 'second_fossil' }]
      },

      {
        n: { pt: 'Ginásio de Cinnabar', en: 'Cinnabar Gym', es: 'Gimnasio de Isla Canela' }, bg: 'volcano',
        d: {
          pt: 'O calor sobe do chão. Blaine faz perguntas antes de atacar.',
          en: 'Heat rises from the floor. Blaine asks riddles before he attacks.',
          es: 'El calor sube del suelo. Blaine hace acertijos antes de atacar.'
        },
        wild: [], lv: [0, 0],
        ev: [{
          t: 'g', x: T('Líder Blaine', 'Leader Blaine', 'Líder Blaine', 'blaine', [[77, 42], [126, 42], [59, 45], [78, 47]], 5000,
            'Acertou o enigma? Agora acerte o golpe!', 'Solved the riddle? Now land a hit!', '¿Resolviste el acertijo? ¡Ahora acierta el golpe!'), badge: 'volcano'
        }]
      },

      {
        n: { pt: 'Ginásio de Viridian', en: 'Viridian Gym', es: 'Gimnasio de Ciudad Verde' }, bg: 'ground',
        d: {
          pt: 'O ginásio que ficou fechado o ano todo. O líder finalmente apareceu.',
          en: 'The gym that stayed shut all year. Its leader has finally shown up.',
          es: 'El gimnasio que estuvo cerrado todo el año. Su líder por fin apareció.'
        },
        wild: [], lv: [0, 0],
        ev: [{
          t: 'g', x: T('Líder Giovanni', 'Leader Giovanni', 'Líder Giovanni', 'giovanni', [[111, 45], [34, 45], [31, 46], [51, 47], [112, 50]], 7000,
            'Vou te mostrar o verdadeiro poder.', 'I will show you true power.', 'Te mostraré el verdadeiro poder.'), badge: 'earth'
        }]
      },

      {
        n: { pt: 'Trilha Bloqueada', en: 'Blocked Trail', es: 'Sendero Bloqueado' }, bg: 'grass',
        d: {
          pt: 'Rotas margeadas por grama densa. Um Pokémon enorme dorme bloqueando a passagem.',
          en: 'Dense grass trails. A huge Pokémon is sleeping in the middle of the path.',
          es: 'Senderos de hierba espesa. Un Pokémon enorme duerme bloqueando el paso.'
        },
        wild: [16, 17, 21, 22, 84, 85, 114, 108, 122, 132], wildN: [19, 20, 48, 49, 132], lv: [26, 32],
        ev: [{ t: 'w' }, { t: 'w' },
        { t: 'L', id: 143, lv: 35 }]
      },

      {
        n: { pt: 'Ilhas das Espumas', en: 'Seafoam Islands', es: 'Islas Espuma' }, bg: 'water', noheal: true,
        d: {
          pt: 'Duas ilhas com cavernas glaciais profundas. O vento cortante esconde uma ave lendária.',
          en: 'Two islands with deep glacial caves. The biting wind hides a legendary bird.',
          es: 'Dos islas con profundas cuevas glaciares. El viento cortante esconde un ave legendaria.'
        },
        wild: [86, 87, 79, 80, 90, 91, 116, 117, 120, 121, 124, 72], wildN: [86, 87, 80, 90, 124, 72], lv: [32, 38],
        ev: [{ t: 'w' }, { t: 'w' },
        { t: 'L', id: 144, lv: 50 }]
      },

      {
        n: { pt: 'Usina Abandonada', en: 'Power Plant', es: 'Central de Energía' }, bg: 'electric', noheal: true,
        d: {
          pt: 'Uma usina elétrica desativada. As máquinas enferrujadas ainda zumbem com eletricidade.',
          en: 'A shut-down power plant. The rusted machines still hum with electricity.',
          es: 'Una central eléctrica apagada. Las máquinas oxidadas aún zumban con electricidad.'
        },
        wild: [81, 82, 100, 101, 25, 26, 125, 88, 89], wildN: [81, 82, 100, 101, 125], lv: [30, 36],
        ev: [{ t: 'w' }, { t: 'w' },
        { t: 'L', id: 145, lv: 50 }]
      },

      {
        n: { pt: 'Montanha Brasa', en: 'Ember Mountain', es: 'Monte Brasa' }, bg: 'volcano', noheal: true,
        d: {
          pt: 'Um vulcão nos confins de Kanto. O ar tremula com calor e plumas de fogo.',
          en: 'A volcano at the edge of Kanto. The air shimmers with heat and fiery plumes.',
          es: 'Un volcán en los confines de Kanto. El aire tiembla con el calor y fuego.'
        },
        wild: [77, 78, 58, 59, 126, 74, 75, 66, 67], wildN: [77, 78, 126, 75, 67], lv: [34, 40],
        ev: [{ t: 'w' }, { t: 'w' },
        { t: 'L', id: 146, lv: 50 }]
      },

      {
        n: { pt: 'Estrada da Vitória', en: 'Victory Road', es: 'Calle Victoria' }, bg: 'victory', noheal: true,
        d: {
          pt: 'Pedras enormes bloqueiam o caminho. Só os mais fortes passam daqui.',
          en: 'Huge boulders block the path. Only the strongest get through.',
          es: 'Rocas enormes bloquean el camino. Solo los más fuertes pasan.'
        },
        wild: [95, 42, 75, 66, 67, 111, 112, 105], wildN: [42, 95, 75, 67, 112], lv: [40, 46],
        ev: [{ t: 'w' }, { t: 'w' },
        {
          t: 't', x: T('Ás Cauã', 'Ace Trainer Cauã', 'As Cauã', 'cooltrainer', [[22, 44], [24, 45]], 2400,
            'Chegou longe. Acaba aqui.', 'You made it far. It ends here.', 'Llegaste lejos. Acaba aquí.')
        },
        { t: 'w' }, { t: 'w' },
        {
          t: 't', x: T('Ás Helena', 'Ace Trainer Helena', 'As Helena', 'cooltrainerf', [[80, 46], [47, 45], [103, 46]], 2800,
            'Mostre o que aprendeu.', 'Show me what you learned.', 'Muéstrame lo que aprendiste.')
        }]
      },

      {
        n: { pt: 'Liga Pokémon', en: 'Pokémon League', es: 'Liga Pokémon' }, bg: 'league', noheal: true, resetOnLeave: true,
        d: {
          pt: 'Quatro salas. Quatro mestres. Sem intervalo entre elas.',
          en: 'Four rooms. Four masters. No break in between.',
          es: 'Cuatro salas. Cuatro maestros. Sin descanso entre ellas.'
        },
        wild: [], lv: [0, 0],
        ev: [{
          t: 'g', x: T('Lorelei', 'Lorelei', 'Lorelei', 'lorelei', [[87, 54], [91, 53], [124, 54], [131, 56]], 6000,
            'Seus Pokémon vão congelar!', 'Your Pokémon will be frozen solid!', '¡Tus Pokémon se congelarán!')
        },
        {
          t: 'g', x: T('Bruno', 'Bruno', 'Bruno', 'bruno', [[95, 53], [107, 55], [106, 55], [68, 58]], 6000,
            'Vamos lutar com tudo!', 'We will grind you down!', '¡Lucharemos con todo!')
        },
        {
          t: 'g', x: T('Agatha', 'Agatha', 'Agatha', 'agatha', [[94, 56], [42, 56], [89, 56], [93, 58]], 6000,
            'Você não passa de um pirralho.', 'You are nothing but a brat.', 'No eres más que un mocoso.')
        },
        {
          t: 'g', x: T('Lance', 'Lance', 'Lance', 'lance', [[148, 58], [130, 58], [142, 60], [149, 62]], 6000,
            'Eu sou o maior treinador de dragões!', 'I am the greatest dragon master!', '¡Soy el mayor maestro de dragones!')
        },
        {
          t: 'g', x: T('Campeão Blue', 'Champion Blue', 'Campeón Blue', 'blue', [[18, 61], [112, 59], [103, 61], [59, 63], [65, 65], [6, 65]], 10000,
            'Sempre fui um passo à sua frente.', 'I was always one step ahead of you.', 'Siempre fui un paso por delante de ti.'), badge: 'champion'
        }]
      },

      {
        n: { pt: 'Caverna Cerulean', en: 'Cerulean Cave', es: 'Cueva Celeste' }, bg: 'cave', noheal: true,
        d: {
          pt: 'Só abre para quem venceu a Liga. Algo incrivelmente forte vive no fundo.',
          en: 'Open only to those who beat the League. Something incredibly strong lives deep inside.',
          es: 'Solo se abre para quien venció la Liga. Algo increíblemente fuerte vive al fondo.'
        },
        wild: [132, 113, 115, 64, 42, 123, 128, 55, 80], wildN: [132, 42, 93, 64, 80], lv: [55, 64],
        ev: [{ t: 'w' }, { t: 'w' }, { t: 'w' }, { t: 'w' },
        { t: 'L', id: 150, lv: 70 }]
      }
    ];

    /* =========================================================================
       CICLO DIA / NOITE (relógio real)
       ========================================================================= */
    function phaseNow() {
      const h = new Date().getHours();
      if (h >= 6 && h < 17) return 'day';
      if (h >= 17 && h < 20) return 'dusk';
      return 'night';
    }
    const phaseLabel = p => t(p === 'day' ? 'day' : p === 'dusk' ? 'dusk' : 'night');
    function wildPool(loc) {
      const p = phaseNow();
      if ((p === 'night' || p === 'dusk') && loc.wildN && loc.wildN.length) return loc.wildN;
      return loc.wild;
    }
    function applyDayNight() {
      const el = document.getElementById('dayNight');
      if (el) el.className = 'dn-' + phaseNow();
    }

    /* =========================================================================
       CENÁRIOS
       ========================================================================= */
    function paintScene(theme) {
      const F = document.getElementById('field');
      if (!F) return;
      const bgMap = {
        grass: 'route', forest: 'forest', cave: 'earthycave', rock: 'desert',
        ground: 'desert', water: 'river', electric: 'thunderplains',
        ghost: 'dampcave', plant: 'meadow', victory: 'gen3-arena', league: 'gen3-arena',
        volcano: 'volcanocave', ice: 'icecave', city: 'city'
      };
      const t = bgMap[theme] || 'route';
      const imgUrl = `https://play.pokemonshowdown.com/fx/bg-${t}.png`;

      F.className = 'field bg-' + (theme || 'grass');
      F.style.backgroundImage = `url("${imgUrl}")`;
      F.style.backgroundPosition = 'center bottom';
      F.style.backgroundSize = 'cover';
      F.style.backgroundRepeat = 'no-repeat';

      const hds = ['.groundShade', '.horizon', '#bgGround'];
      hds.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.style.display = 'block';
      });

      ['padFoe', 'padMe'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.style.background = '';
          el.style.opacity = '1';
        }
      });
      applyDayNight();
    }
    /* =========================================================================
       ESTADO E UTILITÁRIOS
       ========================================================================= */
    let G = null, B = null;
    const $ = id => document.getElementById(id);
    const rnd = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
    const pick = a => a[Math.floor(Math.random() * a.length)];
    const esc = s => String(s).replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

    /* opções globais (fora do save: valem para o aparelho) */
    const OPT = { speed: 1, expAll: true, effHint: true, shinyRate: 4096, skin: 'poke' };
    const SPEEDS = [1, 2, 3, 5];
    const BASE_TEXT = 820;
    const sleep = ms => new Promise(r => setTimeout(r, ms / OPT.speed));
    function applySpeed() { document.documentElement.style.setProperty('--spd', OPT.speed); }
    function masterUnlocked() { try { return localStorage.getItem('kanto_master_unlocked') === '1'; } catch (e) { return false; } }
    function applySkin() {
      const app = $('app'); if (!app) return;
      app.classList.remove('skin-great', 'skin-ultra', 'skin-master');
      if (OPT.skin === 'master' && !masterUnlocked()) OPT.skin = 'poke';
      if (OPT.skin !== 'poke') app.classList.add('skin-' + OPT.skin);
    }
    function saveOpts() { try { localStorage.setItem('kanto_opts', JSON.stringify({ ...OPT, LANG, PKLANG })); } catch (e) { } }
    function loadOpts() {
      try {
        const o = JSON.parse(localStorage.getItem('kanto_opts') || '{}');
        if (o.speed) OPT.speed = o.speed;
        if (typeof o.expAll === 'boolean') OPT.expAll = o.expAll;
        if (typeof o.effHint === 'boolean') OPT.effHint = o.effHint;
        if (o.skin) OPT.skin = o.skin;
        if (o.LANG) LANG = o.LANG; if (o.PKLANG) PKLANG = o.PKLANG;
      } catch (e) { }
      applySpeed(); applySkin();
    }

    const EXP_G = {
      fast: [35, 36, 39, 40, 113, 143],
      slow: [58, 59, 72, 73, 79, 80, 90, 91, 127, 128, 129, 130, 131, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151],
      mslow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 29, 30, 31, 32, 33, 34, 43, 44, 45, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 74, 75, 76, 92, 93, 94]
    };
    const BASE_XP = [
      64,141,236,62,142,240,63,142,239,39,71,159,39,72,159,50,113,216,51,116,
      52,162,53,161,112,175,60,137,55,149,65,130,184,60,137,60,153,109,119,108,
      49,171,44,119,114,54,138,52,145,53,139,53,144,60,150,58,158,62,135,63,
      137,60,137,156,175,60,130,175,113,132,161,71,143,65,164,131,128,62,147,57,
      142,56,122,60,150,61,151,60,149,65,155,58,173,62,173,114,66,175,66,175,68,
      172,64,165,70,160,68,166,139,140,60,114,173,111,172,255,63,175,59,154,67,
      170,68,175,136,93,137,61,114,143,175,172,199,114,135,135,135,20,214,187,61,
      92,184,184,184,79,71,173,71,173,180,189,261,261,261,60,147,270,306,64
    ];
    function need(id, lv) {
      if (lv <= 1) return 0;
      if (EXP_G.fast.includes(id)) return Math.floor(0.8 * lv * lv * lv);
      if (EXP_G.slow.includes(id)) return Math.floor(1.25 * lv * lv * lv);
      if (EXP_G.mslow.includes(id)) return Math.floor(1.2 * lv * lv * lv - 15 * lv * lv + 100 * lv - 140);
      return Math.floor(lv * lv * lv);
    }
    const STATKEYS = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
    function rollIVs(good) {
      const o = {}; STATKEYS.forEach(k => { o[k] = good ? rnd(16, 31) : rnd(0, 31); }); return o;
    }
    function rollShiny() { return Math.random() < 1 / OPT.shinyRate; }
    function makeMon(id, lv, wild) {
      const diff = (G && G.rules && G.rules.difficulty) || 'normal';
      const good = !wild && diff !== 'easy'; // treinadores/rivais tendem a ter IVs melhores fora do fácil
      const m = {
        id, lv, exp: need(id, lv), moves: movesAt(id, lv), status: null, slp: 0, nick: null, dead: false,
        shiny: wild ? rollShiny() : false,
        iv: rollIVs(good), ev: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
        nature: rnd(0, NATURES.length - 1), ability: abilityFor(id), friend: 70
      };
      recalc(m, true); m.hp = m.max; return m;
    }
    function natureMult(m, stat) {
      const nt = NATURES[m.nature || 0];
      if (!nt || !nt.up) return 1;
      if (nt.up === stat) return 1.1;
      if (nt.down === stat) return 0.9;
      return 1;
    }
    function recalc(m, full) {
      const b = DEX[m.id - 1].base, old = m.max || 0;
      if (!m.iv) { const legacy = (m.ivs === undefined ? 8 : m.ivs) * 2.8; m.iv = rollIVs(false); STATKEYS.forEach(k => m.iv[k] = Math.round(legacy)); }
      if (!m.ev) m.ev = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
      if (m.nature === undefined) m.nature = rnd(0, NATURES.length - 1);
      if (!m.ability) m.ability = abilityFor(m.id);
      if (m.friend === undefined) m.friend = 70;
      const lv = m.lv;
      const base = (bs, st) => Math.floor((2 * bs + m.iv[st] + Math.floor((m.ev[st] || 0) / 4)) * lv / 100);
      m.max = base(b.hp, 'hp') + lv + 10;
      m.atk = Math.floor((base(b.atk, 'atk') + 5) * natureMult(m, 'atk'));
      m.def = Math.floor((base(b.def, 'def') + 5) * natureMult(m, 'def'));
      m.spa = Math.floor((base(b.spa, 'spa') + 5) * natureMult(m, 'spa'));
      m.spd = Math.floor((base(b.spd, 'spd') + 5) * natureMult(m, 'spd'));
      m.spe = Math.floor((base(b.spe, 'spe') + 5) * natureMult(m, 'spe'));
      m.types = DEX[m.id - 1].types;
      if (!full && old) m.hp = Math.min(m.max, m.hp + (m.max - old));
    }
    function gainEV(mon, fainted) {
      if (!mon.ev) mon.ev = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
      const b = DEX[fainted.id - 1].base;
      const total = b.hp + b.atk + b.def + b.spa + b.spd + b.spe;
      let best = 'hp', bv = b.hp;
      [['atk', b.atk], ['def', b.def], ['spa', b.spa], ['spd', b.spd], ['spe', b.spe]].forEach(([k, v]) => { if (v > bv) { bv = v; best = k; } });
      const sum = STATKEYS.reduce((a, k) => a + (mon.ev[k] || 0), 0);
      if (sum >= 510) return;
      mon.ev[best] = Math.min(252, (mon.ev[best] || 0) + 1);
    }
    const monName = m => m.nick || dexName(m.id);
    function logMon(m) { return `<span style="color:${TCOLOR[DEX[m.id - 1].types[0]] || '#1c202a'};text-shadow:1px 1px 0 rgba(0,0,0,0.9);font-weight:800">${monName(m)}</span>`; }
    function logMove(d) { return `<span style="color:${TCOLOR[d.t] || '#1c202a'};text-shadow:1px 1px 0 rgba(0,0,0,0.9);font-weight:800">${mvName(d)}</span>`; }

    const SP = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const ITSP = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';
    const TRSP = 'https://play.pokemonshowdown.com/sprites/trainers/';
    const sprite = (m, back) => SP + 'versions/generation-v/black-white/animated/' + (back ? 'back/' : '') + (m.shiny ? 'shiny/' : '') + m.id + '.gif';
    const spriteFb = (m, back) => SP + (back ? 'back/' : '') + (m.shiny ? 'shiny/' : '') + m.id + '.png';
    /* Correção de escala: os sprites oficiais usam telas (canvas) de tamanhos bem diferentes
       entre espécies, então sem ajuste o Gyarados fica menor que a Caterpie na tela. */
    /* Escala calibrada com base no tamanho real dos sprites PokeAPI (canvas 96x96):
       Péssaros pequenos e bichinhos têm canvas enorme na API =» precisam escala menor.
       Dragonite/Gyarados/Charizard têm canvas menor na API =» precisam escala maior. */
    const SPR_SCALE = {
      /* Péssaros pequenos (canvas GRANDE na API = aparecem enormes sem correção) */
      16: 0.62, 17: 0.75, 18: 0.85,              /* Pidgey line */
      21: 0.60, 22: 0.78,                       /* Spearrow / Fearow */
      41: 0.68, 42: 0.78,                       /* Zubat / Golbat */
      /* Larvas / bichinhos */
      10: 0.55, 11: 0.62, 13: 0.55, 14: 0.62,
      19: 0.65, 20: 0.75,
      12: 0.80, 15: 0.80,
      129: 0.58, 50: 0.60,                      /* Magikarp/Diglett */
      100: 0.68, 109: 0.72, 102: 0.72, 52: 0.70, /* Voltorb/Koffing/Exeggcute/Meowth */
      /* Starters base (canvas mais vazio na API) */
      1: 0.90, 4: 0.92, 7: 0.90,               /* Bulba/Charmander/Squirtle */
      /* Pequenos mas proporcionais */
      25: 0.78, 39: 0.75, 35: 0.78, 29: 0.80, 32: 0.80, 43: 0.75, 88: 0.80,
      63: 0.70, 92: 0.72, 132: 0.70,
      /* Médios */
      74: 0.80, 104: 0.80, 66: 0.85,
      /* Grandes e imponentes (canvas mais apertado na API) */
      6: 1.35, 130: 1.40, 149: 1.25, 59: 1.20, 131: 1.25, 143: 1.20,
      68: 1.15, 112: 1.15, 3: 1.10, 9: 1.10, 76: 1.10, 89: 1.10, 95: 1.25,
      65: 1.10, 94: 1.10, 115: 1.10, 142: 1.10, 24: 1.05,
      144: 1.15, 145: 1.15, 146: 1.15, 150: 1.20, 148: 1.10, 147: 1.00
    };
    function applySprScale(el, id) {
      const s = SPR_SCALE[id] || 1;
      el.style.width = '96px';
      el.style.height = '96px';
      el.style.transform = `scale(${s})`;
    }
    const iconStatic = (id, shiny) => SP + (shiny ? 'shiny/' : '') + id + '.png';
    const icon = (id, shiny) => {
      const name = DEX[id-1].name.toLowerCase().replace(/\W/g, '');
      return `https://play.pokemonshowdown.com/sprites/gen5ani${shiny ? '-shiny' : ''}/${name}.gif`;
    };
    const hpColor = p => p > 50 ? 'var(--hp-hi)' : p > 20 ? 'var(--hp-mid)' : 'var(--hp-lo)';
    const STPT = {
      psn: { pt: 'VEN', en: 'PSN', es: 'ENV' }, brn: { pt: 'QMD', en: 'BRN', es: 'QMD' },
      par: { pt: 'PAR', en: 'PAR', es: 'PAR' }, slp: { pt: 'SON', en: 'SLP', es: 'DOR' }, frz: { pt: 'CNG', en: 'FRZ', es: 'CON' }
    };
    const STCOL = { psn: '#9b59b6', brn: '#e8703a', par: '#e8c33a', slp: '#7a7f95', frz: '#66c7d8' };
    const statusTag = s => `<span class="st" style="background:${STCOL[s]}">${STPT[s][LANG] || STPT[s].en}</span>`;
    const tg = ty => `<span class="tag" style="background:${TCOLOR[ty]}">${TP(ty)}</span>`;
    function show(id) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('on')); $(id).classList.add('on'); }

    /* tempo de jogo */
    let sessionStart = Date.now();
    function totalSeconds() {
      if (!G) return 0;
      return Math.floor((G.playtime || 0) + (Date.now() - sessionStart) / 1000);
    }
    function hhmmss(sec) {
      const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = Math.floor(sec % 60);
      return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    }
    function commitTime() { if (G) { G.playtime = totalSeconds(); sessionStart = Date.now(); } }

    /* =========================================================================
       SAVES — 5 slots + exportar / importar
       ========================================================================= */
    const SLOTS = 5;
    let storageOK = true;
    try { localStorage.setItem('__t', '1'); localStorage.removeItem('__t'); } catch (e) { storageOK = false; }
    const slotKey = i => 'kanto_slot_' + i;
    function readSlot(i) { try { const s = localStorage.getItem(slotKey(i)); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
    function writeSlot(i, d) { try { localStorage.setItem(slotKey(i), JSON.stringify(d)); return true; } catch (e) { return false; } }
    function autosave() { if (G && G.slot) { commitTime(); G.savedAt = Date.now(); writeSlot(G.slot, G); } }
    function migrate(s) {
      s.party = s.party || []; s.box = s.box || []; s.badges = s.badges || []; s.seen = s.seen || {}; s.caught = s.caught || {};
      s.playtime = s.playtime || 0; s.maxLoc = s.maxLoc === undefined ? (s.loc || 0) : s.maxLoc; s.shinyCount = s.shinyCount || 0; if (s.lastCenter === undefined) s.lastCenter = 0;
      if (!s.nodeAt) { s.nodeAt = {}; s.nodeAt[s.loc] = s.node; }
      s.rules = s.rules || { difficulty: 'normal', nuzlocke: false, xpShare: true }; if (!s.rules.effMode) s.rules.effMode = s.rules.difficulty === 'easy' ? 'always' : s.rules.difficulty === 'hard' ? 'caught' : 'seen';
      [...s.party, ...s.box].forEach(m => { if (m.nick === undefined) m.nick = null; if (m.shiny === undefined) m.shiny = false; if (m.dead === undefined) m.dead = false; recalc(m, false); });
      return s;
    }

    function slotCardHTML(i, mode) {
      const s = readSlot(i);
      if (!s) return `<div class="item-row"><div class="slotcard"><div class="nm" style="font-family:var(--pix);font-size:9px">${i}. ${t('emptySlot')}</div></div>
    ${mode === 'save' ? `<button class="btn blue" onclick="doSave(${i})">${t('save')}</button>`
          : mode === 'import' ? `<button class="btn blue" onclick="doImportInto(${i})">${t('load')}</button>` : ''}</div>`;
      const badges = (s.badges || []).filter(b => b !== 'champion').length;
      const d = new Date(s.savedAt || 0);
      const when = d.getFullYear() > 2000 ? d.toLocaleDateString() : '';
      return `<div class="item-row"><div class="slotcard" style="flex:1">
      <div style="flex:1">
        <div class="nm" style="font-family:var(--pix);font-size:9px;line-height:1.7">${i}. ${esc(s.pname || '—')}</div>
        <div class="miniparty">${(s.party || []).map(p => `<img src="${icon(p.id, p.shiny)}" alt="">`).join('')}</div>
        <div class="small">⬤ ${badges}/8 · ⏱ ${hhmmss(s.playtime || 0)}</div>
        <div class="small">${bi(LOC[s.loc] ? LOC[s.loc].n : { pt: '', en: '', es: '' })} · ${when}</div>
      </div></div>
    <div style="display:flex;flex-direction:column;gap:4px">
      ${mode === 'load' ? `<button class="btn gold" onclick="doLoad(${i})">${t('load')}</button>` : ''}
      ${mode === 'save' ? `<button class="btn blue" onclick="doSave(${i})">${t('save')}</button>` : ''}
      ${mode === 'import' ? `<button class="btn blue" onclick="doImportInto(${i})">${t('load')}</button>` : ''}
      ${mode !== 'import' ? `<button class="btn dark" onclick="doErase(${i},'${mode}')">${t('erase')}</button>` : ''}
      ${mode === 'save' ? `<button class="btn dark" onclick="exportSlot(${i})">⤓</button>` : ''}
    </div></div>`;
    }
    function openSaves(mode) {
      const html = `<h3>${mode === 'load' ? t('slotsLoad') : mode === 'import' ? t('importWhere') : t('slotsSave')}</h3>
   ${storageOK ? '' : `<p class="small">${t('storageOff')}</p>`}
   <div class="scroll">${Array.from({ length: SLOTS }, (_, k) => slotCardHTML(k + 1, mode)).join('')}</div>
   ${mode === 'save' && G ? `<button class="btn dark" onclick="exportCurrent()">${t('exportSave')}</button>` : ''}
   <button class="btn dark" onclick="${G && mode !== 'load' ? 'renderMap()' : 'backToTitle()'}">${t('back')}</button>`;
      if (G && mode !== 'load' && mode !== 'import') { $('mapOvl').classList.add('on'); $('mapOvl').innerHTML = html; }
      else openTitleOvl(html);
    }
    function openTitleOvl(html) {
      let o = $('titleOvl');
      if (!o) { o = document.createElement('div'); o.className = 'ovl'; o.id = 'titleOvl'; $('app').appendChild(o); }
      o.classList.add('on'); o.innerHTML = html;
    }
    function closeTitleOvl() { const o = $('titleOvl'); if (o) o.classList.remove('on'); }
    function backToTitle() { if (G) autosave(); closeTitleOvl(); show('title'); refreshTitle(); }
    function openCredits() {
      const body = t('creditsBody').split('\n\n').map(p => `<p class="small" style="margin-bottom:10px;line-height:1.5">${esc(p)}</p>`).join('');
      openTitleOvl(`<h3>${t('credits')}</h3><div class="scroll">${body}</div><button class="btn dark" onclick="closeTitleOvl()">${t('back')}</button>`);
    }
    function openBadgeGallery() {
      const owned = {};
      for (let i = 1; i <= SLOTS; i++) { const s = readSlot(i); if (s && s.badges) s.badges.forEach(b => owned[b] = 1); }
      const grid = BADGE_ORDER.map((b, i) => `<div class="badge-ic ${owned[b] ? 'on' : ''}">
     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/${i + 1}.png" class="bigbdg" alt="">
     <div class="small" style="text-align:center">${bi(BADGE[b])}</div></div>`).join('');
      const html = `<h3>${t('badgeGallery')}</h3><div class="scroll">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px">${grid}</div>
    ${Object.keys(owned).length ? '' : `<p class="small" style="text-align:center;margin-top:10px">${t('noBadgesYet')}</p>`}
  </div><button class="btn dark" onclick="closeTitleOvl()">${t('back')}</button>`;
      openTitleOvl(html);
    }
    function doSave(i) {
      G.slot = i; commitTime(); G.savedAt = Date.now();
      if (writeSlot(i, G)) flashMap(t('slotSaved', i)); else flashMap(t('storageOff'));
    }
    function doLoad(i) {
      const s = readSlot(i); if (!s) return;
      G = migrate(s); sessionStart = Date.now(); closeTitleOvl(); renderMap();
    }
    function doErase(i, mode) { try { localStorage.removeItem(slotKey(i)); } catch (e) { } openSaves(mode); refreshTitle(); }

    function downloadJSON(obj, filename) {
      const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
    }
    function exportCurrent() { if (!G) return; commitTime(); downloadJSON({ __kanto: 1, data: G }, 'kanto-' + (G.pname || 'save') + '.json'); flashMap(t('exported')); }
    function exportSlot(i) { const s = readSlot(i); if (!s) return; downloadJSON({ __kanto: 1, data: s }, 'kanto-slot' + i + '.json'); flashMap(t('exported')); }
    let PENDING_IMPORT = null;
    function importSave() {
      const inp = $('fileIn');
      inp.value = '';
      inp.onchange = () => {
        const f = inp.files && inp.files[0]; if (!f) return;
        const r = new FileReader();
        r.onload = () => {
          try {
            const j = JSON.parse(r.result);
            const data = j && j.__kanto ? j.data : j;
            if (!data || !Array.isArray(data.party)) throw 0;
            PENDING_IMPORT = data; openSaves('import');
          } catch (e) {
            G ? flashMap(t('importFail')) : openTitleOvl(
              `<div style="margin:auto;text-align:center"><p class="small">${t('importFail')}</p>
         <button class="btn red" onclick="backToTitle()">${t('ok')}</button></div>`);
          }
        };
        r.readAsText(f);
      };
      inp.click();
    }
    function doImportInto(i) {
      if (!PENDING_IMPORT) return;
      const data = migrate(PENDING_IMPORT); data.slot = i; data.savedAt = Date.now();
      writeSlot(i, data); PENDING_IMPORT = null;
      refreshTitle();
      if (G) { flashMap(t('imported', i)); } else openTitleOvl(
        `<div style="margin:auto;text-align:center"><p class="small">${t('imported', i)}</p>
     <button class="btn red" onclick="backToTitle()">${t('ok')}</button></div>`);
    }

    /* =========================================================================
       TÍTULO E CONFIGURAÇÕES
       ========================================================================= */
    function refreshTitle() {
      $('titleSub').textContent = t('sub');
      $('gen2Note').textContent = t('gen2Note');
      $('btNew').textContent = t('newJourney');
      $('btCont').textContent = t('continue');
      $('btImport').textContent = t('importSave');
      $('btBadges').textContent = t('badgeGallery');
      $('btCfg').textContent = t('settings');
      $('btCredits').textContent = t('credits');
      applySkin();
      let any = false; for (let i = 1; i <= SLOTS; i++) if (readSlot(i)) any = true;
      $('btCont').disabled = !any;
      const p = phaseNow();
      $('titleClock').textContent = (p === 'day' ? '☀ ' : p === 'dusk' ? '🌇 ' : '🌙 ') + phaseLabel(p) + ' · ' +
        new Date().toLocaleTimeString().slice(0, 5);
    }
    function openSettings(from) {
      const segBtn = (label, active, onclick) => `<button class="btn ${active ? 'gold' : 'dark'}" onclick="${onclick}">${label}</button>`;
      const html = `<h3>${t('settings')}</h3><div class="scroll">
   <div class="card"><div class="small" style="margin-bottom:6px">${t('language')}</div>
     <div class="seg">${segBtn('Português', LANG === 'pt', `setLang('pt','${from}')`)}
      ${segBtn('English', LANG === 'en', `setLang('en','${from}')`)}
      ${segBtn('Español', LANG === 'es', `setLang('es','${from}')`)}</div></div>
   <div class="card"><div class="small" style="margin-bottom:6px">${t('pkLanguage')}</div>
     <div class="seg">${segBtn(t('pkLocal'), PKLANG === 'local', `setPkLang('local','${from}')`)}
      ${segBtn(t('pkEn'), PKLANG === 'en', `setPkLang('en','${from}')`)}
      ${segBtn(t('pkJa'), PKLANG === 'ja', `setPkLang('ja','${from}')`)}</div></div>
   <div class="card"><div class="small" style="margin-bottom:6px">${t('speed')}</div>
     <div class="seg">${SPEEDS.map(s => segBtn(s + 'x', OPT.speed === s, `setOpt('speed',${s},'${from}')`)).join('')}</div></div>
   ${(G && G.rules && G.rules.difficulty === 'easy') ? `<div class="card"><div class="small" style="margin-bottom:6px">${t('expAll')}</div>
     <div class="seg">${segBtn(t('on'), OPT.expAll, `setOpt('expAll',true,'${from}')`)}
      ${segBtn(t('off'), !OPT.expAll, `setOpt('expAll',false,'${from}')`)}</div></div>` : ''}
   <div class="card"><div class="small" style="margin-bottom:6px">${t('effHint')}</div>
     <div class="seg">${segBtn(t('on'), OPT.effHint, `setOpt('effHint',true,'${from}')`)}
      ${segBtn(t('off'), !OPT.effHint, `setOpt('effHint',false,'${from}')`)}</div></div>
   <div class="card"><div class="small" style="margin-bottom:6px">${t('skin')}</div>
     <div class="skinpick">
       <div class="swatch sw-poke ${OPT.skin === 'poke' ? 'sel' : ''}" title="${t('skinPoke')}" onclick="setOpt('skin','poke','${from}')"></div>
       <div class="swatch sw-great ${OPT.skin === 'great' ? 'sel' : ''}" title="${t('skinGreat')}" onclick="setOpt('skin','great','${from}')"></div>
       <div class="swatch sw-ultra ${OPT.skin === 'ultra' ? 'sel' : ''}" title="${t('skinUltra')}" onclick="setOpt('skin','ultra','${from}')"></div>
       <div class="swatch sw-master ${masterUnlocked() ? (OPT.skin === 'master' ? 'sel' : '') : 'lock'}" title="${masterUnlocked() ? t('skinMaster') : t('skinLocked')}" onclick="${masterUnlocked() ? `setOpt('skin','master','${from}')` : ''}"></div>
     </div>
     ${!masterUnlocked() ? `<div class="small" style="margin-top:4px;opacity:.7">${t('skinLocked')}</div>` : ''}</div>
   </div>
   <button class="btn dark" onclick="${from === 'title' ? 'backToTitle()' : 'renderMap()'}">${t('back')}</button>`;
      if (from === 'title') openTitleOvl(html); else { $('mapOvl').classList.add('on'); $('mapOvl').innerHTML = html; }
    }
    function setOpt(k, v, from) { OPT[k] = v; applySpeed(); applySkin(); saveOpts(); openSettings(from); }
    function setLang(l, from) {
      LANG = l; saveOpts();
      document.documentElement.lang = l === 'pt' ? 'pt-BR' : l === 'es' ? 'es' : 'en';
      refreshTitle(); openSettings(from);
    }
    function setPkLang(v, from) { PKLANG = v; saveOpts(); openSettings(from); }

    /* =========================================================================
       CRIAÇÃO DE PERSONAGEM
       ========================================================================= */
    let CR = { name: '', rivalName: '', gender: 'boy', difficulty: 'normal', nuzlocke: false, xpShare: true };
    const PLSP = { boy: TRSP + 'red.png', girl: TRSP + 'leaf.png' };
    /* cadeia de sprites alternativos pro protagonista, caso o nome principal não exista no servidor */
    const PLSP_FALLBACKS = {
      boy: [TRSP + 'red.png', TRSP + 'redgen3.png', TRSP + 'ethan.png'],
      girl: [TRSP + 'leaf.png', TRSP + 'leafgreen.png', TRSP + 'leaf-gen3.png', TRSP + 'may.png']
    };
    function plspFallback(el, gender) {
      const list = PLSP_FALLBACKS[gender] || PLSP_FALLBACKS.boy;
      const idx = (+el.dataset.plspIdx || 0) + 1;
      if (idx >= list.length) { el.style.display = 'none'; return; }
      el.dataset.plspIdx = idx; el.src = list[idx];
    }
    function loadWithFallback(el, list, idx) {
      idx = idx || 0;
      if (idx >= list.length) { el.style.display = 'none'; return; }
      el.onerror = () => loadWithFallback(el, list, idx + 1);
      el.src = list[idx];
    }
    function screenCreate(reset = true) {
      if (reset || !window.CR) {
        CR = { name: '', rivalName: '', gender: 'boy', difficulty: 'normal', nuzlocke: false, xpShare: true };
      }
      show('create'); $('crTop').textContent = t('create'); renderCreate();
    }
    function selectGender(g) {
      CR.gender = g;
      const bBoy = $('genderBoy'), bGirl = $('genderGirl');
      if (bBoy) bBoy.classList.toggle('sel', g === 'boy');
      if (bGirl) bGirl.classList.toggle('sel', g === 'girl');
      const ni = $('nameIn');
      if (ni && !ni.value.trim()) ni.placeholder = g === 'boy' ? 'Red' : 'Leaf';
    }
    function renderCreate() {
      $('crBody').innerHTML = `
   <div class="card"><div class="pixh">${t('yourName')}</div>
     <input type="text" id="nameIn" maxlength="10" value="${esc(CR.name)}" placeholder="${CR.gender === 'boy' ? 'Red' : 'Leaf'}"
       oninput="CR.name=this.value" autocomplete="off">
     <div class="small" style="margin-top:6px">${t('nameHint')}</div></div>
   <div class="card"><div class="pixh">${t('boy')} / ${t('girl')}</div>
     <div class="gender" id="genderSel">
       <button type="button" id="genderBoy" class="btn dark ${CR.gender === 'boy' ? 'sel' : ''}" onclick="selectGender('boy')">
         <img src="${PLSP.boy}" onerror="plspFallback(this,'boy')" alt=""><span>${t('boy')}</span></button>
       <button type="button" id="genderGirl" class="btn dark ${CR.gender === 'girl' ? 'sel' : ''}" onclick="selectGender('girl')">
         <img src="${PLSP.girl}" onerror="plspFallback(this,'girl')" alt=""><span>${t('girl')}</span></button>
     </div></div>
   <div class="card">
     <div class="pixh" style="display:flex;align-items:center;gap:6px">
       <span style="font-size:10px">🎮</span>
       <span>${LANG === 'en' ? "Rival's name" : LANG === 'es' ? 'Nombre del rival' : 'Nome do rival'}</span>
     </div>
     <input type="text" id="rivalIn" maxlength="10" value="${esc(CR.rivalName)}" placeholder="Blue"
       oninput="CR.rivalName=this.value" autocomplete="off">
     <div class="small" style="margin-top:6px;opacity:.7">${LANG === 'en' ? 'Leave blank for the default name.' : LANG === 'es' ? 'Déjalo en blanco para el nombre por defecto.' : 'Deixe em branco para usar o nome padrão.'}</div>
   </div>
   <button type="button" class="btn red big" onclick="screenRules()">${t('confirm')}</button>
   <button type="button" class="btn dark" onclick="backToTitle()">${t('back')}</button>`;
      const ni = $('nameIn'); if (ni && ni.addEventListener) ni.addEventListener('keydown', e => { if (e.key === 'Enter') $('rivalIn') && $('rivalIn').focus(); });
      const ri = $('rivalIn'); if (ri && ri.addEventListener) ri.addEventListener('keydown', e => { if (e.key === 'Enter') screenRules(); });
    }
    function screenRules() { show('rules'); $('ruTop').textContent = t('newRules'); renderRules(); }
    const DIFF_DESC = { easy: 'diffEasyD', normal: 'diffNormalD', hard: 'diffHardD' };
    function renderRules() {
      const seg = (label, active, onclick) => `<button type="button" class="btn ${active ? 'gold' : 'dark'}" onclick="${onclick}">${label}</button>`;
      $('ruBody').innerHTML = `
   <p class="small">${t('ruleHint')}</p>
   <div class="card"><div class="pixh">${t('diffTitle')}</div>
     <div class="seg">${seg(t('diffEasy'), CR.difficulty === 'easy', "CR.difficulty='easy';renderRules()")}
      ${seg(t('diffNormal'), CR.difficulty === 'normal', "CR.difficulty='normal';renderRules()")}
      ${seg(t('diffHard'), CR.difficulty === 'hard', "CR.difficulty='hard';renderRules()")}</div>
     <div class="small" style="margin-top:8px;opacity:.8">${t(DIFF_DESC[CR.difficulty])}</div>
     <div class="small" style="margin-top:6px;opacity:.6">${t('diffTip')}</div></div>
   <div class="card"><div class="pixh">${t('nuzlockeQ')}</div>
     <div class="small" style="margin-bottom:6px">${t('nuzlockeD')}</div>
     <div class="seg">${seg(t('on'), CR.nuzlocke === true, "CR.nuzlocke=true;renderRules()")}
      ${seg(t('off'), CR.nuzlocke === false, "CR.nuzlocke=false;renderRules()")}</div></div>
   <button type="button" class="btn red big" onclick="finishCreate()">${t('confirm')}</button>
   <button type="button" class="btn dark" onclick="screenCreate(false)">${t('back')}</button>`;
    }
    function finishCreate() {
      const nm = (CR.name || '').trim() || (CR.gender === 'boy' ? 'Red' : 'Leaf');
      const rivalNm = (CR.rivalName || '').trim() || 'Blue';
      const diff = CR.difficulty;
      const xpShare = diff === 'easy';
      const effMode = diff === 'easy' ? 'always' : diff === 'hard' ? 'caught' : 'seen';
      G = {
        pname: nm, rivalName: rivalNm, gender: CR.gender, slot: null, party: [], box: [],
        bag: { ball: 5, potion: 3, great: 0, ultra: 0, super: 0, hyper: 0, cure: 1, revive: 0 },
        money: 3000, badges: [], loc: 0, maxLoc: 0, node: 0, nodeAt: { 0: 0 }, lastCenter: 0, seen: {}, caught: {}, wins: 0, shinyCount: 0,
        playtime: 0, startedAt: Date.now(), savedAt: Date.now(),
        rules: { difficulty: diff, nuzlocke: CR.nuzlocke, xpShare, effMode }
      };
      sessionStart = Date.now();
      show('starter'); $('stTop').textContent = t('lab'); renderStarter();
    }
    const starterDesc = {
      1: {
        pt: 'Equilibrado e resistente. Bom contra os dois primeiros ginásios.',
        en: 'Balanced and sturdy. Strong against the first two gyms.',
        es: 'Equilibrado y resistente. Fuerte contra los dos primeros gimnasios.'
      },
      4: {
        pt: 'Frágil no começo, devastador depois. Caminho difícil.',
        en: 'Fragile early, devastating later. The hard road.',
        es: 'Frágil al principio, devastador después. El camino difícil.'
      },
      7: {
        pt: 'Defesa alta e segura. O começo mais tranquilo.',
        en: 'High defense and safe. The calmest start.',
        es: 'Defensa alta y segura. El comienzo más tranquilo.'
      }
    };
    const STARTER_TYPE_CLASS = { 1: 'grass', 4: 'fire', 7: 'water' };
    function renderStarter() {
      const cards = [1, 4, 7].map(id => {
        const ty = DEX[id - 1].types[0];
        const cls = STARTER_TYPE_CLASS[id] || ty;
        const sprSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
        const sprFb = icon(id);
        return `<button class="starter-card ${cls}" onclick="chooseStarter(${id})" aria-label="${dexName(id)}">
      <div class="sc-shine"></div>
      <img class="sc-sprite" src="${sprSrc}" onerror="this.onerror=null;this.src='${sprFb}'" alt="${dexName(id)}">
      <div class="sc-name">${dexName(id)}</div>
      <div class="sc-types">${DEX[id - 1].types.map(tg).join('')}</div>
      <div class="sc-desc">${bi(starterDesc[id])}</div>
    </button>`;
      }).join('');
      $('stBody').innerHTML =
        `<p style="font-size:11px;line-height:1.6;margin:0;text-align:center;color:#a0aac8;font-family:var(--pix);font-size:8px">${t('chooseStarter')}</p>` +
        `<div class="starter-cards">${cards}</div>`;
    }
    function chooseStarter(id) {
      G.party = [makeMon(id, 5)]; G.caught[id] = 1; G.seen[id] = 1;
      for (let i = 1; i <= SLOTS; i++) { if (!readSlot(i)) { G.slot = i; break; } }
      autosave();
      // rival escolhe o starter com vantagem de tipo
      const rivalMap = { 1: 4, 4: 7, 7: 1 };
      const rivalId = rivalMap[id] || 4;
      startRivalBattle(id, rivalId);
    }

    /* =========================================================================
       MAPA
       ========================================================================= */
    function renderMap() {
      show('map');
      const o = $('mapOvl'); if (o) o.classList.remove('on');
      const loc = LOC[G.loc];
      $('tbName').textContent = esc(G.pname) + ' · ' + bi(loc.n);
      $('tbMoney').textContent = '¥' + G.money;
      $('tbBadges').innerHTML = Array.from({ length: 8 }, (_, i) =>
        `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/${i + 1}.png" class="topbdg ${G.badges.filter(b => b !== 'champion').length > i ? 'on' : ''}">`).join('');

      const done = G.node, total = loc.ev.length, fin = done >= total, hasNext = G.loc < LOC.length - 1;
      const nodes = loc.ev.map((e, i) => {
        const cls = i < done ? 'done' : (i === done ? 'now' : '');
        const isBoss = (e.t === 'g' || e.t === 'L' || e.t === 'G' || e.t === 'C' || e.t === 'story_gift' || e.t === 'fossil_choice' || e.t === 'amber_gift' || e.t === 'second_fossil');
      const isRival = e.t === 'r'; const isRocket = e.t === 'R';
      const extraCls = isRival ? 'rival' : isRocket ? 'rocket' : '';
      const nodeIcon = e.t === 'w' ? '~' : e.t === 'g' ? '👑' : e.t === 'L' ? '⭐' : (e.t === 'G' || e.t === 'C' || e.t === 'story_gift') ? '🎁' : (e.t === 'fossil_choice' || e.t === 'amber_gift' || e.t === 'second_fossil') ? '⛏️' : isRival ? 'R' : isRocket ? '☠️' : '!';
      return `<div class="node ${cls} ${isBoss ? 'boss' : ''} ${extraCls}">${nodeIcon}</div>`;
    }).join('');
    let label, act, dis = '';
    if (fin) { label = hasNext ? t('goTo', bi(LOC[G.loc + 1].n)) : t('journeyDone'); act = hasNext ? 'nextLoc()' : ''; dis = hasNext ? '' : 'disabled'; }
    else {
      const nx = loc.ev[done];
      label = nx.t === 'w' ? t('explore') : nx.t === 'L' ? t('legendaryHere', dexName(nx.id)) : (nx.t === 'G' || nx.t === 'story_gift') ? t('giftHere', dexName(nx.id)) : nx.t === 'C' ? t('giftHere', nx.ids.map(dexName).join(' / ')) : nx.t === 'fossil_choice' ? '⛏️ Escolher Fóssil' : nx.t === 'amber_gift' ? '🏛️ Museu de Pewter' : nx.t === 'second_fossil' ? '🔬 Fóssil Remanescente' : nx.t === 'r' ? `⚡ Rival ${getRivalName && getRivalName() ? getRivalName() : 'Blue'} apareceu!` : nx.t === 'R' ? '☠️ Equipe Rocket por perto!' : nx.t === 't' ? t('fightTrainer') : t('challenge', bi(nx.x.name));
      act = 'advance()';
    }
      const ph = phaseNow();

      $('mapBody').innerHTML = `
    <div class="card">
      <h2 class="loc-title">${bi(loc.n)}</h2>
      <p class="loc-desc">${bi(loc.d)}</p>
      <div class="small" style="margin-bottom:8px">${ph === 'day' ? '☀' : ph === 'dusk' ? '🌇' : '🌙'} ${phaseLabel(ph)} · ${hhmmss(totalSeconds())}</div>
      <div class="nodes">${nodes}</div>
      <button class="btn ${fin ? 'blue' : 'red'} big" style="width:100%" onclick="${act}" ${dis}>${label}</button>
    </div>
    ${loc.wild.length ? `<button class="btn dark" onclick="train()">${t('train')}</button>` : ''}
    <div class="card" style="padding: 8px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        <button class="btn gold" style="display:flex;align-items:center;justify-content:center;gap:6px;padding:10px" onclick="healAll()">${t('center')}</button>
        <button class="btn blue" style="display:flex;align-items:center;justify-content:center;gap:6px;padding:10px" onclick="openShop()">${t('shop')}</button>
        <button class="btn dark" style="padding:8px" onclick="openParty(false)">${t('team')}</button>
        <button class="btn dark" style="padding:8px" onclick="openBag(false)">${t('bag')}</button>
        <button class="btn dark" style="padding:8px" onclick="openDex()">${t('dex')}</button>
        <button class="btn dark" style="padding:8px" onclick="openWorldMap()">${t('mapT')}</button>
        <button class="btn dark" style="padding:8px" onclick="openCard()">${t('card')}</button>
        <button class="btn dark" style="padding:8px" onclick="openSettings('map')">${t('settings')}</button>
        <button class="btn dark" style="padding:8px" onclick="openSaves('save')">${t('save')}</button>
        <button class="btn dark" style="padding:8px" onclick="backToTitle()">${t('back')}</button>
      </div>
    </div>
    <div class="card">
      <div class="small" style="margin-bottom:2px">${t('teamCount', G.party.length, Object.keys(G.caught).length)}</div>
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:8px;padding:6px 0">
        ${G.party.map((m, i) => {
          const domColor = TCOLOR[DEX[m.id-1].types[0]] || '#ffffff';
          return `<div class="mon-spotlight ${m.hp <= 0 ? 'fnt' : ''}" data-idx="${i}" onclick="monDetail(${i})" style="position:relative;cursor:pointer;width:100%;display:flex;flex-direction:column;align-items:center;background:radial-gradient(circle at 50% 50%, ${domColor}33 0%, transparent 80%);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:4px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.15);transition:transform .1s,box-shadow .1s" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='inset 0 -3px 0 rgba(0,0,0,.2)'" onmouseout="this.style.transform='none';this.style.boxShadow='inset 0 -2px 0 rgba(0,0,0,.15)'">
          <div class="draghandle" onpointerdown="event.stopPropagation();partyDragStart(event, ${i}, true)" style="position:absolute;top:2px;right:2px;font-size:12px;opacity:.4;padding:4px 6px;background:rgba(0,0,0,.3);border-radius:4px;cursor:grab">☰</div>
          <img src="${icon(m.id, m.shiny)}" onerror="this.onerror=null;this.src=spriteFb(m,true)" alt="" style="width:48px;height:48px;object-fit:contain;image-rendering:pixelated">
          <div class="bar" style="width:90%;margin-top:6px;height:4px"><i style="width:${Math.max(0, m.hp / m.max * 100)}%;background:${hpColor(Math.max(0, m.hp / m.max * 100))}"></i></div>
        </div>`;
        }).join('')}
      </div>
      <div class="small" style="text-align:center;margin-top:10px;opacity:.3">Beta 0.8</div>
    </div>`;
      autosave();
    }
    function partyRow(m) {
      const pct = Math.max(0, m.hp / m.max * 100);
      return `<div class="mon-row ${m.hp <= 0 ? 'fnt' : ''}"><img src="${icon(m.id, m.shiny)}" alt="">
    <div style="flex:1"><div class="nm">${m.shiny ? '<span class="shiny">★</span> ' : ''}${monName(m)}
      <span style="opacity:.7">Nv${m.lv}</span> ${m.status ? statusTag(m.status) : ''} ${m.dead ? `<span class="st" style="background:#333">${t('nuzTag')}</span>` : ''}</div>
    <div class="bar"><i style="width:${pct}%;background:${hpColor(pct)}"></i></div>
    <div class="small">${m.hp}/${m.max} HP</div></div></div>`;
    }
    function nextLoc() {
      G.nodeAt[G.loc] = LOC[G.loc].ev.length;
      G.loc++; G.maxLoc = Math.max(G.maxLoc, G.loc); G.node = 0; G.nodeAt[G.loc] = 0;
      autosave(); renderMap();
    }
    /* sai da localização atual, guardando ou apagando o progresso conforme a regra dela */
    function leaveCurrentLoc() {
      const cur = LOC[G.loc];
      if (cur.resetOnLeave && G.node < cur.ev.length) { delete G.nodeAt[G.loc]; }
      else { G.nodeAt[G.loc] = G.node; }
    }
    function travelTo(i) {
      if (i > G.maxLoc) return;
      leaveCurrentLoc();
      G.loc = i;
      if (i < G.maxLoc) G.node = LOC[i].ev.length; // áreas já vencidas ficam concluídas
      else G.node = G.nodeAt[i] !== undefined ? G.nodeAt[i] : 0; // volta à fronteira: restaura o progresso real dela
      autosave(); renderMap();
    }
    function openWorldMap() {
      const o = $('mapOvl'); o.classList.add('on');
      o.innerHTML = `<h3>${t('travelT')}</h3><div class="scroll"><div class="mapgrid">` +
        LOC.map((l, i) => {
          const unlocked = i <= G.maxLoc, here = i === G.loc;
          const cls = (unlocked ? (i < G.maxLoc ? 'done' : '') : 'lock') + (here ? ' here' : '');
          return `<button class="mapnode ${cls}" ${unlocked && !here ? '' : 'disabled'} onclick="travelTo(${i})">
       <span class="dot"></span><span style="flex:1">
       <span class="nm">${unlocked ? bi(l.n) : '???'}</span><br>
       <span class="small">${here ? t('youAreHere') : unlocked ? t('travel', bi(l.n)) : t('locked')}</span></span></button>`;
        }).join('') + `</div></div><button class="btn dark" onclick="renderMap()">${t('back')}</button>`;
    }
    const CARD_BGS = [
      'linear-gradient(135deg, #ffd76a, #f6a04c 60%, #f07a5a)',
      'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
      'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
      'linear-gradient(135deg, #cd9cf2 0%, #f6f3ff 100%)'
    ];
    window.setCardBg = function(i) { G.cardBg = i; autosave(); openCard(); };
    function openCard() {
      const o = $('mapOvl'); o.classList.add('on');
      const badges = BADGE_ORDER.map((b, i) => `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/${i + 1}.png" class="bigbdg ${G.badges.includes(b) ? 'on' : ''}" title="${bi(BADGE[b])}" alt="">`).join('');
      const bg = CARD_BGS[G.cardBg || 0];
      const bgBtns = CARD_BGS.map((b, i) => `<button type="button" onclick="setCardBg(${i})" style="width:24px;height:24px;border-radius:50%;background:${b};border:2px solid ${G.cardBg === i ? '#fff' : 'transparent'};cursor:pointer"></button>`).join('');
      o.innerHTML = `<h3>${t('card')}</h3><div class="scroll">
   <div class="tcard" style="background:${bg}">
     <h4>${esc(G.pname)}</h4>
     <div style="display:flex;gap:10px;align-items:center">
       <img class="av" src="${PLSP[G.gender] || PLSP.boy}" onerror="plspFallback(this,'${G.gender}')" alt="">
       <div style="flex:1">
         <div class="rowl"><span>${t('playtime')}</span><b>${hhmmss(totalSeconds())}</b></div>
         <div class="rowl"><span>${t('money')}</span><b>¥${G.money}</b></div>
         <div class="rowl"><span>${t('dex')}</span><b>${Object.keys(G.caught).length}/151</b></div>
         <div class="rowl"><span>${t('wins')}</span><b>${G.wins || 0}</b></div>
         <div class="rowl"><span>${t('shinyC')}</span><b>${G.shinyCount || 0}</b></div>
       </div></div>
     <div class="badgegrid">${badges}</div>
   </div>
   <div style="display:flex;gap:8px;margin-top:16px;justify-content:center">${bgBtns}</div>
   <div class="card" style="margin-top:16px"><div class="small">${t('team')}</div>
     <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">${G.party.map(partyRow).join('')}</div></div>
   </div><button class="btn dark" onclick="renderMap()">${t('back')}</button>`;
    }
    function healAll() {
      if (LOC[G.loc].noheal) { flashMap(t('healLocked')); return; }
      G.party.forEach(m => { if (m.dead) return; m.hp = m.max; m.status = null; m.slp = 0; m.moves.forEach(x => x.pp = x.max); });
      G.lastCenter = G.loc; autosave();
      renderMap(); flashMap(t('healed'));
    }
    function flashMap(txt) {
      const o = $('mapOvl'); o.classList.add('on');
      o.innerHTML = `<div style="margin:auto;text-align:center;padding:10px">
    <p style="font-family:var(--pix);font-size:10px;line-height:1.9">${txt}</p>
    <button class="btn red" onclick="renderMap()">${t('ok')}</button></div>`;
    }
    function itemImg(k) {
      return `<img src="${ITSP + ITEMS[k].sprite}.png" onerror="this.style.display='none'"
  style="width:26px;height:26px;image-rendering:pixelated" alt="">`;
    }
    function shopItemKeys() {
      const diff = (G.rules && G.rules.difficulty) || 'normal';
      return Object.keys(ITEMS).filter(k => { 
        if (k === 'expall') {
          if (diff !== 'normal') return false; // Fácil já tem de graça; Difícil nunca tem
          if (G.rules && G.rules.xpShare) return false; // já comprado
          return true;
        }
         return !['key', 'tm', 'fossil'].includes(ITEMS[k].kind); });
    }
    function openShop() {
      const o = $('mapOvl'); o.classList.add('on');
      o.innerHTML = `<h3>${t('shop')} · ¥${G.money}</h3><div class="scroll">` +
        shopItemKeys().map(k => {
          const it = ITEMS[k], locked = !itemUnlocked(k);
          return `<div class="item-row" style="${locked ? 'opacity:.4' : ''}">
     <div style="display:flex;gap:8px;align-items:center">${itemImg(k)}
       <div><div style="font-family:var(--pix);font-size:9px">${locked ? '🔒 ' : ''}${bi(it.n)}</div>
       <div class="small">${locked ? t('badges') + ' ' + ITEM_TIER[k] + '+' : bi(it.d)}</div></div></div>
     <button class="btn gold" ${(locked || G.money < it.price) ? 'disabled' : ''} onclick="buy('${k}')">¥${it.price}</button></div>`;
        }).join('') +
        `</div><button class="btn dark" onclick="renderMap()">${t('exitShop')}</button>`;
    }
    function buy(k) {
      const it = ITEMS[k]; if (G.money < it.price || !itemUnlocked(k)) return;
      G.money -= it.price;
      if (k === 'expall') { G.rules.xpShare = true; flashMap(t('boughtExpall')); }
      else G.bag[k] = (G.bag[k] || 0) + 1;
      autosave(); openShop();
    }
    let bagTab = 'items';
    function openBag(inBattle, tab) {
      if (tab) bagTab = tab; else if (inBattle) bagTab = 'items';
      const o = inBattle ? $('ovl') : $('mapOvl'); o.classList.add('on');
      const showKey = bagTab === 'key';
      const list = Object.entries(G.bag).filter(([k, v]) => v > 0 && ITEMS[k] && ((ITEMS[k].kind === 'key') === showKey));
      const tabs = inBattle ? '' : `<div class="seg" style="margin-bottom:6px">
     <button class="btn ${!showKey ? 'gold' : 'dark'}" onclick="openBag(false,'items')">${t('items')}</button>
     <button class="btn ${showKey ? 'gold' : 'dark'}" onclick="openBag(false,'key')">${t('keyItems')}</button></div>`;
      o.innerHTML = `<h3>${t('bag')}</h3><div class="scroll">` + tabs +
        (list.length ? list.map(([k, v]) => {
          const it = ITEMS[k];
          const usable = inBattle ? (it.kind !== 'stone' && it.kind !== 'mint' && it.kind !== 'ppone' && it.kind !== 'ppall' && it.kind !== 'fossil' && it.kind !== 'key') : it.kind !== 'ball';
          const sellable = !inBattle && it.kind !== 'key' && it.price;
          return `<div class="item-row"><div style="display:flex;gap:8px;align-items:center">${itemImg(k)}
       <div><div style="font-family:var(--pix);font-size:9px">${bi(it.n)} ×${v}</div>
       <div class="small">${bi(it.d)}</div></div></div>
       <div style="display:flex;gap:4px">
       ${usable ? `<button class="btn blue" onclick="useItem('${k}',${!!inBattle})">${t('use')}</button>`
              : (it.kind === 'key' ? '' : `<span class="small">${t('onlyBattle')}</span>`)}
       ${sellable ? `<button class="btn dark" onclick="sellItem('${k}')">${t('sell')}</button>` : ''}
       </div></div>`;
        }).join('')
          : `<p class="small">${showKey ? t('noKeyItems') : t('bagEmpty')}</p>`) +
        `</div><button class="btn dark" onclick="closeOvl(${!!inBattle})">${t('back')}</button>`;
    }
    function sellItem(k) {
      const it = ITEMS[k]; if (!it.price || it.kind === 'key') return;
      const half = Math.floor(it.price / 2);
      if (!confirm(t('sellConfirm', bi(it.n), half))) return;
      G.bag[k]--; if (G.bag[k] <= 0) delete G.bag[k];
      G.money += half; autosave(); openBag(false, bagTab);
    }
    function closeOvl(inBattle) { if (inBattle) { $('ovl').classList.remove('on'); menuMain(); } else renderMap(); }

    /* ---------- POKÉDEX ---------- */
    function mewReady() { return Object.keys(G.caught).filter(id => +id !== 151).length >= 150 && !G.caught[151]; }
    function openDex() {
      const o = $('mapOvl'); o.classList.add('on');
      const mewBtn = mewReady() ? `<div class="card" style="text-align:center"><p class="small">${t('mewReady')}</p>
    <button class="btn gold" onclick="claimMew()">${t('mewClaim')}</button></div>` : '';
      o.innerHTML = `<h3>${t('dex')} · ${t('caught')} ${Object.keys(G.caught).length} · ${t('seen')} ${Object.keys(G.seen).length}</h3>
   ${mewBtn}
   <div class="scroll"><div class="dexgrid">`+
        DEX.map(p => {
          const c = G.caught[p.id], s = G.seen[p.id];
          return `<button class="dexcell ${c ? 'caught' : s ? 'seen' : 'unk'}" onclick="dexEntry(${p.id})">
       <img src="${iconStatic(p.id)}" alt=""></button>`;
        }).join('') + `</div></div><button class="btn dark" onclick="renderMap()">${t('back')}</button>`;
    }
    function claimMew() {
      if (!mewReady()) return;
      const mew = makeMon(151, 30, false);
      if (G.party.length < 6) G.party.push(mew); else G.box.push(mew);
      G.caught[151] = 1; G.seen[151] = 1;
      autosave(); openDex();
    }
    function evoInfo(id) {
      const p = DEX[id - 1];
      if (p.evo) return t('evoTipLevel', p.evo.lv);
      for (const stoneKey in STONE_EVO) {
        if (+stoneKey === id) {
          const s = STONE_EVO[id]; const stoneName = Object.keys(s)[0];
          const itKey = { fire: 'fire', water: 'water', thunder: 'thunder', leaf: 'leaf', moon: 'moon' }[stoneName];
          return t('evoTipStone', itKey ? bi(ITEMS[itKey].n) : stoneName);
        }
      }
      return null;
    }
    /* Descrições curtas dos 151 Pokémon */
    const DEX_DESC = {
      1: 'Uma semente cresce nas suas costas. Absorve luz solar para criar energia.',
      2: 'O botão nas costas floresce quando absorve energia do sol.',
      3: 'Seu Poder de Flor libera um perfume enebriante que relaxa os inimigos.',
      4: 'Tem uma chama na ponta da cauda que reflete seu humor.',
      5: 'Fica muito agressivo quando sente perigo. A chama fica azul.',
      6: 'Cospe fogo que chega a 1400°C. Dissolve até pedra.',
      7: 'A casca de tartaruga pode resistir qualquer ataque. Usa jatos de água.',
      8: 'Nada velozmente usando as orelhas como propulsores.',
      9: 'Os canhões de água nas costas disparam com precisão incrível.',
      10: 'Rasteja pelas florestas com seu corpo macio.',
      11: 'Permanece imóvel enquanto se prepara para evoluir.',
      12: 'Suas escamas de asas têm pó que causa amnésia ao toque.',
      13: 'Corre em grande velocidade usando seu ferrão venenoso.',
      14: 'Permanece quieto enquanto acumula veneno em seu corpo.',
      15: 'Voa em enxames de 6. Cada grupo tem um Beedrill líder.',
      16: 'Muito rápido no ar apesar de seu pequeno corpo.',
      17: 'Voa por grandes distâncias usando as correntes de ar.',
      18: 'Voa rápido como um jato — atingindo 1500 km/h.',
      19: 'Seus dentes crescem sem parar. Rói a noite toda.',
      20: 'Quando os dentes ficam longos demais, quebram e crescem novamente.',
      21: 'Gosta de cantar músicas desafinadas de madrugada.',
      22: 'Carrega presas em seus pés. Pode levantar até 40 kg.',
      23: 'Move as marcas nas costas para parecer que tem olhos falsos.',
      24: 'Estrangula inimigos com seu corpo. O veneno é mortal.',
      25: 'Armazena eletricidade nas bochechas rosadas. Gosta de ser do grupo.',
      26: 'Libera raios de 100.000 volts. Mata a grama ao redor.',
      27: 'Cobre o corpo com areia para se proteger e ataca com garras.',
      28: 'Suas garras são extremamente duras. Pode cavar rapidamente.',
      29: 'Tem espinhos venenosos que usa para se defender.',
      30: 'Possui veneno poderoso nas costas que usa ao escalar paredes.',
      31: 'A rainha da colméia. Possui chifres envenenados poderosos.',
      32: 'Emite ondas ultrassônicas pelos chifres que paralisam inimigos.',
      33: 'Usa os chifres para hipnotizar inimigos e então atacar.',
      34: 'O mais poderoso dos tipos venenosos. Resistente a qualquer coisa.',
      35: 'Seu canto é tão doce que faz qualquer um adormecer.',
      36: 'Hipnotiza com os olhos e usa poderes mágicos.',
      37: 'Usa o pelo dourado para refletir ataques inimigos.',
      38: 'Solta chamas de suas nove caudas. Dizem ter poderes místicos.',
      39: 'Seu corpo é macio como um marshmallow. Gosta de abraços.',
      40: 'Solta gritos tão altos que podem ser ouvidos por 1 km.',
      41: 'Emite ultrassom para navegar no escuro das cavernas.',
      42: 'Bate as asas rapidamente criando ondas de som que paralisam.',
      43: 'Libera sporos ao bater suas pétalas. Causa sono.',
      44: 'Cheira muito mal. O perfume é tão forte que a maioria foge.',
      45: 'Lança pó de esporos que causam paralisia e sono.',
      46: 'Parasita outros Pokémon para absorver seus nutrientes.',
      47: 'Controla o hospedeiro com os fungos que crescem nas costas.',
      48: 'Os olhos grandes podem hipnotizar qualquer oponente.',
      49: 'As asas com padrões de olho hipnotizam quem olha diretamente.',
      50: 'Pode escavar um túnel de 10 metros em um único dia.',
      51: 'Seu pelo na barriga protege dos ataques quando escava.',
      52: 'Lava os alimentos antes de comer. Usa as garras com agilidade.',
      53: 'Usa sua cauda comprida para pegar coisas. Caçador hábil.',
      54: 'Tem bochecha macia que pode armazenar alimentos.',
      55: 'Nada a 10 km/h. Usa os dedos como propulsores.',
      56: 'Extremamente ágil. Usa truques para confundir inimigos.',
      57: 'Aprende truques rapidamente. Imitador natural.',
      58: 'Fica com raiva facilmente. Quanto mais bravo, mais quente fica.',
      59: 'Corre tão rápido que parece uma bola de fogo.',
      60: 'Usa as ventosas nas patas para grudar em qualquer superfície.',
      61: 'Pula em poças com alegria. Ataca com língua comprida.',
      62: 'O maior e mais forte dos Poliwag. Pode levantar um navio.',
      63: 'Teletransporta-se enquanto dorme. Usa psíquico para se defender.',
      64: 'Os braços ficam mais fortes ao usar poderes psíquicos.',
      65: 'Tem um QI de 5.000. Resolve qualquer problema em instantes.',
      66: 'Fortalece os músculos ao levantar 1.000 vezes.',
      67: 'Os músculos nunca se cansam. Luta mesmo dormindo.',
      68: 'Tão forte que pode carregar um prédio inteiro.',
      69: 'Absorve nutrientes com as raízes e cospe ácido.',
      70: 'Pode derrubar uma pessoa com seu ácido concentrado.',
      71: 'Captura presas com suas folhas e as dissolve com ácido.',
      72: 'O veneno no tentáculos paralisa a presa imediatamente.',
      73: 'Possui 80 tentáculos venenosos que atacam simultaneamente.',
      74: 'Rola para esmagar inimigos. Pode atingir 100 km/h em ladeiras.',
      75: 'Explode quando irritado. Quanto mais pesado, mais poderoso.',
      76: 'Explode com tanta força que deixa crateras no chão.',
      77: 'Galopa mais rápido do que um relâmpago. Casco duro como diamante.',
      78: 'Suas chamas ficam mais quentes quanto mais corre. Imparável.',
      79: 'Tem o cérebro mais pequeno de qualquer Pokémon. Extremamente lento.',
      80: 'O chifre na cabeça permite projetar ilusões na mente dos outros.',
      81: 'Um Pokémon feito de ímãs. Absorve os campos magnéticos da Terra.',
      82: 'Emite campos eletromagnéticos que atraem metais.',
      83: 'Protege seu território com o pau. Não larga jamais.',
      84: 'Suas cabeças não concordam entre si. Corre em círculos confusos.',
      85: 'Quanto mais corre, mais veloz fica. Impossível de alcançar.',
      86: 'Dorme 20 horas por dia e acorda apenas para comer.',
      87: 'Usa a testa para criar blocos de gelo. Sai do mar para dormir.',
      88: 'Seu corpo é feito de lixo e gases tóxicos acumulados.',
      89: 'Evolui de Grimer em ambientes extremamente poluídos.',
      90: 'Quando irritado, fecha a concha e nada em alta velocidade.',
      91: 'Usa as garras para abrir conchas. Pode nadar mesmo no congelado.',
      92: 'É formado por gases tóxicos. Ataca com névoa venenosa.',
      93: 'Teleporta-se para evitar ataques. Confunde inimigos com ilusões.',
      94: 'Absorve energia das pessoas ao assombrar. Aumenta ao nível.',
      95: 'Dorme 365 dias por ano. Amassa qualquer coisa que tente esmagá-lo.',
      96: 'Libera ondas de sono que fazem qualquer um dormir.',
      97: 'Absorve os sonhos dos adormecidos para se alimentar.',
      98: 'Aperta os inimigos com suas pinças duras. Vivem em grupos.',
      99: 'As pinças podem esmagam com 10.000 HP de força.',
      100: 'Carrega eletricidade estática. Explode quando sobrecarregado.',
      101: 'Emite raios de seu corpo a todo momento. Perigoso.',
      102: 'Seis ovos que se ligam telepáticamente. Inseparáveis.',
      103: 'Usa sua psíquica para atacar. Pode lançar cocos pela cabeça.',
      104: 'O crânio de seu chapéu pertencia ao seu antigo dono que morreu.',
      105: 'Usa ossos para atacar. Adora jogar seus ossos como bumerangues.',
      106: 'Pode saltar quase 1 metro de altura e chutar com força.',
      107: 'Usa combinações de socos tão rápidas que são invisíveis.',
      108: 'Usa a língua para envolver e apanhar insetos.',
      109: 'Emite um gás tão fétido que pode fazer qualquer um desmaiar.',
      110: 'Seus gases causam uma confusão mental em quem os inala.',
      111: 'Sua armadura dura pode resistir a qualquer ataque frontal.',
      112: 'Pode perfurar um tanque com seu chifre poderoso.',
      113: 'Possui ovos curativos em suas costas. Compartilha com feridos.',
      114: 'Usa os tentáculos para se segurar. Gosta de lugares úmidos.',
      115: 'Carrega seus filhotes na bolsa. Muito protetora.',
      116: 'Usa a cauda para se mover pelos corais. Muito ágil na água.',
      117: 'Sai em grupos para pescar. Usa rajada de água para atacar.',
      118: 'Usa o chifre para defesa. Rápido na água.',
      119: 'Salta 10 m para atacar presas com seu chifre venenoso.',
      120: 'Mesmo sem cérebro, age de forma coordenada.',
      121: 'O núcleo central controla os movimentos dos tentáculos.',
      122: 'Imita outros Pokémon e gestos humanos com precisão.',
      123: 'Ataca com a velocidade de um raio. Muito temido.',
      124: 'Seu canto hipnotiza machos e os usa para batalhar.',
      125: 'Acumula 100.000 volts. Lança raios do chifre.',
      126: 'Cospe fogo de 3000°C. Nada o esfria.',
      127: 'Suas pinças podem partir um tronco ao meio facilmente.',
      128: 'Corre a 130 km/h com seus três chifres potentes.',
      129: 'Extremamente fraco. Pula sem propósito fora da água.',
      130: 'Transforma-se em Gyarados ao crescer. Frenético e destrutivo.',
      131: 'Congela tudo ao redor com seu hálito gelado. Majestuoso.',
      132: 'Pode copiar qualquer Pokémon que encontra. DNA versátil.',
      133: 'Tem um DNA especial que pode evoluir de muitas formas.',
      134: 'Nada a 80 km/h. Pode resfriar a água ao redor.',
      135: 'Acumula eletricidade e libera 10.000 volts.',
      136: 'Tem chamas de 1650°C no pelo. Extremamente agressivo.',
      137: 'Um Pokémon feito de dados digitais. Criado por humanos.',
      138: 'Pokémon extinto ressuscitado de fóssil.',
      139: 'Usa seus tentáculos de pedra para esmagr presas.',
      140: 'Pokémon extinto com carapaça blindada.',
      141: 'Suas garras cortam como navalhas. Veloz na água.',
      142: 'Voa a 180 km/h. Existiu na era dos dinossauros.',
      143: 'Engole tudo ao redor sem parar. Bloqueia estradas inteiras.',
      144: 'O pássaro de gelo lendário. Congela a umidade do ar.',
      145: 'O pássaro de raio lendário. Controla tempestades elétricas.',
      146: 'O pássaro de chamas lendário. Renova suas penas em fogo.',
      147: 'Um Pokémon Dragon raro. Normalmente vive em locais aquáticos.',
      148: 'Torna-se mais resplandecente ao crescer. Adora locais limpos.',
      149: 'O mais forte dos Pokémon Dragon. Voa o globo em 16 horas.',
      150: 'Criado por cientistas a partir de experimentos com Mew.',
      151: 'O Pokémon ancestral. Diz-se que contém o DNA de todos.'
    };
    function dexHabitatHint(id) {
      const currentMax = G ? Math.max(G.loc, G.maxLoc || 0) : 0;
      const foundLocs = [];
      let futureLocsCount = 0;

      LOC.forEach((l, idx) => {
        const isWild = (l.wild && l.wild.includes(id)) || (l.wildN && l.wildN.includes(id));
        const isEv = l.ev && l.ev.some(e => (e.t === 'L' && e.id === id) || (e.t === 'G' && e.id === id) || (e.t === 'story_gift' && e.id === id) || (e.t === 'C' && e.ids && e.ids.includes(id)));
        if (isWild || isEv) {
          if (idx <= currentMax) {
            foundLocs.push(bi(l.n));
          } else {
            futureLocsCount++;
          }
        }
      });

      if ([1, 4, 7].includes(id)) {
        return {
          pt: '🏠 Pokémon Inicial — Escolhido no Laboratório do Prof. Carvalho em Pallet',
          en: '🏠 Starter Pokémon — Chosen at Prof. Oak\'s Lab in Pallet Town',
          es: '🏠 Pokémon Inicial — Elegido en el Laboratorio del Prof. Oak en Pueblo Paleta'
        };
      }
      if ([138, 140, 142].includes(id)) {
        const fNames = {
          138: { pt: 'Fóssil Hélix (Monte Lua)', en: 'Helix Fossil (Mt. Moon)', es: 'Fósil Hélix (Monte Moon)' },
          140: { pt: 'Fóssil Domo (Monte Lua)', en: 'Dome Fossil (Mt. Moon)', es: 'Fósil Domo (Monte Moon)' },
          142: { pt: 'Âmbar Antigo (Museu de Pewter)', en: 'Old Amber (Pewter Museum)', es: 'Ámbar Antiguo (Museo de Plateada)' }
        };
        return {
          pt: `🧬 Fóssil ressuscitado no Laboratório de Cinnabar a partir de ${fNames[id].pt}`,
          en: `🧬 Restored at Cinnabar Lab from ${fNames[id].en}`,
          es: `🧬 Fósil restaurado en el Laboratorio de Canela a partir de ${fNames[id].es}`
        };
      }
      if (id === 151) {
        return {
          pt: '✨ Recompensa mítica ao completar os 150 registros da Pokédex',
          en: '✨ Mythical reward for completing 150 Pokédex entries',
          es: '✨ Recompensa mítica al completar los 150 registros de la Pokédex'
        };
      }

      let evoHint = null;
      for (let i = 0; i < DEX.length; i++) {
        const pre = DEX[i];
        if (pre.evo && pre.evo.id === id) {
          evoHint = {
            pt: `Evolui de ${dexName(pre.id)} no Nv ${pre.evo.lv}`,
            en: `Evolves from ${dexName(pre.id)} at Lv ${pre.evo.lv}`,
            es: `Evoluciona de ${dexName(pre.id)} en Nv ${pre.evo.lv}`
          };
          break;
        }
      }
      if (!evoHint) {
        for (const stonePreId in STONE_EVO) {
          const evoMap = STONE_EVO[stonePreId];
          for (const stName in evoMap) {
            if (evoMap[stName] === id) {
              const itKey = { fire: 'fire', water: 'water', thunder: 'thunder', leaf: 'leaf', moon: 'moon' }[stName];
              const stLabel = itKey ? bi(ITEMS[itKey].n) : stName;
              evoHint = {
                pt: `Evolui de ${dexName(+stonePreId)} usando ${stLabel}`,
                en: `Evolves from ${dexName(+stonePreId)} using ${stLabel}`,
                es: `Evoluciona de ${dexName(+stonePreId)} usando ${stLabel}`
              };
              break;
            }
          }
          if (evoHint) break;
        }
      }

      if (foundLocs.length > 0) {
        const unique = [...new Set(foundLocs)].join(', ');
        const base = {
          pt: `📍 <b style="color:#7bc47f">Áreas já exploradas:</b> ${unique}`,
          en: `📍 <b style="color:#7bc47f">Explored areas:</b> ${unique}`,
          es: `📍 <b style="color:#7bc47f">Áreas exploradas:</b> ${unique}`
        };
        if (evoHint) {
          base.pt += `<br><span style="opacity:.8;font-size:11px">(${evoHint.pt})</span>`;
          base.en += `<br><span style="opacity:.8;font-size:11px">(${evoHint.en})</span>`;
          base.es += `<br><span style="opacity:.8;font-size:11px">(${evoHint.es})</span>`;
        }
        return base;
      }

      if (futureLocsCount > 0) {
        return {
          pt: '🔒 <i style="color:#e0a050">Área ainda não descoberta</i> — Este Pokémon habita rotas ou locais de Kanto que você ainda não visitou! Continue sua jornada.',
          en: '🔒 <i style="color:#e0a050">Undiscovered Area</i> — This Pokémon lives in routes or areas of Kanto you haven\'t visited yet! Keep exploring.',
          es: '🔒 <i style="color:#e0a050">Área no descubierta</i> — ¡Este Pokémon vive en zonas de Kanto que aún no has visitado! Continúa tu viaje.'
        };
      }

      if (evoHint) {
        return {
          pt: `✨ <b style="color:#a8b4d8">Evolução:</b> ${evoHint.pt}`,
          en: `✨ <b style="color:#a8b4d8">Evolution:</b> ${evoHint.en}`,
          es: `✨ <b style="color:#a8b4d8">Evolución:</b> ${evoHint.es}`
        };
      }

      return {
        pt: '❓ Habitat misterioso ou raro.',
        en: '❓ Rare or mysterious habitat.',
        es: '❓ Hábitat misterioso o raro.'
      };
    }

    function dexEntry(id) {
      const p = DEX[id - 1], known = !!G.seen[id];
      const animGif = `https://play.pokemonshowdown.com/sprites/gen5ani/${dexName(id).toLowerCase().replace(/\W/g, '')}.gif`;
      const staticSrc = known ? sprite({ id, shiny: false }, false) : iconStatic(id);
      const desc = DEX_DESC[id] || '';
      $('mapOvl').innerHTML = `<h3>#${String(id).padStart(3, '0')} ${known ? dexName(id) : '???'}</h3>
   <div class="scroll">
   <div class="card" style="text-align:center;padding:30px 10px;background:radial-gradient(ellipse 80% 70% at 50% 55%,${TCOLOR[p.types[0]]}25,transparent 75%)">
     <div style="position:relative;width:96px;height:96px;margin:0 auto;display:flex;align-items:flex-end;justify-content:center">
       <div style="position:absolute;bottom:4px;width:80px;height:16px;border-radius:50%;background:radial-gradient(ellipse,${TCOLOR[p.types[0]]}50,transparent 70%);filter:blur(3px)"></div>
       ${known
          ? `<img src="${animGif}" onerror="this.onerror=null;this.src='${staticSrc}'" alt="${dexName(id)}"
              style="max-width:96px;max-height:96px;image-rendering:pixelated;object-fit:contain;object-position:bottom center;transform-origin:bottom center;position:relative;z-index:2;filter:drop-shadow(0 6px 16px rgba(0,0,0,.7));transform:scale(1.5)">`
          : `<img src="${iconStatic(id)}" alt="" style="width:96px;image-rendering:pixelated;filter:brightness(0) opacity(.45)">`
        }
     </div>
     <div style="font-family:var(--pix);font-size:10px;color:var(--gold);margin-top:12px">${known ? dexName(id) : '?????'}</div>
     <div class="mon-types" style="justify-content:center;margin:6px 0">${known ? p.types.map(tg).join('') : '<span class="tag" style="background:#555">???</span>'}</div>
     ${desc && known ? `<p style="font-size:13px;line-height:1.6;color:#a8b4d8;margin:6px 0 0;text-align:center;padding:0 4px">${desc}</p>` : ''}
     <div class="small" style="margin-top:6px;opacity:.7">${known ? 'BST ' + p.bst + ' · ' + p.ja : '?????'}</div>
   </div>
   <div class="card" style="margin-top:6px;text-align:left;padding:10px 14px">
     <div style="font-family:var(--pix);font-size:9px;color:var(--gold);margin-bottom:6px">🗺️ ${t('habitatTitle')}</div>
     <div class="small" style="line-height:1.5">${bi(dexHabitatHint(id))}</div>
   </div>
   ${known ? `<div class="card">${effPanel(p.types)}</div>` : `<div class="card"><p class="small" style="line-height:1.6">${t('notRegistered')}</p></div>`}
   </div><button class="btn dark" onclick="openDex()">${t('back')}</button>`;
    }
    function buyEvoTip(id, cost) {
      if (G.money < cost) { flashMap(t('evoTipNoMoney')); return; }
      G.money -= cost; autosave();
      flashMap(evoInfo(id));
      dexEntry(id);
    }
    function catLabel(d) { return d.p === 0 ? t('catStatus') : (d.c === 'f' ? t('catPhysical') : t('catSpecial')); }
    function secEffect(d) {
      if (!d.e) return '';
      if (d.e.buff) { const k = d.e.buff; return '↑ ' + t('stat' + k.charAt(0).toUpperCase() + k.slice(1)); }
      const st = Object.keys(d.e)[0], chance = d.e[st];
      return chance + '% ' + (STPT[st] ? (STPT[st][LANG] || STPT[st].en) : st);
    }
    function effPanel(types) {
      const weak = [], res = [], imm = [];
      ALLT.forEach(a => {
        const e = eff(a, types);
        if (e === 0) imm.push([a, e]); else if (e > 1) weak.push([a, e]); else if (e < 1) res.push([a, e]);
      });
      const row = (lbl, arr) => `<div class="effrow"><b>${lbl}</b>${arr.length ? arr.map(x => `<span class="tag" style="background:${TCOLOR[x[0]]}">${TP(x[0])}${x[1] === 4 ? ' ×4' : ''}</span>`).join('')
        : `<span class="small">${t('nothing')}</span>`}</div>`;
      return row(t('weakTo'), weak) + row(t('resists'), res) + row(t('immuneTo'), imm);
    }

    /* ---------- TIME, DETALHES, APELIDOS ---------- */
    function openParty(inBattle, forced) {
      const o = inBattle ? $('ovl') : $('mapOvl'); o.classList.add('on');
      const rows = G.party.map((m, i) => {
        const pct = Math.max(0, m.hp / m.max * 100), isAct = inBattle && B && i === B.me, dis = inBattle && (m.hp <= 0 || isAct || m.dead);
        const handle = (!inBattle && G.party.length > 1) ? `<div class="draghandle" onpointerdown="event.stopPropagation();partyDragStart(event,${i})">⠿</div>` : '';
        return `<div class="mon-row ${m.hp <= 0 ? 'fnt' : ''} ${isAct ? 'active' : ''}" style="cursor:pointer" data-idx="${i}"
      onclick="${dis ? '' : (inBattle ? `doSwitch(${i})` : `monDetail(${i})`)}">
      <img src="${icon(m.id, m.shiny)}" alt=""><div style="flex:1">
      <div class="nm">${m.shiny ? '<span class="shiny">★</span> ' : ''}${monName(m)}
        <span style="opacity:.7">Nv${m.lv}</span> ${m.status ? statusTag(m.status) : ''} ${m.dead ? `<span class="st" style="background:#333">${t('nuzTag')}</span>` : ''}</div>
      <div class="bar"><i style="width:${pct}%;background:${hpColor(pct)}"></i></div>
      <div class="small">${m.hp}/${m.max} HP ${isAct ? '· ' + t('inField') : ''}</div></div>${handle}</div>`;
      }).join('');
      o.innerHTML = `<h3>${inBattle ? (forced ? t('chooseNext') : t('switchTitle')) : t('team')}</h3>
   ${!inBattle ? `<div class="small" style="margin-bottom:4px">${t('teamOrder')}</div>
   <button class="btn dark" style="margin-bottom:6px" onclick="openPC()">${t('pc')}</button>` : ''}
   <div class="scroll">${rows}</div>
   ${forced ? '' : `<button class="btn dark" onclick="closeOvl(${!!inBattle})">${t('back')}</button>`}`;
    }
    /* ---------- reordenar time: segurar e arrastar ---------- */
    let PDRAG = null;
    function partyDragStart(ev, i, isMap) {
      const row = ev.currentTarget.closest('.mon-row, .mon-spotlight');
      const pid = ev.pointerId;
      let holding = false;
      const holdT = setTimeout(() => {
        holding = true; row.classList.add('dragging');
        try { row.setPointerCapture(pid); } catch (e) { }
        if (navigator.vibrate) navigator.vibrate(12);
      }, 160);
      PDRAG = { i };
      function onMove(e) {
        if (!holding) return;
        e.preventDefault();
        const cx = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0].clientX);
        const cy = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0].clientY);
        const el = document.elementFromPoint(cx, cy);
        const over = el && el.closest && el.closest('.mon-row[data-idx], .mon-spotlight[data-idx]');
        if (over) {
          const j = +over.dataset.idx;
          if (j !== PDRAG.i) {
            const arr = G.party, tmp = arr[PDRAG.i]; arr[PDRAG.i] = arr[j]; arr[j] = tmp;
            PDRAG.i = j; autosave(); isMap ? renderMap() : openParty(false);
            const nrow = document.querySelector(`.mon-row[data-idx="${j}"], .mon-spotlight[data-idx="${j}"]`);
            if (nrow) nrow.classList.add('dragging');
          }
        }
      }
      function onUp() {
        clearTimeout(holdT); holding = false; PDRAG = null;
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerup', onUp);
        document.removeEventListener('pointercancel', onUp);
      }
      document.addEventListener('pointermove', onMove, { passive: false });
      document.addEventListener('pointerup', onUp);
      document.addEventListener('pointercancel', onUp);
    }
    /* ---------- PC (Caixa) ---------- */
    function openPC() {
      const o = $('mapOvl'); o.classList.add('on');
      const rows = G.box.map((b, j) => `<div class="mon-row">
    <img src="${icon(b.id, b.shiny)}" alt=""><div style="flex:1">
    <div class="nm">${b.shiny ? '<span class="shiny">★</span> ' : ''}${monName(b)} <span style="opacity:.7">Nv${b.lv}</span></div>
    <div class="small">${b.hp}/${b.max} HP</div></div>
    <div style="display:flex;gap:4px">
      <button class="btn blue" style="padding:4px 8px" ${G.party.length >= 6 ? 'disabled' : ''} onclick="pcWithdraw(${j})">${t('withdraw')}</button>
      <button class="btn dark" style="padding:4px 8px" onclick="pcRelease(${j})">${t('release')}</button>
    </div></div>`).join('');
      o.innerHTML = `<h3>${t('pc')}</h3><div class="scroll">
   ${G.box.length ? rows : `<p class="small">${t('pcEmpty')}</p>`}
   </div><button class="btn dark" onclick="openParty(false)">${t('back')}</button>`;
    }
    function pcWithdraw(j) {
      if (G.party.length >= 6) return;
      G.party.push(G.box.splice(j, 1)[0]); autosave(); openPC();
    }
    function pcRelease(j) {
      if (!confirm(t('releaseConfirm', monName(G.box[j])))) return;
      G.box.splice(j, 1); autosave(); openPC();
    }
    /* ---------- MENTA (troca de natureza) ---------- */
    function openMintPicker(idx) {
      const m = G.party[idx];
      $('mapOvl').innerHTML = `<h3>${t('pickNature')}</h3><div class="scroll">
   ${NATURES.map((nt, ni) => {
        const statLbl = k => t('stat' + k.charAt(0).toUpperCase() + k.slice(1));
        const desc = nt.up ? `${statLbl(nt.up)} ▲ / ${statLbl(nt.down)} ▼` : t('natureNeutral');
        return `<button class="mon-row" ${ni === m.nature ? 'style="outline:2px solid var(--gold)"' : ''} onclick="setMintNature(${idx},${ni})">
       <div style="flex:1"><div class="nm">${natureName(nt)}</div>
       <div class="small">${desc}</div></div></button>`;
      }).join('')}
   </div><button class="btn dark" onclick="monDetail(${idx})">${t('back')}</button>`;
    }
    function setMintNature(idx, ni) {
      const m = G.party[idx];
      G.bag.mint = (G.bag.mint || 1) - 1; if (G.bag.mint <= 0) delete G.bag.mint;
      m.nature = ni; recalc(m, false); autosave();
      flashMap(t('natureSet', monName(m), natureName(NATURES[ni])));
      monDetail(idx);
    }
    /* ---------- PP: Éter (um golpe) ---------- */
    function openPPPicker(idx, k) {
      const m = G.party[idx];
      $('mapOvl').innerHTML = `<h3>${t('pickMoveForPP')}</h3><div class="scroll">
   ${m.moves.map((mv, j) => {
        const d = MV[mv.i]; return `<button class="mon-row" ${mv.pp >= mv.max ? 'disabled style="opacity:.4"' : ''} onclick="ppRestoreMove(${idx},${j},'${k}')">
     <div style="flex:1"><div class="nm">${mvName(d)}</div>
     <div class="small">${mv.pp}/${mv.max} PP</div></div></button>`;
      }).join('')}
   </div><button class="btn dark" onclick="monDetail(${idx})">${t('back')}</button>`;
    }
    function ppRestoreMove(idx, j, k) {
      const m = G.party[idx], mv = m.moves[j], it = ITEMS[k];
      if (mv.pp >= mv.max) return;
      mv.pp = Math.min(mv.max, mv.pp + it.pp);
      G.bag[k] = (G.bag[k] || 1) - 1; if (G.bag[k] <= 0) delete G.bag[k];
      autosave();
      flashMap(t('ppRestored', monName(m)));
      monDetail(idx);
    }
    /* ---------- FÓSSEIS ---------- */
    function reviveFossil(k) {
      const it = ITEMS[k], id = it.revive; if (!id) return;
      const mon = makeMon(id, 20, false);
      if (G.party.length < 6) G.party.push(mon); else G.box.push(mon);
      G.bag[k] = (G.bag[k] || 1) - 1; if (G.bag[k] <= 0) delete G.bag[k];
      G.caught[id] = 1; G.seen[id] = 1;
      autosave();

      const o = $('mapOvl'); o.classList.add('on');
      const title = bi({ pt: '🧬 Laboratório de Cinnabar — Regeneração', en: '🧬 Cinnabar Lab — DNA Regeneration', es: '🧬 Laboratorio de Canela — Regeneración' });
      const msg = bi({
        pt: `Cientista do Laboratório:\n"Inserindo ${bi(it.n)} na câmara de bio-regeneração...\n⚡ Zzzzzt... Bip bip... Extraindo código genético ancestral...\n✨ SUCESSO! O fóssil voltou à vida como um saudável ${monName(mon)}!"`,
        en: `Lab Scientist:\n"Inserting ${bi(it.n)} into the bio-regeneration chamber...\n⚡ Zzzzzt... Beep beep... Extracting prehistoric DNA code...\n✨ SUCCESS! The fossil has been restored to life as a healthy ${monName(mon)}!"`,
        es: `Científico del Laboratorio:\n"Insertando ${bi(it.n)} en la cámara de bio-regeneración...\n⚡ Zzzzzt... Bip bip... Extrayendo código genético milenario...\n✨ ¡ÉXITO! ¡El fósil ha vuelto a la vida como un saludable ${monName(mon)}!"`
      });

      o.innerHTML = `<h3 style="color:#4ecdc4">${title}</h3>
   <div class="scroll">
     <div class="story-banner card" style="text-align:center;padding:16px">
       <img class="story-portrait" src="https://play.pokemonshowdown.com/sprites/trainers/scientist.png" alt="" style="width:64px;height:64px;margin:0 auto">
       <div class="story-name" style="color:#4ecdc4">${bi({ pt: 'Cientista Regenerador', en: 'Regeneration Scientist', es: 'Científico Regenerador' })}</div>
       <div class="story-msg" style="white-space:pre-line;text-align:left;font-size:12px;line-height:1.6;margin:10px 0">${msg}</div>
       <div style="margin:12px 0">
         <img src="${icon(id)}" style="width:64px;height:64px;image-rendering:pixelated">
         <div style="font-family:var(--pix);font-size:11px;color:var(--gold);margin-top:4px">${dexName(id)} (Nv 20)</div>
       </div>
     </div>
   </div>
   <button class="btn gold big" onclick="$('mapOvl').classList.remove('on');renderMap()">${bi({ pt: '✨ Fantástico!', en: '✨ Fantastic!', es: '✨ ¡Fantástico!' })}</button>`;
    }
    function ivEvRow(label, stat, m) {
      const nt = NATURES[m.nature || 0];
      const arrow = nt && nt.up === stat ? ' <span style="color:#7bc47f">▲</span>'
        : nt && nt.down === stat ? ' <span style="color:#e0503f">▼</span>' : '';
      if (!m.iv) m.iv = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
      if (!m.ev) m.ev = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
      const ivVal = (m.iv && m.iv[stat] !== undefined) ? m.iv[stat] : 0;
      const evVal = (m.ev && m.ev[stat] !== undefined) ? m.ev[stat] : 0;
      return `<div class="item-row" style="margin-bottom:3px">
    <div class="small">${label}${arrow}</div>
    <div class="small">${t('ivLabel')} ${ivVal}/31 · ${t('evLabel')} ${evVal}/252</div></div>`;
    }
    function monDetail(i) {
      if (document.activeElement) document.activeElement.blur();
      const o = $('mapOvl');
      o.classList.add('on');
      const m = G.party[i], p = DEX[m.id - 1];
        const nxt = need(m.id, m.lv + 1) - need(m.id, m.lv), c = Math.max(0, m.exp - need(m.id, m.lv));
        const nt = NATURES[m.nature || 0];
        const domColor = TCOLOR[p.types[0]] || '#ffffff';
        o.innerHTML = `<h3>${m.shiny ? '\u2605 ' : ''}${monName(m)} \u00b7 Nv ${m.lv}</h3><div class="scroll">
   <div class="mon-spotlight card" style="background: radial-gradient(circle, ${domColor}25 0%, transparent 70%); border-bottom: 2px solid var(--line)">
     <img src="${icon(m.id, m.shiny)}" onerror="this.onerror=null;this.src=spriteFb(m,true)" alt="" style="width:96px;height:96px;object-fit:contain;image-rendering:pixelated">
     <div style="font-family:var(--pix);font-size:10px;margin-top:10px">${dexName(p.id)}</div>
   </div>
   <div class="card">
     <div class="small" style="margin-bottom:4px">HP <b>${m.hp}/${m.max}</b></div>
     <div class="bar"><i style="width:${Math.max(0, m.hp / m.max * 100)}%;background:${hpColor(Math.max(0, m.hp / m.max * 100))}"></i></div>
     <div class="small" style="margin-top:6px">${t('stats', m.atk, m.def, m.spa, m.spd, m.spe)}</div>
     <div class="bar exp" style="margin-top:6px"><i style="width:${Math.min(100, c / nxt * 100)}%"></i></div>
     <div class="small">${t('expTo', c, nxt, m.lv + 1)}</div>
   </div>
   <div style="display:flex;margin:8px 0"><button type="button" class="btn gold big" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px" onclick="nickPrompt(${i})"><span></span> <span>${t('setNick')}</span></button></div>
   <div class="card">
     <div class="small" style="margin-bottom:6px">${t('natureLabel')}: <b>${natureName(nt)}</b> \u00b7 ${t('abilityLabel')}: <b>${abName(m.ability)}</b></div>
     <div class="small" style="opacity:.7;margin-bottom:6px">${ABIL[m.ability] ? bi(ABIL[m.ability].d) : ''}</div>
     ${ivEvRow(t('statHp') || 'HP', 'hp', m)}${ivEvRow(t('statAtk'), 'atk', m)}${ivEvRow(t('statDef'), 'def', m)}${ivEvRow(t('statSpa'), 'spa', m)}
     ${ivEvRow(t('statSpd'), 'spd', m)}${ivEvRow(t('statSpe'), 'spe', m)}
     <div class="small" style="margin-top:6px">${t('friendship')}</div>
     <div class="bar exp"><i style="width:${Math.min(100, (m.friend || 0) / 255 * 100)}%;background:#e07ab0"></i></div>
     <div class="small" style="opacity:.6">${m.friend || 0}/255 \u00b7 ${t('friendHint')}</div>
   </div>
   <div class="card"><div class="small" style="margin-bottom:6px">${t('moves')}</div>
   <div id="moveList_${i}">
   ${renderMoveListHTML(m, i)}
   </div>
   <button class="btn blue" style="margin-top:6px" onclick="moveReminder(${i})">${t('moveReminder')}</button>
   </div>
   <div class="card">${effPanel(p.types)}</div>
   ${G.box.length ? `<div class="card"><div class="small" style="margin-bottom:6px">${t('swapBox')}</div>
     <div style="display:flex;flex-direction:column;gap:5px">${G.box.map((b, j) => `
       <button class="mon-row" onclick="swapBox(${i},${j})"><img src="${icon(b.id, b.shiny)}" alt="">
       <div style="flex:1"><div class="nm">${monName(b)} Nv${b.lv}</div>
       <div class="small">${t('swapFor', monName(m))}</div></div></button>`).join('')}</div></div>` : ''}
   ${G.party.length > 1 ? `<button class="btn dark" onclick="toBox(${i})">${t('sendToBox', monName(m))}</button>` : ''}
   </div><button class="btn dark" onclick="openParty(false)">${t('back')}</button>`;
    }
    function nickPrompt(i) {
      const m = G.party[i];
      $('mapOvl').innerHTML = `<h3>${t('nickname')}</h3><div class="scroll">
   <div class="card" style="display:flex;gap:10px;align-items:center">
     <img src="${icon(m.id, m.shiny)}" style="width:64px;image-rendering:pixelated" alt="">
     <div style="flex:1"><div class="small">${dexName(m.id)} · Nv ${m.lv}</div></div></div>
   <div class="card"><input type="text" id="nickIn" maxlength="12" value="${esc(m.nick || '')}" placeholder="${esc(dexName(m.id))}">
     <div class="small" style="margin-top:6px">${t('nickHint')}</div></div>
   <button class="btn red" onclick="applyNick(${i})">${t('confirm')}</button>
   </div><button class="btn dark" onclick="monDetail(${i})">${t('back')}</button>`;
    }
    function applyNick(i) {
      const m = G.party[i], v = (($('nickIn') || {}).value || '').trim();
      m.nick = v || null;
      autosave(); monDetail(i);
    }
    function swapBox(i, j) { const x = G.party[i]; G.party[i] = G.box[j]; G.box[j] = x; recalc(G.party[i], false); autosave(); openParty(false); }
    function toBox(i) { G.box.push(G.party.splice(i, 1)[0]); autosave(); openParty(false); }
    /* ---------- MOVE REMINDER ---------- */
    function moveReminder(i) {
      const m = G.party[i];
      const known = learnset(m.id).filter(d => d.lv <= m.lv);
      $('mapOvl').innerHTML = `<h3>${t('moveReminder')}</h3><div class=\"scroll\">
   <p class=\"small\">${t('reminderHint', monName(m))}</p>
   ${known.map(d => {
        const has = m.moves.some(mv => mv.i === d.i);
        return `<div class=\"item-row\">
       <div><div style=\"font-family:var(--pix);font-size:9px\">${mvName(d)}</div>
       <div class=\"small\">${tg(d.t)} ${catLabel(d)} ${d.p ? '· ' + t('power') + ' ' + d.p : ''} · Nv${d.lv}</div></div>
       <button class=\"btn ${has ? 'dark' : 'blue'}\" ${has ? 'disabled' : ''} onclick=\"reminderPick(${i},${d.i})\">${has ? '✓' : t('use')}</button>
     </div>`;
      }).join('')}
   </div><button class=\"btn dark\" onclick=\"monDetail(${i})\">${t('back')}</button>`;
    }
    function reminderPick(i, moveIdx) {
      const m = G.party[i];
      if (m.moves.some(mv => mv.i === moveIdx)) { flashMap(t('alreadyKnows', monName(m))); return; }
      if (m.moves.length < 4) {
        const d = MV[moveIdx]; m.moves.push({ i: moveIdx, pp: ppOf(d), max: ppOf(d) });
        autosave(); flashMap(t('relearned', monName(m), mvName(d))); monDetail(i); return;
      }
      const d = MV[moveIdx];
      $('mapOvl').innerHTML = `<h3>${t('pickToForget', mvName(d))}</h3><div class=\"scroll\">
   ${m.moves.map((mv, j) => {
        const md = MV[mv.i]; return `<button class=\"mon-row\" onclick=\"reminderForget(${i},${j},${moveIdx})\">
     <div style=\"flex:1\"><div class=\"nm\">${mvName(md)}</div>
     <div class=\"small\">${tg(md.t)} ${catLabel(md)} ${md.p ? '· ' + t('power') + ' ' + md.p : ''}</div></div></button>`;
      }).join('')}
   </div><button class=\"btn dark\" onclick=\"moveReminder(${i})\">${t('back')}</button>`;
    }
    function reminderForget(i, slot, moveIdx) {
      const m = G.party[i], d = MV[moveIdx];
      m.moves[slot] = { i: moveIdx, pp: ppOf(d), max: ppOf(d) };
      autosave(); flashMap(t('relearned', monName(m), mvName(d))); monDetail(i);
    }

    /* ---------- ARRASTAR GOLPES NO DETALHE DO MON ---------- */
    let MDRAG = null;
    function renderMoveListHTML(m, pi) {
      return m.moves.map((mv, mi) => {
        const d = MV[mv.i];
        return `<div class="move-drag-row" data-mi="${mi}" data-pi="${pi}"
      onpointerdown="moveDragStart(event,${pi},${mi})">
      <div class="move-drag-handle">⠿</div>
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:4px;font-family:var(--pix);font-size:9px">
          <span class="tag" style="background:${TCOLOR[d.t]}">${TP(d.t)}</span>
          ${mvName(d)}
          <span class="small" style="color:#555555;margin-left:auto">${mv.pp}/${mv.max} PP</span>
        </div>
        <div class="small" style="margin-top:3px;opacity:.7">${catLabel(d)}${d.p ? ' · ' + t('power') + ' ' + d.p : ''} · ${d.a}% ${t('acc')}</div>
        <div class="small" style="color:#8090c8;margin-top:1px">${moveShortDesc(d)}</div>
      </div>
    </div>`;
      }).join('');
    }
    function moveDragStart(ev, pi, mi) {
      const pid = ev.pointerId;
      let holding = false, currentRow = ev.currentTarget;
      const holdT = setTimeout(() => {
        holding = true;
        currentRow.classList.add('dragging');
        try { currentRow.setPointerCapture(pid); } catch (e) { }
        if (navigator.vibrate) navigator.vibrate(10);
      }, 150);
      MDRAG = { pi, mi };
      function onMove(e) {
        if (!holding) return;
        e.preventDefault();
        const cx = e.clientX, cy = e.clientY;
        const el = document.elementFromPoint(cx, cy);
        const over = el && el.closest && el.closest('.move-drag-row[data-mi]');
        if (over) {
          const j = +over.dataset.mi;
          if (j !== MDRAG.mi) {
            const moves = G.party[MDRAG.pi].moves;
            const tmp = moves[MDRAG.mi]; moves[MDRAG.mi] = moves[j]; moves[j] = tmp;
            MDRAG.mi = j; autosave();
            /* atualiza o DOM in-place SEM re-renderizar a tela toda (sem scroll) */
            const listEl = document.getElementById(`moveList_${MDRAG.pi}`);
            if (listEl) {
              const ovl = $('mapOvl');
              const scrollY = ovl ? ovl.scrollTop : 0;
              listEl.innerHTML = renderMoveListHTML(G.party[MDRAG.pi], MDRAG.pi);
              if (ovl) ovl.scrollTop = scrollY;
              /* re-captura o ponteiro no novo elemento */
              const nrow = listEl.querySelector(`.move-drag-row[data-mi="${j}"]`);
              if (nrow) {
                currentRow = nrow;
                nrow.classList.add('dragging');
                try { nrow.setPointerCapture(pid); } catch (e) { }
              }
            }
          }
        }
      }
      function onUp() {
        clearTimeout(holdT); holding = false; MDRAG = null;
        document.querySelectorAll('.move-drag-row').forEach(r => r.classList.remove('dragging'));
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerup', onUp);
        document.removeEventListener('pointercancel', onUp);
      }
      document.addEventListener('pointermove', onMove, { passive: false });
      document.addEventListener('pointerup', onUp);
      document.addEventListener('pointercancel', onUp);
    }
    /* =========================================================================
       ANIMAÇÕES DE ATAQUE
       ========================================================================= */
    const FX = {
      fire: { k: 'fxRise', n: 14, c: ['#ffd34d', '#f08a2a', '#e04a20'], shape: 'flame' },
      water: { k: 'fxSplash', n: 14, c: ['#8fd8f5', '#3f9fe0', '#1f6fc0'], shape: 'drop' },
      grass: { k: 'fxSpin', n: 10, c: ['#8ede6a', '#4fae44', '#2f7d2a'], shape: 'leaf' },
      electric: { k: 'fxZap', n: 7, c: ['#fff08a', '#f2d43a'], shape: 'bolt', flash: true },
      ice: { k: 'fxShard', n: 12, c: ['#dff6ff', '#8fd8ee', '#4fa8cc'], shape: 'shard' },
      psychic: { k: 'fxRing', n: 5, c: ['#f28ac0', '#c46ae0', '#8a4fd0'], shape: 'ring' },
      rock: { k: 'fxFall', n: 10, c: ['#b09a68', '#8a7346', '#6a5636'], shape: 'rock', quake: true },
      ground: { k: 'fxFall', n: 12, c: ['#caa45c', '#96703c', '#6d502a'], shape: 'rock', quake: true },
      poison: { k: 'fxBubble', n: 12, c: ['#d79cf0', '#a65fd0', '#7a3fa0'], shape: 'bubble' },
      fighting: { k: 'fxPop', n: 6, c: ['#ff9a6a', '#e0503f', '#a02a20'], shape: 'star' },
      normal: { k: 'fxPop', n: 6, c: ['#ffffff', '#e8e2cf', '#b9b3a0'], shape: 'star' },
      flying: { k: 'fxStreak', n: 9, c: ['#eaf4ff', '#a9cdf5', '#6f9ede'], shape: 'streak' },
      bug: { k: 'fxStreak', n: 9, c: ['#cbe86a', '#8bbf3a', '#5f8a25'], shape: 'streak' },
      ghost: { k: 'fxWisp', n: 10, c: ['#b79ae8', '#6f5a9e', '#3d2f63'], shape: 'wisp' },
      dark: { k: 'fxWisp', n: 10, c: ['#8a8070', '#5a5048', '#2f2a24'], shape: 'wisp' },
      dragon: { k: 'fxSwirl', n: 10, c: ['#9a8ef5', '#5a4fd6', '#33289e'], shape: 'ring' },
      steel: { k: 'fxGleam', n: 8, c: ['#ffffff', '#cfdae4', '#8a9aa8'], shape: 'gleam' },
      fairy: { k: 'fxSpark', n: 12, c: ['#ffd9f0', '#e79bc4', '#c46a9e'], shape: 'spark' }
    };
    function shapeCSS(shape, color, size) {
      switch (shape) {
        case 'flame': return `width:${size}px;height:${size * 1.5}px;background:${color};
      border-radius:50% 50% 50% 50%/70% 70% 30% 30%;box-shadow:0 0 8px ${color}`;
        case 'drop': return `width:${size}px;height:${size}px;background:${color};border-radius:50% 50% 50% 0`;
        case 'leaf': return `width:${size * 1.4}px;height:${size * .8}px;background:${color};border-radius:0 100% 0 100%`;
        case 'bolt': return `width:4px;height:${size * 3}px;background:${color};
      clip-path:polygon(50% 0,0 55%,45% 55%,25% 100%,100% 40%,55% 40%,80% 0);box-shadow:0 0 10px ${color}`;
        case 'shard': return `width:${size * .7}px;height:${size * 1.6}px;background:${color};
      clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)`;
        case 'ring': return `width:${size * 3}px;height:${size * 3}px;border:3px solid ${color};border-radius:50%`;
        case 'rock': return `width:${size}px;height:${size * .85}px;background:${color};
      border-radius:35% 45% 40% 50%;border:2px solid rgba(0,0,0,.25)`;
        case 'bubble': return `width:${size}px;height:${size}px;background:${color};border-radius:50%;
      box-shadow:inset -2px -2px 0 rgba(255,255,255,.4)`;
        case 'star': return `width:${size * 1.6}px;height:${size * 1.6}px;background:${color};
      clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)`;
        case 'streak': return `width:${size * 3}px;height:3px;background:${color};border-radius:3px`;
        case 'wisp': return `width:${size * 1.2}px;height:${size * 1.2}px;background:${color};
      border-radius:50% 50% 50% 10%;filter:blur(1px)`;
        case 'gleam': return `width:3px;height:${size * 3}px;background:${color};box-shadow:0 0 8px ${color}`;
        case 'spark': return `width:${size}px;height:${size}px;background:${color};
      clip-path:polygon(50% 0,60% 40%,100% 50%,60% 60%,50% 100%,40% 60%,0 50%,40% 40%)`;
        default: return `width:${size}px;height:${size}px;background:${color};border-radius:50%`;
      }
    }
    /* o dash vai no WRAPPER (translate) e o hit no SPRITE (opacidade):
       assim o Pokémon nunca acumula transform nem sai da tela */
    async function dashAttack(mine) {
      const w = mine ? $('meWrap') : $('foeWrap');
      const cls = mine ? 'dash-me' : 'dash-foe';
      w.classList.remove(cls); void w.offsetWidth; w.classList.add(cls);
      await sleep(260);
      setTimeout(() => w.classList.remove(cls), 600 / OPT.speed);
    }
    async function playFX(type, atFoe) {
      const cfg = FX[type] || FX.normal, L = $('fxLayer');
      // calcula o centro do sprite alvo dinamicamente
      let cx, cy;
      const fieldRect = $('field').getBoundingClientRect();
      const targetWrap = $(atFoe ? 'foeWrap' : 'meWrap');
      if (targetWrap && fieldRect.width > 0) {
        const r = targetWrap.getBoundingClientRect();
        cx = r.left - fieldRect.left + r.width / 2;
        cy = r.top - fieldRect.top + r.height / 2;
      } else {
        cx = atFoe ? 300 : 110; cy = atFoe ? 78 : 152;
      }
      if (cfg.flash) { const f = document.createElement('div'); f.className = 'flash'; L.appendChild(f); setTimeout(() => f.remove(), 600 / OPT.speed); }
      if (cfg.quake) { const F = $('field'); F.classList.add('quake'); setTimeout(() => F.classList.remove('quake'), 600 / OPT.speed); }
      for (let i = 0; i < cfg.n; i++) {
        const d = document.createElement('div'); d.className = 'fx';
        const size = rnd(8, 16), delay = i * 38 / OPT.speed;
        d.style.cssText = shapeCSS(cfg.shape, pick(cfg.c), size) +
          `;left:${cx + rnd(-34, 34)}px;top:${cy + rnd(-26, 26)}px;opacity:0;
       animation:${cfg.k} calc(.62s / var(--spd)) ease-out ${delay}ms forwards`;
        L.appendChild(d);
        setTimeout(() => d.remove(), (700 + delay) / OPT.speed + 200);
      }
      await sleep(480);
    }

    /* =========================================================================
       INÍCIO DE BATALHA
       ========================================================================= */
    function advNext() { const loc = LOC[G.loc]; G.node = Math.min(loc.ev.length, G.node + 1); G.nodeAt[G.loc] = G.node; autosave(); renderMap(); }
    
    window.triggerRandomHouse = function(loc) {
        const o = $('mapOvl'); o.classList.add('on');
        const rr = Math.random();
        let title = "Você encontrou uma área escondida!";
        let desc = "";
        let actionCode = "";
        
        if (rr < 0.35) {
            // Dinheiro
            const cash = 500 + Math.floor(Math.random() * 1000);
            G.money += cash;
            desc = "Você explorou o local e encontrou ₽" + cash + " perdidos no chão!";
            actionCode = "advNext(); $('mapOvl').classList.remove('on'); renderMap();";
        } else if (rr < 0.7) {
            // Item aleatório
            const items = ['potion', 'super', 'great', 'ultra', 'revive'];
            const it = items[Math.floor(Math.random() * items.length)];
            G.bag[it] = (G.bag[it] || 0) + 1;
            desc = "No meio de alguns arbustos, você achou 1x " + ITEMS[it].n[LANG] + "!";
            actionCode = "advNext(); $('mapOvl').classList.remove('on'); renderMap();";
        } else {
            // Pokémon mais forte
            const m = pick(wildPool(loc));
            const lv = loc.lv[1] + 3; // +3 above max level
            desc = "Cuidado! Um Pokémon territorial muito forte apareceu furioso!";
            actionCode = "$('mapOvl').classList.remove('on'); startBattle({ wild: makeMon(" + m + ", " + lv + ", true) });";
        }
        
        o.innerHTML = '<h3>Evento Misterioso</h3><div class="scroll"><div class="card"><div class="nm">' + title + '</div><div class="small" style="margin-top:10px">' + desc + '</div></div></div><button class="btn blue" onclick="' + actionCode + '">Continuar</button>';
    };

    async function advance() {
      const loc = LOC[G.loc], ev = loc.ev[G.node];
      if (!ev) return;
      if (!G.party.some(m => m.hp > 0)) { flashMap(t('allFainted')); return; }
      if (ev.t === 'w') {
        const rndEv = Math.random();
        if (rndEv < 0.08) {
          // Equipe Rocket Emboscada (8% chance)
          const rLv = rnd(loc.lv[0], loc.lv[1]) + 1;
          const rMons = [41, 109, 19, 23, 100]; // Zubat, Koffing, Rattata, Ekans, Voltorb
          const m1 = rMons[Math.floor(Math.random() * rMons.length)];
          const m2 = rMons[Math.floor(Math.random() * rMons.length)];
          const mockEv = { x: { name: { pt: 'Recruta Rocket', en: 'Rocket Grunt', es: 'Recluta Rocket' }, fala: { pt: 'Ninguém passa por aqui sem deixar seus Pokémon! Prepare-se!', en: 'Nobody passes here without leaving their Pokémon! Prepare yourself!', es: '¡Nadie pasa por aquí sin dejar sus Pokémon! ¡Prepárate!' } } };
          showRocketBanner(mockEv, () => {
             startBattle({ trainer: { name: mockEv.x.name, sprite: 'grunt', team: [makeMon(m1, rLv), makeMon(m2, rLv)], idx: 0, money: 400 }, badge: null });
          });
          return;
        } else if (rndEv < 0.16) {
          // Evento de Casa/Misterioso (8% chance)
          triggerRandomHouse(loc);
          return;
        }
        // Encontro Selvagem Normal
        startBattle({ wild: makeMon(pick(wildPool(loc)), rnd(loc.lv[0], loc.lv[1]), true) });
      }
      else if (ev.t === 'L') {
        if (G.caught[ev.id]) { advNext(); return; }
        startBattle({ wild: makeMon(ev.id, ev.lv, true), legendary: true });
      }
      else if (ev.t === 'G' || ev.t === 'story_gift') {
        if (G.caught[ev.id]) { advNext(); return; }
        showStoryGift(ev);
      }
      else if (ev.t === 'fossil_choice') {
        if (G.fossilChosen || G.bag.helixfossil || G.bag.domefossil || G.caught[138] || G.caught[140]) {
          advNext(); return;
        }
        showFossilChoice(ev);
      }
      else if (ev.t === 'amber_gift') {
        if (G.gotOldAmber || G.bag.oldamber || G.caught[142]) {
          advNext(); return;
        }
        showAmberGift(ev);
      }
      else if (ev.t === 'second_fossil') {
        if (G.gotSecondFossil) {
          advNext(); return;
        }
        showSecondFossil(ev);
      }
      else if (ev.t === 'C') {
        if (ev.ids.some(id => G.caught[id])) { advNext(); return; }
        openGiftChoice(ev);
      }
      else if (ev.t === 'r') {
        /* Encontro com o Rival — cutscene + batalha */
        showStoryBanner(ev, () => {
          const rn = getRivalName();
          const diff = (G.rules && G.rules.difficulty) || 'normal';
          const dlv = diff === 'easy' ? -2 : diff === 'hard' ? 2 : 0;
          const rivalMon = makeMon(ev.rivalId, Math.max(2, ev.lv + dlv), true);
          const rivalNames = { pt: rn, en: rn, es: rn };
          const trainer = { name: rivalNames, sprite: 'blue', fala: { pt: ev.fala || `${rn}: Espere um segundo! Vou te derrotar aqui!`, en: ev.fala || `${rn}: Hold on! I'll beat you right here!`, es: ev.fala || `${rn}: ¡Espera! ¡Te voy a derrotar aquí!` }, team: [rivalMon], mons: [[ev.rivalId, ev.lv]], idx: 0, money: ev.money || 800 };
          G._rivalBattle = true; G._rivalBattleStory = true;
          startBattle({ trainer, badge: null, rivalIntro: true });
        });
      }
      else if (ev.t === 'R') {
        /* Cutscene da Equipe Rocket */
        showRocketBanner(ev, () => {
          const diff = (G.rules && G.rules.difficulty) || 'normal';
          const dlv = diff === 'easy' ? -2 : diff === 'hard' ? 2 : 0;
          startBattle({ trainer: { ...ev.x, team: ev.x.mons.map(([id, lv]) => makeMon(id, Math.max(2, lv + dlv))), idx: 0 }, badge: null });
        });
      }
      else {
        const tr = ev.x;
        const diff = (G.rules && G.rules.difficulty) || 'normal';
        const dlv = diff === 'easy' ? -2 : diff === 'hard' ? 2 : 0;
        startBattle({ trainer: { ...tr, team: tr.mons.map(([id, lv]) => makeMon(id, Math.max(2, lv + dlv))), idx: 0 }, badge: ev.badge });
      }
    }
    /* Mostra banner de história antes de um encontro com o rival */
    let _pendingStoryCallback = null;
    function _storyGo() { if (_pendingStoryCallback) { const fn = _pendingStoryCallback; _pendingStoryCallback = null; $('mapOvl').classList.remove('on'); fn(); } }
    function showStoryBanner(ev, onContinue) {
      const rn = getRivalName();
      const o = $('mapOvl'); o.classList.add('on');
      const rawMsg = (ev.rivalMsg && bi(ev.rivalMsg)) || `Ei! Você não vai passar por mim impune!`;
      const msg = rn + ': ' + rawMsg.replace(/\{rival\}/g, rn);
      _pendingStoryCallback = onContinue;
      o.innerHTML = `<h3 style="color:#4a7fff">⚡ Encontro com o Rival!</h3>
   <div class="scroll"><div class="story-banner card">
     <img class="story-portrait" src="https://play.pokemonshowdown.com/sprites/trainers/blue.png" onerror="this.onerror=null;this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/blue.png'" alt="">
     <div class="story-name">${rn}</div>
     <div class="story-msg">"${msg}"</div>
   </div></div>
   <button class="btn blue big" onclick="_storyGo()">⚔ Batalhar!</button>
   <button class="btn dark" onclick="_pendingStoryCallback=null;renderMap()">↩ Fugir</button>`;
    }
    /* Mostra banner da Equipe Rocket */
    function showRocketBanner(ev, onContinue) {
      const o = $('mapOvl'); o.classList.add('on');
      const trn = ev.x; const tname = bi(trn.name);
      const msg = bi(trn.fala) || 'Saia do caminho ou vai se arrepender!';
      _pendingStoryCallback = onContinue;
      o.innerHTML = `<h3 style="color:#c03030">☠ Equipe Rocket</h3>
   <div class="scroll"><div class="story-banner card" style="border-color:#c03030">
     <img class="story-portrait" src="https://play.pokemonshowdown.com/sprites/trainers/rocket.png" onerror="this.style.display='none'" alt="" style="border-color:#c03030">
     <div class="story-name" style="color:#ff6060">${tname}</div>
     <div class="story-msg">${msg}</div>
   </div></div>
   <button class="btn red big" onclick="_storyGo()">⚔ Enfrentar!</button>
   <button class="btn dark" onclick="_pendingStoryCallback=null;renderMap()">Fugir (pular)</button>`;
    }
    function showStoryGift(ev) {
      const o = $('mapOvl'); o.classList.add('on');
      const id = ev.id;
      let title = t('giftTitle') || '🎁 Presente Especial';
      let name = dexName(id);
      let desc = '';
      let btnLabel = t('receiveGiftBtn') || `Receber ${dexName(id)}`;

      if (id === 133) {
        title = bi({ pt: '🏢 Mansão de Celadon (Telhado)', en: '🏢 Celadon Mansion (Roof)', es: '🏢 Mansión Azulona (Azotea)' });
        name = bi({ pt: 'Bilhete & Pokébola de Eevee', en: 'Note & Eevee Poké Ball', es: 'Nota y Poké Ball de Eevee' });
        desc = bi({
          pt: 'No telhado da Mansão de Celadon, você encontra uma sala silenciosa com uma Pokébola sobre a mesa.\n\nHá um bilhete ao lado: "Eu pesquisei tudo sobre evoluções! Deixei este pequeno Eevee aqui para um treinador amoroso que saiba despertar seus muitos potenciais. Cuide muito bem dele!"',
          en: 'On the roof of Celadon Mansion, you find a quiet room with a Poké Ball left on the table.\n\nA note beside it reads: "I know all about evolutions! I left this little Eevee for a loving trainer who knows how to unlock its many potentials. Take good care of it!"',
          es: 'En la azotea de la Mansión Azulona, encuentras una sala con una Poké Ball en una mesa.\n\nUna nota dice: "¡He dejado este pequeño Eevee para un entrenador con dedicación que sepa despertar su potencial! ¡Cuídalo mucho!"'
        });
        btnLabel = bi({ pt: '🐾 Pegar Eevee!', en: '🐾 Take Eevee!', es: '🐾 ¡Tomar a Eevee!' });
      } else if (id === 131) {
        title = bi({ pt: '🌊 Silph Co. — Resgate do Funcionário', en: '🌊 Silph Co. — Grateful Employee', es: '🌊 Silph Co. — Empleado Agradecido' });
        name = bi({ pt: 'Funcionário da Silph Co.', en: 'Silph Co. Employee', es: 'Empleado de Silph Co.' });
        desc = bi({
          pt: 'Um funcionário da Silph Co. se aproxima com grande emoção:\n\n"Muito obrigado por enfrentar a Equipe Rocket e proteger nossa empresa! Este nobre Lapras criou um carinho imenso por você ao ver sua coragem. Por favor, leve-o com você e navegue com segurança pelos mares de Kanto!"',
          en: 'A Silph Co. employee approaches with gratitude:\n\n"Thank you so much for defeating Team Rocket and saving our company! This gentle Lapras took a liking to your courage. Please take it with you and journey safely across the seas of Kanto!"',
          es: 'Un empleado de Silph Co. se acerca emocionado:\n\n"¡Muchas gracias por enfrentar al Team Rocket y salvar nuestra empresa! Este dócil Lapras sintió un gran aprecio por tu valor. ¡Llévalo contigo por los mares de Kanto!"'
        });
        btnLabel = bi({ pt: '🌊 Cuidar de Lapras!', en: '🌊 Take Lapras!', es: '🌊 ¡Cuidar de Lapras!' });
      } else {
        desc = bi({
          pt: `Você encontrou um Pokémon especial que deseja se juntar à sua equipe: ${dexName(id)}!`,
          en: `You found a special Pokémon that wants to join your team: ${dexName(id)}!`,
          es: `¡Encontraste un Pokémon especial que quiere unirse a tu equipo: ${dexName(id)}!`
        });
      }

      o.innerHTML = `<h3 style="color:var(--gold)">${title}</h3>
   <div class="scroll"><div class="story-banner card" style="text-align:center;padding:16px">
     <div style="display:flex;justify-content:center;gap:12px;align-items:center;margin-bottom:8px">
       <img class="story-portrait" src="https://play.pokemonshowdown.com/sprites/trainers/gentleman.png" onerror="this.style.display='none'" alt="" style="border-radius:50%;width:56px;height:56px;object-fit:cover">
       <img src="${icon(id)}" alt="" style="width:56px;height:56px;image-rendering:pixelated">
     </div>
     <div class="story-name" style="color:var(--gold);font-size:11px">${name}</div>
     <div class="story-msg" style="white-space:pre-line;text-align:left;font-size:12px;line-height:1.6;margin:12px 0">${desc}</div>
   </div></div>
   <button class="btn gold big" onclick="takeStoryGift(${id}, ${ev.lv || 25})">${btnLabel}</button>`;
    }
    function takeStoryGift(id, lv) {
      const mon = makeMon(id, lv, false);
      if (G.party.length < 6) G.party.push(mon); else G.box.push(mon);
      G.caught[id] = 1; G.seen[id] = 1;
      $('mapOvl').classList.remove('on');
      flashMap(t('receivedGift', dexName(id)));
      advNext();
    }
    function showFossilChoice(ev) {
      const o = $('mapOvl'); o.classList.add('on');
      const title = bi({ pt: '⛏️ Fósseis do Monte Lua', en: '⛏️ Mt. Moon Fossils', es: '⛏️ Fósiles de Monte Moon' });
      const msg = bi({
        pt: 'Super Nerd Miguel respira fundo e ajeita os óculos:\n\n"Uau, você batalha muito bem! Eu passei semanas escavando aqui e encontrei estes dois fósseis raríssimos pré-históricos... Não precisamos brigar por ambos! Como recompensa pela batalha, escolha um deles e eu levarei o outro para pesquisas no laboratório!"',
        en: 'Super Nerd Miguel catches his breath and adjusts his glasses:\n\n"Wow, you are a great battler! I spent weeks excavating here and found two ancient prehistoric fossils... There is no need to fight! Pick one of them, and I will take the other to the lab for research!"',
        es: 'Cerebrito Miguel suspira y se ajusta las gafas:\n\n"¡Vaya, combates genial! Estuve semanas excavando y encontré estos dos raros fósiles prehistóricos... ¡No tenemos que pelearnos! ¡Elige uno de ellos y yo me quedaré con el otro para investigación!"'
      });

      o.innerHTML = `<h3 style="color:#d4a359">${title}</h3>
   <div class="scroll">
     <div class="story-banner card" style="text-align:center;padding:14px">
       <img class="story-portrait" src="https://play.pokemonshowdown.com/sprites/trainers/supernerd.png" onerror="this.onerror=null;this.src='https://play.pokemonshowdown.com/sprites/trainers/scientist.png'" alt="" style="width:64px;height:64px;margin:0 auto">
       <div class="story-name" style="color:#e8c070">Super Nerd Miguel</div>
       <div class="story-msg" style="white-space:pre-line;text-align:left;font-size:12px;line-height:1.6;margin:10px 0">${msg}</div>
     </div>
     <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
       <button class="btn gold" style="display:flex;align-items:center;gap:12px;padding:12px" onclick="chooseFossil('helixfossil')">
         ${itemImg('helixfossil')}
         <div style="text-align:left"><b style="font-size:12px">${bi(ITEMS.helixfossil.n)}</b><div class="small">${bi({ pt: 'Concha espiral fóssil (Omanyte #138)', en: 'Spiral shell fossil (Omanyte #138)', es: 'Concha fósil espiral (Omanyte #138)' })}</div></div>
       </button>
       <button class="btn gold" style="display:flex;align-items:center;gap:12px;padding:12px" onclick="chooseFossil('domefossil')">
         ${itemImg('domefossil')}
         <div style="text-align:left"><b style="font-size:12px">${bi(ITEMS.domefossil.n)}</b><div class="small">${bi({ pt: 'Carapaça blindada fóssil (Kabuto #140)', en: 'Armored shell fossil (Kabuto #140)', es: 'Caparazón blindado fósil (Kabuto #140)' })}</div></div>
       </button>
     </div>
   </div>`;
    }
    function chooseFossil(k) {
      G.bag[k] = (G.bag[k] || 0) + 1;
      G.fossilChosen = k;
      $('mapOvl').classList.remove('on');
      flashMap(bi({
        pt: `Você obteve o ${bi(ITEMS[k].n)}! Miguel levou o outro fóssil para o Laboratório de Cinnabar.`,
        en: `You received the ${bi(ITEMS[k].n)}! Miguel took the other fossil to Cinnabar Lab.`,
        es: `¡Recibiste el ${bi(ITEMS[k].n)}! Miguel llevó el otro fósil al Laboratorio de Isla Canela.`
      }));
      advNext();
    }
    function showAmberGift(ev) {
      const o = $('mapOvl'); o.classList.add('on');
      const title = bi({ pt: '🏛️ Museu da Ciência de Pewter', en: '🏛️ Pewter Museum of Science', es: '🏛️ Museo de la Ciencia de Plateada' });
      const msg = bi({
        pt: 'Um pesquisador do Museu de Pewter lhe chama à área reservada:\n\n"Você é o treinador que derrotou Brock? Fascinante! Durante escavações profundas na região, encontramos este pedaço translúcido de Âmbar Antigo. Ele contém uma gota de DNA intacto de um terrível monstro dos céus pré-históricos: Aerodactyl!\n\nSoube que os cientistas da Ilha Cinnabar desenvolveram um regenerador celular capaz de reviver fósseis. Fique com ele e dê vida a este gigante alado!"',
        en: 'A researcher from Pewter Museum calls you over:\n\n"You defeated Brock at the Gym? Impressive! Deep during our regional excavations, we discovered this translucent Old Amber. It holds intact prehistoric DNA of a legendary sky predator: Aerodactyl!\n\nI heard the Cinnabar Island laboratory has developed a machine to revive fossils. Please take it and bring this winged giant back to life!"',
        es: 'Un investigador del Museo de Plateada te llama:\n\n"¿Eres quien venció a Brock? ¡Increíble! En excavaciones profundas encontramos este Ámbar Antiguo con ADN intacto del depredador alado Aerodactyl.\n\nEn el Laboratorio de Isla Canela pueden revivirlo. ¡Tómalo y devuélvele la vida!"'
      });

      o.innerHTML = `<h3 style="color:#e0a050">${title}</h3>
   <div class="scroll">
     <div class="story-banner card" style="text-align:center;padding:14px">
       <img class="story-portrait" src="https://play.pokemonshowdown.com/sprites/trainers/scientist.png" alt="" style="width:64px;height:64px;margin:0 auto">
       <div class="story-name" style="color:#e8c070">${bi({ pt: 'Cientista de Pewter', en: 'Pewter Scientist', es: 'Científico de Plateada' })}</div>
       <div class="story-msg" style="white-space:pre-line;text-align:left;font-size:12px;line-height:1.6;margin:10px 0">${msg}</div>
       <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-top:8px">
         ${itemImg('oldamber')}
         <b style="color:var(--gold)">${bi(ITEMS.oldamber.n)}</b>
       </div>
     </div>
   </div>
   <button class="btn gold big" onclick="takeAmber()">${bi({ pt: '🏛️ Aceitar Âmbar Antigo', en: '🏛️ Accept Old Amber', es: '🏛️ Aceptar Ámbar Antiguo' })}</button>`;
    }
    function takeAmber() {
      G.bag.oldamber = (G.bag.oldamber || 0) + 1;
      G.gotOldAmber = true;
      $('mapOvl').classList.remove('on');
      flashMap(bi({
        pt: 'Você guardou o Âmbar Antigo na Mochila!',
        en: 'You stored the Old Amber in your Bag!',
        es: '¡Guardaste el Ámbar Antiguo en tu Mochila!'
      }));
      advNext();
    }
    function showSecondFossil(ev) {
      const o = $('mapOvl'); o.classList.add('on');
      const otherKey = (G.fossilChosen === 'domefossil' || (G.bag && G.bag.domefossil) || (G.caught && G.caught[140])) ? 'helixfossil' : 'domefossil';
      const title = bi({ pt: '🔬 Laboratório de Cinnabar (Fóssil Perdido)', en: '🔬 Cinnabar Lab (The Other Fossil)', es: '🔬 Laboratorio de Canela (El Otro Fósil)' });
      const msg = bi({
        pt: 'O cientista-chefe do Laboratório de Cinnabar lhe saúda com um sorriso:\n\n"Ah, você é o treinador que encontrou o Super Nerd Miguel nas profundezas do Monte Lua! Ele nos entregou o outro fóssil que havia ficado com ele para estudarmos a fundo sua carapaça fóssil.\n\nNossa pesquisa acadêmica foi 100% concluída! Como você já provou ser um treinador digno e dedicado a Kanto, decidimos presentear este fóssil que faltava a você! Agora você pode reviver ambas as espécies ancestrais!"',
        en: 'The head researcher at Cinnabar Lab greets you with a smile:\n\n"Ah, you are the trainer who met Super Nerd Miguel in Mt. Moon! He donated the other fossil he kept so we could study its prehistoric structure.\n\nOur research is now complete! Since you proved to be a dedicated trainer across Kanto, we want you to have this missing fossil! Now you can revive both ancient species!"',
        es: 'El científico jefe del Laboratorio de Canela te saluda:\n\n"¡Ah, eres tú quien conoció a Miguel en Monte Moon! Él nos donó el otro fósil para investigación.\n\n¡Nuestros estudios concluyeron y queremos entregarte el fósil que faltaba! ¡Ahora puedes revivir ambas especies!"'
      });

      o.innerHTML = `<h3 style="color:#4ecdc4">${title}</h3>
   <div class="scroll">
     <div class="story-banner card" style="text-align:center;padding:14px">
       <img class="story-portrait" src="https://play.pokemonshowdown.com/sprites/trainers/scientist.png" alt="" style="width:64px;height:64px;margin:0 auto">
       <div class="story-name" style="color:#4ecdc4">${bi({ pt: 'Pesquisador de Fósseis', en: 'Fossil Researcher', es: 'Investigador de Fósiles' })}</div>
       <div class="story-msg" style="white-space:pre-line;text-align:left;font-size:12px;line-height:1.6;margin:10px 0">${msg}</div>
       <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-top:8px">
         ${itemImg(otherKey)}
         <b style="color:var(--gold)">${bi(ITEMS[otherKey].n)}</b>
       </div>
     </div>
   </div>
   <button class="btn gold big" onclick="takeSecondFossil('${otherKey}')">${bi({ pt: '🧬 Receber ' + bi(ITEMS[otherKey].n), en: '🧬 Receive ' + bi(ITEMS[otherKey].n), es: '🧬 Recibir ' + bi(ITEMS[otherKey].n) })}</button>`;
    }
    function takeSecondFossil(k) {
      G.bag[k] = (G.bag[k] || 0) + 1;
      G.gotSecondFossil = true;
      $('mapOvl').classList.remove('on');
      flashMap(bi({
        pt: `Você obteve o ${bi(ITEMS[k].n)} que faltava!`,
        en: `You obtained the missing ${bi(ITEMS[k].n)}!`,
        es: `¡Obtuviste el ${bi(ITEMS[k].n)} que faltaba!`
      }));
      advNext();
    }
    function openGiftChoice(ev) {
      const o = $('mapOvl'); o.classList.add('on');
      o.innerHTML = `<h3>${t('pickGift')}</h3><div class="scroll">
   ${ev.ids.map(id => `<button class="mon-row" onclick="takeGift(${id})">
     <img src="${icon(id)}" alt=""><div style="flex:1"><div class="nm">${dexName(id)}</div></div></button>`).join('')}
   </div>`;
    }
    function takeGift(id) {
      const ev = LOC[G.loc].ev[G.node];
      const mon = makeMon(id, ev.lv, false);
      if (G.party.length < 6) G.party.push(mon); else G.box.push(mon);
      G.caught[id] = 1; G.seen[id] = 1;
      $('mapOvl').classList.remove('on');
      flashMap(t('receivedGift', dexName(id)));
      advNext();
    }
    async function train() {
      const loc = LOC[G.loc];
      if (!loc.wild.length) return;
      if (!G.party.some(m => m.hp > 0)) { flashMap(t('allFainted')); return; }
      /* fade de preto ao entrar na grama alta */
      const overlay = document.getElementById('battleScreenFade') || (() => {
        const el = document.createElement('div'); el.id = 'battleScreenFade';
        document.getElementById('app').appendChild(el); return el;
      })();
      overlay.style.cssText = 'position:absolute;inset:0;background:#000;z-index:999;pointer-events:none;opacity:0;transition:opacity .55s ease;display:block';
      void overlay.offsetWidth;
      overlay.style.opacity = '1';
      await sleep(560);
      startBattle({ wild: makeMon(pick(wildPool(loc)), rnd(loc.lv[0], loc.lv[1]), true), training: true });
      overlay.style.opacity = '0';
      setTimeout(() => overlay.style.display = 'none', 700);
    }
    /* =========================================================================
       BATALHA RIVAL — rodada uma vez após escolher o starter (Nv 5, sem penalty)
       ========================================================================= */
    function getRivalName() { return (G && G.rivalName && G.rivalName.trim()) || 'Blue'; }
    function startRivalBattle(myStarterId, rivalId) {
      /* O rival usa IVs neutros (wild=true) para não ter vantagem de stats no Nv 5 */
      const rivalMon = makeMon(rivalId, 5, true);
      const rn = getRivalName();
      const rivalNames = { pt: rn, en: rn, es: rn };
      const rivalFalas = [
        { pt: `${rn}: Heh! Meu Pokémon vai acabar com o seu em segundos!`, en: `${rn}: Heh! My Pokémon will finish yours off in seconds!`, es: `${rn}: ¡Heh! ¡Mi Pokémon va a acabar con el tuyo!` },
        { pt: `${rn}: Você já tá pensando em desistir? Porque eu não vou segurar.`, en: `${rn}: Thinking about giving up already? I won't hold back.`, es: `${rn}: ¿Ya piensas en rendirte? No me voy a contener.` },
        { pt: `${rn}: Você nunca vai me vencer. Pode nem tentar.`, en: `${rn}: You'll never beat me. Don't even bother.`, es: `${rn}: Jamás me ganarás. Ni lo intentes.` }
      ];
      const rivalFala = rivalFalas[Math.floor(Math.random() * rivalFalas.length)];
      const trainer = {
        name: rivalNames,
        sprite: 'blue',
        fala: rivalFala,
        team: [rivalMon],
        mons: [[rivalId, 5]],
        idx: 0,
        money: 0
      };
      G._rivalBattleInitial = true;
      startBattle({ trainer, badge: null, rivalIntro: true });
    }

    const cur = () => G.party[B.me];

    async function abilityEntry(mon, mine) {
      if (mon && mon.ability === 'intimidate' && mon.hp > 0) {
        const oppKey = mine ? 'foe' : 'me';
        B.boost[oppKey].atk = Math.max(-4, (B.boost[oppKey].atk || 0) - 1);
        const oppMon = mine ? B.foe : cur();
        await say(t('intimidateMsg', logMon(mon), logMon(oppMon)));
      }
    }
    function startBattle(cfg) {
      const foe = cfg.wild || cfg.trainer.team[0];
      B = {
        wild: cfg.wild || null, trainer: cfg.trainer || null, badge: cfg.badge || null, training: !!cfg.training,
        me: G.party.findIndex(m => m.hp > 0), foe, busy: true, over: false, forced: false, run: 0,
        boost: { me: {}, foe: {} }, known: !!G.caught[foe.id], wasSeen: !!G.seen[foe.id], participants: new Set()
      };
      B.participants.add(B.me);
      show('battle');
      paintScene(LOC[G.loc].bg);
      $('logbox').innerHTML = ''; $('fxLayer').innerHTML = '';
      $('meWrap').className = 'side me'; $('foeWrap').className = 'side foe';
      menuLock();
      /* fade: preto total primeiro, depois abre para a cena */
      const fd = $('battleFade');
      fd.classList.remove('fade-clear', 'fade-black'); void fd.offsetWidth;
      fd.classList.add('fade-black');

      document.querySelectorAll('.grass-blade').forEach(b => b.remove());
      (async () => {
        await sleep(400);
        fd.classList.remove('fade-black'); fd.classList.add('fade-clear');
        setTimeout(() => { fd.classList.remove('fade-clear'); fd.style.display = 'none'; }, 900);
        const tf = $('trainerFoe'), tm = $('trainerMe');
        tf.style.display = 'none'; tm.style.display = 'none';
        // sprite do jogador (de costas) sempre entra na abertura
        loadWithFallback(tm, PLSP_FALLBACKS[G.gender] || PLSP_FALLBACKS.boy);
        tm.style.display = 'block'; tm.className = 'trainerSprite entry-me';
        $('meImg').style.visibility = 'hidden';
        if (B.trainer) {
          $('foeImg').style.visibility = 'hidden';
          if (B.trainer.sprite) {
            tf.src = TRSP + B.trainer.sprite + '.png';
            tf.onerror = function () { this.style.display = 'none'; };
            tf.style.display = 'block'; tf.className = 'trainerSprite entry';
          }
          drawField(false);
          await say(t('trainerWants', bi(B.trainer.name)));
          await say('"' + bi(B.trainer.fala) + '"');
          tf.style.display = 'none';
          $('foeImg').style.visibility = 'visible';
          drawField(true);
          $('foeImg').classList.add('entry');
          await say(t('trainerSent', bi(B.trainer.name), logMon(B.foe)));
          await abilityEntry(B.foe, false);
        } else {
          $('foeImg').style.visibility = 'visible';
          drawField(true);
          $('foeImg').classList.add('entry');
          await say(t('wildAppeared', logMon(B.foe)));
          if (B.foe.shiny) { shinyBurst(true); await say(t('shinyFound')); G.shinyCount = (G.shinyCount || 0) + 1; }
        }
        G.seen[B.foe.id] = 1;
        tm.style.display = 'none';
        $('meImg').style.visibility = 'visible';
        $('meImg').classList.add('entry-me');
        await say(t('goMon', logMon(cur())));
        if (cur().shiny) shinyBurst(false);
        await abilityEntry(cur(), true);
        B.busy = false; menuMain();
      })();
    }
    function shinyBurst(atFoe) {
      const s = document.createElement('div');
      s.className = 'shinyStar'; s.textContent = '★';
      s.style.left = (atFoe ? 300 : 120) + 'px'; s.style.top = (atFoe ? 60 : 130) + 'px';
      $('field').appendChild(s);
      setTimeout(() => s.remove(), 2400 / OPT.speed);
    }

    function drawField(full) {
      const me = cur(), foe = B.foe;
      if (full) {
        const fi = $('foeImg'), mi = $('meImg');
        fi.src = sprite(foe, false);
        fi.onerror = function () { this.onerror = null; this.src = spriteFb(foe, false); };
        mi.src = sprite(me, true);
        mi.onerror = function () { this.onerror = null; this.src = spriteFb(me, true); };
        fi.className = foe.shiny ? 'shinyMon' : ''; mi.className = me.shiny ? 'shinyMon' : '';
        if (window.AudioEngine) { setTimeout(() => window.AudioEngine.playCry(foe.id), 200); setTimeout(() => window.AudioEngine.playCry(me.id), 1000); }
        applySprScale(fi, foe.id); applySprScale(mi, me.id);
      }
      $('plateFoe').innerHTML = plateHTML(foe, false);
      $('plateMe').innerHTML = plateHTML(me, true);
    }
    function ballsHTML(list, slots) {
      let h = '<div class="teamballs">';
      list.forEach(m => { h += `<span class="tb ${m.hp > 0 ? '' : 'out'}"></span>`; });
      for (let i = list.length; i < (slots || 0); i++) h += '<span class="tb out" style="opacity:.25"></span>';
      return h + '</div>';
    }
    function plateHTML(m, mine) {
      const pct = Math.max(0, m.hp / m.max * 100);
      const nxt = need(m.id, m.lv + 1) - need(m.id, m.lv), c = Math.max(0, m.exp - need(m.id, m.lv));
      const xpPct = Math.min(100, c / nxt * 100);
      const balls = mine ? ballsHTML(G.party, 6) : (B.trainer ? ballsHTML(B.trainer.team) : '');
      const star = m.shiny ? '<span style="color:#d69b00">★</span> ' : '';
      /* cor da barra de HP com transição suave */
      return `<div class="r1"><span>${star}${monName(m)}</span><span>Nv${m.lv}</span></div>
   <div class="bar"><i style="width:${pct}%;background:${hpColor(pct)};transition:width .45s ease,background .3s"></i></div>
   <div class="hpn">HP: ${m.hp} / ${m.max} ${m.status ? statusTag(m.status) : ''}</div>
   ${mine ? `<div class="bar exp" style="height:5px;margin-top:3px"><i style="width:${xpPct}%" class="xp-bar-fill"></i></div>
     <div class="hpn" style="color:#1a6da0">XP: ${c} / ${nxt}</div>` : ''}
   ${balls}`;
    }
    async function say(txt, wait) {
      const box = $('logbox'), p = document.createElement('p');
      p.innerHTML = txt; box.appendChild(p); box.scrollTop = box.scrollHeight;
      await sleep(wait === undefined ? BASE_TEXT : wait);
    }

    /* ---------- MENUS ---------- */
    function menuMain() {
      if (B.over || B.forced) return;
      $('menu').innerHTML = `<div class="grid2">
    <button class="btn red big" onclick="menuMoves()">${t('fight')}</button>
    <button class="btn blue big" onclick="openBag(true)">${t('bag')}</button>
    <button class="btn gold big" onclick="openParty(true)">${t('switchMon')}</button>
    <button class="btn dark big" onclick="tryRun()">${B.wild ? t('run') : t('giveUp')}</button>
   </div>
   <button class="btn dark" onclick="showAnalysis()">${t('info')}</button>`;
    }
    function effAllowed() {
      if (!OPT.effHint) return false;
      const diff = (G.rules && G.rules.difficulty) || 'normal';
      const mode = (G.rules && G.rules.effMode) || (diff === 'easy' ? 'always' : diff === 'hard' ? 'caught' : 'seen');
      if (mode === 'always') return true;
      if (mode === 'caught') return B.known;
      return B.known || B.wasSeen;
    }
    function effMark(d) {
      if (!effAllowed() || d.p === 0) return '';
      const e = eff(d.t, B.foe.types);
      if (d.t === 'ground' && B.foe.ability === 'levitate' && B.known) return `<span class="effmark eff-none">${t('effImmune')}</span>`;
      if (e === 0) return `<span class="effmark eff-none">${t('effImmune')}</span>`;
      if (e === 4) return `<span class="effmark eff-sup">${t('effSuper4')}</span>`;
      if (e > 1) return `<span class="effmark eff-sup">${t('effSuper')}</span>`;
      if (e === 0.25) return `<span class="effmark eff-weak">${t('effWeak4')}</span>`;
      if (e < 1) return `<span class="effmark eff-weak">${t('effWeak')}</span>`;
      return `<span class="effmark eff-norm">${t('effNormal')}</span>`;
    }
    function menuMoves() {
      const m = cur();
      $('menu').innerHTML = `<div class="grid2">` +
        m.moves.map((mv, i) => {
          const d = MV[mv.i];
          const ppPct = mv.pp / mv.max;
          const ppCol = ppPct > 0.5 ? '#555555' : ppPct > 0.25 ? '#e8c33a' : '#e8703a';
          const disabled = mv.pp <= 0;
          return `<button type="button" class="btn movebtn" onclick="doMove(${i})" ${disabled ? 'disabled' : ''}>
       <span class="move-info-icon"
         onmouseenter="showMovePopup(this,'${mv.i}')" onmouseleave="hideMovePopup(this)"
         onclick="toggleMovePopup(this,'${mv.i}',event)">ℹ</span>
       <div class="move-popup" id="mpop_${i}"></div>
       ${effMark(d)}
       <span class="move-nm">${mvName(d)}</span>
       <small><span class="tag" style="background:${TCOLOR[d.t]}">${TP(d.t)}</span>
         <span style="color:${ppCol};font-family:var(--pix);font-size:7px">${mv.pp}/${mv.max} PP</span></small>
     </button>`;
        }).join('') +
        `</div><button type="button" class="btn dark" style="margin-top:2px" onclick="menuMain()">${t('back')}</button>`;
    }
    function toggleMovePopup(btn, mvIdx, ev) {
      if (ev) { ev.stopPropagation(); ev.preventDefault(); }
      const popup = btn.parentElement.querySelector('.move-popup');
      if (!popup) return;
      const isVis = popup.classList.contains('vis');
      document.querySelectorAll('.move-popup.vis').forEach(p => p.classList.remove('vis'));
      if (!isVis) showMovePopup(btn, mvIdx);
    }
    function showMovePopup(btn, mvIdx) {
      const d = MV[+mvIdx]; if (!d) return;
      const popup = btn.parentElement.querySelector('.move-popup');
      if (!popup) return;
      popup.innerHTML = `<div style="font-family:var(--pix);font-size:9.5px;color:var(--gold);margin-bottom:3px">${mvName(d)}</div>` +
        `<div style="font-size:11px;line-height:1.45;margin-bottom:4px;color:#f2f4fb">${moveShortDesc(d)}</div>` +
        `<div style="font-size:10px;color:#a8c4f0;display:flex;gap:6px;flex-wrap:wrap">` +
        `<span>${d.p ? t('power') + ' ' + d.p : t('catStatus')}</span>` +
        `<span>•</span><span>${d.a ? d.a + '% ' + t('acc') : '--'}</span>` +
        `<span>•</span><span>${tg(d.t)}</span></div>`;
      popup.classList.add('vis');
    }
    function hideMovePopup(btn) {
      const popup = btn.parentElement.querySelector('.move-popup');
      if (popup) popup.classList.remove('vis');
    }
    /* descrição curta de cada ataque */
    function moveShortDesc(d) {
      if (!d) return '';
      const spc = {
        'Tackle': { pt: 'Investe com o corpo todo.', en: 'Charges with full body.', es: 'Embiste con el cuerpo.' },
        'Scratch': { pt: 'Arranha com garras afiadas.', en: 'Scratches with claws.', es: 'Araña con garras.' },
        'Growl': { pt: 'Grunhe para baixar o Ataque inimigo.', en: 'Growls to lower Attack.', es: 'Gruñe para bajar Ataque.' },
        'Tail Whip': { pt: 'Balança a cauda para baixar Defesa.', en: 'Wags tail. Lowers Defense.', es: 'Mueve la cola. Baja Defensa.' },
        'Ember': { pt: 'Lança pequenas chamas. Pode queimar.', en: 'Fires small flames. May burn.', es: 'Lanza llamas. Puede quemar.' },
        'Water Gun': { pt: 'Dispara um jato de água.', en: 'Squirts a stream of water.', es: 'Dispara un chorro de agua.' },
        'Vine Whip': { pt: 'Chicoteia com cipós finos.', en: 'Whips with slender vines.', es: 'Azota con enredaderas.' },
        'Bite': { pt: 'Morde com presas afiadas. Pode assustar.', en: 'Bites with sharp fangs.', es: 'Muerde con colmillos.' },
        'Gust': { pt: 'Cria um tornado com as asas.', en: 'Creates a tornado with wings.', es: 'Crea un tornado con alas.' },
        'Peck': { pt: 'Bica com o bico pontiagudo.', en: 'Jabs with a sharp beak.', es: 'Pica con el pico puntiagudo.' },
        'Quick Attack': { pt: 'Avança rápido como um raio.', en: 'Lunges fast as lightning.', es: 'Avanza rápido como un rayo.' },
        'Fury Swipes': { pt: 'Arranha rapidamente de 2 a 5 vezes.', en: 'Rapidly scratches 2 to 5 times.', es: 'Araña rápidamente de 2 a 5 veces.' },
        'Thundershock': { pt: 'Choque elétrico fraco. Pode paralisar.', en: 'A weak shock. May paralyze.', es: 'Choque eléctrico débil.' }
      };
      if (spc[d.n.en]) return spc[d.n.en][LANG] || spc[d.n.en].en;
      const eff = d.e;
      if (d.p === 0) {
        if (eff && eff.slp) return { pt: 'Coloca o alvo no sono.', en: 'Puts the target to sleep.', es: 'Duerme al objetivo.' }[LANG] || 'Puts the target to sleep.';
        if (eff && eff.par) return { pt: 'Paralisa o alvo.', en: 'Paralyzes the target.', es: 'Paraliza al objetivo.' }[LANG] || 'Paralyzes the target.';
        if (eff && eff.psn) return { pt: 'Envenena o alvo.', en: 'Poisons the target.', es: 'Envenena al objetivo.' }[LANG] || 'Poisons the target.';
        if (eff && eff.buff === 'atk') return { pt: 'Dobra o próprio Ataque.', en: 'Sharply raises own Attack.', es: 'Sube mucho el propio Ataque.' }[LANG] || 'Sharply raises Attack.';
        return { pt: 'Golpe de status.', en: 'Status move.', es: 'Movimiento de estado.' }[LANG] || 'Status move.';
      }
      const typeDescs = {
        fire: { pt: 'Ataque de Fogo.', en: 'Fire attack.', es: 'Ataque de Fuego.' },
        water: { pt: 'Ataque de \u00c1gua.', en: 'Water attack.', es: 'Ataque de Agua.' },
        grass: { pt: 'Ataque de Planta.', en: 'Grass attack.', es: 'Ataque de Planta.' },
        electric: { pt: 'Ataque El\u00e9trico.', en: 'Electric attack.', es: 'Ataque El\u00e9ctrico.' },
        ice: { pt: 'Ataque de Gelo.', en: 'Ice attack.', es: 'Ataque de Hielo.' },
        fighting: { pt: 'Ataque Lutador.', en: 'Fighting attack.', es: 'Ataque de Lucha.' },
        poison: { pt: 'Ataque Venenoso.', en: 'Poison attack.', es: 'Ataque Veneno.' },
        ground: { pt: 'Ataque Terrestre.', en: 'Ground attack.', es: 'Ataque Tierra.' },
        flying: { pt: 'Ataque Voador.', en: 'Flying attack.', es: 'Ataque Volador.' },
        psychic: { pt: 'Ataque Ps\u00edquico.', en: 'Psychic attack.', es: 'Ataque Ps\u00edquico.' },
        bug: { pt: 'Ataque Inseto.', en: 'Bug attack.', es: 'Ataque Bicho.' },
        rock: { pt: 'Ataque de Pedra.', en: 'Rock attack.', es: 'Ataque Roca.' },
        ghost: { pt: 'Ataque Fantasma.', en: 'Ghost attack.', es: 'Ataque Fantasma.' },
        dragon: { pt: 'Ataque Drag\u00e3o.', en: 'Dragon attack.', es: 'Ataque Drag\u00f3n.' },
        dark: { pt: 'Ataque Sombrio.', en: 'Dark attack.', es: 'Ataque Siniestro.' },
        steel: { pt: 'Ataque de A\u00e7o.', en: 'Steel attack.', es: 'Ataque Acero.' },
        fairy: { pt: 'Ataque Fada.', en: 'Fairy attack.', es: 'Ataque Hada.' },
        normal: { pt: 'Ataque Normal.', en: 'Normal attack.', es: 'Ataque Normal.' }
      };
      let base = (typeDescs[d.t] || {})[LANG] || (typeDescs[d.t] || {}).en || 'Attack.';
      if (eff && eff.brn) base += ' ' + ({ pt: 'Pode queimar.', en: 'May burn.', es: 'Puede quemar.' }[LANG] || 'May burn.');
      if (eff && eff.par) base += ' ' + ({ pt: 'Pode paralisar.', en: 'May paralyze.', es: 'Puede paralizar.' }[LANG] || 'May paralyze.');
      if (eff && eff.psn) base += ' ' + ({ pt: 'Pode envenenar.', en: 'May poison.', es: 'Puede envenenar.' }[LANG] || 'May poison.');
      if (eff && eff.frz) base += ' ' + ({ pt: 'Pode congelar.', en: 'May freeze.', es: 'Puede congelar.' }[LANG] || 'May freeze.');
      if (eff && eff.slp) base += ' ' + ({ pt: 'Pode adormecer.', en: 'May cause sleep.', es: 'Puede dormir.' }[LANG] || 'May sleep.');
      return base;
    }
    function menuLock() { $('menu').innerHTML = `<div style="text-align:center;padding:16px;font-family:var(--pix);font-size:8px;opacity:.6">...</div>`; }
    function showAnalysis() {
      const o = $('ovl'); o.classList.add('on'); const foe = B.foe;
      const idName = DEX[foe.id - 1].name.toLowerCase().replace(/\W/g, '');
      const animGif = `https://play.pokemonshowdown.com/sprites/gen5ani/${idName}.gif`;
      const sprFb = spriteFb(foe, false);
      const pct = Math.max(0, foe.hp / foe.max * 100);
      o.innerHTML = `<h3>${t('analysis', monName(foe))}</h3><div class="scroll">
   <div class="mon-spotlight card" style="padding:16px 10px;background:radial-gradient(circle at 50% 50%,${TCOLOR[foe.types[0]]}25,rgba(15,20,38,.8) 75%);border:2px solid var(--line);border-radius:10px">
     <div style="position:relative;width:96px;height:96px;display:flex;align-items:flex-end;justify-content:center;margin:0 auto">
       <div style="position:absolute;bottom:4px;width:80px;height:16px;border-radius:50%;background:radial-gradient(ellipse,${TCOLOR[foe.types[0]]}50,transparent 70%);filter:blur(2px)"></div>
       <img src="${animGif}" onerror="this.onerror=null;this.src='${sprFb}'"
         style="max-width:96px;max-height:96px;image-rendering:pixelated;object-fit:contain;object-position:bottom center;transform-origin:bottom center;filter:drop-shadow(0 6px 14px rgba(0,0,0,.75));position:relative;z-index:2" alt="${dexName(foe.id)}">
     </div>
     <div style="font-family:var(--pix);font-size:10px;color:var(--gold);margin-top:8px;text-align:center">
       ${foe.shiny ? '<span class="shiny">★</span> ' : ''}${monName(foe)} <span style="opacity:.8;color:#f2f4fb;font-size:9px">Nv ${foe.lv}</span>
     </div>
     <div class="mon-types" style="justify-content:center;margin-top:4px">${foe.types.map(tg).join('')}</div>
     <div style="width:100%;max-width:240px;margin:8px auto 0">
       <div class="bar"><i style="width:${pct}%;background:${hpColor(pct)};transition:width .4s ease"></i></div>
       <div class="small" style="text-align:right;margin-top:3px;font-size:10px">HP: <b>${foe.hp}</b> / ${foe.max}</div>
     </div>
   </div>
   <div class="card">${B.known ? effPanel(foe.types) : `<p class="small" style="line-height:1.6;color:#a8b4d8">${t('notRegistered')}</p>`}</div>
   </div><button type="button" class="btn dark" onclick="$('ovl').classList.remove('on');menuMain()">${t('back')}</button>`;
    }

    /* ---------- AÇÕES ---------- */
    async function doMove(i) { if (B.busy) return; B.busy = true; menuLock(); await turnLoop({ type: 'move', i }); }
    async function doSwitch(i) {
      if (B.busy && !B.forced) return;
      $('ovl').classList.remove('on');
      if (B.forced) {
        B.me = i; B.forced = false; B.participants.add(i); drawField(true); $('meImg').classList.add('entry-me');
        await say(t('goMon', logMon(cur())));
        await abilityEntry(cur(), true);
        B.busy = false; menuMain(); return;
      }
      B.busy = true; menuLock(); await turnLoop({ type: 'switch', i });
    }
    async function useItem(k, inBattle) {
      const it = ITEMS[k];
      if (!inBattle) { if (it.kind === 'fossil') { reviveFossil(k); return; } if (it.kind !== 'ball') pickTarget(k, false); return; }
      if (it.kind === 'stone' || it.kind === 'mint' || it.kind === 'ppone' || it.kind === 'ppall' || it.kind === 'fossil') return;
      if (it.kind === 'ball') {
        if (!B.wild) { $('ovl').classList.remove('on'); B.busy = true; await say(t('cantCatch')); B.busy = false; menuMain(); return; }
        $('ovl').classList.remove('on'); B.busy = true; menuLock(); await turnLoop({ type: 'ball', k }); return;
      }
      pickTarget(k, true);
    }
    function pickTarget(k, inBattle) {
      const o = inBattle ? $('ovl') : $('mapOvl'); o.classList.add('on');
      o.innerHTML = `<h3>${t('useOn', bi(ITEMS[k].n))}</h3><div class="scroll">` +
        G.party.map((m, i) => `<button class="mon-row" onclick="applyItem('${k}',${i},${!!inBattle})">
     <img src="${icon(m.id, m.shiny)}" alt=""><div style="flex:1"><div class="nm">${monName(m)} Nv${m.lv}</div>
     <div class="small">${m.hp}/${m.max} HP ${m.status ? (STPT[m.status][LANG] || '') : ''}</div></div></button>`).join('') +
        `</div><button class="btn dark" onclick="openBag(${!!inBattle})">${t('back')}</button>`;
    }
    window.tmForget = function(i, k, slot, moveIdx) {
      const m = G.party[i], d = MV[moveIdx];
      G.bag[k]--;
      m.moves[slot] = { i: moveIdx, pp: ppOf(d), max: ppOf(d) };
      autosave(); flashMap(t('relearned', monName(m), mvName(d))); monDetail(i);
    };
    async function applyItem(k, idx, inBattle) {
      const it = ITEMS[k], m = G.party[idx]; let ok = false, msg = '';
      if (it.kind === 'mint') { openMintPicker(idx); return; }
      if (it.kind === 'ppone') { openPPPicker(idx, k); return; }
      if (m.dead) { inBattle ? openBag(true) : flashMap(t('nuzTag')); return; }
      if (it.kind === 'stone') {
        const map = STONE_EVO[m.id];
        if (map && map[it.stone]) {
          G.bag[k]--; autosave();
          $('mapOvl').classList.remove('on');
          await evolveTo(m, map[it.stone]);
          autosave(); renderMap(); return;
        }
        flashMap(t('stoneNoUse')); return;
      }
      
      if (it.kind === 'tm') {
        const canLearn = TM_COMPAT[m.id] && TM_COMPAT[m.id].includes(it.move);
        if (!canLearn) { flashMap(t('stoneNoUse')); return; }
        const mvIdx = MV.findIndex(x => (x[1] || x[0]).toLowerCase().replace(/ /g, '-') === it.move);
        if (mvIdx === -1) { flashMap("TM data error"); return; }
        if (m.moves.some(x => x.i === mvIdx)) { flashMap(t('alreadyKnows', monName(m))); return; }
        
        $('mapOvl').classList.remove('on');
        if (m.moves.length < 4) {
            G.bag[k]--;
            m.moves.push({ i: mvIdx, pp: ppOf(MV[mvIdx]), max: ppOf(MV[mvIdx]) });
            autosave(); flashMap(t('learned', monName(m), mvName(MV[mvIdx]))); monDetail(idx); return;
        } else {
            // Pick to forget
            $('mapOvl').classList.add('on');
            const d = MV[mvIdx];
            $('mapOvl').innerHTML = '<h3>' + t('pickToForget', mvName(d)) + '</h3><div class="scroll">' +
            m.moves.map((mv, j) => {
                const md = MV[mv.i]; 
                return '<button class="mon-row" onclick="tmForget(' + idx + ', \'' + k + '\', ' + j + ', ' + mvIdx + ')">' +
                '<div style="flex:1"><div class="nm">' + mvName(md) + '</div>' +
                '<div class="small">' + tg(md.t) + ' ' + catLabel(md) + ' ' + (md.p ? ' - Pwr ' + md.p : '') + '</div></div></button>';
            }).join('') +
            '</div><button class="btn dark" onclick="monDetail(' + idx + ')">' + t('back') + '</button>';
            return;
        }
      }
      if (it.kind === 'heal') { if (m.hp > 0 && m.hp < m.max) { const h = Math.min(it.heal, m.max - m.hp); m.hp += h; ok = true; msg = t('healedUp', monName(m), h); } else msg = t('noNeed', monName(m)); }
      if (it.kind === 'cure') { if (m.status) { m.status = null; m.slp = 0; ok = true; msg = t('cured', monName(m)); } else msg = t('isFine', monName(m)); }
      if (it.kind === 'revive') { if (m.hp <= 0) { m.hp = it.full ? m.max : Math.floor(m.max / 2); ok = true; msg = t('revived', monName(m)); } else msg = t('notFainted', monName(m)); }
      if (it.kind === 'fullrestore') { if (m.hp > 0 && (m.hp < m.max || m.status)) { m.hp = m.max; m.status = null; m.slp = 0; ok = true; msg = t('healedUp', monName(m), it.heal); } else msg = t('noNeed', monName(m)); }
      if (it.kind === 'ppall') { if (m.moves.some(mv => mv.pp < mv.max)) { m.moves.forEach(mv => mv.pp = Math.min(mv.max, mv.pp + it.pp)); ok = true; msg = t('ppRestored', monName(m)); } else msg = t('ppFull', monName(m)); }
      if (!ok) { inBattle ? openBag(true) : flashMap(msg); return; }
      G.bag[k]--; autosave();
      if (inBattle) { $('ovl').classList.remove('on'); B.busy = true; menuLock(); await turnLoop({ type: 'item', msg }); }
      else { renderMap(); flashMap(msg); }
    }
    async function tryRun() {
      if (B.busy) return;
      if (!B.wild) {
        if (!confirm(t('forfeitConfirm'))) return;
        B.busy = true; menuLock();
        const lost = Math.floor(G.money * 0.1); G.money = Math.max(0, G.money - lost);
        await say(t('forfeitMsg'));
        if (lost > 0) await say(t('lostMoney', lost));
        return endBattle('forfeit');
      }
      B.busy = true; menuLock();
      const chance = 0.45 + Math.min(0.4, (cur().spe - B.foe.spe) / 120) + B.run * 0.15; B.run++;
      if (Math.random() < chance) { await say(t('ranAway')); return endBattle('run'); }
      await say(t('cantRun'));
      await foeTurn();
      if (!B.over && !B.forced) await endOfTurn();
      if (!B.over && !B.forced) { B.busy = false; menuMain(); }
    }

    /* ---------- LOOP DE TURNO ---------- */
    async function turnLoop(action) {
      if (action.type === 'switch') {
        await say(t('comeBack', logMon(cur())));
        B.me = action.i; B.participants.add(action.i); drawField(true); $('meImg').classList.add('entry-me');
        await say(t('goMon', logMon(cur())));
        await abilityEntry(cur(), true);
        await foeTurn();
      } else if (action.type === 'item') {
        await say(action.msg); drawField(); await foeTurn();
      } else if (action.type === 'ball') {
        if (await throwBall(action.k)) return;
        await foeTurn();
      } else {
        const me = cur(), foe = B.foe;
        const foeMoveIdx = aiPick();
        const meMv = me.moves[action.i] ? MV[me.moves[action.i].i] : null;
        const foeMv = foe.moves[foeMoveIdx] ? MV[foe.moves[foeMoveIdx].i] : null;

        const pMe = (meMv && meMv.e && meMv.e.priority) || 0;
        const pFoe = (foeMv && foeMv.e && foeMv.e.priority) || 0;

        const meSpeStage = (B.boost && B.boost.me && B.boost.me.spe) || 0;
        const foeSpeStage = (B.boost && B.boost.foe && B.boost.foe.spe) || 0;
        const ms = me.spe * stageMult(meSpeStage) * (me.status === 'par' ? .25 : 1);
        const fs = foe.spe * stageMult(foeSpeStage) * (foe.status === 'par' ? .25 : 1);

        let meFirst = false;
        if (pMe !== pFoe) {
          meFirst = pMe > pFoe;
        } else {
          meFirst = ms === fs ? Math.random() < .5 : ms > fs;
        }

        if (meFirst) {
          await useMove(me, foe, action.i, true);
          if (!B.over && !B.forced && foe.hp > 0) await useMove(B.foe, cur(), foeMoveIdx, false);
        } else {
          await useMove(B.foe, cur(), foeMoveIdx, false);
          if (!B.over && !B.forced && cur().hp > 0 && me === cur()) await useMove(cur(), B.foe, action.i, true);
        }
      }
      if (B.over || B.forced) return;
      await endOfTurn();
      if (B.over || B.forced) return;
      B.busy = false;
      if (action.type === 'move') menuMoves(); else menuMain();
    }
    async function foeTurn() {
      if (B.over || B.forced || B.foe.hp <= 0) return;
      if (cur().hp <= 0) return;
      await useMove(B.foe, cur(), aiPick(), false);
    }
    function aiPick() {
      const foe = B.foe, me = cur();
      const scored = foe.moves.map((mv, i) => {
        const d = MV[mv.i];
        if (mv.pp <= 0) return { i, s: -1 };
        if (d.p === 0) return { i, s: me.status ? 5 : 30 };
        return { i, s: d.p * eff(d.t, me.types) * (foe.types.includes(d.t) ? 1.5 : 1) * (d.a / 100) };
      }).filter(o => o.s >= 0);
      if (!scored.length) return 0;
      scored.sort((a, b) => b.s - a.s);
      return Math.random() < 0.7 ? scored[0].i : pick(scored).i;
    }
    async function useMove(atk, def, idx, mine) {
      const mv = atk.moves[idx]; if (!mv) return;
      const d = MV[mv.i];
      if (atk.status === 'slp') {
        if (atk.slp > 0) { atk.slp--; await say(t('asleep', logMon(atk))); return; }
        atk.status = null; await say(t('wokeUp', logMon(atk))); drawField();
      }
      if (atk.status === 'frz') {
        if (Math.random() < .2) { atk.status = null; await say(t('thawed', logMon(atk))); drawField(); }
        else { await say(t('frozen', logMon(atk))); return; }
      }
      if (atk.status === 'par' && Math.random() < .25) { await say(t('paralyzed', logMon(atk))); return; }
      mv.pp--;
      await say(t('usedMove', logMon(atk), logMove(d)));
      if (Math.random() * 100 > d.a) { await dashAttack(mine); await say(t('missed')); return; }

      /* ---- Golpes multi-hit (Fury Cutter bate 2-5x igual o jogo) ---- */
      if (d.e && d.e.multi) {
        if (d.t === 'ground' && def.ability === 'levitate') { await say(t('noEffect', logMon(def))); return; }
        const e = eff(d.t, def.types);
        if (e === 0) { await say(t('noEffect', logMon(def))); return; }
        /* número de hits: 2=37.5%, 3=37.5%, 4=12.5%, 5=12.5% */
        const rollHits = () => { const r = Math.random(); return r < .375 ? 2 : r < .75 ? 3 : r < .875 ? 4 : 5; };
        const hits = rollHits();
        let totalDmg = 0;
        let hitsDone = 0;
        await dashAttack(mine);
        for (let h = 0; h < hits; h++) {
          hitsDone++;
          await playFX(d.t, mine);
          let dmg = calcDmg(atk, def, d, mine, e);
          let sturdyProc = false;
          if (def.ability === 'sturdy' && def.hp === def.max && dmg >= def.hp) { dmg = def.hp - 1; sturdyProc = true; }
          def.hp = Math.max(0, def.hp - dmg); totalDmg += dmg;
          drawField();
          /* flash rápido entre hits */
          const wrap = mine ? $('foeWrap') : $('meWrap');
          wrap.classList.add('hit'); await sleep(120 / OPT.speed);
          wrap.classList.remove('hit');
          if (sturdyProc) await say(t('sturdyMsg', logMon(def)));
          if (def.hp <= 0) break;
        }
        const hitMsg = (typeof LANG !== 'undefined' && LANG === 'pt') ? `Acertou ${hitsDone} vez(es)!` : (typeof LANG !== 'undefined' && LANG === 'es') ? `¡Acertó ${hitsDone} vez(es)!` : `Hit ${hitsDone} time(s)!`;
        await say(hitMsg);
        if (e > 1.5) await say(t('superEff'));
        else if (e < 1 && e > 0) await say(t('notVery'));
        if (B.crit) { B.crit = false; await say(t('critical')); }
        if (def.hp <= 0) { await faint(def, mine); return; }
        return;
      }

      await dashAttack(mine);
      if (d.p === 0) {
        await playFX(d.t, mine);
        if (d.e && d.e.buff) {
          const key = mine ? 'me' : 'foe';
          const stat = d.e.buff;
          const stages = d.e.stages || 2;
          B.boost[key][stat] = Math.min(6, (B.boost[key][stat] || 0) + stages);
          await say(t('statUp', logMon(atk)));
        } else if (d.e && d.e.debuff) {
          const key = mine ? 'foe' : 'me';
          const stat = d.e.debuff;
          const stages = d.e.stages || 1;
          B.boost[key][stat] = Math.max(-6, (B.boost[key][stat] || 0) - stages);
          const statName = t('stat' + stat.charAt(0).toUpperCase() + stat.slice(1)) || stat;
          await say(t('statDown', logMon(def), statName));
        } else if (d.e) {
          const st = Object.keys(d.e)[0];
          if (def.status || statusImmune(def, st)) await say(t('noEffect', logMon(def)));
          else { applyStatus(def, st); await say(t('became' + st.charAt(0).toUpperCase() + st.slice(1), logMon(def))); drawField(); }
        }
        return;
      }
      if (d.t === 'ground' && def.ability === 'levitate') { await say(t('noEffect', logMon(def))); return; }
      const e = eff(d.t, def.types);
      if (e === 0) { await say(t('noEffect', logMon(def))); return; }
      await playFX(d.t, mine);
      let dmg = calcDmg(atk, def, d, mine, e);
      const wrap = mine ? $('foeWrap') : $('meWrap');
      wrap.classList.add('hit');
      setTimeout(() => { wrap.classList.remove('hit'); }, 460 / OPT.speed);
      let sturdyProc = false;
      if (def.ability === 'sturdy' && def.hp === def.max && dmg >= def.hp) { dmg = def.hp - 1; sturdyProc = true; }
      def.hp = Math.max(0, def.hp - dmg);
      drawField(); await sleep(300);
      if (e > 1.5) await say(t('superEff'));
      else if (e < 1 && e > 0) await say(t('notVery'));
      if (B.crit) { B.crit = false; await say(t('critical')); }
      if (sturdyProc) await say(t('sturdyMsg', logMon(def)));
      if (def.hp <= 0) { await faint(def, mine); return; }
      if (d.c === 'f' && def.ability === 'static' && !atk.status && !statusImmune(atk, 'par') && Math.random() < 0.3) {
        applyStatus(atk, 'par'); await say(t('staticMsg', logMon(atk))); drawField();
      }
      if (d.e && !d.e.buff && !d.e.debuff) {
        const st = Object.keys(d.e)[0];
        if (!def.status && !statusImmune(def, st) && Math.random() * 100 < d.e[st]) {
          applyStatus(def, st);
          await say(t('became' + st.charAt(0).toUpperCase() + st.slice(1), logMon(def))); drawField();
        }
      }
    }
    function statusImmune(m, st) {
      return (st === 'psn' && (m.types.includes('poison') || m.types.includes('steel')))
        || (st === 'par' && m.types.includes('electric'))
        || (st === 'brn' && m.types.includes('fire'))
        || (st === 'frz' && m.types.includes('ice'));
    }
    function applyStatus(m, st) { m.status = st; if (st === 'slp') m.slp = rnd(1, 3); }
    function stageMult(s) { s = s || 0; return s >= 0 ? 1 + 0.5 * s : 1 / (1 + 0.5 * Math.abs(s)); }
    const BOOST_ABIL = { grass: 'overgrow', fire: 'blaze', water: 'torrent' };
    function calcDmg(atk, def, d, mine, e) {
      if (!d || d.p === 0 || e === 0) return 0;
      const bk = mine ? 'me' : 'foe';
      const oppBk = mine ? 'foe' : 'me';

      const crit = Math.random() < 0.0625;
      if (crit) B.crit = true;

      const isPhys = d.c === 'f' || (!d.c && ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel'].includes(d.t));

      let atkStage = (B.boost && B.boost[bk]) ? (B.boost[bk][isPhys ? 'atk' : 'spa'] || 0) : 0;
      let defStage = (B.boost && B.boost[oppBk]) ? (B.boost[oppBk][isPhys ? 'def' : 'spd'] || 0) : 0;

      // Gen 3: crítico ignora debuffs de ataque do atacante e buffs de defesa do alvo
      if (crit) {
        if (atkStage < 0) atkStage = 0;
        if (defStage > 0) defStage = 0;
      }

      let A = isPhys ? atk.atk * stageMult(atkStage) : atk.spa * stageMult(atkStage);
      let D = isPhys ? def.def * stageMult(defStage) : def.spd * stageMult(defStage);

      if (atk.status === 'brn' && isPhys) {
        if (atk.ability === 'guts') A *= 1.5;
        else A *= 0.5;
      } else if (atk.status && atk.ability === 'guts' && isPhys) {
        A *= 1.5;
      }

      A = Math.max(1, Math.floor(A));
      D = Math.max(1, Math.floor(D));

      // Fórmula oficial Gen 3 (FireRed):
      // nível: floor(2 * Lv / 5) + 2
      const levelFactor = Math.floor((2 * atk.lv) / 5) + 2;
      let dmg = Math.floor(Math.floor((levelFactor * d.p * A) / D) / 50) + 2;

      // Crítico Gen 3 = 2x
      if (crit) dmg = dmg * 2;

      // Habilidade de pinche (Overgrow/Blaze/Torrent): 1.5x quando HP <= 1/3
      const lowHp = atk.hp <= Math.floor(atk.max / 3);
      if (lowHp && BOOST_ABIL[d.t] === atk.ability) {
        dmg = Math.floor(dmg * 1.5);
      }
      // Habilidade Thick Fat no alvo: 50% de dano de Fogo e Gelo
      if (def.ability === 'thick_fat' && (d.t === 'fire' || d.t === 'ice')) {
        dmg = Math.floor(dmg * 0.5);
      }

      // STAB: 1.5x
      if (atk.types && atk.types.includes(d.t)) {
        dmg = Math.floor(dmg * 1.5);
      }

      // Efetividade de tipo
      dmg = Math.floor(dmg * e);

      // Aleatoriedade Gen 3: inteiro de 85 a 100 / 100
      const r = Math.floor(85 + Math.random() * 16);
      dmg = Math.floor((dmg * r) / 100);

      return Math.max(1, dmg);
    }
    async function endOfTurn() {
      for (const m of [cur(), B.foe]) {
        if (m.hp <= 0 || !m.status) continue;
        if (m.status === 'psn' || m.status === 'brn') {
          m.hp = Math.max(0, m.hp - Math.max(1, Math.floor(m.max / 16))); drawField();
          await say(t('hurtBy', logMon(m), m.status === 'psn' ? t('poisonW') : t('burnW')));
          if (m.hp <= 0) { await faint(m, m === B.foe); return; }
        }
      }
    }

    /* ---------- POKÉBOLA ---------- */
    async function throwBall(k) {
      G.bag[k]--;
      const it = ITEMS[k], foe = B.foe;
      await say(t('threwBall', bi(it.n)));
      const fx = $('ballFx');
      fx.src = ITSP + it.sprite + '.png';
      fx.onerror = function () { this.onerror = null; this.src = ITSP + 'poke-ball.png'; };
      fx.style.setProperty('--bx', '208px'); fx.style.setProperty('--by', '-72px');
      fx.style.left = '86px'; fx.style.bottom = '58px'; fx.style.display = 'block';
      fx.className = 'ball-throw';
      await sleep(760);
      const foeImg = $('foeImg');
      foeImg.classList.add('absorb');
      await sleep(420);
      foeImg.style.visibility = 'hidden'; foeImg.classList.remove('absorb');
      const hard = DEX[foe.id - 1].bst >= 500 ? 0.45 : DEX[foe.id - 1].bst >= 430 ? 0.7 : 1;
      let p = (1 - (2 * foe.hp) / (3 * foe.max)) * it.mult * hard;
      if (foe.status) p += 0.12;
      p = Math.max(0.04, Math.min(0.92, p));
      let shakes = 0;
      for (let i = 0; i < 3; i++) {
        fx.className = 'ball-throw ball-shake';
        await sleep(520);
        fx.className = 'ball-throw';
        if (Math.random() < Math.pow(p, 0.6)) shakes++; else break;
      }
      const caught = shakes >= 3 || Math.random() < p * 0.15;
      if (caught) {
        fx.className = 'ball-throw'; await sleep(200);
        fx.style.display = 'none';
        await say(t('gotcha', logMon(foe)), 1100);
        G.caught[foe.id] = 1; G.seen[foe.id] = 1; foe.exp = need(foe.id, foe.lv);
        if (G.party.length < 6) { G.party.push(foe); await say(t('joinedTeam', logMon(foe))); }
        else { G.box.push(foe); await say(t('toBoxMsg', logMon(foe))); }
        autosave(); endBattle('caught'); return true;
      }
      fx.className = 'ball-throw ball-pop';
      await sleep(380);
      fx.style.display = 'none'; fx.className = '';
      foeImg.style.visibility = 'visible'; foeImg.classList.add('entry');
      await say(shakes === 0 ? t('escaped0') : shakes === 1 ? t('escaped1') : t('escaped2'));
      return false;
    }

    /* ---------- DESMAIO, EXP, EVOLUÇÃO ---------- */
    async function faint(mon, foeFainted) {
      const img = foeFainted ? $('foeImg') : $('meImg');
      img.classList.add('faint'); await sleep(620);
      await say(t('fainted', logMon(mon)));
      if (!foeFainted) { mon.friend = Math.max(0, (mon.friend === undefined ? 70 : mon.friend) - 5); }
      if (foeFainted) {
        await gainExp(mon);
        if (B.trainer) {
          const tr = B.trainer;
          if (tr.idx < tr.team.length - 1) {
            tr.idx++; B.foe = tr.team[tr.idx];
            G.seen[B.foe.id] = 1; B.known = !!G.caught[B.foe.id];
            drawField(true); $('foeImg').classList.add('entry');
            await say(t('trainerSent', bi(tr.name), logMon(B.foe)));
            await abilityEntry(B.foe, false);
            B.busy = false; menuMain(); return;
          }
          return winTrainer();
        }
        return endBattle('win');
      }
      if (G.rules && G.rules.nuzlocke && !foeFainted) {
        mon.dead = true;
        await say(t('nuzDead', logMon(mon)));
      }
      if (G.party.some(m => m.hp > 0 && !m.dead)) {
        B.forced = true; B.busy = true;
        await say(t('chooseNext'));
        openParty(true, true); return;
      }
      B.over = true;
      await say(t('blackout'));
      const lost = Math.floor(G.money * 0.2); G.money -= lost;
      await say(t('lostMoney', lost));
      G.party.forEach(m => { if (m.dead) return; m.hp = m.max; m.status = null; m.slp = 0; m.moves.forEach(x => x.pp = x.max); });
      // se era a batalha do rival do começo (sem penalidade) ou batalha de história (com penalidade normal)
      if ((G._rivalBattle || G._rivalBattleInitial) && !G._rivalBattleStory) {
        delete G._rivalBattle; delete G._rivalBattleInitial; delete G._rivalBattleStory;
        G.money += lost; // devolve o dinheiro perdido
        G.party.forEach(m => { m.hp = m.max; m.status = null; m.slp = 0; });
        autosave();
        const rn = getRivalName();
        const rivalWinLines = {
          pt: [
            `${rn}: Tá vendo?! Eu sabia que ia ganhar. Treina mais!`,
            `${rn}: Muito fácil. Talvez você precise de mais prática antes de me desafiar.`,
            `${rn}: Heh, esperava mais de você. Mas tudo bem, a jornada tá só começando.`,
            `${rn}: Você vai ficar de bobeira enquanto eu coleciono todas as insígnias.`
          ],
          en: [
            `${rn}: See?! I knew I'd win. You need to train more!`,
            `${rn}: Too easy. Maybe you need more practice before challenging me.`,
            `${rn}: Heh, I expected more from you. But the journey's just starting.`,
            `${rn}: You'll be left in the dust while I collect all the badges.`
          ],
          es: [
            `${rn}: ¿Lo ves?! Sabía que ganaría. ¡Necesitas entrenar más!`,
            `${rn}: Demasiado fácil. Quizás necesitas más práctica antes de desafiarme.`,
            `${rn}: Heh, esperaba más de ti. Pero bueno, el viaje apenas empieza.`,
            `${rn}: Quedarás atrás mientras yo colecciono todas las medallas.`
          ]
        };
        const lines = rivalWinLines[LANG] || rivalWinLines.pt;
        const rivalMsg = lines[Math.floor(Math.random() * lines.length)];
        const rivalSub = {
          pt: 'A jornada começa agora. Da próxima vai ser diferente.',
          en: 'The journey starts now. Next time will be different.',
          es: 'El viaje empieza ahora. La próxima vez será diferente.'
        }[LANG] || 'The journey starts now.';
        endScreen(rivalMsg, rivalSub);
        return;
      }
      leaveCurrentLoc();
      const back = (G.lastCenter === undefined) ? 0 : G.lastCenter;
      G.loc = back; G.node = back < G.maxLoc ? LOC[back].ev.length : (G.nodeAt[back] !== undefined ? G.nodeAt[back] : 0);
      autosave(); endScreen(t('whiteout'), t('whiteoutSub'));
    }
    const GYM_CAPS = [15, 21, 24, 30, 42, 47, 45, 50];
    function levelCap() {
      if (!G || !G.rules) return 100;
      const diff = G.rules.difficulty || 'normal';
      if (diff === 'easy') return 100;
      if (G.badges && G.badges.includes('champion')) return 100;
      const badges = badgeCount();
      const base = badges < 8 ? GYM_CAPS[badges] : 65;
      return diff === 'normal' ? base + 5 : base; // Normal dá uma folga acima do líder; Difícil fica no limite exato
    }
    async function gainExp(fainted) {
      const bYield = BASE_XP[fainted.id - 1] || (Math.floor(DEX[fainted.id - 1].bst * 0.32) + (evoStage(fainted.id) * 25));
      const rawXP = Math.floor((B.trainer ? 1.5 : 1) * bYield * fainted.lv / 7);
      const alive = G.party.filter(x => x.hp > 0 && !x.dead);
      const xpShare = (G.rules && typeof G.rules.xpShare === 'boolean') ? G.rules.xpShare : OPT.expAll;
      const partIdx = B.participants || new Set([B.me]);
      const participants = alive.filter(m => partIdx.has(G.party.indexOf(m)));
      // quem lutou na batalha sempre ganha XP, com ou sem Exp Share; Exp Share só estende pro resto do time
      const receivers = xpShare ? alive : (participants.length ? participants : alive.filter(x => x === cur()));
      const cap = levelCap();
      
      for (const m of receivers) {
        const amount = Math.max(1, xpShare ? Math.floor(rawXP / receivers.length) : (m === cur() ? rawXP : Math.floor(rawXP / 2)));
        let xpToGive = amount;
        gainEV(m, fainted);

        /* popup de XP flutuante */
        if (m === cur()) {
          const field = $('field');
          if (field) {
            const xpEl = document.createElement('div');
            xpEl.className = 'xp-popup';
            xpEl.textContent = '+' + amount + ' XP';
            xpEl.style.left = '14px'; xpEl.style.bottom = '50px';
            field.appendChild(xpEl);
            setTimeout(() => xpEl.remove(), 950);
          }
        }

        await say(t('gotExp', logMon(m), amount));

        while (xpToGive > 0) {
          if (m.lv >= cap || m.lv >= 100) {
            if (m.lv >= cap && m.lv < 100) await say(t('levelCapMsg', logMon(m), cap));
            m.exp += xpToGive;
            xpToGive = 0;
            if (m === cur()) drawField();
            break;
          }
          const nxtAbs = need(m.id, m.lv + 1);
          const chunk = Math.min(xpToGive, nxtAbs - m.exp);
          m.exp += chunk;
          xpToGive -= chunk;

          if (m === cur()) {
            const xpBar = document.querySelector('#plateMe .bar.exp i');
            const hpns = document.querySelectorAll('#plateMe .hpn');
            if (xpBar && hpns.length > 1) {
              const nxt = need(m.id, m.lv + 1) - need(m.id, m.lv);
              const c = m.exp - need(m.id, m.lv);
              xpBar.style.transition = 'width .4s linear';
              xpBar.style.width = Math.min(100, (c / nxt) * 100) + '%';
              hpns[1].innerHTML = `<span style="color:#4a98b8">XP: ${c} / ${nxt}</span>`;
              xpBar.classList.add('xp-anim');
              await sleep(400);
              xpBar.classList.remove('xp-anim');
            }
          }

          if (m.exp >= nxtAbs) {
            m.lv++; recalc(m, false); m.friend = Math.min(255, (m.friend || 70) + 3);
            if (m === cur()) drawField();
            if (window.AudioEngine) window.AudioEngine.playSFX('level');
            await say(t('levelUp', logMon(m), m.lv));
            const nw = learnset(m.id).find(x => x.lv === m.lv);
            if (nw && !m.moves.some(x => x.i === nw.i)) {
              if (m.moves.length < 4) { m.moves.push({ i: nw.i, pp: ppOf(nw), max: ppOf(nw) }); await say(t('learned', logMon(m), logMove(nw))); }
              else { await promptLearnMove(m, nw); }
            }
            const sp = DEX[m.id - 1];
            if (sp.evo && m.lv >= sp.evo.lv && !m.dead) {
              B.pendingEvos = B.pendingEvos || [];
              if (!B.pendingEvos.some(p => p.m === m)) B.pendingEvos.push({ m, to: sp.evo.to });
            }
          }
        }
      }
      autosave();
    }
    /* pergunta ao jogador se quer trocar um golpe pelo novo (sem decidir sozinho) */
    function promptLearnMove(m, nw) {
      return new Promise(resolve => {
        const md = mvName(nw);
        const desc = moveShortDesc(nw);
        $('menu').innerHTML = `<p class="small" style="text-align:center;margin:4px 0">${t('learnPrompt', monName(m), md)}</p>
     <p class="small" style="text-align:center;opacity:.7;margin:0 0 4px;color:#a0b8e0">${desc}</p>
     <div class="grid2">`+
          m.moves.map((mv, j) => {
            const od = MV[mv.i]; return `<button class="btn dark" onclick="__learnPick(${j})" style="text-align:left">
       <span>${mvName(od)}</span><small>${tg(od.t)}</small></button>`;
          }).join('') +
          `</div><button class="btn red" style="margin-top:4px" onclick="__learnPick(-1)">${t('learnSkip')}</button>`;
        window.__learnPick = async (j) => {
          $('menu').innerHTML = '';
          if (j === -1) { await say(t('moveNotLearned', logMon(m), md)); }
          else {
            const oldName = mvName(MV[m.moves[j].i]);
            m.moves[j] = { i: nw.i, pp: ppOf(nw), max: ppOf(nw) };
            await say(t('forgot', logMon(m), oldName, md));
          }
          resolve();
        };
      });
    }
    /* tela dedicada de evolução */
    async function evolveTo(m, newId) {
      const oldName = monName(m), oldId = m.id;
      const scr = $('evoScreen'), spr = $('evoSprite'), txt = $('evoText'), rays = $('evoRays');
      scr.classList.add('on'); rays.classList.add('on');
      spr.src = icon(oldId, m.shiny); spr.className = ''; applySprScale(spr, oldId);
      txt.textContent = t('evolving', oldName);
      await sleep(900);
      for (let i = 0; i < 3; i++) {
        spr.className = 'evo-pulse';
        await sleep(430);
        spr.src = (i % 2 === 0) ? icon(newId, m.shiny) : icon(oldId, m.shiny);
        spr.className = ''; applySprScale(spr, i % 2 === 0 ? newId : oldId);
        await sleep(120);
      }
      spr.src = icon(newId, m.shiny); applySprScale(spr, newId);
      const burst = document.createElement('div'); burst.className = 'evo-burst';
      spr.parentElement.appendChild(burst);
      setTimeout(() => burst.remove(), 1200 / OPT.speed);
      m.id = newId; recalc(m, false);
      G.caught[newId] = 1; G.seen[newId] = 1;
      txt.textContent = t('evolved', oldName, dexName(newId));
      await sleep(700);
      const btn = $('evoContinueBtn');
      btn.textContent = t('continue2'); btn.style.display = 'inline-block';
      await new Promise(resolve => { btn.onclick = () => resolve(); });
      btn.style.display = 'none';
      rays.classList.remove('on'); scr.classList.remove('on');
      if (B && !B.over) { drawField(true); }
    }
    async function winTrainer() {
      B.over = true;
      await say(t('defeated', bi(B.trainer.name)));
      if (B.trainer.money) { G.money += B.trainer.money; await say(t('prize', B.trainer.money)); }
      if (B.badge) {
        if (!G.badges.includes(B.badge)) G.badges.push(B.badge);
        await say(t('gotBadge', bi(BADGE[B.badge])), 1200);
        if (B.badge === 'champion') { try { localStorage.setItem('kanto_master_unlocked', '1'); } catch (e) { } }
      }
      G.wins = (G.wins || 0) + 1;
      if (G._rivalBattle || G._rivalBattleInitial) {
        delete G._rivalBattleInitial;
        autosave();
        const rn = getRivalName();

        /* falas autênticas de derrota do rival */
        const rivalLoseLines = {
          pt: [
            `${rn}: ...Impossível. Você não devia ter ganhado.`,
            `${rn}: Tudo bem! Eu tô só aquecendo. Da próxima você não tem chance.`,
            `${rn}: Como?! Eu escolhi o Pokémon certo... isso não faz sentido!`,
            `${rn}: Não acredito. Você teve sorte, só isso.`
          ],
          en: [
            `${rn}: ...Impossible. You shouldn't have won that.`,
            `${rn}: Fine! I was just warming up. Next time you won't stand a chance.`,
            `${rn}: What?! I picked the right Pokémon... this doesn't make sense!`,
            `${rn}: Unbelievable. You just got lucky, that's all.`
          ],
          es: [
            `${rn}: ...Imposible. No debiste haber ganado eso.`,
            `${rn}: ¡Bien! Solo me estaba calentando. La próxima no tendrás oportunidad.`,
            `${rn}: ¿Cómo?! Elegí el Pokémon correcto... ¡esto no tiene sentido!`,
            `${rn}: Increíble. Solo tuviste suerte, eso es todo.`
          ]
        };
        const lines = rivalLoseLines[LANG] || rivalLoseLines.en;
        const rivalMsg = lines[Math.floor(Math.random() * lines.length)];
        const rivalSub = {
          pt: 'A jornada começa agora. Ele não vai esquecer isso.',
          en: 'The journey starts now. He won\'t forget this.',
          es: 'El viaje empieza ahora. No olvidará esto.'
        }[LANG] || 'The journey starts now.';
        if (G._rivalBattleStory) {
          /* Rival da história: avança node e vai ao mapa */
          delete G._rivalBattle; delete G._rivalBattleStory;
          G.node = Math.min(LOC[G.loc].ev.length, G.node + 1);
          G.nodeAt[G.loc] = G.node;
          autosave();
          endScreen(rivalMsg, rivalSub);
        } else {
          endScreen(rivalMsg, rivalSub);
        }
        return;
      }
      endBattle('win');
    }
    async function endBattle(kind) {
      B.over = true;
      if (kind === 'win' || kind === 'caught') { G.party.forEach(m => { if (m.hp > 0 && !m.dead) m.friend = Math.min(255, (m.friend === undefined ? 70 : m.friend) + 1); }); }
      // batalha do rival: não avança node e vai direto para o mapa
      if ((G._rivalBattle || G._rivalBattleInitial) && !G._rivalBattleStory) {
        delete G._rivalBattle; delete G._rivalBattleInitial; delete G._rivalBattleStory;
        autosave();
        const rn = getRivalName();
        /* rival ganhou - fala de arrogância autêntica */
        const rivalWinLines = {
          pt: [
            `${rn}: Tá vendo?! Eu sabia que ia ganhar. Treina mais!`,
            `${rn}: Muito fácil. Talvez você precise de mais prática antes de me desafiar.`,
            `${rn}: Heh, esperava mais de você. Mas tudo bem, a jornada tá só começando.`,
            `${rn}: Você vai ficar de bobeira enquanto eu coleciono todas as insígnias.`
          ],
          en: [
            `${rn}: See?! I knew I'd win. You need to train more!`,
            `${rn}: Too easy. Maybe you need more practice before challenging me.`,
            `${rn}: Heh, I expected more from you. But hey, the journey's just starting.`,
            `${rn}: You'll be left in the dust while I collect all the badges.`
          ],
          es: [
            `${rn}: ¿Lo ves?! Sabía que ganaría. ¡Necesitas entrenar más!`,
            `${rn}: Demasiado fácil. Quizás necesitas más práctica antes de desafiarme.`,
            `${rn}: Heh, esperaba más de ti. Pero bueno, el viaje apenas empieza.`,
            `${rn}: Quedarás atrás mientras yo colecciono todas las medallas.`
          ]
        };
        const lines = rivalWinLines[LANG] || rivalWinLines.en;
        const rivalMsg = lines[Math.floor(Math.random() * lines.length)];
        const rivalSub = {
          pt: 'A jornada começa agora. Da próxima vai ser diferente.',
          en: 'The journey starts now. Next time will be different.',
          es: 'El viaje empieza ahora. La próxima vez será diferente.'
        }[LANG] || 'The journey starts now.';
        endScreen(rivalMsg, rivalSub);
        return;
      }
      if (kind !== 'run' && kind !== 'forfeit' && !B.training) G.node = Math.min(LOC[G.loc].ev.length, G.node + 1);
      G.nodeAt[G.loc] = G.node;
      autosave();
      const loc = LOC[G.loc], finished = G.node >= loc.ev.length;
      const title = kind === 'caught' ? t('captureT') : kind === 'forfeit' ? t('forfeit') : kind === 'run' ? t('ranT') : t('victory');
      const sub = B.training ? t('trainDone')
        : (finished && kind !== 'run')
          ? (G.loc < LOC.length - 1 ? t('areaDone', bi(loc.n), bi(LOC[G.loc + 1].n)) : t('allDone'))
          : t('keepGoing');
      if (B.pendingEvos && B.pendingEvos.length) {
        const evos = B.pendingEvos; B.pendingEvos = [];
        for (const p of evos) { if (p.m.hp > 0 && !p.m.dead) await evolveTo(p.m, p.to); }
        autosave();
      }
      endScreen(title, sub);
    }
    function endScreen(title, sub) {
      $('menu').innerHTML = '';
      const el = $('toast'); el.classList.add('on');
      el.innerHTML = `<div>${title}</div><div style="font-size:8px;opacity:.8;margin:8px 0 12px">${sub}</div>
   <button class="btn red" onclick="$('toast').classList.remove('on');renderMap()">${t('continue')}</button>`;
    }

    /* ---------- BOOT ---------- */
    loadOpts();
    document.documentElement.lang = LANG === 'pt' ? 'pt-BR' : LANG === 'es' ? 'es' : 'en';
    refreshTitle();
    setInterval(() => { if ($('title').classList.contains('on')) refreshTitle(); }, 20000);

    /* ---- Gerar bolinhas brancas animadas no fundo do título ---- */
    (function spawnTitleDots() {
      const c = document.getElementById('titleDotsContainer');
      if (!c) return;
      const N = 38;
      for (let i = 0; i < N; i++) {
        const d = document.createElement('div');
        d.className = 'title-dot';
        const size = 2 + Math.random() * 5;
        const dur = 6 + Math.random() * 12;
        const delay = -Math.random() * dur;
        const x = Math.random() * 100;
        d.style.cssText = `width:${size}px;height:${size}px;left:${x}%;bottom:-10px;` +
          `animation-duration:${dur}s;animation-delay:${delay}s;` +
          `filter:blur(${size > 5 ? 1 : 0}px);opacity:0`;
        c.appendChild(d);
      }
    })();

    document.addEventListener('click', e => {
      if (!e.target.closest('.move-info-icon') && !e.target.closest('.move-popup')) {
        document.querySelectorAll('.move-popup.vis').forEach(p => p.classList.remove('vis'));
      }
    });
