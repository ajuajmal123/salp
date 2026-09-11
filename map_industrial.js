const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\industrial');
const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

let matchesCount = 0;
let unmappedDirs = [];

dirs.forEach(dir => {
    const dirPath = path.join(imageDir, dir);
    const files = fs.readdirSync(dirPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
    if (files.length === 0) return;
    files.sort();
    
    // Escape single quotes in filenames by re-checking or just assume safe. 
    // Usually images don't have single quotes but let's be careful.
    const imageUrl = `/project/industrial/${dir}/${files[0]}`;
    const galleryItems = files.map(f => `"/project/industrial/${dir}/${f}"`).join(',\n      ');
    const galleryStr = `[\n      ${galleryItems}\n    ]`;
    
    let safeName = dir.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regexStr = `(name:\\s*["']${safeName}["'][\\s\\S]*?category:\\s*["']Industrial["'])([\\s\\S]*?imageUrl:\\s*["']).*?(["'])([\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`;
    const regex = new RegExp(regexStr, 'i');
    
    let matchedInDir = false;
    content = content.replace(regex, (match, p1, p2, p3, p4) => {
        matchedInDir = true;
        return `${p1}${p2}${imageUrl}${p3}${p4}${galleryStr}`;
    });
    
    if (matchedInDir) {
        matchesCount++;
    } else {
        unmappedDirs.push(dir);
    }
});

fs.writeFileSync(tsFile, content);
console.log(`Mapping finished. Processed ${matchesCount} populated directories.`);
if (unmappedDirs.length > 0) {
    console.log("Unmapped directories with images:");
    console.log(JSON.stringify(unmappedDirs, null, 2));
} else {
    console.log("All populated directories successfully mapped!");
}
