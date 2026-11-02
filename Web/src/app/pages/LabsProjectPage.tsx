import { Navigate, useParams } from 'react-router-dom'
import DetailPage from '../components/DetailPage'
import { LABS_PROJECTS } from '../data/labs'
import { usePageMeta } from '../usePageMeta'

const STATUS_BG: Record<string, string> = {
  released: 'var(--c4)',
  'early access': 'var(--c2)',
  prototype: 'var(--c3)',
  experiment: 'var(--c5)',
  'open source': 'var(--c4)',
}

export default function LabsProjectPage() {
  const { slug } = useParams()
  const p = LABS_PROJECTS.find((project) => project.id === slug)

  usePageMeta(p?.name, p ? `${p.name} — ${p.what}` : undefined)

  if (!p) return <Navigate to="/labs" replace />

  return (
    <DetailPage
      name={p.name}
      kind="Labs"
      status={p.status}
      statusColor={STATUS_BG[p.status]}
      color={p.color}
      what={[p.what]}
      why={[p.why]}
      canDo={p.capabilities}
      image={p.image}
      images={p.images}
      href={p.href}
      linkLabel={p.linkLabel}
      backTo="/labs"
      backLabel="all labs projects"
    />
  )
}
