/**
 * ROTL 作品データ
 *
 * 画像は名前だけ書けばよく、Resources/rotl/rotl_(名前).png に解決される。
 * 解決の規約は assets/data/works.config.js の resourceOf() にある。
 *
 * ※ alphabet 表記・未確定項目（誕生日/身長/血液型など）は TODO コメント参照。
 * ※ weight は全て提案値（カノン未確定）。
 * ※ intro / quote は「1231年7月17日時点で、その世界の民が知りうる範囲」で記述している。
 */
export default {
  /* ============ STORYブロック ============ */
  story: {
    visuals: ['story_01'],

    text: `神降暦1231年。

リディアンス王国は、人間と異形が共に在ることで千年を保ってきた。
異形は人間を殺せない。神が定めたその規則が、両者の距離を成り立たせている。

王ヴァンセールが圧政の時代を終わらせ、
若き宰相ラズワルド・ゼファーニアの魔道具が国を躍進させた。
リディアンスはいま、最も豊かで、最も強い。

7月、王都ヴィルエスタ。
魔界のゲート封印という歴史的快挙を成し遂げたこの国で、祝祭の準備が進んでいた。
屋台が並び、鐘が鳴り、明日の段取りが大声で交わされている。

あなたは、その熱の中に立っている。`,
  },

  /* ============ WORLDブロック ============ */
  world: {
    visuals: ['world_01', 'world_02'],
    text: `この世界には、かつて人間と魔物の二つの種族しかいなかった。

魔界より溢れる魔物は土地を穢し、人の手には負えない。
そこで神々は、異形というもう一つの種族を作り出した。

リディアンスの神アスタルディアは、異形に人を守る役目を与えた。
課した禁は、ただ一つ——人間を殺してはならない。
その神と最初の契りを交わした者が、リディアンス初代女王である。

以来、王家は神と契りを結ぶ唯一の血筋であり続けている。
王が掲げるのは、この国がどうあるべきかという形。民が明日を疑わずにいられるのは、それを見上げていられるからである。

その形を地に降ろす役目を、ゼファーニア公爵家が負った。神が定めた規則を書き留め、その契約異形は世界の理を石に刻む。

王が冠を戴き、ゼファーニアが印璽を預かる。
民が仰ぐのは冠であり、民を生かすのは印璽である。

リディアンスを守ることが貴族には求められ、貴族は相応の異形と契りを交わし、民を守る。
中でも四大貴族——ゼファーニア公爵家、ヴェスクラリオ侯爵家、アルタンツェグ侯爵家、ネミレイユ侯爵家は、リディアンスの建国、開拓の頃から続く。`,

    characters: ['vanceil', 'razwald', 'astaldia', 'stage'],
  },

  /* ============ 陣営（CHARACTERブロックのタブ） ============ */
  characterGroups: [
    { id: 'royal', label: '王家・王太子府' },
    { id: 'zephania', label: '宰相府・ゼファーニア' },
    { id: 'divine', label: '神と異形' },
    { id: 'marquis', label: '侯爵家' },
    { id: 'knights', label: 'リディアンス騎士団' },
    { id: 'cygnewan', label: 'シーニュワンハウス' },
    { id: 'academy', label: '国立学術総院' },
    { id: 'tidoweb', label: 'タイドウェブ' },
    { id: 'cortege', label: '？？？' },
    { id: 'other', label: 'その他' },
  ],

  /* ============ キャラクター ============ */
  characters: [
    /* ---------- メイン・サブ ---------- */
    {
      id: 'vanceil',
      group: 'royal',
      color: '#8a1c22',

      name: 'ヴァンセール',
      realName: 'ヴァンセール・ヴェネディクス',
      alphabet: 'VANSAER VENEDICSS',
      quote: '異形と人間が手を取り合い、立ち上がる。リディアンスは、まだ強くなれる',

      affiliation: 'リディアンス王国 国王',
      gender: '男性',
      age: '41',
      birthday: '3月18日',
      bloodType: 'O',
      height: '185cm',
      weight: '80kg',
      firstPerson: '私',
      residence: 'ヴィルエスタ城',

      intro:
          '人すら資源として扱った圧政の時代を終わらせ、民を救った王。神の加護を授かった、この国で最も敬われる人。\n' +
          '正午の鐘に合わせてバルコニーに立ち、民の見ている前で祈りを捧げる。祈りの言葉に、迷いは一度もない。\n' +
          '戦となれば自ら前線に出る。王が退がらないという一事だけで、この国の兵は前へ進む。',
    },{
      id: 'razwald',
      group: 'zephania',
      color: '#2f6fa8',

      name: 'ラズワルド',
      realName: 'ラズワルド・ゼファーニア',
      alphabet: 'LAZWARD XEPHERNEAR',
      quote: 'リディアンスに栄光あれ',

      affiliation: 'リディアンス王国 宰相／ゼファーニア公爵家',
      gender: '男性',
      age: '21',
      birthday: '1月17日',
      bloodType: 'AB',
      height: '180cm',
      weight: '63kg',
      firstPerson: '私',
      residence: '王都ヴィルエスタ（ゼファーニア家別邸）',

      intro:
          '若くして宰相の座に就いた、ゼファーニア公爵家の当主。魔道具を世に広め、死なずに済む人間の数を桁違いに増やした男。\n' +
          '王が起きるより先に一日の朝報を仕上げ、王都の一日はこの執務室から始まる。誰をどこに置けば被害が最小になるかを、一人分の欠けもなく詰める人である。\n' +
          '鐘では時刻を計らない。祈祷の鐘が鳴っても、彼は手を止めない。',
    },
    {
      id: 'astaldia',
      group: 'divine',
      color: '#d4b25c',

      name: 'アスタルディア',
      realName: '',
      alphabet: 'ASTALDEA',
      quote: '退屈だけは、許さないわ',

      affiliation: 'リディアンスの神',
      gender: '女性',
      age: '',
      birthday: '7/20',
      bloodType: 'なし',
      height: '不明',
      weight: '不明',
      firstPerson: 'わたくし',
      residence: '神界',

      intro:
          'リディアンスに祀られる神。日に三度の鐘は、この方へ捧げるためのものである。\n' +
          '世界を書き、そして観る者。民は加護を願い、神官は祝詞を上げ、王すら跪く。\n' +
          'ただし——彼女が何を面白がっているのかを、正しく言い当てられた者はいない。',
    },
    {
      id: 'stage',
      group: 'divine',
      color: '#d8d2c4',

      name: '？？？',
      realName: '',
      alphabet: '？？？',
      quote: '',

      affiliation: 'リディアンスの異形',
      gender: '',
      age: '1231',
      birthday: '12月11日',
      bloodType: '異形',
      height: '177cm',
      weight: '68kg',
      firstPerson: '俺',
      residence: '？？？',

      intro:
          '国史には名が残るが、その姿を見た者は数えるほどしかいない。\n' +
          '騎士団が総出で剣を抜いても、近寄ることすらできないと言われる。それでも彼が誰かを害したという記録は、千二百年ぶん、一つもない。',
    },
    {
      id: 'victor',
      group: 'other',
      color: '#b5313a',

      name: '謎の青年',
      realName: '？？？',
      alphabet: '',
      quote: '異形もまた、この国の民だ',

      affiliation: '？？？',
      gender: '男性',
      age: '18',
      birthday: '11月26日',
      bloodType: 'A',
      height: '170cm',
      weight: '61kg',
      firstPerson: '俺',
      residence: '？？？',

      intro:
          '十八歳。この国の行く末に、名指しで関わることになる青年。\n' +
          '受け答えは素直で、押されればすぐ引き、嘘が下手だと会う人ごとに笑われる。剣を握った時だけ、周りが口を噤む。\n' +
          '異形もまた民である、と彼は言う。この国で、それを声に出して言う者は、ほとんどいない。',
    },

    /* ---------- 侯爵 ---------- */
    {
      id: 'seaclad',
      group: 'marquis',
      color: '#5a7a52',

      name: 'ヴェスクラリオ侯爵',
      realName: 'アグアス・ポッセ・ヴェスクラリオ',
      alphabet: 'AGUAS POSSE VESCRALIO',
      quote: '海を持つ者が、国の値を決めるのです',

      affiliation: 'リディアンス王国 侯爵家',
      gender: '男性',
      age: '55',
      birthday: '8月16日',
      bloodType: 'AB',
      height: '176cm',
      weight: '84kg',
      firstPerson: '私',
      residence: 'サフィール・ベイ・クァルテリア',

      intro:
          'リディアンス最大の港を握る南部の侯爵。海運と交易で国の胃袋と財布を同時に抑えており、その自覚がある。\n' +
          '王都の言葉遣いに合わせず、王都に合わせさせる。四大貴族の中で、最も忠誠を語らない男として知られている。\n' +
          '娘を水郷の伯爵家へ嫁がせ、南部一帯に静かに手を伸ばし続けている。',
    },
    {
      id: 'altantseg',
      group: 'marquis',
      color: '#6b5a3f',

      name: 'アルタンツェグ侯爵',
      realName: 'ナーヴェルド・ディーテ・アルタンツェグ',
      alphabet: 'NAERVELD DIATE ALTANTSEG',
      quote: 'この地は、長く異形に守られてまいりました',

      affiliation: 'リディアンス王国 侯爵家',
      gender: '男性',
      age: '60',
      birthday: '1月8日',
      bloodType: 'A',
      height: '169cm',
      weight: '72kg',
      firstPerson: '私',
      residence: 'グランヴェール山脈',

      intro:
          '雪深いグランヴェール山脈を治める老侯爵。竜が目覚めれば異形が雪を止め、村が飢えれば異形が糧を分けた——その記憶を、領民ごと今も抱えている。\n' +
          '険しい山と、硬く閉じた城塞。中央からの流行はこの土地までなかなか届かず、届いたところで領民が受け取るとも限らない。\n' +
          '王家とは代々、深い信を交わしてきた家である。',
    },
    {
      id: 'nemireuil',
      group: 'marquis',
      color: '#a85c8a',

      name: 'ネミレイユ侯爵',
      realName: 'エルセレーヌ・ネミレイユ',
      alphabet: 'ELSERENE NEMIREUIL',
      quote: '立たねば、誰も続きません',

      affiliation: 'リディアンス王国 侯爵家',
      gender: '女性',
      age: '39',
      birthday: '5月26日',
      bloodType: 'O',
      height: '161cm',
      weight: '54kg',
      firstPerson: '私',
      residence: 'クレイドル聖林域・ネミレイユ',

      intro:
          'リディアンス最大の穀倉、クレイドル聖林域を預かる女侯爵。国の食卓は、この人の判断一つで厚くも薄くもなる。\n' +
          '新しい技術を領民に許す前に、必ず自分でそれを握って前線に立つ。民に賭けさせる前に、自分が賭ける。\n' +
          '理念よりも先に、手触りで判断する人である。',
    },

    /* ---------- 太古の異形 ---------- */
    {
      id: 'glasea',
      group: 'divine',
      color: '#b8c4cc',

      name: 'ガラス',
      realName: 'グラセア',
      alphabet: 'GLASEA',
      quote: '山が呼ぶなら、行く。それだけだ',

      affiliation: 'リディアンス建国期',
      gender: '性別の概念が薄い（便宜上は彼女）',
      age: '1230',
      birthday: '2月28日',
      bloodType: '異形',
      height: '172cm',
      weight: '64kg',
      firstPerson: '私',
      residence: '神界／ヴィルエスタ／グランヴェール山脈',

      intro:
          '建国の頃からこの土地にいる、戦を司る太古の異形。' +
          'グランヴェール山脈の峰々と、そこに抱かれたアルタンツェグ侯爵領を、千二百年のあいだ守り続けてきた。\n' +
          'めったに動かず、めったに語らない。腰に手を当てて雪を見ている姿を、山の者は皆どこかで一度は見ている。',
    },

    /* ---------- 騎士団 ---------- */
    {
      id: 'alvis',
      group: 'knights',
      color: '#7f6a55',

      name: 'アルヴィス',
      realName: 'アルヴィス・バスティオルト',
      alphabet: 'ALVIS BASTIOLT',
      quote: '一番槍は譲らん。それだけが俺の仕事だ',

      affiliation: 'リディアンス騎士団 第一連隊長',
      gender: '男性',
      age: '29',
      birthday: '2月18日',
      bloodType: 'A',
      height: '185cm',
      weight: '89kg',
      firstPerson: '私',
      residence: 'グランヴェール山脈・バスティオルト伯爵家領地／騎士団本部',

      intro:
          'リディアンス一の騎士と呼ばれる男。大型魔物の討伐を専門とする第一連隊を率いる。\n' +
          '生まれは雪山の伯爵家。竜の話を子守唄の代わりに聞いて育ち、剣を持てる歳になった時には、進む道はもう決まっていた。\n' +
          '真っ先にゲートへ突っ込んでいくのは、いつもこの連隊である。',
    },
    {
      id: 'floes',
      group: 'knights',
      color: '#c98a3c',

      name: 'フロース',
      realName: 'フロース・ディゼル',
      alphabet: 'FLOES DIESEL',
      quote: '僕は強くないですよ。ただ、諦めが悪いだけです',

      affiliation: 'リディアンス騎士団 第二連隊長',
      gender: '男性',
      age: '18',
      birthday: '4月8日',
      bloodType: 'AB',
      height: '168cm',
      weight: '57kg',
      firstPerson: '僕',
      residence: 'ヴィルエスタ スラム／ヴィルエスタ ディゼル子爵家別邸／学院寮／騎士団本部',

      intro:
          '王都のスラムから拾われ、子爵家の別邸と学院を経て、十八で連隊長にまで駆け上がった男。機動力に全てを賭けた軽騎兵、第二連隊を率いる。\n' +
          '感情の上下が激しい部隊を、感情の上下が激しいまま率いている。誰よりも早く現場に着き、誰よりも騒がしく仕事を終える。\n' +
          '相手が誰であろうと、止めるべきだと思えば体ごと止めにいく。',
    },

    /* ---------- 王太子府 ---------- */
    {
      id: 'lucia',
      group: 'royal',
      color: '#c76a6a',

      name: 'ルシア',
      realName: 'ルシア・セルヴェイ',
      alphabet: 'LUCIA SERVEI',
      quote: '私がお守りするのは、王冠ではありません',

      affiliation: 'リディアンス王国 王太子府',
      gender: '女性',
      age: '25',
      birthday: '5月19日',
      bloodType: 'B',
      height: '171cm',
      weight: '59kg',
      firstPerson: '私',
      residence: 'セルヴェイ男爵領／学院寮／騎士団寮／王城従事者寮',

      intro:
          '王太子親衛隊を預かる長。男爵家に生まれ、学院と騎士団を経て、守るべき相手を一人だけ選んだ。\n' +
          '相手が宰相府であろうと、言うべきことは言う。城の廊下で最も物怖じしない人物として、下働きの者にまで名が知られている。',
    },
    {
      id: 'talve',
      group: 'royal',
      color: '#8a6a4a',

      name: 'タルヴェ',
      realName: 'タルヴェ・ヴィレンツァ',
      alphabet: 'TALVE VIRENZA',
      quote: '整えておくのが、我々の仕事です',

      affiliation: 'リディアンス王国 王太子府',
      gender: '男性',
      age: '25',
      birthday: '1月19日',
      bloodType: 'A',
      height: '181cm',
      weight: '71kg',
      firstPerson: '私',
      residence: 'ヴィレンツァ子爵領／学院寮／王城',

      intro:
          '王太子府の実務を束ねる男。書類も日程も人の配置も、主が気付かないうちに整っている状態を最良とする。\n' +
          '子爵家の次男として生まれ、家を継ぐ道より、誰かの背後を支える道を選んだ。褒められることを想定していない仕事ぶりである。',
    },
    {
      id: 'cyril',
      group: 'royal',
      color: '#5a6a8a',

      name: 'シリル',
      realName: 'シリル・コーネル',
      alphabet: 'CYRIL CORNELL',
      quote: 'お帰りをお待ちしております',

      affiliation: 'リディアンス王国 王太子府',
      gender: '男性',
      age: '19',
      birthday: '4月2日',
      bloodType: 'A',
      height: '169cm',
      weight: '56kg',
      firstPerson: '私／僕',
      residence: 'カストレア子爵領／学院寮／王城',

      intro:
          '王太子府に仕える若い従者。手ぬぐいと水桶を持って、朝の部屋の前で待っている。\n' +
          '髪を拭き、寝着を整え、下がるよう言われれば下がる。余計なことは訊かない——それを美徳と教わり、今のところ、そう信じている。',
    },

    /* ---------- シーニュワンハウス ---------- */
    {
      id: 'enomessa',
      group: 'cygnewan',
      color: '#9a4a5a',

      name: 'エノメッサ伯爵夫人',
      realName: 'カリーナ・シーニュワン（旧姓：カリーナ・ヴェスクラリオ）',
      alphabet: 'CARINA CYGNEWAN',
      quote: 'あの子たちは、家族なのです',

      affiliation: 'リディアンス伯爵夫人／シーニュワンハウス',
      gender: '女性',
      age: '32',
      birthday: '6月6日',
      bloodType: 'B',
      height: '169cm',
      weight: '54kg',
      firstPerson: 'わたくし',
      residence: 'サフィール・ベイ・クァルテリア／ラグネス水郷・シーニュワンハウス',

      intro:
          'ヴェスクラリオ侯爵家から水郷の伯爵家へ嫁いだ女性。夫の領地は代々、異形を従業員として迎え入れ、共に事業を広げてきた。\n' +
          '屋敷の使用人にも、庭を歩く異形にも、同じ口調で話す。上品な物腰と、一歩も譲らない芯とが、同じ人の中に無理なく同居している。',
    },
    {
      id: 'aiguille',
      group: 'cygnewan',
      color: '#cfa6b8',

      name: 'エギーユ',
      realName: 'エギーユ',
      alphabet: 'AIGUILLE',
      quote: '奥様がお呼びです。お通しするかどうかは、また別のお話ですが',

      affiliation: 'シーニュワンハウス',
      gender: '性別の概念が薄い（便宜上は彼女）',
      age: '',
      birthday: '6/21',
      bloodType: '異形',
      height: '',
      weight: '',
      firstPerson: '私',
      residence: 'ラグネス水郷・シーニュワンハウス',

      intro:
          'シーニュワン家に仕える異形。従業員として給金を受け取り、屋敷の礼法を身につけ、客人を庭園まで案内する。\n' +
          '茶を淹れる手つきは、この水郷の誰よりも丁寧だと評判である。',
    },
    {
      id: 'drap',
      group: 'cygnewan',
      color: '#6a4a5a',

      name: 'ドラップ',
      realName: 'ドラップ',
      alphabet: 'DRAP',
      quote: 'お客様。この庭は、思ったよりも広うございますよ',

      affiliation: 'シーニュワンハウス',
      gender: '性別の概念が薄い（便宜上は彼女）',
      age: '',
      birthday: '6/21',
      bloodType: '異形',
      height: '',
      weight: '',
      firstPerson: '私',
      residence: 'ラグネス水郷・シーニュワンハウス',

      intro:
          'シーニュワン家に仕える異形。もう一人と対になって、屋敷と水郷の守りを長く担ってきた。\n' +
          '水郷の道は入り組んでいて、案内なしに歩き通せる余所者はいない。彼女たちが微笑んで先に立つ限り、客はどこへも行けないし、どこへでも行ける。',
    },

    /* ---------- 学院 ---------- */
    {
      id: 'edenaia',
      group: 'academy',
      color: '#4a7a9a',

      name: 'エーデナイア',
      realName: 'エーデナイア・シエンシット',
      alphabet: 'EDENAIA SCIENSCIT',
      quote: '解けてしまう問いを、解かずにおくことはできない',

      affiliation: '国立学術総院',
      gender: '女性',
      age: '38',
      birthday: '2月3日',
      bloodType: 'AB',
      height: '162cm',
      weight: '51kg',
      firstPerson: '私',
      residence: 'ラグネス水郷／ヴィルエスタ礎区／国立学術総院 研究員寮',

      intro:
          '国立学術総院の研究者。天候の異変も地質の崩れも、彼女の部署が最初に警告を上げる。\n' +
          'かつて、後に宰相となる少年を教えた人でもある。教え子が国を回すようになった今も、彼女は同じ部屋で同じ机に向かっている。\n' +
          '止めるべきかどうかという問いを、彼女は最後まで自分に許さない。',
    },

    /* ---------- タイドウェブ ---------- */
    {
      id: 'muscus',
      group: 'tidoweb',
      color: '#3a6a5a',

      name: 'ムスクス',
      realName: 'ムスクス',
      alphabet: 'MUSCUS',
      quote: '海は、私たちが見守り続けております',

      affiliation: 'タイドウェブ',
      gender: '男性',
      age: '63歳？',
      birthday: '5/2',
      bloodType: '不明',
      height: '190cm',
      weight: '93kg',
      firstPerson: '私',
      residence: 'クァルテリア',

      intro:
          '港湾都市クァルテリアの情報屋・タイドウェブの主。\n' +
          '売る情報に嘘は混ぜない。ただし、どの情報を売らないかは自分で決める。そのやり方で、この街の帳簿の外側を長く握り続けてきた。',
    },
    {
      id: 'antea',
      group: 'tidoweb',
      color: '#6aa88a',

      name: 'アンテア',
      realName: 'アンテア',
      alphabet: 'ANTEA',
      quote: 'わしを子供扱いすると、高くつくぞ',

      affiliation: 'タイドウェブ',
      gender: '女性',
      age: '自称15歳',
      birthday: '5月11日',
      bloodType: '不明',
      height: '123cm',
      weight: '24kg',
      firstPerson: 'わし',
      residence: 'クァルテリア',

      intro:
          'タイドウェブの古株。見た目は七つくらいの子供に見えるが、口ぶりは老爺、申告年齢は十五歳。三つのどれも訂正する気がない。\n' +
          '街のどこに何があるかを、地図を見ずに全て言える。港の路地も、水路の底も、彼女の頭の中では繋がっている。',
    },
    {
      id: 'lico',
      group: 'tidoweb',
      color: '#a8896a',

      name: 'リコ',
      realName: 'リコ',
      alphabet: 'LICO',
      quote: 'それ、聞かなかったことにしますよ。——今なら、無料で',

      affiliation: 'タイドウェブ',
      gender: '内緒',
      age: '自称15歳',
      birthday: '8月23日',
      bloodType: '不明',
      height: '121cm',
      weight: '23kg',
      firstPerson: 'ぼく',
      residence: 'クァルテリア',

      intro:
          'タイドウェブの符牒と帳簿を握る者。愛想がよく、口が軽そうに見えて、核心の一歩手前で必ず話題を変える。\n' +
          '性別も、出自も、なぜこの街に留まり続けているのかも教えてくれない。訊けば笑って、別の面白い話を一つくれる。',
    },

    /* ---------- 葬列 ---------- */
    {
      id: 'silvatos',
      group: 'cortege',
      color: '#8a5a6a',

      name: 'シルヴァトス',
      realName: 'シルヴァトス',
      alphabet: 'SILVATOS',
      quote: '変わらぬ、世界を',

      affiliation: '？？？',
      gender: '男性',
      age: '1241',
      birthday: '6/9',
      bloodType: '不明',
      height: '191cm',
      weight: '90kg',
      firstPerson: '余',
      residence: '？？？',

      intro:
          '姿を見た者がいない。名を聞いた者もいない。\n' +
          '——彼はこの世界に、何を思い馳せているのか。'
    },
    {
      id: 'griese',
      group: 'cortege',
      color: '#4a3f52',

      name: 'グリーゼ',
      realName: 'グリーゼ・ルーデン',
      alphabet: 'GRIESE RUDEN',
      quote: '逃げなくていいんだよ。キミは鍵だから',

      affiliation: '？？？',
      gender: '男性',
      age: '725',
      birthday: '7月18日',
      bloodType: '不明',
      height: '182cm',
      weight: '67kg',
      firstPerson: '僕',
      residence: '？？？',

      intro:
          '計画を立てず、結果を読まず、面白そうな方へ手を伸ばす。殺したいのではなく、欲しい——それが彼の、ほとんど唯一の一貫性である。',
    },
    {
      id: 'albesca',
      group: 'cortege',
      color: '#4a6a5a',

      name: 'アルベスカ',
      realName: 'アルベスカ',
      alphabet: 'ALBESCA',
      quote: 'ぜーんぶ、枯れるところが綺麗なんじゃない',

      affiliation: '？？？',
      gender: '男性',
      age: '146',
      birthday: '10/23',
      bloodType: '不明',
      height: '177cm',
      weight: '63kg',
      firstPerson: '僕',
      residence: '？？？',

      intro:
          '彼らの中で、最も若く、最も足の早い者。\n' +
          '柩に花を手向ける名を負っている。その名の通りに振る舞ったことは、まだ一度もない。',
    },
    {
      id: 'latie',
      group: 'cortege',
      color: '#7a6a9a',

      name: 'ラティエ',
      realName: 'ラティエ',
      alphabet: 'LATIER',
      quote: '願いは、自分で叶えるしかないんだよ',

      affiliation: '？？？',
      gender: '女性',
      age: '709',
      birthday: '12/9',
      bloodType: '不明',
      height: '151cm',
      weight: '43kg',
      firstPerson: 'わたし',
      residence: '？？？',

      intro:
          '滅びた聖座ザヴァルダの、最後の聖女。\n' +
          '救うため。すべては救うため。',
    },
    {
      id: 'magnoris',
      group: 'cortege',
      color: '#9a7a4a',

      name: 'マグノーリス',
      realName: 'マグノーリス・アルク・クラウスト',
      alphabet: 'MAGNORIS ARC CLAUST',
      quote: 'どのような亡骸にも、収まるべき形がございます',

      affiliation: '？？？',
      gender: '女性',
      age: '1252',
      birthday: '9/1',
      bloodType: '不明',
      height: '167cm',
      weight: '56kg',
      firstPerson: '私',
      residence: '？？？',

      intro:
          '棺廟を発ち、千年以上のあいだ、世界中を歩き続けている。\n' +
          '誰の亡骸であっても、同じ手つきで引き取りに現れる。悼むためではなく、収めるために。',
    },

    {
      id: 'serah',
      group: 'other',
      color: '#c48a6a',

      name: 'セラ',
      realName: 'セラ・アルテミシア',
      alphabet: 'SERAH ARTEMISIA',
      quote: '泣きながら笑うのが、いちばん難しいのよ',

      affiliation: 'カンヴァラ芸術総監府',
      gender: '女性',
      age: '19',
      birthday: '8月12日',
      bloodType: 'AB',
      height: '169cm',
      weight: '51kg',
      firstPerson: '私',
      residence: 'カンヴァラ',

      intro:
          '芸術の国カンヴァラの総監にして、演劇領域の首座。\n' +
          '幕が上がれば大陸中の目が彼女に集まり、幕が下りれば番付の一位に彼女の名が戻る。\n' +
          '彼女が舞台に立つ夜、環道の店はすべて閉まる。客がいないからではない。全員が劇場にいるからである。',
    },
  ],
};