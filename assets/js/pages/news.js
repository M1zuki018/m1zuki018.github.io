import { NEWS } from '../../data/news.js';
import { renderNewsList, bindNewsList } from '../components/news-list.js';

const mount = document.querySelector('[data-news-list]');

if (mount) {
  const items = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));

  mount.innerHTML = items.length
    ? renderNewsList(items)
    : `<p class="news-empty">お知らせはまだありません</p>`;

  bindNewsList(mount, items);
}
