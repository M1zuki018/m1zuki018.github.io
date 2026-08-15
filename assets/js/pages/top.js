import { NEWS } from '../../data/news.js';
import { renderNewsList, bindNewsList } from '../components/news-list.js';

/** トップページのお知らせ欄。新しい順の先頭数件だけを出す */
const PREVIEW_COUNT = 4;

const mount = document.querySelector('[data-top-news]');

if (mount) {
  const items = [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, PREVIEW_COUNT);

  mount.innerHTML = items.length
    ? renderNewsList(items)
    : `<p class="news-empty">お知らせはまだありません</p>`;

  bindNewsList(mount, items);
}
