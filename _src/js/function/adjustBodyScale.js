/**
 * PC用
 * 画面幅が1100pxを下回ったら、同じレイアウトのまま表示倍率を縮小する
 */
export default () => {
  const ww = window.innerWidth;
  const base = 1100;
  if(ww > 750 && ww < base) {
    document.body.style.zoom = ww / base;
  } else{
    document.body.style.zoom = 1;
  }
};
