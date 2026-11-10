import { ArrowUpRight, Scale, UsersRound, ShoppingBag, ShieldCheck, Landmark, GitBranch } from 'lucide-react'
import { siteConfig } from '../config/site'
import type { PracticeIcon } from '../data/practiceAreas'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const icons = { scale: Scale, family: UsersRound, consumer: ShoppingBag, pension: ShieldCheck, bank: Landmark, succession: GitBranch } satisfies Record<PracticeIcon, typeof Scale>

export function PracticeAreas() {
  return <section id="areas" tabIndex={-1} className="section section-areas" aria-labelledby="areas-title"><div className="container">
    <Reveal className="section-intro"><div id="areas-title"><SectionHeading eyebrow={siteConfig.areas.eyebrow} title={siteConfig.areas.title} /></div><p className="intro-aside">{siteConfig.areas.description}</p></Reveal>
    <div className="practice-grid">{siteConfig.practiceAreas.map((area, index) => {
      const Icon = icons[area.icon]
      return <Reveal key={area.id} delay={(index % 3) * 0.06}><article className="practice-card"><div className="practice-card-top"><Icon size={30} strokeWidth={1.2} aria-hidden="true" /><span>0{index + 1}</span></div><h3>{area.title}</h3><p>{area.description}</p><a href="#processo" aria-label={`Saiba mais sobre ${area.title}: ver fluxo ilustrativo`}>Saiba mais<ArrowUpRight size={16} aria-hidden="true" /></a></article></Reveal>
    })}</div>
    <p className="section-note">{siteConfig.areas.note}</p>
  </div></section>
}
