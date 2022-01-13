/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_src/js/_index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_src/js/_index.js":
/*!***************************!*\
  !*** ./_src/js/_index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/Drawer */ "./_src/js/module/Drawer.js");
/* harmony import */ var _module_SmoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/SmoothScroll */ "./_src/js/module/SmoothScroll.js");
/* harmony import */ var _module_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/Accordion */ "./_src/js/module/Accordion.js");
// import adjustViewport from './function/adjustViewport'


 // ブレイクポイント

var bp = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

var init = function init() {
  (function () {
    var headerDrawerMenu = new _module_Drawer__WEBPACK_IMPORTED_MODULE_0__["default"]({
      drawer: '#js-drawer-menu-nav',
      drawerOpenBtn: '#js-drawer-open-btn',
      drawerCloseBtn: '#js-drawer-close-btn',
      drawerBg: '#js-drawer-menu-bg'
    });
    headerDrawerMenu.init();
  })();

  (function () {
    var smoothScroll = new _module_SmoothScroll__WEBPACK_IMPORTED_MODULE_1__["default"]({
      targets: 'a[href^="#"]',
      fixHeader: '#js-header'
    });
    smoothScroll.init();
  })();
};

window.addEventListener('DOMContentLoaded', function () {
  // adjustViewport()
  init();
});

/***/ }),

/***/ "./_src/js/function/bgScrollFixed.js":
/*!*******************************************!*\
  !*** ./_src/js/function/bgScrollFixed.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 背景を固定する関数
 * モーダルやドロワーメニューが開いている時に使用する
 * @param {Boolean} _isFixed - 固定: true, 解除: false
 */
/* harmony default export */ __webpack_exports__["default"] = (function (_isFixed) {
  /**
   * スクロール位置を取得
   * @see https://qiita.com/sounisi5011/items/1a5a2410fce27ba6d8ae
   */
  var getScrollTop = function getScrollTop() {
    var pageYOffset = window.pageYOffset;
    var document = window.document;
    var body = document.body;

    if (pageYOffset !== undefined) {
      return pageYOffset;
    }
    /**
     * @see https://dev.opera.com/articles/fixing-the-scrolltop-bug/
     */


    var scrollingElement = 'scrollingElement' in document ? document.scrollingElement : window.navigator.userAgent.indexOf('WebKit') != -1 ? body : document.documentElement || body.parentNode;
    return scrollingElement.scrollTop;
  };
  /**
   * 適用するスクロール位置を定義
   */


  var scrollY = _isFixed ? getScrollTop() * -1 : parseInt(document.body.style.top || '0') * -1;
  /**
   * bodyに背景を{固定, 解除}するCSS適用
   * （背景固定時に画面のがくつきを防ぐために、スクロールバーの横幅の値を`padding-right`にセットしている）
   */

  if (_isFixed) {
    Object.assign(document.body.style, {
      position: 'fixed',
      top: "".concat(scrollY, "px"),
      left: '0',
      width: '100vw',
      height: '100vh',
      paddingRight: "".concat(window.innerWidth - document.body.clientWidth, "px"),
      overflow: 'hidden'
    });
  } else {
    document.body.style = '';
  }
  /**
   * 固定解除時にスクロール位置を戻す
   */


  if (!_isFixed) window.scrollTo(0, scrollY);
  return;
});

/***/ }),

/***/ "./_src/js/module/Accordion.js":
/*!*************************************!*\
  !*** ./_src/js/module/Accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



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
var Accordion = /*#__PURE__*/function () {
  function Accordion(_parm) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Accordion);

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


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Accordion, [{
    key: "toggleBtnClass",
    value: function toggleBtnClass(_isShow, _elmBtn) {
      if (_isShow) {
        _elmBtn.classList.add(this.class);
      } else {
        _elmBtn.classList.remove(this.class);
      }
    }
    /**
     * 表示/非表示を切り替える
     * @param {Boolean} _isShow trueなら表示 / falseなら非表示にする
     * @param {Element} _elmContent 表示する要素
     * @param {Number} _contentHeight 表示する要素のデフォルトの高さ
     */

  }, {
    key: "toggleShow",
    value: function toggleShow(_isShow, _elmContent, _contentHeight) {
      if (_isShow) {
        // 表示する
        _elmContent.style.height = "".concat(_contentHeight, "px");

        _elmContent.setAttribute(this.attrContent, 'true');
      } else {
        // 非表示にする
        _elmContent.style.height = '0';

        _elmContent.setAttribute(this.attrContent, 'false');
      }
    }
    /**
     * アコーディオン要素の高さを取得する
     * @param {Element} _elmContent アコーディオン要素
     */

  }, {
    key: "getContentHeight",
    value: function getContentHeight(_elmContent) {
      return _elmContent.clientHeight;
    }
    /**
     * 全てのアコーディオン要素に対してイベントを付与
     * @param {Element} _elmBtn 切り替えボタン要素
     * @param {Element} _elmContent 表示する要素
     * @param {Number} _contentHeight 表示する要素のデフォルトの高さ
     */

  }, {
    key: "addEvent",
    value: function addEvent(_elmBtn, _elmContent, _contentHeight) {
      var _this = this;

      _elmBtn.addEventListener('click', function (_ev) {
        // 文字列型のtrue/falseをBoolean型に変換
        var isShow = _elmContent.getAttribute(_this.attrContent).toLowerCase() === 'true';

        _this.toggleShow(!isShow, _elmContent, _contentHeight);

        _this.toggleBtnClass(!isShow, _elmBtn);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      if (!this.arrayElmsAccordion.length) return; // 全てのアコーディオン要素に対して実行

      this.arrayElmsAccordion.forEach(function (_elmAccordion) {
        // 必要な要素、情報を取得
        var elmBtn = _elmAccordion.querySelector("[".concat(_this2.attrBtn, "]"));

        var elmContent = _elmAccordion.querySelector("[".concat(_this2.attrContent, "]"));

        var contentHeight = _this2.getContentHeight(elmContent); // 非表示にする


        elmContent.style.height = 0; // イベント付与

        _this2.addEvent(elmBtn, elmContent, contentHeight);
      });
    }
  }]);

  return Accordion;
}();



