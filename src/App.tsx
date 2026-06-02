import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

import TopPage from './pages/TopPage';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);
  const switcherRef = useRef<HTMLDivElement>(null);
  const { i18n: i18nInstance } = useTranslation();
  const currentLanguage = i18nInstance.language;

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      ScrollTrigger.refresh();
    });
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '#article',
      start: 'top top',
      end: 'max',
      toggleClass: { 
        targets: switcherRef.current, 
        className: 'black-theme' 
      }
    });
  
    const sections = gsap.utils.toArray<HTMLElement>('.block');
  
    sections.forEach((section) => {
      const titleInwrap = section.querySelector('.-effecttitle .inwrap');
      const content = section.querySelector('.historydl1, .txtbox, .visualthinking');
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top center+=200',
          end: 'top center-=100',
          toggleActions: 'play none none reverse',
        }
      });
  
      if (titleInwrap) {
        tl.fromTo(titleInwrap, 
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            color: '#fff',
            textShadow: '0 0 2px #f7e7fe, 0 0 4px #f1d6f8, 0 0 6px #c8b4dc, 0 0 8px #9678b4',
            duration: 0.2,
            ease: 'power2.out',
          }
        );
      }
  
      if (content) {
        tl.fromTo(content,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
          },
          '>0.4'
        );
  
        const param = content.querySelector('.param');
        if (param) {
          tl.fromTo(param,
            { height: 0, opacity: 0 },
            {
              height: 'calc(100% - 10px)',
              opacity: 1,
              duration: 1.4,
              ease: 'power2.inOut',
            },
            '<'
          );
        }
      }
    });
  
    const generalEffects = gsap.utils.toArray<HTMLElement>('#articlewrap > .incnt > .-effect');
    generalEffects.forEach((target) => {
      gsap.fromTo(target, 
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: target,
            start: 'top center+=150',
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        }
      );
    });
  
    const imageLists = gsap.utils.toArray<HTMLElement>('.imagelist.-effect');
    imageLists.forEach((imageList) => {
      ScrollTrigger.create({
        trigger: imageList,
        start: 'top center+=100',
        once: true,
        onEnter: () => imageList.classList.add('-scrollin'),
      });
    });
  
  }, { scope: mainRef });

  return (
    <>
      <main id="main" ref={mainRef}>
        <div className="app-container">
          <TopPage />
        </div>
        <p className="cr sacramento">@ Ai Creative Code</p>
      </main>
      <div id="translateswitcher" ref={switcherRef} className="white-theme"><ul>
        <li className={`ja ${currentLanguage === 'ja' ? 'is-active' : ''}`}><button onClick={() => switchLanguage('ja')}>日本語</button></li>
        <li className={`en ${currentLanguage === 'en' ? 'is-active' : ''}`}><button onClick={() => switchLanguage('en')}>English</button></li>
      </ul></div>
    </>
  );
};

export default App;