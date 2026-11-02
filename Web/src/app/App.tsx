import type { MouseEvent as ReactMouseEvent } from 'react'
import { CursorTrail, useConfetti, useKonami } from './components/effects'
import { Defs } from './components/icons'
import { Footer, Nav } from './sections/Chrome'
import { Contact } from './sections/Contact'
import { Hero, Marquee } from './sections/Hero'
import { FeaturedCarousel, Services } from './sections/Work'

export default function App() {
  const burst = useConfetti()
  useKonami()

  const spark = (e: ReactMouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    burst(r.left + r.width / 2, r.top + r.height / 2)
  }

  return (
    <>
      <Defs />
      <CursorTrail />
      <Nav onLogoClick={spark} />
      <Hero onSpark={spark} />
      <Marquee />
      <Services />
      <FeaturedCarousel />
      <Contact />
      <Footer />
    </>
  )
}
