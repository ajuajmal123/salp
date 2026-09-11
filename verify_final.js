const fs = require('fs');
const tsFile = 'C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts';
let content = fs.readFileSync(tsFile, 'utf-8');

const regexStr = `name:\\s*["']([^"']+)["'][\\s\\S]*?category:\\s*["']Industrial["'][\\s\\S]*?imageUrl:\\s*["']([^"']+)["']`;
const matchAll = [...content.matchAll(new RegExp(regexStr, 'gi'))];

const unmapped = matchAll.filter(m => m[2] === 'MANUAL_MAPPING_REQUIRED').map(m => m[1]);

fs.writeFileSync('C:\\WayoraEnterprices\\salp\\final_unmapped_industrial.json', JSON.stringify(unmapped, null, 2));
console.log(`Remaining unmapped industrial projects: ${unmapped.length}`);
