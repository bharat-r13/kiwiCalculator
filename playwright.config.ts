
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    // Retry configuration - retry each test 3 times before marking as failed
    retries: 3,

    // Projects configuration to run on multiple browsers in parallel
    projects: [
        {
            name: 'web-chrome',
            use: {
                ...devices['Desktop Chrome'],
                headless: false,               // Disable headless for local debugging (can be true in CI)
                screenshot: 'only-on-failure', // Capture screenshot only on failure
                video: 'on-first-retry',       // Record video of failed tests
                trace: 'on-first-retry',       // Optionally enable trace capture for debugging
                locale: 'en-US',               // Set locale to 'en-US' (optional)
                timezoneId: 'Pacific/Auckland',// Set your timezone (optional, adjust for local testing)
            },
        },
        {
            name: 'web-firefox',
            use: {
                ...devices['Desktop Firefox'],
                headless: true,                // Firefox in headless mode (adjust as needed)
                screenshot: 'only-on-failure',
                video: 'on-first-retry',
                trace: 'on-first-retry',
                locale: 'en-US',
                timezoneId: 'Pacific/Auckland',
            },
        },
        {
            name: 'web-webkit',
            use: {
                ...devices['Desktop Safari'],
                headless: true,                // Webkit in headless mode (adjust as needed)
                screenshot: 'only-on-failure',
                video: 'on-first-retry',
                trace: 'on-first-retry',
                locale: 'en-US',
                timezoneId: 'Pacific/Auckland',
            },
        },
    ],

    // Global configuration for parallel execution
    workers: 3, // Number of parallel workers to run (adjust based on your available resources)
});
