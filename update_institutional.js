const fs = require('fs');
const path = require('path');

const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\institutional');
const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

let matches = 0;

dirs.forEach(dir => {
    const dirPath = path.join(imageDir, dir);
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.JPG') || f.endsWith('.JPEG') || f.endsWith('.PNG'));
    if (files.length === 0) return;
    
    // Sort files to have stable order
    files.sort();

    const imageUrl = `/project/institutional/${dir}/${files[0]}`;
    const galleryItems = files.map(f => `"/project/institutional/${dir}/${f}"`).join(',\n      ');
    const galleryStr = `[\n      ${galleryItems}\n    ]`;
    
    // Regex escape
    const escapeRegex = (s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const safeDir = escapeRegex(dir);
    
    // Matches name followed by category Institutional, then imageUrl line, then gallery array
    const regex = new RegExp(`(name:\\s*["']${safeDir}["'],\\s*\\n\\s*category:\\s*["']Institutional["'][\\s\\S]*?imageUrl:\\s*)["'].*?["']([\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`, 'g');
    
    let matchedInDir = false;
    content = content.replace(regex, (match, p1, p2) => {
        matchedInDir = true;
        return `${p1}"${imageUrl}"${p2}${galleryStr}`;
    });

    if (matchedInDir) {
        matches++;
        console.log(`Updated images for project: ${dir}`);
    } else {
        // Fallback: try case insensitive
        const regex_i = new RegExp(`(name:\\s*["']${safeDir}["'],\\s*\\n\\s*category:\\s*["']Institutional["'][\\s\\S]*?imageUrl:\\s*)["'].*?["']([\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`, 'gi');
        content = content.replace(regex_i, (match, p1, p2) => {
            matchedInDir = true;
            return `${p1}"${imageUrl}"${p2}${galleryStr}`;
        });
        if (matchedInDir) {
             matches++;
             console.log(`Updated images for project (case-insensitive): ${dir}`);
        } else {
             console.log(`No match found in projects.ts for folder: ${dir}`);
        }
    }
});

fs.writeFileSync(tsFile, content);
console.log(`Complete. Modified ${matches} projects.`);
