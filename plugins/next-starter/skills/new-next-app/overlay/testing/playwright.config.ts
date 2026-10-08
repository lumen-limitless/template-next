import { defineConfig, devices } from "@playwright/test";

const WEBSERVER_TIMEOUT_MS = 6 * 60 * 1000;
const BASE_URL =
  process.env.PLAYWRIGHT_TEST_BASE_URL ?? "http://127.0.0.1:3000";

// See https://playwright.dev/docs/test-configuration
export default defineConfig({
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  reporter: "html",
  retries: process.env.CI ? 2 : 0,
  testDir: "./tests/e2e",
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },
  // Runs against a production build; set PLAYWRIGHT_TEST_BASE_URL to test a deployment instead.
  webServer: process.env.PLAYWRIGHT_TEST_BASE_URL
    ? undefined
    : {
        command: "pnpm build && pnpm start",
        reuseExistingServer: !process.env.CI,
        timeout: WEBSERVER_TIMEOUT_MS,
        url: BASE_URL,
      },
  workers: process.env.CI ? 1 : undefined,
});
