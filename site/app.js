/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(5);

	__webpack_require__(7);

	__webpack_require__(9);

	__webpack_require__(11);

	__webpack_require__(13);

	var _configureEditor = __webpack_require__(15);

	var _configureEditor2 = _interopRequireDefault(_configureEditor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getElementById = document.getElementById.bind(document);

	document.addEventListener('DOMContentLoaded', function () {
	  var documentContainer = getElementById('document-container');

	  (0, _configureEditor2.default)(getElementById('editor-container'), documentContainer, getElementById('table-of-contents-container'));

	  // Because we're using a scrolling panel, the browser fails to restore the
	  // document's scroll position when the user navigates backward (or forward).
	  //
	  // To work around this, we save the user's scroll position every time they
	  // click a link, then use the `popstate` event to manually restore their
	  // scroll position.  
	  function saveDocumentScrollPosition() {
	    var scrollTop = documentContainer.scrollTop;

	    window.history.replaceState({ scrollTop: scrollTop }, '');
	  }

	  function recallDocumentScrollPosition(historyState) {
	    if (historyState) {
	      documentContainer.scrollTop = historyState.scrollTop;
	    }
	  }

	  // If the user scrolls halfway down the document, then navigates backward to
	  // some external page, then navigates forward to return to our page again, we
	  // want to be able to restore their scroll position. 
	  window.addEventListener('beforeunload', function () {
	    saveDocumentScrollPosition();
	  });

	  documentContainer.addEventListener('click', function (event) {
	    if (event.target.tagName === 'A') {
	      saveDocumentScrollPosition();
	    }
	  });

	  window.addEventListener('popstate', function (event) {
	    var state = event.state;

	    recallDocumentScrollPosition(state);
	  });

	  // In Chrome, the `popstate` event does not fire when the user navigates
	  // backward from an external page. 
	  window.addEventListener('pageshow', function () {
	    var state = window.history.state;

	    recallDocumentScrollPosition(state);
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./../postcss-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../css-loader/index.js!./../postcss-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./codemirror.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./codemirror.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n  /* Hack to make IE7 behave */\n  *zoom:1;\n  *display:inline;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */ border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  font-variant-ligatures: none;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  overflow: auto;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* IE7 hack to prevent it from returning funny offsetTops on the spans */\n.CodeMirror span { *vertical-align: text-bottom; }\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./layout.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./layout.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: wrap row-reverse;\n      flex-flow: wrap row-reverse;\n  height: 100vh; }\n\n#document-container,\n#editor-container {\n  overflow-y: scroll; }\n\n#document-container {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -ms-flex-positive: 1.35;\n      flex-grow: 1.35;\n  height: 100vh;\n  border-left: 1px solid #aaa; }\n\n#editor-container {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -ms-flex-positive: 1;\n      flex-grow: 1; }\n  #editor-container .CodeMirror {\n    height: 100vh; }\n\n#table-of-contents-container {\n  display: none; }\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./editor.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./editor.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".CodeMirror {\n  font-size: 14px;\n  font-family: 'Inconsolata', monospace;\n  line-height: 1.3em; }\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./document.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./document.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n#document-container {\n  font-family: 'Muli', sans-serif;\n  line-height: 1.3em;\n  padding: 0 15px; }\n  #document-container a {\n    border-bottom: dotted 2px #09d;\n    color: #09d;\n    text-decoration: none; }\n    #document-container a:hover {\n      background-color: #ddf5ff; }\n  #document-container blockquote {\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    background-color: #fafafa;\n    padding: 5px 20px;\n    margin: 15px 0; }\n  #document-container b, #document-container strong {\n    text-shadow: 0px 0px 0px; }\n  #document-container h1, #document-container h2, #document-container h3, #document-container h4, #document-container h5, #document-container h6 {\n    font-family: 'Ovo', serif;\n    color: #484; }\n  #document-container h1 {\n    font-size: 220%;\n    color: white;\n    background: #484;\n    padding: 25px 5px 50px 15px;\n    margin: 25px -15px;\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%); }\n    #document-container h1:first-child {\n      margin-top: 0; }\n  #document-container h2 {\n    font-size: 200%;\n    padding-top: 10px; }\n  #document-container h3 {\n    font-size: 160%;\n    padding-top: 5px; }\n  #document-container h4 {\n    font-size: 140%; }\n  #document-container h5 {\n    font-size: 120%; }\n  #document-container h6 {\n    font-size: 100%; }\n  #document-container small {\n    font-size: 100%;\n    opacity: .5; }\n  #document-container h1 small, #document-container h2 small, #document-container h3 small, #document-container h4 small, #document-container h5 small, #document-container h6 small, #document-container a small {\n    font-size: 80%;\n    opacity: 1; }\n  #document-container pre, #document-container code {\n    background: #234;\n    color: white;\n    font-family: 'Inconsolata', monospace; }\n  #document-container pre {\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    border-radius: 3px;\n    overflow-x: scroll;\n    padding: 7px 9px; }\n  #document-container code {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    border-radius: 2px;\n    padding: 0 .2em; }\n  #document-container a code {\n    color: #8df; }\n  #document-container pre > code {\n    box-shadow: none;\n    border-radius: 0;\n    padding: 0; }\n  #document-container hr {\n    padding: 30px 0;\n    border: none;\n    text-align: center; }\n  #document-container hr:after {\n    content: \"\\22EF\";\n    color: #888;\n    font-size: 400%; }\n  #document-container kbd {\n    background-color: #eee;\n    border: 1px solid #aaa;\n    border-radius: 3px;\n    box-shadow: 0 2px 0 rgba(13, 13, 13, 0.2), 0 0 0 2px white inset;\n    color: #444;\n    display: inline-block;\n    font-family: sans-serif;\n    font-size: 11px;\n    line-height: 1.4;\n    margin: 0 .1em;\n    padding: .1em .6em;\n    text-shadow: 0 1px 0 white;\n    white-space: nowrap; }\n  #document-container a kbd {\n    background-color: #ddf5ff;\n    color: #09d;\n    border-color: #09d; }\n  #document-container mark {\n    background-color: transparent;\n    text-shadow: -4px 0px 4px yellow, 4px 0px 4px yellow, 8px 0px 6px yellow, -8px 0px 6px yellow; }\n  #document-container a mark {\n    color: #09d; }\n  #document-container q {\n    quotes: '\\201C' '\\201D' \"\\2018\" \"\\2019\"; }\n  #document-container q:before {\n    content: open-quote; }\n  #document-container q:after {\n    content: close-quote; }\n  #document-container table {\n    border-collapse: collapse;\n    margin: 20px; }\n    #document-container table caption {\n      padding-bottom: 10px;\n      font-style: italic; }\n    #document-container table tbody tr:hover {\n      background-color: #ddd; }\n      #document-container table tbody tr:hover td {\n        border-color: #aaa; }\n    #document-container table tbody tr:nth-child(even) {\n      background-color: #eee; }\n      #document-container table tbody tr:nth-child(even):hover {\n        background-color: #ccc; }\n        #document-container table tbody tr:nth-child(even):hover td {\n          border-color: #999; }\n    #document-container table td, #document-container table th {\n      padding: 10px;\n      border: 1px solid #bbb; }\n      #document-container table td.up-numeric, #document-container table th.up-numeric {\n        text-align: right; }\n      #document-container table td[colspan], #document-container table th[colspan] {\n        text-align: center; }\n    #document-container table th {\n      background-color: #bbb;\n      border-color: #888; }\n      #document-container table th:empty:first-child {\n        background: transparent;\n        border-top: 0;\n        border-left: 0; }\n  #document-container .up-lines {\n    text-align: center; }\n  #document-container .up-revealable > label {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    cursor: pointer;\n    color: white;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background: #c00;\n    white-space: nowrap;\n    padding: 7px 12px 5px 12px;\n    margin: 5px;\n    font-size: 75%;\n    text-transform: uppercase;\n    border-radius: 3px; }\n    #document-container .up-revealable > label:hover {\n      background: #b00; }\n    #document-container .up-revealable > label:active {\n      background: #a00; }\n  #document-container .up-revealable > input[type=\"checkbox\"] {\n    display: none; }\n    #document-container .up-revealable > input[type=\"checkbox\"] ~ span,\n    #document-container .up-revealable > input[type=\"checkbox\"] ~ div {\n      display: none; }\n    #document-container .up-revealable > input[type=\"checkbox\"]:checked ~ span {\n      display: inline; }\n    #document-container .up-revealable > input[type=\"checkbox\"]:checked ~ div {\n      display: block; }\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./syncingAnimation.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./syncingAnimation.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@keyframes clean {\n  0% {\n    opacity: 0.5;\n    transition: 0.5s; }\n  100% {\n    opacity: 1; } }\n\n.dirty {\n  opacity: 0.5;\n  transition: 0.5s; }\n\n.clean {\n  animation: 0.2s clean; }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureEditor;

	var _codemirror = __webpack_require__(16);

	var _codemirror2 = _interopRequireDefault(_codemirror);

	var _writeUp = __webpack_require__(17);

	var Up = _interopRequireWildcard(_writeUp);

	var _debounce = __webpack_require__(110);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _throttle = __webpack_require__(111);

	var _throttle2 = _interopRequireDefault(_throttle);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// WARNING: This collection represents shared state!
	//
	// This is a collection  of every element from the rendered document that has a source
	// line number. Every time we re-render the document, we'll update this collection.
	//
	// Whenever the user scrolls through the rendered document, we use this collection to
	// scroll the CodeMirror editor to the line corresponding to the first element from this
	// collection that is within the user's viewport.
	//
	// Likewise, whenever the user scrolls through the editor, we use this collection to
	// scroll to the first element in the document produced by (or after) the first visible
	// line in the editor.
	var sourceMappedElements = [];

	function refreshSourceMappedElements(documentContainer) {
	  sourceMappedElements = documentContainer.querySelectorAll('[data-up-source-line]');
	}

	function configureEditor(editorContainer, documentContainer, tableOfContentsContainer) {
	  var codeMirror = (0, _codemirror2.default)(editorContainer, {
	    value: __webpack_require__(112),
	    lineNumbers: true,
	    lineWrapping: true,
	    tabSize: 2,
	    extraKeys: {
	      Tab: function Tab() {
	        // By default, if there is any selected text, pressing Tab indents the selection using
	        // any applicable indentation settings. That's exactly what we want, so we'll use that
	        // behavior.
	        if (codeMirror.somethingSelected()) {
	          return _codemirror2.default.Pass;
	        }

	        // However, if no text is selected, CodeMirror inserts a tab character regardless of
	        // any applicable indentation settings. Here, we insert spaces instead.
	        var spacesPerTab = codeMirror.getOption('indentUnit');
	        var indentation = repeat(' ', spacesPerTab);
	        codeMirror.replaceSelection(indentation);
	      }
	    }
	  });

	  // When the user presses Shift-Tab, the editor should reduce the indentation level,
	  // not remove all indentation (which is the default behavior). 
	  _codemirror2.default.keyMap.default['Shift-Tab'] = 'indentLess';

	  configureCodeMirrorToIndentSoftWrapedLines(codeMirror);
	  configureLivePreview(codeMirror, documentContainer, tableOfContentsContainer);
	  syncScrolling(codeMirror, documentContainer);

	  codeMirror.refresh();
	  refreshSourceMappedElements(documentContainer);
	}

	// Returns a new string consisting of `count` copies of `text`
	function repeat(text, count) {
	  return new Array(count + 1).join(text);
	}

	function configureLivePreview(codeMirror, documentContainer, tableOfContentsContainer) {
	  // We'll wait until the user is done typing before we re-render the document with their
	  // changes. We consider the user to be done typing once 1.2 seconds has elapsed since
	  // their last keystroke.
	  //
	  // In the meantime, we'll fade the document (using the `dirty` CSS class) to indicate it's
	  // out of date.
	  var debouncedRender = (0, _debounce2.default)(function (codeMirror) {
	    var markup = codeMirror.getValue();

	    var _Up$parseAndRenderDoc = Up.parseAndRenderDocumentAndTableOfContents(markup, {
	      parsing: { createSourceMap: true }
	    });

	    var documentHtml = _Up$parseAndRenderDoc.documentHtml;
	    var tableOfContentsHtml = _Up$parseAndRenderDoc.tableOfContentsHtml;


	    documentContainer.innerHTML = documentHtml;
	    tableOfContentsContainer.innerHTML = tableOfContentsHtml;

	    refreshSourceMappedElements(documentContainer);
	    markDocumentAsClean();
	  }, 1200);

	  codeMirror.on('change', function (codeMirror) {
	    markDocumentAsDirty();
	    debouncedRender(codeMirror);
	  });

	  function markDocumentAsDirty() {
	    documentContainer.classList.remove('clean');
	    documentContainer.classList.add('dirty');
	  }

	  function markDocumentAsClean() {
	    documentContainer.classList.remove('dirty');
	    documentContainer.classList.add('clean');
	  }
	}

	function syncScrolling(codeMirror, documentContainer) {
	  var FPS_FOR_SCROLL_SYNCING = 60;
	  var SCROLL_SYNC_INTERVAL = 1000 / FPS_FOR_SCROLL_SYNCING;

	  var getScrollSyncer = function getScrollSyncer(sync) {
	    return (0, _throttle2.default)(sync, SCROLL_SYNC_INTERVAL);
	  };

	  addScrollSyncingEventListeners({
	    scrollSyncInterval: SCROLL_SYNC_INTERVAL,
	    codeMirror: codeMirror,
	    documentContainer: documentContainer,

	    syncScrollingFromDocument: getScrollSyncer(function () {
	      for (var i = 0; i < sourceMappedElements.length; i++) {
	        var element = sourceMappedElements[i];

	        if (!element.offsetParent) {
	          // Below, we use `getBoundingClientRect().top` to determine whether the element is
	          // within the viewport. Unfortunately,  if the element is hidden (as opposed to
	          // merely off-screen), we always get an unhelpful value of `0`, which implies the
	          // element is at the top of the viewport.
	          //
	          // To work around this, we check `offsetParent`, which is `null` if the element is
	          // hidden.
	          continue;
	        }

	        // Why -1 and not 0?
	        //
	        // When you click a link pointing to fragment URL (e.g. a section link), the browser
	        // scrolls the appropriate element into view. Oddly, in some browsers, the top of that
	        // element is a fraction of a pixel above the top of the viewport. 
	        var VIEWPORT_TOP = -1;

	        // Is this the first document element starting within the viewport?
	        if (element.getBoundingClientRect().top >= VIEWPORT_TOP) {
	          // Line numbers in Up start at 1, not 0.
	          var editorLineIndex = element.dataset.upSourceLine - 1;

	          var editorCharToScrollTo = {
	            line: editorLineIndex,
	            ch: 0
	          };

	          var topOfEditorLine = codeMirror.charCoords(editorCharToScrollTo, 'local').top;

	          codeMirror.scrollTo(null, topOfEditorLine);
	          return;
	        }
	      }
	    }),

	    syncScrollingFromEditor: getScrollSyncer(function () {
	      // Line numbers in the CodeMirror editor start at 0. 
	      var firstVisibleLineNumber = 1 + codeMirror.lineAtHeight(0, 'window');

	      if (firstVisibleLineNumber === 1) {
	        // When browsers scroll an element into view, the element's top margin is ignored.
	        // It is not scrolled into view along with element.
	        //
	        // Normally, this is exactly what we want.
	        //
	        // However, if the first element in the document has a top margin, its odd that
	        // scrolling the editor to its top fails to scroll the document to its top.
	        //
	        // To fix this, if the editor is scrolled to its top, we automatically scroll the
	        // document to its top, too.
	        documentContainer.scrollTop = 0;
	        return;
	      }

	      for (var i = 0; i < sourceMappedElements.length; i++) {
	        var element = sourceMappedElements[i];

	        // Is this the first outline element that was produced by (or after) the first
	        // visible line in the editor?
	        if (element.dataset.upSourceLine >= firstVisibleLineNumber) {
	          element.scrollIntoView();
	          return;
	        }
	      }
	    })
	  });
	}

	function addScrollSyncingEventListeners(args) {
	  var scrollSyncInterval = args.scrollSyncInterval;
	  var codeMirror = args.codeMirror;
	  var documentContainer = args.documentContainer;
	  var syncScrollingFromDocument = args.syncScrollingFromDocument;
	  var syncScrollingFromEditor = args.syncScrollingFromEditor;

	  // We need to watch out for feedback loops!
	  //
	  // Let's say the user scrolls to line 100 in the editor. Normally, we'd scroll into view
	  // the rendered element produced by that line. However, let's also pretend that line 100
	  // didn't produce any syntax nodes! It's a blank line between paragraphs.
	  //
	  // So we do the next best thing: we scroll into view the first element produced *after*
	  // line 100: a paragraph produced by line 101. This unfortunately triggers the rendered
	  // document's scroll event, which in turn determines that the editor should be scrolled
	  // to line 101: the line that produced the paragraph. Uh-oh!
	  //
	  // To prevent this, whenever our *code* scrolls a container, we ignore the scroll events
	  // from that container for a short period.

	  var PERIOD_TO_IGNORE_RECIPROCAL_SCROLL_EVENTS = scrollSyncInterval * 2;

	  var ignoringScrollEventsFromDocument = false;
	  var ignoringScrollEventsFromEditor = false;

	  var getEventReEnabler = function getEventReEnabler(reEnable) {
	    return (0, _debounce2.default)(reEnable, PERIOD_TO_IGNORE_RECIPROCAL_SCROLL_EVENTS);
	  };

	  var eventuallyReEnableScrollEventsFromEditor = getEventReEnabler(function () {
	    ignoringScrollEventsFromEditor = false;
	  });

	  var eventuallyReEnableScrollEventsFromDocument = getEventReEnabler(function () {
	    ignoringScrollEventsFromDocument = false;
	  });

	  function temporarilyIgnoreScrollEventsFromEditor() {
	    ignoringScrollEventsFromEditor = true;
	    eventuallyReEnableScrollEventsFromEditor();
	  }

	  function temporarilyIgnoreScrollEventsFromDocument() {
	    ignoringScrollEventsFromDocument = true;
	    eventuallyReEnableScrollEventsFromDocument();
	  }

	  addScrollEventListener(documentContainer, function () {
	    if (!ignoringScrollEventsFromDocument) {
	      syncScrollingFromDocument();
	      temporarilyIgnoreScrollEventsFromEditor();
	    }
	  });

	  addScrollEventListener(codeMirror.getScrollerElement(), function () {
	    if (!ignoringScrollEventsFromEditor) {
	      syncScrollingFromEditor();
	      temporarilyIgnoreScrollEventsFromDocument();
	    }
	  });
	}

	function addScrollEventListener(element, listener) {
	  element.addEventListener('scroll', listener);
	}

	// This is adapted from this demo: https://codemirror.net/demo/indentwrap.html
	//
	// It does not work when tabs are used for indentation, because CodeMirror handles
	// tab characters using a special `<span class="cm-tab">` element. Luckily, our
	// editor is conigured (by default) to use spaces for indentation.
	//
	// TODO: Replace leading tab characters on-paste
	function configureCodeMirrorToIndentSoftWrapedLines(codeMirror) {
	  var charWidth = codeMirror.defaultCharWidth();

	  // This value is taken from the "PADDING" section of `codemirror.css`
	  var BASE_PADDING = 4;

	  codeMirror.on('renderLine', function (codeMirror, line, lineElement) {
	    var indentation = charWidth * _codemirror2.default.countColumn(line.text);

	    // First, let's eliminate the natural indentation provided by the leading spaces themselves.
	    lineElement.style.textIndent = '-' + indentation + 'px';

	    // Now, let's use padding to indent the entire soft-wrapped line!
	    lineElement.style.paddingLeft = BASE_PADDING + indentation + 'px';
	  });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .

	(function(mod) {
	  if (true) // CommonJS
	    module.exports = mod();
	  else if (typeof define == "function" && define.amd) // AMD
	    return define([], mod);
	  else // Plain browser env
	    (this || window).CodeMirror = mod();
	})(function() {
	  "use strict";

	  // BROWSER SNIFFING

	  // Kludges for bugs and behavior differences that can't be feature
	  // detected are enabled based on userAgent etc sniffing.
	  var userAgent = navigator.userAgent;
	  var platform = navigator.platform;

	  var gecko = /gecko\/\d/i.test(userAgent);
	  var ie_upto10 = /MSIE \d/.test(userAgent);
	  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
	  var ie = ie_upto10 || ie_11up;
	  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]);
	  var webkit = /WebKit\//.test(userAgent);
	  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
	  var chrome = /Chrome\//.test(userAgent);
	  var presto = /Opera\//.test(userAgent);
	  var safari = /Apple Computer/.test(navigator.vendor);
	  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
	  var phantom = /PhantomJS/.test(userAgent);

	  var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
	  // This is woefully incomplete. Suggestions for alternative methods welcome.
	  var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
	  var mac = ios || /Mac/.test(platform);
	  var chromeOS = /\bCrOS\b/.test(userAgent);
	  var windows = /win/i.test(platform);

	  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
	  if (presto_version) presto_version = Number(presto_version[1]);
	  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
	  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
	  var captureRightClick = gecko || (ie && ie_version >= 9);

	  // Optimize some code when these features are not used.
	  var sawReadOnlySpans = false, sawCollapsedSpans = false;

	  // EDITOR CONSTRUCTOR

	  // A CodeMirror instance represents an editor. This is the object
	  // that user code is usually dealing with.

	  function CodeMirror(place, options) {
	    if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

	    this.options = options = options ? copyObj(options) : {};
	    // Determine effective options based on given values and defaults.
	    copyObj(defaults, options, false);
	    setGuttersForLineNumbers(options);

	    var doc = options.value;
	    if (typeof doc == "string") doc = new Doc(doc, options.mode, null, options.lineSeparator);
	    this.doc = doc;

	    var input = new CodeMirror.inputStyles[options.inputStyle](this);
	    var display = this.display = new Display(place, doc, input);
	    display.wrapper.CodeMirror = this;
	    updateGutters(this);
	    themeChanged(this);
	    if (options.lineWrapping)
	      this.display.wrapper.className += " CodeMirror-wrap";
	    if (options.autofocus && !mobile) display.input.focus();
	    initScrollbars(this);

	    this.state = {
	      keyMaps: [],  // stores maps added by addKeyMap
	      overlays: [], // highlighting overlays, as added by addOverlay
	      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	      overwrite: false,
	      delayingBlurEvent: false,
	      focused: false,
	      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	      pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	      selectingText: false,
	      draggingText: false,
	      highlight: new Delayed(), // stores highlight worker timeout
	      keySeq: null,  // Unfinished key sequence
	      specialChars: null
	    };

	    var cm = this;

	    // Override magic textarea content restore that IE sometimes does
	    // on our hidden textarea on reload
	    if (ie && ie_version < 11) setTimeout(function() { cm.display.input.reset(true); }, 20);

	    registerEventHandlers(this);
	    ensureGlobalHandlers();

	    startOperation(this);
	    this.curOp.forceUpdate = true;
	    attachDoc(this, doc);

	    if ((options.autofocus && !mobile) || cm.hasFocus())
	      setTimeout(bind(onFocus, this), 20);
	    else
	      onBlur(this);

	    for (var opt in optionHandlers) if (optionHandlers.hasOwnProperty(opt))
	      optionHandlers[opt](this, options[opt], Init);
	    maybeUpdateLineNumberWidth(this);
	    if (options.finishInit) options.finishInit(this);
	    for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
	    endOperation(this);
	    // Suppress optimizelegibility in Webkit, since it breaks text
	    // measuring on line wrapping boundaries.
	    if (webkit && options.lineWrapping &&
	        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	      display.lineDiv.style.textRendering = "auto";
	  }

	  // DISPLAY CONSTRUCTOR

	  // The display handles the DOM integration, both for input reading
	  // and content drawing. It holds references to DOM nodes and
	  // display-related state.

	  function Display(place, doc, input) {
	    var d = this;
	    this.input = input;

	    // Covers bottom-right square when both scrollbars are present.
	    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
	    d.scrollbarFiller.setAttribute("cm-not-content", "true");
	    // Covers bottom of gutter when coverGutterNextToScrollbar is on
	    // and h scrollbar is present.
	    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
	    d.gutterFiller.setAttribute("cm-not-content", "true");
	    // Will contain the actual code, positioned to cover the viewport.
	    d.lineDiv = elt("div", null, "CodeMirror-code");
	    // Elements are added to these to represent selection and cursors.
	    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
	    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
	    // A visibility: hidden element used to find the size of things.
	    d.measure = elt("div", null, "CodeMirror-measure");
	    // When lines outside of the viewport are measured, they are drawn in this.
	    d.lineMeasure = elt("div", null, "CodeMirror-measure");
	    // Wraps everything that needs to exist inside the vertically-padded coordinate system
	    d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                      null, "position: relative; outline: none");
	    // Moved around its parent to cover visible view.
	    d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
	    // Set to the height of the document, allowing scrolling.
	    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
	    d.sizerWidth = null;
	    // Behavior of elts with overflow: auto and padding is
	    // inconsistent across browsers. This is used to ensure the
	    // scrollable area is big enough.
	    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
	    // Will contain the gutters, if any.
	    d.gutters = elt("div", null, "CodeMirror-gutters");
	    d.lineGutter = null;
	    // Actual scrollable element.
	    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
	    d.scroller.setAttribute("tabIndex", "-1");
	    // The element in which the editor lives.
	    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

	    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
	    if (!webkit && !(gecko && mobile)) d.scroller.draggable = true;

	    if (place) {
	      if (place.appendChild) place.appendChild(d.wrapper);
	      else place(d.wrapper);
	    }

	    // Current rendered range (may be bigger than the view window).
	    d.viewFrom = d.viewTo = doc.first;
	    d.reportedViewFrom = d.reportedViewTo = doc.first;
	    // Information about the rendered lines.
	    d.view = [];
	    d.renderedView = null;
	    // Holds info about a single rendered line when it was rendered
	    // for measurement, while not in view.
	    d.externalMeasured = null;
	    // Empty space (in pixels) above the view
	    d.viewOffset = 0;
	    d.lastWrapHeight = d.lastWrapWidth = 0;
	    d.updateLineNumbers = null;

	    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
	    d.scrollbarsClipped = false;

	    // Used to only resize the line number gutter when necessary (when
	    // the amount of lines crosses a boundary that makes its width change)
	    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
	    // Set to true when a non-horizontal-scrolling line widget is
	    // added. As an optimization, line widget aligning is skipped when
	    // this is false.
	    d.alignWidgets = false;

	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

	    // Tracks the maximum line length so that the horizontal scrollbar
	    // can be kept static when scrolling.
	    d.maxLine = null;
	    d.maxLineLength = 0;
	    d.maxLineChanged = false;

	    // Used for measuring wheel scrolling granularity
	    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

	    // True when shift is held down.
	    d.shift = false;

	    // Used to track whether anything happened since the context menu
	    // was opened.
	    d.selForContextMenu = null;

	    d.activeTouch = null;

	    input.init(d);
	  }

	  // STATE UPDATES

	  // Used to get the editor into a consistent state again when options change.

	  function loadMode(cm) {
	    cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
	    resetModeState(cm);
	  }

	  function resetModeState(cm) {
	    cm.doc.iter(function(line) {
	      if (line.stateAfter) line.stateAfter = null;
	      if (line.styles) line.styles = null;
	    });
	    cm.doc.frontier = cm.doc.first;
	    startWorker(cm, 100);
	    cm.state.modeGen++;
	    if (cm.curOp) regChange(cm);
	  }

	  function wrappingChanged(cm) {
	    if (cm.options.lineWrapping) {
	      addClass(cm.display.wrapper, "CodeMirror-wrap");
	      cm.display.sizer.style.minWidth = "";
	      cm.display.sizerWidth = null;
	    } else {
	      rmClass(cm.display.wrapper, "CodeMirror-wrap");
	      findMaxLine(cm);
	    }
	    estimateLineHeights(cm);
	    regChange(cm);
	    clearCaches(cm);
	    setTimeout(function(){updateScrollbars(cm);}, 100);
	  }

	  // Returns a function that estimates the height of a line, to use as
	  // first approximation until the line becomes visible (and is thus
	  // properly measurable).
	  function estimateHeight(cm) {
	    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
	    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
	    return function(line) {
	      if (lineIsHidden(cm.doc, line)) return 0;

	      var widgetsHeight = 0;
	      if (line.widgets) for (var i = 0; i < line.widgets.length; i++) {
	        if (line.widgets[i].height) widgetsHeight += line.widgets[i].height;
	      }

	      if (wrapping)
	        return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th;
	      else
	        return widgetsHeight + th;
	    };
	  }

	  function estimateLineHeights(cm) {
	    var doc = cm.doc, est = estimateHeight(cm);
	    doc.iter(function(line) {
	      var estHeight = est(line);
	      if (estHeight != line.height) updateLineHeight(line, estHeight);
	    });
	  }

	  function themeChanged(cm) {
	    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
	    clearCaches(cm);
	  }

	  function guttersChanged(cm) {
	    updateGutters(cm);
	    regChange(cm);
	    setTimeout(function(){alignHorizontally(cm);}, 20);
	  }

	  // Rebuild the gutter elements, ensure the margin to the left of the
	  // code matches their width.
	  function updateGutters(cm) {
	    var gutters = cm.display.gutters, specs = cm.options.gutters;
	    removeChildren(gutters);
	    for (var i = 0; i < specs.length; ++i) {
	      var gutterClass = specs[i];
	      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
	      if (gutterClass == "CodeMirror-linenumbers") {
	        cm.display.lineGutter = gElt;
	        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
	      }
	    }
	    gutters.style.display = i ? "" : "none";
	    updateGutterSpace(cm);
	  }

	  function updateGutterSpace(cm) {
	    var width = cm.display.gutters.offsetWidth;
	    cm.display.sizer.style.marginLeft = width + "px";
	  }

	  // Compute the character length of a line, taking into account
	  // collapsed ranges (see markText) that might hide parts, and join
	  // other lines onto it.
	  function lineLength(line) {
	    if (line.height == 0) return 0;
	    var len = line.text.length, merged, cur = line;
	    while (merged = collapsedSpanAtStart(cur)) {
	      var found = merged.find(0, true);
	      cur = found.from.line;
	      len += found.from.ch - found.to.ch;
	    }
	    cur = line;
	    while (merged = collapsedSpanAtEnd(cur)) {
	      var found = merged.find(0, true);
	      len -= cur.text.length - found.from.ch;
	      cur = found.to.line;
	      len += cur.text.length - found.to.ch;
	    }
	    return len;
	  }

	  // Find the longest line in the document.
	  function findMaxLine(cm) {
	    var d = cm.display, doc = cm.doc;
	    d.maxLine = getLine(doc, doc.first);
	    d.maxLineLength = lineLength(d.maxLine);
	    d.maxLineChanged = true;
	    doc.iter(function(line) {
	      var len = lineLength(line);
	      if (len > d.maxLineLength) {
	        d.maxLineLength = len;
	        d.maxLine = line;
	      }
	    });
	  }

	  // Make sure the gutters options contains the element
	  // "CodeMirror-linenumbers" when the lineNumbers option is true.
	  function setGuttersForLineNumbers(options) {
	    var found = indexOf(options.gutters, "CodeMirror-linenumbers");
	    if (found == -1 && options.lineNumbers) {
	      options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
	    } else if (found > -1 && !options.lineNumbers) {
	      options.gutters = options.gutters.slice(0);
	      options.gutters.splice(found, 1);
	    }
	  }

	  // SCROLLBARS

	  // Prepare DOM reads needed to update the scrollbars. Done in one
	  // shot to minimize update/measure roundtrips.
	  function measureForScrollbars(cm) {
	    var d = cm.display, gutterW = d.gutters.offsetWidth;
	    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
	    return {
	      clientHeight: d.scroller.clientHeight,
	      viewHeight: d.wrapper.clientHeight,
	      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	      viewWidth: d.wrapper.clientWidth,
	      barLeft: cm.options.fixedGutter ? gutterW : 0,
	      docHeight: docH,
	      scrollHeight: docH + scrollGap(cm) + d.barHeight,
	      nativeBarWidth: d.nativeBarWidth,
	      gutterWidth: gutterW
	    };
	  }

	  function NativeScrollbars(place, scroll, cm) {
	    this.cm = cm;
	    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
	    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
	    place(vert); place(horiz);

	    on(vert, "scroll", function() {
	      if (vert.clientHeight) scroll(vert.scrollTop, "vertical");
	    });
	    on(horiz, "scroll", function() {
	      if (horiz.clientWidth) scroll(horiz.scrollLeft, "horizontal");
	    });

	    this.checkedZeroWidth = false;
	    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	    if (ie && ie_version < 8) this.horiz.style.minHeight = this.vert.style.minWidth = "18px";
	  }

	  NativeScrollbars.prototype = copyObj({
	    update: function(measure) {
	      var needsH = measure.scrollWidth > measure.clientWidth + 1;
	      var needsV = measure.scrollHeight > measure.clientHeight + 1;
	      var sWidth = measure.nativeBarWidth;

	      if (needsV) {
	        this.vert.style.display = "block";
	        this.vert.style.bottom = needsH ? sWidth + "px" : "0";
	        var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
	        // A bug in IE8 can cause this value to be negative, so guard it.
	        this.vert.firstChild.style.height =
	          Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
	      } else {
	        this.vert.style.display = "";
	        this.vert.firstChild.style.height = "0";
	      }

	      if (needsH) {
	        this.horiz.style.display = "block";
	        this.horiz.style.right = needsV ? sWidth + "px" : "0";
	        this.horiz.style.left = measure.barLeft + "px";
	        var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
	        this.horiz.firstChild.style.width =
	          (measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
	      } else {
	        this.horiz.style.display = "";
	        this.horiz.firstChild.style.width = "0";
	      }

	      if (!this.checkedZeroWidth && measure.clientHeight > 0) {
	        if (sWidth == 0) this.zeroWidthHack();
	        this.checkedZeroWidth = true;
	      }

	      return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0};
	    },
	    setScrollLeft: function(pos) {
	      if (this.horiz.scrollLeft != pos) this.horiz.scrollLeft = pos;
	      if (this.disableHoriz) this.enableZeroWidthBar(this.horiz, this.disableHoriz);
	    },
	    setScrollTop: function(pos) {
	      if (this.vert.scrollTop != pos) this.vert.scrollTop = pos;
	      if (this.disableVert) this.enableZeroWidthBar(this.vert, this.disableVert);
	    },
	    zeroWidthHack: function() {
	      var w = mac && !mac_geMountainLion ? "12px" : "18px";
	      this.horiz.style.height = this.vert.style.width = w;
	      this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
	      this.disableHoriz = new Delayed;
	      this.disableVert = new Delayed;
	    },
	    enableZeroWidthBar: function(bar, delay) {
	      bar.style.pointerEvents = "auto";
	      function maybeDisable() {
	        // To find out whether the scrollbar is still visible, we
	        // check whether the element under the pixel in the bottom
	        // left corner of the scrollbar box is the scrollbar box
	        // itself (when the bar is still visible) or its filler child
	        // (when the bar is hidden). If it is still visible, we keep
	        // it enabled, if it's hidden, we disable pointer events.
	        var box = bar.getBoundingClientRect();
	        var elt = document.elementFromPoint(box.left + 1, box.bottom - 1);
	        if (elt != bar) bar.style.pointerEvents = "none";
	        else delay.set(1000, maybeDisable);
	      }
	      delay.set(1000, maybeDisable);
	    },
	    clear: function() {
	      var parent = this.horiz.parentNode;
	      parent.removeChild(this.horiz);
	      parent.removeChild(this.vert);
	    }
	  }, NativeScrollbars.prototype);

	  function NullScrollbars() {}

	  NullScrollbars.prototype = copyObj({
	    update: function() { return {bottom: 0, right: 0}; },
	    setScrollLeft: function() {},
	    setScrollTop: function() {},
	    clear: function() {}
	  }, NullScrollbars.prototype);

	  CodeMirror.scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

	  function initScrollbars(cm) {
	    if (cm.display.scrollbars) {
	      cm.display.scrollbars.clear();
	      if (cm.display.scrollbars.addClass)
	        rmClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	    }

	    cm.display.scrollbars = new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function(node) {
	      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
	      // Prevent clicks in the scrollbars from killing focus
	      on(node, "mousedown", function() {
	        if (cm.state.focused) setTimeout(function() { cm.display.input.focus(); }, 0);
	      });
	      node.setAttribute("cm-not-content", "true");
	    }, function(pos, axis) {
	      if (axis == "horizontal") setScrollLeft(cm, pos);
	      else setScrollTop(cm, pos);
	    }, cm);
	    if (cm.display.scrollbars.addClass)
	      addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
	  }

	  function updateScrollbars(cm, measure) {
	    if (!measure) measure = measureForScrollbars(cm);
	    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
	    updateScrollbarsInner(cm, measure);
	    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	        updateHeightsInViewport(cm);
	      updateScrollbarsInner(cm, measureForScrollbars(cm));
	      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
	    }
	  }

	  // Re-synchronize the fake scrollbars with the actual size of the
	  // content.
	  function updateScrollbarsInner(cm, measure) {
	    var d = cm.display;
	    var sizes = d.scrollbars.update(measure);

	    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
	    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
	    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

	    if (sizes.right && sizes.bottom) {
	      d.scrollbarFiller.style.display = "block";
	      d.scrollbarFiller.style.height = sizes.bottom + "px";
	      d.scrollbarFiller.style.width = sizes.right + "px";
	    } else d.scrollbarFiller.style.display = "";
	    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	      d.gutterFiller.style.display = "block";
	      d.gutterFiller.style.height = sizes.bottom + "px";
	      d.gutterFiller.style.width = measure.gutterWidth + "px";
	    } else d.gutterFiller.style.display = "";
	  }

	  // Compute the lines that are visible in a given viewport (defaults
	  // the the current scroll position). viewport may contain top,
	  // height, and ensure (see op.scrollToPos) properties.
	  function visibleLines(display, doc, viewport) {
	    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
	    top = Math.floor(top - paddingTop(display));
	    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

	    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
	    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	    // forces those lines into the viewport (if possible).
	    if (viewport && viewport.ensure) {
	      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
	      if (ensureFrom < from) {
	        from = ensureFrom;
	        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
	      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
	        to = ensureTo;
	      }
	    }
	    return {from: from, to: Math.max(to, from + 1)};
	  }

	  // LINE NUMBERS

	  // Re-align line numbers and gutter marks to compensate for
	  // horizontal scrolling.
	  function alignHorizontally(cm) {
	    var display = cm.display, view = display.view;
	    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
	    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
	    var gutterW = display.gutters.offsetWidth, left = comp + "px";
	    for (var i = 0; i < view.length; i++) if (!view[i].hidden) {
	      if (cm.options.fixedGutter) {
	        if (view[i].gutter)
	          view[i].gutter.style.left = left;
	        if (view[i].gutterBackground)
	          view[i].gutterBackground.style.left = left;
	      }
	      var align = view[i].alignable;
	      if (align) for (var j = 0; j < align.length; j++)
	        align[j].style.left = left;
	    }
	    if (cm.options.fixedGutter)
	      display.gutters.style.left = (comp + gutterW) + "px";
	  }

	  // Used to ensure that the line number gutter is still the right
	  // size for the current document size. Returns true when an update
	  // is needed.
	  function maybeUpdateLineNumberWidth(cm) {
	    if (!cm.options.lineNumbers) return false;
	    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
	    if (last.length != display.lineNumChars) {
	      var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
	      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
	      display.lineGutter.style.width = "";
	      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
	      display.lineNumWidth = display.lineNumInnerWidth + padding;
	      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
	      display.lineGutter.style.width = display.lineNumWidth + "px";
	      updateGutterSpace(cm);
	      return true;
	    }
	    return false;
	  }

	  function lineNumberFor(options, i) {
	    return String(options.lineNumberFormatter(i + options.firstLineNumber));
	  }

	  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	  // but using getBoundingClientRect to get a sub-pixel-accurate
	  // result.
	  function compensateForHScroll(display) {
	    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
	  }

	  // DISPLAY DRAWING

	  function DisplayUpdate(cm, viewport, force) {
	    var display = cm.display;

	    this.viewport = viewport;
	    // Store some values that we'll need later (but don't want to force a relayout for)
	    this.visible = visibleLines(display, cm.doc, viewport);
	    this.editorIsHidden = !display.wrapper.offsetWidth;
	    this.wrapperHeight = display.wrapper.clientHeight;
	    this.wrapperWidth = display.wrapper.clientWidth;
	    this.oldDisplayWidth = displayWidth(cm);
	    this.force = force;
	    this.dims = getDimensions(cm);
	    this.events = [];
	  }

	  DisplayUpdate.prototype.signal = function(emitter, type) {
	    if (hasHandler(emitter, type))
	      this.events.push(arguments);
	  };
	  DisplayUpdate.prototype.finish = function() {
	    for (var i = 0; i < this.events.length; i++)
	      signal.apply(null, this.events[i]);
	  };

	  function maybeClipScrollbars(cm) {
	    var display = cm.display;
	    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
	      display.heightForcer.style.height = scrollGap(cm) + "px";
	      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
	      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
	      display.scrollbarsClipped = true;
	    }
	  }

	  // Does the actual updating of the line display. Bails out
	  // (returning false) when there is nothing to be done and forced is
	  // false.
	  function updateDisplayIfNeeded(cm, update) {
	    var display = cm.display, doc = cm.doc;

	    if (update.editorIsHidden) {
	      resetView(cm);
	      return false;
	    }

	    // Bail out if the visible area is already rendered and nothing changed.
	    if (!update.force &&
	        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	        display.renderedView == display.view && countDirtyView(cm) == 0)
	      return false;

	    if (maybeUpdateLineNumberWidth(cm)) {
	      resetView(cm);
	      update.dims = getDimensions(cm);
	    }

	    // Compute a suitable new viewport (from & to)
	    var end = doc.first + doc.size;
	    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
	    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
	    if (display.viewFrom < from && from - display.viewFrom < 20) from = Math.max(doc.first, display.viewFrom);
	    if (display.viewTo > to && display.viewTo - to < 20) to = Math.min(end, display.viewTo);
	    if (sawCollapsedSpans) {
	      from = visualLineNo(cm.doc, from);
	      to = visualLineEndNo(cm.doc, to);
	    }

	    var different = from != display.viewFrom || to != display.viewTo ||
	      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
	    adjustView(cm, from, to);

	    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
	    // Position the mover div to align with the current scroll position
	    cm.display.mover.style.top = display.viewOffset + "px";

	    var toUpdate = countDirtyView(cm);
	    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	      return false;

	    // For big changes, we hide the enclosing element during the
	    // update, since that speeds up the operations on most browsers.
	    var focused = activeElt();
	    if (toUpdate > 4) display.lineDiv.style.display = "none";
	    patchDisplay(cm, display.updateLineNumbers, update.dims);
	    if (toUpdate > 4) display.lineDiv.style.display = "";
	    display.renderedView = display.view;
	    // There might have been a widget with a focused element that got
	    // hidden or updated, if so re-focus it.
	    if (focused && activeElt() != focused && focused.offsetHeight) focused.focus();

	    // Prevent selection and cursors from interfering with the scroll
	    // width and height.
	    removeChildren(display.cursorDiv);
	    removeChildren(display.selectionDiv);
	    display.gutters.style.height = display.sizer.style.minHeight = 0;

	    if (different) {
	      display.lastWrapHeight = update.wrapperHeight;
	      display.lastWrapWidth = update.wrapperWidth;
	      startWorker(cm, 400);
	    }

	    display.updateLineNumbers = null;

	    return true;
	  }

	  function postUpdateDisplay(cm, update) {
	    var viewport = update.viewport;

	    for (var first = true;; first = false) {
	      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
	        // Clip forced viewport to actual scrollable area.
	        if (viewport && viewport.top != null)
	          viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)};
	        // Updated line heights might result in the drawn area not
	        // actually covering the viewport. Keep looping until it does.
	        update.visible = visibleLines(cm.display, cm.doc, viewport);
	        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	          break;
	      }
	      if (!updateDisplayIfNeeded(cm, update)) break;
	      updateHeightsInViewport(cm);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      updateScrollbars(cm, barMeasure);
	      setDocumentHeight(cm, barMeasure);
	    }

	    update.signal(cm, "update", cm);
	    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
	      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
	    }
	  }

	  function updateDisplaySimple(cm, viewport) {
	    var update = new DisplayUpdate(cm, viewport);
	    if (updateDisplayIfNeeded(cm, update)) {
	      updateHeightsInViewport(cm);
	      postUpdateDisplay(cm, update);
	      var barMeasure = measureForScrollbars(cm);
	      updateSelection(cm);
	      updateScrollbars(cm, barMeasure);
	      setDocumentHeight(cm, barMeasure);
	      update.finish();
	    }
	  }

	  function setDocumentHeight(cm, measure) {
	    cm.display.sizer.style.minHeight = measure.docHeight + "px";
	    cm.display.heightForcer.style.top = measure.docHeight + "px";
	    cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
	  }

	  // Read the actual heights of the rendered lines, and update their
	  // stored heights to match.
	  function updateHeightsInViewport(cm) {
	    var display = cm.display;
	    var prevBottom = display.lineDiv.offsetTop;
	    for (var i = 0; i < display.view.length; i++) {
	      var cur = display.view[i], height;
	      if (cur.hidden) continue;
	      if (ie && ie_version < 8) {
	        var bot = cur.node.offsetTop + cur.node.offsetHeight;
	        height = bot - prevBottom;
	        prevBottom = bot;
	      } else {
	        var box = cur.node.getBoundingClientRect();
	        height = box.bottom - box.top;
	      }
	      var diff = cur.line.height - height;
	      if (height < 2) height = textHeight(display);
	      if (diff > .001 || diff < -.001) {
	        updateLineHeight(cur.line, height);
	        updateWidgetHeight(cur.line);
	        if (cur.rest) for (var j = 0; j < cur.rest.length; j++)
	          updateWidgetHeight(cur.rest[j]);
	      }
	    }
	  }

	  // Read and store the height of line widgets associated with the
	  // given line.
	  function updateWidgetHeight(line) {
	    if (line.widgets) for (var i = 0; i < line.widgets.length; ++i)
	      line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight;
	  }

	  // Do a bulk-read of the DOM positions and sizes needed to draw the
	  // view, so that we don't interleave reading and writing to the DOM.
	  function getDimensions(cm) {
	    var d = cm.display, left = {}, width = {};
	    var gutterLeft = d.gutters.clientLeft;
	    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	      left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
	      width[cm.options.gutters[i]] = n.clientWidth;
	    }
	    return {fixedPos: compensateForHScroll(d),
	            gutterTotalWidth: d.gutters.offsetWidth,
	            gutterLeft: left,
	            gutterWidth: width,
	            wrapperWidth: d.wrapper.clientWidth};
	  }

	  // Sync the actual display DOM structure with display.view, removing
	  // nodes for lines that are no longer in view, and creating the ones
	  // that are not there yet, and updating the ones that are out of
	  // date.
	  function patchDisplay(cm, updateNumbersFrom, dims) {
	    var display = cm.display, lineNumbers = cm.options.lineNumbers;
	    var container = display.lineDiv, cur = container.firstChild;

	    function rm(node) {
	      var next = node.nextSibling;
	      // Works around a throw-scroll bug in OS X Webkit
	      if (webkit && mac && cm.display.currentWheelTarget == node)
	        node.style.display = "none";
	      else
	        node.parentNode.removeChild(node);
	      return next;
	    }

	    var view = display.view, lineN = display.viewFrom;
	    // Loop over the elements in the view, syncing cur (the DOM nodes
	    // in display.lineDiv) with the view as we go.
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (lineView.hidden) {
	      } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
	        var node = buildLineElement(cm, lineView, lineN, dims);
	        container.insertBefore(node, cur);
	      } else { // Already drawn
	        while (cur != lineView.node) cur = rm(cur);
	        var updateNumber = lineNumbers && updateNumbersFrom != null &&
	          updateNumbersFrom <= lineN && lineView.lineNumber;
	        if (lineView.changes) {
	          if (indexOf(lineView.changes, "gutter") > -1) updateNumber = false;
	          updateLineForChanges(cm, lineView, lineN, dims);
	        }
	        if (updateNumber) {
	          removeChildren(lineView.lineNumber);
	          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
	        }
	        cur = lineView.node.nextSibling;
	      }
	      lineN += lineView.size;
	    }
	    while (cur) cur = rm(cur);
	  }

	  // When an aspect of a line changes, a string is added to
	  // lineView.changes. This updates the relevant part of the line's
	  // DOM structure.
	  function updateLineForChanges(cm, lineView, lineN, dims) {
	    for (var j = 0; j < lineView.changes.length; j++) {
	      var type = lineView.changes[j];
	      if (type == "text") updateLineText(cm, lineView);
	      else if (type == "gutter") updateLineGutter(cm, lineView, lineN, dims);
	      else if (type == "class") updateLineClasses(lineView);
	      else if (type == "widget") updateLineWidgets(cm, lineView, dims);
	    }
	    lineView.changes = null;
	  }

	  // Lines with gutter elements, widgets or a background class need to
	  // be wrapped, and have the extra elements added to the wrapper div
	  function ensureLineWrapped(lineView) {
	    if (lineView.node == lineView.text) {
	      lineView.node = elt("div", null, null, "position: relative");
	      if (lineView.text.parentNode)
	        lineView.text.parentNode.replaceChild(lineView.node, lineView.text);
	      lineView.node.appendChild(lineView.text);
	      if (ie && ie_version < 8) lineView.node.style.zIndex = 2;
	    }
	    return lineView.node;
	  }

	  function updateLineBackground(lineView) {
	    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
	    if (cls) cls += " CodeMirror-linebackground";
	    if (lineView.background) {
	      if (cls) lineView.background.className = cls;
	      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
	    } else if (cls) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
	    }
	  }

	  // Wrapper around buildLineContent which will reuse the structure
	  // in display.externalMeasured when possible.
	  function getLineContent(cm, lineView) {
	    var ext = cm.display.externalMeasured;
	    if (ext && ext.line == lineView.line) {
	      cm.display.externalMeasured = null;
	      lineView.measure = ext.measure;
	      return ext.built;
	    }
	    return buildLineContent(cm, lineView);
	  }

	  // Redraw the line's text. Interacts with the background and text
	  // classes because the mode may output tokens that influence these
	  // classes.
	  function updateLineText(cm, lineView) {
	    var cls = lineView.text.className;
	    var built = getLineContent(cm, lineView);
	    if (lineView.text == lineView.node) lineView.node = built.pre;
	    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
	    lineView.text = built.pre;
	    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	      lineView.bgClass = built.bgClass;
	      lineView.textClass = built.textClass;
	      updateLineClasses(lineView);
	    } else if (cls) {
	      lineView.text.className = cls;
	    }
	  }

	  function updateLineClasses(lineView) {
	    updateLineBackground(lineView);
	    if (lineView.line.wrapClass)
	      ensureLineWrapped(lineView).className = lineView.line.wrapClass;
	    else if (lineView.node != lineView.text)
	      lineView.node.className = "";
	    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
	    lineView.text.className = textClass || "";
	  }

	  function updateLineGutter(cm, lineView, lineN, dims) {
	    if (lineView.gutter) {
	      lineView.node.removeChild(lineView.gutter);
	      lineView.gutter = null;
	    }
	    if (lineView.gutterBackground) {
	      lineView.node.removeChild(lineView.gutterBackground);
	      lineView.gutterBackground = null;
	    }
	    if (lineView.line.gutterClass) {
	      var wrap = ensureLineWrapped(lineView);
	      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
	                                      "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) +
	                                      "px; width: " + dims.gutterTotalWidth + "px");
	      wrap.insertBefore(lineView.gutterBackground, lineView.text);
	    }
	    var markers = lineView.line.gutterMarkers;
	    if (cm.options.lineNumbers || markers) {
	      var wrap = ensureLineWrapped(lineView);
	      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " +
	                                             (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
	      cm.display.input.setUneditable(gutterWrap);
	      wrap.insertBefore(gutterWrap, lineView.text);
	      if (lineView.line.gutterClass)
	        gutterWrap.className += " " + lineView.line.gutterClass;
	      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	        lineView.lineNumber = gutterWrap.appendChild(
	          elt("div", lineNumberFor(cm.options, lineN),
	              "CodeMirror-linenumber CodeMirror-gutter-elt",
	              "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: "
	              + cm.display.lineNumInnerWidth + "px"));
	      if (markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
	        var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
	        if (found)
	          gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
	                                     dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
	      }
	    }
	  }

	  function updateLineWidgets(cm, lineView, dims) {
	    if (lineView.alignable) lineView.alignable = null;
	    for (var node = lineView.node.firstChild, next; node; node = next) {
	      var next = node.nextSibling;
	      if (node.className == "CodeMirror-linewidget")
	        lineView.node.removeChild(node);
	    }
	    insertLineWidgets(cm, lineView, dims);
	  }

	  // Build a line's DOM representation from scratch
	  function buildLineElement(cm, lineView, lineN, dims) {
	    var built = getLineContent(cm, lineView);
	    lineView.text = lineView.node = built.pre;
	    if (built.bgClass) lineView.bgClass = built.bgClass;
	    if (built.textClass) lineView.textClass = built.textClass;

	    updateLineClasses(lineView);
	    updateLineGutter(cm, lineView, lineN, dims);
	    insertLineWidgets(cm, lineView, dims);
	    return lineView.node;
	  }

	  // A lineView may contain multiple logical lines (when merged by
	  // collapsed spans). The widgets for all of them need to be drawn.
	  function insertLineWidgets(cm, lineView, dims) {
	    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
	    if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	      insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false);
	  }

	  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	    if (!line.widgets) return;
	    var wrap = ensureLineWrapped(lineView);
	    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
	      if (!widget.handleMouseEvents) node.setAttribute("cm-ignore-events", "true");
	      positionLineWidget(widget, node, lineView, dims);
	      cm.display.input.setUneditable(node);
	      if (allowAbove && widget.above)
	        wrap.insertBefore(node, lineView.gutter || lineView.text);
	      else
	        wrap.appendChild(node);
	      signalLater(widget, "redraw");
	    }
	  }

	  function positionLineWidget(widget, node, lineView, dims) {
	    if (widget.noHScroll) {
	      (lineView.alignable || (lineView.alignable = [])).push(node);
	      var width = dims.wrapperWidth;
	      node.style.left = dims.fixedPos + "px";
	      if (!widget.coverGutter) {
	        width -= dims.gutterTotalWidth;
	        node.style.paddingLeft = dims.gutterTotalWidth + "px";
	      }
	      node.style.width = width + "px";
	    }
	    if (widget.coverGutter) {
	      node.style.zIndex = 5;
	      node.style.position = "relative";
	      if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
	    }
	  }

	  // POSITION OBJECT

	  // A Pos instance represents a position within the text.
	  var Pos = CodeMirror.Pos = function(line, ch) {
	    if (!(this instanceof Pos)) return new Pos(line, ch);
	    this.line = line; this.ch = ch;
	  };

	  // Compare two positions, return 0 if they are the same, a negative
	  // number when a is less, and a positive number otherwise.
	  var cmp = CodeMirror.cmpPos = function(a, b) { return a.line - b.line || a.ch - b.ch; };

	  function copyPos(x) {return Pos(x.line, x.ch);}
	  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a; }
	  function minPos(a, b) { return cmp(a, b) < 0 ? a : b; }

	  // INPUT HANDLING

	  function ensureFocus(cm) {
	    if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
	  }

	  // This will be set to a {lineWise: bool, text: [string]} object, so
	  // that, when pasting, we know what kind of selections the copied
	  // text was made out of.
	  var lastCopied = null;

	  function applyTextInput(cm, inserted, deleted, sel, origin) {
	    var doc = cm.doc;
	    cm.display.shift = false;
	    if (!sel) sel = doc.sel;

	    var paste = cm.state.pasteIncoming || origin == "paste";
	    var textLines = doc.splitLines(inserted), multiPaste = null
	    // When pasing N lines into N selections, insert one line per selection
	    if (paste && sel.ranges.length > 1) {
	      if (lastCopied && lastCopied.text.join("\n") == inserted) {
	        if (sel.ranges.length % lastCopied.text.length == 0) {
	          multiPaste = [];
	          for (var i = 0; i < lastCopied.text.length; i++)
	            multiPaste.push(doc.splitLines(lastCopied.text[i]));
	        }
	      } else if (textLines.length == sel.ranges.length) {
	        multiPaste = map(textLines, function(l) { return [l]; });
	      }
	    }

	    // Normal behavior is to insert the new text into every selection
	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      var from = range.from(), to = range.to();
	      if (range.empty()) {
	        if (deleted && deleted > 0) // Handle deletion
	          from = Pos(from.line, from.ch - deleted);
	        else if (cm.state.overwrite && !paste) // Handle overwrite
	          to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length));
	        else if (lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
	          from = to = Pos(from.line, 0)
	      }
	      var updateInput = cm.curOp.updateInput;
	      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
	                         origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")};
	      makeChange(cm.doc, changeEvent);
	      signalLater(cm, "inputRead", cm, changeEvent);
	    }
	    if (inserted && !paste)
	      triggerElectric(cm, inserted);

	    ensureCursorVisible(cm);
	    cm.curOp.updateInput = updateInput;
	    cm.curOp.typing = true;
	    cm.state.pasteIncoming = cm.state.cutIncoming = false;
	  }

	  function handlePaste(e, cm) {
	    var pasted = e.clipboardData && e.clipboardData.getData("Text");
	    if (pasted) {
	      e.preventDefault();
	      if (!cm.isReadOnly() && !cm.options.disableInput)
	        runInOp(cm, function() { applyTextInput(cm, pasted, 0, null, "paste"); });
	      return true;
	    }
	  }

	  function triggerElectric(cm, inserted) {
	    // When an 'electric' character is inserted, immediately trigger a reindent
	    if (!cm.options.electricChars || !cm.options.smartIndent) return;
	    var sel = cm.doc.sel;

	    for (var i = sel.ranges.length - 1; i >= 0; i--) {
	      var range = sel.ranges[i];
	      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) continue;
	      var mode = cm.getModeAt(range.head);
	      var indented = false;
	      if (mode.electricChars) {
	        for (var j = 0; j < mode.electricChars.length; j++)
	          if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	            indented = indentLine(cm, range.head.line, "smart");
	            break;
	          }
	      } else if (mode.electricInput) {
	        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
	          indented = indentLine(cm, range.head.line, "smart");
	      }
	      if (indented) signalLater(cm, "electricInput", cm, range.head.line);
	    }
	  }

	  function copyableRanges(cm) {
	    var text = [], ranges = [];
	    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	      var line = cm.doc.sel.ranges[i].head.line;
	      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
	      ranges.push(lineRange);
	      text.push(cm.getRange(lineRange.anchor, lineRange.head));
	    }
	    return {text: text, ranges: ranges};
	  }

	  function disableBrowserMagic(field, spellcheck) {
	    field.setAttribute("autocorrect", "off");
	    field.setAttribute("autocapitalize", "off");
	    field.setAttribute("spellcheck", !!spellcheck);
	  }

	  // TEXTAREA INPUT STYLE

	  function TextareaInput(cm) {
	    this.cm = cm;
	    // See input.poll and input.reset
	    this.prevInput = "";

	    // Flag that indicates whether we expect input to appear real soon
	    // now (after some event like 'keypress' or 'input') and are
	    // polling intensively.
	    this.pollingFast = false;
	    // Self-resetting timeout for the poller
	    this.polling = new Delayed();
	    // Tracks when input.reset has punted to just putting a short
	    // string into the textarea instead of the full selection.
	    this.inaccurateSelection = false;
	    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
	    this.hasSelection = false;
	    this.composing = null;
	  };

	  function hiddenTextarea() {
	    var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
	    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
	    // The textarea is kept positioned near the cursor to prevent the
	    // fact that it'll be scrolled into view on input from scrolling
	    // our fake cursor out of view. On webkit, when wrap=off, paste is
	    // very slow. So make the area wide instead.
	    if (webkit) te.style.width = "1000px";
	    else te.setAttribute("wrap", "off");
	    // If border: 0; -- iOS fails to open keyboard (issue #1287)
	    if (ios) te.style.border = "1px solid black";
	    disableBrowserMagic(te);
	    return div;
	  }

	  TextareaInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = this.cm;

	      // Wraps and hides input textarea
	      var div = this.wrapper = hiddenTextarea();
	      // The semihidden textarea that is focused when the editor is
	      // focused, and receives input.
	      var te = this.textarea = div.firstChild;
	      display.wrapper.insertBefore(div, display.wrapper.firstChild);

	      // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	      if (ios) te.style.width = "0px";

	      on(te, "input", function() {
	        if (ie && ie_version >= 9 && input.hasSelection) input.hasSelection = null;
	        input.poll();
	      });

	      on(te, "paste", function(e) {
	        if (signalDOMEvent(cm, e) || handlePaste(e, cm)) return

	        cm.state.pasteIncoming = true;
	        input.fastPoll();
	      });

	      function prepareCopyCut(e) {
	        if (signalDOMEvent(cm, e)) return
	        if (cm.somethingSelected()) {
	          lastCopied = {lineWise: false, text: cm.getSelections()};
	          if (input.inaccurateSelection) {
	            input.prevInput = "";
	            input.inaccurateSelection = false;
	            te.value = lastCopied.text.join("\n");
	            selectInput(te);
	          }
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = {lineWise: true, text: ranges.text};
	          if (e.type == "cut") {
	            cm.setSelections(ranges.ranges, null, sel_dontScroll);
	          } else {
	            input.prevInput = "";
	            te.value = ranges.text.join("\n");
	            selectInput(te);
	          }
	        }
	        if (e.type == "cut") cm.state.cutIncoming = true;
	      }
	      on(te, "cut", prepareCopyCut);
	      on(te, "copy", prepareCopyCut);

	      on(display.scroller, "paste", function(e) {
	        if (eventInWidget(display, e) || signalDOMEvent(cm, e)) return;
	        cm.state.pasteIncoming = true;
	        input.focus();
	      });

	      // Prevent normal selection in the editor (we handle our own)
	      on(display.lineSpace, "selectstart", function(e) {
	        if (!eventInWidget(display, e)) e_preventDefault(e);
	      });

	      on(te, "compositionstart", function() {
	        var start = cm.getCursor("from");
	        if (input.composing) input.composing.range.clear()
	        input.composing = {
	          start: start,
	          range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
	        };
	      });
	      on(te, "compositionend", function() {
	        if (input.composing) {
	          input.poll();
	          input.composing.range.clear();
	          input.composing = null;
	        }
	      });
	    },

	    prepareSelection: function() {
	      // Redraw the selection and/or cursor
	      var cm = this.cm, display = cm.display, doc = cm.doc;
	      var result = prepareSelection(cm);

	      // Move the hidden textarea near the cursor to prevent scrolling artifacts
	      if (cm.options.moveInputWithCursor) {
	        var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
	        var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
	        result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                            headPos.top + lineOff.top - wrapOff.top));
	        result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                             headPos.left + lineOff.left - wrapOff.left));
	      }

	      return result;
	    },

	    showSelection: function(drawn) {
	      var cm = this.cm, display = cm.display;
	      removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
	      removeChildrenAndAdd(display.selectionDiv, drawn.selection);
	      if (drawn.teTop != null) {
	        this.wrapper.style.top = drawn.teTop + "px";
	        this.wrapper.style.left = drawn.teLeft + "px";
	      }
	    },

	    // Reset the input to correspond to the selection (or to be empty,
	    // when not typing and nothing is selected)
	    reset: function(typing) {
	      if (this.contextMenuPending) return;
	      var minimal, selected, cm = this.cm, doc = cm.doc;
	      if (cm.somethingSelected()) {
	        this.prevInput = "";
	        var range = doc.sel.primary();
	        minimal = hasCopyEvent &&
	          (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000);
	        var content = minimal ? "-" : selected || cm.getSelection();
	        this.textarea.value = content;
	        if (cm.state.focused) selectInput(this.textarea);
	        if (ie && ie_version >= 9) this.hasSelection = content;
	      } else if (!typing) {
	        this.prevInput = this.textarea.value = "";
	        if (ie && ie_version >= 9) this.hasSelection = null;
	      }
	      this.inaccurateSelection = minimal;
	    },

	    getField: function() { return this.textarea; },

	    supportsTouch: function() { return false; },

	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
	        try { this.textarea.focus(); }
	        catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	      }
	    },

	    blur: function() { this.textarea.blur(); },

	    resetPosition: function() {
	      this.wrapper.style.top = this.wrapper.style.left = 0;
	    },

	    receivedFocus: function() { this.slowPoll(); },

	    // Poll for input changes, using the normal rate of polling. This
	    // runs as long as the editor is focused.
	    slowPoll: function() {
	      var input = this;
	      if (input.pollingFast) return;
	      input.polling.set(this.cm.options.pollInterval, function() {
	        input.poll();
	        if (input.cm.state.focused) input.slowPoll();
	      });
	    },

	    // When an event has just come in that is likely to add or change
	    // something in the input textarea, we poll faster, to ensure that
	    // the change appears on the screen quickly.
	    fastPoll: function() {
	      var missed = false, input = this;
	      input.pollingFast = true;
	      function p() {
	        var changed = input.poll();
	        if (!changed && !missed) {missed = true; input.polling.set(60, p);}
	        else {input.pollingFast = false; input.slowPoll();}
	      }
	      input.polling.set(20, p);
	    },

	    // Read input from the textarea, and update the document to match.
	    // When something is selected, it is present in the textarea, and
	    // selected (unless it is huge, in which case a placeholder is
	    // used). When nothing is selected, the cursor sits after previously
	    // seen text (can be empty), which is stored in prevInput (we must
	    // not reset the textarea when typing, because that breaks IME).
	    poll: function() {
	      var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
	      // Since this is called a *lot*, try to bail out as cheaply as
	      // possible when it is clear that nothing happened. hasSelection
	      // will be the case when there is a lot of text in the textarea,
	      // in which case reading its value would be expensive.
	      if (this.contextMenuPending || !cm.state.focused ||
	          (hasSelection(input) && !prevInput && !this.composing) ||
	          cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
	        return false;

	      var text = input.value;
	      // If nothing changed, bail.
	      if (text == prevInput && !cm.somethingSelected()) return false;
	      // Work around nonsensical selection resetting in IE9/10, and
	      // inexplicable appearance of private area unicode characters on
	      // some key combos in Mac (#2689).
	      if (ie && ie_version >= 9 && this.hasSelection === text ||
	          mac && /[\uf700-\uf7ff]/.test(text)) {
	        cm.display.input.reset();
	        return false;
	      }

	      if (cm.doc.sel == cm.display.selForContextMenu) {
	        var first = text.charCodeAt(0);
	        if (first == 0x200b && !prevInput) prevInput = "\u200b";
	        if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo"); }
	      }
	      // Find the part of the input that is actually new
	      var same = 0, l = Math.min(prevInput.length, text.length);
	      while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) ++same;

	      var self = this;
	      runInOp(cm, function() {
	        applyTextInput(cm, text.slice(same), prevInput.length - same,
	                       null, self.composing ? "*compose" : null);

	        // Don't leave long text in the textarea, since it makes further polling slow
	        if (text.length > 1000 || text.indexOf("\n") > -1) input.value = self.prevInput = "";
	        else self.prevInput = text;

	        if (self.composing) {
	          self.composing.range.clear();
	          self.composing.range = cm.markText(self.composing.start, cm.getCursor("to"),
	                                             {className: "CodeMirror-composing"});
	        }
	      });
	      return true;
	    },

	    ensurePolled: function() {
	      if (this.pollingFast && this.poll()) this.pollingFast = false;
	    },

	    onKeyPress: function() {
	      if (ie && ie_version >= 9) this.hasSelection = null;
	      this.fastPoll();
	    },

	    onContextMenu: function(e) {
	      var input = this, cm = input.cm, display = cm.display, te = input.textarea;
	      var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
	      if (!pos || presto) return; // Opera is difficult.

	      // Reset the current text selection only if the click is done outside of the selection
	      // and 'resetSelectionOnContextMenu' option is true.
	      var reset = cm.options.resetSelectionOnContextMenu;
	      if (reset && cm.doc.sel.contains(pos) == -1)
	        operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);

	      var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
	      input.wrapper.style.cssText = "position: absolute"
	      var wrapperBox = input.wrapper.getBoundingClientRect()
	      te.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (e.clientY - wrapperBox.top - 5) +
	        "px; left: " + (e.clientX - wrapperBox.left - 5) + "px; z-index: 1000; background: " +
	        (ie ? "rgba(255, 255, 255, .05)" : "transparent") +
	        "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
	      if (webkit) var oldScrollY = window.scrollY; // Work around Chrome issue (#2712)
	      display.input.focus();
	      if (webkit) window.scrollTo(null, oldScrollY);
	      display.input.reset();
	      // Adds "Select all" to context menu in FF
	      if (!cm.somethingSelected()) te.value = input.prevInput = " ";
	      input.contextMenuPending = true;
	      display.selForContextMenu = cm.doc.sel;
	      clearTimeout(display.detectingSelectAll);

	      // Select-all will be greyed out if there's nothing to select, so
	      // this adds a zero-width space so that we can later check whether
	      // it got selected.
	      function prepareSelectAllHack() {
	        if (te.selectionStart != null) {
	          var selected = cm.somethingSelected();
	          var extval = "\u200b" + (selected ? te.value : "");
	          te.value = "\u21da"; // Used to catch context-menu undo
	          te.value = extval;
	          input.prevInput = selected ? "" : "\u200b";
	          te.selectionStart = 1; te.selectionEnd = extval.length;
	          // Re-set this, in case some other handler touched the
	          // selection in the meantime.
	          display.selForContextMenu = cm.doc.sel;
	        }
	      }
	      function rehide() {
	        input.contextMenuPending = false;
	        input.wrapper.style.cssText = oldWrapperCSS
	        te.style.cssText = oldCSS;
	        if (ie && ie_version < 9) display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos);

	        // Try to detect the user choosing select-all
	        if (te.selectionStart != null) {
	          if (!ie || (ie && ie_version < 9)) prepareSelectAllHack();
	          var i = 0, poll = function() {
	            if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
	                te.selectionEnd > 0 && input.prevInput == "\u200b")
	              operation(cm, commands.selectAll)(cm);
	            else if (i++ < 10) display.detectingSelectAll = setTimeout(poll, 500);
	            else display.input.reset();
	          };
	          display.detectingSelectAll = setTimeout(poll, 200);
	        }
	      }

	      if (ie && ie_version >= 9) prepareSelectAllHack();
	      if (captureRightClick) {
	        e_stop(e);
	        var mouseup = function() {
	          off(window, "mouseup", mouseup);
	          setTimeout(rehide, 20);
	        };
	        on(window, "mouseup", mouseup);
	      } else {
	        setTimeout(rehide, 50);
	      }
	    },

	    readOnlyChanged: function(val) {
	      if (!val) this.reset();
	    },

	    setUneditable: nothing,

	    needsContentAttribute: false
	  }, TextareaInput.prototype);

	  // CONTENTEDITABLE INPUT STYLE

	  function ContentEditableInput(cm) {
	    this.cm = cm;
	    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
	    this.polling = new Delayed();
	    this.gracePeriod = false;
	  }

	  ContentEditableInput.prototype = copyObj({
	    init: function(display) {
	      var input = this, cm = input.cm;
	      var div = input.div = display.lineDiv;
	      disableBrowserMagic(div, cm.options.spellcheck);

	      on(div, "paste", function(e) {
	        if (signalDOMEvent(cm, e) || handlePaste(e, cm)) return
	        // IE doesn't fire input events, so we schedule a read for the pasted content in this way
	        if (ie_version <= 11) setTimeout(operation(cm, function() {
	          if (!input.pollContent()) regChange(cm);
	        }), 20)
	      })

	      on(div, "compositionstart", function(e) {
	        var data = e.data;
	        input.composing = {sel: cm.doc.sel, data: data, startData: data};
	        if (!data) return;
	        var prim = cm.doc.sel.primary();
	        var line = cm.getLine(prim.head.line);
	        var found = line.indexOf(data, Math.max(0, prim.head.ch - data.length));
	        if (found > -1 && found <= prim.head.ch)
	          input.composing.sel = simpleSelection(Pos(prim.head.line, found),
	                                                Pos(prim.head.line, found + data.length));
	      });
	      on(div, "compositionupdate", function(e) {
	        input.composing.data = e.data;
	      });
	      on(div, "compositionend", function(e) {
	        var ours = input.composing;
	        if (!ours) return;
	        if (e.data != ours.startData && !/\u200b/.test(e.data))
	          ours.data = e.data;
	        // Need a small delay to prevent other code (input event,
	        // selection polling) from doing damage when fired right after
	        // compositionend.
	        setTimeout(function() {
	          if (!ours.handled)
	            input.applyComposition(ours);
	          if (input.composing == ours)
	            input.composing = null;
	        }, 50);
	      });

	      on(div, "touchstart", function() {
	        input.forceCompositionEnd();
	      });

	      on(div, "input", function() {
	        if (input.composing) return;
	        if (cm.isReadOnly() || !input.pollContent())
	          runInOp(input.cm, function() {regChange(cm);});
	      });

	      function onCopyCut(e) {
	        if (signalDOMEvent(cm, e)) return
	        if (cm.somethingSelected()) {
	          lastCopied = {lineWise: false, text: cm.getSelections()};
	          if (e.type == "cut") cm.replaceSelection("", null, "cut");
	        } else if (!cm.options.lineWiseCopyCut) {
	          return;
	        } else {
	          var ranges = copyableRanges(cm);
	          lastCopied = {lineWise: true, text: ranges.text};
	          if (e.type == "cut") {
	            cm.operation(function() {
	              cm.setSelections(ranges.ranges, 0, sel_dontScroll);
	              cm.replaceSelection("", null, "cut");
	            });
	          }
	        }
	        if (e.clipboardData) {
	          e.clipboardData.clearData();
	          var content = lastCopied.text.join("\n")
	          // iOS exposes the clipboard API, but seems to discard content inserted into it
	          e.clipboardData.setData("Text", content);
	          if (e.clipboardData.getData("Text") == content) {
	            e.preventDefault();
	            return
	          }
	        }
	        // Old-fashioned briefly-focus-a-textarea hack
	        var kludge = hiddenTextarea(), te = kludge.firstChild;
	        cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
	        te.value = lastCopied.text.join("\n");
	        var hadFocus = document.activeElement;
	        selectInput(te);
	        setTimeout(function() {
	          cm.display.lineSpace.removeChild(kludge);
	          hadFocus.focus();
	          if (hadFocus == div) input.showPrimarySelection()
	        }, 50);
	      }
	      on(div, "copy", onCopyCut);
	      on(div, "cut", onCopyCut);
	    },

	    prepareSelection: function() {
	      var result = prepareSelection(this.cm, false);
	      result.focus = this.cm.state.focused;
	      return result;
	    },

	    showSelection: function(info, takeFocus) {
	      if (!info || !this.cm.display.view.length) return;
	      if (info.focus || takeFocus) this.showPrimarySelection();
	      this.showMultipleSelections(info);
	    },

	    showPrimarySelection: function() {
	      var sel = window.getSelection(), prim = this.cm.doc.sel.primary();
	      var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset);
	      var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset);
	      if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
	          cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
	          cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
	        return;

	      var start = posToDOM(this.cm, prim.from());
	      var end = posToDOM(this.cm, prim.to());
	      if (!start && !end) return;

	      var view = this.cm.display.view;
	      var old = sel.rangeCount && sel.getRangeAt(0);
	      if (!start) {
	        start = {node: view[0].measure.map[2], offset: 0};
	      } else if (!end) { // FIXME dangerously hacky
	        var measure = view[view.length - 1].measure;
	        var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
	        end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
	      }

	      try { var rng = range(start.node, start.offset, end.offset, end.node); }
	      catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	      if (rng) {
	        if (!gecko && this.cm.state.focused) {
	          sel.collapse(start.node, start.offset);
	          if (!rng.collapsed) sel.addRange(rng);
	        } else {
	          sel.removeAllRanges();
	          sel.addRange(rng);
	        }
	        if (old && sel.anchorNode == null) sel.addRange(old);
	        else if (gecko) this.startGracePeriod();
	      }
	      this.rememberSelection();
	    },

	    startGracePeriod: function() {
	      var input = this;
	      clearTimeout(this.gracePeriod);
	      this.gracePeriod = setTimeout(function() {
	        input.gracePeriod = false;
	        if (input.selectionChanged())
	          input.cm.operation(function() { input.cm.curOp.selectionChanged = true; });
	      }, 20);
	    },

	    showMultipleSelections: function(info) {
	      removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
	      removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
	    },

	    rememberSelection: function() {
	      var sel = window.getSelection();
	      this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
	      this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
	    },

	    selectionInEditor: function() {
	      var sel = window.getSelection();
	      if (!sel.rangeCount) return false;
	      var node = sel.getRangeAt(0).commonAncestorContainer;
	      return contains(this.div, node);
	    },

	    focus: function() {
	      if (this.cm.options.readOnly != "nocursor") this.div.focus();
	    },
	    blur: function() { this.div.blur(); },
	    getField: function() { return this.div; },

	    supportsTouch: function() { return true; },

	    receivedFocus: function() {
	      var input = this;
	      if (this.selectionInEditor())
	        this.pollSelection();
	      else
	        runInOp(this.cm, function() { input.cm.curOp.selectionChanged = true; });

	      function poll() {
	        if (input.cm.state.focused) {
	          input.pollSelection();
	          input.polling.set(input.cm.options.pollInterval, poll);
	        }
	      }
	      this.polling.set(this.cm.options.pollInterval, poll);
	    },

	    selectionChanged: function() {
	      var sel = window.getSelection();
	      return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
	        sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
	    },

	    pollSelection: function() {
	      if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
	        var sel = window.getSelection(), cm = this.cm;
	        this.rememberSelection();
	        var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
	        var head = domToPos(cm, sel.focusNode, sel.focusOffset);
	        if (anchor && head) runInOp(cm, function() {
	          setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
	          if (anchor.bad || head.bad) cm.curOp.selectionChanged = true;
	        });
	      }
	    },

	    pollContent: function() {
	      var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
	      var from = sel.from(), to = sel.to();
	      if (from.line < display.viewFrom || to.line > display.viewTo - 1) return false;

	      var fromIndex;
	      if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
	        var fromLine = lineNo(display.view[0].line);
	        var fromNode = display.view[0].node;
	      } else {
	        var fromLine = lineNo(display.view[fromIndex].line);
	        var fromNode = display.view[fromIndex - 1].node.nextSibling;
	      }
	      var toIndex = findViewIndex(cm, to.line);
	      if (toIndex == display.view.length - 1) {
	        var toLine = display.viewTo - 1;
	        var toNode = display.lineDiv.lastChild;
	      } else {
	        var toLine = lineNo(display.view[toIndex + 1].line) - 1;
	        var toNode = display.view[toIndex + 1].node.previousSibling;
	      }

	      var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
	      var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
	      while (newText.length > 1 && oldText.length > 1) {
	        if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
	        else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
	        else break;
	      }

	      var cutFront = 0, cutEnd = 0;
	      var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
	      while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
	        ++cutFront;
	      var newBot = lst(newText), oldBot = lst(oldText);
	      var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
	                               oldBot.length - (oldText.length == 1 ? cutFront : 0));
	      while (cutEnd < maxCutEnd &&
	             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
	        ++cutEnd;

	      newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd);
	      newText[0] = newText[0].slice(cutFront);

	      var chFrom = Pos(fromLine, cutFront);
	      var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
	      if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
	        replaceRange(cm.doc, newText, chFrom, chTo, "+input");
	        return true;
	      }
	    },

	    ensurePolled: function() {
	      this.forceCompositionEnd();
	    },
	    reset: function() {
	      this.forceCompositionEnd();
	    },
	    forceCompositionEnd: function() {
	      if (!this.composing || this.composing.handled) return;
	      this.applyComposition(this.composing);
	      this.composing.handled = true;
	      this.div.blur();
	      this.div.focus();
	    },
	    applyComposition: function(composing) {
	      if (this.cm.isReadOnly())
	        operation(this.cm, regChange)(this.cm)
	      else if (composing.data && composing.data != composing.startData)
	        operation(this.cm, applyTextInput)(this.cm, composing.data, 0, composing.sel);
	    },

	    setUneditable: function(node) {
	      node.contentEditable = "false"
	    },

	    onKeyPress: function(e) {
	      e.preventDefault();
	      if (!this.cm.isReadOnly())
	        operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0);
	    },

	    readOnlyChanged: function(val) {
	      this.div.contentEditable = String(val != "nocursor")
	    },

	    onContextMenu: nothing,
	    resetPosition: nothing,

	    needsContentAttribute: true
	  }, ContentEditableInput.prototype);

	  function posToDOM(cm, pos) {
	    var view = findViewForLine(cm, pos.line);
	    if (!view || view.hidden) return null;
	    var line = getLine(cm.doc, pos.line);
	    var info = mapFromLineView(view, line, pos.line);

	    var order = getOrder(line), side = "left";
	    if (order) {
	      var partPos = getBidiPartAt(order, pos.ch);
	      side = partPos % 2 ? "right" : "left";
	    }
	    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
	    result.offset = result.collapse == "right" ? result.end : result.start;
	    return result;
	  }

	  function badPos(pos, bad) { if (bad) pos.bad = true; return pos; }

	  function domToPos(cm, node, offset) {
	    var lineNode;
	    if (node == cm.display.lineDiv) {
	      lineNode = cm.display.lineDiv.childNodes[offset];
	      if (!lineNode) return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true);
	      node = null; offset = 0;
	    } else {
	      for (lineNode = node;; lineNode = lineNode.parentNode) {
	        if (!lineNode || lineNode == cm.display.lineDiv) return null;
	        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) break;
	      }
	    }
	    for (var i = 0; i < cm.display.view.length; i++) {
	      var lineView = cm.display.view[i];
	      if (lineView.node == lineNode)
	        return locateNodeInLineView(lineView, node, offset);
	    }
	  }

	  function locateNodeInLineView(lineView, node, offset) {
	    var wrapper = lineView.text.firstChild, bad = false;
	    if (!node || !contains(wrapper, node)) return badPos(Pos(lineNo(lineView.line), 0), true);
	    if (node == wrapper) {
	      bad = true;
	      node = wrapper.childNodes[offset];
	      offset = 0;
	      if (!node) {
	        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
	        return badPos(Pos(lineNo(line), line.text.length), bad);
	      }
	    }

	    var textNode = node.nodeType == 3 ? node : null, topNode = node;
	    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	      textNode = node.firstChild;
	      if (offset) offset = textNode.nodeValue.length;
	    }
	    while (topNode.parentNode != wrapper) topNode = topNode.parentNode;
	    var measure = lineView.measure, maps = measure.maps;

	    function find(textNode, topNode, offset) {
	      for (var i = -1; i < (maps ? maps.length : 0); i++) {
	        var map = i < 0 ? measure.map : maps[i];
	        for (var j = 0; j < map.length; j += 3) {
	          var curNode = map[j + 2];
	          if (curNode == textNode || curNode == topNode) {
	            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
	            var ch = map[j] + offset;
	            if (offset < 0 || curNode != textNode) ch = map[j + (offset ? 1 : 0)];
	            return Pos(line, ch);
	          }
	        }
	      }
	    }
	    var found = find(textNode, topNode, offset);
	    if (found) return badPos(found, bad);

	    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	      found = find(after, after.firstChild, 0);
	      if (found)
	        return badPos(Pos(found.line, found.ch - dist), bad);
	      else
	        dist += after.textContent.length;
	    }
	    for (var before = topNode.previousSibling, dist = offset; before; before = before.previousSibling) {
	      found = find(before, before.firstChild, -1);
	      if (found)
	        return badPos(Pos(found.line, found.ch + dist), bad);
	      else
	        dist += before.textContent.length;
	    }
	  }

	  function domTextBetween(cm, from, to, fromLine, toLine) {
	    var text = "", closing = false, lineSep = cm.doc.lineSeparator();
	    function recognizeMarker(id) { return function(marker) { return marker.id == id; }; }
	    function walk(node) {
	      if (node.nodeType == 1) {
	        var cmText = node.getAttribute("cm-text");
	        if (cmText != null) {
	          if (cmText == "") cmText = node.textContent.replace(/\u200b/g, "");
	          text += cmText;
	          return;
	        }
	        var markerID = node.getAttribute("cm-marker"), range;
	        if (markerID) {
	          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
	          if (found.length && (range = found[0].find()))
	            text += getBetween(cm.doc, range.from, range.to).join(lineSep);
	          return;
	        }
	        if (node.getAttribute("contenteditable") == "false") return;
	        for (var i = 0; i < node.childNodes.length; i++)
	          walk(node.childNodes[i]);
	        if (/^(pre|div|p)$/i.test(node.nodeName))
	          closing = true;
	      } else if (node.nodeType == 3) {
	        var val = node.nodeValue;
	        if (!val) return;
	        if (closing) {
	          text += lineSep;
	          closing = false;
	        }
	        text += val;
	      }
	    }
	    for (;;) {
	      walk(from);
	      if (from == to) break;
	      from = from.nextSibling;
	    }
	    return text;
	  }

	  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

	  // SELECTION / CURSOR

	  // Selection objects are immutable. A new one is created every time
	  // the selection changes. A selection is one or more non-overlapping
	  // (and non-touching) ranges, sorted, and an integer that indicates
	  // which one is the primary selection (the one that's scrolled into
	  // view, that getCursor returns, etc).
	  function Selection(ranges, primIndex) {
	    this.ranges = ranges;
	    this.primIndex = primIndex;
	  }

	  Selection.prototype = {
	    primary: function() { return this.ranges[this.primIndex]; },
	    equals: function(other) {
	      if (other == this) return true;
	      if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return false;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var here = this.ranges[i], there = other.ranges[i];
	        if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) return false;
	      }
	      return true;
	    },
	    deepCopy: function() {
	      for (var out = [], i = 0; i < this.ranges.length; i++)
	        out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
	      return new Selection(out, this.primIndex);
	    },
	    somethingSelected: function() {
	      for (var i = 0; i < this.ranges.length; i++)
	        if (!this.ranges[i].empty()) return true;
	      return false;
	    },
	    contains: function(pos, end) {
	      if (!end) end = pos;
	      for (var i = 0; i < this.ranges.length; i++) {
	        var range = this.ranges[i];
	        if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	          return i;
	      }
	      return -1;
	    }
	  };

	  function Range(anchor, head) {
	    this.anchor = anchor; this.head = head;
	  }

	  Range.prototype = {
	    from: function() { return minPos(this.anchor, this.head); },
	    to: function() { return maxPos(this.anchor, this.head); },
	    empty: function() {
	      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
	    }
	  };

	  // Take an unsorted, potentially overlapping set of ranges, and
	  // build a selection out of it. 'Consumes' ranges array (modifying
	  // it).
	  function normalizeSelection(ranges, primIndex) {
	    var prim = ranges[primIndex];
	    ranges.sort(function(a, b) { return cmp(a.from(), b.from()); });
	    primIndex = indexOf(ranges, prim);
	    for (var i = 1; i < ranges.length; i++) {
	      var cur = ranges[i], prev = ranges[i - 1];
	      if (cmp(prev.to(), cur.from()) >= 0) {
	        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
	        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
	        if (i <= primIndex) --primIndex;
	        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
	      }
	    }
	    return new Selection(ranges, primIndex);
	  }

	  function simpleSelection(anchor, head) {
	    return new Selection([new Range(anchor, head || anchor)], 0);
	  }

	  // Most of the external API clips given positions to make sure they
	  // actually exist within the document.
	  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));}
	  function clipPos(doc, pos) {
	    if (pos.line < doc.first) return Pos(doc.first, 0);
	    var last = doc.first + doc.size - 1;
	    if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
	    return clipToLen(pos, getLine(doc, pos.line).text.length);
	  }
	  function clipToLen(pos, linelen) {
	    var ch = pos.ch;
	    if (ch == null || ch > linelen) return Pos(pos.line, linelen);
	    else if (ch < 0) return Pos(pos.line, 0);
	    else return pos;
	  }
	  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size;}
	  function clipPosArray(doc, array) {
	    for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
	    return out;
	  }

	  // SELECTION UPDATES

	  // The 'scroll' parameter given to many of these indicated whether
	  // the new cursor position should be scrolled into view after
	  // modifying the selection.

	  // If shift is held or the extend flag is set, extends a range to
	  // include a given position (and optionally a second position).
	  // Otherwise, simply returns the range between the given positions.
	  // Used for cursor motion and such.
	  function extendRange(doc, range, head, other) {
	    if (doc.cm && doc.cm.display.shift || doc.extend) {
	      var anchor = range.anchor;
	      if (other) {
	        var posBefore = cmp(head, anchor) < 0;
	        if (posBefore != (cmp(other, anchor) < 0)) {
	          anchor = head;
	          head = other;
	        } else if (posBefore != (cmp(head, other) < 0)) {
	          head = other;
	        }
	      }
	      return new Range(anchor, head);
	    } else {
	      return new Range(other || head, head);
	    }
	  }

	  // Extend the primary selection range, discard the rest.
	  function extendSelection(doc, head, other, options) {
	    setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options);
	  }

	  // Extend all selections (pos is an array of selections with length
	  // equal the number of selections)
	  function extendSelections(doc, heads, options) {
	    for (var out = [], i = 0; i < doc.sel.ranges.length; i++)
	      out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
	    var newSel = normalizeSelection(out, doc.sel.primIndex);
	    setSelection(doc, newSel, options);
	  }

	  // Updates a single range in the selection.
	  function replaceOneSelection(doc, i, range, options) {
	    var ranges = doc.sel.ranges.slice(0);
	    ranges[i] = range;
	    setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
	  }

	  // Reset the selection to a single range.
	  function setSimpleSelection(doc, anchor, head, options) {
	    setSelection(doc, simpleSelection(anchor, head), options);
	  }

	  // Give beforeSelectionChange handlers a change to influence a
	  // selection update.
	  function filterSelectionChange(doc, sel, options) {
	    var obj = {
	      ranges: sel.ranges,
	      update: function(ranges) {
	        this.ranges = [];
	        for (var i = 0; i < ranges.length; i++)
	          this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                     clipPos(doc, ranges[i].head));
	      },
	      origin: options && options.origin
	    };
	    signal(doc, "beforeSelectionChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
	    if (obj.ranges != sel.ranges) return normalizeSelection(obj.ranges, obj.ranges.length - 1);
	    else return sel;
	  }

	  function setSelectionReplaceHistory(doc, sel, options) {
	    var done = doc.history.done, last = lst(done);
	    if (last && last.ranges) {
	      done[done.length - 1] = sel;
	      setSelectionNoUndo(doc, sel, options);
	    } else {
	      setSelection(doc, sel, options);
	    }
	  }

	  // Set a new selection.
	  function setSelection(doc, sel, options) {
	    setSelectionNoUndo(doc, sel, options);
	    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
	  }

	  function setSelectionNoUndo(doc, sel, options) {
	    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	      sel = filterSelectionChange(doc, sel, options);

	    var bias = options && options.bias ||
	      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
	    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

	    if (!(options && options.scroll === false) && doc.cm)
	      ensureCursorVisible(doc.cm);
	  }

	  function setSelectionInner(doc, sel) {
	    if (sel.equals(doc.sel)) return;

	    doc.sel = sel;

	    if (doc.cm) {
	      doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true;
	      signalCursorActivity(doc.cm);
	    }
	    signalLater(doc, "cursorActivity", doc);
	  }

	  // Verify that the selection does not partially select any atomic
	  // marked ranges.
	  function reCheckSelection(doc) {
	    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll);
	  }

	  // Return a selection that does not partially select any atomic
	  // ranges.
	  function skipAtomicInSelection(doc, sel, bias, mayClear) {
	    var out;
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range = sel.ranges[i];
	      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
	      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
	      var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
	      if (out || newAnchor != range.anchor || newHead != range.head) {
	        if (!out) out = sel.ranges.slice(0, i);
	        out[i] = new Range(newAnchor, newHead);
	      }
	    }
	    return out ? normalizeSelection(out, sel.primIndex) : sel;
	  }

	  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
	    var line = getLine(doc, pos.line);
	    if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	      var sp = line.markedSpans[i], m = sp.marker;
	      if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
	          (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
	        if (mayClear) {
	          signal(m, "beforeCursorEnter");
	          if (m.explicitlyCleared) {
	            if (!line.markedSpans) break;
	            else {--i; continue;}
	          }
	        }
	        if (!m.atomic) continue;

	        if (oldPos) {
	          var near = m.find(dir < 0 ? 1 : -1), diff;
	          if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
	            near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null);
	          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
	            return skipAtomicInner(doc, near, pos, dir, mayClear);
	        }

	        var far = m.find(dir < 0 ? -1 : 1);
	        if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
	          far = movePos(doc, far, dir, far.line == pos.line ? line : null);
	        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null;
	      }
	    }
	    return pos;
	  }

	  // Ensure a given position is not inside an atomic range.
	  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
	    var dir = bias || 1;
	    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
	        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
	        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
	    if (!found) {
	      doc.cantEdit = true;
	      return Pos(doc.first, 0);
	    }
	    return found;
	  }

	  function movePos(doc, pos, dir, line) {
	    if (dir < 0 && pos.ch == 0) {
	      if (pos.line > doc.first) return clipPos(doc, Pos(pos.line - 1));
	      else return null;
	    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
	      if (pos.line < doc.first + doc.size - 1) return Pos(pos.line + 1, 0);
	      else return null;
	    } else {
	      return new Pos(pos.line, pos.ch + dir);
	    }
	  }

	  // SELECTION DRAWING

	  function updateSelection(cm) {
	    cm.display.input.showSelection(cm.display.input.prepareSelection());
	  }

	  function prepareSelection(cm, primary) {
	    var doc = cm.doc, result = {};
	    var curFragment = result.cursors = document.createDocumentFragment();
	    var selFragment = result.selection = document.createDocumentFragment();

	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      if (primary === false && i == doc.sel.primIndex) continue;
	      var range = doc.sel.ranges[i];
	      if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) continue;
	      var collapsed = range.empty();
	      if (collapsed || cm.options.showCursorWhenSelecting)
	        drawSelectionCursor(cm, range.head, curFragment);
	      if (!collapsed)
	        drawSelectionRange(cm, range, selFragment);
	    }
	    return result;
	  }

	  // Draws a cursor for the given range
	  function drawSelectionCursor(cm, head, output) {
	    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

	    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
	    cursor.style.left = pos.left + "px";
	    cursor.style.top = pos.top + "px";
	    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

	    if (pos.other) {
	      // Secondary cursor, shown when on a 'jump' in bi-directional text
	      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
	      otherCursor.style.display = "";
	      otherCursor.style.left = pos.other.left + "px";
	      otherCursor.style.top = pos.other.top + "px";
	      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
	    }
	  }

	  // Draws the given range as a highlighted selection
	  function drawSelectionRange(cm, range, output) {
	    var display = cm.display, doc = cm.doc;
	    var fragment = document.createDocumentFragment();
	    var padding = paddingH(cm.display), leftSide = padding.left;
	    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;

	    function add(left, top, width, bottom) {
	      if (top < 0) top = 0;
	      top = Math.round(top);
	      bottom = Math.round(bottom);
	      fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
	                               "px; top: " + top + "px; width: " + (width == null ? rightSide - left : width) +
	                               "px; height: " + (bottom - top) + "px"));
	    }

	    function drawForLine(line, fromArg, toArg) {
	      var lineObj = getLine(doc, line);
	      var lineLen = lineObj.text.length;
	      var start, end;
	      function coords(ch, bias) {
	        return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
	      }

	      iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
	        var leftPos = coords(from, "left"), rightPos, left, right;
	        if (from == to) {
	          rightPos = leftPos;
	          left = right = leftPos.left;
	        } else {
	          rightPos = coords(to - 1, "right");
	          if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp; }
	          left = leftPos.left;
	          right = rightPos.right;
	        }
	        if (fromArg == null && from == 0) left = leftSide;
	        if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	          add(left, leftPos.top, null, leftPos.bottom);
	          left = leftSide;
	          if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
	        }
	        if (toArg == null && to == lineLen) right = rightSide;
	        if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	          start = leftPos;
	        if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	          end = rightPos;
	        if (left < leftSide + 1) left = leftSide;
	        add(left, rightPos.top, right - left, rightPos.bottom);
	      });
	      return {start: start, end: end};
	    }

	    var sFrom = range.from(), sTo = range.to();
	    if (sFrom.line == sTo.line) {
	      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
	    } else {
	      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
	      var singleVLine = visualLine(fromLine) == visualLine(toLine);
	      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
	      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
	      if (singleVLine) {
	        if (leftEnd.top < rightStart.top - 2) {
	          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
	          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
	        } else {
	          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
	        }
	      }
	      if (leftEnd.bottom < rightStart.top)
	        add(leftSide, leftEnd.bottom, null, rightStart.top);
	    }

	    output.appendChild(fragment);
	  }

	  // Cursor-blinking
	  function restartBlink(cm) {
	    if (!cm.state.focused) return;
	    var display = cm.display;
	    clearInterval(display.blinker);
	    var on = true;
	    display.cursorDiv.style.visibility = "";
	    if (cm.options.cursorBlinkRate > 0)
	      display.blinker = setInterval(function() {
	        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
	      }, cm.options.cursorBlinkRate);
	    else if (cm.options.cursorBlinkRate < 0)
	      display.cursorDiv.style.visibility = "hidden";
	  }

	  // HIGHLIGHT WORKER

	  function startWorker(cm, time) {
	    if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	      cm.state.highlight.set(time, bind(highlightWorker, cm));
	  }

	  function highlightWorker(cm) {
	    var doc = cm.doc;
	    if (doc.frontier < doc.first) doc.frontier = doc.first;
	    if (doc.frontier >= cm.display.viewTo) return;
	    var end = +new Date + cm.options.workTime;
	    var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
	    var changedLines = [];

	    doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
	      if (doc.frontier >= cm.display.viewFrom) { // Visible
	        var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength;
	        var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true);
	        line.styles = highlighted.styles;
	        var oldCls = line.styleClasses, newCls = highlighted.classes;
	        if (newCls) line.styleClasses = newCls;
	        else if (oldCls) line.styleClasses = null;
	        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
	        for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
	        if (ischange) changedLines.push(doc.frontier);
	        line.stateAfter = tooLong ? state : copyState(doc.mode, state);
	      } else {
	        if (line.text.length <= cm.options.maxHighlightLength)
	          processLine(cm, line.text, state);
	        line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
	      }
	      ++doc.frontier;
	      if (+new Date > end) {
	        startWorker(cm, cm.options.workDelay);
	        return true;
	      }
	    });
	    if (changedLines.length) runInOp(cm, function() {
	      for (var i = 0; i < changedLines.length; i++)
	        regLineChange(cm, changedLines[i], "text");
	    });
	  }

	  // Finds the line to start with when starting a parse. Tries to
	  // find a line with a stateAfter, so that it can start with a
	  // valid state. If that fails, it returns the line with the
	  // smallest indentation, which tends to need the least context to
	  // parse correctly.
	  function findStartLine(cm, n, precise) {
	    var minindent, minline, doc = cm.doc;
	    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
	    for (var search = n; search > lim; --search) {
	      if (search <= doc.first) return doc.first;
	      var line = getLine(doc, search - 1);
	      if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
	      var indented = countColumn(line.text, null, cm.options.tabSize);
	      if (minline == null || minindent > indented) {
	        minline = search - 1;
	        minindent = indented;
	      }
	    }
	    return minline;
	  }

	  function getStateBefore(cm, n, precise) {
	    var doc = cm.doc, display = cm.display;
	    if (!doc.mode.startState) return true;
	    var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter;
	    if (!state) state = startState(doc.mode);
	    else state = copyState(doc.mode, state);
	    doc.iter(pos, n, function(line) {
	      processLine(cm, line.text, state);
	      var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
	      line.stateAfter = save ? copyState(doc.mode, state) : null;
	      ++pos;
	    });
	    if (precise) doc.frontier = pos;
	    return state;
	  }

	  // POSITION MEASUREMENT

	  function paddingTop(display) {return display.lineSpace.offsetTop;}
	  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight;}
	  function paddingH(display) {
	    if (display.cachedPaddingH) return display.cachedPaddingH;
	    var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
	    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
	    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
	    if (!isNaN(data.left) && !isNaN(data.right)) display.cachedPaddingH = data;
	    return data;
	  }

	  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth; }
	  function displayWidth(cm) {
	    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
	  }
	  function displayHeight(cm) {
	    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
	  }

	  // Ensure the lineView.wrapping.heights array is populated. This is
	  // an array of bottom offsets for the lines that make up a drawn
	  // line. When lineWrapping is on, there might be more than one
	  // height.
	  function ensureLineHeights(cm, lineView, rect) {
	    var wrapping = cm.options.lineWrapping;
	    var curWidth = wrapping && displayWidth(cm);
	    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	      var heights = lineView.measure.heights = [];
	      if (wrapping) {
	        lineView.measure.width = curWidth;
	        var rects = lineView.text.firstChild.getClientRects();
	        for (var i = 0; i < rects.length - 1; i++) {
	          var cur = rects[i], next = rects[i + 1];
	          if (Math.abs(cur.bottom - next.bottom) > 2)
	            heights.push((cur.bottom + next.top) / 2 - rect.top);
	        }
	      }
	      heights.push(rect.bottom - rect.top);
	    }
	  }

	  // Find a line map (mapping character offsets to text nodes) and a
	  // measurement cache for the given line number. (A line view might
	  // contain multiple lines when collapsed ranges are present.)
	  function mapFromLineView(lineView, line, lineN) {
	    if (lineView.line == line)
	      return {map: lineView.measure.map, cache: lineView.measure.cache};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineView.rest[i] == line)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]};
	    for (var i = 0; i < lineView.rest.length; i++)
	      if (lineNo(lineView.rest[i]) > lineN)
	        return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i], before: true};
	  }

	  // Render a line into the hidden node display.externalMeasured. Used
	  // when measurement is needed for a line that's not in the viewport.
	  function updateExternalMeasurement(cm, line) {
	    line = visualLine(line);
	    var lineN = lineNo(line);
	    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
	    view.lineN = lineN;
	    var built = view.built = buildLineContent(cm, view);
	    view.text = built.pre;
	    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
	    return view;
	  }

	  // Get a {top, bottom, left, right} box (in line-local coordinates)
	  // for a given character.
	  function measureChar(cm, line, ch, bias) {
	    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
	  }

	  // Find a line view that corresponds to the given line number.
	  function findViewForLine(cm, lineN) {
	    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	      return cm.display.view[findViewIndex(cm, lineN)];
	    var ext = cm.display.externalMeasured;
	    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	      return ext;
	  }

	  // Measurement can be split in two steps, the set-up work that
	  // applies to the whole line, and the measurement of the actual
	  // character. Functions like coordsChar, that need to do a lot of
	  // measurements in a row, can thus ensure that the set-up work is
	  // only done once.
	  function prepareMeasureForLine(cm, line) {
	    var lineN = lineNo(line);
	    var view = findViewForLine(cm, lineN);
	    if (view && !view.text) {
	      view = null;
	    } else if (view && view.changes) {
	      updateLineForChanges(cm, view, lineN, getDimensions(cm));
	      cm.curOp.forceUpdate = true;
	    }
	    if (!view)
	      view = updateExternalMeasurement(cm, line);

	    var info = mapFromLineView(view, line, lineN);
	    return {
	      line: line, view: view, rect: null,
	      map: info.map, cache: info.cache, before: info.before,
	      hasHeights: false
	    };
	  }

	  // Given a prepared measurement object, measures the position of an
	  // actual character (or fetches it from the cache).
	  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	    if (prepared.before) ch = -1;
	    var key = ch + (bias || ""), found;
	    if (prepared.cache.hasOwnProperty(key)) {
	      found = prepared.cache[key];
	    } else {
	      if (!prepared.rect)
	        prepared.rect = prepared.view.text.getBoundingClientRect();
	      if (!prepared.hasHeights) {
	        ensureLineHeights(cm, prepared.view, prepared.rect);
	        prepared.hasHeights = true;
	      }
	      found = measureCharInner(cm, prepared, ch, bias);
	      if (!found.bogus) prepared.cache[key] = found;
	    }
	    return {left: found.left, right: found.right,
	            top: varHeight ? found.rtop : found.top,
	            bottom: varHeight ? found.rbottom : found.bottom};
	  }

	  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

	  function nodeAndOffsetInLineMap(map, ch, bias) {
	    var node, start, end, collapse;
	    // First, search the line map for the text node corresponding to,
	    // or closest to, the target character.
	    for (var i = 0; i < map.length; i += 3) {
	      var mStart = map[i], mEnd = map[i + 1];
	      if (ch < mStart) {
	        start = 0; end = 1;
	        collapse = "left";
	      } else if (ch < mEnd) {
	        start = ch - mStart;
	        end = start + 1;
	      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
	        end = mEnd - mStart;
	        start = end - 1;
	        if (ch >= mEnd) collapse = "right";
	      }
	      if (start != null) {
	        node = map[i + 2];
	        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	          collapse = bias;
	        if (bias == "left" && start == 0)
	          while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
	            node = map[(i -= 3) + 2];
	            collapse = "left";
	          }
	        if (bias == "right" && start == mEnd - mStart)
	          while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
	            node = map[(i += 3) + 2];
	            collapse = "right";
	          }
	        break;
	      }
	    }
	    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd};
	  }

	  function getUsefulRect(rects, bias) {
	    var rect = nullRect
	    if (bias == "left") for (var i = 0; i < rects.length; i++) {
	      if ((rect = rects[i]).left != rect.right) break
	    } else for (var i = rects.length - 1; i >= 0; i--) {
	      if ((rect = rects[i]).left != rect.right) break
	    }
	    return rect
	  }

	  function measureCharInner(cm, prepared, ch, bias) {
	    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
	    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

	    var rect;
	    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	      for (var i = 0; i < 4; i++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) --start;
	        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) ++end;
	        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
	          rect = node.parentNode.getBoundingClientRect();
	        else
	          rect = getUsefulRect(range(node, start, end).getClientRects(), bias)
	        if (rect.left || rect.right || start == 0) break;
	        end = start;
	        start = start - 1;
	        collapse = "right";
	      }
	      if (ie && ie_version < 11) rect = maybeUpdateRectForZooming(cm.display.measure, rect);
	    } else { // If it is a widget, simply get the box for the whole widget.
	      if (start > 0) collapse = bias = "right";
	      var rects;
	      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	        rect = rects[bias == "right" ? rects.length - 1 : 0];
	      else
	        rect = node.getBoundingClientRect();
	    }
	    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	      var rSpan = node.parentNode.getClientRects()[0];
	      if (rSpan)
	        rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom};
	      else
	        rect = nullRect;
	    }

	    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
	    var mid = (rtop + rbot) / 2;
	    var heights = prepared.view.measure.heights;
	    for (var i = 0; i < heights.length - 1; i++)
	      if (mid < heights[i]) break;
	    var top = i ? heights[i - 1] : 0, bot = heights[i];
	    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                  top: top, bottom: bot};
	    if (!rect.left && !rect.right) result.bogus = true;
	    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

	    return result;
	  }

	  // Work around problem with bounding client rects on ranges being
	  // returned incorrectly when zoomed on IE10 and below.
	  function maybeUpdateRectForZooming(measure, rect) {
	    if (!window.screen || screen.logicalXDPI == null ||
	        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	      return rect;
	    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
	    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
	    return {left: rect.left * scaleX, right: rect.right * scaleX,
	            top: rect.top * scaleY, bottom: rect.bottom * scaleY};
	  }

	  function clearLineMeasurementCacheFor(lineView) {
	    if (lineView.measure) {
	      lineView.measure.cache = {};
	      lineView.measure.heights = null;
	      if (lineView.rest) for (var i = 0; i < lineView.rest.length; i++)
	        lineView.measure.caches[i] = {};
	    }
	  }

	  function clearLineMeasurementCache(cm) {
	    cm.display.externalMeasure = null;
	    removeChildren(cm.display.lineMeasure);
	    for (var i = 0; i < cm.display.view.length; i++)
	      clearLineMeasurementCacheFor(cm.display.view[i]);
	  }

	  function clearCaches(cm) {
	    clearLineMeasurementCache(cm);
	    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
	    if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
	    cm.display.lineNumChars = null;
	  }

	  function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft; }
	  function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop; }

	  // Converts a {top, bottom, left, right} box from line-local
	  // coordinates into another coordinate system. Context may be one of
	  // "line", "div" (display.lineDiv), "local"/null (editor), "window",
	  // or "page".
	  function intoCoordSystem(cm, lineObj, rect, context) {
	    if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
	      var size = widgetHeight(lineObj.widgets[i]);
	      rect.top += size; rect.bottom += size;
	    }
	    if (context == "line") return rect;
	    if (!context) context = "local";
	    var yOff = heightAtLine(lineObj);
	    if (context == "local") yOff += paddingTop(cm.display);
	    else yOff -= cm.display.viewOffset;
	    if (context == "page" || context == "window") {
	      var lOff = cm.display.lineSpace.getBoundingClientRect();
	      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
	      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
	      rect.left += xOff; rect.right += xOff;
	    }
	    rect.top += yOff; rect.bottom += yOff;
	    return rect;
	  }

	  // Coverts a box from "div" coords to another coordinate system.
	  // Context may be "window", "page", "div", or "local"/null.
	  function fromCoordSystem(cm, coords, context) {
	    if (context == "div") return coords;
	    var left = coords.left, top = coords.top;
	    // First move into "page" coordinate system
	    if (context == "page") {
	      left -= pageScrollX();
	      top -= pageScrollY();
	    } else if (context == "local" || !context) {
	      var localBox = cm.display.sizer.getBoundingClientRect();
	      left += localBox.left;
	      top += localBox.top;
	    }

	    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
	    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top};
	  }

	  function charCoords(cm, pos, context, lineObj, bias) {
	    if (!lineObj) lineObj = getLine(cm.doc, pos.line);
	    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
	  }

	  // Returns a box for a given cursor position, which may have an
	  // 'other' property containing the position of the secondary cursor
	  // on a bidi boundary.
	  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	    lineObj = lineObj || getLine(cm.doc, pos.line);
	    if (!preparedMeasure) preparedMeasure = prepareMeasureForLine(cm, lineObj);
	    function get(ch, right) {
	      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
	      if (right) m.left = m.right; else m.right = m.left;
	      return intoCoordSystem(cm, lineObj, m, context);
	    }
	    function getBidi(ch, partPos) {
	      var part = order[partPos], right = part.level % 2;
	      if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
	        part = order[--partPos];
	        ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
	        right = true;
	      } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
	        part = order[++partPos];
	        ch = bidiLeft(part) - part.level % 2;
	        right = false;
	      }
	      if (right && ch == part.to && ch > part.from) return get(ch - 1);
	      return get(ch, right);
	    }
	    var order = getOrder(lineObj), ch = pos.ch;
	    if (!order) return get(ch);
	    var partPos = getBidiPartAt(order, ch);
	    var val = getBidi(ch, partPos);
	    if (bidiOther != null) val.other = getBidi(ch, bidiOther);
	    return val;
	  }

	  // Used to cheaply estimate the coordinates for a position. Used for
	  // intermediate scroll updates.
	  function estimateCoords(cm, pos) {
	    var left = 0, pos = clipPos(cm.doc, pos);
	    if (!cm.options.lineWrapping) left = charWidth(cm.display) * pos.ch;
	    var lineObj = getLine(cm.doc, pos.line);
	    var top = heightAtLine(lineObj) + paddingTop(cm.display);
	    return {left: left, right: left, top: top, bottom: top + lineObj.height};
	  }

	  // Positions returned by coordsChar contain some extra information.
	  // xRel is the relative x position of the input coordinates compared
	  // to the found position (so xRel > 0 means the coordinates are to
	  // the right of the character position, for example). When outside
	  // is true, that means the coordinates lie outside the line's
	  // vertical range.
	  function PosWithInfo(line, ch, outside, xRel) {
	    var pos = Pos(line, ch);
	    pos.xRel = xRel;
	    if (outside) pos.outside = true;
	    return pos;
	  }

	  // Compute the character position closest to the given coordinates.
	  // Input must be lineSpace-local ("div" coordinate system).
	  function coordsChar(cm, x, y) {
	    var doc = cm.doc;
	    y += cm.display.viewOffset;
	    if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
	    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
	    if (lineN > last)
	      return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
	    if (x < 0) x = 0;

	    var lineObj = getLine(doc, lineN);
	    for (;;) {
	      var found = coordsCharInner(cm, lineObj, lineN, x, y);
	      var merged = collapsedSpanAtEnd(lineObj);
	      var mergedPos = merged && merged.find(0, true);
	      if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	        lineN = lineNo(lineObj = mergedPos.to.line);
	      else
	        return found;
	    }
	  }

	  function coordsCharInner(cm, lineObj, lineNo, x, y) {
	    var innerOff = y - heightAtLine(lineObj);
	    var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth;
	    var preparedMeasure = prepareMeasureForLine(cm, lineObj);

	    function getX(ch) {
	      var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
	      wrongLine = true;
	      if (innerOff > sp.bottom) return sp.left - adjust;
	      else if (innerOff < sp.top) return sp.left + adjust;
	      else wrongLine = false;
	      return sp.left;
	    }

	    var bidi = getOrder(lineObj), dist = lineObj.text.length;
	    var from = lineLeft(lineObj), to = lineRight(lineObj);
	    var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;

	    if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
	    // Do a binary search between these bounds.
	    for (;;) {
	      if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
	        var ch = x < fromX || x - fromX <= toX - x ? from : to;
	        var outside = ch == from ? fromOutside : toOutside
	        var xDiff = x - (ch == from ? fromX : toX);
	        // This is a kludge to handle the case where the coordinates
	        // are after a line-wrapped line. We should replace it with a
	        // more general handling of cursor positions around line
	        // breaks. (Issue #4078)
	        if (toOutside && !bidi && !/\s/.test(lineObj.text.charAt(ch)) && xDiff > 0 &&
	            ch < lineObj.text.length && preparedMeasure.view.measure.heights.length > 1) {
	          var charSize = measureCharPrepared(cm, preparedMeasure, ch, "right");
	          if (innerOff <= charSize.bottom && innerOff >= charSize.top && Math.abs(x - charSize.right) < xDiff) {
	            outside = false
	            ch++
	            xDiff = x - charSize.right
	          }
	        }
	        while (isExtendingChar(lineObj.text.charAt(ch))) ++ch;
	        var pos = PosWithInfo(lineNo, ch, outside, xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0);
	        return pos;
	      }
	      var step = Math.ceil(dist / 2), middle = from + step;
	      if (bidi) {
	        middle = from;
	        for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
	      }
	      var middleX = getX(middle);
	      if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) toX += 1000; dist = step;}
	      else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step;}
	    }
	  }

	  var measureText;
	  // Compute the default text height.
	  function textHeight(display) {
	    if (display.cachedTextHeight != null) return display.cachedTextHeight;
	    if (measureText == null) {
	      measureText = elt("pre");
	      // Measure a bunch of lines, for browsers that compute
	      // fractional heights.
	      for (var i = 0; i < 49; ++i) {
	        measureText.appendChild(document.createTextNode("x"));
	        measureText.appendChild(elt("br"));
	      }
	      measureText.appendChild(document.createTextNode("x"));
	    }
	    removeChildrenAndAdd(display.measure, measureText);
	    var height = measureText.offsetHeight / 50;
	    if (height > 3) display.cachedTextHeight = height;
	    removeChildren(display.measure);
	    return height || 1;
	  }

	  // Compute the default character width.
	  function charWidth(display) {
	    if (display.cachedCharWidth != null) return display.cachedCharWidth;
	    var anchor = elt("span", "xxxxxxxxxx");
	    var pre = elt("pre", [anchor]);
	    removeChildrenAndAdd(display.measure, pre);
	    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
	    if (width > 2) display.cachedCharWidth = width;
	    return width || 10;
	  }

	  // OPERATIONS

	  // Operations are used to wrap a series of changes to the editor
	  // state in such a way that each change won't have to update the
	  // cursor and display (which would be awkward, slow, and
	  // error-prone). Instead, display updates are batched and then all
	  // combined and executed at once.

	  var operationGroup = null;

	  var nextOpId = 0;
	  // Start a new operation.
	  function startOperation(cm) {
	    cm.curOp = {
	      cm: cm,
	      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	      startHeight: cm.doc.height, // Used to detect need to update scrollbar
	      forceUpdate: false,      // Used to force a redraw
	      updateInput: null,       // Whether to reset the input textarea
	      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	      changeObjs: null,        // Accumulated changes, for firing change events
	      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	      selectionChanged: false, // Whether the selection needs to be redrawn
	      updateMaxLine: false,    // Set when the widest line needs to be determined anew
	      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	      scrollToPos: null,       // Used to scroll to a specific position
	      focus: false,
	      id: ++nextOpId           // Unique ID
	    };
	    if (operationGroup) {
	      operationGroup.ops.push(cm.curOp);
	    } else {
	      cm.curOp.ownsGroup = operationGroup = {
	        ops: [cm.curOp],
	        delayedCallbacks: []
	      };
	    }
	  }

	  function fireCallbacksForOps(group) {
	    // Calls delayed callbacks and cursorActivity handlers until no
	    // new ones appear
	    var callbacks = group.delayedCallbacks, i = 0;
	    do {
	      for (; i < callbacks.length; i++)
	        callbacks[i].call(null);
	      for (var j = 0; j < group.ops.length; j++) {
	        var op = group.ops[j];
	        if (op.cursorActivityHandlers)
	          while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	            op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
	      }
	    } while (i < callbacks.length);
	  }

	  // Finish an operation, updating the display and signalling delayed events
	  function endOperation(cm) {
	    var op = cm.curOp, group = op.ownsGroup;
	    if (!group) return;

	    try { fireCallbacksForOps(group); }
	    finally {
	      operationGroup = null;
	      for (var i = 0; i < group.ops.length; i++)
	        group.ops[i].cm.curOp = null;
	      endOperations(group);
	    }
	  }

	  // The DOM updates done when an operation finishes are batched so
	  // that the minimum number of relayouts are required.
	  function endOperations(group) {
	    var ops = group.ops;
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W1(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_R2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Write DOM (maybe)
	      endOperation_W2(ops[i]);
	    for (var i = 0; i < ops.length; i++) // Read DOM
	      endOperation_finish(ops[i]);
	  }

	  function endOperation_R1(op) {
	    var cm = op.cm, display = cm.display;
	    maybeClipScrollbars(cm);
	    if (op.updateMaxLine) findMaxLine(cm);

	    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                         op.scrollToPos.to.line >= display.viewTo) ||
	      display.maxLineChanged && cm.options.lineWrapping;
	    op.update = op.mustUpdate &&
	      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
	  }

	  function endOperation_W1(op) {
	    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
	  }

	  function endOperation_R2(op) {
	    var cm = op.cm, display = cm.display;
	    if (op.updatedDisplay) updateHeightsInViewport(cm);

	    op.barMeasure = measureForScrollbars(cm);

	    // If the max line changed since it was last measured, measure it,
	    // and ensure the document's width matches it.
	    // updateDisplay_W2 will use these properties to do the actual resizing
	    if (display.maxLineChanged && !cm.options.lineWrapping) {
	      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
	      cm.display.sizerWidth = op.adjustWidthTo;
	      op.barMeasure.scrollWidth =
	        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
	      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
	    }

	    if (op.updatedDisplay || op.selectionChanged)
	      op.preparedSelection = display.input.prepareSelection(op.focus);
	  }

	  function endOperation_W2(op) {
	    var cm = op.cm;

	    if (op.adjustWidthTo != null) {
	      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
	      if (op.maxScrollLeft < cm.doc.scrollLeft)
	        setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true);
	      cm.display.maxLineChanged = false;
	    }

	    var takeFocus = op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus())
	    if (op.preparedSelection)
	      cm.display.input.showSelection(op.preparedSelection, takeFocus);
	    if (op.updatedDisplay || op.startHeight != cm.doc.height)
	      updateScrollbars(cm, op.barMeasure);
	    if (op.updatedDisplay)
	      setDocumentHeight(cm, op.barMeasure);

	    if (op.selectionChanged) restartBlink(cm);

	    if (cm.state.focused && op.updateInput)
	      cm.display.input.reset(op.typing);
	    if (takeFocus) ensureFocus(op.cm);
	  }

	  function endOperation_finish(op) {
	    var cm = op.cm, display = cm.display, doc = cm.doc;

	    if (op.updatedDisplay) postUpdateDisplay(cm, op.update);

	    // Abort mouse wheel delta measurement, when scrolling explicitly
	    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	      display.wheelStartX = display.wheelStartY = null;

	    // Propagate the scroll position to the actual DOM scroller
	    if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	      doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop));
	      display.scrollbars.setScrollTop(doc.scrollTop);
	      display.scroller.scrollTop = doc.scrollTop;
	    }
	    if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	      doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft));
	      display.scrollbars.setScrollLeft(doc.scrollLeft);
	      display.scroller.scrollLeft = doc.scrollLeft;
	      alignHorizontally(cm);
	    }
	    // If we need to scroll a specific position into view, do so.
	    if (op.scrollToPos) {
	      var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                     clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
	      if (op.scrollToPos.isCursor && cm.state.focused) maybeScrollWindow(cm, coords);
	    }

	    // Fire events for markers that are hidden/unidden by editing or
	    // undoing
	    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
	    if (hidden) for (var i = 0; i < hidden.length; ++i)
	      if (!hidden[i].lines.length) signal(hidden[i], "hide");
	    if (unhidden) for (var i = 0; i < unhidden.length; ++i)
	      if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

	    if (display.wrapper.offsetHeight)
	      doc.scrollTop = cm.display.scroller.scrollTop;

	    // Fire change events, and delayed event handlers
	    if (op.changeObjs)
	      signal(cm, "changes", cm, op.changeObjs);
	    if (op.update)
	      op.update.finish();
	  }

	  // Run the given function in an operation
	  function runInOp(cm, f) {
	    if (cm.curOp) return f();
	    startOperation(cm);
	    try { return f(); }
	    finally { endOperation(cm); }
	  }
	  // Wraps a function in an operation. Returns the wrapped function.
	  function operation(cm, f) {
	    return function() {
	      if (cm.curOp) return f.apply(cm, arguments);
	      startOperation(cm);
	      try { return f.apply(cm, arguments); }
	      finally { endOperation(cm); }
	    };
	  }
	  // Used to add methods to editor and doc instances, wrapping them in
	  // operations.
	  function methodOp(f) {
	    return function() {
	      if (this.curOp) return f.apply(this, arguments);
	      startOperation(this);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(this); }
	    };
	  }
	  function docMethodOp(f) {
	    return function() {
	      var cm = this.cm;
	      if (!cm || cm.curOp) return f.apply(this, arguments);
	      startOperation(cm);
	      try { return f.apply(this, arguments); }
	      finally { endOperation(cm); }
	    };
	  }

	  // VIEW TRACKING

	  // These objects are used to represent the visible (currently drawn)
	  // part of the document. A LineView may correspond to multiple
	  // logical lines, if those are connected by collapsed ranges.
	  function LineView(doc, line, lineN) {
	    // The starting line
	    this.line = line;
	    // Continuing lines, if any
	    this.rest = visualLineContinued(line);
	    // Number of logical lines in this visual line
	    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
	    this.node = this.text = null;
	    this.hidden = lineIsHidden(doc, line);
	  }

	  // Create a range of LineView objects for the given lines.
	  function buildViewArray(cm, from, to) {
	    var array = [], nextPos;
	    for (var pos = from; pos < to; pos = nextPos) {
	      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
	      nextPos = pos + view.size;
	      array.push(view);
	    }
	    return array;
	  }

	  // Updates the display.view data structure for a given change to the
	  // document. From and to are in pre-change coordinates. Lendiff is
	  // the amount of lines added or subtracted by the change. This is
	  // used for changes that span multiple lines, or change the way
	  // lines are divided into visual lines. regLineChange (below)
	  // registers single-line changes.
	  function regChange(cm, from, to, lendiff) {
	    if (from == null) from = cm.doc.first;
	    if (to == null) to = cm.doc.first + cm.doc.size;
	    if (!lendiff) lendiff = 0;

	    var display = cm.display;
	    if (lendiff && to < display.viewTo &&
	        (display.updateLineNumbers == null || display.updateLineNumbers > from))
	      display.updateLineNumbers = from;

	    cm.curOp.viewChanged = true;

	    if (from >= display.viewTo) { // Change after
	      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	        resetView(cm);
	    } else if (to <= display.viewFrom) { // Change before
	      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	        resetView(cm);
	      } else {
	        display.viewFrom += lendiff;
	        display.viewTo += lendiff;
	      }
	    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	      resetView(cm);
	    } else if (from <= display.viewFrom) { // Top overlap
	      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cut) {
	        display.view = display.view.slice(cut.index);
	        display.viewFrom = cut.lineN;
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    } else if (to >= display.viewTo) { // Bottom overlap
	      var cut = viewCuttingPoint(cm, from, from, -1);
	      if (cut) {
	        display.view = display.view.slice(0, cut.index);
	        display.viewTo = cut.lineN;
	      } else {
	        resetView(cm);
	      }
	    } else { // Gap in the middle
	      var cutTop = viewCuttingPoint(cm, from, from, -1);
	      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
	      if (cutTop && cutBot) {
	        display.view = display.view.slice(0, cutTop.index)
	          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	          .concat(display.view.slice(cutBot.index));
	        display.viewTo += lendiff;
	      } else {
	        resetView(cm);
	      }
	    }

	    var ext = display.externalMeasured;
	    if (ext) {
	      if (to < ext.lineN)
	        ext.lineN += lendiff;
	      else if (from < ext.lineN + ext.size)
	        display.externalMeasured = null;
	    }
	  }

	  // Register a change to a single line. Type must be one of "text",
	  // "gutter", "class", "widget"
	  function regLineChange(cm, line, type) {
	    cm.curOp.viewChanged = true;
	    var display = cm.display, ext = cm.display.externalMeasured;
	    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	      display.externalMeasured = null;

	    if (line < display.viewFrom || line >= display.viewTo) return;
	    var lineView = display.view[findViewIndex(cm, line)];
	    if (lineView.node == null) return;
	    var arr = lineView.changes || (lineView.changes = []);
	    if (indexOf(arr, type) == -1) arr.push(type);
	  }

	  // Clear the view.
	  function resetView(cm) {
	    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
	    cm.display.view = [];
	    cm.display.viewOffset = 0;
	  }

	  // Find the view element corresponding to a given line. Return null
	  // when the line isn't visible.
	  function findViewIndex(cm, n) {
	    if (n >= cm.display.viewTo) return null;
	    n -= cm.display.viewFrom;
	    if (n < 0) return null;
	    var view = cm.display.view;
	    for (var i = 0; i < view.length; i++) {
	      n -= view[i].size;
	      if (n < 0) return i;
	    }
	  }

	  function viewCuttingPoint(cm, oldN, newN, dir) {
	    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
	    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	      return {index: index, lineN: newN};
	    for (var i = 0, n = cm.display.viewFrom; i < index; i++)
	      n += view[i].size;
	    if (n != oldN) {
	      if (dir > 0) {
	        if (index == view.length - 1) return null;
	        diff = (n + view[index].size) - oldN;
	        index++;
	      } else {
	        diff = n - oldN;
	      }
	      oldN += diff; newN += diff;
	    }
	    while (visualLineNo(cm.doc, newN) != newN) {
	      if (index == (dir < 0 ? 0 : view.length - 1)) return null;
	      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
	      index += dir;
	    }
	    return {index: index, lineN: newN};
	  }

	  // Force the view to cover a given range, adding empty view element
	  // or clipping off existing ones as needed.
	  function adjustView(cm, from, to) {
	    var display = cm.display, view = display.view;
	    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	      display.view = buildViewArray(cm, from, to);
	      display.viewFrom = from;
	    } else {
	      if (display.viewFrom > from)
	        display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view);
	      else if (display.viewFrom < from)
	        display.view = display.view.slice(findViewIndex(cm, from));
	      display.viewFrom = from;
	      if (display.viewTo < to)
	        display.view = display.view.concat(buildViewArray(cm, display.viewTo, to));
	      else if (display.viewTo > to)
	        display.view = display.view.slice(0, findViewIndex(cm, to));
	    }
	    display.viewTo = to;
	  }

	  // Count the number of lines in the view whose DOM representation is
	  // out of date (or nonexistent).
	  function countDirtyView(cm) {
	    var view = cm.display.view, dirty = 0;
	    for (var i = 0; i < view.length; i++) {
	      var lineView = view[i];
	      if (!lineView.hidden && (!lineView.node || lineView.changes)) ++dirty;
	    }
	    return dirty;
	  }

	  // EVENT HANDLERS

	  // Attach the necessary event handlers when initializing the editor
	  function registerEventHandlers(cm) {
	    var d = cm.display;
	    on(d.scroller, "mousedown", operation(cm, onMouseDown));
	    // Older IE's will not fire a second mousedown for a double click
	    if (ie && ie_version < 11)
	      on(d.scroller, "dblclick", operation(cm, function(e) {
	        if (signalDOMEvent(cm, e)) return;
	        var pos = posFromMouse(cm, e);
	        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
	        e_preventDefault(e);
	        var word = cm.findWordAt(pos);
	        extendSelection(cm.doc, word.anchor, word.head);
	      }));
	    else
	      on(d.scroller, "dblclick", function(e) { signalDOMEvent(cm, e) || e_preventDefault(e); });
	    // Some browsers fire contextmenu *after* opening the menu, at
	    // which point we can't mess with it anymore. Context menu is
	    // handled in onMouseDown for these browsers.
	    if (!captureRightClick) on(d.scroller, "contextmenu", function(e) {onContextMenu(cm, e);});

	    // Used to suppress mouse event handling when a touch happens
	    var touchFinished, prevTouch = {end: 0};
	    function finishTouch() {
	      if (d.activeTouch) {
	        touchFinished = setTimeout(function() {d.activeTouch = null;}, 1000);
	        prevTouch = d.activeTouch;
	        prevTouch.end = +new Date;
	      }
	    };
	    function isMouseLikeTouchEvent(e) {
	      if (e.touches.length != 1) return false;
	      var touch = e.touches[0];
	      return touch.radiusX <= 1 && touch.radiusY <= 1;
	    }
	    function farAway(touch, other) {
	      if (other.left == null) return true;
	      var dx = other.left - touch.left, dy = other.top - touch.top;
	      return dx * dx + dy * dy > 20 * 20;
	    }
	    on(d.scroller, "touchstart", function(e) {
	      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
	        clearTimeout(touchFinished);
	        var now = +new Date;
	        d.activeTouch = {start: now, moved: false,
	                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
	        if (e.touches.length == 1) {
	          d.activeTouch.left = e.touches[0].pageX;
	          d.activeTouch.top = e.touches[0].pageY;
	        }
	      }
	    });
	    on(d.scroller, "touchmove", function() {
	      if (d.activeTouch) d.activeTouch.moved = true;
	    });
	    on(d.scroller, "touchend", function(e) {
	      var touch = d.activeTouch;
	      if (touch && !eventInWidget(d, e) && touch.left != null &&
	          !touch.moved && new Date - touch.start < 300) {
	        var pos = cm.coordsChar(d.activeTouch, "page"), range;
	        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
	          range = new Range(pos, pos);
	        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
	          range = cm.findWordAt(pos);
	        else // Triple tap
	          range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0)));
	        cm.setSelection(range.anchor, range.head);
	        cm.focus();
	        e_preventDefault(e);
	      }
	      finishTouch();
	    });
	    on(d.scroller, "touchcancel", finishTouch);

	    // Sync scrolling between fake scrollbars and real scrollable
	    // area, ensure viewport is updated when scrolling.
	    on(d.scroller, "scroll", function() {
	      if (d.scroller.clientHeight) {
	        setScrollTop(cm, d.scroller.scrollTop);
	        setScrollLeft(cm, d.scroller.scrollLeft, true);
	        signal(cm, "scroll", cm);
	      }
	    });

	    // Listen to wheel events in order to try and update the viewport on time.
	    on(d.scroller, "mousewheel", function(e){onScrollWheel(cm, e);});
	    on(d.scroller, "DOMMouseScroll", function(e){onScrollWheel(cm, e);});

	    // Prevent wrapper from ever scrolling
	    on(d.wrapper, "scroll", function() { d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

	    d.dragFunctions = {
	      enter: function(e) {if (!signalDOMEvent(cm, e)) e_stop(e);},
	      over: function(e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
	      start: function(e){onDragStart(cm, e);},
	      drop: operation(cm, onDrop),
	      leave: function(e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
	    };

	    var inp = d.input.getField();
	    on(inp, "keyup", function(e) { onKeyUp.call(cm, e); });
	    on(inp, "keydown", operation(cm, onKeyDown));
	    on(inp, "keypress", operation(cm, onKeyPress));
	    on(inp, "focus", function (e) { onFocus(cm, e); });
	    on(inp, "blur", function (e) { onBlur(cm, e); });
	  }

	  function dragDropChanged(cm, value, old) {
	    var wasOn = old && old != CodeMirror.Init;
	    if (!value != !wasOn) {
	      var funcs = cm.display.dragFunctions;
	      var toggle = value ? on : off;
	      toggle(cm.display.scroller, "dragstart", funcs.start);
	      toggle(cm.display.scroller, "dragenter", funcs.enter);
	      toggle(cm.display.scroller, "dragover", funcs.over);
	      toggle(cm.display.scroller, "dragleave", funcs.leave);
	      toggle(cm.display.scroller, "drop", funcs.drop);
	    }
	  }

	  // Called when the window resizes
	  function onResize(cm) {
	    var d = cm.display;
	    if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	      return;
	    // Might be a text scaling operation, clear size caches.
	    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
	    d.scrollbarsClipped = false;
	    cm.setSize();
	  }

	  // MOUSE EVENTS

	  // Return true when the given mouse event happened in a widget
	  function eventInWidget(display, e) {
	    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	          (n.parentNode == display.sizer && n != display.mover))
	        return true;
	    }
	  }

	  // Given a mouse event, find the corresponding position. If liberal
	  // is false, it checks whether a gutter or scrollbar was clicked,
	  // and returns null if it was. forRect is used by rectangular
	  // selections, and tries to estimate a character position even for
	  // coordinates beyond the right of the text.
	  function posFromMouse(cm, e, liberal, forRect) {
	    var display = cm.display;
	    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") return null;

	    var x, y, space = display.lineSpace.getBoundingClientRect();
	    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	    try { x = e.clientX - space.left; y = e.clientY - space.top; }
	    catch (e) { return null; }
	    var coords = coordsChar(cm, x, y), line;
	    if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
	      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
	    }
	    return coords;
	  }

	  // A mouse down can be a single click, double click, triple click,
	  // start of selection drag, start of text drag, new cursor
	  // (ctrl-click), rectangle drag (alt-drag), or xwin
	  // middle-click-paste. Or it might be a click on something we should
	  // not interfere with, such as a scrollbar or widget.
	  function onMouseDown(e) {
	    var cm = this, display = cm.display;
	    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) return;
	    display.shift = e.shiftKey;

	    if (eventInWidget(display, e)) {
	      if (!webkit) {
	        // Briefly turn off draggability, to allow widgets to do
	        // normal dragging things.
	        display.scroller.draggable = false;
	        setTimeout(function(){display.scroller.draggable = true;}, 100);
	      }
	      return;
	    }
	    if (clickInGutter(cm, e)) return;
	    var start = posFromMouse(cm, e);
	    window.focus();

	    switch (e_button(e)) {
	    case 1:
	      // #3261: make sure, that we're not starting a second selection
	      if (cm.state.selectingText)
	        cm.state.selectingText(e);
	      else if (start)
	        leftButtonDown(cm, e, start);
	      else if (e_target(e) == display.scroller)
	        e_preventDefault(e);
	      break;
	    case 2:
	      if (webkit) cm.state.lastMiddleDown = +new Date;
	      if (start) extendSelection(cm.doc, start);
	      setTimeout(function() {display.input.focus();}, 20);
	      e_preventDefault(e);
	      break;
	    case 3:
	      if (captureRightClick) onContextMenu(cm, e);
	      else delayBlurEvent(cm);
	      break;
	    }
	  }

	  var lastClick, lastDoubleClick;
	  function leftButtonDown(cm, e, start) {
	    if (ie) setTimeout(bind(ensureFocus, cm), 0);
	    else cm.curOp.focus = activeElt();

	    var now = +new Date, type;
	    if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	      type = "triple";
	    } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	      type = "double";
	      lastDoubleClick = {time: now, pos: start};
	    } else {
	      type = "single";
	      lastClick = {time: now, pos: start};
	    }

	    var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained;
	    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
	        type == "single" && (contained = sel.contains(start)) > -1 &&
	        (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
	        (cmp(contained.to(), start) > 0 || start.xRel < 0))
	      leftButtonStartDrag(cm, e, start, modifier);
	    else
	      leftButtonSelect(cm, e, start, type, modifier);
	  }

	  // Start a text drag. When it ends, see if any dragging actually
	  // happen, and treat as a click if it didn't.
	  function leftButtonStartDrag(cm, e, start, modifier) {
	    var display = cm.display, startTime = +new Date;
	    var dragEnd = operation(cm, function(e2) {
	      if (webkit) display.scroller.draggable = false;
	      cm.state.draggingText = false;
	      off(document, "mouseup", dragEnd);
	      off(display.scroller, "drop", dragEnd);
	      if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
	        e_preventDefault(e2);
	        if (!modifier && +new Date - 200 < startTime)
	          extendSelection(cm.doc, start);
	        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
	        if (webkit || ie && ie_version == 9)
	          setTimeout(function() {document.body.focus(); display.input.focus();}, 20);
	        else
	          display.input.focus();
	      }
	    });
	    // Let the drag handler handle this.
	    if (webkit) display.scroller.draggable = true;
	    cm.state.draggingText = dragEnd;
	    dragEnd.copy = mac ? e.altKey : e.ctrlKey
	    // IE's approach to draggable
	    if (display.scroller.dragDrop) display.scroller.dragDrop();
	    on(document, "mouseup", dragEnd);
	    on(display.scroller, "drop", dragEnd);
	  }

	  // Normal selection, as opposed to text dragging.
	  function leftButtonSelect(cm, e, start, type, addNew) {
	    var display = cm.display, doc = cm.doc;
	    e_preventDefault(e);

	    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
	    if (addNew && !e.shiftKey) {
	      ourIndex = doc.sel.contains(start);
	      if (ourIndex > -1)
	        ourRange = ranges[ourIndex];
	      else
	        ourRange = new Range(start, start);
	    } else {
	      ourRange = doc.sel.primary();
	      ourIndex = doc.sel.primIndex;
	    }

	    if (chromeOS ? e.shiftKey && e.metaKey : e.altKey) {
	      type = "rect";
	      if (!addNew) ourRange = new Range(start, start);
	      start = posFromMouse(cm, e, true, true);
	      ourIndex = -1;
	    } else if (type == "double") {
	      var word = cm.findWordAt(start);
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, word.anchor, word.head);
	      else
	        ourRange = word;
	    } else if (type == "triple") {
	      var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
	      if (cm.display.shift || doc.extend)
	        ourRange = extendRange(doc, ourRange, line.anchor, line.head);
	      else
	        ourRange = line;
	    } else {
	      ourRange = extendRange(doc, ourRange, start);
	    }

	    if (!addNew) {
	      ourIndex = 0;
	      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
	      startSel = doc.sel;
	    } else if (ourIndex == -1) {
	      ourIndex = ranges.length;
	      setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                   {scroll: false, origin: "*mouse"});
	    } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
	      setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
	                   {scroll: false, origin: "*mouse"});
	      startSel = doc.sel;
	    } else {
	      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
	    }

	    var lastPos = start;
	    function extendTo(pos) {
	      if (cmp(lastPos, pos) == 0) return;
	      lastPos = pos;

	      if (type == "rect") {
	        var ranges = [], tabSize = cm.options.tabSize;
	        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
	        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
	        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
	        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	             line <= end; line++) {
	          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
	          if (left == right)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos)));
	          else if (text.length > leftPos)
	            ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
	        }
	        if (!ranges.length) ranges.push(new Range(start, start));
	        setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                     {origin: "*mouse", scroll: false});
	        cm.scrollIntoView(pos);
	      } else {
	        var oldRange = ourRange;
	        var anchor = oldRange.anchor, head = pos;
	        if (type != "single") {
	          if (type == "double")
	            var range = cm.findWordAt(pos);
	          else
	            var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
	          if (cmp(range.anchor, anchor) > 0) {
	            head = range.head;
	            anchor = minPos(oldRange.from(), range.anchor);
	          } else {
	            head = range.anchor;
	            anchor = maxPos(oldRange.to(), range.head);
	          }
	        }
	        var ranges = startSel.ranges.slice(0);
	        ranges[ourIndex] = new Range(clipPos(doc, anchor), head);
	        setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
	      }
	    }

	    var editorSize = display.wrapper.getBoundingClientRect();
	    // Used to ensure timeout re-tries don't fire when another extend
	    // happened in the meantime (clearTimeout isn't reliable -- at
	    // least on Chrome, the timeouts still happen even when cleared,
	    // if the clear happens after their scheduled firing time).
	    var counter = 0;

	    function extend(e) {
	      var curCount = ++counter;
	      var cur = posFromMouse(cm, e, true, type == "rect");
	      if (!cur) return;
	      if (cmp(cur, lastPos) != 0) {
	        cm.curOp.focus = activeElt();
	        extendTo(cur);
	        var visible = visibleLines(display, doc);
	        if (cur.line >= visible.to || cur.line < visible.from)
	          setTimeout(operation(cm, function(){if (counter == curCount) extend(e);}), 150);
	      } else {
	        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
	        if (outside) setTimeout(operation(cm, function() {
	          if (counter != curCount) return;
	          display.scroller.scrollTop += outside;
	          extend(e);
	        }), 50);
	      }
	    }

	    function done(e) {
	      cm.state.selectingText = false;
	      counter = Infinity;
	      e_preventDefault(e);
	      display.input.focus();
	      off(document, "mousemove", move);
	      off(document, "mouseup", up);
	      doc.history.lastSelOrigin = null;
	    }

	    var move = operation(cm, function(e) {
	      if (!e_button(e)) done(e);
	      else extend(e);
	    });
	    var up = operation(cm, done);
	    cm.state.selectingText = up;
	    on(document, "mousemove", move);
	    on(document, "mouseup", up);
	  }

	  // Determines whether an event happened in the gutter, and fires the
	  // handlers for the corresponding event.
	  function gutterEvent(cm, e, type, prevent) {
	    try { var mX = e.clientX, mY = e.clientY; }
	    catch(e) { return false; }
	    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return false;
	    if (prevent) e_preventDefault(e);

	    var display = cm.display;
	    var lineBox = display.lineDiv.getBoundingClientRect();

	    if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
	    mY -= lineBox.top - display.viewOffset;

	    for (var i = 0; i < cm.options.gutters.length; ++i) {
	      var g = display.gutters.childNodes[i];
	      if (g && g.getBoundingClientRect().right >= mX) {
	        var line = lineAtHeight(cm.doc, mY);
	        var gutter = cm.options.gutters[i];
	        signal(cm, type, cm, line, gutter, e);
	        return e_defaultPrevented(e);
	      }
	    }
	  }

	  function clickInGutter(cm, e) {
	    return gutterEvent(cm, e, "gutterClick", true);
	  }

	  // Kludge to work around strange IE behavior where it'll sometimes
	  // re-fire a series of drag-related events right after the drop (#1551)
	  var lastDrop = 0;

	  function onDrop(e) {
	    var cm = this;
	    clearDragCursor(cm);
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	      return;
	    e_preventDefault(e);
	    if (ie) lastDrop = +new Date;
	    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
	    if (!pos || cm.isReadOnly()) return;
	    // Might be a file drop, in which case we simply extract the text
	    // and insert it.
	    if (files && files.length && window.FileReader && window.File) {
	      var n = files.length, text = Array(n), read = 0;
	      var loadFile = function(file, i) {
	        if (cm.options.allowDropFileTypes &&
	            indexOf(cm.options.allowDropFileTypes, file.type) == -1)
	          return;

	        var reader = new FileReader;
	        reader.onload = operation(cm, function() {
	          var content = reader.result;
	          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) content = "";
	          text[i] = content;
	          if (++read == n) {
	            pos = clipPos(cm.doc, pos);
	            var change = {from: pos, to: pos,
	                          text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
	                          origin: "paste"};
	            makeChange(cm.doc, change);
	            setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
	          }
	        });
	        reader.readAsText(file);
	      };
	      for (var i = 0; i < n; ++i) loadFile(files[i], i);
	    } else { // Normal drop
	      // Don't do a replace if the drop happened inside of the selected text.
	      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	        cm.state.draggingText(e);
	        // Ensure the editor is re-focused
	        setTimeout(function() {cm.display.input.focus();}, 20);
	        return;
	      }
	      try {
	        var text = e.dataTransfer.getData("Text");
	        if (text) {
	          if (cm.state.draggingText && !cm.state.draggingText.copy)
	            var selected = cm.listSelections();
	          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
	          if (selected) for (var i = 0; i < selected.length; ++i)
	            replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
	          cm.replaceSelection(text, "around", "paste");
	          cm.display.input.focus();
	        }
	      }
	      catch(e){}
	    }
	  }

	  function onDragStart(cm, e) {
	    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return; }
	    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

	    e.dataTransfer.setData("Text", cm.getSelection());
	    e.dataTransfer.effectAllowed = "copyMove"

	    // Use dummy image instead of default browsers image.
	    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	    if (e.dataTransfer.setDragImage && !safari) {
	      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
	      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
	      if (presto) {
	        img.width = img.height = 1;
	        cm.display.wrapper.appendChild(img);
	        // Force a relayout, or Opera won't use our image for some obscure reason
	        img._top = img.offsetTop;
	      }
	      e.dataTransfer.setDragImage(img, 0, 0);
	      if (presto) img.parentNode.removeChild(img);
	    }
	  }

	  function onDragOver(cm, e) {
	    var pos = posFromMouse(cm, e);
	    if (!pos) return;
	    var frag = document.createDocumentFragment();
	    drawSelectionCursor(cm, pos, frag);
	    if (!cm.display.dragCursor) {
	      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
	      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
	    }
	    removeChildrenAndAdd(cm.display.dragCursor, frag);
	  }

	  function clearDragCursor(cm) {
	    if (cm.display.dragCursor) {
	      cm.display.lineSpace.removeChild(cm.display.dragCursor);
	      cm.display.dragCursor = null;
	    }
	  }

	  // SCROLL EVENTS

	  // Sync the scrollable area and scrollbars, ensure the viewport
	  // covers the visible area.
	  function setScrollTop(cm, val) {
	    if (Math.abs(cm.doc.scrollTop - val) < 2) return;
	    cm.doc.scrollTop = val;
	    if (!gecko) updateDisplaySimple(cm, {top: val});
	    if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
	    cm.display.scrollbars.setScrollTop(val);
	    if (gecko) updateDisplaySimple(cm);
	    startWorker(cm, 100);
	  }
	  // Sync scroller and scrollbar, ensure the gutter elements are
	  // aligned.
	  function setScrollLeft(cm, val, isScroller) {
	    if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
	    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
	    cm.doc.scrollLeft = val;
	    alignHorizontally(cm);
	    if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
	    cm.display.scrollbars.setScrollLeft(val);
	  }

	  // Since the delta values reported on mouse wheel events are
	  // unstandardized between browsers and even browser versions, and
	  // generally horribly unpredictable, this code starts by measuring
	  // the scroll effect that the first few mouse wheel events have,
	  // and, from that, detects the way it can convert deltas to pixel
	  // offsets afterwards.
	  //
	  // The reason we want to know the amount a wheel event will scroll
	  // is that it gives us a chance to update the display before the
	  // actual scrolling happens, reducing flickering.

	  var wheelSamples = 0, wheelPixelsPerUnit = null;
	  // Fill in a browser-detected starting value on browsers where we
	  // know one. These don't have to be accurate -- the result of them
	  // being wrong would just be a slight flicker on the first wheel
	  // scroll (if it is large enough).
	  if (ie) wheelPixelsPerUnit = -.53;
	  else if (gecko) wheelPixelsPerUnit = 15;
	  else if (chrome) wheelPixelsPerUnit = -.7;
	  else if (safari) wheelPixelsPerUnit = -1/3;

	  var wheelEventDelta = function(e) {
	    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
	    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
	    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
	    else if (dy == null) dy = e.wheelDelta;
	    return {x: dx, y: dy};
	  };
	  CodeMirror.wheelEventPixels = function(e) {
	    var delta = wheelEventDelta(e);
	    delta.x *= wheelPixelsPerUnit;
	    delta.y *= wheelPixelsPerUnit;
	    return delta;
	  };

	  function onScrollWheel(cm, e) {
	    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

	    var display = cm.display, scroll = display.scroller;
	    // Quit if there's nothing to scroll here
	    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
	    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
	    if (!(dx && canScrollX || dy && canScrollY)) return;

	    // Webkit browsers on OS X abort momentum scrolls when the target
	    // of the scroll event is removed from the scrollable element.
	    // This hack (see related code in patchDisplay) makes sure the
	    // element is kept around.
	    if (dy && mac && webkit) {
	      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	        for (var i = 0; i < view.length; i++) {
	          if (view[i].node == cur) {
	            cm.display.currentWheelTarget = cur;
	            break outer;
	          }
	        }
	      }
	    }

	    // On some browsers, horizontal scrolling will cause redraws to
	    // happen before the gutter has been realigned, causing it to
	    // wriggle around in a most unseemly way. When we have an
	    // estimated pixels/delta value, we just handle horizontal
	    // scrolling entirely here. It'll be slightly off from native, but
	    // better than glitching out.
	    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	      if (dy && canScrollY)
	        setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
	      setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
	      // Only prevent default scrolling if vertical scrolling is
	      // actually possible. Otherwise, it causes vertical scroll
	      // jitter on OSX trackpads when deltaX is small and deltaY
	      // is large (issue #3579)
	      if (!dy || (dy && canScrollY))
	        e_preventDefault(e);
	      display.wheelStartX = null; // Abort measurement, if in progress
	      return;
	    }

	    // 'Project' the visible viewport to cover the area that is being
	    // scrolled into view (if we know enough to estimate it).
	    if (dy && wheelPixelsPerUnit != null) {
	      var pixels = dy * wheelPixelsPerUnit;
	      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
	      if (pixels < 0) top = Math.max(0, top + pixels - 50);
	      else bot = Math.min(cm.doc.height, bot + pixels + 50);
	      updateDisplaySimple(cm, {top: top, bottom: bot});
	    }

	    if (wheelSamples < 20) {
	      if (display.wheelStartX == null) {
	        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
	        display.wheelDX = dx; display.wheelDY = dy;
	        setTimeout(function() {
	          if (display.wheelStartX == null) return;
	          var movedX = scroll.scrollLeft - display.wheelStartX;
	          var movedY = scroll.scrollTop - display.wheelStartY;
	          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	            (movedX && display.wheelDX && movedX / display.wheelDX);
	          display.wheelStartX = display.wheelStartY = null;
	          if (!sample) return;
	          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
	          ++wheelSamples;
	        }, 200);
	      } else {
	        display.wheelDX += dx; display.wheelDY += dy;
	      }
	    }
	  }

	  // KEY EVENTS

	  // Run a handler that was bound to a key.
	  function doHandleBinding(cm, bound, dropShift) {
	    if (typeof bound == "string") {
	      bound = commands[bound];
	      if (!bound) return false;
	    }
	    // Ensure previous input has been read, so that the handler sees a
	    // consistent view of the document
	    cm.display.input.ensurePolled();
	    var prevShift = cm.display.shift, done = false;
	    try {
	      if (cm.isReadOnly()) cm.state.suppressEdits = true;
	      if (dropShift) cm.display.shift = false;
	      done = bound(cm) != Pass;
	    } finally {
	      cm.display.shift = prevShift;
	      cm.state.suppressEdits = false;
	    }
	    return done;
	  }

	  function lookupKeyForEditor(cm, name, handle) {
	    for (var i = 0; i < cm.state.keyMaps.length; i++) {
	      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
	      if (result) return result;
	    }
	    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	      || lookupKey(name, cm.options.keyMap, handle, cm);
	  }

	  var stopSeq = new Delayed;
	  function dispatchKey(cm, name, e, handle) {
	    var seq = cm.state.keySeq;
	    if (seq) {
	      if (isModifierKey(name)) return "handled";
	      stopSeq.set(50, function() {
	        if (cm.state.keySeq == seq) {
	          cm.state.keySeq = null;
	          cm.display.input.reset();
	        }
	      });
	      name = seq + " " + name;
	    }
	    var result = lookupKeyForEditor(cm, name, handle);

	    if (result == "multi")
	      cm.state.keySeq = name;
	    if (result == "handled")
	      signalLater(cm, "keyHandled", cm, name, e);

	    if (result == "handled" || result == "multi") {
	      e_preventDefault(e);
	      restartBlink(cm);
	    }

	    if (seq && !result && /\'$/.test(name)) {
	      e_preventDefault(e);
	      return true;
	    }
	    return !!result;
	  }

	  // Handle a key from the keydown event.
	  function handleKeyBinding(cm, e) {
	    var name = keyName(e, true);
	    if (!name) return false;

	    if (e.shiftKey && !cm.state.keySeq) {
	      // First try to resolve full name (including 'Shift-'). Failing
	      // that, see if there is a cursor-motion command (starting with
	      // 'go') bound to the keyname without 'Shift-'.
	      return dispatchKey(cm, "Shift-" + name, e, function(b) {return doHandleBinding(cm, b, true);})
	          || dispatchKey(cm, name, e, function(b) {
	               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	                 return doHandleBinding(cm, b);
	             });
	    } else {
	      return dispatchKey(cm, name, e, function(b) { return doHandleBinding(cm, b); });
	    }
	  }

	  // Handle a key from the keypress event
	  function handleCharBinding(cm, e, ch) {
	    return dispatchKey(cm, "'" + ch + "'", e,
	                       function(b) { return doHandleBinding(cm, b, true); });
	  }

	  var lastStoppedKey = null;
	  function onKeyDown(e) {
	    var cm = this;
	    cm.curOp.focus = activeElt();
	    if (signalDOMEvent(cm, e)) return;
	    // IE does strange things with escape.
	    if (ie && ie_version < 11 && e.keyCode == 27) e.returnValue = false;
	    var code = e.keyCode;
	    cm.display.shift = code == 16 || e.shiftKey;
	    var handled = handleKeyBinding(cm, e);
	    if (presto) {
	      lastStoppedKey = handled ? code : null;
	      // Opera has no cut event... we try to at least catch the key combo
	      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	        cm.replaceSelection("", null, "cut");
	    }

	    // Turn mouse into crosshair when Alt is held on Mac.
	    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	      showCrossHair(cm);
	  }

	  function showCrossHair(cm) {
	    var lineDiv = cm.display.lineDiv;
	    addClass(lineDiv, "CodeMirror-crosshair");

	    function up(e) {
	      if (e.keyCode == 18 || !e.altKey) {
	        rmClass(lineDiv, "CodeMirror-crosshair");
	        off(document, "keyup", up);
	        off(document, "mouseover", up);
	      }
	    }
	    on(document, "keyup", up);
	    on(document, "mouseover", up);
	  }

	  function onKeyUp(e) {
	    if (e.keyCode == 16) this.doc.sel.shift = false;
	    signalDOMEvent(this, e);
	  }

	  function onKeyPress(e) {
	    var cm = this;
	    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) return;
	    var keyCode = e.keyCode, charCode = e.charCode;
	    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return;}
	    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) return;
	    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
	    if (handleCharBinding(cm, e, ch)) return;
	    cm.display.input.onKeyPress(e);
	  }

	  // FOCUS/BLUR EVENTS

	  function delayBlurEvent(cm) {
	    cm.state.delayingBlurEvent = true;
	    setTimeout(function() {
	      if (cm.state.delayingBlurEvent) {
	        cm.state.delayingBlurEvent = false;
	        onBlur(cm);
	      }
	    }, 100);
	  }

	  function onFocus(cm, e) {
	    if (cm.state.delayingBlurEvent) cm.state.delayingBlurEvent = false;

	    if (cm.options.readOnly == "nocursor") return;
	    if (!cm.state.focused) {
	      signal(cm, "focus", cm, e);
	      cm.state.focused = true;
	      addClass(cm.display.wrapper, "CodeMirror-focused");
	      // This test prevents this from firing when a context
	      // menu is closed (since the input reset would kill the
	      // select-all detection hack)
	      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	        cm.display.input.reset();
	        if (webkit) setTimeout(function() { cm.display.input.reset(true); }, 20); // Issue #1730
	      }
	      cm.display.input.receivedFocus();
	    }
	    restartBlink(cm);
	  }
	  function onBlur(cm, e) {
	    if (cm.state.delayingBlurEvent) return;

	    if (cm.state.focused) {
	      signal(cm, "blur", cm, e);
	      cm.state.focused = false;
	      rmClass(cm.display.wrapper, "CodeMirror-focused");
	    }
	    clearInterval(cm.display.blinker);
	    setTimeout(function() {if (!cm.state.focused) cm.display.shift = false;}, 150);
	  }

	  // CONTEXT MENU HANDLING

	  // To make the context menu work, we need to briefly unhide the
	  // textarea (making it as unobtrusive as possible) to let the
	  // right-click take effect on it.
	  function onContextMenu(cm, e) {
	    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) return;
	    if (signalDOMEvent(cm, e, "contextmenu")) return;
	    cm.display.input.onContextMenu(e);
	  }

	  function contextMenuInGutter(cm, e) {
	    if (!hasHandler(cm, "gutterContextMenu")) return false;
	    return gutterEvent(cm, e, "gutterContextMenu", false);
	  }

	  // UPDATING

	  // Compute the position of the end of a change (its 'to' property
	  // refers to the pre-change end).
	  var changeEnd = CodeMirror.changeEnd = function(change) {
	    if (!change.text) return change.to;
	    return Pos(change.from.line + change.text.length - 1,
	               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
	  };

	  // Adjust a position to refer to the post-change position of the
	  // same text, or the end of the change if the change covers it.
	  function adjustForChange(pos, change) {
	    if (cmp(pos, change.from) < 0) return pos;
	    if (cmp(pos, change.to) <= 0) return changeEnd(change);

	    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
	    if (pos.line == change.to.line) ch += changeEnd(change).ch - change.to.ch;
	    return Pos(line, ch);
	  }

	  function computeSelAfterChange(doc, change) {
	    var out = [];
	    for (var i = 0; i < doc.sel.ranges.length; i++) {
	      var range = doc.sel.ranges[i];
	      out.push(new Range(adjustForChange(range.anchor, change),
	                         adjustForChange(range.head, change)));
	    }
	    return normalizeSelection(out, doc.sel.primIndex);
	  }

	  function offsetPos(pos, old, nw) {
	    if (pos.line == old.line)
	      return Pos(nw.line, pos.ch - old.ch + nw.ch);
	    else
	      return Pos(nw.line + (pos.line - old.line), pos.ch);
	  }

	  // Used by replaceSelections to allow moving the selection to the
	  // start or around the replaced test. Hint may be "start" or "around".
	  function computeReplacedSel(doc, changes, hint) {
	    var out = [];
	    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
	    for (var i = 0; i < changes.length; i++) {
	      var change = changes[i];
	      var from = offsetPos(change.from, oldPrev, newPrev);
	      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
	      oldPrev = change.to;
	      newPrev = to;
	      if (hint == "around") {
	        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
	        out[i] = new Range(inv ? to : from, inv ? from : to);
	      } else {
	        out[i] = new Range(from, from);
	      }
	    }
	    return new Selection(out, doc.sel.primIndex);
	  }

	  // Allow "beforeChange" event handlers to influence a change
	  function filterChange(doc, change, update) {
	    var obj = {
	      canceled: false,
	      from: change.from,
	      to: change.to,
	      text: change.text,
	      origin: change.origin,
	      cancel: function() { this.canceled = true; }
	    };
	    if (update) obj.update = function(from, to, text, origin) {
	      if (from) this.from = clipPos(doc, from);
	      if (to) this.to = clipPos(doc, to);
	      if (text) this.text = text;
	      if (origin !== undefined) this.origin = origin;
	    };
	    signal(doc, "beforeChange", doc, obj);
	    if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

	    if (obj.canceled) return null;
	    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin};
	  }

	  // Apply a change to a document, and add it to the document's
	  // history, and propagating it to all linked documents.
	  function makeChange(doc, change, ignoreReadOnly) {
	    if (doc.cm) {
	      if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
	      if (doc.cm.state.suppressEdits) return;
	    }

	    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	      change = filterChange(doc, change, true);
	      if (!change) return;
	    }

	    // Possibly split or suppress the update based on the presence
	    // of read-only spans in its range.
	    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
	    if (split) {
	      for (var i = split.length - 1; i >= 0; --i)
	        makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text});
	    } else {
	      makeChangeInner(doc, change);
	    }
	  }

	  function makeChangeInner(doc, change) {
	    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) return;
	    var selAfter = computeSelAfterChange(doc, change);
	    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

	    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
	    var rebased = [];

	    linkedDocs(doc, function(doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change);
	        rebased.push(doc.history);
	      }
	      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
	    });
	  }

	  // Revert a change stored in a document's history.
	  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	    if (doc.cm && doc.cm.state.suppressEdits && !allowSelectionOnly) return;

	    var hist = doc.history, event, selAfter = doc.sel;
	    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

	    // Verify that there is a useable event (so that ctrl-z won't
	    // needlessly clear selection events)
	    for (var i = 0; i < source.length; i++) {
	      event = source[i];
	      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	        break;
	    }
	    if (i == source.length) return;
	    hist.lastOrigin = hist.lastSelOrigin = null;

	    for (;;) {
	      event = source.pop();
	      if (event.ranges) {
	        pushSelectionToHistory(event, dest);
	        if (allowSelectionOnly && !event.equals(doc.sel)) {
	          setSelection(doc, event, {clearRedo: false});
	          return;
	        }
	        selAfter = event;
	      }
	      else break;
	    }

	    // Build up a reverse change object to add to the opposite history
	    // stack (redo when undoing, and vice versa).
	    var antiChanges = [];
	    pushSelectionToHistory(selAfter, dest);
	    dest.push({changes: antiChanges, generation: hist.generation});
	    hist.generation = event.generation || ++hist.maxGeneration;

	    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

	    for (var i = event.changes.length - 1; i >= 0; --i) {
	      var change = event.changes[i];
	      change.origin = type;
	      if (filter && !filterChange(doc, change, false)) {
	        source.length = 0;
	        return;
	      }

	      antiChanges.push(historyChangeFromChange(doc, change));

	      var after = i ? computeSelAfterChange(doc, change) : lst(source);
	      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
	      if (!i && doc.cm) doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)});
	      var rebased = [];

	      // Propagate to the linked documents
	      linkedDocs(doc, function(doc, sharedHist) {
	        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	          rebaseHist(doc.history, change);
	          rebased.push(doc.history);
	        }
	        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
	      });
	    }
	  }

	  // Sub-views need their line numbers shifted when text is added
	  // above or below them in the parent document.
	  function shiftDoc(doc, distance) {
	    if (distance == 0) return;
	    doc.first += distance;
	    doc.sel = new Selection(map(doc.sel.ranges, function(range) {
	      return new Range(Pos(range.anchor.line + distance, range.anchor.ch),
	                       Pos(range.head.line + distance, range.head.ch));
	    }), doc.sel.primIndex);
	    if (doc.cm) {
	      regChange(doc.cm, doc.first, doc.first - distance, distance);
	      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	        regLineChange(doc.cm, l, "gutter");
	    }
	  }

	  // More lower-level change function, handling only a single document
	  // (not linked ones).
	  function makeChangeSingleDoc(doc, change, selAfter, spans) {
	    if (doc.cm && !doc.cm.curOp)
	      return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

	    if (change.to.line < doc.first) {
	      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
	      return;
	    }
	    if (change.from.line > doc.lastLine()) return;

	    // Clip the change to the size of this doc
	    if (change.from.line < doc.first) {
	      var shift = change.text.length - 1 - (doc.first - change.from.line);
	      shiftDoc(doc, shift);
	      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	                text: [lst(change.text)], origin: change.origin};
	    }
	    var last = doc.lastLine();
	    if (change.to.line > last) {
	      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	                text: [change.text[0]], origin: change.origin};
	    }

	    change.removed = getBetween(doc, change.from, change.to);

	    if (!selAfter) selAfter = computeSelAfterChange(doc, change);
	    if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans);
	    else updateDoc(doc, change, spans);
	    setSelectionNoUndo(doc, selAfter, sel_dontScroll);
	  }

	  // Handle the interaction of a change to a document with the editor
	  // that this document is part of.
	  function makeChangeSingleDocInEditor(cm, change, spans) {
	    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

	    var recomputeMaxLength = false, checkWidthStart = from.line;
	    if (!cm.options.lineWrapping) {
	      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
	      doc.iter(checkWidthStart, to.line + 1, function(line) {
	        if (line == display.maxLine) {
	          recomputeMaxLength = true;
	          return true;
	        }
	      });
	    }

	    if (doc.sel.contains(change.from, change.to) > -1)
	      signalCursorActivity(cm);

	    updateDoc(doc, change, spans, estimateHeight(cm));

	    if (!cm.options.lineWrapping) {
	      doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
	        var len = lineLength(line);
	        if (len > display.maxLineLength) {
	          display.maxLine = line;
	          display.maxLineLength = len;
	          display.maxLineChanged = true;
	          recomputeMaxLength = false;
	        }
	      });
	      if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
	    }

	    // Adjust frontier, schedule worker
	    doc.frontier = Math.min(doc.frontier, from.line);
	    startWorker(cm, 400);

	    var lendiff = change.text.length - (to.line - from.line) - 1;
	    // Remember that these lines changed, for updating the display
	    if (change.full)
	      regChange(cm);
	    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	      regLineChange(cm, from.line, "text");
	    else
	      regChange(cm, from.line, to.line + 1, lendiff);

	    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
	    if (changeHandler || changesHandler) {
	      var obj = {
	        from: from, to: to,
	        text: change.text,
	        removed: change.removed,
	        origin: change.origin
	      };
	      if (changeHandler) signalLater(cm, "change", cm, obj);
	      if (changesHandler) (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
	    }
	    cm.display.selForContextMenu = null;
	  }

	  function replaceRange(doc, code, from, to, origin) {
	    if (!to) to = from;
	    if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp; }
	    if (typeof code == "string") code = doc.splitLines(code);
	    makeChange(doc, {from: from, to: to, text: code, origin: origin});
	  }

	  // SCROLLING THINGS INTO VIEW

	  // If an editor sits on the top or bottom of the window, partially
	  // scrolled out of view, this ensures that the cursor is visible.
	  function maybeScrollWindow(cm, coords) {
	    if (signalDOMEvent(cm, "scrollCursorIntoView")) return;

	    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
	    if (coords.top + box.top < 0) doScroll = true;
	    else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
	    if (doScroll != null && !phantom) {
	      var scrollNode = elt("div", "\u200b", null, "position: absolute; top: " +
	                           (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " +
	                           (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px; left: " +
	                           coords.left + "px; width: 2px;");
	      cm.display.lineSpace.appendChild(scrollNode);
	      scrollNode.scrollIntoView(doScroll);
	      cm.display.lineSpace.removeChild(scrollNode);
	    }
	  }

	  // Scroll a given position into view (immediately), verifying that
	  // it actually became visible (as line heights are accurately
	  // measured, the position of something may 'drift' during drawing).
	  function scrollPosIntoView(cm, pos, end, margin) {
	    if (margin == null) margin = 0;
	    for (var limit = 0; limit < 5; limit++) {
	      var changed = false, coords = cursorCoords(cm, pos);
	      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
	      var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
	                                         Math.min(coords.top, endCoords.top) - margin,
	                                         Math.max(coords.left, endCoords.left),
	                                         Math.max(coords.bottom, endCoords.bottom) + margin);
	      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
	      if (scrollPos.scrollTop != null) {
	        setScrollTop(cm, scrollPos.scrollTop);
	        if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
	      }
	      if (scrollPos.scrollLeft != null) {
	        setScrollLeft(cm, scrollPos.scrollLeft);
	        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
	      }
	      if (!changed) break;
	    }
	    return coords;
	  }

	  // Scroll a given set of coordinates into view (immediately).
	  function scrollIntoView(cm, x1, y1, x2, y2) {
	    var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
	    if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
	    if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
	  }

	  // Calculate a new scroll position needed to scroll the given
	  // rectangle into view. Returns an object with scrollTop and
	  // scrollLeft properties. When these are undefined, the
	  // vertical/horizontal position does not need to be adjusted.
	  function calculateScrollPos(cm, x1, y1, x2, y2) {
	    var display = cm.display, snapMargin = textHeight(cm.display);
	    if (y1 < 0) y1 = 0;
	    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
	    var screen = displayHeight(cm), result = {};
	    if (y2 - y1 > screen) y2 = y1 + screen;
	    var docBottom = cm.doc.height + paddingVert(display);
	    var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin;
	    if (y1 < screentop) {
	      result.scrollTop = atTop ? 0 : y1;
	    } else if (y2 > screentop + screen) {
	      var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
	      if (newTop != screentop) result.scrollTop = newTop;
	    }

	    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
	    var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
	    var tooWide = x2 - x1 > screenw;
	    if (tooWide) x2 = x1 + screenw;
	    if (x1 < 10)
	      result.scrollLeft = 0;
	    else if (x1 < screenleft)
	      result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10));
	    else if (x2 > screenw + screenleft - 3)
	      result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw;
	    return result;
	  }

	  // Store a relative adjustment to the scroll position in the current
	  // operation (to be applied when the operation finishes).
	  function addToScrollPos(cm, left, top) {
	    if (left != null || top != null) resolveScrollToPos(cm);
	    if (left != null)
	      cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left;
	    if (top != null)
	      cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
	  }

	  // Make sure that at the end of the operation the current cursor is
	  // shown.
	  function ensureCursorVisible(cm) {
	    resolveScrollToPos(cm);
	    var cur = cm.getCursor(), from = cur, to = cur;
	    if (!cm.options.lineWrapping) {
	      from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur;
	      to = Pos(cur.line, cur.ch + 1);
	    }
	    cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true};
	  }

	  // When an operation has its scrollToPos property set, and another
	  // scroll action is applied before the end of the operation, this
	  // 'simulates' scrolling that position into view in a cheap way, so
	  // that the effect of intermediate scroll commands is not ignored.
	  function resolveScrollToPos(cm) {
	    var range = cm.curOp.scrollToPos;
	    if (range) {
	      cm.curOp.scrollToPos = null;
	      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
	      var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
	                                    Math.min(from.top, to.top) - range.margin,
	                                    Math.max(from.right, to.right),
	                                    Math.max(from.bottom, to.bottom) + range.margin);
	      cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	    }
	  }

	  // API UTILITIES

	  // Indent the given line. The how parameter can be "smart",
	  // "add"/null, "subtract", or "prev". When aggressive is false
	  // (typically set to true for forced single-line indents), empty
	  // lines are not indented, and places where the mode returns Pass
	  // are left alone.
	  function indentLine(cm, n, how, aggressive) {
	    var doc = cm.doc, state;
	    if (how == null) how = "add";
	    if (how == "smart") {
	      // Fall back to "prev" when the mode doesn't have an indentation
	      // method.
	      if (!doc.mode.indent) how = "prev";
	      else state = getStateBefore(cm, n);
	    }

	    var tabSize = cm.options.tabSize;
	    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
	    if (line.stateAfter) line.stateAfter = null;
	    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
	    if (!aggressive && !/\S/.test(line.text)) {
	      indentation = 0;
	      how = "not";
	    } else if (how == "smart") {
	      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
	      if (indentation == Pass || indentation > 150) {
	        if (!aggressive) return;
	        how = "prev";
	      }
	    }
	    if (how == "prev") {
	      if (n > doc.first) indentation = countColumn(getLine(doc, n-1).text, null, tabSize);
	      else indentation = 0;
	    } else if (how == "add") {
	      indentation = curSpace + cm.options.indentUnit;
	    } else if (how == "subtract") {
	      indentation = curSpace - cm.options.indentUnit;
	    } else if (typeof how == "number") {
	      indentation = curSpace + how;
	    }
	    indentation = Math.max(0, indentation);

	    var indentString = "", pos = 0;
	    if (cm.options.indentWithTabs)
	      for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
	    if (pos < indentation) indentString += spaceStr(indentation - pos);

	    if (indentString != curSpaceString) {
	      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
	      line.stateAfter = null;
	      return true;
	    } else {
	      // Ensure that, if the cursor was in the whitespace at the start
	      // of the line, it is moved to the end of that space.
	      for (var i = 0; i < doc.sel.ranges.length; i++) {
	        var range = doc.sel.ranges[i];
	        if (range.head.line == n && range.head.ch < curSpaceString.length) {
	          var pos = Pos(n, curSpaceString.length);
	          replaceOneSelection(doc, i, new Range(pos, pos));
	          break;
	        }
	      }
	    }
	  }

	  // Utility for applying a change to a line by handle or number,
	  // returning the number and optionally registering the line as
	  // changed.
	  function changeLine(doc, handle, changeType, op) {
	    var no = handle, line = handle;
	    if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
	    else no = lineNo(handle);
	    if (no == null) return null;
	    if (op(line, no) && doc.cm) regLineChange(doc.cm, no, changeType);
	    return line;
	  }

	  // Helper for deleting text near the selection(s), used to implement
	  // backspace, delete, and similar functionality.
	  function deleteNearSelection(cm, compute) {
	    var ranges = cm.doc.sel.ranges, kill = [];
	    // Build up a set of ranges to kill first, merging overlapping
	    // ranges.
	    for (var i = 0; i < ranges.length; i++) {
	      var toKill = compute(ranges[i]);
	      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	        var replaced = kill.pop();
	        if (cmp(replaced.from, toKill.from) < 0) {
	          toKill.from = replaced.from;
	          break;
	        }
	      }
	      kill.push(toKill);
	    }
	    // Next, remove those actual ranges.
	    runInOp(cm, function() {
	      for (var i = kill.length - 1; i >= 0; i--)
	        replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
	      ensureCursorVisible(cm);
	    });
	  }

	  // Used for horizontal relative motion. Dir is -1 or 1 (left or
	  // right), unit can be "char", "column" (like char, but doesn't
	  // cross line boundaries), "word" (across next word), or "group" (to
	  // the start of next group of word or non-word-non-whitespace
	  // chars). The visually param controls whether, in right-to-left
	  // text, direction 1 means to move towards the next index in the
	  // string, or towards the character to the right of the current
	  // position. The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosH(doc, pos, dir, unit, visually) {
	    var line = pos.line, ch = pos.ch, origDir = dir;
	    var lineObj = getLine(doc, line);
	    function findNextLine() {
	      var l = line + dir;
	      if (l < doc.first || l >= doc.first + doc.size) return false
	      line = l;
	      return lineObj = getLine(doc, l);
	    }
	    function moveOnce(boundToLine) {
	      var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
	      if (next == null) {
	        if (!boundToLine && findNextLine()) {
	          if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
	          else ch = dir < 0 ? lineObj.text.length : 0;
	        } else return false
	      } else ch = next;
	      return true;
	    }

	    if (unit == "char") {
	      moveOnce()
	    } else if (unit == "column") {
	      moveOnce(true)
	    } else if (unit == "word" || unit == "group") {
	      var sawType = null, group = unit == "group";
	      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
	      for (var first = true;; first = false) {
	        if (dir < 0 && !moveOnce(!first)) break;
	        var cur = lineObj.text.charAt(ch) || "\n";
	        var type = isWordChar(cur, helper) ? "w"
	          : group && cur == "\n" ? "n"
	          : !group || /\s/.test(cur) ? null
	          : "p";
	        if (group && !first && !type) type = "s";
	        if (sawType && sawType != type) {
	          if (dir < 0) {dir = 1; moveOnce();}
	          break;
	        }

	        if (type) sawType = type;
	        if (dir > 0 && !moveOnce(!first)) break;
	      }
	    }
	    var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true);
	    if (!cmp(pos, result)) result.hitSide = true;
	    return result;
	  }

	  // For relative vertical movement. Dir may be -1 or 1. Unit can be
	  // "page" or "line". The resulting position will have a hitSide=true
	  // property if it reached the end of the document.
	  function findPosV(cm, pos, dir, unit) {
	    var doc = cm.doc, x = pos.left, y;
	    if (unit == "page") {
	      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
	      var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
	      y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;
	    } else if (unit == "line") {
	      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
	    }
	    for (;;) {
	      var target = coordsChar(cm, x, y);
	      if (!target.outside) break;
	      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break; }
	      y += dir * 5;
	    }
	    return target;
	  }

	  // EDITOR METHODS

	  // The publicly visible API. Note that methodOp(f) means
	  // 'wrap f in an operation, performed on its `this` parameter'.

	  // This is not the complete set of editor methods. Most of the
	  // methods defined on the Doc type are also injected into
	  // CodeMirror.prototype, for backwards compatibility and
	  // convenience.

	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); this.display.input.focus();},

	    setOption: function(option, value) {
	      var options = this.options, old = options[option];
	      if (options[option] == value && option != "mode") return;
	      options[option] = value;
	      if (optionHandlers.hasOwnProperty(option))
	        operation(this, optionHandlers[option])(this, value, old);
	    },

	    getOption: function(option) {return this.options[option];},
	    getDoc: function() {return this.doc;},

	    addKeyMap: function(map, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
	    },
	    removeKeyMap: function(map) {
	      var maps = this.state.keyMaps;
	      for (var i = 0; i < maps.length; ++i)
	        if (maps[i] == map || maps[i].name == map) {
	          maps.splice(i, 1);
	          return true;
	        }
	    },

	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
	      if (mode.startState) throw new Error("Overlays may not be stateful.");
	      insertSorted(this.state.overlays,
	                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
	                    priority: (options && options.priority) || 0},
	                   function(overlay) { return overlay.priority })
	      this.state.modeGen++;
	      regChange(this);
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var overlays = this.state.overlays;
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec;
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1);
	          this.state.modeGen++;
	          regChange(this);
	          return;
	        }
	      }
	    }),

	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
	        else dir = dir ? "add" : "subtract";
	      }
	      if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
	    }),
	    indentSelection: methodOp(function(how) {
	      var ranges = this.doc.sel.ranges, end = -1;
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i];
	        if (!range.empty()) {
	          var from = range.from(), to = range.to();
	          var start = Math.max(end, from.line);
	          end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
	          for (var j = start; j < end; ++j)
	            indentLine(this, j, how);
	          var newRanges = this.doc.sel.ranges;
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
	        } else if (range.head.line > end) {
	          indentLine(this, range.head.line, how, true);
	          end = range.head.line;
	          if (i == this.doc.sel.primIndex) ensureCursorVisible(this);
	        }
	      }
	    }),

	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise);
	    },

	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true);
	    },

	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos);
	      var styles = getLineStyles(this, getLine(this.doc, pos.line));
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
	      var type;
	      if (ch == 0) type = styles[2];
	      else for (;;) {
	        var mid = (before + after) >> 1;
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
	        else if (styles[mid * 2 + 1] < ch) before = mid + 1;
	        else { type = styles[mid * 2 + 2]; break; }
	      }
	      var cut = type ? type.indexOf("cm-overlay ") : -1;
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1);
	    },

	    getModeAt: function(pos) {
	      var mode = this.doc.mode;
	      if (!mode.innerMode) return mode;
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
	    },

	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0];
	    },

	    getHelpers: function(pos, type) {
	      var found = [];
	      if (!helpers.hasOwnProperty(type)) return found;
	      var help = helpers[type], mode = this.getModeAt(pos);
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) found.push(help[mode[type]]);
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]];
	          if (val) found.push(val);
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType]);
	      } else if (help[mode.name]) {
	        found.push(help[mode.name]);
	      }
	      for (var i = 0; i < help._global.length; i++) {
	        var cur = help._global[i];
	        if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
	          found.push(cur.val);
	      }
	      return found;
	    },

	    getStateAfter: function(line, precise) {
	      var doc = this.doc;
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
	      return getStateBefore(this, line + 1, precise);
	    },

	    cursorCoords: function(start, mode) {
	      var pos, range = this.doc.sel.primary();
	      if (start == null) pos = range.head;
	      else if (typeof start == "object") pos = clipPos(this.doc, start);
	      else pos = start ? range.from() : range.to();
	      return cursorCoords(this, pos, mode || "page");
	    },

	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page");
	    },

	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page");
	      return coordsChar(this, coords.left, coords.top);
	    },

	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
	      return lineAtHeight(this.doc, height + this.display.viewOffset);
	    },
	    heightAtLine: function(line, mode) {
	      var end = false, lineObj;
	      if (typeof line == "number") {
	        var last = this.doc.first + this.doc.size - 1;
	        if (line < this.doc.first) line = this.doc.first;
	        else if (line > last) { line = last; end = true; }
	        lineObj = getLine(this.doc, line);
	      } else {
	        lineObj = line;
	      }
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page").top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0);
	    },

	    defaultTextHeight: function() { return textHeight(this.display); },
	    defaultCharWidth: function() { return charWidth(this.display); },

	    setGutterMarker: methodOp(function(line, gutterID, value) {
	      return changeLine(this.doc, line, "gutter", function(line) {
	        var markers = line.gutterMarkers || (line.gutterMarkers = {});
	        markers[gutterID] = value;
	        if (!value && isEmpty(markers)) line.gutterMarkers = null;
	        return true;
	      });
	    }),

	    clearGutter: methodOp(function(gutterID) {
	      var cm = this, doc = cm.doc, i = doc.first;
	      doc.iter(function(line) {
	        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	          line.gutterMarkers[gutterID] = null;
	          regLineChange(cm, i, "gutter");
	          if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
	        }
	        ++i;
	      });
	    }),

	    lineInfo: function(line) {
	      if (typeof line == "number") {
	        if (!isLine(this.doc, line)) return null;
	        var n = line;
	        line = getLine(this.doc, line);
	        if (!line) return null;
	      } else {
	        var n = lineNo(line);
	        if (n == null) return null;
	      }
	      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	              widgets: line.widgets};
	    },

	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo};},

	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display;
	      pos = cursorCoords(this, clipPos(this.doc, pos));
	      var top = pos.bottom, left = pos.left;
	      node.style.position = "absolute";
	      node.setAttribute("cm-ignore-events", "true");
	      this.display.input.setUneditable(node);
	      display.sizer.appendChild(node);
	      if (vert == "over") {
	        top = pos.top;
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          top = pos.top - node.offsetHeight;
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          top = pos.bottom;
	        if (left + node.offsetWidth > hspace)
	          left = hspace - node.offsetWidth;
	      }
	      node.style.top = top + "px";
	      node.style.left = node.style.right = "";
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth;
	        node.style.right = "0px";
	      } else {
	        if (horiz == "left") left = 0;
	        else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
	        node.style.left = left + "px";
	      }
	      if (scroll)
	        scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
	    },

	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,

	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        return commands[cmd].call(null, this);
	    },

	    triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

	    findPosH: function(from, amount, unit, visually) {
	      var dir = 1;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        cur = findPosH(this.doc, cur, dir, unit, visually);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveH: methodOp(function(dir, unit) {
	      var cm = this;
	      cm.extendSelectionsBy(function(range) {
	        if (cm.display.shift || cm.doc.extend || range.empty())
	          return findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually);
	        else
	          return dir < 0 ? range.from() : range.to();
	      }, sel_move);
	    }),

	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc;
	      if (sel.somethingSelected())
	        doc.replaceSelection("", null, "+delete");
	      else
	        deleteNearSelection(this, function(range) {
	          var other = findPosH(doc, range.head, dir, unit, false);
	          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other};
	        });
	    }),

	    findPosV: function(from, amount, unit, goalColumn) {
	      var dir = 1, x = goalColumn;
	      if (amount < 0) { dir = -1; amount = -amount; }
	      for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
	        var coords = cursorCoords(this, cur, "div");
	        if (x == null) x = coords.left;
	        else coords.left = x;
	        cur = findPosV(this, coords, dir, unit);
	        if (cur.hitSide) break;
	      }
	      return cur;
	    },

	    moveV: methodOp(function(dir, unit) {
	      var cm = this, doc = this.doc, goals = [];
	      var collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
	      doc.extendSelectionsBy(function(range) {
	        if (collapse)
	          return dir < 0 ? range.from() : range.to();
	        var headPos = cursorCoords(cm, range.head, "div");
	        if (range.goalColumn != null) headPos.left = range.goalColumn;
	        goals.push(headPos.left);
	        var pos = findPosV(cm, headPos, dir, unit);
	        if (unit == "page" && range == doc.sel.primary())
	          addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top);
	        return pos;
	      }, sel_move);
	      if (goals.length) for (var i = 0; i < doc.sel.ranges.length; i++)
	        doc.sel.ranges[i].goalColumn = goals[i];
	    }),

	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text;
	      var start = pos.ch, end = pos.ch;
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars");
	        if ((pos.xRel < 0 || end == line.length) && start) --start; else ++end;
	        var startChar = line.charAt(start);
	        var check = isWordChar(startChar, helper)
	          ? function(ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function(ch) {return /\s/.test(ch);}
	          : function(ch) {return !/\s/.test(ch) && !isWordChar(ch);};
	        while (start > 0 && check(line.charAt(start - 1))) --start;
	        while (end < line.length && check(line.charAt(end))) ++end;
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end));
	    },

	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) return;
	      if (this.state.overwrite = !this.state.overwrite)
	        addClass(this.display.cursorDiv, "CodeMirror-overwrite");
	      else
	        rmClass(this.display.cursorDiv, "CodeMirror-overwrite");

	      signal(this, "overwriteToggle", this, this.state.overwrite);
	    },
	    hasFocus: function() { return this.display.input.getField() == activeElt(); },
	    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit); },

	    scrollTo: methodOp(function(x, y) {
	      if (x != null || y != null) resolveScrollToPos(this);
	      if (x != null) this.curOp.scrollLeft = x;
	      if (y != null) this.curOp.scrollTop = y;
	    }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller;
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)};
	    },

	    scrollIntoView: methodOp(function(range, margin) {
	      if (range == null) {
	        range = {from: this.doc.sel.primary().head, to: null};
	        if (margin == null) margin = this.options.cursorScrollMargin;
	      } else if (typeof range == "number") {
	        range = {from: Pos(range, 0), to: null};
	      } else if (range.from == null) {
	        range = {from: range, to: null};
	      }
	      if (!range.to) range.to = range.from;
	      range.margin = margin || 0;

	      if (range.from.line != null) {
	        resolveScrollToPos(this);
	        this.curOp.scrollToPos = range;
	      } else {
	        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
	                                      Math.min(range.from.top, range.to.top) - range.margin,
	                                      Math.max(range.from.right, range.to.right),
	                                      Math.max(range.from.bottom, range.to.bottom) + range.margin);
	        this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
	      }
	    }),

	    setSize: methodOp(function(width, height) {
	      var cm = this;
	      function interpret(val) {
	        return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
	      }
	      if (width != null) cm.display.wrapper.style.width = interpret(width);
	      if (height != null) cm.display.wrapper.style.height = interpret(height);
	      if (cm.options.lineWrapping) clearLineMeasurementCache(this);
	      var lineNo = cm.display.viewFrom;
	      cm.doc.iter(lineNo, cm.display.viewTo, function(line) {
	        if (line.widgets) for (var i = 0; i < line.widgets.length; i++)
	          if (line.widgets[i].noHScroll) { regLineChange(cm, lineNo, "widget"); break; }
	        ++lineNo;
	      });
	      cm.curOp.forceUpdate = true;
	      signal(cm, "refresh", this);
	    }),

	    operation: function(f){return runInOp(this, f);},

	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight;
	      regChange(this);
	      this.curOp.forceUpdate = true;
	      clearCaches(this);
	      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop);
	      updateGutterSpace(this);
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        estimateLineHeights(this);
	      signal(this, "refresh", this);
	    }),

	    swapDoc: methodOp(function(doc) {
	      var old = this.doc;
	      old.cm = null;
	      attachDoc(this, doc);
	      clearCaches(this);
	      this.display.input.reset();
	      this.scrollTo(doc.scrollLeft, doc.scrollTop);
	      this.curOp.forceScroll = true;
	      signalLater(this, "swapDoc", this, old);
	      return old;
	    }),

	    getInputField: function(){return this.display.input.getField();},
	    getWrapperElement: function(){return this.display.wrapper;},
	    getScrollerElement: function(){return this.display.scroller;},
	    getGutterElement: function(){return this.display.gutters;}
	  };
	  eventMixin(CodeMirror);

	  // OPTION DEFAULTS

	  // The default configuration options.
	  var defaults = CodeMirror.defaults = {};
	  // Functions to run when options are changed.
	  var optionHandlers = CodeMirror.optionHandlers = {};

	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt;
	    if (handle) optionHandlers[name] =
	      notOnInit ? function(cm, val, old) {if (old != Init) handle(cm, val, old);} : handle;
	  }

	  // Passed to option handlers when there is no old value.
	  var Init = CodeMirror.Init = {toString: function(){return "CodeMirror.Init";}};

	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function(cm, val) {
	    cm.setValue(val);
	  }, true);
	  option("mode", null, function(cm, val) {
	    cm.doc.modeOption = val;
	    loadMode(cm);
	  }, true);

	  option("indentUnit", 2, loadMode, true);
	  option("indentWithTabs", false);
	  option("smartIndent", true);
	  option("tabSize", 4, function(cm) {
	    resetModeState(cm);
	    clearCaches(cm);
	    regChange(cm);
	  }, true);
	  option("lineSeparator", null, function(cm, val) {
	    cm.doc.lineSep = val;
	    if (!val) return;
	    var newBreaks = [], lineNo = cm.doc.first;
	    cm.doc.iter(function(line) {
	      for (var pos = 0;;) {
	        var found = line.text.indexOf(val, pos);
	        if (found == -1) break;
	        pos = found + val.length;
	        newBreaks.push(Pos(lineNo, found));
	      }
	      lineNo++;
	    });
	    for (var i = newBreaks.length - 1; i >= 0; i--)
	      replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length))
	  });
	  option("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(cm, val, old) {
	    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
	    if (old != CodeMirror.Init) cm.refresh();
	  });
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {cm.refresh();}, true);
	  option("electricChars", true);
	  option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
	    throw new Error("inputStyle can not (yet) be changed in a running editor"); // FIXME
	  }, true);
	  option("spellcheck", false, function(cm, val) {
	    cm.getInputField().spellcheck = val
	  }, true);
	  option("rtlMoveVisually", !windows);
	  option("wholeLineUpdateBefore", true);

	  option("theme", "default", function(cm) {
	    themeChanged(cm);
	    guttersChanged(cm);
	  }, true);
	  option("keyMap", "default", function(cm, val, old) {
	    var next = getKeyMap(val);
	    var prev = old != CodeMirror.Init && getKeyMap(old);
	    if (prev && prev.detach) prev.detach(cm, next);
	    if (next.attach) next.attach(cm, prev || null);
	  });
	  option("extraKeys", null);

	  option("lineWrapping", false, wrappingChanged, true);
	  option("gutters", [], function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("fixedGutter", true, function(cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
	    cm.refresh();
	  }, true);
	  option("coverGutterNextToScrollbar", false, function(cm) {updateScrollbars(cm);}, true);
	  option("scrollbarStyle", "native", function(cm) {
	    initScrollbars(cm);
	    updateScrollbars(cm);
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
	  }, true);
	  option("lineNumbers", false, function(cm) {
	    setGuttersForLineNumbers(cm.options);
	    guttersChanged(cm);
	  }, true);
	  option("firstLineNumber", 1, guttersChanged, true);
	  option("lineNumberFormatter", function(integer) {return integer;}, guttersChanged, true);
	  option("showCursorWhenSelecting", false, updateSelection, true);

	  option("resetSelectionOnContextMenu", true);
	  option("lineWiseCopyCut", true);

	  option("readOnly", false, function(cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm);
	      cm.display.input.blur();
	      cm.display.disabled = true;
	    } else {
	      cm.display.disabled = false;
	    }
	    cm.display.input.readOnlyChanged(val)
	  });
	  option("disableInput", false, function(cm, val) {if (!val) cm.display.input.reset();}, true);
	  option("dragDrop", true, dragDropChanged);
	  option("allowDropFileTypes", null);

	  option("cursorBlinkRate", 530);
	  option("cursorScrollMargin", 0);
	  option("cursorHeight", 1, updateSelection, true);
	  option("singleCursorHeightPerLine", true, updateSelection, true);
	  option("workTime", 100);
	  option("workDelay", 100);
	  option("flattenSpans", true, resetModeState, true);
	  option("addModeClass", false, resetModeState, true);
	  option("pollInterval", 100);
	  option("undoDepth", 200, function(cm, val){cm.doc.history.undoDepth = val;});
	  option("historyEventDelay", 1250);
	  option("viewportMargin", 10, function(cm){cm.refresh();}, true);
	  option("maxHighlightLength", 10000, resetModeState, true);
	  option("moveInputWithCursor", true, function(cm, val) {
	    if (!val) cm.display.input.resetPosition();
	  });

	  option("tabindex", null, function(cm, val) {
	    cm.display.input.getField().tabIndex = val || "";
	  });
	  option("autofocus", null);

	  // MODE DEFINITION AND QUERYING

	  // Known modes, by name and by MIME
	  var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};

	  // Extra arguments are stored as the mode's dependencies, which is
	  // used by (legacy) mechanisms like loadmode.js to automatically
	  // load a mode. (Preferred mechanism is the require/define calls.)
	  CodeMirror.defineMode = function(name, mode) {
	    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
	    if (arguments.length > 2)
	      mode.dependencies = Array.prototype.slice.call(arguments, 2);
	    modes[name] = mode;
	  };

	  CodeMirror.defineMIME = function(mime, spec) {
	    mimeModes[mime] = spec;
	  };

	  // Given a MIME type, a {name, ...options} config object, or a name
	  // string, return a mode config object.
	  CodeMirror.resolveMode = function(spec) {
	    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	      spec = mimeModes[spec];
	    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	      var found = mimeModes[spec.name];
	      if (typeof found == "string") found = {name: found};
	      spec = createObj(found, spec);
	      spec.name = found.name;
	    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	      return CodeMirror.resolveMode("application/xml");
	    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
	      return CodeMirror.resolveMode("application/json");
	    }
	    if (typeof spec == "string") return {name: spec};
	    else return spec || {name: "null"};
	  };

	  // Given a mode spec (anything that resolveMode accepts), find and
	  // initialize an actual mode object.
	  CodeMirror.getMode = function(options, spec) {
	    var spec = CodeMirror.resolveMode(spec);
	    var mfactory = modes[spec.name];
	    if (!mfactory) return CodeMirror.getMode(options, "text/plain");
	    var modeObj = mfactory(options, spec);
	    if (modeExtensions.hasOwnProperty(spec.name)) {
	      var exts = modeExtensions[spec.name];
	      for (var prop in exts) {
	        if (!exts.hasOwnProperty(prop)) continue;
	        if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
	        modeObj[prop] = exts[prop];
	      }
	    }
	    modeObj.name = spec.name;
	    if (spec.helperType) modeObj.helperType = spec.helperType;
	    if (spec.modeProps) for (var prop in spec.modeProps)
	      modeObj[prop] = spec.modeProps[prop];

	    return modeObj;
	  };

	  // Minimal default mode.
	  CodeMirror.defineMode("null", function() {
	    return {token: function(stream) {stream.skipToEnd();}};
	  });
	  CodeMirror.defineMIME("text/plain", "null");

	  // This can be used to attach properties to mode objects from
	  // outside the actual mode definition.
	  var modeExtensions = CodeMirror.modeExtensions = {};
	  CodeMirror.extendMode = function(mode, properties) {
	    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
	    copyObj(properties, exts);
	  };

	  // EXTENSIONS

	  CodeMirror.defineExtension = function(name, func) {
	    CodeMirror.prototype[name] = func;
	  };
	  CodeMirror.defineDocExtension = function(name, func) {
	    Doc.prototype[name] = func;
	  };
	  CodeMirror.defineOption = option;

	  var initHooks = [];
	  CodeMirror.defineInitHook = function(f) {initHooks.push(f);};

	  var helpers = CodeMirror.helpers = {};
	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {_global: []};
	    helpers[type][name] = value;
	  };
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value);
	    helpers[type]._global.push({pred: predicate, val: value});
	  };

	  // MODE STATE HANDLING

	  // Utility functions for working with state. Exported because nested
	  // modes need to do this for their inner modes.

	  var copyState = CodeMirror.copyState = function(mode, state) {
	    if (state === true) return state;
	    if (mode.copyState) return mode.copyState(state);
	    var nstate = {};
	    for (var n in state) {
	      var val = state[n];
	      if (val instanceof Array) val = val.concat([]);
	      nstate[n] = val;
	    }
	    return nstate;
	  };

	  var startState = CodeMirror.startState = function(mode, a1, a2) {
	    return mode.startState ? mode.startState(a1, a2) : true;
	  };

	  // Given a mode and a state (for that mode), find the inner mode and
	  // state at the position that the state refers to.
	  CodeMirror.innerMode = function(mode, state) {
	    while (mode.innerMode) {
	      var info = mode.innerMode(state);
	      if (!info || info.mode == mode) break;
	      state = info.state;
	      mode = info.mode;
	    }
	    return info || {mode: mode, state: state};
	  };

	  // STANDARD COMMANDS

	  // Commands are parameter-less actions that can be performed on an
	  // editor, mostly used for keybindings.
	  var commands = CodeMirror.commands = {
	    selectAll: function(cm) {cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);},
	    singleSelection: function(cm) {
	      cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
	    },
	    killLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        if (range.empty()) {
	          var len = getLine(cm.doc, range.head.line).text.length;
	          if (range.head.ch == len && range.head.line < cm.lastLine())
	            return {from: range.head, to: Pos(range.head.line + 1, 0)};
	          else
	            return {from: range.head, to: Pos(range.head.line, len)};
	        } else {
	          return {from: range.from(), to: range.to()};
	        }
	      });
	    },
	    deleteLine: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0),
	                to: clipPos(cm.doc, Pos(range.to().line + 1, 0))};
	      });
	    },
	    delLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        return {from: Pos(range.from().line, 0), to: range.from()};
	      });
	    },
	    delWrappedLineLeft: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var leftPos = cm.coordsChar({left: 0, top: top}, "div");
	        return {from: leftPos, to: range.from()};
	      });
	    },
	    delWrappedLineRight: function(cm) {
	      deleteNearSelection(cm, function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	        return {from: range.from(), to: rightPos };
	      });
	    },
	    undo: function(cm) {cm.undo();},
	    redo: function(cm) {cm.redo();},
	    undoSelection: function(cm) {cm.undoSelection();},
	    redoSelection: function(cm) {cm.redoSelection();},
	    goDocStart: function(cm) {cm.extendSelection(Pos(cm.firstLine(), 0));},
	    goDocEnd: function(cm) {cm.extendSelection(Pos(cm.lastLine()));},
	    goLineStart: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineStart(cm, range.head.line); },
	                            {origin: "+move", bias: 1});
	    },
	    goLineStartSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        return lineStartSmart(cm, range.head);
	      }, {origin: "+move", bias: 1});
	    },
	    goLineEnd: function(cm) {
	      cm.extendSelectionsBy(function(range) { return lineEnd(cm, range.head.line); },
	                            {origin: "+move", bias: -1});
	    },
	    goLineRight: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeft: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        return cm.coordsChar({left: 0, top: top}, "div");
	      }, sel_move);
	    },
	    goLineLeftSmart: function(cm) {
	      cm.extendSelectionsBy(function(range) {
	        var top = cm.charCoords(range.head, "div").top + 5;
	        var pos = cm.coordsChar({left: 0, top: top}, "div");
	        if (pos.ch < cm.getLine(pos.line).search(/\S/)) return lineStartSmart(cm, range.head);
	        return pos;
	      }, sel_move);
	    },
	    goLineUp: function(cm) {cm.moveV(-1, "line");},
	    goLineDown: function(cm) {cm.moveV(1, "line");},
	    goPageUp: function(cm) {cm.moveV(-1, "page");},
	    goPageDown: function(cm) {cm.moveV(1, "page");},
	    goCharLeft: function(cm) {cm.moveH(-1, "char");},
	    goCharRight: function(cm) {cm.moveH(1, "char");},
	    goColumnLeft: function(cm) {cm.moveH(-1, "column");},
	    goColumnRight: function(cm) {cm.moveH(1, "column");},
	    goWordLeft: function(cm) {cm.moveH(-1, "word");},
	    goGroupRight: function(cm) {cm.moveH(1, "group");},
	    goGroupLeft: function(cm) {cm.moveH(-1, "group");},
	    goWordRight: function(cm) {cm.moveH(1, "word");},
	    delCharBefore: function(cm) {cm.deleteH(-1, "char");},
	    delCharAfter: function(cm) {cm.deleteH(1, "char");},
	    delWordBefore: function(cm) {cm.deleteH(-1, "word");},
	    delWordAfter: function(cm) {cm.deleteH(1, "word");},
	    delGroupBefore: function(cm) {cm.deleteH(-1, "group");},
	    delGroupAfter: function(cm) {cm.deleteH(1, "group");},
	    indentAuto: function(cm) {cm.indentSelection("smart");},
	    indentMore: function(cm) {cm.indentSelection("add");},
	    indentLess: function(cm) {cm.indentSelection("subtract");},
	    insertTab: function(cm) {cm.replaceSelection("\t");},
	    insertSoftTab: function(cm) {
	      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
	      for (var i = 0; i < ranges.length; i++) {
	        var pos = ranges[i].from();
	        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
	        spaces.push(spaceStr(tabSize - col % tabSize));
	      }
	      cm.replaceSelections(spaces);
	    },
	    defaultTab: function(cm) {
	      if (cm.somethingSelected()) cm.indentSelection("add");
	      else cm.execCommand("insertTab");
	    },
	    transposeChars: function(cm) {
	      runInOp(cm, function() {
	        var ranges = cm.listSelections(), newSel = [];
	        for (var i = 0; i < ranges.length; i++) {
	          var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
	          if (line) {
	            if (cur.ch == line.length) cur = new Pos(cur.line, cur.ch - 1);
	            if (cur.ch > 0) {
	              cur = new Pos(cur.line, cur.ch + 1);
	              cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                              Pos(cur.line, cur.ch - 2), cur, "+transpose");
	            } else if (cur.line > cm.doc.first) {
	              var prev = getLine(cm.doc, cur.line - 1).text;
	              if (prev)
	                cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
	                                prev.charAt(prev.length - 1),
	                                Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
	            }
	          }
	          newSel.push(new Range(cur, cur));
	        }
	        cm.setSelections(newSel);
	      });
	    },
	    newlineAndIndent: function(cm) {
	      runInOp(cm, function() {
	        var len = cm.listSelections().length;
	        for (var i = 0; i < len; i++) {
	          var range = cm.listSelections()[i];
	          cm.replaceRange(cm.doc.lineSeparator(), range.anchor, range.head, "+input");
	          cm.indentLine(range.from().line + 1, null, true);
	        }
	        ensureCursorVisible(cm);
	      });
	    },
	    openLine: function(cm) {cm.replaceSelection("\n", "start")},
	    toggleOverwrite: function(cm) {cm.toggleOverwrite();}
	  };


	  // STANDARD KEYMAPS

	  var keyMap = CodeMirror.keyMap = {};

	  keyMap.basic = {
	    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	    "Esc": "singleSelection"
	  };
	  // Note that the save and find-related commands aren't defined by
	  // default. User code or addons can define them. Unknown commands
	  // are simply ignored.
	  keyMap.pcDefault = {
	    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	    fallthrough: "basic"
	  };
	  // Very basic readline/emacs-style bindings, which are standard on Mac.
	  keyMap.emacsy = {
	    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
	    "Ctrl-O": "openLine"
	  };
	  keyMap.macDefault = {
	    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	    fallthrough: ["basic", "emacsy"]
	  };
	  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

	  // KEYMAP DISPATCH

	  function normalizeKeyName(name) {
	    var parts = name.split(/-(?!$)/), name = parts[parts.length - 1];
	    var alt, ctrl, shift, cmd;
	    for (var i = 0; i < parts.length - 1; i++) {
	      var mod = parts[i];
	      if (/^(cmd|meta|m)$/i.test(mod)) cmd = true;
	      else if (/^a(lt)?$/i.test(mod)) alt = true;
	      else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
	      else if (/^s(hift)$/i.test(mod)) shift = true;
	      else throw new Error("Unrecognized modifier name: " + mod);
	    }
	    if (alt) name = "Alt-" + name;
	    if (ctrl) name = "Ctrl-" + name;
	    if (cmd) name = "Cmd-" + name;
	    if (shift) name = "Shift-" + name;
	    return name;
	  }

	  // This is a kludge to keep keymaps mostly working as raw objects
	  // (backwards compatibility) while at the same time support features
	  // like normalization and multi-stroke key bindings. It compiles a
	  // new normalized keymap, and then updates the old object to reflect
	  // this.
	  CodeMirror.normalizeKeyMap = function(keymap) {
	    var copy = {};
	    for (var keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
	      var value = keymap[keyname];
	      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue;
	      if (value == "...") { delete keymap[keyname]; continue; }

	      var keys = map(keyname.split(" "), normalizeKeyName);
	      for (var i = 0; i < keys.length; i++) {
	        var val, name;
	        if (i == keys.length - 1) {
	          name = keys.join(" ");
	          val = value;
	        } else {
	          name = keys.slice(0, i + 1).join(" ");
	          val = "...";
	        }
	        var prev = copy[name];
	        if (!prev) copy[name] = val;
	        else if (prev != val) throw new Error("Inconsistent bindings for " + name);
	      }
	      delete keymap[keyname];
	    }
	    for (var prop in copy) keymap[prop] = copy[prop];
	    return keymap;
	  };

	  var lookupKey = CodeMirror.lookupKey = function(key, map, handle, context) {
	    map = getKeyMap(map);
	    var found = map.call ? map.call(key, context) : map[key];
	    if (found === false) return "nothing";
	    if (found === "...") return "multi";
	    if (found != null && handle(found)) return "handled";

	    if (map.fallthrough) {
	      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
	        return lookupKey(key, map.fallthrough, handle, context);
	      for (var i = 0; i < map.fallthrough.length; i++) {
	        var result = lookupKey(key, map.fallthrough[i], handle, context);
	        if (result) return result;
	      }
	    }
	  };

	  // Modifier key presses don't count as 'real' key presses for the
	  // purpose of keymap fallthrough.
	  var isModifierKey = CodeMirror.isModifierKey = function(value) {
	    var name = typeof value == "string" ? value : keyNames[value.keyCode];
	    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
	  };

	  // Look up the name of a key as indicated by an event object.
	  var keyName = CodeMirror.keyName = function(event, noShift) {
	    if (presto && event.keyCode == 34 && event["char"]) return false;
	    var base = keyNames[event.keyCode], name = base;
	    if (name == null || event.altGraphKey) return false;
	    if (event.altKey && base != "Alt") name = "Alt-" + name;
	    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") name = "Ctrl-" + name;
	    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") name = "Cmd-" + name;
	    if (!noShift && event.shiftKey && base != "Shift") name = "Shift-" + name;
	    return name;
	  };

	  function getKeyMap(val) {
	    return typeof val == "string" ? keyMap[val] : val;
	  }

	  // FROMTEXTAREA

	  CodeMirror.fromTextArea = function(textarea, options) {
	    options = options ? copyObj(options) : {};
	    options.value = textarea.value;
	    if (!options.tabindex && textarea.tabIndex)
	      options.tabindex = textarea.tabIndex;
	    if (!options.placeholder && textarea.placeholder)
	      options.placeholder = textarea.placeholder;
	    // Set autofocus to true if this textarea is focused, or if it has
	    // autofocus and no other element is focused.
	    if (options.autofocus == null) {
	      var hasFocus = activeElt();
	      options.autofocus = hasFocus == textarea ||
	        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
	    }

	    function save() {textarea.value = cm.getValue();}
	    if (textarea.form) {
	      on(textarea.form, "submit", save);
	      // Deplorable hack to make the submit method do the right thing.
	      if (!options.leaveSubmitMethodAlone) {
	        var form = textarea.form, realSubmit = form.submit;
	        try {
	          var wrappedSubmit = form.submit = function() {
	            save();
	            form.submit = realSubmit;
	            form.submit();
	            form.submit = wrappedSubmit;
	          };
	        } catch(e) {}
	      }
	    }

	    options.finishInit = function(cm) {
	      cm.save = save;
	      cm.getTextArea = function() { return textarea; };
	      cm.toTextArea = function() {
	        cm.toTextArea = isNaN; // Prevent this from being ran twice
	        save();
	        textarea.parentNode.removeChild(cm.getWrapperElement());
	        textarea.style.display = "";
	        if (textarea.form) {
	          off(textarea.form, "submit", save);
	          if (typeof textarea.form.submit == "function")
	            textarea.form.submit = realSubmit;
	        }
	      };
	    };

	    textarea.style.display = "none";
	    var cm = CodeMirror(function(node) {
	      textarea.parentNode.insertBefore(node, textarea.nextSibling);
	    }, options);
	    return cm;
	  };

	  // STRING STREAM

	  // Fed to the mode parsers, provides helper functions to make
	  // parsers more succinct.

	  var StringStream = CodeMirror.StringStream = function(string, tabSize) {
	    this.pos = this.start = 0;
	    this.string = string;
	    this.tabSize = tabSize || 8;
	    this.lastColumnPos = this.lastColumnValue = 0;
	    this.lineStart = 0;
	  };

	  StringStream.prototype = {
	    eol: function() {return this.pos >= this.string.length;},
	    sol: function() {return this.pos == this.lineStart;},
	    peek: function() {return this.string.charAt(this.pos) || undefined;},
	    next: function() {
	      if (this.pos < this.string.length)
	        return this.string.charAt(this.pos++);
	    },
	    eat: function(match) {
	      var ch = this.string.charAt(this.pos);
	      if (typeof match == "string") var ok = ch == match;
	      else var ok = ch && (match.test ? match.test(ch) : match(ch));
	      if (ok) {++this.pos; return ch;}
	    },
	    eatWhile: function(match) {
	      var start = this.pos;
	      while (this.eat(match)){}
	      return this.pos > start;
	    },
	    eatSpace: function() {
	      var start = this.pos;
	      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
	      return this.pos > start;
	    },
	    skipToEnd: function() {this.pos = this.string.length;},
	    skipTo: function(ch) {
	      var found = this.string.indexOf(ch, this.pos);
	      if (found > -1) {this.pos = found; return true;}
	    },
	    backUp: function(n) {this.pos -= n;},
	    column: function() {
	      if (this.lastColumnPos < this.start) {
	        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
	        this.lastColumnPos = this.start;
	      }
	      return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    indentation: function() {
	      return countColumn(this.string, null, this.tabSize) -
	        (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
	    },
	    match: function(pattern, consume, caseInsensitive) {
	      if (typeof pattern == "string") {
	        var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
	        var substr = this.string.substr(this.pos, pattern.length);
	        if (cased(substr) == cased(pattern)) {
	          if (consume !== false) this.pos += pattern.length;
	          return true;
	        }
	      } else {
	        var match = this.string.slice(this.pos).match(pattern);
	        if (match && match.index > 0) return null;
	        if (match && consume !== false) this.pos += match[0].length;
	        return match;
	      }
	    },
	    current: function(){return this.string.slice(this.start, this.pos);},
	    hideFirstChars: function(n, inner) {
	      this.lineStart += n;
	      try { return inner(); }
	      finally { this.lineStart -= n; }
	    }
	  };

	  // TEXTMARKERS

	  // Created with markText and setBookmark methods. A TextMarker is a
	  // handle that can be used to clear or find a marked position in the
	  // document. Line objects hold arrays (markedSpans) containing
	  // {from, to, marker} object pointing to such marker objects, and
	  // indicating that such a marker is present on that line. Multiple
	  // lines may point to the same marker when it spans across lines.
	  // The spans will have null for their from/to properties when the
	  // marker continues beyond the start/end of the line. Markers have
	  // links back to the lines they currently touch.

	  var nextMarkerId = 0;

	  var TextMarker = CodeMirror.TextMarker = function(doc, type) {
	    this.lines = [];
	    this.type = type;
	    this.doc = doc;
	    this.id = ++nextMarkerId;
	  };
	  eventMixin(TextMarker);

	  // Clear the marker.
	  TextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    var cm = this.doc.cm, withOp = cm && !cm.curOp;
	    if (withOp) startOperation(cm);
	    if (hasHandler(this, "clear")) {
	      var found = this.find();
	      if (found) signalLater(this, "clear", found.from, found.to);
	    }
	    var min = null, max = null;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (cm && !this.collapsed) regLineChange(cm, lineNo(line), "text");
	      else if (cm) {
	        if (span.to != null) max = lineNo(line);
	        if (span.from != null) min = lineNo(line);
	      }
	      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
	      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
	        updateLineHeight(line, textHeight(cm.display));
	    }
	    if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
	      var visual = visualLine(this.lines[i]), len = lineLength(visual);
	      if (len > cm.display.maxLineLength) {
	        cm.display.maxLine = visual;
	        cm.display.maxLineLength = len;
	        cm.display.maxLineChanged = true;
	      }
	    }

	    if (min != null && cm && this.collapsed) regChange(cm, min, max + 1);
	    this.lines.length = 0;
	    this.explicitlyCleared = true;
	    if (this.atomic && this.doc.cantEdit) {
	      this.doc.cantEdit = false;
	      if (cm) reCheckSelection(cm.doc);
	    }
	    if (cm) signalLater(cm, "markerCleared", cm, this);
	    if (withOp) endOperation(cm);
	    if (this.parent) this.parent.clear();
	  };

	  // Find the position of the marker in the document. Returns a {from,
	  // to} object by default. Side can be passed to get a specific side
	  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	  // Pos objects returned contain a line object, rather than a line
	  // number (used to prevent looking up the same line twice).
	  TextMarker.prototype.find = function(side, lineObj) {
	    if (side == null && this.type == "bookmark") side = 1;
	    var from, to;
	    for (var i = 0; i < this.lines.length; ++i) {
	      var line = this.lines[i];
	      var span = getMarkedSpanFor(line.markedSpans, this);
	      if (span.from != null) {
	        from = Pos(lineObj ? line : lineNo(line), span.from);
	        if (side == -1) return from;
	      }
	      if (span.to != null) {
	        to = Pos(lineObj ? line : lineNo(line), span.to);
	        if (side == 1) return to;
	      }
	    }
	    return from && {from: from, to: to};
	  };

	  // Signals that the marker's widget changed, and surrounding layout
	  // should be recomputed.
	  TextMarker.prototype.changed = function() {
	    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
	    if (!pos || !cm) return;
	    runInOp(cm, function() {
	      var line = pos.line, lineN = lineNo(pos.line);
	      var view = findViewForLine(cm, lineN);
	      if (view) {
	        clearLineMeasurementCacheFor(view);
	        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
	      }
	      cm.curOp.updateMaxLine = true;
	      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	        var oldHeight = widget.height;
	        widget.height = null;
	        var dHeight = widgetHeight(widget) - oldHeight;
	        if (dHeight)
	          updateLineHeight(line, line.height + dHeight);
	      }
	    });
	  };

	  TextMarker.prototype.attachLine = function(line) {
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	        (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
	    }
	    this.lines.push(line);
	  };
	  TextMarker.prototype.detachLine = function(line) {
	    this.lines.splice(indexOf(this.lines, line), 1);
	    if (!this.lines.length && this.doc.cm) {
	      var op = this.doc.cm.curOp;
	      (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
	    }
	  };

	  // Collapsed markers have unique ids, in order to be able to order
	  // them, which is needed for uniquely determining an outer marker
	  // when they overlap (they may nest, but not partially overlap).
	  var nextMarkerId = 0;

	  // Create a marker, wire it up to the right lines, and
	  function markText(doc, from, to, options, type) {
	    // Shared markers (across linked documents) are handled separately
	    // (markTextShared will call out to this again, once per
	    // document).
	    if (options && options.shared) return markTextShared(doc, from, to, options, type);
	    // Ensure we are in an operation.
	    if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

	    var marker = new TextMarker(doc, type), diff = cmp(from, to);
	    if (options) copyObj(options, marker, false);
	    // Don't connect empty markers unless clearWhenEmpty is false
	    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	      return marker;
	    if (marker.replacedWith) {
	      // Showing up as a widget implies collapsed (widget replaces text)
	      marker.collapsed = true;
	      marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget");
	      if (!options.handleMouseEvents) marker.widgetNode.setAttribute("cm-ignore-events", "true");
	      if (options.insertLeft) marker.widgetNode.insertLeft = true;
	    }
	    if (marker.collapsed) {
	      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	        throw new Error("Inserting collapsed marker partially overlapping an existing one");
	      sawCollapsedSpans = true;
	    }

	    if (marker.addToHistory)
	      addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN);

	    var curLine = from.line, cm = doc.cm, updateMaxLine;
	    doc.iter(curLine, to.line + 1, function(line) {
	      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	        updateMaxLine = true;
	      if (marker.collapsed && curLine != from.line) updateLineHeight(line, 0);
	      addMarkedSpan(line, new MarkedSpan(marker,
	                                         curLine == from.line ? from.ch : null,
	                                         curLine == to.line ? to.ch : null));
	      ++curLine;
	    });
	    // lineIsHidden depends on the presence of the spans, so needs a second pass
	    if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
	      if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
	    });

	    if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() { marker.clear(); });

	    if (marker.readOnly) {
	      sawReadOnlySpans = true;
	      if (doc.history.done.length || doc.history.undone.length)
	        doc.clearHistory();
	    }
	    if (marker.collapsed) {
	      marker.id = ++nextMarkerId;
	      marker.atomic = true;
	    }
	    if (cm) {
	      // Sync editor state
	      if (updateMaxLine) cm.curOp.updateMaxLine = true;
	      if (marker.collapsed)
	        regChange(cm, from.line, to.line + 1);
	      else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	        for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
	      if (marker.atomic) reCheckSelection(cm.doc);
	      signalLater(cm, "markerAdded", cm, marker);
	    }
	    return marker;
	  }

	  // SHARED TEXTMARKERS

	  // A shared marker spans multiple linked documents. It is
	  // implemented as a meta-marker-object controlling multiple normal
	  // markers.
	  var SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
	    this.markers = markers;
	    this.primary = primary;
	    for (var i = 0; i < markers.length; ++i)
	      markers[i].parent = this;
	  };
	  eventMixin(SharedTextMarker);

	  SharedTextMarker.prototype.clear = function() {
	    if (this.explicitlyCleared) return;
	    this.explicitlyCleared = true;
	    for (var i = 0; i < this.markers.length; ++i)
	      this.markers[i].clear();
	    signalLater(this, "clear");
	  };
	  SharedTextMarker.prototype.find = function(side, lineObj) {
	    return this.primary.find(side, lineObj);
	  };

	  function markTextShared(doc, from, to, options, type) {
	    options = copyObj(options);
	    options.shared = false;
	    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
	    var widget = options.widgetNode;
	    linkedDocs(doc, function(doc) {
	      if (widget) options.widgetNode = widget.cloneNode(true);
	      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
	      for (var i = 0; i < doc.linked.length; ++i)
	        if (doc.linked[i].isParent) return;
	      primary = lst(markers);
	    });
	    return new SharedTextMarker(markers, primary);
	  }

	  function findSharedMarkers(doc) {
	    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())),
	                         function(m) { return m.parent; });
	  }

	  function copySharedMarkers(doc, markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], pos = marker.find();
	      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
	      if (cmp(mFrom, mTo)) {
	        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
	        marker.markers.push(subMark);
	        subMark.parent = marker;
	      }
	    }
	  }

	  function detachSharedMarkers(markers) {
	    for (var i = 0; i < markers.length; i++) {
	      var marker = markers[i], linked = [marker.primary.doc];;
	      linkedDocs(marker.primary.doc, function(d) { linked.push(d); });
	      for (var j = 0; j < marker.markers.length; j++) {
	        var subMarker = marker.markers[j];
	        if (indexOf(linked, subMarker.doc) == -1) {
	          subMarker.parent = null;
	          marker.markers.splice(j--, 1);
	        }
	      }
	    }
	  }

	  // TEXTMARKER SPANS

	  function MarkedSpan(marker, from, to) {
	    this.marker = marker;
	    this.from = from; this.to = to;
	  }

	  // Search an array of spans for a span matching the given marker.
	  function getMarkedSpanFor(spans, marker) {
	    if (spans) for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.marker == marker) return span;
	    }
	  }
	  // Remove a span from an array, returning undefined if no spans are
	  // left (we don't store arrays for lines without spans).
	  function removeMarkedSpan(spans, span) {
	    for (var r, i = 0; i < spans.length; ++i)
	      if (spans[i] != span) (r || (r = [])).push(spans[i]);
	    return r;
	  }
	  // Add a span to a line.
	  function addMarkedSpan(line, span) {
	    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
	    span.marker.attachLine(line);
	  }

	  // Used for the algorithm that adjusts markers for a change in the
	  // document. These functions cut an array of spans at a given
	  // character position, returning an array of remaining chunks (or
	  // undefined if nothing remains).
	  function markedSpansBefore(old, startCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
	      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
	      }
	    }
	    return nw;
	  }
	  function markedSpansAfter(old, endCh, isInsert) {
	    if (old) for (var i = 0, nw; i < old.length; ++i) {
	      var span = old[i], marker = span.marker;
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
	      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
	        (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                              span.to == null ? null : span.to - endCh));
	      }
	    }
	    return nw;
	  }

	  // Given a change object, compute the new set of marker spans that
	  // cover the line in which the change took place. Removes spans
	  // entirely within the change, reconnects spans belonging to the
	  // same marker that appear on both sides of the change, and cuts off
	  // spans partially within the change. Returns an array of span
	  // arrays with one element for each line in (after) the change.
	  function stretchSpansOverChange(doc, change) {
	    if (change.full) return null;
	    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
	    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
	    if (!oldFirst && !oldLast) return null;

	    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
	    // Get the spans that 'stick out' on both sides
	    var first = markedSpansBefore(oldFirst, startCh, isInsert);
	    var last = markedSpansAfter(oldLast, endCh, isInsert);

	    // Next, merge those two ends
	    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
	    if (first) {
	      // Fix up .to properties of first
	      for (var i = 0; i < first.length; ++i) {
	        var span = first[i];
	        if (span.to == null) {
	          var found = getMarkedSpanFor(last, span.marker);
	          if (!found) span.to = startCh;
	          else if (sameLine) span.to = found.to == null ? null : found.to + offset;
	        }
	      }
	    }
	    if (last) {
	      // Fix up .from in last (or move them into first in case of sameLine)
	      for (var i = 0; i < last.length; ++i) {
	        var span = last[i];
	        if (span.to != null) span.to += offset;
	        if (span.from == null) {
	          var found = getMarkedSpanFor(first, span.marker);
	          if (!found) {
	            span.from = offset;
	            if (sameLine) (first || (first = [])).push(span);
	          }
	        } else {
	          span.from += offset;
	          if (sameLine) (first || (first = [])).push(span);
	        }
	      }
	    }
	    // Make sure we didn't create any zero-length spans
	    if (first) first = clearEmptySpans(first);
	    if (last && last != first) last = clearEmptySpans(last);

	    var newMarkers = [first];
	    if (!sameLine) {
	      // Fill gap with whole-line-spans
	      var gap = change.text.length - 2, gapMarkers;
	      if (gap > 0 && first)
	        for (var i = 0; i < first.length; ++i)
	          if (first[i].to == null)
	            (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
	      for (var i = 0; i < gap; ++i)
	        newMarkers.push(gapMarkers);
	      newMarkers.push(last);
	    }
	    return newMarkers;
	  }

	  // Remove spans that are empty and don't have a clearWhenEmpty
	  // option of false.
	  function clearEmptySpans(spans) {
	    for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i];
	      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	        spans.splice(i--, 1);
	    }
	    if (!spans.length) return null;
	    return spans;
	  }

	  // Used for un/re-doing changes from the history. Combines the
	  // result of computing the existing spans with the set of spans that
	  // existed in the history (so that deleting around a span and then
	  // undoing brings back the span).
	  function mergeOldSpans(doc, change) {
	    var old = getOldSpans(doc, change);
	    var stretched = stretchSpansOverChange(doc, change);
	    if (!old) return stretched;
	    if (!stretched) return old;

	    for (var i = 0; i < old.length; ++i) {
	      var oldCur = old[i], stretchCur = stretched[i];
	      if (oldCur && stretchCur) {
	        spans: for (var j = 0; j < stretchCur.length; ++j) {
	          var span = stretchCur[j];
	          for (var k = 0; k < oldCur.length; ++k)
	            if (oldCur[k].marker == span.marker) continue spans;
	          oldCur.push(span);
	        }
	      } else if (stretchCur) {
	        old[i] = stretchCur;
	      }
	    }
	    return old;
	  }

	  // Used to 'clip' out readOnly ranges when making a change.
	  function removeReadOnlyRanges(doc, from, to) {
	    var markers = null;
	    doc.iter(from.line, to.line + 1, function(line) {
	      if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
	        var mark = line.markedSpans[i].marker;
	        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	          (markers || (markers = [])).push(mark);
	      }
	    });
	    if (!markers) return null;
	    var parts = [{from: from, to: to}];
	    for (var i = 0; i < markers.length; ++i) {
	      var mk = markers[i], m = mk.find(0);
	      for (var j = 0; j < parts.length; ++j) {
	        var p = parts[j];
	        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) continue;
	        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
	        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	          newParts.push({from: p.from, to: m.from});
	        if (dto > 0 || !mk.inclusiveRight && !dto)
	          newParts.push({from: m.to, to: p.to});
	        parts.splice.apply(parts, newParts);
	        j += newParts.length - 1;
	      }
	    }
	    return parts;
	  }

	  // Connect or disconnect spans from a line.
	  function detachMarkedSpans(line) {
	    var spans = line.markedSpans;
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.detachLine(line);
	    line.markedSpans = null;
	  }
	  function attachMarkedSpans(line, spans) {
	    if (!spans) return;
	    for (var i = 0; i < spans.length; ++i)
	      spans[i].marker.attachLine(line);
	    line.markedSpans = spans;
	  }

	  // Helpers used when computing which overlapping collapsed span
	  // counts as the larger one.
	  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0; }
	  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0; }

	  // Returns a number indicating which of two overlapping collapsed
	  // spans is larger (and thus includes the other). Falls back to
	  // comparing ids when the spans cover exactly the same range.
	  function compareCollapsedMarkers(a, b) {
	    var lenDiff = a.lines.length - b.lines.length;
	    if (lenDiff != 0) return lenDiff;
	    var aPos = a.find(), bPos = b.find();
	    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
	    if (fromCmp) return -fromCmp;
	    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
	    if (toCmp) return toCmp;
	    return b.id - a.id;
	  }

	  // Find out whether a line ends or starts in a collapsed span. If
	  // so, return the marker for that span.
	  function collapsedSpanAtSide(line, start) {
	    var sps = sawCollapsedSpans && line.markedSpans, found;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	        found = sp.marker;
	    }
	    return found;
	  }
	  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true); }
	  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false); }

	  // Test whether there exists a collapsed span that partially
	  // overlaps (covers the start or end, but not both) of a new span.
	  // Such overlap is not allowed.
	  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	    var line = getLine(doc, lineNo);
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var i = 0; i < sps.length; ++i) {
	      var sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      var found = sp.marker.find(0);
	      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
	      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
	      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) continue;
	      if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
	          fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
	        return true;
	    }
	  }

	  // A visual line is a line as drawn on the screen. Folding, for
	  // example, can cause multiple logical lines to appear on the same
	  // visual line. This finds the start of the visual line that the
	  // given line is part of (usually that is the line itself).
	  function visualLine(line) {
	    var merged;
	    while (merged = collapsedSpanAtStart(line))
	      line = merged.find(-1, true).line;
	    return line;
	  }

	  // Returns an array of logical lines that continue the visual line
	  // started by the argument, or undefined if there are no such lines.
	  function visualLineContinued(line) {
	    var merged, lines;
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      (lines || (lines = [])).push(line);
	    }
	    return lines;
	  }

	  // Get the line number of the start of the visual line that the
	  // given line number is part of.
	  function visualLineNo(doc, lineN) {
	    var line = getLine(doc, lineN), vis = visualLine(line);
	    if (line == vis) return lineN;
	    return lineNo(vis);
	  }
	  // Get the line number of the start of the next visual line after
	  // the given line.
	  function visualLineEndNo(doc, lineN) {
	    if (lineN > doc.lastLine()) return lineN;
	    var line = getLine(doc, lineN), merged;
	    if (!lineIsHidden(doc, line)) return lineN;
	    while (merged = collapsedSpanAtEnd(line))
	      line = merged.find(1, true).line;
	    return lineNo(line) + 1;
	  }

	  // Compute whether a line is hidden. Lines count as hidden when they
	  // are part of a visual line that starts with another line, or when
	  // they are entirely covered by collapsed, non-widget span.
	  function lineIsHidden(doc, line) {
	    var sps = sawCollapsedSpans && line.markedSpans;
	    if (sps) for (var sp, i = 0; i < sps.length; ++i) {
	      sp = sps[i];
	      if (!sp.marker.collapsed) continue;
	      if (sp.from == null) return true;
	      if (sp.marker.widgetNode) continue;
	      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	        return true;
	    }
	  }
	  function lineIsHiddenInner(doc, line, span) {
	    if (span.to == null) {
	      var end = span.marker.find(1, true);
	      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
	    }
	    if (span.marker.inclusiveRight && span.to == line.text.length)
	      return true;
	    for (var sp, i = 0; i < line.markedSpans.length; ++i) {
	      sp = line.markedSpans[i];
	      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	          (sp.to == null || sp.to != span.from) &&
	          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	          lineIsHiddenInner(doc, line, sp)) return true;
	    }
	  }

	  // LINE WIDGETS

	  // Line widgets are block elements displayed above or below a line.

	  var LineWidget = CodeMirror.LineWidget = function(doc, node, options) {
	    if (options) for (var opt in options) if (options.hasOwnProperty(opt))
	      this[opt] = options[opt];
	    this.doc = doc;
	    this.node = node;
	  };
	  eventMixin(LineWidget);

	  function adjustScrollWhenAboveVisible(cm, line, diff) {
	    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	      addToScrollPos(cm, null, diff);
	  }

	  LineWidget.prototype.clear = function() {
	    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
	    if (no == null || !ws) return;
	    for (var i = 0; i < ws.length; ++i) if (ws[i] == this) ws.splice(i--, 1);
	    if (!ws.length) line.widgets = null;
	    var height = widgetHeight(this);
	    updateLineHeight(line, Math.max(0, line.height - height));
	    if (cm) runInOp(cm, function() {
	      adjustScrollWhenAboveVisible(cm, line, -height);
	      regLineChange(cm, no, "widget");
	    });
	  };
	  LineWidget.prototype.changed = function() {
	    var oldH = this.height, cm = this.doc.cm, line = this.line;
	    this.height = null;
	    var diff = widgetHeight(this) - oldH;
	    if (!diff) return;
	    updateLineHeight(line, line.height + diff);
	    if (cm) runInOp(cm, function() {
	      cm.curOp.forceUpdate = true;
	      adjustScrollWhenAboveVisible(cm, line, diff);
	    });
	  };

	  function widgetHeight(widget) {
	    if (widget.height != null) return widget.height;
	    var cm = widget.doc.cm;
	    if (!cm) return 0;
	    if (!contains(document.body, widget.node)) {
	      var parentStyle = "position: relative;";
	      if (widget.coverGutter)
	        parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;";
	      if (widget.noHScroll)
	        parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;";
	      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
	    }
	    return widget.height = widget.node.parentNode.offsetHeight;
	  }

	  function addLineWidget(doc, handle, node, options) {
	    var widget = new LineWidget(doc, node, options);
	    var cm = doc.cm;
	    if (cm && widget.noHScroll) cm.display.alignWidgets = true;
	    changeLine(doc, handle, "widget", function(line) {
	      var widgets = line.widgets || (line.widgets = []);
	      if (widget.insertAt == null) widgets.push(widget);
	      else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
	      widget.line = line;
	      if (cm && !lineIsHidden(doc, line)) {
	        var aboveVisible = heightAtLine(line) < doc.scrollTop;
	        updateLineHeight(line, line.height + widgetHeight(widget));
	        if (aboveVisible) addToScrollPos(cm, null, widget.height);
	        cm.curOp.forceUpdate = true;
	      }
	      return true;
	    });
	    return widget;
	  }

	  // LINE DATA STRUCTURE

	  // Line objects. These hold state related to a line, including
	  // highlighting info (the styles array).
	  var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
	    this.text = text;
	    attachMarkedSpans(this, markedSpans);
	    this.height = estimateHeight ? estimateHeight(this) : 1;
	  };
	  eventMixin(Line);
	  Line.prototype.lineNo = function() { return lineNo(this); };

	  // Change the content (text, markers) of a line. Automatically
	  // invalidates cached information and tries to re-estimate the
	  // line's height.
	  function updateLine(line, text, markedSpans, estimateHeight) {
	    line.text = text;
	    if (line.stateAfter) line.stateAfter = null;
	    if (line.styles) line.styles = null;
	    if (line.order != null) line.order = null;
	    detachMarkedSpans(line);
	    attachMarkedSpans(line, markedSpans);
	    var estHeight = estimateHeight ? estimateHeight(line) : 1;
	    if (estHeight != line.height) updateLineHeight(line, estHeight);
	  }

	  // Detach a line from the document tree and its markers.
	  function cleanUpLine(line) {
	    line.parent = null;
	    detachMarkedSpans(line);
	  }

	  function extractLineClasses(type, output) {
	    if (type) for (;;) {
	      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
	      if (!lineClass) break;
	      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
	      var prop = lineClass[1] ? "bgClass" : "textClass";
	      if (output[prop] == null)
	        output[prop] = lineClass[2];
	      else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	        output[prop] += " " + lineClass[2];
	    }
	    return type;
	  }

	  function callBlankLine(mode, state) {
	    if (mode.blankLine) return mode.blankLine(state);
	    if (!mode.innerMode) return;
	    var inner = CodeMirror.innerMode(mode, state);
	    if (inner.mode.blankLine) return inner.mode.blankLine(inner.state);
	  }

	  function readToken(mode, stream, state, inner) {
	    for (var i = 0; i < 10; i++) {
	      if (inner) inner[0] = CodeMirror.innerMode(mode, state).mode;
	      var style = mode.token(stream, state);
	      if (stream.pos > stream.start) return style;
	    }
	    throw new Error("Mode " + mode.name + " failed to advance stream.");
	  }

	  // Utility for getTokenAt and getLineTokens
	  function takeToken(cm, pos, precise, asArray) {
	    function getObj(copy) {
	      return {start: stream.start, end: stream.pos,
	              string: stream.current(),
	              type: style || null,
	              state: copy ? copyState(doc.mode, state) : state};
	    }

	    var doc = cm.doc, mode = doc.mode, style;
	    pos = clipPos(doc, pos);
	    var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise);
	    var stream = new StringStream(line.text, cm.options.tabSize), tokens;
	    if (asArray) tokens = [];
	    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	      stream.start = stream.pos;
	      style = readToken(mode, stream, state);
	      if (asArray) tokens.push(getObj(true));
	    }
	    return asArray ? tokens : getObj();
	  }

	  // Run the given mode's parser over a line, calling f for each token.
	  function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	    var flattenSpans = mode.flattenSpans;
	    if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
	    var curStart = 0, curStyle = null;
	    var stream = new StringStream(text, cm.options.tabSize), style;
	    var inner = cm.options.addModeClass && [null];
	    if (text == "") extractLineClasses(callBlankLine(mode, state), lineClasses);
	    while (!stream.eol()) {
	      if (stream.pos > cm.options.maxHighlightLength) {
	        flattenSpans = false;
	        if (forceToEnd) processLine(cm, text, state, stream.pos);
	        stream.pos = text.length;
	        style = null;
	      } else {
	        style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses);
	      }
	      if (inner) {
	        var mName = inner[0].name;
	        if (mName) style = "m-" + (style ? mName + " " + style : mName);
	      }
	      if (!flattenSpans || curStyle != style) {
	        while (curStart < stream.start) {
	          curStart = Math.min(stream.start, curStart + 5000);
	          f(curStart, curStyle);
	        }
	        curStyle = style;
	      }
	      stream.start = stream.pos;
	    }
	    while (curStart < stream.pos) {
	      // Webkit seems to refuse to render text nodes longer than 57444
	      // characters, and returns inaccurate measurements in nodes
	      // starting around 5000 chars.
	      var pos = Math.min(stream.pos, curStart + 5000);
	      f(pos, curStyle);
	      curStart = pos;
	    }
	  }

	  // Compute a style array (an array starting with a mode generation
	  // -- for invalidation -- followed by pairs of end positions and
	  // style strings), which is used to highlight the tokens on the
	  // line.
	  function highlightLine(cm, line, state, forceToEnd) {
	    // A styles array always starts with a number identifying the
	    // mode/overlays that it is based on (for easy invalidation).
	    var st = [cm.state.modeGen], lineClasses = {};
	    // Compute the base array of styles
	    runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
	      st.push(end, style);
	    }, lineClasses, forceToEnd);

	    // Run overlays, adjust style array.
	    for (var o = 0; o < cm.state.overlays.length; ++o) {
	      var overlay = cm.state.overlays[o], i = 1, at = 0;
	      runMode(cm, line.text, overlay.mode, true, function(end, style) {
	        var start = i;
	        // Ensure there's a token end at the current position, and that i points at it
	        while (at < end) {
	          var i_end = st[i];
	          if (i_end > end)
	            st.splice(i, 1, end, st[i+1], i_end);
	          i += 2;
	          at = Math.min(end, i_end);
	        }
	        if (!style) return;
	        if (overlay.opaque) {
	          st.splice(start, i - start, end, "cm-overlay " + style);
	          i = start + 2;
	        } else {
	          for (; start < i; start += 2) {
	            var cur = st[start+1];
	            st[start+1] = (cur ? cur + " " : "") + "cm-overlay " + style;
	          }
	        }
	      }, lineClasses);
	    }

	    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null};
	  }

	  function getLineStyles(cm, line, updateFrontier) {
	    if (!line.styles || line.styles[0] != cm.state.modeGen) {
	      var state = getStateBefore(cm, lineNo(line));
	      var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state);
	      line.stateAfter = state;
	      line.styles = result.styles;
	      if (result.classes) line.styleClasses = result.classes;
	      else if (line.styleClasses) line.styleClasses = null;
	      if (updateFrontier === cm.doc.frontier) cm.doc.frontier++;
	    }
	    return line.styles;
	  }

	  // Lightweight form of highlight -- proceed over this line and
	  // update state, but don't save a style array. Used for lines that
	  // aren't currently visible.
	  function processLine(cm, text, state, startAt) {
	    var mode = cm.doc.mode;
	    var stream = new StringStream(text, cm.options.tabSize);
	    stream.start = stream.pos = startAt || 0;
	    if (text == "") callBlankLine(mode, state);
	    while (!stream.eol()) {
	      readToken(mode, stream, state);
	      stream.start = stream.pos;
	    }
	  }

	  // Convert a style as returned by a mode (either null, or a string
	  // containing one or more styles) to a CSS style. This is cached,
	  // and also looks for line-wide styles.
	  var styleToClassCache = {}, styleToClassCacheWithMode = {};
	  function interpretTokenStyle(style, options) {
	    if (!style || /^\s*$/.test(style)) return null;
	    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
	    return cache[style] ||
	      (cache[style] = style.replace(/\S+/g, "cm-$&"));
	  }

	  // Render the DOM representation of the text of a line. Also builds
	  // up a 'line map', which points at the DOM nodes that represent
	  // specific stretches of text, and is used by the measuring code.
	  // The returned object contains the DOM node, this map, and
	  // information about line-wide styles that were set by the mode.
	  function buildLineContent(cm, lineView) {
	    // The padding-right forces the element to have a 'border', which
	    // is needed on Webkit to be able to get line-level bounding
	    // rectangles for it (in measureChar).
	    var content = elt("span", null, null, webkit ? "padding-right: .1px" : null);
	    var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
	                   col: 0, pos: 0, cm: cm,
	                   trailingSpace: false,
	                   splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")};
	    lineView.measure = {};

	    // Iterate over the logical lines that make up this visual line.
	    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	      var line = i ? lineView.rest[i - 1] : lineView.line, order;
	      builder.pos = 0;
	      builder.addToken = buildToken;
	      // Optionally wire in some hacks into the token-rendering
	      // algorithm, to deal with browser quirks.
	      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
	        builder.addToken = buildTokenBadBidi(builder.addToken, order);
	      builder.map = [];
	      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
	      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
	      if (line.styleClasses) {
	        if (line.styleClasses.bgClass)
	          builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "");
	        if (line.styleClasses.textClass)
	          builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "");
	      }

	      // Ensure at least a single node is present, for measuring.
	      if (builder.map.length == 0)
	        builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure)));

	      // Store the map and a cache object for the current logical line
	      if (i == 0) {
	        lineView.measure.map = builder.map;
	        lineView.measure.cache = {};
	      } else {
	        (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map);
	        (lineView.measure.caches || (lineView.measure.caches = [])).push({});
	      }
	    }

	    // See issue #2901
	    if (webkit) {
	      var last = builder.content.lastChild
	      if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
	        builder.content.className = "cm-tab-wrap-hack";
	    }

	    signal(cm, "renderLine", cm, lineView.line, builder.pre);
	    if (builder.pre.className)
	      builder.textClass = joinClasses(builder.pre.className, builder.textClass || "");

	    return builder;
	  }

	  function defaultSpecialCharPlaceholder(ch) {
	    var token = elt("span", "\u2022", "cm-invalidchar");
	    token.title = "\\u" + ch.charCodeAt(0).toString(16);
	    token.setAttribute("aria-label", token.title);
	    return token;
	  }

	  // Build up the DOM representation for a single token, and add it to
	  // the line map. Takes care to render special characters separately.
	  function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	    if (!text) return;
	    var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text
	    var special = builder.cm.state.specialChars, mustWrap = false;
	    if (!special.test(text)) {
	      builder.col += text.length;
	      var content = document.createTextNode(displayText);
	      builder.map.push(builder.pos, builder.pos + text.length, content);
	      if (ie && ie_version < 9) mustWrap = true;
	      builder.pos += text.length;
	    } else {
	      var content = document.createDocumentFragment(), pos = 0;
	      while (true) {
	        special.lastIndex = pos;
	        var m = special.exec(text);
	        var skipped = m ? m.index - pos : text.length - pos;
	        if (skipped) {
	          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.map.push(builder.pos, builder.pos + skipped, txt);
	          builder.col += skipped;
	          builder.pos += skipped;
	        }
	        if (!m) break;
	        pos += skipped + 1;
	        if (m[0] == "\t") {
	          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
	          var txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
	          txt.setAttribute("role", "presentation");
	          txt.setAttribute("cm-text", "\t");
	          builder.col += tabWidth;
	        } else if (m[0] == "\r" || m[0] == "\n") {
	          var txt = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
	          txt.setAttribute("cm-text", m[0]);
	          builder.col += 1;
	        } else {
	          var txt = builder.cm.options.specialCharPlaceholder(m[0]);
	          txt.setAttribute("cm-text", m[0]);
	          if (ie && ie_version < 9) content.appendChild(elt("span", [txt]));
	          else content.appendChild(txt);
	          builder.col += 1;
	        }
	        builder.map.push(builder.pos, builder.pos + 1, txt);
	        builder.pos++;
	      }
	    }
	    builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32
	    if (style || startStyle || endStyle || mustWrap || css) {
	      var fullStyle = style || "";
	      if (startStyle) fullStyle += startStyle;
	      if (endStyle) fullStyle += endStyle;
	      var token = elt("span", [content], fullStyle, css);
	      if (title) token.title = title;
	      return builder.content.appendChild(token);
	    }
	    builder.content.appendChild(content);
	  }

	  function splitSpaces(text, trailingBefore) {
	    if (text.length > 1 && !/  /.test(text)) return text
	    var spaceBefore = trailingBefore, result = ""
	    for (var i = 0; i < text.length; i++) {
	      var ch = text.charAt(i)
	      if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
	        ch = "\u00a0"
	      result += ch
	      spaceBefore = ch == " "
	    }
	    return result
	  }

	  // Work around nonsense dimensions being reported for stretches of
	  // right-to-left text.
	  function buildTokenBadBidi(inner, order) {
	    return function(builder, text, style, startStyle, endStyle, title, css) {
	      style = style ? style + " cm-force-border" : "cm-force-border";
	      var start = builder.pos, end = start + text.length;
	      for (;;) {
	        // Find the part that overlaps with the start of this text
	        for (var i = 0; i < order.length; i++) {
	          var part = order[i];
	          if (part.to > start && part.from <= start) break;
	        }
	        if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title, css);
	        inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css);
	        startStyle = null;
	        text = text.slice(part.to - start);
	        start = part.to;
	      }
	    };
	  }

	  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	    var widget = !ignoreWidget && marker.widgetNode;
	    if (widget) builder.map.push(builder.pos, builder.pos + size, widget);
	    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	      if (!widget)
	        widget = builder.content.appendChild(document.createElement("span"));
	      widget.setAttribute("cm-marker", marker.id);
	    }
	    if (widget) {
	      builder.cm.display.input.setUneditable(widget);
	      builder.content.appendChild(widget);
	    }
	    builder.pos += size;
	    builder.trailingSpace = false
	  }

	  // Outputs a number of spans to make up a line, taking highlighting
	  // and marked text into account.
	  function insertLineContent(line, builder, styles) {
	    var spans = line.markedSpans, allText = line.text, at = 0;
	    if (!spans) {
	      for (var i = 1; i < styles.length; i+=2)
	        builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i+1], builder.cm.options));
	      return;
	    }

	    var len = allText.length, pos = 0, i = 1, text = "", style, css;
	    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
	    for (;;) {
	      if (nextChange == pos) { // Update current marker set
	        spanStyle = spanEndStyle = spanStartStyle = title = css = "";
	        collapsed = null; nextChange = Infinity;
	        var foundBookmarks = [], endStyles
	        for (var j = 0; j < spans.length; ++j) {
	          var sp = spans[j], m = sp.marker;
	          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
	            foundBookmarks.push(m);
	          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
	            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
	              nextChange = sp.to;
	              spanEndStyle = "";
	            }
	            if (m.className) spanStyle += " " + m.className;
	            if (m.css) css = (css ? css + ";" : "") + m.css;
	            if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
	            if (m.endStyle && sp.to == nextChange) (endStyles || (endStyles = [])).push(m.endStyle, sp.to)
	            if (m.title && !title) title = m.title;
	            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	              collapsed = sp;
	          } else if (sp.from > pos && nextChange > sp.from) {
	            nextChange = sp.from;
	          }
	        }
	        if (endStyles) for (var j = 0; j < endStyles.length; j += 2)
	          if (endStyles[j + 1] == nextChange) spanEndStyle += " " + endStyles[j]

	        if (!collapsed || collapsed.from == pos) for (var j = 0; j < foundBookmarks.length; ++j)
	          buildCollapsedSpan(builder, 0, foundBookmarks[j]);
	        if (collapsed && (collapsed.from || 0) == pos) {
	          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                             collapsed.marker, collapsed.from == null);
	          if (collapsed.to == null) return;
	          if (collapsed.to == pos) collapsed = false;
	        }
	      }
	      if (pos >= len) break;

	      var upto = Math.min(len, nextChange);
	      while (true) {
	        if (text) {
	          var end = pos + text.length;
	          if (!collapsed) {
	            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
	            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
	          }
	          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
	          pos = end;
	          spanStartStyle = "";
	        }
	        text = allText.slice(at, at = styles[i++]);
	        style = interpretTokenStyle(styles[i++], builder.cm.options);
	      }
	    }
	  }

	  // DOCUMENT DATA STRUCTURE

	  // By default, updates that start and end at the beginning of a line
	  // are treated specially, in order to make the association of line
	  // widgets and marker elements with the text behave more intuitive.
	  function isWholeLineUpdate(doc, change) {
	    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	      (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
	  }

	  // Perform a change on the document data structure.
	  function updateDoc(doc, change, markedSpans, estimateHeight) {
	    function spansFor(n) {return markedSpans ? markedSpans[n] : null;}
	    function update(line, text, spans) {
	      updateLine(line, text, spans, estimateHeight);
	      signalLater(line, "change", line, change);
	    }
	    function linesFor(start, end) {
	      for (var i = start, result = []; i < end; ++i)
	        result.push(new Line(text[i], spansFor(i), estimateHeight));
	      return result;
	    }

	    var from = change.from, to = change.to, text = change.text;
	    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
	    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

	    // Adjust the line structure
	    if (change.full) {
	      doc.insert(0, linesFor(0, text.length));
	      doc.remove(text.length, doc.size - text.length);
	    } else if (isWholeLineUpdate(doc, change)) {
	      // This is a whole-line replace. Treated specially to make
	      // sure line objects move the way they are supposed to.
	      var added = linesFor(0, text.length - 1);
	      update(lastLine, lastLine.text, lastSpans);
	      if (nlines) doc.remove(from.line, nlines);
	      if (added.length) doc.insert(from.line, added);
	    } else if (firstLine == lastLine) {
	      if (text.length == 1) {
	        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
	      } else {
	        var added = linesFor(1, text.length - 1);
	        added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
	        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	        doc.insert(from.line + 1, added);
	      }
	    } else if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
	      doc.remove(from.line + 1, nlines);
	    } else {
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
	      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
	      var added = linesFor(1, text.length - 1);
	      if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
	      doc.insert(from.line + 1, added);
	    }

	    signalLater(doc, "change", doc, change);
	  }

	  // The document is represented as a BTree consisting of leaves, with
	  // chunk of lines in them, and branches, with up to ten leaves or
	  // other branch nodes below them. The top node is always a branch
	  // node, and is the document object itself (meaning it has
	  // additional methods and properties).
	  //
	  // All nodes have parent links. The tree is used both to go from
	  // line numbers to line objects, and to go from objects to numbers.
	  // It also indexes by height, and is used to convert between height
	  // and line object, and to find the total height of the document.
	  //
	  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

	  function LeafChunk(lines) {
	    this.lines = lines;
	    this.parent = null;
	    for (var i = 0, height = 0; i < lines.length; ++i) {
	      lines[i].parent = this;
	      height += lines[i].height;
	    }
	    this.height = height;
	  }

	  LeafChunk.prototype = {
	    chunkSize: function() { return this.lines.length; },
	    // Remove the n lines at offset 'at'.
	    removeInner: function(at, n) {
	      for (var i = at, e = at + n; i < e; ++i) {
	        var line = this.lines[i];
	        this.height -= line.height;
	        cleanUpLine(line);
	        signalLater(line, "delete");
	      }
	      this.lines.splice(at, n);
	    },
	    // Helper used to collapse a small branch into a single leaf.
	    collapse: function(lines) {
	      lines.push.apply(lines, this.lines);
	    },
	    // Insert the given array of lines at offset 'at', count them as
	    // having the given height.
	    insertInner: function(at, lines, height) {
	      this.height += height;
	      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
	      for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
	    },
	    // Used to iterate over a part of the tree.
	    iterN: function(at, n, op) {
	      for (var e = at + n; at < e; ++at)
	        if (op(this.lines[at])) return true;
	    }
	  };

	  function BranchChunk(children) {
	    this.children = children;
	    var size = 0, height = 0;
	    for (var i = 0; i < children.length; ++i) {
	      var ch = children[i];
	      size += ch.chunkSize(); height += ch.height;
	      ch.parent = this;
	    }
	    this.size = size;
	    this.height = height;
	    this.parent = null;
	  }

	  BranchChunk.prototype = {
	    chunkSize: function() { return this.size; },
	    removeInner: function(at, n) {
	      this.size -= n;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var rm = Math.min(n, sz - at), oldHeight = child.height;
	          child.removeInner(at, rm);
	          this.height -= oldHeight - child.height;
	          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
	          if ((n -= rm) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	      // If the result is smaller than 25 lines, ensure that it is a
	      // single leaf node.
	      if (this.size - n < 25 &&
	          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	        var lines = [];
	        this.collapse(lines);
	        this.children = [new LeafChunk(lines)];
	        this.children[0].parent = this;
	      }
	    },
	    collapse: function(lines) {
	      for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
	    },
	    insertInner: function(at, lines, height) {
	      this.size += lines.length;
	      this.height += height;
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at <= sz) {
	          child.insertInner(at, lines, height);
	          if (child.lines && child.lines.length > 50) {
	            // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
	            // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
	            var remaining = child.lines.length % 25 + 25
	            for (var pos = remaining; pos < child.lines.length;) {
	              var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
	              child.height -= leaf.height;
	              this.children.splice(++i, 0, leaf);
	              leaf.parent = this;
	            }
	            child.lines = child.lines.slice(0, remaining);
	            this.maybeSpill();
	          }
	          break;
	        }
	        at -= sz;
	      }
	    },
	    // When a node has grown, check whether it should be split.
	    maybeSpill: function() {
	      if (this.children.length <= 10) return;
	      var me = this;
	      do {
	        var spilled = me.children.splice(me.children.length - 5, 5);
	        var sibling = new BranchChunk(spilled);
	        if (!me.parent) { // Become the parent node
	          var copy = new BranchChunk(me.children);
	          copy.parent = me;
	          me.children = [copy, sibling];
	          me = copy;
	       } else {
	          me.size -= sibling.size;
	          me.height -= sibling.height;
	          var myIndex = indexOf(me.parent.children, me);
	          me.parent.children.splice(myIndex + 1, 0, sibling);
	        }
	        sibling.parent = me.parent;
	      } while (me.children.length > 10);
	      me.parent.maybeSpill();
	    },
	    iterN: function(at, n, op) {
	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i], sz = child.chunkSize();
	        if (at < sz) {
	          var used = Math.min(n, sz - at);
	          if (child.iterN(at, used, op)) return true;
	          if ((n -= used) == 0) break;
	          at = 0;
	        } else at -= sz;
	      }
	    }
	  };

	  var nextDocId = 0;
	  var Doc = CodeMirror.Doc = function(text, mode, firstLine, lineSep) {
	    if (!(this instanceof Doc)) return new Doc(text, mode, firstLine, lineSep);
	    if (firstLine == null) firstLine = 0;

	    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
	    this.first = firstLine;
	    this.scrollTop = this.scrollLeft = 0;
	    this.cantEdit = false;
	    this.cleanGeneration = 1;
	    this.frontier = firstLine;
	    var start = Pos(firstLine, 0);
	    this.sel = simpleSelection(start);
	    this.history = new History(null);
	    this.id = ++nextDocId;
	    this.modeOption = mode;
	    this.lineSep = lineSep;
	    this.extend = false;

	    if (typeof text == "string") text = this.splitLines(text);
	    updateDoc(this, {from: start, to: start, text: text});
	    setSelection(this, simpleSelection(start), sel_dontScroll);
	  };

	  Doc.prototype = createObj(BranchChunk.prototype, {
	    constructor: Doc,
	    // Iterate over the document. Supports two forms -- with only one
	    // argument, it calls that for each line in the document. With
	    // three, it iterates over the range given by the first two (with
	    // the second being non-inclusive).
	    iter: function(from, to, op) {
	      if (op) this.iterN(from - this.first, to - from, op);
	      else this.iterN(this.first, this.first + this.size, from);
	    },

	    // Non-public interface for adding and removing lines.
	    insert: function(at, lines) {
	      var height = 0;
	      for (var i = 0; i < lines.length; ++i) height += lines[i].height;
	      this.insertInner(at - this.first, lines, height);
	    },
	    remove: function(at, n) { this.removeInner(at - this.first, n); },

	    // From here, the methods are part of the public interface. Most
	    // are also available from CodeMirror (editor) instances.

	    getValue: function(lineSep) {
	      var lines = getLines(this, this.first, this.first + this.size);
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },
	    setValue: docMethodOp(function(code) {
	      var top = Pos(this.first, 0), last = this.first + this.size - 1;
	      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                        text: this.splitLines(code), origin: "setValue", full: true}, true);
	      setSelection(this, simpleSelection(top));
	    }),
	    replaceRange: function(code, from, to, origin) {
	      from = clipPos(this, from);
	      to = to ? clipPos(this, to) : from;
	      replaceRange(this, code, from, to, origin);
	    },
	    getRange: function(from, to, lineSep) {
	      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
	      if (lineSep === false) return lines;
	      return lines.join(lineSep || this.lineSeparator());
	    },

	    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text;},

	    getLineHandle: function(line) {if (isLine(this, line)) return getLine(this, line);},
	    getLineNumber: function(line) {return lineNo(line);},

	    getLineHandleVisualStart: function(line) {
	      if (typeof line == "number") line = getLine(this, line);
	      return visualLine(line);
	    },

	    lineCount: function() {return this.size;},
	    firstLine: function() {return this.first;},
	    lastLine: function() {return this.first + this.size - 1;},

	    clipPos: function(pos) {return clipPos(this, pos);},

	    getCursor: function(start) {
	      var range = this.sel.primary(), pos;
	      if (start == null || start == "head") pos = range.head;
	      else if (start == "anchor") pos = range.anchor;
	      else if (start == "end" || start == "to" || start === false) pos = range.to();
	      else pos = range.from();
	      return pos;
	    },
	    listSelections: function() { return this.sel.ranges; },
	    somethingSelected: function() {return this.sel.somethingSelected();},

	    setCursor: docMethodOp(function(line, ch, options) {
	      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
	    }),
	    setSelection: docMethodOp(function(anchor, head, options) {
	      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
	    }),
	    extendSelection: docMethodOp(function(head, other, options) {
	      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
	    }),
	    extendSelections: docMethodOp(function(heads, options) {
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    extendSelectionsBy: docMethodOp(function(f, options) {
	      var heads = map(this.sel.ranges, f);
	      extendSelections(this, clipPosArray(this, heads), options);
	    }),
	    setSelections: docMethodOp(function(ranges, primary, options) {
	      if (!ranges.length) return;
	      for (var i = 0, out = []; i < ranges.length; i++)
	        out[i] = new Range(clipPos(this, ranges[i].anchor),
	                           clipPos(this, ranges[i].head));
	      if (primary == null) primary = Math.min(ranges.length - 1, this.sel.primIndex);
	      setSelection(this, normalizeSelection(out, primary), options);
	    }),
	    addSelection: docMethodOp(function(anchor, head, options) {
	      var ranges = this.sel.ranges.slice(0);
	      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
	      setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
	    }),

	    getSelection: function(lineSep) {
	      var ranges = this.sel.ranges, lines;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        lines = lines ? lines.concat(sel) : sel;
	      }
	      if (lineSep === false) return lines;
	      else return lines.join(lineSep || this.lineSeparator());
	    },
	    getSelections: function(lineSep) {
	      var parts = [], ranges = this.sel.ranges;
	      for (var i = 0; i < ranges.length; i++) {
	        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
	        if (lineSep !== false) sel = sel.join(lineSep || this.lineSeparator());
	        parts[i] = sel;
	      }
	      return parts;
	    },
	    replaceSelection: function(code, collapse, origin) {
	      var dup = [];
	      for (var i = 0; i < this.sel.ranges.length; i++)
	        dup[i] = code;
	      this.replaceSelections(dup, collapse, origin || "+input");
	    },
	    replaceSelections: docMethodOp(function(code, collapse, origin) {
	      var changes = [], sel = this.sel;
	      for (var i = 0; i < sel.ranges.length; i++) {
	        var range = sel.ranges[i];
	        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
	      }
	      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
	      for (var i = changes.length - 1; i >= 0; i--)
	        makeChange(this, changes[i]);
	      if (newSel) setSelectionReplaceHistory(this, newSel);
	      else if (this.cm) ensureCursorVisible(this.cm);
	    }),
	    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
	    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
	    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
	    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

	    setExtending: function(val) {this.extend = val;},
	    getExtending: function() {return this.extend;},

	    historySize: function() {
	      var hist = this.history, done = 0, undone = 0;
	      for (var i = 0; i < hist.done.length; i++) if (!hist.done[i].ranges) ++done;
	      for (var i = 0; i < hist.undone.length; i++) if (!hist.undone[i].ranges) ++undone;
	      return {undo: done, redo: undone};
	    },
	    clearHistory: function() {this.history = new History(this.history.maxGeneration);},

	    markClean: function() {
	      this.cleanGeneration = this.changeGeneration(true);
	    },
	    changeGeneration: function(forceSplit) {
	      if (forceSplit)
	        this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null;
	      return this.history.generation;
	    },
	    isClean: function (gen) {
	      return this.history.generation == (gen || this.cleanGeneration);
	    },

	    getHistory: function() {
	      return {done: copyHistoryArray(this.history.done),
	              undone: copyHistoryArray(this.history.undone)};
	    },
	    setHistory: function(histData) {
	      var hist = this.history = new History(this.history.maxGeneration);
	      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
	      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
	    },

	    addLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        if (!line[prop]) line[prop] = cls;
	        else if (classTest(cls).test(line[prop])) return false;
	        else line[prop] += " " + cls;
	        return true;
	      });
	    }),
	    removeLineClass: docMethodOp(function(handle, where, cls) {
	      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function(line) {
	        var prop = where == "text" ? "textClass"
	                 : where == "background" ? "bgClass"
	                 : where == "gutter" ? "gutterClass" : "wrapClass";
	        var cur = line[prop];
	        if (!cur) return false;
	        else if (cls == null) line[prop] = null;
	        else {
	          var found = cur.match(classTest(cls));
	          if (!found) return false;
	          var end = found.index + found[0].length;
	          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
	        }
	        return true;
	      });
	    }),

	    addLineWidget: docMethodOp(function(handle, node, options) {
	      return addLineWidget(this, handle, node, options);
	    }),
	    removeLineWidget: function(widget) { widget.clear(); },

	    markText: function(from, to, options) {
	      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range");
	    },
	    setBookmark: function(pos, options) {
	      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                      insertLeft: options && options.insertLeft,
	                      clearWhenEmpty: false, shared: options && options.shared,
	                      handleMouseEvents: options && options.handleMouseEvents};
	      pos = clipPos(this, pos);
	      return markText(this, pos, pos, realOpts, "bookmark");
	    },
	    findMarksAt: function(pos) {
	      pos = clipPos(this, pos);
	      var markers = [], spans = getLine(this, pos.line).markedSpans;
	      if (spans) for (var i = 0; i < spans.length; ++i) {
	        var span = spans[i];
	        if ((span.from == null || span.from <= pos.ch) &&
	            (span.to == null || span.to >= pos.ch))
	          markers.push(span.marker.parent || span.marker);
	      }
	      return markers;
	    },
	    findMarks: function(from, to, filter) {
	      from = clipPos(this, from); to = clipPos(this, to);
	      var found = [], lineNo = from.line;
	      this.iter(from.line, to.line + 1, function(line) {
	        var spans = line.markedSpans;
	        if (spans) for (var i = 0; i < spans.length; i++) {
	          var span = spans[i];
	          if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
	                span.from == null && lineNo != from.line ||
	                span.from != null && lineNo == to.line && span.from >= to.ch) &&
	              (!filter || filter(span.marker)))
	            found.push(span.marker.parent || span.marker);
	        }
	        ++lineNo;
	      });
	      return found;
	    },
	    getAllMarks: function() {
	      var markers = [];
	      this.iter(function(line) {
	        var sps = line.markedSpans;
	        if (sps) for (var i = 0; i < sps.length; ++i)
	          if (sps[i].from != null) markers.push(sps[i].marker);
	      });
	      return markers;
	    },

	    posFromIndex: function(off) {
	      var ch, lineNo = this.first, sepSize = this.lineSeparator().length;
	      this.iter(function(line) {
	        var sz = line.text.length + sepSize;
	        if (sz > off) { ch = off; return true; }
	        off -= sz;
	        ++lineNo;
	      });
	      return clipPos(this, Pos(lineNo, ch));
	    },
	    indexFromPos: function (coords) {
	      coords = clipPos(this, coords);
	      var index = coords.ch;
	      if (coords.line < this.first || coords.ch < 0) return 0;
	      var sepSize = this.lineSeparator().length;
	      this.iter(this.first, coords.line, function (line) {
	        index += line.text.length + sepSize;
	      });
	      return index;
	    },

	    copy: function(copyHistory) {
	      var doc = new Doc(getLines(this, this.first, this.first + this.size),
	                        this.modeOption, this.first, this.lineSep);
	      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
	      doc.sel = this.sel;
	      doc.extend = false;
	      if (copyHistory) {
	        doc.history.undoDepth = this.history.undoDepth;
	        doc.setHistory(this.getHistory());
	      }
	      return doc;
	    },

	    linkedDoc: function(options) {
	      if (!options) options = {};
	      var from = this.first, to = this.first + this.size;
	      if (options.from != null && options.from > from) from = options.from;
	      if (options.to != null && options.to < to) to = options.to;
	      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep);
	      if (options.sharedHist) copy.history = this.history;
	      (this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
	      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
	      copySharedMarkers(copy, findSharedMarkers(this));
	      return copy;
	    },
	    unlinkDoc: function(other) {
	      if (other instanceof CodeMirror) other = other.doc;
	      if (this.linked) for (var i = 0; i < this.linked.length; ++i) {
	        var link = this.linked[i];
	        if (link.doc != other) continue;
	        this.linked.splice(i, 1);
	        other.unlinkDoc(this);
	        detachSharedMarkers(findSharedMarkers(this));
	        break;
	      }
	      // If the histories were shared, split them again
	      if (other.history == this.history) {
	        var splitIds = [other.id];
	        linkedDocs(other, function(doc) {splitIds.push(doc.id);}, true);
	        other.history = new History(null);
	        other.history.done = copyHistoryArray(this.history.done, splitIds);
	        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
	      }
	    },
	    iterLinkedDocs: function(f) {linkedDocs(this, f);},

	    getMode: function() {return this.mode;},
	    getEditor: function() {return this.cm;},

	    splitLines: function(str) {
	      if (this.lineSep) return str.split(this.lineSep);
	      return splitLinesAuto(str);
	    },
	    lineSeparator: function() { return this.lineSep || "\n"; }
	  });

	  // Public alias.
	  Doc.prototype.eachLine = Doc.prototype.iter;

	  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
	  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
	  for (var prop in Doc.prototype) if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	    CodeMirror.prototype[prop] = (function(method) {
	      return function() {return method.apply(this.doc, arguments);};
	    })(Doc.prototype[prop]);

	  eventMixin(Doc);

	  // Call f for all linked documents.
	  function linkedDocs(doc, f, sharedHistOnly) {
	    function propagate(doc, skip, sharedHist) {
	      if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
	        var rel = doc.linked[i];
	        if (rel.doc == skip) continue;
	        var shared = sharedHist && rel.sharedHist;
	        if (sharedHistOnly && !shared) continue;
	        f(rel.doc, shared);
	        propagate(rel.doc, doc, shared);
	      }
	    }
	    propagate(doc, null, true);
	  }

	  // Attach a document to an editor.
	  function attachDoc(cm, doc) {
	    if (doc.cm) throw new Error("This document is already in use.");
	    cm.doc = doc;
	    doc.cm = cm;
	    estimateLineHeights(cm);
	    loadMode(cm);
	    if (!cm.options.lineWrapping) findMaxLine(cm);
	    cm.options.mode = doc.modeOption;
	    regChange(cm);
	  }

	  // LINE UTILITIES

	  // Find the line object corresponding to the given line number.
	  function getLine(doc, n) {
	    n -= doc.first;
	    if (n < 0 || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
	    for (var chunk = doc; !chunk.lines;) {
	      for (var i = 0;; ++i) {
	        var child = chunk.children[i], sz = child.chunkSize();
	        if (n < sz) { chunk = child; break; }
	        n -= sz;
	      }
	    }
	    return chunk.lines[n];
	  }

	  // Get the part of a document between two positions, as an array of
	  // strings.
	  function getBetween(doc, start, end) {
	    var out = [], n = start.line;
	    doc.iter(start.line, end.line + 1, function(line) {
	      var text = line.text;
	      if (n == end.line) text = text.slice(0, end.ch);
	      if (n == start.line) text = text.slice(start.ch);
	      out.push(text);
	      ++n;
	    });
	    return out;
	  }
	  // Get the lines between from and to, as array of strings.
	  function getLines(doc, from, to) {
	    var out = [];
	    doc.iter(from, to, function(line) { out.push(line.text); });
	    return out;
	  }

	  // Update the height of a line, propagating the height change
	  // upwards to parent nodes.
	  function updateLineHeight(line, height) {
	    var diff = height - line.height;
	    if (diff) for (var n = line; n; n = n.parent) n.height += diff;
	  }

	  // Given a line object, find its line number by walking up through
	  // its parent links.
	  function lineNo(line) {
	    if (line.parent == null) return null;
	    var cur = line.parent, no = indexOf(cur.lines, line);
	    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	      for (var i = 0;; ++i) {
	        if (chunk.children[i] == cur) break;
	        no += chunk.children[i].chunkSize();
	      }
	    }
	    return no + cur.first;
	  }

	  // Find the line at the given vertical position, using the height
	  // information in the document tree.
	  function lineAtHeight(chunk, h) {
	    var n = chunk.first;
	    outer: do {
	      for (var i = 0; i < chunk.children.length; ++i) {
	        var child = chunk.children[i], ch = child.height;
	        if (h < ch) { chunk = child; continue outer; }
	        h -= ch;
	        n += child.chunkSize();
	      }
	      return n;
	    } while (!chunk.lines);
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i], lh = line.height;
	      if (h < lh) break;
	      h -= lh;
	    }
	    return n + i;
	  }


	  // Find the height above the given line.
	  function heightAtLine(lineObj) {
	    lineObj = visualLine(lineObj);

	    var h = 0, chunk = lineObj.parent;
	    for (var i = 0; i < chunk.lines.length; ++i) {
	      var line = chunk.lines[i];
	      if (line == lineObj) break;
	      else h += line.height;
	    }
	    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	      for (var i = 0; i < p.children.length; ++i) {
	        var cur = p.children[i];
	        if (cur == chunk) break;
	        else h += cur.height;
	      }
	    }
	    return h;
	  }

	  // Get the bidi ordering for the given line (and cache it). Returns
	  // false for lines that are fully left-to-right, and an array of
	  // BidiSpan objects otherwise.
	  function getOrder(line) {
	    var order = line.order;
	    if (order == null) order = line.order = bidiOrdering(line.text);
	    return order;
	  }

	  // HISTORY

	  function History(startGen) {
	    // Arrays of change events and selections. Doing something adds an
	    // event to done and clears undo. Undoing moves events from done
	    // to undone, redoing moves them in the other direction.
	    this.done = []; this.undone = [];
	    this.undoDepth = Infinity;
	    // Used to track when changes can be merged into a single undo
	    // event
	    this.lastModTime = this.lastSelTime = 0;
	    this.lastOp = this.lastSelOp = null;
	    this.lastOrigin = this.lastSelOrigin = null;
	    // Used by the isClean() method
	    this.generation = this.maxGeneration = startGen || 1;
	  }

	  // Create a history change event from an updateDoc-style change
	  // object.
	  function historyChangeFromChange(doc, change) {
	    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
	    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
	    linkedDocs(doc, function(doc) {attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);}, true);
	    return histChange;
	  }

	  // Pop all selection events off the end of a history array. Stop at
	  // a change event.
	  function clearSelectionEvents(array) {
	    while (array.length) {
	      var last = lst(array);
	      if (last.ranges) array.pop();
	      else break;
	    }
	  }

	  // Find the top change event in the history. Pop off selection
	  // events that are in the way.
	  function lastChangeEvent(hist, force) {
	    if (force) {
	      clearSelectionEvents(hist.done);
	      return lst(hist.done);
	    } else if (hist.done.length && !lst(hist.done).ranges) {
	      return lst(hist.done);
	    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	      hist.done.pop();
	      return lst(hist.done);
	    }
	  }

	  // Register a change in the history. Merges changes that are within
	  // a single operation, or are close together with an origin that
	  // allows merging (starting with "+") into a single event.
	  function addChangeToHistory(doc, change, selAfter, opId) {
	    var hist = doc.history;
	    hist.undone.length = 0;
	    var time = +new Date, cur;

	    if ((hist.lastOp == opId ||
	         hist.lastOrigin == change.origin && change.origin &&
	         ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	          change.origin.charAt(0) == "*")) &&
	        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	      // Merge this change into the last event
	      var last = lst(cur.changes);
	      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	        // Optimized case for simple insertion -- don't want to add
	        // new changesets for every character typed
	        last.to = changeEnd(change);
	      } else {
	        // Add new sub-event
	        cur.changes.push(historyChangeFromChange(doc, change));
	      }
	    } else {
	      // Can not be merged, start a new event.
	      var before = lst(hist.done);
	      if (!before || !before.ranges)
	        pushSelectionToHistory(doc.sel, hist.done);
	      cur = {changes: [historyChangeFromChange(doc, change)],
	             generation: hist.generation};
	      hist.done.push(cur);
	      while (hist.done.length > hist.undoDepth) {
	        hist.done.shift();
	        if (!hist.done[0].ranges) hist.done.shift();
	      }
	    }
	    hist.done.push(selAfter);
	    hist.generation = ++hist.maxGeneration;
	    hist.lastModTime = hist.lastSelTime = time;
	    hist.lastOp = hist.lastSelOp = opId;
	    hist.lastOrigin = hist.lastSelOrigin = change.origin;

	    if (!last) signal(doc, "historyAdded");
	  }

	  function selectionEventCanBeMerged(doc, origin, prev, sel) {
	    var ch = origin.charAt(0);
	    return ch == "*" ||
	      ch == "+" &&
	      prev.ranges.length == sel.ranges.length &&
	      prev.somethingSelected() == sel.somethingSelected() &&
	      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
	  }

	  // Called whenever the selection changes, sets the new selection as
	  // the pending selection in the history, and pushes the old pending
	  // selection into the 'done' array when it was significantly
	  // different (in number of selected ranges, emptiness, or time).
	  function addSelectionToHistory(doc, sel, opId, options) {
	    var hist = doc.history, origin = options && options.origin;

	    // A new event is started when the previous origin does not match
	    // the current, or the origins don't allow matching. Origins
	    // starting with * are always merged, those starting with + are
	    // merged when similar and close together in time.
	    if (opId == hist.lastSelOp ||
	        (origin && hist.lastSelOrigin == origin &&
	         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	      hist.done[hist.done.length - 1] = sel;
	    else
	      pushSelectionToHistory(sel, hist.done);

	    hist.lastSelTime = +new Date;
	    hist.lastSelOrigin = origin;
	    hist.lastSelOp = opId;
	    if (options && options.clearRedo !== false)
	      clearSelectionEvents(hist.undone);
	  }

	  function pushSelectionToHistory(sel, dest) {
	    var top = lst(dest);
	    if (!(top && top.ranges && top.equals(sel)))
	      dest.push(sel);
	  }

	  // Used to store marked span information in the history.
	  function attachLocalSpans(doc, change, from, to) {
	    var existing = change["spans_" + doc.id], n = 0;
	    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
	      if (line.markedSpans)
	        (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
	      ++n;
	    });
	  }

	  // When un/re-doing restores text containing marked spans, those
	  // that have been explicitly cleared should not be restored.
	  function removeClearedSpans(spans) {
	    if (!spans) return null;
	    for (var i = 0, out; i < spans.length; ++i) {
	      if (spans[i].marker.explicitlyCleared) { if (!out) out = spans.slice(0, i); }
	      else if (out) out.push(spans[i]);
	    }
	    return !out ? spans : out.length ? out : null;
	  }

	  // Retrieve and filter the old marked spans stored in a change event.
	  function getOldSpans(doc, change) {
	    var found = change["spans_" + doc.id];
	    if (!found) return null;
	    for (var i = 0, nw = []; i < change.text.length; ++i)
	      nw.push(removeClearedSpans(found[i]));
	    return nw;
	  }

	  // Used both to provide a JSON-safe object in .getHistory, and, when
	  // detaching a document, to split the history in two
	  function copyHistoryArray(events, newGroup, instantiateSel) {
	    for (var i = 0, copy = []; i < events.length; ++i) {
	      var event = events[i];
	      if (event.ranges) {
	        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
	        continue;
	      }
	      var changes = event.changes, newChanges = [];
	      copy.push({changes: newChanges});
	      for (var j = 0; j < changes.length; ++j) {
	        var change = changes[j], m;
	        newChanges.push({from: change.from, to: change.to, text: change.text});
	        if (newGroup) for (var prop in change) if (m = prop.match(/^spans_(\d+)$/)) {
	          if (indexOf(newGroup, Number(m[1])) > -1) {
	            lst(newChanges)[prop] = change[prop];
	            delete change[prop];
	          }
	        }
	      }
	    }
	    return copy;
	  }

	  // Rebasing/resetting history to deal with externally-sourced changes

	  function rebaseHistSelSingle(pos, from, to, diff) {
	    if (to < pos.line) {
	      pos.line += diff;
	    } else if (from < pos.line) {
	      pos.line = from;
	      pos.ch = 0;
	    }
	  }

	  // Tries to rebase an array of history events given a change in the
	  // document. If the change touches the same lines as the event, the
	  // event, and everything 'behind' it, is discarded. If the change is
	  // before the event, the event's positions are updated. Uses a
	  // copy-on-write scheme for the positions, to avoid having to
	  // reallocate them all on every rebase, but also avoid problems with
	  // shared position objects being unsafely updated.
	  function rebaseHistArray(array, from, to, diff) {
	    for (var i = 0; i < array.length; ++i) {
	      var sub = array[i], ok = true;
	      if (sub.ranges) {
	        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
	        for (var j = 0; j < sub.ranges.length; j++) {
	          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
	          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
	        }
	        continue;
	      }
	      for (var j = 0; j < sub.changes.length; ++j) {
	        var cur = sub.changes[j];
	        if (to < cur.from.line) {
	          cur.from = Pos(cur.from.line + diff, cur.from.ch);
	          cur.to = Pos(cur.to.line + diff, cur.to.ch);
	        } else if (from <= cur.to.line) {
	          ok = false;
	          break;
	        }
	      }
	      if (!ok) {
	        array.splice(0, i + 1);
	        i = 0;
	      }
	    }
	  }

	  function rebaseHist(hist, change) {
	    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
	    rebaseHistArray(hist.done, from, to, diff);
	    rebaseHistArray(hist.undone, from, to, diff);
	  }

	  // EVENT UTILITIES

	  // Due to the fact that we still support jurassic IE versions, some
	  // compatibility wrappers are needed.

	  var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
	    if (e.preventDefault) e.preventDefault();
	    else e.returnValue = false;
	  };
	  var e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
	    if (e.stopPropagation) e.stopPropagation();
	    else e.cancelBubble = true;
	  };
	  function e_defaultPrevented(e) {
	    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
	  }
	  var e_stop = CodeMirror.e_stop = function(e) {e_preventDefault(e); e_stopPropagation(e);};

	  function e_target(e) {return e.target || e.srcElement;}
	  function e_button(e) {
	    var b = e.which;
	    if (b == null) {
	      if (e.button & 1) b = 1;
	      else if (e.button & 2) b = 3;
	      else if (e.button & 4) b = 2;
	    }
	    if (mac && e.ctrlKey && b == 1) b = 3;
	    return b;
	  }

	  // EVENT HANDLING

	  // Lightweight event framework. on/off also work on DOM nodes,
	  // registering native DOM handlers.

	  var on = CodeMirror.on = function(emitter, type, f) {
	    if (emitter.addEventListener)
	      emitter.addEventListener(type, f, false);
	    else if (emitter.attachEvent)
	      emitter.attachEvent("on" + type, f);
	    else {
	      var map = emitter._handlers || (emitter._handlers = {});
	      var arr = map[type] || (map[type] = []);
	      arr.push(f);
	    }
	  };

	  var noHandlers = []
	  function getHandlers(emitter, type, copy) {
	    var arr = emitter._handlers && emitter._handlers[type]
	    if (copy) return arr && arr.length > 0 ? arr.slice() : noHandlers
	    else return arr || noHandlers
	  }

	  var off = CodeMirror.off = function(emitter, type, f) {
	    if (emitter.removeEventListener)
	      emitter.removeEventListener(type, f, false);
	    else if (emitter.detachEvent)
	      emitter.detachEvent("on" + type, f);
	    else {
	      var handlers = getHandlers(emitter, type, false)
	      for (var i = 0; i < handlers.length; ++i)
	        if (handlers[i] == f) { handlers.splice(i, 1); break; }
	    }
	  };

	  var signal = CodeMirror.signal = function(emitter, type /*, values...*/) {
	    var handlers = getHandlers(emitter, type, true)
	    if (!handlers.length) return;
	    var args = Array.prototype.slice.call(arguments, 2);
	    for (var i = 0; i < handlers.length; ++i) handlers[i].apply(null, args);
	  };

	  var orphanDelayedCallbacks = null;

	  // Often, we want to signal events at a point where we are in the
	  // middle of some work, but don't want the handler to start calling
	  // other methods on the editor, which might be in an inconsistent
	  // state or simply not expect any other events to happen.
	  // signalLater looks whether there are any handlers, and schedules
	  // them to be executed when the last operation ends, or, if no
	  // operation is active, when a timeout fires.
	  function signalLater(emitter, type /*, values...*/) {
	    var arr = getHandlers(emitter, type, false)
	    if (!arr.length) return;
	    var args = Array.prototype.slice.call(arguments, 2), list;
	    if (operationGroup) {
	      list = operationGroup.delayedCallbacks;
	    } else if (orphanDelayedCallbacks) {
	      list = orphanDelayedCallbacks;
	    } else {
	      list = orphanDelayedCallbacks = [];
	      setTimeout(fireOrphanDelayed, 0);
	    }
	    function bnd(f) {return function(){f.apply(null, args);};};
	    for (var i = 0; i < arr.length; ++i)
	      list.push(bnd(arr[i]));
	  }

	  function fireOrphanDelayed() {
	    var delayed = orphanDelayedCallbacks;
	    orphanDelayedCallbacks = null;
	    for (var i = 0; i < delayed.length; ++i) delayed[i]();
	  }

	  // The DOM events that CodeMirror handles can be overridden by
	  // registering a (non-DOM) handler on the editor for the event name,
	  // and preventDefault-ing the event in that handler.
	  function signalDOMEvent(cm, e, override) {
	    if (typeof e == "string")
	      e = {type: e, preventDefault: function() { this.defaultPrevented = true; }};
	    signal(cm, override || e.type, cm, e);
	    return e_defaultPrevented(e) || e.codemirrorIgnore;
	  }

	  function signalCursorActivity(cm) {
	    var arr = cm._handlers && cm._handlers.cursorActivity;
	    if (!arr) return;
	    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
	    for (var i = 0; i < arr.length; ++i) if (indexOf(set, arr[i]) == -1)
	      set.push(arr[i]);
	  }

	  function hasHandler(emitter, type) {
	    return getHandlers(emitter, type).length > 0
	  }

	  // Add on and off methods to a constructor's prototype, to make
	  // registering events on such objects more convenient.
	  function eventMixin(ctor) {
	    ctor.prototype.on = function(type, f) {on(this, type, f);};
	    ctor.prototype.off = function(type, f) {off(this, type, f);};
	  }

	  // MISC UTILITIES

	  // Number of pixels added to scroller and sizer to hide scrollbar
	  var scrollerGap = 30;

	  // Returned or thrown by various protocols to signal 'I'm not
	  // handling this'.
	  var Pass = CodeMirror.Pass = {toString: function(){return "CodeMirror.Pass";}};

	  // Reused option objects for setSelection & friends
	  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

	  function Delayed() {this.id = null;}
	  Delayed.prototype.set = function(ms, f) {
	    clearTimeout(this.id);
	    this.id = setTimeout(f, ms);
	  };

	  // Counts the column offset in a string, taking tabs into account.
	  // Used mostly to find indentation.
	  var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
	    if (end == null) {
	      end = string.search(/[^\s\u00a0]/);
	      if (end == -1) end = string.length;
	    }
	    for (var i = startIndex || 0, n = startValue || 0;;) {
	      var nextTab = string.indexOf("\t", i);
	      if (nextTab < 0 || nextTab >= end)
	        return n + (end - i);
	      n += nextTab - i;
	      n += tabSize - (n % tabSize);
	      i = nextTab + 1;
	    }
	  };

	  // The inverse of countColumn -- find the offset that corresponds to
	  // a particular column.
	  var findColumn = CodeMirror.findColumn = function(string, goal, tabSize) {
	    for (var pos = 0, col = 0;;) {
	      var nextTab = string.indexOf("\t", pos);
	      if (nextTab == -1) nextTab = string.length;
	      var skipped = nextTab - pos;
	      if (nextTab == string.length || col + skipped >= goal)
	        return pos + Math.min(skipped, goal - col);
	      col += nextTab - pos;
	      col += tabSize - (col % tabSize);
	      pos = nextTab + 1;
	      if (col >= goal) return pos;
	    }
	  }

	  var spaceStrs = [""];
	  function spaceStr(n) {
	    while (spaceStrs.length <= n)
	      spaceStrs.push(lst(spaceStrs) + " ");
	    return spaceStrs[n];
	  }

	  function lst(arr) { return arr[arr.length-1]; }

	  var selectInput = function(node) { node.select(); };
	  if (ios) // Mobile Safari apparently has a bug where select() is broken.
	    selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; };
	  else if (ie) // Suppress mysterious IE10 errors
	    selectInput = function(node) { try { node.select(); } catch(_e) {} };

	  function indexOf(array, elt) {
	    for (var i = 0; i < array.length; ++i)
	      if (array[i] == elt) return i;
	    return -1;
	  }
	  function map(array, f) {
	    var out = [];
	    for (var i = 0; i < array.length; i++) out[i] = f(array[i], i);
	    return out;
	  }

	  function insertSorted(array, value, score) {
	    var pos = 0, priority = score(value)
	    while (pos < array.length && score(array[pos]) <= priority) pos++
	    array.splice(pos, 0, value)
	  }

	  function nothing() {}

	  function createObj(base, props) {
	    var inst;
	    if (Object.create) {
	      inst = Object.create(base);
	    } else {
	      nothing.prototype = base;
	      inst = new nothing();
	    }
	    if (props) copyObj(props, inst);
	    return inst;
	  };

	  function copyObj(obj, target, overwrite) {
	    if (!target) target = {};
	    for (var prop in obj)
	      if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	        target[prop] = obj[prop];
	    return target;
	  }

	  function bind(f) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return function(){return f.apply(null, args);};
	  }

	  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
	  var isWordCharBasic = CodeMirror.isWordChar = function(ch) {
	    return /\w/.test(ch) || ch > "\x80" &&
	      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
	  };
	  function isWordChar(ch, helper) {
	    if (!helper) return isWordCharBasic(ch);
	    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) return true;
	    return helper.test(ch);
	  }

	  function isEmpty(obj) {
	    for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return false;
	    return true;
	  }

	  // Extending unicode characters. A series of a non-extending char +
	  // any number of extending chars is treated as a single unit as far
	  // as editing and measuring is concerned. This is not fully correct,
	  // since some scripts/fonts/browsers also treat other configurations
	  // of code points as a group.
	  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
	  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch); }

	  // DOM UTILITIES

	  function elt(tag, content, className, style) {
	    var e = document.createElement(tag);
	    if (className) e.className = className;
	    if (style) e.style.cssText = style;
	    if (typeof content == "string") e.appendChild(document.createTextNode(content));
	    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
	    return e;
	  }

	  var range;
	  if (document.createRange) range = function(node, start, end, endNode) {
	    var r = document.createRange();
	    r.setEnd(endNode || node, end);
	    r.setStart(node, start);
	    return r;
	  };
	  else range = function(node, start, end) {
	    var r = document.body.createTextRange();
	    try { r.moveToElementText(node.parentNode); }
	    catch(e) { return r; }
	    r.collapse(true);
	    r.moveEnd("character", end);
	    r.moveStart("character", start);
	    return r;
	  };

	  function removeChildren(e) {
	    for (var count = e.childNodes.length; count > 0; --count)
	      e.removeChild(e.firstChild);
	    return e;
	  }

	  function removeChildrenAndAdd(parent, e) {
	    return removeChildren(parent).appendChild(e);
	  }

	  var contains = CodeMirror.contains = function(parent, child) {
	    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	      child = child.parentNode;
	    if (parent.contains)
	      return parent.contains(child);
	    do {
	      if (child.nodeType == 11) child = child.host;
	      if (child == parent) return true;
	    } while (child = child.parentNode);
	  };

	  function activeElt() {
	    var activeElement = document.activeElement;
	    while (activeElement && activeElement.root && activeElement.root.activeElement)
	      activeElement = activeElement.root.activeElement;
	    return activeElement;
	  }
	  // Older versions of IE throws unspecified error when touching
	  // document.activeElement in some cases (during loading, in iframe)
	  if (ie && ie_version < 11) activeElt = function() {
	    try { return document.activeElement; }
	    catch(e) { return document.body; }
	  };

	  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*"); }
	  var rmClass = CodeMirror.rmClass = function(node, cls) {
	    var current = node.className;
	    var match = classTest(cls).exec(current);
	    if (match) {
	      var after = current.slice(match.index + match[0].length);
	      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
	    }
	  };
	  var addClass = CodeMirror.addClass = function(node, cls) {
	    var current = node.className;
	    if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls;
	  };
	  function joinClasses(a, b) {
	    var as = a.split(" ");
	    for (var i = 0; i < as.length; i++)
	      if (as[i] && !classTest(as[i]).test(b)) b += " " + as[i];
	    return b;
	  }

	  // WINDOW-WIDE EVENTS

	  // These must be handled carefully, because naively registering a
	  // handler for each editor will cause the editors to never be
	  // garbage collected.

	  function forEachCodeMirror(f) {
	    if (!document.body.getElementsByClassName) return;
	    var byClass = document.body.getElementsByClassName("CodeMirror");
	    for (var i = 0; i < byClass.length; i++) {
	      var cm = byClass[i].CodeMirror;
	      if (cm) f(cm);
	    }
	  }

	  var globalsRegistered = false;
	  function ensureGlobalHandlers() {
	    if (globalsRegistered) return;
	    registerGlobalHandlers();
	    globalsRegistered = true;
	  }
	  function registerGlobalHandlers() {
	    // When the window resizes, we need to refresh active editors.
	    var resizeTimer;
	    on(window, "resize", function() {
	      if (resizeTimer == null) resizeTimer = setTimeout(function() {
	        resizeTimer = null;
	        forEachCodeMirror(onResize);
	      }, 100);
	    });
	    // When the window loses focus, we want to show the editor as blurred
	    on(window, "blur", function() {
	      forEachCodeMirror(onBlur);
	    });
	  }

	  // FEATURE DETECTION

	  // Detect drag-and-drop
	  var dragAndDrop = function() {
	    // There is *some* kind of drag-and-drop support in IE6-8, but I
	    // couldn't get it to work yet.
	    if (ie && ie_version < 9) return false;
	    var div = elt('div');
	    return "draggable" in div || "dragDrop" in div;
	  }();

	  var zwspSupported;
	  function zeroWidthElement(measure) {
	    if (zwspSupported == null) {
	      var test = elt("span", "\u200b");
	      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
	      if (measure.firstChild.offsetHeight != 0)
	        zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8);
	    }
	    var node = zwspSupported ? elt("span", "\u200b") :
	      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
	    node.setAttribute("cm-text", "");
	    return node;
	  }

	  // Feature-detect IE's crummy client rect reporting for bidi text
	  var badBidiRects;
	  function hasBadBidiRects(measure) {
	    if (badBidiRects != null) return badBidiRects;
	    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
	    var r0 = range(txt, 0, 1).getBoundingClientRect();
	    var r1 = range(txt, 1, 2).getBoundingClientRect();
	    removeChildren(measure);
	    if (!r0 || r0.left == r0.right) return false; // Safari returns null in some cases (#2780)
	    return badBidiRects = (r1.right - r0.right < 3);
	  }

	  // See if "".split is the broken IE version, if so, provide an
	  // alternative way to split lines.
	  var splitLinesAuto = CodeMirror.splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
	    var pos = 0, result = [], l = string.length;
	    while (pos <= l) {
	      var nl = string.indexOf("\n", pos);
	      if (nl == -1) nl = string.length;
	      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
	      var rt = line.indexOf("\r");
	      if (rt != -1) {
	        result.push(line.slice(0, rt));
	        pos += rt + 1;
	      } else {
	        result.push(line);
	        pos = nl + 1;
	      }
	    }
	    return result;
	  } : function(string){return string.split(/\r\n?|\n/);};

	  var hasSelection = window.getSelection ? function(te) {
	    try { return te.selectionStart != te.selectionEnd; }
	    catch(e) { return false; }
	  } : function(te) {
	    try {var range = te.ownerDocument.selection.createRange();}
	    catch(e) {}
	    if (!range || range.parentElement() != te) return false;
	    return range.compareEndPoints("StartToEnd", range) != 0;
	  };

	  var hasCopyEvent = (function() {
	    var e = elt("div");
	    if ("oncopy" in e) return true;
	    e.setAttribute("oncopy", "return;");
	    return typeof e.oncopy == "function";
	  })();

	  var badZoomedRects = null;
	  function hasBadZoomedRects(measure) {
	    if (badZoomedRects != null) return badZoomedRects;
	    var node = removeChildrenAndAdd(measure, elt("span", "x"));
	    var normal = node.getBoundingClientRect();
	    var fromRange = range(node, 0, 1).getBoundingClientRect();
	    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
	  }

	  // KEY NAMES

	  var keyNames = CodeMirror.keyNames = {
	    3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	    221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	  };
	  (function() {
	    // Number keys
	    for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
	    // Alphabetic keys
	    for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
	    // Function keys
	    for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
	  })();

	  // BIDI HELPERS

	  function iterateBidiSections(order, from, to, f) {
	    if (!order) return f(from, to, "ltr");
	    var found = false;
	    for (var i = 0; i < order.length; ++i) {
	      var part = order[i];
	      if (part.from < to && part.to > from || from == to && part.to == from) {
	        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
	        found = true;
	      }
	    }
	    if (!found) f(from, to, "ltr");
	  }

	  function bidiLeft(part) { return part.level % 2 ? part.to : part.from; }
	  function bidiRight(part) { return part.level % 2 ? part.from : part.to; }

	  function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0; }
	  function lineRight(line) {
	    var order = getOrder(line);
	    if (!order) return line.text.length;
	    return bidiRight(lst(order));
	  }

	  function lineStart(cm, lineN) {
	    var line = getLine(cm.doc, lineN);
	    var visual = visualLine(line);
	    if (visual != line) lineN = lineNo(visual);
	    var order = getOrder(visual);
	    var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
	    return Pos(lineN, ch);
	  }
	  function lineEnd(cm, lineN) {
	    var merged, line = getLine(cm.doc, lineN);
	    while (merged = collapsedSpanAtEnd(line)) {
	      line = merged.find(1, true).line;
	      lineN = null;
	    }
	    var order = getOrder(line);
	    var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
	    return Pos(lineN == null ? lineNo(line) : lineN, ch);
	  }
	  function lineStartSmart(cm, pos) {
	    var start = lineStart(cm, pos.line);
	    var line = getLine(cm.doc, start.line);
	    var order = getOrder(line);
	    if (!order || order[0].level == 0) {
	      var firstNonWS = Math.max(0, line.text.search(/\S/));
	      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
	      return Pos(start.line, inWS ? 0 : firstNonWS);
	    }
	    return start;
	  }

	  function compareBidiLevel(order, a, b) {
	    var linedir = order[0].level;
	    if (a == linedir) return true;
	    if (b == linedir) return false;
	    return a < b;
	  }
	  var bidiOther;
	  function getBidiPartAt(order, pos) {
	    bidiOther = null;
	    for (var i = 0, found; i < order.length; ++i) {
	      var cur = order[i];
	      if (cur.from < pos && cur.to > pos) return i;
	      if ((cur.from == pos || cur.to == pos)) {
	        if (found == null) {
	          found = i;
	        } else if (compareBidiLevel(order, cur.level, order[found].level)) {
	          if (cur.from != cur.to) bidiOther = found;
	          return i;
	        } else {
	          if (cur.from != cur.to) bidiOther = i;
	          return found;
	        }
	      }
	    }
	    return found;
	  }

	  function moveInLine(line, pos, dir, byUnit) {
	    if (!byUnit) return pos + dir;
	    do pos += dir;
	    while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
	    return pos;
	  }

	  // This is needed in order to move 'visually' through bi-directional
	  // text -- i.e., pressing left should make the cursor go left, even
	  // when in RTL text. The tricky part is the 'jumps', where RTL and
	  // LTR text touch each other. This often requires the cursor offset
	  // to move more than one unit, in order to visually move one unit.
	  function moveVisually(line, start, dir, byUnit) {
	    var bidi = getOrder(line);
	    if (!bidi) return moveLogically(line, start, dir, byUnit);
	    var pos = getBidiPartAt(bidi, start), part = bidi[pos];
	    var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

	    for (;;) {
	      if (target > part.from && target < part.to) return target;
	      if (target == part.from || target == part.to) {
	        if (getBidiPartAt(bidi, target) == pos) return target;
	        part = bidi[pos += dir];
	        return (dir > 0) == part.level % 2 ? part.to : part.from;
	      } else {
	        part = bidi[pos += dir];
	        if (!part) return null;
	        if ((dir > 0) == part.level % 2)
	          target = moveInLine(line, part.to, -1, byUnit);
	        else
	          target = moveInLine(line, part.from, 1, byUnit);
	      }
	    }
	  }

	  function moveLogically(line, start, dir, byUnit) {
	    var target = start + dir;
	    if (byUnit) while (target > 0 && isExtendingChar(line.text.charAt(target))) target += dir;
	    return target < 0 || target > line.text.length ? null : target;
	  }

	  // Bidirectional ordering algorithm
	  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	  // that this (partially) implements.

	  // One-char codes used for character types:
	  // L (L):   Left-to-Right
	  // R (R):   Right-to-Left
	  // r (AL):  Right-to-Left Arabic
	  // 1 (EN):  European Number
	  // + (ES):  European Number Separator
	  // % (ET):  European Number Terminator
	  // n (AN):  Arabic Number
	  // , (CS):  Common Number Separator
	  // m (NSM): Non-Spacing Mark
	  // b (BN):  Boundary Neutral
	  // s (B):   Paragraph Separator
	  // t (S):   Segment Separator
	  // w (WS):  Whitespace
	  // N (ON):  Other Neutrals

	  // Returns null if characters are ordered as they appear
	  // (left-to-right), or an array of sections ({from, to, level}
	  // objects) in the order in which they occur visually.
	  var bidiOrdering = (function() {
	    // Character types for codepoints 0 to 0xff
	    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
	    // Character types for codepoints 0x600 to 0x6ff
	    var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";
	    function charType(code) {
	      if (code <= 0xf7) return lowTypes.charAt(code);
	      else if (0x590 <= code && code <= 0x5f4) return "R";
	      else if (0x600 <= code && code <= 0x6ed) return arabicTypes.charAt(code - 0x600);
	      else if (0x6ee <= code && code <= 0x8ac) return "r";
	      else if (0x2000 <= code && code <= 0x200b) return "w";
	      else if (code == 0x200c) return "b";
	      else return "L";
	    }

	    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
	    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;
	    // Browsers seem to always treat the boundaries of block elements as being L.
	    var outerType = "L";

	    function BidiSpan(level, from, to) {
	      this.level = level;
	      this.from = from; this.to = to;
	    }

	    return function(str) {
	      if (!bidiRE.test(str)) return false;
	      var len = str.length, types = [];
	      for (var i = 0, type; i < len; ++i)
	        types.push(type = charType(str.charCodeAt(i)));

	      // W1. Examine each non-spacing mark (NSM) in the level run, and
	      // change the type of the NSM to the type of the previous
	      // character. If the NSM is at the start of the level run, it will
	      // get the type of sor.
	      for (var i = 0, prev = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "m") types[i] = prev;
	        else prev = type;
	      }

	      // W2. Search backwards from each instance of a European number
	      // until the first strong type (R, L, AL, or sor) is found. If an
	      // AL is found, change the type of the European number to Arabic
	      // number.
	      // W3. Change all ALs to R.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (type == "1" && cur == "r") types[i] = "n";
	        else if (isStrong.test(type)) { cur = type; if (type == "r") types[i] = "R"; }
	      }

	      // W4. A single European separator between two European numbers
	      // changes to a European number. A single common separator between
	      // two numbers of the same type changes to that type.
	      for (var i = 1, prev = types[0]; i < len - 1; ++i) {
	        var type = types[i];
	        if (type == "+" && prev == "1" && types[i+1] == "1") types[i] = "1";
	        else if (type == "," && prev == types[i+1] &&
	                 (prev == "1" || prev == "n")) types[i] = prev;
	        prev = type;
	      }

	      // W5. A sequence of European terminators adjacent to European
	      // numbers changes to all European numbers.
	      // W6. Otherwise, separators and terminators change to Other
	      // Neutral.
	      for (var i = 0; i < len; ++i) {
	        var type = types[i];
	        if (type == ",") types[i] = "N";
	        else if (type == "%") {
	          for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
	          var replace = (i && types[i-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // W7. Search backwards from each instance of a European number
	      // until the first strong type (R, L, or sor) is found. If an L is
	      // found, then change the type of the European number to L.
	      for (var i = 0, cur = outerType; i < len; ++i) {
	        var type = types[i];
	        if (cur == "L" && type == "1") types[i] = "L";
	        else if (isStrong.test(type)) cur = type;
	      }

	      // N1. A sequence of neutrals takes the direction of the
	      // surrounding strong text if the text on both sides has the same
	      // direction. European and Arabic numbers act as if they were R in
	      // terms of their influence on neutrals. Start-of-level-run (sor)
	      // and end-of-level-run (eor) are used at level run boundaries.
	      // N2. Any remaining neutrals take the embedding direction.
	      for (var i = 0; i < len; ++i) {
	        if (isNeutral.test(types[i])) {
	          for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
	          var before = (i ? types[i-1] : outerType) == "L";
	          var after = (end < len ? types[end] : outerType) == "L";
	          var replace = before || after ? "L" : "R";
	          for (var j = i; j < end; ++j) types[j] = replace;
	          i = end - 1;
	        }
	      }

	      // Here we depart from the documented algorithm, in order to avoid
	      // building up an actual levels array. Since there are only three
	      // levels (0, 1, 2) in an implementation that doesn't take
	      // explicit embedding into account, we can build up the order on
	      // the fly, without following the level-based algorithm.
	      var order = [], m;
	      for (var i = 0; i < len;) {
	        if (countsAsLeft.test(types[i])) {
	          var start = i;
	          for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
	          order.push(new BidiSpan(0, start, i));
	        } else {
	          var pos = i, at = order.length;
	          for (++i; i < len && types[i] != "L"; ++i) {}
	          for (var j = pos; j < i;) {
	            if (countsAsNum.test(types[j])) {
	              if (pos < j) order.splice(at, 0, new BidiSpan(1, pos, j));
	              var nstart = j;
	              for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
	              order.splice(at, 0, new BidiSpan(2, nstart, j));
	              pos = j;
	            } else ++j;
	          }
	          if (pos < i) order.splice(at, 0, new BidiSpan(1, pos, i));
	        }
	      }
	      if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	        order[0].from = m[0].length;
	        order.unshift(new BidiSpan(0, 0, m[0].length));
	      }
	      if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	        lst(order).to -= m[0].length;
	        order.push(new BidiSpan(0, len - m[0].length, len));
	      }
	      if (order[0].level == 2)
	        order.unshift(new BidiSpan(1, order[0].to, order[0].to));
	      if (order[0].level != lst(order).level)
	        order.push(new BidiSpan(order[0].level, len, len));

	      return order;
	    };
	  })();

	  // THE END

	  CodeMirror.version = "5.19.0";

	  return CodeMirror;
	});


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Transformer_1 = __webpack_require__(18);
	var up = new Transformer_1.Transformer();
	function parseAndRender(markup, settings) {
	    return up.parseAndRender(markup, settings);
	}
	exports.parseAndRender = parseAndRender;
	function parseAndRenderDocumentAndTableOfContents(markup, settings) {
	    return up.parseAndRenderDocumentAndTableOfContents(markup, settings);
	}
	exports.parseAndRenderDocumentAndTableOfContents = parseAndRenderDocumentAndTableOfContents;
	function parseAndRenderInline(inlineMarkup, settings) {
	    return up.parseAndRenderInline(inlineMarkup, settings);
	}
	exports.parseAndRenderInline = parseAndRenderInline;
	function parse(markup, parsingSettings) {
	    return up.parse(markup, parsingSettings);
	}
	exports.parse = parse;
	function parseInline(inlineMarkup, parsingSettings) {
	    return up.parseInline(inlineMarkup, parsingSettings);
	}
	exports.parseInline = parseInline;
	function render(document, renderingSettings) {
	    return up.render(document, renderingSettings);
	}
	exports.render = render;
	function renderDocumentAndTableOfContents(document, renderingSettings) {
	    return up.renderDocumentAndTableOfContents(document, renderingSettings);
	}
	exports.renderDocumentAndTableOfContents = renderDocumentAndTableOfContents;
	function renderInline(inlineDocument, renderingSettings) {
	    return up.renderInline(inlineDocument, renderingSettings);
	}
	exports.renderInline = renderInline;
	var Transformer_2 = __webpack_require__(18);
	exports.Transformer = Transformer_2.Transformer;
	var Document_1 = __webpack_require__(25);
	exports.Document = Document_1.Document;
	var InlineDocument_1 = __webpack_require__(105);
	exports.InlineDocument = InlineDocument_1.InlineDocument;
	var Audio_1 = __webpack_require__(67);
	exports.Audio = Audio_1.Audio;
	var Blockquote_1 = __webpack_require__(93);
	exports.Blockquote = Blockquote_1.Blockquote;
	var Bold_1 = __webpack_require__(57);
	exports.Bold = Bold_1.Bold;
	var CodeBlock_1 = __webpack_require__(95);
	exports.CodeBlock = CodeBlock_1.CodeBlock;
	var DescriptionList_1 = __webpack_require__(34);
	exports.DescriptionList = DescriptionList_1.DescriptionList;
	var Emphasis_1 = __webpack_require__(54);
	exports.Emphasis = Emphasis_1.Emphasis;
	var ExampleInput_1 = __webpack_require__(87);
	exports.ExampleInput = ExampleInput_1.ExampleInput;
	var Footnote_1 = __webpack_require__(36);
	exports.Footnote = Footnote_1.Footnote;
	var FootnoteBlock_1 = __webpack_require__(35);
	exports.FootnoteBlock = FootnoteBlock_1.FootnoteBlock;
	var Heading_1 = __webpack_require__(27);
	exports.Heading = Heading_1.Heading;
	var Highlight_1 = __webpack_require__(58);
	exports.Highlight = Highlight_1.Highlight;
	var Image_1 = __webpack_require__(69);
	exports.Image = Image_1.Image;
	var InlineCode_1 = __webpack_require__(86);
	exports.InlineCode = InlineCode_1.InlineCode;
	var InlineQuote_1 = __webpack_require__(60);
	exports.InlineQuote = InlineQuote_1.InlineQuote;
	var InlineRevealable_1 = __webpack_require__(59);
	exports.InlineRevealable = InlineRevealable_1.InlineRevealable;
	var Italics_1 = __webpack_require__(56);
	exports.Italics = Italics_1.Italics;
	var LineBlock_1 = __webpack_require__(41);
	exports.LineBlock = LineBlock_1.LineBlock;
	var Link_1 = __webpack_require__(64);
	exports.Link = Link_1.Link;
	var NormalParenthetical_1 = __webpack_require__(63);
	exports.NormalParenthetical = NormalParenthetical_1.NormalParenthetical;
	var OrderedList_1 = __webpack_require__(42);
	exports.OrderedList = OrderedList_1.OrderedList;
	var Paragraph_1 = __webpack_require__(102);
	exports.Paragraph = Paragraph_1.Paragraph;
	var RevealableBlock_1 = __webpack_require__(39);
	exports.RevealableBlock = RevealableBlock_1.RevealableBlock;
	var SectionLink_1 = __webpack_require__(31);
	exports.SectionLink = SectionLink_1.SectionLink;
	var SquareParenthetical_1 = __webpack_require__(61);
	exports.SquareParenthetical = SquareParenthetical_1.SquareParenthetical;
	var Stress_1 = __webpack_require__(55);
	exports.Stress = Stress_1.Stress;
	var Table_1 = __webpack_require__(44);
	exports.Table = Table_1.Table;
	var Text_1 = __webpack_require__(84);
	exports.Text = Text_1.Text;
	var ThematicBreak_1 = __webpack_require__(48);
	exports.ThematicBreak = ThematicBreak_1.ThematicBreak;
	var UnorderedList_1 = __webpack_require__(43);
	exports.UnorderedList = UnorderedList_1.UnorderedList;
	var Video_1 = __webpack_require__(70);
	exports.Video = Video_1.Video;
	var InlineSyntaxNodeContainer_1 = __webpack_require__(28);
	exports.InlineSyntaxNodeContainer = InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer;
	var MediaSyntaxNode_1 = __webpack_require__(68);
	exports.MediaSyntaxNode = MediaSyntaxNode_1.MediaSyntaxNode;
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(26);
	exports.OutlineSyntaxNodeContainer = OutlineSyntaxNodeContainer_1.OutlineSyntaxNodeContainer;
	var ParentheticalSyntaxNode_1 = __webpack_require__(62);
	exports.ParentheticalSyntaxNode = ParentheticalSyntaxNode_1.ParentheticalSyntaxNode;
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	exports.RichInlineSyntaxNode = RichInlineSyntaxNode_1.RichInlineSyntaxNode;
	var RichOutlineSyntaxNode_1 = __webpack_require__(40);
	exports.RichOutlineSyntaxNode = RichOutlineSyntaxNode_1.RichOutlineSyntaxNode;
	exports.VERSION = '25.0.0';
	//# sourceMappingURL=Up.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Settings_1 = __webpack_require__(19);
	var parse_1 = __webpack_require__(24);
	var parseInline_1 = __webpack_require__(104);
	var HtmlRenderer_1 = __webpack_require__(106);
	var Transformer = (function () {
	    function Transformer(settings) {
	        this.settings = new Settings_1.Settings(settings);
	    }
	    Transformer.prototype.parseAndRender = function (markup, extraSettings) {
	        var _a = getParsingAndRenderingSettings(extraSettings), parsing = _a.parsing, rendering = _a.rendering;
	        var document = this.parse(markup, parsing);
	        return this.render(document, rendering);
	    };
	    Transformer.prototype.parseAndRenderDocumentAndTableOfContents = function (markup, extraSettings) {
	        var _a = getParsingAndRenderingSettings(extraSettings), parsing = _a.parsing, rendering = _a.rendering;
	        var document = this.parse(markup, parsing);
	        return this.renderDocumentAndTableOfContents(document, rendering);
	    };
	    Transformer.prototype.parseAndRenderInline = function (inlineMarkup, extraSettings) {
	        var _a = getParsingAndRenderingSettings(extraSettings), parsing = _a.parsing, rendering = _a.rendering;
	        var inlineDocument = this.parseInline(inlineMarkup, parsing);
	        return this.renderInline(inlineDocument, rendering);
	    };
	    Transformer.prototype.parse = function (markup, extraParsingSettings) {
	        return parse_1.parse(markup, this.getParsingSettings(extraParsingSettings));
	    };
	    Transformer.prototype.parseInline = function (inlineMarkup, extraParsingSettings) {
	        return parseInline_1.parseInline(inlineMarkup, this.getParsingSettings(extraParsingSettings));
	    };
	    Transformer.prototype.render = function (document, extraRenderingSettings) {
	        var htmlRenderer = this.getHtmlRenderer(extraRenderingSettings);
	        return htmlRenderer.renderDocument(document);
	    };
	    Transformer.prototype.renderDocumentAndTableOfContents = function (document, extraRenderingSettings) {
	        var htmlRenderer = this.getHtmlRenderer(extraRenderingSettings);
	        return {
	            documentHtml: htmlRenderer.renderDocument(document),
	            tableOfContentsHtml: htmlRenderer.renderTableOfContents(document.tableOfContents)
	        };
	    };
	    Transformer.prototype.renderInline = function (inlineDocument, extraRenderingSettings) {
	        var htmlRenderer = this.getHtmlRenderer(extraRenderingSettings);
	        return htmlRenderer.renderInlineDocument(inlineDocument);
	    };
	    Transformer.prototype.getParsingSettings = function (changes) {
	        return this.settings.withChanges({ parsing: changes }).parsing;
	    };
	    Transformer.prototype.getRenderingSettings = function (changes) {
	        return this.settings.withChanges({ rendering: changes }).rendering;
	    };
	    Transformer.prototype.getHtmlRenderer = function (extraRenderingSettings) {
	        return new HtmlRenderer_1.HtmlRenderer(this.getRenderingSettings(extraRenderingSettings));
	    };
	    return Transformer;
	}());
	exports.Transformer = Transformer;
	function getParsingAndRenderingSettings(settings) {
	    return settings || {
	        parsing: null,
	        rendering: null
	    };
	}
	//# sourceMappingURL=Transformer.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternPieces_1 = __webpack_require__(20);
	var Patterns_1 = __webpack_require__(22);
	var CollectionHelpers_1 = __webpack_require__(23);
	var Settings = (function () {
	    function Settings(settings) {
	        this.parsing = new Settings.Parsing();
	        this.rendering = new Settings.Rendering();
	        this.applyUserProvidedSettings(settings);
	    }
	    Settings.prototype.withChanges = function (changes) {
	        var clone = new Settings();
	        clone.parsing = this.parsing.clone();
	        clone.rendering = this.rendering.clone();
	        clone.applyUserProvidedSettings(changes);
	        return clone;
	    };
	    Settings.prototype.applyUserProvidedSettings = function (settings) {
	        if (!settings) {
	            return;
	        }
	        this.parsing.applyUserProvidedSettings(settings.parsing);
	        this.rendering.applyUserProvidedSettings(settings.rendering);
	    };
	    return Settings;
	}());
	exports.Settings = Settings;
	var Settings;
	(function (Settings) {
	    var Parsing = (function () {
	        function Parsing() {
	            this.createSourceMap = false;
	            this.fancyEllipsis = '…';
	            this.keywords = new Parsing.Keywords();
	            this.defaultUrlScheme = 'https://';
	            this.baseForUrlsStartingWithSlash = '';
	            this.baseForUrlsStartingWithHashMark = '';
	        }
	        Parsing.prototype.clone = function () {
	            var clone = new Parsing();
	            clone.createSourceMap = this.createSourceMap;
	            clone.fancyEllipsis = this.fancyEllipsis;
	            clone.defaultUrlScheme = this.defaultUrlScheme;
	            clone.baseForUrlsStartingWithSlash = this.baseForUrlsStartingWithSlash;
	            clone.baseForUrlsStartingWithHashMark = this.baseForUrlsStartingWithHashMark;
	            clone.keywords = this.keywords.clone();
	            return clone;
	        };
	        Parsing.prototype.applyUserProvidedSettings = function (settings) {
	            if (!settings) {
	                return;
	            }
	            this.createSourceMap =
	                CollectionHelpers_1.coalesce(settings.createSourceMap, this.createSourceMap);
	            this.fancyEllipsis =
	                CollectionHelpers_1.coalesce(settings.fancyEllipsis, this.fancyEllipsis);
	            this.defaultUrlScheme =
	                CollectionHelpers_1.coalesce(settings.defaultUrlScheme, this.defaultUrlScheme);
	            this.baseForUrlsStartingWithSlash =
	                CollectionHelpers_1.coalesce(settings.baseForUrlsStartingWithSlash, this.baseForUrlsStartingWithSlash);
	            this.baseForUrlsStartingWithHashMark =
	                CollectionHelpers_1.coalesce(settings.baseForUrlsStartingWithHashMark, this.baseForUrlsStartingWithHashMark);
	            this.keywords.applyUserProvidedSettings(settings.keywords);
	        };
	        Parsing.prototype.applySettingsToUrl = function (url) {
	            url = url.trim();
	            switch (url[0]) {
	                case PatternPieces_1.FORWARD_SLASH:
	                    return this.baseForUrlsStartingWithSlash + url;
	                case PatternPieces_1.HASH_MARK:
	                    return this.baseForUrlsStartingWithHashMark + url;
	            }
	            return (Patterns_1.URL_SCHEME_PATTERN.test(url)
	                ? url
	                : this.defaultUrlScheme + url);
	        };
	        return Parsing;
	    }());
	    Settings.Parsing = Parsing;
	    var Parsing;
	    (function (Parsing) {
	        var Keywords = (function () {
	            function Keywords() {
	                this._audio = [];
	                this._highlight = [];
	                this._image = [];
	                this._revealable = [];
	                this._sectionLink = [];
	                this._table = [];
	                this._video = [];
	            }
	            Object.defineProperty(Keywords.prototype, "audio", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['audio'].concat(this._audio));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Keywords.prototype, "highlight", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['highlight'].concat(this._highlight));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Keywords.prototype, "image", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['image', 'img'].concat(this._image));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Keywords.prototype, "revealable", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['spoiler', 'nsfw', 'nsfl', 'revealable'].concat(this._revealable));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Keywords.prototype, "sectionLink", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['section', 'topic'].concat(this._sectionLink));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Keywords.prototype, "table", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['table'].concat(this._table));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Keywords.prototype, "video", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['video', 'vid'].concat(this._video));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Keywords.prototype.clone = function () {
	                var clone = new Keywords();
	                clone._audio = this._audio;
	                clone._highlight = this._highlight;
	                clone._image = this._image;
	                clone._revealable = this._revealable;
	                clone._sectionLink = this._sectionLink;
	                clone._table = this._table;
	                clone._video = this._video;
	                return clone;
	            };
	            Keywords.prototype.applyUserProvidedSettings = function (keywords) {
	                if (!keywords) {
	                    return;
	                }
	                this._audio =
	                    sanitizeVariations(keywords.audio);
	                this._highlight =
	                    sanitizeVariations(keywords.highlight);
	                this._image =
	                    sanitizeVariations(keywords.image);
	                this._revealable =
	                    sanitizeVariations(keywords.revealable);
	                this._sectionLink =
	                    sanitizeVariations(keywords.sectionLink);
	                this._table =
	                    sanitizeVariations(keywords.table);
	                this._video =
	                    sanitizeVariations(keywords.video);
	            };
	            return Keywords;
	        }());
	        Parsing.Keywords = Keywords;
	    })(Parsing = Settings.Parsing || (Settings.Parsing = {}));
	    var Rendering = (function () {
	        function Rendering() {
	            this.idPrefix = 'up';
	            this.renderDangerousContent = false;
	            this.terms = new Rendering.Terms();
	        }
	        Rendering.prototype.clone = function () {
	            var clone = new Rendering();
	            clone.idPrefix = this.idPrefix;
	            clone.renderDangerousContent = this.renderDangerousContent;
	            clone.terms = this.terms.clone();
	            return clone;
	        };
	        Rendering.prototype.applyUserProvidedSettings = function (settings) {
	            if (!settings) {
	                return;
	            }
	            this.idPrefix =
	                CollectionHelpers_1.coalesce(settings.idPrefix, this.idPrefix);
	            this.renderDangerousContent =
	                CollectionHelpers_1.coalesce(settings.renderDangerousContent, this.renderDangerousContent);
	            this.terms.applyUserProvidedSettings(settings.terms);
	        };
	        return Rendering;
	    }());
	    Settings.Rendering = Rendering;
	    var Rendering;
	    (function (Rendering) {
	        var Terms = (function () {
	            function Terms() {
	                this.footnote = 'footnote';
	                this.footnoteReference = 'footnote reference';
	                this.revealContent = 'reveal';
	                this.sectionReferencedByTableOfContents = 'topic';
	                this.tableOfContents = 'Table of Contents';
	            }
	            Terms.prototype.clone = function () {
	                var clone = new Terms();
	                clone.footnote = this.footnote;
	                clone.footnoteReference = this.footnoteReference;
	                clone.revealContent = this.revealContent;
	                clone.sectionReferencedByTableOfContents = this.sectionReferencedByTableOfContents;
	                clone.tableOfContents = this.tableOfContents;
	                return clone;
	            };
	            Terms.prototype.applyUserProvidedSettings = function (terms) {
	                if (!terms) {
	                    return;
	                }
	                this.footnote =
	                    CollectionHelpers_1.coalesce(terms.footnote, this.footnote);
	                this.footnoteReference =
	                    CollectionHelpers_1.coalesce(terms.footnoteReference, this.footnoteReference);
	                this.revealContent =
	                    CollectionHelpers_1.coalesce(terms.revealContent, this.revealContent);
	                this.sectionReferencedByTableOfContents =
	                    CollectionHelpers_1.coalesce(terms.sectionReferencedByTableOfContents, this.sectionReferencedByTableOfContents);
	                this.tableOfContents =
	                    CollectionHelpers_1.coalesce(terms.tableOfContents, this.tableOfContents);
	            };
	            return Terms;
	        }());
	        Rendering.Terms = Terms;
	    })(Rendering = Settings.Rendering || (Settings.Rendering = {}));
	})(Settings = exports.Settings || (exports.Settings = {}));
	function sanitizeVariations(variations) {
	    if (variations == null) {
	        return [];
	    }
	    var normalizedVariations = ((typeof variations === "string") ? [variations] : variations)
	        .filter(function (variation) { return !!variation; })
	        .map(function (variation) { return variation.trim(); })
	        .filter(function (variation) { return !!variation; });
	    return CollectionHelpers_1.distinct.apply(void 0, normalizedVariations);
	}
	//# sourceMappingURL=Settings.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(21);
	exports.INLINE_WHITESPACE_CHAR = PatternHelpers_1.anyCharNotMatching('\\S', '\\r', '\\n');
	exports.WHITESPACE_CHAR = '\\s';
	exports.ANY_WHITESPACE = PatternHelpers_1.everyOptional(exports.WHITESPACE_CHAR);
	exports.SOME_WHITESPACE = PatternHelpers_1.oneOrMore(exports.WHITESPACE_CHAR);
	exports.LETTER_CLASS = 'a-zA-Z';
	exports.DIGIT = '\\d';
	exports.ANY_CHAR = '.';
	exports.REST_OF_TEXT = PatternHelpers_1.everyOptional(exports.ANY_CHAR);
	exports.FORWARD_SLASH = '/';
	exports.HASH_MARK = '#';
	exports.LETTER_CHAR = PatternHelpers_1.anyCharMatching(exports.LETTER_CLASS);
	var URL_SCHEME_NAME = exports.LETTER_CHAR + PatternHelpers_1.everyOptional(PatternHelpers_1.anyCharMatching.apply(void 0, [exports.LETTER_CLASS, exports.DIGIT].concat(['-', '+', '.'].map(PatternHelpers_1.escapeForRegex))));
	exports.URL_SCHEME = URL_SCHEME_NAME + ':' + PatternHelpers_1.everyOptional('/');
	//# sourceMappingURL=PatternPieces.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function group(pattern) {
	    return "(?:" + pattern + ")";
	}
	exports.group = group;
	function capture(pattern) {
	    return "(" + pattern + ")";
	}
	exports.capture = capture;
	function optional(pattern) {
	    return group(pattern) + '?';
	}
	exports.optional = optional;
	function everyOptional(pattern) {
	    return group(pattern) + '*';
	}
	exports.everyOptional = everyOptional;
	function oneOrMore(pattern) {
	    return atLeast(1, pattern);
	}
	exports.oneOrMore = oneOrMore;
	function multiple(pattern) {
	    return atLeast(2, pattern);
	}
	exports.multiple = multiple;
	function atLeast(count, pattern) {
	    return group(pattern) + ("{" + count + ",}");
	}
	exports.atLeast = atLeast;
	function exactly(count, pattern) {
	    return group(pattern) + ("{" + count + "}");
	}
	exports.exactly = exactly;
	function either() {
	    var patterns = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        patterns[_i - 0] = arguments[_i];
	    }
	    return group(patterns.join('|'));
	}
	exports.either = either;
	function anyCharMatching() {
	    var charClasses = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        charClasses[_i - 0] = arguments[_i];
	    }
	    return "[" + charClasses.join('') + "]";
	}
	exports.anyCharMatching = anyCharMatching;
	function anyCharNotMatching() {
	    var charClasses = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        charClasses[_i - 0] = arguments[_i];
	    }
	    return "[^" + charClasses.join('') + "]";
	}
	exports.anyCharNotMatching = anyCharNotMatching;
	function anyCharFrom() {
	    var chars = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        chars[_i - 0] = arguments[_i];
	    }
	    return anyCharMatching.apply(void 0, chars.map(escapeForRegex));
	}
	exports.anyCharFrom = anyCharFrom;
	function anyCharBut() {
	    var chars = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        chars[_i - 0] = arguments[_i];
	    }
	    return anyCharNotMatching.apply(void 0, chars.map(escapeForRegex));
	}
	exports.anyCharBut = anyCharBut;
	function followedBy(pattern) {
	    return "(?=" + pattern + ")";
	}
	exports.followedBy = followedBy;
	function notFollowedBy(pattern) {
	    return "(?!" + pattern + ")";
	}
	exports.notFollowedBy = notFollowedBy;
	function escapeForRegex(text) {
	    return text.replace(/[(){}[\].+*?^$\\|-]/g, '\\$&');
	}
	exports.escapeForRegex = escapeForRegex;
	function streakOf(charPattern) {
	    return solely(atLeast(3, charPattern));
	}
	exports.streakOf = streakOf;
	function solely(pattern) {
	    return getRegExpSolelyConsistingOf({ pattern: pattern });
	}
	exports.solely = solely;
	function solelyAndIgnoringCapitalization(pattern) {
	    return getRegExpSolelyConsistingOf({ pattern: pattern, isCaseInsensitive: true });
	}
	exports.solelyAndIgnoringCapitalization = solelyAndIgnoringCapitalization;
	function patternStartingWith(pattern) {
	    return getRegExpStartingWith({ pattern: pattern });
	}
	exports.patternStartingWith = patternStartingWith;
	function patternIgnoringCapitalizationAndStartingWith(pattern) {
	    return getRegExpStartingWith({ pattern: pattern, isCaseInsensitive: true });
	}
	exports.patternIgnoringCapitalizationAndStartingWith = patternIgnoringCapitalizationAndStartingWith;
	function patternEndingWith(pattern) {
	    return new RegExp(pattern + '$');
	}
	exports.patternEndingWith = patternEndingWith;
	var PatternPieces_1 = __webpack_require__(20);
	function getRegExpSolelyConsistingOf(args) {
	    return new RegExp('^' + PatternPieces_1.ANY_WHITESPACE + args.pattern + PatternPieces_1.ANY_WHITESPACE + '$', getRegExpFlags(args.isCaseInsensitive));
	}
	function getRegExpStartingWith(args) {
	    return new RegExp('^' + args.pattern, getRegExpFlags(args.isCaseInsensitive));
	}
	function getRegExpFlags(isCaseInsensitive) {
	    return isCaseInsensitive ? 'i' : undefined;
	}
	//# sourceMappingURL=PatternHelpers.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(21);
	var PatternPieces_1 = __webpack_require__(20);
	var INDENT = PatternHelpers_1.either('\t', PatternHelpers_1.exactly(2, PatternPieces_1.INLINE_WHITESPACE_CHAR));
	exports.INDENTED_PATTERN = PatternHelpers_1.patternStartingWith(INDENT);
	exports.DIVIDER_STREAK_PATTERN = PatternHelpers_1.streakOf(PatternHelpers_1.anyCharFrom('#', '=', '-', '+', '~', '*', '@', ':'));
	exports.BLANK_PATTERN = PatternHelpers_1.solely('');
	exports.NON_BLANK_PATTERN = /\S/;
	exports.WHITESPACE_CHAR_PATTERN = new RegExp(PatternPieces_1.WHITESPACE_CHAR);
	exports.URL_SCHEME_PATTERN = PatternHelpers_1.patternStartingWith(PatternPieces_1.URL_SCHEME);
	//# sourceMappingURL=Patterns.js.map

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	function last(collection) {
	    return collection[collection.length - 1];
	}
	exports.last = last;
	function concat(collections) {
	    return (_a = []).concat.apply(_a, collections);
	    var _a;
	}
	exports.concat = concat;
	function reversed(collection) {
	    return collection.slice().reverse();
	}
	exports.reversed = reversed;
	function remove(collection, itemToRemove) {
	    for (var i = collection.length - 1; i >= 0; i--) {
	        if (collection[i] === itemToRemove) {
	            collection.splice(i, 1);
	            return;
	        }
	    }
	}
	exports.remove = remove;
	function distinct() {
	    var values = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        values[_i - 0] = arguments[_i];
	    }
	    return values.reduce(function (distinctValues, value) {
	        return (distinctValues.indexOf(value) !== -1)
	            ? distinctValues
	            : distinctValues.concat([value]);
	    }, []);
	}
	exports.distinct = distinct;
	function coalesce() {
	    var values = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        values[_i - 0] = arguments[_i];
	    }
	    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
	        var value = values_1[_a];
	        if (value != null) {
	            return value;
	        }
	    }
	    return null;
	}
	exports.coalesce = coalesce;
	//# sourceMappingURL=CollectionHelpers.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Document_1 = __webpack_require__(25);
	var HeadingLeveler_1 = __webpack_require__(45);
	var getOutlineSyntaxNodes_1 = __webpack_require__(46);
	function parse(markup, settings) {
	    var children = getOutlineSyntaxNodes_1.getOutlineSyntaxNodes({
	        markupLines: markup.split(exports.MARKUP_LINE_BREAK),
	        sourceLineNumber: 1,
	        headingLeveler: new HeadingLeveler_1.HeadingLeveler(),
	        settings: settings
	    });
	    return Document_1.Document.create(children);
	}
	exports.parse = parse;
	exports.MARKUP_LINE_BREAK = '\n';
	//# sourceMappingURL=parse.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(26);
	var Heading_1 = __webpack_require__(27);
	var SectionLink_1 = __webpack_require__(31);
	var insertFootnoteBlocksAndAssignFootnoteReferenceNumbers_1 = __webpack_require__(33);
	var CollectionHelpers_1 = __webpack_require__(23);
	var Document = (function (_super) {
	    __extends(Document, _super);
	    function Document(children, tableOfContents) {
	        if (tableOfContents === void 0) { tableOfContents = new Document.TableOfContents(); }
	        _super.call(this, children);
	        this.tableOfContents = tableOfContents;
	    }
	    Document.create = function (children) {
	        var tableOfContents = Document.TableOfContents.createAndAssociateEntriesWithTheirReferences(children);
	        var document = new Document(children, tableOfContents);
	        insertFootnoteBlocksAndAssignFootnoteReferenceNumbers_1.insertFootnoteBlocksAndAssignFootnoteReferenceNumbers(document);
	        return document;
	    };
	    return Document;
	}(OutlineSyntaxNodeContainer_1.OutlineSyntaxNodeContainer));
	exports.Document = Document;
	var Document;
	(function (Document) {
	    var TableOfContents = (function () {
	        function TableOfContents(entries) {
	            if (entries === void 0) { entries = []; }
	            this.entries = entries;
	        }
	        TableOfContents.createAndAssociateEntriesWithTheirReferences = function (documentChildren) {
	            var entries = TableOfContents.getEntries(documentChildren);
	            for (var i = 0; i < entries.length; i++) {
	                entries[i].ordinalInTableOfContents = i + 1;
	            }
	            var tableOfContents = new TableOfContents(entries);
	            var allInlineSyntaxNodes = CollectionHelpers_1.concat(documentChildren.map(function (child) { return child.inlineDescendants(); }));
	            for (var _i = 0, allInlineSyntaxNodes_1 = allInlineSyntaxNodes; _i < allInlineSyntaxNodes_1.length; _i++) {
	                var inlineSyntaxNode = allInlineSyntaxNodes_1[_i];
	                if (inlineSyntaxNode instanceof SectionLink_1.SectionLink) {
	                    inlineSyntaxNode.referenceMostAppropriateTableOfContentsEntry(tableOfContents);
	                }
	            }
	            return tableOfContents;
	        };
	        TableOfContents.getEntries = function (nodes) {
	            return CollectionHelpers_1.concat(nodes.map(function (node) {
	                return node instanceof Heading_1.Heading ? [node] : node.descendantsToIncludeInTableOfContents();
	            }));
	        };
	        return TableOfContents;
	    }());
	    Document.TableOfContents = TableOfContents;
	})(Document = exports.Document || (exports.Document = {}));
	//# sourceMappingURL=Document.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Document_1 = __webpack_require__(25);
	var CollectionHelpers_1 = __webpack_require__(23);
	var OutlineSyntaxNodeContainer = (function () {
	    function OutlineSyntaxNodeContainer(children) {
	        this.children = children;
	    }
	    OutlineSyntaxNodeContainer.prototype.descendantsToIncludeInTableOfContents = function () {
	        return Document_1.Document.TableOfContents.getEntries(this.children);
	    };
	    OutlineSyntaxNodeContainer.prototype.inlineDescendants = function () {
	        return CollectionHelpers_1.concat(this.children.map(function (node) { return node.inlineDescendants(); }));
	    };
	    return OutlineSyntaxNodeContainer;
	}());
	exports.OutlineSyntaxNodeContainer = OutlineSyntaxNodeContainer;
	//# sourceMappingURL=OutlineSyntaxNodeContainer.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(28);
	var getSearchableText_1 = __webpack_require__(30);
	var Heading = (function (_super) {
	    __extends(Heading, _super);
	    function Heading(children, options) {
	        _super.call(this, children);
	        this.ordinalInTableOfContents = undefined;
	        this.sourceLineNumber = undefined;
	        this.level = options.level;
	        this.ordinalInTableOfContents = options.ordinalInTableOfContents;
	        this.sourceLineNumber = options.sourceLineNumber;
	    }
	    Heading.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    Heading.prototype.searchableText = function () {
	        return getSearchableText_1.getSearchableText(this.children);
	    };
	    Heading.prototype.contentWithinTableOfContents = function () {
	        return this.children;
	    };
	    Heading.prototype.render = function (renderer) {
	        return renderer.heading(this);
	    };
	    return Heading;
	}(InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer));
	exports.Heading = Heading;
	//# sourceMappingURL=Heading.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var getInlineDescendants_1 = __webpack_require__(29);
	var InlineSyntaxNodeContainer = (function () {
	    function InlineSyntaxNodeContainer(children) {
	        this.children = children;
	    }
	    InlineSyntaxNodeContainer.prototype.inlineDescendants = function () {
	        return getInlineDescendants_1.getInlineDescendants(this.children);
	    };
	    return InlineSyntaxNodeContainer;
	}());
	exports.InlineSyntaxNodeContainer = InlineSyntaxNodeContainer;
	//# sourceMappingURL=InlineSyntaxNodeContainer.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CollectionHelpers_1 = __webpack_require__(23);
	function getInlineDescendants(nodes) {
	    return CollectionHelpers_1.concat(nodes.map(function (child) { return [child].concat(child.inlineDescendants()); }));
	}
	exports.getInlineDescendants = getInlineDescendants;
	//# sourceMappingURL=getInlineDescendants.js.map

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	function getSearchableText(nodes) {
	    return nodes
	        .map(function (child) { return child.searchableText(); })
	        .join('');
	}
	exports.getSearchableText = getSearchableText;
	//# sourceMappingURL=getSearchableText.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var StringHelpers_1 = __webpack_require__(32);
	var SectionLink = (function () {
	    function SectionLink(sectionTitleSnippet, entry) {
	        this.sectionTitleSnippet = sectionTitleSnippet;
	        this.entry = entry;
	    }
	    SectionLink.prototype.referenceMostAppropriateTableOfContentsEntry = function (tableOfContents) {
	        if (!this.sectionTitleSnippet) {
	            return;
	        }
	        for (var _i = 0, _a = tableOfContents.entries; _i < _a.length; _i++) {
	            var entry = _a[_i];
	            var textOfEntry = entry.searchableText();
	            var sectionTitleSnippet = this.sectionTitleSnippet;
	            if (StringHelpers_1.isEqualIgnoringCapitalization(textOfEntry, sectionTitleSnippet) && this.canMatch(entry)) {
	                this.entry = entry;
	                return;
	            }
	            if (!this.entry) {
	                if (StringHelpers_1.containsStringIgnoringCapitalization({ haystack: textOfEntry, needle: sectionTitleSnippet })
	                    && this.canMatch(entry)) {
	                    this.entry = entry;
	                }
	            }
	        }
	    };
	    SectionLink.prototype.textAppearingInline = function () {
	        return (this.entry
	            ? this.entry.searchableText()
	            : this.sectionTitleSnippet);
	    };
	    SectionLink.prototype.searchableText = function () {
	        return this.sectionTitleSnippet;
	    };
	    SectionLink.prototype.inlineDescendants = function () {
	        return [];
	    };
	    SectionLink.prototype.render = function (renderer) {
	        return renderer.sectionLink(this);
	    };
	    SectionLink.prototype.canMatch = function (entry) {
	        return (entry.inlineDescendants().indexOf(this) === -1);
	    };
	    return SectionLink;
	}());
	exports.SectionLink = SectionLink;
	//# sourceMappingURL=SectionLink.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(21);
	function repeat(text, count) {
	    return new Array(count + 1).join(text);
	}
	exports.repeat = repeat;
	function isEqualIgnoringCapitalization(first, second) {
	    var pattern = new RegExp('^' + PatternHelpers_1.escapeForRegex(first) + '$', 'i');
	    return pattern.test(second);
	}
	exports.isEqualIgnoringCapitalization = isEqualIgnoringCapitalization;
	function containsStringIgnoringCapitalization(args) {
	    var pattern = new RegExp(PatternHelpers_1.escapeForRegex(args.needle), 'i');
	    return pattern.test(args.haystack);
	}
	exports.containsStringIgnoringCapitalization = containsStringIgnoringCapitalization;
	//# sourceMappingURL=StringHelpers.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CollectionHelpers_1 = __webpack_require__(23);
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(26);
	var InlineSyntaxNodeContainer_1 = __webpack_require__(28);
	var DescriptionList_1 = __webpack_require__(34);
	var FootnoteBlock_1 = __webpack_require__(35);
	var Footnote_1 = __webpack_require__(36);
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	var RevealableBlock_1 = __webpack_require__(39);
	var LineBlock_1 = __webpack_require__(41);
	var OrderedList_1 = __webpack_require__(42);
	var UnorderedList_1 = __webpack_require__(43);
	var Table_1 = __webpack_require__(44);
	function insertFootnoteBlocksAndAssignFootnoteReferenceNumbers(document) {
	    new FootnoteBlockInserter(document);
	}
	exports.insertFootnoteBlocksAndAssignFootnoteReferenceNumbers = insertFootnoteBlocksAndAssignFootnoteReferenceNumbers;
	var FootnoteBlockInserter = (function () {
	    function FootnoteBlockInserter(document) {
	        this.currentFootnoteReferenceNumber = 1;
	        this.insertFootnoteBlocksAndAssignFootnoteReferenceNumbers(document);
	    }
	    FootnoteBlockInserter.prototype.insertFootnoteBlocksAndAssignFootnoteReferenceNumbers = function (outlineNodeContainer) {
	        var outlineNodesWithFootnoteBlocks = [];
	        for (var _i = 0, _a = outlineNodeContainer.children; _i < _a.length; _i++) {
	            var outlineNode = _a[_i];
	            outlineNodesWithFootnoteBlocks.push(outlineNode);
	            var footnotesForNextFootnoteBlock = this.handleOutlineNodeAndGetBlocklessFootnotes(outlineNode);
	            if (footnotesForNextFootnoteBlock.length) {
	                outlineNodesWithFootnoteBlocks.push(this.getFootnoteBlock(footnotesForNextFootnoteBlock));
	            }
	        }
	        outlineNodeContainer.children = outlineNodesWithFootnoteBlocks;
	    };
	    FootnoteBlockInserter.prototype.handleOutlineNodeAndGetBlocklessFootnotes = function (node) {
	        if (node instanceof InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer) {
	            return this.getOutermostFootnotesAndAssignTheirReferenceNumbers(node.children);
	        }
	        if (node instanceof RevealableBlock_1.RevealableBlock) {
	            this.insertFootnoteBlocksAndAssignFootnoteReferenceNumbers(node);
	            return [];
	        }
	        if (node instanceof OutlineSyntaxNodeContainer_1.OutlineSyntaxNodeContainer) {
	            return this.getBlocklessFootnotesFromOutlineNodes(node.children);
	        }
	        if ((node instanceof UnorderedList_1.UnorderedList) || (node instanceof OrderedList_1.OrderedList)) {
	            return this.getBlocklessFootnotesFromOutlineContainers(node.items);
	        }
	        if (node instanceof LineBlock_1.LineBlock) {
	            return this.getBlocklessFootnotesFromInlineContainers(node.lines);
	        }
	        if (node instanceof DescriptionList_1.DescriptionList) {
	            return this.getBlocklessFootnotesFromDescriptionList(node);
	        }
	        if (node instanceof Table_1.Table) {
	            return this.getBlocklessFootnotesFromTable(node);
	        }
	        return [];
	    };
	    FootnoteBlockInserter.prototype.getOutermostFootnotesAndAssignTheirReferenceNumbers = function (nodes) {
	        var footnotes = [];
	        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
	            var node = nodes_1[_i];
	            if (node instanceof Footnote_1.Footnote) {
	                node.referenceNumber = this.currentFootnoteReferenceNumber++;
	                footnotes.push(node);
	                continue;
	            }
	            if (node instanceof RichInlineSyntaxNode_1.RichInlineSyntaxNode) {
	                footnotes.push.apply(footnotes, this.getOutermostFootnotesAndAssignTheirReferenceNumbers(node.children));
	            }
	        }
	        return footnotes;
	    };
	    FootnoteBlockInserter.prototype.getBlocklessFootnotesFromInlineContainers = function (containers) {
	        var _this = this;
	        return CollectionHelpers_1.concat(containers.map(function (container) { return _this.getOutermostFootnotesAndAssignTheirReferenceNumbers(container.children); }));
	    };
	    FootnoteBlockInserter.prototype.getBlocklessFootnotesFromOutlineContainers = function (containers) {
	        var _this = this;
	        return CollectionHelpers_1.concat(containers.map(function (container) { return _this.getBlocklessFootnotesFromOutlineNodes(container.children); }));
	    };
	    FootnoteBlockInserter.prototype.getBlocklessFootnotesFromDescriptionList = function (list) {
	        var _this = this;
	        return CollectionHelpers_1.concat(list.items.map(function (item) { return _this.getBlocklessFootnotesFromDescriptionListItem(item); }));
	    };
	    FootnoteBlockInserter.prototype.getBlocklessFootnotesFromDescriptionListItem = function (item) {
	        var footnotesFromSubjects = this.getBlocklessFootnotesFromInlineContainers(item.subjects);
	        var footnotesFromDescription = this.getBlocklessFootnotesFromOutlineNodes(item.description.children);
	        return footnotesFromSubjects.concat(footnotesFromDescription);
	    };
	    FootnoteBlockInserter.prototype.getBlocklessFootnotesFromTable = function (table) {
	        var _this = this;
	        return CollectionHelpers_1.concat([
	            table.caption ? [table.caption] : [],
	            table.header.cells
	        ].concat(table.rows.map(function (row) { return row.allCellsStartingWithHeaderColumnCell; })).map(function (captionOrCell) { return _this.getBlocklessFootnotesFromInlineContainers(captionOrCell); }));
	    };
	    FootnoteBlockInserter.prototype.getBlocklessFootnotesFromOutlineNodes = function (nodes) {
	        var _this = this;
	        return CollectionHelpers_1.concat(nodes.map(function (node) { return _this.handleOutlineNodeAndGetBlocklessFootnotes(node); }));
	    };
	    FootnoteBlockInserter.prototype.getFootnoteBlock = function (footnotes) {
	        var footnoteBlock = new FootnoteBlock_1.FootnoteBlock(footnotes);
	        for (var i = 0; i < footnoteBlock.footnotes.length; i++) {
	            var footnote = footnoteBlock.footnotes[i];
	            var nestedFootnotes = this.getOutermostFootnotesAndAssignTheirReferenceNumbers(footnote.children);
	            (_a = footnoteBlock.footnotes).push.apply(_a, nestedFootnotes);
	        }
	        return footnoteBlock;
	        var _a;
	    };
	    return FootnoteBlockInserter;
	}());
	//# sourceMappingURL=insertFootnoteBlocksAndAssignFootnoteReferenceNumbers.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(28);
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(26);
	var CollectionHelpers_1 = __webpack_require__(23);
	var DescriptionList = (function () {
	    function DescriptionList(items, options) {
	        this.items = items;
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    DescriptionList.prototype.descendantsToIncludeInTableOfContents = function () {
	        return CollectionHelpers_1.concat(this.items.map(function (item) { return item.descendantsToIncludeInTableOfContents(); }));
	    };
	    DescriptionList.prototype.inlineDescendants = function () {
	        return CollectionHelpers_1.concat(this.items.map(function (item) { return item.inlineDescendants(); }));
	    };
	    DescriptionList.prototype.render = function (renderer) {
	        return renderer.descriptionList(this);
	    };
	    return DescriptionList;
	}());
	exports.DescriptionList = DescriptionList;
	var DescriptionList;
	(function (DescriptionList) {
	    var Item = (function () {
	        function Item(subjects, description) {
	            this.subjects = subjects;
	            this.description = description;
	        }
	        Item.prototype.descendantsToIncludeInTableOfContents = function () {
	            return this.description.descendantsToIncludeInTableOfContents();
	        };
	        Item.prototype.inlineDescendants = function () {
	            return CollectionHelpers_1.concat(this.subjects.concat([
	                this.description
	            ]).map(function (subjectOrDescription) { return subjectOrDescription.inlineDescendants(); }));
	        };
	        return Item;
	    }());
	    DescriptionList.Item = Item;
	    var Item;
	    (function (Item) {
	        var Subject = (function (_super) {
	            __extends(Subject, _super);
	            function Subject() {
	                _super.apply(this, arguments);
	            }
	            Subject.prototype.DESCRIPTION_LIST_ITEM_SUBJECT = function () { };
	            return Subject;
	        }(InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer));
	        Item.Subject = Subject;
	        var Description = (function (_super) {
	            __extends(Description, _super);
	            function Description() {
	                _super.apply(this, arguments);
	            }
	            Description.prototype.DESCRIPTION_LIST_ITEM_DESCRIPTION = function () { };
	            return Description;
	        }(OutlineSyntaxNodeContainer_1.OutlineSyntaxNodeContainer));
	        Item.Description = Description;
	    })(Item = DescriptionList.Item || (DescriptionList.Item = {}));
	})(DescriptionList = exports.DescriptionList || (exports.DescriptionList = {}));
	//# sourceMappingURL=DescriptionList.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var getInlineDescendants_1 = __webpack_require__(29);
	var FootnoteBlock = (function () {
	    function FootnoteBlock(footnotes) {
	        this.footnotes = footnotes;
	    }
	    Object.defineProperty(FootnoteBlock.prototype, "sourceLineNumber", {
	        get: function () {
	            return undefined;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FootnoteBlock.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    FootnoteBlock.prototype.inlineDescendants = function () {
	        return getInlineDescendants_1.getInlineDescendants(this.footnotes);
	    };
	    FootnoteBlock.prototype.render = function (renderer) {
	        return renderer.footnoteBlock(this);
	    };
	    FootnoteBlock.prototype.FOOTNOTE_BLOCK = function () { };
	    return FootnoteBlock;
	}());
	exports.FootnoteBlock = FootnoteBlock;
	//# sourceMappingURL=FootnoteBlock.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	var Footnote = (function (_super) {
	    __extends(Footnote, _super);
	    function Footnote(children, options) {
	        _super.call(this, children);
	        if (options) {
	            this.referenceNumber = options.referenceNumber;
	        }
	    }
	    Footnote.prototype.textAppearingInline = function () {
	        return '';
	    };
	    Footnote.prototype.render = function (renderer) {
	        return renderer.referenceToFootnote(this);
	    };
	    return Footnote;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.Footnote = Footnote;
	//# sourceMappingURL=Footnote.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(28);
	var getTextAppearingInline_1 = __webpack_require__(38);
	var getSearchableText_1 = __webpack_require__(30);
	var RichInlineSyntaxNode = (function (_super) {
	    __extends(RichInlineSyntaxNode, _super);
	    function RichInlineSyntaxNode() {
	        _super.apply(this, arguments);
	    }
	    RichInlineSyntaxNode.prototype.textAppearingInline = function () {
	        return getTextAppearingInline_1.getTextAppearingInline(this.children);
	    };
	    RichInlineSyntaxNode.prototype.searchableText = function () {
	        return getSearchableText_1.getSearchableText(this.children);
	    };
	    return RichInlineSyntaxNode;
	}(InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer));
	exports.RichInlineSyntaxNode = RichInlineSyntaxNode;
	//# sourceMappingURL=RichInlineSyntaxNode.js.map

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	function getTextAppearingInline(nodes) {
	    return nodes
	        .map(function (child) { return child.textAppearingInline(); })
	        .join('');
	}
	exports.getTextAppearingInline = getTextAppearingInline;
	//# sourceMappingURL=getTextAppearingInline.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichOutlineSyntaxNode_1 = __webpack_require__(40);
	var RevealableBlock = (function (_super) {
	    __extends(RevealableBlock, _super);
	    function RevealableBlock() {
	        _super.apply(this, arguments);
	    }
	    RevealableBlock.prototype.render = function (renderer) {
	        return renderer.revealableBlock(this);
	    };
	    RevealableBlock.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    RevealableBlock.prototype.REVEALABLE_BLOCK = function () { };
	    return RevealableBlock;
	}(RichOutlineSyntaxNode_1.RichOutlineSyntaxNode));
	exports.RevealableBlock = RevealableBlock;
	//# sourceMappingURL=RevealableBlock.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(26);
	var RichOutlineSyntaxNode = (function (_super) {
	    __extends(RichOutlineSyntaxNode, _super);
	    function RichOutlineSyntaxNode(children, options) {
	        _super.call(this, children);
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    return RichOutlineSyntaxNode;
	}(OutlineSyntaxNodeContainer_1.OutlineSyntaxNodeContainer));
	exports.RichOutlineSyntaxNode = RichOutlineSyntaxNode;
	//# sourceMappingURL=RichOutlineSyntaxNode.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(28);
	var CollectionHelpers_1 = __webpack_require__(23);
	var LineBlock = (function () {
	    function LineBlock(lines, options) {
	        this.lines = lines;
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    LineBlock.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    LineBlock.prototype.inlineDescendants = function () {
	        return CollectionHelpers_1.concat(this.lines.map(function (line) { return line.inlineDescendants(); }));
	    };
	    LineBlock.prototype.render = function (renderer) {
	        return renderer.lineBlock(this);
	    };
	    return LineBlock;
	}());
	exports.LineBlock = LineBlock;
	var LineBlock;
	(function (LineBlock) {
	    var Line = (function (_super) {
	        __extends(Line, _super);
	        function Line() {
	            _super.apply(this, arguments);
	        }
	        Line.prototype.LINE_BLOCK_LINE = function () { };
	        return Line;
	    }(InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer));
	    LineBlock.Line = Line;
	})(LineBlock = exports.LineBlock || (exports.LineBlock = {}));
	//# sourceMappingURL=LineBlock.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(26);
	var CollectionHelpers_1 = __webpack_require__(23);
	var OrderedList = (function () {
	    function OrderedList(items, options) {
	        this.items = items;
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    OrderedList.prototype.start = function () {
	        return this.items[0].ordinal;
	    };
	    OrderedList.prototype.order = function () {
	        var withExplicitOrdinals = this.items.filter(function (item) { return item.ordinal != null; });
	        if (withExplicitOrdinals.length < 2) {
	            return OrderedList.Order.Ascending;
	        }
	        return (withExplicitOrdinals[0].ordinal > withExplicitOrdinals[1].ordinal
	            ? OrderedList.Order.Descending
	            : OrderedList.Order.Ascending);
	    };
	    OrderedList.prototype.descendantsToIncludeInTableOfContents = function () {
	        return CollectionHelpers_1.concat(this.items.map(function (item) { return item.descendantsToIncludeInTableOfContents(); }));
	    };
	    OrderedList.prototype.inlineDescendants = function () {
	        return CollectionHelpers_1.concat(this.items.map(function (item) { return item.inlineDescendants(); }));
	    };
	    OrderedList.prototype.render = function (renderer) {
	        return renderer.orderedList(this);
	    };
	    return OrderedList;
	}());
	exports.OrderedList = OrderedList;
	var OrderedList;
	(function (OrderedList) {
	    var Item = (function (_super) {
	        __extends(Item, _super);
	        function Item(children, options) {
	            _super.call(this, children);
	            this.children = children;
	            this.ordinal = undefined;
	            if (options) {
	                this.ordinal = options.ordinal;
	            }
	        }
	        Item.prototype.ORDERED_LIST_ITEM = function () { };
	        return Item;
	    }(OutlineSyntaxNodeContainer_1.OutlineSyntaxNodeContainer));
	    OrderedList.Item = Item;
	    (function (Order) {
	        Order[Order["Ascending"] = 1] = "Ascending";
	        Order[Order["Descending"] = 2] = "Descending";
	    })(OrderedList.Order || (OrderedList.Order = {}));
	    var Order = OrderedList.Order;
	})(OrderedList = exports.OrderedList || (exports.OrderedList = {}));
	//# sourceMappingURL=OrderedList.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(26);
	var CollectionHelpers_1 = __webpack_require__(23);
	var UnorderedList = (function () {
	    function UnorderedList(items, options) {
	        this.items = items;
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    UnorderedList.prototype.descendantsToIncludeInTableOfContents = function () {
	        return CollectionHelpers_1.concat(this.items.map(function (item) { return item.descendantsToIncludeInTableOfContents(); }));
	    };
	    UnorderedList.prototype.inlineDescendants = function () {
	        return CollectionHelpers_1.concat(this.items.map(function (item) { return item.inlineDescendants(); }));
	    };
	    UnorderedList.prototype.render = function (renderer) {
	        return renderer.unorderedList(this);
	    };
	    return UnorderedList;
	}());
	exports.UnorderedList = UnorderedList;
	var UnorderedList;
	(function (UnorderedList) {
	    var Item = (function (_super) {
	        __extends(Item, _super);
	        function Item() {
	            _super.apply(this, arguments);
	        }
	        Item.prototype.UNORDERED_LIST_ITEM = function () { };
	        return Item;
	    }(OutlineSyntaxNodeContainer_1.OutlineSyntaxNodeContainer));
	    UnorderedList.Item = Item;
	})(UnorderedList = exports.UnorderedList || (exports.UnorderedList = {}));
	//# sourceMappingURL=UnorderedList.js.map

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(28);
	var PatternPieces_1 = __webpack_require__(20);
	var PatternHelpers_1 = __webpack_require__(21);
	var CollectionHelpers_1 = __webpack_require__(23);
	var getInlineDescendants_1 = __webpack_require__(29);
	var Table = (function () {
	    function Table(header, rows, caption, options) {
	        this.header = header;
	        this.rows = rows;
	        this.caption = caption;
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    Table.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    Table.prototype.inlineDescendants = function () {
	        var captionAndCells = CollectionHelpers_1.concat([
	            this.caption ? [this.caption] : [],
	            this.header.cells
	        ].concat(this.rows.map(function (row) { return row.allCellsStartingWithHeaderColumnCell; })));
	        return CollectionHelpers_1.concat(captionAndCells.map(function (captionOrCell) { return getInlineDescendants_1.getInlineDescendants(captionOrCell.children); }));
	    };
	    Table.prototype.render = function (renderer) {
	        return renderer.table(this);
	    };
	    return Table;
	}());
	exports.Table = Table;
	var Table;
	(function (Table) {
	    var Caption = (function (_super) {
	        __extends(Caption, _super);
	        function Caption() {
	            _super.apply(this, arguments);
	        }
	        Caption.prototype.TABLE_CAPTION = function () { };
	        return Caption;
	    }(InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer));
	    Table.Caption = Caption;
	    var Cell = (function (_super) {
	        __extends(Cell, _super);
	        function Cell(children, countColumnsSpanned) {
	            if (countColumnsSpanned === void 0) { countColumnsSpanned = 1; }
	            _super.call(this, children);
	            this.countColumnsSpanned = countColumnsSpanned;
	        }
	        Cell.prototype.isNumeric = function () {
	            var textContent = this.children
	                .map(function (child) { return child.textAppearingInline(); })
	                .join('');
	            return CONTAINS_DIGIT.test(textContent) && !CONTAINS_NON_NUMERIC_CHARACTER.test(textContent);
	        };
	        return Cell;
	    }(InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer));
	    Table.Cell = Cell;
	    var CONTAINS_DIGIT = new RegExp(PatternPieces_1.DIGIT);
	    var CONTAINS_NON_NUMERIC_CHARACTER = new RegExp(PatternHelpers_1.anyCharMatching(PatternPieces_1.LETTER_CLASS, '_', PatternPieces_1.WHITESPACE_CHAR));
	    var Header = (function () {
	        function Header(cells) {
	            this.cells = cells;
	        }
	        return Header;
	    }());
	    Table.Header = Header;
	    var Header;
	    (function (Header) {
	        var Cell = (function (_super) {
	            __extends(Cell, _super);
	            function Cell() {
	                _super.apply(this, arguments);
	            }
	            Cell.prototype.TABLE_HEADER_CELL = function () { };
	            return Cell;
	        }(Table.Cell));
	        Header.Cell = Cell;
	    })(Header = Table.Header || (Table.Header = {}));
	    var Row = (function () {
	        function Row(cells, headerColumnCell) {
	            this.cells = cells;
	            this.headerColumnCell = headerColumnCell;
	        }
	        Object.defineProperty(Row.prototype, "allCellsStartingWithHeaderColumnCell", {
	            get: function () {
	                var allCells = this.cells.slice();
	                if (this.headerColumnCell) {
	                    allCells.unshift(this.headerColumnCell);
	                }
	                return allCells;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return Row;
	    }());
	    Table.Row = Row;
	    var Row;
	    (function (Row) {
	        var Cell = (function (_super) {
	            __extends(Cell, _super);
	            function Cell() {
	                _super.apply(this, arguments);
	            }
	            Cell.prototype.TABLE_ROW_CELL = function () { };
	            return Cell;
	        }(Table.Cell));
	        Row.Cell = Cell;
	    })(Row = Table.Row || (Table.Row = {}));
	})(Table = exports.Table || (exports.Table = {}));
	//# sourceMappingURL=Table.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CollectionHelpers_1 = __webpack_require__(23);
	var HeadingLeveler = (function () {
	    function HeadingLeveler() {
	        this.headingSignatures = [];
	    }
	    HeadingLeveler.prototype.registerHeadingAndGetLevel = function (underline, overline) {
	        var headingSignature = fingerprint(underline) + (overline ? 'with overline' : '');
	        var hasCombinationOfUnderlineAndOverlineAlreadyBeenUsed = this.headingSignatures.indexOf(headingSignature) >= 0;
	        if (!hasCombinationOfUnderlineAndOverlineAlreadyBeenUsed) {
	            this.headingSignatures.push(headingSignature);
	        }
	        return this.getLevel(headingSignature);
	    };
	    HeadingLeveler.prototype.getLevel = function (headingSignature) {
	        return this.headingSignatures.indexOf(headingSignature) + 1;
	    };
	    return HeadingLeveler;
	}());
	exports.HeadingLeveler = HeadingLeveler;
	function isUnderlineConsistentWithOverline(overline, underline) {
	    return !overline || (fingerprint(overline) === fingerprint(underline));
	}
	exports.isUnderlineConsistentWithOverline = isUnderlineConsistentWithOverline;
	function fingerprint(text) {
	    var chars = text.trim().split('');
	    return CollectionHelpers_1.distinct.apply(void 0, chars).sort().join('');
	}
	//# sourceMappingURL=HeadingLeveler.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var ThematicBreak_1 = __webpack_require__(48);
	var tryToParseThematicBreakStreak_1 = __webpack_require__(49);
	var tryToParseHeading_1 = __webpack_require__(50);
	var tryToParseBlankLineSeparation_1 = __webpack_require__(96);
	var tryToParseCodeBlock_1 = __webpack_require__(94);
	var tryToParseBlockquote_1 = __webpack_require__(92);
	var tryToParseUnorderedList_1 = __webpack_require__(89);
	var tryToParseOrderedList_1 = __webpack_require__(91);
	var tryToParseDescriptionList_1 = __webpack_require__(97);
	var tryToParseTable_1 = __webpack_require__(98);
	var tryToParseRevealableBlock_1 = __webpack_require__(100);
	var parseParagraphOrLineBlock_1 = __webpack_require__(101);
	var Patterns_1 = __webpack_require__(22);
	var CollectionHelpers_1 = __webpack_require__(23);
	var OUTLINE_CONVENTION_PARSERS = [
	    tryToParseBlankLineSeparation_1.tryToParseBlankLineSeparation,
	    tryToParseUnorderedList_1.tryToParseUnorderedList,
	    tryToParseOrderedList_1.trytoParseOrderedList,
	    tryToParseHeading_1.tryToParseHeading,
	    tryToParseThematicBreakStreak_1.tryToParseThematicBreakStreak,
	    tryToParseCodeBlock_1.tryToParseCodeBlock,
	    tryToParseBlockquote_1.tryToParseBlockquote,
	    tryToParseTable_1.tryToParseTable,
	    tryToParseRevealableBlock_1.tryToParseRevealableBlock,
	    tryToParseDescriptionList_1.tryToParseDescriptionList
	];
	function getOutlineSyntaxNodes(args) {
	    var markupLines = args.markupLines, headingLeveler = args.headingLeveler, settings = args.settings;
	    var markupWithoutLeadingBlankLines = withoutLeadingBlankLines(markupLines);
	    var countLeadingBlankLinesRemoved = (markupLines.length - markupWithoutLeadingBlankLines.length);
	    var initialSourceLineNumber = args.sourceLineNumber + countLeadingBlankLinesRemoved;
	    var markupWithoutOuterBlankLines = withoutTrailingBlankLines(markupWithoutLeadingBlankLines);
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(markupWithoutOuterBlankLines);
	    var nodes = [];
	    var _loop_1 = function() {
	        var sourceLineNumber = initialSourceLineNumber + markupLineConsumer.countLinesConsumed;
	        var outlineParserArgs = {
	            markupLines: markupLineConsumer.remaining(),
	            sourceLineNumber: sourceLineNumber,
	            headingLeveler: headingLeveler,
	            settings: settings,
	            then: function (parsedNodes, countLinesConsumed) {
	                if (settings.createSourceMap) {
	                    for (var _i = 0, parsedNodes_1 = parsedNodes; _i < parsedNodes_1.length; _i++) {
	                        var node = parsedNodes_1[_i];
	                        node.sourceLineNumber = sourceLineNumber;
	                    }
	                }
	                nodes.push.apply(nodes, parsedNodes);
	                markupLineConsumer.skipLines(countLinesConsumed);
	            }
	        };
	        if (!OUTLINE_CONVENTION_PARSERS.some(function (tryToParse) { return tryToParse(outlineParserArgs); })) {
	            parseParagraphOrLineBlock_1.parseParagraphOrLineBlock(outlineParserArgs);
	        }
	    };
	    while (!markupLineConsumer.done()) {
	        _loop_1();
	    }
	    return condenseConsecutiveThematicBreaks(nodes);
	}
	exports.getOutlineSyntaxNodes = getOutlineSyntaxNodes;
	function withoutLeadingBlankLines(lines) {
	    var firstIndexOfNonBlankLine = 0;
	    for (; firstIndexOfNonBlankLine < lines.length; firstIndexOfNonBlankLine++) {
	        var line = lines[firstIndexOfNonBlankLine];
	        if (Patterns_1.NON_BLANK_PATTERN.test(line)) {
	            break;
	        }
	    }
	    return lines.slice(firstIndexOfNonBlankLine);
	}
	function withoutTrailingBlankLines(lines) {
	    var lastIndexOfNonBlankLine = lines.length - 1;
	    for (; lastIndexOfNonBlankLine >= 0; lastIndexOfNonBlankLine--) {
	        var line = lines[lastIndexOfNonBlankLine];
	        if (Patterns_1.NON_BLANK_PATTERN.test(line)) {
	            break;
	        }
	    }
	    return lines.slice(0, lastIndexOfNonBlankLine + 1);
	}
	function condenseConsecutiveThematicBreaks(nodes) {
	    var resultNodes = [];
	    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
	        var node = nodes_1[_i];
	        var isConsecutiveThematicBreak = node instanceof ThematicBreak_1.ThematicBreak
	            && CollectionHelpers_1.last(resultNodes) instanceof ThematicBreak_1.ThematicBreak;
	        if (!isConsecutiveThematicBreak) {
	            resultNodes.push(node);
	        }
	    }
	    return resultNodes;
	}
	//# sourceMappingURL=getOutlineSyntaxNodes.js.map

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	var LineConsumer = (function () {
	    function LineConsumer(lines) {
	        this.lines = lines;
	        this._countLinesConsumed = 0;
	    }
	    Object.defineProperty(LineConsumer.prototype, "countLinesConsumed", {
	        get: function () {
	            return this._countLinesConsumed;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LineConsumer.prototype.remaining = function () {
	        return this.lines.slice(this._countLinesConsumed);
	    };
	    LineConsumer.prototype.skipLines = function (count) {
	        this._countLinesConsumed += count;
	    };
	    LineConsumer.prototype.done = function () {
	        return this._countLinesConsumed >= this.lines.length;
	    };
	    LineConsumer.prototype.consume = function (args) {
	        if (this.done()) {
	            return false;
	        }
	        var linePattern = args.linePattern, thenBeforeConsumingLine = args.thenBeforeConsumingLine;
	        var captures = [];
	        var line = this.lines[this._countLinesConsumed];
	        if (linePattern) {
	            var results = linePattern.exec(line);
	            if (!results) {
	                return false;
	            }
	            captures = results.slice(1);
	        }
	        if (args.if && !args.if.apply(args, [line].concat(captures))) {
	            return false;
	        }
	        if (thenBeforeConsumingLine) {
	            thenBeforeConsumingLine.apply(void 0, [line].concat(captures));
	        }
	        this.skipLines(1);
	        return true;
	    };
	    return LineConsumer;
	}());
	exports.LineConsumer = LineConsumer;
	//# sourceMappingURL=LineConsumer.js.map

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	var ThematicBreak = (function () {
	    function ThematicBreak(options) {
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    ThematicBreak.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    ThematicBreak.prototype.inlineDescendants = function () {
	        return [];
	    };
	    ThematicBreak.prototype.render = function (renderer) {
	        return renderer.thematicBreak(this);
	    };
	    ThematicBreak.prototype.THEMATIC_BREAK = function () { };
	    return ThematicBreak;
	}());
	exports.ThematicBreak = ThematicBreak;
	//# sourceMappingURL=ThematicBreak.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var ThematicBreak_1 = __webpack_require__(48);
	var Patterns_1 = __webpack_require__(22);
	function tryToParseThematicBreakStreak(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    if (!markupLineConsumer.consume({ linePattern: Patterns_1.DIVIDER_STREAK_PATTERN })) {
	        return false;
	    }
	    args.then([new ThematicBreak_1.ThematicBreak()], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.tryToParseThematicBreakStreak = tryToParseThematicBreakStreak;
	//# sourceMappingURL=tryToParseThematicBreakStreak.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var Heading_1 = __webpack_require__(27);
	var Patterns_1 = __webpack_require__(22);
	var getInlineSyntaxNodes_1 = __webpack_require__(51);
	var isLineFancyOutlineConvention_1 = __webpack_require__(88);
	var HeadingLeveler_1 = __webpack_require__(45);
	function tryToParseHeading(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var optionalOverline;
	    markupLineConsumer.consume({
	        linePattern: Patterns_1.DIVIDER_STREAK_PATTERN,
	        thenBeforeConsumingLine: function (line) {
	            optionalOverline = line;
	        }
	    });
	    var contentMarkup;
	    var underline;
	    var hasContentAndUnderline = (markupLineConsumer.consume({
	        linePattern: Patterns_1.NON_BLANK_PATTERN,
	        thenBeforeConsumingLine: function (line) {
	            contentMarkup = line;
	        }
	    })
	        && markupLineConsumer.consume({
	            if: function (line) { return Patterns_1.DIVIDER_STREAK_PATTERN.test(line) && HeadingLeveler_1.isUnderlineConsistentWithOverline(optionalOverline, line); },
	            thenBeforeConsumingLine: function (line) {
	                underline = line;
	            }
	        })
	        && !isLineFancyOutlineConvention_1.isLineFancyOutlineConvention(contentMarkup, args.settings));
	    if (!hasContentAndUnderline) {
	        return false;
	    }
	    var children = getInlineSyntaxNodes_1.getInlineSyntaxNodes(contentMarkup, args.settings);
	    var level = args.headingLeveler.registerHeadingAndGetLevel(underline, optionalOverline);
	    args.then([new Heading_1.Heading(children, { level: level })], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.tryToParseHeading = tryToParseHeading;
	//# sourceMappingURL=tryToParseHeading.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tokenize_1 = __webpack_require__(52);
	var parse_1 = __webpack_require__(83);
	function getInlineSyntaxNodes(inlineMarkup, settings) {
	    return parse_1.parse(tokenize_1.tokenize(inlineMarkup, settings));
	}
	exports.getInlineSyntaxNodes = getInlineSyntaxNodes;
	function getInlineSyntaxNodesForInlineDocument(inlineMarkup, settings) {
	    return parse_1.parse(tokenize_1.tokenizeForInlineDocument(inlineMarkup, settings));
	}
	exports.getInlineSyntaxNodesForInlineDocument = getInlineSyntaxNodesForInlineDocument;
	//# sourceMappingURL=getInlineSyntaxNodes.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var RichConventions_1 = __webpack_require__(53);
	var MediaConventions_1 = __webpack_require__(66);
	var PatternHelpers_1 = __webpack_require__(21);
	var PatternPieces_1 = __webpack_require__(20);
	var Patterns_1 = __webpack_require__(22);
	var Strings_1 = __webpack_require__(71);
	var tryToTokenizeInlineCode_1 = __webpack_require__(72);
	var nestOverlappingConventions_1 = __webpack_require__(75);
	var CollectionHelpers_1 = __webpack_require__(23);
	var StringHelpers_1 = __webpack_require__(32);
	var Bracket_1 = __webpack_require__(76);
	var BacktrackedConventionHelper_1 = __webpack_require__(77);
	var ConventionContext_1 = __webpack_require__(78);
	var TextConsumer_1 = __webpack_require__(73);
	var TokenRole_1 = __webpack_require__(65);
	var Token_1 = __webpack_require__(74);
	var ConventionVariation_1 = __webpack_require__(79);
	var InflectionHandler_1 = __webpack_require__(80);
	var trimEscapedAndUnescapedOuterWhitespace_1 = __webpack_require__(82);
	function tokenize(inlineMarkup, settings) {
	    return new Tokenizer(inlineMarkup, settings).result;
	}
	exports.tokenize = tokenize;
	function tokenizeForInlineDocument(inlineMarkup, settings) {
	    var result = (new Tokenizer(inlineMarkup, settings, { isTokenizingInlineDocument: true })).result;
	    return result;
	}
	exports.tokenizeForInlineDocument = tokenizeForInlineDocument;
	var PARENTHESIS = new Bracket_1.Bracket('(', ')');
	var SQUARE_BRACKET = new Bracket_1.Bracket('[', ']');
	var PARENTHETICAL_BRACKETS = [
	    PARENTHESIS,
	    SQUARE_BRACKET
	];
	var CURLY_BRACKET = new Bracket_1.Bracket('{', '}');
	var Tokenizer = (function () {
	    function Tokenizer(inlineMarkup, settings, options) {
	        var _this = this;
	        this.settings = settings;
	        this.bufferedContent = '';
	        this.tokens = [];
	        this.openContexts = [];
	        this.backtrackedConventionHelper = new BacktrackedConventionHelper_1.BacktrackedConventionHelper();
	        this.rawParentheticalBracketConventions = this.getRawParentheticalBracketConventions();
	        this.rawCurlyBracketConvention = this.getRawCurlyBracketConvention();
	        this.mediaUrlConventions = this.getMediaUrlConventions();
	        this.linkUrlConventions = this.getLinkUrlConventions();
	        this.bareUrlPathConvention = this.getBareUrlPathConvention();
	        this.inflectionHandlers = [
	            {
	                delimiterChar: '*',
	                conventionForMinorInflection: RichConventions_1.EMPHASIS,
	                conventionForMajorInflection: RichConventions_1.STRESS
	            }, {
	                delimiterChar: '_',
	                conventionForMinorInflection: RichConventions_1.ITALICS,
	                conventionForMajorInflection: RichConventions_1.BOLD
	            }, {
	                delimiterChar: '"',
	                conventionForMinorInflection: RichConventions_1.INLINE_QUOTE
	            }
	        ].map(function (args) { return _this.getInflectionHandler(args); });
	        var trimmedMarkup = trimEscapedAndUnescapedOuterWhitespace_1.trimEscapedAndUnescapedOuterWhitespace(inlineMarkup);
	        this.markupConsumer = new TextConsumer_1.TextConsumer(trimmedMarkup);
	        this.configureConventions(options && options.isTokenizingInlineDocument);
	        this.tokenize();
	        this.result = nestOverlappingConventions_1.nestOverlappingConventions(this.tokens);
	    }
	    Object.defineProperty(Tokenizer.prototype, "justEnteredAConvention", {
	        get: function () {
	            return this.markupIndexWeLastOpenedAConvention === this.markupConsumer.index;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Tokenizer.prototype.indicateWeJustOpenedAConvention = function () {
	        this.markupIndexWeLastOpenedAConvention = this.markupConsumer.index;
	    };
	    Tokenizer.prototype.configureConventions = function (isTokenizingInlineDocument) {
	        var _this = this;
	        this.conventionVariations = CollectionHelpers_1.concat([
	            {
	                richConvention: RichConventions_1.HIGHLIGHT,
	                keyword: this.settings.keywords.highlight
	            }, {
	                richConvention: RichConventions_1.INLINE_REVEALABLE,
	                keyword: this.settings.keywords.revealable
	            }
	        ].map(function (args) { return _this.getConventionsForLabeledRichBrackets(args); })).concat(this.getMediaDescriptionConventions(), (isTokenizingInlineDocument
	            ? this.getFootnoteConventionsForInlineDocuments()
	            : this.getFootnoteConventions().concat(this.getSectionLinkConventions())), this.getLinkifyingUrlConventions(), this.getLinkContentConventions(), [
	            {
	                richConvention: RichConventions_1.NORMAL_PARENTHETICAL,
	                bracket: PARENTHESIS
	            }, {
	                richConvention: RichConventions_1.SQUARE_PARENTHETICAL,
	                bracket: SQUARE_BRACKET
	            }
	        ].map(function (args) { return _this.getParentheticalConvention(args); }), [
	            this.getExampleInputConvention(),
	            this.bareUrlPathConvention
	        ]);
	    };
	    Tokenizer.prototype.getFootnoteConventions = function () {
	        var _this = this;
	        return PARENTHETICAL_BRACKETS.map(function (bracket) {
	            return _this.getTokenizableRichConvention({
	                richConvention: RichConventions_1.FOOTNOTE,
	                startsWith: PatternPieces_1.ANY_WHITESPACE + _this.getFootnoteStartDelimiter(bracket),
	                endsWith: _this.getFootnotEndDelimiter(bracket)
	            });
	        });
	    };
	    Tokenizer.prototype.getFootnoteConventionsForInlineDocuments = function () {
	        var _this = this;
	        return PARENTHETICAL_BRACKETS.map(function (bracket) {
	            return _this.getTokenizableRichConvention({
	                richConvention: RichConventions_1.NORMAL_PARENTHETICAL,
	                startsWith: _this.getFootnoteStartDelimiter(bracket),
	                endsWith: _this.getFootnotEndDelimiter(bracket),
	                whenOpening: function () { _this.bufferedContent += PARENTHESIS.open; },
	                whenClosing: function () { _this.bufferedContent += PARENTHESIS.close; }
	            });
	        });
	    };
	    Tokenizer.prototype.getFootnoteStartDelimiter = function (bracket) {
	        return bracket.startPattern + PatternHelpers_1.escapeForRegex('^') + PatternPieces_1.ANY_WHITESPACE;
	    };
	    Tokenizer.prototype.getFootnotEndDelimiter = function (bracket) {
	        return bracket.endPattern;
	    };
	    Tokenizer.prototype.getLinkContentConventions = function () {
	        var _this = this;
	        return PARENTHETICAL_BRACKETS.map(function (bracket) {
	            return _this.getTokenizableRichConvention({
	                richConvention: RichConventions_1.LINK,
	                startsWith: bracket.startPattern,
	                endsWith: bracket.endPattern,
	                mustBeDirectlyFollowedBy: _this.linkUrlConventions
	            });
	        });
	    };
	    Tokenizer.prototype.getConventionsForLabeledRichBrackets = function (args) {
	        var _this = this;
	        var richConvention = args.richConvention, keyword = args.keyword;
	        return PARENTHETICAL_BRACKETS.map(function (bracket) {
	            return _this.getTokenizableRichConvention({
	                richConvention: richConvention,
	                startsWith: labeledBracketStartDelimiter(keyword, bracket),
	                endsWith: bracket.endPattern,
	                startPatternContainsATerm: true
	            });
	        });
	    };
	    Tokenizer.prototype.getParentheticalConvention = function (args) {
	        var _this = this;
	        var richConvention = args.richConvention, bracket = args.bracket;
	        return this.getTokenizableRichConvention({
	            richConvention: richConvention,
	            startsWith: bracket.startPattern + PatternHelpers_1.notFollowedBy(PatternPieces_1.WHITESPACE_CHAR),
	            endsWith: bracket.endPattern,
	            whenOpening: function () { _this.bufferedContent += bracket.open; },
	            whenClosing: function () { _this.bufferedContent += bracket.close; }
	        });
	    };
	    Tokenizer.prototype.getTokenizableRichConvention = function (args) {
	        var _this = this;
	        var richConvention = args.richConvention, startsWith = args.startsWith, endsWith = args.endsWith, startPatternContainsATerm = args.startPatternContainsATerm, whenOpening = args.whenOpening, insteadOfFailingWhenLeftUnclosed = args.insteadOfFailingWhenLeftUnclosed, whenClosing = args.whenClosing, mustBeDirectlyFollowedBy = args.mustBeDirectlyFollowedBy;
	        return new ConventionVariation_1.ConventionVariation({
	            startsWith: startsWith,
	            startPatternContainsATerm: startPatternContainsATerm,
	            endsWith: endsWith,
	            beforeOpeningItFlushesNonEmptyBufferToTextToken: true,
	            beforeClosingItFlushesNonEmptyBufferTo: TokenRole_1.TokenRole.Text,
	            whenOpening: whenOpening,
	            whenClosing: function (context) {
	                if (whenClosing) {
	                    whenClosing(context);
	                }
	                _this.encloseContextWithinConvention(richConvention, context);
	            },
	            insteadOfFailingWhenLeftUnclosed: insteadOfFailingWhenLeftUnclosed,
	            mustBeDirectlyFollowedBy: mustBeDirectlyFollowedBy
	        });
	    };
	    Tokenizer.prototype.tryToTokenizeBareUrlSchemeAndHostname = function () {
	        var _this = this;
	        return this.markupConsumer.consume({
	            pattern: BARE_URL_SCHEME_AND_HOSTNAME,
	            thenBeforeConsumingText: function (url) {
	                _this.flushNonEmptyBufferToTextToken();
	                _this.appendNewToken(TokenRole_1.TokenRole.BareUrl, url);
	            }
	        });
	    };
	    Tokenizer.prototype.getBareUrlPathConvention = function () {
	        var _this = this;
	        return new ConventionVariation_1.ConventionVariation({
	            startsWith: PatternPieces_1.FORWARD_SLASH,
	            isCutShortByWhitespace: true,
	            whenOpening: function () {
	                _this.bufferedContent += PatternPieces_1.FORWARD_SLASH;
	            },
	            canOnlyOpenIfDirectlyFollowing: [TokenRole_1.TokenRole.BareUrl],
	            insteadOfOpeningRegularConventionsWhileOpen: function () { return _this.handleTextAwareOfRawBrackets(); },
	            whenClosingItAlsoClosesInnerConventions: true,
	            whenClosing: function () { return _this.appendBufferedUrlPathToCurrentBareUrl(); },
	            insteadOfFailingWhenLeftUnclosed: function () { return _this.appendBufferedUrlPathToCurrentBareUrl(); }
	        });
	    };
	    Tokenizer.prototype.getExampleInputConvention = function () {
	        var _this = this;
	        return new ConventionVariation_1.ConventionVariation({
	            startsWith: CURLY_BRACKET.startPattern,
	            endsWith: CURLY_BRACKET.endPattern,
	            beforeOpeningItFlushesNonEmptyBufferToTextToken: true,
	            insteadOfOpeningRegularConventionsWhileOpen: function () {
	                _this.tryToOpen(_this.rawCurlyBracketConvention)
	                    || _this.tryToTokenizeTypographicalConvention()
	                    || _this.addCurrentCharOrStreakOfWhitespaceToContentBuffer();
	            },
	            whenClosing: function () {
	                var exampleInput = _this.flushBufferedContent().trim();
	                _this.appendNewToken(TokenRole_1.TokenRole.ExampleInput, exampleInput);
	            }
	        });
	    };
	    Tokenizer.prototype.getSectionLinkConventions = function () {
	        var _this = this;
	        var keyword = this.settings.keywords.sectionLink;
	        return PARENTHETICAL_BRACKETS.map(function (bracket) {
	            return new ConventionVariation_1.ConventionVariation({
	                startsWith: labeledBracketStartDelimiter(keyword, bracket),
	                startPatternContainsATerm: true,
	                endsWith: bracket.endPattern,
	                beforeOpeningItFlushesNonEmptyBufferToTextToken: true,
	                insteadOfOpeningRegularConventionsWhileOpen: function () { return _this.handleTextAwareOfTypographyAndRawParentheticalBrackets(); },
	                whenClosing: function () {
	                    var sectionTitleSnippet = _this.flushBufferedContent().trim();
	                    _this.appendNewToken(TokenRole_1.TokenRole.SectionLink, sectionTitleSnippet);
	                }
	            });
	        });
	    };
	    Tokenizer.prototype.getMediaDescriptionConventions = function () {
	        var _this = this;
	        return CollectionHelpers_1.concat([MediaConventions_1.IMAGE, MediaConventions_1.VIDEO, MediaConventions_1.AUDIO].map(function (media) {
	            var termForThisMediaConvention = media.keyword(_this.settings.keywords);
	            return PARENTHETICAL_BRACKETS.map(function (bracket) {
	                return new ConventionVariation_1.ConventionVariation({
	                    startsWith: labeledBracketStartDelimiter(termForThisMediaConvention, bracket),
	                    startPatternContainsATerm: true,
	                    endsWith: bracket.endPattern,
	                    beforeOpeningItFlushesNonEmptyBufferToTextToken: true,
	                    insteadOfClosingOuterConventionsWhileOpen: function () { return _this.handleTextAwareOfTypographyAndRawParentheticalBrackets(); },
	                    beforeClosingItAlwaysFlushesBufferTo: media.tokenRoleForStartAndDescription,
	                    whenClosingItAlsoClosesInnerConventions: true,
	                    mustBeDirectlyFollowedBy: _this.mediaUrlConventions
	                });
	            });
	        }));
	    };
	    Tokenizer.prototype.getMediaUrlConventions = function () {
	        var _this = this;
	        return PARENTHETICAL_BRACKETS.map(function (bracket) { return new ConventionVariation_1.ConventionVariation({
	            startsWith: PatternPieces_1.ANY_WHITESPACE + _this.startPatternForBracketedUrlAssumedToBeAUrl(bracket),
	            endsWith: bracket.endPattern,
	            beforeOpeningItFlushesNonEmptyBufferToTextToken: true,
	            insteadOfClosingOuterConventionsWhileOpen: function () { return _this.handleTextAwareOfRawBrackets(); },
	            whenClosingItAlsoClosesInnerConventions: true,
	            whenClosing: function () {
	                var url = _this.settings.applySettingsToUrl(_this.flushBufferedContent());
	                _this.appendNewToken(TokenRole_1.TokenRole.MediaEndAndUrl, url);
	            }
	        }); });
	    };
	    Tokenizer.prototype.getLinkUrlConventions = function () {
	        var _this = this;
	        var whenClosing = function (url) {
	            _this.mostRecentToken.value = url;
	        };
	        return CollectionHelpers_1.concat(PARENTHETICAL_BRACKETS.map(function (bracket) { return [
	            _this.getConventionForBracketedUrl({ bracket: bracket, whenClosing: whenClosing }),
	            _this.getConventionForBracketedUrlOffsetByWhitespace({ bracket: bracket, whenClosing: whenClosing })
	        ]; }));
	    };
	    Tokenizer.prototype.getLinkifyingUrlConventions = function () {
	        var _this = this;
	        var LINKIFIABLE_RICH_CONVENTIONS = [
	            RichConventions_1.HIGHLIGHT,
	            RichConventions_1.INLINE_REVEALABLE,
	            RichConventions_1.FOOTNOTE
	        ].map(function (richConvention) { return richConvention.endTokenRole; });
	        return CollectionHelpers_1.concat(PARENTHETICAL_BRACKETS.map(function (bracket) {
	            var argsForRichConventions = {
	                bracket: bracket,
	                canOnlyOpenIfDirectlyFollowing: LINKIFIABLE_RICH_CONVENTIONS,
	                whenClosing: function (url) { return _this.closeLinkifyingUrlForRichConventions(url); }
	            };
	            var argsForMediaConentions = {
	                bracket: bracket,
	                canOnlyOpenIfDirectlyFollowing: [TokenRole_1.TokenRole.MediaEndAndUrl],
	                whenClosing: function (url) { return _this.closeLinkifyingUrlForMediaConventions(url); }
	            };
	            var argsForExampleInput = {
	                bracket: bracket,
	                canOnlyOpenIfDirectlyFollowing: [TokenRole_1.TokenRole.ExampleInput],
	                whenClosing: function (url) { return _this.closeLinkifyingUrlForExampleInputConvention(url); }
	            };
	            var allArgs = [
	                argsForRichConventions,
	                argsForMediaConentions,
	                argsForExampleInput
	            ];
	            return CollectionHelpers_1.concat(allArgs.map(function (args) { return ([
	                _this.getConventionForBracketedUrl(args),
	                _this.getConventionForBracketedUrlOffsetByWhitespace(args)
	            ]); }));
	        }));
	    };
	    Tokenizer.prototype.getConventionForBracketedUrl = function (args) {
	        var _this = this;
	        var bracket = args.bracket, canOnlyOpenIfDirectlyFollowing = args.canOnlyOpenIfDirectlyFollowing, whenClosing = args.whenClosing;
	        return new ConventionVariation_1.ConventionVariation({
	            canOnlyOpenIfDirectlyFollowing: canOnlyOpenIfDirectlyFollowing,
	            startsWith: this.startPatternForBracketedUrlAssumedToBeAUrl(bracket),
	            endsWith: bracket.endPattern,
	            insteadOfClosingOuterConventionsWhileOpen: function () { return _this.handleTextAwareOfRawBrackets(); },
	            whenClosingItAlsoClosesInnerConventions: true,
	            whenClosing: function () {
	                var url = _this.settings.applySettingsToUrl(_this.flushBufferedContent());
	                whenClosing(url);
	            }
	        });
	    };
	    Tokenizer.prototype.startPatternForBracketedUrlAssumedToBeAUrl = function (bracket) {
	        return bracket.startPattern + PatternHelpers_1.notFollowedBy(PatternPieces_1.ANY_WHITESPACE
	            + PatternHelpers_1.anyCharMatching(bracket.endPattern, PatternHelpers_1.escapeForRegex(Strings_1.BACKSLASH)));
	    };
	    Tokenizer.prototype.getConventionForBracketedUrlOffsetByWhitespace = function (args) {
	        var _this = this;
	        var bracket = args.bracket, canOnlyOpenIfDirectlyFollowing = args.canOnlyOpenIfDirectlyFollowing, whenClosing = args.whenClosing;
	        return new ConventionVariation_1.ConventionVariation({
	            canOnlyOpenIfDirectlyFollowing: canOnlyOpenIfDirectlyFollowing,
	            startsWith: PatternPieces_1.SOME_WHITESPACE + bracket.startPattern + PatternHelpers_1.capture(PatternHelpers_1.either(EXPLICIT_URL_PREFIX, TOP_LEVEL_DOMAIN_WITH_AT_LEAST_ONE_SUBDOMAIN + PatternHelpers_1.either(PatternPieces_1.FORWARD_SLASH, PatternHelpers_1.followedBy(bracket.endPattern)))),
	            endsWith: bracket.endPattern,
	            whenOpening: function (_1, _2, urlPrefix) { _this.bufferedContent += urlPrefix; },
	            failsIfWhitespaceIsEnounteredBeforeClosing: true,
	            insteadOfClosingOuterConventionsWhileOpen: function () { return _this.handleTextAwareOfRawBrackets(); },
	            whenClosingItAlsoClosesInnerConventions: true,
	            whenClosing: function (context) {
	                var url = _this.settings.applySettingsToUrl(_this.flushBufferedContent());
	                if (_this.probablyWasNotIntendedToBeAUrl(url)) {
	                    _this.backtrackToBeforeContext(context);
	                }
	                else {
	                    whenClosing(url);
	                }
	            }
	        });
	    };
	    Tokenizer.prototype.probablyWasNotIntendedToBeAUrl = function (url) {
	        return URL_CONSISTING_SOLELY_OF_PREFIX.test(url);
	    };
	    Tokenizer.prototype.closeLinkifyingUrlForRichConventions = function (url) {
	        var linkEndToken = new Token_1.Token(RichConventions_1.LINK.endTokenRole, url);
	        var linkStartToken = new Token_1.Token(RichConventions_1.LINK.startTokenRole);
	        linkStartToken.enclosesContentBetweenItselfAnd(linkEndToken);
	        var originalEndToken = this.mostRecentToken;
	        this.insertToken({ token: linkEndToken, atIndex: this.tokens.indexOf(originalEndToken) });
	        var originalStartToken = originalEndToken.correspondingEnclosingToken;
	        var indexAfterOriginalStartToken = this.tokens.indexOf(originalStartToken) + 1;
	        this.insertToken({ token: linkStartToken, atIndex: indexAfterOriginalStartToken });
	    };
	    Tokenizer.prototype.closeLinkifyingUrlForMediaConventions = function (url) {
	        var indexOfMediaStartToken = this.tokens.length - 2;
	        this.encloseWithinLink({ startingBackAtTokenIndex: indexOfMediaStartToken, url: url });
	    };
	    Tokenizer.prototype.closeLinkifyingUrlForExampleInputConvention = function (url) {
	        var indexOfExampleInputToken = this.tokens.length - 1;
	        this.encloseWithinLink({ startingBackAtTokenIndex: indexOfExampleInputToken, url: url });
	    };
	    Tokenizer.prototype.encloseWithinLink = function (args) {
	        var startingBackAtTokenIndex = args.startingBackAtTokenIndex, url = args.url;
	        this.encloseWithin({
	            richConvention: RichConventions_1.LINK,
	            startingBackAtTokenIndex: startingBackAtTokenIndex
	        });
	        CollectionHelpers_1.last(this.tokens).value = url;
	    };
	    Tokenizer.prototype.getRawParentheticalBracketConventions = function () {
	        var _this = this;
	        return PARENTHETICAL_BRACKETS.map(function (bracket) { return _this.getRawBracketConvention(bracket); });
	    };
	    Tokenizer.prototype.getRawCurlyBracketConvention = function () {
	        return this.getRawBracketConvention(CURLY_BRACKET);
	    };
	    Tokenizer.prototype.getRawBracketConvention = function (bracket) {
	        var _this = this;
	        return new ConventionVariation_1.ConventionVariation({
	            startsWith: bracket.startPattern,
	            endsWith: bracket.endPattern,
	            whenOpening: function () { _this.bufferedContent += bracket.open; },
	            whenClosing: function () { _this.bufferedContent += bracket.close; },
	            insteadOfFailingWhenLeftUnclosed: function () { }
	        });
	    };
	    Tokenizer.prototype.getInflectionHandler = function (args) {
	        var _this = this;
	        var delimiterChar = args.delimiterChar, conventionForMajorInflection = args.conventionForMajorInflection, conventionForMinorInflection = args.conventionForMinorInflection;
	        return new InflectionHandler_1.InflectionHandler({
	            delimiterChar: delimiterChar,
	            conventionForMinorInflection: conventionForMinorInflection,
	            conventionForMajorInflection: conventionForMajorInflection,
	            encloseWithinConvention: function (args) {
	                _this.closeBareUrlContextIfOneIsOpen();
	                _this.encloseWithin(args);
	            },
	            insertTextToken: function (text, atIndex) {
	                _this.insertToken({
	                    token: new Token_1.Token(TokenRole_1.TokenRole.Text, text),
	                    atIndex: atIndex
	                });
	            }
	        });
	    };
	    Tokenizer.prototype.tokenize = function () {
	        while (true) {
	            this.bufferContentThatCanNeverServeAsDelimiter();
	            if (this.isDone()) {
	                break;
	            }
	            var didAnything = this.tryToEscapeCurrentChar()
	                || this.tryToCloseAnyConvention()
	                || this.performContextSpecificBehaviorInsteadOfTryingToOpenRegularConventions()
	                || this.tryToOpenAnyConvention();
	            if (!didAnything) {
	                this.addCurrentCharOrStreakOfWhitespaceToContentBuffer();
	            }
	        }
	    };
	    Tokenizer.prototype.isDone = function () {
	        return this.markupConsumer.done() && this.tryToResolveUnclosedContexts();
	    };
	    Tokenizer.prototype.tryToResolveUnclosedContexts = function () {
	        while (this.openContexts.length) {
	            var context_1 = this.openContexts.pop();
	            if (!context_1.doInsteadOfFailingWhenLeftUnclosed()) {
	                this.backtrackToBeforeContext(context_1);
	                return false;
	            }
	        }
	        this.flushNonEmptyBufferToTextToken();
	        for (var _i = 0, _a = this.inflectionHandlers; _i < _a.length; _i++) {
	            var inflectionHandler = _a[_i];
	            inflectionHandler.treatDanglingStartDelimitersAsText();
	        }
	        return true;
	    };
	    Tokenizer.prototype.tryToEscapeCurrentChar = function () {
	        if (this.markupConsumer.currentChar !== Strings_1.BACKSLASH) {
	            return false;
	        }
	        this.markupConsumer.index += 1;
	        if (!this.markupConsumer.done()) {
	            this.addCurrentCharToContentBuffer();
	        }
	        return true;
	    };
	    Tokenizer.prototype.bufferContentThatCanNeverServeAsDelimiter = function () {
	        var canTryToBufferWhitespace = this.openContexts.every(function (context) {
	            return !context.convention.isCutShortByWhitespace
	                && !context.convention.failsIfWhitespaceIsEnounteredBeforeClosing;
	        });
	        do {
	            this.buffer(CONTENT_WITH_NO_SPECIAL_MEANING);
	        } while (canTryToBufferWhitespace
	            && this.tryToBufferWhitespaceGuaranteedToBeRegularContent());
	    };
	    Tokenizer.prototype.tryToBufferWhitespaceGuaranteedToBeRegularContent = function () {
	        var remainingMarkup = this.markupConsumer.remaining;
	        var matchResult = LEADING_WHITESPACE.exec(remainingMarkup);
	        if (!matchResult) {
	            return false;
	        }
	        var leadingWhitespace = matchResult[0];
	        var charFollowingLeadingWhitespace = remainingMarkup[leadingWhitespace.length];
	        if (PARENTHETICAL_OPEN_BRACKET_PATTERN.test(charFollowingLeadingWhitespace)) {
	            return false;
	        }
	        this.bufferedContent += leadingWhitespace;
	        this.markupConsumer.index += leadingWhitespace.length;
	        return true;
	    };
	    Tokenizer.prototype.tryToCloseAnyConvention = function () {
	        for (var i = this.openContexts.length - 1; i >= 0; i--) {
	            var context_2 = this.openContexts[i];
	            if (this.shouldClose(context_2)) {
	                if (this.tryToCloseConventionWhoseEndDelimiterWeAlreadyFound({ belongingToContextAtIndex: i })) {
	                    return true;
	                }
	                this.backtrackToBeforeContext(context_2);
	                return false;
	            }
	            if (context_2.convention.failsIfWhitespaceIsEnounteredBeforeClosing && this.isCurrentCharWhitespace()) {
	                this.backtrackToBeforeContext(context_2);
	                return true;
	            }
	            if (context_2.doIsteadOfTryingToCloseOuterConventions()) {
	                return true;
	            }
	        }
	        return this.tryToCloseAnyInflectionConventions();
	    };
	    Tokenizer.prototype.shouldClose = function (context) {
	        var convention = context.convention;
	        return ((convention.isCutShortByWhitespace && this.isCurrentCharWhitespace())
	            || (convention.endsWith
	                && this.markupConsumer.consume({ pattern: convention.endsWith })));
	    };
	    Tokenizer.prototype.tryToCloseConventionWhoseEndDelimiterWeAlreadyFound = function (args) {
	        var contextIndex = args.belongingToContextAtIndex;
	        var context = this.openContexts[contextIndex];
	        var convention = context.convention;
	        this.closeBareUrlContextIfOneIsOpen({ withinContextAtIndex: contextIndex });
	        if (convention.beforeClosingItFlushesNonEmptyBufferTo != null) {
	            this.flushNonEmptyBufferToToken(convention.beforeClosingItFlushesNonEmptyBufferTo);
	        }
	        if (convention.beforeClosingItAlwaysFlushesBufferTo != null) {
	            this.flushBufferToToken(convention.beforeClosingItAlwaysFlushesBufferTo);
	        }
	        context.close();
	        this.openContexts.splice(contextIndex, 1);
	        if (convention.whenClosingItAlsoClosesInnerConventions) {
	            this.openContexts.splice(contextIndex);
	        }
	        return (!convention.mustBeDirectlyFollowedBy
	            || this.tryToOpenSubsequentConventionRequiredBy(context));
	    };
	    Tokenizer.prototype.isCurrentCharWhitespace = function () {
	        return Patterns_1.WHITESPACE_CHAR_PATTERN.test(this.markupConsumer.currentChar);
	    };
	    Tokenizer.prototype.tryToOpenSubsequentConventionRequiredBy = function (closedContext) {
	        var _this = this;
	        var didOpenSubsequentRequiredConvention = closedContext.convention.mustBeDirectlyFollowedBy.some(function (convention) { return _this.tryToOpen(convention); });
	        if (didOpenSubsequentRequiredConvention) {
	            CollectionHelpers_1.last(this.openContexts).snapshot = closedContext.snapshot;
	            return true;
	        }
	        return false;
	    };
	    Tokenizer.prototype.tryToCloseAnyInflectionConventions = function () {
	        var _this = this;
	        if (this.justEnteredAConvention || !this.isPreviousCharacterNonwhitespace()) {
	            return false;
	        }
	        return this.inflectionHandlers.some(function (handler) {
	            var didCloseAnyOpenDelimiters = false;
	            _this.markupConsumer.consume({
	                pattern: handler.delimiterPattern,
	                thenBeforeConsumingText: function (delimiter) {
	                    didCloseAnyOpenDelimiters = handler.tryToCloseAnyOpenDelimiters(delimiter);
	                    if (!didCloseAnyOpenDelimiters) {
	                        _this.markupConsumer.index -= delimiter.length;
	                    }
	                }
	            });
	            return didCloseAnyOpenDelimiters;
	        });
	    };
	    Tokenizer.prototype.isPreviousCharacterNonwhitespace = function () {
	        return Patterns_1.NON_BLANK_PATTERN.test(this.markupConsumer.previousChar);
	    };
	    Tokenizer.prototype.closeBareUrlContextIfOneIsOpen = function (args) {
	        var openContexts = this.openContexts;
	        var outermostIndexThatMayBeBareUrl = args ? (args.withinContextAtIndex + 1) : 0;
	        for (var i = outermostIndexThatMayBeBareUrl; i < openContexts.length; i++) {
	            if (openContexts[i].convention === this.bareUrlPathConvention) {
	                this.appendBufferedUrlPathToCurrentBareUrl();
	                this.openContexts.splice(i);
	                return;
	            }
	        }
	    };
	    Tokenizer.prototype.encloseContextWithinConvention = function (richConvention, context) {
	        this.encloseWithin({ richConvention: richConvention, startingBackAtTokenIndex: context.startTokenIndex });
	    };
	    Tokenizer.prototype.encloseWithin = function (args) {
	        var richConvention = args.richConvention;
	        var startTokenIndex = args.startingBackAtTokenIndex;
	        this.flushNonEmptyBufferToTextToken();
	        var startToken = new Token_1.Token(richConvention.startTokenRole);
	        var endToken = new Token_1.Token(richConvention.endTokenRole);
	        startToken.enclosesContentBetweenItselfAnd(endToken);
	        this.insertToken({ token: startToken, atIndex: startTokenIndex });
	        var endTokenIndex = this.tokens.length;
	        for (var i = endTokenIndex - 1; i > startTokenIndex; i--) {
	            var token = this.tokens[i];
	            var shouldEndTokenAppearBeforeCurrentToken = token.correspondingEnclosingToken != null
	                && startTokenIndex > this.tokens.indexOf(token.correspondingEnclosingToken);
	            if (shouldEndTokenAppearBeforeCurrentToken) {
	                endTokenIndex -= 1;
	            }
	            else {
	                break;
	            }
	        }
	        this.insertToken({ token: endToken, atIndex: endTokenIndex });
	    };
	    Tokenizer.prototype.performContextSpecificBehaviorInsteadOfTryingToOpenRegularConventions = function () {
	        return CollectionHelpers_1.reversed(this.openContexts)
	            .some(function (context) { return context.doInsteadOfTryingToOpenRegularConventions(); });
	    };
	    Tokenizer.prototype.tryToOpenAnyConvention = function () {
	        var _this = this;
	        return (this.conventionVariations.some(function (convention) { return _this.tryToOpen(convention); })
	            || this.tryToTokenizeBareUrlSchemeAndHostname()
	            || this.tryToStartInflectingOrTreatDelimiterAsText()
	            || this.tryToTokenizeInlineCodeOrUnmatchedDelimiter()
	            || this.tryToTokenizeTypographicalConvention());
	    };
	    Tokenizer.prototype.tryToStartInflectingOrTreatDelimiterAsText = function () {
	        var _this = this;
	        var didOpen = this.inflectionHandlers.some(function (handler) {
	            return _this.markupConsumer.consume({
	                pattern: handler.delimiterPattern,
	                thenBeforeConsumingText: function (delimiter, charAfterMatch) {
	                    if (Patterns_1.NON_BLANK_PATTERN.test(charAfterMatch)) {
	                        _this.flushNonEmptyBufferToTextToken();
	                        handler.addOpenStartDelimiter(delimiter, _this.tokens.length);
	                    }
	                    else {
	                        _this.bufferedContent += delimiter;
	                    }
	                }
	            });
	        });
	        if (didOpen) {
	            this.indicateWeJustOpenedAConvention();
	        }
	        return didOpen;
	    };
	    Tokenizer.prototype.tryToTokenizeInlineCodeOrUnmatchedDelimiter = function () {
	        var _this = this;
	        return tryToTokenizeInlineCode_1.tryToTokenizeInlineCode({
	            markup: this.markupConsumer.remaining,
	            then: function (inlineCodeToken, lengthConsumed) {
	                _this.flushNonEmptyBufferToTextToken();
	                _this.appendToken(inlineCodeToken);
	                _this.markupConsumer.index += lengthConsumed;
	            }
	        });
	    };
	    Tokenizer.prototype.tryToTokenizeTypographicalConvention = function () {
	        return (this.tryToTokenizeEnOrEmDash()
	            || this.tryToTokenizePlusMinusSign()
	            || this.tryToTokenizeEllipsis());
	    };
	    Tokenizer.prototype.tryToTokenizeEnOrEmDash = function () {
	        var _this = this;
	        var EN_DASH = '–';
	        var EM_DASH = '—';
	        var COUNT_DASHES_PER_EM_DASH = 3;
	        return this.markupConsumer.consume({
	            pattern: EN_OR_EM_DASH_PATTERN,
	            thenBeforeConsumingText: function (dashes) {
	                _this.bufferedContent +=
	                    dashes.length >= COUNT_DASHES_PER_EM_DASH
	                        ? StringHelpers_1.repeat(EM_DASH, Math.floor(dashes.length / COUNT_DASHES_PER_EM_DASH))
	                        : EN_DASH;
	            }
	        });
	    };
	    Tokenizer.prototype.tryToTokenizePlusMinusSign = function () {
	        var _this = this;
	        return this.markupConsumer.consume({
	            pattern: PLUS_MINUS_SIGN_PATTERN,
	            thenBeforeConsumingText: function () {
	                _this.bufferedContent += '±';
	            }
	        });
	    };
	    Tokenizer.prototype.tryToTokenizeEllipsis = function () {
	        var _this = this;
	        return this.markupConsumer.consume({
	            pattern: ELLIPSIS_PATTERN,
	            thenBeforeConsumingText: function () {
	                _this.bufferedContent += _this.settings.fancyEllipsis;
	            }
	        });
	    };
	    Tokenizer.prototype.appendToken = function (token) {
	        this.tokens.push(token);
	        this.mostRecentToken = token;
	    };
	    Tokenizer.prototype.addCurrentCharOrStreakOfWhitespaceToContentBuffer = function () {
	        if (Patterns_1.WHITESPACE_CHAR_PATTERN.test(this.markupConsumer.currentChar)) {
	            this.buffer(LEADING_WHITESPACE);
	        }
	        else {
	            this.addCurrentCharToContentBuffer();
	        }
	    };
	    Tokenizer.prototype.buffer = function (pattern) {
	        var _this = this;
	        this.markupConsumer.consume({
	            pattern: pattern,
	            thenBeforeConsumingText: function (match) {
	                _this.bufferedContent += match;
	            }
	        });
	    };
	    Tokenizer.prototype.addCurrentCharToContentBuffer = function () {
	        this.bufferedContent += this.markupConsumer.currentChar;
	        this.markupConsumer.index += 1;
	    };
	    Tokenizer.prototype.tryToOpen = function (convention) {
	        var _this = this;
	        var startsWith = convention.startsWith, flushesBufferToTextTokenBeforeOpening = convention.flushesBufferToTextTokenBeforeOpening, whenOpening = convention.whenOpening;
	        var didOpen = (this.canTry(convention)
	            && this.markupConsumer.consume({
	                pattern: startsWith,
	                thenBeforeConsumingText: function (match, charAfterMatch) {
	                    var captures = [];
	                    for (var _i = 2; _i < arguments.length; _i++) {
	                        captures[_i - 2] = arguments[_i];
	                    }
	                    if (flushesBufferToTextTokenBeforeOpening) {
	                        _this.flushNonEmptyBufferToTextToken();
	                    }
	                    _this.openContexts.push(new ConventionContext_1.ConventionContext(convention, _this.getCurrentSnapshot()));
	                    if (whenOpening) {
	                        whenOpening.apply(void 0, [match, charAfterMatch].concat(captures));
	                    }
	                }
	            }));
	        if (didOpen) {
	            this.indicateWeJustOpenedAConvention();
	        }
	        return didOpen;
	    };
	    Tokenizer.prototype.getCurrentSnapshot = function () {
	        return {
	            markupIndex: this.markupConsumer.index,
	            markupIndexWeLastOpenedAConvention: this.markupIndexWeLastOpenedAConvention,
	            tokens: this.tokens.slice(),
	            openContexts: this.openContexts.map(function (context) { return context.clone(); }),
	            inflectionHandlers: this.inflectionHandlers.map(function (handler) { return handler.clone(); }),
	            bufferedContent: this.bufferedContent
	        };
	    };
	    Tokenizer.prototype.canTry = function (conventionToOpen) {
	        var _this = this;
	        var textIndex = this.markupConsumer.index;
	        var subsequentRequiredConventions = conventionToOpen.mustBeDirectlyFollowedBy;
	        var hasSubsequentRequiredConventionFailed = subsequentRequiredConventions
	            && subsequentRequiredConventions.some(function (convention) { return _this.backtrackedConventionHelper.hasFailed(convention, textIndex); });
	        if (hasSubsequentRequiredConventionFailed) {
	            return false;
	        }
	        var canOnlyOpenIfDirectlyFollowing = conventionToOpen.canOnlyOpenIfDirectlyFollowing;
	        return (!this.backtrackedConventionHelper.hasFailed(conventionToOpen, textIndex)
	            && (!canOnlyOpenIfDirectlyFollowing || this.isDirectlyFollowing(canOnlyOpenIfDirectlyFollowing)));
	    };
	    Tokenizer.prototype.isDirectlyFollowing = function (tokenRoles) {
	        var _this = this;
	        return (!this.bufferedContent
	            && this.mostRecentToken
	            && tokenRoles.some(function (tokenRole) { return _this.mostRecentToken.role === tokenRole; }));
	    };
	    Tokenizer.prototype.backtrackToBeforeContext = function (context) {
	        this.backtrackedConventionHelper.registerFailure(context);
	        var snapshot = context.snapshot;
	        this.tokens = snapshot.tokens;
	        this.bufferedContent = snapshot.bufferedContent;
	        this.markupConsumer.index = snapshot.markupIndex;
	        this.markupIndexWeLastOpenedAConvention = snapshot.markupIndexWeLastOpenedAConvention;
	        this.openContexts = snapshot.openContexts;
	        this.inflectionHandlers = snapshot.inflectionHandlers;
	    };
	    Tokenizer.prototype.appendNewToken = function (role, value) {
	        this.appendToken(new Token_1.Token(role, value));
	    };
	    Tokenizer.prototype.appendBufferedUrlPathToCurrentBareUrl = function () {
	        if (this.mostRecentToken.role !== TokenRole_1.TokenRole.BareUrl) {
	            throw new Error('Most recent token is not a bare URL token');
	        }
	        this.mostRecentToken.value += this.flushBufferedContent();
	    };
	    Tokenizer.prototype.flushBufferedContent = function () {
	        var buffer = this.bufferedContent;
	        this.bufferedContent = '';
	        return buffer;
	    };
	    Tokenizer.prototype.flushNonEmptyBufferToToken = function (role) {
	        if (this.bufferedContent) {
	            this.appendNewToken(role, this.flushBufferedContent());
	        }
	    };
	    Tokenizer.prototype.flushBufferToToken = function (role) {
	        this.appendNewToken(role, this.flushBufferedContent());
	    };
	    Tokenizer.prototype.insertToken = function (args) {
	        var token = args.token, atIndex = args.atIndex;
	        this.tokens.splice(atIndex, 0, token);
	        for (var _i = 0, _a = this.openContexts; _i < _a.length; _i++) {
	            var openContext = _a[_i];
	            openContext.registerTokenInsertion({ atIndex: atIndex });
	        }
	        for (var _b = 0, _c = this.inflectionHandlers; _b < _c.length; _b++) {
	            var inflectionHandler = _c[_b];
	            inflectionHandler.registerTokenInsertion({ atIndex: atIndex });
	        }
	        this.mostRecentToken = token;
	    };
	    Tokenizer.prototype.flushNonEmptyBufferToTextToken = function () {
	        this.flushNonEmptyBufferToToken(TokenRole_1.TokenRole.Text);
	    };
	    Tokenizer.prototype.handleTextAwareOfRawBrackets = function () {
	        this.tryToOpenRawParentheticalBracketConvention() || this.addCurrentCharOrStreakOfWhitespaceToContentBuffer();
	    };
	    Tokenizer.prototype.handleTextAwareOfTypographyAndRawParentheticalBrackets = function () {
	        this.tryToOpenRawParentheticalBracketConvention()
	            || this.tryToTokenizeTypographicalConvention()
	            || this.addCurrentCharOrStreakOfWhitespaceToContentBuffer();
	    };
	    Tokenizer.prototype.tryToOpenRawParentheticalBracketConvention = function () {
	        var _this = this;
	        return this.rawParentheticalBracketConventions.some(function (convention) { return _this.tryToOpen(convention); });
	    };
	    return Tokenizer;
	}());
	function labeledBracketStartDelimiter(keyword, bracket) {
	    return bracket.startPattern + PatternHelpers_1.either.apply(void 0, keyword.map(PatternHelpers_1.escapeForRegex)) + ':' + PatternPieces_1.ANY_WHITESPACE;
	}
	var PERIOD = PatternHelpers_1.escapeForRegex('.');
	var HYPHEN = PatternHelpers_1.escapeForRegex('-');
	var PLUS_SIGN = PatternHelpers_1.escapeForRegex('+');
	var ELLIPSIS_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.multiple(PERIOD));
	var EN_OR_EM_DASH_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.multiple(HYPHEN));
	var PLUS_MINUS_SIGN_PATTERN = PatternHelpers_1.patternStartingWith(PLUS_SIGN + HYPHEN);
	var URL_SUBDOMAIN = PatternHelpers_1.anyCharMatching(PatternPieces_1.LETTER_CLASS, PatternPieces_1.DIGIT)
	    + PatternHelpers_1.everyOptional(PatternHelpers_1.anyCharMatching(PatternPieces_1.LETTER_CLASS, PatternPieces_1.DIGIT, HYPHEN))
	    + PERIOD;
	var URL_TOP_LEVEL_DOMAIN = PatternHelpers_1.oneOrMore(PatternPieces_1.LETTER_CHAR);
	var TOP_LEVEL_DOMAIN_WITH_AT_LEAST_ONE_SUBDOMAIN = PatternHelpers_1.oneOrMore(URL_SUBDOMAIN) + URL_TOP_LEVEL_DOMAIN;
	var EXPLICIT_URL_PREFIX = PatternHelpers_1.either(PatternPieces_1.URL_SCHEME, PatternPieces_1.FORWARD_SLASH, PatternPieces_1.HASH_MARK);
	var URL_CONSISTING_SOLELY_OF_PREFIX = PatternHelpers_1.solely(EXPLICIT_URL_PREFIX);
	var BARE_URL_SCHEME = 'http' + PatternHelpers_1.optional('s') + '://';
	var BARE_URL_SCHEME_AND_HOSTNAME = PatternHelpers_1.patternStartingWith(BARE_URL_SCHEME
	    + PatternHelpers_1.everyOptional(URL_SUBDOMAIN) + URL_TOP_LEVEL_DOMAIN);
	var PARENTHETICAL_OPEN_BRACKET_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.anyCharMatching.apply(void 0, PARENTHETICAL_BRACKETS.map(function (bracket) { return bracket.startPattern; })));
	var ALL_BRACKETS = [PARENTHESIS, SQUARE_BRACKET, CURLY_BRACKET];
	var OPEN_BRACKET_PATTERNS = ALL_BRACKETS.map(function (bracket) { return bracket.startPattern; });
	var CLOSE_BRACKET_PATTERNS = ALL_BRACKETS.map(function (bracket) { return bracket.endPattern; });
	var CHARACTERS_WITH_POTENTIAL_SPECIAL_MEANING = [
	    PatternPieces_1.WHITESPACE_CHAR,
	    PatternPieces_1.FORWARD_SLASH,
	    HYPHEN,
	    PERIOD,
	    PLUS_SIGN,
	    'h',
	    '"',
	    '_',
	    '`'
	].concat(OPEN_BRACKET_PATTERNS, CLOSE_BRACKET_PATTERNS, [Strings_1.BACKSLASH, '*'].map(PatternHelpers_1.escapeForRegex));
	var CONTENT_WITH_NO_SPECIAL_MEANING = PatternHelpers_1.patternStartingWith(PatternHelpers_1.oneOrMore(PatternHelpers_1.either(PatternHelpers_1.anyCharNotMatching.apply(void 0, CHARACTERS_WITH_POTENTIAL_SPECIAL_MEANING), 'h' + PatternHelpers_1.notFollowedBy('ttp' + PatternHelpers_1.optional('s') + '://'), PERIOD + PatternHelpers_1.notFollowedBy(PERIOD), HYPHEN + PatternHelpers_1.notFollowedBy(HYPHEN), PLUS_SIGN + PatternHelpers_1.notFollowedBy(HYPHEN))));
	var LEADING_WHITESPACE = PatternHelpers_1.patternStartingWith(PatternPieces_1.SOME_WHITESPACE);
	//# sourceMappingURL=tokenize.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Emphasis_1 = __webpack_require__(54);
	var Stress_1 = __webpack_require__(55);
	var Italics_1 = __webpack_require__(56);
	var Bold_1 = __webpack_require__(57);
	var Highlight_1 = __webpack_require__(58);
	var InlineRevealable_1 = __webpack_require__(59);
	var InlineQuote_1 = __webpack_require__(60);
	var Footnote_1 = __webpack_require__(36);
	var SquareParenthetical_1 = __webpack_require__(61);
	var NormalParenthetical_1 = __webpack_require__(63);
	var Link_1 = __webpack_require__(64);
	var TokenRole_1 = __webpack_require__(65);
	exports.EMPHASIS = {
	    SyntaxNodeType: Emphasis_1.Emphasis,
	    startTokenRole: TokenRole_1.TokenRole.EmphasisStart,
	    endTokenRole: TokenRole_1.TokenRole.EmphasisEnd
	};
	exports.STRESS = {
	    SyntaxNodeType: Stress_1.Stress,
	    startTokenRole: TokenRole_1.TokenRole.StressStart,
	    endTokenRole: TokenRole_1.TokenRole.StressEnd
	};
	exports.ITALICS = {
	    SyntaxNodeType: Italics_1.Italics,
	    startTokenRole: TokenRole_1.TokenRole.ItalicsStart,
	    endTokenRole: TokenRole_1.TokenRole.ItalicsEnd
	};
	exports.BOLD = {
	    SyntaxNodeType: Bold_1.Bold,
	    startTokenRole: TokenRole_1.TokenRole.BoldStart,
	    endTokenRole: TokenRole_1.TokenRole.BoldEnd
	};
	exports.HIGHLIGHT = {
	    SyntaxNodeType: Highlight_1.Highlight,
	    startTokenRole: TokenRole_1.TokenRole.HighlightStart,
	    endTokenRole: TokenRole_1.TokenRole.HighlightEnd
	};
	exports.INLINE_QUOTE = {
	    SyntaxNodeType: InlineQuote_1.InlineQuote,
	    startTokenRole: TokenRole_1.TokenRole.InlineQuoteStart,
	    endTokenRole: TokenRole_1.TokenRole.InlineQuoteEnd
	};
	exports.FOOTNOTE = {
	    SyntaxNodeType: Footnote_1.Footnote,
	    startTokenRole: TokenRole_1.TokenRole.FootnoteStart,
	    endTokenRole: TokenRole_1.TokenRole.FootnoteEnd
	};
	exports.NORMAL_PARENTHETICAL = {
	    SyntaxNodeType: NormalParenthetical_1.NormalParenthetical,
	    startTokenRole: TokenRole_1.TokenRole.NormalParentheticalStart,
	    endTokenRole: TokenRole_1.TokenRole.NormalParentheticalEnd
	};
	exports.SQUARE_PARENTHETICAL = {
	    SyntaxNodeType: SquareParenthetical_1.SquareParenthetical,
	    startTokenRole: TokenRole_1.TokenRole.SquareParentheticalStart,
	    endTokenRole: TokenRole_1.TokenRole.SquareParentheticalEnd
	};
	exports.INLINE_REVEALABLE = {
	    SyntaxNodeType: InlineRevealable_1.InlineRevealable,
	    startTokenRole: TokenRole_1.TokenRole.InlineRevealableStart,
	    endTokenRole: TokenRole_1.TokenRole.InlineRevealableEnd
	};
	exports.LINK = {
	    SyntaxNodeType: Link_1.Link,
	    startTokenRole: TokenRole_1.TokenRole.LinkStart,
	    endTokenRole: TokenRole_1.TokenRole.LinkEndAndUrl
	};
	//# sourceMappingURL=RichConventions.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	var Emphasis = (function (_super) {
	    __extends(Emphasis, _super);
	    function Emphasis() {
	        _super.apply(this, arguments);
	    }
	    Emphasis.prototype.render = function (renderer) {
	        return renderer.emphasis(this);
	    };
	    Emphasis.prototype.EMPHASIS = function () { };
	    return Emphasis;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.Emphasis = Emphasis;
	//# sourceMappingURL=Emphasis.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	var Stress = (function (_super) {
	    __extends(Stress, _super);
	    function Stress() {
	        _super.apply(this, arguments);
	    }
	    Stress.prototype.render = function (renderer) {
	        return renderer.stress(this);
	    };
	    Stress.prototype.STRESS = function () { };
	    return Stress;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.Stress = Stress;
	//# sourceMappingURL=Stress.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	var Italics = (function (_super) {
	    __extends(Italics, _super);
	    function Italics() {
	        _super.apply(this, arguments);
	    }
	    Italics.prototype.render = function (renderer) {
	        return renderer.italics(this);
	    };
	    Italics.prototype.ITALICS = function () { };
	    return Italics;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.Italics = Italics;
	//# sourceMappingURL=Italics.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	var Bold = (function (_super) {
	    __extends(Bold, _super);
	    function Bold() {
	        _super.apply(this, arguments);
	    }
	    Bold.prototype.render = function (renderer) {
	        return renderer.bold(this);
	    };
	    Bold.prototype.BOLD = function () { };
	    return Bold;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.Bold = Bold;
	//# sourceMappingURL=Bold.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	var Highlight = (function (_super) {
	    __extends(Highlight, _super);
	    function Highlight() {
	        _super.apply(this, arguments);
	    }
	    Highlight.prototype.render = function (renderer) {
	        return renderer.highlight(this);
	    };
	    Highlight.prototype.HIGHLIGHT = function () { };
	    return Highlight;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.Highlight = Highlight;
	//# sourceMappingURL=Highlight.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	var InlineRevealable = (function (_super) {
	    __extends(InlineRevealable, _super);
	    function InlineRevealable() {
	        _super.apply(this, arguments);
	    }
	    InlineRevealable.prototype.render = function (renderer) {
	        return renderer.inlineRevealable(this);
	    };
	    InlineRevealable.prototype.INLINE_REVEALABLE_CONTENT = function () { };
	    return InlineRevealable;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.InlineRevealable = InlineRevealable;
	//# sourceMappingURL=InlineRevealable.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineRevealable_1 = __webpack_require__(59);
	var InlineQuote = (function (_super) {
	    __extends(InlineQuote, _super);
	    function InlineQuote() {
	        _super.apply(this, arguments);
	    }
	    InlineQuote.prototype.render = function (renderer) {
	        return renderer.inlineQuote(this);
	    };
	    InlineQuote.prototype.INLINE_QUOTE = function () { };
	    return InlineQuote;
	}(InlineRevealable_1.InlineRevealable));
	exports.InlineQuote = InlineQuote;
	//# sourceMappingURL=InlineQuote.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ParentheticalSyntaxNode_1 = __webpack_require__(62);
	var SquareParenthetical = (function (_super) {
	    __extends(SquareParenthetical, _super);
	    function SquareParenthetical() {
	        _super.apply(this, arguments);
	    }
	    SquareParenthetical.prototype.render = function (renderer) {
	        return renderer.squareParenthetical(this);
	    };
	    SquareParenthetical.prototype.SQUARE_PARENTHETICAL = function () { };
	    return SquareParenthetical;
	}(ParentheticalSyntaxNode_1.ParentheticalSyntaxNode));
	exports.SquareParenthetical = SquareParenthetical;
	//# sourceMappingURL=SquareParenthetical.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	var ParentheticalSyntaxNode = (function (_super) {
	    __extends(ParentheticalSyntaxNode, _super);
	    function ParentheticalSyntaxNode() {
	        _super.apply(this, arguments);
	    }
	    ParentheticalSyntaxNode.prototype.PARENTHETICAL = function () { };
	    return ParentheticalSyntaxNode;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.ParentheticalSyntaxNode = ParentheticalSyntaxNode;
	//# sourceMappingURL=ParentheticalSyntaxNode.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ParentheticalSyntaxNode_1 = __webpack_require__(62);
	var NormalParenthetical = (function (_super) {
	    __extends(NormalParenthetical, _super);
	    function NormalParenthetical() {
	        _super.apply(this, arguments);
	    }
	    NormalParenthetical.prototype.render = function (renderer) {
	        return renderer.normalParenthetical(this);
	    };
	    NormalParenthetical.prototype.NORMAL_PARENTHETICAL = function () { };
	    return NormalParenthetical;
	}(ParentheticalSyntaxNode_1.ParentheticalSyntaxNode));
	exports.NormalParenthetical = NormalParenthetical;
	//# sourceMappingURL=NormalParenthetical.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(37);
	var Link = (function (_super) {
	    __extends(Link, _super);
	    function Link(children, url, options) {
	        _super.call(this, children);
	        this.url = url;
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    Link.prototype.shouldBeIncludedInTableOfContents = function () {
	        return false;
	    };
	    Link.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    Link.prototype.render = function (renderer) {
	        return renderer.link(this);
	    };
	    return Link;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.Link = Link;
	//# sourceMappingURL=Link.js.map

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";
	(function (TokenRole) {
	    TokenRole[TokenRole["AudioStartAndDescription"] = 1] = "AudioStartAndDescription";
	    TokenRole[TokenRole["BareUrl"] = 2] = "BareUrl";
	    TokenRole[TokenRole["BoldEnd"] = 3] = "BoldEnd";
	    TokenRole[TokenRole["BoldStart"] = 4] = "BoldStart";
	    TokenRole[TokenRole["EmphasisEnd"] = 5] = "EmphasisEnd";
	    TokenRole[TokenRole["EmphasisStart"] = 6] = "EmphasisStart";
	    TokenRole[TokenRole["ExampleInput"] = 7] = "ExampleInput";
	    TokenRole[TokenRole["FootnoteEnd"] = 8] = "FootnoteEnd";
	    TokenRole[TokenRole["FootnoteStart"] = 9] = "FootnoteStart";
	    TokenRole[TokenRole["HighlightEnd"] = 10] = "HighlightEnd";
	    TokenRole[TokenRole["HighlightStart"] = 11] = "HighlightStart";
	    TokenRole[TokenRole["ImageStartAndDescription"] = 12] = "ImageStartAndDescription";
	    TokenRole[TokenRole["InlineCode"] = 13] = "InlineCode";
	    TokenRole[TokenRole["InlineQuoteEnd"] = 14] = "InlineQuoteEnd";
	    TokenRole[TokenRole["InlineQuoteStart"] = 15] = "InlineQuoteStart";
	    TokenRole[TokenRole["InlineRevealableEnd"] = 16] = "InlineRevealableEnd";
	    TokenRole[TokenRole["InlineRevealableStart"] = 17] = "InlineRevealableStart";
	    TokenRole[TokenRole["ItalicsEnd"] = 18] = "ItalicsEnd";
	    TokenRole[TokenRole["ItalicsStart"] = 19] = "ItalicsStart";
	    TokenRole[TokenRole["LinkEndAndUrl"] = 20] = "LinkEndAndUrl";
	    TokenRole[TokenRole["LinkStart"] = 21] = "LinkStart";
	    TokenRole[TokenRole["MediaEndAndUrl"] = 22] = "MediaEndAndUrl";
	    TokenRole[TokenRole["NormalParentheticalEnd"] = 23] = "NormalParentheticalEnd";
	    TokenRole[TokenRole["NormalParentheticalStart"] = 24] = "NormalParentheticalStart";
	    TokenRole[TokenRole["SectionLink"] = 25] = "SectionLink";
	    TokenRole[TokenRole["SquareParentheticalEnd"] = 26] = "SquareParentheticalEnd";
	    TokenRole[TokenRole["SquareParentheticalStart"] = 27] = "SquareParentheticalStart";
	    TokenRole[TokenRole["StressEnd"] = 28] = "StressEnd";
	    TokenRole[TokenRole["StressStart"] = 29] = "StressStart";
	    TokenRole[TokenRole["Text"] = 30] = "Text";
	    TokenRole[TokenRole["VideoStartAndDescription"] = 31] = "VideoStartAndDescription";
	})(exports.TokenRole || (exports.TokenRole = {}));
	var TokenRole = exports.TokenRole;
	//# sourceMappingURL=TokenRole.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Audio_1 = __webpack_require__(67);
	var Image_1 = __webpack_require__(69);
	var Video_1 = __webpack_require__(70);
	var TokenRole_1 = __webpack_require__(65);
	exports.AUDIO = {
	    keyword: function (keywords) { return keywords.audio; },
	    SyntaxNodeType: Audio_1.Audio,
	    tokenRoleForStartAndDescription: TokenRole_1.TokenRole.AudioStartAndDescription
	};
	exports.IMAGE = {
	    keyword: function (keywords) { return keywords.image; },
	    SyntaxNodeType: Image_1.Image,
	    tokenRoleForStartAndDescription: TokenRole_1.TokenRole.ImageStartAndDescription
	};
	exports.VIDEO = {
	    keyword: function (keywords) { return keywords.video; },
	    SyntaxNodeType: Video_1.Video,
	    tokenRoleForStartAndDescription: TokenRole_1.TokenRole.VideoStartAndDescription
	};
	//# sourceMappingURL=MediaConventions.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var MediaSyntaxNode_1 = __webpack_require__(68);
	var Audio = (function (_super) {
	    __extends(Audio, _super);
	    function Audio() {
	        _super.apply(this, arguments);
	    }
	    Audio.prototype.render = function (renderer) {
	        return renderer.audio(this);
	    };
	    Audio.prototype.AUDIO = function () { };
	    return Audio;
	}(MediaSyntaxNode_1.MediaSyntaxNode));
	exports.Audio = Audio;
	//# sourceMappingURL=Audio.js.map

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	var MediaSyntaxNode = (function () {
	    function MediaSyntaxNode(description, url, options) {
	        this.description = description;
	        this.url = url;
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    MediaSyntaxNode.prototype.textAppearingInline = function () {
	        return '';
	    };
	    MediaSyntaxNode.prototype.searchableText = function () {
	        return this.description;
	    };
	    MediaSyntaxNode.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    MediaSyntaxNode.prototype.inlineDescendants = function () {
	        return [];
	    };
	    MediaSyntaxNode.prototype.MEDIA_SYNTAX_NODE = function () { };
	    return MediaSyntaxNode;
	}());
	exports.MediaSyntaxNode = MediaSyntaxNode;
	//# sourceMappingURL=MediaSyntaxNode.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var MediaSyntaxNode_1 = __webpack_require__(68);
	var Image = (function (_super) {
	    __extends(Image, _super);
	    function Image() {
	        _super.apply(this, arguments);
	    }
	    Image.prototype.render = function (renderer) {
	        return renderer.image(this);
	    };
	    Image.prototype.IMAGE = function () { };
	    return Image;
	}(MediaSyntaxNode_1.MediaSyntaxNode));
	exports.Image = Image;
	//# sourceMappingURL=Image.js.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var MediaSyntaxNode_1 = __webpack_require__(68);
	var Video = (function (_super) {
	    __extends(Video, _super);
	    function Video() {
	        _super.apply(this, arguments);
	    }
	    Video.prototype.render = function (renderer) {
	        return renderer.video(this);
	    };
	    Video.prototype.VIDEO = function () { };
	    return Video;
	}(MediaSyntaxNode_1.MediaSyntaxNode));
	exports.Video = Video;
	//# sourceMappingURL=Video.js.map

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	exports.BACKSLASH = '\\';
	//# sourceMappingURL=Strings.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(21);
	var Strings_1 = __webpack_require__(71);
	var TextConsumer_1 = __webpack_require__(73);
	var TokenRole_1 = __webpack_require__(65);
	var Token_1 = __webpack_require__(74);
	function tryToTokenizeInlineCode(args) {
	    var markup = args.markup, then = args.then;
	    var markupConsumer = new TextConsumer_1.TextConsumer(markup);
	    var startDelimiter;
	    markupConsumer.consume({
	        pattern: DELIMITER_PATTERN,
	        thenBeforeConsumingText: function (delimiter) {
	            startDelimiter = delimiter;
	        }
	    });
	    if (!startDelimiter) {
	        return false;
	    }
	    var inlineCode = '';
	    var _loop_1 = function() {
	        while (markupConsumer.currentChar !== BACKTICK) {
	            if (markupConsumer.currentChar === Strings_1.BACKSLASH) {
	                markupConsumer.index += 1;
	            }
	            if (markupConsumer.done()) {
	                return "break-COLLECT_INLINE_CODE";
	            }
	            inlineCode += markupConsumer.currentChar;
	            markupConsumer.index += 1;
	        }
	        var possibleEndDelimiter;
	        markupConsumer.consume({
	            pattern: DELIMITER_PATTERN,
	            thenBeforeConsumingText: function (delimiter) {
	                possibleEndDelimiter = delimiter;
	            }
	        });
	        if (possibleEndDelimiter === startDelimiter) {
	            then(new Token_1.Token(TokenRole_1.TokenRole.InlineCode, trimCode(inlineCode)), markupConsumer.index);
	            return { value: true };
	        }
	        inlineCode += possibleEndDelimiter;
	    };
	    COLLECT_INLINE_CODE: while (!markupConsumer.done()) {
	        var state_1 = _loop_1();
	        if (typeof state_1 === "object") return state_1.value;
	        switch(state_1) {
	            case "break-COLLECT_INLINE_CODE": break COLLECT_INLINE_CODE;
	        }
	    }
	    then(new Token_1.Token(TokenRole_1.TokenRole.Text, startDelimiter), startDelimiter.length);
	    return true;
	}
	exports.tryToTokenizeInlineCode = tryToTokenizeInlineCode;
	function trimCode(code) {
	    if (LEADING_SPACE_WAS_USED_FOR_SEPARATION_PATTERN.test(code)) {
	        code = code.slice(1);
	    }
	    if (TRAILING_SPACE_WAS_USED_FOR_SEPARATION_PATTERN.test(code)) {
	        code = code.slice(0, -1);
	    }
	    return code;
	}
	var BACKTICK = '`';
	var DELIMITER_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.oneOrMore(BACKTICK));
	var ONE_OR_MORE_SPACES = PatternHelpers_1.oneOrMore(' ');
	var LEADING_SPACE_WAS_USED_FOR_SEPARATION_PATTERN = PatternHelpers_1.patternStartingWith(ONE_OR_MORE_SPACES + BACKTICK);
	var TRAILING_SPACE_WAS_USED_FOR_SEPARATION_PATTERN = PatternHelpers_1.patternEndingWith(BACKTICK + ONE_OR_MORE_SPACES);
	//# sourceMappingURL=tryToTokenizeInlineCode.js.map

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";
	var TextConsumer = (function () {
	    function TextConsumer(entireText) {
	        this.entireText = entireText;
	        this.index = 0;
	    }
	    Object.defineProperty(TextConsumer.prototype, "remaining", {
	        get: function () {
	            return this._remaining;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextConsumer.prototype, "index", {
	        get: function () {
	            return this._index;
	        },
	        set: function (value) {
	            this._index = value;
	            this.updateComputedTextFields();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextConsumer.prototype, "currentChar", {
	        get: function () {
	            return this._currentChar;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextConsumer.prototype, "previousChar", {
	        get: function () {
	            return this._previousChar;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextConsumer.prototype.done = function () {
	        return this._index >= this.entireText.length;
	    };
	    TextConsumer.prototype.consume = function (args) {
	        var pattern = args.pattern, thenBeforeConsumingText = args.thenBeforeConsumingText;
	        var result = pattern.exec(this._remaining);
	        if (!result) {
	            return false;
	        }
	        var match = result[0], captures = result.slice(1);
	        var charAfterMatch = this.entireText[this._index + match.length];
	        if (thenBeforeConsumingText) {
	            thenBeforeConsumingText.apply(void 0, [match, charAfterMatch].concat(captures));
	        }
	        this.index += match.length;
	        return true;
	    };
	    TextConsumer.prototype.updateComputedTextFields = function () {
	        this._remaining = this.entireText.substr(this._index);
	        this._currentChar = this._remaining[0];
	        this._previousChar = this.entireText[this._index - 1];
	    };
	    return TextConsumer;
	}());
	exports.TextConsumer = TextConsumer;
	//# sourceMappingURL=TextConsumer.js.map

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";
	var Token = (function () {
	    function Token(role, value) {
	        this.role = role;
	        this.value = value;
	    }
	    Token.prototype.enclosesContentBetweenItselfAnd = function (correspondingEnclosingToken) {
	        this.correspondingEnclosingToken = correspondingEnclosingToken;
	        correspondingEnclosingToken.correspondingEnclosingToken = this;
	    };
	    return Token;
	}());
	exports.Token = Token;
	//# sourceMappingURL=Token.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var RichConventions_1 = __webpack_require__(53);
	function nestOverlappingConventions(tokens) {
	    return new ConventionNester(tokens).tokens;
	}
	exports.nestOverlappingConventions = nestOverlappingConventions;
	var FREELY_SPLITTABLE_CONVENTIONS = [
	    RichConventions_1.EMPHASIS,
	    RichConventions_1.STRESS,
	    RichConventions_1.ITALICS,
	    RichConventions_1.BOLD,
	    RichConventions_1.HIGHLIGHT,
	    RichConventions_1.NORMAL_PARENTHETICAL,
	    RichConventions_1.SQUARE_PARENTHETICAL
	];
	var CONVENTIONS_TO_AVOID_SPLITTING_FROM_LEAST_TO_MOST_IMPORTANT = [
	    RichConventions_1.LINK,
	    RichConventions_1.INLINE_REVEALABLE,
	    RichConventions_1.INLINE_QUOTE,
	    RichConventions_1.FOOTNOTE
	];
	var ConventionNester = (function () {
	    function ConventionNester(tokens) {
	        this.tokens = tokens;
	        this.tokens = tokens.slice();
	        var splittableConventions = FREELY_SPLITTABLE_CONVENTIONS.slice();
	        this.splitConventionsThatStartInsideAnotherConventionAndEndAfter(splittableConventions);
	        for (var _i = 0, CONVENTIONS_TO_AVOID_SPLITTING_FROM_LEAST_TO_MOST_IMPORTANT_1 = CONVENTIONS_TO_AVOID_SPLITTING_FROM_LEAST_TO_MOST_IMPORTANT; _i < CONVENTIONS_TO_AVOID_SPLITTING_FROM_LEAST_TO_MOST_IMPORTANT_1.length; _i++) {
	            var conventionNotToSplit = CONVENTIONS_TO_AVOID_SPLITTING_FROM_LEAST_TO_MOST_IMPORTANT_1[_i];
	            this.resolveOverlapping(splittableConventions, conventionNotToSplit);
	            splittableConventions.push(conventionNotToSplit);
	        }
	    }
	    ConventionNester.prototype.splitConventionsThatStartInsideAnotherConventionAndEndAfter = function (conventions) {
	        var unclosedStartTokens = [];
	        for (var tokenIndex = 0; tokenIndex < this.tokens.length; tokenIndex++) {
	            var token = this.tokens[tokenIndex];
	            if (doesTokenStartAnyConvention(token, conventions)) {
	                unclosedStartTokens.push(token);
	                continue;
	            }
	            if (!doesTokenEndAnyConvention(token, conventions)) {
	                continue;
	            }
	            var endToken = token;
	            var endTokensOfOverlappingConventions = [];
	            for (var i = unclosedStartTokens.length - 1; i >= 0; i--) {
	                var unclosedStartToken = unclosedStartTokens[i];
	                if (unclosedStartToken.correspondingEnclosingToken.role === endToken.role) {
	                    unclosedStartTokens.splice(i, 1);
	                    break;
	                }
	                endTokensOfOverlappingConventions.push(unclosedStartToken.correspondingEnclosingToken);
	            }
	            this.closeAndReopenConventionsAroundTokenAtIndex(tokenIndex, endTokensOfOverlappingConventions);
	            var countOverlapping = endTokensOfOverlappingConventions.length;
	            tokenIndex += (2 * countOverlapping);
	        }
	    };
	    ConventionNester.prototype.resolveOverlapping = function (splittableConventions, conventionNotToSplit) {
	        for (var tokenIndex = 0; tokenIndex < this.tokens.length; tokenIndex++) {
	            var potentialHeroStartToken = this.tokens[tokenIndex];
	            var isStartTokenForHeroConvention = potentialHeroStartToken.role === conventionNotToSplit.startTokenRole;
	            if (!isStartTokenForHeroConvention) {
	                continue;
	            }
	            var heroStartIndex = tokenIndex;
	            var heroEndIndex = void 0;
	            for (var i = heroStartIndex + 1; i < this.tokens.length; i++) {
	                var potentialHeroEndToken = this.tokens[i];
	                var isEndTokenForHeroConvention = potentialHeroEndToken === potentialHeroStartToken.correspondingEnclosingToken;
	                if (isEndTokenForHeroConvention) {
	                    heroEndIndex = i;
	                    break;
	                }
	            }
	            var endTokensOfOverlappingConventionsStartingBefore = [];
	            var endTokensOfOverlappingConventionsStartingInside = [];
	            for (var indexInsideHero = heroStartIndex + 1; indexInsideHero < heroEndIndex; indexInsideHero++) {
	                var innerToken = this.tokens[indexInsideHero];
	                if (doesTokenStartAnyConvention(innerToken, splittableConventions)) {
	                    endTokensOfOverlappingConventionsStartingInside.unshift(innerToken.correspondingEnclosingToken);
	                    continue;
	                }
	                if (doesTokenEndAnyConvention(innerToken, splittableConventions)) {
	                    if (endTokensOfOverlappingConventionsStartingInside.length) {
	                        endTokensOfOverlappingConventionsStartingInside.shift();
	                        continue;
	                    }
	                    endTokensOfOverlappingConventionsStartingBefore.push(innerToken);
	                }
	            }
	            this.closeAndReopenConventionsAroundTokenAtIndex(heroEndIndex, endTokensOfOverlappingConventionsStartingInside);
	            this.closeAndReopenConventionsAroundTokenAtIndex(heroStartIndex, endTokensOfOverlappingConventionsStartingBefore);
	        }
	    };
	    ConventionNester.prototype.closeAndReopenConventionsAroundTokenAtIndex = function (index, endTokensInTheirOriginalOrder) {
	        var tokens = this.tokens;
	        for (var _i = 0, endTokensInTheirOriginalOrder_1 = endTokensInTheirOriginalOrder; _i < endTokensInTheirOriginalOrder_1.length; _i++) {
	            var endToken = endTokensInTheirOriginalOrder_1[_i];
	            var startToken = endToken.correspondingEnclosingToken;
	            var indexBeforeSplittingToken = index - 1;
	            if (tokens[indexBeforeSplittingToken] === startToken) {
	                tokens.splice(indexBeforeSplittingToken, 1);
	                index -= 1;
	            }
	            else {
	                tokens.splice(index, 0, endToken);
	                index += 1;
	            }
	            var indexAfterSplitterToken = index + 1;
	            if (tokens[indexAfterSplitterToken] === endToken) {
	                tokens.splice(indexAfterSplitterToken, 1);
	            }
	            else {
	                tokens.splice(indexAfterSplitterToken, 0, startToken);
	            }
	        }
	    };
	    return ConventionNester;
	}());
	function doesTokenStartAnyConvention(token, conventions) {
	    return conventions.some(function (convention) { return token.role === convention.startTokenRole; });
	}
	function doesTokenEndAnyConvention(token, conventions) {
	    return conventions.some(function (convention) { return token.role === convention.endTokenRole; });
	}
	//# sourceMappingURL=nestOverlappingConventions.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(21);
	var Bracket = (function () {
	    function Bracket(open, close) {
	        this.open = open;
	        this.close = close;
	        this.startPattern = PatternHelpers_1.escapeForRegex(open);
	        this.endPattern = PatternHelpers_1.escapeForRegex(close);
	    }
	    return Bracket;
	}());
	exports.Bracket = Bracket;
	//# sourceMappingURL=Bracket.js.map

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	var BacktrackedConventionHelper = (function () {
	    function BacktrackedConventionHelper() {
	        this.failedConventionsByMarkupIndex = {};
	    }
	    BacktrackedConventionHelper.prototype.registerFailure = function (contextOfFailedConvention) {
	        var convention = contextOfFailedConvention.convention, snapshot = contextOfFailedConvention.snapshot;
	        var markupIndex = snapshot.markupIndex;
	        if (!this.failedConventionsByMarkupIndex[markupIndex]) {
	            this.failedConventionsByMarkupIndex[markupIndex] = [];
	        }
	        this.failedConventionsByMarkupIndex[markupIndex].push(convention);
	    };
	    BacktrackedConventionHelper.prototype.hasFailed = function (convention, markupIndex) {
	        var failedConventions = (this.failedConventionsByMarkupIndex[markupIndex] || []);
	        return failedConventions.some(function (failedConvention) { return failedConvention === convention; });
	    };
	    return BacktrackedConventionHelper;
	}());
	exports.BacktrackedConventionHelper = BacktrackedConventionHelper;
	//# sourceMappingURL=BacktrackedConventionHelper.js.map

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	var ConventionContext = (function () {
	    function ConventionContext(convention, snapshot, startTokenIndex) {
	        if (startTokenIndex === void 0) { startTokenIndex = snapshot.tokens.length; }
	        this.convention = convention;
	        this.snapshot = snapshot;
	        this.startTokenIndex = startTokenIndex;
	    }
	    ConventionContext.prototype.doIsteadOfTryingToCloseOuterConventions = function () {
	        if (this.convention.insteadOfClosingOuterConventionsWhileOpen) {
	            this.convention.insteadOfClosingOuterConventionsWhileOpen(this);
	            return true;
	        }
	        return false;
	    };
	    ConventionContext.prototype.doInsteadOfTryingToOpenRegularConventions = function () {
	        if (this.convention.insteadOfOpeningRegularConventionsWhileOpen) {
	            this.convention.insteadOfOpeningRegularConventionsWhileOpen(this);
	            return true;
	        }
	        return false;
	    };
	    ConventionContext.prototype.doInsteadOfFailingWhenLeftUnclosed = function () {
	        if (this.convention.insteadOfFailingWhenLeftUnclosed) {
	            this.convention.insteadOfFailingWhenLeftUnclosed(this);
	            return true;
	        }
	        return false;
	    };
	    ConventionContext.prototype.close = function () {
	        if (this.convention.whenClosing) {
	            this.convention.whenClosing(this);
	        }
	    };
	    ConventionContext.prototype.registerTokenInsertion = function (args) {
	        if (args.atIndex < this.startTokenIndex) {
	            this.startTokenIndex += 1;
	        }
	    };
	    ConventionContext.prototype.clone = function () {
	        return new ConventionContext(this.convention, this.snapshot, this.startTokenIndex);
	    };
	    return ConventionContext;
	}());
	exports.ConventionContext = ConventionContext;
	//# sourceMappingURL=ConventionContext.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(21);
	var ConventionVariation = (function () {
	    function ConventionVariation(args) {
	        var startsWith = args.startsWith, endsWith = args.endsWith;
	        this.startsWith =
	            args.startPatternContainsATerm
	                ? PatternHelpers_1.patternIgnoringCapitalizationAndStartingWith(startsWith)
	                : PatternHelpers_1.patternStartingWith(startsWith);
	        if (endsWith) {
	            this.endsWith = PatternHelpers_1.patternStartingWith(endsWith);
	        }
	        this.canOnlyOpenIfDirectlyFollowing = args.canOnlyOpenIfDirectlyFollowing;
	        this.isCutShortByWhitespace = args.isCutShortByWhitespace;
	        this.canConsistSolelyOfWhitespace = args.canConsistSolelyOfWhitespace;
	        this.flushesBufferToTextTokenBeforeOpening = args.beforeOpeningItFlushesNonEmptyBufferToTextToken;
	        this.whenOpening = args.whenOpening;
	        this.insteadOfClosingOuterConventionsWhileOpen = args.insteadOfClosingOuterConventionsWhileOpen;
	        this.insteadOfOpeningRegularConventionsWhileOpen = args.insteadOfOpeningRegularConventionsWhileOpen;
	        this.failsIfWhitespaceIsEnounteredBeforeClosing = args.failsIfWhitespaceIsEnounteredBeforeClosing;
	        this.beforeClosingItFlushesNonEmptyBufferTo = args.beforeClosingItFlushesNonEmptyBufferTo;
	        this.beforeClosingItAlwaysFlushesBufferTo = args.beforeClosingItAlwaysFlushesBufferTo;
	        this.whenClosingItAlsoClosesInnerConventions = args.whenClosingItAlsoClosesInnerConventions;
	        this.mustBeDirectlyFollowedBy = args.mustBeDirectlyFollowedBy;
	        this.whenClosing = args.whenClosing;
	        this.insteadOfFailingWhenLeftUnclosed = args.insteadOfFailingWhenLeftUnclosed;
	    }
	    return ConventionVariation;
	}());
	exports.ConventionVariation = ConventionVariation;
	//# sourceMappingURL=ConventionVariation.js.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var InflectionStartDelimiter_1 = __webpack_require__(81);
	var PatternHelpers_1 = __webpack_require__(21);
	var CollectionHelpers_1 = __webpack_require__(23);
	var InflectionHandler = (function () {
	    function InflectionHandler(args, openStartDelimiters, delimiterPattern) {
	        if (openStartDelimiters === void 0) { openStartDelimiters = []; }
	        this.args = args;
	        this.openStartDelimiters = openStartDelimiters;
	        this.delimiterPattern = delimiterPattern;
	        this.delimiterPattern = this.delimiterPattern ||
	            PatternHelpers_1.patternStartingWith(PatternHelpers_1.oneOrMore(PatternHelpers_1.escapeForRegex(args.delimiterChar)));
	    }
	    InflectionHandler.prototype.addOpenStartDelimiter = function (delimiter, tokenIndex) {
	        this.openStartDelimiters.push(new InflectionStartDelimiter_1.InflectionStartDelimiter(delimiter, tokenIndex));
	    };
	    InflectionHandler.prototype.registerTokenInsertion = function (args) {
	        for (var _i = 0, _a = this.openStartDelimiters; _i < _a.length; _i++) {
	            var startDelimiter = _a[_i];
	            startDelimiter.registerTokenInsertion(args.atIndex);
	        }
	    };
	    InflectionHandler.prototype.tryToCloseAnyOpenDelimiters = function (endDelimiter) {
	        var _a = this, supportsMajorInflection = _a.supportsMajorInflection, combinedInflectionMinCost = _a.combinedInflectionMinCost;
	        if (endDelimiter.length === MINOR_INFLECTION_COST) {
	            for (var i = this.openStartDelimiters.length - 1; i >= 0; i--) {
	                var startDelimiter = this.openStartDelimiters[i];
	                if (startDelimiter.canOnlyAfford(MINOR_INFLECTION_COST) || startDelimiter.canAfford(combinedInflectionMinCost)) {
	                    this.applyMinorInflection(startDelimiter);
	                    return true;
	                }
	            }
	        }
	        else if (supportsMajorInflection && (endDelimiter.length === MAJOR_INFLECTION_COST)) {
	            for (var i = this.openStartDelimiters.length - 1; i >= 0; i--) {
	                var startDelimiter = this.openStartDelimiters[i];
	                if (startDelimiter.canAfford(MAJOR_INFLECTION_COST)) {
	                    this.applyMajorInflection(startDelimiter);
	                    return true;
	                }
	            }
	        }
	        var unspentEndDelimiterLength = endDelimiter.length;
	        for (var i = this.openStartDelimiters.length - 1; (i >= 0) && unspentEndDelimiterLength; i--) {
	            var startDelimiter = this.openStartDelimiters[i];
	            if ((unspentEndDelimiterLength >= this.combinedInflectionMinCost) && startDelimiter.canAfford(combinedInflectionMinCost)) {
	                this.encloseWithin({
	                    richConvention: this.args.conventionForMinorInflection,
	                    startingBackAtTokenIndex: startDelimiter.tokenIndex
	                });
	                if (supportsMajorInflection) {
	                    this.encloseWithin({
	                        richConvention: this.args.conventionForMajorInflection,
	                        startingBackAtTokenIndex: startDelimiter.tokenIndex
	                    });
	                }
	                var lengthInCommon = Math.min(startDelimiter.unspentLength, unspentEndDelimiterLength);
	                this.applyCostThenRemoveFromCollectionIfFullySpent(startDelimiter, lengthInCommon);
	                unspentEndDelimiterLength -= lengthInCommon;
	                continue;
	            }
	            if (supportsMajorInflection
	                && unspentEndDelimiterLength >= MAJOR_INFLECTION_COST
	                && startDelimiter.canAfford(MAJOR_INFLECTION_COST)) {
	                this.applyMajorInflection(startDelimiter);
	                unspentEndDelimiterLength -= MAJOR_INFLECTION_COST;
	                continue;
	            }
	            this.applyMinorInflection(startDelimiter);
	            unspentEndDelimiterLength -= MINOR_INFLECTION_COST;
	        }
	        return unspentEndDelimiterLength < endDelimiter.length;
	    };
	    InflectionHandler.prototype.treatDanglingStartDelimitersAsText = function () {
	        for (var _i = 0, _a = this.openStartDelimiters; _i < _a.length; _i++) {
	            var startDelimiter = _a[_i];
	            if (startDelimiter.isDangling()) {
	                this.args.insertTextToken(startDelimiter.delimiterText, startDelimiter.tokenIndex);
	            }
	        }
	    };
	    InflectionHandler.prototype.clone = function () {
	        return new InflectionHandler(this.args, this.openStartDelimiters.map(function (delimiter) { return delimiter.clone(); }), this.delimiterPattern);
	    };
	    Object.defineProperty(InflectionHandler.prototype, "supportsMajorInflection", {
	        get: function () {
	            return (this.args.conventionForMajorInflection != null);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(InflectionHandler.prototype, "combinedInflectionMinCost", {
	        get: function () {
	            return (this.supportsMajorInflection
	                ? MINOR_INFLECTION_COST + MAJOR_INFLECTION_COST
	                : MINOR_INFLECTION_COST * 2);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    InflectionHandler.prototype.encloseWithin = function (args) {
	        this.args.encloseWithinConvention(args);
	    };
	    InflectionHandler.prototype.applyMinorInflection = function (startDelimiter) {
	        this.applyConvention(startDelimiter, this.args.conventionForMinorInflection, MINOR_INFLECTION_COST);
	    };
	    InflectionHandler.prototype.applyMajorInflection = function (startDelimiter) {
	        this.applyConvention(startDelimiter, this.args.conventionForMajorInflection, MAJOR_INFLECTION_COST);
	    };
	    InflectionHandler.prototype.applyConvention = function (startDelimiter, richConvention, cost) {
	        this.encloseWithin({
	            richConvention: richConvention,
	            startingBackAtTokenIndex: startDelimiter.tokenIndex
	        });
	        this.applyCostThenRemoveFromCollectionIfFullySpent(startDelimiter, cost);
	    };
	    InflectionHandler.prototype.applyCostThenRemoveFromCollectionIfFullySpent = function (startDelimiter, cost) {
	        startDelimiter.pay(cost);
	        if (startDelimiter.isFullySpent()) {
	            CollectionHelpers_1.remove(this.openStartDelimiters, startDelimiter);
	        }
	    };
	    return InflectionHandler;
	}());
	exports.InflectionHandler = InflectionHandler;
	var MINOR_INFLECTION_COST = 1;
	var MAJOR_INFLECTION_COST = 2;
	//# sourceMappingURL=InflectionHandler.js.map

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	var InflectionStartDelimiter = (function () {
	    function InflectionStartDelimiter(delimiterText, tokenIndex, unspentLength) {
	        if (unspentLength === void 0) { unspentLength = delimiterText.length; }
	        this.delimiterText = delimiterText;
	        this.tokenIndex = tokenIndex;
	        this.unspentLength = unspentLength;
	    }
	    InflectionStartDelimiter.prototype.canAfford = function (cost) {
	        return this.unspentLength >= cost;
	    };
	    InflectionStartDelimiter.prototype.canOnlyAfford = function (cost) {
	        return this.unspentLength === cost;
	    };
	    InflectionStartDelimiter.prototype.pay = function (cost) {
	        this.unspentLength -= cost;
	    };
	    InflectionStartDelimiter.prototype.isDangling = function () {
	        return this.unspentLength === this.delimiterText.length;
	    };
	    InflectionStartDelimiter.prototype.isFullySpent = function () {
	        return this.unspentLength === 0;
	    };
	    InflectionStartDelimiter.prototype.registerTokenInsertion = function (atIndex) {
	        if (atIndex < this.tokenIndex) {
	            this.tokenIndex += 1;
	        }
	    };
	    InflectionStartDelimiter.prototype.clone = function () {
	        return new InflectionStartDelimiter(this.delimiterText, this.tokenIndex, this.unspentLength);
	    };
	    return InflectionStartDelimiter;
	}());
	exports.InflectionStartDelimiter = InflectionStartDelimiter;
	//# sourceMappingURL=InflectionStartDelimiter.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Patterns_1 = __webpack_require__(22);
	var Strings_1 = __webpack_require__(71);
	function trimEscapedAndUnescapedOuterWhitespace(markup) {
	    while (true) {
	        markup = markup.trim();
	        var length_1 = markup.length;
	        var isFirstCharEscapingWhitespace = markup[0] === Strings_1.BACKSLASH
	            && (markup.length === 1
	                || Patterns_1.WHITESPACE_CHAR_PATTERN.test(markup[1]));
	        if (isFirstCharEscapingWhitespace) {
	            markup = markup.slice(2);
	        }
	        var secondToLastChar = markup[length_1 - 2];
	        var lastChar = markup[length_1 - 1];
	        if ((lastChar === Strings_1.BACKSLASH) && (secondToLastChar !== Strings_1.BACKSLASH)) {
	            markup = markup.slice(0, -1);
	        }
	        if (markup.length === length_1) {
	            return markup;
	        }
	    }
	}
	exports.trimEscapedAndUnescapedOuterWhitespace = trimEscapedAndUnescapedOuterWhitespace;
	//# sourceMappingURL=trimEscapedAndUnescapedOuterWhitespace.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var RichConventions_1 = __webpack_require__(53);
	var MediaConventions_1 = __webpack_require__(66);
	var Text_1 = __webpack_require__(84);
	var isWhitespace_1 = __webpack_require__(85);
	var CollectionHelpers_1 = __webpack_require__(23);
	var TokenRole_1 = __webpack_require__(65);
	var InlineCode_1 = __webpack_require__(86);
	var ExampleInput_1 = __webpack_require__(87);
	var SectionLink_1 = __webpack_require__(31);
	var Link_1 = __webpack_require__(64);
	var Patterns_1 = __webpack_require__(22);
	function parse(tokens) {
	    return parseAndGetResult({ tokens: tokens }).nodes;
	}
	exports.parse = parse;
	function parseAndGetResult(args) {
	    var tokens = args.tokens, until = args.until;
	    var tokenIndex = 0;
	    var nodes = [];
	    function countTokensParsed() {
	        return tokenIndex + 1;
	    }
	    function getChildren(args) {
	        var result = parseAndGetResult({
	            tokens: tokens.slice(countTokensParsed()),
	            until: args.fromHereUntil
	        });
	        tokenIndex += result.countTokensParsed;
	        return result.nodes;
	    }
	    TokenLoop: for (; tokenIndex < tokens.length; tokenIndex++) {
	        var token = tokens[tokenIndex];
	        switch (token.role) {
	            case until: {
	                break TokenLoop;
	            }
	            case TokenRole_1.TokenRole.Text: {
	                nodes.push(new Text_1.Text(token.value));
	                continue;
	            }
	            case TokenRole_1.TokenRole.InlineCode: {
	                nodes.push(new InlineCode_1.InlineCode(token.value));
	                continue;
	            }
	            case TokenRole_1.TokenRole.ExampleInput: {
	                nodes.push(new ExampleInput_1.ExampleInput(token.value));
	                continue;
	            }
	            case TokenRole_1.TokenRole.SectionLink: {
	                nodes.push(new SectionLink_1.SectionLink(token.value));
	                continue;
	            }
	            case TokenRole_1.TokenRole.BareUrl: {
	                var url = token.value;
	                var urlScheme = Patterns_1.URL_SCHEME_PATTERN.exec(url)[0];
	                var urlAfterScheme = url.substr(urlScheme.length);
	                nodes.push(new RichConventions_1.LINK.SyntaxNodeType([new Text_1.Text(urlAfterScheme)], url));
	                continue;
	            }
	            case RichConventions_1.LINK.startTokenRole: {
	                var children = getChildren({
	                    fromHereUntil: TokenRole_1.TokenRole.LinkEndAndUrl
	                });
	                var url = tokens[tokenIndex].value.trim();
	                if (children.every(isWhitespace_1.isWhitespace)) {
	                    children = [new Text_1.Text(url)];
	                }
	                nodes.push(new Link_1.Link(children, url));
	                continue;
	            }
	        }
	        for (var _i = 0, _a = [MediaConventions_1.AUDIO, MediaConventions_1.IMAGE, MediaConventions_1.VIDEO]; _i < _a.length; _i++) {
	            var media = _a[_i];
	            if (token.role === media.tokenRoleForStartAndDescription) {
	                var description = token.value.trim();
	                var urlToken = tokens[++tokenIndex];
	                var url = urlToken.value.trim();
	                nodes.push(new media.SyntaxNodeType(description, url));
	                continue TokenLoop;
	            }
	        }
	        for (var _b = 0, _c = [
	            RichConventions_1.EMPHASIS,
	            RichConventions_1.STRESS,
	            RichConventions_1.ITALICS,
	            RichConventions_1.BOLD,
	            RichConventions_1.HIGHLIGHT,
	            RichConventions_1.INLINE_REVEALABLE,
	            RichConventions_1.FOOTNOTE,
	            RichConventions_1.NORMAL_PARENTHETICAL,
	            RichConventions_1.SQUARE_PARENTHETICAL,
	            RichConventions_1.INLINE_QUOTE
	        ]; _b < _c.length; _b++) {
	            var richConvention = _c[_b];
	            if (token.role === richConvention.startTokenRole) {
	                var children = getChildren({
	                    fromHereUntil: richConvention.endTokenRole
	                });
	                nodes.push(new richConvention.SyntaxNodeType(children));
	                continue TokenLoop;
	            }
	        }
	        throw new Error('Unrecognized token: ' + TokenRole_1.TokenRole[token.role]);
	    }
	    return {
	        nodes: combineConsecutiveTextNodes(nodes),
	        countTokensParsed: countTokensParsed()
	    };
	}
	function combineConsecutiveTextNodes(nodes) {
	    var resultNodes = [];
	    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
	        var node = nodes_1[_i];
	        var lastNode = CollectionHelpers_1.last(resultNodes);
	        if ((node instanceof Text_1.Text) && (lastNode instanceof Text_1.Text)) {
	            lastNode.text += node.text;
	            continue;
	        }
	        resultNodes.push(node);
	    }
	    return resultNodes;
	}
	//# sourceMappingURL=parse.js.map

/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";
	var Text = (function () {
	    function Text(text) {
	        this.text = text;
	    }
	    Text.prototype.textAppearingInline = function () {
	        return this.text;
	    };
	    Text.prototype.searchableText = function () {
	        return this.text;
	    };
	    Text.prototype.inlineDescendants = function () {
	        return [];
	    };
	    Text.prototype.render = function (renderer) {
	        return renderer.text(this);
	    };
	    Text.prototype.TEXT = function () { };
	    return Text;
	}());
	exports.Text = Text;
	//# sourceMappingURL=Text.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Text_1 = __webpack_require__(84);
	var Patterns_1 = __webpack_require__(22);
	function isWhitespace(node) {
	    return (node instanceof Text_1.Text) && Patterns_1.BLANK_PATTERN.test(node.text);
	}
	exports.isWhitespace = isWhitespace;
	//# sourceMappingURL=isWhitespace.js.map

/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";
	var InlineCode = (function () {
	    function InlineCode(code) {
	        this.code = code;
	    }
	    InlineCode.prototype.textAppearingInline = function () {
	        return this.code;
	    };
	    InlineCode.prototype.searchableText = function () {
	        return this.code;
	    };
	    InlineCode.prototype.inlineDescendants = function () {
	        return [];
	    };
	    InlineCode.prototype.render = function (renderer) {
	        return renderer.inlineCode(this);
	    };
	    return InlineCode;
	}());
	exports.InlineCode = InlineCode;
	//# sourceMappingURL=InlineCode.js.map

/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";
	var ExampleInput = (function () {
	    function ExampleInput(input) {
	        this.input = input;
	    }
	    ExampleInput.prototype.textAppearingInline = function () {
	        return this.input;
	    };
	    ExampleInput.prototype.searchableText = function () {
	        return this.input;
	    };
	    ExampleInput.prototype.inlineDescendants = function () {
	        return [];
	    };
	    ExampleInput.prototype.render = function (renderer) {
	        return renderer.exampleInput(this);
	    };
	    return ExampleInput;
	}());
	exports.ExampleInput = ExampleInput;
	//# sourceMappingURL=ExampleInput.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tryToParseUnorderedList_1 = __webpack_require__(89);
	var tryToParseOrderedList_1 = __webpack_require__(91);
	var tryToParseThematicBreakStreak_1 = __webpack_require__(49);
	var tryToParseBlockquote_1 = __webpack_require__(92);
	var tryToParseCodeBlock_1 = __webpack_require__(94);
	var HeadingLeveler_1 = __webpack_require__(45);
	var OUTLINE_CONVENTIONS_POSSIBLY_ONE_LINE_LONG = [
	    tryToParseUnorderedList_1.tryToParseUnorderedList,
	    tryToParseOrderedList_1.trytoParseOrderedList,
	    tryToParseThematicBreakStreak_1.tryToParseThematicBreakStreak,
	    tryToParseBlockquote_1.tryToParseBlockquote,
	    tryToParseCodeBlock_1.tryToParseCodeBlock
	];
	var DUMMY_HEADING_LEVELER = new HeadingLeveler_1.HeadingLeveler();
	var DUMMY_SOURCE_LINE_NUMBER = 1;
	function isLineFancyOutlineConvention(markupLine, settings) {
	    var markupLines = [markupLine];
	    return OUTLINE_CONVENTIONS_POSSIBLY_ONE_LINE_LONG.some(function (parse) { return parse({
	        markupLines: markupLines,
	        settings: settings,
	        sourceLineNumber: DUMMY_SOURCE_LINE_NUMBER,
	        headingLeveler: DUMMY_HEADING_LEVELER,
	        then: function () { }
	    }); });
	}
	exports.isLineFancyOutlineConvention = isLineFancyOutlineConvention;
	//# sourceMappingURL=isLineFancyOutlineConvention.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var UnorderedList_1 = __webpack_require__(43);
	var getOutlineSyntaxNodes_1 = __webpack_require__(46);
	var getIndentedBlock_1 = __webpack_require__(90);
	var PatternHelpers_1 = __webpack_require__(21);
	var PatternPieces_1 = __webpack_require__(20);
	function tryToParseUnorderedList(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var listItems = [];
	    var _loop_1 = function() {
	        var linesOfMarkupInCurrentListItem = [];
	        var sourceLineNumberForCurrentListItem = args.sourceLineNumber + markupLineConsumer.countLinesConsumed;
	        var isLineBulleted = markupLineConsumer.consume({
	            linePattern: BULLETED_LINE_PATTERN,
	            thenBeforeConsumingLine: function (line) {
	                linesOfMarkupInCurrentListItem.push(line.replace(BULLETED_LINE_PATTERN, ''));
	            }
	        });
	        if (!isLineBulleted) {
	            return "break";
	        }
	        var shouldTerminateList = false;
	        getIndentedBlock_1.getIndentedBlock({
	            lines: markupLineConsumer.remaining(),
	            then: function (indentedLines, countLinesConsumed, hasMultipleTrailingBlankLines) {
	                linesOfMarkupInCurrentListItem.push.apply(linesOfMarkupInCurrentListItem, indentedLines);
	                markupLineConsumer.skipLines(countLinesConsumed);
	                shouldTerminateList = hasMultipleTrailingBlankLines;
	            }
	        });
	        listItems.push(new UnorderedList_1.UnorderedList.Item(getOutlineSyntaxNodes_1.getOutlineSyntaxNodes({
	            markupLines: linesOfMarkupInCurrentListItem,
	            sourceLineNumber: sourceLineNumberForCurrentListItem,
	            headingLeveler: args.headingLeveler,
	            settings: args.settings
	        })));
	        if (shouldTerminateList) {
	            return "break";
	        }
	    };
	    while (!markupLineConsumer.done()) {
	        var state_1 = _loop_1();
	        if (state_1 === "break") break;
	    }
	    if (!listItems.length) {
	        return false;
	    }
	    args.then([new UnorderedList_1.UnorderedList(listItems)], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.tryToParseUnorderedList = tryToParseUnorderedList;
	var BULLETED_LINE_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.optional(' ') + PatternHelpers_1.anyCharFrom('*', '-', '•') + PatternPieces_1.INLINE_WHITESPACE_CHAR);
	//# sourceMappingURL=tryToParseUnorderedList.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var Patterns_1 = __webpack_require__(22);
	function getIndentedBlock(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.lines);
	    var indentedLines = [];
	    var indentedBlockLineCount = 0;
	    while (!markupLineConsumer.done()) {
	        var wasLineBlank = markupLineConsumer.consume({
	            linePattern: Patterns_1.BLANK_PATTERN,
	            thenBeforeConsumingLine: function (line) {
	                indentedLines.push(line);
	            }
	        });
	        if (wasLineBlank) {
	            continue;
	        }
	        var wasLineIndented = markupLineConsumer.consume({
	            linePattern: Patterns_1.INDENTED_PATTERN,
	            thenBeforeConsumingLine: function (line) {
	                indentedLines.push(line);
	                indentedBlockLineCount = indentedLines.length;
	            }
	        });
	        if (!wasLineIndented) {
	            break;
	        }
	    }
	    if (!indentedLines.length) {
	        return;
	    }
	    var countTrailingBlankLines = indentedLines.length - indentedBlockLineCount;
	    var hasMultipleTrailingBlankLines = countTrailingBlankLines >= 2;
	    var countLinesConsumed = hasMultipleTrailingBlankLines
	        ? indentedBlockLineCount
	        : indentedLines.length;
	    var indentedBlockLines = indentedLines
	        .slice(0, indentedBlockLineCount)
	        .map(function (line) { return line.replace(Patterns_1.INDENTED_PATTERN, ''); });
	    args.then(indentedBlockLines, countLinesConsumed, hasMultipleTrailingBlankLines);
	}
	exports.getIndentedBlock = getIndentedBlock;
	//# sourceMappingURL=getIndentedBlock.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var OrderedList_1 = __webpack_require__(42);
	var getOutlineSyntaxNodes_1 = __webpack_require__(46);
	var PatternHelpers_1 = __webpack_require__(21);
	var PatternPieces_1 = __webpack_require__(20);
	var Patterns_1 = __webpack_require__(22);
	var getIndentedBlock_1 = __webpack_require__(90);
	function trytoParseOrderedList(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var unparsedListItems = [];
	    var _loop_1 = function() {
	        var unparsedListItem;
	        var isLineBulleted = markupLineConsumer.consume({
	            linePattern: LINE_WITH_NUMERIC_BULLET_PATTERN,
	            if: function (line) { return !Patterns_1.DIVIDER_STREAK_PATTERN.test(line); },
	            thenBeforeConsumingLine: function (line, bullet) {
	                unparsedListItem =
	                    new UnparsedListItem({
	                        bullet: bullet,
	                        firstLineOfMarkup: line.replace(LINE_WITH_NUMERIC_BULLET_PATTERN, ''),
	                        sourceLineNumber: args.sourceLineNumber + markupLineConsumer.countLinesConsumed
	                    });
	            }
	        });
	        if (!isLineBulleted) {
	            return "break";
	        }
	        var shouldTerminateList = false;
	        getIndentedBlock_1.getIndentedBlock({
	            lines: markupLineConsumer.remaining(),
	            then: function (indentedLines, countLinesConsumed, hasMultipleTrailingBlankLines) {
	                (_a = unparsedListItem.markupLines).push.apply(_a, indentedLines);
	                markupLineConsumer.skipLines(countLinesConsumed);
	                shouldTerminateList = hasMultipleTrailingBlankLines;
	                var _a;
	            }
	        });
	        unparsedListItems.push(unparsedListItem);
	        if (shouldTerminateList) {
	            return "break";
	        }
	    };
	    while (!markupLineConsumer.done()) {
	        var state_1 = _loop_1();
	        if (state_1 === "break") break;
	    }
	    if (!isAnOrderedList(unparsedListItems)) {
	        return false;
	    }
	    var listItems = unparsedListItems.map(function (unparsedListItem) {
	        var itemChildren = getOutlineSyntaxNodes_1.getOutlineSyntaxNodes({
	            markupLines: unparsedListItem.markupLines,
	            sourceLineNumber: unparsedListItem.sourceLineNumber,
	            headingLeveler: args.headingLeveler,
	            settings: args.settings
	        });
	        var ordinal = getExplicitOrdinal(unparsedListItem);
	        return new OrderedList_1.OrderedList.Item(itemChildren, { ordinal: ordinal });
	    });
	    args.then([new OrderedList_1.OrderedList(listItems)], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.trytoParseOrderedList = trytoParseOrderedList;
	var UnparsedListItem = (function () {
	    function UnparsedListItem(args) {
	        this.markupLines = [];
	        this.bullet = args.bullet;
	        this.markupLines = [args.firstLineOfMarkup];
	        this.sourceLineNumber = args.sourceLineNumber;
	    }
	    return UnparsedListItem;
	}());
	function isAnOrderedList(unparsedListItems) {
	    var length = unparsedListItems.length;
	    return (length > 0
	        && (length > 1
	            || !BULLETED_BY_INTEGER_FOLLOWED_BY_PERIOD_PATTERN.test(unparsedListItems[0].bullet)));
	}
	function getExplicitOrdinal(unparsedListItem) {
	    var result = FIRST_INTEGER_PATTERN.exec(unparsedListItem.bullet);
	    return (result
	        ? parseInt(result[0], 10)
	        : undefined);
	}
	exports.INTEGER = PatternHelpers_1.optional(PatternHelpers_1.escapeForRegex('-')) + PatternHelpers_1.oneOrMore(PatternPieces_1.DIGIT);
	var NUMERIC_BULLET = PatternHelpers_1.either('#', PatternHelpers_1.capture(PatternHelpers_1.either(exports.INTEGER, '#') + PatternHelpers_1.anyCharFrom('.', ')')));
	var LINE_WITH_NUMERIC_BULLET_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.optional(' ') + NUMERIC_BULLET + PatternPieces_1.INLINE_WHITESPACE_CHAR);
	var BULLETED_BY_INTEGER_FOLLOWED_BY_PERIOD_PATTERN = PatternHelpers_1.patternStartingWith(exports.INTEGER + '\\.');
	var FIRST_INTEGER_PATTERN = new RegExp(exports.INTEGER);
	//# sourceMappingURL=tryToParseOrderedList.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var Blockquote_1 = __webpack_require__(93);
	var getOutlineSyntaxNodes_1 = __webpack_require__(46);
	var PatternHelpers_1 = __webpack_require__(21);
	var PatternPieces_1 = __webpack_require__(20);
	function tryToParseBlockquote(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var blockquotedLines = [];
	    while (markupLineConsumer.consume({
	        linePattern: BLOCKQUOTE_DELIMITER_PATTERN,
	        thenBeforeConsumingLine: function (line) {
	            blockquotedLines.push(line.replace(BLOCKQUOTE_DELIMITER_PATTERN, ''));
	        }
	    })) { }
	    if (!blockquotedLines.length) {
	        return false;
	    }
	    var sourceLineNumber = args.sourceLineNumber, headingLeveler = args.headingLeveler;
	    var blockquoteChildren = getOutlineSyntaxNodes_1.getOutlineSyntaxNodes({
	        markupLines: blockquotedLines,
	        sourceLineNumber: sourceLineNumber,
	        headingLeveler: headingLeveler,
	        settings: args.settings
	    });
	    args.then([new Blockquote_1.Blockquote(blockquoteChildren)], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.tryToParseBlockquote = tryToParseBlockquote;
	var BLOCKQUOTE_DELIMITER_PATTERN = PatternHelpers_1.patternStartingWith(PatternPieces_1.ANY_WHITESPACE + '>' + PatternHelpers_1.optional(' '));
	//# sourceMappingURL=tryToParseBlockquote.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichOutlineSyntaxNode_1 = __webpack_require__(40);
	var Blockquote = (function (_super) {
	    __extends(Blockquote, _super);
	    function Blockquote() {
	        _super.apply(this, arguments);
	    }
	    Blockquote.prototype.render = function (renderer) {
	        return renderer.blockquote(this);
	    };
	    Blockquote.prototype.BLOCKQUOTE = function () { };
	    return Blockquote;
	}(RichOutlineSyntaxNode_1.RichOutlineSyntaxNode));
	exports.Blockquote = Blockquote;
	//# sourceMappingURL=Blockquote.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var CodeBlock_1 = __webpack_require__(95);
	var PatternHelpers_1 = __webpack_require__(21);
	function tryToParseCodeBlock(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var startStreak;
	    markupLineConsumer.consume({
	        linePattern: CODE_BLOCK_STREAK_PATTERN,
	        thenBeforeConsumingLine: function (line) {
	            startStreak = line.trim();
	        }
	    });
	    if (!startStreak) {
	        return false;
	    }
	    var codeLines = [];
	    var _loop_1 = function() {
	        var possibleEndStreak;
	        markupLineConsumer.consume({
	            linePattern: CODE_BLOCK_STREAK_PATTERN,
	            thenBeforeConsumingLine: function (line) {
	                possibleEndStreak = line.trim();
	            }
	        });
	        if (!possibleEndStreak) {
	            markupLineConsumer.consume({
	                thenBeforeConsumingLine: function (line) {
	                    codeLines.push(line);
	                }
	            });
	            return "continue";
	        }
	        if (possibleEndStreak.length === startStreak.length) {
	            return "break";
	        }
	        codeLines.push(possibleEndStreak);
	    };
	    while (!markupLineConsumer.done()) {
	        var state_1 = _loop_1();
	        if (state_1 === "break") break;
	    }
	    args.then([new CodeBlock_1.CodeBlock(codeLines.join(RENDERED_LINE_BREAK))], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.tryToParseCodeBlock = tryToParseCodeBlock;
	var CODE_BLOCK_STREAK_PATTERN = PatternHelpers_1.streakOf('`');
	var RENDERED_LINE_BREAK = '\n';
	//# sourceMappingURL=tryToParseCodeBlock.js.map

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";
	var CodeBlock = (function () {
	    function CodeBlock(code, options) {
	        this.code = code;
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    CodeBlock.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    CodeBlock.prototype.inlineDescendants = function () {
	        return [];
	    };
	    CodeBlock.prototype.render = function (renderer) {
	        return renderer.codeBlock(this);
	    };
	    CodeBlock.prototype.CODE_BLOCK = function () { };
	    return CodeBlock;
	}());
	exports.CodeBlock = CodeBlock;
	//# sourceMappingURL=CodeBlock.js.map

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var ThematicBreak_1 = __webpack_require__(48);
	var Patterns_1 = __webpack_require__(22);
	function tryToParseBlankLineSeparation(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var countBlankLines = 0;
	    while (markupLineConsumer.consume({ linePattern: Patterns_1.BLANK_PATTERN })) {
	        countBlankLines += 1;
	    }
	    if (!countBlankLines) {
	        return false;
	    }
	    var MIN_COUNT_BLANK_LINES_IN_THEMATIC_BREAK = 3;
	    args.then(countBlankLines >= MIN_COUNT_BLANK_LINES_IN_THEMATIC_BREAK
	        ? [new ThematicBreak_1.ThematicBreak()]
	        : [], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.tryToParseBlankLineSeparation = tryToParseBlankLineSeparation;
	//# sourceMappingURL=tryToParseBlankLineSeparation.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var DescriptionList_1 = __webpack_require__(34);
	var getInlineSyntaxNodes_1 = __webpack_require__(51);
	var getOutlineSyntaxNodes_1 = __webpack_require__(46);
	var isLineFancyOutlineConvention_1 = __webpack_require__(88);
	var Patterns_1 = __webpack_require__(22);
	var getIndentedBlock_1 = __webpack_require__(90);
	function tryToParseDescriptionList(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var listItems = [];
	    var countLinesConsumed = 0;
	    var _loop_1 = function() {
	        var markupPerSubject = [];
	        while (!markupLineConsumer.done()) {
	            var isSubject = markupLineConsumer.consume({
	                linePattern: Patterns_1.NON_BLANK_PATTERN,
	                if: function (line) { return !Patterns_1.INDENTED_PATTERN.test(line) && !isLineFancyOutlineConvention_1.isLineFancyOutlineConvention(line, args.settings); },
	                thenBeforeConsumingLine: function (line) {
	                    markupPerSubject.push(line);
	                }
	            });
	            if (!isSubject) {
	                break;
	            }
	        }
	        if (!markupPerSubject.length) {
	            return "break";
	        }
	        markupLineConsumer.consume({ linePattern: Patterns_1.BLANK_PATTERN });
	        var sourceLineNumberForDescription = args.sourceLineNumber + markupLineConsumer.countLinesConsumed;
	        var descriptionLines = [];
	        var hasDescription = markupLineConsumer.consume({
	            linePattern: Patterns_1.INDENTED_PATTERN,
	            if: function (line) { return !Patterns_1.BLANK_PATTERN.test(line); },
	            thenBeforeConsumingLine: function (line) {
	                descriptionLines.push(line.replace(Patterns_1.INDENTED_PATTERN, ''));
	            }
	        });
	        if (!hasDescription) {
	            return "break";
	        }
	        var shouldTerminateList = false;
	        getIndentedBlock_1.getIndentedBlock({
	            lines: markupLineConsumer.remaining(),
	            then: function (indentedLines, countLinesConsumedByIndentedBlock, hasMultipleTrailingBlankLines) {
	                descriptionLines.push.apply(descriptionLines, indentedLines);
	                markupLineConsumer.skipLines(countLinesConsumedByIndentedBlock);
	                shouldTerminateList = hasMultipleTrailingBlankLines;
	            }
	        });
	        countLinesConsumed = markupLineConsumer.countLinesConsumed;
	        var subjects = markupPerSubject.map(function (subject) {
	            return new DescriptionList_1.DescriptionList.Item.Subject(getInlineSyntaxNodes_1.getInlineSyntaxNodes(subject, args.settings));
	        });
	        var description = new DescriptionList_1.DescriptionList.Item.Description(getOutlineSyntaxNodes_1.getOutlineSyntaxNodes({
	            markupLines: descriptionLines,
	            sourceLineNumber: sourceLineNumberForDescription,
	            headingLeveler: args.headingLeveler,
	            settings: args.settings
	        }));
	        listItems.push(new DescriptionList_1.DescriptionList.Item(subjects, description));
	        if (shouldTerminateList) {
	            return "break";
	        }
	    };
	    while (!markupLineConsumer.done()) {
	        var state_1 = _loop_1();
	        if (state_1 === "break") break;
	    }
	    if (!listItems.length) {
	        return false;
	    }
	    args.then([new DescriptionList_1.DescriptionList(listItems)], countLinesConsumed);
	    return true;
	}
	exports.tryToParseDescriptionList = tryToParseDescriptionList;
	//# sourceMappingURL=tryToParseDescriptionList.js.map

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var Table_1 = __webpack_require__(44);
	var PatternHelpers_1 = __webpack_require__(21);
	var Patterns_1 = __webpack_require__(22);
	var PatternPieces_1 = __webpack_require__(20);
	var getInlineSyntaxNodes_1 = __webpack_require__(51);
	var getTableCells_1 = __webpack_require__(99);
	function tryToParseTable(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var settings = args.settings;
	    var labelPattern = PatternHelpers_1.solelyAndIgnoringCapitalization(PatternHelpers_1.either.apply(void 0, settings.keywords.table.map(PatternHelpers_1.escapeForRegex)) + PatternHelpers_1.optional(':' + PatternHelpers_1.capture(PatternPieces_1.REST_OF_TEXT)));
	    var captionMarkup;
	    var isTable = markupLineConsumer.consume({
	        linePattern: labelPattern,
	        thenBeforeConsumingLine: function (_, caption) {
	            captionMarkup = (caption || '').trim();
	        }
	    });
	    if (!isTable) {
	        return false;
	    }
	    consumeBlankLine(markupLineConsumer);
	    var alsoHasHeaderColumn;
	    var headerCells;
	    var hasHeader = markupLineConsumer.consume({
	        linePattern: Patterns_1.NON_BLANK_PATTERN,
	        thenBeforeConsumingLine: function (headerMarkup) {
	            alsoHasHeaderColumn = Patterns_1.INDENTED_PATTERN.test(headerMarkup);
	            headerCells = getTableCells_1.getTableCells(headerMarkup, settings).map(toHeaderCell);
	        }
	    });
	    if (!hasHeader) {
	        return false;
	    }
	    if (alsoHasHeaderColumn) {
	        headerCells.unshift(new Table_1.Table.Header.Cell([]));
	    }
	    var header = new Table_1.Table.Header(headerCells);
	    var caption = captionMarkup
	        ? new Table_1.Table.Caption(getInlineSyntaxNodes_1.getInlineSyntaxNodes(captionMarkup, settings))
	        : undefined;
	    var rows = [];
	    var countLinesConsumed = markupLineConsumer.countLinesConsumed;
	    consumeBlankLine(markupLineConsumer);
	    while (markupLineConsumer.consume({
	        linePattern: Patterns_1.NON_BLANK_PATTERN,
	        thenBeforeConsumingLine: function (line) {
	            var cells = getTableCells_1.getTableCells(line, settings);
	            var headerColumnCell = alsoHasHeaderColumn
	                ? toHeaderCell(cells.shift())
	                : undefined;
	            rows.push(new Table_1.Table.Row(cells.map(toRowCell), headerColumnCell));
	        }
	    })) {
	        countLinesConsumed = markupLineConsumer.countLinesConsumed;
	    }
	    args.then([new Table_1.Table(header, rows, caption)], countLinesConsumed);
	    return true;
	}
	exports.tryToParseTable = tryToParseTable;
	function consumeBlankLine(markupLineConsumer) {
	    return markupLineConsumer.consume({ linePattern: Patterns_1.BLANK_PATTERN });
	}
	var toHeaderCell = function (cell) {
	    return new Table_1.Table.Header.Cell(cell.children, cell.countColumnsSpanned);
	};
	var toRowCell = function (cell) {
	    return new Table_1.Table.Row.Cell(cell.children, cell.countColumnsSpanned);
	};
	//# sourceMappingURL=tryToParseTable.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Table_1 = __webpack_require__(44);
	var PatternHelpers_1 = __webpack_require__(21);
	var getInlineSyntaxNodes_1 = __webpack_require__(51);
	var CollectionHelpers_1 = __webpack_require__(23);
	var Strings_1 = __webpack_require__(71);
	var TableCell = (function (_super) {
	    __extends(TableCell, _super);
	    function TableCell() {
	        _super.apply(this, arguments);
	    }
	    return TableCell;
	}(Table_1.Table.Cell));
	exports.TableCell = TableCell;
	function getTableCells(row, settings) {
	    row = row.trim();
	    var cells = [];
	    var charIndexOfStartOfNextCell = 0;
	    var charIndex = 0;
	    function collectCell(args) {
	        var cellMarkup = row.slice(charIndexOfStartOfNextCell, charIndex);
	        var cellChildren = getInlineSyntaxNodes_1.getInlineSyntaxNodes(cellMarkup.trim(), settings);
	        cells.push(new TableCell(cellChildren, args.countColumnsSpanned));
	    }
	    for (; charIndex < row.length; charIndex++) {
	        var char = row[charIndex];
	        if (char === Strings_1.BACKSLASH) {
	            charIndex++;
	            continue;
	        }
	        var result = CELL_DELIMITER_PATTERN.exec(row.slice(charIndex));
	        if (!result) {
	            continue;
	        }
	        var delimiter = result[0];
	        collectCell({ countColumnsSpanned: delimiter.length });
	        charIndexOfStartOfNextCell = charIndex + delimiter.length;
	        charIndex += delimiter.length - 1;
	    }
	    var lastCell = CollectionHelpers_1.last(cells);
	    var shouldCollectOneLastCell = charIndexOfStartOfNextCell < row.length
	        || (lastCell.countColumnsSpanned === 1
	            && row !== SEMICOLON);
	    if (shouldCollectOneLastCell) {
	        collectCell({ countColumnsSpanned: 1 });
	    }
	    return cells;
	}
	exports.getTableCells = getTableCells;
	var SEMICOLON = ';';
	var CELL_DELIMITER_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.oneOrMore(SEMICOLON));
	//# sourceMappingURL=getTableCells.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var RevealableBlock_1 = __webpack_require__(39);
	var getOutlineSyntaxNodes_1 = __webpack_require__(46);
	var getIndentedBlock_1 = __webpack_require__(90);
	var PatternHelpers_1 = __webpack_require__(21);
	function tryToParseRevealableBlock(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var keywords = args.settings.keywords;
	    var labelLinePattern = PatternHelpers_1.solelyAndIgnoringCapitalization(PatternHelpers_1.either.apply(void 0, keywords.revealable.map(PatternHelpers_1.escapeForRegex)) + PatternHelpers_1.optional(':'));
	    if (!markupLineConsumer.consume({ linePattern: labelLinePattern })) {
	        return false;
	    }
	    var contentLines = [];
	    getIndentedBlock_1.getIndentedBlock({
	        lines: markupLineConsumer.remaining(),
	        then: function (indentedLines, countLinesConsumed) {
	            contentLines.push.apply(contentLines, indentedLines);
	            markupLineConsumer.skipLines(countLinesConsumed);
	        }
	    });
	    if (!contentLines.length) {
	        return false;
	    }
	    var children = getOutlineSyntaxNodes_1.getOutlineSyntaxNodes({
	        markupLines: contentLines,
	        sourceLineNumber: args.sourceLineNumber + 1,
	        headingLeveler: args.headingLeveler,
	        settings: args.settings
	    });
	    args.then([new RevealableBlock_1.RevealableBlock(children)], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.tryToParseRevealableBlock = tryToParseRevealableBlock;
	//# sourceMappingURL=tryToParseRevealableBlock.js.map

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(47);
	var Paragraph_1 = __webpack_require__(102);
	var LineBlock_1 = __webpack_require__(41);
	var getInlineSyntaxNodes_1 = __webpack_require__(51);
	var Patterns_1 = __webpack_require__(22);
	var isLineFancyOutlineConvention_1 = __webpack_require__(88);
	var tryToPromoteMediaToOutline_1 = __webpack_require__(103);
	function parseParagraphOrLineBlock(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var inlineSyntaxNodesPerLine = [];
	    var isOnFirstLine = true;
	    var _loop_1 = function() {
	        var inlineSyntaxNodes;
	        var wasLineConsumed = markupLineConsumer.consume({
	            linePattern: Patterns_1.NON_BLANK_PATTERN,
	            if: function (line) { return isOnFirstLine || !isLineFancyOutlineConvention_1.isLineFancyOutlineConvention(line, args.settings); },
	            thenBeforeConsumingLine: function (line) {
	                inlineSyntaxNodes = getInlineSyntaxNodes_1.getInlineSyntaxNodes(line, args.settings);
	            }
	        });
	        isOnFirstLine = false;
	        if (!wasLineConsumed) {
	            return "break";
	        }
	        if (!inlineSyntaxNodes.length) {
	            return "continue";
	        }
	        var mediaPromotedToOutline = [];
	        tryToPromoteMediaToOutline_1.tryToPromoteMediaToOutline({
	            inlineSyntaxNodes: inlineSyntaxNodes,
	            then: function (outlineNodes) {
	                mediaPromotedToOutline = outlineNodes;
	            }
	        });
	        if (mediaPromotedToOutline.length) {
	            args.then(getAppropriateOutlineNodes(inlineSyntaxNodesPerLine, mediaPromotedToOutline), markupLineConsumer.countLinesConsumed);
	            return { value: void 0 };
	        }
	        inlineSyntaxNodesPerLine.push(inlineSyntaxNodes);
	    };
	    while (true) {
	        var state_1 = _loop_1();
	        if (typeof state_1 === "object") return state_1.value;
	        if (state_1 === "break") break;
	    }
	    args.then(getAppropriateOutlineNodes(inlineSyntaxNodesPerLine), markupLineConsumer.countLinesConsumed);
	}
	exports.parseParagraphOrLineBlock = parseParagraphOrLineBlock;
	function getAppropriateOutlineNodes(inlineSyntaxNodesPerLine, mediaPromotedToOutline) {
	    if (mediaPromotedToOutline === void 0) { mediaPromotedToOutline = []; }
	    var outlineNodes;
	    switch (inlineSyntaxNodesPerLine.length) {
	        case 0:
	            outlineNodes = [];
	            break;
	        case 1:
	            outlineNodes = [new Paragraph_1.Paragraph(inlineSyntaxNodesPerLine[0])];
	            break;
	        default:
	            var lineBlockLines = inlineSyntaxNodesPerLine.map(function (inlineNodes) {
	                return new LineBlock_1.LineBlock.Line(inlineNodes);
	            });
	            outlineNodes = [new LineBlock_1.LineBlock(lineBlockLines)];
	            break;
	    }
	    return outlineNodes.concat(mediaPromotedToOutline);
	}
	//# sourceMappingURL=parseParagraphOrLineBlock.js.map

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(28);
	var Paragraph = (function (_super) {
	    __extends(Paragraph, _super);
	    function Paragraph(children, options) {
	        _super.call(this, children);
	        this.sourceLineNumber = undefined;
	        if (options) {
	            this.sourceLineNumber = options.sourceLineNumber;
	        }
	    }
	    Paragraph.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    Paragraph.prototype.render = function (renderer) {
	        return renderer.paragraph(this);
	    };
	    Paragraph.prototype.PARAGRAPH = function () { };
	    return Paragraph;
	}(InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer));
	exports.Paragraph = Paragraph;
	//# sourceMappingURL=Paragraph.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isWhitespace_1 = __webpack_require__(85);
	var Link_1 = __webpack_require__(64);
	var MediaSyntaxNode_1 = __webpack_require__(68);
	function tryToPromoteMediaToOutline(args) {
	    var inlineSyntaxNodes = args.inlineSyntaxNodes, then = args.then;
	    var promotedNodes = [];
	    var _loop_1 = function(inlineNode) {
	        if (inlineNode instanceof MediaSyntaxNode_1.MediaSyntaxNode) {
	            promotedNodes.push(inlineNode);
	            return "continue";
	        }
	        if (inlineNode instanceof Link_1.Link) {
	            var wasAbleToPromoteChildrenToOutline = tryToPromoteMediaToOutline({
	                inlineSyntaxNodes: inlineNode.children,
	                then: function (promotableChildren) {
	                    promotedNodes.push(new Link_1.Link(promotableChildren, inlineNode.url));
	                }
	            });
	            if (!wasAbleToPromoteChildrenToOutline) {
	                return { value: false };
	            }
	            return "continue";
	        }
	        if (!isWhitespace_1.isWhitespace(inlineNode)) {
	            return { value: false };
	        }
	    };
	    for (var _i = 0, inlineSyntaxNodes_1 = inlineSyntaxNodes; _i < inlineSyntaxNodes_1.length; _i++) {
	        var inlineNode = inlineSyntaxNodes_1[_i];
	        var state_1 = _loop_1(inlineNode);
	        if (typeof state_1 === "object") return state_1.value;
	    }
	    if (promotedNodes.length) {
	        then(promotedNodes);
	        return true;
	    }
	    return false;
	}
	exports.tryToPromoteMediaToOutline = tryToPromoteMediaToOutline;
	//# sourceMappingURL=tryToPromoteMediaToOutline.js.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var InlineDocument_1 = __webpack_require__(105);
	var getInlineSyntaxNodes_1 = __webpack_require__(51);
	function parseInline(inlineMarkup, settings) {
	    var children = getInlineSyntaxNodes_1.getInlineSyntaxNodesForInlineDocument(inlineMarkup, settings);
	    return new InlineDocument_1.InlineDocument(children);
	}
	exports.parseInline = parseInline;
	//# sourceMappingURL=parseInline.js.map

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(28);
	var InlineDocument = (function (_super) {
	    __extends(InlineDocument, _super);
	    function InlineDocument() {
	        _super.apply(this, arguments);
	    }
	    InlineDocument.prototype.INLINE_DOCUMENT = function () { };
	    return InlineDocument;
	}(InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer));
	exports.InlineDocument = InlineDocument;
	//# sourceMappingURL=InlineDocument.js.map

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Up = __webpack_require__(17);
	var Renderer_1 = __webpack_require__(107);
	var HtmlElementHelpers_1 = __webpack_require__(108);
	var HtmlEscapingHelpers_1 = __webpack_require__(109);
	var PatternHelpers_1 = __webpack_require__(21);
	var HtmlRenderer = (function (_super) {
	    __extends(HtmlRenderer, _super);
	    function HtmlRenderer() {
	        _super.apply(this, arguments);
	    }
	    HtmlRenderer.prototype.renderDocument = function (document) {
	        this.reset();
	        return this.renderAll(document.children);
	    };
	    HtmlRenderer.prototype.renderInlineDocument = function (inlineDocument) {
	        this.reset();
	        return this.renderAll(inlineDocument.children);
	    };
	    HtmlRenderer.prototype.renderTableOfContents = function (tableOfContents) {
	        this.reset({ isInsideTableOfContents: true });
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('nav', [
	            this.tableOfContentsTitle(),
	            this.tableOfContentsEntries(tableOfContents.entries)
	        ], { class: classHtmlAttrValue("table-of-contents") });
	    };
	    HtmlRenderer.prototype.blockquote = function (blockquote) {
	        return this.htmlElement('blockquote', blockquote.children, htmlAttrsFor(blockquote));
	    };
	    HtmlRenderer.prototype.unorderedList = function (list) {
	        var _this = this;
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('ul', list.items.map(function (listItem) { return _this.unorderedListItem(listItem); }), htmlAttrsFor(list));
	    };
	    HtmlRenderer.prototype.orderedList = function (list) {
	        var _this = this;
	        var attrs = {};
	        var start = list.start();
	        if (start != null) {
	            attrs.start = start;
	        }
	        if (list.order() === Up.OrderedList.Order.Descending) {
	            attrs.reversed = HtmlElementHelpers_1.NO_ATTRIBUTE_VALUE;
	        }
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('ol', list.items.map(function (listItem) { return _this.orderedListItem(listItem); }), htmlAttrsFor(list, attrs));
	    };
	    HtmlRenderer.prototype.descriptionList = function (list) {
	        var _this = this;
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('dl', list.items.map(function (item) { return _this.descriptionListItem(item); }), htmlAttrsFor(list));
	    };
	    HtmlRenderer.prototype.lineBlock = function (lineBlock) {
	        var _this = this;
	        var attrs = htmlAttrsFor(lineBlock, { class: classHtmlAttrValue('lines') });
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('div', lineBlock.lines.map(function (line) { return _this.line(line); }), attrs);
	    };
	    HtmlRenderer.prototype.codeBlock = function (codeBlock) {
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('pre', [HtmlElementHelpers_1.htmlElement('code', codeBlock.code)], htmlAttrsFor(codeBlock));
	    };
	    HtmlRenderer.prototype.paragraph = function (paragraph) {
	        return this.htmlElement('p', paragraph.children, htmlAttrsFor(paragraph));
	    };
	    HtmlRenderer.prototype.heading = function (heading) {
	        var attrs = {};
	        if (heading.ordinalInTableOfContents) {
	            attrs.id = this.htmlIdOfActualEntryInDocument(heading);
	        }
	        return this.htmlElement('h' + Math.min(6, heading.level), heading.children, htmlAttrsFor(heading, attrs));
	    };
	    HtmlRenderer.prototype.thematicBreak = function (thematicBreak) {
	        return HtmlElementHelpers_1.singleTagHtmlElement('hr', htmlAttrsFor(thematicBreak));
	    };
	    HtmlRenderer.prototype.emphasis = function (emphasis) {
	        return this.htmlElement('em', emphasis.children);
	    };
	    HtmlRenderer.prototype.stress = function (stress) {
	        return this.htmlElement('strong', stress.children);
	    };
	    HtmlRenderer.prototype.italics = function (italics) {
	        return this.htmlElement('i', italics.children);
	    };
	    HtmlRenderer.prototype.bold = function (bold) {
	        return this.htmlElement('b', bold.children);
	    };
	    HtmlRenderer.prototype.inlineCode = function (inlineCode) {
	        return HtmlElementHelpers_1.htmlElement('code', inlineCode.code);
	    };
	    HtmlRenderer.prototype.exampleInput = function (exampleInput) {
	        return HtmlElementHelpers_1.htmlElement('kbd', exampleInput.input);
	    };
	    HtmlRenderer.prototype.sectionLink = function (sectionLink) {
	        var entry = sectionLink.entry;
	        var representation = entry
	            ? this.linkToActualEntryInDocument(entry)
	            : new Up.Italics([new Up.Text(sectionLink.sectionTitleSnippet)]);
	        return representation.render(this);
	    };
	    HtmlRenderer.prototype.normalParenthetical = function (normalParenthetical) {
	        return this.parenthetical(normalParenthetical);
	    };
	    HtmlRenderer.prototype.squareParenthetical = function (squareParenthetical) {
	        return this.parenthetical(squareParenthetical, 'square-brackets');
	    };
	    HtmlRenderer.prototype.highlight = function (highlight) {
	        return this.htmlElement('mark', highlight.children);
	    };
	    HtmlRenderer.prototype.inlineQuote = function (inlineQuote) {
	        return this.htmlElement('q', inlineQuote.children);
	    };
	    HtmlRenderer.prototype.inlineRevealable = function (inlineRevealable) {
	        return this.revealable({
	            revealableSyntaxNode: inlineRevealable,
	            tagNameForGenericContainers: 'span'
	        });
	    };
	    HtmlRenderer.prototype.revealableBlock = function (revealableBlock) {
	        return this.revealable({
	            revealableSyntaxNode: revealableBlock,
	            tagNameForGenericContainers: 'div',
	            attrsForOuterContainer: htmlAttrsFor(revealableBlock)
	        });
	    };
	    HtmlRenderer.prototype.referenceToFootnote = function (footnote) {
	        if (this.isInsideTableOfContents) {
	            return '';
	        }
	        return this.htmlElement('sup', [this.footnoteReferenceInnerLink(footnote)], {
	            id: this.footnoteReferenceHtmlId(footnote.referenceNumber),
	            class: classHtmlAttrValue('footnote-reference')
	        });
	    };
	    HtmlRenderer.prototype.footnoteBlock = function (footnoteBlock) {
	        var _this = this;
	        var attrs = htmlAttrsFor(footnoteBlock, {
	            class: classHtmlAttrValue('footnotes')
	        });
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('dl', footnoteBlock.footnotes.map(function (footnote) { return _this.footnoteInFootnoteBlock(footnote); }), attrs);
	    };
	    HtmlRenderer.prototype.table = function (table) {
	        var _this = this;
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('table', [
	            this.tableCaption(table.caption),
	            this.tableHeader(table.header),
	            table.rows.map(function (row) { return _this.tableRow(row); }).join('')
	        ], htmlAttrsFor(table));
	    };
	    HtmlRenderer.prototype.link = function (link) {
	        if (this.isInsideLink || !this.isUrlAllowed(link.url)) {
	            return this.renderAll(link.children);
	        }
	        this.isInsideLink = true;
	        var html = this.htmlElement('a', link.children, htmlAttrsFor(link, { href: link.url }));
	        this.isInsideLink = false;
	        return html;
	    };
	    HtmlRenderer.prototype.image = function (image) {
	        if (!this.isUrlAllowed(image.url)) {
	            return '';
	        }
	        var attrs = htmlAttrsFor(image, {
	            src: image.url,
	            alt: image.description,
	            title: image.description
	        });
	        return HtmlElementHelpers_1.singleTagHtmlElement('img', attrs);
	    };
	    HtmlRenderer.prototype.audio = function (audio) {
	        return this.playableMediaElement(audio, 'audio');
	    };
	    HtmlRenderer.prototype.video = function (video) {
	        return this.playableMediaElement(video, 'video');
	    };
	    HtmlRenderer.prototype.text = function (text) {
	        return HtmlEscapingHelpers_1.escapeHtmlContent(text.text);
	    };
	    HtmlRenderer.prototype.tableOfContentsTitle = function () {
	        var title = new Up.Heading([
	            new Up.Text(this.settings.terms.tableOfContents)], { level: 1 });
	        return title.render(this);
	    };
	    HtmlRenderer.prototype.tableOfContentsEntries = function (entries) {
	        var _this = this;
	        if (!entries.length) {
	            return '';
	        }
	        var listItems = entries.map(function (entry) {
	            return new Up.UnorderedList.Item([
	                _this.tableOfContentsEntry(entry)
	            ]);
	        });
	        return new Up.UnorderedList(listItems).render(this);
	    };
	    HtmlRenderer.prototype.tableOfContentsEntry = function (entry) {
	        return new Up.Heading([this.linkToActualEntryInDocument(entry)], { level: entry.level + 1 });
	    };
	    HtmlRenderer.prototype.linkToActualEntryInDocument = function (entry) {
	        return new Up.Link(entry.contentWithinTableOfContents(), fragmentUrl(this.htmlIdOfActualEntryInDocument(entry)));
	    };
	    HtmlRenderer.prototype.parenthetical = function (parenthetical) {
	        var extraCssClassNames = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            extraCssClassNames[_i - 1] = arguments[_i];
	        }
	        var attrs = {
	            class: classHtmlAttrValue.apply(void 0, ['parenthetical'].concat(extraCssClassNames))
	        };
	        return this.htmlElement('small', parenthetical.children, attrs);
	    };
	    HtmlRenderer.prototype.unorderedListItem = function (listItem) {
	        return this.htmlElement('li', listItem.children);
	    };
	    HtmlRenderer.prototype.orderedListItem = function (listItem) {
	        var attrs = {};
	        if (listItem.ordinal != null) {
	            attrs.value = listItem.ordinal;
	        }
	        return this.htmlElement('li', listItem.children, attrs);
	    };
	    HtmlRenderer.prototype.descriptionListItem = function (listItem) {
	        var _this = this;
	        return (listItem.subjects.map(function (subject) { return _this.descriptionSubject(subject); }).join('')
	            + this.description(listItem.description));
	    };
	    HtmlRenderer.prototype.descriptionSubject = function (subject) {
	        return this.htmlElement('dt', subject.children);
	    };
	    HtmlRenderer.prototype.description = function (description) {
	        return this.htmlElement('dd', description.children);
	    };
	    HtmlRenderer.prototype.line = function (line) {
	        return this.htmlElement('div', line.children);
	    };
	    HtmlRenderer.prototype.footnoteReferenceInnerLink = function (footnoteReference) {
	        var referenceNumber = footnoteReference.referenceNumber;
	        return new Up.Link([new Up.Text(referenceNumber.toString())], fragmentUrl(this.footnoteHtmlId(referenceNumber)));
	    };
	    HtmlRenderer.prototype.footnoteInFootnoteBlock = function (footnote) {
	        var linkBackToReferenceContainer = this.htmlElement('dt', [this.footnoteLinkBackToReference(footnote)], { id: this.footnoteHtmlId(footnote.referenceNumber) });
	        var bodyContainer = this.htmlElement('dd', footnote.children);
	        return linkBackToReferenceContainer + bodyContainer;
	    };
	    HtmlRenderer.prototype.footnoteLinkBackToReference = function (footnote) {
	        var referenceNumber = footnote.referenceNumber;
	        return new Up.Link([new Up.Text(referenceNumber.toString())], fragmentUrl(this.footnoteReferenceHtmlId(referenceNumber)));
	    };
	    HtmlRenderer.prototype.playableMediaElement = function (playableMedia, tagName) {
	        var url = playableMedia.url, description = playableMedia.description;
	        if (!this.isUrlAllowed(url)) {
	            return '';
	        }
	        var attrs = htmlAttrsFor(playableMedia, {
	            src: url,
	            title: description,
	            controls: HtmlElementHelpers_1.NO_ATTRIBUTE_VALUE
	        });
	        return this.htmlElement(tagName, this.playableMediaFallback(description, url), attrs);
	    };
	    HtmlRenderer.prototype.playableMediaFallback = function (content, url) {
	        return [new Up.Link([new Up.Text(content)], url)];
	    };
	    HtmlRenderer.prototype.revealable = function (args) {
	        var checkBoxIdParts = ['revealable', ++this.revealableContentCount];
	        if (this.isInsideTableOfContents) {
	            checkBoxIdParts.unshift('toc');
	        }
	        var checkboxId = this.idFor.apply(this, checkBoxIdParts);
	        var checkbox = HtmlElementHelpers_1.singleTagHtmlElement('input', {
	            id: checkboxId,
	            type: 'checkbox',
	            role: 'button'
	        });
	        var label = HtmlElementHelpers_1.htmlElement('label', this.settings.terms.revealContent, { for: checkboxId });
	        var revealableContent = this.htmlElement(args.tagNameForGenericContainers, args.revealableSyntaxNode.children, { role: 'alert' });
	        var attrsForOuterContainer = args.attrsForOuterContainer || {};
	        attrsForOuterContainer.class =
	            classHtmlAttrValue('revealable');
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren(args.tagNameForGenericContainers, [label, checkbox, revealableContent], attrsForOuterContainer);
	    };
	    HtmlRenderer.prototype.tableCaption = function (caption) {
	        return (caption
	            ? HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('caption', this.renderEach(caption.children))
	            : '');
	    };
	    HtmlRenderer.prototype.tableHeader = function (header) {
	        var _this = this;
	        var headerRow = HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('tr', header.cells.map(function (cell) { return _this.tableHeaderCell(cell, 'col'); }));
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('thead', [headerRow]);
	    };
	    HtmlRenderer.prototype.tableHeaderCell = function (cell, scope) {
	        return this.tableCell('th', cell, { scope: scope });
	    };
	    HtmlRenderer.prototype.tableRow = function (row) {
	        var _this = this;
	        var cells = row.cells.map(function (cell) { return _this.tableRowCell(cell); });
	        if (row.headerColumnCell) {
	            cells.unshift(this.tableHeaderCell(row.headerColumnCell, 'row'));
	        }
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren('tr', cells);
	    };
	    HtmlRenderer.prototype.tableRowCell = function (cell) {
	        return this.tableCell('td', cell);
	    };
	    HtmlRenderer.prototype.tableCell = function (tagName, cell, attrs) {
	        if (attrs === void 0) { attrs = {}; }
	        if (cell.isNumeric()) {
	            attrs.class = classHtmlAttrValue('numeric');
	        }
	        if (cell.countColumnsSpanned > 1) {
	            attrs.colspan = cell.countColumnsSpanned;
	        }
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren(tagName, this.renderEach(cell.children), attrs);
	    };
	    HtmlRenderer.prototype.htmlElement = function (tagName, children, attrs) {
	        if (attrs === void 0) { attrs = {}; }
	        return HtmlElementHelpers_1.htmlElementWithAlreadyEscapedChildren(tagName, this.renderEach(children), attrs);
	    };
	    HtmlRenderer.prototype.htmlIdOfActualEntryInDocument = function (entry) {
	        return this.idFor(this.settings.terms.sectionReferencedByTableOfContents, entry.ordinalInTableOfContents);
	    };
	    HtmlRenderer.prototype.footnoteHtmlId = function (referenceNumber) {
	        return this.idFor(this.settings.terms.footnote, referenceNumber);
	    };
	    HtmlRenderer.prototype.footnoteReferenceHtmlId = function (referenceNumber) {
	        return this.idFor(this.settings.terms.footnoteReference, referenceNumber);
	    };
	    HtmlRenderer.prototype.isUrlAllowed = function (url) {
	        return this.settings.renderDangerousContent || !UNSAFE_URL_SCHEME.test(url);
	    };
	    HtmlRenderer.prototype.reset = function (args) {
	        this.revealableContentCount = 0;
	        this.isInsideLink = false;
	        this.isInsideTableOfContents = args && args.isInsideTableOfContents;
	    };
	    return HtmlRenderer;
	}(Renderer_1.Renderer));
	exports.HtmlRenderer = HtmlRenderer;
	function htmlAttrsFor(node, attrs) {
	    if (attrs === void 0) { attrs = {}; }
	    if (node.sourceLineNumber) {
	        attrs['data-up-source-line'] = node.sourceLineNumber;
	    }
	    return attrs;
	}
	function classHtmlAttrValue() {
	    var classNames = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        classNames[_i - 0] = arguments[_i];
	    }
	    return classNames
	        .map(function (className) { return 'up-' + className; })
	        .join(' ');
	}
	function fragmentUrl(id) {
	    return '#' + id;
	}
	var UNSAFE_URL_SCHEME = PatternHelpers_1.patternIgnoringCapitalizationAndStartingWith(PatternHelpers_1.either('javascript', 'data', 'file', 'vbscript') + ':');
	//# sourceMappingURL=HtmlRenderer.js.map

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternPieces_1 = __webpack_require__(20);
	var Renderer = (function () {
	    function Renderer(settings) {
	        this.settings = settings;
	    }
	    Renderer.prototype.renderEach = function (nodes) {
	        var _this = this;
	        return nodes.map(function (node) { return node.render(_this); });
	    };
	    Renderer.prototype.renderAll = function (nodes) {
	        return this.renderEach(nodes).join('');
	    };
	    Renderer.prototype.idFor = function () {
	        var parts = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            parts[_i - 0] = arguments[_i];
	        }
	        var rawId = [this.settings.idPrefix].concat(parts).join(' ');
	        return rawId
	            .trim()
	            .replace(WHITESPACE_PATTERN, '-');
	    };
	    return Renderer;
	}());
	exports.Renderer = Renderer;
	var WHITESPACE_PATTERN = new RegExp(PatternPieces_1.SOME_WHITESPACE, 'g');
	//# sourceMappingURL=Renderer.js.map

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var HtmlEscapingHelpers_1 = __webpack_require__(109);
	function htmlElement(tagName, unescapedContent, attrs) {
	    if (attrs === void 0) { attrs = {}; }
	    return htmlElementWithAlreadyEscapedChildren(tagName, [HtmlEscapingHelpers_1.escapeHtmlContent(unescapedContent)], attrs);
	}
	exports.htmlElement = htmlElement;
	function htmlElementWithAlreadyEscapedChildren(tagName, escapedChildren, attrs) {
	    if (attrs === void 0) { attrs = {}; }
	    return (htmlStartTag(tagName, attrs)
	        + escapedChildren.join('')
	        + ("</" + tagName + ">"));
	}
	exports.htmlElementWithAlreadyEscapedChildren = htmlElementWithAlreadyEscapedChildren;
	function singleTagHtmlElement(tagName, attrs) {
	    if (attrs === void 0) { attrs = {}; }
	    return htmlStartTag(tagName, attrs);
	}
	exports.singleTagHtmlElement = singleTagHtmlElement;
	exports.NO_ATTRIBUTE_VALUE = null;
	function htmlAttr(attrs, attrName) {
	    var value = attrs[attrName];
	    return (value === exports.NO_ATTRIBUTE_VALUE
	        ? attrName
	        : attrName + "=\"" + HtmlEscapingHelpers_1.escapeHtmlAttrValue(value) + "\"");
	}
	function htmlAttrs(attrs) {
	    var alphabetizedAttrNames = Object.keys(attrs).sort();
	    return alphabetizedAttrNames.map(function (attrName) { return htmlAttr(attrs, attrName); });
	}
	function htmlStartTag(tagName, attrs) {
	    var tagNameWithAttrs = [tagName].concat(htmlAttrs(attrs)).join(' ');
	    return "<" + tagNameWithAttrs + ">";
	}
	//# sourceMappingURL=HtmlElementHelpers.js.map

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	function escapeHtmlContent(content) {
	    return escapeHtml(content, /[&<]/g);
	}
	exports.escapeHtmlContent = escapeHtmlContent;
	function escapeHtmlAttrValue(attrValue) {
	    return escapeHtml(String(attrValue), /[&"]/g);
	}
	exports.escapeHtmlAttrValue = escapeHtmlAttrValue;
	function escapeHtml(html, charsToEscape) {
	    return html.replace(charsToEscape, function (char) { return ESCAPED_HTML_ENTITIES_BY_CHAR[char]; });
	}
	var ESCAPED_HTML_ENTITIES_BY_CHAR = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '"': '&quot;'
	};
	//# sourceMappingURL=HtmlEscapingHelpers.js.map

/***/ },
/* 110 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = debounce;
	// Returns a version of `callback` that won't execute until `delay`
	// milliseconds after it was most recently invoked.
	function debounce(callback, delay) {
	  var timeoutHandle = void 0;

	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    clearTimeout(timeoutHandle);

	    timeoutHandle = setTimeout(function () {
	      callback.apply(undefined, args);
	    }, delay);
	  };
	}

/***/ },
/* 111 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = throttle;
	// Returns a version of `callback` that won't execute more than
	// once per `cooldown` period (in milliseconds).
	//
	// If the returned function is invoked during the cooldown period,
	// it will execute as soon as the cooldown period ends.
	function throttle(callback, cooldown) {
	  var isInCooldown = false,
	      wasInvokedDuringCooldown = false;

	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (isInCooldown) {
	      wasInvokedDuringCooldown = true;
	    } else {
	      isInCooldown = true;
	      executeAndScheduleEndOfCooldown();
	    }

	    function executeAndScheduleEndOfCooldown() {
	      callback.apply(undefined, args);
	      setTimeout(onEndOfCooldown, cooldown);
	    }

	    function onEndOfCooldown() {
	      if (wasInvokedDuringCooldown) {
	        executeAndScheduleEndOfCooldown();
	        wasInvokedDuringCooldown = false;
	      } else {
	        isInCooldown = false;
	      }
	    }
	  };
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "######################################\nUp (a markup language for web content)\n######################################\n\nUp is a [markup language] (wikipedia.org/wiki/Markup_language) that can be converted into HTML. This document is written in Up!\n\nAs a markup language, Up offers a set of (human-friendly) writing conventions for representing rich documents in plain text. To read more about those writing conventions, you can skip ahead to [topic: writing conventions].\n\nIf you're a software developer wondering how to incorporate Up into your next project, please see [topic: using the Up library].\n\n\n\n===========\nWhy use Up?\n===========\n\nUp isn't the only markup language that can be converted into HTML. Why should you use Up?\n\n- Up uses readable, customizable keywords\n  =======================================\n\n  Too many markup languages devolve into a dense soup of symbols and punctuation.\n\n  When a keyword would provide more clarity than a symbol, Up takes advantage of that! Many writing conventions, including [topic: tables] and [topic: revealable content], incorporate keywords.\n\n  If you're a software developer, you can provide multiple custom variations for each keyword. For more information, see [topic: customizing keywords].\n\n- Up offers a flexible, forgiving syntax\n  ======================================\n\n  * Up recognizes [topic: numbered lists] that count backwards.\n\n    Markup\n      ````\n      3) Buy milk\n      2) Buy bread\n      #) Buy happiness\n      ````\n\n    Output\n      3) Buy milk\n      2) Buy bread\n      #) Buy happiness\n\n  * Up isn't picky about which brackets you use for [topic: links].\n\n    Markup\n      ````\n      - Buy [milk] (wikipedia.org/wiki/Milk)\n      - Buy (bread) [wikipedia.org/wiki/Bread]\n      - Buy [sugar] [wikipedia.org/wiki/Sugar]\n      - Buy (happiness) (wikipedia.org/wiki/Happiness)\n      ````\n\n    Output\n      - Buy [milk] (wikipedia.org/wiki/Milk)\n      - Buy (bread) [wikipedia.org/wiki/Bread]\n      - Buy [sugar] [wikipedia.org/wiki/Sugar]\n      - Buy (happiness) (wikipedia.org/wiki/Happiness)\n\n  * Up ignores any [topic: excessive inflection].\n\n    For example, you don't need to perfectly balance asterisks when stressing or emphasizing text.\n\n    Markup\n      ````\n      I ***love****** asterisks!\n      ````\n\n    Output\n      I ***love****** asterisks!\n\n  * Up even supports [topic: overlapping].\n\n    Markup\n      ````\n      I *enjoy [highlight: sleeping* late] whenever I can.\n      ````\n\n    Output\n      I *enjoy [highlight: sleeping* late] whenever I can.\n\n- Up produces fully accessible HTML\n  =================================\n\n   From the table of contents to the last movie-ruining spoiler, Up produces fully-accessible HTML. This means people who have trouble viewing a screen or a using mouse can enjoy every document.\n\n\n\n=================\nWhy *not* use Up?\n=================\n\n- You want a rich ecosystem of tools\n  ==================================\n\n  So far, there is only one [software library for Up] (npmjs.com/package/write-up), written and maintained by a [single person] (github.com/start).\n\n  In contrast, [other markup languages] (duckduckgo.com/?q=markdown) have countless tools and plugins.\n\n- You need speed\n  ==============\n\n  Up is not terribly slow, but it's not terribly fast, either---at least not yet. If you need instant, real-time parsing and rendering of large documents, Up isn't the right markup language for you.\n\n- You want to embed HTML within your markup\n  =========================================\n\n  Some markup languages allow authors to embed HTML in their markup. Up does not.\n\n\n\n############################\nWriting conventions (syntax)\n############################\n\nDon't get lost! The following terms are occasionally used in this section:\n\nInline writing convention\n  Any writing convention that can be used inside paragraphs. This includes [topic: emphasis] and [topic: highlighting].\n\nOutline writing convention\n  Any non-inline writing convention. This includes [topic: paragraphs] and [topic: tables].\n\n\n==========\nParagraphs\n==========\n\nParagraphs are the simplest writing convention in Up.\n\nExample\n  Markup\n    ````\n    Unlike regular dental floss, you can use floss picks even if you're not a trained dental hygienist.\n\n    Floss picks are sold in stylish, resealable plastic bags. You have no excuse not to buy some today.\n    ````\n\n  Output\n    Unlike regular dental floss, you can use floss picks even if you're not a trained dental hygienist.\n\n    Floss picks are sold in stylish, resealable plastic bags. You have no excuse not to buy some today.\n\nDiscussion\n  To produce a paragraph, write a line of text. That's all there is to it!\n\n  Typically, paragraphs are separated by one or two blank lines. Three or more blank lines between paragraphs indicates a meaningful change of subject. For more information, see [topic: thematic breaks].\n\n  On the other hand, *consecutive* non-blank lines produce [topic: line blocks], not consecutive paragraphs!\n\n\n===========\nLine blocks\n===========\n\nUse the line block convention for addresses, lyrics, or for anything that should be represented by *lines* instead of distinct [topic: paragraphs].\n\nExample\n  Markup\n    ````\n    Have you read my new poem?\n    \n    Roses are red\n    Violets are blue\n    Lyrics have lines\n    And addresses do, too\n    \n    Poetry is just too easy.\n    ````\n\n  Output\n    Have you read my new poem?\n    \n    Roses are red\n    Violets are blue\n    Lyrics have lines\n    And addresses do, too\n    \n    Poetry is just too easy.\n\nDiscussion\n  Consecutive non-blank lines produce a line block---unless those lines represent another convention, like [topic: numbered lists].\n\n  Line blocks can contain any inline writing convention.\n\n\n==========\nInflection\n==========\n\nEmphasis\n========\n\nUse the emphasis convention to emphasize a word or phrase.\n\nIf the reader should pronounce a word or phrase differently (e.g. to indicate contrast or sarcasm), consider emphasizing it.\n\nExample\n  Markup\n    ````\n    Only eat the *green* grapes. The red grapes are for Pikachu.\n    ````\n\n  Output\n    Only eat the *green* grapes. The red grapes are for Pikachu.\n\nDiscussion\n  To emphasize text, enclose it within single asterisks.\n\n  Like most inline writing conventions, you can nest emphasis within itself.\n\nStress\n======\n\nUse the stress convention to indicate a word or phrase is particularly important.\n\nIf the reader should raise their voice while reading a word or phrase, consider stressing it.\n\nExample\n  Markup\n    ````\n    Do **not** step on the dinosaur!\n    ````\n\n  Output\n    Do **not** step on the dinosaur!\n\nDiscussion\n  To stress text, enclose it within double asterisks.\n\n\nItalics\n=======\n\nUse the italic convention to stylistically offset a word or phrase from the surrounding text. The titles of books and movies should probably be italicized.\n\nSome authors also use italics for unfamiliar foreign words.\n\nExample\n  Markup\n    ````\n    My favorite video game is _Chrono Cross_.\n    ````\n\n  Output\n    My favorite video game is _Chrono Cross_.\n\nDiscussion\n  To italicize text, enclose it within single underscores.\n\n\nBold\n====\n\nIf you want to make a word or phrase bold without conveying any extra importance, use the bold convention.\n\nThis convention should be used rarely. Usually, there's a more appropriate convention!\n\nIf you want to highlight text, see [topic: highlighting]. If you want to indicate the importance of a word of phrase, see [topic: stress].\n\nExample\n  Markup\n    ````\n    Has anyone actually used __KABOOM__ cleaning products?\n    ````\n\n  Output\n    Has anyone actually used  __KABOOM__ cleaning products?\n\nDiscussion\n  To make text bold, enclose it within double underscores.\n\n\nInline quotes\n=============\n\nUp automatically recognizes quoted text. You don't need to change how you use quotation marks.\n\nIf you want to quote more a few sentences, considering using [topic: blockquotes].\n\nExample\n  Markup\n    ````\n    \"Only eat the green grapes,\" John said.\n    ````\n\n  Output\n    \"Only eat the green grapes,\" John said.\n\nDiscussion\n  You already know how to use quotation marks! Just keep doing what you're doing.\n\n  Like most inline writing conventions, inline quotes can be nested within themselves.\n\n  Markup\n    ````\n    Bob replied, \"Yesterday, Harvey yelled \"I'll take the case!\", but I doubt he will.\"\n    ````\n\n  Output\n    Bob replied, \"Yesterday, Harvey yelled \"I'll take the case!\", but I doubt he will.\"\n\n\nExcessive inflection\n====================\n\nFor all five inflection conventions, Up ignores any excessive delimiter characters.\n\nMarkup\n  ````\n  This is a \"\"\"\"great\"\"\"\" pie.\n  ````\n\nOutput\n  This is a \"\"\"\"great\"\"\"\" pie.\n\nThis includes when delimiter characters aren't perfectly balanced on either side.\n\nMarkup\n  ````\n  My favorite video game is _Chrono Cross__.\n  ````\n\nOutput\n  My favorite video game is _Chrono Cross__.\n\n\n=====\nLinks\n=====\n\nYou already know what a link is!\n\nExample\n  Markup\n    ````\n    The [Game Boy] (wikipedia.org/wiki/Game_Boy) was my first video game system.\n    ````\n\n  Output\n    The [Game Boy] (wikipedia.org/wiki/Game_Boy) was my first video game system.\n\nDiscussion\n  A link consists of two parts: content and a URL.\n\n  To produce a link, simply enclose its content in square brackets or parentheses, then enclose its URL in square brackets or parentheses.\n\n  You can use mix and match either type of bracket---they're totally interchangeable.\n\n  Markup\n    ````\n    - Buy [milk] (wikipedia.org/wiki/Milk)\n    - Buy (bread) [wikipedia.org/wiki/Bread]\n    - Buy [sugar] [wikipedia.org/wiki/Sugar]\n    - Buy (happiness) (wikipedia.org/wiki/Happiness)\n    ````\n\n  Output\n    - Buy [milk] (wikipedia.org/wiki/Milk)\n    - Buy (bread) [wikipedia.org/wiki/Bread]\n    - Buy [sugar] [wikipedia.org/wiki/Sugar]\n    - Buy (happiness) (wikipedia.org/wiki/Happiness)\n\n  As demonstrated above, you can omit a link's [URL scheme] (wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax). If you do, Up assumes the link's URL scheme is `https://`.\n\n  If you're a software developer using the Up library, you can specify a different default URL scheme. For more information, see [topic: defaultUrlScheme]. Other URL-related settings are:\n\n  - [topic: baseForUrlsStartingWithSlash]\n  - [topic: baseForUrlsStartingWithHashMark]\n  - [topic: renderDangerousContent].\n\n\n  URLs that don't look like URLs\n  ==============================\n\n  If Up suspects you aren't intending to produce a link, it won't produce one. For example, Up won't produce a link if the potential URL contains spaces.\n\n  Markup\n    ````\n    Warlocked is the best game for GameBoy [sic] (other than Pokémon).\n    ````\n\n  Output\n    Warlocked is the best game for GameBoy [sic] (other than Pokémon).\n\n  To make it clear that you do intend to produce a link, omit the space between your link's content and its URL.\n\n  Markup\n    ````\n    I love the [music](duckduckgo.com/?q=chrono cross music) for Chrono Cross.\n    ````\n\n  Output\n    I love the [music](duckduckgo.com/?q=chrono cross music) for Chrono Cross.\n\n  If you omit the space between your link's content and its URL, Up will **always** produce a link.\n\n  These rules also apply when [topic: linkifying].\n\n\n================================================\nParentheticals (parentheses and square brackets)\n================================================\n\nUp automatically recognizes parenthetical text!\n\nYou don't need to change how you use parentheses or square brackets.\n\nExample\n  Markup\n    ````\n    When I was ten years old, I left my home (in Pallet Town) to search for Pokémon.\n    ````\n\n  Output\n    When I was ten years old, I left my home (in Pallet Town) to search for Pokémon.\n\nDiscussion\n  You already know how to use parentheses and square brackets! Up understands that text enclosed within them represents supplemental, de-emphasized content.\n\n\n============\nHighlighting\n============\n\nUse the highlighting convention to indicate a word a phrase is particularly relevant to the reader.\n\nHighlighted text is for drawing attention to text without altering its semantics. It should *not* be used to emphasize or stress text; if that's your purpose, see [topic: emphasis] or [topic: stress].\n\nExample\n  Markup\n    ````\n    Our cupcakes are vegan, [highlight: gluten-free], and made using only the most expensive ingredients.\n    ````\n\n  Output\n    Our cupcakes are vegan, [highlight: gluten-free], and made using only the most expensive ingredients.\n\nDiscussion\n  To highlight text, enclose it within square brackets or parentheses. Then, insert `highlight:` directly after your opening bracket.\n\n\n=============\nExample input\n=============\n\nUse the example input convention to represent user input, including:\n\n- Keys the user should press\n- Buttons the user should click\n- Menu items the user should access\n\nExample\n  Markup\n    ````\n     Press {esc} to quit.\n    ````\n\n  Output\n    Press {esc} to quit.\n\nDiscussion\n  To indicate that text represents user input, enclose the text within curly brackets.\n\n  Up ignores any spaces separating the curly brackets from the content they enclose.\n\n  Markup\n    ````\n    Press { Start Game } when you are ready.\n    ````\n  Output\n    Press { Start Game } when you are ready.\n\n  Within example input, most writing conventions are ignored. However, [topic: typographical writing conventions] are recognized, as is [topic: disabling].\n\n\n===========\nInline code\n===========\n\nUse the inline code convention to represent a small fragment of computer code.\n\nIf you need to represent more than a small fragment of computer code, use [topic: code blocks].\n\nExample\n  Markup\n    ````\n    In HTML, you probably shouldn't use the `<font>` element.\n    ````\n\n  Output\n    In HTML, you probably shouldn't use the `<font>` element.\n\nDiscussion\n  To indicate that text is a fragment of computer code, surround it with an equal number of backticks on either side.\n\n  Within your inline code, text is treated literally. Only one inline writing convention is recognized: [topic: disabling].\n\n\n  Including backticks in your inline code\n  =======================================\n\n  Within inline code, backticks can be escaped with a backslash.\n\n  Markup\n    ````\n    `let output = \\`score:\\` + 5`\n    ````\n\n  Output\n    `let output = \\`score:\\` + 5`\n\n  Alternatively, inline code can also contain streaks of *unescaped* backticks that aren't exactly as long as the delimiters.\n\n  In this example, the delimiters are **1** backtick long, so the inline code can contain streaks of **2** backticks:\n\n  Markup\n    ````\n    `let output = ``score:`` + 5`\n    ````\n\n  Output\n    `let output = ``score:`` + 5`\n\n  In this example, the delimiters are **2** backticks long, so the inline code can contain \"streaks\" of **1** backtick:\n\n  Markup\n    ````\n    ``let output = `score:` + 5``\n    ````\n\n  Output\n    ``let output = `score:` + 5``\n\n  ---------------------------------------------------\n  But my inline code starts (or ends) with backticks!\n  ---------------------------------------------------\n\n  If your inline code starts or ends with backticks, place a single space between the offending backticks and the outer delimiter. This single space is trimmed away. Here's an example of inline code that both starts and ends with backticks:\n\n  Markup\n    ````\n    `` `inline_code` ``\n    ````\n\n  Output\n    `` `inline_code` ``\n\n  Anything beyond that single space is preserved. If there are two spaces between the delimiter and the starting/ending backticks, only one is trimmed away.\n\n  Furthermore, that single space is only trimmed away when it's used to separate a delimiter from backticks in your inline code. If a given \"side\" of inline code has any non-space characters between the delimiter and the first backtick, nothing gets trimmed from that side.\n\n  Markup\n    ````\n    `` (`inline_code`) ``\n    ````\n\n  Output\n    `` (`inline_code`) ``\n\n\n========\nHeadings\n========\n\nUse the heading convention to introduce a new section in the document.\n\nExample\n  Markup\n    ````\n    Why I love breakfast cereal\n    ===========================\n    ````\n\n  Output\n    Why I love breakfast cereal\n    ===========================\n\nDiscussion\n  If text is underlined, it's treated as a heading. The underline can consist of any combination of the following characters:\n\n  - Hyphens: `-`\n  - Number signs: `#`\n  - Equal signs: `=`\n  - Plus signs: `+`\n  - Tildes: `~`\n  - Colons: `:`\n  - Asterisks: `*`\n  - At signs: `@`\n\n  A heading's underline must be at least three characters long, but it does *not* need to be the same length as the text of the heading.\n\n  Markup\n    ````\n    Why I hate bagels\n    ===\n    ````\n\n  Output\n    Why I hate bagels\n    ===\n\n\n  Heading levels\n  ==============\n\n  The first heading in a document is always a top-level heading. All subsequent headings with underlines consisting of the same characters are considered top-level.\n\n  The first heading with a different combination of underline characters is considered a second-level heading. Unsurprisingly, all subsequent headings with underlines consisting of the same characters are also considered second-level.\n\n  This process continues _ad infinitum_. Every new combination of heading underline characters introduces a new heading level. There is no limit to the number of heading levels in a document.\n\n\n  Headings with \"overlines\"\n  =========================\n\n  A heading can have an optional \"overline\", but its overline must consist of the same combination of characters as its underline.\n\n  Markup\n    ````\n    ---------------------------------\n    Reasons never to own a pet parrot\n    ---------------------------------\n    ````\n\n  Output\n    ---------------------------------\n    Reasons never to own a pet parrot\n    ---------------------------------\n\n  For the purpose of determining heading levels, a heading with an overline is always considered distinct from a heading without one, even if both headings use the same combination of underline characters.\n\n  Therefore, a heading with an overline will never have the same level as a heading without an overline.\n\n\n=============\nSection links\n=============\n\nUse the section link convention to link another section (heading) in your document.\n\nExample\n  Markup\n    ````\n    Unlike many markup languages, Up recognizes [topic: parentheticals].\n    ````\n\n  Output\n    Unlike many markup languages, Up recognizes [topic: parentheticals].\n\nDiscussion\n  To produce a section link:\n\n  1. Choose a snippet of text from the heading you want to link to\n  2. Enclose the snippet within square brackets or parentheses\n  3. Insert `topic:` or `section:` directly inside your opening bracket\n\n  That's all it takes! Up automatically matches your snippet to the most appropriate heading, then produces a link for you.\n\n\n  How does Up choose which heading matches your section link?\n  ===========================================================\n\n  Up tries to match your snippet to the first heading in the document whose text is an exact match with your snippet. If there isn't an exact match, Up will match your snippet to the first heading in the document whose text *contains* your snippet.\n\n  ---------------------------------------\n  Up ignores the heading's capitalization\n  ---------------------------------------\n\n  If your document has a heading whose text is \"TOOTHPASTE\", \"Toothpaste\" would be an exact match.\n\n  Markup\n    ````\n    Please see [topic: toothpaste].\n\n    TOOTHPASTE\n    ----------\n\n    Everyone should be excited about cleaning their teeth.\n    ````\n\n  Output\n    Please see [topic: toothpaste].\n\n    TOOTHPASTE\n    ----------\n\n    Everyone should be excited about cleaning their teeth.\n\n  --------------------------------------------------------\n  Up ignores any inline writing conventions in the heading\n  --------------------------------------------------------\n\n  If your document has a heading whose text is \"Everyone *loves* toothpaste\" (note the emphasis), \"everyone loves toothpaste\" would be an exact match.\n\n  Markup\n    ````\n    Please see [topic: everyone loves toothpaste].\n\n    Everyone *loves* toothpaste\n    ---------------------------\n\n    According to a recent survey, Americans prefer toothpaste to soda.\n    ````\n\n  Output\n    Please see [topic: everyone loves toothpaste].\n\n    Everyone *loves* toothpaste\n    ---------------------------\n\n    According to a recent survey, Americans prefer toothpaste to soda.\n\n\n=========\nFootnotes\n=========\n\nUse the footnote convention for asides or citations---anything you want to say without breaking the flow of a paragraph.\n\nFootnotes are automatically extracted into blocks for you.\n\nExample\n  Markup\n    ````\n    Pokémon Red begins in Pallet Town, [^ \"Pallet\" is probably a misspelling of \"palette\"] where Professor Oak gives Red his first Pokémon.\n    ````\n\n  Output\n    Pokémon Red begins in Pallet Town, [^ \"Pallet\" is probably a misspelling of \"palette\"] where Professor Oak gives Red his first Pokémon.\n\nDiscussion\n  To produce a footnote, enclose its content within parentheses or square brackets. Then, insert a caret `^` directly after your opening bracket.\n\n  Footnotes in a paragraph are replaced by superscripts containing the ordinal of the footnote within the document. These superscripts link to the actual content of the footnote in its footnote block.\n\n\n================================\nMedia (images, audio, and video)\n================================\n\nUp allows you to include images, audio, or video in your document.\n\nExample\n  Markup\n    ````\n    [image: DuckDuckGo's logo] (duckduckgo.com/assets/dax-alt.svg)\n    ````\n\n  Output\n    [image: DuckDuckGo's logo] (duckduckgo.com/assets/dax-alt.svg)\n\nDiscussion\n  To include media in your document, simply enclose its description in square brackets or parentheses, then enclose its URL in square brackets or parentheses.\n\n  You can use mix and match either type of bracket---they're totally interchangeable.\n\n\n  Media descriptions\n  ==================\n\n  Media descriptions **always** start with `image:`, `audio:`, or `video:`, depending on the type of media you wish to include.\n\n  Within media descriptions, [topic: typographical writing conventions] are recognized, as is [topic: disabling]. But other inline writing conventions are not recognized---you can't include revealable content or links, for example.\n\n\n  Media URLs\n  ==========\n\n  As demonstrated above, you can omit the [URL scheme] (wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax) for media. If you do, Up assumes the URL scheme is `https://`.\n\n  If you're a software developer using the Up library, you can specify a different default URL scheme. For more information, see [topic: defaultUrlScheme]. Other URL-related settings are:\n\n  - [topic: baseForUrlsStartingWithSlash]\n  - [topic: baseForUrlsStartingWithHashMark]\n  - [topic: renderDangerousContent].\n\n\n==================\nRevealable content\n==================\n\nSometimes, you want to give readers the option to avoid certain content. This includes:\n\n- Movie spoilers\n- Sexual content\n- Graphic/disturbing content\n\nTo facilitate this, Up supports revealable content.\n\n\nInline revealables\n==================\n\nUse the inline revealable convention to hide content within a paragraph.\n\nWhen you want to hide more than a sentence or two, use [topic: revealable blocks] instead.\n\nExample\n  Markup\n    ````\n    At the end of Pokémon Red, [SPOILER: you battle your rival] before the credits roll.\n    ````\n\n  Output\n    At the end of Pokémon Red, [SPOILER: you battle your rival] before the credits roll.\n\nDiscussion\n  To hide content within a paragraph, first enclose that content within square brackets or parentheses. Then, insert one of the [topic: revealable keywords] directly inside your opening bracket, followed by a colon.\n\n  Inline revealables can contain any inline writing convention.\n\n\nRevealable blocks\n==================\n\nUse revealable block convention to hide a block of content.\n\nWhen you want to hide content within a paragraph, use [topic: inline revealables] instead.\n\nExample\n  Markup\n    ````\n    SPOILER:\n      After defeating the Elite Four at the end of Pokémon Red, you still have to battle your rival one last time.\n\n      Your rival's specific lineup depends on the Pokémon you selected at the beginning of the game. However, his first three Pokémon are always the same:\n\n      1. Pidgeot\n      2. Alakazam\n      3. Rhydon\n    ````\n\n  Output\n    SPOILER:\n      After defeating the Elite Four at the end of Pokémon Red, you still have to battle your rival one last time.\n\n      Your rival's specific lineup depends on the Pokémon you selected at the beginning of the game. However, his first three Pokémon are always the same:\n\n      1. Pidgeot\n      2. Alakazam\n      3. Rhydon\n\nDiscussion\n  To hide a block of content, first indent it two spaces (or a tab). Then, on the line before your indented block, put one of the [topic: revealable keywords].\n\n  In the example above, the revealable keyword is followed by a colon. This isn't necessary.\n\n\nRevealable keywords\n===================\n\nBoth [topic: inline revealables] and [topic: revealable blocks] recognize any of the following keywords:\n\n- `spoiler`\n- `nsfw`\n- `nsfl`\n- `revealable`\n\nLike all keywords in Up, you can capitalize these keywords however you want.\n\n\n===========\nBlockquotes\n===========\n\nUse the blockquote convention to quote a large section of text.\n\nFor typical dialog, you should probably use [topic: inline quotes] instead.\n\nExample\n  Markup\n    ````\n    > I hate oranges for the following reasons:\n    >\n    > 1. They're not apples.\n    > 2. They're not bananas.\n    ````\n\n  Output\n    > I hate oranges for the following reasons:\n    >\n    > 1. They're not apples.\n    > 2. They're not bananas.\n\nDiscussion\n  A blockquote consists of consecutive lines starting with `> ` (a greater-than symbol followed by a space). The space after the `>` is optional, but it's encouraged for readability.\n\n  Blockquotes can contain any outline writing convention, including other blockquotes.\n\n  Markup\n    ````\n    > Thank you for replying to my blog!\n    >\n    > > I hate oranges for the following reasons:\n    > >\n    > > 1. They're not apples.\n    > > 2. They're not bananas.\n    >\n    > I completely understand.\n    ````\n\n  Output\n    > Thank you for replying to my blog!\n    >\n    > > I hate oranges for the following reasons:\n    > >\n    > > 1. They're not apples.\n    > > 2. They're not bananas.\n    >\n    > I completely understand.\n\n\n=================\nDescription lists\n=================\n\nUse the description list convention to represent a collection of subjects and their descriptions.\n\nYou can use description lists for:\n\n- Terms and definitions\n- Questions and answers\n- Any collection of subjects and descriptions!\n\n\nExample\n  Markup\n    ````\n    Kirby's Dreamland\n      A video game about a flying marshmallow.\n\n    Super Mario Land\n      A video game about a jumping plumber.\n    ````\n\n  Output\n    Kirby's Dreamland\n      A video game about a flying marshmallow.\n\n    Super Mario Land\n      A video game about a jumping plumber.\n\nDiscussion\n  Every item in a description list consists of two parts:\n\n  1. One or more subjects\n  2. A single description of those subjects\n\n\n  Subjects\n  ========\n\n  Subjects can contain any inline writing convention.\n\n  Markup\n    ````\n    Ash *Ketchum*\n      A ten year-old Pokémon trainer with an odd name.\n\n    Gary \"Smell You Later\" Oak\n      A ten year-old Pokémon trainer with a keen nose.\n    ````\n\n  Output\n    Ash *Ketchum*\n      A ten year-old Pokémon trainer with an odd name.\n\n    Gary \"Smell You Later\" Oak\n      A ten year-old Pokémon trainer with a keen nose.\n\n  When there is more than one subject for a given description, they should be listed consecutively, one per line.\n\n  Markup\n    ````\n    Game Boy Light\n    Game Boy Pocket\n    Game Boy Color\n      Handheld videogame systems released by Nintendo in the 1990s.\n    ````\n\n  Output\n    Game Boy Light\n    Game Boy Pocket\n    Game Boy Color\n      Handheld videogame systems released by Nintendo in the 1990s.\n\n\n  Descriptions\n  ============\n\n  Each description follows the subjects it describes.\n\n  Descriptions are indented 2 spaces (or a tab). They can contain any outline writing convention, including other description lists!\n\n  Markup\n    ````\n    Bulbasaur\n      A plant Pokémon with a bulb growing from its back.\n\n      Height\n        0.7 m\n      Weight\n        6.9 kg\n\n    Charmander\n      A fire Pokémon with a flame on its tail.\n\n      Height\n        0.6 m\n      Weight\n        8.5 kg\n\n  Output\n    Bulbasaur\n      A plant Pokémon with a bulb growing from its back.\n\n      Height\n        0.7 m\n      Weight\n        6.9 kg\n\n    Charmander\n      A fire Pokémon with a flame on its tail.\n\n      Height\n        0.6 m\n      Weight\n        8.5 kg\n\n  Each description may be followed by an optional blank line. If a description is followed by two blank lines, it marks the end of the description list.\n\n  Markup\n    ````\n    Lime\n      A green fruit.\n    Strawberry\n      A red fruit.\n\n\n    Bulbasaur\n      A green Pokémon.\n    Charmander\n      A red Pokémon.\n    ````\n\n  Output\n    Lime\n      A green fruit.\n    Strawberry\n      A red fruit.\n\n\n    Bulbasaur\n      A green Pokémon.\n    Charmander\n      A red Pokémon.\n\n\n===============\nThematic breaks\n===============\n\nUse the thematic break convention to represent a change of subject.\n\nA thematic break can be represented by 3 or more consecutive blank lines.\n\nMarkup\n  ````\n  I vowed never to eat apples again.\n\n\n\n  By mid-March, a second flock of birds had moved into my dining room.\n  ````\n\nOutput\n  I vowed never to eat apples again.\n\n\n\n  By mid-March, a second flock of birds had moved into my dining room.\n\nA thematic break can *also* be represented by a line consisting of 3 or more of the following characters:\n\n- Hyphens: `-`\n- Number signs: `#`\n- Equal signs: `=`\n- Plus signs: `+`\n- Tildes: `~`\n- Colons: `:`\n- Asterisks: `*`\n- At signs: `@`\n\nYou can use any combination of those characters!\n\nMarkup\n  ````\n  I vowed never to eat apples again.\n\n  =-=-=-=-=-=-=-=-=-=-=\n\n  By mid-March, a second flock of birds had moved into my dining room.\n  ````\n\nOutput\n  I vowed never to eat apples again.\n\n  =-=-=-=-=-=-=-=-=-=-=\n\n  By mid-March, a second flock of birds had moved into my dining room.\n\n\n===========\nCode blocks\n===========\n\nUse the code block convention to represent a block of computer code.\n\nIf you need to reference only a small fragment of computer code, use [topic: Inline code].\n\nExample\n  Markup\n    ````````\n    ```\n    function nthFibonacci(n: number): number {\n      return (\n        n <= 2\n        ? n - 1\n        : nthFibonacci(n - 1) + nthFibonacci(n - 2))\n    }\n    ```\n    ````````\n\n  Output\n    ```\n    function nthFibonacci(n: number): number {\n      return (\n        n <= 2\n        ? n - 1\n        : nthFibonacci(n - 1) + nthFibonacci(n - 2))\n    }\n    ```\n\nDiscussion\n  Code blocks are surrounded (underlined and \"overlined\") by matching streaks of 3 or more backticks.\n\n  If no matching end streak is found, the code block extends to the end of the document (or to the end of the current outline writing convention, if the code block is nested within one).\n\n  Within a code block, indentation is preserved, and every single character is treated literally. No conventions are evaluated, which means [topic: disabling] is not supported.\n\n\n  Including streaks of backticks within your code block\n  =====================================================\n\n  Code blocks can contain streaks of backticks that aren't exactly as long as the enclosing streaks.\n\n  Markup\n    `````````\n    ``````\n    A code block:\n\n    ```\n    function factorial(n: number): number {\n      return (\n        n <= 1\n          ? 1\n          : n * factorial(n - 1))\n    }\n    ```\n\n    See? Not so hard!\n    ``````\n    `````````\n\n  Output\n    ``````\n    A code block:\n\n    ```\n    function factorial(n: number): number {\n      return (\n        n <= 1\n          ? 1\n          : n * factorial(n - 1))\n    }\n    ```\n\n    See? Not so hard!\n    ``````\n\n\n==============\nBulleted lists\n==============\n\nYou already know what a bulleted list is!\n\nBulleted lists can contain any outline writing convention, including other bulleted lists.\n\nExample\n  Markup\n    ````\n    - Buy milk\n    - Buy bread\n    - Buy happiness\n    ````\n\n  Output\n    - Buy milk\n    - Buy bread\n    - Buy happiness\n\nDiscussion\n  Bullets\n  =======\n\n  Every bulleted list item starts with a bullet followed by a space. The following characters can serve as a bullet:\n\n  - A hyphen: `-`\n  - An asterisk: `*`\n  - An actual bullet character: `•`\n\n\n  Spacing between list items\n  ===========================\n\n  Each list item can be followed by a single blank line. This has no impact on the list itself.\n\n  Markup\n    ````\n    - Buy milk\n\n    - Buy bread\n\n    - Buy happiness\n    ````\n\n  Output\n    - Buy milk\n\n    - Buy bread\n\n    - Buy happiness\n\n  On the other hand, if a list item is followed by 2 blank lines, it marks the end of the list.\n\n  Markup\n    ````\n    - Buy milk\n    - Buy bread\n\n\n    - Fix squeaky cabinet\n    - Fix self-esteem\n    ````\n\n  Output\n    - Buy milk\n    - Buy bread\n\n\n    - Fix squeaky cabinet\n    - Fix self-esteem\n\n\n  List items consisting of multiple lines\n  =======================================\n\n  List items aren't limited to a single line!\n\n  If your list item contains more than one line, subsequent lines should be indented 2 spaces (or a tab).\n\n  Markup\n    ````\n    - Buy milk.\n\n      If whole milk is on sale, buy that. Otherwise, buy 2%.\n\n    - Buy bread.\n\n      Only buy bread from one of the following brands:\n\n      * Little Northern Bakehouse\n      * Udi's\n      * Canyon Bakehouse\n\n    - Buy happiness.\n\n      Don't spend more than a few cents on this.\n    ````\n\n  Output\n    - Buy milk.\n\n      If whole milk is on sale, buy that. Otherwise, buy 2%.\n\n    - Buy bread.\n\n      Only buy bread from one of the following brands:\n\n      * Little Northern Bakehouse\n      * Udi's\n      * Canyon Bakehouse\n\n    - Buy happiness.\n\n      Don't spend more than a few cents on this. Not worth it.\n\n\n==============\nNumbered lists\n==============\n\nYou already know what a numbered list is!\n\nNumbered lists can contain any outline writing convention, including other numbered lists.\n\nExample\n  Markup\n    ````\n    1. Buy milk\n    2. Buy bread\n    3. Buy happiness\n    ````\n\n  Output\n    1. Buy milk\n    2. Buy bread\n    3. Buy happiness\n\nDiscussion\n  Numbered lists are nearly identical to [topic: bulleted lists]! The only difference is that numbered list items have ordinals, not bullets.\n\n  The ordinal for a numbered list item can be expressed several ways:\n\n  1. An integer followed by a period: `1.`\n  2. An integer followed by a closing parenthesis: `1)`\n  3. A number sign: `#`\n  4. A number sign followed by a period: `#.`\n  5. A number sign followed by a closing parenthesis: `#)`\n\n  Like each bullet in a bulleted list, each ordinal in a numbered list must be followed by a space.\n\n\n  Lists starting at a specific number\n  ===================================\n\n  Numbered lists don't have to start at `1`.\n\n  Markup\n    ````\n    3) March\n    #) April\n    #) May\n    ````\n\n  Output\n    3) March\n    #) April\n    #) May\n\n\n  Lists in descending order\n  =========================\n\n  Up automatically recognizes when a numbered list is in descending order.\n\n  If a numered list has at least two items with *integer* ordinals (as opposed to number signs), and if the first two of those integers are in descending order, Up considers the list to be in descending order.\n\n  Markup\n    ````\n    3) Buy milk\n    2) Buy bread\n    #) Buy happiness\n    ````\n\n  Output\n    3) Buy milk\n    2) Buy bread\n    #) Buy happiness\n\n\n  Single-item numbered lists\n  ==========================\n\n  Like bulleted lists, numbered lists can consist of a single item.\n\n  Markup\n    ````\n    1) Buy milk\n    ````\n\n  Output\n    1) Buy milk\n\n  There's a small exception to this rule: If your list item's ordinal is expressed as an integer followed by a period (e.g. `1.`), you must have more than one list item. This exception helps prevent \"accidental\" numbered lists.\n\n  Markup\n    ````\n    1783. Not a good year for Great Britain.\n    ````\n\n  Output\n    1783. Not a good year for Great Britain.\n\n\n=================================\nTypographical writing conventions\n=================================\n\nConsecutive periods represent an ellipsis, so Up replaces them with a fancy ellipsis character.\n\nMarkup\n  ````\n  I don't know... I doubt a dog would do this.\n  ````\n\nOutput\n  I don't know... I doubt a dog would do this.\n\nIf you're a software developer using the Up library, you can specify a different fancy ellipsis (e.g. `⋯`). For more information, see [topic: fancyEllipsis].\n\nTwo consecutive hyphens produce an en dash.\n\nMarkup\n  ````\n  I agree -- to a extent -- with your plan to eat nothing but cereal.\n  ````\n\nOutput\n  I agree -- to a extent -- with your plan to eat nothing but cereal.\n\nThree consecutive hyphens produce an *em* dash.\n\nMarkup\n  ````\n  Use a spoon---a fork won't cut it.\n  ````\n\nOutput\n  Use a spoon---a fork won't cut it.\n\n\n======\nTables\n======\n\nYou already know what a table is! Use the table convention to display rows of data organized into columns.\n\nExample\n  Markup\n    ````\n    Table: Moves learned by the Pokémon Bulbasaur\n\n    Title;  Move;         Type;     Power;  Accuracy\n\n    1;      Tackle;       Normal;   50;     100%\n    3;      Growl;        Normal;   ;       100%\n    7;      Leech Seed;   Grass;    ;       90%\n    9;      Vine Whip;    Grass;    45;     100%\n    ````\n\n  Output\n    Table: Moves learned by the Pokémon Bulbasaur\n\n    Level;  Move;         Type;     Power;  Accuracy\n\n    1;      Tackle;       Normal;   50;     100%\n    3;      Growl;        Normal;   ;       100%\n    7;      Leech Seed;   Grass;    ;       90%\n    9;      Vine Whip;    Grass;    45;     100%\n\nDiscussion\n\n  A table consists of:\n\n  - An optional caption, representing the table's title\n  - A header row, describing each column\n  - Content rows, representing the actual data\n  - An optional header column, describing each row\n\n  Table cells are separated by semicolons. For more information, see [topic: cells].\n\n  Our examples use extra spaces to align cells. This makes our markup more readable, but it's strictly optional! If you want, you can squish your cells together, as long as any empty cells contain at least one space. For more information, please see [topic: empty cells].\n\n  Squished markup\n    ````\n    Table: My favorite fruits\n\n    Fruit;Color;Taste\n\n    Lime;Green;Sour\n    Lemon;Yellow;Sour\n    Banana;Yellow;Sweet\n    ````\n\n  Output\n    Table: My favorite fruits\n\n    Fruit;Color;Taste\n\n    Lime;Green;Sour\n    Lemon;Yellow;Sour\n    Banana;Yellow;Sweet\n\n\n  The caption\n  ===========\n\n  Tables start with a caption. Captions can contain any inline writing convention.\n\n  Markup\n    ````\n    Table: My *least* favorite fruits\n\n    Fruit;      Color;      Taste\n\n    Lime;       Green;      Sour\n    Lemon;      Yellow;     Sour\n    Banana;     Yellow;     Sweet\n    ````\n\n  Output\n    Table: My *least* favorite fruits\n\n    Fruit;      Color;      Taste\n\n    Lime;       Green;      Sour\n    Lemon;      Yellow;     Sour\n    Banana;     Yellow;     Sweet\n\n  Captions are strongly encouraged, but they're not required. To create a table without a caption, simply put \"Table\" on its own line.\n\n  Markup\n    ````\n    Table\n\n    Level;  Move;         Type;     Power;  Accuracy\n\n    1;      Tackle;       Normal;   50;     100%\n    3;      Growl;        Normal;   ;       100%\n    7;      Leech Seed;   Grass;    ;       90%\n    9;      Vine Whip;    Grass;    45;     100%\n    ````\n\n  Output\n    Table\n\n    Level;  Move;         Type;     Power;  Accuracy\n\n    1;      Tackle;       Normal;   50;     100%\n    3;      Growl;        Normal;   ;       100%\n    7;      Leech Seed;   Grass;    ;       90%\n    9;      Vine Whip;    Grass;    45;     100%\n\n\n  Cells\n  =====\n\n  Cells are separated by semicolons. If you want to include a semicolon in a cell, simply put a backslash before it. For more information, see [topic: disabling the special meaning of characters].\n\n  Markup\n    ````\n    Table: My favorite fruits\n\n    Fruit;      Reason for liking\n\n    Apples;     Easy to eat\\; lasts weeks in the fridge\n    Grapes;     Make me feel like Dionysus\n    Oranges;    The color orange is nice\n    ````\n\n  Output\n    Table: My favorite fruits\n\n    Fruit;      Reason for liking\n\n    Apples;     Easy to eat\\; lasts weeks in the fridge\n    Grapes;     Make me feel like Dionysus\n    Oranges;    The color orange is nice\n\n  -------------------------------\n  Cells spanning multiple columns\n  -------------------------------\n\n  If you want a cell to span two columns, terminate that cell with two semicolons.\n\n  Markup\n    ````\n    Table: My favorite fruits\n\n    Fruit;      Color;      Taste\n\n    Lime;       Green;      Sour\n    Orange;;                Sweet and tart\n    Banana;     Yellow;     Sweet\n    ````\n\n  Output\n    Table: My favorite fruits\n\n    Fruit;      Color;      Taste\n\n    Lime;       Green;      Sour\n    Orange;;                Sweet and tart\n    Banana;     Yellow;     Sweet\n\n  Likewise, if you want a cell to span six columns, terminate that cell with six semicolons.\n\n  -----------\n  Empty cells\n  -----------\n\n  A cell consisting solely of spaces (one or more) is considered empty.\n\n  Normally, you have to put at least one space in the cell, because consecutive semicolons indicate that you want the previous cell to span multiple columns.\n\n  However, to indicate that the *first* cell in a row should be empty, simply start that row with a semicolon. You don't need to put any spaces before it.\n\n  Markup\n    ````\n    Table: Games in the Chrono series\n\n    Release Date;       Game;\n\n    March 11, 1995;     Chrono Trigger\n    November 18, 1999;  Chrono Cross\n    ;                   Chrono Break\n    ````\n\n  Output\n    Table: Games in the Chrono series\n\n    Game;               Release Date\n\n    Chrono Trigger;     March 11, 1995\n    Chrono Cross;       November 18, 1999\n    Chrono Break;\n\n  Likewise, to indicate that the *last* cell in a row should be empty, simply end that row with a semicolon. You don't need to add any spaces after it.\n\n  Markup\n    ````\n    Table: Games in the Chrono series\n\n    Game;               Release Date\n\n    Chrono Trigger;     March 11, 1995\n    Chrono Cross;       November 18, 1999\n    Chrono Break;\n    ````\n\n  Output\n    Table: Games in the Chrono series\n\n    Game;               Release Date\n\n    Chrono Trigger;     March 11, 1995\n    Chrono Cross;       November 18, 1999\n    Chrono Break;\n\n\n  The header row\n  ==============\n\n  The header defines each column in the table.\n\n  The single blank lines before and after the header are not required.\n\n  Markup\n    ````\n    Table: Moves learned by the Pokémon Bulbasaur\n    Level;  Move;         Type;     Power;  Accuracy\n    1;      Tackle;       Normal;   50;     100%\n    3;      Growl;        Normal;   ;       100%\n    7;      Leech Seed;   Grass;    ;       90%\n    9;      Vine Whip;    Grass;    45;     100%\n    ````\n\n  Output\n    Table: Moves learned by the Pokémon Bulbasaur\n    Level;  Move;         Type;     Power;  Accuracy\n    1;      Tackle;       Normal;   50;     100%\n    3;      Growl;        Normal;   ;       100%\n    7;      Leech Seed;   Grass;    ;       90%\n    9;      Vine Whip;    Grass;    45;     100%\n\n  Cells in a table's header can contain any inline writing convention.\n\n\n  Content rows\n  ============\n\n  The \"content rows\" of a table follow its header row. The content rows contain the table's actual data.\n\n  If a content row is followed by a blank line, it ends the table.\n\n  Markup\n    ````\n    Table: Moves learned by the Pokémon Bulbasaur\n\n    Level;  Move;         Type;     Power;  Accuracy\n\n    1;      Tackle;       Normal;   50;     100%\n    3;      Growl;        Normal;   ;       100%\n    7;      Leech Seed;   Grass;    ;       90%\n    9;      Vine Whip;    Grass;    45;     100%\n\n    With moves *that* exciting, I had to choose Bulbasaur!\n\n    ````\n\n  Output\n    Table: Moves learned by the Pokémon Bulbasaur\n\n    Level;  Move;         Type;     Power;  Accuracy\n\n    1;      Tackle;       Normal;   50;     100%\n    3;      Growl;        Normal;   ;       100%\n    7;      Leech Seed;   Grass;    ;       90%\n    9;      Vine Whip;    Grass;    45;     100%\n\n    With moves *that* exciting, I had to choose Bulbasaur!\n\n  Content row cells can contain any inline writing convention.\n\n\n  Including a header column in your table\n  =======================================\n\n  To indicate your table has a header column, simply indent the header *row* at least two spaces (or a tab)! The first cell in each row is treated as its header column.\n\n  Markup\n    ````\n    Table: Moves learned by the Pokémon Bulbasaur\n\n                  Level;    Type;     Power;  Accuracy\n\n    Tackle;       1;        Normal;   50;     100%\n    Growl;        3;        Normal;   ;       100%\n    Leech Seed;   7;        Grass;    ;       90%\n    Vine Whip;    9;        Grass;    45;     100%\n    ````\n\n  Output\n    Table: Moves learned by the Pokémon Bulbasaur\n\n                  Level;    Type;     Power;  Accuracy\n\n    Tackle;       1;        Normal;   50;     100%\n    Growl;        3;        Normal;   ;       100%\n    Leech Seed;   7;        Grass;    ;       90%\n    Vine Whip;    9;        Grass;    45;     100%\n\n\nWhen your table has a header column, Up automatically inserts an extra blank cell at the beginning of the header row in the top level corner, above the header column.\n\n\n=====================================\nLinkifying another writing convention\n=====================================\n\nYou can put [topic: images] inside of [topic: links]. However, the syntax can be a bit messy.\n\nMessy markup\n  ````\n  [(image: DuckDuckGo's logo) (duckduckgo.com/assets/dax-alt.svg)] [duckduckgo.com]\n  ````\n\nOutput\n  [(image: DuckDuckGo's logo) (duckduckgo.com/assets/dax-alt.svg)] [duckduckgo.com]\n\nThat's a lot of brackets! Luckily, there's a shortcut.\n\nSimply place the \"linkifying\" URL after the image's own URL, and Up will produce a link for you.\n\nCleaner markup\n  ````\n  [image: DuckDuckGo's logo] [duckduckgo.com/assets/dax-alt.svg] (duckduckgo.com)\n  ````\n\nOutput\n  [image: DuckDuckGo's logo] [duckduckgo.com/assets/dax-alt.svg] (duckduckgo.com)\n\nThis shortcut also works for the following conventions:\n\n- [topic: Highlighting]\n- [topic: Example input]\n- [topic: Footnotes]\n- [topic: Inline revealables]\n\nMarkup\n  ````\n  At the end of Pokémon Red, [SPOILER: you battle your rival] (pokemon.wikia.com/wiki/Rival) before the credits roll.\n  ````\n\nOutput\n  At the end of Pokémon Red, [SPOILER: you battle your rival] (pokemon.wikia.com/wiki/Rival) before the credits roll.\n\n\n======================================\nOverlapping inline writing conventions\n======================================\n\nIn Up, inline writing conventions can freely overlap.\n\nMarkup\n  ````\n  I *enjoy [highlight: sleeping* late] whenever I can.\n  ````\n\nOutput\n  I *enjoy [highlight: sleeping* late] whenever I can.\n\n\nSuperficial overlapping\n=======================\n\nIf conventions overlap superficially---only by their start or end delimiters---Up pretends they weren't overlapped at all.\n\nMarkup\n  ````\n  At the very end of Pokémon Red, [SPOILER: you must battle your rival *yet again]* before the credits roll.\n  ````\n\nOutput\n  At the very end of Pokémon Red, [SPOILER: you must battle your rival *yet again]* before the credits roll.\n\n\n===========================================\nDisabling the special meaning of characters\n===========================================\n\nTo disable the special meaning of a character, put a backslash before it.\n\nExample\n  ````\n  I love \\*asterisks*!\n  ````\n\nOutput\n  I love \\*asterisks\\*!\n\nLikewise, to disable the special meaning of a backslash, put another backslash before it.\n\nExample\n  ````\n  My favorite kind of slash is the backslash: \\\\. What is yours?\n  ````\n\nOutput\n  My favorite kind of slash is the backslash: \\\\. What is yours?\n\n\n\n####################\nUsing the Up library\n####################\n\nThe Up library can be [found on NPM] (npmjs.com/package/write-up).\n\n\n============\nInstallation\n============\n\n````\nnpm install write-up --save-dev\n````\n\n\n==============\nUsage Overview\n==============\n\nFirst, `require` the library.\n\n````\nconst Up = require('write-up')\n````\n\nHooray! `Up` now serves as the namespace for the library.\n\nTypically, you'll want to use the various functions within that namespace, such as [topic: Up.parseAndRender].\n\n````\nconst html = Up.parseAndRender(markup, settings)\n````\n\nFor a full description of the functions you can use, please see [topic: functions].\n\nAlternatively, you can create an instance of the `Up.Transformer` class. This can be useful if you need to parse or render several documents all sharing custom settings. For more information, see [topic: Up.Transformer].\n\n\n=========\nFunctions\n=========\n\n`Up.parseAndRender`\n==================\n\nThis method converts Up markup into HTML and returns the result.\n\nArguments\n  `markup`: `string`\n    The Up markup to convert into HTML.\n  `settings` (optional): [topic: Up.UserProvidedSettings]\n    The custom parsing and/or rendering settings to apply.\n\nReturn type: `string`\n  This method returns HTML representing the rendered document.\n\nUsage\n  Without custom settings\n    ````\n    const html = Up.parseAndRender(markup)\n    ````\n\n  With custom settings\n    ````\n    const html = Up.parseAndRender(markup, {\n      parsing: {\n        createSourceMap: true,\n        keywords: { highlight: \"mark\" }\n      },\n      rendering: {\n        idPrefix: \"article\"\n      }\n    })\n    ````\n\n\n`Up.parseAndRenderDocumentAndTableOfContents`\n=============================================\n\nThis method converts Up markup into two pieces of HTML, both of which are returned:\n\n1. A table of contents\n2. The document itself\n\nArguments\n  `markup`: `string`\n    The Up markup to parse and render.\n  `settings` (optional): [topic: Up.UserProvidedSettings]\n    The custom parsing and/or rendering settings to apply.\n\nReturn type: [topic: Up.RenderedDocumentAndTableOfContents]\n  This method returns HTML representing the rendered document and table of contents.\n\nUsage\n  Without custom settings\n    ````\n    const { tableOfContentsHtml, documentHtml } =\n      Up.parseAndRenderDocumentAndTableOfContents(markup)\n    ````\n\n  With custom settings\n    ````\n    const { tableOfContentsHtml, documentHtml } =\n      Up.parseAndRenderDocumentAndTableOfContents(markup, {\n        parsing: {\n          createSourceMap: true,\n          keywords: { highlight: \"mark\" }\n        },\n        rendering: {\n          idPrefix: \"article\",\n          terms: { tableOfContents: \"In This Article\" }\n        }\n      })\n    ````\n\n\n`Up.parseAndRenderInline`\n=========================\n\nThis method converts inline Up markup into inline HTML and returns the result.\n\nFor more information about inline documents, see [topic: inline documents].\n\nArguments\n  `inlineMarkup`: `string`\n    The inline Up markup to convert into inline HTML.\n  `parsingSettings` (optional): [topic: Up.UserProvidedSettings]\n    The custom parsing and/or rendering settings to apply.\n\nReturn type: `string`\n  This method returns HTML representing the rendered inline document.\n\nUsage\n  Without custom settings\n    ````\n    const html = Up.parseAndRenderInline(markup)\n    ````\n\n  With custom settings\n    ````\n    const html = Up.parseAndRenderInline(markup, {\n      parsing: {\n        baseForUrlsStartingWithSlash: \"https://example.com/en-us\",\n        keywords: { highlight: \"mark\" }\n      },\n      rendering: {\n        idPrefix: \"byline\",\n        terms: {\n          footnoteReference: \"footnote mention\",\n          revealContent: \"show\"\n        }\n      }\n    })\n    ````\n\n\n`Up.parse`\n==========\n\nThis method parses Up markup and returns the resulting syntax tree.\n\nArguments\n  `markup`: `string`\n    The Up markup to parse.\n\n  `parsingSettings` (optional): [topic: Up.UserProvidedSettings.Parsing]\n    The custom parsing settings to apply.\n\nReturn type: [topic: Document]\n  This method returns a syntax tree representing the parsed document.\n\nUsage\n  Without custom settings\n    ````\n    const html = Up.parse(markup)\n    ````\n\n  With custom settings\n    ````\n    const document = Up.parse(markup, {\n      createSourceMap: true,\n      keywords: { highlight: \"mark\" }\n    })\n    ````\n\n\n`Up.parseInline`\n================\n\nThis method parses inline Up markup and returns the resulting inline syntax tree.\n\nFor more information about inline documents, see [topic: inline documents].\n\nArguments\n  `inlineMarkup`: `string`\n    The inline Up markup to parse.\n\n  `parsingSettings` (optional): [topic: Up.UserProvidedSettings.Parsing]\n    The custom parsing settings to apply.\n\nReturn type: [topic: Up.InlineDocument]\n  This method returns an inline syntax tree representing the parsed document.\n\nUsage\n  Without custom settings\n    ````\n    const html = Up.parseInline(markup)\n    ````\n\n  With custom settings\n    ````\n    const html = Up.parseInline(markup, {\n      baseForUrlsStartingWithSlash: \"https://example.com/en-us\",\n      keywords: { highlight: \"mark\" }\n    })\n    ````\n\n\n`Up.render`\n===========\n\nThis method converts a syntax tree into HTML and returns the result.\n\nArguments\n  `document`: [topic: Document]\n    The syntax tree to convert into HTML.\n\n  `renderingSettings` (optional): [topic: Up.UserProvidedSettings.Rendering]\n    The custom rendering settings to apply.\n\nReturn type: `string`\n  This method returns HTML representing the rendered document.\n\nUsage\n  Without custom settings\n    ````\n    const html = Up.render(document)\n    ````\n\n  With custom settings\n    ````\n    const html = Up.render(document, {\n      idPrefix: \"article\",\n      terms: {\n        footnoteReference: \"footnote mention\",\n        revealContent: \"show\"\n      }\n    })\n    ````\n\n\n`Up.renderDocumentAndTableOfContents`\n=====================================\n\nThis method converts a syntax tree into two pieces of HTML, both of which are returned:\n\n1. A table of contents\n2. The document itself\n\nArguments\n  `document`: [topic: Document]\n    The syntax tree to convert into HTML.\n\n  `renderingSettings` (optional): [topic: Up.UserProvidedSettings.Rendering]\n    The custom rendering settings to apply.\n\nReturn type: [topic: Up.RenderedDocumentAndTableOfContents]\n  This method returns HTML representing the rendered document and table of contents.\n\nUsage\n  Without custom settings\n    ````\n    const { tableOfContentsHtml, documentHtml } =\n      Up.renderDocumentAndTableOfContents(document)\n    ````\n\n  With custom settings\n    ````\n    const { tableOfContentsHtml, documentHtml } =\n      Up.renderDocumentAndTableOfContents(document, {\n        idPrefix: \"article\",\n        terms: { tableOfContents: \"In This Article\" }\n      })\n    ````\n\n\n`Up.renderInline`\n================\n\nThis method converts an inline syntax tree into inline HTML and returns the result.\n\nFor more information about inline documents, see [topic: inline documents].\n\nArguments\n  `inlineDocument`: [topic: Up.InlineDocument]\n    The inline syntax tree to convert into HTML.\n\n  `renderingSettings` (optional): [topic: Up.UserProvidedSettings.Rendering]\n    The custom rendering settings to apply.\n\nReturn type: `string`\n  This method returns HTML representing the rendered inline document.\n\nUsage\n  Without custom settings\n    ````\n    const html = Up.renderInline(inlineDocument)\n    ````\n\n  With custom settings\n    ````\n    const html = Up.renderInline(inlineDocument, {\n      idPrefix: \"byline\",\n      terms: {\n        footnoteReference: \"footnote mention\",\n        revealContent: \"show\"\n      }\n    })\n    ````\n\n\n=======================================\n`Up.RenderedDocumentAndTableOfContents`\n=======================================\n\nThis interface represents the HTML for a rendered document and table of contents.\n\nMembers\n  `tableOfContentsHtml`: `string`\n    The HTML for the table of contents.\n\n  `documentHtml`: `string`\n    The HTML for the document itself.\n\nNotes\n  The following functions return an object satisfying this interface:\n\n  - [topic: Up.parseAndRenderDocumentAndTableOfContents]\n  - [topic: Up.renderDocumentAndTableOfContents]\n  \n\n\n=============\nConfiguration\n=============\n\nAll functions accept custom settings!\n\nFor a full description of Up's functions, see [topic: functions].\n\n\n`Up.UserProvidedSettings`\n======================\n\nSummary\n  The `UserProvidedSettings` interface includes both parsing settings and rendering settings.\n\n  Use this interface to provide custom settings to functions that both parse markup *and* render the result to HTML:\n\n  - [topic: Up.parseAndRender]\n  - [topic: Up.parseAndRenderDocumentAndTableOfContents]\n  - [topic: Up.parseAndRenderInline]\n\nUsage\n  ````\n  const html = Up.parseAndRender(markup, {\n    parsing: {\n      createSourceMap: true,\n      keywords: { highlight: \"mark\" }\n    },\n    rendering: {\n      idPrefix: \"article\"\n    }\n  })\n  ````\n\nMembers (both of which are optional)\n  `parsing`: [topic: Up.UserProvidedSettings.Parsing]\n    The custom parsing settings to apply.\n\n  `rendering`: [topic: Up.UserProvidedSettings.Rendering]\n    The custom rendering settings to apply.\n\n\n`Up.UserProvidedSettings.Parsing`\n=================================\n\nSummary\n  The `UserProvidedSettings.Parsing` interface includes all parsing settings.\n\n  Use this interface to provide custom settings to functions that parse markup and return the resulting syntax tree:\n\n  - [topic: Up.parse]\n  - [topic: Up.parseInline]\n\n  As part of [topic: Up.UserProvidedSettings], this interface also provides custom settings to functions that both parse markup *and* render the result to HTML:\n\n  - [topic: Up.parseAndRender]\n  - [topic: Up.parseAndRenderDocumentAndTableOfContents]\n  - [topic: Up.parseAndRenderInline]\n\nUsage\n  ````\n  const document = Up.parse(markup, {\n    createSourceMap: true,\n    keywords: {\n      audio: [\"sound\", \"song\"],\n      highlight: \"mark\"\n    }\n  })\n  ````\n\nMembers (all of which are optional)\n  [topic: createSourceMap]: `boolean`\n    Enables source mapping.\n\n  [topic: defaultUrlScheme]: `string`\n    The default URL scheme for URLs without one.\n\n  [topic: baseForUrlsStartingWithSlash]: `string`\n    The base for URLs starting with `/`.\n\n  [topic: baseForUrlsStartingWithHashMark]: `string`\n    The base for URLs starting with `#`.\n\n  [topic: fancyEllipsis]: `string`\n    Up replaces consecutive periods with this fancy ellipsis.\n\n  `keywords` (all of which are optional)\n\n    --------------------\n    Customizing keywords\n    --------------------\n\n    You can provide unlimited custom variations for each keyword. Custom keyword variations do not overwrite the default keywords.\n\n    ````\n    const document = Up.parse(markup, {\n      keywords: {\n        audio: [\"sound\", \"song\"],\n        highlight: \"mark\"\n      }\n    })\n    ````\n\n    Like the default keywords, any custom keyword variations are case-insensitive.\n\n    `audio`: `string` or `string[]`\n      Recognized by [topic: audio].\n\n    `highlight`: `string` or `string[]`\n      Recognized by [topic: highlighting].\n\n    `image`: `string` or `string[]`\n      Recognized by [topic: images].\n\n    `revealable`: `string` or `string[]`\n      Recognized by [topic: inline revealables] and [topic: revealable blocks].\n\n    `sectionLink`: `string` or `string[]`\n      Recognized by [topic: section links].\n\n    `table`: `string` or `string[]`\n      Recognized by [topic: tables].\n\n    `video`: `string` or `string[]`\n      Recognized by [topic: video].\n\n\n-----------------\n`createSourceMap`\n-----------------\n\nSummary\n  When `createSourceMap` is enabled, Up keeps track of the original line number for every instance of every outline writing convention.\n\n  This document uses source mapping to synchronize the scrolling between itself and its markup.\n\nDefault\n  `false`\n\nUsage\n  ````\n  const html = Up.parseAndRender(markup, {\n    parsing: {\n      createSourceMap: true\n    }\n  })\n  ````\n\nContext\n  This setting belongs to [topic: Up.UserProvidedSettings.Parsing].\n\nDetails\n  `createSourceMap` works by setting the `sourceLineNumber` of each `OutlineSyntaxNode`. Source line numbers start at `1`, not `0`.\n\n  When these syntax nodes are rendered to HTML, the HTML elements they produce each have a `data-up-source-line` attribute set the appropriate line number.\n\n\n------------------\n`defaultUrlScheme`\n------------------\n\nSummary\n  The `defaultUrlScheme` is prefixed to any link URL or media URL without a [URL scheme] (wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax).\n\n  For URLs *with* a URL scheme, this setting has no effect. Furthermore, this setting is not applied to URLs that start with `/` or `#`. For those URLs, see [topic: baseForUrlsStartingWithSlash] or [topic: baseForUrlsStartingWithHashMark].\n\nDefault\n  `\"https://\"`\n\nUsage\n  ````\n  const html = Up.parseAndRender(markup, {\n    parsing: {\n      defaultUrlScheme: \"my-app://\"\n    }\n  })\n  ````\n\nContext\n  This setting belongs to [topic: Up.UserProvidedSettings.Parsing].\n\n\n------------------------------\n`baseForUrlsStartingWithSlash`\n------------------------------\n\nSummary\n  The `baseForUrlsStartingWithSlash` is prefixed to any link URL or media URL starting with `/`.\n\nDefault\n  `\"\"` (an empty string)\n\nUsage\n  ````\n  const html = Up.parseAndRender(markup, {\n    parsing: {\n      baseForUrlsStartingWithSlash: \"https://example.com/blog/\"\n    }\n  })\n  ````\n\nContext\n  This setting belongs to [topic: Up.UserProvidedSettings.Parsing].\n\n\n---------------------------------\n`baseForUrlsStartingWithHashMark`\n---------------------------------\n\nSummary\n  The `baseForUrlsStartingWithSlash` is prefixed to any link URL or media URL starting with `#`.\n\nDefault\n  `\"\"` (an empty string)\n\nUsage\n  ````\n  const html = Up.parseAndRender(markup, {\n    parsing: {\n      baseForUrlsStartingWithHashMark: \"https://example.com/blog/post/28\"\n    }\n  })\n  ````\n\nContext\n  This setting belongs to [topic: Up.UserProvidedSettings.Parsing].\n\n\n---------------\n`fancyEllipsis`\n---------------\n\nSummary\n  Up automatically replaces consecutive periods with `fancyEllipsis`.\n\n  By default, `fancyEllipsis` is `…`. If you you want Up to use a different fancy ellipsis (e.g. `⋯` or even `. . .`), set `fancyEllipsis` accordingly.\n\nDefault\n  `\"…\"`\n\nUsage\n  ````\n  const html = Up.parseAndRender(markup, {\n    parsing: {\n      fancyEllipsis: \"⋯\"\n    }\n  })\n  ````\n\nContext\n  This setting belongs to [topic: Up.UserProvidedSettings.Parsing].\n\n\n`Up.UserProvidedSettings.Rendering`\n===================================\n\nSummary\n  The `UserProvidedSettings.Parsing` interface includes all rendering settings.\n\n  Use this interface to provide custom settings to functions that render syntax trees to HTML:\n\n  - [topic: Up.render]\n  - [topic: Up.renderDocumentAndTableOfContents]\n  - [topic: Up.renderInline]\n\n  As part of [topic: Up.UserProvidedSettings], this interface also provides custom settings to functions that both parse markup *and* render the result to HTML:\n\n  - [topic: Up.parseAndRender]\n  - [topic: Up.parseAndRenderDocumentAndTableOfContents]\n  - [topic: Up.parseAndRenderInline]\n\nUsage\n  ````\n  const html = Up.render(document, {\n    idPrefix: \"article\",\n    terms: {\n      footnoteReference: \"footnote mention\",\n      revealContent: \"show\"\n    }\n  })\n  ````\n\nMembers (all of which are optional)\n  [topic: idPrefix]: `string`\n    The prefix to apply to HTML IDs.\n\n  [topic: renderDangerousContent]: `boolean`\n    Enables the rendering of dangerous content. Enabling this setting is not recommended!\n\n  `terms` (all of which are optional)\n    `footnote`: `string`\n      Appears in the URLs of footnotes definitions (i.e. in their respective footnote blocks).\n\n    `footnoteReference`: `string`\n      Appears in the URLs of footnotes references (i.e. the superscripts within paragraphs).\n\n    `revealContent`: `string`\n      Appears on the button that toggles the visibility of revealable content.\n\n    `sectionReferencedByTableOfContents`: `string`\n      Appears in the URLs of headings referenced by the table of contents.\n\n    `tableOfContents`: `string`\n      Appears at the top of the table of contents.\n\n    You don't need to worry about escaping any characters in your custom terms! Up handles that for you.\n\n\n----------\n`idPrefix`\n----------\n\nSummary\n  If you are rendering multiple documents onto the same page, you need to use this setting to prevent HTML ID collisions between documents.\n\n  By default, `idPrefix` is `up` to prevent ID collisions any HTML elements *not* rendered by Up. If you don't want any ID prefix, you can set `idPrefix` to an empty string.\n\nUsage\n  ````\n  const html = Up.parseAndRender(markup, {\n    rendering: {\n      idPrefix: \"article\"\n    }\n  })\n  ````\n\nContext\n  This setting belongs to [topic: Up.UserProvidedSettings.Rendering].\n\nDetails\n  You don't need to worry about escaping HTML for your `idPrefix`---Up automatically handles that for you. Furthermore, Up automatically converts any spaces in your `idPrefix` to hyphens.\n\nDefault\n  `\"up\"`\n\n\n------------------------\n`renderDangerousContent`\n------------------------\n\nSummary\n  Normally, Up will not render links or media elements with potentially exploitable URI schemes (`javascript`, `vbscript`, `data`, and `file`).\n\n  When this setting is enabled, Up will dutifully render all links and media elements.\n\nUsage\n  ````\n  const html = Up.parseAndRender(markup, {\n    rendering: {\n      renderDangerousContent: true\n    }\n  })\n  ````\n\nContext\n  This setting belongs to [topic: Up.UserProvidedSettings.Rendering].\n\nDetails\n  By default, dangerous media elements produce no HTML at all. Dangerous links produce no HTML of their own, though their child elements are rendered.\n\nDefault\n  `false`\n\n\n\n================\nInline documents\n================\n\nIn certain contexts, you might want to restrict a document to just a single line:\n\n- An online chat message\n- The title of a thread on a message board\n- The byline for a user's profile\n\nThat's what inline documents are for! To take advantage of inline documents, use one of the following functions:\n\n- [topic: Up.parseAndRenderInline]\n- [topic: Up.parseInline]\n- [topic: Up.renderInline]\n\n\nSyntax differences\n==================\n\nWithin inline documents, Up ignores all outline writing conventions. Furthermore, [topic: footnotes] and [topic: section links] aren't supported.\n\nWhen Up encounters a footnote in an inline document, it pretends the author had used parentheses instead of a footnote.\n\nInline markup\n  ````\n  My dad [^ Professor Oak] is very wise.\n  ````\nOutput\n  My dad (Professor Oak) is very wise.\n\nWithin inline documents, Up doesn't recognize the syntax for section links. Consequently, their markup is instead treated as regular old text enclosed within brackets.\n\nInline markup\n  ````\n  I enjoyed our conversation [topic: the weather].\n  ````\nOutput\n  I enjoyed our conversation [\\topic: the weather].\n\n\nRendered HTML\n=============\n\nWhen inline documents are rendered, the resulting HTML is *not* enclosed within any container element (e.g. `<p>`).\n\nInline markup\n  I *really* like Starcraft.\n\nRendered inline HTML\n  ````\n  I <em>really</em> like Starcraft.\n  ````\n\n\n\n================\n`Up.Transformer`\n================\n\nPurpose\n  The `Up.Transformer` class can be useful if you need to parse or render several documents all sharing custom settings.\n\n  Those shared settings can be provided just once---in the constructor. Then, when calling methods on your object, you only need to provide settings that overwrite (or supplement) the ones you provided to the constructor.\n\n  ````\n  const up = new Up.Transformer(settings)\n  const html = up.parseAndRender(markup, settingsChanges)\n  ````\n\nConstructor arguments\n  `settings` (optional): [topic: Up.UserProvidedSettings]\n    The custom parsing and/or rendering settings to apply for all subsequent method calls.\n\nMembers\n  This class's methods have the same names and arguments as the [topic: functions] in the library:\n\n  - [topic: Up.parseAndRender]\n  - [topic: Up.parseAndRenderDocumentAndTableOfContents]\n  - [topic: Up.parseAndRenderInline]\n  - [topic: Up.parse]\n  - [topic: Up.parseInline]\n  - [topic: Up.render]\n  - [topic: Up.renderDocumentAndTableOfContents]\n  - [topic: Up.renderInline]\n\n  When a method is invoked with custom settings, those settings are merged with the settings provided to the constructor. If any individual settings conflict, Up uses the conflicting values provided to the method.\n\n  Example\n    ````\n    const up = new Up.Transformer({\n      parsing: {\n        createSourceMap: true,\n        fancyEllipsis: \"⋯\",\n        keywords: {\n          audio: [\"sound\", \"song\"],\n          highlight: \"mark\"\n        }\n      },\n      rendering: {\n        terms: { tableOfContents: \"Contents\" }\n      }\n    })\n\n    const html = up.parseAndRender(markup, {\n      parsing: {\n        createSourceMap: false,\n        keywords: {\n          audio: \"listen\"\n        }\n      },\n      rendering: {\n        idPrefix: \"article\"\n      }\n    })\n    ````\n\n  Discussion\n    In the above example, the following settings are ultimately applied:\n\n    ````\n    {\n      parsing: {\n        createSourceMap: false,\n        fancyEllipsis: \"⋯\",\n        keywords: {\n          audio: \"listen\",\n          highlight: \"mark\"\n        }\n      },\n      rendering: {\n        idPrefix: \"article\",\n        terms: { tableOfContents: \"Contents\" }\n      }\n    }\n    ````\n\n\n\n========================\nThe abstract syntax tree\n========================\n\nUnless you're fiddling with the abstract syntax tree of a parsed document, you don't need to worry about any of these classes or interfaces.\n\n\n`Up.Document`\n=============\n\nPurpose\n  This class represents the syntax tree for a parsed document.\n\nExtends\n  [topic: Up.OutlineSyntaxNodeContainer]\n\nUnique members\n  `tableOfContents`: [topic: Document.TableOfContents]\n    An object representing the document's table of contents.\n\n  `create` method (static)\n    Purpose\n      This method returns a ready-to-render syntax tree from a collection of outline syntax nodes.\n\n    Arguments\n      `children`: array of [topic: OutlineSyntaxNode]\n        A collection of outline syntax nodes representing the top-level conventions in the document.\n\n    Return type: [topic: Up.Document]\n      This method creates and returns a ready-to-render `Document` object.\n\n      To prepare the document for rendering, this method:\n\n      - Assigns footnotes their reference numbers\n      - Extracts footnotes into footnote blocks\n      - Produces a table of contents\n      - Associates section links with the apprioriate table of contents entries\n\nNotes\n  The [topic: Up.parse] function returns an instance of this class.\n\n\n-----------------------------\n`Up.Document.TableOfContents`\n-----------------------------\n\nPurpose\n  This class represents the table of contents for a document. The table of contents includes every heading except those found within [topic: revealable content].\n\nMembers\n  `entries`: array of [topic: TableOfContents.Entry]\n    A collection of entries representing headings in the document.\n\n\n`Up.Document.TableOfContents.Entry`\n-----------------------------------\n\nPurpose\n  This interface represents an entry in the table of contents.\n\nMembers\n  `ordinal`: `number`\n    Represents the entry's ordinal in the table of contents. The first ordinal is `1`, not `0`.\n\n  `level`: `number`\n    Represents the heading level of the entry.\n\n  `searchableText` method\n    Arguments\n      None.\n\n    Return type: `string`\n      This method returns the searchable text of the syntax node. In contrast to `textAppearingInline`, footnotes and images do have searchable text (footnotes have content, and images have a description).\n\n      This is used to help [topic: section links] match the most appropriate table of content entry.\n\n  `contentWithinTableOfContents` method\n    Arguments\n      None.\n\n    Return type: array of [topic: Up.InlineSyntaxNode]\n      This method returns the inline syntax nodes that should represent this entry's content inside the table of contents itself.\n\n  `inlineDescendants`\n    Return type: array of [topic: Up.InlineSyntaxNode]\n      This method returns the inline descendants (children, grandchildren, etc.) of the syntax node represented by this table of contents entry.\n\n    Arguments\n      None.\n\n\n`Up.InlineDocument`\n==================\n\nPurpose\n  This class represents the syntax tree for a parsed inline document.\n\nExtends\n  [topic: Up.InlineSyntaxNodeContainer]\n\nNotes\n  The [topic: Up.parseInline] function returns an instance of this class.\n\n\n`Up.SyntaxNode`\n===============\n\nPurpose\n  All syntax node classes must implement this interface.\n\nMembers\n  `inlineDescendants` method\n    Return type: array of [topic: Up.InlineSyntaxNode]\n      This method returns all inline descendants (including children, grandchildren, etc.).\n\nNotes\n  This interface also has a `render` method, but it isn't relevant to developers using the Up library.\n\n\n`Up.InlineSyntaxNode`\n=====================\n\nPurpose\n  All inline syntax node classes must implement this interface.\n\nExtends\n  [topic: Up.SyntaxNode]\n\nUnique members\n  `textAppearingInline` method\n    Return type: `string`\n      This method returns the text of the syntax node as it should appear inline. Some inline writing conventions don't have any text appearing inline, including [topic: footnotes] and [topic: images].\n\n      This method is used to help determine whether table cells are numeric.\n\n    Arguments\n      None.\n\n  `searchableText` method\n    Return type: `string`\n      This method returns the searchable text of the syntax node. In contrast to `textAppearingInline`, footnotes and images should have searchable text (footnotes have content, and images have a description).\n\n      This method is used to help [topic: section links] match the most appropriate table of content entry.\n\n    Arguments\n      None.\n\n\n`Up.OutlineSyntaxNode`\n======================\n\nPurpose\n  All outline syntax node classes must implement this interface.\n\nExtends\n  [topic: Up.SyntaxNode]\n\nUnique members\n  `sourceLineNumber`: `number`\n    The first line of markup that produced this syntax node. Source line numbers start at `1`, not `0`.\n\n  `descendantsToIncludeInTableOfContents` method\n    Return type: array of [topic: Up.Document.TableOfContents.Entry]\n      This method returns any descendants (at any nesting level) to include in the table of contents.\n\n    Arguments\n      None.\n\n\n`Up.RichInlineSyntaxNode`\n=========================\n\nPurpose\n  This abstract class represents an inline syntax node that can contain other inline syntax nodes.\n\nExtends\n  [topic: Up.InlineSyntaxNodeContainer]\n\nImplements\n  [topic: Up.InlineSyntaxNode]\n\n\n`Up.RichOutlineSyntaxNode`\n=========================\n\nPurpose\n  This abstract class represents an outline syntax node that can contain other outline syntax nodes.\n\nExtends\n  [topic: Up.OutlineSyntaxNodeContainer]\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n\n\n`Up.InlineSyntaxNodeContainer`\n==============================\n\nPurpose\n  This abstract class represents a container of inline syntax nodes.\n\nMembers\n  `children`: array of [topic: Up.InlineSyntaxNode]\n    A collection of inline syntax nodes representing the top-level content of the container.\n\n  `inlineDescendants` method\n    Return type: array of [topic: Up.InlineSyntaxNode]\n      This method returns all inline descendants (including `children`, grandchildren, etc.).\n\n    Arguments\n      None.\n\n\n`Up.OutlineSyntaxNodeContainer`\n==============================\n\nPurpose\n  This abstract class represents a container of inline syntax nodes.\n\nMembers\n  `children`: array of [topic: Up.InlineSyntaxNode]\n    A collection of outline syntax nodes representing the top-level content of the container.\n\n  `descendantsToIncludeInTableOfContents` method\n    Return type: array of [topic: Document.TableOfContents.Entry]\n      This method returns any descendants (children, grandchildren, etc.) to include in the table of contents.\n\n    Arguments\n      None.\n\n  `inlineDescendants` method\n    Return type: array of [topic: Up.InlineSyntaxNode]\n      This method returns all inline descendants of `children`.\n\n    Arguments\n      None.\n\n\n`Up.MediaSyntaxNode`\n====================\n\nPurpose\n  This abstract class represents a media convention.\n\nImplements\n  [topic: Up.InlineSyntaxNode]\n    Media conventions can appear inline.\n  [topic: Up.OutlineSyntaxNode]\n    If a line consists solely of media conventions (or media conventions within links), those media conventions are placed directly into the outline.\n\nUnique members\n  `description`: `string`\n    The media's description.\n\n  `url`: `string`\n    Represents the media's URL after the following settings are applied:\n\n    - [topic: defaultUrlScheme]\n    - [topic: baseForUrlsStartingWithSlash]\n    - [topic: baseForUrlsStartingWithHashMark]\n\n\n`Up.ParentheticalSyntaxNode`\n===============================\n\nPurpose\n  This abstract class represents [topic: parentheticals]. It exists solely to improve the expressiveness of the type system.\n\nExtends\n  [topic: Up.RichInlineSyntaxNode]\n\n\n`Up.Audio`\n==========\n\nConvention\n  [topic: Audio]\n\nExtends\n  [topic: Up.MediaSyntaxNode]\n\n\n`Up.Blockquote`\n===============\n\nConvention\n  [topic: Blockquotes]\n\nExtends\n  [topic: Up.RichOutlineSyntaxNode]\n\n\n`Up.Bold`\n=========\n\nConvention\n  [topic: Audio]\n\nExtends\n  [topic: Up.RichInlineSyntaxNode]\n\n\n`Up.CodeBlock`\n==============\n\nConvention\n  [topic: Code blocks]\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n\nUnique members\n  `code`: `string`\n    The code represented by this syntax node.\n\n\n`Up.DescriptionList`\n====================\n\nConvention\n  [topic: Description lists]\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n\nUnique members\n  `items`: array of [topic: Up.DescriptionList.Item]\n    The collection of items comprising this description list.\n\n\n-------------------------\n`Up.DescriptionList.Item`\n-------------------------\n\nPurpose\n  This class represents a collection of subjects and their corresponding description.\n\nUnique members\n  `subjects`: array of [topic: Up.DescriptionList.Item.Subject]\n    The subjects described by `description`.\n\n  `description`: array of [topic: DescriptionList.Item.Description]\n    The description of `subjects`.\n\n\n`Up.DescriptionList.Item.Subject`\n---------------------------------\n\nPurpose\n  This class represents the collection of subjects described by a given description within a description list item.\n\nExtends\n  [topic: Up.InlineSyntaxNodeContainer]\n\n\n`Up.DescriptionList.Item.Description`\n-------------------------------------\n\nPurpose\n  This class represents the description of a given collection of subjects within a description list item.\n\nExtends\n  [topic: Up.InlineSyntaxNodeContainer]\n\n\n`Up.Emphasis`\n=============\n\nConvention\n  [topic: Emphasis]\n\nExtends\n  [topic: Up.RichInlineSyntaxNode]\n\n\n`Up.ExampleInput`\n=================\n\nConvention\n  [topic: Example input]\n\nImplements\n  [topic: Up.InlineSyntaxNode]\n\nUnique members\n  `input`: `string`\n    The example of user input.\n\n\n`Up.Footnote`\n=============\n\nConvention\n  [topic: Footnotes]\n\nExtends\n  [topic: Up.RichInlineSyntaxNode]\n\nUnique members\n  `referenceNumber`: `number`\n    The number that appears in superscript for this footnote.\n\n\n`Up.FootnoteBlock`\n==================\n\nPurpose\n  Footnotes are written inline, but they aren't meant to appear inline in the final document. That would defeat the purpose of footnotes! Instead, footnotes are extracted and placed in footnote blocks. This class represents one of those footnote blocks.\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n\nUnique members\n  `footnotes`: array of [topic: Up.Footnote]\n    The collection of footnotes comprising this footnote block.\n\n\n`Up.Heading`\n=============\n\nConvention\n  [topic: Headings]\n\nExtends\n  [topic: Up.InlineSyntaxNodeContainer]\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n    Headings are outline syntax nodes.\n\n  [topic: Up.Document.TableOfContents.Entry]\n    Headings can also be in the table of contents!\n\nUnique members\n  `level`: `number`\n    Represents the significance of the heading. Like HTML heading levels, a `level` of `1` is considered the most significant.\n\n\n`Up.Highlight`\n==============\n\nConvention\n  [topic: Highlighting]\n\nExtends\n  [topic: Up.RichInlineSyntaxNode]\n\n\n`Up.Image`\n==========\n\nConvention\n  [topic: Images]\n\nExtends\n  [topic: Up.MediaSyntaxNode]\n\n\n`Up.InlineCode`\n===============\n\nConvention\n  [topic: Inline code]\n\nImplements\n  [topic: Up.InlineSyntaxNode]\n\nUnique members\n  `code`: `string`\n    The inline code represented by this syntax node.\n\n\n`Up.InlineQuote`\n================\n\nConvention\n  [topic: Inline quotes]\n\nExtends\n  [topic: Up.RichInlineSyntaxNode]\n\n\n`Up.InlineQuote`\n================\n\nConvention\n  [topic: Inline revealables]\n\nExtends\n  [topic: Up.RichInlineSyntaxNode]\n\n\n`Up.Italic`\n===========\n\nConvention\n  [topic: Italics]\n\nExtends\n  [topic: Up.RichInlineSyntaxNode]\n\n\n`Up.LineBlock`\n==============\n\nConvention\n  [topic: Line blocks]\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n\nUnique members\n  `lines`: array of [topic: Up.LineBlock.Line]\n    The collection of lines comprising this line block.\n\n-------------------\n`Up.LineBlock.Line`\n-------------------\n\nPurpose\n  This class represents a line in a line block.\n\nExtends\n  [topic: Up.InlineSyntaxNodeContainer]\n\n\n`Up.Link`\n=========\n\nConvention\n  [topic: Italics]\n\nExtends\n  [topic: Up.RichInlineSyntaxNode]\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n    If a line consists solely of media conventions or media conventions within links, those media conventions are placed directly into the outline. Therefore, links must be able to serve as outline syntax nodes.\n\nUnique members\n  `url`: `string`\n    This links's URL after the following settings are applied:\n\n    - [topic: defaultUrlScheme]\n    - [topic: baseForUrlsStartingWithSlash]\n    - [topic: baseForUrlsStartingWithHashmark]\n\n\n`Up.NormalParenthetical`\n========================\n\nConvention\n  [topic: Parentheses]\n\nExtends\n  [topic: Up.ParentheticalSyntaxNode]\n\n\n`Up.OrderedList`\n================\n\nConvention\n  [topic: Numbered lists]\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n\nUnique members\n  `items`: array of [topic: Up.OrderedList.Item]\n    The collection of items comprising this ordered list.\n\n  `start` method\n    Return type: `number`\n      This method returns the starting ordinal of this list, if one was explicitly defined. Otherwise, this method returns `undefined`.\n\n    Arguments\n      None.\n\n  `order` method\n    Return type: [topic: Up.OrderedList.Order]\n      This method returns the order of the ordered list (ascending or descending).\n\n    Arguments\n      None.\n\n\n---------------------\n`Up.OrderedList.Item`\n---------------------\n\nPurpose\n  This class represents an item in an ordered list.\n\nExtends\n  [topic: Up.OutlineSyntaxNodeContainer]\n\n\n----------------------\n`Up.OrderedList.Order`\n----------------------\n\nPurpose\n  This enum represents the order of an ordered list.\n\nValues\n  - `Ascending` (default)\n  - `Descending`\n\n\n`Up.Paragraph`\n==============\n\nConvention\n  [topic: Paragraphs]\n\nExtends\n  [topic: Up.InlineSyntaxNodeContainer]\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n    Paragraphs are outline syntax nodes.\n\n\n`Up.RevealableBlock`\n====================\n\nConvention\n  [topic: Revealable blocks]\n\nExtends\n  [topic: Up.RichOutlineSyntaxNode]\n\n\n`Up.SectionLink`\n================\n\nConvention\n  [topic: Section links]\n\nImplements\n  [topic: Up.InlineSyntaxNode]\n\nUnique members\n  `sectionTitleSnippet`: `string`\n    A snippet of text (provided by the author) from the matching table of contents entry.\n\n\n`Up.SquareParenthetical`\n========================\n\nConvention\n  [topic: Square brackets]\n\nExtends\n  [topic: Up.ParentheticalSyntaxNode]\n\n\n`Up.Stress`\n===========\n\nConvention\n  [topic: Stress]\n\nExtends\n  [topic: Up.RichInlineSyntaxNode]\n\n\n`Up.Table`\n==========\n\nConvention\n  [topic: Tables]\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n\nUnique members\n  `header`: [topic: Up.Table.Header]\n    The header row.\n\n  `rows`: array of [topic: Up.Table.Row]\n    The content rows.\n\n  `caption`: [topic: Up.Table.Caption]\n    The optional caption.\n\n\n------------------\n`Up.Table.Caption`\n------------------\n\nPurpose\n  This class represents the caption of a table.\n\nExtends\n  [topic: Up.InlineSyntaxNodeContainer]\n\n\n---------------\n`Up.Table.Cell`\n---------------\n\nPurpose\n  This abstract class represents a table cell.\n\nExtends\n  [topic: Up.InlineSyntaxNodeContainer]\n\nUnique members\n  `isNumeric` method\n    Return type: `boolean`\n      This method returns a `boolean` indicating whether the content of this cell is numeric.\n\n    Arguments\n      None.\n\n\n-----------------\n`Up.Table.Header`\n-----------------\n\nPurpose\n  This class represents the header row of a table.\n\nUnique members\n  `cells`: array of [topic: Up.Table.Header.Cell]\n    The cells in this header row.\n\n\n`Up.Table.Header.Cell`\n----------------------\n\nPurpose\n  This class represents a table header cell.\n\nExtends\n  [topic: Up.Table.Cell]\n\n\n--------------\n`Up.Table.Row`\n--------------\n\nPurpose\n  This class represents a content row in a table.\n\nUnique members\n  `cells`: array of [topic: Up.Table.Row.Cell]\n    The content cells in this row.\n\n  `headerColumnCell`: [topic: Up.Table.Header.Cell]\n    The single header column cell for this row, if there is one.\n\n    Tables without header columns never have header column cells.\n\n  `allCellsStartingWithHeaderColumnCell` method\n    Return type: array of [topic: Up.Table.Cell]\n      This method returns every cell in this row.\n\n      If the table has a header column, the row's `headerColumnCell` is the first item in the returned collection.\n\n    Arguments\n      None.\n\n\n`Up.Table.Row.Cell`\n-------------------\n\nPurpose\n  This class represents a regular (non-header) table cell.\n\nExtends\n  [topic: Up.Table.Cell]\n\n\n`Up.Text`\n=========\n\nPurpose\n  This class represents regular text content.\n\nImplements\n  [topic: Up.InlineSyntaxNode]\n\nUnique members\n  `text`: `string`\n    The text represented by this syntax node.\n\n\n`Up.ThematicBreak`\n=================\n\nConvention\n  [topic: Thematic breaks]\n\nExtends\n  [topic: Up.OutlineSyntaxNode]\n\n\n`Up.UnorderedList`\n==================\n\nConvention\n  [topic: Bulleted lists]\n\nImplements\n  [topic: Up.OutlineSyntaxNode]\n\nUnique members\n  `items`: array of [topic: Up.UnorderedList.Item]\n    The collection of items comprising this bulleted list.\n\n\n-----------------------\n`Up.UnorderedList.Item`\n-----------------------\n\nPurpose\n  This class represents an item in a bulleted list.\n\nExtends\n  [topic: Up.OutlineSyntaxNodeContainer]\n\n\n`Up.Video`\n==========\n\nConvention\n  [topic: Video]\n\nExtends\n  [topic: Up.MediaSyntaxNode]\n"

/***/ }
/******/ ]);