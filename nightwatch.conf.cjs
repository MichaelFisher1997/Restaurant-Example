module.exports = {
  src_folders: ['tests'],
  test_pattern: '*.test.cjs',
  output_folder: 'tests_output_new',
  custom_commands_path: ['tests/custom-commands'],
  
  reporter: ['junit', 'json'],
  
  webdriver: {
    start_process: true,
    server_path: '',
    cli_args: {
      'webdriver.chrome.driver': ''
    }
  },
  
  test_settings: {
    default: {
      webdriver: {
        port: 9515,
        default_path_prefix: '',
        start_process: true,
        server_path: '',
        cli_args: ['--port=9515']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--headless',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--window-size=1920,1080',
            '--disable-extensions',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding'
          ]
        }
      },
      globals: {
        baseUrl: 'http://localhost:4321'
      }
    },
    
    docker: {
      webdriver: {
        start_process: false,
        host: 'localhost',
        port: 4444,
        default_path_prefix: '/wd/hub'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--headless',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--window-size=1920,1080',
            '--disable-web-security',
            '--disable-features=VizDisplayCompositor',
            '--ignore-certificate-errors',
            '--ignore-ssl-errors',
            '--ignore-certificate-errors-spki-list',
            '--ignore-certificate-errors-ssl-errors',
            '--allow-running-insecure-content',
            '--disable-extensions',
            '--disable-background-networking',
            '--disable-sync',
            '--disable-translate',
            '--disable-ipc-flooding-protection',
            '--disable-client-side-phishing-detection',
            '--disable-component-update',
            '--disable-default-apps',
            '--disable-zero-browsers-open-for-tests',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding',
            '--disable-background-timer-throttling',
            '--force-fieldtrials=*BackgroundTracing/default/',
            '--disable-hang-monitor',
            '--disable-prompt-on-repost',
            '--disable-domain-reliability',
            '--disable-features=TranslateUI,BlinkGenPropertyTrees'
          ]
        }
      },
      globals: {
        baseUrl: 'http://prod:6543'
      }
    }
  }
};