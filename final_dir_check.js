const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\institutional');
const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

const matches = [...content.matchAll(/name:\s*["']([^"']+)["'],\s*\n\s*category:\s*["']Institutional["']/g)];
const projectNames = matches.map(m => m[1]);

console.log("FINAL DIR CHECK:");
dirs.forEach(d => {
    const dirPath = path.join(imageDir, d);
    const files = fs.readdirSync(dirPath).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
    if (files.length === 0) return; // Ignore empty
    
    // Check if `content` has this dir mapped already
    if (!content.includes(`/project/institutional/${d}/`)) {
       console.log("Not mapped yet:", d);
    }
});
