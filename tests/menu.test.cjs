module.exports = {
  'Menu Test': function (browser) {
    const baseUrl = browser.globals.baseUrl || 'http://localhost:4321';
    
    browser
      .url(baseUrl + '/menu')
      .waitForElementVisible('body', 5000)
      .assert.titleEquals('Our Menu - The Golden Spoon')
      .assert.visible('h1')
      .assert.containsText('h1', 'Our Delicious Menu')
      .assert.visible('section')
      .assert.elementsCount('section', 4)
      .saveScreenshot('tests_output_new/screenshots/menu.png')
      .end();
  }
};