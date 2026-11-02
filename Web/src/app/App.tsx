import { useEffect } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CursorTrail, useConfetti, useKonami } from './components/effects'
import { Defs } from './components/icons'
import { Footer, Nav } from './sections/Chrome'
import HomePage from './pages/HomePage'
import LabsPage from './pages/LabsPage'
import LabsProjectPage from './pages/LabsProjectPage'
import ProductPage from './pages/ProductPage'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function Shell() {
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
      <ScrollManager />
      <Nav onLogoClick={spark} />
      <Routes>
        <Route path="/" element={<HomePage onSpark={spark} />} />
        <Route path="/labs" element={<LabsPage />} />
        <Route path="/labs/:slug" element={<LabsProjectPage />} />
        <Route path="/:slug" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
