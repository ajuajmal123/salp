const fs = require('fs');

const file = 'src/data/projects.ts';
let code = fs.readFileSync(file, 'utf8');

// safely remove INDUSTRIES category elements with any trailing comma
const rx = /\{\s*slug:\s*['"][^'"]+['"],\s*name:\s*['"][^'"]+['"],\s*category:\s*['"]INDUSTRIES['"][\s\S]*?(gallery:\s*\[[\s\S]*?\])\s*\},?\s*/g;
code = code.replace(rx, '');

// update featured projects logic
const badFeaturedStr = "export const featuredProjectsList = projectsList.slice(0, 6);";

const goodFeaturedStr = `export const featuredProjectsList = (() => {
  const selected: typeof projectsList = [];
  const seenCategories = new Set<string>();
  
  for (const p of projectsList) {
    if (p.imageUrl && p.imageUrl !== "MANUAL_MAPPING_REQUIRED" && !seenCategories.has(p.category)) {
      selected.push(p);
      seenCategories.add(p.category);
    }
    if (selected.length === 6) break;
  }
  
  // fallback if somehow there are fewer than 6 categories with valid images
  if (selected.length < 6) {
      for (const p of projectsList) {
          if (p.imageUrl && p.imageUrl !== "MANUAL_MAPPING_REQUIRED" && !selected.some(s => s.slug === p.slug)) {
              selected.push(p);
          }
          if (selected.length === 6) break;
      }
  }
  return selected;
})();`;

// replace both
code = code.replace(/export const featuredProjectsList = [\s\S]*?\);/, goodFeaturedStr);

fs.writeFileSync(file, code, 'utf8');
console.log("Updated projects.ts");
