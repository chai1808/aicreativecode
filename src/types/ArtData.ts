// 💡 1データあたりの型定義（TypeScript）
export type ArtItem = {
  imageSrc: string;
  altText: string;
  caption: string;
};

// 実績・作品データの配列
export const ART_DATA: ArtItem[] = [
  {
    imageSrc: '/img/index/pastwork/budou.jpg',
    altText: '葡萄ロゴタイポグラフィ',
    caption: '「葡萄」をモチーフにしたロゴタイポグラフィ',
  },
  {
    imageSrc: '/img/index/pastwork/deadalive.jpg',
    altText: 'シュレーディンガーの猫デザインアイコン',
    caption: 'シュレーディンガーの猫から着想を得てデザインしたアイコン',
  },
  {
    imageSrc: '/img/index/pastwork/station.jpg',
    altText: '定光寺駅画像加工',
    caption: '定光寺駅にて自分で撮った画像をクリスタを使い加工したアート作品',
  },
];
