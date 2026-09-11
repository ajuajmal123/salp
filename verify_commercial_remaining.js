const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
let content = fs.readFileSync(tsFile, 'utf-8');

const unmappedFolders = require('C:\\WayoraEnterprices\\salp\\commercial_unmapped.json');
const remaining = [];

unmappedFolders.forEach(folder => {
    if (!content.includes(`/project/commercial/${folder}/`)) {
        remaining.push(folder);
    }
});

fs.writeFileSync('C:\\WayoraEnterprices\\salp\\commercial_still_unmapped.json', JSON.stringify(remaining, null, 2));
