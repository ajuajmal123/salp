const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, 'src', 'data', 'projects.ts');
let tsContent = fs.readFileSync(tsFilePath, 'utf8');

const projectFolders = fs.readdirSync(path.join(__dirname, 'public', 'project'));

const getImages = (folder) => {
  try {
    return fs.readdirSync(path.join(__dirname, 'public', 'project', folder)).filter(f => f.match(/\.(jpg|jpeg|png|webp|gif)$/i));
  } catch (e) { return []; }
}

for (const folder of projectFolders) {
  let images = getImages(folder);
  if (images.length === 0) continue;
  
  images = images.map(img => `/project/${folder}/${img}`);
  // first let's just make it a string instead of full regex replacements to be safe.
  const simpleFolder = folder.replace(/[^\w]/g, '').toLowerCase();
  
  const nameRegex = /"name"\s*:\s*"([^"]+)"|name\s*:\s*"([^"]+)"/g;
  let match;
  let modifications = [];
  
  while ((match = nameRegex.exec(tsContent)) !== null) {
      const matchName = match[1] || match[2];
      if (matchName.replace(/[^\w]/g, '').toLowerCase() === simpleFolder) {
          const nameIndex = match.index;
          
          const imageUrlIndex = tsContent.indexOf('"imageUrl"', nameIndex);
          if (imageUrlIndex !== -1 && imageUrlIndex - nameIndex < 300) {
              const imageUrlLineEnd = tsContent.indexOf(',', imageUrlIndex);
              modifications.push({
                  start: imageUrlIndex,
                  end: imageUrlLineEnd,
                  replacement: `"imageUrl": "${images[0]}"`
              });
          }
          
          const galleryIndex = tsContent.indexOf('"gallery"', nameIndex);
          if (galleryIndex !== -1 && galleryIndex - nameIndex < 1000) {
              const galleryLineEnd = tsContent.indexOf(']', galleryIndex) + 1;
              modifications.push({
                  start: galleryIndex,
                  end: galleryLineEnd,
                  replacement: `"gallery": ${JSON.stringify(images)}`
              });
          }
      }
  }
  
  modifications.sort((a, b) => b.start - a.start);
  for (const mod of modifications) {
      tsContent = tsContent.substring(0, mod.start) + mod.replacement + tsContent.substring(mod.end);
  }
}

fs.writeFileSync(tsFilePath, tsContent, 'utf8');
console.log('Successfully updated projects.ts');
