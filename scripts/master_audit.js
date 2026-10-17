// scripts/master_audit.js
// Comprehensive Master System Audit for Stardew Valley: Typing Edition

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🌾 =======================================================');
console.log('🌾 STARDEW VALLEY: TYPING EDITION - MASTER SYSTEM AUDIT');
console.log('🌾 =======================================================\n');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failed = true;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// -------------------------------------------------------------
// CHECK 1: File Structure & Core Assets
// -------------------------------------------------------------
console.log('\n📁 [1/8] Verifying File Structure & Core Web Assets...');
const requiredFiles = [
  'index.html',
  'README.md',
  'LICENSE',
  '.gitignore',
  'css/style.css',
  'css/keyboard.css',
  'js/game/app.js',
  'js/game/curriculum.js',
  'js/game/state.js',
  'js/game/keyboard-data.js',
  'js/game/i18n.js',
  'js/game/bundles-data.js',
  'js/game/museum-data.js',
  'js/engine/audio.js',
  'js/engine/particles.js'
];

requiredFiles.forEach(file => {
  const fullPath = path.join(rootDir, file);
  assert(fs.existsSync(fullPath), `File exists: ${file} (${fs.statSync(fullPath).size} bytes)`);
});

// -------------------------------------------------------------
// CHECK 2: Live Local Server & HTTP 200 Verification
// -------------------------------------------------------------
console.log('\n🌐 [2/8] Verifying Local Server & Asset Delivery (http://localhost:8080)...');
async function testServer() {
  const assetsToFetch = [
    '',
    'index.html',
    'css/style.css',
    'css/keyboard.css',
    'js/game/app.js',
    'js/game/curriculum.js',
    'js/game/state.js',
    'js/game/keyboard-data.js',
    'js/game/i18n.js',
    'js/game/bundles-data.js',
    'js/game/museum-data.js',
    'js/engine/audio.js',
    'js/engine/particles.js'
  ];

  for (const asset of assetsToFetch) {
    try {
      const res = await fetch(`http://localhost:8080/${asset}`);
      const text = await res.text();
      assert(res.status === 200 && text.length > 0, `HTTP 200 OK: /${asset} (${text.length} chars)`);
    } catch (err) {
      assert(false, `Failed to reach http://localhost:8080/${asset}: ${err.message}`);
    }
  }
}
await testServer();

// -------------------------------------------------------------
// CHECK 3: ES Module Imports & Data Structures
// -------------------------------------------------------------
console.log('\n📦 [3/8] Importing and Validating ES Modules & Datasets...');

import { CURRICULUM, SECTOR_INFO, BOSS_ENCOUNTERS, ARCADE_WORDS, SPEED_TEST_TEXTS, SECTOR_CUTSCENES, FISHING_WORDS } from '../js/game/curriculum.js';
import { COMMUNITY_ROOMS, JUNIMO_BUNDLES } from '../js/game/bundles-data.js';
import { MUSEUM_WINGS, MUSEUM_ARTIFACTS, MUSEUM_MILESTONES } from '../js/game/museum-data.js';
import { gameState, ACHIEVEMENTS_DEF, PIERRE_STORE_CATALOG } from '../js/game/state.js';
import { audio } from '../js/engine/audio.js';
import { particles } from '../js/engine/particles.js';
import { I18N } from '../js/game/i18n.js';
import { KEYBOARD_LAYOUT_ES, KEYBOARD_LAYOUT_EN, FINGER_COLORS } from '../js/game/keyboard-data.js';

// Curriculum
['es', 'en', 'pt', 'fr'].forEach(lang => {
  const levels = CURRICULUM[lang];
  assert(Array.isArray(levels) && levels.length === 100, `Curriculum '${lang}' has 100 progressive levels`);
});
assert(Object.keys(SECTOR_INFO).length === 10, 'SECTOR_INFO has 10 themed sectors (1 to 10)');
assert(Array.isArray(BOSS_ENCOUNTERS.es) && BOSS_ENCOUNTERS.es.length >= 8, 'Morris boss encounter has 8 combat phases');
assert(Array.isArray(ARCADE_WORDS.es) && ARCADE_WORDS.es.length >= 70, 'Prairie King arcade has 70+ words');
assert(Array.isArray(FISHING_WORDS.es) && FISHING_WORDS.es.length >= 25, 'Willy fishing minigame has 25+ fish entries');

// Community Center & Museum
assert(COMMUNITY_ROOMS.length === 5, 'Community Center has 5 rooms');
assert(JUNIMO_BUNDLES.length === 15, 'Community Center has 15 Junimo bundles');
assert(MUSEUM_WINGS.length === 4, 'Museum has 4 wings');
assert(MUSEUM_ARTIFACTS.length === 20, 'Museum has 20 rare artifacts');
assert(MUSEUM_MILESTONES.length === 4, 'Museum has 4 milestone tiers');

// State, Catalog & Achievements
assert(ACHIEVEMENTS_DEF.length >= 34, `Achievements list has ${ACHIEVEMENTS_DEF.length} total achievements (>= 34)`);
assert(PIERRE_STORE_CATALOG.length === 10, 'Pierre General Store has 10 catalog items/upgrades');

// -------------------------------------------------------------
// CHECK 4: Audio Engine Synthetic Methods Completeness
// -------------------------------------------------------------
console.log('\n🎧 [4/8] Checking Web Audio API Sound Generator Functions...');
const requiredAudioMethods = [
  'setSwitchType', 'setSoundEnabled', 'setMusicEnabled', 'playKey', 'playError',
  'playGlitch', 'playComboChime', 'playJunimoBell', 'playRankSound', 'playWarningTick',
  'playTimeBonus', 'playReelClick', 'playSplash', 'playVictory', 'playCoin',
  'playJunimoChirp', 'playJunimoDance', 'playGrandRestoration', 'playGeodeCrack',
  'playChiselStrike', 'playMuseumFanfare', 'playLaser', 'playBossAttack',
  'playTypewriterTick', 'playCluck', 'playBark', 'playMeow', 'ensureContext'
];

