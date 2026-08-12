/**
 * 消灯　作品データ（深層東京シリーズ）
 *
 * 画像は親作品と同じ Resources/tokyo/tokyo_(名前).png に解決される。
 * 解決の規約は assets/data/works.config.js の resourceOf() / resourceCodeOf() にある。
 */
export default {
  /* ============ STORYブロック ============ */
  story: {
    visuals: [],

    text: `人を地下へ落とし続けた男と、姉を落とされた男の話。

B4F 第三技能育成校。引き金を引けない者に押される判は「適性なし」。
その判を押された二人が、消灯後の闇で向かい合う。`,
  },

  /* ============ CHARACTERブロック ============ */
  /* 定義は深層東京側にあるので、ここでは登場だけを書く。
     この作品での差分（肩書き・紹介文など）を書けば、その項目だけ上書きされる */
  appearances: [
    { id: 'rin', from: 'tokyo' },
    { id: 'toi', from: 'tokyo' },
  ],
};
