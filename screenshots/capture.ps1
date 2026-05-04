# RealTech Pitch Deck - Screenshot Capture Script
# Uses Playwright to capture full-page screenshots of all referenced URLs
# Run from this folder: pwsh ./capture.ps1

param(
    [switch]$LiveOnly,        # Only capture our live products (skip competitors)
    [switch]$CompetitorsOnly, # Only capture competitor sites
    [switch]$Headed,          # Show browser instead of headless
    [string]$OutputDir = "../assets"
)

$ErrorActionPreference = "Stop"
$ScriptDir = $PSScriptRoot

Write-Host "`n================================" -ForegroundColor Cyan
Write-Host " Real Tech Pitch Deck" -ForegroundColor Cyan
Write-Host " Screenshot Capture Script" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

# Ensure Playwright is installed
$playwrightCheck = npm list -g @playwright/test 2>$null
if (-not $playwrightCheck) {
    Write-Host "Playwright not installed globally. Installing..." -ForegroundColor Yellow
    npm install -g @playwright/test
    npx playwright install chromium
}

# Build the capture list. Each entry: name, url, kind (live | competitor | concept)
$captureList = @(
    # OUR LIVE PRODUCTS
    @{ name = "real-tech-consultant";    url = "https://realtechconsultant.com"; kind = "live" }
    @{ name = "rovian-ai";                url = "https://www.rovian.ai";          kind = "live" }
    @{ name = "edgenote-ai";              url = "https://www.edgenote.ai";        kind = "live" }
    @{ name = "dealpayment";              url = "https://dealpayment.com";        kind = "live" }
    @{ name = "kith";                     url = "https://startakith.com";         kind = "live" }

    # COMPETITORS - Real Tech GTM
    @{ name = "competitor-apollo";        url = "https://apollo.io";               kind = "competitor" }
    @{ name = "competitor-clay";          url = "https://clay.com";                kind = "competitor" }
    @{ name = "competitor-hubspot-ops";   url = "https://hubspot.com/products/operations"; kind = "competitor" }

    # COMPETITORS - Rovian
    @{ name = "competitor-goodcall";      url = "https://goodcall.com";            kind = "competitor" }
    @{ name = "competitor-polyai";        url = "https://poly.ai";                 kind = "competitor" }
    @{ name = "competitor-smith";         url = "https://smith.ai";                kind = "competitor" }

    # COMPETITORS - Wedding
    @{ name = "competitor-aisleplanner";  url = "https://aisleplanner.com";        kind = "competitor" }
    @{ name = "competitor-theknot";       url = "https://theknot.com";             kind = "competitor" }
    @{ name = "competitor-zola";          url = "https://zola.com";                kind = "competitor" }

    # COMPETITORS - DealPayment
    @{ name = "competitor-escrow";        url = "https://escrow.com";              kind = "competitor" }
    @{ name = "competitor-cars";          url = "https://cars.com";                kind = "competitor" }

    # COMPETITORS - Channel Partner Portal
    @{ name = "competitor-servicechannel"; url = "https://servicechannel.com";     kind = "competitor" }
    @{ name = "competitor-buildingengines"; url = "https://buildingengines.com";   kind = "competitor" }
    @{ name = "competitor-buildinglink";  url = "https://buildinglink.com";        kind = "competitor" }

    # COMPETITORS - Cannabis HighTide
    @{ name = "competitor-dutchie";       url = "https://dutchie.com";             kind = "competitor" }
    @{ name = "competitor-treez";         url = "https://treez.io";                kind = "competitor" }
    @{ name = "competitor-flowhub";       url = "https://flowhub.com";             kind = "competitor" }

    # COMPETITORS - edgenote
    @{ name = "competitor-otter";         url = "https://otter.ai";                kind = "competitor" }
    @{ name = "competitor-fireflies";     url = "https://fireflies.ai";            kind = "competitor" }
    @{ name = "competitor-granola";       url = "https://granola.ai";              kind = "competitor" }

    # COMPETITORS - Kith
    @{ name = "competitor-tinybeans";     url = "https://tinybeans.com";           kind = "competitor" }
    @{ name = "competitor-caringbridge";  url = "https://caringbridge.org";        kind = "competitor" }

    # COMPETITORS - Baby Tracker
    @{ name = "competitor-huckleberry";   url = "https://huckleberrycare.com";     kind = "competitor" }
    @{ name = "competitor-glow";          url = "https://glowing.com";             kind = "competitor" }

    # COMPETITORS - Rehabit
    @{ name = "competitor-propstream";    url = "https://propstream.com";          kind = "competitor" }
    @{ name = "competitor-mashvisor";     url = "https://mashvisor.com";           kind = "competitor" }
    @{ name = "competitor-dealmachine";   url = "https://dealmachine.com";         kind = "competitor" }

    # CREDIBILITY / CONTEXT
    @{ name = "smartrent";                url = "https://smartrent.com";           kind = "context" }
)

