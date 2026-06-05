import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';

import '../assets/css/TopPage.scss';

import MVSketch from '../components/p5/MVSketch.tsx';
import DotsTime from '../components/p5/DotsTime';

interface CareerItem {
  date: string;
  mainTitle: string;
  subDescription: string;
  skills: string[];
}
interface EducationalItem {
  name: string;
}
interface LicenseItem {
  year: string;
  title: string;
  description: string;
}
interface URLListItem {
  title: string;
  URL: string;
}

interface URLItem {
  text: string;
  list: URLListItem[];
}

gsap.registerPlugin(ScrollTrigger);

function TopPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('TopPage');
  const CareerData = t('Career.data', { returnObjects: true }) as CareerItem[];
  const EducationalData = t('Educational.data', { returnObjects: true }) as EducationalItem[];
  const LicenseData = t('License.data', { returnObjects: true }) as LicenseItem[];
  const URLData = t('URLs.data', { returnObjects: true }) as URLItem[];

  const animateIfExists = (
    selector: string, 
    animationCallback: (element: HTMLElement) => void
  ) => {
    const element = document.querySelector(selector) as HTMLElement | null;
    if (element) {
      animationCallback(element);
    }
  };

  useGSAP(() => {
    animateIfExists('#pageshutter', (shutter) => {
      const timeline = gsap.timeline();

      timeline.to(
        shutter,
        {
          duration: 2.6,
          delay: 0.2,
          ease: 'power2.inOut',
          onComplete: () => {
            shutter.style.pointerEvents = 'none';
            shutter.style.zIndex = '-1';
            
            ScrollTrigger.refresh();
          },
        },
        0
      );

      animateIfExists('#main', (mainElement) => {
        timeline.from(
          mainElement,
          {
            duration: 2.6,
            ease: 'power2.out',
          },
          0
        );
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <header id="topmv">
        <div className="sitetitle">
          <h1 className="h1title sacramento">Ai Creative Code Portfolio</h1>
        </div>

        <div id="mvcanvas">
          <div className="watercover"></div>
          <MVSketch />
        </div>

        <p id="scrolldown">
          <span></span>
        </p>
      </header>

      <article id="article"><div id="articlewrap">
        <div className="incnt min">
          <section className="block">
            <h2 className="copytitle zen-kurenaido-regular tcspl -effectcopy" dangerouslySetInnerHTML={{ __html: t('firstSection.title') }} />
            <div className="txtbox -effect" dangerouslySetInnerHTML={{ __html: t('firstSection.text') }} />
          </section>

          <section className="block">
            <h2 className="blocktitle sacramento -effecttitle">
              <span className="inwrap">Career</span>
            </h2>

            <div className="historydl1 -effect _1">
              <div className="inwrap">
                <p className="param"></p>
                <dl>
                  {Array.isArray(CareerData) &&
                  CareerData.map((item: CareerItem, index: number) => (
                    <div key={index}>
                      <dt>{item.date}</dt>
                      <dd>
                        <p className="main">{item.mainTitle}</p>
                        <div className="sub">
                          <p>{item.subDescription}</p>
                          <ul>
                            {item.skills.map((skill: string, skillIndex: number) => (
                              <li key={skillIndex}>・{skill}</li>
                            ))}
                          </ul>
                        </div>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section className="block">
            <h2 className="blocktitle sacramento -effecttitle">
              <span className="inwrap">Educational</span>
            </h2>

            <div className="txtbox -effect _1 tcspl">
              <div className="inwrap">
                <ul>
                  {Array.isArray(EducationalData) &&
                  EducationalData.map((item: EducationalItem, index: number) => (
                    <li key={index}>・{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="block">
            <h2 className="blocktitle sacramento -effecttitle">
              <span className="inwrap">License</span>
            </h2>

            <div className="historydl1 -effect">
              <div className="inwrap">
                <p className="param" style={{ top: '20px' }}></p>
                <dl>
                  {Array.isArray(LicenseData) &&
                  LicenseData.map((item: LicenseItem, index: number) => (
                    <div key={index}>
                      <dt>{item.year}</dt>
                      <dd>
                        {item.title}
                        {item.description && (
                          <>
                          <br/><span className="small" dangerouslySetInnerHTML={{ __html: t(item.description) }} />
                          </>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section className="block">
            <h2 className="blocktitle sacramento -effecttitle">
              <span className="inwrap">Visual Thinking</span>
            </h2>

            <div className="visualthinking">
              <div className="txtbox -effect" dangerouslySetInnerHTML={{ __html: t('VisualThinking.text') }} />
            </div>
          </section>

          <section className="block">
            <h2 className="blocktitle sacramento -effecttitle">
              <span className="inwrap">URLs</span>
            </h2>

            <div className="txtbox -effect _1 tc">
              <div className="inwrap">
                <ul>
                    {Array.isArray(URLData) &&
                      URLData.map((item: URLItem, index: number) => {
                        return (
                          <li key={index}>
                            <p className="itemtitle">{item.text}</p>
                            <div className="list">
                              <ul>
                                {item.list.map((list: URLListItem, listIndex: number) => 
                                  <li key={listIndex}>・<a href={list.URL} target="_blank" rel="noreferrer">{list.title}</a></li>
                                )}
                              </ul>
                            </div>
                          </li>
                        );
                    })}
                  </ul>
                </div>
                <div className="lastsns -effect tc"><div className="inwrap">
                  <ul>
                    <li><a href="https://note.com/chai1808" target="_blank"><img src="/common/noteicon.svg" alt="Note"></img></a></li>
                    <li><a href="https://github.com/chai1808" target="_blank"><img src="/common/github.png" alt="GitHub"></img></a></li>
                  </ul>
                </div></div>
             </div>
          </section>
        </div>
      </div></article>
      <div className="p5jsBox"><DotsTime /></div>
    </div>
  );
}

export default TopPage;
