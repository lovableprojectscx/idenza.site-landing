const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'routes', 'index.tsx'), 'utf8');
const lines = content.split('\n');
console.log('Searching FAQs in index.tsx...');
lines.forEach((line, index) => {
  if (line.includes('Faq') || line.includes('faq')) {
    console.log(`Line ${index + 1}: ${line.trim()}`);
  }
});

// print lines 700 to 800 or similar if they have FAQ
const match = content.match(/faq/gi);
console.log(`Matches found: ${match ? match.length : 0}`);
