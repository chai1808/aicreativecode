import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const PageShutter = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(<div id="pageshutter" />, document.body)
}

export default PageShutter
