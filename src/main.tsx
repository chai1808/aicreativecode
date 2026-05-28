import { createRoot } from 'react-dom/client';

import './assets/css/reset.css';
import './assets/css/common.css';
import './assets/css/add/lity.min.css';

import App from './App.tsx';

// ページシャッター要素を作成
const pageShutter = document.createElement('div');
pageShutter.id = 'pageshutter';
document.body.prepend(pageShutter);

createRoot(document.getElementById('root')!).render(<App />);
