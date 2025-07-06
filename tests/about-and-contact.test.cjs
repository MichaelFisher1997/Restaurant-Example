module.exports = {
  'About & Contact page test': function (browser) {
    const baseUrl = browser.globals.baseUrl || 'http://localhost:4321';
    
    browser
      .url(baseUrl + '/about-and-contact')
      .waitForElementVisible('body', 5000)
      .assert.titleEquals('About & Contact - The Golden Spoon')
      .assert.visible('h1')
      .assert.containsText('h1', 'About The Golden Spoon')
      .assert.visible('h2')
      .assert.containsText('h2', 'Contact Us')
      .saveScreenshot('tests_output_new/screenshots/about-and-contact.png')
      .end();
  }
};
