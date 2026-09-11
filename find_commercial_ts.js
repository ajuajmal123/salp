const fs = require('fs');
const tsFile = 'C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts';
let content = fs.readFileSync(tsFile, 'utf-8');

const regexStr = `name:\\s*["']([^"']+)["'][\\s\\S]*?category:\\s*["']Commercial["'][\\s\\S]*?imageUrl:\\s*["']MANUAL_MAPPING_REQUIRED["']`;
const matchAll = [...content.matchAll(new RegExp(regexStr, 'gi'))];

const unmapped = matchAll.map(m => m[1]);
fs.writeFileSync('C:\\WayoraEnterprices\\salp\\commercial_unmapped_in_ts.json', JSON.stringify(unmapped, null, 2));

