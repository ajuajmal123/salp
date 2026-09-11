const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const regex1 = /(name:\s*["']CRI PUMPS PRIVATE LIMITED["'],\s*\n\s*category:\s*["']Industrial["'],\s*\n\s*location:\s*["']COIMBATORE["'],\s*\n\s*imageUrl:\s*)["'].*?["']([\s\S]*?consultant:\s*["']M\/s\. Mithran Structures \(P\) Ltd\.,["']\s*\n\s*},\s*\n\s*gallery:\s*)\[[\s\S]*?\]/;

const regex2 = /(name:\s*["']CRI PUMPS PRIVATE LIMITED["'],\s*\n\s*category:\s*["']Industrial["'],\s*\n\s*location:\s*["']COIMBATORE["'],\s*\n\s*imageUrl:\s*["']MANUAL_MAPPING_REQUIRED["'])([\s\S]*?consultant:\s*["']M\/s\. Design Tech["']\s*\n\s*},\s*\n\s*gallery:\s*)\[\]/;

// Extract imageUrl and gallery from the folder
const dir = "CRI PUMPS PRIVATE LIMITED 2";
const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\industrial', dir);
const files = fs.readdirSync(imageDir).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
files.sort();

const imageUrl = `"/project/industrial/${dir}/${files[0]}"`;
const galleryItems = files.map(f => `"/project/industrial/${dir}/${f}"`).join(',\n      ');
const galleryStr = `[\n      ${galleryItems}\n    ]`;

let swapped = false;

content = content.replace(regex1, (match, p1, p2) => {
    return `${p1}"MANUAL_MAPPING_REQUIRED"${p2}[]`;
});

content = content.replace(regex2, (match, p1, p2) => {
    swapped = true;
    return `${p1.replace('"MANUAL_MAPPING_REQUIRED"', imageUrl)}${p2}${galleryStr}`;
});

if (swapped) {
    fs.writeFileSync(tsFile, content);
    console.log("Successfully swapped CRI PUMPS PRIVATE LIMITED images to Design Tech.");
} else {
    console.log("Failed to swap!");
}
