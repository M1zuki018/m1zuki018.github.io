import { buildKeyVisual } from '../components/key-visual.js';

/**
 * STORYブロック。
 * キービジュアル ＋ 本文 ＋ 任意のリンクボタン。
 * リンク先は、novel を持つ作品ならサイト内の小説ビュー、
 * そうでなければ data.link の外部URL。どちらも無ければボタンごと出さない。
 */
export function renderStory({ data, resolve, work }) {
  const visuals = (data.visuals ?? []).map(resolve);
  const link = linkOf(data, work);

  // キービジュアル → 本文 → ボタン の順に、少しずつ遅らせて出す
  return `
    ${visuals.length ? buildKeyVisual(visuals, 'scale') : ''}

    <div class="block-text" data-reveal style="--reveal-delay: 120ms">
      ${toParagraphs(data.text)}
    </div>

    ${
      link
        ? `<a class="go-button" href="${link.href}" ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
              data-reveal style="--reveal-delay: 220ms">
             <span class="go-button__label">${link.label}</span>
           </a>`
        : ''
    }
  `;
}

/** GOボタンの行き先。サイト内で読ませる作品を外部リンクより優先する */
function linkOf(data, work) {
  if (work?.novel) return { href: `read.html?code=${work.code}`, label: 'READ', external: false };
  if (data.link) return { href: data.link.href, label: data.link.label ?? 'GO', external: true };
  return null;
}

/**
 * 改行を段落に変換する。データ側では普通に改行を書けばよい。
 * 行頭の全角スペース（字下げ）はそのまま残す。trim() や \s は全角スペースも
 * 空白として削ってしまうため、ここでは半角の空白と改行だけを対象にしている。
 */
export const toParagraphs = (text = '') =>
  text
    .replace(/^(?:[ \t]*\r?\n)+/, '')   // 書き始めの空行だけを落とす
    .replace(/\s+$/, '')
    .split(/\r?\n[ \t]*\r?\n/)         // 空行で段落に分ける
    .filter((block) => block.trim())
    .map((block) => `<p>${block.replace(/\r?\n/g, '<br>')}</p>`)
    .join('');
