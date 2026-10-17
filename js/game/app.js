// ============================================================
// STARDEW VALLEY // TYPING EDITION - MASTER GAME ENGINE
// ============================================================

import { audio } from '../engine/audio.js';
import { particles } from '../engine/particles.js';
import { I18N } from './i18n.js';
import { 
  FINGER_DATA, 
  FINGER_COLORS, 
  KEYBOARD_LAYOUT_ES, 
  KEYBOARD_LAYOUT_EN, 
  createKeyCharMap 
} from './keyboard-data.js';
import { 
  CURRICULUM, 
  SECTOR_INFO,
  ARCADE_WORDS, 
  BOSS_ENCOUNTERS, 
  SPEED_TEST_TEXTS,
  SECTOR_CUTSCENES,
  FISHING_WORDS
} from './curriculum.js';
import { COMMUNITY_ROOMS, JUNIMO_BUNDLES } from './bundles-data.js';
import { MUSEUM_WINGS, MUSEUM_ARTIFACTS, MUSEUM_MILESTONES } from './museum-data.js';
import { gameState, ACHIEVEMENTS_DEF, PIERRE_STORE_CATALOG } from './state.js';

const IGNORED_INPUT_KEYS = new Set([
  'Shift', 'CapsLock', 'Control', 'Alt', 'AltGraph', 'Meta',
  'Escape', 'Dead', 'ContextMenu', 'ArrowLeft', 'ArrowRight',
  'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown',
  'NumLock', 'ScrollLock', 'Insert', 'Tab', 'F1', 'F2', 'F3', 'F4',
  'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
]);

class CyberTypeApp {
  constructor() {
    this.currentMode = 'menu'; // 'menu', 'campaign-select', 'campaign', 'arcade', 'boss', 'speedtest', 'survival', 'custom'
    this.currentLang = gameState.data.lang || 'es';
    this.currentLayout = gameState.data.layout || 'es';
    this.currentTheme = gameState.data.theme || 'stardew';
    this.selectedSector = 'all';
    this.statusFilter = 'all'; // 'all', 'pending', 'completed', 'mastered'
    this.activeKeyMap = null;

    // Campaign & Arena State
    this.currentLevel = null;
    this.textStream = "";
    this.cursorIndex = 0;
    this.startTime = null;
    this.errorsCount = 0;
    this.hitsCount = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.timerInterval = null;
    this.hardcoreTimeLeft = 45;
    this.isArenaFinished = false;
    this.sessionKeyErrors = {};
    this.iridiumShieldUsed = false;

    // Ghost Typist (Pace Car) State
    this.ghostPaceInterval = null;
    this.ghostCharIndex = 0;

    // Arcade State
    this.arcadeActive = false;
    this.arcadeWords = [];
    this.arcadeScore = 0;
    this.arcadeShield = 100;
    this.arcadeSpawnInterval = null;
    this.arcadeLoopId = null;
    this.activeArcadeTarget = null;

    // Boss Battle State
    this.bossActive = false;
    this.bossMaxHp = 1000;
    this.bossHp = 1000;
    this.bossPhase = 0;
    this.bossTimer = 15;
    this.bossTimerInterval = null;
    this.bossCounterText = "";
    this.bossCursorIndex = 0;

    // Speed Test State
    this.speedTestDuration = 60;
    this.speedTestTimeLeft = 60;

    // Skull Cavern Time Rush State
    this.survivalActive = false;
    this.survivalTimer = 30.0;
    this.survivalWordsCleared = 0;
    this.survivalMultiplier = 1.0;
    this.survivalTypedIndex = 0;
    this.survivalCurrentWord = "";
    this.survivalTimerInterval = null;

    // Character Companion & Action Track State
    this.selectedCompanion = 'farmer';
    this.companionIcons = {
      farmer: '👨‍🌾',
      farmer_f: '👩‍🌾',
      junimo: '🍏',
      horse: '🐎',
      shane: '🐔',
      willy: '🎣',
      wizard: '🧙‍♂️'
    };

    // Willy's Fishing Minigame State
    this.fishingActive = false;
    this.fishingCatchCount = 0;
    this.fishingTension = 0;
    this.fishingTargetWord = '';
    this.fishingTypedIndex = 0;
    this.fishingCurrentFish = null;

    // Community Center Bundles State
    this.bundlesActiveRoom = 'pantry';
    this.activeBundle = null;
    this.bundleRitualActive = false;
    this.bundleRitualText = '';
    this.bundleRitualCursor = 0;
    this.bundleRitualErrors = 0;

    // Gunther's Museum & Archaeology State
    this.currentMuseumWing = 'fossils';
    this.activeExcavationArtifact = null;
    this.excavationText = '';
    this.excavationCursor = 0;
    this.excavationErrors = 0;
  }

  init() {
    // 1. Initialize Canvas Particles
    const canvas = document.getElementById('particle-canvas');
    if (canvas) particles.init(canvas);

    // 2. Load saved settings into UI
    this.applySavedSettings();

    // 3. Render Virtual Keyboards
    this.updateKeyMap();
    this.renderKeyboard('keyboard-container');
    this.renderKeyboard('arcade-keyboard-container');
    this.renderKeyboard('boss-keyboard-container');
    this.renderKeyboard('survival-keyboard-container');
    this.renderKeyboard('fishing-keyboard-container');
    this.renderKeyboard('bundles-keyboard-container');
    this.renderKeyboard('museum-keyboard-container');

    // 4. Setup Event Listeners
    this.bindEvents();
    this.bindCharacterPicker();
    this.bindGuideTabs();

    // 5. Update UI Texts & Dashboard
    this.applyLocalization();
    this.renderDashboardWeakKeys();
    this.updatePlayerHUD();
    this.updateAchievementsBadge();
    this.updateBundlesBadge();
    this.updateMuseumBadge();
    this.updateSeasonUI();
    this.updateMascotsUI();
    this.applyCosmeticKeyboard();

    console.log("🌾 Stardew Valley Typing Master Engine Initialized with 100 Levels & Skull Cavern.");
  }

  // ==========================================================
  // SETTINGS & LOCALIZATION
  // ==========================================================
  applySavedSettings() {
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
      themeSelect.value = this.currentTheme;
      document.documentElement.setAttribute('data-theme', this.currentTheme);
    }

    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.value = this.currentLang;

    const layoutSelect = document.getElementById('layout-select');
    if (layoutSelect) layoutSelect.value = this.currentLayout;

    const switchSelect = document.getElementById('switch-sound-select');
    if (switchSelect) {
      switchSelect.value = gameState.data.switchType || 'thock';
      audio.setSwitchType(gameState.data.switchType || 'thock');
    }

    const sfxBtn = document.getElementById('toggle-sfx-btn');
    if (sfxBtn) {
      audio.setSoundEnabled(gameState.data.soundEnabled);
      sfxBtn.classList.toggle('active', gameState.data.soundEnabled);
    }

    const diffSelect = document.getElementById('difficulty-select');
    if (diffSelect) {
      diffSelect.value = gameState.data.difficulty || 'normal';
      this.updateDifficultySelectColor(gameState.data.difficulty || 'normal');
    }

    const arcadeDiffSelect = document.getElementById('arcade-diff-select');
    if (arcadeDiffSelect) {
      arcadeDiffSelect.value = gameState.data.arcadeDifficulty || 'veteran';
      this.updateArcadeDiffSelectColor(gameState.data.arcadeDifficulty || 'veteran');
    }

