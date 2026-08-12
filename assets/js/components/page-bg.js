import { PAGE_BG } from '../site.config.js';

/**
 * ページ背景。固定表示なのでスクロールしても動かない。
 *   <page-bg data-page="gallery">       … site.config.js の PAGE_BG から引く
 *   <page-bg data-src="任意のパス">      … 直接指定（作品ページは works.config.js の bgOf(work) を渡す）
 * どちらも無い場合は下地の色だけを敷く（あとから属性で差し替えられる）。
 */
class PageBg extends HTMLElement {
  // 属性があとから変わっても描き直せるようにしておく
  static observedAttributes = ['data-page', 'data-src'];

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  render() {
    const src = this.dataset.src || (this.dataset.page && PAGE_BG[this.dataset.page]) || '';

    this.innerHTML = `
      <div class="page-bg" aria-hidden="true">
        ${src ? `<img class="page-bg__img" src="${src}" alt="" fetchpriority="high">` : ''}
      </div>
    `;
  }
}

customElements.define('page-bg', PageBg);
