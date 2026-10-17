// scripts/verify_museum.js
// Automated verification for Gunther's Museum & Library mode

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🧪 [VERIFY MUSEUM] Starting comprehensive verification of Museum & Archaeology Mode...\n');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failed = true;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Verify Museum Data
import { MUSEUM_WINGS, MUSEUM_ARTIFACTS, MUSEUM_MILESTONES } from '../js/game/museum-data.js';

assert(Array.isArray(MUSEUM_WINGS) && MUSEUM_WINGS.length === 4, 'MUSEUM_WINGS has 4 wings (fossils, minerals, relics, curios)');
assert(Array.isArray(MUSEUM_ARTIFACTS) && MUSEUM_ARTIFACTS.length === 20, 'MUSEUM_ARTIFACTS has exactly 20 artifacts');
assert(Array.isArray(MUSEUM_MILESTONES) && MUSEUM_MILESTONES.length === 4, 'MUSEUM_MILESTONES has 4 milestone tiers (5, 10, 15, 20)');

// Check each wing has 5 artifacts
['fossils', 'minerals', 'relics', 'curios'].forEach(wingId => {
  const count = MUSEUM_ARTIFACTS.filter(a => a.wingId === wingId).length;
  assert(count === 5, `Wing '${wingId}' contains exactly 5 artifacts`);
});

// Check artifact prompts and descriptions
MUSEUM_ARTIFACTS.forEach(art => {
  assert(art.id && art.name && art.icon && art.desc && art.prompt && art.source, `Artifact '${art.id}' has all required properties`);
  assert(art.prompt.length >= 10, `Artifact '${art.id}' prompt has valid typing length (${art.prompt.length} chars)`);
});

// 2. Verify State Integration
import { gameState, ACHIEVEMENTS_DEF } from '../js/game/state.js';

const museumAchIds = ['first_artifact', 'artifacts_5', 'artifacts_10', 'museum_complete'];
museumAchIds.forEach(achId => {
  const ach = ACHIEVEMENTS_DEF.find(a => a.id === achId);
  assert(!!ach, `Achievement '${achId}' exists in ACHIEVEMENTS_DEF`);
});

// Test state museum methods
assert(typeof gameState.isArtifactDonated === 'function', 'gameState.isArtifactDonated is defined');
assert(typeof gameState.donateArtifact === 'function', 'gameState.donateArtifact is defined');
assert(typeof gameState.getDonatedArtifactsCount === 'function', 'gameState.getDonatedArtifactsCount is defined');

const initialCount = gameState.getDonatedArtifactsCount();
assert(typeof initialCount === 'number', `Initial donated count is a number: ${initialCount}`);

// 3. Verify Audio Integration
import { audio } from '../js/engine/audio.js';
assert(typeof audio.playChiselStrike === 'function', 'audio.playChiselStrike is defined');
assert(typeof audio.playGeodeCrack === 'function', 'audio.playGeodeCrack is defined');
assert(typeof audio.playMuseumFanfare === 'function', 'audio.playMuseumFanfare is defined');

// 4. Verify index.html contains Museum UI elements
const htmlContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
const requiredHtmlIds = [
  'btn-open-museum',
  'museum-nav-count',
  'btn-start-museum',
  'view-museum',
  'btn-back-from-museum',
  'museum-donated-stat',
  'museum-curator-banner',
  'curator-speech-text',
  'museum-milestones-row',
  'museum-tabs-bar',
  'museum-pedestals-grid',
  'museum-excavation-card',
  'excavation-icon-preview',
  'excavation-artifact-name',
  'excavation-wing-tag',
  'excavation-prompt-desc',
  'btn-close-excavation',
  'excavation-acc-val',
  'excavation-stream-display',
  'museum-keyboard-container'
];

requiredHtmlIds.forEach(id => {
  assert(htmlContent.includes(`id="${id}"`), `index.html contains element #${id}`);
});

// 5. Verify style.css contains Museum CSS
const cssContent = fs.readFileSync(path.join(rootDir, 'css', 'style.css'), 'utf-8');
const requiredCssClasses = [
  '.museum-hall',
  '.museum-curator-banner',
  '.curator-avatar',
  '.museum-milestones-row',
  '.museum-milestone-chip',
  '.museum-tabs-bar',
  '.museum-tab-btn',
  '.museum-pedestals-grid',
  '.museum-pedestal-card',
  '.pedestal-velvet-stand',
  '.pedestal-artifact-icon',
  '.pedestal-nameplate',
  '.pedestal-desc',
  '.museum-excavation-card'
];

requiredCssClasses.forEach(cls => {
  assert(cssContent.includes(cls), `style.css contains rule for ${cls}`);
});

// 6. Verify app.js integration
const appContent = fs.readFileSync(path.join(rootDir, 'js', 'game', 'app.js'), 'utf-8');
assert(appContent.includes("from './museum-data.js'"), 'app.js imports museum-data.js');
assert(appContent.includes('openMuseum('), 'app.js defines openMuseum()');
assert(appContent.includes('startExcavation('), 'app.js defines startExcavation()');
assert(appContent.includes('handleExcavationKeystroke('), 'app.js defines handleExcavationKeystroke()');
assert(appContent.includes('completeExcavation()'), 'app.js defines completeExcavation()');
assert(appContent.includes('this.currentMode === \'museum\''), 'app.js keydown handler checks for museum mode');
assert(appContent.includes('museum-keyboard-container'), 'app.js renders museum virtual keyboard');

if (failed) {
  console.error('\n❌ Museum verification failed with errors.');
  process.exit(1);
} else {
  console.log('\n🎉 ALL 40+ MUSEUM VERIFICATION CHECKS PASSED PERFECTLY!\n');
}
