import { useEffect } from 'react'

const DEFAULT_TITLE = 'UnlikeOtherAI — we build the weird stuff'

export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — UnlikeOtherAI` : DEFAULT_TITLE
    if (description) {
      const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (meta) meta.content = description
    }
  }, [title, description])
}
