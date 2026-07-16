const fs = require('fs');
const path = require('path');

async function download() {
  const url = 'https://www.floreriaparavelorio.com/assets/hero-desktop-dA5laXzM.webp';
  const dest = path.join(__dirname, '..', 'src', 'assets', 'proj-flor.jpg');
  console.log(`Downloading ${url} to ${dest}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buffer));
  console.log('Download complete!');
}

download().catch(console.error);
