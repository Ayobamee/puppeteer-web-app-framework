// utilities/index.js
async function closeBrowser(browser) {
    await browser.close();
  }
  
  module.exports = { closeBrowser };
  