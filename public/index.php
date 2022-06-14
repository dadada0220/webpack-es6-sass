<?php
$page_name = '';
$page_description = '';
?>

<?php include('module/header.php'); ?>

<div class="l-index">
  <?php
  /**
   * ********************************************************************
   * メインビジュアル
   * ********************************************************************
   */
  ?>
  <div class="l-index__mv p-index-mv">
    <div class="p-index-mv__content">
      <h1 class="p-index-mv__title">Title</h1>
      <div class="p-index-mv__lead">LeadLeadLeadLeadLead</div>
    </div>
    <div class="p-index-mv__bg">
      <img src="<?= $ASSETS_IMG . 'index/mv.jpg'; ?>" alt="" width="1200" height="800">
    </div>
  </div>

  <div class="l-index__content">

    <?php
    /**
     * ********************************************************************
     * xxxxx
     * ********************************************************************
     */
    ?>
    <section class="l-index__section p-xxxxx">
      <div class="p-xxxxx__inner l-inner">

        <h2 style="padding: 80px 20px; font-size: 24px; text-align: center;">section</h2>

      </div>
    </section>

  </div>
</div>

<?php include('module/footer.php'); ?>