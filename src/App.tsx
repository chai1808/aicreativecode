import { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TopPage from './pages/TopPage';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // ==========================================
    // スクロールアニメーション（タイトル・リスト・一般要素）
    // ==========================================
    const scrollTargets = document.querySelectorAll(
      '.-effect, .-effecttitle, .-effectlist, .-effectlist > li'
    );

    scrollTargets.forEach((target) => {
      const isImageSubElement = target.closest('.imagelist.-effect');

      const isListItem = target.tagName === 'LI';
      const isTitle = target.classList.contains('-effecttitle');
      const isListContainer =
        target.classList.contains('-effectlist') && target.tagName !== 'LI';

      if (isListContainer) {
        // リストコンテナ内のすべてのリストアイテムをアニメーション
        const items = (target as HTMLElement).querySelectorAll('li');
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
            ease: 'cubic-bezier(0.25, 1, 0.5, 1)',
          });
        });
      } else if (isTitle) {
        // ネオンタイトルアニメーション
        const inwrap = target.querySelector('.inwrap') as HTMLElement;

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
            ease: 'cubic-bezier(0.25, 1, 0.5, 1)',
          });

          gsap.to(inwrap, {
            scrollTrigger: {
              trigger: target,
              start: 'top center+=100',
              end: 'top center-=100',
              toggleActions: 'play none none reverse',
            },
            color: '#fff',
            textShadow:
              '0 0 2px #f7e7fe, 0 0 4px #f1d6f8, 0 0 6px #c8b4dc, 0 0 8px #9678b4',
            duration: 0,
            ease: 'power2.inOut',
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
          ease: 'cubic-bezier(0.25, 1, 0.5, 1)',
        });
      }

      // タイムラインなどの直線アニメーション（historydl1）
      if (target.classList.contains('historydl1')) {
        const param = target.querySelector('.param') as HTMLElement;

        if (param) {
          gsap.fromTo(
            param,
            {
              height: 0,
              opacity: 0,
            },
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

    //　すべての画像リストの処理
    const imageLists = document.querySelectorAll('.imagelist.-effect');

    imageLists.forEach((imageList) => {
      const items = imageList.querySelectorAll('li');

      items.forEach((item) => {
        const imgCover = item.querySelector('.imgcover') as HTMLElement;

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
  }, []);

  return (
    <div className="app-container">
      <TopPage />
    </div>
  );
};

export default App;
