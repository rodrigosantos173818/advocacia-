import { test, expect } from '@playwright/test'
import { buildCommercialCtaUrl } from '../src/config/commercial.ts'

test('CTA mantém site comercial e prepara mensagem sem inventar número', () => {
  const website = 'https://www.wrtechbrasil.com.br/'
  expect(buildCommercialCtaUrl(website, 'Olá!')).toBe(website)
  // Sem número no teste: o helper deve preservar o caminho fornecido.
  const whatsapp = new URL(buildCommercialCtaUrl('https://wa.me/', 'Olá! Quero um orçamento.'))
  expect(whatsapp.pathname).toBe('/')
  expect(whatsapp.searchParams.get('text')).toBe('Olá! Quero um orçamento.')
  expect(() => buildCommercialCtaUrl('javascript:alert(1)', '')).toThrow()
})
