// actions/login.js
async function login(page, username, password) {
  await page.goto("https://academy.quales.tech/login");
  await page.type('input[type="text"]', username);
  await page.type('input[type="password"]', password);
  await page.click("#submit");
  await page.waitForNavigation();
}

module.exports = { login };
