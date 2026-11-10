import { MapPin, Phone, Mail, Clock3, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/site'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { WrTechCTA } from './WrTechCTA'

export function ContactDemo() {
  const content = siteConfig.contact
  const details = [{ Icon: MapPin, label: 'ENDEREÇO', text: content.address }, { Icon: Phone, label: 'TELEFONE', text: content.phone }, { Icon: Mail, label: 'E-MAIL', text: content.email }, { Icon: Clock3, label: 'HORÁRIOS', text: content.hours }]
  return <><section id="contato" tabIndex={-1} className="section section-contact" aria-label="Contato e localização demonstrativos"><div className="container contact-grid"><Reveal><SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} /><p className="contact-name">{content.name}</p><dl className="contact-details">{details.map(({ Icon, label, text }) => <div key={label}><dt><Icon size={21} strokeWidth={1.3} aria-hidden="true" />{label}</dt><dd>{text}</dd></div>)}</dl></Reveal><Reveal delay={0.1} className="map-placeholder"><div className="map-art" aria-hidden="true"><span className="map-block block-one" /><span className="map-block block-two" /><span className="map-block block-three" /><span className="map-block block-four" /><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /></div><div className="map-message"><MapPin size={31} strokeWidth={1.1} aria-hidden="true" /><p>O endereço da sua marca.<br /><em>O próximo ponto de encontro.</em></p><span>MAPA DEMONSTRATIVO · SEM LOCALIZAÇÃO REAL</span></div><p className="map-note">{content.note}</p></Reveal></div></section>
    <section className="wr-section" aria-label="Desenvolvimento de sites pela WR Tech"><div className="container"><Reveal className="wr-panel"><div className="wr-wordmark" aria-label="WR Tech">WR<span>TECH</span><ArrowUpRight aria-hidden="true" /></div><div className="wr-copy"><p className="eyebrow">DESENVOLVIMENTO DE SITES · WR TECH</p><h2>{siteConfig.wrTech.title}</h2><p>{siteConfig.wrTech.description}</p></div><WrTechCTA variant="gold" /></Reveal></div></section></>
}
