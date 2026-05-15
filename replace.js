const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.jsx') || file.endsWith('.css')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  content = content.replace(/industrial-navy/g, 'industrial-charcoal');
  content = content.replace(/bg-white/g, 'bg-industrial-cream');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
