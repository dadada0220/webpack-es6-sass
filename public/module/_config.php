<?php

// サイト名
$SITE_NAME = 'title';

// ページ名
$PAGE_NAME = !isset($page_name) || $page_name == ''
  ? $SITE_NAME
  : $page_name . ' | ' . $SITE_NAME;

// ディスクリプション（サイト全体）
$SITE_DESCRIPTION = 'description';

// ディスクリプション（各ページ）
$PAGE_DESCRIPTION = !isset($page_description) || $page_description == ''
  ? $SITE_DESCRIPTION
  : $page_description;

// rootディレクトリ
// ・ドメイン直下の場合 → ''; （空にする）
// ・ドメイン直下からフォルダを挟む場合 → '/xxx'; （/ + フォルダ名）
$ROOT_DIR = '';

// 本番URL
$PUBLIC_URL = (empty($_SERVER['HTTPS']) ? 'http://' : 'https://') . $_SERVER['HTTP_HOST'] . $ROOT_DIR;

// パス
$ASSETS = $ROOT_DIR . '/assets/';
$ASSETS_IMG = $ASSETS . 'img/';
$ASSETS_CSS = $ASSETS . 'css/';
$ASSETS_JS = $ASSETS . 'js/';

// 【キャッシュ対策】CSS, JSにパラメータを付ける
// （filemtime関数でファイルの更新日時をパラメータとして付与している）
$IS_ASSETS_ADD_PARMA = true;

// OGP関連
$OG_TWITTER_ID = '@';
$OG_FACEBOOK_ID = '';
