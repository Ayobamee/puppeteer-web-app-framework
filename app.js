const puppeteer = require("puppeteer");
const { login } = require("./actions/login");
const { navigate } = require("./actions/navigate");
const { closeBrowser } = require("./utilities");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // await navigate(page, "https://example.com");
    await login(page, "ay@mail.com", "pass1234");
    // Add more automation tasks here.
  } catch (error) {
    console.error("Automation error:", error);
  } finally {
    await closeBrowser(browser);
  }
})();
