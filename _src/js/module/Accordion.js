/**
 * アコーディオンのクラス
 * 使用例）
 *  <div class="p-accordion" data-js-accordion>
      <button class="p-accordion__btn" type="button" data-js-accordion-btn>お申込み内容</button>
      <div class="p-accordion__content" data-js-accordion-content="false">
        // アコーディオンの中身
      </div>
    </div>
 */

export default class Accordion {
  constructor(_parm) {
    this.arrayElmsAccordion = Array.prototype.slice.call(document.querySelectorAll('[data-js-accordion]'));
    if (!this.arrayElmsAccordion.length) return;
    this.attrBtn = 'data-js-accordion-btn';
    this.attrContent = 'data-js-accordion-content';
    this.class = '__is-show';
  }

  /**
   * 切り替えボタンのクラスを付与/削除する
   * @param {Boolean} _isShow trueなら付与 / falseなら削除する
   * @param {Element} _elmBtn 切り替えボタン要素
   */
  toggleBtnClass(_isShow, _elmBtn) {
    if(_isShow) {
      _elmBtn.classList.add(this.class);
    } else{
      _elmBtn.classList.remove(this.class);
    }
  }

  /**
   * 表示/非表示を切り替える
   * @param {Boolean} _isShow trueなら表示 / falseなら非表示にする
   * @param {Element} _elmContent 表示する要素
   * @param {Number} _contentHeight 表示する要素のデフォルトの高さ
   */
  toggleShow(_isShow, _elmContent, _contentHeight) {
    if(_isShow) {
      // 表示する
      _elmContent.style.height = `${_contentHeight}px`;
      _elmContent.setAttribute(this.attrContent, 'true');
    } else{
      // 非表示にする
      _elmContent.style.height = '0';
      _elmContent.setAttribute(this.attrContent, 'false');
    }
  }

  /**
   * アコーディオン要素の高さを取得する
   * @param {Element} _elmContent アコーディオン要素
   */
  getContentHeight(_elmContent) {
    return _elmContent.clientHeight;
  }

  /**
   * 全てのアコーディオン要素に対してイベントを付与
   * @param {Element} _elmBtn 切り替えボタン要素
   * @param {Element} _elmContent 表示する要素
   * @param {Number} _contentHeight 表示する要素のデフォルトの高さ
   */
  addEvent(_elmBtn, _elmContent, _contentHeight) {
    _elmBtn.addEventListener('click', (_ev) => {
      // 文字列型のtrue/falseをBoolean型に変換
      const isShow = _elmContent.getAttribute(this.attrContent).toLowerCase() === 'true';
      this.toggleShow(!isShow, _elmContent, _contentHeight);
      this.toggleBtnClass(!isShow, _elmBtn);
    });
  }

  init() {
    if (!this.arrayElmsAccordion.length) return;
    // 全てのアコーディオン要素に対して実行
    this.arrayElmsAccordion.forEach(_elmAccordion => {
      // 必要な要素、情報を取得
      const elmBtn = _elmAccordion.querySelector(`[${this.attrBtn}]`);
      const elmContent = _elmAccordion.querySelector(`[${this.attrContent}]`);
      const contentHeight = this.getContentHeight(elmContent);
      // 非表示にする
      elmContent.style.height = 0;
      // イベント付与
      this.addEvent(elmBtn, elmContent, contentHeight);
    });
  }
}
