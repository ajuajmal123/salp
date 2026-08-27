const fs = require('fs');
const path = require('path');

const scaleMap = {
  '48': '32',
  '40': '28',
  '32': '24',
  '24': '16',
  '20': '16',
  '16': '12',
  '12': '8',
  '10': '8',
  '8': '6',
  '6': '4',
  '5': '4',
  '4': '3',
  '3': '2'
};

const regex = /(?:^|\s)(?:(sm|md|lg|xl|2xl):)?(p|py|px|pt|pb|pl|pr|m|my|mx|mt|mb|ml|mr)-([0-9]+)(?=\s|"|'|`|}|\])/g;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      callback(path.join(dir, f));
    }
  });
}

const foldersToProcess = ['src/app', 'src/components'];

foldersToProcess.forEach(folder => {
  const fullPath = path.join(__dirname, folder);
  if (!fs.existsSync(fullPath)) return;
  
  walkDir(fullPath, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Apply regex
    const newContent = content.replace(regex, (match, breakpoint, prefix, value) => {
      // Do not touch values not in map
      if (!scaleMap[value]) return match;
      
      const newVal = scaleMap[value];
      let replacement = '';
      
      // Preserve leading space if any
      const leadingSpace = match.match(/^\s/);
      if (leadingSpace) replacement += leadingSpace[0];
      
      if (breakpoint) {
        replacement += `${breakpoint}:${prefix}-${newVal}`;
      } else {
        replacement += `${prefix}-${newVal}`;
      }
      
      changed = true;
      return replacement;
    });

    if (changed) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated spacing in: ${filePath}`);
    }
  });
});

console.log("Global spacing reduction completed successfully!");
