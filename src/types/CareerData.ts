// 1データあたりの型定義（TypeScript）
export interface CareerItem {
  date: string;
  mainTitle: string;
  subDescription: string;
  skills: string[];
}

// 経歴データの配列（const）
export const CAREER_DATA: CareerItem[] = [
  {
    date: '2011年11月-2012年9月',
    mainTitle: 'WEBサイト制作・システム運用更新',
    subDescription:
      '旅行会社予約フォーム制作、介護福祉・製造業の会社紹介サイト制作',
    skills: [
      '(1年)HTML, CSS, JavaScript, PHP, MySQL, Smarty, WordPress',
      '(7カ月)Photoshop, Illustrator, PostgreSQL, Linux',
    ],
  },
  {
    date: '2013年6月-2013年12月',
    mainTitle: '新聞社のWEBサイト制作',
    subDescription: 'システム開発、その他、単体テスト、結合テスト、仕様書作成',
    skills: ['PHP, XML, PostgreSQL, HTML, CSS, JavaScript, Smarty'],
  },
  {
    date: '2013年12月-2014年1月',
    mainTitle: 'PCキッティング',
    subDescription: 'Windows XPからWindows 8のバージョンアップ',
    skills: ['Access VBA'],
  },
  {
    date: '2014年2月-2014年4月',
    mainTitle: 'マッピングシステム開発',
    subDescription:
      'システム開発、サーバ環境構築、その他、単体テスト、結合テスト、仕様書作成',
    skills: [
      'Java, MySQL, HTML, CSS, JavaScript, Servlet, Linux(CentOS), JBoss7',
    ],
  },
  {
    date: '2014年5月-2014年9月',
    mainTitle: '介護福祉のサービス予約システム開発',
    subDescription: 'システム開発、その他、単体テスト、結合テスト、仕様書作成',
    skills: ['HTML, CSS, JavaScript, ASP.NET(C#)'],
  },
  {
    date: '2014年10月-2015年2月',
    mainTitle: '部品在庫管理システム開発・改修',
    subDescription:
      'Oracleを使ったSQLチューニング、Javaを使ったシステム改修、その他、デバッグ・仕様書作成',
    skills: ['HTML, CSS, Java, JavaScript, Oracle, Linux, JSP'],
  },
  {
    date: '2015年4月-2015年7月',
    mainTitle: '物流顧客管理システム開発・改修',
    subDescription:
      'Oracleを使ったSQLチューニング、Javaを使ったシステム改修、その他、デバッグ・仕様書作成',
    skills: ['HTML, CSS, Java, JavaScript, Oracle, Linux, JSP'],
  },
  {
    date: '2016年5月-2016年6月',
    mainTitle: '製造工場内運用保守ヘルプデスク',
    subDescription: 'C言語を使ったバックエンドシステム改修、ログ解析',
    skills: ['C, Linux, VBA'],
  },
  {
    date: '2016年8月-2018年7月',
    mainTitle: '医療コンサルにてWEBサイト制作',
    subDescription:
      'WEBサイト制作、レスポンシブ化、運用更新、画像加工、投稿記事作成、簡易ツール作成',
    skills: [
      'WordPress, Illustrator, Photoshop, CSS, HTML, JavaScript, PHP, jQuery, MySQL',
    ],
  },
  {
    date: '2018年8月-2026年5月',
    mainTitle: '小規模B2B制作会社にてWEBサイト制作',
    subDescription:
      'WEBサイト制作、CSSアニメーション、パフォーマンス改善、SEO最適化、改善提案、GA4・GTMタグ実装、その他運用更新、ECショップ立上げ、カスタマイズ',
    skills: [
      'WordPress, Illustrator, Photoshop, CSS, HTML, JavaScript, SVG, PHP, jQuery, MySQL, Laravel',
    ],
  },
];
