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
  // ハイドレーション後は html 変更と同じ render で DOMPurify する。
  // useEffect 内での差し替えだと言語切替後に DOM が再生成され、
  // 付与済みのクラスなどが消えるため同期処理にする。
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const sanitized = isHydrated ? DOMPurify.sanitize(html) : html

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: sanitized }} />
}

export default SanitizedHtml
