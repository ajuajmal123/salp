const fs = require('fs');
const code = fs.readFileSync('src/data/projects.ts', 'utf8');

const matches = code.match(/category:\s*(?:"|')Residential(?:"|')/g);
console.log(`Total Residential projects in projects.ts: ${matches ? matches.length : 0}`);

const rx = /\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*category:\s*"Residential"[\s\S]*?(gallery:\s*\[[\s\S]*?\])\s*\}/g;
let c = 0;
while(rx.exec(code)) c++;
console.log(`Regex parsed projects: ${c}`);
