const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');
const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\institutional');

const mappings = {
  "ADITHYA CBSE SCHOOL": "ADITHYA   CBSE SCHOOL",
  "ADITHYA INSTITUTE OF TECHNOLOGY- ACADEMIC BUILDING": "ADITHYA INSTITUTE OF TECHNOLOGY- ACADEMIC   BUILDING",
  "Construction of MBA MCA Block buliding at Coimbatore": "Construction of MBA/ MCA Block buliding at Coimbatore",
  "Ms.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE": "M/s.D.J. ACADEMY FOR MANAGERIAL EXCELLENCE",
  "Ms. GKD CHARITY TRUST": "M/s. GKD CHARITY TRUST"
};

let matches = 0;

for (const [dir, projectName] of Object.entries(mappings)) {
    const dirPath = path.join(imageDir, dir);
    const files = fs.readdirSync(dirPath).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
    if (files.length === 0) continue;
    
    files.sort();
    const imageUrl = `/project/institutional/${dir}/${files[0]}`;
    const galleryItems = files.map(f => `"/project/institutional/${dir}/${f}"`).join(',\n      ');
    const galleryStr = `[\n      ${galleryItems}\n    ]`;
    
    const escapeRegex = (s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const safeName = escapeRegex(projectName);
    
    const regex = new RegExp(`(name:\\s*["']${safeName}["'],\\s*\\n\\s*category:\\s*["']Institutional["'][\\s\\S]*?imageUrl:\\s*)["'].*?["']([\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`, 'g');
    
    let matched = false;
    content = content.replace(regex, (m, p1, p2) => {
        matched = true;
        return `${p1}"${imageUrl}"${p2}${galleryStr}`;
    });

    if (matched) matches++;
}

fs.writeFileSync(tsFile, content);

// Look for Arjun or Renovation
const hasArjun = content.toLowerCase().includes('arjun');
const hasRenov = content.toLowerCase().includes('renovation work in d block');

console.log(`Mapped ${matches} projects.`);
console.log(`Contains 'arjun': ${hasArjun}`);
console.log(`Contains 'renovation work': ${hasRenov}`);
