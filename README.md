# うしくんのWeb名刺

SNS・プロフィール・株式会社インベーダーズの事業紹介をまとめた静的サイトです。

- 公開URL: https://ushikundesuyo.github.io/my-social-links/
- 公開元: GitHub Pages / `main` ブランチのルート
- HTML: `index.html`、スタイル: `styles.css`、機能: `script.js`
- ビルド不要。ページ本体・FAQはJavaScriptなしで利用できます。

## プレビュー

```sh
python -m http.server 8769 --bind 127.0.0.1
```

http://127.0.0.1:8769/ を開きます。

## 2026-09-17 更新内容

- 古いX画像URLへの依存をなくし、プロフィール写真と実績画像を同梱。
- 使用写真は本人指定の公式プロフィール写真。元画像を加工せず保存。
- 外部CSS/アニメーション/フォントCDNへの依存と本文の初期非表示を解消。
- SNSリンク、スマホ表示、キーボード操作、フォーカス表示を改善。
- Facebookの誤ったMessenger表記と、利用できなくなったInstagram URLを修正。
- 未接続のGeminiチャットを、外部送信のないFAQに置換。
- 現行会社名・事業・実績を公式サイトと照合。
- タイトル・説明・共有用メタ情報、ファビコン、リンクコピーを追加。
- 画像失敗時の代替表示、動きを減らす設定に対応。

## 情報・画像の出典

公開済み公式サイト https://invaders.co.jp/ を2026-09-17に確認。

| 保存先              | 元の公式サイト内パス                             |
| ------------------- | ------------------------------------------------ |
| assets/ushikun.jpg  | /assets/images/hoshino-formal-20260818.jpg       |
| assets/kagekin.jpg  | /assets/images/kagekin-official-20260829.jpg     |
| assets/ricochi.png  | /assets/images/ricochi.png                       |
| assets/metameta.jpg | /assets/images/works-metameta-2024-keyvisual.jpg |
| assets/metacomi.jpg | /assets/images/works-metacomi-2026-thumb.jpg     |

事業は `/services/`、会社情報は `/company/`、実績は `/works/metameta.html` と `/news/metacomi2026-closing.html` に基づきます。Instagramは公式トップの掲載先とプロフィール画面を照合。X・Facebook・LINEは従来のリンク先を保持しています。

## 検証

- 320 / 390 / 768 / 1280px幅で横スクロールなし。
- 本文中6画像の読み込み成功。画像失敗時の代替画像表示を確認。
- JavaScript読み込みなしでも本文表示とFAQ開閉が可能。
- FAQ開閉・コピー完了表示・外部リンクの新規タブ保護を確認。
- 外部リンクのHTTP応答、内部アンカー、ローカル参照ファイルを確認。
- SNSのログイン後操作や、LINEアプリでの友だち追加は実施していません。

公開する場合は変更をレビューしたうえで `main` へ反映します。元の版はGit履歴に保存されています。
