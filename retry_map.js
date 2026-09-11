const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\institutional');
const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

let matchesCount = 0;

dirs.forEach(dir => {
    const dirPath = path.join(imageDir, dir);
    const files = fs.readdirSync(dirPath).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
    if (files.length === 0) return;
    files.sort();
    
    const imageUrl = `/project/institutional/${dir}/${files[0]}`;
    const galleryItems = files.map(f => `"/project/institutional/${dir}/${f}"`).join(',\n      ');
    const galleryStr = `[\n      ${galleryItems}\n    ]`;
    
    let safeName = dir.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Look for the block starting with name: "..." and category: "Institutional"
    // and ending with "}"
    const regexStr = `(name:\\s*["']${safeName}["'][\\s\\S]*?category:\\s*["']Institutional["'])([\\s\\S]*?imageUrl:\\s*["']).*?(["'])([\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`;
    
    const regex = new RegExp(regexStr, 'gi');
    let matchedInDir = false;
    content = content.replace(regex, (match, p1, p2, p3, p4) => {
        matchedInDir = true;
        return `${p1}${p2}${imageUrl}${p3}${p4}${galleryStr}`;
    });
    
    if (matchedInDir) matchesCount++;
});

fs.writeFileSync(tsFile, content);
console.log(`Fallback mapping finished. Processed ${matchesCount} directories.`);
