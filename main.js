/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ValidatorCardNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidatorCardNumber */ \"./src/components/ValidatorCardNumber.js\");\n/* harmony import */ var _DeterminationOfPaySystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeterminationOfPaySystem */ \"./src/components/DeterminationOfPaySystem.js\");\n\n\nvar cardNumber = document.querySelector(\"input\");\nvar btn = document.querySelector(\"button\");\nvar elementOfResultValidation = document.querySelector(\".message-input\");\nvar allCardsPics = document.querySelectorAll(\".card-pic\");\nbtn.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  AllCardsInactive();\n  if (cardNumber.value.length === 16) {\n    if ((0,_ValidatorCardNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cardNumber.value)) {\n      elementOfResultValidation.textContent = \"Your card is valid.\";\n      var paySystem = (0,_DeterminationOfPaySystem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cardNumber.value);\n      SelectActivCard(paySystem);\n    } else {\n      elementOfResultValidation.textContent = \"Your card is not valid.\";\n    }\n  } else {\n    elementOfResultValidation.textContent = \"Card number must contain 16 digits.\";\n  }\n});\nfunction AllCardsInactive() {\n  allCardsPics.forEach(function (pic) {\n    pic.classList.add(\"card-inactiv\");\n  });\n}\nfunction SelectActivCard(id) {\n  allCardsPics.forEach(function (pic) {\n    if (pic.id === id) {\n      pic.classList.remove(\"card-inactiv\");\n    }\n  });\n}\n\n//# sourceURL=webpack://credit-card-validator/./src/components/App.js?");

/***/ }),

/***/ "./src/components/DeterminationOfPaySystem.js":
/*!****************************************************!*\
  !*** ./src/components/DeterminationOfPaySystem.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction DeterminationOfPaySystem(cardNumber) {\n  var paySystems = {\n    MIR: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],\n    VISA: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],\n    DISCOVER: [60],\n    MASTERCARD: [51, 52, 53, 54, 55],\n    AMERICANEXPRESS: [34, 37],\n    DINERS: [30, 36, 38],\n    JCB: [31, 35]\n  };\n  var idNumber = Number(String(cardNumber).slice(0, 2));\n  var resultPaySystem = \"\";\n  for (var key in paySystems) {\n    if (paySystems[key].includes(idNumber)) {\n      resultPaySystem = key;\n    }\n  }\n  return resultPaySystem;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeterminationOfPaySystem);\n\n//# sourceURL=webpack://credit-card-validator/./src/components/DeterminationOfPaySystem.js?");

/***/ }),

/***/ "./src/components/ValidatorCardNumber.js":
/*!***********************************************!*\
  !*** ./src/components/ValidatorCardNumber.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ValidatorCardNumber(number) {\n  var checkSum = 0;\n  String(number).split(\"\").filter(function (digit, index) {\n    if ((index + 1) % 2 != 0) {\n      digit = digit * 2;\n      if (digit >= 10) {\n        digit = digit - 9;\n      }\n    }\n    checkSum = checkSum + Number(digit);\n  });\n  return checkSum % 10 === 0 ? true : false;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatorCardNumber);\n\n//# sourceURL=webpack://credit-card-validator/./src/components/ValidatorCardNumber.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n\n\n\n\n//# sourceURL=webpack://credit-card-validator/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/visa.png */ \"./src/img/visa.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/mastercard.png */ \"./src/img/mastercard.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/american-express.png */ \"./src/img/american-express.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/discover.png */ \"./src/img/discover.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/jcb.svg */ \"./src/img/jcb.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/Diners-Club.jpg */ \"./src/img/Diners-Club.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/Mir.png */ \"./src/img/Mir.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Document</title>\\n</head>\\n\\n<body>\\n    <form class=\\\"credit-card-validator\\\">\\n        <div class=\\\"card-pics\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" id=\\\"VISA\\\" alt=\\\"card-visa\\\" class=\\\"card-pic card-inactiv\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" id=\\\"MASTERCARD\\\" alt=\\\"card-visa\\\" class=\\\"card-pic card-inactiv\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" id=\\\"AMERICANEXPRESS\\\" alt=\\\"card-visa\\\" class=\\\"card-pic card-inactiv\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" id=\\\"DISCOVER\\\" alt=\\\"card-visa\\\" class=\\\"card-pic card-inactiv\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" id=\\\"JCB\\\" alt=\\\"card-visa\\\" class=\\\"card-pic card-inactiv\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" id=\\\"DINERS\\\" alt=\\\"card-visa\\\" class=\\\"card-pic card-inactiv\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" id=\\\"MIR\\\" alt=\\\"card-visa\\\" class=\\\"card-pic card-inactiv\\\">\\n        </div>\\n        <div class=\\\"input-field\\\">\\n            <input type=\\\"number\\\">\\n            <button>Click to Validate</button>\\n        </div>\\n    </form>\\n    <div>\\n        <p class=\\\"message-input\\\"></p>\\n    </div>\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://credit-card-validator/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://credit-card-validator/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://credit-card-validator/./src/index.css?");

/***/ }),

/***/ "./src/img/Diners-Club.jpg":
/*!*********************************!*\
  !*** ./src/img/Diners-Club.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/Diners-Club.jpg\";\n\n//# sourceURL=webpack://credit-card-validator/./src/img/Diners-Club.jpg?");

/***/ }),

/***/ "./src/img/Mir.png":
/*!*************************!*\
  !*** ./src/img/Mir.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/Mir.png\";\n\n//# sourceURL=webpack://credit-card-validator/./src/img/Mir.png?");

/***/ }),

/***/ "./src/img/american-express.png":
/*!**************************************!*\
  !*** ./src/img/american-express.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/american-express.png\";\n\n//# sourceURL=webpack://credit-card-validator/./src/img/american-express.png?");

/***/ }),

/***/ "./src/img/discover.png":
/*!******************************!*\
  !*** ./src/img/discover.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/discover.png\";\n\n//# sourceURL=webpack://credit-card-validator/./src/img/discover.png?");

/***/ }),

/***/ "./src/img/jcb.svg":
/*!*************************!*\
  !*** ./src/img/jcb.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/jcb.svg\";\n\n//# sourceURL=webpack://credit-card-validator/./src/img/jcb.svg?");

/***/ }),

/***/ "./src/img/mastercard.png":
/*!********************************!*\
  !*** ./src/img/mastercard.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/mastercard.png\";\n\n//# sourceURL=webpack://credit-card-validator/./src/img/mastercard.png?");

/***/ }),

/***/ "./src/img/visa.png":
/*!**************************!*\
  !*** ./src/img/visa.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/visa.png\";\n\n//# sourceURL=webpack://credit-card-validator/./src/img/visa.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;