const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\industrial');

let content = fs.readFileSync(tsFile, 'utf-8');
const dirs = fs.readdirSync(imageDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

let unused = [];
dirs.forEach(d => {
    // Check if the directory name appears inside quotes prefixed with /project/industrial/
    // Example: "/project/industrial/CRI PUMPS PRIVATE LIMITED 2/..."
    if (!content.includes(`/project/industrial/${d}/`)) {
        const dPath = path.join(imageDir, d);
        if (fs.readdirSync(dPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i)).length > 0) {
            unused.push(d);
        }
    }
});

console.log("Unused folders with images:", unused.length);
unused.forEach(u => console.log(u));
