/**
 * お知らせの予約公開。
 * publishAt（'YYYY-MM-DDTHH:mm' など Date が読める形式）を過ぎたものだけを表示対象にする。
 * publishAt が無い項目は従来どおり常に表示する。
 *
 * 注意：ここでの絞り込みはページ表示時の判定でしかない。
 * データ自体（assets/data/news.js）はブラウザから誰でも読めるため、
 * 「本当に隠す」ものではなく「公開時刻までは一覧に出さない」だけの仕組み。
 */
export function publishedNews(items, now = new Date()) {
  return items.filter((item) => !item.publishAt || new Date(item.publishAt) <= now);
}
