/**
 * END OF HOPE:21xx - Last Call　作品データ
 *
 * 画像は名前だけ書けばよく、Resources/eoh/eoh_(名前).png に解決される。
 * 解決の規約は assets/data/works.config.js の resourceOf() にある。
 */
export default {
  /* ============ STORYブロック ============ */
  story: {
    visuals: ['story_01', 'story_02', 'story_03'],

    text: `『滅びたこの星に、救いはあるのか――』

かつて数々の厄災が地球を襲い、灰色の死の星と化した。大半の人類はスペースコロニーへと逃れたが、すべての人間がそこへ行けたわけではなかった。

地上に取り残された者たちは、生存のために"変異体"と呼ばれる存在のもとに集まり、コロニーを形成していた。異能、魔法、科学、呪術——それぞれの力を駆使しながら、独自の目的を掲げ、終末世界でもがいている。

集団の一つ、あぶれ者たちが集まった《淵》に主人公・ルイは所属し、"希望"を求めて終末世界を彷徨っていた。

――だが、彼らの"希望"を探す旅は、ここで、終わりを迎えようとしている。`,

    link: { label: 'GO', href: 'https://ncode.syosetu.com/n2974kb/' },
  },

  /* ============ WORLDブロック ============ */
  world: {
    visuals: ['world_01', 'world_02'],

    text: `二十一世紀末。度重なる天災と、二度にわたる地球外生命体の襲来。地球は灰の雲に覆われ、極寒の死の星と化した。

人類は《方舟計画》によってスペースコロニーへの脱出を図ったが、乗ることができたのはごく一部だった。計画は終了し、地上には行き場を失った者たちだけが残されている。

残された者たちは、それぞれの力を頼りに生き延びる術を探した。世界の理を書き換える《異能》。思い描いた事象を現実に上書きする《魔法》。そして、人を超えた存在――《変異体》。

地上には、いくつかの生存圏が点在する。

・京都の山岳地帯、霧に閉ざされた渓谷の奥に隠された秘境《澄幽》。変異体ミコの加護に守られた、この世界で最後の安息の地。戦闘組織《淵》がこれを守る。
・東ヨーロッパの廃墟に生まれた、異能者たちの無法地帯《ヴァルケイア》。法はなく、唯一の秩序は力である。
・中国沿岸に興った魔法秩序都市国家《皓絳》と、それを統べる機関《天衡院》。閉ざされ、内情を知る者はほとんどいない。

荒野には星骸と呼ばれる怪物が徘徊し、異能者と魔法士は互いを狩り続けている。この星に、安全な場所はもう残されていない。`,

    characters: ['louis', 'xiya', 'miou', 'falon', 'maqi', 'belyisvet', 'obsidia'],
  },

  /* ============ 陣営（CHARACTERブロックのタブ） ============ */
  characterGroups: [
    { id: 'choyu', label: '澄幽・淵' },
    { id: 'kokou', label: '皓絳・天衡院' },
    { id: 'valkeia', label: 'ヴァルケイア' },
    { id: 'henitai', label: '変異体' },
  ],

  /* ============ キャラクター ============ */
  characters: [
    /* ---------- 澄幽・淵 ---------- */
    {
      id: 'louis',
      group: 'choyu',
      color: '#32CD32',

      name: 'ルイ・クレルヴォー',
      realName: '',
      alphabet: 'LOUIS CLAIRVAUX',
      quote: 'シアの魔法を、"偽物"呼ばわりするな！',

      affiliation: '《淵》調査部隊',
      gender: '男性',
      age: '19',
      birthday: '2088年6月24日',
      bloodType: 'O',
      height: '170cm',
      weight: '58kg',
      firstPerson: '俺',
      residence: '澄幽・静月舎',

      intro: 'フランス出身。ライムグリーンの輝くような瞳を持つ、《淵》調査部隊の青年。四年目。星骸相手なら余裕を持って立ち回れるが、世界を変えるほどの相手に一人で挑む力はまだない。穏やかで冷静、決して他者を軽んじず、相手を「お前」ではなく名前で呼ぶ。ダガーと小型銃に変形するツインブレイザーの二丁使いで、射撃の腕は澄幽随一。「自分は弱い」と自覚しているからこそ、ひたむきに努力を重ねる。一人で抱え込む癖と、隠し事をするとき目を逸らす癖がある。',
    },
    {
      id: 'xiya',
      group: 'choyu',
      color: '#ff00ff',

      name: 'シア',
      realName: '柳曦芽',
      alphabet: 'LIU XIYA',
      quote: '絶対、一人になんてさせないから！',

      affiliation: '《淵》調査部隊',
      gender: '女性',
      age: '19',
      birthday: '2088年7月7日',
      bloodType: 'B',
      height: '156cm',
      weight: '45kg',
      firstPerson: '私',
      residence: '澄幽・翠霞庵',

      intro: '白銀の髪とアメジストの瞳を持つ少女。天衡院の前哨基地で実験体として扱われていたところを、二年前ルイに救出された。窓の外を眺めるだけだった日々の反動か、重力すら縛らない果てのない空に強く憧れている。魔法の構築速度は人並み外れて速く、防御と支援において誰よりも頼りになる。ただし優しすぎるがゆえに敵を害する意志を持てず、その迷いがそのまま威力の甘さとなって表れてしまう。守られるだけではなく、誰かを守れるようになりたいと願っている。',
    },
    {
      id: 'miou',
      group: 'choyu',
      color: '#262325',

      name: '黒華珠桜',
      realName: '',
      alphabet: 'MIOU KUROHANA',
      quote: '無理はしないで、ちゃんと体を休めるんだよ。これは命令',

      affiliation: '澄幽／《淵》統率者',
      gender: '男性',
      age: '31',
      birthday: '2076年3月26日',
      bloodType: 'O',
      height: '174cm',
      weight: '66kg',
      firstPerson: '私',
      residence: '澄幽・寧静亭',

      intro: '澄幽の実質的な指導者。漆黒の髪と瞳を持つ、静かで美しい人物。この地に集った人々を守り続けている。武術の達人であり、ルイの体術はすべて彼から教わったもの。穏やかで、誰に対しても分け隔てなく優しい。ただし鍛錬の場では容赦がなく、春の陽光のように暖かく、深淵のように情け容赦のない笑みを浮かべる――「慈悲深き悪魔」と呼ぶほかない一面を覗かせる。',
    },
    {
      id: 'ritto',
      group: 'choyu',
      color: '#6A1435',

      name: '夜霧律灯',
      realName: '',
      alphabet: 'RITTO YAGIRI',
      quote: '僕も戦えますから',

      affiliation: '澄幽／珠桜の補佐',
      gender: '男性',
      age: '25',
      birthday: '2082年5月14日',
      bloodType: 'A',
      height: '175cm',
      weight: '61kg',
      firstPerson: '僕',
      residence: '澄幽・寧静亭',

      intro: '珠桜の補佐。冷静沈着で、常に礼を失わない物腰。澄幽の中枢を実務面から支えている。目立たぬ存在であることを選んできたが、決して無力ではなく、いざとなれば自ら前に出る。主人の命令は絶対だが、それ以上に、主人を危険に晒すことを何より嫌う。',
    },
    {
      id: 'hibiya',
      group: 'choyu',
      color: '#664d56',

      name: '夜霧響哉',
      realName: '',
      alphabet: 'HIBIYA YAGIRI',
      quote: 'ま、強けりゃなんでもいいんだよこの世界',

      affiliation: '《淵》調査部隊／"黎冥"',
      gender: '男性',
      age: '27',
      birthday: '2080年8月14日',
      bloodType: 'AB',
      height: '183cm',
      weight: '90kg',
      firstPerson: '俺',
      residence: '澄幽・黎冥の居',

      intro: '《淵》調査部隊、"黎冥"の片割れ。紫檀色の髪と銀灰色の瞳を持ち、鍛え上げられた肉体には無数の戦傷が刻まれている。珠桜に仕え、琴葉と組んで荒野を駆ける。どんな武器でも扱える適応力と、恐れずに踏み込んで勝ちをもぎ取る実戦力を持つ、澄幽最強格の一人。ルイとシアには軽口を叩く頼れる兄貴分として接し、よく笑う。ただしその笑い方には、どこか作り物めいたところがある。',
    },
    {
      id: 'kotoha',
      group: 'choyu',
      color: '#8B0000',

      name: '黒華琴葉',
      realName: '？？？',
      alphabet: 'KOTOHA KUROHANA',
      quote: '自衛もできないなら外に出ないで',

      affiliation: '《淵》調査部隊／"黎冥"',
      gender: '女性',
      age: '？',
      birthday: '2075年12月5日',
      bloodType: '？',
      height: '165cm',
      weight: '54kg',
      firstPerson: '私',
      residence: '澄幽・黎冥の居',

      intro: '《淵》調査部隊、"黎冥"の片割れ。夜空を切り取ったような漆黒の髪と深紅の瞳、傷ひとつない陶器のような白い肌を持ち、その所作は精密な時計のように無駄がない。魔法の構築力は常軌を逸しており、戦闘の最中に新たな魔法を組み上げ、「二度同じ魔法は使わない」と言われるほど。冷徹、簡潔、的確。ここ二年ほど、澄幽に帰っていない。',
    },

    /* ---------- ヴァルケイア ---------- */
    {
      id: 'falon',
      group: 'valkeia',
      color: '#C0A060',

      name: 'ファロン・ヴォーベール',
      realName: '',
      alphabet: 'FALON VAUBÈRE',
      quote: '必ず迎えに行く',

      affiliation: 'ヴァルケイア／無窮の咎',
      gender: '男性',
      age: '36',
      birthday: '2071年4月28日',
      bloodType: 'AB',
      height: '197cm',
      weight: '79kg',
      firstPerson: '私',
      residence: 'サンクチュアリ・オブ・リバース',

      intro: 'かつて《イージス・コンコード》の高官を務めた男。異能《Altération》を操り、あらゆる物質を望む形へと変質させる。ただしその力は「無」からは何も生み出せず、常に素材を必要とする――人間は、恰好の素材だ。',
    },
    {
      id: 'miredina',
      group: 'valkeia',
      color: '#12a3e6',

      name: 'ミレディーナ・ティフォン',
      realName: '',
      alphabet: 'MIREDINA TYPHON',
      quote: 'この物語は、私が幕を下ろすまで',

      affiliation: 'ヴァルケイア／無窮の咎',
      gender: '女性',
      age: '29',
      birthday: '2078年8月24日',
      bloodType: 'B',
      height: '173cm',
      weight: '53kg',
      firstPerson: 'ワタクシ',
      residence: 'サンクチュアリ・オブ・リバース',

      intro: '異能《Cataclysm》によって天災そのものを操る異能者。地震、津波、火山噴火、雷撃――理論上起こりえない規模の災厄を引き起こす。青髪と赤い瞳を持ち、女王のような威厳をまとう。彼女の領域「サンクチュアリ・オブ・リバース」に広がる穏やかな雪も、そよ風も、オーロラも、すべて彼女の気分のままに姿を変える。無窮の咎の中では比較的穏やかとされるが、その機嫌ひとつが数億の命を左右する。',
    },
    {
      id: 'rita',
      group: 'valkeia',
      color: '#ff1500',

      name: 'リタ・クレスト',
      realName: '',
      alphabet: 'RITA KREST',
      quote: '新しいお友達、つくろーよー！',

      affiliation: 'ヴァルケイア／無窮の咎',
      gender: '女性',
      age: '17？',
      birthday: '2090年10月13日',
      bloodType: 'B',
      height: '150cm',
      weight: '40kg',
      firstPerson: 'ボク',
      residence: 'オルター・オブ・ザ・ディパーティッド',

      intro: 'プラチナブロンドの髪に黒い眼帯、病的なほど白い肌をした少女。鈴を転がすような声で、夕食の献立を話すような軽さで殺戮を語る。血を媒介とした異能《Subjugate》によって他者の精神を支配し、意のままに操る。彼女にとって人を壊すことも殺すことも「遊び」であり、退屈こそが最大の敵。エゼキエル以外に、彼女の相手を辛抱強く務められる者はこの世界にいない。',
    },
    {
      id: 'ezechiel',
      group: 'valkeia',
      color: '#1a2a6c',

      name: 'エゼキエル・ファルナスティア',
      realName: '',
      alphabet: 'EZECHIEL FARNASTIER',
      quote: 'リタが怪我するの……やだ',

      affiliation: 'ヴァルケイア／無窮の咎',
      gender: '男性',
      age: '17',
      birthday: '2090年10月13日',
      bloodType: 'A',
      height: '192cm',
      weight: '74kg',
      firstPerson: '俺',
      residence: 'オルター・オブ・ザ・ディパーティッド',

      intro: '深いネイビーの髪から覗く赤い瞳、血の気のない死人のような肌をした長身の男。死者の魂を縛って亡霊として使役する異能《Geleit》を操り、彼が支配する「オルター・オブ・ザ・ディパーティッド」は生者が足を踏み入れれば即座に亡霊の仲間入りとなる禁忌の領域。常に困ったように眉を寄せ、言葉は途切れがちで、口調はどこか気弱。だがその全ては、リタのためだけに向けられている。',
    },
    {
      id: 'jelma',
      group: 'valkeia',
      color: '#FFD700',

      name: 'イェルマ・バルジス',
      realName: '',
      alphabet: 'JELMA VALCZYS',
      quote: 'オ？　なんかオモシロそうなことになってんじゃねェか！',

      affiliation: 'ヴァルケイア／無窮の咎',
      gender: '男性',
      age: '？',
      birthday: '2月28日',
      bloodType: 'O',
      height: '196cm',
      weight: '101kg',
      firstPerson: 'オレ/オレサマ',
      residence: 'ディヴェージェンス・ワンダーランド',

      intro: '空間そのものを歪める異能《Distort》の持ち主。重力の向きを分裂させ、触れた物質を再構成し、次元も時間も捻じ曲げる。彼の領域「ディヴェージェンス・ワンダーランド」は、遊びと破壊が一体化した混沌の遊園地であり、何があっても誰も立ち入らない。強い者にしか興味を示さず、「面白い」と思われた者は惨劇の末に死ぬ。純粋な破壊衝動の塊。',
    },

    /* ---------- 皓絳・天衡院 ---------- */
    {
      id: 'maqi',
      group: 'kokou',
      color: '#FFFFFF',

      name: 'マキ',
      realName: '胡瑪琪',
      alphabet: 'HU MAQI',
      quote: '秩序は、守られている限り誰も傷つけない',

      affiliation: '天衡院 文衡局典司',
      gender: '男性',
      age: '24',
      birthday: '2083年9月21日',
      bloodType: 'O',
      height: '178cm',
      weight: '59kg',
      firstPerson: '私',
      residence: '皓絳',

      intro: '天衡院文衡局の典司。白髪に落ち着いた深紅の瞳を持つ。感情の起伏はほとんどなく、言葉は少なく、口を開けば本質だけを突く。「仕事はするが、無口で無愛想で。近寄りにくい人」と囁かれているが、本人は気付かず過ごしている。',
    },
    {
      id: 'baolong',
      group: 'kokou',
      color: '#9502f7',

      name: 'ポーラン',
      realName: '李保龍',
      alphabet: 'LI BAOLONG',
      quote: '案ずるな。秩序は、我が守る',

      affiliation: '天衡院 武衡局将衡',
      gender: '男性',
      age: '29',
      birthday: '2078年6月6日',
      bloodType: 'O',
      height: '188cm',
      weight: '92kg',
      firstPerson: '我(対武衡局)/私(対文衡局)',
      residence: '皓絳',

      intro: '天衡院の「顔」として民衆の前に立つ、魔法士の頂点。筋肉質な体格にツンツンとした黒髪、鋭い目つきだが、笑うと途端に親しみやすくなる。異能者の襲撃で父と妹を失い、母と姉も奪われかけた過去から、「二度と自分のように家族を失って悲しむ人が生まれない世界」を目指している。マキとリンファを家族同然に思い、二人の前では素のままの気さくな青年に戻る。',
    },
    {
      id: 'linghua',
      group: 'kokou',
      color: '#ff008a',

      name: 'リンファ',
      realName: '沈凌花',
      alphabet: 'SHEN LINGHUA',
      quote: '死なせないわよ。アタシの目の届く範囲では、絶対に',

      affiliation: '天衡院 天医',
      gender: '女性',
      age: '22',
      birthday: '2085年1月29日',
      bloodType: 'B',
      height: '153cm',
      weight: '39kg',
      firstPerson: 'アタシ',
      residence: '皓絳',

      intro: '天衡院唯一の治癒魔法の使い手。幼さの残る顔立ちに、手入れの行き届いたぱっつんボブとマゼンタのインナーカラー。厳格な管理社会にあっても、服装や髪型にわずかな個性を通す。誰に対しても気の強い口調で、文句を言いながら決して手を止めない。治癒魔法によって生じる「歪み」はすべて術者である彼女自身に降りかかるため、内臓はとうにぼろぼろで、血を吐きながら治療にあたることも珍しくない。命綱はシュエンから仕入れる"エナジードリンク"と称した薬。自分の命への執着は驚くほど薄い。',
    },
    {
      id: 'xuean',
      group: 'kokou',
      color: '#ffd772',

      name: 'シュエン',
      realName: '程雪安',
      alphabet: "CHENG XUE'AN",
      quote: 'おや、お探し物で？',

      affiliation: '天衡院 文衡局宰衡',
      gender: '男性',
      age: '34？',
      birthday: '11月5日',
      bloodType: 'A',
      height: '183cm',
      weight: '70kg',
      firstPerson: 'オレ',
      residence: '皓絳',

      intro: '天衡院文衡局宰衡。魔法で生成できない物資の調達と対外交渉を一手に担う、皓絳と外界を繋ぐ唯一のパイプ。服装には常に高級感と機能性を両立させ、龍の刺繍や翡翠のボタンといった意匠をさりげなく取り入れる。とにかく胡散臭く、軽い。交渉、脅し、偽造、情報収集、そして逃亡術――生き延びるための技能には事欠かない。',
    },

    /* ---------- 変異体 ---------- */
    {
      id: 'miko',
      group: 'henitai',
      color: '#fdeff2',

      name: 'ミコ',
      realName: '光泪宮幸仁',
      alphabet: 'YUKIHITO',
      quote: '世界は白光に飲まれ、焼かれ、消えてゆく',

      affiliation: '澄幽・寧静亭',
      gender: '男性',
      age: '16',
      birthday: '2089年4月4日',
      bloodType: 'A',
      height: '162cm',
      weight: '47kg',
      firstPerson: '私',
      residence: '澄幽・寧静亭',

      intro: '澄幽の最奥、寧静亭の禁域で眠り続ける神秘的な変異体。彼の星溶粒子が生む霧と加護が、認識そのものを阻害することで澄幽を外界から隠している。森も渓谷も小川も、澄幽に広がる息を呑むほど美しい風景はすべて彼の力が見せる幻想であり、その力が尽きたとき、この楽園も終わる。未来を視る異能を持ち、目覚めとともに告げられた「白光の滅び」の予言が、物語のすべてを動かし始める。',
    },
    {
      id: 'belyisvet',
      group: 'henitai',
      color: '#a2e8ee',

      name: 'ベリースヴェート',
      realName: 'カテリーナ・スニーシュカ',
      alphabet: 'BELYISVET',
      quote: '',

      affiliation: 'ヴァルケイア中央・エスケープゾーン',
      gender: '女性',
      age: '？',
      birthday: '11月11日',
      bloodType: 'B',
      height: '302cm',
      weight: '計測不能',
      firstPerson: 'わたくし',
      residence: 'ヴァルケイア',

      intro: '東ヨーロッパの廃墟にヴァルケイアを形成した変異体。その力の及ぶ範囲では大気に星溶粒子が満ち、常に青白い光に包まれ、異能者の力が増幅される。信条は「混沌の先にある新たな創造」。中央広場に降り積もる白い雪の結晶ひとつひとつには、彼女が思い描く美しく秩序ある新世界のヴィジョンが宿っている。',
    },
    {
      id: 'obsidia',
      group: 'henitai',
      color: '#000000',

      name: 'オブシディア',
      realName: '趙孤月',
      alphabet: 'OBSIDIA',
      quote: '余が定めた秩序である',

      affiliation: '？',
      gender: '女性',
      age: '？',
      birthday: '12月30日',
      bloodType: 'AB',
      height: '256cm',
      weight: '計測不能',
      firstPerson: '余',
      residence: '？',

      intro: '？？？',
    },
  ],
};
