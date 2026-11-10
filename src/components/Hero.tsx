import { ArrowDown, ArrowRight, CircleCheck } from 'lucide-react'
import { siteConfig } from '../config/site'
import { Reveal } from './Reveal'

export function Hero() {
  const { hero } = siteConfig
  return <section id="inicio" tabIndex={-1} className="hero dark-section" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <Reveal className="hero-copy">
        <p className="eyebrow"><span />{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.title.includes(hero.titleEmphasis) ? <>{hero.title.split(hero.titleEmphasis)[0]}<em>{hero.titleEmphasis}</em>{hero.title.split(hero.titleEmphasis)[1]}</> : hero.title}</h1>
        <p className="hero-description">{hero.description}</p>
        <div className="hero-actions"><a href="#areas" className="button button--gold">Conhecer áreas de atuação<ArrowUpRightIcon /></a><a href="#processo" className="hero-secondary">Como funciona o atendimento <ArrowRight size={15} aria-hidden="true" /></a></div>
        <p className="hero-demo"><CircleCheck size={14} aria-hidden="true" />Uma experiência de site. Um escritório fictício.</p>
      </Reveal>
      <Reveal delay={0.15} className="hero-visual">
        <figure className="hero-figure"><picture><source media="(max-width: 600px)" srcSet={hero.imageSmall} /><img className="hero-image" src={hero.image} alt={hero.imageAlt} width="1000" height="1250" fetchPriority="high" onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = '/images/office-fallback.svg'; const source = event.currentTarget.parentElement?.querySelector('source'); source?.remove() }} /></picture><figcaption>{hero.imageCaption}</figcaption></figure>
        <div className="image-signature"><span className="signature-symbol" aria-hidden="true">M<span>∕</span>A</span><span>{hero.signature}<small>O CUIDADO COMO PONTO DE PARTIDA</small></span></div>
        <span className="image-side-label" aria-hidden="true">MONTEIRO & ASSOCIADOS · ADVOCACIA</span>
      </Reveal>
    </div>
    <div className="container hero-bottom"><a href="#areas"><ArrowDown size={14} aria-hidden="true" /> EXPLORE A DEMONSTRAÇÃO</a><span>Uma presença que inspira confiança.</span></div>
  </section>
}

function ArrowUpRightIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg> }
