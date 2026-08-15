import { setupDialogAnimation } from '../lib/dialog-anim.js';
import { formatDate } from './news-list.js';

/**
 * お知らせ詳細ポップアップ。日付・タイトル・本文だけの単純な中身なので、
 * character-modal.js と違って登録やバリアント管理は持たない。
 */
let dialog = null;

export function openNewsModal(item) {
  const el = ensureDialog();
  el.querySelector('.news-modal__body').innerHTML = render(item);
  el.showModal();
}

function ensureDialog() {
  if (dialog) return dialog;

  dialog = document.createElement('dialog');
  dialog.className = 'news-modal';
  dialog.innerHTML = `
    <button class="news-modal__close" type="button" aria-label="閉じる">×</button>
    <div class="news-modal__body"></div>
  `;

  const close = setupDialogAnimation(dialog);
  dialog.querySelector('.news-modal__close').addEventListener('click', close);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) close();
  });

  document.body.append(dialog);
  return dialog;
}

function render(item) {
  return `
    <p class="news-modal__date">${formatDate(item.date)}</p>
    <h2 class="news-modal__title">${item.title}</h2>
    <div class="news-modal__message"><p>${item.message}</p></div>
  `;
}
