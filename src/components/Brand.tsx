import { siteConfig } from '../config/site'

export function Brand({ compact = false }: { compact?: boolean }) {
  return <span className={`brand ${compact ? 'brand--compact' : ''}`}>
    <img src={siteConfig.brand.logo} width="44" height="44" alt="" className="brand-mark" />
    <span><span className="brand-name">{siteConfig.brand.name}</span><span className="brand-subtitle">{siteConfig.brand.subtitle}</span></span>
  </span>
}
