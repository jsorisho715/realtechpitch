// Debug: screenshot specific deck slides at desktop + iPhone 14 viewports.
// Helps catch "blank slide" issues by showing what actually renders.

import { chromium, devices } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const OUT_DIR    = path.join(__dirname, 'debug');

const URL = process.argv[2] || 'https://realtechpitch.vercel.app/';

// Hash routes use 1-based indexing per Reveal config (hashOneBasedIndex: true)
// Slide indices are also 1-based via hash. Slides we want to verify:
const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 22, 23, 27, 46];

fs.mkdirSync(OUT_DIR, { recursive: true });
const browser = await chromium.launch({ headless: true });

// Desktop pass
const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const dPage = await desktop.newPage();
await dPage.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });

for (const n of slides) {
  await dPage.goto(`${URL}#/${n}`, { waitUntil: 'networkidle' });
  await dPage.waitForTimeout(1200);
  const file = path.join(OUT_DIR, `desktop-slide-${String(n).padStart(2, '0')}.png`);
  await dPage.screenshot({ path: file, fullPage: false });
  process.stdout.write(`[desktop] slide ${n} -> ${path.basename(file)}\n`);
}
await desktop.close();

// iPhone 14 portrait pass
const mobile = await browser.newContext({ ...devices['iPhone 14'] });
const mPage = await mobile.newPage();
await mPage.goto(URL, { waitUntil: 'networkidle' });
for (const n of slides) {
  await mPage.goto(`${URL}#/${n}`, { waitUntil: 'networkidle' });
  await mPage.waitForTimeout(1200);
  const file = path.join(OUT_DIR, `mobile-slide-${String(n).padStart(2, '0')}.png`);
  await mPage.screenshot({ path: file, fullPage: false });
  process.stdout.write(`[mobile] slide ${n} -> ${path.basename(file)}\n`);
}
await mobile.close();

await browser.close();
console.log(`\nDone. ${slides.length * 2} screenshots in ${OUT_DIR}`);
