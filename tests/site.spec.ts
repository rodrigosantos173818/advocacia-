import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('demonstração clara, navegação completa e contatos sem coleta', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await expect(page.locator('header')).toContainText('Projeto demonstrativo')
  await expect(page.locator('header')).toContainText('Escritório fictício')
  for (const id of ['inicio', 'areas', 'sobre', 'diferenciais', 'processo', 'contato']) {
    await expect(page.locator(`#${id}`)).toHaveCount(1)
  }
  await expect(page.locator('.practice-card')).toHaveCount(6)
  await expect(page.getByRole('button', { name: 'Contato do escritório (demonstração)' })).toBeDisabled()
  await expect(page.locator('form, input, textarea, iframe')).toHaveCount(0)
  await expect(page.locator('a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me"]')).toHaveCount(0)
  for (const link of await page.locator('a.wr-cta').all()) {
    await expect(link).toHaveAttribute('href', 'https://www.wrtechbrasil.com.br/')
  }
  expect(await page.locator('a.wr-cta').count()).toBeGreaterThanOrEqual(3)
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow')
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0)
})

test('menu móvel fecha por Escape, clique fora e seleção com foco no destino', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const trigger = page.getByRole('button', { name: 'Abrir menu' })
  await trigger.click()
  await expect(page.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true')
  await page.keyboard.press('Escape')
  await expect(trigger).toBeFocused()
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  await trigger.click()
  await page.mouse.click(10, 700)
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  await trigger.click()
  await page.getByRole('navigation', { name: 'Navegação principal' }).getByRole('link', { name: 'Áreas de atuação', exact: true }).click()
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
  await expect(page.locator('#areas')).toBeFocused()
})

test('política explica ausência de coleta e permite voltar', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Política de privacidade' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Privacidade da demonstração.')
  await expect(page.getByRole('main')).toContainText('Não utilizamos cookies de marketing')
  await page.getByRole('link', { name: 'Voltar à demonstração' }).click()
  await expect(page.locator('#inicio')).toBeVisible()
})

test('sem overflow nas sete larguras e imagens carregadas', async ({ page }) => {
  await page.goto('/')
  for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 })
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow em ${width}px`).toBe(true)
  }
  await expect(page.locator('.hero-image')).toBeVisible()
  expect(await page.locator('.hero-image').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true)
})

test('teclado, movimento reduzido e acessibilidade WCAG', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Pular para o conteúdo' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  await page.locator('footer').scrollIntoViewIfNeeded()
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  expect(results.violations).toEqual([])
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto')
})
