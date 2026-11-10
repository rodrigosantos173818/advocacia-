export function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow: string; title: string; description?: string; centered?: boolean }) {
  return <div className={`section-heading ${centered ? 'section-heading--centered' : ''}`}>
    <p className="eyebrow"><span />{eyebrow}</p>
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </div>
}
