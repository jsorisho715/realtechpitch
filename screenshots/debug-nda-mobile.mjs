// Test the NDA gate via TOUCH on iPhone 14.
import { chromium, devices } from '@playwright/test';

const URL = process.argv[2] || 'https://realtechpitch.vercel.app/';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ ...devices['iPhone 14'], hasTouch: true });
const page = await ctx.newPage();

page.on('console', (m) => console.log(`[browser:${m.type()}] ${m.text()}`));
page.on('pageerror', (e) => console.log(`[browser:error] ${e.message}`));

await page.goto(URL, { waitUntil: 'networkidle' });
await page.goto(`${URL}#/2`, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

const before = await page.evaluate(() => {
  const r = window.Reveal;
  const btn = document.querySelector('[data-nda-release]');
  const rect = btn ? btn.getBoundingClientRect() : null;
  return {
    indices: r ? r.getIndices() : null,
    sessionStorageReleased: sessionStorage.getItem('rt-deck-nda-gate-released'),
    btnRect: rect ? { x: rect.x, y: rect.y, w: rect.width, h: rect.height } : null,
    btnVisible: btn ? (rect.width > 0 && rect.height > 0) : false,
    viewport: { w: window.innerWidth, h: window.innerHeight },
  };
});
console.log('BEFORE (mobile):', JSON.stringify(before, null, 2));

// Try a real touch tap on the button
if (before.btnRect && before.btnVisible) {
  const cx = before.btnRect.x + before.btnRect.w / 2;
  const cy = before.btnRect.y + before.btnRect.h / 2;
  console.log(`Tapping at (${cx}, ${cy})`);
  await page.touchscreen.tap(cx, cy);
} else {
  console.log('Button not visible — cannot tap. Falling back to JS click.');
  await page.evaluate(() => document.querySelector('[data-nda-release]').click());
}

await page.waitForTimeout(1500);

const after = await page.evaluate(() => {
  const r = window.Reveal;
  const btn = document.querySelector('[data-nda-release]');
  return {
    indices: r ? r.getIndices() : null,
    sessionStorageReleased: sessionStorage.getItem('rt-deck-nda-gate-released'),
    btnText: btn ? btn.textContent.trim() : null,
    btnDisabled: btn ? btn.disabled : null,
    currentHash: window.location.hash,
  };
});
console.log('AFTER (mobile):', JSON.stringify(after, null, 2));

await browser.close();
