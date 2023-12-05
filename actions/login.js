// Define selectors for login elements
const SELECTORS = {
  usernameInput: 'input[type="text"]',
  passwordInput: 'input[type="password"]',
  submitButton: "aria/LOGIN",
};

const baseUrl = "https://academy.quales.tech/login";

async function login(page, username, password) {
  await page.goto(baseUrl);
  await page.type(SELECTORS.usernameInput, username);
  await page.type(SELECTORS.passwordInput, password);
  await page.click(SELECTORS.submitButton);
  await page.waitForNavigation();
}

module.exports = { login };
