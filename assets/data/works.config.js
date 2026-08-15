/**
 * 作品の一覧と、作品タブ（ヘッダー2段目）の定義。
 * 作品を追加する手順：
 *   1. この WORKS に1件足す
 *   2. Resources/(code)/ に (code)_bg.png と (code)_home.png を置く
 *   3. assets/data/works/(code).js を作る（STORY/WORLD/CHARACTERの中身）
 * HTMLの新規作成は不要（work.html?code=(code) が共通テンプレートとして動く）。
 */

/** キービジュアルの自動切り替え間隔（ミリ秒）。サイト全体で共通 */
export const VISUAL_INTERVAL = 6000;

/** 作品ページ内のセクション。sections を省略した作品はこれが使われる */
export const DEFAULT_SECTIONS = [
  { id: 'story', label: 'STORY' },
  { id: 'world', label: 'WORLD' },
  { id: 'character', label: 'CHARACTER' },
];

/** シリーズ作品を持つ作品用。sections に指定して使う */
export const SECTIONS_WITH_SERIES = [
  { id: 'story', label: 'STORY' },
  { id: 'series', label: 'SERIES' },
  { id: 'world', label: 'WORLD' },
  { id: 'character', label: 'CHARACTER' },
];

/** シリーズ作品のページ構成。世界観は親作品側で説明しているので WORLD は置かない */
export const SECTIONS_SERIES_ENTRY = [
  { id: 'story', label: 'STORY' },
  { id: 'character', label: 'CHARACTER' },
];

/**
 * 作品定義。
 *   code     … 識別子。Resources/(code)/ とデータファイル名に対応する
 *   label    … タブに出す表記
 *   title    … HOMEページの見出し（省略時は label）
 *   subtitle … 見出しに添える一行（任意）
 *   sections … 作品ごとにブロック構成を変えたいときだけ指定する
 *   status   … 'preparation' なら準備中扱い（遷移しない・展開しない）
 *   home     … HOMEの一覧に出す／出さない
 *   novel    … true ならサイト内で本文を読ませる。STORYのGOボタンが
 *              read.html?code=(code) に向き、本文は assets/data/novels/(code).js から読む
 *   bg       … ページ背景の画像パス。シリーズ作品で省略した場合は親作品の bg を使う
 *   homeImg  … 作品HOME一覧のサムネイル画像パス（任意）。省略時は bg と同じ画像を使う
 *
 * シリーズの中の1作品は、上に加えて次を持つ：
 *   parent   … 親作品の code。タブと画像フォルダを親と共有する
 *   thumb    … SERIESブロックのカードに出す画像名（省略時は親作品の (親)_home）
 *   summary  … 同カードに出すあらすじ（任意）
 */
