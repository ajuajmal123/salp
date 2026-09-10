const fs = require('fs');
const path = require('path');

const tsFilePath = 'src/data/projects.ts';
let code = fs.readFileSync(tsFilePath, 'utf8');

const publicDir = 'public/project/residential';
// get folders
const folders = fs.readdirSync(publicDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

let mapCount = 0;

// simple regex parser matching residential projects
const projectRegex = /\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*category:\s*"Residential"[\s\S]*?(gallery:\s*\[[\s\S]*?\])\s*\}/g;

let match;
const sanitize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

while ((match = projectRegex.exec(code)) !== null) {
  const fullMatch = match[0];
  const slug = match[1];
  const name = match[2];
  
  // Try to find the best folder match (trim spaces/quotes/special characters)
  const sanitizedName = sanitize(name);
  let findFolder = folders.find(f => sanitize(f) === sanitizedName);
  
  // Custom manual mapping based on known discrepancies, if needed:
  // e.g., if sanitizedName contains folder name or vice versa
  if (!findFolder) {
     findFolder = folders.find(f => sanitize(f).includes(sanitizedName) || sanitizedName.includes(sanitize(f)));
  }
  
  if (findFolder) {
    const images = fs.readdirSync(path.join(publicDir, findFolder)).filter(f => f.match(/\.(jpe?g|png|webp|gif|avif|JPG|JPEG|PNG)$/));
    if (images.length > 0) {
      images.sort();
      // map images
      const imgPaths = images.map(img => `"/project/residential/${findFolder}/${img}"`);
      const galleryReplacement = `gallery: [\n      ${imgPaths.join(',\n      ')}\n    ]`;
      
      const firstImage = imgPaths[0].replace(/"/g, ''); // strip quotes
      
      let updatedBlock = fullMatch.replace(/imageUrl:\s*"[^"]*"/, `imageUrl: "${firstImage}"`);
      updatedBlock = updatedBlock.replace(/gallery:\s*\[[\s\S]*?\]/, galleryReplacement);
      
      code = code.replace(fullMatch, updatedBlock);
      mapCount++;
      console.log(`Mapped: ${name} (${findFolder}) -> ${images.length} images`);
    } else {
      console.log(`Folder found but no images: ${findFolder}`);
    }
  } else {
    console.log(`No folder matched for: ${name}`);
  }
}

fs.writeFileSync(tsFilePath, code, 'utf8');
console.log(`Successfully mapped ${mapCount} projects.`);
