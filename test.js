const fs = require('fs'); 
const logos = require('./src/app/strength/logosData.json'); 
const txt = fs.readFileSync('./src/data/projects.ts', 'utf8'); 

const clients = new Set();
let match;
const regex = /client:\s*["']([^"']+)["']/g;
while ((match = regex.exec(txt)) !== null) {
  clients.add(match[1]);
}

let c = 0; 
Array.from(clients).forEach(cl => { 
  const ln = cl.toLowerCase().trim(); 
  const m = logos.find(f => { 
    const bn = f.toLowerCase().replace(/\.(jpg|jpeg|png|avif|webp|gif)$/, '').replace(/[_-]/g, ' ').replace(/\slogo$/, '').trim(); 
    return ln.includes(bn) || bn.includes(ln); 
  }); 
  if (m) c++; 
  else console.log('Unmapped:', cl); 
}); 

console.log('Mapped:', c, 'Total:', clients.size);
