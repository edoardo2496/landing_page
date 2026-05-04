const fs = require('fs');
const path = require('path');

const HTML_FILE = 'index.html';
const CSS_FILE  = 'styles.css';
const OUT_FILE  = 'landing.html';

function build() {
  // Read source files
  if (!fs.existsSync(HTML_FILE)) {
    console.error(`❌  File non trovato: ${HTML_FILE}`);
    process.exit(1);
  }
  if (!fs.existsSync(CSS_FILE)) {
    console.error(`❌  File non trovato: ${CSS_FILE}`);
    process.exit(1);
  }

  const html = fs.readFileSync(HTML_FILE, 'utf8');
  const css  = fs.readFileSync(CSS_FILE,  'utf8');

  // Replace the <link rel="stylesheet" href="styles.css"> tag with an inline <style> block
  const linkTag = /<link\s+rel=["']stylesheet["']\s+href=["']styles\.css["']\s*\/?>/i;

  if (!linkTag.test(html)) {
    console.error('❌  Tag <link rel="stylesheet" href="styles.css"> non trovato in index.html');
    process.exit(1);
  }

  const combined = html.replace(linkTag, `<style>\n${css}\n</style>`);

  fs.writeFileSync(OUT_FILE, combined, 'utf8');

  const sizeKB = (Buffer.byteLength(combined, 'utf8') / 1024).toFixed(1);
  console.log(`✅  Build completato → ${OUT_FILE} (${sizeKB} KB)`);
}

build();
