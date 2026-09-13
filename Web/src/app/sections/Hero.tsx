import { Fragment, useEffect, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent, ReactNode, TouchEvent as ReactTouchEvent } from 'react'
import { ScribbleHeart, Smiley, Squiggle, Star } from '../components/icons'

type Point = { x: number; y: number }
type AnyPointer = MouseEvent | TouchEvent | ReactMouseEvent | ReactTouchEvent

const pointOf = (e: AnyPointer) => ('touches' in e ? e.touches[0] : e)

function DraggableSticker({ children, initial, rotate = -3 }: { children: ReactNode; initial: Point; rotate?: number }) {
  const [pos, setPos] = useState(initial)
  const drag = useRef({ active: false, ox: 0, oy: 0 })

  const onDown = (e: ReactMouseEvent | ReactTouchEvent) => {
    e.preventDefault()
    const p = pointOf(e)
    drag.current = { active: true, ox: p.clientX - pos.x, oy: p.clientY - pos.y }
  }

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!drag.current.active) return
      const p = pointOf(e)
      setPos({ x: p.clientX - drag.current.ox, y: p.clientY - drag.current.oy })
    }
    const onUp = () => { drag.current.active = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  return (
    <div onMouseDown={onDown} onTouchStart={onDown}
      style={{ left: pos.x, top: pos.y, transform: `rotate(${rotate}deg)`, cursor: 'grab' }}>
      {children}
    </div>
  )
}

export function Hero({ onSpark }: { onSpark: (e: ReactMouseEvent<HTMLElement>) => void }) {
  return (
    <section className="hero">
      <div className="container" style={{ position: 'relative' }}>
        <div className="hand" style={{
          fontSize: 30, color: 'var(--c2)', transform: 'rotate(-2.5deg)',
          display: 'inline-block', marginBottom: 14,
        }}>
          hello, we&apos;re a tiny studio &amp; we
        </div>

        <h1>
          <span className="row">
            <span className="word-c1">build</span>{' '}
            <em>weird</em>{' '}
            <span className="swirl word-c2" onClick={onSpark}>software</span>
          </span>
          <span className="row" style={{ paddingLeft: '6vw' }}>
            that <span className="swirl">actually</span>{' '}
            <span className="word-c3">ships.</span>
            <Star color="var(--c1)" size={48} rotation={14}
              style={{ display: 'inline-block', marginLeft: 16, verticalAlign: 'middle' }} />
          </span>
        </h1>

        <div className="hero-sub">
          <p>
            We&apos;re <b>UnlikeOtherAI</b> — a multidisciplinary studio of designers,
            engineers and incurable tinkerers. We make SaaS products, mobile apps,
            and the occasional very strange AI thing.{' '}
            <span className="hand" style={{ color: 'var(--c1)', fontSize: 22 }}>— since 2019</span>
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#work">
              see the work
              <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
                <path d="M 1 7 L 16 7 M 10 1 L 17 7 L 10 13" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn" href="#contact">say hi</a>
          </div>
        </div>

        {/* Decorative scattered stickers (draggable) */}
        <div className="hero-stickers">
          <DraggableSticker initial={{ x: -20, y: 30 }} rotate={-8}>
            <div className="sticker" style={{ background: 'var(--c3)' }}>
              <Star color="#16140F" size={14} /> ⌘ playful nerds
            </div>
          </DraggableSticker>
          <DraggableSticker initial={{ x: 880, y: -20 }} rotate={8}>
            <div className="sticker" style={{ background: 'var(--c5)', color: '#16140F' }}>
              ✦ AI w/o the cult
            </div>
          </DraggableSticker>
          <DraggableSticker initial={{ x: 940, y: 220 }} rotate={-12}>
            <div className="sticker" style={{ background: 'var(--c4)', color: 'var(--paper)' }}>
              <ScribbleHeart color="var(--c5)" size={16} /> built in the open
            </div>
          </DraggableSticker>
          <DraggableSticker initial={{ x: 60, y: 480 }} rotate={6}>
            <div className="sticker" style={{ background: 'var(--c2)', color: 'var(--paper)' }}>
              ▲ drag me, i&apos;m friendly
            </div>
          </DraggableSticker>
          <DraggableSticker initial={{ x: 760, y: 520 }} rotate={-4}>
            <div className="sticker" style={{ background: 'var(--paper)' }}>
              <Smiley size={20} /> studio of 2+16
            </div>
          </DraggableSticker>
        </div>

        <Squiggle color="var(--c4)" style={{ marginTop: 40 }} />
      </div>
    </section>
  )
}

const MARQUEE_WORDS = [
  'SaaS', 'mobile apps', 'AI agents', 'security audits', 'identity', 'micro-sites',
  'design systems', 'iOS', 'Android', 'product strategy', 'illustration',
]

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {[0, 1].map((dup) => (
          <span key={dup}>
            {MARQUEE_WORDS.map((w, i) => (
              <Fragment key={i}>
                <span>{w}</span>
                <Star color="#16140F" size={20} rotation={i * 17} />
              </Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
