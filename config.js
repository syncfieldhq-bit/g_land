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

  // ★★★ NEW : 配布QR で使う URL ★★★
  DISTRIBUTION_URL: "https://syncfieldhq-bit.github.io/g_land/",
  //                ↑ ★ GitHub Pages の URL を入れる ★
  
  // バージョン情報
  APP_VERSION: "v85.3.6.7",   // ← 現在のビルド版に更新
  BUILD: "v85.3.6.7 - 隙間修正完了",  // ← 現在のビルド版に更新

  ALLOW_USER_OVERRIDE: true,

  STORAGE: {
    URL_OVERRIDE: "GWORLD_WEBAPP_URL_OVERRIDE",
    STATE:        "gworld_v52_state"
  }
};
