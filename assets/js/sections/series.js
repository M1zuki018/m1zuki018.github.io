import { findWork, urlOf, resourceOf, resourceCodeOf } from '../../data/works.config.js';

/**
 * SERIESブロック。
 * 同じシリーズに属する作品を、横に送るカードで並べる。
 * カードを押すと、その作品のページ（work.html?code=xxx）へ移動する。
 *
 * データには作品コードを並べるだけでよい（assets/data/works/(code).js）：
 *   series: ['eoh_lost_star'],
 * カードに出す内容（タイトル・サムネなど）は works.config.js の作品定義から取る。
 */
export function renderSeries({ data }) {
  // 未登録のコードが混ざっていても落とさず、その1件だけ無視する
  const items = (Array.isArray(data) ? data : (data.items ?? []))
    .map((code) => findWork(code))
    .filter(Boolean);

  if (!items.length) return '';

  return `
    <div class="series" data-reveal>
      <ul class="series__track">
        ${items.map(card).join('')}
      </ul>

      <!-- 送りボタン。端まで来たら is-hidden が付く（bindSeries） -->
      <button class="series__arrow series__arrow--prev" type="button"
              data-scroll="-1" aria-label="前の作品を表示">‹</button>
      <button class="series__arrow series__arrow--next" type="button"
              data-scroll="1" aria-label="次の作品を表示">›</button>
    </div>
  `;
}

function card(work, index) {
  const number = String(index + 1).padStart(2, '0');
  const title = work.title ?? work.label;

  // サムネは親作品のフォルダから探す（Resources/(親)/(親)_(名前).png）。
  // 専用の絵が無いうちは親作品のビジュアルで代用する
  const thumb = resourceOf(resourceCodeOf(work), work.thumb ?? 'home');

  return `
    <li class="series__item">
      <a class="series-card" href="${urlOf(work)}">
        <span class="series-card__visual">
          <img src="${thumb}" alt="" loading="lazy">
          <span class="series-card__number">${number}</span>
        </span>

        <span class="series-card__body">
          ${work.label ? `<span class="series-card__label">${work.label}</span>` : ''}
          <span class="series-card__title">${title}</span>
          ${work.subtitle ? `<span class="series-card__subtitle">${work.subtitle}</span>` : ''}
          ${work.summary ? `<span class="series-card__text">${work.summary}</span>` : ''}
          <span class="series-card__more">View work</span>
        </span>
      </a>
    </li>
  `;
}

/**
 * 送りボタンの操作。
 * カード1枚分ずつスクロールし、端に着いたらボタンを隠す。
 */
export function bindSeries(root) {
  const track = root.querySelector('.series__track');
  if (!track) return;

  root.querySelectorAll('[data-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const step = track.querySelector('.series__item')?.offsetWidth ?? track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;

      track.scrollBy({
        left: (step + gap) * Number(button.dataset.scroll),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      });
    });
  });

  // 端まで来たら、その向きのボタンを隠す
  const updateArrows = () => {
    const max = track.scrollWidth - track.clientWidth;
    root.querySelector('.series__arrow--prev')?.classList.toggle('is-hidden', track.scrollLeft <= 1);
    root
      .querySelector('.series__arrow--next')
      ?.classList.toggle('is-hidden', track.scrollLeft >= max - 1);
  };

  track.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();
}
