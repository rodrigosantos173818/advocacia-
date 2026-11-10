import { Hero } from '../components/Hero'
import { Credibility } from '../components/Credibility'
import { PracticeAreas } from '../components/PracticeAreas'
import { About } from '../components/About'
import { Differentials } from '../components/Differentials'
import { Process } from '../components/Process'
import { ContactCTA } from '../components/ContactCTA'
import { ContactDemo } from '../components/ContactDemo'

export function HomePage() {
  return <main id="conteudo" tabIndex={-1}><Hero /><Credibility /><PracticeAreas /><About /><Differentials /><Process /><ContactCTA /><ContactDemo /></main>
}
