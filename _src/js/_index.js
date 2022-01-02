// import adjustViewport from './function/adjustViewport'

import Drawer from './module/Drawer';
import SmoothScroll from './module/SmoothScroll';
import Accordion from './module/Accordion';

// ブレイクポイント
const bp = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

const init = () => {
  (() => {
    const headerDrawerMenu = new Drawer({
      drawer: '#js-drawer-menu-nav',
      drawerOpenBtn: '#js-drawer-open-btn',
      drawerCloseBtn: '#js-drawer-close-btn',
      drawerBg: '#js-drawer-menu-bg'
    });
    headerDrawerMenu.init();
  })();

  (() => {
    const smoothScroll = new SmoothScroll({
      targets: 'a[href^="#"]',
      fixHeader: '#js-header',
    });
    smoothScroll.init();
  })();

};

window.addEventListener('DOMContentLoaded', () => {
  // adjustViewport()
  init();
});
