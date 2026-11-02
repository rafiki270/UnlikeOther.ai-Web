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
      <Hero onSpark={onSpark} />
      <CustomBanner />
      <Marquee />
      <Products />
      <ExploreTeasers />
      <Services />
      <Contact />
    </>
  )
}