    const musicBtn = document.getElementById('toggle-music-btn');
    if (musicBtn) {
      audio.setMusicEnabled(gameState.data.musicEnabled);
      musicBtn.classList.toggle('active', gameState.data.musicEnabled);
    }
  }

  updateDifficultySelectColor(diff) {
    const sel = document.getElementById('difficulty-select');
    if (!sel) return;
    sel.className = `select-stardew select-stardew-diff diff-${diff}`;
  }

  updateArcadeDiffSelectColor(diff) {
    const sel = document.getElementById('arcade-diff-select');
    if (!sel) return;
    sel.className = `select-stardew select-stardew-arcade diff-${diff}`;
  }

  updateKeyMap() {
    const layout = this.currentLayout === 'en' ? KEYBOARD_LAYOUT_EN : KEYBOARD_LAYOUT_ES;
    this.activeKeyMap = createKeyCharMap(layout);
  }

  applyLocalization() {
    const dict = I18N[this.currentLang] || I18N.es;
    document.title = `${dict.title} - Videojuego de Mecanografía Táctil`;
    const heroTitle = document.getElementById('ui-hero-title');
    const heroSub = document.getElementById('ui-hero-subtitle');
    if (heroTitle) heroTitle.textContent = dict.title;
    if (heroSub) heroSub.textContent = dict.subtitle;

    const modeCampaign = document.getElementById('mode-name-campaign');
    const descCampaign = document.getElementById('mode-desc-campaign');
    if (modeCampaign) modeCampaign.textContent = dict.modes.campaign;
    if (descCampaign) descCampaign.textContent = dict.campaignDesc;

    const modeArcade = document.getElementById('mode-name-arcade');
    const descArcade = document.getElementById('mode-desc-arcade');
    if (modeArcade) modeArcade.textContent = dict.modes.arcade;
    if (descArcade) descArcade.textContent = dict.arcadeDesc;

    const modeBoss = document.getElementById('mode-name-boss');
    const descBoss = document.getElementById('mode-desc-boss');
    if (modeBoss) modeBoss.textContent = dict.modes.boss;
    if (descBoss) descBoss.textContent = dict.bossDesc;

    const modeSpeed = document.getElementById('mode-name-speedtest');
    const descSpeed = document.getElementById('mode-desc-speedtest');
    if (modeSpeed) modeSpeed.textContent = dict.modes.speedtest;
    if (descSpeed) descSpeed.textContent = dict.speedtestDesc;

    const modeCustom = document.getElementById('mode-name-custom');
    const descCustom = document.getElementById('mode-desc-custom');
    if (modeCustom) modeCustom.textContent = dict.modes.custom;
    if (descCustom) descCustom.textContent = dict.customDesc;

    const modeSurvival = document.getElementById('mode-name-survival');
    const descSurvival = document.getElementById('mode-desc-survival');
    if (modeSurvival && dict.modes.survival) modeSurvival.textContent = dict.modes.survival;
    if (descSurvival && dict.survivalDesc) descSurvival.textContent = dict.survivalDesc;

    const modeFishing = document.getElementById('mode-name-fishing');
    const descFishing = document.getElementById('mode-desc-fishing');
    if (modeFishing && dict.modes.fishing) modeFishing.textContent = dict.modes.fishing;
    if (descFishing && dict.fishingDesc) descFishing.textContent = dict.fishingDesc;

    const modeBundles = document.getElementById('mode-name-bundles');
    const descBundles = document.getElementById('mode-desc-bundles');
    if (modeBundles && dict.modes.bundles) modeBundles.textContent = dict.modes.bundles;
    if (descBundles && dict.bundlesDesc) descBundles.textContent = dict.bundlesDesc;
  }

  updatePlayerHUD() {
    const lvlEl = document.getElementById('player-level-val');
    const xpEl = document.getElementById('player-xp-val');
    if (lvlEl) lvlEl.textContent = gameState.data.player.level;
    if (xpEl) xpEl.textContent = gameState.data.player.xp;
  }

  // ==========================================================
  // VIRTUAL KEYBOARD RENDERING & FINGER HIGHLIGHTING
  // ==========================================================
  renderKeyboard(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    const layout = this.currentLayout === 'en' ? KEYBOARD_LAYOUT_EN : KEYBOARD_LAYOUT_ES;

    layout.forEach(row => {
      const rowEl = document.createElement('div');
      rowEl.className = 'keyboard-row';

      row.forEach(keyDef => {
        const keyEl = document.createElement('div');
        keyEl.className = 'key-cap';
        keyEl.dataset.code = keyDef.code;
        keyEl.dataset.key = keyDef.key;
        if (keyDef.finger) keyEl.dataset.finger = keyDef.finger;

        if (keyDef.width) keyEl.style.flex = String(keyDef.width);
        if (keyDef.isSpecial) keyEl.classList.add('key-special');
        if (keyDef.isSpace) keyEl.classList.add('key-space');
        if (keyDef.isHome) keyEl.classList.add('key-home');

        let innerContent = `<span class="primary-label">${keyDef.key.toUpperCase()}</span>`;
        if (keyDef.shiftKey && keyDef.shiftKey !== keyDef.key && !keyDef.isSpecial) {
          innerContent = `<span class="shift-label">${keyDef.shiftKey}</span><span class="primary-label">${keyDef.key}</span>`;
        }
        if (keyDef.hasBump) {
          innerContent += '<span class="tactile-bump"></span>';
        }

        keyEl.innerHTML = innerContent;
        rowEl.appendChild(keyEl);
      });

      container.appendChild(rowEl);
    });
  }

  highlightTargetKey(char) {
    if (!char) return;
    const diff = gameState.data.difficulty || 'normal';
    const isBlind = diff === 'blind';

    // Clear previous highlights
    document.querySelectorAll('.key-cap').forEach(k => {
      k.classList.remove('is-target', 'is-shift-target', 'is-error');
    });
    document.querySelectorAll('.finger-pill').forEach(f => f.classList.remove('active'));

    const keyDef = this.activeKeyMap[char] || this.activeKeyMap[char.toLowerCase()];
    if (!keyDef) return;

    const isShiftChar = keyDef.isShiftChar || (char !== ' ' && char !== char.toLowerCase());
    const fingerInfo = FINGER_DATA[keyDef.finger];

    if (!isBlind) {
      // Highlight primary target key
      const targetEls = document.querySelectorAll(`.key-cap[data-code="${keyDef.code}"]`);
      targetEls.forEach(el => el.classList.add('is-target'));

      // If key requires Shift, highlight opposite Shift key
      if (isShiftChar && fingerInfo) {
        const oppositeShiftCode = fingerInfo.hand === 'left' ? 'ShiftRight' : 'ShiftLeft';
        const shiftEls = document.querySelectorAll(`.key-cap[data-code="${oppositeShiftCode}"]`);
        shiftEls.forEach(el => el.classList.add('is-shift-target'));

        // Highlight pinky of the opposite hand
        const shiftFinger = fingerInfo.hand === 'left' ? 'right-pinky' : 'left-pinky';
        const shiftFingerPills = document.querySelectorAll(`.finger-pill[data-finger="${shiftFinger}"]`);
        shiftFingerPills.forEach(p => p.classList.add('active'));
      }

      // Highlight active finger on ergonomic hand guide
      if (keyDef.finger) {
        const fingerPills = document.querySelectorAll(`.finger-pill[data-finger="${keyDef.finger}"]`);
        fingerPills.forEach(p => p.classList.add('active'));
      }
    }

    // Update central banner prompt
    const badge = document.getElementById('active-finger-badge');
    const terminalHint = document.getElementById('terminal-finger-hint');

    if (isBlind && badge) {
      badge.textContent = `[MODO CIEGO] ${char === ' ' ? 'Espacio' : char}`;
      if (terminalHint) terminalHint.textContent = 'MODO CIEGO: GUÍA TÁCTIL';
      return;
    }

    if (badge && fingerInfo) {
      const displayChar = char === ' ' ? 'Espacio' : char;
      const fingerLabel = fingerInfo.label;
      badge.textContent = `${displayChar} — ${fingerLabel}`;
      badge.style.borderColor = fingerInfo.color;
      badge.style.color = '#fff';

      if (isShiftChar) {
        const shiftSide = fingerInfo.hand === 'left' ? 'Shift Der.' : 'Shift Izq.';
        badge.textContent += ` (+ ${shiftSide})`;
      }
    }

    if (terminalHint && fingerInfo) {
      terminalHint.textContent = `DEDO: ${fingerInfo.label.toUpperCase()} (${char === ' ' ? 'ESPACIO' : char})`;
    }
  }

  // ==========================================================
  // VIEW ROUTING & NAVIGATION
  // ==========================================================
  switchView(viewId) {
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    this.currentMode = viewId.replace('view-', '');
  }

  bindCharacterPicker() {
    const buttons = document.querySelectorAll('#character-picker-group .char-pick-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const charKey = btn.dataset.char || 'farmer';
        const icon = btn.dataset.icon || '👨‍🌾';
        this.selectedCompanion = charKey;
        const avatar = document.getElementById('runner-character-avatar');
        if (avatar) avatar.textContent = icon;
        audio.playKey();
        this.triggerCharacterEmote('✨');
      });
    });
  }

  triggerCharacterEmote(emoji) {
    const bubble = document.getElementById('character-emote-bubble');
    if (!bubble) return;
    bubble.textContent = emoji;
    bubble.classList.remove('pop');
    void bubble.offsetWidth;
    bubble.classList.add('pop');
    setTimeout(() => {
      if (bubble) bubble.classList.remove('pop');
    }, 1200);
  }

  // ==========================================================
  // CAMPAIGN MODE & 100 MASTER LEVELS
  // ==========================================================
  openCampaignSelect(sectorFilter = 'all') {
    this.selectedSector = sectorFilter;
    this.switchView('view-campaign-select');
    this.renderCampaignTabs();
    this.renderLevelCards();
  }

  renderCampaignTabs() {
    const lessons = CURRICULUM[this.currentLang] || CURRICULUM.es;

    // Stars summary badge
    const totalStarsVal = document.getElementById('total-stars-val');
    const totalStarsMax = document.getElementById('total-stars-max');
    if (totalStarsVal) totalStarsVal.textContent = gameState.getTotalStars(this.currentLang);
    if (totalStarsMax) totalStarsMax.textContent = lessons.length * 5;

    // Sync Free Play Mode toggle button UI
    const freePlayBtn = document.getElementById('btn-toggle-freeplay');
    const freePlayText = document.getElementById('freeplay-text');
    const freePlayIcon = document.getElementById('freeplay-icon');
    if (freePlayBtn) freePlayBtn.classList.toggle('active', gameState.data.freePlayMode);
    if (freePlayText) freePlayText.textContent = gameState.data.freePlayMode ? 'Modo Libre (Desbloqueado)' : 'Modo Progresivo (Bloqueado)';
    if (freePlayIcon) freePlayIcon.textContent = gameState.data.freePlayMode ? '🔓' : '🔒';

    const tabsContainer = document.getElementById('sector-tabs-container');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';

    const allChip = document.createElement('button');
    allChip.className = `sector-chip ${this.selectedSector === 'all' ? 'active' : ''}`;
    const allProg = gameState.getSectorProgress(this.currentLang, lessons);
    allChip.innerHTML = `<span>🌐</span> <span>Todos (${lessons.length} Niveles)</span> <small style="opacity:0.8; font-size:0.75rem;">(${allProg.completed}/${allProg.total})</small>`;
    allChip.addEventListener('click', () => {
      this.selectedSector = 'all';
      this.renderCampaignTabs();
      this.renderLevelCards();
    });
    tabsContainer.appendChild(allChip);

    Object.values(SECTOR_INFO).forEach(sec => {
      const chip = document.createElement('button');
      chip.className = `sector-chip ${this.selectedSector === String(sec.id) ? 'active' : ''}`;
      const secLessons = lessons.filter(l => l.sector === sec.id);
      const prog = gameState.getSectorProgress(this.currentLang, secLessons);
      chip.innerHTML = `<span>${sec.icon}</span> <span>${sec.name}</span> <small style="opacity:0.8; font-size:0.75rem;">(${prog.completed}/${prog.total})</small>`;
      chip.addEventListener('click', () => {
        this.selectedSector = String(sec.id);
        this.renderCampaignTabs();
        this.renderLevelCards();
      });
      tabsContainer.appendChild(chip);
    });
  }

  renderLevelCards() {
    const container = document.getElementById('levels-container');
    if (!container) return;

    container.innerHTML = '';
    const lessons = CURRICULUM[this.currentLang] || CURRICULUM.es;
    const searchInput = document.getElementById('level-search-input');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    let filtered = this.selectedSector === 'all' 
      ? lessons 
      : lessons.filter(l => String(l.sector) === this.selectedSector);

    if (query) {
      filtered = filtered.filter(l => 
        String(l.id) === query ||
        l.title.toLowerCase().includes(query) ||
        l.desc.toLowerCase().includes(query) ||
        (l.keys && l.keys.some(k => k.toLowerCase().includes(query)))
      );
    }

    // Apply Status Filter (all, pending, completed, mastered)
    if (this.statusFilter !== 'all') {
      filtered = filtered.filter(l => {
        const s = gameState.getLevelStars(this.currentLang, l.id);
        if (this.statusFilter === 'pending') return s === 0;
        if (this.statusFilter === 'completed') return s > 0;
        if (this.statusFilter === 'mastered') return s === 5;
        return true;
      });
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted); font-size: 1.1rem;">
          🔍 No se encontraron niveles que coincidan con los filtros actuales. Prueba cambiando el sector o el filtro de estado.
        </div>
      `;
      return;
    }

    let lastSector = null;

    filtered.forEach(lesson => {
      if (this.selectedSector === 'all' && lesson.sector !== lastSector && !query && this.statusFilter === 'all') {
        lastSector = lesson.sector;
        const secInfo = SECTOR_INFO[lesson.sector];
        if (secInfo) {
          const divider = document.createElement('div');
          divider.className = 'sector-header-divider';
          divider.style.setProperty('--sector-color', secInfo.color);
          divider.innerHTML = `<span>${secInfo.icon}</span> <span>${secInfo.name}</span> <span style="font-size:0.85rem; opacity:0.8; font-weight:normal;">— ${secInfo.desc || ''}</span>`;
          container.appendChild(divider);
        }
      }

      const secInfo = SECTOR_INFO[lesson.sector];
      const sectorColor = secInfo ? secInfo.color : 'var(--stardew-leaf-green)';

      const card = document.createElement('div');
      card.className = 'level-card';
      card.style.setProperty('--sector-accent', sectorColor);

      const stars = gameState.getLevelStars(this.currentLang, lesson.id);
      const isUnlocked = gameState.isLevelUnlocked(this.currentLang, lesson.id);
      const bestWpm = gameState.getLevelBestWpm(this.currentLang, lesson.id);

      if (!isUnlocked) {
        card.classList.add('locked');
      }
      if (stars === 5) {
        card.classList.add('mastered');
      }

      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        starsHtml += `<span class="star ${i <= stars ? 'filled' : ''}">★</span>`;
      }

      let lockBadgeHtml = '';
      if (!isUnlocked) {
        lockBadgeHtml = `<div class="level-lock-badge">🔒 Requiere Nivel ${lesson.id - 1}</div>`;
      }

      let bestWpmHtml = '';
      if (bestWpm > 0) {
        bestWpmHtml = `<span style="font-size:0.75rem; color:var(--stardew-sprout); font-family:var(--font-mono); margin-left:8px;">🏆 Récord: ${bestWpm} WPM</span>`;
      }

      card.innerHTML = `
        ${lockBadgeHtml}
        <div class="level-top-row">
          <span class="level-number" style="color: ${sectorColor};">NIVEL ${lesson.id}</span>
          <div class="star-rating">${starsHtml}</div>
        </div>
        <div class="level-name">${lesson.title}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">${lesson.desc}</div>
        <div style="font-size: 0.75rem; color: ${sectorColor}; font-family: var(--font-mono);">
          Meta: ${lesson.targetWpm} WPM • Mín: ${lesson.minAccuracy}% acc ${bestWpmHtml}
        </div>
        <div class="level-keys-preview">
          ${lesson.keys.map(k => `<span class="key-tag">${k === ' ' ? '␣ Espacio' : k}</span>`).join('')}
        </div>
      `;

      card.addEventListener('click', () => {
        if (!isUnlocked) {
          audio.playError();
          particles.triggerShake(6);
          this.showAchievementToast({
            icon: '🔒',
            name: 'Nivel Bloqueado',
            desc: `Supera el Nivel ${lesson.id - 1} con al menos 1 estrella o activa el Modo Libre arriba.`
          });
          return;
        }
        this.startLevel(lesson);
      });

      container.appendChild(card);
    });
  }

  startLevel(lessonOrId) {
    let lesson = lessonOrId;
    if (typeof lessonOrId === 'number') {
      const curriculum = CURRICULUM[this.currentLang] || CURRICULUM.es;
      lesson = curriculum.find(l => l.id === lessonOrId) || curriculum[0];
    }
    if (!lesson) return;

    this.stopFishing();
    this.stopArcade();
    this.stopBoss();
    this.stopSurvival();

    this.currentLevel = lesson;
    this.textStream = lesson.content;
    this.cursorIndex = 0;
    this.startTime = null;
    this.errorsCount = 0;
    this.hitsCount = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.isArenaFinished = false;
    this.sessionKeyErrors = {};

    if (this.ghostPaceInterval) clearInterval(this.ghostPaceInterval);
    this.ghostCharIndex = 0;

    // Reset Character Track state
    const runner = document.getElementById('runner-character-wrapper');
    if (runner) {
      runner.style.left = '0%';
      runner.classList.remove('step-hop', 'victory-leap');
      const avatar = document.getElementById('runner-character-avatar');
      if (avatar) avatar.textContent = this.companionIcons[this.selectedCompanion] || '👨‍🌾';
    }
    const bin = document.getElementById('meadow-shipping-bin');
    if (bin) bin.classList.remove('celebrate');
    for (let i = 1; i <= 4; i++) {
      const plot = document.getElementById(`plot-${i}`);
      if (plot) plot.classList.remove('blooming');
    }

    // Difficulty configuration
    const diff = gameState.data.difficulty || 'normal';
    const diffPill = document.getElementById('hud-diff-pill');
    const kbContainer = document.getElementById('keyboard-container');
    if (kbContainer) {
      kbContainer.classList.toggle('blind-mode', diff === 'blind');
    }

    if (diffPill) {
      diffPill.className = `diff-tag-pill ${diff}`;
      switch (diff) {
        case 'hardcore':
          diffPill.textContent = '⏱️ CARRERA A LAS 2:00 AM';
          this.hardcoreTimeLeft = lesson.timeLimit || 45;
          document.getElementById('hud-timer-label').textContent = 'Reloj al Ocaso';
          document.getElementById('hud-progress-val').textContent = `${this.hardcoreTimeLeft}s`;
          break;
        case 'suddendeath':
          diffPill.textContent = '🥚 HUEVO DE IRIDIO (100%)';
          document.getElementById('hud-timer-label').textContent = 'Progreso';
          document.getElementById('hud-progress-val').textContent = '0%';
          break;
        case 'blind':
          diffPill.textContent = '🕶️ MINA A OSCURAS (TACTO)';
          document.getElementById('hud-timer-label').textContent = 'Progreso';
          document.getElementById('hud-progress-val').textContent = '0%';
          break;
        case 'glitch':
          diffPill.textContent = '🌫️ NIEBLA DEL PANTANO (CAOS)';
          this.hardcoreTimeLeft = Math.max(25, Math.round((lesson.timeLimit || 45) * 0.7));
          document.getElementById('hud-timer-label').textContent = 'Tiempo Niebla';
          document.getElementById('hud-progress-val').textContent = `${this.hardcoreTimeLeft}s`;
          break;
        case 'godmode':
          diffPill.textContent = '🕯️ LAS 4 VELAS DEL ABUELO';
          this.hardcoreTimeLeft = Math.max(20, Math.round((lesson.timeLimit || 45) * 0.65));
          document.getElementById('hud-timer-label').textContent = 'Tiempo Restante';
          document.getElementById('hud-progress-val').textContent = `${this.hardcoreTimeLeft}s`;
          break;
        default:
          diffPill.textContent = '🌱 JORNADA SERENA';
          document.getElementById('hud-timer-label').textContent = 'Progreso';
          document.getElementById('hud-progress-val').textContent = '0%';
          break;
      }
    }

    // Ghost Badge setup
    const ghostBadge = document.getElementById('hud-ghost-badge');
    if (ghostBadge) {
      ghostBadge.textContent = gameState.data.ghostTypistEnabled ? `👻 Meta: ${lesson.targetWpm || 30} WPM` : '👻 APAGADO';
      ghostBadge.className = `ghost-hud-badge ${gameState.data.ghostTypistEnabled ? 'ahead' : 'behind'}`;
    }

    document.getElementById('arena-level-title').textContent = lesson.title.toUpperCase();
    this.switchView('view-arena');
    this.renderTextStream();
    this.highlightTargetKey(this.textStream[0]);
    this.updateArenaStats();
  }

  renderTextStream() {
    const container = document.getElementById('text-stream-display');
    if (!container) return;

    container.innerHTML = '';
    const text = this.textStream;

    for (let idx = 0; idx < text.length; idx++) {
      const span = document.createElement('span');
      span.textContent = text[idx];

      if (idx < this.cursorIndex) {
        span.className = 'char-done';
      } else if (idx === this.cursorIndex) {
        span.className = 'char-current';
      } else {
        span.className = 'char-pending';
      }

      if (gameState.data.ghostTypistEnabled && idx === this.ghostCharIndex && this.startTime) {
        span.classList.add('ghost-cursor');
      }

      container.appendChild(span);
    }

    // Auto-scroll active cursor into visible viewport center
    const currentSpan = container.children[this.cursorIndex];
    if (currentSpan) {
      currentSpan.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }

  updateGhostIndicator() {
    const badge = document.getElementById('hud-ghost-badge');
    if (!badge || !gameState.data.ghostTypistEnabled) return;

    const diffChars = this.cursorIndex - this.ghostCharIndex;
    if (diffChars >= 0) {
      badge.textContent = `👻 +${diffChars}c (Adelante)`;
      badge.className = 'ghost-hud-badge ahead';
    } else {
      badge.textContent = `👻 ${diffChars}c (Atrás)`;
      badge.className = 'ghost-hud-badge behind';
    }

    // Update ghost-cursor on text stream
    const container = document.getElementById('text-stream-display');
    if (container) {
      const prevGhost = container.querySelector('.ghost-cursor');
      if (prevGhost) prevGhost.classList.remove('ghost-cursor');
      const targetSpan = container.children[this.ghostCharIndex];
      if (targetSpan) targetSpan.classList.add('ghost-cursor');
    }
  }

  handleArenaKeystroke(e) {
    if (this.isArenaFinished) return;
    if (IGNORED_INPUT_KEYS.has(e.key)) return;

    const targetChar = this.textStream[this.cursorIndex];
    if (!targetChar) return;

    // Start timer on first keystroke
    if (!this.startTime) {
      this.startTime = Date.now();
      const diff = gameState.data.difficulty || 'normal';

      // Start Ghost Typist pacing interval
      if (gameState.data.ghostTypistEnabled && this.currentLevel) {
        const targetWpm = this.currentLevel.targetWpm || 30;
        const charsPerSec = (targetWpm * 5) / 60;
        this.ghostCharIndex = 0;
        this.ghostPaceInterval = setInterval(() => {
          if (this.isArenaFinished || !this.startTime) return;
          const elapsedSec = (Date.now() - this.startTime) / 1000;
          this.ghostCharIndex = Math.min(this.textStream.length - 1, Math.floor(elapsedSec * charsPerSec));
          this.updateGhostIndicator();
        }, 120);
      }

      if (diff === 'hardcore' || diff === 'glitch' || diff === 'godmode') {
        this.timerInterval = setInterval(() => {
          this.hardcoreTimeLeft--;
          document.getElementById('hud-progress-val').textContent = `${this.hardcoreTimeLeft}s`;
          this.updateArenaStats();

          // Glitch screen interference in glitch mode
          if (diff === 'glitch' && this.hardcoreTimeLeft > 0 && this.hardcoreTimeLeft % 5 === 0) {
            audio.playGlitch();
            particles.triggerShake(8);
            const arenaBox = document.getElementById('view-arena');
            if (arenaBox) {
              arenaBox.classList.add('screen-glitch-fx');
              setTimeout(() => arenaBox.classList.remove('screen-glitch-fx'), 350);
            }
            particles.addFloatingText("🌫️ ¡NIEBLA DEL PANTANO! 🌫️", window.innerWidth / 2, window.innerHeight / 2 - 140, '#ab47bc', 24);
          }

          if (this.hardcoreTimeLeft <= 0) {
            clearInterval(this.timerInterval);
            this.finishLevel(true); // Timed out defeat!
          }
        }, 1000);
      } else {
        this.timerInterval = setInterval(() => this.updateArenaStats(), 400);
      }
    }

    const pressedKey = e.key;

    // Resolve key element for visual flash
    const keyDef = this.activeKeyMap[pressedKey] || this.activeKeyMap[pressedKey.toLowerCase()];
    const keyEl = keyDef ? document.querySelector(`#keyboard-container .key-cap[data-code="${keyDef.code}"]`) : null;

    if (pressedKey === targetChar) {
      // === CORRECT STRIKE ===
      this.hitsCount++;
      this.combo++;
      if (this.combo > this.maxCombo) this.maxCombo = this.combo;

      // Audio & Particle FX
      audio.playKey(this.combo);
      gameState.recordKey(targetChar, false);
      gameState.updateQuest('chars', 1);
      gameState.updateQuest('combo', this.combo);
      this.triggerMascotCheer(this.combo);

      if (keyEl) {
        const rect = keyEl.getBoundingClientRect();
        const fingerColor = FINGER_COLORS[keyDef.finger] || '#00ff88';
        particles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, fingerColor, 10);
        keyEl.classList.add('is-hit');
        setTimeout(() => keyEl.classList.remove('is-hit'), 150);
      }

      // Combo Milestone Chimes
      if (this.combo === 10 || this.combo === 25 || this.combo === 50 || this.combo === 100) {
        audio.playComboChime(Math.floor(this.combo / 20) + 1);
        particles.triggerShake(4);
        particles.addFloatingText(`COMBO x${this.combo}!`, window.innerWidth / 2, window.innerHeight / 2 - 80, '#ffe600', 26);
      }

      // Character step-hop animation & emote burst
      const runner = document.getElementById('runner-character-wrapper');
      if (runner) {
        runner.classList.remove('step-hop');
        void runner.offsetWidth;
        runner.classList.add('step-hop');
      }
      if (this.combo > 0 && this.combo % 12 === 0) {
        const comboEmotes = ['❤️', '⭐', '✨', '🌻', '🍎', '🔥'];
        this.triggerCharacterEmote(comboEmotes[Math.floor(Math.random() * comboEmotes.length)]);
      }

      this.cursorIndex++;

      // Check level completion
      if (this.cursorIndex >= this.textStream.length) {
        this.finishLevel(false);
        return;
      }

      this.renderTextStream();
      this.highlightTargetKey(this.textStream[this.cursorIndex]);

    } else {
      // Check Iridium Fishing Rod shield (forgives 1 typo per level!)
      if (gameState.hasUpgrade('iridiumRod') && !this.iridiumShieldUsed) {
        this.iridiumShieldUsed = true;
        audio.playJunimoBell(audio.ctx ? audio.ctx.currentTime : 0, 100);
        particles.addFloatingText("🛡️ ¡ESCUDO DE IRIDIO ABSORBIÓ EL FALLO!", window.innerWidth / 2, window.innerHeight / 2 - 120, '#ab47bc', 22);
        return;
      }
      // === WRONG STRIKE (ERROR) ===
      this.errorsCount++;
      this.combo = 0;
      audio.playError();
      particles.triggerShake(6);
      gameState.recordKey(targetChar, true);
      this.triggerCharacterEmote('💦');

      // Record in session key errors for diagnostics
      if (!this.sessionKeyErrors[targetChar]) this.sessionKeyErrors[targetChar] = 0;
      this.sessionKeyErrors[targetChar]++;

      const diff = gameState.data.difficulty || 'normal';

      // SUDDEN DEATH CHECK: 1 Error = Immediate Failure!
      if (diff === 'suddendeath') {
        this.isArenaFinished = true;
        clearInterval(this.timerInterval);
        particles.triggerShake(16);
        const modal = document.getElementById('defeat-modal');
        document.getElementById('modal-defeat-title').textContent = "🥚 ¡EL HUEVO DE IRIDIO SE HA QUEBRADO!";
        document.getElementById('modal-defeat-sub').textContent = "Cometiste 1 tropiezo en las teclas. En este desafío se exige el 100% de precisión perfecta.";
        document.getElementById('modal-defeat-wpm').textContent = "0 WPM";
        document.getElementById('modal-defeat-acc').textContent = "FALLO";
        document.getElementById('modal-defeat-errors').textContent = "1 (FATAL)";
        modal.classList.add('active');
        return;
      }

      // HARDCORE TIME PENALTY: -3 seconds per error!
      if (diff === 'hardcore') {
        this.hardcoreTimeLeft = Math.max(0, this.hardcoreTimeLeft - 3);
        particles.addFloatingText("-3s ¡HACIA LAS 2:00 AM!", window.innerWidth / 2, window.innerHeight / 2 - 100, '#ff9800', 22);
        document.getElementById('hud-progress-val').textContent = `${this.hardcoreTimeLeft}s`;
        if (this.hardcoreTimeLeft <= 0) {
          clearInterval(this.timerInterval);
          this.finishLevel(true);
          return;
        }
      }

      // GLITCH PENALTY: -2 seconds per error
      if (diff === 'glitch') {
        this.hardcoreTimeLeft = Math.max(0, this.hardcoreTimeLeft - 2);
        particles.addFloatingText("-2s NIEBLA MÍSTICA", window.innerWidth / 2, window.innerHeight / 2 - 100, '#ab47bc', 22);
        document.getElementById('hud-progress-val').textContent = `${this.hardcoreTimeLeft}s`;
        if (this.hardcoreTimeLeft <= 0) {
          clearInterval(this.timerInterval);
          this.finishLevel(true);
          return;
        }
      }

      // GODMODE PENALTY: -4 seconds per error
      if (diff === 'godmode') {
        this.hardcoreTimeLeft = Math.max(0, this.hardcoreTimeLeft - 4);
        particles.addFloatingText("-4s GODMODE ERROR", window.innerWidth / 2, window.innerHeight / 2 - 100, '#ff0055', 24);
        document.getElementById('hud-progress-val').textContent = `${this.hardcoreTimeLeft}s`;
        if (this.hardcoreTimeLeft <= 0) {
          clearInterval(this.timerInterval);
          this.finishLevel(true);
          return;
        }
      }

      if (keyEl) {
        keyEl.classList.add('is-error');
        setTimeout(() => keyEl.classList.remove('is-error'), 250);
      }

      // Shake active span
      const streamContainer = document.getElementById('text-stream-display');
      const currentSpan = streamContainer ? streamContainer.children[this.cursorIndex] : null;
      if (currentSpan) {
        currentSpan.className = 'char-error';
        setTimeout(() => {
          if (this.cursorIndex < this.textStream.length) {
            currentSpan.className = 'char-current';
          }
        }, 220);
      }
    }

    this.updateArenaStats();
  }

  updateArenaStats() {
    if (!this.startTime) return;
    const elapsedMinutes = (Date.now() - this.startTime) / 60000;
    const wpm = elapsedMinutes > 0 ? Math.max(0, Math.round((this.hitsCount / 5) / elapsedMinutes)) : 0;
    const total = this.hitsCount + this.errorsCount;
    const accuracy = total > 0 ? Math.round((this.hitsCount / total) * 100) : 100;
    const progress = Math.min(100, Math.round((this.cursorIndex / this.textStream.length) * 100));

    const wpmEl = document.getElementById('hud-wpm-val');
    const accEl = document.getElementById('hud-acc-val');
    const comboEl = document.getElementById('hud-combo-val');
    const errorsEl = document.getElementById('hud-errors-val');
    const progressFill = document.getElementById('arena-progress-fill');
    const wpmMeter = document.getElementById('hud-wpm-meter');

    if (wpmEl) {
      wpmEl.innerHTML = `${wpm} <small style="font-size:0.85rem;">WPM</small>`;
      // Dynamic Speedometer Color
      if (wpm >= 90) {
        wpmEl.style.color = 'var(--stardew-iridium)';
        wpmEl.style.textShadow = '0 0 16px rgba(156, 39, 176, 0.7)';
      } else if (wpm >= 70) {
        wpmEl.style.color = 'var(--stardew-gold)';
        wpmEl.style.textShadow = '0 0 14px rgba(255, 215, 0, 0.6)';
      } else if (wpm >= 45) {
        wpmEl.style.color = 'var(--stardew-leaf-green)';
        wpmEl.style.textShadow = '0 0 12px rgba(115, 179, 42, 0.5)';
      } else {
        wpmEl.style.color = 'var(--stardew-wood-amber)';
        wpmEl.style.textShadow = 'none';
      }
    }

    if (wpmMeter) {
      wpmMeter.style.width = `${Math.min(100, (wpm / 100) * 100)}%`;
    }

    if (accEl) accEl.textContent = `${accuracy}%`;
    if (comboEl) comboEl.textContent = `x${this.combo}`;
    if (errorsEl) errorsEl.textContent = this.errorsCount;
    if (progressFill) progressFill.style.width = `${progress}%`;

    // Update Character Meadow Path Position & Crop Blossoming
    const runner = document.getElementById('runner-character-wrapper');
    if (runner) {
      const charLeft = Math.min(90, Math.max(0, progress * 0.9));
      runner.style.left = `${charLeft}%`;
    }
    const plot1 = document.getElementById('plot-1');
    const plot2 = document.getElementById('plot-2');
    const plot3 = document.getElementById('plot-3');
    const plot4 = document.getElementById('plot-4');
    if (plot1) plot1.classList.toggle('blooming', progress >= 25);
    if (plot2) plot2.classList.toggle('blooming', progress >= 50);
    if (plot3) plot3.classList.toggle('blooming', progress >= 75);
    if (plot4) plot4.classList.toggle('blooming', progress >= 100);

    const diff = gameState.data.difficulty || 'normal';
    if (diff !== 'hardcore' && diff !== 'glitch' && diff !== 'godmode') {
      const progVal = document.getElementById('hud-progress-val');
      if (progVal) progVal.textContent = `${progress}%`;
    }
  }

  finishLevel(timedOut = false) {
    this.isArenaFinished = true;
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.ghostPaceInterval) clearInterval(this.ghostPaceInterval);

    if (timedOut) {
      audio.playError();
      const modal = document.getElementById('defeat-modal');
      document.getElementById('modal-defeat-title').textContent = "¡SON LAS 2:00 AM: TE QUEDASTE SIN ENERGÍA!";
      document.getElementById('modal-defeat-sub').textContent = "El reloj del valle llegó a las 2:00 AM antes de completar la labor de la granja. ¡Descansa y vuelve a intentarlo mañana!";
      document.getElementById('modal-defeat-wpm').textContent = "TIMEOUT";
      document.getElementById('modal-defeat-acc').textContent = "0%";
      document.getElementById('modal-defeat-errors').textContent = this.errorsCount;
      modal.classList.add('active');
      return;
    }

    const elapsedMinutes = (Date.now() - this.startTime) / 60000;
    const wpm = Math.max(0, Math.round((this.hitsCount / 5) / elapsedMinutes));
    const total = this.hitsCount + this.errorsCount;
    const accuracy = total > 0 ? Math.round((this.hitsCount / total) * 100) : 100;

    const diff = gameState.data.difficulty || 'normal';
    let requiredAccuracy = 90;
    let requiredWpm = 0;
    let xpMultiplier = 1.0;

    switch (diff) {
      case 'hardcore':
        requiredAccuracy = 95;
        xpMultiplier = 2.0;
        break;
      case 'suddendeath':
        requiredAccuracy = 100;
        xpMultiplier = 3.5;
        break;
      case 'blind':
        requiredAccuracy = 94;
        xpMultiplier = 4.0;
        break;
      case 'glitch':
        requiredAccuracy = 96;
        xpMultiplier = 4.5;
        break;
      case 'godmode':
        requiredAccuracy = 98;
        requiredWpm = Math.max((this.currentLevel ? this.currentLevel.targetWpm : 30) + 10, 60);
        xpMultiplier = 5.0;
        break;
      default:
        requiredAccuracy = 90;
        xpMultiplier = 1.0;
        break;
    }

    let stars = 0;
    const meetsWpm = diff === 'godmode' ? wpm >= requiredWpm : true;
    if (accuracy >= requiredAccuracy && meetsWpm) {
      stars = 1;
      if (accuracy >= 93) stars = 2;
      if (wpm >= this.currentLevel.targetWpm) stars = 3;
      if (wpm >= this.currentLevel.targetWpm + 5 && accuracy >= 95) stars = 4;
      if (wpm >= this.currentLevel.targetWpm + 10 && accuracy >= 98) stars = 5;
    }

    const targetWpm = this.currentLevel ? (this.currentLevel.targetWpm || 30) : 30;
    const rank = gameState.getRank(accuracy, wpm, targetWpm);
    const beatGhost = gameState.data.ghostTypistEnabled && (this.cursorIndex - this.ghostCharIndex >= 5);

    if (stars > 0) {
      // VICTORY
      audio.playRankSound(rank);
      let xpEarned = Math.round((stars * 70 + Math.round(wpm * 2.5)) * xpMultiplier);
      if (gameState.hasUpgrade('copperCan')) {
        xpEarned = Math.round(xpEarned * 1.15); // +15% extra Gold with Copper Can!
      }
      gameState.addXp(xpEarned);
      if (typeof this.currentLevel.id === 'number') {
        gameState.saveLevelStars(this.currentLang, this.currentLevel.id, stars, wpm, accuracy);
      }
      this.updatePlayerHUD();

      // Character & Shipping Bin celebration
      const runner = document.getElementById('runner-character-wrapper');
      if (runner) {
        runner.style.left = '90%';
        runner.classList.add('victory-leap');
      }
      const bin = document.getElementById('meadow-shipping-bin');
      if (bin) bin.classList.add('celebrate');
      this.triggerCharacterEmote('🎉');

      // Check Achievements
      this.checkAchievements({
        levelId: this.currentLevel.id,
        stars,
        wpm,
        accuracy,
        diff,
        rank,
        beatGhost,
        won: true,
        isCustom: this.currentLevel.id === 'custom',
        isWeakDrill: this.currentLevel.id === 'weak_drill'
      });

      // Setup Rank Badge in Victory Modal
      const rankBadge = document.getElementById('modal-rank-badge');
      const rankDesc = document.getElementById('modal-rank-desc');
      if (rankBadge) {
        rankBadge.textContent = rank;
        rankBadge.className = `stardew-quality-badge rank-${rank.toLowerCase()}`;
      }
      if (rankDesc) {
        const descMap = {
          'SSS': '💜 CALIDAD IRIDIO (PERFECCIÓN PURA)',
          'SS': '⭐ CALIDAD ORO DEL VALLE',
          'S': '🥈 CALIDAD PLATA DE GRANJA MODELO',
          'A': '🥉 CALIDAD BRONCE DE BUENA COSECHA',
          'B': '🌾 LABRANZA SERENA Y CONSTANTE',
          'C': '🌱 BROTE JOVEN EN CRECIMIENTO',
          'D': '🍂 JORNADA DURA DE LABRANZA'
        };
        rankDesc.textContent = descMap[rank] || 'COSECHA DEL VALLE';
      }

      // Populate Error Diagnostics Box
      const errorBox = document.getElementById('modal-error-keys-box');
      const errorList = document.getElementById('modal-error-keys-list');
      const errorKeys = Object.entries(this.sessionKeyErrors);
      if (errorBox && errorList) {
        if (errorKeys.length > 0) {
          errorBox.style.display = 'block';
          errorList.innerHTML = errorKeys.map(([k, cnt]) => {
            const kdef = this.activeKeyMap[k] || this.activeKeyMap[k.toLowerCase()];
            const fingerName = kdef ? (FINGER_DATA[kdef.finger]?.label || 'Dedo') : 'Dedo';
            return `<span class="error-key-chip">${k === ' ' ? 'Espacio' : k}: ${cnt} fallos (${fingerName})</span>`;
          }).join('');
        } else {
          errorBox.style.display = 'none';
        }
      }

      // Modal setup
      const modal = document.getElementById('victory-modal');
      const starsContainer = document.getElementById('modal-victory-stars');
      starsContainer.innerHTML = '';
      for (let i = 1; i <= 5; i++) {
        starsContainer.innerHTML += `<span class="star ${i <= stars ? 'filled' : ''}">★</span>`;
      }
      document.getElementById('modal-stat-wpm').innerHTML = `${wpm} <small style="font-size:0.8rem;">WPM</small>`;
      document.getElementById('modal-stat-acc').textContent = `${accuracy}%`;
      const modalCombo = document.getElementById('modal-stat-combo');
      if (modalCombo) modalCombo.textContent = `x${this.maxCombo}`;
      document.getElementById('modal-stat-xp').textContent = `+${xpEarned} XP (${xpMultiplier}x)`;
      modal.classList.add('active');

    } else {
      // DEFEAT
      audio.playError();
      const modal = document.getElementById('defeat-modal');
      let defeatSub = `Precisión mínima exigida en modo ${diff.toUpperCase()}: ${requiredAccuracy}%. Tu precisión fue ${accuracy}%.`;
      if (diff === 'godmode' && wpm < requiredWpm) {
        defeatSub = `En modo GODMODE se exige al menos ${requiredWpm} WPM y ${requiredAccuracy}% de precisión. Tu resultado: ${wpm} WPM con ${accuracy}%.`;
      }
      document.getElementById('modal-defeat-title').textContent = "INTRUSIÓN BLOQUEADA";
      document.getElementById('modal-defeat-sub').textContent = defeatSub;
      document.getElementById('modal-defeat-wpm').textContent = `${wpm} WPM`;
      document.getElementById('modal-defeat-acc').textContent = `${accuracy}%`;
      document.getElementById('modal-defeat-errors').textContent = this.errorsCount;
      modal.classList.add('active');
    }

    this.renderDashboardWeakKeys();
  }

  stopArena() {
    this.isArenaFinished = true;
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.ghostPaceInterval) clearInterval(this.ghostPaceInterval);
  }

  // ==========================================================
  // WEAK KEYS INTELLIGENT DRILL GENERATOR
  // ==========================================================
  generateWeakKeyDrill() {
    const weak = gameState.getWeakestKeys(5);
    let focusKeys = [];
    if (weak.length >= 1) {
      focusKeys = weak.map(w => w.key);
    } else {
      focusKeys = ['p', 'q', 'x', 'z', 'ñ'];
    }

    // Filter real vocabulary from arcade words containing these keys
    const pool = ARCADE_WORDS[this.currentLang] || ARCADE_WORDS.es;
    const matchingWords = pool.filter(word => {
      const lower = word.toLowerCase();
      return focusKeys.some(k => lower.includes(k));
    });

    let selected = [];
    if (matchingWords.length >= 8) {
      selected = matchingWords.sort(() => 0.5 - Math.random()).slice(0, 16);
    } else {
      focusKeys.forEach(k => {
        selected.push(`${k}${k}${k}`, `fa${k}`, `${k}a${k}`, `la${k}`, `de${k}`, `${k}e${k}`);
      });
    }

    const drillText = selected.join(' ');
    const drillLesson = {
      id: 'weak_drill',
      sector: 1,
      title: `AFILADO EN LA HERRERÍA DE CLINT // TECLAS: ${focusKeys.map(k => k.toUpperCase()).join(', ')}`,
      desc: `Clint afila tus herramientas de granja para corregir las teclas con mayor tasa de fallos: ${focusKeys.join(', ')}. Mantén el pulso firme y constante.`,
      keys: focusKeys,
      targetWpm: 28,
      minAccuracy: 92,
      timeLimit: 50,
      content: drillText
    };

    audio.playComboChime(2);
    particles.triggerShake(5);
    this.startLevel(drillLesson);
  }

  // ==========================================================
  // SKULL CAVERN (TIME RUSH) MODE ENGINE
  // ==========================================================
  startSurvival() {
    this.stopArena();
    this.stopArcade();
    this.stopBoss();
    this.stopFishing();

    this.currentMode = 'survival';
    this.survivalActive = true;
    const baseSurvivalTime = gameState.hasTownPerk('minecarts') ? 35.0 : 30.0;
    this.survivalTimer = baseSurvivalTime;
    this.survivalWordsCleared = 0;
    this.survivalMultiplier = 1.0;
    this.survivalTypedIndex = 0;

    const timerVal = document.getElementById('survival-timer-val');
    if (timerVal) {
      timerVal.textContent = `${baseSurvivalTime.toFixed(1)}s`;
      timerVal.classList.remove('critical');
    }
    const wordsVal = document.getElementById('survival-words-val');
    if (wordsVal) wordsVal.textContent = '0';
    const multVal = document.getElementById('survival-mult-val');
    if (multVal) multVal.textContent = 'x1.0';
    const recVal = document.getElementById('survival-record-val');
    if (recVal) recVal.textContent = gameState.data.player.survivalHighScore || 0;

    this.switchView('view-survival');
    this.renderKeyboard('survival-keyboard-container');
    this.pickNextSurvivalWord();

    if (this.survivalTimerInterval) clearInterval(this.survivalTimerInterval);
    this.survivalTimerInterval = setInterval(() => {
      if (!this.survivalActive) return;
      this.survivalTimer -= 0.1;
      if (this.survivalTimer <= 0) {
        this.survivalTimer = 0;
        this.updateSurvivalTimerUI();
        this.gameOverSurvival();
        return;
      }
      this.updateSurvivalTimerUI();
    }, 100);
  }

  updateSurvivalTimerUI() {
    const el = document.getElementById('survival-timer-val');
    if (!el) return;
    el.textContent = `${this.survivalTimer.toFixed(1)}s`;
    if (this.survivalTimer <= 5.0) {
      el.classList.add('critical');
      if (Math.round(this.survivalTimer * 10) % 10 === 0) {
        audio.playWarningTick();
      }
    } else {
      el.classList.remove('critical');
    }
  }

  pickNextSurvivalWord() {
    const pool = ARCADE_WORDS[this.currentLang] || ARCADE_WORDS.es;
    let candidates = pool;
    if (this.survivalWordsCleared < 5) {
      candidates = pool.filter(w => w.length <= 5);
    } else if (this.survivalWordsCleared < 15) {
      candidates = pool.filter(w => w.length >= 4 && w.length <= 8);
    } else {
      candidates = pool.filter(w => w.length >= 6);
    }
    if (candidates.length === 0) candidates = pool;

    this.survivalCurrentWord = candidates[Math.floor(Math.random() * candidates.length)];
    this.survivalTypedIndex = 0;
    this.renderSurvivalWord();
    if (this.survivalCurrentWord[0]) {
      this.highlightSurvivalKey(this.survivalCurrentWord[0]);
    }
  }

  renderSurvivalWord() {
    const display = document.getElementById('survival-word-display');
    if (!display) return;
    display.innerHTML = '';
    const word = this.survivalCurrentWord;
    for (let i = 0; i < word.length; i++) {
      const span = document.createElement('span');
      span.textContent = word[i];
      if (i < this.survivalTypedIndex) {
        span.className = 'char-correct';
      } else if (i === this.survivalTypedIndex) {
        span.className = 'char-current';
      }
      display.appendChild(span);
    }
  }

  highlightSurvivalKey(char) {
    if (!char) return;
    const keyDef = this.activeKeyMap[char] || this.activeKeyMap[char.toLowerCase()];
    if (!keyDef) return;
    document.querySelectorAll('#survival-keyboard-container .key-cap').forEach(k => k.classList.remove('is-target', 'is-shift-target'));
    const keyEl = document.querySelector(`#survival-keyboard-container .key-cap[data-code="${keyDef.code}"]`);
    if (keyEl) keyEl.classList.add('is-target');
  }

  handleSurvivalKeystroke(e) {
    if (!this.survivalActive) return;
    if (IGNORED_INPUT_KEYS.has(e.key) || e.key.length > 1) return;

    const expectedChar = this.survivalCurrentWord[this.survivalTypedIndex];
    if (!expectedChar) return;

    if (e.key === expectedChar) {
      this.survivalTypedIndex++;
      audio.playKey(this.survivalWordsCleared);
      gameState.recordKey(expectedChar, false);

      if (this.survivalTypedIndex >= this.survivalCurrentWord.length) {
        // Word completed!
        const bonus = 3.0;
        this.survivalTimer += bonus;
        this.survivalWordsCleared++;
        this.survivalMultiplier = +(1.0 + Math.floor(this.survivalWordsCleared / 5) * 0.2).toFixed(1);

        audio.playTimeBonus();
        particles.triggerShake(5);
        particles.addFloatingText(`+${bonus.toFixed(1)}s!`, window.innerWidth / 2, window.innerHeight / 2 - 100, '#00ff88', 26);

        const wordsVal = document.getElementById('survival-words-val');
        if (wordsVal) wordsVal.textContent = this.survivalWordsCleared;
        const multVal = document.getElementById('survival-mult-val');
        if (multVal) multVal.textContent = `x${this.survivalMultiplier}`;

        this.pickNextSurvivalWord();
      } else {
        this.renderSurvivalWord();
        this.highlightSurvivalKey(this.survivalCurrentWord[this.survivalTypedIndex]);
      }
    } else {
      // Error in survival!
      this.survivalTimer = Math.max(0, this.survivalTimer - 2.0);
      audio.playError();
      particles.triggerShake(8);
      particles.addFloatingText("-2.0s!", window.innerWidth / 2, window.innerHeight / 2 - 80, '#ff0055', 24);
      gameState.recordKey(expectedChar, true);
      this.updateSurvivalTimerUI();
      if (this.survivalTimer <= 0) {
        this.gameOverSurvival();
      }
    }
  }

  gameOverSurvival() {
    this.survivalActive = false;
    if (this.survivalTimerInterval) clearInterval(this.survivalTimerInterval);
    audio.playError();

    const isNewRecord = gameState.saveSurvivalScore(this.survivalWordsCleared);
    const xpEarned = Math.round(this.survivalWordsCleared * 25 * this.survivalMultiplier);
    gameState.addXp(xpEarned);
    this.updatePlayerHUD();

    this.checkAchievements({
      isSurvival: true,
      survivalWords: this.survivalWordsCleared
    });

    const modal = document.getElementById('defeat-modal');
    document.getElementById('modal-defeat-title').textContent = "¡ANTORCHA APAGADA EN LA CAVERNA CALAVERA!";
    document.getElementById('modal-defeat-sub').textContent = isNewRecord 
      ? `¡NUEVO RÉCORD DE DESCENSO! Has picado ${this.survivalWordsCleared} rocas y palabras consecutivas.`
      : `Picaste ${this.survivalWordsCleared} rocas y minerales antes de que la luz de tu antorcha se extinguiera.`;
    document.getElementById('modal-defeat-wpm').textContent = `${this.survivalWordsCleared} rocas picadas`;
    document.getElementById('modal-defeat-acc').textContent = `Multiplicador x${this.survivalMultiplier}`;
    document.getElementById('modal-defeat-errors').textContent = `+${xpEarned} $g`;
    modal.classList.add('active');
  }

  stopSurvival() {
    this.survivalActive = false;
    if (this.survivalTimerInterval) clearInterval(this.survivalTimerInterval);
  }

  // ==========================================================
  // WILLY'S FISHING PIER MINIGAME (MODE 07)
  // ==========================================================
  startFishing() {
    this.stopArena();
    this.stopArcade();
    this.stopBoss();
    this.stopSurvival();

    this.currentMode = 'fishing';
    this.fishingActive = true;
    this.fishingCatchCount = 0;
    this.fishingTension = 0;

    const catchEl = document.getElementById('fishing-catch-count');
    if (catchEl) catchEl.textContent = '0';

    this.switchView('view-fishing');
    this.renderKeyboard('fishing-keyboard-container');
    this.spawnNextFish();
  }

  stopFishing() {
    this.fishingActive = false;
  }

  spawnNextFish() {
    this.fishingTension = 0;
    this.updateFishingGauge();

    const fishSpecies = [
      { name: 'Trucha Arcoíris (Oro)', icon: '🐟', xp: 45 },
      { name: 'Pez Sol Plateado', icon: '🐠', xp: 35 },
      { name: 'Pez Globo Saltarín', icon: '🐡', xp: 55 },
      { name: 'Bagre del Río (Iridio)', icon: '🐟', xp: 70 },
      { name: 'Esturión del Lago de la Montaña', icon: '🦈', xp: 85 },
      { name: 'Calamar de la Noche Marina', icon: '🦑', xp: 65 },
      { name: 'Pulpo Dorado de las Profundidades', icon: '🐙', xp: 80 },
      { name: 'La Leyenda del Océano', icon: '👑', xp: 120 }
    ];

    this.fishingCurrentFish = fishSpecies[Math.floor(Math.random() * fishSpecies.length)];

    const fishIconEl = document.getElementById('swimming-fish');
    const fishTagEl = document.getElementById('fish-name-tag');
    const willySpeech = document.getElementById('willy-speech');
    const willyChar = document.getElementById('willy-character');
    const willyEmote = document.getElementById('willy-emote');

    if (fishIconEl) fishIconEl.textContent = this.fishingCurrentFish.icon;
    if (fishTagEl) fishTagEl.textContent = this.fishingCurrentFish.name;
    if (willyChar) willyChar.className = 'willy-character';
    if (willyEmote) willyEmote.textContent = '🎣';
    if (willySpeech) {
      willySpeech.textContent = `"¡Un(a) ${this.fishingCurrentFish.name} picó el anzuelo! ¡Tensa la caña escribiendo las letras!"`;
    }

    const wordsPool = FISHING_WORDS[this.currentLang] || FISHING_WORDS.es;
    this.fishingTargetWord = wordsPool[Math.floor(Math.random() * wordsPool.length)];
    this.fishingTypedIndex = 0;

    this.renderFishingWord();
  }

  renderFishingWord() {
    const display = document.getElementById('fishing-target-word');
    if (!display) return;
    display.innerHTML = '';
    const word = this.fishingTargetWord;

    for (let i = 0; i < word.length; i++) {
      const span = document.createElement('span');
      span.textContent = word[i];
      if (i < this.fishingTypedIndex) {
        span.className = 'char-done';
      } else if (i === this.fishingTypedIndex) {
        span.className = 'char-current';
      } else {
        span.className = 'char-pending';
      }
      display.appendChild(span);
    }

    this.highlightFishingKey(this.fishingTargetWord[this.fishingTypedIndex]);
  }

  highlightFishingKey(char) {
    if (!char) return;
    const keyDef = this.activeKeyMap[char] || this.activeKeyMap[char.toLowerCase()];
    if (!keyDef) return;
    document.querySelectorAll('#fishing-keyboard-container .key-cap').forEach(k => {
      k.classList.remove('is-target', 'is-shift-target');
    });
    const keyEl = document.querySelector(`#fishing-keyboard-container .key-cap[data-code="${keyDef.code}"]`);
    if (keyEl) keyEl.classList.add('is-target');
  }

  updateFishingGauge() {
    const tensionVal = document.getElementById('reel-tension-val');
    const tensionFill = document.getElementById('reel-gauge-fill');
    const fishWrapper = document.getElementById('swimming-fish-wrapper');

    const pct = Math.min(100, Math.max(0, this.fishingTension));
    if (tensionVal) tensionVal.textContent = `${pct}%`;
    if (tensionFill) tensionFill.style.width = `${pct}%`;

    // Move fish closer to the dock as tension increases
    if (fishWrapper) {
      const rightPos = 12 + (pct * 0.58);
      fishWrapper.style.right = `${rightPos}%`;
    }
  }

  handleFishingKeystroke(e) {
    if (!this.fishingActive) return;
    if (IGNORED_INPUT_KEYS.has(e.key) || e.key.length > 1) return;

    const expected = this.fishingTargetWord[this.fishingTypedIndex];
    if (!expected) return;

    const willyChar = document.getElementById('willy-character');
    const willyEmote = document.getElementById('willy-emote');
    const willySpeech = document.getElementById('willy-speech');
    const fishSplash = document.getElementById('fish-splash');

    if (e.key === expected) {
      // Correct letter
      this.fishingTypedIndex++;
      this.fishingTension = Math.min(100, this.fishingTension + 6);
      this.updateFishingGauge();

      audio.playReelClick();
      gameState.recordKey(expected, false);

      if (willyChar) {
        willyChar.classList.remove('reeling');
        void willyChar.offsetWidth;
        willyChar.classList.add('reeling');
      }

      if (fishSplash) {
        fishSplash.classList.remove('splashing');
        void fishSplash.offsetWidth;
        fishSplash.classList.add('splashing');
      }

      // Check if word completed
      if (this.fishingTypedIndex >= this.fishingTargetWord.length) {
        audio.playSplash();
        this.fishingTension = Math.min(100, this.fishingTension + 22);
        this.updateFishingGauge();

        if (this.fishingTension >= 100) {
          // Fish CAUGHT!
          this.fishingCatchCount++;
          const catchEl = document.getElementById('fishing-catch-count');
          if (catchEl) catchEl.textContent = this.fishingCatchCount;

          if (willyChar) {
            willyChar.className = 'willy-character catching';
          }
          if (willyEmote) willyEmote.textContent = '🌟';
          if (willySpeech) {
            willySpeech.textContent = `"¡INCREÍBLE! ¡Has pescado un(a) ${this.fishingCurrentFish.name} de ${this.fishingCurrentFish.xp} $g!"`;
          }

          audio.playVictory();
          particles.triggerShake(10);
          particles.burst(window.innerWidth / 2, window.innerHeight / 2 - 80, '#0288d1', 30);
          particles.addFloatingText(`¡${this.fishingCurrentFish.name} ATRAPADO! +${this.fishingCurrentFish.xp} $g`, window.innerWidth / 2, window.innerHeight / 2 - 120, '#ffeb3b', 28);

          gameState.addXp(this.fishingCurrentFish.xp);
          this.updatePlayerHUD();

          // Spawn next fish after celebration
          setTimeout(() => {
            if (this.fishingActive) this.spawnNextFish();
          }, 1400);

        } else {
          // Continue reeling this fish with next word
          if (willySpeech) {
            willySpeech.textContent = `"¡Sigue dándole al carrete! ¡El pez está forcejeando pero lo tenemos cerca!"`;
          }
          const wordsPool = FISHING_WORDS[this.currentLang] || FISHING_WORDS.es;
          this.fishingTargetWord = wordsPool[Math.floor(Math.random() * wordsPool.length)];
          this.fishingTypedIndex = 0;
          this.renderFishingWord();
        }
      } else {
        this.renderFishingWord();
      }

    } else {
      // Error
      this.fishingTension = Math.max(0, this.fishingTension - 8);
      this.updateFishingGauge();

      audio.playError();
      gameState.recordKey(expected, true);

      if (willyEmote) {
        willyEmote.textContent = '💦';
        setTimeout(() => { if (willyEmote) willyEmote.textContent = '🎣'; }, 800);
      }
      if (willySpeech) {
        willySpeech.textContent = `"¡Cuidado que se te afloja la línea! ¡Escribe con calma para no perderlo!"`;
      }

      const wordBox = document.getElementById('fishing-target-word');
      if (wordBox) {
        wordBox.classList.add('error-shake');
        setTimeout(() => wordBox.classList.remove('error-shake'), 250);
      }
    }
  }

  // ==========================================================
  // JUNIMO COMMUNITY CENTER BUNDLES ENGINE (CENTRO CÍVICO)
  // ==========================================================
  openBundles(roomId = 'pantry') {
    this.stopArena();
    this.stopArcade();
    this.stopBoss();
    this.stopSurvival();
    this.stopFishing();

    this.currentMode = 'bundles';
    this.bundlesActiveRoom = roomId;
    this.cancelBundleRitual();

    this.switchView('view-bundles');
    this.renderKeyboard('bundles-keyboard-container');
    this.renderBundlesMantel();
    this.renderBundlesRoomTabs();
    this.renderBundlesActiveRoom();
    this.updateBundlesBadge();
  }

  renderBundlesMantel() {
    const mantelRow = document.getElementById('mantel-stars-row');
    const restoredCountEl = document.getElementById('bundles-restored-count');
    if (!mantelRow) return;

    mantelRow.querySelectorAll('.mantel-star').forEach(starEl => {
      const room = starEl.dataset.room;
      const isRestored = gameState.isRoomRestored(room);
      starEl.classList.toggle('restored', isRestored);
    });

    const count = gameState.getRestoredRoomsCount();
    if (restoredCountEl) restoredCountEl.textContent = `${count} / 5`;
  }

  renderBundlesRoomTabs() {
    const tabsContainer = document.getElementById('bundles-tabs-bar');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    COMMUNITY_ROOMS.forEach(room => {
      const btn = document.createElement('button');
      const isRestored = gameState.isRoomRestored(room.id);
      btn.className = `room-tab-btn ${this.bundlesActiveRoom === room.id ? 'active' : ''} ${isRestored ? 'restored' : ''}`;
      btn.innerHTML = `<span>${room.icon}</span> <span>${room.name}</span>`;
      btn.addEventListener('click', () => {
        audio.playKey();
        this.bundlesActiveRoom = room.id;
        this.cancelBundleRitual();
        this.renderBundlesRoomTabs();
        this.renderBundlesActiveRoom();
      });
      tabsContainer.appendChild(btn);
    });
  }

  renderBundlesActiveRoom() {
    const room = COMMUNITY_ROOMS.find(r => r.id === this.bundlesActiveRoom) || COMMUNITY_ROOMS[0];
    if (!room) return;

    const iconEl = document.getElementById('room-hero-icon');
    const titleEl = document.getElementById('room-hero-title');
    const statusEl = document.getElementById('room-hero-status');
    const storyEl = document.getElementById('room-hero-story');
    const perkTitle = document.getElementById('room-perk-title');
    const perkDesc = document.getElementById('room-perk-desc');

    const isRestored = gameState.isRoomRestored(room.id);

    if (iconEl) iconEl.textContent = room.icon;
    if (titleEl) titleEl.textContent = room.name.toUpperCase();
    if (statusEl) {
      statusEl.className = `room-hero-status ${isRestored ? 'restored' : ''}`;
      statusEl.textContent = isRestored 
        ? '✨ ¡SALA RESTAURADA POR LOS JUNIMOS! — Perk Activo' 
        : '🏚️ En ruinas — Requiere 3 ofrendas Junimo';
    }
    if (storyEl) storyEl.textContent = isRestored ? room.story : `Los pequeños espíritus del bosque esperan ofrendas en ${room.name} para activar su magia.`;
    if (perkTitle) perkTitle.textContent = room.perkName;
    if (perkDesc) perkDesc.textContent = room.perkDesc;

    // Render 3 Bundles for this room
    const grid = document.getElementById('bundles-scroll-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const roomBundles = JUNIMO_BUNDLES.filter(b => b.roomId === room.id);

    roomBundles.forEach(bundle => {
      const isDone = gameState.isBundleCompleted(bundle.id);
      const card = document.createElement('div');
      card.className = `bundle-scroll-card ${isDone ? 'completed' : ''}`;

      let itemsHtml = '';
      bundle.items.forEach(it => {
        itemsHtml += `<div class="bundle-item-chip"><span>${it.icon}</span> <span>${it.name}</span></div>`;
      });

      let actionHtml = '';
      if (isDone) {
        actionHtml = `<div class="bundle-stamp-completed"><span>⭐</span> <span>OFRENDA ACEPTADA</span></div>`;
      } else if (bundle.isGold) {
        const canAfford = (gameState.data.player.xp || 0) >= bundle.goldCost;
        actionHtml = `
          <div class="bundle-reward-badge">💰 Requiere: ${bundle.goldCost} $g</div>
          <button class="bundle-action-btn btn-donate-gold" ${!canAfford ? 'disabled style="opacity: 0.6;"' : ''}>
            ${canAfford ? 'Donar Fondos' : 'Falta Oro'}
          </button>
        `;
      } else {
        actionHtml = `
          <div class="bundle-reward-badge">✨ Recompensa: +${bundle.rewardGold} $g</div>
          <button class="bundle-action-btn btn-start-ritual">
            <span>🍏</span> <span>Realizar Ofrenda</span>
          </button>
        `;
      }

      card.innerHTML = `
        <div>
          <div class="bundle-scroll-header">
            <div class="bundle-scroll-icon">${bundle.icon}</div>
            <div>
              <h4 class="bundle-scroll-title">${bundle.name}</h4>
            </div>
          </div>
          <p class="bundle-scroll-desc">${bundle.desc}</p>
          <div class="bundle-items-list">${itemsHtml}</div>
        </div>
        <div class="bundle-footer-row">${actionHtml}</div>
      `;

      if (!isDone) {
        if (bundle.isGold) {
          const btn = card.querySelector('.btn-donate-gold');
          if (btn && (gameState.data.player.xp || 0) >= bundle.goldCost) {
            btn.addEventListener('click', () => {
              gameState.data.player.xp -= bundle.goldCost;
              gameState.completeBundle(bundle.id);
              audio.playCoin();
              audio.playJunimoChirp();
              particles.burst(window.innerWidth / 2, window.innerHeight / 2, '#ffd700', 35);
              particles.addFloatingText(`¡${bundle.name} COMPLETADO!`, window.innerWidth / 2, window.innerHeight / 2 - 40, '#ffd700', 26);
              this.updatePlayerHUD();
              this.checkRoomRestoration(bundle.roomId);
              this.renderBundlesMantel();
              this.renderBundlesRoomTabs();
              this.renderBundlesActiveRoom();
              this.checkAchievements({ isBundle: true, bundleId: bundle.id });
            });
          }
        } else {
          const btn = card.querySelector('.btn-start-ritual');
          if (btn) {
            btn.addEventListener('click', () => {
              this.startBundleRitual(bundle);
            });
          }
        }
      }

      grid.appendChild(card);
    });
  }

  startBundleRitual(bundle) {
    this.activeBundle = bundle;
    this.bundleRitualActive = true;
    this.bundleRitualText = (bundle.trialWords && (bundle.trialWords[this.currentLang] || bundle.trialWords.es)) || bundle.trialWords.es;
    this.bundleRitualCursor = 0;
    this.bundleRitualErrors = 0;

    const ritualCard = document.getElementById('junimo-ritual-card');
    const titleEl = document.getElementById('ritual-bundle-title');
    const speechEl = document.getElementById('ritual-junimo-speech');
    const avatarEl = document.getElementById('ritual-junimo-avatar');

    if (titleEl) titleEl.textContent = bundle.name.toUpperCase();
    if (speechEl) speechEl.textContent = `"¡Squeak! Tensa tus dedos en el teclado y ofrenda las palabras mágicas de ${bundle.name}..."`;
    if (avatarEl) {
      const junimoColors = ['🍏', '🫐', '🍊', '🍇', '⭐'];
      avatarEl.textContent = junimoColors[Math.floor(Math.random() * junimoColors.length)];
    }

    if (ritualCard) {
      ritualCard.style.display = 'flex';
      ritualCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    audio.playJunimoChirp();
    this.renderRitualStream();
    this.highlightRitualKey(this.bundleRitualText[0]);
  }

  cancelBundleRitual() {
    this.bundleRitualActive = false;
    this.activeBundle = null;
    const ritualCard = document.getElementById('junimo-ritual-card');
    if (ritualCard) ritualCard.style.display = 'none';
  }

  renderRitualStream() {
    const container = document.getElementById('ritual-stream-display');
    const accEl = document.getElementById('ritual-acc-val');
    if (!container) return;

    container.innerHTML = '';
    const text = this.bundleRitualText;

    for (let idx = 0; idx < text.length; idx++) {
      const span = document.createElement('span');
      span.textContent = text[idx];

      if (idx < this.bundleRitualCursor) {
        span.className = 'char-done';
      } else if (idx === this.bundleRitualCursor) {
        span.className = 'char-current';
      } else {
        span.className = 'char-pending';
      }

      container.appendChild(span);
    }

    if (accEl) {
      const total = this.bundleRitualCursor + this.bundleRitualErrors;
      const acc = total > 0 ? Math.round((this.bundleRitualCursor / total) * 100) : 100;
      accEl.textContent = `${acc}% Precisión`;
      accEl.style.color = acc >= 90 ? '#73b32a' : '#e53935';
    }
  }

  highlightRitualKey(char) {
    if (!char) return;
    const keyDef = this.activeKeyMap[char] || this.activeKeyMap[char.toLowerCase()];
    if (!keyDef) return;
    document.querySelectorAll('#bundles-keyboard-container .key-cap').forEach(k => {
      k.classList.remove('is-target', 'is-shift-target');
    });
    const keyEl = document.querySelector(`#bundles-keyboard-container .key-cap[data-code="${keyDef.code}"]`);
    if (keyEl) keyEl.classList.add('is-target');
  }

  handleBundlesKeystroke(e) {
    if (!this.bundleRitualActive || !this.activeBundle) return;
    if (IGNORED_INPUT_KEYS.has(e.key) || e.key.length > 1) return;

    const expected = this.bundleRitualText[this.bundleRitualCursor];
    if (!expected) return;

    if (e.key === expected) {
      this.bundleRitualCursor++;
      audio.playKey();
      gameState.recordKey(expected, false);

      if (this.bundleRitualCursor >= this.bundleRitualText.length) {
        // Complete ritual!
        this.completeBundleRitual();
        return;
      }

      this.renderRitualStream();
      this.highlightRitualKey(this.bundleRitualText[this.bundleRitualCursor]);
    } else {
      this.bundleRitualErrors++;
      audio.playError();
      gameState.recordKey(expected, true);

      const stream = document.getElementById('ritual-stream-display');
      if (stream) {
        stream.classList.add('error-shake');
        setTimeout(() => stream.classList.remove('error-shake'), 250);
      }
      this.renderRitualStream();
    }
  }

  completeBundleRitual() {
    const bundle = this.activeBundle;
    if (!bundle) return;

    gameState.completeBundle(bundle.id);
    if (bundle.rewardGold > 0) {
      gameState.addXp(bundle.rewardGold);
    }

    audio.playJunimoDance();
    particles.triggerShake(8);
    particles.burst(window.innerWidth / 2, window.innerHeight / 2 - 60, '#73b32a', 40);
    particles.addFloatingText(`¡OFRENDA COMPLETADA! +${bundle.rewardGold} $g`, window.innerWidth / 2, window.innerHeight / 2 - 100, '#ffd700', 28);

    this.cancelBundleRitual();
    this.updatePlayerHUD();
    this.checkRoomRestoration(bundle.roomId);
    this.renderBundlesMantel();
    this.renderBundlesRoomTabs();
    this.renderBundlesActiveRoom();
    this.checkAchievements({ isBundle: true, bundleId: bundle.id });
  }

  checkRoomRestoration(roomId) {
    if (gameState.isRoomRestored(roomId)) return;
    const roomBundles = JUNIMO_BUNDLES.filter(b => b.roomId === roomId);
    const allDone = roomBundles.every(b => gameState.isBundleCompleted(b.id));

    if (allDone) {
      gameState.setRoomRestored(roomId);
      const room = COMMUNITY_ROOMS.find(r => r.id === roomId);
      audio.playGrandRestoration();
      particles.burst(window.innerWidth / 2, window.innerHeight / 2, '#ffd700', 60);
      particles.addFloatingText(`¡SALA RESTAURADA: ${room.name.toUpperCase()}!`, window.innerWidth / 2, window.innerHeight / 2 - 80, '#a3e635', 32);

      const allRoomsRestored = COMMUNITY_ROOMS.every(r => gameState.isRoomRestored(r.id));
      if (allRoomsRestored) {
        setTimeout(() => {
          this.triggerGrandPerfectionCeremony();
        }, 1200);
      }

      this.checkAchievements({ isRoomRestored: true, roomId, allRoomsRestored });
      this.updateBundlesBadge();
    }
  }

  triggerGrandPerfectionCeremony() {
    audio.playGrandRestoration();
    particles.burst(window.innerWidth / 2, window.innerHeight / 2, '#ffd700', 80);
    alert("🌟 ¡EL CENTRO CÍVICO DE PELICAN TOWN HA SIDO RESTAURADO EN SU TOTALIDAD!\n\nLos Junimos han devuelto la magia a cada rincón del pueblo. Joja Corporation ha sido expulsada para siempre de Stardew Valley.");
  }

  updateBundlesBadge() {
    const badge = document.getElementById('bundles-nav-count');
    if (badge) {
      const count = gameState.getRestoredRoomsCount();
      badge.textContent = `${count}/5`;
    }
  }

  // ==========================================================
  // GUNTHER'S MUSEUM & ARCHAEOLOGY LIBRARY ENGINE
  // ==========================================================
  openMuseum(wingId = 'fossils') {
    this.stopArena();
    this.stopArcade();
    this.stopBoss();
    this.stopSurvival();
    this.stopFishing();

    this.currentMode = 'museum';
    this.currentMuseumWing = wingId;
    this.cancelExcavation();

    this.switchView('view-museum');
    this.renderKeyboard('museum-keyboard-container');
    this.renderMuseumMilestones();
    this.renderMuseumWingsTabs();
    this.renderMuseumPedestals();
    this.updateMuseumBadge();
  }

  renderMuseumMilestones() {
    const row = document.getElementById('museum-milestones-row');
    if (!row) return;
    row.innerHTML = '';

    const count = gameState.getDonatedArtifactsCount();
    MUSEUM_MILESTONES.forEach(ms => {
      const isReached = count >= ms.count;
      const chip = document.createElement('div');
      chip.className = `museum-milestone-chip ${isReached ? 'reached' : ''}`;
      chip.title = `${ms.name}: ${ms.rewardText}`;
      chip.innerHTML = `
        <span class="milestone-icon">${ms.icon}</span>
        <span class="milestone-count">${ms.count} Donaciones</span>
        <span class="milestone-reward">${ms.name}</span>
      `;
      row.appendChild(chip);
    });

    const statEl = document.getElementById('museum-donated-stat');
    if (statEl) {
      statEl.textContent = `${count} / 20`;
    }
  }

  renderMuseumWingsTabs() {
    const tabsContainer = document.getElementById('museum-tabs-bar');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    MUSEUM_WINGS.forEach(wing => {
      const btn = document.createElement('button');
      const wingArtifacts = MUSEUM_ARTIFACTS.filter(a => a.wingId === wing.id);
      const donatedCount = wingArtifacts.filter(a => gameState.isArtifactDonated(a.id)).length;
      const isComplete = donatedCount === wingArtifacts.length;

      btn.className = `museum-tab-btn ${this.currentMuseumWing === wing.id ? 'active' : ''} ${isComplete ? 'completed' : ''}`;
      btn.innerHTML = `<span>${wing.icon}</span> <span>${wing.name} (${donatedCount}/${wingArtifacts.length})</span>`;
      btn.addEventListener('click', () => {
        audio.playKey();
        this.currentMuseumWing = wing.id;
        this.cancelExcavation();
        this.renderMuseumWingsTabs();
        this.renderMuseumPedestals();
      });
      tabsContainer.appendChild(btn);
    });
  }

  renderMuseumPedestals() {
    const grid = document.getElementById('museum-pedestals-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const wingArtifacts = MUSEUM_ARTIFACTS.filter(a => a.wingId === this.currentMuseumWing);
    const speechEl = document.getElementById('curator-speech-text');

    wingArtifacts.forEach(artifact => {
      const isDonated = gameState.isArtifactDonated(artifact.id);
      const card = document.createElement('div');
      card.className = `museum-pedestal-card ${isDonated ? 'donated' : ''}`;

      card.innerHTML = `
        <div class="pedestal-velvet-stand">
          <div class="pedestal-artifact-icon">${isDonated ? artifact.icon : '❓'}</div>
        </div>
        <div class="pedestal-nameplate">${isDonated ? artifact.name : 'Pieza Oculta'}</div>
        <div class="pedestal-desc">${artifact.desc}</div>
        <div class="pedestal-status-badge ${isDonated ? 'donated' : ''}">
          ${isDonated ? '✨ EXHIBIDO EN VITRINA' : '⛏️ EXCAVAR Y DONAR'}
        </div>
      `;

      if (!isDonated) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
          this.startExcavation(artifact);
        });
      } else {
        card.addEventListener('click', () => {
          audio.playKey();
          if (speechEl) {
            speechEl.textContent = `"${artifact.name}: ${artifact.desc} ¡Una valiosa pieza para los anales de Stardew Valley!"`;
          }
        });
      }

      grid.appendChild(card);
    });
  }

  startExcavation(artifact) {
    this.activeExcavationArtifact = artifact;
    this.excavationText = artifact.prompt;
    this.excavationCursor = 0;
    this.excavationErrors = 0;

    const excavationCard = document.getElementById('museum-excavation-card');
    const iconPreview = document.getElementById('excavation-icon-preview');
    const nameEl = document.getElementById('excavation-artifact-name');
    const wingTag = document.getElementById('excavation-wing-tag');
    const descEl = document.getElementById('excavation-prompt-desc');
    const speechEl = document.getElementById('curator-speech-text');

    if (excavationCard) {
      excavationCard.style.display = 'block';
      excavationCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (iconPreview) iconPreview.textContent = artifact.icon;
    if (nameEl) nameEl.textContent = artifact.name.toUpperCase();
    if (wingTag) wingTag.textContent = `EXCAVACIÓN ARQUEOLÓGICA // ${artifact.source.toUpperCase()}`;
    if (descEl) descEl.textContent = `"${artifact.desc}" — Teclea el pasaje con tu cincel:`;

    if (speechEl) {
      speechEl.textContent = `"¡Atención con el cincel! La pieza '${artifact.name}' es sumamente frágil. Escribe sin vacilar para limpiarla sin roturas."`;
    }

    if (artifact.wingId === 'minerals') {
      audio.playGeodeCrack();
    } else {
      audio.playChiselStrike();
    }

    this.renderExcavationStream();
    if (this.excavationText.length > 0) {
      this.highlightExcavationKey(this.excavationText[0]);
    }
  }

  cancelExcavation() {
    this.activeExcavationArtifact = null;
    this.excavationText = '';
    this.excavationCursor = 0;
    this.excavationErrors = 0;

    const excavationCard = document.getElementById('museum-excavation-card');
    if (excavationCard) {
      excavationCard.style.display = 'none';
    }

    const container = document.getElementById('museum-keyboard-container');
    if (container) {
      container.querySelectorAll('.key-cap.is-target').forEach(el => el.classList.remove('is-target'));
    }
  }

  renderExcavationStream() {
    const stream = document.getElementById('excavation-stream-display');
    const accEl = document.getElementById('excavation-acc-val');
    if (!stream) return;

    let html = '';
    for (let i = 0; i < this.excavationText.length; i++) {
      const ch = this.excavationText[i];
      let displayChar = ch;
      if (ch === ' ') displayChar = '␣';

      let stateClass = '';
      if (i < this.excavationCursor) {
        stateClass = 'char-hit';
      } else if (i === this.excavationCursor) {
        stateClass = 'char-current';
      } else {
        stateClass = 'char-pending';
      }

      html += `<span class="char-span ${stateClass}">${displayChar}</span>`;
    }

    stream.innerHTML = html;

    if (accEl) {
      const totalTyped = this.excavationCursor + this.excavationErrors;
      const acc = totalTyped > 0 ? Math.round((this.excavationCursor / totalTyped) * 100) : 100;
      accEl.textContent = `${acc}% Precisión (${this.excavationCursor}/${this.excavationText.length})`;
    }
  }

  highlightExcavationKey(char) {
    const container = document.getElementById('museum-keyboard-container');
    if (!container) return;

    container.querySelectorAll('.key-cap.is-target').forEach(el => el.classList.remove('is-target'));
    if (!char) return;

    const code = this.activeKeyMap ? this.activeKeyMap[char] : null;
    if (code) {
      const keyCap = container.querySelector(`.key-cap[data-code="${code}"]`);
      if (keyCap) keyCap.classList.add('is-target');
    }
  }

  handleExcavationKeystroke(e) {
    if (!this.activeExcavationArtifact) return;
    if (IGNORED_INPUT_KEYS.has(e.key)) return;

    const expected = this.excavationText[this.excavationCursor];
    if (!expected) return;

    if (e.key === expected) {
      this.excavationCursor++;
      audio.playKey();
      gameState.recordKey(expected, false);

      if (this.excavationCursor >= this.excavationText.length) {
        this.completeExcavation();
        return;
      }

      this.renderExcavationStream();
      this.highlightExcavationKey(this.excavationText[this.excavationCursor]);
    } else {
      this.excavationErrors++;
      audio.playError();
      gameState.recordKey(expected, true);

      const stream = document.getElementById('excavation-stream-display');
      if (stream) {
        stream.classList.add('error-shake');
        setTimeout(() => stream.classList.remove('error-shake'), 250);
      }
      this.renderExcavationStream();
    }
  }

  completeExcavation() {
    const artifact = this.activeExcavationArtifact;
    if (!artifact) return;

    gameState.donateArtifact(artifact.id);
    gameState.addXp(artifact.goldReward || 150);

    audio.playMuseumFanfare();
    particles.triggerShake(10);
    particles.burst(window.innerWidth / 2, window.innerHeight / 2 - 60, '#ea580c', 50);
    particles.addFloatingText(`¡ARTEFACTO DONADO: ${artifact.name.toUpperCase()}! +${artifact.goldReward} $g`, window.innerWidth / 2, window.innerHeight / 2 - 100, '#ffd700', 26);

    const speechEl = document.getElementById('curator-speech-text');
    if (speechEl) {
      speechEl.textContent = `"¡Magnífico hallazgo! '${artifact.name}' ha sido colocado con honor en su pedestal de terciopelo. La historia de Stardew Valley revive gracias a ti."`;
    }

    const count = gameState.getDonatedArtifactsCount();
    if (count === 20) {
      setTimeout(() => {
        audio.playGrandRestoration();
        particles.burst(window.innerWidth / 2, window.innerHeight / 2, '#ffd700', 90);
        alert("🌟 ¡COLECCIÓN COMPLETA DEL MUSEO DE GUNTHER!\n\nHas restaurado los 20 fósiles, minerales, reliquias y curiosidades de Stardew Valley.\nGunther y el pueblo te otorgan la legendaria Fruta Estelar (Stardrop). ¡Tu mente y velocidad de mecanografía son eternas!");
      }, 1000);
    }

    this.cancelExcavation();
    this.updatePlayerHUD();
    this.renderMuseumMilestones();
    this.renderMuseumWingsTabs();
    this.renderMuseumPedestals();
    this.updateMuseumBadge();
    this.checkAchievements({ isArtifact: true, artifactId: artifact.id });
  }

  updateMuseumBadge() {
    const badge = document.getElementById('museum-nav-count');
    if (badge) {
      const count = gameState.getDonatedArtifactsCount();
      badge.textContent = `${count}/20`;
    }
  }

  // ==========================================================
  // PRAIRIE KING ARCADE MODE (EL VIAJE DEL REY DE LA PRADERA)
  // ==========================================================
  startArcade() {
    this.stopArena();
    this.stopBoss();
    this.stopSurvival();
    this.stopFishing();

    this.currentMode = 'arcade';
    this.arcadeActive = true;
    this.arcadeScore = 0;
    this.arcadeShield = 100;
    this.arcadeWords = [];
    this.activeArcadeTarget = null;

    document.getElementById('arcade-score-val').textContent = '0';
    this.updateShieldUI();

    this.switchView('view-arcade');
    this.renderKeyboard('arcade-keyboard-container');

    const diff = gameState.data.arcadeDifficulty || 'veteran';
    let spawnRate = 2200;
    switch (diff) {
      case 'recruit': spawnRate = 3000; break;
      case 'veteran': spawnRate = 2200; break;
      case 'nightmare': spawnRate = 1400; break;
      case 'apocalypse': spawnRate = 900; break;
    }

    if (this.arcadeSpawnInterval) clearInterval(this.arcadeSpawnInterval);
    this.arcadeSpawnInterval = setInterval(() => this.spawnArcadeWord(), spawnRate);
    this.spawnArcadeWord();

    if (this.arcadeLoopId) cancelAnimationFrame(this.arcadeLoopId);
    this.arcadeLoop();
  }

  spawnArcadeWord() {
    if (!this.arcadeActive) return;
    const pool = ARCADE_WORDS[this.currentLang] || ARCADE_WORDS.es;
    const word = pool[Math.floor(Math.random() * pool.length)];

    const viewport = document.getElementById('arcade-viewport');
    if (!viewport) return;
    const wordEl = document.createElement('div');
    wordEl.className = 'falling-word';
    wordEl.textContent = word;

    const x = Math.random() * (viewport.clientWidth - 120) + 60;
    wordEl.style.left = `${x}px`;
    wordEl.style.top = `0px`;

    viewport.appendChild(wordEl);

    const diff = gameState.data.arcadeDifficulty || 'veteran';
    let baseSpeed = 1.2;
    let speedVariation = 0.7;
    switch (diff) {
      case 'recruit': baseSpeed = 0.6; speedVariation = 0.4; break;
      case 'veteran': baseSpeed = 1.2; speedVariation = 0.7; break;
      case 'nightmare': baseSpeed = 2.0; speedVariation = 1.2; break;
      case 'apocalypse': baseSpeed = 3.2; speedVariation = 1.8; break;
    }

    this.arcadeWords.push({
      text: word,
      typedIndex: 0,
      el: wordEl,
      x,
      y: 0,
      speed: Math.random() * speedVariation + baseSpeed
    });
  }

  arcadeLoop() {
    if (!this.arcadeActive) return;

    const viewport = document.getElementById('arcade-viewport');
    const dangerY = viewport ? viewport.clientHeight - 40 : 400;

    for (let i = this.arcadeWords.length - 1; i >= 0; i--) {
      const item = this.arcadeWords[i];
      item.y += item.speed;
      item.el.style.top = `${item.y}px`;

      // Check breach
      if (item.y >= dangerY) {
        audio.playError();
        particles.triggerShake(12);
        particles.burst(item.x, item.y, '#ff0055', 20);
        item.el.remove();
        this.arcadeWords.splice(i, 1);

        this.arcadeShield = Math.max(0, this.arcadeShield - 25);
        this.updateShieldUI();

        if (this.activeArcadeTarget === item) this.activeArcadeTarget = null;

        if (this.arcadeShield <= 0) {
          this.gameOverArcade();
          return;
        }
      }
    }

    this.arcadeLoopId = requestAnimationFrame(() => this.arcadeLoop());
  }

  handleArcadeKeystroke(e) {
    if (!this.arcadeActive) return;
    if (IGNORED_INPUT_KEYS.has(e.key) || e.key.length > 1) return;

    const char = e.key;

    if (!this.activeArcadeTarget) {
      const candidate = this.arcadeWords.find(w => w.text.startsWith(char));
      if (candidate) {
        this.activeArcadeTarget = candidate;
        candidate.el.classList.add('is-targeted');
      } else {
        audio.playError();
        return;
      }
    }

    const target = this.activeArcadeTarget;
    const expectedChar = target.text[target.typedIndex];

    if (char === expectedChar) {
      target.typedIndex++;
      audio.playKey();
      gameState.recordKey(char, false);

      const typedPart = target.text.substring(0, target.typedIndex);
      const remainingPart = target.text.substring(target.typedIndex);
      target.el.innerHTML = `<span class="typed-letters">${typedPart}</span>${remainingPart}`;

      const rect = target.el.getBoundingClientRect();
      particles.burst(rect.left + 20, rect.top + 10, '#00f6ff', 8);

      if (target.typedIndex >= target.text.length) {
        // Destroyed!
        audio.playLaser(0, 150);
        particles.triggerShake(5);
        particles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, '#00ff88', 25);
        target.el.remove();
        const idx = this.arcadeWords.indexOf(target);
        if (idx !== -1) this.arcadeWords.splice(idx, 1);
        this.activeArcadeTarget = null;

        this.arcadeScore += target.text.length * 10;
        document.getElementById('arcade-score-val').textContent = this.arcadeScore;
      }
    } else {
      audio.playError();
      particles.triggerShake(4);
      gameState.recordKey(expectedChar, true);
    }
  }

  updateShieldUI() {
    const fill = document.getElementById('arcade-shield-fill');
    const val = document.getElementById('arcade-shield-val');
    if (fill) fill.style.width = `${this.arcadeShield}%`;
    if (val) val.textContent = `${this.arcadeShield}%`;
  }

  gameOverArcade() {
    this.stopArcade();
    audio.playError();
    const isNew = gameState.saveArcadeScore(this.arcadeScore);
    const xp = Math.round(this.arcadeScore * 0.75);
    gameState.addXp(xp);
    this.updatePlayerHUD();

    this.checkAchievements({
      isArcade: true,
      arcadeScore: this.arcadeScore
    });

    const modal = document.getElementById('defeat-modal');
    document.getElementById('modal-defeat-title').textContent = "¡LA VALLA DE MADERA HA CAÍDO!";
    document.getElementById('modal-defeat-sub').textContent = isNew 
      ? `¡NUEVO RÉCORD EN LA TABERNA! Has resistido al asedio de forajidos con ${this.arcadeScore} puntos.`
      : `Los monstruos rompieron tu valla. Puntuación alcanzada en el Salón Fruta Estelar: ${this.arcadeScore} PTS.`;
    document.getElementById('modal-defeat-wpm').textContent = `${this.arcadeScore} PTS`;
    document.getElementById('modal-defeat-acc').textContent = "VALLA ROTA";
    document.getElementById('modal-defeat-errors').textContent = `+${xp} $g`;
    modal.classList.add('active');
  }

  stopArcade() {
    this.arcadeActive = false;
    if (this.arcadeSpawnInterval) clearInterval(this.arcadeSpawnInterval);
    if (this.arcadeLoopId) cancelAnimationFrame(this.arcadeLoopId);
    const viewport = document.getElementById('arcade-viewport');
    if (viewport) viewport.querySelectorAll('.falling-word').forEach(w => w.remove());
  }

  // ==========================================================
  // BOSS AI BATTLE ENGINE (A.E.G.I.S.)
  // ==========================================================
  startBoss() {
    this.stopArena();
    this.stopArcade();
    this.stopSurvival();
    this.stopFishing();

    this.currentMode = 'boss';
    this.bossActive = true;
    this.bossPhase = 0;
    this.bossMaxHp = 1000;
    this.bossHp = 1000;

    this.switchView('view-boss');
    this.renderKeyboard('boss-keyboard-container');
    this.updateBossHpUI();
    this.nextBossPhase();
  }

  nextBossPhase() {
    const encounters = BOSS_ENCOUNTERS[this.currentLang] || BOSS_ENCOUNTERS.es;
    if (this.bossPhase >= encounters.length) {
      this.victoryBoss();
      return;
    }

    const cur = encounters[this.bossPhase];
    this.bossCounterText = cur.counterText;
    this.bossCursorIndex = 0;

    const diff = gameState.data.difficulty || 'normal';
    let baseTime = cur.timeLimit;
    if (diff === 'hardcore') baseTime = Math.max(7, Math.round(baseTime * 0.75));
    if (diff === 'suddendeath') baseTime = Math.max(5, Math.round(baseTime * 0.6));
    if (diff === 'glitch') baseTime = Math.max(5, Math.round(baseTime * 0.65));
    if (diff === 'godmode') baseTime = Math.max(4, Math.round(baseTime * 0.5));

    this.bossTimer = baseTime;

    document.getElementById('boss-phase-num').textContent = this.bossPhase + 1;
    document.getElementById('boss-speech-text').textContent = cur.speech;
    document.getElementById('boss-counter-timer').textContent = `${this.bossTimer}s`;

    audio.playBossAttack();
    particles.triggerShake(6);

    this.renderBossTextStream();

    if (this.bossTimerInterval) clearInterval(this.bossTimerInterval);
    this.bossTimerInterval = setInterval(() => {
      this.bossTimer--;
      const timerEl = document.getElementById('boss-counter-timer');
      if (timerEl) timerEl.textContent = `${this.bossTimer}s`;

      if (this.bossTimer <= 3) {
        audio.playError();
        particles.triggerShake(4);
      }

      if (this.bossTimer <= 0) {
        clearInterval(this.bossTimerInterval);
        this.defeatBoss();
      }
    }, 1000);
  }

  renderBossTextStream() {
    const container = document.getElementById('boss-text-stream');
    if (!container) return;
    container.innerHTML = '';
    const text = this.bossCounterText;

    for (let idx = 0; idx < text.length; idx++) {
      const span = document.createElement('span');
      span.textContent = text[idx];
      if (idx < this.bossCursorIndex) {
        span.className = 'char-done';
      } else if (idx === this.bossCursorIndex) {
        span.className = 'char-current';
      } else {
        span.className = 'char-pending';
      }
      container.appendChild(span);
    }
  }

  handleBossKeystroke(e) {
    if (!this.bossActive) return;
    if (IGNORED_INPUT_KEYS.has(e.key) || e.key.length > 1) return;

    const expected = this.bossCounterText[this.bossCursorIndex];
    if (!expected) return;

    if (e.key === expected) {
      this.bossCursorIndex++;
      audio.playKey();
      gameState.recordKey(expected, false);
      this.renderBossTextStream();

      if (this.bossCursorIndex >= this.bossCounterText.length) {
        clearInterval(this.bossTimerInterval);
        const damage = Math.round(this.bossMaxHp / (BOSS_ENCOUNTERS.es.length));
        this.bossHp = Math.max(0, this.bossHp - damage);
        this.updateBossHpUI();

        audio.playLaser(0, 200);
        particles.triggerShake(10);
        particles.addFloatingText(`-${damage} DAÑO A NÚCLEO`, window.innerWidth / 2, window.innerHeight / 2 - 120, '#ff0055', 28);

        this.bossPhase++;
        setTimeout(() => this.nextBossPhase(), 1200);
      }
    } else {
      audio.playError();
      particles.triggerShake(5);
      gameState.recordKey(expected, true);

      const diff = gameState.data.difficulty || 'normal';
      if (diff === 'suddendeath') {
        clearInterval(this.bossTimerInterval);
        this.defeatBoss();
      }
    }
  }

  updateBossHpUI() {
    const fill = document.getElementById('boss-hp-fill');
    const txt = document.getElementById('boss-hp-text');
    const pct = Math.max(0, Math.round((this.bossHp / this.bossMaxHp) * 100));
    if (fill) fill.style.width = `${pct}%`;
    if (txt) txt.textContent = `${this.bossHp} / ${this.bossMaxHp}`;
  }

  victoryBoss() {
    this.stopBoss();
    audio.playRankSound('SSS');
    gameState.data.player.bossDefeated = true;
    gameState.addXp(1500);
    gameState.save();
    this.updatePlayerHUD();

    this.checkAchievements({ bossWon: true });

    const modal = document.getElementById('victory-modal');
    document.getElementById('modal-victory-title').textContent = "¡JOJAMART EXPULSADO DE PELICAN TOWN!";
    document.getElementById('modal-victory-sub').textContent = "¡Has derrotado a Morris y su maquinaria corporativa! Gracias a tu velocidad y la magia de los Junimos, el Centro Cívico está salvado para siempre.";
    document.getElementById('modal-stat-wpm').textContent = "VICTORIA";
    document.getElementById('modal-stat-acc').textContent = "100%";
    const modalCombo = document.getElementById('modal-stat-combo');
    if (modalCombo) modalCombo.textContent = "JOJA EXPULSADO";
    document.getElementById('modal-stat-xp').textContent = "+1500 $g";

    const rankBadge = document.getElementById('modal-rank-badge');
    const rankDesc = document.getElementById('modal-rank-desc');
    if (rankBadge) {
      rankBadge.textContent = 'SSS';
      rankBadge.className = 'stardew-quality-badge rank-sss';
    }
    if (rankDesc) {
      rankDesc.textContent = '👑 HÉROE LEGENDARIO DEL CENTRO CÍVICO';
    }

    modal.classList.add('active');
  }

  defeatBoss() {
    this.stopBoss();
    audio.playError();
    const modal = document.getElementById('defeat-modal');
    document.getElementById('modal-defeat-title').textContent = "¡MORRIS Y JOJAMART GANARON!";
    document.getElementById('modal-defeat-sub').textContent = "No lograste escribir los conjuros botánicos a tiempo y Morris comenzó a demoler el Centro Cívico. ¡Reintenta y expulsa a JojaMart!";
    document.getElementById('modal-defeat-wpm').textContent = "DERROTA";
    document.getElementById('modal-defeat-acc').textContent = "0%";
    document.getElementById('modal-defeat-errors').textContent = "EXPULSIÓN";
    modal.classList.add('active');
  }

  stopBoss() {
    this.bossActive = false;
    if (this.bossTimerInterval) clearInterval(this.bossTimerInterval);
  }

  // ==========================================================
  // SPEED TEST BENCHMARK (60s)
  // ==========================================================
  startSpeedTest() {
    const text = SPEED_TEST_TEXTS[this.currentLang] || SPEED_TEST_TEXTS.es;
    const testLesson = {
      id: 'speedtest',
      sector: 10,
      title: 'TEST DE VELOCIDAD OFICIAL (60s)',
      desc: 'Teclea con fluidez y sin detenerte durante 60 segundos completos para medir tus WPM reales.',
      keys: ['Todas las Teclas'],
      targetWpm: 50,
      minAccuracy: 90,
      timeLimit: 60,
      content: text
    };

    this.startLevel(testLesson);

    // Override timer to count down from 60 seconds
    const originalInterval = this.timerInterval;
    if (originalInterval) clearInterval(originalInterval);
    this.speedTestTimeLeft = 60;

    this.timerInterval = setInterval(() => {
      if (!this.startTime) return;
      this.speedTestTimeLeft--;
      const progEl = document.getElementById('hud-progress-val');
      const timerLabel = document.getElementById('hud-timer-label');
      if (timerLabel) timerLabel.textContent = 'Tiempo Restante';
      if (progEl) progEl.textContent = `${this.speedTestTimeLeft}s`;
      this.updateArenaStats();

      if (this.speedTestTimeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.finishLevel(false);
      }
    }, 1000);
  }

  // ==========================================================
  // DASHBOARD WEAK KEYS HEATMAP
  // ==========================================================
  renderDashboardWeakKeys() {
    const container = document.getElementById('weak-keys-container');
    if (!container) return;

    const weakKeys = gameState.getWeakestKeys(6);
    if (weakKeys.length === 0) {
      container.innerHTML = `
        <span style="color: var(--text-muted); font-size: 0.9rem;">
          No hay suficientes errores registrados. ¡Comienza a practicar para analizar tu mapa de calor!
        </span>
      `;
      return;
    }

    container.innerHTML = '';
    weakKeys.forEach(item => {
      const pill = document.createElement('div');
      pill.className = 'weak-key-pill';
      const keyDef = this.activeKeyMap[item.key] || this.activeKeyMap[item.key.toLowerCase()];
      const fingerName = keyDef ? (FINGER_DATA[keyDef.finger]?.label || '') : '';

      pill.innerHTML = `
        <span class="key-name">${item.key === ' ' ? '␣' : item.key.toUpperCase()}</span>
        <span class="error-count" style="color: var(--stardew-berry);">${item.errorRate}% fallos</span>
        ${fingerName ? `<small style="font-size: 0.72rem; color: var(--text-muted); margin-left: 4px;">(${fingerName})</small>` : ''}
      `;
      container.appendChild(pill);
    });
  }

  // ==========================================================
  // ACHIEVEMENTS, PROFILE & CUSTOM PRACTICE
  // ==========================================================
  updateAchievementsBadge() {
    const badge = document.getElementById('achievements-nav-count');
    if (badge) {
      const unlocked = gameState.getUnlockedAchievementsCount();
      badge.textContent = `${unlocked} / ${ACHIEVEMENTS_DEF.length}`;
    }
  }

  openAchievementsModal() {
    const modal = document.getElementById('achievements-modal');
    const container = document.getElementById('achievements-container');
    const statText = document.getElementById('achievements-stat-text');
    const progressFill = document.getElementById('achievements-progress-fill');
    if (!modal || !container) return;

    const unlockedCount = gameState.getUnlockedAchievementsCount();
    const totalCount = ACHIEVEMENTS_DEF.length;
    const pct = Math.round((unlockedCount / totalCount) * 100);

    if (statText) statText.textContent = `${unlockedCount} / ${totalCount} (${pct}%)`;
    if (progressFill) progressFill.style.width = `${pct}%`;

    container.innerHTML = '';
    ACHIEVEMENTS_DEF.forEach(ach => {
      const isUnlocked = gameState.isAchievementUnlocked(ach.id);
      const card = document.createElement('div');
      card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;

      card.innerHTML = `
        <div class="achievement-icon-wrap">${ach.icon}</div>
        <div class="achievement-info">
          <div class="achievement-title">${ach.name}</div>
          <div class="achievement-desc">${ach.desc}</div>
          <div class="achievement-status">
            ${isUnlocked ? '<span class="status-unlocked">✓ DESBLOQUEADO</span>' : '<span class="status-locked">🔒 BLOQUEADO</span>'}
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    modal.classList.add('active');
  }

  openProfileModal() {
    const modal = document.getElementById('profile-modal');
    if (!modal) return;

    const profLevel = document.getElementById('prof-level-val');
    const profXp = document.getElementById('prof-xp-val');
    const profBestWpm = document.getElementById('prof-best-wpm');
    const profStars = document.getElementById('prof-stars-val');
    const profKeys = document.getElementById('prof-keys-val');
    const profArcade = document.getElementById('prof-arcade-val');

    if (profLevel) profLevel.textContent = gameState.data.player.level || 1;
    if (profXp) profXp.textContent = `${gameState.data.player.xp || 0} XP`;
    if (profBestWpm) profBestWpm.textContent = `${gameState.data.player.bestWpm || 0} WPM`;
    if (profStars) profStars.textContent = `${gameState.getTotalStars(this.currentLang)} ⭐`;
    if (profKeys) profKeys.textContent = gameState.data.player.totalKeys || 0;
    if (profArcade) profArcade.textContent = `${gameState.data.player.arcadeHighScore || 0} PTS`;

    modal.classList.add('active');
  }

  // ==========================================================
  // NEW FARMER GUIDE & LORE PRIMER
  // ==========================================================
  openGuideModal(initialTab = 'story') {
    const modal = document.getElementById('guide-modal');
    if (!modal) return;
    audio.playKey();
    this.switchGuideTab(initialTab);
    modal.classList.add('active');
  }

  closeGuideModal() {
    const modal = document.getElementById('guide-modal');
    if (!modal) return;
    audio.playKey();
    modal.classList.remove('active');
  }

  bindGuideTabs() {
    const tabButtons = document.querySelectorAll('#guide-tabs-bar .guide-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.guideTab || 'story';
        audio.playKey();
        this.switchGuideTab(tab);
      });
    });
  }

  switchGuideTab(tabKey) {
    const tabButtons = document.querySelectorAll('#guide-tabs-bar .guide-tab-btn');
    const tabPanels = document.querySelectorAll('#guide-modal .guide-tab-panel');

    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.guideTab === tabKey);
    });

    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === `guide-panel-${tabKey}`);
    });
  }

  showAchievementToast(achievement) {
    const toast = document.getElementById('achievement-toast');
    if (!toast) return;

    const iconEl = document.getElementById('toast-icon');
    const titleEl = document.getElementById('toast-title');
    const descEl = document.getElementById('toast-desc');

    if (iconEl) iconEl.textContent = achievement.icon || '🏆';
    if (titleEl) titleEl.textContent = achievement.name;
    if (descEl) descEl.textContent = achievement.desc;

    audio.playRankSound('S');
    particles.burst(window.innerWidth / 2, 80, '#ffe600', 30);
    particles.addFloatingText(`¡LOGRO DESBLOQUEADO!`, window.innerWidth / 2, 110, '#ffe600', 24);

    toast.classList.add('show');
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  checkAchievements(context = {}) {
    const totalStars = gameState.getTotalStars(this.currentLang);
    const completedCount = gameState.getCompletedLevelsCount(this.currentLang);
    const newlyUnlocked = [];

    ACHIEVEMENTS_DEF.forEach(ach => {
      if (gameState.isAchievementUnlocked(ach.id)) return;

      let unlock = false;
      switch (ach.id) {
        case 'first_harvest':
          if (totalStars >= 1 || (context.won && context.levelId !== 'custom')) unlock = true;
          break;
        case 'sector_1': {
          const secLessons = (CURRICULUM[this.currentLang] || CURRICULUM.es).filter(l => l.sector === 1);
          const prog = gameState.getSectorProgress(this.currentLang, secLessons);
          if (prog.completed >= 10) unlock = true;
          break;
        }
        case 'level_25':
          if (completedCount >= 25 || (context.won && context.levelId >= 25)) unlock = true;
          break;
        case 'level_50':
          if (completedCount >= 50 || (context.won && context.levelId >= 50)) unlock = true;
          break;
        case 'level_75':
          if (completedCount >= 75 || (context.won && context.levelId >= 75)) unlock = true;
          break;
        case 'level_100':
          if (completedCount >= 100 || (context.won && context.levelId >= 100)) unlock = true;
          break;
        case 'stars_10':
          if (totalStars >= 10) unlock = true;
          break;
        case 'stars_50':
          if (totalStars >= 50) unlock = true;
          break;
        case 'stars_100':
          if (totalStars >= 100) unlock = true;
          break;
        case 'stars_250':
          if (totalStars >= 250) unlock = true;
          break;
        case 'stars_500':
          if (totalStars >= 500) unlock = true;
          break;
        case 'accuracy_100':
          if (context.accuracy === 100 && context.won) unlock = true;
          break;
        case 'rank_sss':
          if (context.rank === 'SSS' && context.won) unlock = true;
          break;
        case 'speed_40':
          if (context.wpm >= 40 && context.won) unlock = true;
          break;
        case 'speed_70':
          if (context.wpm >= 70 && context.won) unlock = true;
          break;
        case 'speed_100':
          if (context.wpm >= 100 && context.won) unlock = true;
          break;
        case 'combo_50':
          if (this.maxCombo >= 50) unlock = true;
          break;
        case 'combo_100':
          if (this.maxCombo >= 100) unlock = true;
          break;
        case 'hardcore_survivor':
          if (context.diff === 'hardcore' && context.won) unlock = true;
          break;
        case 'suddendeath_master':
          if (context.diff === 'suddendeath' && context.won) unlock = true;
          break;
        case 'blind_master':
          if (context.diff === 'blind' && context.won) unlock = true;
          break;
        case 'glitch_survivor':
          if (context.diff === 'glitch' && context.won) unlock = true;
          break;
        case 'godmode_slayer':
          if (context.diff === 'godmode' && context.won) unlock = true;
          break;
        case 'ghost_beater':
          if (context.beatGhost && context.won) unlock = true;
          break;
        case 'boss_slayer':
          if (gameState.data.player.bossDefeated || context.bossWon) unlock = true;
          break;
        case 'arcade_hero':
          if (gameState.data.player.arcadeHighScore >= 500 || (context.arcadeScore && context.arcadeScore >= 500)) unlock = true;
          break;
        case 'apocalypse_hero':
          if (context.isArcade && (context.arcadeScore >= 1000 || gameState.data.player.arcadeHighScore >= 1000) && gameState.data.arcadeDifficulty === 'apocalypse') unlock = true;
          break;
        case 'survival_master':
          if (context.isSurvival && context.survivalWords >= 15) unlock = true;
          break;
        case 'weak_key_crusher':
          if (context.isWeakDrill && context.won) unlock = true;
          break;
        case 'custom_master':
          if (context.isCustom && context.won) unlock = true;
          break;
        case 'first_bundle':
          if (context.isBundle || Object.keys(gameState.data.junimoBundles || {}).length >= 1) unlock = true;
          break;
        case 'room_restored':
          if (context.isRoomRestored || gameState.getRestoredRoomsCount() >= 1) unlock = true;
          break;
        case 'community_hero':
          if (context.allRoomsRestored || gameState.getRestoredRoomsCount() >= 5) unlock = true;
          break;
        case 'vault_tycoon':
          if (gameState.isBundleCompleted('vault_10000') || (context.isBundle && context.bundleId === 'vault_10000')) unlock = true;
          break;
        case 'first_artifact':
          if (context.isArtifact || gameState.getDonatedArtifactsCount() >= 1) unlock = true;
          break;
        case 'artifacts_5':
          if (gameState.getDonatedArtifactsCount() >= 5) unlock = true;
          break;
        case 'artifacts_10':
          if (gameState.getDonatedArtifactsCount() >= 10) unlock = true;
          break;
        case 'museum_complete':
          if (gameState.getDonatedArtifactsCount() >= 20) unlock = true;
          break;
      }

      if (unlock) {
        const isNew = gameState.unlockAchievement(ach.id, ach.name);
        if (isNew) {
          newlyUnlocked.push(ach);
        }
      }
    });

    if (newlyUnlocked.length > 0) {
      this.updateAchievementsBadge();
      this.updatePlayerHUD();
      newlyUnlocked.forEach((ach, index) => {
        setTimeout(() => this.showAchievementToast(ach), index * 4600);
      });
    }
  }

  startCustomPractice() {
    const input = document.getElementById('custom-text-input');
    if (!input) return;
    const rawText = input.value.trim();
    if (rawText.length < 5) {
      audio.playError();
      alert("Por favor pega al menos 5 caracteres de texto para iniciar.");
      return;
    }

    const customLesson = {
      id: 'custom',
      sector: 1,
      title: 'ARENA PERSONALIZADA // PRÁCTICA LIBRE',
      desc: 'Fragmento de texto seleccionado por el usuario.',
      keys: ['Texto Personalizado'],
      targetWpm: 35,
      minAccuracy: 90,
      timeLimit: 120,
      content: rawText
    };

    this.startLevel(customLesson);
  }


  // ==========================================================
  // PIERRE'S GENERAL STORE
  // ==========================================================
  openPierreStoreModal() {
    const modal = document.getElementById('pierre-store-modal');
    const container = document.getElementById('store-catalog-container');
    const goldVal = document.getElementById('store-player-gold');
    if (!modal || !container) return;

    if (goldVal) goldVal.textContent = gameState.data.player.xp || 0;

    container.innerHTML = '';
    PIERRE_STORE_CATALOG.forEach(item => {
      const isOwned = gameState.hasUpgrade(item.id);
      const canAfford = (gameState.data.player.xp || 0) >= item.cost;

      const card = document.createElement('div');
      card.className = 'store-item-card';

      card.innerHTML = `
        <div class="store-item-header">
          <div class="store-item-icon">${item.icon}</div>
          <div>
            <div class="store-item-title">${item.name}</div>
          </div>
        </div>
        <div class="store-item-desc">${item.desc}</div>
        <div class="store-item-footer">
          <div class="store-item-cost"><span>💰</span> <span>${item.cost} $g</span></div>
          <button class="store-buy-btn ${isOwned ? 'purchased' : ''}" data-item-id="${item.id}" ${isOwned || !canAfford ? 'disabled' : ''}>
            ${isOwned ? 'Adquirido ✓' : (canAfford ? 'Comprar' : 'Falta Oro')}
          </button>
        </div>
      `;

      const buyBtn = card.querySelector('.store-buy-btn');
      if (buyBtn && !isOwned && canAfford) {
        buyBtn.addEventListener('click', () => {
          const res = gameState.buyUpgrade(item.id);
          if (res.success) {
            audio.playCoin();
            particles.burst(window.innerWidth / 2, window.innerHeight / 2, '#ffd700', 30);
            particles.addFloatingText(`+ ${item.name}!`, window.innerWidth / 2, window.innerHeight / 2 - 40, '#ffd700', 24);
            this.updatePlayerHUD();
            this.updateMascotsUI();
            this.applyCosmeticKeyboard();
            this.openPierreStoreModal();
          } else {
            audio.playError();
            alert(res.msg);
          }
        });
      }

      container.appendChild(card);
    });

    modal.classList.add('active');
  }

  // ==========================================================
  // PELICAN TOWN BULLETIN BOARD (DAILY QUESTS)
  // ==========================================================
  openQuestsModal() {
    const modal = document.getElementById('quests-modal');
    const container = document.getElementById('quests-container');
    if (!modal || !container) return;

    container.innerHTML = '';
    (gameState.data.dailyQuests || []).forEach(q => {
      const pct = Math.min(100, Math.round((q.current / q.target) * 100));
      const card = document.createElement('div');
      card.className = `quest-card ${q.completed ? 'completed' : ''}`;

      card.innerHTML = `
        <div class="quest-icon">${q.completed ? '✅' : '📜'}</div>
        <div class="quest-info">
          <div class="quest-title">${q.title}</div>
          <div class="quest-desc">${q.desc} (${q.current} / ${q.target})</div>
          <div class="quest-progress-bar">
            <div class="quest-progress-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
        <div class="quest-reward-pill">
          ${q.completed ? '¡COBRADO!' : `+${q.reward} $g`}
        </div>
      `;
      container.appendChild(card);
    });

    modal.classList.add('active');
  }

  // ==========================================================
  // VILLAGER DIALOGUE CUTSCENES
  // ==========================================================
  showSectorCutscene(sectorId) {
    const modal = document.getElementById('cutscene-modal');
    const speakerEl = document.getElementById('cutscene-speaker');
    const avatarEl = document.getElementById('cutscene-avatar');
    const textEl = document.getElementById('cutscene-text');
    if (!modal || !speakerEl || !avatarEl || !textEl) return;

    const cutscene = (SECTOR_CUTSCENES && SECTOR_CUTSCENES[String(sectorId)]) || {
      speaker: "Habitante del Valle",
      avatar: "🌾",
      quote: "¡Bienvenido a los campos de Stardew Valley! Cada pulsación cultiva una nueva semilla."
    };

    speakerEl.textContent = cutscene.speaker;
    avatarEl.textContent = cutscene.avatar;
    textEl.textContent = "";

    modal.classList.add('active');

    if (this.cutsceneInterval) clearInterval(this.cutsceneInterval);
    let charIdx = 0;
    const fullText = cutscene.quote;
    this.cutsceneInterval = setInterval(() => {
      if (charIdx < fullText.length) {
        textEl.textContent += fullText[charIdx];
        charIdx++;
        if (charIdx % 3 === 0) audio.playTypewriterTick();
      } else {
        clearInterval(this.cutsceneInterval);
        this.cutsceneInterval = null;
      }
    }, 28);
  }

  // ==========================================================
  // SEASON & WEATHER TOGGLE
  // ==========================================================
  cycleSeason() {
    const seasons = ['spring', 'summer', 'fall', 'winter'];
    const curSeason = gameState.getSeason();
    const curIdx = seasons.indexOf(curSeason);
    const nextSeason = seasons[(curIdx + 1) % seasons.length];

    gameState.setSeason(nextSeason);
    if (window.particles) {
      particles.setSeason(nextSeason);
    }
    this.updateSeasonUI();
    if (audio.playJunimoBell) {
      audio.playJunimoBell();
    } else {
      audio.playKey();
    }
  }

  updateSeasonUI() {
    const season = gameState.getSeason();
    const weatherIcon = document.getElementById('season-weather-icon');
    const titleText = document.getElementById('season-title-text');
    const seasonPill = document.getElementById('btn-toggle-season');

    const config = {
      spring: { icon: '🌸', title: 'PRIMAVERA • AÑO 1' },
      summer: { icon: '☀️', title: 'VERANO • AÑO 1' },
      fall: { icon: '🍂', title: 'OTOÑO • AÑO 1' },
      winter: { icon: '❄️', title: 'INVIERNO • AÑO 1' }
    }[season] || { icon: '🍂', title: 'OTOÑO • AÑO 1' };

    if (weatherIcon) weatherIcon.textContent = config.icon;
    if (titleText) titleText.textContent = config.title;

    document.documentElement.setAttribute('data-season', season);
    document.body.setAttribute('data-season', season);
    if (seasonPill) {
      seasonPill.setAttribute('data-season', season);
    }
    if (window.particles) {
      particles.setSeason(season);
    }
  }

  // ==========================================================
  // FARM MASCOT & PETS COMPANIONS
  // ==========================================================
  updateMascotsUI() {
    const dogBtn = document.getElementById('btn-mascot-dog');
    const catBtn = document.getElementById('btn-mascot-cat');
    if (dogBtn) dogBtn.style.display = gameState.hasUpgrade('petDog') ? 'inline-block' : 'none';
    if (catBtn) catBtn.style.display = gameState.hasUpgrade('petCat') ? 'inline-block' : 'none';
  }

  triggerMascotCheer(combo) {
    const bubble = document.getElementById('mascot-speech-text');
    if (!bubble) return;

    if (combo >= 25 && combo % 25 === 0) {
      if (gameState.hasUpgrade('junimoHut')) {
        particles.burstJunimo(window.innerWidth - 120, window.innerHeight - 80);
      }
      const cheers = [
        `¡Cluck! 🐔 ¡Racha x${combo}! ¡Eres un maestro de la huerta!`,
        `¡Pío! 🌽 ¡Combo de ${combo} pulsaciones sin fallar!`,
        `¡Kokorokó! 🌟 ¡Tus dedos vuelan como el viento del valle!`
      ];
      bubble.textContent = cheers[Math.floor(Math.random() * cheers.length)];
    }
  }

  applyCosmeticKeyboard() {
    ['keyboard-container', 'arcade-keyboard-container', 'boss-keyboard-container', 'survival-keyboard-container', 'bundles-keyboard-container', 'museum-keyboard-container'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.remove('keyboard-cherry', 'keyboard-iridium');
      if (gameState.hasUpgrade('themeIridium')) {
        el.classList.add('keyboard-iridium');
      } else if (gameState.hasUpgrade('themeCherry')) {
        el.classList.add('keyboard-cherry');
      }
    });
  }

  // ==========================================================
  // EVENT LISTENERS BINDING
  // ==========================================================
  bindEvents() {
    // Mode Select Cards
    document.getElementById('btn-start-campaign').addEventListener('click', () => {
      this.openCampaignSelect();
    });

    document.getElementById('btn-start-arcade').addEventListener('click', () => {
      this.startArcade();
    });

    document.getElementById('btn-start-boss').addEventListener('click', () => {
      this.startBoss();
    });

    document.getElementById('btn-start-speedtest').addEventListener('click', () => {
      this.startSpeedTest();
    });

    document.getElementById('btn-start-survival')?.addEventListener('click', () => {
      this.startSurvival();
    });

    document.getElementById('btn-start-fishing')?.addEventListener('click', () => {
      this.startFishing();
    });

    document.getElementById('btn-start-bundles')?.addEventListener('click', () => {
      this.openBundles();
    });

    document.getElementById('btn-open-bundles')?.addEventListener('click', () => {
      this.openBundles();
    });

    document.getElementById('btn-start-museum')?.addEventListener('click', () => {
      this.openMuseum();
    });

    document.getElementById('btn-open-museum')?.addEventListener('click', () => {
      this.openMuseum();
    });

    // Back Buttons
    document.getElementById('btn-back-from-levels').addEventListener('click', () => {
      this.switchView('view-menu');
    });

    document.getElementById('btn-back-from-arena').addEventListener('click', () => {
      this.stopArena();
      this.openCampaignSelect();
    });

    document.getElementById('btn-back-from-arcade').addEventListener('click', () => {
      this.stopArcade();
      this.switchView('view-menu');
    });

    document.getElementById('btn-back-from-boss').addEventListener('click', () => {
      this.stopBoss();
      this.switchView('view-menu');
    });

    document.getElementById('btn-back-from-survival')?.addEventListener('click', () => {
      this.stopSurvival();
      this.switchView('view-menu');
    });

    document.getElementById('btn-back-from-fishing')?.addEventListener('click', () => {
      this.stopFishing();
      this.switchView('view-menu');
    });

    document.getElementById('btn-back-from-bundles')?.addEventListener('click', () => {
      this.cancelBundleRitual();
      this.switchView('view-menu');
    });

    document.getElementById('btn-close-ritual')?.addEventListener('click', () => {
      this.cancelBundleRitual();
    });

    document.getElementById('btn-back-from-museum')?.addEventListener('click', () => {
      this.cancelExcavation();
      this.switchView('view-menu');
    });

    document.getElementById('btn-close-excavation')?.addEventListener('click', () => {
      this.cancelExcavation();
    });

    document.getElementById('btn-restart-level').addEventListener('click', () => {
      if (this.currentLevel) this.startLevel(this.currentLevel);
    });

    document.getElementById('btn-restart-survival')?.addEventListener('click', () => {
      this.startSurvival();
    });

    // Brand click returns to menu
    document.getElementById('nav-brand-home')?.addEventListener('click', () => {
      this.stopArena();
      this.stopArcade();
      this.stopBoss();
      this.stopSurvival();
      this.stopFishing();
      this.cancelBundleRitual();
      this.cancelExcavation();
      this.switchView('view-menu');
    });

    // Farm Season & Weather HUD Telemetry Toggle
    document.getElementById('btn-toggle-season')?.addEventListener('click', () => {
      this.cycleSeason();
    });

    // Free Play Mode Toggle
    document.getElementById('btn-toggle-freeplay')?.addEventListener('click', () => {
      const isFree = gameState.toggleFreePlayMode();
      audio.playKey();
      this.renderCampaignTabs();
      this.renderLevelCards();
    });

    // Status Filter Pills (all, pending, completed, mastered)
    document.querySelectorAll('#status-filters-container .filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#status-filters-container .filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.statusFilter = btn.dataset.statusFilter || 'all';
        this.renderLevelCards();
      });
    });

    // Ghost Typist Click Toggle
    document.getElementById('hud-ghost-box')?.addEventListener('click', () => {
      gameState.data.ghostTypistEnabled = !gameState.data.ghostTypistEnabled;
      gameState.save();
      audio.playKey();
      const badge = document.getElementById('hud-ghost-badge');
      if (badge) {
        badge.textContent = gameState.data.ghostTypistEnabled ? '👻 GHOST ACTIVO' : '👻 GHOST APAGADO';
        badge.className = `ghost-hud-badge ${gameState.data.ghostTypistEnabled ? 'ahead' : 'behind'}`;
      }
    });

    // Weak Keys Drill Launch Button
    document.getElementById('btn-launch-weak-drill')?.addEventListener('click', () => {
      this.generateWeakKeyDrill();
    });

    // Theme Selector
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
      themeSelect.addEventListener('change', (e) => {
        this.currentTheme = e.target.value;
        gameState.data.theme = this.currentTheme;
        gameState.save();
        document.documentElement.setAttribute('data-theme', this.currentTheme);
      });
    }

    // Language Selector
    document.getElementById('lang-select').addEventListener('change', (e) => {
      this.currentLang = e.target.value;
      gameState.data.lang = this.currentLang;
      gameState.save();
      this.applyLocalization();
      if (this.currentMode === 'campaign-select') this.openCampaignSelect();
    });

    // Keyboard Layout Selector
    document.getElementById('layout-select').addEventListener('change', (e) => {
      this.currentLayout = e.target.value;
      gameState.data.layout = this.currentLayout;
      gameState.save();
      this.updateKeyMap();
      this.renderKeyboard('keyboard-container');
      this.renderKeyboard('arcade-keyboard-container');
      this.renderKeyboard('boss-keyboard-container');
      this.renderKeyboard('survival-keyboard-container');
      this.renderKeyboard('fishing-keyboard-container');
      this.renderKeyboard('bundles-keyboard-container');
      this.renderKeyboard('museum-keyboard-container');
      if (this.currentLevel && this.textStream[this.cursorIndex]) {
        this.highlightTargetKey(this.textStream[this.cursorIndex]);
      }
    });

    // Difficulty Selector
    const diffSelect = document.getElementById('difficulty-select');
    if (diffSelect) {
      diffSelect.addEventListener('change', (e) => {
        gameState.data.difficulty = e.target.value;
        gameState.save();
        this.updateDifficultySelectColor(e.target.value);
        if (this.currentMode === 'arena' && this.currentLevel) {
          this.startLevel(this.currentLevel);
        }
      });
    }

    // Arcade Difficulty / Speed Selector
    const arcadeDiffSelect = document.getElementById('arcade-diff-select');
    if (arcadeDiffSelect) {
      arcadeDiffSelect.addEventListener('change', (e) => {
        gameState.data.arcadeDifficulty = e.target.value;
        gameState.save();
        this.updateArcadeDiffSelectColor(e.target.value);
        if (this.currentMode === 'arcade') {
          this.startArcade();
        }
      });
    }

    // Switch Sound Selector
    document.getElementById('switch-sound-select').addEventListener('change', (e) => {
      gameState.data.switchType = e.target.value;
      audio.setSwitchType(e.target.value);
      gameState.save();
      audio.playKey();
    });

    // SFX Toggle
    const sfxBtn = document.getElementById('toggle-sfx-btn');
    sfxBtn.addEventListener('click', () => {
      const active = !gameState.data.soundEnabled;
      gameState.data.soundEnabled = active;
      audio.setSoundEnabled(active);
      sfxBtn.classList.toggle('active', active);
      gameState.save();
    });

    // Music Drone Toggle
    const musicBtn = document.getElementById('toggle-music-btn');
    musicBtn.addEventListener('click', () => {
      const active = !gameState.data.musicEnabled;
      gameState.data.musicEnabled = active;
      audio.setMusicEnabled(active);
      musicBtn.classList.toggle('active', active);
      gameState.save();
    });

    // Modal Action Buttons
    document.getElementById('modal-btn-retry').addEventListener('click', () => {
      document.getElementById('victory-modal').classList.remove('active');
      if (this.currentLevel) this.startLevel(this.currentLevel);
    });

    document.getElementById('modal-btn-next').addEventListener('click', () => {
      document.getElementById('victory-modal').classList.remove('active');
      const lessons = CURRICULUM[this.currentLang] || CURRICULUM.es;
      const nextId = (this.currentLevel ? this.currentLevel.id : 0) + 1;
      const nextLesson = lessons.find(l => l.id === nextId);
      if (nextLesson) {
        this.startLevel(nextLesson);
      } else {
        this.openCampaignSelect();
      }
    });

    document.getElementById('modal-defeat-btn-retry').addEventListener('click', () => {
      document.getElementById('defeat-modal').classList.remove('active');
      if (this.currentMode === 'arcade') this.startArcade();
      else if (this.currentMode === 'boss') this.startBoss();
      else if (this.currentMode === 'survival') this.startSurvival();
      else if (this.currentLevel) this.startLevel(this.currentLevel);
    });

    document.getElementById('modal-defeat-btn-menu').addEventListener('click', () => {
      document.getElementById('defeat-modal').classList.remove('active');
      this.switchView('view-menu');
    });

    // Custom Practice Mode Listeners
    document.getElementById('btn-start-custom')?.addEventListener('click', () => {
      this.switchView('view-custom');
      const input = document.getElementById('custom-text-input');
      if (input) input.focus();
    });

    document.getElementById('btn-back-from-custom')?.addEventListener('click', () => {
      this.switchView('view-menu');
    });

    const customInput = document.getElementById('custom-text-input');
    if (customInput) {
      customInput.addEventListener('input', () => {
        const text = customInput.value;
        const charCount = text.length;
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const charEl = document.getElementById('custom-char-count');
        const wordEl = document.getElementById('custom-word-count');
        if (charEl) charEl.textContent = charCount;
        if (wordEl) wordEl.textContent = words;
      });
    }

    document.getElementById('btn-clear-custom')?.addEventListener('click', () => {
      const input = document.getElementById('custom-text-input');
      if (input) {
        input.value = '';
        const charEl = document.getElementById('custom-char-count');
        const wordEl = document.getElementById('custom-word-count');
        if (charEl) charEl.textContent = '0';
        if (wordEl) wordEl.textContent = '0';
        input.focus();
      }
    });

    document.getElementById('btn-launch-custom')?.addEventListener('click', () => {
      this.startCustomPractice();
    });


    // Pierre Store Listeners
    document.getElementById('btn-open-store')?.addEventListener('click', () => {
      this.openPierreStoreModal();
    });
    document.getElementById('btn-close-store')?.addEventListener('click', () => {
      document.getElementById('pierre-store-modal')?.classList.remove('active');
    });

    // Pelican Town Quests Listeners
    document.getElementById('btn-open-quests')?.addEventListener('click', () => {
      this.openQuestsModal();
    });
    document.getElementById('btn-close-quests')?.addEventListener('click', () => {
      document.getElementById('quests-modal')?.classList.remove('active');
    });

    // Season Toggle Listener
    document.getElementById('btn-toggle-season')?.addEventListener('click', () => {
      this.cycleSeason();
    });

    // Sector Villager Cutscene Listeners
    document.getElementById('btn-sector-story')?.addEventListener('click', () => {
      const secId = this.selectedSector === 'all' ? 1 : parseInt(this.selectedSector, 10);
      this.showSectorCutscene(secId);
    });
    document.getElementById('btn-cutscene-continue')?.addEventListener('click', () => {
      if (this.cutsceneInterval) clearInterval(this.cutsceneInterval);
      document.getElementById('cutscene-modal')?.classList.remove('active');
    });

    // Mascot Chicken & Pets Listeners
    document.getElementById('btn-mascot-chicken')?.addEventListener('click', () => {
      audio.playCluck();
      const bubble = document.getElementById('mascot-speech-text');
      const tips = [
        "¡Cluck! 🐔 Recuerda apoyar los dedos índices en F y J sin mirar abajo.",
        "¡Pío! 🍏 ¿Sabías que los Junimos son los duendecillos mágicos del bosque que viven en el Centro Cívico?",
        "¡Bawk! 💜 El Iridio es el mineral más codiciado del valle; en el teclado lo ganas con 100% de precisión perfecta.",
        "¡Cluck cluck! 💼 Morris y JojaMart quieren demoler el pueblo, ¡tus dedos rápidos son la magia que lo salvará!",
        "¡Pío! 🌾 Cada letra que escribes es como regar un brote de chirivía o patata en la parcela del abuelo.",
        "¡Bawk! ⛏️ En la Caverna Calavera no pierdas el ritmo o la antorcha se apagará.",
        "¡Kokorokó! 🌟 ¡El abuelo estaría muy orgulloso de tus 100 WPM!"
      ];
      if (bubble) bubble.textContent = tips[Math.floor(Math.random() * tips.length)];
    });

    document.getElementById('btn-mascot-dog')?.addEventListener('click', () => {
      audio.playBark();
      const bubble = document.getElementById('mascot-speech-text');
      if (bubble) bubble.textContent = "¡Guau! 🐶 ¡Moviendo la colita por tu racha perfecta!";
    });

    document.getElementById('btn-mascot-cat')?.addEventListener('click', () => {
      audio.playMeow();
      const bubble = document.getElementById('mascot-speech-text');
      if (bubble) bubble.textContent = "¡Miau! 🐱 Ronroneando alegremente junto al teclado.";
    });

    // Achievements Modal Listeners
    document.getElementById('btn-open-achievements')?.addEventListener('click', () => {
      this.openAchievementsModal();
    });
    document.getElementById('btn-close-achievements')?.addEventListener('click', () => {
      document.getElementById('achievements-modal')?.classList.remove('active');
    });

    // Profile Modal Listeners
    document.getElementById('btn-open-profile')?.addEventListener('click', () => {
      this.openProfileModal();
    });
    document.getElementById('btn-close-profile')?.addEventListener('click', () => {
      document.getElementById('profile-modal')?.classList.remove('active');
    });

    document.getElementById('btn-reset-data')?.addEventListener('click', () => {
      if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso, nivel, estrellas y logros de la granja? Esta acción es irreversible.")) {
        this.state.reset();
        location.reload();
      }
    });

    // Level Search Filter Input
    const levelSearch = document.getElementById('level-search-input');
    if (levelSearch) {
      levelSearch.addEventListener('input', () => {
        this.renderLevelCards();
      });
    }

    // Modal Background Click Closes
    ['achievements-modal', 'profile-modal', 'victory-modal', 'defeat-modal', 'pierre-store-modal', 'quests-modal', 'cutscene-modal', 'guide-modal'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', (e) => {
          if (e.target === el) el.classList.remove('active');
        });
      }
    });

    // Guide Modal Listeners (Para todo público)
    document.getElementById('btn-open-guide')?.addEventListener('click', () => {
      this.openGuideModal('story');
    });
    document.getElementById('btn-hero-guide')?.addEventListener('click', () => {
      this.openGuideModal('story');
    });
    document.getElementById('btn-close-guide-top')?.addEventListener('click', () => {
      this.closeGuideModal();
    });
    document.getElementById('btn-close-guide')?.addEventListener('click', () => {
      this.closeGuideModal();
    });

    // Ensure Web Audio context resumes on first interaction anywhere
    const unlockAudio = () => {
      audio.ensureContext();
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('click', unlockAudio);
    window.addEventListener('keydown', unlockAudio);

    // Global Keydown Listener
    window.addEventListener('keydown', (e) => {
      if ((e.key === ' ' || e.key === 'Tab') && e.target === document.body) {
        e.preventDefault();
      }

      if (e.key === 'Escape') {
        if (this.currentMode === 'arena') {
          this.stopArena();
          this.openCampaignSelect();
        } else if (this.currentMode === 'fishing') {
          this.stopFishing();
          this.switchView('view-menu');
        } else if (this.currentMode === 'arcade' || this.currentMode === 'boss' || this.currentMode === 'survival' || this.currentMode === 'campaign-select') {
          this.stopArcade();
          this.stopBoss();
          this.stopSurvival();
          this.stopFishing();
          this.switchView('view-menu');
        } else if (this.currentMode === 'bundles') {
          if (this.bundleRitualActive) {
            this.cancelBundleRitual();
          } else {
            this.switchView('view-menu');
          }
        } else if (this.currentMode === 'museum') {
          if (this.activeExcavationArtifact) {
            this.cancelExcavation();
          } else {
            this.switchView('view-menu');
          }
        }
        return;
      }

      // Visual press on virtual keyboard
      const keyEl = document.querySelector(`.key-cap[data-code="${e.code}"]`);
      if (keyEl) {
        keyEl.classList.add('is-pressed');
      }

      // Dispatch to active mode
      if (this.currentMode === 'arena') {
        this.handleArenaKeystroke(e);
      } else if (this.currentMode === 'arcade') {
        this.handleArcadeKeystroke(e);
      } else if (this.currentMode === 'boss') {
        this.handleBossKeystroke(e);
      } else if (this.currentMode === 'survival') {
        this.handleSurvivalKeystroke(e);
      } else if (this.currentMode === 'fishing') {
        this.handleFishingKeystroke(e);
      } else if (this.currentMode === 'bundles') {
        this.handleBundlesKeystroke(e);
      } else if (this.currentMode === 'museum') {
        this.handleExcavationKeystroke(e);
      }
    });

    window.addEventListener('keyup', (e) => {
      const keyEl = document.querySelector(`.key-cap[data-code="${e.code}"]`);
      if (keyEl) {
        keyEl.classList.remove('is-pressed');
      }
    });
  }
}

// Start application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const app = new CyberTypeApp();
  app.init();
  window.cyberTypeApp = app;
  window.stardewValleyApp = app;
});
