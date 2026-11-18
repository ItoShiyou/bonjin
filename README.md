# THE BONJIN — site v1 (VOL.0)

静的サイト。ビルド不要で、そのまま Vercel 無料枠に置ける構成（GitHub Pages でも動く）。

## v3（2026-11-12 追加）
- **背景＝九十度**: `art/02-kyujudo/index.html?bg=1` を全画面固定の背景にし、ページのスクロール（postMessage の `bonjin-scroll`）で墨が回る。ページ全体で2往復（凡人→途中→凡人→途中→凡人）。本文は半透明の紙（.veil）の上に載る。WebGL2なし／reduced-motion では背景がインク動画 v2 に差し替わる。
- **九十度のドラッグ確定**: 単体表示では、強くドラッグして離すとバネで戻らず、投げた方向へ次の読みまで回り切る（90°、または長い側を通る270°）。閾値は |hand.yaw| ≥ 0.45。
- **ロゴ**: 右下の隅に動画ロゴ（assets/logo-anim.mp4、読み込み時に一度だけ描画、multiply 合成）。静止画は assets/logo.jpg。
- **表紙でも触れる**: 背景モードでもドラッグ（回す）とタップ（打つ）は有効。カバーは pointer-events を透過させ、作品側は touch-action: pan-y（縦スクロールはブラウザに渡す）。強く投げると次の読みまで回り切って少し留まり、やがてスクロールの角度へ戻る（excursion）。ヒント表記は「まわす ／ 打つ ／ スクロール」。
- **apps.html**: 尾薗圭亮の App Store アプリ全6本（アイコン・スクリーンショットは assets/apps/ に自前収録、出典は iTunes Lookup API）。台帳（目録）の文法でゼロベース再構築済み（2026-11-12）: №＋極小メタ＋巨大な名前（=ストアへのリンク）、スクリーンショットは直角のコンタクトシート、ボタンなし。
- **members/ozono.html / members/gitpullpull.html**: メンバー紹介ページ。名簿の詳細からリンクされる。台帳の1行をページに拡大した形（巨大な名前、罫線のリンク行、尾薗の作品はテキスト目録）。
- **ドグマ監査（2026-11-12）**: DOGMA.md／STEAL-LIST.md で再点検。本文フォントの Inter を廃し Zen Kaku Gothic New に（DOGMA §1-7）。apps.html の App Store ボタン×6 をゴースト化し、橙の主アクションは申込ボタン1つに限定（オレンジ配給制）。活動ログに打ち消し線の編集痕跡を実装（~~旧文~~ → <s>、計~~3本~~6本)。禁止語・href="#" はゼロ件を確認。

## ファイル
- `index.html` — 骨格
- `style.css` — Zapier DESIGN.md のトークン（canvas #FFFEFB / ink #201515 / primary #FF4F00 / 角丸12px）を土台に、../research/STEAL-LIST.md の文法で組んだもの
- `content.js` — **文言は全部ここ**。尾薗の原稿が来たら、このファイルの文字列を差し替えるだけでよい
- `main.js` — 描画と仕掛け（カウントダウン、名簿の開閉、伊藤しょうの長押し、⌘Kパレット、differenceカーソル、GSAPの見出し出現）
- `vercel.json` — Vercel用設定

## デプロイ（Vercel）
1. このフォルダをリポジトリに push（例: itoshiyou/thebonjin の新ブランチ、または新規リポジトリ）
2. Vercel で Import → Framework Preset は「Other」→ Root Directory にこのフォルダを指定
3. Build Command / Output Directory は空（静的配信）

## 仕掛け一覧（出典は ../research/STEAL-LIST.md）
- 状態帯＋開催カウントダウン（MOT式、実データ）
- 巨大タイポ「凡人」＋1語入れ替わる文（Warren & Mahoney式）
- 数字の帯：11.17 / 120 MIN / 4–5 / ¥0（HackMIT式、実データのみ）
- マーキー1本（中身は実データのみ）
- 名簿＝台帳（garden / SHIFTBRAIN / CSS Day式）。行クリックで詳細
- 伊藤しょう：長押し1.2秒で裏プロフィール（Resn式）
- タイムテーブル：制作120分の行だけオレンジのベタ面（Dekmantel式）
- 目録：状態チップ＋1行フックの在庫表（上海アリス式）
- マニフェストだけ ink の反転面（幕間）
- 活動ログ（darkroom.engineering式、[REDACTED]入り）
- 奥付フッター（MoMA『アイデア』式）
- ⌘K パレット（paco.me / cmdk式、自作）
- difference 反転カーソル（PCのみ）

## 未確定
- 運営母体の文章は仮文（content.js の about、[仮]→「仮文」タグ表示）。尾薗の原稿待ち
- 「伊藤しょう／しよう」表記は未統一（モックはLINE表記「しょう」）
