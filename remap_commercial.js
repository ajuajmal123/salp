const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\commercial');
if (!fs.existsSync(imageDir)) {
    console.log("Directory does not exist:", imageDir);
    process.exit(0);
}

const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

// Group all directories by their base name.
const groupDirs = {};
dirs.forEach(d => {
    let baseName = d.replace(/\s+\d+$/, '').trim(); // Remove trailing number
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

// Map sequentially to 'Commercial' category
let overallMatches = 0;
let unmappedFolders = [];

for (const [baseName, folderList] of Object.entries(groupDirs)) {
    const safeName = baseName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // First, wipe existing specific ones for this baseName if they have MANUAL_MAPPING_REQUIRED or existing images
    const wipeRegex = new RegExp(`(name:\\s*["']${safeName}["'][\\s\\S]*?category:\\s*["']Commercial["'])([\\s\\S]*?imageUrl:\\s*)["'].*?["']([\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`, 'gi');
    
    content = content.replace(wipeRegex, (match, p1, p2, p3) => {
        return `${p1}${p2}"MANUAL_MAPPING_REQUIRED"${p3}[]`;
    });
    
    // Now replace sequentially
    const replaceRegex = new RegExp(`(name:\\s*["']${safeName}["'][\\s\\S]*?category:\\s*["']Commercial["'])([\\s\\S]*?imageUrl:\\s*["']MANUAL_MAPPING_REQUIRED["'])([\\s\\S]*?gallery:\\s*)(\\[\\])`, 'i');
    
    folderList.forEach(folderName => {
        const dPath = path.join(imageDir, folderName);
        const files = fs.readdirSync(dPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
        if (files.length === 0) return;
        files.sort();
        
        const imageUrl = `"/project/commercial/${folderName}/${files[0]}"`;
        const galleryItems = files.map(f => `"/project/commercial/${folderName}/${f}"`).join(',\n      ');
        const galleryStr = `[\n      ${galleryItems}\n    ]`;
        
        let localMatch = false;
        content = content.replace(replaceRegex, (match, p1, p2, p3, p4) => {
            localMatch = true;
            return `${p1}${p2.replace('"MANUAL_MAPPING_REQUIRED"', imageUrl)}${p3}${galleryStr}`;
        });
        
        if (localMatch) {
            overallMatches++;
        } else {
            unmappedFolders.push(folderName);
        }
    });
}

fs.writeFileSync(tsFile, content);
console.log(`Fully mapped sequential folders. Total mapped: ${overallMatches}`);
if (unmappedFolders.length > 0) {
    console.log("Unmapped folders:", unmappedFolders);
} else {
    console.log("All configured folders perfectly mapped!");
}
