module.exports = {
  'Open Times page test': function (browser) {
    const baseUrl = browser.globals.baseUrl || 'http://localhost:4321';
    
    browser
      .url(baseUrl + '/open-times')
      .waitForElementVisible('body', 5000)
      .assert.titleEquals('Open Times - The Golden Spoon')
      .assert.visible('h1')
      .assert.containsText('h1', 'Our Open Times')
      .assert.visible('div')
      .saveScreenshot('tests_output_new/screenshots/open-times.png')
      .end();
  }
};