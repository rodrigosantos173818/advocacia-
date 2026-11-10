import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/site'
import { Brand } from './Brand'
import { WrTechCTA } from './WrTechCTA'

export function Footer() {
  return <footer className="site-footer dark-section"><div className="container"><div className="footer-main"><div className="footer-brand"><a href="#inicio" className="brand-link" aria-label={`${siteConfig.brand.name} — Início`}><Brand /></a><p>{siteConfig.demo.footer}</p></div><div className="footer-links"><p className="small-label">NAVEGUE</p><nav aria-label="Navegação do rodapé">{siteConfig.navigation.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav></div><div className="footer-wr"><p className="small-label">SUA PRESENÇA DIGITAL</p><p>Um projeto pensado nos detalhes.<br />Uma possibilidade para sua marca.</p><WrTechCTA variant="text" /></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {siteConfig.brand.name}. Projeto fictício.</p><a href="#privacidade">Política de privacidade</a><a href={siteConfig.wrTech.website}>Projeto desenvolvido por <strong>{siteConfig.wrTech.name}</strong><ArrowUpRight size={13} aria-hidden="true" /></a></div></div></footer>
}
