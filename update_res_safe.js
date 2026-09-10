const fs = require('fs');
const path = require('path');

const tsFilePath = 'src/data/projects.ts';
let code = fs.readFileSync(tsFilePath, 'utf8');

// safely remove INDUSTRIES first
let categoryRegex = /\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*category:\s*"INDUSTRIES"[\s\S]*?(gallery:\s*\[[\s\S]*?\])\s*\},?\s*/g;
code = code.replace(categoryRegex, '');

const publicDir = 'public/project/residential';
const folders = fs.readdirSync(publicDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

// Split file safely to catch each { object }
// Projects array looks like:
// export const projectsList: Project[] = [
//   {
//     slug: ...
//
// We can carefully split by `  {` taking OS line endings into account
const prefixMarker = "export const projectsList: Project[] = [";
const suffixMarker = "];";
const startIndex = code.indexOf(prefixMarker) + prefixMarker.length;
const endIndex = code.lastIndexOf(suffixMarker);

const beforeArray = code.substring(0, startIndex);
const arrayContent = code.substring(startIndex, endIndex);
const afterArray = code.substring(endIndex);

// split array content by block boundary. We can do so by matching `\n  },` or `\r\n  },`
const blocks = arrayContent.split(/[\r\n]+  \},?[\r\n]+/);

let mapCount = 0;
const sanitize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

const newBlocks = blocks.map(block => {
  if (!block.trim()) return block;
  
  if (block.includes('category: "Residential"')) {
    const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
    if (!nameMatch) return block;
    
    const name = nameMatch[1];
    const sanitizedName = sanitize(name);
    
    let findFolder = folders.find(f => sanitize(f) === sanitizedName);
    if (!findFolder) {
      findFolder = folders.find(f => sanitize(f).includes(sanitizedName) || sanitizedName.includes(sanitize(f)));
    }
    
    if (findFolder) {
      const images = fs.readdirSync(path.join(publicDir, findFolder)).filter(f => f.match(/\.(jpe?g|png|webp|gif|avif|JPG|JPEG|PNG)$/));
      if (images.length > 0) {
        images.sort();
        const imgPaths = images.map(img => `"/project/residential/${findFolder}/${img}"`);
        const galleryReplacement = `gallery: [\n      ${imgPaths.join(',\n      ')}\n    ]`;
        const firstImage = imgPaths[0].replace(/"/g, ''); 
        
        let ub = block;
        ub = ub.replace(/imageUrl:\s*["'][^"']*["']/, `imageUrl: "${firstImage}"`);
        ub = ub.replace(/gallery:\s*\[[\s\S]*?\]/, galleryReplacement);
        mapCount++;
        return ub;
      }
    }
  }
  return block;
});

// Rejoin
// Note: original block started with \n  {
const newArrayContent = newBlocks.filter(b => b.trim()).map(b => `\n  ${b.trim()}\n  }`).join(',');
code = beforeArray + newArrayContent + `\n` + afterArray;

fs.writeFileSync(tsFilePath, code, 'utf8');
console.log(`Total mapped residential projects: ${mapCount}`);
