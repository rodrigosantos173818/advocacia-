import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { siteConfig } from './src/config/site.ts'

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)

export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'demo-metadata',
    transformIndexHtml(html) {
      const seo = siteConfig.seo
      const values: Record<string, string> = {
        TITLE: seo.title, DESCRIPTION: seo.description,
        SOCIAL_TITLE: seo.socialTitle, SOCIAL_DESCRIPTION: seo.socialDescription,
        SOCIAL_IMAGE: seo.canonicalUrl ? new URL(seo.image, seo.canonicalUrl).href : seo.image, SOCIAL_IMAGE_ALT: seo.imageAlt,
        ROBOTS: siteConfig.isDemo || seo.noIndex ? 'noindex, nofollow' : 'index, follow',
      }
      return {
        html: html.replace(/__([A-Z_]+)__/g, (_, key: string) => escapeHtml(values[key] ?? '')),
        tags: seo.canonicalUrl ? [{ tag: 'link', attrs: { rel: 'canonical', href: seo.canonicalUrl }, injectTo: 'head' as const }] : [],
      }
    },
  }],
})
