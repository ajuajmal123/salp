const fs = require('fs');

const files = [
  'src/app/projects/page.tsx',
  'src/app/projects/[slug]/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/profile/page.tsx',
  'src/app/strength/page.tsx',
  'src/components/sections/AboutPreview.tsx',
  'src/components/ui/ContactForm.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let text = fs.readFileSync(f, 'utf8');
    let original = text;
    
    // Add md: to hardcoded high-padding
    text = text.replace(/\bpt-28 lg:pt-32\b/g, 'pt-24 lg:pt-32');
    text = text.replace(/\bpt-32 pb-24\b/g, 'pt-20 pb-12 md:pt-32 md:pb-24');
    text = text.replace(/\bpy-24\b/g, 'py-12 md:py-24');
    text = text.replace(/\bpy-20\b/g, 'py-12 md:py-20');
    text = text.replace(/\bpy-16 max-w-7xl\b/g, 'py-10 md:py-16 max-w-7xl');
    text = text.replace(/\bpb-24 bg-white\b/g, 'pb-12 md:pb-24 bg-white');
    text = text.replace(/\bpb-20\b/g, 'pb-12 md:pb-20');
    text = text.replace(/\bpy-16 text-center\b/g, 'py-10 md:py-16 text-center');
    text = text.replace(/\bpt-20 bg-white\b/g, 'pt-16 md:pt-20 bg-white');
    
    if (text !== original) {
      fs.writeFileSync(f, text, 'utf8');
      console.log('Updated', f);
    }
  }
});
