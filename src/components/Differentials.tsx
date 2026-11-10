import { Fingerprint, MessagesSquare, ScanLine } from 'lucide-react'
import { siteConfig } from '../config/site'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const icons = [Fingerprint, MessagesSquare, ScanLine]
export function Differentials() {
  const content = siteConfig.differentials
  return <section id="diferenciais" tabIndex={-1} className="section section-differentials dark-section" aria-label="Diferenciais ilustrativos"><div className="container"><Reveal><SectionHeading {...content} centered /></Reveal><div className="pillars-grid">{content.items.map((item, index) => {
    const Icon = icons[index]
    return <Reveal key={item.title} delay={index * 0.07}><article className="pillar"><Icon size={34} strokeWidth={1.1} aria-hidden="true" /><span className="pillar-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article></Reveal>
  })}</div></div></section>
}
