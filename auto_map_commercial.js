const fs = require('fs');
const path = require('path');
const tsFile = path.resolve('C:\\WayoraEnterprices\\salp\\src\\data\\projects.ts');
const imageDir = path.resolve('C:\\WayoraEnterprices\\salp\\public\\project\\commercial');
let content = fs.readFileSync(tsFile, 'utf-8');

const unmappedFolders = require('C:\\WayoraEnterprices\\salp\\commercial_unmapped.json');

const normalize = (str) => str.replace(/[^\w]/g, '').toLowerCase();

// Get unmapped projects in TS
const regexStr = `name:\\s*["']([^"']+)["'][\\s\\S]*?category:\\s*["']Commercial["'][\\s\\S]*?imageUrl:\\s*["']MANUAL_MAPPING_REQUIRED["']`;
const matchAll = [...content.matchAll(new RegExp(regexStr, 'gi'))];
const tsNames = matchAll.map(m => m[1]);

let overallMatches = 0;
let remaining = [];

unmappedFolders.forEach(folder => {
    const normFolder = normalize(folder);
    
    // Check if it starts with "Ms" or "MS" and replace it to "Ms" for easier search if needed. Not strictly needed if we stripped punctuation.
    // E.g. "M/s." -> "ms", "Ms." -> "ms". They will match!
    
    let matchedTsName = tsNames.find(t => normalize(t) === normFolder || normalize(t).includes(normFolder) || normFolder.includes(normalize(t)));
    
    // Extra fuzzy rules for "Commer-cial" vs "Commercial"
    if (!matchedTsName) {
        matchedTsName = tsNames.find(t => {
            const t1 = normalize(t).replace('commercial', 'commercial'); 
            const f1 = normFolder.replace('commercial', 'commercial');
            if (t1 === f1 || t1.includes(f1) || f1.includes(t1)) return true;
            return false;
        });
    }

    if (matchedTsName) {
        const safeName = matchedTsName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        
        let replaceRegex;
        // If it's a " 2" folder, we map it to the second instance of that matchedTsName
        const isSecond = folder.endsWith(" 2");
        const isThird = folder.endsWith(" 3");
        
        let instanceGoal = isSecond ? 2 : (isThird ? 3 : 1);
        
        const replaceRegexGlobal = new RegExp(`(name:\\s*["']${safeName}["'][\\s\\S]*?category:\\s*["']Commercial["'])([\\s\\S]*?imageUrl:\\s*["']MANUAL_MAPPING_REQUIRED["'])([\\s\\S]*?gallery:\\s*)(\\[\\])`, 'gi');
        
        const dPath = path.join(imageDir, folder);
        const files = fs.readdirSync(dPath).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
        if (files.length === 0) return;
        files.sort();
        
        const imageUrl = `"/project/commercial/${folder}/${files[0]}"`;
        const galleryItems = files.map(f => `"/project/commercial/${folder}/${f}"`).join(',\n      ');
        const galleryStr = `[\n      ${galleryItems}\n    ]`;
        
        let currentInstance = 1;
        let localMatch = false;
        content = content.replace(replaceRegexGlobal, (match, p1, p2, p3, p4) => {
            if (currentInstance === instanceGoal) {
                localMatch = true;
                currentInstance++;
                return `${p1}${p2.replace('"MANUAL_MAPPING_REQUIRED"', imageUrl)}${p3}${galleryStr}`;
            }
            currentInstance++;
            return match;
        });
        
        if (localMatch) {
            overallMatches++;
            console.log(`Auto-mapped folder "${folder}" to "${matchedTsName}"`);
            
            // Remove from tsNames so it doesn't get double assigned if another folder is similar
            // Wait, we just keep going.
        } else {
             remaining.push(folder);
        }
    } else {
        remaining.push(folder);
    }
});

fs.writeFileSync(tsFile, content);
console.log(`Automapper finished. Total auto-mapped: ${overallMatches}`);
if (remaining.length > 0) {
    console.log("Still remaining:");
    console.log(remaining);
}
