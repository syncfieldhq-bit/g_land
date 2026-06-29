/**
 * ============================================================
 * G-WORLD v85.0.0 - Frontend Configuration
 * ============================================================
 * v72.2.1 UI × v80 通信エンジン × GitHub Pages 配信
 *
 * セットアップ手順:
 *   1. GASプロジェクトに main.gs / api.gs / db.gs / endpoint.gs を配置
 *   2. ウェブアプリとしてデプロイ → URL (/exec) を取得
 *   3. 下の GAS_WEB_APP_URL に貼り付け
 *   4. GitHub Pages にプッシュ
 * ============================================================
 */

window.GWORLD_CONFIG = {
  // ⚠️ デプロイ後に実際のURLに置き換えてください
  GAS_WEB_APP_URL: "https://script.google.com/macros/s/AKfycbyo7jv8z9ny8ic8KvQlxFiG90ApfWmz3vQrJkLZHFTM3YYHJIJ9paxfVWvy4Jh81RxmaQ/exec",

  // ★★★ NEW : 配布QR で使う URL（QR で読み取らせる先）★★★
  DISTRIBUTION_URL: "https://syncfieldhq-bit.github.io/g_land/",

  // バージョン情報
  APP_VERSION: "v85.3.6.7",
  BUILD: "v85.3.6.7 - 隙間修正完了",

  // 端末側でURLを上書き可能 (設定画面から)
  ALLOW_USER_OVERRIDE: true,

  // ローカルストレージのキー
  STORAGE: {
    URL_OVERRIDE: "GWORLD_WEBAPP_URL_OVERRIDE",
    STATE:        "gworld_v52_state"  // v72.2.1互換
  }
};

