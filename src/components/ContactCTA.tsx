import { LockKeyhole } from 'lucide-react'
import { siteConfig } from '../config/site'
import { Reveal } from './Reveal'

export function ContactCTA() {
  const content = siteConfig.contactCTA
  return <section className="contact-banner dark-section" aria-label="Contato jurídico demonstrativo"><div className="container"><Reveal className="contact-banner-grid"><div><p className="eyebrow"><span />{content.eyebrow}</p><h2>{content.title}</h2><p>{content.description}</p></div><div className="contact-demo-action"><button className="button button--disabled" disabled aria-describedby="contact-disabled-note"><LockKeyhole size={16} aria-hidden="true" />{content.disabledLabel}</button><p id="contact-disabled-note">{content.notice}</p></div></Reveal></div></section>
}
