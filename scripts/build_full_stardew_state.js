// Generator for Stardew Valley Full State Engine with Pierre Store, Quests & Upgrades
const fs = require('fs');
const path = require('path');

const stateCode = `// Stardew Valley // Typing Valley - State, Farm Upgrades & Persistence Engine

const STORAGE_KEY = 'STARDEW_VALLEY_TYPING_SAVE_V1';

export const ACHIEVEMENTS_DEF = [
  { id: 'first_harvest', name: 'Primer Brote', icon: '🌱', desc: 'Cosecha tu primera chirivía en la parcela del abuelo.' },
  { id: 'sector_1', name: 'Parcela Limpia', icon: '🚜', desc: 'Supera los 10 niveles del Sector 1 (Parcela del Abuelo).' },
  { id: 'level_25', name: 'Amigo de Pelican Town', icon: '🏡', desc: 'Completa con éxito 25 tareas de la granja y el pueblo.' },
  { id: 'level_50', name: 'Héroe del Valle', icon: '🌻', desc: 'Supera el nivel 50 en el camino a la perfección.' },
  { id: 'level_75', name: 'Maestro Artesano', icon: '🍯', desc: 'Supera 75 niveles de labranza y artesanía.' },
  { id: 'level_100', name: 'La Cumbre de la Perfección', icon: '👑', desc: '¡Completa los 100 niveles y alcanza la cumbre del valle!' },
  { id: 'stars_10', name: 'Primer Canasto', icon: '⭐', desc: 'Consigue 10 estrellas de calidad en tus pedidos.' },
  { id: 'stars_50', name: 'Cosecha Abundante', icon: '🌟', desc: 'Consigue 50 estrellas en la huerta del valle.' },
  { id: 'stars_100', name: 'Bodega de Calidad', icon: '🏆', desc: 'Consigue 100 estrellas doradas en la granja.' },
  { id: 'stars_250', name: 'Orgullo de la Aldea', icon: '✨', desc: 'Consigue 250 estrellas en tus labores agrícolas.' },
  { id: 'stars_500', name: 'Granjero Legendario', icon: '🌌', desc: '¡Consigue las 500 estrellas totales de Stardew Valley!' },
  { id: 'accuracy_100', name: 'Peculiaridad de Iridio', icon: '🎯', desc: 'Completa cualquier nivel con 100% de precisión perfecta.' },
  { id: 'rank_sss', name: 'Calidad Iridio Púrpura', icon: '💜', desc: 'Alcanza la máxima calificación de Calidad Iridio (SSS) en un nivel.' },
  { id: 'speed_40', name: 'Paso Ligero', icon: '🐎', desc: 'Alcanza o supera los 40 WPM en una jornada de labranza.' },
  { id: 'speed_70', name: 'Trote Campestre', icon: '⚡', desc: 'Alcanza o supera los 70 WPM con tus dedos en el teclado.' },
  { id: 'speed_100', name: 'Galope del Viento', icon: '🚀', desc: '¡Rompe la barrera de los 100 WPM al compás de la naturaleza!' },
  { id: 'combo_50', name: 'Ritmo de Cosecha', icon: '🌾', desc: 'Consigue un combo de 50 pulsaciones perfectas seguidas.' },
  { id: 'combo_100', name: 'Sinfonía del Valle', icon: '🎵', desc: '¡Alcanza un combo legendario de 100 pulsaciones sin fallar!' },
  { id: 'hardcore_survivor', name: 'Jornada a Contrarreloj', icon: '⏱️', desc: 'Supera una tarea con cronómetro estricto en modo Hardcore.' },
  { id: 'suddendeath_master', name: 'Pisar con Cuidado', icon: '🥚', desc: 'Gana en Muerte Súbita con 100% de precisión obligatoria.' },
  { id: 'blind_master', name: 'Labranza a Ciegas', icon: '🕶️', desc: 'Supera un nivel en Modo Ciego guiándote solo por el tacto.' },
  { id: 'glitch_survivor', name: 'Niebla en el Pantano', icon: '🌫️', desc: 'Sobrevive a una prueba de niebla mística y caos de teclas.' },
  { id: 'godmode_slayer', name: 'Bendición del Abuelo', icon: '🕯️', desc: 'Supera un nivel en Dificultad Máxima con 98% acc y 80+ WPM.' },
  { id: 'ghost_beater', name: 'Más Veloz que el Junimo', icon: '👻', desc: 'Vence al ritmo del Ghost Typist por más de 5 caracteres.' },
  { id: 'boss_slayer', name: '¡JojaMart Expulsado!', icon: '🏛️', desc: 'Vence a Morris y Joja Corporation para salvar el Centro Cívico.' },
  { id: 'arcade_hero', name: 'Rey de la Pradera', icon: '🤠', desc: 'Logra más de 500 puntos en El Viaje del Rey de la Pradera.' },
  { id: 'apocalypse_hero', name: 'Héroe de la Taberna', icon: '🍻', desc: 'Sobrevive con más de 1000 puntos en la dificultad Apocalipsis de la taberna.' },
  { id: 'survival_master', name: 'Descenso a la Caverna Calavera', icon: '💀', desc: 'Pica y supera 15 o más palabras consecutivas en la Caverna Calavera.' },
  { id: 'weak_key_crusher', name: 'Herramientas Afiladas', icon: '⛏️', desc: 'Completa un entrenamiento de afilado de tus teclas débiles.' },
  { id: 'custom_master', name: 'El Diario del Granjero', icon: '📖', desc: 'Escribe y practica un texto en el cuaderno de notas de la cabaña.' }
];

export const PIERRE_STORE_CATALOG = [
  { id: 'copperCan', name: 'Regadera de Cobre', icon: '💧', cost: 500, desc: '+15% de Oro ($g) adicional en cada cosecha completada.' },
  { id: 'steelPickaxe', name: 'Pico de Acero', icon: '⛏️', cost: 1500, desc: '+3 segundos de antorcha por acierto en la Caverna Calavera.' },
  { id: 'goldScythe', name: 'Guadaña de Oro', icon: '🌾', cost: 3000, desc: 'Las rachas de combo otorgan un 50% más de puntos de bonificación.' },
  { id: 'iridiumRod', name: 'Caña de Iridio', icon: '🎣', cost: 6000, desc: 'Protección de pesca: Perdona 1 fallo por nivel sin quebrar tu racha.' },
  { id: 'petDog', name: 'Perrito de Granja', icon: '🐶', cost: 2000, desc: 'Un leal compañero que ladra alegremente y celebra tus mejores combos.' },
  { id: 'petCat', name: 'Gatito de Granja', icon: '🐱', cost: 2000, desc: 'Un tierno felino que ronronea junto al teclado con cada palabra perfecta.' },
  { id: 'junimoHut', name: 'Choza de los Junimos', icon: '🛖', cost: 8000, desc: 'Los pequeños espíritus del bosque arrojan estrellas y confeti en rachas de 25+.' },
  { id: 'themeCherry', name: 'Madera de Cerezo', icon: '🌸', cost: 2500, desc: 'Estilo cosmético: Teclado de madera rosada con pétalos de primavera.' },
  { id: 'themeIridium', name: 'Cristal de Iridio', icon: '💜', cost: 10000, desc: 'Estilo cosmético: Teclado púrpura de cristal de iridio estelar con aura mágica.' },
  { id: 'goldClock', name: 'El Reloj Dorado', icon: '⏰', cost: 20000, desc: 'La máxima joya de la granja: Marco dorado eterno y prestigio indiscutible.' }
];

export class GameState {
  constructor() {
    this.data = this.load();
  }

  getDefaults() {
    return {
      lang: 'es',
      layout: 'es',
      theme: 'stardew',
      season: 'spring', // 'spring', 'summer', 'fall', 'winter'
      difficulty: 'normal',
      arcadeDifficulty: 'veteran',
      soundEnabled: true,
      musicEnabled: false,
      switchType: 'thock',
      showHandGuide: true,
      ghostTypistEnabled: true,
      freePlayMode: false,
      player: {
        xp: 0, // Oro ($g)
        level: 1, // Nivel de Granjero
        totalKeys: 0,
        totalErrors: 0,
        bestWpm: 0,
        arcadeHighScore: 0,
        survivalHighScore: 0,
        weakKeyDrillsCompleted: 0,
        bossDefeated: false
      },
      upgrades: {},
      dailyQuests: [
        { id: 'q_chars', title: 'Cosechar 100 Caracteres', desc: 'Escribe 100 caracteres sin errores fatales.', target: 100, current: 0, reward: 150, completed: false },
        { id: 'q_combo', title: 'Racha Campestre x30', desc: 'Consigue una racha de combo de 30 pulsaciones.', target: 30, current: 0, reward: 200, completed: false },
        { id: 'q_level', title: 'Completar 2 Tareas de la Huerta', desc: 'Supera con éxito dos niveles de la campaña.', target: 2, current: 0, reward: 300, completed: false }
      ],
      recentHistory: [],
      stars: {
        es: {},
        en: {},
        pt: {},
        fr: {}
      },
      keyHeatmap: {},
      achievements: {}
    };
  }

  load() {
    try {
      if (typeof localStorage === 'undefined') return this.getDefaults();
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('CYBERPUNK_NETRUNNER_SAVE_V3');
      if (!raw) return this.getDefaults();
      const parsed = JSON.parse(raw);
      const defaults = this.getDefaults();
      return {
        ...defaults,
        ...parsed,
        player: { ...defaults.player, ...(parsed.player || {}) },
        upgrades: { ...(parsed.upgrades || {}) },
        dailyQuests: parsed.dailyQuests || defaults.dailyQuests,
        recentHistory: parsed.recentHistory || defaults.recentHistory,
        stars: { ...defaults.stars, ...(parsed.stars || {}) },
        keyHeatmap: { ...(parsed.keyHeatmap || {}) },
        achievements: { ...(parsed.achievements || {}) }
      };
    } catch (e) {
      console.warn("Could not load saved data from localStorage", e);
      return this.getDefaults();
    }
  }

  save() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      }
    } catch (e) {
      console.error("Failed to save game state to localStorage", e);
    }
  }

  toggleFreePlayMode() {
    this.data.freePlayMode = !this.data.freePlayMode;
    this.save();
    return this.data.freePlayMode;
  }

  isLevelUnlocked(lang, levelId) {
    if (this.data.freePlayMode) return true;
    if (levelId === 1) return true;
    const prevStars = this.getLevelStars(lang, levelId - 1);
    return prevStars > 0;
  }

  hasUpgrade(upgradeId) {
    return !!(this.data.upgrades && this.data.upgrades[upgradeId]);
  }

  buyUpgrade(upgradeId) {
    const item = PIERRE_STORE_CATALOG.find(i => i.id === upgradeId);
    if (!item) return { success: false, msg: 'Artículo no encontrado.' };
    if (this.hasUpgrade(upgradeId)) return { success: false, msg: 'Ya posees esta mejora.' };
    if (this.data.player.xp < item.cost) return { success: false, msg: 'No tienes suficiente Oro ($g).' };

    this.data.player.xp -= item.cost;
    if (!this.data.upgrades) this.data.upgrades = {};
    this.data.upgrades[upgradeId] = true;
    this.save();
    return { success: true, msg: \`¡Has adquirido: \${item.name}!\` };
  }

  setSeason(season) {
    this.data.season = season;
    this.save();
  }

  recordSessionHistory(wpm, accuracy, levelId) {
    if (!this.data.recentHistory) this.data.recentHistory = [];
    this.data.recentHistory.unshift({ wpm, accuracy, levelId, date: Date.now() });
    if (this.data.recentHistory.length > 10) this.data.recentHistory.pop();
    this.save();
  }

  updateQuest(type, amount) {
    let anyCompleted = false;
    (this.data.dailyQuests || []).forEach(q => {
      if (q.completed) return;
      if (type === 'chars' && q.id === 'q_chars') {
        q.current += amount;
      } else if (type === 'combo' && q.id === 'q_combo') {
        q.current = Math.max(q.current, amount);
      } else if (type === 'level' && q.id === 'q_level') {
        q.current += amount;
      }
      if (q.current >= q.target && !q.completed) {
        q.completed = true;
        this.data.player.xp += q.reward;
        anyCompleted = true;
      }
    });
    if (anyCompleted) this.save();
    return anyCompleted;
  }

  recordKey(char, isError = false) {
    if (!char) return;
    const c = char.toLowerCase();
    this.data.player.totalKeys++;
    if (isError) this.data.player.totalErrors++;

    if (!this.data.keyHeatmap[c]) {
      this.data.keyHeatmap[c] = { hits: 0, errors: 0 };
    }
    if (isError) {
      this.data.keyHeatmap[c].errors++;
    } else {
      this.data.keyHeatmap[c].hits++;
      this.updateQuest('chars', 1);
    }
    this.save();
  }

  getWeakestKeys(limit = 6) {
    const list = [];
    for (const [key, stat] of Object.entries(this.data.keyHeatmap || {})) {
      const total = stat.hits + stat.errors;
      if (total >= 5 && stat.errors > 0) {
        const errorRate = (stat.errors / total) * 100;
        list.push({ key, errorRate: Math.round(errorRate), errors: stat.errors, total });
      }
    }
    list.sort((a, b) => b.errorRate - a.errorRate);
    return list.slice(0, limit);
  }

  addXp(amount) {
    let finalAmount = amount;
    if (this.hasUpgrade('copperCan')) {
      finalAmount = Math.round(finalAmount * 1.15); // +15% copper can bonus!
    }
    this.data.player.xp += Math.max(0, finalAmount);
    const prevLevel = this.data.player.level;
    this.data.player.level = Math.floor(Math.sqrt(this.data.player.xp / 100)) + 1;
    this.save();
    return this.data.player.level > prevLevel;
  }

  saveLevelResult(lang, levelId, stars, wpm, accuracy) {
    if (!this.data.stars[lang]) this.data.stars[lang] = {};
    const cur = this.data.stars[lang][levelId] || { stars: 0, bestWpm: 0, bestAccuracy: 0 };

    const newStars = Math.max(cur.stars, stars);
    const newWpm = Math.max(cur.bestWpm, wpm);
    const newAcc = Math.max(cur.bestAccuracy, accuracy);

    this.data.stars[lang][levelId] = {
      stars: newStars,
      bestWpm: newWpm,
      bestAccuracy: newAcc,
      updatedAt: Date.now()
    };

    if (wpm > (this.data.player.bestWpm || 0)) {
      this.data.player.bestWpm = wpm;
    }

    this.recordSessionHistory(wpm, accuracy, levelId);
    this.updateQuest('level', 1);
    this.save();
    return newStars > cur.stars;
  }

  getLevelStars(lang, levelId) {
    return (this.data.stars[lang] && this.data.stars[lang][levelId]?.stars) || 0;
  }

  getLevelBestWpm(lang, levelId) {
    return (this.data.stars[lang] && this.data.stars[lang][levelId]?.bestWpm) || 0;
  }

  getTotalStars(lang) {
    const map = this.data.stars[lang] || {};
    return Object.values(map).reduce((sum, item) => sum + (item.stars || 0), 0);
  }

  getSectorProgress(lang, sectorLessons) {
    let stars = 0;
    let completed = 0;
    sectorLessons.forEach(lesson => {
      const s = this.getLevelStars(lang, lesson.id);
      stars += s;
      if (s > 0) completed++;
    });
    return {
      stars,
      maxStars: sectorLessons.length * 5,
      completed,
      total: sectorLessons.length
    };
  }

  getRank(accuracy, wpm, targetWpm = 30) {
    if (accuracy >= 100 && wpm >= targetWpm + 12) return 'SSS'; // Calidad Iridio
    if (accuracy >= 98 && wpm >= targetWpm + 8) return 'SS';   // Calidad Oro
    if (accuracy >= 95 && wpm >= targetWpm) return 'S';       // Calidad Plata
    if (accuracy >= 92 && wpm >= targetWpm - 4) return 'A';   // Calidad Estándar
    if (accuracy >= 88) return 'B';
    if (accuracy >= 80) return 'C';
    return 'D';
  }

  getPlayerRankTitle(level) {
    if (level < 5) return 'Granjero Novato de la Parcela';
    if (level < 10) return 'Horticultor de Primavera';
    if (level < 18) return 'Minero de la Montaña';
    if (level < 26) return 'Pescador del Muelle de Willy';
    if (level < 35) return 'Amigo de Marnie y los Animales';
    if (level < 45) return 'Héroe del Centro Cívico';
    return 'Leyenda Eterna de Stardew Valley';
  }

  isAchievementUnlocked(id) {
    return !!(this.data.achievements && this.data.achievements[id]);
  }

  getUnlockedAchievementsCount() {
    return Object.keys(this.data.achievements || {}).length;
  }

  saveArcadeScore(score) {
    if (score > (this.data.player.arcadeHighScore || 0)) {
      this.data.player.arcadeHighScore = score;
      this.save();
      return true;
    }
    return false;
  }

  saveSurvivalScore(wordsCleared) {
    if (wordsCleared > (this.data.player.survivalHighScore || 0)) {
      this.data.player.survivalHighScore = wordsCleared;
      this.save();
      return true;
    }
    return false;
  }

  recordWeakKeyDrill() {
    this.data.player.weakKeyDrillsCompleted = (this.data.player.weakKeyDrillsCompleted || 0) + 1;
    this.save();
  }

  unlockAchievement(id, title) {
    if (!this.data.achievements) this.data.achievements = {};
    if (!this.data.achievements[id]) {
      this.data.achievements[id] = { title, date: Date.now() };
      this.save();
      return true;
    }
    return false;
  }
}

export const gameState = new GameState();
`;

fs.writeFileSync(path.resolve(__dirname, '../js/game/state.js'), stateCode, 'utf8');
console.log("✅ Wrote full Stardew Valley state engine with Pierre store & quests to js/game/state.js");