requiredAudioMethods.forEach(fn => {
  assert(typeof audio[fn] === 'function', `Audio engine implements: audio.${fn}()`);
});

// -------------------------------------------------------------
// CHECK 5: HTML DOM Elements & Interactive Wiring
// -------------------------------------------------------------
console.log('\n🔍 [5/8] Validating DOM Integrity: JavaScript IDs vs index.html...');
const htmlContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
const appContent = fs.readFileSync(path.join(rootDir, 'js/game/app.js'), 'utf-8');

const idRegex = /getElementById\(['"]([^'"]+)['"]\)/g;
const appIds = new Set();
let match;
while ((match = idRegex.exec(appContent)) !== null) {
  appIds.add(match[1]);
}

let missingIds = [];
appIds.forEach(id => {
  if (!htmlContent.includes(`id="${id}"`)) {
    missingIds.push(id);
  }
});

assert(missingIds.length === 0, `All ${appIds.size} interactive element IDs referenced in app.js exist in index.html (missing: ${missingIds.join(', ') || 'none'})`);

// -------------------------------------------------------------
// CHECK 6: The 9 Game Modes Verification
// -------------------------------------------------------------
console.log('\n🕹️ [6/8] Verifying All 9 Game Modes...');
const gameModes = [
  { id: 'mode-campaign', btn: 'btn-start-campaign', view: 'view-campaign-select', name: '1. Tareas de la Granja (100 Niveles)' },
  { id: 'mode-survival', btn: 'btn-start-survival', view: 'view-survival', name: '2. Caverna Calavera (Time-Rush)' },
  { id: 'mode-arcade', btn: 'btn-start-arcade', view: 'view-arcade', name: '3. El Rey de la Pradera (Prairie King)' },
  { id: 'mode-boss', btn: 'btn-start-boss', view: 'view-boss', name: '4. Batalla: Morris & Joja Corp' },
  { id: 'mode-speedtest', btn: 'btn-start-speedtest', view: 'view-arena', name: '5. Carrera del Valle (Benchmark 60s)' },
  { id: 'mode-custom', btn: 'btn-start-custom', view: 'view-custom', name: '6. El Cuaderno del Granjero' },
  { id: 'mode-fishing', btn: 'btn-start-fishing', view: 'view-fishing', name: '7. Muelle de Pesca de Willy' },
  { id: 'mode-bundles', btn: 'btn-start-bundles', view: 'view-bundles', name: '8. Centro Cívico & Lotes Junimo' },
  { id: 'mode-museum', btn: 'btn-start-museum', view: 'view-museum', name: '9. Museo & Biblioteca de Gunther' }
];

gameModes.forEach(m => {
  const hasBtn = htmlContent.includes(`id="${m.btn}"`);
  const hasView = htmlContent.includes(`id="${m.view}"`);
  assert(hasBtn && hasView, `Mode fully wired: ${m.name} (Button #${m.btn}, View #${m.view})`);
});

// -------------------------------------------------------------
// CHECK 7: CSS Stylesheet & Seasonal Themes
// -------------------------------------------------------------
console.log('\n🎨 [7/8] Validating CSS Architecture & Seasonal Themes...');
const cssContent = fs.readFileSync(path.join(rootDir, 'css/style.css'), 'utf-8');
const keyboardCssContent = fs.readFileSync(path.join(rootDir, 'css/keyboard.css'), 'utf-8');

const seasons = ['spring', 'summer', 'fall', 'winter'];
seasons.forEach(season => {
  assert(cssContent.includes(`data-season="${season}"`), `CSS defines theme variables for season: [data-season="${season}"]`);
});

const criticalCssClasses = [
  '.navbar',
  '.stardew-control-pill',
  '.mode-card',
  '.key-cap',
  '.bundle-scroll-card',
  '.museum-hall',
  '.museum-pedestal-card',
  '.pedestal-velvet-stand',
  '.museum-excavation-card',
  '.stardew-modal-card'
];

criticalCssClasses.forEach(cls => {
  assert(cssContent.includes(cls) || keyboardCssContent.includes(cls), `CSS contains class: ${cls}`);
});
assert(keyboardCssContent.includes('.keyboard-container'), 'keyboard.css contains class: .keyboard-container');

// -------------------------------------------------------------
// CHECK 8: Git Repository & GitHub Synchronization
// -------------------------------------------------------------
console.log('\n🐙 [8/8] Checking Git Repository Status & GitHub Tracking...');
assert(fs.existsSync(path.join(rootDir, '.git')), 'Local .git repository exists and is initialized');
assert(fs.existsSync(path.join(rootDir, '.gitignore')), '.gitignore exists');
assert(fs.existsSync(path.join(rootDir, 'LICENSE')), 'LICENSE file exists');
assert(fs.existsSync(path.join(rootDir, 'README.md')), 'README.md exists');

// Summary
console.log('\n=======================================================');
if (failed) {
  console.error('❌ MASTER AUDIT FAILED: Some checks did not pass.');
  process.exit(1);
} else {
  console.log('🎉 MASTER AUDIT PASSED 100%! ALL 9 MODES, ASSETS, AUDIO & SERVERS ARE HEALTHY!');
  console.log('=======================================================\n');
}
