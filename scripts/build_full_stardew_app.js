// Script to enrich js/game/app.js with full Stardew Valley Pierre store, daily quests, cutscenes, mascot & cosmetics
const fs = require('fs');
const path = require('path');

const appPath = path.resolve(__dirname, '../js/game/app.js');
let appCode = fs.readFileSync(appPath, 'utf8');

// 1. Update imports
if (!appCode.includes('SECTOR_CUTSCENES')) {
  appCode = appCode.replace(
    "import { \n  CURRICULUM, \n  SECTOR_INFO,\n  ARCADE_WORDS, \n  BOSS_ENCOUNTERS, \n  SPEED_TEST_TEXTS \n} from './curriculum.js';",
    "import { \n  CURRICULUM, \n  SECTOR_INFO,\n  ARCADE_WORDS, \n  BOSS_ENCOUNTERS, \n  SPEED_TEST_TEXTS,\n  SECTOR_CUTSCENES\n} from './curriculum.js';"
  );
}

if (!appCode.includes('PIERRE_STORE_CATALOG')) {
  appCode = appCode.replace(
    "import { gameState, ACHIEVEMENTS_DEF } from './state.js';",
    "import { gameState, ACHIEVEMENTS_DEF, PIERRE_STORE_CATALOG } from './state.js';"
  );
}

// 2. In init(), call our new HUD & UI initializers
if (!appCode.includes('this.updateSeasonUI();')) {
  appCode = appCode.replace(
    "    this.renderDashboardWeakKeys();\n    this.updatePlayerHUD();\n    this.updateAchievementsBadge();",
    "    this.renderDashboardWeakKeys();\n    this.updatePlayerHUD();\n    this.updateAchievementsBadge();\n    this.updateSeasonUI();\n    this.updateMascotsUI();\n    this.applyCosmeticKeyboard();"
  );
}

// 3. In startLevel(), reset iridiumShieldUsed
if (!appCode.includes('this.iridiumShieldUsed = false;')) {
  appCode = appCode.replace(
    "    this.isArenaFinished = false;\n    this.sessionKeyErrors = {};",
    "    this.isArenaFinished = false;\n    this.sessionKeyErrors = {};\n    this.iridiumShieldUsed = false;"
  );
}

// 4. In handleArenaKeystroke, correct keystroke quest & mascot updates
if (!appCode.includes("gameState.updateQuest('chars', 1);")) {
  appCode = appCode.replace(
    "      // Audio & Particle FX\n      audio.playKey(this.combo);\n      gameState.recordKey(targetChar, false);",
    "      // Audio & Particle FX\n      audio.playKey(this.combo);\n      gameState.recordKey(targetChar, false);\n      gameState.updateQuest('chars', 1);\n      gameState.updateQuest('combo', this.combo);\n      this.triggerMascotCheer(this.combo);"
  );
}

// 5. In handleArenaKeystroke wrong strike, check iridium rod upgrade
if (!appCode.includes("if (gameState.hasUpgrade('iridiumRod') && !this.iridiumShieldUsed)")) {
  appCode = appCode.replace(
    "    } else {\n      // === WRONG STRIKE (ERROR) ===\n      this.errorsCount++;",
    `    } else {
      // Check Iridium Fishing Rod shield (forgives 1 typo per level!)
      if (gameState.hasUpgrade('iridiumRod') && !this.iridiumShieldUsed) {
        this.iridiumShieldUsed = true;
        audio.playJunimoBell(audio.ctx ? audio.ctx.currentTime : 0, 100);
        particles.addFloatingText("🛡️ ¡ESCUDO DE IRIDIO ABSORBIÓ EL FALLO!", window.innerWidth / 2, window.innerHeight / 2 - 120, '#ab47bc', 22);
        return;
      }
      // === WRONG STRIKE (ERROR) ===
      this.errorsCount++;`
  );
}

// 6. In finishLevel, apply Copper Watering Can bonus
if (!appCode.includes("if (gameState.hasUpgrade('copperCan'))")) {
  appCode = appCode.replace(
    "      const xpEarned = Math.round((stars * 70 + Math.round(wpm * 2.5)) * xpMultiplier);\n      gameState.addXp(xpEarned);",
    `      let xpEarned = Math.round((stars * 70 + Math.round(wpm * 2.5)) * xpMultiplier);
      if (gameState.hasUpgrade('copperCan')) {
        xpEarned = Math.round(xpEarned * 1.15); // +15% extra Gold with Copper Can!
      }
      gameState.addXp(xpEarned);`
  );
}

// 7. Fix achievement checks for first_harvest & sector_1
appCode = appCode.replace(
  "        case 'first_hack':\n          if (totalStars >= 1 || (context.won && context.levelId !== 'custom')) unlock = true;\n          break;\n        case 'level_10':\n          if (completedCount >= 10 || (context.won && context.levelId >= 10)) unlock = true;\n          break;",
  `        case 'first_harvest':
          if (totalStars >= 1 || (context.won && context.levelId !== 'custom')) unlock = true;
          break;
        case 'sector_1': {
          const secLessons = (CURRICULUM[this.currentLang] || CURRICULUM.es).filter(l => l.sector === 1);
          const prog = gameState.getSectorProgress(this.currentLang, secLessons);
          if (prog.completed >= 10) unlock = true;
          break;
        }`
);

