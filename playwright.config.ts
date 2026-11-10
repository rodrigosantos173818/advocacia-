import { defineConfig, devices } from '@playwright/test'

const production = process.env.PLAYWRIGHT_PRODUCTION === '1'
const baseURL = production ? 'http://127.0.0.1:4173' : 'http://127.0.0.1:5173'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL, channel: 'chrome', trace: 'retain-on-failure' },
  webServer: {
    command: production ? 'npm run preview -- --port 4173 --strictPort' : 'npm run dev -- --port 5173 --strictPort',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1000 } } },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium', channel: 'chrome' } },
  ],
})
