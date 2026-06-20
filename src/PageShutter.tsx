import { createPortal } from 'react-dom'

const PageShutter = () => createPortal(<div id="pageshutter" />, document.body)

export default PageShutter
