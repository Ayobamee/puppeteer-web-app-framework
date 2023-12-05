// tests/example.test.js
const puppeteer = require("puppeteer");
const { login } = require("../actions/login");
const config = require("../config");

describe("Example automation", () => {
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
    await login(page, "user@example.com", "password123");
    // Assertions here
  });
});
