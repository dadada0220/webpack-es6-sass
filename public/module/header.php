<?php include('module/_config.php'); ?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <?php include('module/head.php'); ?>
</head>

<body>
  <div class="l-wrapper">

    <header class="l-header" id="js-header">
      <div class="l-header__logo">
        <img src="<?= $ASSETS_IMG . '_common/logo/logo.svg'; ?>" alt="<?= $SITE_NAME; ?>" width="150" height="100">
      </div>
      <nav class="l-header__nav">
        <ul class="p-header-nav">
          <li class="p-header-nav__item">
            <a href="#" class="p-header-nav__link">Nav</a>
          </li>
          <li class="p-header-nav__item">
            <a href="#" class="p-header-nav__link">Nav</a>
          </li>
          <li class="p-header-nav__item">
            <a href="#" class="p-header-nav__link">Nav</a>
          </li>
        </ul>
      </nav>
    </header>