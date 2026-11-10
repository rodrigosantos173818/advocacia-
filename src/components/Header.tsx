import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { siteConfig } from '../config/site'
import { Brand } from './Brand'
import { WrTechCTA } from './WrTechCTA'

export function Header({ privacy = false }: { privacy?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const root = useRef<HTMLElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24)
    scroll()
    window.addEventListener('scroll', scroll, { passive: true })
    return () => window.removeEventListener('scroll', scroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus() }
    }
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false) }
    const desktop = window.matchMedia('(min-width: 1100px)')
    const resize = () => { if (desktop.matches) setOpen(false) }
    document.addEventListener('keydown', key)
    document.addEventListener('pointerdown', outside)
    desktop.addEventListener('change', resize)
    return () => {
      document.removeEventListener('keydown', key)
      document.removeEventListener('pointerdown', outside)
      desktop.removeEventListener('change', resize)
    }
  }, [open])

  return <header ref={root} className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="demo-notice"><div className="container demo-notice-inner"><span><span className="demo-dot" />{siteConfig.demo.notice}</span><a href={siteConfig.wrTech.website}>Um projeto WR Tech <ArrowUpRight size={11} aria-hidden="true" /></a></div></div>
    <div className="container header-inner">
      <a href="#inicio" className="brand-link" aria-label={`${siteConfig.brand.name} — Início`} onClick={() => setOpen(false)}><Brand /></a>
      <nav aria-label="Navegação principal" className="desktop-navigation">
        {siteConfig.navigation.map(link => <a key={link.href} href={link.href} aria-current={!privacy && link.href === '#inicio' ? 'location' : undefined}>{link.label}</a>)}
      </nav>
      <div className="header-cta"><WrTechCTA /></div>
      <button ref={trigger} className="menu-trigger" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    </div>
    <AnimatePresence initial={false}>
      {open && <motion.nav id="mobile-navigation" className="mobile-navigation" aria-label="Navegação principal" initial={{ opacity: 0, y: reduced ? 0 : -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -8 }} transition={{ duration: reduced ? 0 : 0.2 }}>
        <div className="container">
          {siteConfig.navigation.map((link, index) => <a href={link.href} key={link.href} onClick={() => setOpen(false)}><span className="nav-number" aria-hidden="true">0{index + 1}</span>{link.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
          <div className="mobile-commercial"><span>DESENVOLVIMENTO DE SITES · WR TECH</span><WrTechCTA variant="gold" /></div>
        </div>
      </motion.nav>}
    </AnimatePresence>
  </header>
}
