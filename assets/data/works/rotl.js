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

    text: `王暦1231年、夏。

リディアンス王国は、人間と異形が共に在ることで千年を保ってきた。
異形は人間を殺せない。神が定めたその規則が、両者の距離を成り立たせていた。

王ヴァンセールが圧政の時代を終わらせ、神が降りて加護を授け、
若き宰相ラズワルド・ゼファーニアの魔道具が国を躍進させた。
リディアンスは強くなった、と誰もが思っていた。

七月、王都ヴィルエスタ。戦勝を祝う祝祭の準備が進んでいる。
屋台が並び、鐘が鳴り、人々は明日も同じ朝が来ることを疑っていない。

あなたは、その熱の中に立っている。

——これは、変わらない世界に抗おうとした者たちの話である。
そして、それを外側から眺めているあなたの話でもある。`,
  },

  /* ============ WORLDブロック ============ */
  world: {
    visuals: ['world_01', 'world_02'],
    text: `七つの大陸を持つ世界、アトラス・ティアナ。
その一つ、リディアンス王国は、人間と異形が共に在ることで千年を保ってきた国である。

異形は人間を殺せない。神が定めた規則が、人と異形の距離を成り立たせていた。
田畑を守るのも、魔物を退けるのも、雪を止めるのも、長らく彼らの役目だった。

隣国アペクサリアとの戦に備え、人すら資源として扱った圧政の時代がある。
それを王ヴァンセールが終わらせ、神が降りて加護を授け、
宰相ラズワルドの魔道具が、剣を握れぬ者にも戦う手段を与えた。

いま、この国は最も豊かで、最も強い。
——支柱が一本でも折れた時に何が起きるかを、まだ誰も考えたことがない。`,

    characters: ['victor', 'razwald', 'stage', 'griese'],
  },

  /* ============ 陣営（CHARACTERブロックのタブ） ============ */
  characterGroups: [
    { id: 'royal', label: '王家・王太子府' },
    { id: 'zephania', label: '宰相府・ゼファーニア' },
    { id: 'knights', label: 'リディアンス騎士団' },
    { id: 'divine', label: '神と異形' },
    { id: 'cortege', label: '葬列' },
    { id: 'marquis', label: '侯爵家' },
    { id: 'founding', label: '建国期' },
    { id: 'cygnewan', label: 'シーニュワンハウス' },
    { id: 'academy', label: '国立学術総院' },
    { id: 'tidoweb', label: 'タイドウェブ' },
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
      alphabet: 'VANCEIL',
      quote: 'リディアンスは、まだ強くなれる',

      affiliation: 'リディアンス王国 国王',
      gender: '男性',
      age: '41',
      birthday: '3月18日',
      bloodType: 'O型',
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
      alphabet: 'RAZWALD',
      quote: '必要な死などない',

      affiliation: 'リディアンス王国 宰相／ゼファーニア公爵家',
      gender: '男性',
      age: '21',
      birthday: '1月17日',
      bloodType: 'AB型',
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
      id: 'victor',
      group: 'royal',
      color: '#b5313a',

      name: '謎の青年',
      realName: '？？？',
      alphabet: '',
      quote: '異形もまた、この国の民だ',

      affiliation: '？？？',
      gender: '男性',
      age: '18',
      birthday: '11月26日',
      bloodType: 'A型',
      height: '170cm',
      weight: '61kg',
      firstPerson: '俺（公の場では「私」）',
      residence: '？？？',

      intro:
          '名も、出自も明かさない青年。\n' +
          '受け答えは素直で、押されればすぐ引き、嘘が下手だと会う人ごとに笑われる。それでいて、剣を握った時だけ、別の何かがそこに立っているように見えるという。\n' +
          '異形もまた民である、と彼は言う。この国で、それを声に出して言う者は、もうほとんどいない。',
    },
    {
      id: 'stage',
      group: 'divine',
      color: '#d8d2c4',

      name: '？？？',
      realName: '',
      alphabet: '？？？',
      quote: '俺たちは、人を殺せない。だから、人は、俺たちを恐れなくていい',

      affiliation: '原初の異形',
      gender: '',
      age: '約1200年',
      birthday: '12月11日',
      bloodType: '異形',
      height: '177cm',
      weight: '68kg（擬態時）',
      firstPerson: '俺',
      residence: '？？？',

      intro:
          '異形の頂点に、ただ一体だけで立つ存在。国史には名が残るが、その姿を見た者は数えるほどしかいない。\n' +
          '騎士団が総出で剣を抜いても、近寄ることすらできないと言われる。それでも彼が誰かを害したという記録は、千二百年ぶん、一つもない。\n' +
          '大切なことは、いつも言わない。',
    },
    {
      id: 'astaldia',
      group: 'divine',
      color: '#d4b25c',

      name: 'アスタルディア',
      realName: '',
      alphabet: 'ASTALDIA',
      quote: '戦って、ね',

      affiliation: 'リディアンスの神',
      gender: '女性',
      age: '',
      birthday: '',
      bloodType: 'なし',
      height: '不明（人間の3〜5倍程度か？）',
      weight: '不明',
      firstPerson: 'わたくし',
      residence: '神界',

      intro:
          'リディアンスに祀られる神。日に三度の鐘は、この方へ捧げるためのものである。\n' +
          '世界を書き、そして観る者。民は加護を願い、神官は祝詞を上げ、王すら跪く。\n' +
          'ただし——彼女が何を面白がっているのかを、正しく言い当てられた者はいない。',
    },

    /* ---------- 侯爵 ---------- */
    {
      id: 'seaclad',
      group: 'marquis',
      color: '#5a7a52',

      name: 'シークラード侯爵',
      realName: 'アグアス・ポッセ・シークラード',
      alphabet: 'AGUAS POSSE SEACLAD',
      quote: '海を持つ者が、国の値を決めるのです',

      affiliation: 'リディアンス王国 侯爵家',
      gender: '男性',
      age: '55',
      birthday: '8月16日',
      bloodType: 'AB型',
      height: '176cm',
      weight: '84kg',
      firstPerson: '私',
      residence: 'サフィール・ベイ・シークラード',

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
      bloodType: 'A型',
      height: '169cm',
      weight: '72kg',
      firstPerson: '私',
      residence: 'グランヴェール山脈・バリウスディーテ',

      intro:
          '雪深いグランヴェール山脈を治める老侯爵。竜が目覚めれば異形が雪を止め、村が飢えれば異形が糧を分けた——その記憶を、領民ごと今も抱えている。\n' +
          '険しい山と、硬く閉じた城塞。中央からの流行はこの土地までなかなか届かず、届いたところで領民が受け取るとも限らない。\n' +
          '王家とは代々、深い信を交わしてきた家である。',
    },
    {
      id: 'fostrey',
      group: 'marquis',
      color: '#a85c8a',

      name: 'フォストレイ侯爵',
      realName: 'エルセレーヌ・フォストレイ',
      alphabet: 'ELSERENE FOSTREY',
      quote: '立たねば、誰も続きません',

      affiliation: 'リディアンス王国 侯爵家',
      gender: '女性',
      age: '39',
      birthday: '5月26日',
      bloodType: 'O型',
      height: '161cm',
      weight: '50kg',
      firstPerson: '私',
      residence: 'クレイドル聖林域・フォストレア',

      intro:
          'リディアンス最大の穀倉、クレイドル聖林域を預かる女侯爵。国の食卓は、この人の判断一つで厚くも薄くもなる。\n' +
          '新しい技術を領民に許す前に、必ず自分でそれを握って前線に立つ。民に賭けさせる前に、自分が賭ける。\n' +
          '理念よりも先に、手触りで判断する人である。',
    },

    /* ---------- 太古の異形 ---------- */
    /*
    {
      id: 'epitasion',
      group: 'founding',
      color: '#9c8a6a',

      name: 'エピタシオン',
      realName: 'エピタシオン',
      alphabet: 'EPITASION',
      quote: '我が記さねば、なかったことになる',

      affiliation: 'リディアンス建国期',
      gender: '性別の概念が薄い（便宜上は彼）',
      age: '1230',
      birthday: '11月11日',
      bloodType: '異形',
      height: '175cm',
      weight: '66kg（擬態時）',
      firstPerson: '我',
      residence: '神界／ヴィルエスタ／ゼファーニア公爵家本邸',

      intro:
          '建国期からゼファーニア家と共に在る、記録を司る太古の異形。書庫と石碑を守り、この国が何を約束して始まったかを、千二百年ぶん保管し続けている。\n' +
          '人が忘れたことも、人が忘れたがっていることも、等しく残す。それが役目であって、慰めではない。',
    },
    */
    {
      id: 'glasea',
      group: 'founding',
      color: '#b8c4cc',

      name: 'ガラス',
      realName: 'グラセア',
      alphabet: 'GLASEA',
      quote: 'ガラスでいい。それ以外で呼んだら斬るぞ',

      affiliation: 'リディアンス建国期',
      gender: '性別の概念が薄い（便宜上は彼女）',
      age: '1230',
      birthday: '2月28日',
      bloodType: '異形',
      height: '172cm',
      weight: '64kg（擬態時）',
      firstPerson: '私',
      residence: '神界／ヴィルエスタ／グランヴェール山脈・バリウスディーテ',

      intro:
          '戦を司る太古の異形。アルタンツェグ家と共に、竜の眠る山を千二百年守り続けてきた。\n' +
          '本名で呼ばれると照れ隠しに凄み、同族に挑発されればすぐ声が大きくなる。侯爵に足を踏まれて悲鳴を上げる姿を、山の者は全員が見たことがある。\n' +
          '竜災の気配を最初に嗅ぎつけるのも、いつも彼女である。',
    },
    /*
    {
      id: 'chemin',
      group: 'founding',
      color: '#7a9e6e',

      name: 'シェマン',
      realName: 'シェマン',
      alphabet: 'CHEMIN',
      quote: 'わたしが沈んだら、みんな沈むの。だから、沈まないよ',

      affiliation: 'リディアンス建国期',
      gender: '性別の概念が薄い（便宜上は彼女）',
      age: '1230',
      birthday: '7月20日',
      bloodType: '異形',
      height: '',
      weight: '擬態する姿に依る',
      firstPerson: 'わたし',
      residence: '神界／ヴィルエスタ／エストネフェロ大平原',

      intro:
          '基盤を司る太古の異形。大平原の道と橋と水路、人が当たり前だと思っているものの下側を、千二百年支えている。\n' +
          '誰にも気付かれない仕事を、誰にも気付かれないまま続けることを苦にしない。名を知る者より、名を知らずに恩恵を受けている者のほうが、ずっと多い。',
    },
    */
    /*
    {
      id: 'bione',
      group: 'founding',
      color: '#c47a6e',

      name: 'ビオネ',
      realName: 'ビオネ',
      alphabet: 'BIONE',
      quote: '生きているものはね、放っておくと、勝手に増えるのよ',

      affiliation: 'リディアンス建国期',
      gender: '性別の概念が薄い（便宜上は彼女）',
      age: '1230',
      birthday: '5月1日',
      bloodType: '異形',
      height: '',
      weight: '擬態する姿に依る',
      firstPerson: 'わたくし',
      residence: '神界／ヴィルエスタ／クレイドル聖林域',

      intro:
          '生命を司る太古の異形。フォストレイ家の聖林域に在って、実りと繁殖と病の巡りを見ている。\n' +
          '増えるものは増え、減るものは減る。それを千二百年見てきた者の、静かな諦めと、静かな期待がある。\n' +
          '気ままな人で、聖林域を訪ねても会えるとは限らない。',
    },
    */

    /* ---------- 騎士団 ---------- */
    {
      id: 'alvis',
      group: 'knights',
      color: '#7f6a55',

      name: 'アルヴィス',
      realName: '',
      alphabet: 'ALVIS',
      quote: '私が斬れぬものを、部下に斬らせるわけにはまいりません',

      affiliation: 'リディアンス騎士団 第一連隊長',
      gender: '',
      age: '29',
      birthday: '2月18日',
      bloodType: 'A型',
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
      realName: '',
      alphabet: 'FLOES',
      quote: 'いや、僕、学院時代センパイだったんで',

      affiliation: 'リディアンス騎士団 第二連隊長',
      gender: '',
      age: '18',
      birthday: '4月8日',
      bloodType: 'AB型',
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
      alphabet: '',
      quote: '私がお守りするのは、王冠ではありません',

      affiliation: 'リディアンス王国 王太子府',
      gender: '女性',
      age: '25',
      birthday: '5月19日',
      bloodType: 'B型',
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
      alphabet: '',
      quote: '整えておくのが、我々の仕事です',

      affiliation: 'リディアンス王国 王太子府',
      gender: '男性',
      age: '25',
      birthday: '1月19日',
      bloodType: 'A型',
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
      alphabet: '',
      quote: 'お支度が整いましてございます',

      affiliation: 'リディアンス王国 王太子府',
      gender: '男性',
      age: '19',
      birthday: '4月2日',
      bloodType: 'A型',
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
      realName: 'カリーナ・シーニュワン（旧姓：カリーナ・シークラード）',
      alphabet: 'CARINA CYGNEWAN',
      quote: 'あの子たちは、家族なのです',

      affiliation: 'リディアンス伯爵夫人／シーニュワンハウス',
      gender: '女性',
      age: '32',
      birthday: '6月6日',
      bloodType: 'B型',
      height: '169cm',
      weight: '54kg',
      firstPerson: 'わたくし',
      residence: 'サフィール・ベイ・シークラード／ラグネス水郷・シーニュワンハウス',

      intro:
          'シークラード侯爵家から水郷の伯爵家へ嫁いだ女性。夫の領地は代々、異形を従業員として迎え入れ、共に事業を広げてきた。\n' +
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
      birthday: '',
      bloodType: '異形',
      height: '',
      weight: '擬態する姿に依る',
      firstPerson: 'わたくし',
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
      birthday: '',
      bloodType: '異形',
      height: '',
      weight: '擬態する姿に依る',
      firstPerson: 'わたくし',
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
      bloodType: 'AB型',
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
      quote: '値は付けますとも。人の命にも、国の命にも',

      affiliation: 'タイドウェブ',
      gender: '男性',
      age: '1125歳（見た目63歳）',
      birthday: '',
      bloodType: '不明（と申告。実際は異形）',
      height: '190cm',
      weight: '93kg',
      firstPerson: '私',
      residence: 'シークラード',

      intro:
          '港湾都市シークラードの情報屋・タイドウェブの主。届け出を出し、税を納め、看板を掲げて堂々と商いをしている。\n' +
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
      age: '自称15歳（見た目7歳・実年齢1113歳）',
      birthday: '5月11日',
      bloodType: '不明（と申告。実際は異形）',
      height: '123cm',
      weight: '24kg',
      firstPerson: 'わし',
      residence: 'シークラード',

      intro:
          'タイドウェブの古株。見た目は七つの子供、口ぶりは老爺、申告年齢は十五歳。三つのどれも訂正する気がない。\n' +
          '街のどこに何があるかを、地図を見ずに全て言える。港の路地も、水路の底も、彼女の頭の中では繋がっている。',
    },
    {
      id: 'lico',
      group: 'tidoweb',
      color: '#a8896a',

      name: 'リコ',
      realName: 'リコ',
      alphabet: 'LICO',
      quote: 'それ、聞かなかったことにしてあげる。——今なら、無料で',

      affiliation: 'タイドウェブ',
      gender: '内緒',
      age: '自称15歳（見た目7歳・実年齢1113歳）',
      birthday: '8月23日',
      bloodType: '不明（と申告。実際は異形）',
      height: '121cm',
      weight: '23kg',
      firstPerson: 'ぼく',
      residence: 'シークラード',

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
      alphabet: '',
      quote: '賭けようか。汝が勝てば、余は喪服を脱ごう',

      affiliation: '葬列／アペクサリア',
      gender: '男性',
      age: '1241',
      birthday: '',
      bloodType: '不明',
      height: '191cm',
      weight: '90kg',
      firstPerson: '余',
      residence: 'ハイデ王宮／神界／アペクサリア',

      intro:
          '「葬列」と呼ばれるものの、頂に座る者。\n' +
          '遠い大陸、滅び尽くしたはずの土地の只中に、今も国の形をしたものが残っている。彼がそこにいるからだと言われている。\n' +
          '——リディアンスの民は、その名を知らない。',
    },
    {
      id: 'griese',
      group: 'cortege',
      color: '#4a3f52', // 黒泥

      name: 'グリーゼ',
      realName: 'グリーゼ・ルーデン',
      alphabet: 'GRIESE RUDEN',
      quote: '逃げなくていいんだよ。キミは鍵だから',

      affiliation: '葬列',
      gender: '',
      age: '725',
      birthday: '7月18日',
      bloodType: '不明',
      height: '182cm',
      weight: '67kg',
      firstPerson: '僕',
      residence: 'ハイデ王宮／アペクサリア',

      intro:
          '「葬列」の一員。滅ぼした国の名は、滅ぼした時に捨てたという。\n' +
          '計画を立てず、結果を読まず、面白そうな方へ手を伸ばす。殺したいのではなく、欲しい——それが彼の、ほとんど唯一の一貫性である。\n' +
          '——リディアンスの民は、その名を知らない。',
    },
    {
      id: 'albesca',
      group: 'cortege',
      color: '#4a6a5a',

      name: 'アルベスカ',
      realName: 'アルベスカ',
      alphabet: 'ALBESCA',
      quote: '枯れるところまで見届けてこそ、花でしょう',

      affiliation: '葬列／モルティフィア、ツァイハイ',
      gender: '男性',
      age: '146',
      birthday: '',
      bloodType: '不明',
      height: '177cm',
      weight: '63kg',
      firstPerson: '僕',
      residence: '神界／モルティフィア／アペクサリア',

      intro:
          '「葬列」の中で最も若く、最も足の早い者。\n' +
          '柩に花を手向ける名を負っている。その名の通りに振る舞ったことは、まだ一度もない。\n' +
          '——リディアンスの民は、その名を知らない。',
    },
    {
      id: 'latie',
      group: 'cortege',
      color: '#7a6a9a',

      name: 'ラティエ',
      realName: 'ラティエ',
      alphabet: '',
      quote: '痛いのは最初だけ。……嘘だけど',

      affiliation: '葬列／ザヴァルダ、イリダノス',
      gender: '女性',
      age: '709',
      birthday: '',
      bloodType: '不明',
      height: '151cm',
      weight: '43kg',
      firstPerson: 'わたし',
      residence: '聖座ザヴァルダ／アペクサリア帝国',

      intro:
          '聖座ザヴァルダに席を持つ「葬列」の一員。\n' +
          '優しい声で、優しくないことを言う。彼女の言葉は、聞いた時と、思い出した時とで、意味が違う。\n' +
          '——リディアンスの民は、その名を知らない。',
    },
    {
      id: 'magnoris',
      group: 'cortege',
      color: '#9a7a4a',

      name: 'マグノーリス',
      realName: 'マグノーリス・アルク・クラウスト',
      alphabet: 'MAGNORIS ARC CLAUST',
      quote: 'どのような亡骸にも、収まるべき形がございます',

      affiliation: '葬列／フェニュライネ、アペクサリア',
      gender: '女性',
      age: '1252',
      birthday: '',
      bloodType: '不明',
      height: '167cm',
      weight: '56kg',
      firstPerson: '私',
      residence: 'フェニュライネ棺廟・神殿／納棺の使命の旅（世界中）／アペクサリア帝国',

      intro:
          '「葬列」の最古の一人。棺廟を発ち、千年以上のあいだ、世界中を歩き続けている。\n' +
          '誰の亡骸であっても、同じ手つきで引き取りに現れる。悼むためではなく、収めるために。\n' +
          '——リディアンスの民は、その名を知らない。',
    },
    {
      id: 'serah',
      group: 'cortege',
      color: '#c48a6a',

      name: 'セラ',
      realName: 'セラ・アルテミシア',
      alphabet: 'SERAH ARTEMISIA',
      quote: '泣きながら笑うのが、いちばん難しいのよ',

      affiliation: '芸術総監府／カンヴァラ',
      gender: '女性',
      age: '19',
      birthday: '8月12日',
      bloodType: 'AB型',
      height: '169cm',
      weight: '53kg',
      firstPerson: '私',
      residence: 'カンヴァラ',

      intro:
          '芸術の国カンヴァラの総監にして、演劇領域の首座。誰も統治していない国で、番付一位というだけの理由で中心に座らされた女。\n' +
          '十一の領域すべてが「なぜ演劇の女が」と言い、それでも誰一人、彼女を引きずり降ろせない。\n' +
          '舞台の上で、彼女が本当に泣いたことがあるのかどうかは、誰も知らない。',
    },
  ],
};