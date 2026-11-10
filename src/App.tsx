import { useEffect, useState } from 'react'
import { MotionConfig } from 'motion/react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { PrivacyPage } from './pages/PrivacyPage'
import { siteConfig } from './config/site'
import './styles/globals.css'

export default function App() {
  const [privacy, setPrivacy] = useState(window.location.hash === '#privacidade')

  useEffect(() => {
    const navigate = () => {
      const isPrivacy = window.location.hash === '#privacidade'
      setPrivacy(isPrivacy)
      document.title = isPrivacy ? `Privacidade da demonstração | ${siteConfig.wrTech.name}` : siteConfig.seo.title
      requestAnimationFrame(() => {
        const id = isPrivacy ? 'conteudo' : window.location.hash.slice(1)
        const target = id ? document.getElementById(id) : null
        if (target) {
          target.focus({ preventScroll: true })
          target.scrollIntoView({ behavior: isPrivacy || window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' })
        }
      })
    }
    window.addEventListener('hashchange', navigate)
    if (window.location.hash) navigate()
    return () => window.removeEventListener('hashchange', navigate)
  }, [])

  return <MotionConfig reducedMotion="user"><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Header key={privacy ? 'privacy' : 'home'} privacy={privacy} />{privacy ? <PrivacyPage /> : <HomePage />}<Footer /></MotionConfig>
}
