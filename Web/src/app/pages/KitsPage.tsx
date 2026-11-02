import { Smiley, Star } from '../components/icons'
import { KITS } from '../data/kits'

export default function KitsPage() {
  return (
    <main>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">
            <span className="mono" style={{ color: 'var(--ink)' }}>§ 01</span> · the kits
          </span>
          <h1>
            small things, <em className="serif-em">finished</em> properly.
            <Star color="var(--c5)" size={34} rotation={-12} style={{ marginLeft: 16 }} />
          </h1>
          <div className="sub">
            <p>
              Kits are the smaller apps and games we release alongside the main products — each one
              built properly, signed, and maintained. No ads bolted on, no subscriptions on things
              that don&apos;t need them.
            </p>
          </div>
        </div>
      </section>

      <section className="container kit-stack">
        {KITS.map((kit, i) => (
          <article key={kit.id} className="kit-card" style={{ transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)` }}>
            <span className="tape" style={{ top: -12, left: 30 + ((i * 11) % 40), transform: `rotate(${i % 2 ? 6 : -6}deg)` }} />
            <div className={`kit-grid ${kit.imageKind === 'phone' ? 'kit-grid-phone' : ''}`}>
              <div>
                <h2>{kit.name}</h2>
                <div className="plat">{kit.platform}</div>
                {kit.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
                {kit.url && (
                  <a className="feat-link" href={kit.url} target="_blank" rel="noopener noreferrer" style={{ marginTop: 14 }}>
                    {kit.url.replace(/^https?:\/\//, '')} ↗
                  </a>
                )}
              </div>
              {kit.image && (
                <div className={`kit-screen ${kit.imageKind === 'phone' ? 'phone' : ''}`}>
                  <img src={kit.image} alt={`${kit.name} screenshot`} draggable={false} />
                </div>
              )}
            </div>
          </article>
        ))}

        <article className="kit-card" style={{ transform: 'rotate(-.4deg)' }}>
          <span className="tape" style={{ top: -12, left: 46, transform: 'rotate(5deg)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <h2>for the kids</h2>
            <Smiley size={32} rotation={8} />
          </div>
          <div className="plat">Android · iOS</div>
          <p>
            We created these for our own kids — so when we go on holiday, we don&apos;t have to worry
            about them being bombarded by adverts and in-app purchases. All the games are free, with
            no ads, on both Android and iOS.
          </p>
          <a className="feat-link" href="https://kids.unlikeotherai.com" target="_blank" rel="noopener noreferrer" style={{ marginTop: 14 }}>
            kids.unlikeotherai.com ↗
          </a>
        </article>
      </section>

      <div style={{ paddingBottom: 60 }} />
    </main>
  )
}
