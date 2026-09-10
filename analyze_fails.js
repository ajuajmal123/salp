const fs = require('fs');

const tsFilePath = 'src/data/projects.ts';
let code = fs.readFileSync(tsFilePath, 'utf8');

const publicDir = 'public/project/residential';
const folders = fs.readdirSync(publicDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

const blocks = code.split(/[\r\n]+  \},?[\r\n]+/);

const sanitize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

let mapped = [];
let unmapped_names = [];
let all_residential_names = [];

blocks.forEach(block => {
  if (block.includes('category: "Residential"')) {
    const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
    if (nameMatch) {
      const name = nameMatch[1];
      all_residential_names.push(name);
      const sanitizedName = sanitize(name);
      
      let findFolder = folders.find(f => sanitize(f) === sanitizedName);
      if (!findFolder) {
        findFolder = folders.find(f => sanitize(f).includes(sanitizedName) || sanitizedName.includes(sanitize(f)));
      }
      
      if (findFolder) {
        mapped.push(name);
      } else {
        unmapped_names.push(name);
      }
    }
  }
});

console.log("Total Residential: " + all_residential_names.length);
console.log("Mapped: " + mapped.length);
console.log("\nUnmapped names:\n" + unmapped_names.join('\n'));
console.log("\nUnmapped Folders:\n" + folders.filter(f => !mapped.some(m => {
  const sn = sanitize(m);
  const sf = sanitize(f);
  return sn === sf || sn.includes(sf) || sf.includes(sn);
})).join('\n'));
