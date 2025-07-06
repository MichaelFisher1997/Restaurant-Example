module.exports = {
  'Home page test': function (browser) {
    const baseUrl = browser.globals.baseUrl || 'http://localhost:4321';
    
    browser
      .url(baseUrl)
      .waitForElementVisible('body', 5000)
      .assert.titleEquals('The Golden Spoon - Welcome')
      .assert.visible('h1')
      .assert.containsText('h1', 'Welcome to The Golden Spoon')
      .assert.visible('section')
      .assert.containsText('h2', 'Featured Dishes')
      .assert.elementsCount('.grid > *', 3)
      .saveScreenshot('tests_output_new/screenshots/home.png')
      .end();
  }
};