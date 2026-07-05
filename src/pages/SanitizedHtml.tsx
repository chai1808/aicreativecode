import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'

interface SanitizedHtmlProps {
  html: string
  className?: string
  tag?: keyof HTMLElementTagNameMap
}

const SanitizedHtml = ({
  html,
  className,
  tag: Tag = 'div',
}: SanitizedHtmlProps) => {
  // SSG/初回ハイドレーション時は信頼済みの内部コンテンツを生のまま描画し、
  // マウント後にクライアント側で DOMPurify による無害化を適用する。
  // （DOMPurify はブラウザDOMが必要なため、SSGビルド時には呼び出せない）
  const [sanitized, setSanitized] = useState(html)

  useEffect(() => {
    setSanitized(DOMPurify.sanitize(html))
  }, [html])

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: sanitized }} />
}

export default SanitizedHtml
