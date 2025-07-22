# Automate Shopping

This project automates an end-to-end shopping flow using [Playwright](https://playwright.dev/) for browser automation and [Allure](https://docs.qameta.io/allure/) for test reporting.

## Features

- Login as registered user
- Add products to cart
- Review cart and checkout
- Fill checkout information
- Verify order confirmation
- Logout
- Cross-browser support (Chromium, Firefox)
- Allure reporting integration

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/automate_shopping.git
   cd automate_shopping
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

### Environment Variables

Set the following environment variables for login credentials (in your terminal or CI/CD settings):

- `CHROME_USER`
- `CHROME_PASS`
- `FIREFOX_USER`
- `FIREFOX_PASS`

Example for Linux/macOS:
```sh
export CHROME_USER=your_username
export CHROME_PASS=your_password
export FIREFOX_USER=your_username
export FIREFOX_PASS=your_password
```

Example for Windows (Command Prompt):
```cmd
set CHROME_USER=your_username
set CHROME_PASS=your_password
set FIREFOX_USER=your_username
set FIREFOX_PASS=your_password
```

### Running Tests

To run all Playwright tests:
```sh
npm test
```

To run tests with Allure reporting:
```sh
npm run report
```

To view the Allure report:
```sh
npx allure serve allure-results
```

### GitHub Actions

Tests are automatically run on every push and pull request via GitHub Actions.  
See `.github/workflows/test.yml` for details.

## Project Structure

```
pages/           # Page Object Model classes
tests/           # Test specs
allure-results/  # Allure report output
.github/         # GitHub Actions workflows
```

## Reporting

Allure results are generated in the `allure-results` folder.  
You can customize environment details in `allure-results/environment.properties`.

## Author

- **Owner:** Rehmat Nalban

## License

This project is licensed under the MIT License.
