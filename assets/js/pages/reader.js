import { findWork, urlOf, bgOf } from '../../data/works.config.js';
import { toParagraphs } from '../sections/story.js';

/**
 * 小説ビュー（read.html?code=xxx）。
 * URLの code から作品を特定し、assets/data/novels/(code).js を読み込む。
 *   ep なし … 目次
 *   ep あり … その話の本文（1始まり）
 * ネタバレを含むので、同意を取るまでどちらも描画しない。
 */

/** 作品ごとに文面を書いていないときの、共通のネタバレ警告 */
const DEFAULT_WARNING = `この先には、作品の結末を含む重大なネタバレが含まれます。
読む順番を大切にしたい方は、ここで引き返してください。`;

const params = new URLSearchParams(location.search);
const code = params.get('code') ?? '';
const work = findWork(code);

if (!work?.novel) {
  location.replace('works.html');
} else {
  init(work);
}

async function init(work) {
  const title = work.title ?? work.label;

  document.querySelector('page-bg')?.setAttribute('data-src', bgOf(work));

  const novel = await loadNovel(work.code);
  const episodes = novel.episodes ?? [];
  if (!episodes.length) {
    location.replace(urlOf(work));
    return;
  }

  // ?ep= が無ければ目次。ある場合は1始まりで、範囲外や数字でない値は1話目に丸める
  const ep = params.get('ep');
  const index = ep === null ? null : clamp(Number(ep) - 1, 0, episodes.length - 1);

  document.title =
    index === null
      ? `${title} — CryStar Studio`
      : `${episodes[index].title} — ${title} — CryStar Studio`;

  const show = () => (index === null ? showIndex(work, title, novel) : showEpisode(work, title, novel, index));

  if (isAgreed(work.code)) {
    show();
  } else {
    showGate(work, title, novel, show);
  }
}

/** 本文データはページを開いたときにだけ読み込む */
async function loadNovel(code) {
  const module = await import(`../../data/novels/${code}.js`);
  return module.default;
}

/* ============ ネタバレ警告 ============ */

function showGate(work, title, novel, onAgree) {
  const gate = document.querySelector('[data-reader-gate]');
  if (!gate) return;

  gate.innerHTML = `
    <div class="reader-gate wrap">
      <div class="reader-gate__inner">
        <p class="reader-gate__label" data-reveal>WARNING</p>
        <h1 class="reader-gate__title" data-reveal style="--reveal-delay: 100ms">
          ${title}
        </h1>
        <div class="reader-gate__text" data-reveal style="--reveal-delay: 200ms">
          ${toParagraphs(novel.warning ?? DEFAULT_WARNING)}
        </div>
        <div class="reader-gate__actions" data-reveal style="--reveal-delay: 300ms">
          <button type="button" class="go-button" data-reader-agree>
            <span class="go-button__label">承知のうえで読む</span>
          </button>
          <a class="go-button" href="${urlOf(work)}">
            <span class="go-button__label">作品ページへ戻る</span>
          </a>
        </div>
      </div>
    </div>
  `;

  gate.querySelector('[data-reader-agree]')?.addEventListener('click', () => {
    agree(work.code);
    gate.innerHTML = '';
    onAgree();
  });
}

/** 同意はタブを閉じるまで覚えておく。話を移動するたびに聞かれると読めないため */
const agreeKey = (code) => `novel-agreed:${code}`;
const isAgreed = (code) => sessionStorage.getItem(agreeKey(code)) === '1';
const agree = (code) => sessionStorage.setItem(agreeKey(code), '1');

/* ============ 目次 ============ */

function showIndex(work, title, novel) {
  render(`
    <header class="reader-head">
      <p class="reader-head__work">${work.label}</p>
      <h1 class="reader-head__title">${title}</h1>
      ${work.subtitle ? `<p class="page-head__lead">${work.subtitle}</p>` : ''}
    </header>

    ${novel.lead ? `<div class="reader-lead">${toParagraphs(novel.lead)}</div>` : ''}

    ${renderToc(work, novel.episodes, null)}

    <nav class="reader-pager" aria-label="話の移動">
      <a class="go-button reader-pager__next" href="${readUrl(work, 1)}">
        <span class="go-button__label">最初から読む</span>
      </a>
    </nav>
  `);
}

/* ============ 本文 ============ */

function showEpisode(work, title, novel, index) {
  const episodes = novel.episodes;
  const episode = episodes[index];

  render(`
    <header class="reader-head">
      <p class="reader-head__work">${title}</p>
      <h1 class="reader-head__title">第${index + 1}話　${episode.title}</h1>
    </header>

    <div class="reader-text">${toParagraphs(episode.text)}</div>

    ${renderPager(work, episodes, index)}
    ${renderToc(work, episodes, index)}
  `);
}

/** 本文パネルを出して中身を差し込む。目次も本文も入口はここ1つ */
function render(html) {
  const panel = document.querySelector('[data-reader-panel]');
  const mount = document.querySelector('[data-reader-body]');
  if (!panel || !mount) return;

  panel.hidden = false;
  mount.innerHTML = html;

  window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderPager(work, episodes, index) {
  const link = (to, label, modifier) =>
    `<a class="go-button ${modifier}" href="${readUrl(work, to)}">
       <span class="go-button__label">${label}</span>
     </a>`;

  return `
    <nav class="reader-pager" aria-label="話の移動">
      ${index > 0 ? link(index, '前の話', 'reader-pager__prev') : ''}
      <a class="go-button reader-pager__toc" href="${readUrl(work)}">
        <span class="go-button__label">目次</span>
      </a>
      ${index < episodes.length - 1 ? link(index + 2, '次の話', 'reader-pager__next') : ''}
    </nav>
  `;
}

/** 目次。index は現在の話（目次ページでは null＝現在地なし） */
function renderToc(work, episodes, index) {
  return `
    <nav class="reader-toc" aria-label="目次">
      <p class="reader-toc__label">INDEX</p>
      <div class="reader-toc__list">
        ${episodes
          .map(
            (episode, i) => `
              <a class="reader-toc__link" href="${readUrl(work, i + 1)}"
                 ${i === index ? 'aria-current="true"' : ''}>
                <span class="reader-toc__no">${String(i + 1).padStart(2, '0')}</span>
                <span>${episode.title}</span>
              </a>
            `,
          )
          .join('')}
      </div>
    </nav>
  `;
}

/** その作品のURL。ep（1始まり）を省くと目次 */
const readUrl = (work, ep) =>
  ep === undefined ? `read.html?code=${work.code}` : `read.html?code=${work.code}&ep=${ep}`;

const clamp = (value, min, max) => Math.min(Math.max(value || min, min), max);
