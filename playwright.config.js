const { devices } = require('@playwright/test');

const config = {
     testDir: './tests',              
  timeout: 30 * 1000,               
  expect: {
    timeout: 5000                   
  },
  use: {
    headless: true,
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',     // Capture screenshots on test failures
    video: 'on',        // Keep videos of all tests
    trace: 'retain-on-failure' // Keep traces for debugging on test failures
  },
  reporter: [
  ['list'],
  ['html'],
  ['allure-playwright']
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
     {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
  ],
};
module.exports = config;