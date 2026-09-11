const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\institutional');
const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

const matches = [...content.matchAll(/name:\s*["']([^"']+)["'],\s*\n\s*category:\s*["']Institutional["']/g)];
const projectNames = matches.map(m => m[1]);

const unmappedDirs = dirs.filter(d => !projectNames.includes(d));
const unmappedProjects = projectNames.filter(p => !dirs.includes(p));

const output = {
  totalInTs: projectNames.length,
  totalDirs: dirs.length,
  unmappedDirs: unmappedDirs,
  unmappedProjects: unmappedProjects
};

fs.writeFileSync('C:\\WayoraEnterprices\\salp\\debug_output.json', JSON.stringify(output, null, 2));
