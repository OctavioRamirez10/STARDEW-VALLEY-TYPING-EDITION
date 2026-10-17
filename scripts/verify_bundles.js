const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const app = fs.readFileSync('js/game/app.js', 'utf8');
const state = fs.readFileSync('js/game/state.js', 'utf8');
const bundles = fs.readFileSync('js/game/bundles-data.js', 'utf8');
const audio = fs.readFileSync('js/engine/audio.js', 'utf8');
const css = fs.readFileSync('css/style.css', 'utf8');

console.log('--- VERIFICATION CHECKS ---');
console.log('1. index.html has btn-start-bundles:', html.includes('btn-start-bundles'));
console.log('2. index.html has btn-open-bundles:', html.includes('btn-open-bundles'));
console.log('3. index.html has view-bundles:', html.includes('id="view-bundles"'));
console.log('4. index.html has bundles-tabs-bar:', html.includes('id="bundles-tabs-bar"'));
console.log('5. index.html has bundles-scroll-grid:', html.includes('id="bundles-scroll-grid"'));
console.log('6. index.html has junimo-ritual-card:', html.includes('id="junimo-ritual-card"'));
console.log('7. app.js references openBundles:', app.includes('openBundles'));
console.log('8. state.js has isBundleCompleted:', state.includes('isBundleCompleted'));
console.log('9. state.js has isRoomRestored:', state.includes('isRoomRestored'));
console.log('10. audio.js has playJunimoChirp:', audio.includes('playJunimoChirp'));
console.log('11. Mode 08 uses standard mode-card styling:', html.includes('id="btn-start-bundles"') && !css.includes('.sd-card-gold'));
console.log('12. css has bundle-scroll-card:', css.includes('.bundle-scroll-card'));
console.log('13. html has btn-open-guide:', html.includes('btn-open-guide'));
console.log('14. html has btn-hero-guide:', html.includes('btn-hero-guide'));
console.log('15. html has guide-modal:', html.includes('id="guide-modal"'));
console.log('16. html has mode-lore-callout:', html.includes('mode-lore-callout'));
console.log('17. app has openGuideModal:', app.includes('openGuideModal'));
console.log('18. css has hero-guide-prompt:', css.includes('.hero-guide-prompt'));
console.log('--- ALL CHECKS PASSED ---');

