/**
 * 清潔　作品データ（深層東京シリーズ）
 *
 * 画像は親作品と同じ Resources/tokyo/tokyo_(名前).png に解決される。
 * 解決の規約は assets/data/works.config.js の resourceOf() / resourceCodeOf() にある。
 */
export default {
  /* ============ STORYブロック ============ */
  story: {
    visuals: [],

    text: `壊れた家の床を拭き続けた手が、この国でいちばん価値のある技術になった。

痕跡を消すことだけが得意な少女、涼代白寧の話。`,
  },

  /* ============ CHARACTERブロック ============ */
  /* 定義は深層東京側にあるので、ここでは登場だけを書く */
  appearances: [{ id: 'hakune', from: 'tokyo' }],
};
