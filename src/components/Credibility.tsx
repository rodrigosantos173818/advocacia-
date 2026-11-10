import { Fingerprint, MessageCircle, Landmark } from 'lucide-react'
import { siteConfig } from '../config/site'

const icons = [Fingerprint, MessageCircle, Landmark]
export function Credibility() {
  return <div className="credibility"><div className="container credibility-grid">{siteConfig.credibility.map((item, index) => {
    const Icon = icons[index]
    return <div className="credibility-item" key={item.title}><Icon size={27} strokeWidth={1.2} aria-hidden="true" /><div><p>{item.title}</p><span>{item.detail}</span></div></div>
  })}</div></div>
}
