const fs = require('fs');

const file = 'src/data/projects.ts';
let code = fs.readFileSync(file, 'utf8');

// I will just split using the block start, filter that segment array, and then join!
const parts = code.split('export const projectsList: Project[] = [\n');
if (parts.length > 1) {
    let top = parts[0] + 'export const projectsList: Project[] = [\n';
    let rest = parts[1];
    
    let endParts = rest.split('\n];\n\nexport const featuredProjectsList');
    if (endParts.length < 2) {
        endParts = rest.split(/];\s*export const featuredProjectsList/);
    }
    
    if (endParts.length >= 2) {
        let arrayContent = endParts[0];
        // Split by start of object "  {"
        let blocks = arrayContent.split(/(^|\n)  \{/g);
        
        // recombine properly
        let validBlocks = [];
        for (let b of blocks) {
            if (!b || b === '\n') continue;
            
            if (b.includes('category: "INDUSTRIES"')) {
                console.log("Found an INDUSTRIES block and removing it!");
                continue;
            }
            validBlocks.push('  {' + b);
        }
        
        let newArrayContent = validBlocks.join('');
        // Make sure we end properly before `];`
        // Wait, if we join by nothing, we need to ensure the commas are correct.
        // Actually, we don't even need to modify commas if they are part of `b`.
        
        let newCode = top + newArrayContent + '\n];\n\nexport const featuredProjectsList' + endParts[1];
        
        fs.writeFileSync(file, newCode, 'utf8');
        console.log("Cleaned INDUSTRIES!");
    } else {
        console.log("Could not split endparts.");
    }
}
