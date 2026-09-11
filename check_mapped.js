const fs = require('fs');
const tsFile = 'C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts';
let c = fs.readFileSync(tsFile, 'utf-8');

const m = [...c.matchAll(/name:\s*["'](.*?)["'],\s*\n\s*category:\s*["']Institutional["'][\s\S]*?imageUrl:\s*["'](.*?)["']/g)];

console.log('Total Institutional projects found by regex: ', m.length);
console.log('Unmapped: ', m.filter(x => x[2] === 'MANUAL_MAPPING_REQUIRED').map(x => x[1]));
console.log('Mapped: ', m.filter(x => x[2] !== 'MANUAL_MAPPING_REQUIRED').length);
