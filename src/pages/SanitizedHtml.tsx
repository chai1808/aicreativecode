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
}: SanitizedHtmlProps) => (
  <Tag
    className={className}
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
  />
)

export default SanitizedHtml
