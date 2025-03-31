This project uses Playwright to automate end-to-end tests for the KiwiSaver Calculator on Westpac's website.

Features:
Cross-browser Testing: Runs on Chrome, Firefox, and WebKit.

Test Retries: Automatically retries failed tests up to 3 times.

Parallel Execution: Runs tests across 3 workers for faster results.

Screenshots & Videos: Captures screenshots on failure and videos on first retries.

Setup:
Install Dependencies:

```npm install```


Run Tests:
```npx playwright test```

Tests Include:
Happy Path for First Home: Verifies flow when selecting "First Home."

Calculator UI: Ensures proper visibility and interactions with the calculator's sections and buttons.

Key Files:
kiwiSaverData.ts: Contains the sample test data for the KiwiSaver calculator.

helpers.ts: Contains reusable helper functions for interactions.

kiwiSaverPage.ts: Contains locators and actions for interacting with the KiwiSaver calculator page.

Note: These key files (kiwiSaverData.ts, helpers.ts, and kiwiSaverPage.ts) are currently not in use. However, 
they provide a solid foundation for expanding the framework. These can be leveraged in the future to enhance 
the framework, making it more robust and reusable across different tests and scenarios.

Configuration:
Browsers: Chrome, Firefox, WebKit.

Retries: 3 retries per test.