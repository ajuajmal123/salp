const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\industrial');
const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

// Find all unique project names that have multiple directories (Name, Name 1, Name 2, etc.)
// First, let's group all directories by their base name.
// Base name is the directory name without trailing " 1", " 2", " 3", etc.
const groupDirs = {};
dirs.forEach(d => {
    let baseName = d.replace(/\s+\d+$/, '').trim(); // Remove trailing number
    
    // Exception for ADITHYA WAREHOUSE, we leave it since it's already mapped
    if (baseName === "ADITHYA WAREHOUSE") return;
    
    if (!groupDirs[baseName]) groupDirs[baseName] = [];
    groupDirs[baseName].push(d);
});

// Sort the directories within each base name group so "Name" comes before "Name 2" before "Name 3"
for(const base in groupDirs) {
    groupDirs[base].sort((a, b) => {
        let numA = parseInt(a.match(/\d+$/) ? a.match(/\d+$/)[0] : 1);
        let numB = parseInt(b.match(/\d+$/) ? b.match(/\d+$/)[0] : 1);
        return numA - numB;
    });
}

// Now replace in `projects.ts`
// We will iterate over each baseName, find all matching projects in `projects.ts`, and map the sorted folders sequentially.
let overallMatches = 0;

for (const [baseName, folderList] of Object.entries(groupDirs)) {
    // If the baseName doesn't appear in the ts file, we might skip or let regex fail
    
    // First, let's reset all entries of this baseName in projects.ts to MANUAL_MAPPING_REQUIRED and [] gallery.
    const safeName = baseName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const wipeRegex = new RegExp(`(name:\\s*["']${safeName}["'][\\s\\S]*?category:\\s*["']Industrial["'])([\\s\\S]*?imageUrl:\\s*)["'].*?["']([\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`, 'gi');
    
    content = content.replace(wipeRegex, (match, p1, p2, p3) => {
        return `${p1}${p2}"MANUAL_MAPPING_REQUIRED"${p3}[]`;
    });
    
    // Now replace sequentially
    const replaceRegex = new RegExp(`(name:\\s*["']${safeName}["'][\\s\\S]*?category:\\s*["']Industrial["'])([\\s\\S]*?imageUrl:\\s*["']MANUAL_MAPPING_REQUIRED["'])([\\s\\S]*?gallery:\\s*)(\\[\\])`, 'i');
    
    folderList.forEach(folderName => {
        const dPath = path.join(imageDir, folderName);
        const files = fs.readdirSync(dPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
        if (files.length === 0) return;
        files.sort();
        
        const imageUrl = `"/project/industrial/${folderName}/${files[0]}"`;
        const galleryItems = files.map(f => `"/project/industrial/${folderName}/${f}"`).join(',\n      ');
        const galleryStr = `[\n      ${galleryItems}\n    ]`;
        
        let localMatch = false;
        content = content.replace(replaceRegex, (match, p1, p2, p3, p4) => {
            localMatch = true;
            return `${p1}${p2.replace('"MANUAL_MAPPING_REQUIRED"', imageUrl)}${p3}${galleryStr}`;
        });
        
        if (localMatch) {
            overallMatches++;
            console.log(`Mapped folder "${folderName}" to project "${baseName}"`);
        } else {
            console.log(`Failed to map folder "${folderName}" to project "${baseName}"`);
        }
    });
}

fs.writeFileSync(tsFile, content);
console.log(`Fully mapped sequential folders. Total folders mapped: ${overallMatches}`);
