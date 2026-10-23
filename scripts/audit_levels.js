const { CURRICULUM } = require('../js/game/curriculum.js');
const { KEYBOARD_LAYOUT_ES, KEYBOARD_LAYOUT_EN, createKeyCharMap } = require('../js/game/keyboard-data.js');

const keyMapEs = createKeyCharMap(KEYBOARD_LAYOUT_ES);
const keyMapEn = createKeyCharMap(KEYBOARD_LAYOUT_EN);

['es', 'en', 'pt', 'fr'].forEach(lang => {
  console.log(`\n=== AUDITING ALL 100 LEVELS IN ${lang.toUpperCase()} ===`);
  const missing = new Set();
  const keyMap = lang === 'en' ? keyMapEn : keyMapEs;

  CURRICULUM[lang].forEach(lvl => {
    for (const c of lvl.content) {
      const resolved = keyMap[c] || keyMap[c.toLowerCase()] || c === ' ';
      if (!resolved) {
        missing.add(c);
      }
    }
  });

  if (missing.size > 0) {
    console.log(`Missing definitions in ${lang}:`, Array.from(missing).map(c => `'${c}' (${c.charCodeAt(0)})`).join(', '));
  } else {
    console.log(`✅ All characters in ${lang.toUpperCase()} have mappings!`);
  }
});
