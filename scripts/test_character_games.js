import fs from 'fs';
import { FISHING_WORDS } from '../js/game/curriculum.js';

console.log("==========================================================");
console.log("🌾 TESTING CHARACTER ANIMATIONS & WILLY'S FISHING MINIGAME");
console.log("==========================================================");

// 1. Check FISHING_WORDS
console.log("1. Checking Fishing Words Curriculum:");
['es', 'en', 'pt', 'fr'].forEach(lang => {
  if (FISHING_WORDS[lang] && FISHING_WORDS[lang].length >= 30) {
    console.log(`   ✅ Language '${lang}': ${FISHING_WORDS[lang].length} fishing words available.`);
  } else {
    console.error(`   ❌ Language '${lang}' missing or insufficient words.`);
    process.exit(1);
  }
});

// 2. Check HTML Elements
console.log("\n2. Checking HTML IDs for Characters & Fishing:");
const html = fs.readFileSync('./index.html', 'utf8');
const requiredIds = [
  'btn-start-fishing',
  'btn-back-from-fishing',
  'view-fishing',
  'fishing-theater',
  'willy-character',
  'willy-avatar',
  'willy-emote',
  'willy-speech',
  'swimming-fish-wrapper',
  'swimming-fish',
  'fish-splash',
  'fish-name-tag',
  'reel-tension-val',
  'reel-gauge-fill',
  'fishing-target-word',
  'fishing-keyboard-container',
  'character-action-track',
  'character-picker-group',
  'runner-character-wrapper',
  'runner-character-avatar',
  'character-emote-bubble',
  'plot-1',
  'plot-2',
  'plot-3',
  'plot-4',
  'meadow-shipping-bin'
];

let missing = 0;
requiredIds.forEach(id => {
  if (html.includes(`id="${id}"`)) {
    console.log(`   ✅ Found #${id}`);
  } else {
    console.error(`   ❌ Missing #${id}`);
    missing++;
  }
});

if (missing > 0) {
  console.error(`Failed with ${missing} missing IDs.`);
  process.exit(1);
}

// 3. Check CSS rules for animations
console.log("\n3. Checking CSS for Character & Fishing Animations:");
const css = fs.readFileSync('./css/style.css', 'utf8');
const expectedRules = [
  '.character-action-track',
  '.runner-character-wrapper',
  '.runner-character-wrapper.step-hop',
  '.runner-character-wrapper.victory-leap',
  '.character-emote',
  '.crop-plot.blooming',
  '.landmark-bin.celebrate',
  '.fishing-theater',
  '.willy-character.reeling',
  '.willy-character.catching',
  '.swimming-fish-wrapper',
  '.fish-splash.splashing',
  '.reel-gauge-fill'
];

expectedRules.forEach(rule => {
  if (css.includes(rule)) {
    console.log(`   ✅ CSS rule verified: ${rule}`);
  } else {
    console.error(`   ❌ Missing CSS rule: ${rule}`);
    process.exit(1);
  }
});

// 4. Check App methods
console.log("\n4. Checking app.js Methods:");
const appCode = fs.readFileSync('./js/game/app.js', 'utf8');
const methods = [
  'startFishing',
  'stopFishing',
  'spawnNextFish',
  'renderFishingWord',
  'highlightFishingKey',
  'updateFishingGauge',
  'handleFishingKeystroke',
  'bindCharacterPicker',
  'triggerCharacterEmote'
];

methods.forEach(m => {
  if (appCode.includes(`${m}(`)) {
    console.log(`   ✅ app.js method found: ${m}()`);
  } else {
    console.error(`   ❌ Missing method: ${m}()`);
    process.exit(1);
  }
});

console.log("\n==========================================================");
console.log("🎉 ALL CHARACTER GAMES & ANIMATION CHECKS PASSED 100%!");
console.log("==========================================================");
