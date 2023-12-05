// tests/example.test.js
const puppeteer = require("puppeteer");
const { login } = require("../actions/login");
const config = require("../config");

describe("Quales login app automation", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch(config);
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it("should log in successfully", async () => {
    await login(page, "ay@mail.com", "pass1234");
    // Wait for navigation to the expected page after login
    await page.waitForNavigation({ waitUntil: "networkidle0" });

    // Get the current URL
    const currentUrl = await page.url();

    // Assert that the current URL is the expected URL
    expect(currentUrl).toBe("https://academy.quales.tech/courses");
  }, 10000); // Set timeout to 10 seconds
});
