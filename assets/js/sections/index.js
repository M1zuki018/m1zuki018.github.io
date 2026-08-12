import { renderStory } from './story.js';
import { renderWorld, bindWorld } from './world.js';
import { renderCharacter, bindCharacter } from './character.js';
import { renderSeries, bindSeries } from './series.js';

/**
 * セクションidと描画処理の対応表。
 * 独自のブロックを増やすときは、ここに1行足して renderer を書く。
 */
export const SECTION_RENDERERS = {
  story: renderStory,
  series: renderSeries,
  world: renderWorld,
  character: renderCharacter,
};

/**
 * 描画後に操作を登録する必要があるブロックだけ、ここに登録する。
 * work-detail.js が該当セクションの要素を渡して呼ぶ。
 */
export const SECTION_BINDERS = {
  series: bindSeries,
  world: bindWorld,
  character: bindCharacter,
};
