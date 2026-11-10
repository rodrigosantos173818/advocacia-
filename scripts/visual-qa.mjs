import { chromium } from '@playwright/test'
import { mkdir, writeFile } from 'node:fs/promises'

await mkdir('.qa', { recursive: true })
const browser = await chromium.launch({ channel: 'chrome' })
const context = await browser.newContext({ reducedMotion: 'reduce' })
const page = await context.newPage()
const errors = []
page.on('pageerror', error => errors.push(error.message))
const report = []
try {
  for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto('http://127.0.0.1:5173/')
    await page.evaluate(() => document.fonts.ready)
    for (const image of await page.locator('main img').all()) {
      await image.scrollIntoViewIfNeeded()
      await image.evaluate(image => image.decode())
    }
    await page.locator('footer').scrollIntoViewIfNeeded()
    await page.locator('h1').scrollIntoViewIfNeeded()
    await page.screenshot({ path: `.qa/${width}-full.png`, fullPage: true })
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.screenshot({ path: `.qa/${width}-fold.png` })
    report.push(await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, h1: document.querySelector('h1').getBoundingClientRect().toJSON(), brokenImages: [...document.images].filter(image => !image.complete || !image.naturalWidth).map(image => image.src) })))
  }
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('http://127.0.0.1:5173/')
  await page.getByRole('button', { name: 'Abrir menu' }).click()
  await page.screenshot({ path: '.qa/mobile-menu.png' })
  await page.keyboard.press('Escape')
  for (const [name, selector] of [['areas', '#areas'], ['about', '#sobre'], ['process', '#processo'], ['contact', '#contato'], ['footer', 'footer']]) {
    await page.locator(selector).screenshot({ path: `.qa/mobile-${name}.png` })
  }
  await page.goto('http://127.0.0.1:5173/#privacidade')
  await page.screenshot({ path: '.qa/privacy.png', fullPage: true })
  await writeFile('.qa/report.json', JSON.stringify({ report, errors }, null, 2))
  console.info(JSON.stringify({ report, errors }, null, 2))
} finally { await browser.close() }
