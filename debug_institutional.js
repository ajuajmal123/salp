const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\institutional');
const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

const matches = [...content.matchAll(/name:\s*["']([^"']+)["'],\s*\n\s*category:\s*["']Institutional["']/g)];
const projectNames = matches.map(m => m[1]);

console.log("Total Institutional projects in projects.ts:", projectNames.length);

const unmappedDirs = dirs.filter(d => !projectNames.includes(d));
console.log("Directories not perfectly matched in projects.ts:");
unmappedDirs.forEach(d => console.log(d));

const unmappedProjects = projectNames.filter(p => !dirs.includes(p));
console.log("Projects without perfect matching directory:");
unmappedProjects.forEach(p => console.log(p));
