const fs = require('fs');
const code = fs.readFileSync('js/game/app.js', 'utf8');
const matches = [...code.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)].map(m => m[1]);
const unique = [...new Set(matches)].sort();
console.log("Total unique IDs queried in app.js:", unique.length);
console.log(JSON.stringify(unique, null, 2));
