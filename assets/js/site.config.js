/**
 * サイト全体の設定。
 * ページやリンクを増やすときは、原則このファイルだけを編集すれば済むようにしている。
 */

/** サイトの基本情報（ヘッダー・ヒーロー・フッターの表記に使用） */
export const SITE = {
  name: 'CryStar Studio',   // 正式表記（ヒーロー・フッター）
  short: 'CryStar',         // ヘッダーのロゴなど、短く出す場所
  tagline: 'Creative Archive',
  copyright: '© 2026 CryStar',
};

/**
 * グローバルナビゲーション。
 * ページを追加する手順：
 *   1. ここに { id, label, href } を1行足す
 *   2. 既存のHTMLを複製し、<body data-page="ここのid"> を書き換える
 * id は <body data-page="..."> と一致させること（現在地の判定に使う）。
 */
export const NAV = [
  { id: 'top', label: 'Top', href: 'index.html' },
  { id: 'works', label: 'Works', href: 'works.html' },
  { id: 'characters', label: 'Characters', href: 'characters.html' },
  { id: 'gallery', label: 'Gallery', href: 'gallery.html' },
];

/**
 * SNSリンク。トップページ右上とフッターの両方がこの配列を参照する。
 * href を実際のURLに差し替えて使う。
 */
export const SOCIAL = [
  { label: 'X', href: 'https://x.com/kuon0108_' },
  { label: 'YouTube', href: 'https://www.youtube.com/@-kuon-4525' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@kuon0108_' },
];

/**
 * 作品と紐付かないページ（一覧・キャラ図鑑・ギャラリーなど）の背景画像。
 * <page-bg data-page="ここのid"> が参照する。
 * key は NAV の id、または body[data-page] の値と一致させる。
 * 画像は Resources/common/(id)/(id)_bg.png に置く。
 */
export const PAGE_BG = {
  works: 'Resources/common/works/works_bg.png',
  characters: 'Resources/common/characters/characters_bg.png',
  gallery: 'Resources/common/gallery/gallery_bg.png',
};
