const { CURRICULUM } = require('../js/game/curriculum.js');
const { GameState } = require('../js/game/state.js');

console.log('=== SIMULATING 1-100 LEVEL PROGRESSION ===');

const state = new GameState();
const lang = 'es';
const levels = CURRICULUM[lang];

let unlockedFailures = [];

for (let i = 0; i < levels.length; i++) {
  const lvl = levels[i];
  const levelId = lvl.id;

  // 1. Check if unlocked
  const isUnlocked = state.isLevelUnlocked(lang, levelId);
  if (!isUnlocked) {
    unlockedFailures.push(`Level ${levelId} was not unlocked after finishing level ${levelId - 1}!`);
    break;
  }

  // 2. Simulate typing and completing level with 5 stars
  const targetWpm = lvl.targetWpm || 30;
  const simulatedWpm = targetWpm + 10;
  const simulatedAcc = 98;
  const stars = 5;

  state.saveLevelStars(lang, levelId, stars, simulatedWpm, simulatedAcc);
  state.addXp(350);

  // 3. Verify stars saved
  const savedStars = state.getLevelStars(lang, levelId);
  if (savedStars !== 5) {
    unlockedFailures.push(`Level ${levelId} stars not saved correctly: got ${savedStars}`);
    break;
  }
}

if (unlockedFailures.length > 0) {
  console.error('❌ Campaign progression failed:');
  unlockedFailures.forEach(f => console.error('  - ' + f));
  process.exit(1);
} else {
  console.log(`✅ All 100 levels sequentially unlocked, completed, and verified with 5 stars!`);
  console.log(`Total stars earned: ${state.getTotalStars(lang)} / 500`);
  console.log(`Completed levels count: ${state.getCompletedLevelsCount(lang)} / 100`);
}
