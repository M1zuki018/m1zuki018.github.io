import { openNewsModal } from './news-modal.js';

/**
 * お知らせの行リスト。トップの一覧・お知らせページの一覧、両方で使う。
 * クリックで開くのは呼び出し側の bindNewsList() 任せにしておき、
 * この関数はマークアップの組み立てだけを担当する。
 */
export function renderNewsList(items) {
  return `
    <ul class="news-list">
      ${items
        .map(
          (item, i) => `
        <li>
          <button class="news-row" type="button" data-news="${i}">
            <span class="news-row__date">${formatDate(item.date)}</span>
            <span class="news-row__title">${item.title}</span>
          </button>
        </li>
      `
        )
        .join('')}
    </ul>
  `;
}

/** 行のクリックでポップアップを開く */
export function bindNewsList(mount, items) {
  mount.addEventListener('click', (event) => {
    const row = event.target.closest('[data-news]');
    if (!row) return;
    openNewsModal(items[Number(row.dataset.news)]);
  });
}

export function formatDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}