export const WORKS = [
  {
    code: 'home',
    label: 'HOME',
    href: 'works.html',   // 一覧ページ自体へのタブなので href を直接持つ
    sections: [],
    home: false,
  },
  {
    code: 'void',
    label: 'v※|d',
    subtitle: '',
    bg: 'Resources/gallery/void_gallery008.png',
    homeImg: 'Resources/gallery/void_gallery008.png',
  },
  {
    code: 'aube',
    label: '暁星',
    title: "暁星 Étoile de l'Aube",
    subtitle: '',
    bg: 'Resources/gallery/aube_gallery009.png',
    homeImg: 'Resources/gallery/aube_gallery009.png',
  },
  {
    code: 'rotl',
    label: 'ROTL',
    subtitle: '',
    bg: 'Resources/gallery/rotl_gallery007.png',
    homeImg: 'Resources/gallery/rotl_gallery007.png',
  },
  {
    code: 'eoh',
    label: 'EOH',
    title: 'END OF HOPE:21xx - Last Call',
    subtitle: '',
    sections: SECTIONS_WITH_SERIES,
    bg: 'Resources/gallery/eoh_gallery042.png',
    homeImg: 'Resources/gallery/eoh_gallery042.png',
  },
  {
    code: 'eoh_lost_star',
    parent: 'eoh',
    label: '20xx',
    title: 'Lost Star',
    subtitle: '世界最初の異能殺人犯と、その妻と、友人の話',
    summary: '二〇九三年、旧フランス。壊れていく世界の片隅で、生命を生み出す異能を持つ妻と五歳の息子と暮らした男の話。ルイ・クレルヴォーがすべてを忘れるまでの記録。',
    thumb: 'series_lost_star',
    sections: SECTIONS_SERIES_ENTRY,
    home: false,
  },
  {
    code: 'eoh_silent_ember',
    parent: 'eoh',
    label: '20xx',
    title: 'Silent Ember',   // 仮題。決まったらここと code を差し替える
    subtitle: '暁星後日譚 ―― 余燼',
    summary: '小惑星「セオ」は逸れ、世界は知らないうちに救われた。その朝、フィルウが告げたのは次の終わりだった。誰にも信じられないまま燃え尽きていく、四人の研究者の十五年。',
    thumb: 'series_silent_ember',
    novel: true,
    sections: SECTIONS_SERIES_ENTRY,
    home: false,
  },
  {
    code: 'tokyo',
    label: '深層東京',
    subtitle: '',
    sections: SECTIONS_WITH_SERIES,
    bg: 'Resources/gallery/tokyo_gallery001.png',
    homeImg: 'Resources/gallery/tokyo_gallery001.png',
  },
  {
    code: 'tokyo_shoto',
    parent: 'tokyo',
    label: '深層東京',
    title: '消灯',
    subtitle: '氷夜見 燐 / 暮見 灯威',
    summary: '人を地下へ落とし続けた男と、姉を落とされた男。第三技能育成校で「適性なし」の判を押された二人が、消灯後の闇で向かい合う。',
    thumb: 'series_shoto',
    novel: true,
    sections: SECTIONS_SERIES_ENTRY,
    home: false,
  },
  {
    code: 'tokyo_seiketsu',
    parent: 'tokyo',
    label: '深層東京',
    title: '清潔',
    subtitle: '涼代 白寧',
    summary: '壊れた家の床を拭き続けた手が、この国でいちばん価値のある技術になった。痕跡を消すことだけが得意な少女の話。',
    thumb: 'series_seiketsu',
    sections: SECTIONS_SERIES_ENTRY,
    home: false,
  },
  {
    code: 'preparation',
    label: '準備中',
    status: 'preparation',
    sections: [],
  },
];

/* ============ 以下は参照用のヘルパー ============ */

/** code から作品を引く */
export const findWork = (code) => WORKS.find((w) => w.code === code) ?? null;

/** その作品のセクション一覧（未指定なら既定値） */
export const sectionsOf = (work) => work.sections ?? DEFAULT_SECTIONS;

/** その作品のページURL。section を渡すとその位置まで飛ぶ */
export const urlOf = (work, sectionId) => {
  if (work.href) return work.href;
  const hash = sectionId ? `#${sectionId}` : '';
  return `work.html?code=${work.code}${hash}`;
};

/**
 * その作品が画像を置いているフォルダのcode。
 * シリーズの中の1作品は、自前のフォルダを持たず親作品のものを使う。
 */
export const resourceCodeOf = (work) => work.parent ?? work.code;

/** リソースの置き場所の規約。ここを変えればフォルダ構成を変更できる */
export const resourceOf = (code, suffix, ext = 'png') =>
  `Resources/${code}/${code}_${suffix}.${ext}`;

/**
 * その作品のページ背景。
 * WORKS に bg を書いた作品はそのパスをそのまま使う。
 * シリーズ作品で書いていないものは、親作品の bg を使う。
 */
export const bgOf = (work) => work.bg ?? (work.parent ? bgOf(findWork(work.parent)) : undefined);

/**
 * 作品HOME（一覧）に出すサムネイル。
 * WORKS に homeImg を書いた作品はそのパスをそのまま使う。
 * 書いていない作品は bg（ページ背景）と同じ画像を使う。
 */
export const homeImgOf = (work) => work.homeImg ?? bgOf(work);
