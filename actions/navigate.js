// actions/navigate.js
async function navigate(page, url) {
  await page.goto(url);
  await page.waitForSelector("body");
}

module.exports = { navigate };
