const fs = require('fs');
const tsFile = 'C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts';
let content = fs.readFileSync(tsFile, 'utf-8');

const imageDir = 'C:\\WayoraEnterprices\\salp\\public\\project\\industrial';
const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

let unmapped = [];

dirs.forEach(dir => {
    const dirPath = `${imageDir}\\${dir}`;
    const files = fs.readdirSync(dirPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
    if (files.length === 0) return;
    
    // Check if the directory name appears in the file wrapped in /project/industrial/...
    if (!content.includes(`/project/industrial/${dir}/`)) {
        unmapped.push(dir);
    }
});

fs.writeFileSync('C:\\WayoraEnterprices\\salp\\industrial_unmapped.json', JSON.stringify(unmapped, null, 2));
console.log('Saved to industrial_unmapped.json');
