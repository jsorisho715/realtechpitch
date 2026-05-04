// Test the NDA gate: navigate to slide 2, click the button, see if we advance.
import { chromium } from '@playwright/test';

const URL = process.argv[2] || 'https://realtechpitch.vercel.app/';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

// Capture console + errors
page.on('console', (m) => console.log(`[browser:${m.type()}] ${m.text()}`));
page.on('pageerror', (e) => console.log(`[browser:error] ${e.message}`));

await page.goto(URL, { waitUntil: 'networkidle' });

// Navigate to NDA slide
await page.goto(`${URL}#/2`, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);

// Probe state
const before = await page.evaluate(() => {
  const r = window.Reveal;
  const idx = r ? r.getIndices() : null;
  const released = sessionStorage.getItem('rt-deck-nda-gate-released');
  const btn = document.querySelector('[data-nda-release]');
  return {
    indices: idx,
    sessionStorageReleased: released,
    btnExists: !!btn,
    btnText: btn ? btn.textContent.trim() : null,
    btnDisabled: btn ? btn.disabled : null,
    bodyHasNdaGateActive: document.body.classList.contains('nda-gate-active'),
  };
});
console.log('BEFORE click:', JSON.stringify(before, null, 2));

// Click the button
const clicked = await page.evaluate(() => {
  const btn = document.querySelector('[data-nda-release]');
  if (!btn) return { error: 'button not found' };
  btn.click();
  return { clicked: true };
});
console.log('CLICK result:', JSON.stringify(clicked));

await page.waitForTimeout(800);

// Check state after click
const after = await page.evaluate(() => {
  const r = window.Reveal;
  const idx = r ? r.getIndices() : null;
  const released = sessionStorage.getItem('rt-deck-nda-gate-released');
  const btn = document.querySelector('[data-nda-release]');
  return {
    indices: idx,
    sessionStorageReleased: released,
    btnText: btn ? btn.textContent.trim() : null,
    btnDisabled: btn ? btn.disabled : null,
    bodyHasNdaGateActive: document.body.classList.contains('nda-gate-active'),
    currentHash: window.location.hash,
  };
});
console.log('AFTER click:', JSON.stringify(after, null, 2));

// Try advancing directly via Reveal API as a separate test
const tryNext = await page.evaluate(() => {
  try {
    const before = window.Reveal.getIndices();
    window.Reveal.next();
    const after = window.Reveal.getIndices();
    return { before, after, error: null };
  } catch (e) {
    return { error: e.message };
  }
});
console.log('reveal.next() direct:', JSON.stringify(tryNext, null, 2));

await browser.close();