// 8. Add methods for Pierre Store, Quests, Cutscenes, Mascot, Season, Cosmetics
const newMethods = `
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

      card.innerHTML = \`
        <div class="store-item-header">
          <div class="store-item-icon">\${item.icon}</div>
          <div>
            <div class="store-item-title">\${item.name}</div>
          </div>
        </div>
        <div class="store-item-desc">\${item.desc}</div>
        <div class="store-item-footer">
          <div class="store-item-cost"><span>💰</span> <span>\${item.cost} $g</span></div>
          <button class="store-buy-btn \${isOwned ? 'purchased' : ''}" data-item-id="\${item.id}" \${isOwned || !canAfford ? 'disabled' : ''}>
            \${isOwned ? 'Adquirido ✓' : (canAfford ? 'Comprar' : 'Falta Oro')}
          </button>
        </div>
      \`;

      const buyBtn = card.querySelector('.store-buy-btn');
      if (buyBtn && !isOwned && canAfford) {
        buyBtn.addEventListener('click', () => {
          const res = gameState.buyUpgrade(item.id);
          if (res.success) {
            audio.playCoin();
            particles.burst(window.innerWidth / 2, window.innerHeight / 2, '#ffd700', 30);
            particles.addFloatingText(\`+ \${item.name}!\`, window.innerWidth / 2, window.innerHeight / 2 - 40, '#ffd700', 24);
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
      card.className = \`quest-card \${q.completed ? 'completed' : ''}\`;

      card.innerHTML = \`
        <div class="quest-icon">\${q.completed ? '✅' : '📜'}</div>
        <div class="quest-info">
          <div class="quest-title">\${q.title}</div>
          <div class="quest-desc">\${q.desc} (\${q.current} / \${q.target})</div>
          <div class="quest-progress-bar">
            <div class="quest-progress-fill" style="width: \${pct}%;"></div>
          </div>
        </div>
        <div class="quest-reward-pill">
          \${q.completed ? '¡COBRADO!' : \`+\${q.reward} $g\`}
        </div>
      \`;
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
    particles.setSeason(nextSeason);
    this.updateSeasonUI();
    audio.playKey();
  }

  updateSeasonUI() {
    const season = gameState.getSeason();
    const weatherIcon = document.getElementById('season-weather-icon');
    const titleText = document.getElementById('season-title-text');

    const config = {
      spring: { icon: '🌸', title: 'PRIMAVERA • AÑO 1' },
      summer: { icon: '☀️', title: 'VERANO • AÑO 1' },
      fall: { icon: '🍂', title: 'OTOÑO • AÑO 1' },
      winter: { icon: '❄️', title: 'INVIERNO • AÑO 1' }
    }[season] || { icon: '☀️', title: 'PRIMAVERA • AÑO 1' };

    if (weatherIcon) weatherIcon.textContent = config.icon;
    if (titleText) titleText.textContent = config.title;
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
        \`¡Cluck! 🐔 ¡Racha x\${combo}! ¡Eres un maestro de la huerta!\`,
        \`¡Pío! 🌽 ¡Combo de \${combo} pulsaciones sin fallar!\`,
        \`¡Kokorokó! 🌟 ¡Tus dedos vuelan como el viento del valle!\`
      ];
      bubble.textContent = cheers[Math.floor(Math.random() * cheers.length)];
    }
  }

  applyCosmeticKeyboard() {
    ['keyboard-container', 'arcade-keyboard-container', 'boss-keyboard-container', 'survival-keyboard-container'].forEach(id => {
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
`;

if (!appCode.includes('openPierreStoreModal()')) {
  appCode = appCode.replace(
    '  // ==========================================================\n  // EVENT LISTENERS BINDING\n  // ==========================================================',
    newMethods + '\n  // ==========================================================\n  // EVENT LISTENERS BINDING\n  // =========================================================='
  );
}

// 9. Add event bindings inside bindEvents()
const newEventBindings = `
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
        "¡Pío! 🌽 Las fresas crecen mejor si mantienes una racha de combo alta.",
        "¡Bawk! ⛏️ En la Caverna Calavera no pierdas el ritmo o la antorcha se apagará.",
        "¡Cluck cluck! 🌾 Pierre dice que hoy las chirivías de calidad Iridio pagan el doble.",
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
`;

if (!appCode.includes("document.getElementById('btn-open-store')")) {
  appCode = appCode.replace(
    "    // Achievements Modal Listeners",
    newEventBindings + "\n    // Achievements Modal Listeners"
  );
}

// 10. Update backdrop close list
appCode = appCode.replace(
  "['achievements-modal', 'profile-modal', 'victory-modal', 'defeat-modal']",
  "['achievements-modal', 'profile-modal', 'victory-modal', 'defeat-modal', 'pierre-store-modal', 'quests-modal', 'cutscene-modal']"
);

fs.writeFileSync(appPath, appCode, 'utf8');
console.log("✅ Successfully updated js/game/app.js with Pierre store, bulletin quests, villager cutscenes, and farm pets!");
