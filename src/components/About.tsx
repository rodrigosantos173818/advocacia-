import { ArrowRight, Check } from 'lucide-react'
import { siteConfig } from '../config/site'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function About() {
  const { about } = siteConfig
  return <section id="sobre" tabIndex={-1} className="section section-about" aria-label="Sobre o escritório"><div className="container about-grid">
    <Reveal className="about-visual"><figure><img src={about.image} width="800" height="960" loading="lazy" alt={about.imageAlt} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = '/images/office-fallback.svg' }} /><figcaption>{about.imageCaption}</figcaption></figure><div className="about-caption"><span>Um olhar atento.</span><em>Uma escuta presente.</em></div></Reveal>
    <Reveal delay={0.1} className="about-copy"><SectionHeading eyebrow={about.eyebrow} title={about.title} description={about.description} /><ul className="values-list">{about.values.map(value => <li key={value}><Check size={17} strokeWidth={1.4} aria-hidden="true" />{value}</li>)}</ul><a href="#processo" className="text-link">Ver estrutura de atendimento<ArrowRight size={17} aria-hidden="true" /></a><span className="small-label">APRESENTAÇÃO INSTITUCIONAL ILUSTRATIVA</span></Reveal>
  </div></section>
}
