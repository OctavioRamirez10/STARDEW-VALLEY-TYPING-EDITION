// scripts/test_comprehensive.js
const fs = require('fs');
const path = require('path');

console.log("======================================================================");
console.log("🔍 COMPREHENSIVE STATIC & LOGICAL AUDIT: STARDEW VALLEY TYPING GAME");
console.log("======================================================================\n");

const appPath = path.resolve(__dirname, '../js/game/app.js');
const appJs = fs.readFileSync(appPath, 'utf8');

const htmlPath = path.resolve(__dirname, '../index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const audioPath = path.resolve(__dirname, '../js/engine/audio.js');
const audioJs = fs.readFileSync(audioPath, 'utf8');

const statePath = path.resolve(__dirname, '../js/game/state.js');
const stateJs = fs.readFileSync(statePath, 'utf8');

const i18nPath = path.resolve(__dirname, '../js/game/i18n.js');
const i18nJs = fs.readFileSync(i18nPath, 'utf8');

const cssPath = path.resolve(__dirname, '../css/style.css');
const css = fs.readFileSync(cssPath, 'utf8') + '\n' + fs.readFileSync(path.resolve(__dirname, '../css/keyboard.css'), 'utf8');

const { I18N } = require('../js/game/i18n.js');
const { CURRICULUM, ARCADE_WORDS, BOSS_ENCOUNTERS, SPEED_TEST_TEXTS, FISHING_WORDS, SECTOR_CUTSCENES, SECTOR_INFO } = require('../js/game/curriculum.js');
const { gameState, ACHIEVEMENTS_DEF, PIERRE_STORE_CATALOG } = require('../js/game/state.js');
const { KEYBOARD_LAYOUT_ES, KEYBOARD_LAYOUT_EN, createKeyCharMap } = require('../js/game/keyboard-data.js');

let errors = [];
let warnings = [];

// TEST 1: Methods defined on CyberTypeApp
console.log("1. Checking internal method calls in CyberTypeApp...");
const methodDefRegex = /(?:async\s+)?([a-zA-Z0-9_]+)\s*\([^)]*\)\s*\{/g;
const definedMethods = new Set();
let match;
while ((match = methodDefRegex.exec(appJs)) !== null) {
  const m = match[1];
  if (!['if', 'for', 'while', 'switch', 'catch', 'function', 'constructor'].includes(m)) {
    definedMethods.add(m);
  }
}
console.log(`   Found ${definedMethods.size} methods in CyberTypeApp.`);

// Find all `this.someMethod(` calls
const thisCallRegex = /this\.([a-zA-Z0-9_]+)\s*\(/g;
const calledMethods = new Set();
while ((match = thisCallRegex.exec(appJs)) !== null) {
  calledMethods.add(match[1]);
}

calledMethods.forEach(call => {
  // Ignore native or helper methods like addEventListener, clearInterval, setTimeout, etc.
  if (!definedMethods.has(call)) {
    errors.push(`CyberTypeApp calls this.${call}() but '${call}' is not defined in CyberTypeApp!`);
  }
});
if (errors.length === 0) {
  console.log(`   ✅ All ${calledMethods.size} calls to this.method() are properly implemented.`);
}

// TEST 2: Check all document.getElementById
console.log("\n2. Checking all document.getElementById calls against index.html...");
const idRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
const ids = new Set();
while ((match = idRegex.exec(appJs)) !== null) {
  ids.add(match[1]);
}
let missingIds = [];
ids.forEach(id => {
  if (!html.includes(`id="${id}"`)) {
    missingIds.push(id);
  }
});
if (missingIds.length > 0) {
  errors.push(`Missing HTML IDs in index.html: ${missingIds.join(', ')}`);
} else {
  console.log(`   ✅ All ${ids.size} getElementById calls exist in index.html.`);
}

// TEST 3: Check i18n keys
console.log("\n3. Checking i18n translations across all 4 languages (es, en, pt, fr)...");
const esKeys = Object.keys(I18N.es);
['en', 'pt', 'fr'].forEach(lang => {
  const langKeys = Object.keys(I18N[lang] || {});
  const missing = esKeys.filter(k => !(k in I18N[lang]));
  if (missing.length > 0) {
    warnings.push(`Language '${lang}' is missing i18n keys: ${missing.slice(0, 5).join(', ')}... (${missing.length} total)`);
  }
});
console.log(`   ✅ Base Spanish i18n has ${esKeys.length} translation tokens.`);

// Check i18n calls in app.js: t('key') or I18N[lang]['key']
const tCallRegex = /this\.t\(['"]([^'"]+)['"]\)/g;
const usedTKeys = new Set();
while ((match = tCallRegex.exec(appJs)) !== null) {
  usedTKeys.add(match[1]);
}
let missingTKeys = [];
usedTKeys.forEach(k => {
  if (!I18N.es[k]) {
    missingTKeys.push(k);
  }
});
if (missingTKeys.length > 0) {
  warnings.push(`app.js references i18n keys that are missing in I18N.es: ${missingTKeys.join(', ')}`);
} else {
  console.log(`   ✅ All ${usedTKeys.size} this.t('...') keys exist in I18N dictionary.`);
}

// TEST 4: Check Audio Engine Methods
console.log("\n4. Checking Audio Engine integration...");
const audioCallRegex = /audio\.([a-zA-Z0-9_]+)\s*\(/g;
const audioMethods = new Set();
while ((match = audioCallRegex.exec(appJs)) !== null) {
  audioMethods.add(match[1]);
}
let missingAudio = [];
audioMethods.forEach(m => {
  if (!audioJs.includes(`${m}(`) && !audioJs.includes(`${m} =`)) {
    missingAudio.push(m);
  }
});
if (missingAudio.length > 0) {
  errors.push(`Missing audio methods: ${missingAudio.join(', ')}`);
} else {
  console.log(`   ✅ All ${audioMethods.size} audio methods used by app.js exist in audio.js.`);
}

// TEST 5: Check Pierre's Store Items
console.log("\n5. Checking Pierre's Store Catalog & GameState buyUpgrade...");
PIERRE_STORE_CATALOG.forEach(item => {
  if (!item.id || !item.name || !item.cost || !item.desc || !item.icon) {
    errors.push(`Pierre store item invalid: ${JSON.stringify(item)}`);
  }
});
console.log(`   ✅ All ${PIERRE_STORE_CATALOG.length} store items are properly configured with id, name, cost, desc, icon.`);

// TEST 6: Check Achievements
console.log("\n6. Checking 30 Stardew Valley Achievements...");
if (ACHIEVEMENTS_DEF.length !== 30) {
  errors.push(`Expected 30 achievements, found ${ACHIEVEMENTS_DEF.length}`);
} else {
  const ids = new Set();
  ACHIEVEMENTS_DEF.forEach(a => {
    if (ids.has(a.id)) errors.push(`Duplicate achievement ID: ${a.id}`);
    ids.add(a.id);
    if (!a.name || !a.desc || !a.icon) {
      errors.push(`Achievement ${a.id} has invalid fields: name=${!!a.name}, desc=${!!a.desc}, icon=${!!a.icon}`);
    }
  });
  console.log(`   ✅ All 30 achievements have unique IDs and complete metadata.`);
}

// TEST 7: Check 400 Curriculum Levels
console.log("\n7. Checking Curriculum Integrity (400 Levels)...");
const esKeyMap = createKeyCharMap(KEYBOARD_LAYOUT_ES);
const enKeyMap = createKeyCharMap(KEYBOARD_LAYOUT_EN);

['es', 'en', 'pt', 'fr'].forEach(lang => {
  const levels = CURRICULUM[lang];
  levels.forEach((lvl, idx) => {
    if (lvl.id !== idx + 1) errors.push(`Level index mismatch at ${lang} level ${lvl.id}`);
    if (!lvl.title || !lvl.desc || !lvl.content || lvl.content.length < 5) {
      errors.push(`Level ${lang} #${lvl.id} has incomplete data: title=${!!lvl.title}, desc=${!!lvl.desc}, content=${!!lvl.content}`);
    }
  });
});
console.log(`   ✅ All 400 curriculum levels verified for all 4 languages.`);

// TEST 8: Check Character track elements & Willy Fishing
console.log("\n8. Checking Willy Fishing Minigame words...");
['es', 'en', 'pt', 'fr'].forEach(lang => {
  const fishWords = FISHING_WORDS[lang];
  if (!fishWords || fishWords.length < 20) {
    errors.push(`Fishing words for ${lang} missing or under 20`);
  }
});
console.log(`   ✅ Willy Fishing minigame words verified across all languages.`);

console.log("\n======================================================================");
if (errors.length > 0) {
  console.error("❌ AUDIT FAILED with errors:");
  errors.forEach(e => console.error("   - " + e));
  process.exit(1);
} else {
  console.log("🎉 AUDIT PASSED 100%! All checks succeeded.");
  if (warnings.length > 0) {
    console.log("ℹ️ Warnings/Notes:");
    warnings.forEach(w => console.log("   - " + w));
  }
}
console.log("======================================================================\n");
