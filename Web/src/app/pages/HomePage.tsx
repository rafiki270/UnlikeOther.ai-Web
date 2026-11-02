import type { MouseEvent as ReactMouseEvent } from 'react'
import { Contact } from '../sections/Contact'
import { Hero, Marquee } from '../sections/Hero'
import { CustomBanner, ExploreTeasers, Products } from '../sections/Products'
import { Services } from '../sections/Work'
import { usePageMeta } from '../usePageMeta'

export default function HomePage({ onSpark }: { onSpark: (e: ReactMouseEvent<HTMLElement>) => void }) {
  usePageMeta()
  return (
    <>
      <CustomBanner />
      <Hero onSpark={onSpark} />
      <Marquee />
      <Products />
      <ExploreTeasers />
      <Services />
      <Contact />
    </>
  )
}
