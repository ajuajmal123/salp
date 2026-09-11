const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

// I will parse the entries programmatically using regex and make sure the values are swapped accurately

// The first entry currently has imageUrl set, the second has gallery set. Let's reset both and assign properly.

const dir = "CRI PUMPS PRIVATE LIMITED 2";
const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\industrial', dir);
const files = fs.readdirSync(imageDir).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
files.sort();

const imageUrl = `"/project/industrial/${dir}/${files[0]}"`;
const galleryItems = files.map(f => `"/project/industrial/${dir}/${f}"`).join(',\n      ');
const galleryStr = `[\n      ${galleryItems}\n    ]`;

// Find index of Mithran entry
const mithranIndex = content.indexOf('consultant: "M/s. Mithran Structures (P) Ltd.,"');
// Find index of Design Tech entry
const designIndex = content.indexOf('consultant: "M/s. Design Tech"');

// Fix Mithran section (remove imageUrl if present)
const mithranBlockStart = content.lastIndexOf('slug: "cri-pumps-private-limited-57"', mithranIndex);
const mithranBlockEnd = content.indexOf('},', mithranIndex) + 20;

let mithranBlock = content.substring(mithranBlockStart, mithranBlockEnd);
mithranBlock = mithranBlock.replace(/imageUrl:\s*["'].*?["']/, 'imageUrl: "MANUAL_MAPPING_REQUIRED"');
mithranBlock = mithranBlock.replace(/gallery:\s*\[[\s\S]*?\]/, 'gallery: []');

// Fix Design Tech section
const designBlockStart = content.lastIndexOf('slug: "cri-pumps-private-limited-58"', designIndex);
let designBlockEndStr = 'gallery: [';
let endPartIdx = content.indexOf(designBlockEndStr, designIndex);
let actualDesignBlockEnd = content.indexOf(']', endPartIdx) + 1;
// Wait, the previous script might have left multiple gallery blocks if it appended? No, it just replaced.
// Let's use robust regex for the block.

const regexDesign = /(slug:\s*["']cri-pumps-private-limited-58["'][\s\S]*?imageUrl:\s*["']).*?(["'][\s\S]*?gallery:\s*\[)[\s\S]*?(\])/;

content = content.replace(/(slug:\s*["']cri-pumps-private-limited-57["'][\s\S]*?imageUrl:\s*)["'].*?["']([\s\S]*?gallery:\s*\[)[\s\S]*?(\])/, (match, p1, p2, p3) => {
   return `${p1}"MANUAL_MAPPING_REQUIRED"${p2}${p3}`;
});

content = content.replace(regexDesign, (match, p1, p2, p3) => {
   return `${p1}/project/industrial/${dir}/${files[0]}${p2}\n      ${galleryItems}\n    ${p3}`;
});

fs.writeFileSync(tsFile, content);
console.log("Successfully swapped images to Design Tech via script 2.");
