import { createRoot } from 'react-dom/client';

import './assets/css/reset.css';
import './assets/css/common.css';
import './assets/css/add/lity.min.css';
import './utils/common.funcs.js';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
