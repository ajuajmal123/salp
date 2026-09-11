const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const dir = "ADITHYA WAREHOUSE";
const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\industrial', dir);
const files = fs.readdirSync(imageDir).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
files.sort();

const imageUrl = `/project/industrial/${dir}/${files[0]}`;
const galleryItems = files.map(f => `"/project/industrial/${dir}/${f}"`).join(',\n      ');
const galleryStr = `[\n      ${galleryItems}\n    ]`;

const safeName = "ADITHYA   WAREHOUSE".replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
const regexStr = `(name:\\s*["']${safeName}["'][\\s\\S]*?category:\\s*["']Industrial["'])([\\s\\S]*?imageUrl:\\s*["']).*?(["'])([\\s\\S]*?gallery:\\s*)\\[[\\s\\S]*?\\]`;
const regex = new RegExp(regexStr, 'i');

content = content.replace(regex, (match, p1, p2, p3, p4) => {
    return `${p1}${p2}${imageUrl}${p3}${p4}${galleryStr}`;
});

fs.writeFileSync(tsFile, content);
console.log("Successfully mapped ADITHYA WAREHOUSE");
