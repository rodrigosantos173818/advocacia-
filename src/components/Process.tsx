import { Info } from 'lucide-react'
import { siteConfig } from '../config/site'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Process() {
  const content = siteConfig.process
  return <section id="processo" tabIndex={-1} className="section section-process" aria-label="Fluxo ilustrativo de atendimento"><div className="container"><Reveal className="section-intro"><SectionHeading eyebrow={content.eyebrow} title={content.title} /><p className="intro-aside">{content.description}</p></Reveal><ol className="timeline">{content.steps.map((step, index) => <li key={step.title}><Reveal delay={index * 0.07}><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></Reveal></li>)}</ol><p className="process-notice"><Info size={17} aria-hidden="true" />{content.note}</p></div></section>
}
