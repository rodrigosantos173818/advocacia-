import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '../config/site'

export function PrivacyPage() {
  return <main id="conteudo" tabIndex={-1} className="privacy-page"><div className="container privacy-container"><a href="#inicio" className="text-link"><ArrowLeft size={17} aria-hidden="true" />Voltar à demonstração</a><p className="eyebrow"><span />PROJETO DEMONSTRATIVO · WR TECH</p><h1>{siteConfig.privacy.title}</h1><p className="privacy-intro">{siteConfig.privacy.description}</p>{siteConfig.privacy.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}<p className="privacy-credit">Desenvolvimento de sites: <a href={siteConfig.wrTech.website}>{siteConfig.wrTech.name}</a>.</p></div></main>
}
