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

    const scrollTargets = gsap.utils.toArray<HTMLElement>(
      '.-effect, .-effecttitle, .-effectlist, .-effectlist > li'
    );

    scrollTargets.forEach((target) => {
      const isImageSubElement = target.closest('.imagelist.-effect');
      const isListItem = target.tagName === 'LI';
      const isTitle = target.classList.contains('-effecttitle');
      const isListContainer = target.classList.contains('-effectlist') && target.tagName !== 'LI';

      if (isListContainer) {
        const items = target.querySelectorAll('li');
        items.forEach((item, itemIndex) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: target,
              start: 'top center+=100',
              end: 'top center-=100',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 40,
            duration: 0.4,
            delay: itemIndex * 0.1,
            ease: 'power2.out',
          });
        });
      } else if (isTitle) {
        const inwrap = target.querySelector('.inwrap');
        if (inwrap) {
          gsap.from(inwrap, {
            scrollTrigger: {
              trigger: target,
              start: 'top center+=100',
              end: 'top center-=100',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out',
          });

          gsap.to(inwrap, {
            scrollTrigger: {
              trigger: target,
              start: 'top center+=100',
              end: 'top center-=100',
              toggleActions: 'play none none reverse',
            },
            color: '#fff',
            textShadow: '0 0 2px #f7e7fe, 0 0 4px #f1d6f8, 0 0 6px #c8b4dc, 0 0 8px #9678b4',
            duration: 0,
          });
        }
      } else if (!isListItem && target.tagName !== 'UL' && !isImageSubElement) {
        gsap.from(target, {
          scrollTrigger: {
            trigger: target,
            start: 'top center+=100',
            end: 'top center-=100',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 20,
          duration: 1.6,
          delay: 0.4,
          ease: 'power2.out',
        });
      }

      if (target.classList.contains('historydl1')) {
        const param = target.querySelector('.param');
        if (param) {
          gsap.fromTo(param,
            { height: 0, opacity: 0 },
            {
              scrollTrigger: {
                trigger: target,
                start: 'top center+=100',
                end: 'top center-=100',
                toggleActions: 'play none none reverse',
              },
              height: 'calc(100% - 10px)',
              opacity: 1,
              duration: 1.8,
              ease: 'power2.inOut',
            }
          );
        }
      }
    });

    const imageLists = gsap.utils.toArray<HTMLElement>('.imagelist.-effect');
    imageLists.forEach((imageList) => {
      const items = imageList.querySelectorAll('li');
      items.forEach((item) => {
        const imgCover = item.querySelector('.imgcover');
        if (imgCover) {
          ScrollTrigger.create({
            trigger: item,
            start: 'top center+=100',
            once: true,
            onEnter: () => {
              imageList.classList.add('-scrollin');
            },
          });
        }
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