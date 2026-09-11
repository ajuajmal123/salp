const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\commercial');
if (!fs.existsSync(imageDir)) process.exit(0);

const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
let content = fs.readFileSync(tsFile, 'utf-8');

const groupDirs = {};
dirs.forEach(d => {
    let baseName = d.replace(/\s+\d+$/, '').trim();
    if (!groupDirs[baseName]) groupDirs[baseName] = [];
    groupDirs[baseName].push(d);
});

let unmappedFolders = [];
for (const [baseName, folderList] of Object.entries(groupDirs)) {
    const safeName = baseName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const replaceRegex = new RegExp(`name:\\s*["']${safeName}["'][\\s\\S]*?category:\\s*["']Commercial["']`, 'i');
    
    // Check if baseName actually matches anything in projects.ts under Commercial
    if (!content.match(replaceRegex)) {
        folderList.forEach(f => unmappedFolders.push(f));
    }
}

fs.writeFileSync('C:\\WayoraEnterprices\\salp\\commercial_unmapped.json', JSON.stringify(unmappedFolders, null, 2));
console.log("Saved unmapped folders to JSON");
