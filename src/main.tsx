import { createRoot } from 'react-dom/client'

import './gsapSetup'
import './i18n'
import './assets/css/common.scss'

import App from './App'

createRoot(document.getElementById('root')!).render(<App />)
