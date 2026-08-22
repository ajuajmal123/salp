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
  const imageUrl = images[0];
  const galleryStr = JSON.stringify(images, null, 2);
  
  const simpleFolder = folder.replace(/[^\w]/g, '').toLowerCase();
  
  // Create a regex to match an entire object in the array 
  // It looks like: { ... "slug": "...", "name": "...", ... "imageUrl": "...", ... "gallery": [] }
  // We can use a replacer function on the whole file using regex.
  // The object is roughly between { and } but might contain nested {}
  // A simple hack is to split the content by "{" and "}" which is brittle.
  // A better way is to do a full parse, but we can't easily install ts-morph.
  
  // So let's use a regex that matches each project object
  // projectsList array items look like:
  //   {
  //     "slug": "...",
  //     "name": "...",
  //     ...
  //     "imageUrl": "MANUAL_MAPPING_REQUIRED",
  //     ...
  //     "gallery": []
  //   },
  
  // Let's replace within tsContent
  // We can find the start of Name and then search forward for imageUrl and gallery.
  const nameRegex = /name["']?\s*:\s*["']([^"']+)["']/g;
  let match;
  let modifications = [];
  while ((match = nameRegex.exec(tsContent)) !== null) {
      if (match[1].replace(/[^\w]/g, '').toLowerCase() === simpleFolder) {
          const nameIndex = match.index;
          // Find the next imageUrl
          const imageUrlIndex = tsContent.indexOf('imageUrl', nameIndex);
          if (imageUrlIndex !== -1) {
              const imageUrlLineEnd = tsContent.indexOf(',', imageUrlIndex);
              modifications.push({
                  start: imageUrlIndex,
                  end: imageUrlLineEnd,
                  replacement: `imageUrl: "${imageUrl}"`
              });
          }
          // Find the next gallery
          const galleryIndex = tsContent.indexOf('gallery', nameIndex);
          if (galleryIndex !== -1) {
              const galleryLineEnd = tsContent.indexOf(']', galleryIndex) + 1;
              modifications.push({
                  start: galleryIndex,
                  end: galleryLineEnd,
                  replacement: `gallery: ${JSON.stringify(images)}`
              });
          }
      }
  }
  
  // Apply modifications from back to front to avoid messing up indices
  modifications.sort((a, b) => b.start - a.start);
  for (const mod of modifications) {
      tsContent = tsContent.substring(0, mod.start) + mod.replacement + tsContent.substring(mod.end);
  }
  
  console.log('Processed folder:', folder);
}

fs.writeFileSync(tsFilePath, tsContent, 'utf8');
console.log('Successfully updated projects.ts');
