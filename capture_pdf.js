const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Use local file so all assets load correctly
  const url = 'file:///' + path.resolve(__dirname, 'portfolio.html').replace(/\\/g, '/');
  console.log('Loading:', url);

  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

  // Wait a bit for any lazy-loaded images
  await page.waitForTimeout(3000);

  // Get full page height and set viewport
  const height = await page.evaluate(() => document.body.scrollHeight);
  console.log('Page height:', height);
  await page.setViewportSize({ width: 1280, height });
  await page.waitForTimeout(1000);

  // Full-page screenshot
  await page.screenshot({
    path: 'portfolio_full.jpg',
    fullPage: true,
    type: 'jpeg',
    quality: 70,
  });
  console.log('Screenshot saved: portfolio_full.jpg');

  console.log('Saved: portfolio_final.pdf');
  await browser.close();
})();
