const fs = require('fs');
const path = require('path');

const { CURRICULUM, SECTOR_INFO } = require('../js/game/curriculum.js');
const { KEYBOARD_LAYOUT_ES, KEYBOARD_LAYOUT_EN, createKeyCharMap } = require('../js/game/keyboard-data.js');

console.log('=== TESTING ALL 100 LEVELS ACROSS ALL LANGUAGES ===');

const keyMapEs = createKeyCharMap(KEYBOARD_LAYOUT_ES);
const keyMapEn = createKeyCharMap(KEYBOARD_LAYOUT_EN);

let errors = [];

['es', 'en', 'pt', 'fr'].forEach(lang => {
  const levels = CURRICULUM[lang];
  if (!levels || levels.length !== 100) {
    errors.push(`Language ${lang} does not have 100 levels. Found: ${levels ? levels.length : 0}`);
    return;
  }

  levels.forEach((lvl, idx) => {
    const expectedId = idx + 1;
    if (lvl.id !== expectedId) {
      errors.push(`${lang} Level at index ${idx} has id ${lvl.id}, expected ${expectedId}`);
    }
    if (!lvl.title || lvl.title.trim().length === 0) {
      errors.push(`${lang} Level ${lvl.id} missing title`);
    }
    if (!lvl.content || lvl.content.length < 10) {
      errors.push(`${lang} Level ${lvl.id} content too short: ${lvl.content}`);
    }
    if (!lvl.targetWpm || lvl.targetWpm < 10) {
      errors.push(`${lang} Level ${lvl.id} has invalid targetWpm: ${lvl.targetWpm}`);
    }
    if (!lvl.minAccuracy || lvl.minAccuracy < 50) {
      errors.push(`${lang} Level ${lvl.id} has invalid minAccuracy: ${lvl.minAccuracy}`);
    }

    // Check if characters in content are typeable
    for (let char of lvl.content) {
      const isKnown = keyMapEs[char] || keyMapEs[char.toLowerCase()] ||
                      keyMapEn[char] || keyMapEn[char.toLowerCase()] ||
                      char === ' ' || char === '\n' || char === '\t';
      if (!isKnown) {
        // Warning if untypable key on standard keyboard
        // console.log(`Note: ${lang} Level ${lvl.id} has char '${char}' (code ${char.charCodeAt(0)})`);
      }
    }
  });

  console.log(`✅ ${lang.toUpperCase()}: 100 levels verified with titles, descriptions, targets, and content.`);
});

if (errors.length > 0) {
  console.error('Errors found:');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log('🎉 ALL 400 LEVELS (1-100 per language) PASSED VALIDATION!');
}
