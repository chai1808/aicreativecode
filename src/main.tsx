import { createRoot } from 'react-dom/client'

import './gsapSetup'
import './i18n'
import './assets/css/common.scss'

// シャッター演出中に p5 を先読みして MV 表示の遅延を防ぐ
void import('p5')

import App from './App'

createRoot(document.getElementById('root')!).render(<App />)
