// Screenshot capture — Node ESM, bypasses the PowerShell here-string bug
// in capture.ps1. Run from repo root:
//   node screenshots/capture.mjs           (live products only)
//   node screenshots/capture.mjs --all     (live + competitors + context)

import { chromium, devices } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const REPO_ROOT  = path.resolve(__dirname, '..');
const OUT_DIR    = path.join(REPO_ROOT, 'assets');

const ALL = process.argv.includes('--all');

const targets = [
  // OUR LIVE PRODUCTS — drop in deck per their `name` slug
  { name: 'real-tech-consultant', url: 'https://realtechconsultant.com', kind: 'live' },
  { name: 'rovian-ai',            url: 'https://www.rovian.ai',          kind: 'live' },
  { name: 'edgenote-ai',          url: 'https://www.edgenote.ai',        kind: 'live' },
  { name: 'dealpayment',          url: 'https://dealpayment.com',        kind: 'live' },
  { name: 'kith',                 url: 'https://startakith.com',         kind: 'live' },

  // COMPETITORS / CONTEXT — only when --all
  ...(ALL ? [
    { name: 'apollo',           url: 'https://apollo.io',                kind: 'competitor' },
    { name: 'clay',             url: 'https://clay.com',                 kind: 'competitor' },
    { name: 'goodcall',         url: 'https://goodcall.com',             kind: 'competitor' },
    { name: 'theknot',          url: 'https://theknot.com',              kind: 'competitor' },
    { name: 'aisleplanner',     url: 'https://aisleplanner.com',         kind: 'competitor' },
    { name: 'servicechannel',   url: 'https://servicechannel.com',       kind: 'competitor' },
    { name: 'buildingengines',  url: 'https://buildingengines.com',      kind: 'competitor' },
    { name: 'tinybeans',        url: 'https://tinybeans.com',            kind: 'competitor' },
    { name: 'otter',            url: 'https://otter.ai',                 kind: 'competitor' },
    // Removed: SmartRent context capture (no longer used in deck per branding scrub)
  ] : []),
];

console.log(`Targets: ${targets.length}`);
console.log(`Output:  ${OUT_DIR}\n`);
fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch({ headless: true });

// Desktop pass — hero + fullpage
const desktop = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 2,
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
    '(KHTML, like Gecko) Chrome/121.0 Safari/537.36',
});
const dPage = await desktop.newPage();

for (const t of targets) {
  const dir = path.join(OUT_DIR, t.name);
  fs.mkdirSync(dir, { recursive: true });
  process.stdout.write(`[desktop] ${t.name.padEnd(22)} ${t.url} ... `);
  try {
    await dPage.goto(t.url, { waitUntil: 'networkidle', timeout: 35000 });
    // Dismiss common cookie banners (Cloudflare-style + Cookiebot)
    await dPage.evaluate(() => {
      const sel = [
        '#onetrust-accept-btn-handler',
        '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
        'button[aria-label="Accept all"i]',
        'button[aria-label="Accept All"i]',
        'button[id*="accept"i]',
      ];
      for (const s of sel) { const el = document.querySelector(s); if (el) { el.click(); break; } }
    }).catch(() => {});
    await dPage.waitForTimeout(1500);
    await dPage.screenshot({ path: path.join(dir, 'hero.png'), fullPage: false });
    await dPage.screenshot({ path: path.join(dir, 'fullpage.png'), fullPage: true });
    console.log('ok');
  } catch (err) {
    console.log(`FAIL (${err.message.split('\n')[0]})`);
  }
}
await desktop.close();

// Mobile pass — only the live products
const mobile = await browser.newContext({ ...devices['iPhone 14'] });
const mPage = await mobile.newPage();
for (const t of targets.filter((x) => x.kind === 'live')) {
  const dir = path.join(OUT_DIR, t.name);
  process.stdout.write(`[mobile]  ${t.name.padEnd(22)} ${t.url} ... `);
  try {
    await mPage.goto(t.url, { waitUntil: 'networkidle', timeout: 35000 });
    await mPage.waitForTimeout(1500);
    await mPage.screenshot({ path: path.join(dir, 'mobile.png'), fullPage: false });
    console.log('ok');
  } catch (err) {
    console.log(`FAIL (${err.message.split('\n')[0]})`);
  }
}
await mobile.close();

await browser.close();
console.log('\nDone.');
