module.exports = {
  'How to Find Us page test': function (browser) {
    const baseUrl = browser.globals.baseUrl || 'http://localhost:4321';
    
    browser
      .url(baseUrl + '/find-us')
      .waitForElementVisible('body', 5000)
      .assert.titleEquals('How to Find Us - The Golden Spoon')
      .assert.visible('h1')
      .assert.containsText('h1', 'How to Find Us')
      .assert.visible('div')
      .assert.visible('p')
      .saveScreenshot('tests_output_new/screenshots/find-us.png')
      .end();
  }
};