# Filter
if ($LiveOnly) {
    $captureList = $captureList | Where-Object { $_.kind -eq "live" }
}
if ($CompetitorsOnly) {
    $captureList = $captureList | Where-Object { $_.kind -eq "competitor" }
}

Write-Host "Targets: $($captureList.Count)`n" -ForegroundColor Yellow

# Resolve output dir
$absOutput = Resolve-Path -Path (Join-Path $ScriptDir $OutputDir) -ErrorAction SilentlyContinue
if (-not $absOutput) {
    $newPath = Join-Path $ScriptDir $OutputDir
    New-Item -ItemType Directory -Path $newPath -Force | Out-Null
    $absOutput = Resolve-Path -Path $newPath
}

# Build a JS payload that Playwright will execute
$jsScript = @"
const { chromium, devices } = require('@playwright/test');

const targets = $($captureList | ConvertTo-Json -Compress);
const headed = $($Headed.IsPresent.ToString().ToLower());
const outputDir = '$($absOutput.Path -replace '\\', '/')';

(async () => {
  const browser = await chromium.launch({ headless: !headed });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Safari/537.36',
  });

  const page = await context.newPage();
  const fs = require('fs');
  const path = require('path');

  for (const t of targets) {
    const targetDir = path.join(outputDir, t.name);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    try {
      console.log(`[capture] ${t.name}: ${t.url}`);
      await page.goto(t.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1500); // let lazy images load

      // hero (above-the-fold)
      await page.screenshot({
        path: path.join(targetDir, 'hero.png'),
        fullPage: false,
      });

      // full page
      await page.screenshot({
        path: path.join(targetDir, 'fullpage.png'),
        fullPage: true,
      });

      console.log(`  -> saved ${targetDir}`);
    } catch (err) {
      console.error(`  !! failed ${t.url}: ${err.message}`);
    }
  }

  // Mobile pass for our LIVE products only
  const mobileContext = await browser.newContext({ ...devices['iPhone 14'] });
  const mobilePage = await mobileContext.newPage();
  for (const t of targets.filter(x => x.kind === 'live')) {
    const targetDir = path.join(outputDir, t.name);
    try {
      console.log(`[mobile] ${t.name}: ${t.url}`);
      await mobilePage.goto(t.url, { waitUntil: 'networkidle', timeout: 30000 });
      await mobilePage.waitForTimeout(1500);
      await mobilePage.screenshot({
        path: path.join(targetDir, 'mobile.png'),
        fullPage: false,
      });
    } catch (err) {
      console.error(`  !! mobile failed ${t.url}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('Done.');
})();
"@

# Write and run
$jsPath = Join-Path $ScriptDir "_capture.tmp.js"
$jsScript | Out-File -FilePath $jsPath -Encoding utf8

Write-Host "Running Playwright capture..." -ForegroundColor Cyan
node $jsPath

Remove-Item $jsPath -ErrorAction SilentlyContinue

Write-Host "`n[done] Screenshots saved to: $($absOutput.Path)" -ForegroundColor Green
Write-Host "Each target has: hero.png, fullpage.png, mobile.png (live only)`n" -ForegroundColor Green
