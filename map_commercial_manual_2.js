const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');
const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\commercial');

const mappings = [
  { folder: "Construction of Commer-cial cum lodging complex building Rathna Residency", nameInTs: "Construction of Commer-cial cum lodging complex building" },
  { folder: "Construction of Commercial complex Building Aditya Tech Park", nameInTs: "Construction of Commercial complex Building" },
  { folder: "Construction of commercial complex buildings Raja Tower", nameInTs: "Construction of commercial complex buildings" },
  { folder: "Construction of Commercial Complex SVB SPHERE", nameInTs: "Construction of Commercial Complex" },
  { folder: "Construction of Finishing and Plumbing work in Additional Office Commercial Building at SVB TECH PARK PHASE 2", nameInTs: "Construction of Finishing and Plumbing work in Additional Office Commercial Building at SVB TECH PARK PHASE 2" },
  { folder: "Construction of IT building OLYMPIA ELITE", nameInTs: "Construction of IT building" },
  { folder: "Construction of multi pur-pose commercial complex Deesena entertainments", nameInTs: "Construction of multi pur-pose commercial complex" },
  { folder: "Construction of Parish Hall Buidling", nameInTs: "Construction of" }, // This might match multiple, it will grab the first one. Let's see
  { folder: "Proposed Construction Of It Building (Cast In Situ) & Precast Building Olympia Vidagara” At Porur, Chennai For MS. Alwarpet Properties Pvt Ltd", nameInTs: "Proposed Construction Of It Building (Cast In Situ) & Precast Building" },
  { folder: "Proposed Construction of Precast IT Building “Olympia” at porur, Chennai for Ms. Alwarpet Properties Pvt Ltd – reg", nameInTs: "Proposed Construction of Precast IT Building “Olympia” at porur, Chennai for M/s. Alwarpet Properties Pvt Ltd – reg" }
];

let overallMatches = 0;

for (const { folder, nameInTs } of mappings) {
    let dPath = path.join(imageDir, folder);
    if (!fs.existsSync(dPath)) continue;
    
    const files = fs.readdirSync(dPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
    if (files.length === 0) continue;
    files.sort();
    
    const imageUrl = `"/project/commercial/${folder}/${files[0]}"`;
    const galleryItems = files.map(f => `"/project/commercial/${folder}/${f}"`).join(',\n      ');
    const galleryStr = `[\n      ${galleryItems}\n    ]`;
    
    // Find the nameInTs index
    let nameIdx = content.indexOf(nameInTs);
    if (nameIdx === -1) {
       console.log("NOT FOUND IN TS:", nameInTs);
       continue;
    }
    
    // Find where the block ends (e.g. at gallery: []) to ensure we are replacing within the same project
    let blockEnd = content.indexOf('gallery: []', nameIdx);
    if (blockEnd === -1) { console.log("GALLERY NOT FOUND FOR", nameInTs); continue; }
    
    let block = content.substring(nameIdx, blockEnd + 11);
    
    if (block.includes('"MANUAL_MAPPING_REQUIRED"')) {
        block = block.replace('"MANUAL_MAPPING_REQUIRED"', imageUrl);
        block = block.replace('gallery: []', `gallery: ${galleryStr}`);
        
        content = content.substring(0, nameIdx) + block + content.substring(blockEnd + 11);
        overallMatches++;
        console.log(`Manually mapped folder "${folder}"`);
    } else {
        console.log(`Block doesn't have MANUAL_MAPPING_REQUIRED for "${folder}"`);
    }
}

fs.writeFileSync(tsFile, content);
console.log(`Manual mapping finished. Successfully mapped ${overallMatches} folders.`);
