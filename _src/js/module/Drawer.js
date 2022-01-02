/**
 * ハンバーガーメニューなどのドロワーの表示を切り替えるクラス
 */

import bgScrollFixed from '../function/bgScrollFixed';

export default class Drawer {
  /**
   * this.elmDrawer: ドロワーの親要素（カスタム属性[this.attrToggle=true|false]が付与される）
   * this.elmDrawerOpenBtn: ドロワー開くボタン要素
   * this.elmDrawerCloseBtn: ドロワー閉じるボタン要素
   * this.elmDrawerBg: ドロワーの背景要素（空可能）
   * this.attrToggle: ドロワーの親要素に付与するカスタム属性名
   * this.openFlag: ドロワーが開いているかどうか true=開, false=閉
   */
  constructor(_parm) {
    this.elmDrawer = document.querySelector(_parm.drawer) || false;
    if(!this.elmDrawer) return;
    this.elmDrawerOpenBtn = document.querySelector(_parm.drawerOpenBtn) || false;
    this.elmDrawerCloseBtn = document.querySelector(_parm.drawerCloseBtn) || false;
    this.elmDrawerBg = document.querySelector(_parm.drawerBg) || false;
    this.attrToggle = _parm.attrToggle || 'data-active';
    this.openFlag = false;
  }

  /**
   * モーダルを開く
   */
  open() {
    this.elmDrawer.setAttribute(this.attrToggle, 'true');
    if(this.elmDrawerOpenBtn) {
      this.elmDrawerOpenBtn.setAttribute(this.attrToggle, 'true');
    }
    if(this.elmDrawerBg) {
      this.elmDrawerBg.setAttribute(this.attrToggle, 'true');
    }
    bgScrollFixed(true);
  }

  /**
   * モーダルを閉じる
   */
  close() {
    this.elmDrawer.setAttribute(this.attrToggle, 'false');
    if(this.elmDrawerOpenBtn) {
      this.elmDrawerOpenBtn.setAttribute(this.attrToggle, 'false');
    }
    if(this.elmDrawerBg) {
      this.elmDrawerBg.setAttribute(this.attrToggle, 'false');
    }
    bgScrollFixed(false);
  }

  /**
   * モーダルを開く/閉じる
   */
  toggle() {
    if(this.openFlag) {
      this.close();
      this.openFlag = false;
      bgScrollFixed(false);
    } else {
      this.open();
      this.openFlag = true;
      bgScrollFixed(true);
    }
  }

  addEvent() {
    if(this.elmDrawerOpenBtn) {
      this.elmDrawerOpenBtn.addEventListener('click', (_ev) => {
        this.open();
      });
    }
    this.elmDrawerCloseBtn.addEventListener('click', (_ev) => {
      this.close();
    });
    if(this.elmDrawerBg) {
      this.elmDrawerBg.addEventListener('click', (_ev) => {
        this.close();
      });
    }
  }

  init() {
    if(!this.elmDrawer) return;
    this.addEvent();
  }
}
