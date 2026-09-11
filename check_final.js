const fs = require('fs');
const tsFile = 'C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts';
let content = fs.readFileSync(tsFile, 'utf-8');

const matches = [...content.matchAll(/name:\s*["']([^"']+)["'],\s*\n\s*category:\s*["']Institutional["'][\\s\\S]*?imageUrl:\s*["']([^"']+)["']/g)];
let unmappedCount = 0;
let mappedCount = 0;

console.log('--- Unmapped Institutional Projects ---');
matches.forEach(m => {
   if (m[2] === "MANUAL_MAPPING_REQUIRED") {
      unmappedCount++;
      console.log(m[1]);
   } else {
      mappedCount++;
   }
});

console.log(`\nTotal Mapped: ${mappedCount}`);
console.log(`Total Unmapped: ${unmappedCount}`);