/***/ }),

/***/ "./_src/js/module/Drawer.js":
/*!**********************************!*\
  !*** ./_src/js/module/Drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _function_bgScrollFixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../function/bgScrollFixed */ "./_src/js/function/bgScrollFixed.js");



/**
 * ハンバーガーメニューなどのドロワーの表示を切り替えるクラス
 */


var Drawer = /*#__PURE__*/function () {
  /**
   * this.elmDrawer: ドロワーの親要素（カスタム属性[this.attrToggle=true|false]が付与される）
   * this.elmDrawerOpenBtn: ドロワー開くボタン要素
   * this.elmDrawerCloseBtn: ドロワー閉じるボタン要素
   * this.elmDrawerBg: ドロワーの背景要素（空可能）
   * this.attrToggle: ドロワーの親要素に付与するカスタム属性名
   * this.openFlag: ドロワーが開いているかどうか true=開, false=閉
   */
  function Drawer(_parm) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Drawer);

    this.elmDrawer = document.querySelector(_parm.drawer) || false;
    if (!this.elmDrawer) return;
    this.elmDrawerOpenBtn = document.querySelector(_parm.drawerOpenBtn) || false;
    this.elmDrawerCloseBtn = document.querySelector(_parm.drawerCloseBtn) || false;
    this.elmDrawerBg = document.querySelector(_parm.drawerBg) || false;
    this.attrToggle = _parm.attrToggle || 'data-active';
    this.openFlag = false;
  }
  /**
   * モーダルを開く
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Drawer, [{
    key: "open",
    value: function open() {
      this.elmDrawer.setAttribute(this.attrToggle, 'true');

      if (this.elmDrawerOpenBtn) {
        this.elmDrawerOpenBtn.setAttribute(this.attrToggle, 'true');
      }

      if (this.elmDrawerBg) {
        this.elmDrawerBg.setAttribute(this.attrToggle, 'true');
      }

      Object(_function_bgScrollFixed__WEBPACK_IMPORTED_MODULE_2__["default"])(true);
    }
    /**
     * モーダルを閉じる
     */

  }, {
    key: "close",
    value: function close() {
      this.elmDrawer.setAttribute(this.attrToggle, 'false');

      if (this.elmDrawerOpenBtn) {
        this.elmDrawerOpenBtn.setAttribute(this.attrToggle, 'false');
      }

      if (this.elmDrawerBg) {
        this.elmDrawerBg.setAttribute(this.attrToggle, 'false');
      }

      Object(_function_bgScrollFixed__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
    }
    /**
     * モーダルを開く/閉じる
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.openFlag) {
        this.close();
        this.openFlag = false;
        Object(_function_bgScrollFixed__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
      } else {
        this.open();
        this.openFlag = true;
        Object(_function_bgScrollFixed__WEBPACK_IMPORTED_MODULE_2__["default"])(true);
      }
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      var _this = this;

      if (this.elmDrawerOpenBtn) {
        this.elmDrawerOpenBtn.addEventListener('click', function (_ev) {
          _this.open();
        });
      }

      this.elmDrawerCloseBtn.addEventListener('click', function (_ev) {
        _this.close();
      });

      if (this.elmDrawerBg) {
        this.elmDrawerBg.addEventListener('click', function (_ev) {
          _this.close();
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      if (!this.elmDrawer) return;
      this.addEvent();
    }
  }]);

  return Drawer;
}();



/***/ }),

/***/ "./_src/js/module/SmoothScroll.js":
/*!****************************************!*\
  !*** ./_src/js/module/SmoothScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmoothScroll; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__);




/**
 * スムーススクロールを実行するクラス
 * @see https://www.to-r.net/media/smooth_scrolling_2019/
 *
 * スクロール位置を調節可能
 * （例: 固定ヘッダーの場合、その高さ分位置をズラす）
 */
// モダンブラウザ用のポリフィル


var SmoothScroll = /*#__PURE__*/function () {
  function SmoothScroll(_parm) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SmoothScroll);

    this.elmLinks = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll(_parm.targets));
    this.elmFixHeader = document.querySelector(_parm.fixHeader) || false;
    this.addGap = _parm.addGap || 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SmoothScroll, [{
    key: "scroll",
    value: function scroll(_event) {
      smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default.a.polyfill();

      _event.preventDefault();

      var elmTarget = document.querySelector(_event.currentTarget.getAttribute('href'));
      var targetOffset = elmTarget.getBoundingClientRect().top;
      var nowOffset = window.pageYOffset;
      var gap = this.elmFixHeader ? this.elmFixHeader.clientHeight : 0;
      var finishOffset = targetOffset + nowOffset - gap - this.addGap;
      window.scrollTo({
        top: finishOffset,
        behavior: 'smooth'
      });
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      var _this = this;

      this.elmLinks.forEach(function (_elmLink) {
        _elmLink.addEventListener('click', function (_ev) {
          _this.scroll(_ev);
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (!this.elmLinks.length) return;
      this.addEvent();
    }
  }]);

  return SmoothScroll;
}();



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ })

/******/ });
//# sourceMappingURL=application.js.map