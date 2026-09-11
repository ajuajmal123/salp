const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\industrial');

const mappings = [
  { tsName: "CRI PUMPS PRIVATE LIMITED", dir: "CRI PUMPS PRIVATE LIMITED 2" },
  { tsName: "L.G.BALAKRISHNAN & BROS LIMITED", dir: "L.G.BALAKRISHNAN & BROS LIMITED 2" },
  { tsName: "LGB FACTORY BUILDING 2      VALLAM", dir: "LGB FACTORY BUILDING 2 VALLAM" },
  { tsName: "M/s. CS SPINNERS PVT LTD", dir: "Ms. CS SPINNERS PVT LTD" },
  { tsName: "M/s. REVANTHA SERVICES LTD", dir: "Ms. REVANTHA SERVICES LTD" },
  { tsName: "MARK ENGINEERING WORKS", dir: "MARK ENGINEERING WORKS 2" },
  { tsName: "Marudhamalai Industrial & Logistics Park,   Coimbatore (by)", dir: "Marudhamalai Industrial & Logistics Park, Coimbatore (by)" },
  { tsName: "Sri Ranganather Valves & Controls(P)Ltd   Unit II", dir: "Sri Ranganather Valves & Controls(P)Ltd Unit II" }
];

function getGallery(dir) {
    const dirPath = path.join(imageDir, dir);
    if (!fs.existsSync(dirPath)) return null;
    const files = fs.readdirSync(dirPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
    if (files.length === 0) return null;
    files.sort();
    
    const imageUrl = `/project/industrial/${dir}/${files[0]}`;
    const galleryItems = files.map(f => `"/project/industrial/${dir}/${f}"`).join(',\n      ');
    const galleryStr = `[\n      ${galleryItems}\n    ]`;
    return { imageUrl, galleryStr };
}

let matchesCount = 0;

for (const { tsName, dir } of mappings) {
    const gallery = getGallery(dir);
    if (!gallery) continue;
    
    const safeName = tsName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regexStr = `(name:\\s*["']${safeName}["'][\\s\\S]*?category:\\s*["']Industrial["'])([\\s\\S]*?imageUrl:\\s*["']).*?(["'])([\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`;
    const regex = new RegExp(regexStr, 'i');
    
    let matchedInDir = false;
    content = content.replace(regex, (match, p1, p2, p3, p4) => {
        matchedInDir = true;
        return `${p1}${p2}${gallery.imageUrl}${p3}${p4}${gallery.galleryStr}`;
    });
    
    if (matchedInDir) matchesCount++;
}

// Special case: MADRAS CEMENTS LTD
const madras2 = getGallery("MADRAS CEMENTS LTD 2");
const madras3 = getGallery("MADRAS CEMENTS LTD 3");

if (madras2 || madras3) {
    const safeMadras = "MADRAS CEMENTS LTD".replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const madrasRegexStr = `(name:\\s*["']${safeMadras}["'][\\s\\S]*?category:\\s*["']Industrial["'])([\\s\\S]*?imageUrl:\\s*["']).*?(["'])([\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`;
    const madrasRegex = new RegExp(madrasRegexStr, 'i');
    
    let index = 0;
    content = content.replace(madrasRegex, (match, p1, p2, p3, p4) => {
        let g = null;
        if (index === 0) g = madras2;
        else if (index === 1) g = madras3;
        
        index++;
        if (g) {
            matchesCount++;
            return `${p1}${p2}${g.imageUrl}${p3}${p4}${g.galleryStr}`;
        }
        return match;
    });
}

fs.writeFileSync(tsFile, content);
console.log(`Manual mapping finished. Processed ${matchesCount} directories.`);
