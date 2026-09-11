const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\industrial');
const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

// Find all Industrial projects missing images
const regexStr = `name:\\s*["']([^"']+)["'][\\s\\S]*?category:\\s*["']Industrial["'][\\s\\S]*?imageUrl:\\s*["']([^"']+)["']`;
const matchAll = [...content.matchAll(new RegExp(regexStr, 'gi'))];
const missing = matchAll.filter(m => m[2] === 'MANUAL_MAPPING_REQUIRED').map(m => m[1]);

console.log("Projects missing images (" + missing.length + "):");
let counts = {};
missing.forEach(m => {
    counts[m] = (counts[m] || 0) + 1;
});
for(const k in counts) {
    console.log(`- ${k} (x${counts[k]})`);
}

// Check which folders are unused
console.log("\nFolders not used in the TS file:");
let unused = [];
dirs.forEach(d => {
    if (!content.includes(`/project/industrial/${d}/`)) {
        // Double check if it has images
        const dPath = path.join(imageDir, d);
        if (fs.readdirSync(dPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i)).length > 0) {
            unused.push(d);
        }
    }
});
unused.forEach(u => console.log(`- ${u}`));
