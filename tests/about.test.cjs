module.exports = {
  'About Us page test': function (browser) {
    const baseUrl = browser.globals.baseUrl || 'http://localhost:4321';
    
    browser
      .url(baseUrl + '/about')
      .waitForElementVisible('body', 5000)
      .assert.titleEquals('About Us - The Golden Spoon')
      .assert.visible('h1')
      .assert.containsText('h1', 'About The Golden Spoon')
      .assert.visible('div')
      .assert.visible('p')
      .saveScreenshot('tests_output_new/screenshots/about.png')
      .end();
  }
};