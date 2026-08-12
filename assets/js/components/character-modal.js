/**
 * キャラクター詳細ポップアップ。
 * WORLDブロックのアイコンからも、CHARACTERブロックのMOREボタンからも同じものを開く。
 *
 * 使い方：
 *   registerCharacters(list)  … 表示できるキャラクターを登録（作品ページの読み込み時に1回）
 *   openCharacter(id)         … 開く
 *
 * 同じ人物が複数の作品に登場する場合は、開いているページの作品のプロフィールを出し、
 * 見出しの上のタブで他作品での姿に切り替えられる。
 * 切り替え先の一覧は全作品を読まないと分からないので、開いたあとに用意して後から差し込む。
 *
 * 立ち絵は「読み込めなかったら枠ごと出し直す」方式にしている。
 * CSSで畳むだけだと空の枠が残りやすいため、DOMから作り直して確実に詰める。
 */

import { setupDialogAnimation } from '../lib/dialog-anim.js';
import { buildStand, initStands } from './stand-image.js';
import { loadCharacterIndex } from '../lib/work-data.js';

/** 表示する項目と並び順。増減させたいときはこの配列を編集する */
const PROFILE_FIELDS = [
  { key: 'affiliation', label: '所属' },
  { key: 'gender', label: '性別' },
  { key: 'age', label: '年齢' },
  { key: 'birthday', label: '誕生日' },
  { key: 'bloodType', label: '血液型' },
  { key: 'height', label: '身長' },
  { key: 'weight', label: '体重' },
  { key: 'firstPerson', label: '一人称' },
  { key: 'residence', label: '居住歴' },
];

/** いま開いているページで出すプロフィール（id → キャラクター） */
const registry = new Map();

/** 作品をまたいだ登場の一覧（id → キャラクターの配列）。開いたあとに埋める */
const variants = new Map();

let dialog = null;
let current = null; // いま表示しているプロフィール

/** キャラクターを登録する */
export function registerCharacters(characters = []) {
  characters.forEach((character) => registry.set(character.id, character));
}

/** idを指定してポップアップを開く */
export function openCharacter(id) {
  const character = registry.get(id);
  if (!character) return;

  const el = ensureDialog();
  show(el, character);
  el.showModal();

  // 他作品での姿を探しておき、見つかったら切り替えタブを足す
  ensureVariants(id).then(() => {
    if (current?.id === id) paintSwitch(el);
  });
}

/** 表示するプロフィールを差し替える。切り替えタブからも呼ぶ */
function show(el, character) {
  current = character;

  // イメージカラーを変数として渡す。実際の配色は CSS 側で
  // 背景色と混ぜて落ち着かせている（character-modal.css を参照）
  el.style.setProperty('--char-color', character.color ?? 'var(--c-crys)');

  fill(el, character, Boolean(character.stand));
}

/** その人物が登場する作品ぶんのプロフィールを、一度だけ集める */
async function ensureVariants(id) {
  if (!variants.has(id)) {
    const index = await loadCharacterIndex();
    variants.set(id, index.get(id) ?? []);
  }
  return variants.get(id);
}

/**
 * 切り替えタブを描く。
 * 1作品にしか出ないキャラクターではタブごと出さない。
 */
function paintSwitch(el) {
  const mount = el.querySelector('[data-char-works]');
  const list = variants.get(current.id) ?? [];
  if (!mount) return;

  mount.innerHTML =
    list.length < 2
      ? ''
      : list
          .map(
            (v) => `
      <button class="char-modal__work${v.workCode === current.workCode ? ' is-current' : ''}"
              type="button" data-work="${v.workCode}"
              ${v.workCode === current.workCode ? 'aria-current="true"' : ''}>
        ${v.workTitle}
      </button>
    `
          )
          .join('');
}

function ensureDialog() {
  if (dialog) return dialog;

  dialog = document.createElement('dialog');
  dialog.className = 'char-modal';
  dialog.innerHTML = `
    <button class="char-modal__close" type="button" aria-label="閉じる">×</button>
    <div class="char-modal__body"></div>
  `;

  // 閉じる動きを挟むため、dialog.close() ではなく close() を経由する
  const close = setupDialogAnimation(dialog);

  dialog.querySelector('.char-modal__close').addEventListener('click', close);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) return close();

    // 作品の切り替え。中身を描き替えるだけで、開き直しはしない
    const tab = event.target.closest('[data-work]');
    if (!tab) return;

    const next = (variants.get(current.id) ?? []).find((v) => v.workCode === tab.dataset.work);
    if (next) show(dialog, next);
  });

  document.body.append(dialog);
  return dialog;
}

/**
 * 中身を描画する。
 * withStand が false のときは立ち絵のカラムを出力しないので、
 * 空の領域が残らず、1カラムで左詰めになる。
 */
function fill(el, character, withStand) {
  const body = el.querySelector('.char-modal__body');

  body.classList.toggle('is-standless', !withStand);
  body.innerHTML = render(character, withStand);
  paintSwitch(el); // 描き直すたびに切り替えタブも入れ直す

  if (!withStand) return;

  initStands(body);

  // 立ち絵が読み込めなかった時点で、立ち絵なしの形に組み直す
  body
    .querySelector('.stand__img')
    ?.addEventListener('error', () => fill(el, character, false), { once: true });
}

function render(c, withStand) {
  // 値が空の項目は行ごと出さない
  const rows = PROFILE_FIELDS.filter(({ key }) => c[key]).map(
    ({ key, label }) => `
      <div class="char-spec__row">
        <dt class="char-spec__key">${label}</dt>
        <dd class="char-spec__value">${c[key]}</dd>
      </div>
    `
  );

  // 立ち絵があるときはセリフを絵に被せ、無いときは本文の流れに載せる
  const visual = withStand
    ? `
    <div class="char-modal__visual">
      ${buildStand(c.stand, `${c.name}の立ち絵`)}
      ${c.quote ? `<p class="char-modal__quote">${c.quote}</p>` : ''}
    </div>`
    : '';

  const quoteInFlow =
    !withStand && c.quote ? `<p class="char-modal__quote char-modal__quote--flow">${c.quote}</p>` : '';

  return `
    ${visual}

    <div class="char-modal__info">
      ${quoteInFlow}

      <!-- 複数の作品に登場する場合だけ、ここに切り替えタブが入る（paintSwitch） -->
      <div class="char-modal__works" data-char-works></div>

      <header class="char-modal__head">
        ${c.alphabet ? `<p class="char-modal__alphabet">${c.alphabet}</p>` : ''}
        <h2 class="char-modal__name">${c.name}</h2>
        ${c.realName ? `<p class="char-modal__real">${c.realName}</p>` : ''}
      </header>

      ${rows.length ? `<dl class="char-spec">${rows.join('')}</dl>` : ''}

      ${c.intro ? `<div class="char-modal__intro"><p>${c.intro}</p></div>` : ''}
    </div>
  `;
}
