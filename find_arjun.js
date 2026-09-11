const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const matches = [...content.matchAll(/name:\s*["']([^"']+)["'],\s*\n\s*category:\s*["']Institutional["']/g)];
const projectNames = matches.map(m => m[1]);

console.log('--- Arjun Projects ---');
const arjun = projectNames.filter(n => n.toLowerCase().includes('arjun'));
arjun.forEach(n => console.log(n));

console.log('--- Missing Institutional from previously unmached Dirs ---');
const unmDirs = [
  "Construction of Arjun College of Technology, Academic Block-B Block SF, Girls Hostel",
  "Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE", // maybe this one failed to map (4/5)
  "Renovation work in D Block and Boys Hostel -2"
];

for(const d of unmDirs) {
   let found = false;
   projectNames.forEach(p => {
       if (p.toLowerCase().includes('d.j') && d.includes('D.J')) { console.log('DJ match:', p); }
       if (p.toLowerCase().includes('academic block') && d.includes('Academic Block')) { console.log('Academic match:', p); }
       if (p.toLowerCase().includes('renovat') && d.includes('Renovation')) { console.log('Renov match:', p); }
   });
}
