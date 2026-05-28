import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import MVSketch from '../components/p5/MVSketch.tsx';

import CareerSection from '../components/CareerSection.tsx';
import EducationalSection from '../components/EducationalSection.tsx';
import LicenseSection from '../components/LicenseSection.tsx';
import ArtBlock from '../components/ArtBlock.tsx';

gsap.registerPlugin(ScrollTrigger);

function TopPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const pageShutter = document.getElementById('pageshutter');

    if (pageShutter) {
      const timeline = gsap.timeline();

      timeline.to(
        '#pageshutter',
        {
          opacity: 0,
          duration: 2.6,
          delay: 0.2,
          ease: 'power2.inOut',
          onComplete: () => {
            pageShutter.style.pointerEvents = 'none';
            pageShutter.style.zIndex = '-1';
            
            ScrollTrigger.refresh();
          },
        },
        0
      );

      if (document.getElementById('main')) {
        timeline.from(
          '#main',
          {
            scale: 0.95,
            opacity: 0.8,
            duration: 2.6,
            ease: 'power2.out',
          },
          0
        );
      }
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <header id="topmv">
        <div className="sitetitle">
          <h1 className="h1title tiltneon">Ai Creative Code Portfolio</h1>
          <p className="subtitle sacramento">(Bday: 1989.09.25-)</p>
        </div>

        <div id="mvcanvas">
          <div className="watercover"></div>
          <MVSketch />
        </div>

        <p id="scrolldown">
          <span></span>
        </p>
      </header>

      <article id="article">
        <section id="profile">
          <div className="incnt min">
            <h2 className="copytitle tcspl -effect">
              <span className="inb">バックエンドと</span>
              <span className="inb">フロントエンド、</span>
              <span className="inb">両面を併せ持つ</span>
              <span className="inb">エンジニア</span>
            </h2>

            <div className="txtbox -effect">
              <p>2016年より以前はシステムエンジニアをしており、当時は、パズルのように、模索したり、原因が解けた時の達成感にやりがいや楽しさを感じていました。</p>
              <p>しかし、バックエンドだけをやっていると、どうしてもデザイン上出てくる「システムが重い」「デザインが古い」といった問題が気になりだしてしまい、システムの中身だけでなく、デザイン改善もできるようになりたいと思い、2016年以降はWEB制作で働いておりました。</p>
              <p>WEB制作では、基本一人エンジニアだったため、WordPressのカスタマイズ、テクニカルサポート、業務効率化など、幅広い業務に携わっていました。</p>
              <p>構築案件に関しては、デザイナーからIllustratorで作ったデザイン案を頂き、それに沿って手書きで一から構築。運用時は指示書を頂き、時にデザインなしのまま対応することも多かったです。</p>
              <p>元々、アートに興味があり、休みに自分でも趣味の範囲で作品を作ってみたり、アイデアを求めてZINEを読むなどもしていました。</p>
              <p>今後は、これまでのバックエンド・フロントエンド両方の経験を活かしつつ、データ活用も学び、より体系化されたプロセスやガイドラインのもとで、自分が「楽しい」と思う業務を行ないながら、継続的に学び続け、長期的な視点で、組織や社会の技術底上げに貢献できるエンジニアを目指していきます。</p>
            </div>

            <CareerSection />

            <EducationalSection />

            <LicenseSection />

            <div className="block">
              <h2 className="blocktitle sacramento -effecttitle">
                <span className="inwrap">Visual Thinking</span>
              </h2>

              <div className="visualthinking">
                <div className="txtbox -effect">
                  <p>
                    <a
                      href="https://aicreative-code.net/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      こちら
                    </a>
                    は自身のルーツを探求する一環として、祖父母が関わった1970年代の名古屋における「混血孤児のコミュニティとその文化変遷」についてのエスノグラフィーを、自サイトで公開しています。
                    センシティブなテーマだからこそ、主観を排し、客観性と多角的な視点を重視して調査を行っていました。
                    異文化や社会状況の調査においては、RedditやX（旧Twitter）などの現地ユーザーによる一次情報を起点に、Wikipedia等の二次資料や既存研究と照合し、情報の偏りや誤りがないかを確認するプロセスを徹底してきました。
                    歴史調査においても同様に、古書や当時の新聞記事などの公的・一次的な記録を遡り、複数の資料を突き合わせながら整合性を確認することを重視してきました。
                    こうした戦後史や福祉に関わる調査・研究を通じて、個人の問題としてではなく、社会の仕組みや基盤がどのように人の生活に影響するのかという視点を持つようになりました。
                    その延長として、有事や社会的な混乱が起きた際にも、感情や立場に左右されず、システムや基盤がどのように機能し、どこに課題が生じるのかを観測できる立場で仕事に関わりたいと考えるようになりました。
                  </p>
                  <p>
                    こうした資料整理や構造的に考える力は、現在のWeb制作にも活かされています。
                    現在も業務上の調査では、英文記事や海外の一次情報に直接あたることを習慣としており、英会話には苦手意識があるものの、英語の読解を中心とした情報収集や分析については、実務上支障なく対応しています。
                    運用・保守・改善業務では、Google公式アカウントの発信内容やStack
                    Overflow上の既存質問を確認し、不明点がある場合には英語の最新公式ドキュメントを参照することで、情報の正確性を重視した対応を行っています。
                  </p>
                  <p>
                    また、他にも、個人的にイラスト制作や画像加工も行っておりました。
                    もともと表現を通じて、見る人の感情を動かしたり、直感的に伝わるものづくりが好きであり、今後も活動の形態を問わず、こうした表現の探究を継続して行っていきたいと考えております。
                  </p>
                </div>

                <ArtBlock />
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default TopPage;
