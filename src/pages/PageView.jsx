// Maps to: page.php
import { useParams } from 'react-router-dom'
import { usePage } from '../hooks/usePages'
import SubHeader from '../components/layout/SubHeader'
import NotFound from './NotFound'

export default function PageView() {
  const { slug } = useParams()
  const page = usePage(slug)

  if (!page) return <NotFound />

  return (
    <div>
      <SubHeader title={page.title} breadcrumb="Pages" />
      <div className="section">
        <div
          style={{ maxWidth: 860, margin: '0 auto', fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: 'var(--color-text-muted)' }}
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </div>
  )
}
