import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/site'
import { buildCommercialCtaUrl } from '../config/commercial'

export function WrTechCTA({ variant = 'outline' }: { variant?: 'outline' | 'gold' | 'text' }) {
  const href = buildCommercialCtaUrl(siteConfig.wrTech.ctaUrl, siteConfig.wrTech.whatsappMessage)
  return <a className={`button button--${variant} wr-cta`} href={href}>{siteConfig.wrTech.ctaLabel}<ArrowUpRight size={16} aria-hidden="true" /></a>
}
