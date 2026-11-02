import { Navigate, useParams } from 'react-router-dom'
import DetailPage from '../components/DetailPage'
import { PRODUCTS } from '../data/products'
import { usePageMeta } from '../usePageMeta'

export default function ProductPage() {
  const { slug } = useParams()
  const p = PRODUCTS.find((product) => product.id === slug)

  usePageMeta(p?.name, p ? `${p.name} — ${p.tagline}. Built by UnlikeOtherAI.` : undefined)

  if (!p) return <Navigate to="/" replace />

  return (
    <DetailPage
      name={p.name}
      tagline={p.tagline}
      kind={p.kind}
      status={p.status}
      statusColor={p.statusColor}
      color={p.color}
      what={[p.description[0]]}
      why={p.description.slice(1)}
      canDo={p.highlights}
      tags={p.tags}
      image={p.image}
      images={p.images}
      href={p.href}
      linkLabel={p.linkLabel}
      backTo="/#products"
      backLabel="all products"
    />
  )
}
