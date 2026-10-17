const fs = require('fs');

const terms = ['cyber', 'netrunner', 'matrix', 'neon', 'hacker', 'protocolo', 'drill', 'glitch'];
const files = ['index.html', 'js/game/app.js', 'js/game/state.js', 'js/game/i18n.js', 'js/engine/audio.js', 'css/style.css', 'css/keyboard.css'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    terms.forEach(t => {
      if (l.toLowerCase().includes(t)) {
        console.log(`${f}:${i + 1} -> [${t}] ${l.trim().slice(0, 80)}`);
      }
    });
  });
});
