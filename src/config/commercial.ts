export function buildCommercialCtaUrl(destination: string, message: string): string {
  const url = new URL(destination)
  if (url.protocol !== 'https:') throw new Error('O CTA comercial deve usar uma URL HTTPS.')
  if (url.hostname === 'wa.me' || url.hostname === 'api.whatsapp.com') {
    url.searchParams.set('text', message)
    return url.href
  }
  return destination
}
