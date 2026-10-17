// Stardew Valley Localization Engine (i18n)
const fs = require('fs');
const path = require('path');

const i18nContent = `// Stardew Valley // Typing Valley - Multilingual Localization (i18n)
export const I18N = {
  es: {
    title: "STARDEW VALLEY // TYPING EDITION",
    subtitle: "Aprende mecanografía táctil al ritmo del campo. Cuida la huerta del abuelo, ayuda a los vecinos de Pelican Town y conviértete en Leyenda del Valle.",
    langName: "Español",
    modes: {
      campaign: "TAREAS DE LA GRANJA (100 NIVELES)",
      survival: "CAVERNA CALAVERA (TIME RUSH)",
      arcade: "EL REY DE LA PRADERA (ARCADE)",
      boss: "JEFE: JOJA CORP & MORRIS",
      speedtest: "CARRERA Y FESTIVAL DEL VALLE",
      custom: "EL CUADERNO DEL GRANJERO"
    },
    campaignDesc: "Aprende la posición anatómica de cada dedo paso a paso desde cero. 10 sectores del valle con 5 estrellas por nivel.",
    survivalDesc: "Contrarreloj en la mina del desierto: Empiezas con 30s. Cada palabra picada suma +3s y multiplica tus gemas y oro $g.",
    arcadeDesc: "El mítico minijuego de la taberna de Gus: dispara a los monstruos que descienden antes de que rompan tu valla.",
    bossDesc: "Enfréntate a Morris de JojaMart con 1000 HP en un duelo sin tregua para salvar el Centro Cívico con magia Junimo.",
    speedtestDesc: "Prueba oficial de 60 segundos de velocidad (PPM) y precisión campestre con textos de Stardew Valley.",
    customDesc: "Escribe o pega cualquier texto, carta o receta en tu cuaderno de notas de la cabaña rústica.",
    stats: {
      wpm: "PPM",
      wpmFull: "Palabras / Min",
      cpm: "CPM",
      accuracy: "Precisión",
      combo: "Combo",
      errors: "Errores",
      time: "Tiempo",
      xp: "Oro ($g)",
      level: "Nivel de Granjero",
      stars: "Estrellas de Calidad",
      streak: "Racha Máxima"
    },
    keyboard: {
      layout: "Distribución",
      esLayout: "Español (ISO con Ñ)",
      enLayout: "English (US ANSI)",
      handGuide: "Guía de Dedos",
      leftHand: "Mano Izquierda",
      rightHand: "Mano Derecha",
      fingers: {
        pinky: "Meñique",
        ring: "Anular",
        middle: "Medio",
        index: "Índice",
        thumb: "Pulgar"
      },
      pressKeyPrompt: "Usa el dedo: "
    },
    feedback: {
      perfect: "¡CALIDAD IRIDIO PURA!",
      great: "¡COSECHA DE ORO!",
      good: "BUENA LABOR AGRÍCOLA",
      retry: "REINTENTAR JORNADA",
      nextLevel: "SIGUIENTE NIVEL",
      victory: "¡TAREA COMPLETADA CON ÉXITO!",
      gameOver: "TE QUEDASTE SIN ENERGÍA (DERROTA)",
      bossDefeated: "¡JOJAMART EXPULSADO DEL VALLE!",
      newRecord: "¡NUEVO RÉCORD DE GRANJA!",
      accuracyWarning: "Objetivo mínimo de calidad: 90%"
    },
    ui: {
      sound: "Efectos",
      music: "Música Acústica",
      backToMenu: "Volver a la Granja",
      restart: "Reiniciar Tarea (Tab + Enter)",
      continue: "Continuar",
      weakKeys: "Herramientas que necesitan afilado (Teclas débiles):",
      heatmapTitle: "Mapa de Calor de la Huerta",
      progress: "Progreso en Pelican Town",
      chooseLanguage: "Idioma de los Pedidos",
      chooseLayout: "Distribución de Teclado",
      tipsTitle: "Sabiduría del Abuelo",
      tip1: "¡No mires el teclado físico! Mantén tus ojos en la huerta en pantalla.",
      tip2: "Siente los pequeños relieves en las teclas F y J con tus dedos índices.",
      tip3: "La velocidad brota del ritmo constante; prioriza siempre el 100% de precisión."
    }
  },

  en: {
    title: "STARDEW VALLEY // TYPING EDITION",
    subtitle: "Master touch typing through peaceful valley life. Tend to grandpa farm, aid the friendly villagers of Pelican Town, and become a Valley Legend.",
    langName: "English",
    modes: {
      campaign: "FARM TASKS (100 LEVELS)",
      survival: "SKULL CAVERN (TIME RUSH)",
      arcade: "JOURNEY OF PRAIRIE KING",
      boss: "BOSS: JOJA CORP & MORRIS",
      speedtest: "VALLEY DERBY BENCHMARK",
      custom: "FARMER JOURNAL NOTEBOOK"
    },
    campaignDesc: "Learn touch typing finger positions step by step from scratch. 10 valley sectors with 5 stars per level.",
    survivalDesc: "Endless desert cavern mining rush: Start with 30s. Every rock cleared grants +3s time and multiplies your gold $g.",
    arcadeDesc: "The classic arcade game in the Stardrop Saloon: defend your wooden fence against creeping monsters.",
    bossDesc: "Duel Morris from JojaMart with 1000 HP to save the Community Center with starlight Junimo magic.",
    speedtestDesc: "Official 60-second typing benchmark of speed (WPM) and accuracy with cozy Stardew Valley stories.",
    customDesc: "Paste any text, letter, or farming notes into your rustic oak cabin notebook.",
    stats: {
      wpm: "WPM",
      wpmFull: "Words / Min",
      cpm: "CPM",
      accuracy: "Accuracy",
      combo: "Combo",
      errors: "Errors",
      time: "Time",
      xp: "Gold ($g)",
      level: "Farmer Level",
      stars: "Quality Stars",
      streak: "Max Streak"
    },
    keyboard: {
      layout: "Layout",
      esLayout: "Spanish (ISO with Ñ)",
      enLayout: "English (US ANSI)",
      handGuide: "Finger Guide",
      leftHand: "Left Hand",
      rightHand: "Right Hand",
      fingers: {
        pinky: "Pinky",
        ring: "Ring",
        middle: "Middle",
        index: "Index",
        thumb: "Thumb"
      },
      pressKeyPrompt: "Use finger: "
    },
    feedback: {
      perfect: "PERFECT IRIDIUM QUALITY!",
      great: "GOLDEN HARVEST!",
      good: "WELL DONE FARMER",
      retry: "RETRY DAY",
      nextLevel: "NEXT LEVEL",
      victory: "TASK COMPLETED WITH JOY!",
      gameOver: "YOU RAN OUT OF ENERGY",
      bossDefeated: "JOJAMART DRIVEN OUT OF TOWN!",
      newRecord: "NEW FARM RECORD!",
      accuracyWarning: "Minimum quality threshold: 90%"
    },
    ui: {
      sound: "SFX",
      music: "Pastoral Drone",
      backToMenu: "Back to Farm",
      restart: "Restart Task (Tab + Enter)",
      continue: "Continue",
      weakKeys: "Tools needing sharpening (Weak keys):",
      heatmapTitle: "Field Heatmap of Errors",
      progress: "Pelican Town Progress",
      chooseLanguage: "Task Language",
      chooseLayout: "Keyboard Layout",
      tipsTitle: "Grandpa's Farming Wisdom",
      tip1: "Never look down at your physical keyboard! Keep your eyes on the screen.",
      tip2: "Feel the tactile bumps on keys F and J with your index fingers.",
      tip3: "Speed blossoms naturally from calm rhythm; always prioritize 100% precision."
    }
  },

  pt: {
    title: "STARDEW VALLEY // TYPING EDITION",
    subtitle: "Aprenda digitação tátil no ritmo acolhedor do campo. Cuide da fazenda do vovô e torne-se uma Lenda da Vila Pelicanos.",
    langName: "Português",
    modes: {
      campaign: "TAREFAS DA FAZENDA (100 NÍVEIS)",
      survival: "CAVERNA DA CAVEIRA (RUSH)",
      arcade: "O REI DA PRADARIA",
      boss: "CHEFE: JOJA CORP & MORRIS",
      speedtest: "FESTIVAL DO VALE",
      custom: "CADERNO DO FAZENDEIRO"
    },
    campaignDesc: "Aprenda a posição correta de cada dedo passo a passo. 10 setores do vale com 5 estrelas por nível.",
    survivalDesc: "Corrida na mina do deserto: Comece com 30s. Cada palavra quebrada dá +3s e multiplica suas moedas $g.",
    arcadeDesc: "O clássico minijogo do Salão Fruta Estelar: defenda sua cerca de monstros.",
    bossDesc: "Derrote Morris da JojaMart com 1000 HP para salvar o Centro Comunitário com a magia dos Junimos.",
    speedtestDesc: "Teste oficial de 60 segundos de velocidade (PPM) e precisão com textos de Stardew Valley.",
    customDesc: "Pratique qualquer texto no seu caderno da fazenda.",
    stats: {
      wpm: "PPM",
      wpmFull: "Palavras / Min",
      cpm: "CPM",
      accuracy: "Precisão",
      combo: "Combo",
      errors: "Erros",
      time: "Tempo",
      xp: "Ouro ($g)",
      level: "Nível de Fazendeiro",
      stars: "Estrelas",
      streak: "Sequência"
    },
    keyboard: {
      layout: "Teclado",
      esLayout: "Espanhol (com Ñ)",
      enLayout: "Inglês (US ANSI)",
      handGuide: "Guia de Dedos",
      leftHand: "Mão Esquerda",
      rightHand: "Mão Direita",
      fingers: {
        pinky: "Mínimo",
        ring: "Anelar",
        middle: "Médio",
        index: "Indicador",
        thumb: "Polegar"
      },
      pressKeyPrompt: "Use o dedo: "
    },
    feedback: {
      perfect: "QUALIDADE IRÍDIO PERFEITA!",
      great: "COLHEITA DE OURO!",
      good: "BOM TRABALHO NO CAMPO",
      retry: "TENTAR NOVAMENTE",
      nextLevel: "PRÓXIMO NÍVEL",
      victory: "TAREFA CONCLUÍDA!",
      gameOver: "ENERGIA ESGOTADA",
      bossDefeated: "JOJAMART EXPULSA DO VALE!",
      newRecord: "NOVO RECORDE!",
      accuracyWarning: "Meta mínima: 90%"
    },
    ui: {
      sound: "Sons",
      music: "Música Acústica",
      backToMenu: "Voltar à Fazenda",
      restart: "Reiniciar",
      continue: "Continuar",
      weakKeys: "Ferramentas que precisam amolar:",
      heatmapTitle: "Mapa de Erros da Fazenda",
      progress: "Progresso na Vila",
      chooseLanguage: "Idioma",
      chooseLayout: "Distribuição",
      tipsTitle: "Conselho do Vovô",
      tip1: "Não olhe para o teclado físico! Guie-se pelo mapa na tela.",
      tip2: "Sinta os relevos nas teclas F e J com os dedos indicadores.",
      tip3: "A velocidade vem do ritmo constante; priorize a precisão."
    }
  },

  fr: {
    title: "STARDEW VALLEY // TYPING EDITION",
    subtitle: "Maîtrisez la dactylographie au rythme apaisant de la vallée. Prenez soin de la ferme de grand-père et devenez une Légende de Pelican Town.",
    langName: "Français",
    modes: {
      campaign: "TÂCHES DE LA FERME (100 NIVEAUX)",
      survival: "CAVERNE DU CRÂNE (TIME RUSH)",
      arcade: "LE ROI DE LA PRAIRIE",
      boss: "BOSS: JOJA CORP & MORRIS",
      speedtest: "FESTIVAL DE LA VALLÉE",
      custom: "JOURNAL DU FERMIER"
    },
    campaignDesc: "Apprenez le placement de chaque doigt pas à pas avec 5 étoiles par niveau.",
    survivalDesc: "Descente effrénée dans la mine: Chaque mot brisé ajoute +3s et multiplie vos pièces d'or $g.",
    arcadeDesc: "Le jeu d'arcade légendaire du Saloon: protégez votre clôture contre les monstres.",
    bossDesc: "Battez Morris et JojaMart avec 1000 PV pour sauver le Centre Communautaire avec les Junimos.",
    speedtestDesc: "Test officiel de 60 secondes de vitesse (MPM) et précision dans l'univers de Stardew Valley.",
    customDesc: "Pratiquez n'importe quel texte dans votre carnet rustique.",
    stats: {
      wpm: "MPM",
      wpmFull: "Mots / Min",
      cpm: "CPM",
      accuracy: "Précision",
      combo: "Combo",
      errors: "Erreurs",
      time: "Temps",
      xp: "Or ($g)",
      level: "Niveau de Fermier",
      stars: "Étoiles",
      streak: "Série Max"
    },
    keyboard: {
      layout: "Clavier",
      esLayout: "Espagnol (avec Ñ)",
      enLayout: "Anglais (US ANSI)",
      handGuide: "Guide des Doigts",
      leftHand: "Main Gauche",
      rightHand: "Main Droite",
      fingers: {
        pinky: "Auriculaire",
        ring: "Annulaire",
        middle: "Majeur",
        index: "Index",
        thumb: "Pouce"
      },
      pressKeyPrompt: "Doigt: "
    },
    feedback: {
      perfect: "QUALITÉ IRIDIUM PARFAITE!",
      great: "RÉCOLTE D'OR!",
      good: "BEAU TRAVAIL",
      retry: "RÉESSAYER",
      nextLevel: "NIVEAU SUIVANT",
      victory: "TÂCHE ACCOMPLIE!",
      gameOver: "ÉNERGIE ÉPUISÉE",
      bossDefeated: "JOJAMART CHASSÉ DU VILLAGE!",
      newRecord: "NOUVEAU RECORD!",
      accuracyWarning: "Objectif: 90%"
    },
    ui: {
      sound: "Sons",
      music: "Musique Pastorale",
      backToMenu: "Retour à la Ferme",
      restart: "Recommencer",
      continue: "Continuer",
      weakKeys: "Outils à affûter (Touches faibles):",
      heatmapTitle: "Carte des Erreurs",
      progress: "Progression à Pelican Town",
      chooseLanguage: "Langue",
      chooseLayout: "Disposition",
      tipsTitle: "Conseil de Grand-Père",
      tip1: "Ne regardez pas votre clavier physique! Fiez-vous à l'écran.",
      tip2: "Sentez les repères tactiles sur les touches F et J.",
      tip3: "La vitesse découle d'un rythme régulier; visez 100% de précision."
    }
  }
};
`;

fs.writeFileSync(path.resolve(__dirname, '../js/game/i18n.js'), i18nContent, 'utf8');
console.log("✅ Wrote Stardew Valley i18n localization to js/game/i18n.js");
