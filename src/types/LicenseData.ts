// 💡 1データあたりの型定義（verbatimModuleSyntax 対策のため type で定義）
export type LicenseItem = {
  year: string;
  title: string;
  description?: string; // 💡「?」をつけることで、補足がないデータ（2009年など）も許容します
};

// 資格・ライセンスデータの配列
export const LICENSE_DATA: LicenseItem[] = [
  {
    year: '2007年',
    title: 'TOEIC440点',
    description:
      '当時聞き取り困難や発達障害は未判定で、配慮のない状態で受験。明示情報の読解・仕様理解・事実ベースの英文処理は安定していました。',
  },
  {
    year: '2008年',
    title: '英検2級',
    description:
      'リスニングおよび面接形式との相性に課題があり、それ以降は受験を見送っています。当時公文高等部門スピードリーディングも通っていました。',
  },
  {
    year: '2009年',
    title: '日本アロマ環境協会アロマテラピー検定1級',
  },
  {
    year: '2011年',
    title: '赤十字救急法救急員',
  },
  {
    year: '2016年',
    title: '3級ウェブデザイン技能士',
  },
  {
    year: '2016年',
    title: 'C言語プログラミング能力認定試験2級',
  },
  {
    year: '2017年',
    title: '健康管理能力検定2級',
  },
  {
    year: '2024年',
    title: '謎検7級',
    description: '「推理力」全国ランキング3711人中1552位と平均',
  },
  {
    year: '2024年',
    title: 'データサイエンス数学ストラテジスト中級',
  },
  {
    year: '2024年',
    title: '2級ウェブデザイン技能士',
  },
];
