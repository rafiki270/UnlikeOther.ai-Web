import type { MouseEvent as ReactMouseEvent } from 'react'
import { Contact } from '../sections/Contact'
import { Hero, Marquee } from '../sections/Hero'
import { CustomBanner, ExploreTeasers, Products } from '../sections/Products'
import { FeaturedCarousel, Services } from '../sections/Work'

export default function HomePage({ onSpark }: { onSpark: (e: ReactMouseEvent<HTMLElement>) => void }) {
  return (
    <>
      <CustomBanner />
      <Hero onSpark={onSpark} />
      <Marquee />
      <Products />
      <ExploreTeasers />
      <FeaturedCarousel />
      <Services />
      <Contact />
    </>
  )
}
