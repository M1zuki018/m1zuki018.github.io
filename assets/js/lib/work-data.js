import { WORKS, findWork, resourceOf, resourceCodeOf } from '../../data/works.config.js';

/**
 * 作品データ（assets/data/works/(code).js）の読み込みまわり。
 * 作品ページとキャラクターページの両方から使う。
 *
 * キャラクターは「定義は1作品だけに置き、他の作品には登場として書く」形にしている。
 *   characters  … その作品で定義するキャラクター（＝定義元。プロフィールを全部書く）
 *   appearances … 他作品で定義済みのキャラクターの登場（作品ごとに変わる項目だけ書く）
 * 同じ人物は id を揃えておく。それが作品をまたいで結び付ける鍵になる。
 */

/** 一度読んだ作品データは使い回す（登場の解決で他作品を何度も参照するため） */
const dataCache = new Map();

/** 1作品分のデータを読む。未作成でも例外を投げず空を返す */
export function loadWorkData(code) {
  if (!dataCache.has(code)) dataCache.set(code, importWorkData(code));
  return dataCache.get(code);
}

async function importWorkData(code) {
  try {
    const module = await import(`../../data/works/${code}.js`);
    return module.default ?? {};
  } catch {
    console.warn(`assets/data/works/${code}.js が見つかりません`);
    return {};
  }
}

/**
 * キャラクターに画像パスと所属作品の情報を足す。
 * icon / stand の指定が無ければ char_(id)_(種別) を既定名として使う。
 */
export function resolveCharacters(work, data) {
  const groups = data.characterGroups ?? [];
  const folder = resourceCodeOf(work);

  return (data.characters ?? []).map((character) => ({
    ...character,
    icon: resourceOf(folder, character.icon ?? `char_${character.id}_icon`),
    stand: resourceOf(folder, character.stand ?? `char_${character.id}_stand`),

    // 横断表示・検索用に、作品と陣営の情報を持たせておく
    ...contextOf(work, groups, character.group),
    isBase: true, // 定義元。キャラクターページではこちらを優先して出す
  }));
}

/**
 * 他作品で定義済みのキャラクターが、この作品にも登場する場合を解決する。
 * 書いた項目だけが上書きされ、残りは定義元から引き継ぐ。
 *
 *   appearances: [
 *     { id: 'khalil', from: 'aube', group: 'choyu', age: '19', intro: '…' },
 *   ]
 * from には定義元の作品コードを書く。作品をまたいでもよい。
 */
export async function resolveAppearances(work, data) {
  const groups = data.characterGroups ?? [];
  const folder = resourceCodeOf(work);

  const results = await Promise.all(
    (data.appearances ?? []).map(async (entry) => {
      const base = await findBaseCharacter(entry.from, entry.id);
      if (!base) {
        console.warn(`${entry.from} に ${entry.id} の定義が見つかりません`);
        return null;
      }

      // from は解決に使うだけなので、プロフィールには混ぜない
      const { from, icon, stand, ...overrides } = entry;

      return {
        ...base,
        ...overrides,

        // この登場のために描いた絵がある時だけ差し替える（この作品のフォルダから探す）
        icon: icon ? resourceOf(folder, icon) : base.icon,
        stand: stand ? resourceOf(folder, stand) : base.stand,

        ...contextOf(work, groups, overrides.group),
        isBase: false,

        // 陣営を持たない作品（シリーズ作品など）では定義元の表記をそのまま使う
        groupLabel: groups.find((g) => g.id === overrides.group)?.label ?? base.groupLabel,
      };
    })
  );

  return results.filter(Boolean);
}

/** その作品に出てくるキャラクター全員（定義したもの＋他作品からの登場） */
export async function charactersOf(work) {
  const data = await loadWorkData(work.code);
  const [own, guests] = [resolveCharacters(work, data), await resolveAppearances(work, data)];
  return [...own, ...guests];
}

/**
 * 同じ人物の、作品ごとのプロフィールをまとめた索引（id → 配列）。
 * 詳細ポップアップの切り替えとキャラクターページで使う。
 * 全作品を読むので、必要になった時に一度だけ作る。
 */
let indexPromise = null;

export function loadCharacterIndex() {
  indexPromise ??= buildIndex();
  return indexPromise;
}

async function buildIndex() {
  const lists = await Promise.all(workTargets().map(charactersOf));
  const index = new Map();

  lists.flat().forEach((character) => {
    const list = index.get(character.id) ?? [];
    list.push(character);
    index.set(character.id, list);
  });

  // 定義元を先頭に置く。「どれを既定にするか」はこの順序で決まる
  index.forEach((list) => list.sort((a, b) => Number(b.isBase) - Number(a.isBase)));

  return index;
}

/**
 * キャラクターページ用に、1人につき1件だけ返す。
 * 複数の作品に登場する場合は定義元（親作品への登録）を優先する。
 */
export async function loadAllCharacters() {
  const index = await loadCharacterIndex();
  return [...index.values()].map((list) => list[0]).filter((character) => !character.hidden);
}

/** 検索対象になる文字列をまとめて作る（小文字化して比較しやすくしておく） */
export const searchTextOf = (c) =>
  [c.name, c.realName, c.alphabet, c.groupLabel, c.workTitle].filter(Boolean).join(' ').toLowerCase();

/* ================= 内部で使う小さな部品 ================= */

/**
 * 準備中の作品と、HOMEタブのような作品以外の項目を除いた一覧。
 * シリーズの中の1作品は一覧に出さない扱い（home: false）だが、作品ではあるので含める。
 */
const workTargets = () =>
  WORKS.filter((work) => (work.home !== false || work.parent) && work.status !== 'preparation');

/** どの作品のどの陣営として出ているか。定義元と登場で共通の項目 */
const contextOf = (work, groups, groupId) => ({
  workCode: work.code,
  workTitle: work.title ?? work.label,

  // キャラクターページの作品タブは、シリーズ作品も親作品にまとめる
  parentCode: resourceCodeOf(work),

  groupLabel: groups.find((g) => g.id === groupId)?.label ?? '',
});

/** 定義元の作品から、そのキャラクターを1人引く */
async function findBaseCharacter(code, id) {
  const from = findWork(code);
  if (!from) return null;

  const characters = resolveCharacters(from, await loadWorkData(from.code));
  return characters.find((character) => character.id === id) ?? null;
}

export { findWork };
