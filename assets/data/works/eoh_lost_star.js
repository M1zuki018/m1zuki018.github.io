/**
 * 20xx - Lost Star　作品データ（END OF HOPE シリーズ）
 *
 * 画像は親作品と同じ Resources/eoh/eoh_(名前).png に解決される。
 * 解決の規約は assets/data/works.config.js の resourceOf() / resourceCodeOf() にある。
 */
export default {
  /* ============ STORYブロック ============ */
  story: {
    visuals: [],

    text: `二〇九三年十二月、旧フランス、パリ郊外。

戦争。度重なる天災。そして、この星の外からやってきた生命体による侵略。
壊れていく世界の片隅に、ナサニエル・クレルヴォーの小さな家があった。生命を生み出す異能を持つ妻エレオノールと、五歳の息子ルイ。それが彼の世界のすべてだった。

学生時代からの親友ファロン・ヴォーベールは、世界の《修復》のためにその力を貸せと言った。ナサニエルは首を縦に振らなかった。「僕が異能を使うとしたら、エレオノールとルイのためだけに使う」――その一言が、友情という名の最後の繋がりを断ち切った。

数週間後、妻と息子は連れ去られる。

これは、世界で最初に異能で人を殺めた男と、その妻と、友人の話。
そして、ルイ・クレルヴォーがすべてを忘れるまでの記録。`,

    link: { label: 'GO', href: 'https://ncode.syosetu.com/n2974kb/114/' },
  },

  /* ============ 陣営（CHARACTERブロックのタブ） ============ */
  characterGroups: [
    { id: 'clairvaux', label: 'クレルヴォー家' },
    { id: 'aegis', label: 'イージス・コンコード' },
    { id: 'henitai', label: '変異体' },
  ],

  /* ============ キャラクター（この作品で定義する人物） ============ */
  characters: [
    {
      id: 'nathaniel',
      group: 'clairvaux',
      color: '#2e6b4f',

      name: 'ナサニエル',
      realName: 'ナサニエル・クレルヴォー',
      alphabet: 'NATHANIEL CLAIRVAUX',
      quote: '僕が異能を使うとしたら、エレオノールとルイのためだけに使う',

      affiliation: '無所属（イージス・コンコードの召集を拒否）',
      gender: '男性',
      age: '？',
      birthday: '',
      bloodType: '',
      height: '',
      weight: '',
      firstPerson: '僕',
      residence: '旧フランス・パリ郊外',

      intro:
        'ルイの父。深緑の瞳は、若さをまだ宿しながらも、どこか深く疲弊し、磨り減っている。異能《Domination》は、他人の星溶粒子に干渉して異能そのものを制御し、その本質を解析する力。世界に召し上げられるだけの力を持ちながら、彼はそれを使わないことを選び続けた。\n' +
        '少年時代、「先生」の計算でこの星の終わる日を知り、自ら死のうとしたところをファロンに止められている。穏やかで確固たる意志を持つが、その意志が向く先は、世界ではなくこの家の中だけに限られている。',
    },
    {
      id: 'eleonore',
      group: 'clairvaux',
      color: '#b7d17a',

      name: 'エレオノール',
      realName: 'エレオノール・クレルヴォー',
      alphabet: 'ÉLÉONORE CLAIRVAUX',
      quote: 'どこにも行くわけがないでしょう',

      affiliation: '無所属',
      gender: '女性',
      age: '？',
      birthday: '',
      bloodType: '',
      height: '',
      weight: '',
      firstPerson: 'わたし',
      residence: '旧フランス・パリ郊外',

      intro:
        'ナサニエルの妻。銀色の細く長い髪と、ペリドットの瞳。異能は「生命を生み出す」という、神に等しい領域に触れる力。乾いた土から花を咲かせ、汚染された土地に無害な作物を実らせ、希望を失った人間の胸に微かな温もりの種を宿す。各地のシェルターを巡り、実らせたものを分け与えて歩いた。\n' +
        '穏やかで柔和だが、その中心には一本の真っ直ぐな線が通っている。守るべきものが脅かされれば、湖面が一瞬で堅い鏡と化すように毅然と立つ。この力を独占することだけは、彼女には許せない。',
    },
  ],

  /* ============ 登場（定義は他作品にある人物） ============ */
  /* 書いた項目だけが定義元から上書きされる。作品をまたいでもよい。
     icon / stand を書くとこの作品用の絵に差し替わる（省略すると定義元の絵をそのまま使う）。
     画像はこの作品のフォルダ＝親作品の Resources/eoh/ に置く */
  appearances: [
    {
      id: 'louis',
      from: 'eoh',
      group: 'clairvaux',

      icon: 'char_louis_loststar_icon',
      stand: 'char_louis_loststar_stand',

      quote: '',
      affiliation: '',
      age: '5',
      height: '',
      weight: '',
      firstPerson: 'ぼく',
      residence: '旧フランス・パリ郊外',

      intro:
        'ナサニエルとエレオノールの息子。柔らかくもちもちとした頬に、父と同じくりっとした深緑の瞳と、小さな緑髪。この世界の終わりの色に、まったく汚されていない。\n' +
        '灰に覆われた空の下で、誰も見たことのないはずの鮮やかな青空の絵を描く。異能はまだ、目覚めていない。',
    },
    {
      id: 'falon',
      from: 'eoh',
      group: 'aegis',

      icon: 'char_falon_loststar_icon',
      stand: 'char_falon_loststar_stand',

      quote: '私には、もう何もない',
      affiliation: 'イージス・コンコード／鎮圧部隊',
      age: '22',
      residence: '旧フランス',

      intro:
        'ナサニエルの学生時代からの親友。長い金色の前髪と、鍛えられた体躯。人一倍、燃えるような正義感を持った熱い男で、軍服姿で各地の暴動鎮圧に奔走している。\n' +
        '戦争は故郷と家族を奪い、軍で得た仲間たちも風に散った。異能《Altération》は、彼にとって失わないための力ではなく、奪われたすべてを取り戻すための力。両耳の銀色のピアスは、使うたびに片方ずつ消えていく。その瞳の中では、希望と絶望が溶け合うことなく鋭く対峙している。',
    },
    {
      id: 'miou',
      from: 'eoh',
      group: 'aegis',

      icon: 'char_miou_loststar_icon',
      stand: 'char_miou_loststar_stand',

      quote: '',
      affiliation: 'イージス・コンコード／最高執行官',
      age: '17',
      height: '',
      weight: '',
      residence: '',

      intro:
        'この時代、イージス・コンコードの最高執行官の座にある青年。漆黒の瞳と、まだ幼さが残る顔立ち。肩には重くうっとうしいマントが掛かっている。公の場では必要なことしか口にせず、内心の毒づきが表に出ることはない。\n' +
        '裁定から執行までを担う立場でありながら、自らの手を汚す必要のない場面でそうしないことがある。およそ十四年後、澄幽でルイに体術のすべてを教えることになる人物。',
    },
    {
      id: 'belyisvet',
      from: 'eoh',
      group: 'henitai',

      icon: 'char_belyisvet_loststar_icon',
      stand: 'char_belyisvet_loststar_stand',

      quote: '代償を、支払うことなく',
      affiliation: '',
      residence: '',

      intro:
        '地球外生命体と極めて近い距離で接触し、制御不能な異能の種を宿した変異体。この時代にはすでに人の形を失い、青白く冷たい光を放つ蝶の姿をしている。鈴のような声は、氷のように澄んでいて、痛みを孕んだ響きを持つ。\n' +
        '近づく者の潜在能力を強制的に覚醒させてしまう性質は、彼女の意思とは関わりなく撒き散らされる。世界を修復したいと願いながら、その願いが誰かを壊すことに、彼女自身が誰よりも痛んでいる。',
    },
  ],
};
