// Stardew Valley State & Achievements Updater
const fs = require('fs');
const path = require('path');

const stateContent = `// Stardew Valley // Typing Valley - State & Persistence Engine

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

export class GameState {
  constructor() {
    this.data = this.load();
  }

  getDefaults() {
    return {
      lang: 'es',
      layout: 'es',
      theme: 'stardew', // Stardew Valley Theme
      difficulty: 'normal',
      arcadeDifficulty: 'veteran',
      soundEnabled: true,
      musicEnabled: false,
      switchType: 'thock', // 'thock' (Wood), 'junimo' (Bell), 'pickaxe' (Mining), 'water' (Splash), 'coin' (Pierre), 'typewriter' (Elliott)
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
    this.data.player.xp += Math.max(0, amount);
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

fs.writeFileSync(path.resolve(__dirname, '../js/game/state.js'), stateContent, 'utf8');
console.log("✅ Wrote Stardew Valley state engine to js/game/state.js");
