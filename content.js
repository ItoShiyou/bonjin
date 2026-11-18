/* ============================================================
   THE BONJIN — コンテンツ定義
   文言はすべてこのファイルに集約してある。
   2026-11-12: 尾薗本人インタビューに基づく改定 v1 を反映
   （TEXT-SWAP.md 記入済みシート準拠）。
   ============================================================ */
window.SITE = {

  meta: {
    title: "THE BONJIN — 凡人",
    vol: "VOL. 0",
    updated: "2026-11-17",
  },

  /* ヒーロー直下の数字（実データだけを大きく。
     2026-11-17: イベント終了に伴い、イベントの数字からプロジェクトの数字へ） */
  stats: [
    { value: "6", unit: "本", label: "App Store 公開中のアプリ" },
    { value: "11", unit: "点", label: "目録に載せた作品" },
    { value: "6", unit: "人", label: "メンバー" },
    { value: "2", unit: "拠点", label: "宮崎・東京" },
  ],

  /* 1語だけ入れ替わる文 */
  rotating: {
    before: "私たちは、",
    words: ["ゲーム", "アプリ"],
    after: "を作っている。",
  },

  /* マーキーの中身（実データのみ、帯は1本だけ） */
  marquee: [
    "ゲームとアプリを作る学生の開発集団",
    "App Store 公開中 6本",
    "メンバー 6人",
    "宮崎 — 東京",
    "VOL. 0",
    "THE BONJIN",
  ],

  /* メンバーについて（改定 v1 — 「母体」の語は使わない） */
  about: {
    heading: "メンバーについて",
    body: [
      "THE Bonjinは、メンバー6人で活動しています。公開しているのは尾薗圭亮、gitpullpull、伊藤しよう、生方の4人で、梶川ともう一人は COMING SOON です。メンバーの募集はしていません。",
      "尾薗は運営・企画・制作を担います。生方は技術的サポートを担います。",
    ],
    note: null,
  },

  /* メンバー（台帳形式）— 6人。公開4人＋COMING SOON 2人 */
  members: [
    {
      no: "001",
      name: "尾薗 圭亮",
      page: "members/ozono.html",
      reading: "OZONO KEITO",
      role: "運営・企画・制作",
      tags: ["宮崎大学医学部医学科"],
      bio: "電気通信大学に進んだあと、医学部を受け直して宮崎大学医学部医学科に入った。高卒認定から再受験までの記録をnoteに350本書いている。医学の勉強をしながらアプリとゲームを作り、2026年10月にiPhoneアプリを3本公開し、11月にも3本を追加して計6本になった。「覚えるより、なんでそうなるのかを考えてから覚えるほうが楽」という側の人間。宅建は2026年10月に受験、結果待ち。野球と絵は休止中、作曲はたまにしている。",
      facts: [
        ["作ったもの", "App Storeに6本公開中（ロウソク行脚／光の窓割り／Focus Wave／おもいで百貨店／ハンダン／つみあげ出前）"],
        ["経歴", "高卒認定 → 電気通信大学 → 再受験 → 宮崎大学医学部医学科"],
      ],
      links: [
        ["X", "https://x.com/itoushiyou", "@itoushiyou"],
        ["Instagram", "https://www.instagram.com/keito_ozono/", "@keito_ozono"],
        ["GitHub", "https://github.com/itoshiyou", "ItoShiyou"],
        ["note", "https://note.com/kohs2021", "三日月を待とう"],
        ["名刺ページ", "https://itoshiyou.github.io/business-card/index.html", "business-card"],
      ],
    },
    {
      no: "002",
      name: "gitpullpull",
      page: "members/gitpullpull.html",
      reading: "GITPULLPULL",
      role: "運営",
      tags: ["ML Engineer", "人工知能学会'26 全国大会優秀賞"],
      bio: "小型言語モデルが考えすぎる問題（overthinking）を抑える研究「D-CoT」で、2026年度 人工知能学会全国大会 優秀賞を単著で受賞。セキュリティキャンプ2024修了、CODE BLUE 2025 学生スタッフ。THE Bonjinでは運営を担当する。このサイトの編集と実装も担当。",
      facts: [
        ["研究", "D-CoT: Disciplined Chain-of-Thought（小型LLMの推論効率化）"],
        ["受賞", "人工知能学会 全国大会優秀賞（2026・単著）"],
        ["連絡先", "gitpullpull@gmail.com"],
      ],
      links: [
        ["受賞（学会公式）", "https://www.ai-gakkai.or.jp/about/award/jsai_award-conf/", "人工知能学会 受賞者ページ"],
        ["X", "https://x.com/gitpullpull", "@gitpullpull"],
        ["GitHub", "https://github.com/gitpullpull", "gitpullpull"],
        ["論文", "https://arxiv.org/abs/2602.21786", "arXiv:2602.21786"],
        ["リンク集", "https://page.gitpullpull.me", "page.gitpullpull.me"],
      ],
    },
    {
      no: "003",
      name: "梶川",
      reading: "KAJIKAWA",
      role: "COMING SOON",
      tags: [],
      bio: null,
      facts: [],
      links: [],
    },
    {
      no: "004",
      name: "伊藤しよう",
      reading: "ITO SHIYOU",
      role: "ウェブで公開されているゲームの公開を担当",
      tags: [],
      /* 暫定文（v2で最終確定）: 謎のある短文にし、他のメンバーとの関係には触れない */
      bio: "ウェブの片隅でゲームを公開している。それ以外のことは、あまり分かっていない。",
      facts: [
        ["作ったもの", "ブラウザゲーム（plicyで公開中）"],
      ],
      links: [
        ["GitHub", "https://github.com/itoshiyou", "itoshiyou"],
        ["X", "https://x.com/itoushiyou", "@itoushiyou"],
        ["plicy", "https://plicy.net/User/76215", "伊藤しよう"],
        ["YouTube", "https://www.youtube.com/@itoshiyou", "@itoshiyou"],
      ],
    },
    {
      no: "005",
      name: "生方",
      reading: "UBUKATA",
      role: "技術的サポート",
      tags: [],
      bio: null, // 詳細は本人の回答で v2 確定
      facts: [],
      links: [],
    },
    {
      no: "006",
      name: "COMING SOON",
      reading: "",
      role: "",
      tags: [],
      bio: null, // 名前・詳細は非公開
      facts: [],
      links: [],
    },
  ],

  /* 目録（hook は改定 v1 で現状維持が確定） */
  products: [
    { status: "公開中", title: "ロウソク行脚", hook: "歩くたびに短くなるロウソクで、夜の洋館に灯りをともす。", meta: "パズル / 全6章150ステージ / App Store", url: "https://apps.apple.com/jp/app/id6822286730" },
    { status: "公開中", title: "光の窓割り", hook: "数字を手がかりにマスを区切り、ステンドグラスに光を取り戻す。", meta: "パズル / 全66面 / App Store", url: "https://apps.apple.com/jp/app/id6824348602" },
    { status: "公開中", title: "Focus Wave", hook: "雨、焚き火、カフェ、波の音を指で置く。自分の音の空間。", meta: "環境音 / iPhone / App Store", url: "https://apps.apple.com/jp/app/id6824796019" },
    { status: "公開中", title: "おもいで百貨店", hook: "昭和のデパート屋上をドット絵でよみがえらせる、のんびり放置ゲーム。", meta: "放置ゲーム / App Store", url: "https://apps.apple.com/jp/app/id6829372905" },
    { status: "公開中", title: "ハンダン", hook: "日常の判断の考え方を、短いカードと場面クイズで学ぶ。", meta: "学習 / App Store", url: "https://apps.apple.com/jp/app/id6831944228" },
    { status: "公開中", title: "つみあげ出前", hook: "料理を頭の上に積み上げて届ける。拾う順番がすべて。", meta: "パズル / 全8店 / App Store", url: "https://apps.apple.com/jp/app/id6829997215" },
    { status: "BETA", title: "肉眼解剖学本試験 (beta)", hook: "医学生最大の難所、解剖学の本試験対策。", meta: "学習 / plicy", url: "https://plicy.net/User/76215" },
    { status: "制作中", title: "The Taling.", hook: "日々の積み重ねをAIがビジュアル小説化する。解放は1日5分だけ。", meta: "ライフログ", url: null },
    { status: "制作中", title: "投資学習・ひだまりルーム", hook: "AIコンパニオンと一緒に株価を学ぶ。", meta: "みやざきビジネスコンテスト2026出展プラン", url: null },
    { status: "制作中", title: "LINEスタンプ生成パイプライン", hook: "市場分析から画像生成、リサイズまで5分で自動完結させる。", meta: "Ollama × Draw Things × FastAPI", url: null },
    { status: "制作中", title: "骨学試験対策システム", hook: "骨の名前は、試験の前に覚える。", meta: "学習", url: null },
  ],

  footer: {
    org: "THE BONJIN",
    credits: [
      ["発行", "THE BONJIN"],
      ["編集・実装", "gitpullpull"],
      ["メンバー", "尾薗圭亮 ／ gitpullpull ／ 梶川 ／ 伊藤しよう ／ 生方 ／ ほか"],
    ],
    links: [
      ["旧サイト", "https://itoshiyou.github.io/thebonjin/"],
      ["GitHub (itoshiyou/thebonjin)", "https://github.com/itoshiyou/thebonjin"],
    ],
    colophon: "DESIGN: awesome-design-md / Zapier を土台に改変。書体: Archivo, Hiragino Sans, IBM Plex Mono。写真は使っていません。",
  },
};
