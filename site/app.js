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

	var _writeUp = __webpack_require__(7);

	document.addEventListener('DOMContentLoaded', function () {
	  var markup = document.getElementById('markup');
	  var rendered = document.getElementById('rendered');

	  markup.onkeyup = debounce(function () {
	    rendered.innerHTML = _writeUp.Up.toHtml(markup.value);
	  }, 1000);
	});

	function debounce(callback, delay) {
	  var timeoutHandle = void 0;

	  return function () {
	    if (timeoutHandle) {
	      clearTimeout(timeoutHandle);
	    }

	    timeoutHandle = setTimeout(callback, delay);
	  };
	}

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
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./app.scss");
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
	exports.push([module.id, "body {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: wrap row-reverse;\n      flex-flow: wrap row-reverse;\n  min-height: 100vh; }\n\n#rendered {\n  -ms-flex-preferred-size: 500px;\n      flex-basis: 500px;\n  -ms-flex-positive: 3;\n      flex-grow: 3; }\n\n#markup {\n  -ms-flex-preferred-size: 400px;\n      flex-basis: 400px;\n  -ms-flex-positive: 1;\n      flex-grow: 1; }\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Up_1 = __webpack_require__(8);
	exports.default = Up_1.Up;
	exports.Up = Up_1.Up;
	var UpDocument_1 = __webpack_require__(15);
	exports.UpDocument = UpDocument_1.UpDocument;
	var InlineUpDocument_1 = __webpack_require__(102);
	exports.InlineUpDocument = InlineUpDocument_1.InlineUpDocument;
	var Audio_1 = __webpack_require__(66);
	exports.Audio = Audio_1.Audio;
	var Bold_1 = __webpack_require__(52);
	exports.Bold = Bold_1.Bold;
	var Blockquote_1 = __webpack_require__(24);
	exports.Blockquote = Blockquote_1.Blockquote;
	var CodeBlock_1 = __webpack_require__(93);
	exports.CodeBlock = CodeBlock_1.CodeBlock;
	var DescriptionList_1 = __webpack_require__(26);
	exports.DescriptionList = DescriptionList_1.DescriptionList;
	var Emphasis_1 = __webpack_require__(49);
	exports.Emphasis = Emphasis_1.Emphasis;
	var ExampleInput_1 = __webpack_require__(86);
	exports.ExampleInput = ExampleInput_1.ExampleInput;
	var FootnoteBlock_1 = __webpack_require__(27);
	exports.FootnoteBlock = FootnoteBlock_1.FootnoteBlock;
	var Footnote_1 = __webpack_require__(28);
	exports.Footnote = Footnote_1.Footnote;
	var Heading_1 = __webpack_require__(17);
	exports.Heading = Heading_1.Heading;
	var Highlight_1 = __webpack_require__(53);
	exports.Highlight = Highlight_1.Highlight;
	var Image_1 = __webpack_require__(68);
	exports.Image = Image_1.Image;
	var InlineCode_1 = __webpack_require__(85);
	exports.InlineCode = InlineCode_1.InlineCode;
	var InlineNsfl_1 = __webpack_require__(57);
	exports.InlineNsfl = InlineNsfl_1.InlineNsfl;
	var InlineNsfw_1 = __webpack_require__(56);
	exports.InlineNsfw = InlineNsfw_1.InlineNsfw;
	var InlineSpoiler_1 = __webpack_require__(54);
	exports.InlineSpoiler = InlineSpoiler_1.InlineSpoiler;
	var InlineQuote_1 = __webpack_require__(58);
	exports.InlineQuote = InlineQuote_1.InlineQuote;
	var Italic_1 = __webpack_require__(51);
	exports.Italic = Italic_1.Italic;
	var LineBlock_1 = __webpack_require__(31);
	exports.LineBlock = LineBlock_1.LineBlock;
	var Link_1 = __webpack_require__(62);
	exports.Link = Link_1.Link;
	var NsflBlock_1 = __webpack_require__(38);
	exports.NsflBlock = NsflBlock_1.NsflBlock;
	var NsfwBlock_1 = __webpack_require__(37);
	exports.NsfwBlock = NsfwBlock_1.NsfwBlock;
	var OrderedList_1 = __webpack_require__(32);
	exports.OrderedList = OrderedList_1.OrderedList;
	var Paragraph_1 = __webpack_require__(33);
	exports.Paragraph = Paragraph_1.Paragraph;
	var NormalParenthetical_1 = __webpack_require__(61);
	exports.NormalParenthetical = NormalParenthetical_1.NormalParenthetical;
	var PlainText_1 = __webpack_require__(83);
	exports.PlainText = PlainText_1.PlainText;
	var ReferenceToTableOfContentsEntry_1 = __webpack_require__(21);
	exports.ReferenceToTableOfContentsEntry = ReferenceToTableOfContentsEntry_1.ReferenceToTableOfContentsEntry;
	var SpoilerBlock_1 = __webpack_require__(35);
	exports.SpoilerBlock = SpoilerBlock_1.SpoilerBlock;
	var SquareParenthetical_1 = __webpack_require__(59);
	exports.SquareParenthetical = SquareParenthetical_1.SquareParenthetical;
	var Stress_1 = __webpack_require__(50);
	exports.Stress = Stress_1.Stress;
	var Table_1 = __webpack_require__(39);
	exports.Table = Table_1.Table;
	var ThematicBreak_1 = __webpack_require__(43);
	exports.ThematicBreak = ThematicBreak_1.ThematicBreak;
	var UnorderedList_1 = __webpack_require__(34);
	exports.UnorderedList = UnorderedList_1.UnorderedList;
	var Video_1 = __webpack_require__(69);
	exports.Video = Video_1.Video;
	var InlineSyntaxNodeContainer_1 = __webpack_require__(18);
	exports.InlineSyntaxNodeContainer = InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer;
	var MediaSyntaxNode_1 = __webpack_require__(67);
	exports.MediaSyntaxNode = MediaSyntaxNode_1.MediaSyntaxNode;
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(16);
	exports.OutlineSyntaxNodeContainer = OutlineSyntaxNodeContainer_1.OutlineSyntaxNodeContainer;
	var RevealableInlineSyntaxNode_1 = __webpack_require__(55);
	exports.RevealableInlineSyntaxNode = RevealableInlineSyntaxNode_1.RevealableInlineSyntaxNode;
	var RevealableOutlineSyntaxNode_1 = __webpack_require__(36);
	exports.RevealableOutlineSyntaxNode = RevealableOutlineSyntaxNode_1.RevealableOutlineSyntaxNode;
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
	exports.RichInlineSyntaxNode = RichInlineSyntaxNode_1.RichInlineSyntaxNode;
	var RichOutlineSyntaxNode_1 = __webpack_require__(25);
	exports.RichOutlineSyntaxNode = RichOutlineSyntaxNode_1.RichOutlineSyntaxNode;
	//# sourceMappingURL=index.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Config_1 = __webpack_require__(9);
	var parseDocument_1 = __webpack_require__(14);
	var parseInlineDocument_1 = __webpack_require__(101);
	var getHtml_1 = __webpack_require__(103);
	var Up = (function () {
	    function Up(settings) {
	        this.config = new Config_1.Config(settings);
	    }
	    Up.prototype.toDocument = function (markup, extraSettings) {
	        return toDocument(markup, this.config.withChanges(extraSettings));
	    };
	    Up.prototype.toHtml = function (markupOrDocument, extraSettings) {
	        return toHtml(markupOrDocument, this.config.withChanges(extraSettings));
	    };
	    Up.prototype.toInlineDocument = function (markup, extraSettings) {
	        return toInlineDocument(markup, this.config.withChanges(extraSettings));
	    };
	    Up.prototype.toInlineHtml = function (markupOrInlineDocument, extraSettings) {
	        return toInlineHtml(markupOrInlineDocument, this.config.withChanges(extraSettings));
	    };
	    return Up;
	}());
	exports.Up = Up;
	var Up;
	(function (Up) {
	    var defaultUp = new Up();
	    function toDocument(markup, settings) {
	        return defaultUp.toDocument(markup, settings);
	    }
	    Up.toDocument = toDocument;
	    function toHtml(markupOrDocument, settings) {
	        return defaultUp.toHtml(markupOrDocument, settings);
	    }
	    Up.toHtml = toHtml;
	    function toInlineDocument(markup, settings) {
	        return defaultUp.toInlineDocument(markup, settings);
	    }
	    Up.toInlineDocument = toInlineDocument;
	    function toInlineHtml(markupOrInlineDocument, settings) {
	        return defaultUp.toInlineHtml(markupOrInlineDocument, settings);
	    }
	    Up.toInlineHtml = toInlineHtml;
	    Up.VERSION = '13.0.1';
	})(Up = exports.Up || (exports.Up = {}));
	function toDocument(markup, config) {
	    return parseDocument_1.parseDocument(markup, config);
	}
	function toHtml(markupOrDocument, config) {
	    var document = typeof markupOrDocument === 'string'
	        ? toDocument(markupOrDocument, config)
	        : markupOrDocument;
	    return getHtml_1.getHtml(document, config);
	}
	function toInlineDocument(markup, config) {
	    return parseInlineDocument_1.parseInlineDocument(markup, config);
	}
	function toInlineHtml(markupOrInlineDocument, config) {
	    var inlineDocument = typeof markupOrInlineDocument === 'string'
	        ? toInlineDocument(markupOrInlineDocument, config)
	        : markupOrInlineDocument;
	    return getHtml_1.getInlineHtml(inlineDocument, config);
	}
	//# sourceMappingURL=Up.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternPieces_1 = __webpack_require__(10);
	var Patterns_1 = __webpack_require__(12);
	var CollectionHelpers_1 = __webpack_require__(13);
	var Config = (function () {
	    function Config(settings) {
	        this.createSourceMap = false;
	        this.renderUnsafeContent = false;
	        this.idPrefix = 'up';
	        this.ellipsis = '…';
	        this.terms = new Config.Terms();
	        this.defaultUrlScheme = 'https://';
	        this.baseForUrlsStartingWithSlash = '';
	        this.baseForUrlsStartingWithHashMark = '';
	        if (settings) {
	            this.applyUserProvidedSettings(settings);
	        }
	    }
	    Config.prototype.applySettingsToUrl = function (url) {
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
	    Config.prototype.withChanges = function (changes) {
	        var clone = new Config();
	        clone.createSourceMap = this.createSourceMap;
	        clone.renderUnsafeContent = this.renderUnsafeContent;
	        clone.idPrefix = this.idPrefix;
	        clone.ellipsis = this.ellipsis;
	        clone.defaultUrlScheme = this.defaultUrlScheme;
	        clone.baseForUrlsStartingWithSlash = this.baseForUrlsStartingWithSlash;
	        clone.baseForUrlsStartingWithHashMark = this.baseForUrlsStartingWithHashMark;
	        clone.terms = this.terms.clone();
	        if (changes) {
	            clone.applyUserProvidedSettings(changes);
	        }
	        return clone;
	    };
	    Config.prototype.applyUserProvidedSettings = function (settings) {
	        this.createSourceMap =
	            CollectionHelpers_1.coalesce(settings.createSourceMap, this.createSourceMap);
	        this.renderUnsafeContent =
	            CollectionHelpers_1.coalesce(settings.renderUnsafeContent, this.renderUnsafeContent);
	        this.idPrefix =
	            CollectionHelpers_1.coalesce(settings.idPrefix, this.idPrefix);
	        this.ellipsis =
	            CollectionHelpers_1.coalesce(settings.ellipsis, this.ellipsis);
	        this.defaultUrlScheme =
	            CollectionHelpers_1.coalesce(settings.defaultUrlScheme, this.defaultUrlScheme);
	        this.baseForUrlsStartingWithSlash =
	            CollectionHelpers_1.coalesce(settings.baseForUrlsStartingWithSlash, this.baseForUrlsStartingWithSlash);
	        this.baseForUrlsStartingWithHashMark =
	            CollectionHelpers_1.coalesce(settings.baseForUrlsStartingWithHashMark, this.baseForUrlsStartingWithHashMark);
	        this.terms.applyUserProvidedSettings(settings.terms);
	    };
	    return Config;
	}());
	exports.Config = Config;
	var Config;
	(function (Config) {
	    var Terms = (function () {
	        function Terms() {
	            this.markup = new Terms.Markup();
	            this.rendered = new Terms.Rendered();
	        }
	        Terms.prototype.clone = function () {
	            var clone = new Terms();
	            clone.markup = this.markup.clone();
	            clone.rendered = this.rendered.clone();
	            return clone;
	        };
	        Terms.prototype.applyUserProvidedSettings = function (terms) {
	            if (!terms) {
	                return;
	            }
	            this.markup.applyUserProvidedSettings(terms.markup);
	            this.rendered.applyUserProvidedSettings(terms.output);
	        };
	        return Terms;
	    }());
	    Config.Terms = Terms;
	    var Terms;
	    (function (Terms) {
	        var Markup = (function () {
	            function Markup() {
	                this._audio = [];
	                this._chart = [];
	                this._highlight = [];
	                this._image = [];
	                this._nsfl = [];
	                this._nsfw = [];
	                this._referenceToTableOfContentsEntry = [];
	                this._spoiler = [];
	                this._table = [];
	                this._video = [];
	            }
	            Object.defineProperty(Markup.prototype, "audio", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['audio'].concat(this._audio));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Markup.prototype, "chart", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['chart'].concat(this._chart));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Markup.prototype, "highlight", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['highlight'].concat(this._highlight));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Markup.prototype, "image", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['image', 'img'].concat(this._image));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Markup.prototype, "nsfl", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['nsfl'].concat(this._nsfl));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Markup.prototype, "nsfw", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['nsfw'].concat(this._nsfw));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Markup.prototype, "referenceToTableOfContentsEntry", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['section', 'topic'].concat(this._referenceToTableOfContentsEntry));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Markup.prototype, "spoiler", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['spoiler'].concat(this._spoiler));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Markup.prototype, "table", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['table'].concat(this._table));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Object.defineProperty(Markup.prototype, "video", {
	                get: function () {
	                    return CollectionHelpers_1.distinct.apply(void 0, ['video', 'vid'].concat(this._video));
	                },
	                enumerable: true,
	                configurable: true
	            });
	            Markup.prototype.clone = function () {
	                var clone = new Markup();
	                clone._audio = this._audio;
	                clone._chart = this._chart;
	                clone._highlight = this._highlight;
	                clone._image = this._image;
	                clone._nsfl = this._nsfl;
	                clone._referenceToTableOfContentsEntry = this._referenceToTableOfContentsEntry;
	                clone._nsfw = this._nsfw;
	                clone._spoiler = this._spoiler;
	                clone._table = this._table;
	                clone._video = this._video;
	                return clone;
	            };
	            Markup.prototype.applyUserProvidedSettings = function (terms) {
	                if (!terms) {
	                    return;
	                }
	                this._audio =
	                    sanitizeVariations(terms.audio);
	                this._chart =
	                    sanitizeVariations(terms.chart);
	                this._highlight =
	                    sanitizeVariations(terms.highlight);
	                this._image =
	                    sanitizeVariations(terms.image);
	                this._nsfl =
	                    sanitizeVariations(terms.nsfl);
	                this._nsfw =
	                    sanitizeVariations(terms.nsfw);
	                this._referenceToTableOfContentsEntry =
	                    sanitizeVariations(terms.referenceToTableOfContentsEntry);
	                this._spoiler =
	                    sanitizeVariations(terms.spoiler);
	                this._table =
	                    sanitizeVariations(terms.table);
	                this._video =
	                    sanitizeVariations(terms.video);
	            };
	            return Markup;
	        }());
	        Terms.Markup = Markup;
	        var Rendered = (function () {
	            function Rendered() {
	                this.footnote = 'footnote';
	                this.footnoteReference = 'footnote reference';
	                this.itemReferencedByTableOfContents = 'topic';
	                this.tableOfContents = 'Table of Contents';
	                this.toggleNsfl = 'toggle NSFL';
	                this.toggleNsfw = 'toggle NSFW';
	                this.toggleSpoiler = 'toggle spoiler';
	            }
	            Rendered.prototype.clone = function () {
	                var clone = new Rendered();
	                clone.footnote = this.footnote;
	                clone.footnoteReference = this.footnoteReference;
	                clone.itemReferencedByTableOfContents = this.itemReferencedByTableOfContents;
	                clone.tableOfContents = this.tableOfContents;
	                clone.toggleNsfl = this.toggleNsfl;
	                clone.toggleNsfw = this.toggleNsfw;
	                clone.toggleSpoiler = this.toggleSpoiler;
	                return clone;
	            };
	            Rendered.prototype.applyUserProvidedSettings = function (terms) {
	                if (!terms) {
	                    return;
	                }
	                this.footnote =
	                    CollectionHelpers_1.coalesce(terms.footnote, this.footnote);
	                this.footnoteReference =
	                    CollectionHelpers_1.coalesce(terms.footnoteReference, this.footnoteReference);
	                this.itemReferencedByTableOfContents =
	                    CollectionHelpers_1.coalesce(terms.itemReferencedByTableOfContents, this.itemReferencedByTableOfContents);
	                this.tableOfContents =
	                    CollectionHelpers_1.coalesce(terms.tableOfContents, this.tableOfContents);
	                this.toggleNsfl =
	                    CollectionHelpers_1.coalesce(terms.toggleNsfl, this.toggleNsfl);
	                this.toggleNsfw =
	                    CollectionHelpers_1.coalesce(terms.toggleNsfw, this.toggleNsfw);
	                this.toggleSpoiler =
	                    CollectionHelpers_1.coalesce(terms.toggleSpoiler, this.toggleSpoiler);
	            };
	            return Rendered;
	        }());
	        Terms.Rendered = Rendered;
	    })(Terms = Config.Terms || (Config.Terms = {}));
	})(Config = exports.Config || (exports.Config = {}));
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
	//# sourceMappingURL=Config.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(11);
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
/* 11 */
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
	var PatternPieces_1 = __webpack_require__(10);
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(11);
	var PatternPieces_1 = __webpack_require__(10);
	var INDENT = PatternHelpers_1.either('\t', PatternHelpers_1.exactly(2, PatternPieces_1.INLINE_WHITESPACE_CHAR));
	exports.INDENTED_PATTERN = PatternHelpers_1.patternStartingWith(INDENT);
	exports.DIVIDER_STREAK_PATTERN = PatternHelpers_1.streakOf(PatternHelpers_1.anyCharFrom('#', '=', '-', '+', '~', '*', '@', ':'));
	exports.BLANK_PATTERN = PatternHelpers_1.solely('');
	exports.NON_BLANK_PATTERN = /\S/;
	exports.URL_SCHEME_PATTERN = PatternHelpers_1.patternStartingWith(PatternPieces_1.URL_SCHEME);
	//# sourceMappingURL=Patterns.js.map

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var UpDocument_1 = __webpack_require__(15);
	var HeadingLeveler_1 = __webpack_require__(40);
	var getOutlineSyntaxNodes_1 = __webpack_require__(41);
	var Strings_1 = __webpack_require__(70);
	function parseDocument(markup, config) {
	    var children = getOutlineSyntaxNodes_1.getOutlineSyntaxNodes({
	        markupLines: markup.split(Strings_1.INPUT_LINE_BREAK),
	        sourceLineNumber: 1,
	        headingLeveler: new HeadingLeveler_1.HeadingLeveler(),
	        config: config
	    });
	    return UpDocument_1.UpDocument.create(children);
	}
	exports.parseDocument = parseDocument;
	//# sourceMappingURL=parseDocument.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(16);
	var Heading_1 = __webpack_require__(17);
	var ReferenceToTableOfContentsEntry_1 = __webpack_require__(21);
	var insertFootnoteBlocksAndAssignFootnoteReferenceNumbers_1 = __webpack_require__(23);
	var CollectionHelpers_1 = __webpack_require__(13);
	var UpDocument = (function (_super) {
	    __extends(UpDocument, _super);
	    function UpDocument(children, tableOfContents) {
	        if (tableOfContents === void 0) { tableOfContents = new UpDocument.TableOfContents(); }
	        _super.call(this, children);
	        this.tableOfContents = tableOfContents;
	    }
	    UpDocument.create = function (children) {
	        var tableOfContents = UpDocument.TableOfContents.createAndAssociateEntriesWithTheirReferences(children);
	        var document = new UpDocument(children, tableOfContents);
	        insertFootnoteBlocksAndAssignFootnoteReferenceNumbers_1.insertFootnoteBlocksAndAssignFootnoteReferenceNumbers(document);
	        return document;
	    };
	    return UpDocument;
	}(OutlineSyntaxNodeContainer_1.OutlineSyntaxNodeContainer));
	exports.UpDocument = UpDocument;
	var UpDocument;
	(function (UpDocument) {
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
	                if (inlineSyntaxNode instanceof ReferenceToTableOfContentsEntry_1.ReferenceToTableOfContentsEntry) {
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
	    UpDocument.TableOfContents = TableOfContents;
	})(UpDocument = exports.UpDocument || (exports.UpDocument = {}));
	//# sourceMappingURL=UpDocument.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var UpDocument_1 = __webpack_require__(15);
	var CollectionHelpers_1 = __webpack_require__(13);
	var OutlineSyntaxNodeContainer = (function () {
	    function OutlineSyntaxNodeContainer(children) {
	        this.children = children;
	    }
	    OutlineSyntaxNodeContainer.prototype.descendantsToIncludeInTableOfContents = function () {
	        return UpDocument_1.UpDocument.TableOfContents.getEntries(this.children);
	    };
	    OutlineSyntaxNodeContainer.prototype.inlineDescendants = function () {
	        return CollectionHelpers_1.concat(this.children.map(function (node) { return node.inlineDescendants(); }));
	    };
	    return OutlineSyntaxNodeContainer;
	}());
	exports.OutlineSyntaxNodeContainer = OutlineSyntaxNodeContainer;
	//# sourceMappingURL=OutlineSyntaxNodeContainer.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(18);
	var getSearchableText_1 = __webpack_require__(20);
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
	    Heading.prototype.representationOfContentWithinTableOfContents = function () {
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var getInlineDescendants_1 = __webpack_require__(19);
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CollectionHelpers_1 = __webpack_require__(13);
	function getInlineDescendants(nodes) {
	    return CollectionHelpers_1.concat(nodes.map(function (child) { return [child].concat(child.inlineDescendants()); }));
	}
	exports.getInlineDescendants = getInlineDescendants;
	//# sourceMappingURL=getInlineDescendants.js.map

/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var StringHelpers_1 = __webpack_require__(22);
	var ReferenceToTableOfContentsEntry = (function () {
	    function ReferenceToTableOfContentsEntry(snippetFromEntry, entry) {
	        this.snippetFromEntry = snippetFromEntry;
	        this.entry = entry;
	    }
	    ReferenceToTableOfContentsEntry.prototype.referenceMostAppropriateTableOfContentsEntry = function (tableOfContents) {
	        for (var _i = 0, _a = tableOfContents.entries; _i < _a.length; _i++) {
	            var entry = _a[_i];
	            var textOfEntry = entry.searchableText();
	            var snippetFromEntry = this.snippetFromEntry;
	            if (StringHelpers_1.isEqualIgnoringCapitalization(textOfEntry, snippetFromEntry) && this.canMatch(entry)) {
	                this.entry = entry;
	                return;
	            }
	            if (!this.entry) {
	                if (StringHelpers_1.containsStringIgnoringCapitalization({ haystack: textOfEntry, needle: snippetFromEntry })
	                    && this.canMatch(entry)) {
	                    this.entry = entry;
	                }
	            }
	        }
	    };
	    ReferenceToTableOfContentsEntry.prototype.textAppearingInline = function () {
	        return (this.entry
	            ? this.entry.searchableText()
	            : this.snippetFromEntry);
	    };
	    ReferenceToTableOfContentsEntry.prototype.searchableText = function () {
	        return this.snippetFromEntry;
	    };
	    ReferenceToTableOfContentsEntry.prototype.inlineDescendants = function () {
	        return [];
	    };
	    ReferenceToTableOfContentsEntry.prototype.render = function (renderer) {
	        return renderer.referenceToTableOfContentsEntry(this);
	    };
	    ReferenceToTableOfContentsEntry.prototype.canMatch = function (entry) {
	        return (entry.inlineDescendants().indexOf(this) === -1);
	    };
	    return ReferenceToTableOfContentsEntry;
	}());
	exports.ReferenceToTableOfContentsEntry = ReferenceToTableOfContentsEntry;
	//# sourceMappingURL=ReferenceToTableOfContentsEntry.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(11);
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CollectionHelpers_1 = __webpack_require__(13);
	var Blockquote_1 = __webpack_require__(24);
	var DescriptionList_1 = __webpack_require__(26);
	var FootnoteBlock_1 = __webpack_require__(27);
	var Footnote_1 = __webpack_require__(28);
	var Heading_1 = __webpack_require__(17);
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
	var LineBlock_1 = __webpack_require__(31);
	var OrderedList_1 = __webpack_require__(32);
	var Paragraph_1 = __webpack_require__(33);
	var UnorderedList_1 = __webpack_require__(34);
	var SpoilerBlock_1 = __webpack_require__(35);
	var NsfwBlock_1 = __webpack_require__(37);
	var NsflBlock_1 = __webpack_require__(38);
	var Table_1 = __webpack_require__(39);
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
	        if ((node instanceof Paragraph_1.Paragraph) || (node instanceof Heading_1.Heading)) {
	            return this.getOutermostFootnotesAndAssignTheirReferenceNumbers(node.children);
	        }
	        if (node instanceof LineBlock_1.LineBlock) {
	            return this.getBlocklessFootnotesFromInlineContainers(node.lines);
	        }
	        if ((node instanceof Blockquote_1.Blockquote) || (node instanceof SpoilerBlock_1.SpoilerBlock) || (node instanceof NsfwBlock_1.NsfwBlock) || (node instanceof NsflBlock_1.NsflBlock)) {
	            this.insertFootnoteBlocksAndAssignFootnoteReferenceNumbers(node);
	            return [];
	        }
	        if ((node instanceof UnorderedList_1.UnorderedList) || (node instanceof OrderedList_1.OrderedList)) {
	            return this.getBlocklessFootnotesFromOutlineContainers(node.items);
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
	        ].concat(table.rows.map(function (row) { return row.allCellsStartingWithRowHeaderCell; })).map(function (captionOrCell) { return _this.getBlocklessFootnotesFromInlineContainers(captionOrCell); }));
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichOutlineSyntaxNode_1 = __webpack_require__(25);
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(16);
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(18);
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(16);
	var CollectionHelpers_1 = __webpack_require__(13);
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var getInlineDescendants_1 = __webpack_require__(19);
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(18);
	var getTextAppearingInline_1 = __webpack_require__(30);
	var getSearchableText_1 = __webpack_require__(20);
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(18);
	var CollectionHelpers_1 = __webpack_require__(13);
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(16);
	var CollectionHelpers_1 = __webpack_require__(13);
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
	            ? OrderedList.Order.Descrending
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
	        Order[Order["Descrending"] = 2] = "Descrending";
	    })(OrderedList.Order || (OrderedList.Order = {}));
	    var Order = OrderedList.Order;
	})(OrderedList = exports.OrderedList || (exports.OrderedList = {}));
	//# sourceMappingURL=OrderedList.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(18);
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OutlineSyntaxNodeContainer_1 = __webpack_require__(16);
	var CollectionHelpers_1 = __webpack_require__(13);
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RevealableOutlineSyntaxNode_1 = __webpack_require__(36);
	var SpoilerBlock = (function (_super) {
	    __extends(SpoilerBlock, _super);
	    function SpoilerBlock() {
	        _super.apply(this, arguments);
	    }
	    SpoilerBlock.prototype.render = function (renderer) {
	        return renderer.spoilerBlock(this);
	    };
	    SpoilerBlock.prototype.SPOILER_BLOCK = function () { };
	    return SpoilerBlock;
	}(RevealableOutlineSyntaxNode_1.RevealableOutlineSyntaxNode));
	exports.SpoilerBlock = SpoilerBlock;
	//# sourceMappingURL=SpoilerBlock.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichOutlineSyntaxNode_1 = __webpack_require__(25);
	var RevealableOutlineSyntaxNode = (function (_super) {
	    __extends(RevealableOutlineSyntaxNode, _super);
	    function RevealableOutlineSyntaxNode() {
	        _super.apply(this, arguments);
	    }
	    RevealableOutlineSyntaxNode.prototype.descendantsToIncludeInTableOfContents = function () {
	        return [];
	    };
	    RevealableOutlineSyntaxNode.prototype.REVEALABLE_OUTLINE_SYNTAX_NODE = function () { };
	    return RevealableOutlineSyntaxNode;
	}(RichOutlineSyntaxNode_1.RichOutlineSyntaxNode));
	exports.RevealableOutlineSyntaxNode = RevealableOutlineSyntaxNode;
	//# sourceMappingURL=RevealableOutlineSyntaxNode.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RevealableOutlineSyntaxNode_1 = __webpack_require__(36);
	var NsfwBlock = (function (_super) {
	    __extends(NsfwBlock, _super);
	    function NsfwBlock() {
	        _super.apply(this, arguments);
	    }
	    NsfwBlock.prototype.render = function (renderer) {
	        return renderer.nsfwBlock(this);
	    };
	    NsfwBlock.prototype.NSFW_BLOCK = function () { };
	    return NsfwBlock;
	}(RevealableOutlineSyntaxNode_1.RevealableOutlineSyntaxNode));
	exports.NsfwBlock = NsfwBlock;
	//# sourceMappingURL=NsfwBlock.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RevealableOutlineSyntaxNode_1 = __webpack_require__(36);
	var NsflBlock = (function (_super) {
	    __extends(NsflBlock, _super);
	    function NsflBlock() {
	        _super.apply(this, arguments);
	    }
	    NsflBlock.prototype.render = function (renderer) {
	        return renderer.nsflBlock(this);
	    };
	    NsflBlock.prototype.NSFL_BLOCK = function () { };
	    return NsflBlock;
	}(RevealableOutlineSyntaxNode_1.RevealableOutlineSyntaxNode));
	exports.NsflBlock = NsflBlock;
	//# sourceMappingURL=NsflBlock.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(18);
	var PatternPieces_1 = __webpack_require__(10);
	var PatternHelpers_1 = __webpack_require__(11);
	var CollectionHelpers_1 = __webpack_require__(13);
	var getInlineDescendants_1 = __webpack_require__(19);
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
	        ].concat(this.rows.map(function (row) { return row.allCellsStartingWithRowHeaderCell; })));
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
	        return Cell;
	    }(InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer));
	    Table.Cell = Cell;
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
	        function Row(cells, headerCell) {
	            this.cells = cells;
	            this.headerCell = headerCell;
	        }
	        Object.defineProperty(Row.prototype, "allCellsStartingWithRowHeaderCell", {
	            get: function () {
	                var allCells = this.cells.slice();
	                if (this.headerCell) {
	                    allCells.unshift(this.headerCell);
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
	            Cell.prototype.isNumeric = function () {
	                var textContent = this.children
	                    .map(function (child) { return child.textAppearingInline(); })
	                    .join('');
	                return HAS_DIGIT_PATTERN.test(textContent) && !HAS_NON_NUMERIC_CHARACTER_PATTERN.test(textContent);
	            };
	            Cell.prototype.TABLE_ROW_CELL = function () { };
	            return Cell;
	        }(Table.Cell));
	        Row.Cell = Cell;
	        var HAS_DIGIT_PATTERN = new RegExp(PatternPieces_1.DIGIT);
	        var HAS_NON_NUMERIC_CHARACTER_PATTERN = new RegExp(PatternHelpers_1.anyCharMatching(PatternPieces_1.LETTER_CLASS, '_', PatternPieces_1.WHITESPACE_CHAR));
	    })(Row = Table.Row || (Table.Row = {}));
	})(Table = exports.Table || (exports.Table = {}));
	//# sourceMappingURL=Table.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CollectionHelpers_1 = __webpack_require__(13);
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var ThematicBreak_1 = __webpack_require__(43);
	var SpoilerBlock_1 = __webpack_require__(35);
	var NsfwBlock_1 = __webpack_require__(37);
	var NsflBlock_1 = __webpack_require__(38);
	var tryToParseThematicBreakStreak_1 = __webpack_require__(44);
	var tryToParseHeading_1 = __webpack_require__(45);
	var tryToParseBlankLineSeparation_1 = __webpack_require__(94);
	var tryToParseCodeBlock_1 = __webpack_require__(92);
	var tryToParseBlockquote_1 = __webpack_require__(91);
	var tryToParseUnorderedList_1 = __webpack_require__(88);
	var tryToParseOrderedList_1 = __webpack_require__(90);
	var tryToParseDescriptionList_1 = __webpack_require__(95);
	var tryToParseTableOrChart_1 = __webpack_require__(96);
	var getLabeledBlockParser_1 = __webpack_require__(98);
	var parseParagraphOrLineBlock_1 = __webpack_require__(99);
	var Patterns_1 = __webpack_require__(12);
	var CollectionHelpers_1 = __webpack_require__(13);
	function getOutlineSyntaxNodes(args) {
	    var markupLines = args.markupLines, headingLeveler = args.headingLeveler, config = args.config;
	    var terms = config.terms;
	    var outlineConventions = [
	        tryToParseBlankLineSeparation_1.tryToParseBlankLineSeparation,
	        tryToParseUnorderedList_1.tryToParseUnorderedList,
	        tryToParseOrderedList_1.trytoParseOrderedList,
	        tryToParseHeading_1.tryToParseHeading,
	        tryToParseThematicBreakStreak_1.tryToParseThematicBreakStreak,
	        tryToParseCodeBlock_1.tryToParseCodeBlock,
	        tryToParseBlockquote_1.tryToParseBlockquote,
	        tryToParseTableOrChart_1.tryToParseTableOrChart,
	        getLabeledBlockParser_1.getLabeledBlockParser(terms.markup.spoiler, SpoilerBlock_1.SpoilerBlock),
	        getLabeledBlockParser_1.getLabeledBlockParser(terms.markup.nsfw, NsfwBlock_1.NsfwBlock),
	        getLabeledBlockParser_1.getLabeledBlockParser(terms.markup.nsfl, NsflBlock_1.NsflBlock),
	        tryToParseDescriptionList_1.tryToParseDescriptionList
	    ];
	    var markupWithoutLeadingBlankLines = withoutLeadingBlankLines(markupLines);
	    var countLeadingBlankLinesRemoved = (markupLines.length - markupWithoutLeadingBlankLines.length);
	    var startingSourceLineNumber = args.sourceLineNumber + countLeadingBlankLinesRemoved;
	    var markupWithoutOuterBlankLines = withoutTrailingBlankLines(markupWithoutLeadingBlankLines);
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(markupWithoutOuterBlankLines);
	    var outlineNodes = [];
	    var _loop_1 = function() {
	        var sourceLineNumber = startingSourceLineNumber + markupLineConsumer.countLinesConsumed;
	        var outlineParserArgs = {
	            markupLines: markupLineConsumer.remaining(),
	            sourceLineNumber: sourceLineNumber,
	            headingLeveler: headingLeveler,
	            config: config,
	            then: function (newNodes, countLinesConsumed) {
	                if (config.createSourceMap) {
	                    for (var _i = 0, newNodes_1 = newNodes; _i < newNodes_1.length; _i++) {
	                        var node = newNodes_1[_i];
	                        node.sourceLineNumber = sourceLineNumber;
	                    }
	                }
	                outlineNodes.push.apply(outlineNodes, newNodes);
	                markupLineConsumer.skipLines(countLinesConsumed);
	            }
	        };
	        if (!outlineConventions.some(function (tryToParse) { return tryToParse(outlineParserArgs); })) {
	            parseParagraphOrLineBlock_1.parseParagraphOrLineBlock(outlineParserArgs);
	        }
	    };
	    while (!markupLineConsumer.done()) {
	        _loop_1();
	    }
	    return condenseConsecutiveThematicBreaks(outlineNodes);
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var ThematicBreak_1 = __webpack_require__(43);
	var Patterns_1 = __webpack_require__(12);
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var Heading_1 = __webpack_require__(17);
	var Patterns_1 = __webpack_require__(12);
	var getInlineSyntaxNodes_1 = __webpack_require__(46);
	var isLineFancyOutlineConvention_1 = __webpack_require__(87);
	var HeadingLeveler_1 = __webpack_require__(40);
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
	        && !isLineFancyOutlineConvention_1.isLineFancyOutlineConvention(contentMarkup, args.config));
	    if (!hasContentAndUnderline) {
	        return false;
	    }
	    var children = getInlineSyntaxNodes_1.getInlineSyntaxNodes(contentMarkup, args.config);
	    var level = args.headingLeveler.registerHeadingAndGetLevel(underline, optionalOverline);
	    args.then([new Heading_1.Heading(children, { level: level })], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.tryToParseHeading = tryToParseHeading;
	//# sourceMappingURL=tryToParseHeading.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tokenize_1 = __webpack_require__(47);
	var parse_1 = __webpack_require__(82);
	function getInlineSyntaxNodes(markup, config) {
	    return parse_1.parse(tokenize_1.tokenize(markup, config));
	}
	exports.getInlineSyntaxNodes = getInlineSyntaxNodes;
	function getInlineSyntaxNodesForInlineDocument(markup, config) {
	    return parse_1.parse(tokenize_1.tokenizeForInlineDocument(markup, config));
	}
	exports.getInlineSyntaxNodesForInlineDocument = getInlineSyntaxNodesForInlineDocument;
	//# sourceMappingURL=getInlineSyntaxNodes.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var RichConventions_1 = __webpack_require__(48);
	var MediaConventions_1 = __webpack_require__(65);
	var PatternHelpers_1 = __webpack_require__(11);
	var PatternPieces_1 = __webpack_require__(10);
	var Patterns_1 = __webpack_require__(12);
	var Strings_1 = __webpack_require__(70);
	var tryToTokenizeCodeOrUnmatchedDelimiter_1 = __webpack_require__(71);
	var nestOverlappingConventions_1 = __webpack_require__(74);
	var CollectionHelpers_1 = __webpack_require__(13);
	var StringHelpers_1 = __webpack_require__(22);
	var Bracket_1 = __webpack_require__(75);
	var FailedConventionTracker_1 = __webpack_require__(76);
	var ConventionContext_1 = __webpack_require__(77);
	var TextConsumer_1 = __webpack_require__(72);
	var TokenRole_1 = __webpack_require__(63);
	var Token_1 = __webpack_require__(73);
	var Convention_1 = __webpack_require__(78);
	var InflectionHandler_1 = __webpack_require__(79);
	var trimEscapedAndUnescapedOuterWhitespace_1 = __webpack_require__(81);
	function tokenize(markup, config) {
	    return new Tokenizer(markup, config).result;
	}
	exports.tokenize = tokenize;
	function tokenizeForInlineDocument(markup, config) {
	    var result = (new Tokenizer(markup, config, { isTokenizingInlineDocument: true })).result;
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
	    function Tokenizer(markup, config, options) {
	        var _this = this;
	        this.config = config;
	        this.textBuffer = '';
	        this.tokens = [];
	        this.openContexts = [];
	        this.failedConventionTracker = new FailedConventionTracker_1.FailedConventionTracker();
	        this.rawParentheticalBracketConventions = this.getRawParentheticalBracketConventions();
	        this.rawCurlyBracketConvention = this.getRawCurlyBracketConvention();
	        this.mediaUrlConventions = this.getMediaUrlConventions();
	        this.linkUrlConventions = this.getLinkUrlConventions();
	        this.nakedUrlPathConvention = this.getBareUrlPathConvention();
	        this.inflectionHandlers = [
	            {
	                delimiterChar: '*',
	                conventionForMinorInflection: RichConventions_1.EMPHASIS,
	                conventionForMajorInflection: RichConventions_1.STRESS
	            }, {
	                delimiterChar: '_',
	                conventionForMinorInflection: RichConventions_1.ITALIC,
	                conventionForMajorInflection: RichConventions_1.BOLD
	            }, {
	                delimiterChar: '"',
	                conventionForMinorInflection: RichConventions_1.QUOTE
	            }
	        ].map(function (args) { return _this.getInflectionHandler(args); });
	        var trimmedMarkup = trimEscapedAndUnescapedOuterWhitespace_1.trimEscapedAndUnescapedOuterWhitespace(markup);
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
	        this.conventions = CollectionHelpers_1.concat([
	            {
	                richConvention: RichConventions_1.HIGHLIGHT,
	                term: this.config.terms.markup.highlight
	            }, {
	                richConvention: RichConventions_1.SPOILER,
	                term: this.config.terms.markup.spoiler
	            }, {
	                richConvention: RichConventions_1.NSFW,
	                term: this.config.terms.markup.nsfw
	            }, {
	                richConvention: RichConventions_1.NSFL,
	                term: this.config.terms.markup.nsfl
	            }
	        ].map(function (args) { return _this.getConventionsForLabeledRichBrackets(args); })).concat(this.getMediaDescriptionConventions(), (isTokenizingInlineDocument
	            ? this.getFootnoteConventionsForInlineDocuments()
	            : this.getFootnoteConventions().concat(this.getReferenceToTableOfContentsEntryConventions())), this.getLinkifyingUrlConventions(), this.getLinkContentConventions(), [
	            {
	                richConvention: RichConventions_1.NORMAL_PARENTHETICAL,
	                bracket: PARENTHESIS
	            }, {
	                richConvention: RichConventions_1.SQUARE_PARENTHETICAL,
	                bracket: SQUARE_BRACKET
	            }
	        ].map(function (args) { return _this.getParentheticalConvention(args); }), [
	            this.getExampleInputConvention(),
	            this.nakedUrlPathConvention
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
	                whenOpening: function () {
	                    _this.textBuffer += '(';
	                },
	                whenClosing: function () {
	                    _this.textBuffer += ')';
	                }
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
	        var richConvention = args.richConvention, term = args.term;
	        return PARENTHETICAL_BRACKETS.map(function (bracket) {
	            return _this.getTokenizableRichConvention({
	                richConvention: richConvention,
	                startsWith: labeledBracketStartDelimiter(term, bracket),
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
	            startsWith: bracket.startPattern + NOT_FOLLOWED_BY_WHITESPACE,
	            endsWith: bracket.endPattern,
	            whenOpening: function () { _this.textBuffer += bracket.open; },
	            whenClosing: function () { _this.textBuffer += bracket.close; },
	            insteadOfFailingWhenLeftUnclosed: function () { }
	        });
	    };
	    Tokenizer.prototype.getTokenizableRichConvention = function (args) {
	        var _this = this;
	        var richConvention = args.richConvention, startsWith = args.startsWith, endsWith = args.endsWith, startPatternContainsATerm = args.startPatternContainsATerm, whenOpening = args.whenOpening, insteadOfFailingWhenLeftUnclosed = args.insteadOfFailingWhenLeftUnclosed, whenClosing = args.whenClosing, mustBeDirectlyFollowedBy = args.mustBeDirectlyFollowedBy;
	        return new Convention_1.Convention({
	            startsWith: startDelimiterNotFollowedByEndDelimiter(startsWith, endsWith),
	            startPatternContainsATerm: startPatternContainsATerm,
	            endsWith: endsWith,
	            beforeOpeningItFlushesNonEmptyBufferToPlainTextToken: true,
	            beforeClosingItFlushesNonEmptyBufferTo: TokenRole_1.TokenRole.PlainText,
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
	            pattern: NAKED_URL_SCHEME_AND_HOSTNAME,
	            thenBeforeConsumingText: function (url) {
	                _this.flushNonEmptyBufferToPlainTextToken();
	                _this.appendNewToken(TokenRole_1.TokenRole.BareUrl, url);
	            }
	        });
	    };
	    Tokenizer.prototype.getBareUrlPathConvention = function () {
	        var _this = this;
	        return new Convention_1.Convention({
	            startsWith: PatternPieces_1.FORWARD_SLASH,
	            isCutShortByWhitespace: true,
	            whenOpening: function () {
	                _this.textBuffer += PatternPieces_1.FORWARD_SLASH;
	            },
	            canOnlyOpenIfDirectlyFollowing: [TokenRole_1.TokenRole.BareUrl],
	            insteadOfOpeningNormalConventionsWhileOpen: function () { return _this.handleTextAwareOfRawBrackets(); },
	            whenClosingItAlsoClosesInnerConventions: true,
	            whenClosing: function () { return _this.appendBufferedUlPathToCurrentBareUrl(); },
	            insteadOfFailingWhenLeftUnclosed: function () { return _this.appendBufferedUlPathToCurrentBareUrl(); }
	        });
	    };
	    Tokenizer.prototype.getExampleInputConvention = function () {
	        var _this = this;
	        return new Convention_1.Convention({
	            startsWith: startDelimiterNotFollowedByEndDelimiter(CURLY_BRACKET.startPattern, CURLY_BRACKET.endPattern),
	            endsWith: CURLY_BRACKET.endPattern,
	            beforeOpeningItFlushesNonEmptyBufferToPlainTextToken: true,
	            insteadOfOpeningNormalConventionsWhileOpen: function () {
	                _this.tryToOpen(_this.rawCurlyBracketConvention)
	                    || _this.tryToTokenizeTypographicalConvention()
	                    || _this.bufferCurrentChar();
	            },
	            whenClosing: function () {
	                var exampleInput = _this.flushBuffer().trim();
	                _this.appendNewToken(TokenRole_1.TokenRole.ExampleInput, exampleInput);
	            }
	        });
	    };
	    Tokenizer.prototype.getReferenceToTableOfContentsEntryConventions = function () {
	        var _this = this;
	        var term = this.config.terms.markup.referenceToTableOfContentsEntry;
	        return PARENTHETICAL_BRACKETS.map(function (bracket) {
	            return new Convention_1.Convention({
	                startsWith: startDelimiterNotFollowedByEndDelimiter(labeledBracketStartDelimiter(term, bracket), bracket.endPattern),
	                startPatternContainsATerm: true,
	                endsWith: bracket.endPattern,
	                beforeOpeningItFlushesNonEmptyBufferToPlainTextToken: true,
	                insteadOfOpeningNormalConventionsWhileOpen: function () { return _this.handleTextAwareOfTypographyAndRawParentheticalBrackets(); },
	                whenClosing: function () {
	                    var snippetFromEntry = _this.flushBuffer().trim();
	                    _this.appendNewToken(TokenRole_1.TokenRole.ReferenceToTableOfContentsEntry, snippetFromEntry);
	                }
	            });
	        });
	    };
	    Tokenizer.prototype.getMediaDescriptionConventions = function () {
	        var _this = this;
	        return CollectionHelpers_1.concat([MediaConventions_1.IMAGE, MediaConventions_1.VIDEO, MediaConventions_1.AUDIO].map(function (media) {
	            var mediaTerm = media.term(_this.config.terms.markup);
	            return PARENTHETICAL_BRACKETS.map(function (bracket) {
	                return new Convention_1.Convention({
	                    startsWith: startDelimiterNotFollowedByEndDelimiter(labeledBracketStartDelimiter(mediaTerm, bracket), bracket.endPattern),
	                    startPatternContainsATerm: true,
	                    endsWith: bracket.endPattern,
	                    beforeOpeningItFlushesNonEmptyBufferToPlainTextToken: true,
	                    insteadOfClosingOuterConventionsWhileOpen: function () { return _this.handleTextAwareOfTypographyAndRawParentheticalBrackets(); },
	                    beforeClosingItAlwaysFlushesBufferTo: media.startAndDescriptionTokenRole,
	                    whenClosingItAlsoClosesInnerConventions: true,
	                    mustBeDirectlyFollowedBy: _this.mediaUrlConventions
	                });
	            });
	        }));
	    };
	    Tokenizer.prototype.getMediaUrlConventions = function () {
	        var _this = this;
	        return PARENTHETICAL_BRACKETS.map(function (bracket) { return new Convention_1.Convention({
	            startsWith: PatternPieces_1.ANY_WHITESPACE + _this.startPatternForBracketedUrlAssumedToBeAUrl(bracket),
	            endsWith: bracket.endPattern,
	            beforeOpeningItFlushesNonEmptyBufferToPlainTextToken: true,
	            insteadOfClosingOuterConventionsWhileOpen: function () { return _this.handleTextAwareOfRawBrackets(); },
	            whenClosingItAlsoClosesInnerConventions: true,
	            whenClosing: function () {
	                var url = _this.config.applySettingsToUrl(_this.flushBuffer());
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
	            RichConventions_1.SPOILER,
	            RichConventions_1.NSFW,
	            RichConventions_1.NSFL,
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
	        return new Convention_1.Convention({
	            canOnlyOpenIfDirectlyFollowing: canOnlyOpenIfDirectlyFollowing,
	            startsWith: this.startPatternForBracketedUrlAssumedToBeAUrl(bracket),
	            endsWith: bracket.endPattern,
	            insteadOfClosingOuterConventionsWhileOpen: function () { return _this.handleTextAwareOfRawBrackets(); },
	            whenClosingItAlsoClosesInnerConventions: true,
	            whenClosing: function () {
	                var url = _this.config.applySettingsToUrl(_this.flushBuffer());
	                whenClosing(url);
	            }
	        });
	    };
	    Tokenizer.prototype.startPatternForBracketedUrlAssumedToBeAUrl = function (bracket) {
	        return bracket.startPattern + PatternHelpers_1.notFollowedBy(PatternPieces_1.ANY_WHITESPACE
	            + PatternHelpers_1.anyCharMatching(bracket.endPattern, PatternHelpers_1.escapeForRegex(Strings_1.ESCAPER_CHAR)));
	    };
	    Tokenizer.prototype.getConventionForBracketedUrlOffsetByWhitespace = function (args) {
	        var _this = this;
	        var bracket = args.bracket, canOnlyOpenIfDirectlyFollowing = args.canOnlyOpenIfDirectlyFollowing, whenClosing = args.whenClosing;
	        return new Convention_1.Convention({
	            canOnlyOpenIfDirectlyFollowing: canOnlyOpenIfDirectlyFollowing,
	            startsWith: PatternPieces_1.SOME_WHITESPACE + bracket.startPattern + PatternHelpers_1.capture(PatternHelpers_1.either(EXPLICIT_URL_PREFIX, TOP_LEVEL_DOMAIN_WITH_AT_LEAST_ONE_SUBDOMAIN + PatternHelpers_1.either(PatternPieces_1.FORWARD_SLASH, PatternHelpers_1.followedBy(bracket.endPattern)))),
	            endsWith: bracket.endPattern,
	            whenOpening: function (_1, _2, urlPrefix) { _this.textBuffer += urlPrefix; },
	            failsIfWhitespaceIsEnounteredBeforeClosing: true,
	            insteadOfClosingOuterConventionsWhileOpen: function () { return _this.handleTextAwareOfRawBrackets(); },
	            whenClosingItAlsoClosesInnerConventions: true,
	            whenClosing: function (context) {
	                var url = _this.config.applySettingsToUrl(_this.flushBuffer());
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
	        return new Convention_1.Convention({
	            startsWith: bracket.startPattern,
	            endsWith: bracket.endPattern,
	            whenOpening: function () { _this.textBuffer += bracket.open; },
	            whenClosing: function () { _this.textBuffer += bracket.close; },
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
	            insertPlainTextToken: function (text, atIndex) {
	                _this.insertToken({
	                    token: new Token_1.Token(TokenRole_1.TokenRole.PlainText, text),
	                    atIndex: atIndex
	                });
	            }
	        });
	    };
	    Tokenizer.prototype.tokenize = function () {
	        do {
	            this.bufferContentThatCannotOpenOrCloseAnyConventions();
	        } while (!this.isDone()
	            && (this.tryToCollectEscapedChar()
	                || this.tryToCloseAnyConvention()
	                || this.performContextSpecificBehaviorInsteadOfTryingToOpenRegularConventions()
	                || this.tryToOpenAnyConvention()
	                || this.bufferCurrentChar()));
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
	        this.flushNonEmptyBufferToPlainTextToken();
	        for (var _i = 0, _a = this.inflectionHandlers; _i < _a.length; _i++) {
	            var inflectionHandler = _a[_i];
	            inflectionHandler.treatDanglingStartDelimitersAsPlainText();
	        }
	        return true;
	    };
	    Tokenizer.prototype.tryToCollectEscapedChar = function () {
	        if (this.markupConsumer.currentChar === Strings_1.ESCAPER_CHAR) {
	            this.markupConsumer.index += 1;
	            return this.markupConsumer.done() || this.bufferCurrentChar();
	        }
	        return false;
	    };
	    Tokenizer.prototype.bufferContentThatCannotOpenOrCloseAnyConventions = function () {
	        var _this = this;
	        var tryToBuffer = function (pattern) {
	            return _this.markupConsumer.consume({
	                pattern: pattern,
	                thenBeforeConsumingText: function (match) { _this.textBuffer += match; }
	            });
	        };
	        var canTryToBufferWhitespace = this.openContexts.every(function (context) {
	            return !context.convention.isCutShortByWhitespace
	                && !context.convention.failsIfWhitespaceIsEnounteredBeforeClosing;
	        });
	        do {
	            tryToBuffer(CONTENT_WITH_NO_SPECIAL_MEANING);
	        } while (canTryToBufferWhitespace
	            && tryToBuffer(WHITESPACE_THAT_NORMALLY_HAS_NO_SPECIAL_MEANING));
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
	        return WHITESPACE_CHAR_PATTERN.test(this.markupConsumer.currentChar);
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
	            if (openContexts[i].convention === this.nakedUrlPathConvention) {
	                this.appendBufferedUlPathToCurrentBareUrl();
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
	        this.flushNonEmptyBufferToPlainTextToken();
	        var startToken = new Token_1.Token(richConvention.startTokenRole);
	        var endToken = new Token_1.Token(richConvention.endTokenRole);
	        startToken.enclosesContentBetweenItselfAnd(endToken);
	        this.insertToken({ token: startToken, atIndex: startTokenIndex });
	        var endTokenIndex = this.tokens.length;
	        for (var i = endTokenIndex - 1; i > startTokenIndex; i--) {
	            var token = this.tokens[i];
	            var isCurrentTokenAnEndToken = token.correspondingEnclosingToken != null;
	            var shouldEndTokenAppearBeforeCurrentToken = isCurrentTokenAnEndToken
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
	        return (this.conventions.some(function (convention) { return _this.tryToOpen(convention); })
	            || this.tryToTokenizeBareUrlSchemeAndHostname()
	            || this.tryToStartInflectingOrTreatDelimiterAsPlainText()
	            || this.tryToTokenizeInlineCodeOrUnmatchedDelimiter()
	            || this.tryToTokenizeTypographicalConvention());
	    };
	    Tokenizer.prototype.tryToStartInflectingOrTreatDelimiterAsPlainText = function () {
	        var _this = this;
	        var didOpen = this.inflectionHandlers.some(function (handler) {
	            return _this.markupConsumer.consume({
	                pattern: handler.delimiterPattern,
	                thenBeforeConsumingText: function (delimiter, charAfterMatch) {
	                    if (Patterns_1.NON_BLANK_PATTERN.test(charAfterMatch)) {
	                        _this.flushNonEmptyBufferToPlainTextToken();
	                        handler.addOpenStartDelimiter(delimiter, _this.tokens.length);
	                    }
	                    else {
	                        _this.textBuffer += delimiter;
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
	        return tryToTokenizeCodeOrUnmatchedDelimiter_1.tryToTokenizeCodeOrUnmatchedDelimiter({
	            markup: this.markupConsumer.remaining,
	            then: function (resultToken, lengthConsumed) {
	                _this.flushNonEmptyBufferToPlainTextToken();
	                _this.appendToken(resultToken);
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
	                _this.textBuffer +=
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
	                _this.textBuffer += '±';
	            }
	        });
	    };
	    Tokenizer.prototype.tryToTokenizeEllipsis = function () {
	        var _this = this;
	        return this.markupConsumer.consume({
	            pattern: ELLIPSIS_PATTERN,
	            thenBeforeConsumingText: function () {
	                _this.textBuffer += _this.config.ellipsis;
	            }
	        });
	    };
	    Tokenizer.prototype.appendToken = function (token) {
	        this.tokens.push(token);
	        this.mostRecentToken = token;
	    };
	    Tokenizer.prototype.bufferCurrentChar = function () {
	        this.textBuffer += this.markupConsumer.currentChar;
	        this.markupConsumer.index += 1;
	        return true;
	    };
	    Tokenizer.prototype.tryToOpen = function (convention) {
	        var _this = this;
	        var startsWith = convention.startsWith, flushesBufferToPlainTextTokenBeforeOpening = convention.flushesBufferToPlainTextTokenBeforeOpening, whenOpening = convention.whenOpening;
	        var didOpen = (this.canTry(convention)
	            && this.markupConsumer.consume({
	                pattern: startsWith,
	                thenBeforeConsumingText: function (match, charAfterMatch) {
	                    var captures = [];
	                    for (var _i = 2; _i < arguments.length; _i++) {
	                        captures[_i - 2] = arguments[_i];
	                    }
	                    if (flushesBufferToPlainTextTokenBeforeOpening) {
	                        _this.flushNonEmptyBufferToPlainTextToken();
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
	            tokens: this.tokens.slice(),
	            openContexts: this.openContexts.map(function (context) { return context.clone(); }),
	            inflectionHandlers: this.inflectionHandlers.map(function (handler) { return handler.clone(); }),
	            textBuffer: this.textBuffer
	        };
	    };
	    Tokenizer.prototype.canTry = function (conventionToOpen) {
	        var _this = this;
	        var textIndex = this.markupConsumer.index;
	        var subsequentRequiredConventions = conventionToOpen.mustBeDirectlyFollowedBy;
	        var hasSubsequentRequiredConventionFailed = subsequentRequiredConventions
	            && subsequentRequiredConventions.some(function (convention) { return _this.failedConventionTracker.hasFailed(convention, textIndex); });
	        if (hasSubsequentRequiredConventionFailed) {
	            return false;
	        }
	        var canOnlyOpenIfDirectlyFollowing = conventionToOpen.canOnlyOpenIfDirectlyFollowing;
	        return (!this.failedConventionTracker.hasFailed(conventionToOpen, textIndex)
	            && (!canOnlyOpenIfDirectlyFollowing || this.isDirectlyFollowing(canOnlyOpenIfDirectlyFollowing)));
	    };
	    Tokenizer.prototype.isDirectlyFollowing = function (tokenRoles) {
	        var _this = this;
	        return (!this.textBuffer
	            && this.mostRecentToken
	            && tokenRoles.some(function (tokenRole) { return _this.mostRecentToken.role === tokenRole; }));
	    };
	    Tokenizer.prototype.backtrackToBeforeContext = function (context) {
	        this.failedConventionTracker.registerFailure(context);
	        var snapshot = context.snapshot;
	        this.tokens = snapshot.tokens;
	        this.textBuffer = snapshot.textBuffer;
	        this.markupConsumer.index = snapshot.markupIndex;
	        this.openContexts = snapshot.openContexts;
	        this.inflectionHandlers = snapshot.inflectionHandlers;
	    };
	    Tokenizer.prototype.appendNewToken = function (role, value) {
	        this.appendToken(new Token_1.Token(role, value));
	    };
	    Tokenizer.prototype.appendBufferedUlPathToCurrentBareUrl = function () {
	        if (this.mostRecentToken.role === TokenRole_1.TokenRole.BareUrl) {
	            this.mostRecentToken.value += this.flushBuffer();
	        }
	        else {
	            throw new Error('Most recent token is not a bare URL token');
	        }
	    };
	    Tokenizer.prototype.flushBuffer = function () {
	        var buffer = this.textBuffer;
	        this.textBuffer = '';
	        return buffer;
	    };
	    Tokenizer.prototype.flushNonEmptyBufferToToken = function (role) {
	        if (this.textBuffer) {
	            this.appendNewToken(role, this.flushBuffer());
	        }
	    };
	    Tokenizer.prototype.flushBufferToToken = function (role) {
	        this.appendNewToken(role, this.flushBuffer());
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
	    Tokenizer.prototype.flushNonEmptyBufferToPlainTextToken = function () {
	        this.flushNonEmptyBufferToToken(TokenRole_1.TokenRole.PlainText);
	    };
	    Tokenizer.prototype.handleTextAwareOfRawBrackets = function () {
	        this.tryToOpenRawParentheticalBracketConvention() || this.bufferCurrentChar();
	    };
	    Tokenizer.prototype.handleTextAwareOfTypographyAndRawParentheticalBrackets = function () {
	        this.tryToOpenRawParentheticalBracketConvention()
	            || this.tryToTokenizeTypographicalConvention()
	            || this.bufferCurrentChar();
	    };
	    Tokenizer.prototype.tryToOpenRawParentheticalBracketConvention = function () {
	        var _this = this;
	        return this.rawParentheticalBracketConventions.some(function (convention) { return _this.tryToOpen(convention); });
	    };
	    return Tokenizer;
	}());
	function labeledBracketStartDelimiter(term, bracket) {
	    return bracket.startPattern + PatternHelpers_1.either.apply(void 0, term.map(PatternHelpers_1.escapeForRegex)) + ':' + PatternPieces_1.ANY_WHITESPACE;
	}
	function startDelimiterNotFollowedByEndDelimiter(startDelimiter, endDelimiter) {
	    return startDelimiter + PatternHelpers_1.notFollowedBy(PatternPieces_1.ANY_WHITESPACE + endDelimiter);
	}
	var WHITESPACE_CHAR_PATTERN = new RegExp(PatternPieces_1.WHITESPACE_CHAR);
	var NOT_FOLLOWED_BY_WHITESPACE = PatternHelpers_1.notFollowedBy(PatternPieces_1.WHITESPACE_CHAR);
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
	var NAKED_URL_SCHEME = 'http' + PatternHelpers_1.optional('s') + '://';
	var NAKED_URL_SCHEME_AND_HOSTNAME = PatternHelpers_1.patternStartingWith(NAKED_URL_SCHEME
	    + PatternHelpers_1.everyOptional(URL_SUBDOMAIN) + URL_TOP_LEVEL_DOMAIN);
	var PARENTHETICAL_BRACKET_START_PATTERNS = PARENTHETICAL_BRACKETS.map(function (bracket) { return bracket.startPattern; });
	var ALL_BRACKETS = [PARENTHESIS, SQUARE_BRACKET, CURLY_BRACKET];
	var BRACKET_START_PATTERNS = ALL_BRACKETS.map(function (bracket) { return bracket.startPattern; });
	var BRACKET_END_PATTERNS = ALL_BRACKETS.map(function (bracket) { return bracket.endPattern; });
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
	].concat(BRACKET_START_PATTERNS, BRACKET_END_PATTERNS, [Strings_1.ESCAPER_CHAR, '*'].map(PatternHelpers_1.escapeForRegex));
	var CONTENT_WITH_NO_SPECIAL_MEANING = PatternHelpers_1.patternStartingWith(PatternHelpers_1.oneOrMore(PatternHelpers_1.either(PatternHelpers_1.anyCharNotMatching.apply(void 0, CHARACTERS_WITH_POTENTIAL_SPECIAL_MEANING), 'h' + PatternHelpers_1.notFollowedBy('ttp' + PatternHelpers_1.optional('s') + '://'), PERIOD + PatternHelpers_1.notFollowedBy(PERIOD), HYPHEN + PatternHelpers_1.notFollowedBy(HYPHEN), PLUS_SIGN + PatternHelpers_1.notFollowedBy(HYPHEN))));
	var WHITESPACE_THAT_NORMALLY_HAS_NO_SPECIAL_MEANING = PatternHelpers_1.patternStartingWith(PatternPieces_1.SOME_WHITESPACE + PatternHelpers_1.notFollowedBy(PatternHelpers_1.anyCharMatching.apply(void 0, PARENTHETICAL_BRACKET_START_PATTERNS.concat([PatternPieces_1.WHITESPACE_CHAR]))));
	//# sourceMappingURL=tokenize.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Emphasis_1 = __webpack_require__(49);
	var Stress_1 = __webpack_require__(50);
	var Italic_1 = __webpack_require__(51);
	var Bold_1 = __webpack_require__(52);
	var Highlight_1 = __webpack_require__(53);
	var InlineSpoiler_1 = __webpack_require__(54);
	var InlineNsfw_1 = __webpack_require__(56);
	var InlineNsfl_1 = __webpack_require__(57);
	var InlineQuote_1 = __webpack_require__(58);
	var Footnote_1 = __webpack_require__(28);
	var SquareParenthetical_1 = __webpack_require__(59);
	var NormalParenthetical_1 = __webpack_require__(61);
	var Link_1 = __webpack_require__(62);
	var TokenRole_1 = __webpack_require__(63);
	var RevealableConvention_1 = __webpack_require__(64);
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
	exports.ITALIC = {
	    SyntaxNodeType: Italic_1.Italic,
	    startTokenRole: TokenRole_1.TokenRole.ItalicStart,
	    endTokenRole: TokenRole_1.TokenRole.ItalicEnd
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
	exports.QUOTE = {
	    SyntaxNodeType: InlineQuote_1.InlineQuote,
	    startTokenRole: TokenRole_1.TokenRole.QuoteStart,
	    endTokenRole: TokenRole_1.TokenRole.QuoteEnd
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
	exports.LINK = {
	    SyntaxNodeType: Link_1.Link,
	    startTokenRole: TokenRole_1.TokenRole.LinkStart,
	    endTokenRole: TokenRole_1.TokenRole.LinkEndAndUrl
	};
	exports.SPOILER = new RevealableConvention_1.RevealableConvention({
	    SyntaxNodeType: InlineSpoiler_1.InlineSpoiler,
	    startTokenRole: TokenRole_1.TokenRole.SpoilerStart,
	    endTokenRole: TokenRole_1.TokenRole.SpoilerEnd
	});
	exports.NSFW = new RevealableConvention_1.RevealableConvention({
	    SyntaxNodeType: InlineNsfw_1.InlineNsfw,
	    startTokenRole: TokenRole_1.TokenRole.NsfwStart,
	    endTokenRole: TokenRole_1.TokenRole.NsfwEnd
	});
	exports.NSFL = new RevealableConvention_1.RevealableConvention({
	    SyntaxNodeType: InlineNsfl_1.InlineNsfl,
	    startTokenRole: TokenRole_1.TokenRole.NsflStart,
	    endTokenRole: TokenRole_1.TokenRole.NsflEnd
	});
	//# sourceMappingURL=RichConventions.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
	var Italic = (function (_super) {
	    __extends(Italic, _super);
	    function Italic() {
	        _super.apply(this, arguments);
	    }
	    Italic.prototype.render = function (renderer) {
	        return renderer.italic(this);
	    };
	    Italic.prototype.ITALIC = function () { };
	    return Italic;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.Italic = Italic;
	//# sourceMappingURL=Italic.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RevealableInlineSyntaxNode_1 = __webpack_require__(55);
	var InlineSpoiler = (function (_super) {
	    __extends(InlineSpoiler, _super);
	    function InlineSpoiler() {
	        _super.apply(this, arguments);
	    }
	    InlineSpoiler.prototype.render = function (renderer) {
	        return renderer.inlineSpoiler(this);
	    };
	    InlineSpoiler.prototype.INLINE_SPOILER = function () { };
	    return InlineSpoiler;
	}(RevealableInlineSyntaxNode_1.RevealableInlineSyntaxNode));
	exports.InlineSpoiler = InlineSpoiler;
	//# sourceMappingURL=InlineSpoiler.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
	var RevealableInlineSyntaxNode = (function (_super) {
	    __extends(RevealableInlineSyntaxNode, _super);
	    function RevealableInlineSyntaxNode() {
	        _super.apply(this, arguments);
	    }
	    RevealableInlineSyntaxNode.prototype.REVEALABLE_INLINE_SYNTAX_NODE = function () { };
	    return RevealableInlineSyntaxNode;
	}(RichInlineSyntaxNode_1.RichInlineSyntaxNode));
	exports.RevealableInlineSyntaxNode = RevealableInlineSyntaxNode;
	//# sourceMappingURL=RevealableInlineSyntaxNode.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RevealableInlineSyntaxNode_1 = __webpack_require__(55);
	var InlineNsfw = (function (_super) {
	    __extends(InlineNsfw, _super);
	    function InlineNsfw() {
	        _super.apply(this, arguments);
	    }
	    InlineNsfw.prototype.render = function (renderer) {
	        return renderer.inlineNsfw(this);
	    };
	    InlineNsfw.prototype.INLINE_NSFW = function () { };
	    return InlineNsfw;
	}(RevealableInlineSyntaxNode_1.RevealableInlineSyntaxNode));
	exports.InlineNsfw = InlineNsfw;
	//# sourceMappingURL=InlineNsfw.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RevealableInlineSyntaxNode_1 = __webpack_require__(55);
	var InlineNsfl = (function (_super) {
	    __extends(InlineNsfl, _super);
	    function InlineNsfl() {
	        _super.apply(this, arguments);
	    }
	    InlineNsfl.prototype.render = function (renderer) {
	        return renderer.inlineNsfl(this);
	    };
	    InlineNsfl.prototype.INLINE_NSFL = function () { };
	    return InlineNsfl;
	}(RevealableInlineSyntaxNode_1.RevealableInlineSyntaxNode));
	exports.InlineNsfl = InlineNsfl;
	//# sourceMappingURL=InlineNsfl.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RevealableInlineSyntaxNode_1 = __webpack_require__(55);
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
	}(RevealableInlineSyntaxNode_1.RevealableInlineSyntaxNode));
	exports.InlineQuote = InlineQuote;
	//# sourceMappingURL=InlineQuote.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ParentheticalSyntaxNode_1 = __webpack_require__(60);
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ParentheticalSyntaxNode_1 = __webpack_require__(60);
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var RichInlineSyntaxNode_1 = __webpack_require__(29);
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
/* 63 */
/***/ function(module, exports) {

	"use strict";
	(function (TokenRole) {
	    TokenRole[TokenRole["AudioStartAndDescription"] = 1] = "AudioStartAndDescription";
	    TokenRole[TokenRole["BoldEnd"] = 2] = "BoldEnd";
	    TokenRole[TokenRole["BoldStart"] = 3] = "BoldStart";
	    TokenRole[TokenRole["Code"] = 4] = "Code";
	    TokenRole[TokenRole["EmphasisEnd"] = 5] = "EmphasisEnd";
	    TokenRole[TokenRole["EmphasisStart"] = 6] = "EmphasisStart";
	    TokenRole[TokenRole["ExampleInput"] = 7] = "ExampleInput";
	    TokenRole[TokenRole["FootnoteEnd"] = 8] = "FootnoteEnd";
	    TokenRole[TokenRole["FootnoteStart"] = 9] = "FootnoteStart";
	    TokenRole[TokenRole["HighlightEnd"] = 10] = "HighlightEnd";
	    TokenRole[TokenRole["HighlightStart"] = 11] = "HighlightStart";
	    TokenRole[TokenRole["ReferenceToTableOfContentsEntry"] = 12] = "ReferenceToTableOfContentsEntry";
	    TokenRole[TokenRole["ImageStartAndDescription"] = 13] = "ImageStartAndDescription";
	    TokenRole[TokenRole["ItalicEnd"] = 14] = "ItalicEnd";
	    TokenRole[TokenRole["ItalicStart"] = 15] = "ItalicStart";
	    TokenRole[TokenRole["LinkEndAndUrl"] = 16] = "LinkEndAndUrl";
	    TokenRole[TokenRole["LinkStart"] = 17] = "LinkStart";
	    TokenRole[TokenRole["MediaEndAndUrl"] = 18] = "MediaEndAndUrl";
	    TokenRole[TokenRole["BareUrl"] = 19] = "BareUrl";
	    TokenRole[TokenRole["NsflEnd"] = 20] = "NsflEnd";
	    TokenRole[TokenRole["NsflStart"] = 21] = "NsflStart";
	    TokenRole[TokenRole["NsfwEnd"] = 22] = "NsfwEnd";
	    TokenRole[TokenRole["NsfwStart"] = 23] = "NsfwStart";
	    TokenRole[TokenRole["NormalParentheticalEnd"] = 24] = "NormalParentheticalEnd";
	    TokenRole[TokenRole["NormalParentheticalStart"] = 25] = "NormalParentheticalStart";
	    TokenRole[TokenRole["PlainText"] = 26] = "PlainText";
	    TokenRole[TokenRole["PotentialRaisedVoiceEnd"] = 27] = "PotentialRaisedVoiceEnd";
	    TokenRole[TokenRole["PotentialRaisedVoiceStart"] = 28] = "PotentialRaisedVoiceStart";
	    TokenRole[TokenRole["PotentialRaisedVoiceStartOrEnd"] = 29] = "PotentialRaisedVoiceStartOrEnd";
	    TokenRole[TokenRole["RevisionDeletionEnd"] = 30] = "RevisionDeletionEnd";
	    TokenRole[TokenRole["RevisionDeletionStart"] = 31] = "RevisionDeletionStart";
	    TokenRole[TokenRole["RevisionInsertionEnd"] = 32] = "RevisionInsertionEnd";
	    TokenRole[TokenRole["RevisionInsertionStart"] = 33] = "RevisionInsertionStart";
	    TokenRole[TokenRole["SpoilerEnd"] = 34] = "SpoilerEnd";
	    TokenRole[TokenRole["SpoilerStart"] = 35] = "SpoilerStart";
	    TokenRole[TokenRole["SquareParentheticalEnd"] = 36] = "SquareParentheticalEnd";
	    TokenRole[TokenRole["SquareParentheticalStart"] = 37] = "SquareParentheticalStart";
	    TokenRole[TokenRole["StressEnd"] = 38] = "StressEnd";
	    TokenRole[TokenRole["StressStart"] = 39] = "StressStart";
	    TokenRole[TokenRole["QuoteStart"] = 40] = "QuoteStart";
	    TokenRole[TokenRole["QuoteEnd"] = 41] = "QuoteEnd";
	    TokenRole[TokenRole["VideoStartAndDescription"] = 42] = "VideoStartAndDescription";
	})(exports.TokenRole || (exports.TokenRole = {}));
	var TokenRole = exports.TokenRole;
	//# sourceMappingURL=TokenRole.js.map

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";
	var RevealableConvention = (function () {
	    function RevealableConvention(args) {
	        this.SyntaxNodeType = args.SyntaxNodeType;
	        this.startTokenRole = args.startTokenRole;
	        this.endTokenRole = args.endTokenRole;
	    }
	    return RevealableConvention;
	}());
	exports.RevealableConvention = RevealableConvention;
	//# sourceMappingURL=RevealableConvention.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Audio_1 = __webpack_require__(66);
	var Image_1 = __webpack_require__(68);
	var Video_1 = __webpack_require__(69);
	var TokenRole_1 = __webpack_require__(63);
	exports.AUDIO = {
	    term: function (terms) { return terms.audio; },
	    SyntaxNodeType: Audio_1.Audio,
	    startAndDescriptionTokenRole: TokenRole_1.TokenRole.AudioStartAndDescription
	};
	exports.IMAGE = {
	    term: function (terms) { return terms.image; },
	    SyntaxNodeType: Image_1.Image,
	    startAndDescriptionTokenRole: TokenRole_1.TokenRole.ImageStartAndDescription
	};
	exports.VIDEO = {
	    term: function (terms) { return terms.video; },
	    SyntaxNodeType: Video_1.Video,
	    startAndDescriptionTokenRole: TokenRole_1.TokenRole.VideoStartAndDescription
	};
	//# sourceMappingURL=MediaConventions.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var MediaSyntaxNode_1 = __webpack_require__(67);
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
/* 67 */
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var MediaSyntaxNode_1 = __webpack_require__(67);
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var MediaSyntaxNode_1 = __webpack_require__(67);
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
/* 70 */
/***/ function(module, exports) {

	"use strict";
	exports.INPUT_LINE_BREAK = '\n';
	exports.OUTPUT_LINE_BREAK = exports.INPUT_LINE_BREAK;
	exports.ESCAPER_CHAR = '\\';
	//# sourceMappingURL=Strings.js.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(11);
	var TextConsumer_1 = __webpack_require__(72);
	var TokenRole_1 = __webpack_require__(63);
	var Token_1 = __webpack_require__(73);
	function tryToTokenizeCodeOrUnmatchedDelimiter(args) {
	    var markup = args.markup, then = args.then;
	    var markupConsumer = new TextConsumer_1.TextConsumer(markup);
	    var startDelimiter;
	    markupConsumer.consume({
	        pattern: CODE_DELIMITER_PATTERN,
	        thenBeforeConsumingText: function (match) {
	            startDelimiter = match;
	        }
	    });
	    if (!startDelimiter) {
	        return false;
	    }
	    var code = '';
	    var _loop_1 = function() {
	        markupConsumer.consume({
	            pattern: CONTENT_THAT_CANNOT_CLOSE_CODE_PATTERN,
	            thenBeforeConsumingText: function (match) {
	                code += match;
	            }
	        });
	        var possibleEndDelimiter;
	        markupConsumer.consume({
	            pattern: CODE_DELIMITER_PATTERN,
	            thenBeforeConsumingText: function (match) {
	                possibleEndDelimiter = match;
	            }
	        });
	        if (!possibleEndDelimiter) {
	            return "break";
	        }
	        if (possibleEndDelimiter === startDelimiter) {
	            then(new Token_1.Token(TokenRole_1.TokenRole.Code, trimCode(code)), markupConsumer.index);
	            return { value: true };
	        }
	        code += possibleEndDelimiter;
	    };
	    while (!markupConsumer.done()) {
	        var state_1 = _loop_1();
	        if (typeof state_1 === "object") return state_1.value;
	        if (state_1 === "break") break;
	    }
	    then(new Token_1.Token(TokenRole_1.TokenRole.PlainText, startDelimiter), startDelimiter.length);
	    return true;
	}
	exports.tryToTokenizeCodeOrUnmatchedDelimiter = tryToTokenizeCodeOrUnmatchedDelimiter;
	function trimCode(code) {
	    if (LEADING_SPACE_WAS_USED_FOR_SEPARATION_PATTERN.test(code)) {
	        code = code.slice(1);
	    }
	    if (TRAILING_SPACE_WAS_USED_FOR_SEPARATION_PATTERN.test(code)) {
	        code = code.slice(0, -1);
	    }
	    return code;
	}
	var CODE_DELIMITER_CHAR = '`';
	var CONTENT_THAT_CANNOT_CLOSE_CODE_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.oneOrMore(PatternHelpers_1.anyCharBut(CODE_DELIMITER_CHAR)));
	var CODE_DELIMITER_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.oneOrMore(CODE_DELIMITER_CHAR));
	var ONE_OR_MORE_SPACES = PatternHelpers_1.oneOrMore(' ');
	var LEADING_SPACE_WAS_USED_FOR_SEPARATION_PATTERN = PatternHelpers_1.patternStartingWith(ONE_OR_MORE_SPACES + CODE_DELIMITER_CHAR);
	var TRAILING_SPACE_WAS_USED_FOR_SEPARATION_PATTERN = PatternHelpers_1.patternEndingWith(CODE_DELIMITER_CHAR + ONE_OR_MORE_SPACES);
	//# sourceMappingURL=tryToTokenizeCodeOrUnmatchedDelimiter.js.map

/***/ },
/* 72 */
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
/* 73 */
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var RichConventions_1 = __webpack_require__(48);
	function nestOverlappingConventions(tokens) {
	    return new ConventionNester(tokens).tokens;
	}
	exports.nestOverlappingConventions = nestOverlappingConventions;
	var FREELY_SPLITTABLE_CONVENTIONS = [
	    RichConventions_1.EMPHASIS,
	    RichConventions_1.STRESS,
	    RichConventions_1.ITALIC,
	    RichConventions_1.BOLD,
	    RichConventions_1.HIGHLIGHT,
	    RichConventions_1.NORMAL_PARENTHETICAL,
	    RichConventions_1.SQUARE_PARENTHETICAL,
	    RichConventions_1.QUOTE
	];
	var CONVENTIONS_TO_AVOID_SPLITTING_FROM_LEAST_TO_MOST_IMPORTANT = [
	    RichConventions_1.LINK,
	    RichConventions_1.SPOILER,
	    RichConventions_1.NSFW,
	    RichConventions_1.NSFL,
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(11);
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
/* 76 */
/***/ function(module, exports) {

	"use strict";
	var FailedConventionTracker = (function () {
	    function FailedConventionTracker() {
	        this.failedConventionsByMarkupIndex = {};
	    }
	    FailedConventionTracker.prototype.registerFailure = function (contextOfFailedConvention) {
	        var convention = contextOfFailedConvention.convention, snapshot = contextOfFailedConvention.snapshot;
	        var markupIndex = snapshot.markupIndex;
	        if (!this.failedConventionsByMarkupIndex[markupIndex]) {
	            this.failedConventionsByMarkupIndex[markupIndex] = [];
	        }
	        this.failedConventionsByMarkupIndex[markupIndex].push(convention);
	    };
	    FailedConventionTracker.prototype.hasFailed = function (convention, markupIndex) {
	        var failedConventions = (this.failedConventionsByMarkupIndex[markupIndex] || []);
	        return failedConventions.some(function (failedConvention) { return failedConvention === convention; });
	    };
	    return FailedConventionTracker;
	}());
	exports.FailedConventionTracker = FailedConventionTracker;
	//# sourceMappingURL=FailedConventionTracker.js.map

/***/ },
/* 77 */
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
	        if (this.convention.insteadOfOpeningNormalConventionsWhileOpen) {
	            this.convention.insteadOfOpeningNormalConventionsWhileOpen(this);
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(11);
	var Convention = (function () {
	    function Convention(args) {
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
	        this.flushesBufferToPlainTextTokenBeforeOpening = args.beforeOpeningItFlushesNonEmptyBufferToPlainTextToken;
	        this.whenOpening = args.whenOpening;
	        this.insteadOfClosingOuterConventionsWhileOpen = args.insteadOfClosingOuterConventionsWhileOpen;
	        this.insteadOfOpeningNormalConventionsWhileOpen = args.insteadOfOpeningNormalConventionsWhileOpen;
	        this.failsIfWhitespaceIsEnounteredBeforeClosing = args.failsIfWhitespaceIsEnounteredBeforeClosing;
	        this.beforeClosingItFlushesNonEmptyBufferTo = args.beforeClosingItFlushesNonEmptyBufferTo;
	        this.beforeClosingItAlwaysFlushesBufferTo = args.beforeClosingItAlwaysFlushesBufferTo;
	        this.whenClosingItAlsoClosesInnerConventions = args.whenClosingItAlsoClosesInnerConventions;
	        this.mustBeDirectlyFollowedBy = args.mustBeDirectlyFollowedBy;
	        this.whenClosing = args.whenClosing;
	        this.insteadOfFailingWhenLeftUnclosed = args.insteadOfFailingWhenLeftUnclosed;
	    }
	    return Convention;
	}());
	exports.Convention = Convention;
	//# sourceMappingURL=Convention.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var InflectionStartDelimiter_1 = __webpack_require__(80);
	var PatternHelpers_1 = __webpack_require__(11);
	var CollectionHelpers_1 = __webpack_require__(13);
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
	    InflectionHandler.prototype.treatDanglingStartDelimitersAsPlainText = function () {
	        for (var _i = 0, _a = this.openStartDelimiters; _i < _a.length; _i++) {
	            var startDelimiter = _a[_i];
	            if (startDelimiter.isDangling()) {
	                this.args.insertPlainTextToken(startDelimiter.delimiterText, startDelimiter.tokenIndex);
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
/* 80 */
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PatternHelpers_1 = __webpack_require__(11);
	var PatternPieces_1 = __webpack_require__(10);
	var Strings_1 = __webpack_require__(70);
	function trimEscapedAndUnescapedOuterWhitespace(markup) {
	    return markup
	        .replace(ALL_LEADING_ESCAPED_AND_UNESCAPED_WHITESPACE_PATTERN, '')
	        .replace(ALL_TRAILING_ESCAPED_AND_UNESCAPED_WHITESPACE_PATTERN, '');
	}
	exports.trimEscapedAndUnescapedOuterWhitespace = trimEscapedAndUnescapedOuterWhitespace;
	var ESCAPER = PatternHelpers_1.escapeForRegex(Strings_1.ESCAPER_CHAR);
	var CHUNK_OF_POSSIBLY_ESCAPED_WHITESPACE = PatternHelpers_1.optional(ESCAPER) + PatternPieces_1.SOME_WHITESPACE;
	var ALL_LEADING_ESCAPED_AND_UNESCAPED_WHITESPACE_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.oneOrMore(CHUNK_OF_POSSIBLY_ESCAPED_WHITESPACE));
	var ALL_TRAILING_ESCAPED_AND_UNESCAPED_WHITESPACE_PATTERN = PatternHelpers_1.patternEndingWith(PatternPieces_1.WHITESPACE_CHAR
	    + PatternHelpers_1.everyOptional(CHUNK_OF_POSSIBLY_ESCAPED_WHITESPACE)
	    + PatternHelpers_1.optional(ESCAPER));
	//# sourceMappingURL=trimEscapedAndUnescapedOuterWhitespace.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var RichConventions_1 = __webpack_require__(48);
	var MediaConventions_1 = __webpack_require__(65);
	var PlainText_1 = __webpack_require__(83);
	var isWhitespace_1 = __webpack_require__(84);
	var CollectionHelpers_1 = __webpack_require__(13);
	var TokenRole_1 = __webpack_require__(63);
	var InlineCode_1 = __webpack_require__(85);
	var ExampleInput_1 = __webpack_require__(86);
	var ReferenceToTableOfContentsEntry_1 = __webpack_require__(21);
	var Link_1 = __webpack_require__(62);
	var RevealableConvention_1 = __webpack_require__(64);
	var Patterns_1 = __webpack_require__(12);
	function parse(tokens) {
	    return new Parser({
	        tokens: tokens,
	        ancestorRevealableInlineConventions: []
	    }).result.nodes;
	}
	exports.parse = parse;
	var RICH_CONVENTIONS_WITHOUT_EXTRA_FIELDS = [
	    RichConventions_1.EMPHASIS,
	    RichConventions_1.STRESS,
	    RichConventions_1.ITALIC,
	    RichConventions_1.BOLD,
	    RichConventions_1.HIGHLIGHT,
	    RichConventions_1.SPOILER,
	    RichConventions_1.NSFW,
	    RichConventions_1.NSFL,
	    RichConventions_1.FOOTNOTE,
	    RichConventions_1.NORMAL_PARENTHETICAL,
	    RichConventions_1.SQUARE_PARENTHETICAL,
	    RichConventions_1.QUOTE
	];
	var MEDIA_CONVENTIONS = [
	    MediaConventions_1.AUDIO,
	    MediaConventions_1.IMAGE,
	    MediaConventions_1.VIDEO
	];
	var Parser = (function () {
	    function Parser(args) {
	        this.tokenIndex = 0;
	        this.countTokensParsed = 0;
	        this.nodes = [];
	        this.tokens = args.tokens;
	        this.ancestorRevealableInlineConventions = args.ancestorRevealableInlineConventions;
	        var endTokenRole = args.until;
	        TokenLoop: for (; this.tokenIndex < this.tokens.length; this.tokenIndex++) {
	            var token = this.tokens[this.tokenIndex];
	            this.countTokensParsed = this.tokenIndex + 1;
	            switch (token.role) {
	                case endTokenRole: {
	                    this.setResult();
	                    return;
	                }
	                case TokenRole_1.TokenRole.PlainText: {
	                    this.nodes.push(new PlainText_1.PlainText(token.value));
	                    continue;
	                }
	                case TokenRole_1.TokenRole.Code: {
	                    this.nodes.push(new InlineCode_1.InlineCode(token.value));
	                    continue;
	                }
	                case TokenRole_1.TokenRole.ExampleInput: {
	                    this.nodes.push(new ExampleInput_1.ExampleInput(token.value));
	                    continue;
	                }
	                case TokenRole_1.TokenRole.ReferenceToTableOfContentsEntry: {
	                    this.nodes.push(new ReferenceToTableOfContentsEntry_1.ReferenceToTableOfContentsEntry(token.value));
	                    continue;
	                }
	                case TokenRole_1.TokenRole.BareUrl: {
	                    var url = token.value;
	                    var urlScheme = Patterns_1.URL_SCHEME_PATTERN.exec(url)[0];
	                    var urlAfterScheme = url.substr(urlScheme.length);
	                    this.nodes.push(new RichConventions_1.LINK.SyntaxNodeType([new PlainText_1.PlainText(urlAfterScheme)], url));
	                    continue;
	                }
	                case RichConventions_1.LINK.startTokenRole: {
	                    var children = this.getNodes({ fromHereUntil: TokenRole_1.TokenRole.LinkEndAndUrl });
	                    var isContentBlank = isBlank(children);
	                    var url = this.tokens[this.tokenIndex].value.trim();
	                    if (isContentBlank) {
	                        children = [new PlainText_1.PlainText(url)];
	                    }
	                    this.nodes.push(new Link_1.Link(children, url));
	                    continue;
	                }
	            }
	            for (var _i = 0, MEDIA_CONVENTIONS_1 = MEDIA_CONVENTIONS; _i < MEDIA_CONVENTIONS_1.length; _i++) {
	                var media = MEDIA_CONVENTIONS_1[_i];
	                if (token.role === media.startAndDescriptionTokenRole) {
	                    var description = token.value.trim();
	                    var url = this.getNextTokenAndAdvanceIndex().value.trim();
	                    this.nodes.push(new media.SyntaxNodeType(description, url));
	                    continue TokenLoop;
	                }
	            }
	            for (var _a = 0, RICH_CONVENTIONS_WITHOUT_EXTRA_FIELDS_1 = RICH_CONVENTIONS_WITHOUT_EXTRA_FIELDS; _a < RICH_CONVENTIONS_WITHOUT_EXTRA_FIELDS_1.length; _a++) {
	                var richConvention = RICH_CONVENTIONS_WITHOUT_EXTRA_FIELDS_1[_a];
	                if (token.role === richConvention.startTokenRole) {
	                    var children = this.getNodes({
	                        fromHereUntil: richConvention.endTokenRole,
	                        parentRevealableInlineConvention: (richConvention instanceof RevealableConvention_1.RevealableConvention) ? richConvention : null
	                    });
	                    if ((richConvention === RichConventions_1.FOOTNOTE) && this.ancestorRevealableInlineConventions.length) {
	                        var closestRevealableAncestorConvention = CollectionHelpers_1.last(this.ancestorRevealableInlineConventions);
	                        children = [new closestRevealableAncestorConvention.SyntaxNodeType(children)];
	                    }
	                    this.nodes.push(new richConvention.SyntaxNodeType(children));
	                    continue TokenLoop;
	                }
	            }
	            throw new Error('Unrecognized token: ' + TokenRole_1.TokenRole[token.role]);
	        }
	        this.setResult();
	    }
	    Parser.prototype.setResult = function () {
	        this.result = {
	            countTokensParsed: this.countTokensParsed,
	            nodes: combineConsecutivePlainTexts(this.nodes)
	        };
	    };
	    Parser.prototype.getNextTokenAndAdvanceIndex = function () {
	        return this.tokens[++this.tokenIndex];
	    };
	    Parser.prototype.getNodes = function (args) {
	        var parentRevealableInlineConvention = args.parentRevealableInlineConvention;
	        var outerRevealableConventions = parentRevealableInlineConvention
	            ? this.ancestorRevealableInlineConventions.concat(parentRevealableInlineConvention)
	            : this.ancestorRevealableInlineConventions;
	        var result = (new Parser({
	            tokens: this.tokens.slice(this.countTokensParsed),
	            until: args.fromHereUntil,
	            ancestorRevealableInlineConventions: outerRevealableConventions
	        })).result;
	        this.tokenIndex += result.countTokensParsed;
	        return result.nodes;
	    };
	    return Parser;
	}());
	function isBlank(nodes) {
	    return nodes.every(isWhitespace_1.isWhitespace);
	}
	function combineConsecutivePlainTexts(nodes) {
	    var resultNodes = [];
	    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
	        var node = nodes_1[_i];
	        var lastNode = CollectionHelpers_1.last(resultNodes);
	        if ((node instanceof PlainText_1.PlainText) && (lastNode instanceof PlainText_1.PlainText)) {
	            lastNode.content += node.content;
	            continue;
	        }
	        resultNodes.push(node);
	    }
	    return resultNodes;
	}
	//# sourceMappingURL=parse.js.map

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";
	var PlainText = (function () {
	    function PlainText(content) {
	        this.content = content;
	    }
	    PlainText.prototype.textAppearingInline = function () {
	        return this.content;
	    };
	    PlainText.prototype.searchableText = function () {
	        return this.content;
	    };
	    PlainText.prototype.inlineDescendants = function () {
	        return [];
	    };
	    PlainText.prototype.render = function (renderer) {
	        return renderer.plainText(this);
	    };
	    PlainText.prototype.PLAIN_TEXT = function () { };
	    return PlainText;
	}());
	exports.PlainText = PlainText;
	//# sourceMappingURL=PlainText.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PlainText_1 = __webpack_require__(83);
	var Patterns_1 = __webpack_require__(12);
	function isWhitespace(node) {
	    return (node instanceof PlainText_1.PlainText) && Patterns_1.BLANK_PATTERN.test(node.content);
	}
	exports.isWhitespace = isWhitespace;
	//# sourceMappingURL=isWhitespace.js.map

/***/ },
/* 85 */
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
/* 86 */
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tryToParseUnorderedList_1 = __webpack_require__(88);
	var tryToParseOrderedList_1 = __webpack_require__(90);
	var tryToParseThematicBreakStreak_1 = __webpack_require__(44);
	var tryToParseBlockquote_1 = __webpack_require__(91);
	var tryToParseCodeBlock_1 = __webpack_require__(92);
	var HeadingLeveler_1 = __webpack_require__(40);
	var OUTLINE_CONVENTIONS_POSSIBLY_ONE_LINE_LONG = [
	    tryToParseUnorderedList_1.tryToParseUnorderedList,
	    tryToParseOrderedList_1.trytoParseOrderedList,
	    tryToParseThematicBreakStreak_1.tryToParseThematicBreakStreak,
	    tryToParseBlockquote_1.tryToParseBlockquote,
	    tryToParseCodeBlock_1.tryToParseCodeBlock
	];
	var DUMMY_HEADING_LEVELER = new HeadingLeveler_1.HeadingLeveler();
	var DUMMY_SOURCE_LINE_NUMBER = 1;
	function isLineFancyOutlineConvention(markupLine, config) {
	    var markupLines = [markupLine];
	    return OUTLINE_CONVENTIONS_POSSIBLY_ONE_LINE_LONG.some(function (parse) { return parse({
	        markupLines: markupLines,
	        sourceLineNumber: DUMMY_SOURCE_LINE_NUMBER,
	        headingLeveler: DUMMY_HEADING_LEVELER,
	        config: config,
	        then: function () { }
	    }); });
	}
	exports.isLineFancyOutlineConvention = isLineFancyOutlineConvention;
	//# sourceMappingURL=isLineFancyOutlineConvention.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var UnorderedList_1 = __webpack_require__(34);
	var getOutlineSyntaxNodes_1 = __webpack_require__(41);
	var getIndentedBlock_1 = __webpack_require__(89);
	var PatternHelpers_1 = __webpack_require__(11);
	var PatternPieces_1 = __webpack_require__(10);
	function tryToParseUnorderedList(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var listItems = [];
	    var _loop_1 = function() {
	        var linesOfMarkupInCurrentListItem = [];
	        var sourceLineNumberForCurrentListItem = args.sourceLineNumber + markupLineConsumer.countLinesConsumed;
	        var isLineBulleted = markupLineConsumer.consume({
	            linePattern: BULLET_PATTERN,
	            thenBeforeConsumingLine: function (line) {
	                linesOfMarkupInCurrentListItem.push(line.replace(BULLET_PATTERN, ''));
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
	            config: args.config
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
	var BULLET_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.optional(' ') + PatternHelpers_1.anyCharFrom('*', '-', '•') + PatternPieces_1.INLINE_WHITESPACE_CHAR);
	//# sourceMappingURL=tryToParseUnorderedList.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var Patterns_1 = __webpack_require__(12);
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var OrderedList_1 = __webpack_require__(32);
	var getOutlineSyntaxNodes_1 = __webpack_require__(41);
	var PatternHelpers_1 = __webpack_require__(11);
	var PatternPieces_1 = __webpack_require__(10);
	var Patterns_1 = __webpack_require__(12);
	var getIndentedBlock_1 = __webpack_require__(89);
	function trytoParseOrderedList(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var unparsedListItems = [];
	    var _loop_1 = function() {
	        var unparsedListItem;
	        var isLineBulleted = markupLineConsumer.consume({
	            linePattern: BULLETED_PATTERN,
	            if: function (line) { return !Patterns_1.DIVIDER_STREAK_PATTERN.test(line); },
	            thenBeforeConsumingLine: function (line, bullet) {
	                unparsedListItem =
	                    new UnparsedListItem({
	                        bullet: bullet,
	                        firstLineOfMarkup: line.replace(BULLETED_PATTERN, ''),
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
	            config: args.config
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
	        && ((length > 1) || !BULLETED_BY_INTEGER_FOLLOWED_BY_PERIOD_PATTERN.test(unparsedListItems[0].bullet)));
	}
	function getExplicitOrdinal(unparsedListItem) {
	    var result = FIRST_INTEGER_PATTERN.exec(unparsedListItem.bullet);
	    return (result
	        ? parseInt(result[0], 10)
	        : undefined);
	}
	exports.INTEGER = PatternHelpers_1.optional(PatternHelpers_1.escapeForRegex('-')) + PatternHelpers_1.oneOrMore(PatternPieces_1.DIGIT);
	var FIRST_INTEGER_PATTERN = new RegExp(exports.INTEGER);
	var BULLET = PatternHelpers_1.either('#', PatternHelpers_1.capture(PatternHelpers_1.either(exports.INTEGER, '#') + PatternHelpers_1.anyCharFrom('.', ')')));
	var BULLETED_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.optional(' ') + BULLET + PatternPieces_1.INLINE_WHITESPACE_CHAR);
	var BULLETED_BY_INTEGER_FOLLOWED_BY_PERIOD_PATTERN = PatternHelpers_1.patternStartingWith(exports.INTEGER + '\\.');
	//# sourceMappingURL=tryToParseOrderedList.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var Blockquote_1 = __webpack_require__(24);
	var getOutlineSyntaxNodes_1 = __webpack_require__(41);
	var PatternHelpers_1 = __webpack_require__(11);
	var PatternPieces_1 = __webpack_require__(10);
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
	        config: args.config
	    });
	    args.then([new Blockquote_1.Blockquote(blockquoteChildren)], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.tryToParseBlockquote = tryToParseBlockquote;
	var BLOCKQUOTE_DELIMITER_PATTERN = PatternHelpers_1.patternStartingWith(PatternPieces_1.ANY_WHITESPACE + '>' + PatternHelpers_1.optional(' '));
	//# sourceMappingURL=tryToParseBlockquote.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var CodeBlock_1 = __webpack_require__(93);
	var PatternHelpers_1 = __webpack_require__(11);
	var Strings_1 = __webpack_require__(70);
	function tryToParseCodeBlock(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var startStreak;
	    markupLineConsumer.consume({
	        linePattern: CODE_BLOCK_STREAK_PATTERN,
	        thenBeforeConsumingLine: function (line) {
	            startStreak = line;
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
	                possibleEndStreak = line;
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
	    args.then([new CodeBlock_1.CodeBlock(codeLines.join(Strings_1.OUTPUT_LINE_BREAK))], markupLineConsumer.countLinesConsumed);
	    return true;
	}
	exports.tryToParseCodeBlock = tryToParseCodeBlock;
	var CODE_BLOCK_STREAK_PATTERN = PatternHelpers_1.streakOf('`');
	//# sourceMappingURL=tryToParseCodeBlock.js.map

/***/ },
/* 93 */
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var ThematicBreak_1 = __webpack_require__(43);
	var Patterns_1 = __webpack_require__(12);
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var DescriptionList_1 = __webpack_require__(26);
	var getInlineSyntaxNodes_1 = __webpack_require__(46);
	var getOutlineSyntaxNodes_1 = __webpack_require__(41);
	var isLineFancyOutlineConvention_1 = __webpack_require__(87);
	var Patterns_1 = __webpack_require__(12);
	var getIndentedBlock_1 = __webpack_require__(89);
	function tryToParseDescriptionList(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var listItems = [];
	    var countLinesConsumed = 0;
	    var _loop_1 = function() {
	        var markupPerTerm = [];
	        while (!markupLineConsumer.done()) {
	            var isSubject = markupLineConsumer.consume({
	                linePattern: Patterns_1.NON_BLANK_PATTERN,
	                if: function (line) { return !Patterns_1.INDENTED_PATTERN.test(line) && !isLineFancyOutlineConvention_1.isLineFancyOutlineConvention(line, args.config); },
	                thenBeforeConsumingLine: function (line) {
	                    markupPerTerm.push(line);
	                }
	            });
	            if (!isSubject) {
	                break;
	            }
	        }
	        if (!markupPerTerm.length) {
	            return "break";
	        }
	        var descriptionLines = [];
	        var sourceLineNumberForDescription = args.sourceLineNumber + markupLineConsumer.countLinesConsumed;
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
	        var subjects = markupPerTerm.map(function (subject) {
	            return new DescriptionList_1.DescriptionList.Item.Subject(getInlineSyntaxNodes_1.getInlineSyntaxNodes(subject, args.config));
	        });
	        var description = new DescriptionList_1.DescriptionList.Item.Description(getOutlineSyntaxNodes_1.getOutlineSyntaxNodes({
	            markupLines: descriptionLines,
	            sourceLineNumber: sourceLineNumberForDescription,
	            headingLeveler: args.headingLeveler,
	            config: args.config
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var Table_1 = __webpack_require__(39);
	var PatternHelpers_1 = __webpack_require__(11);
	var Patterns_1 = __webpack_require__(12);
	var PatternPieces_1 = __webpack_require__(10);
	var getInlineSyntaxNodes_1 = __webpack_require__(46);
	var getTableCells_1 = __webpack_require__(97);
	function tryToParseTableOrChart(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var config = args.config;
	    var getLabelPattern = function (labels) {
	        return PatternHelpers_1.solelyAndIgnoringCapitalization(PatternHelpers_1.either.apply(void 0, labels.map(PatternHelpers_1.escapeForRegex)) + PatternHelpers_1.optional(':' + PatternHelpers_1.capture(PatternPieces_1.REST_OF_TEXT)));
	    };
	    var captionMarkup;
	    var setRawCaptionContent = function (_, caption) {
	        captionMarkup = (caption || '').trim();
	    };
	    var isTable = markupLineConsumer.consume({
	        linePattern: getLabelPattern(config.terms.markup.table),
	        thenBeforeConsumingLine: setRawCaptionContent
	    });
	    var isChart = !isTable && markupLineConsumer.consume({
	        linePattern: getLabelPattern(config.terms.markup.chart),
	        thenBeforeConsumingLine: setRawCaptionContent
	    });
	    if (!isTable && !isChart) {
	        return false;
	    }
	    var headerCells;
	    var hasHeader = !tryToTerminateTable(markupLineConsumer)
	        && markupLineConsumer.consume({
	            thenBeforeConsumingLine: function (line) {
	                headerCells = getTableCells_1.getTableCells(line, config).map(toHeaderCell);
	            }
	        });
	    if (!hasHeader) {
	        return false;
	    }
	    if (isChart) {
	        headerCells.unshift(new Table_1.Table.Header.Cell([]));
	    }
	    var header = new Table_1.Table.Header(headerCells);
	    var caption = captionMarkup
	        ? new Table_1.Table.Caption(getInlineSyntaxNodes_1.getInlineSyntaxNodes(captionMarkup, config))
	        : undefined;
	    var rows = [];
	    var countLinesConsumed;
	    do {
	        countLinesConsumed = markupLineConsumer.countLinesConsumed;
	    } while (!tryToTerminateTable(markupLineConsumer)
	        && markupLineConsumer.consume({
	            thenBeforeConsumingLine: function (line) {
	                var cells = getTableCells_1.getTableCells(line, config);
	                var rowHeaderCell = isChart
	                    ? toHeaderCell(cells.shift())
	                    : undefined;
	                rows.push(new Table_1.Table.Row(cells.map(toRowCell), rowHeaderCell));
	            }
	        }));
	    args.then([new Table_1.Table(header, rows, caption)], countLinesConsumed);
	    return true;
	}
	exports.tryToParseTableOrChart = tryToParseTableOrChart;
	function tryToTerminateTable(markupLineConsumer) {
	    function consumeBlankLine() {
	        return markupLineConsumer.consume({ linePattern: Patterns_1.BLANK_PATTERN });
	    }
	    return consumeBlankLine() && consumeBlankLine();
	}
	var toHeaderCell = function (cell) {
	    return new Table_1.Table.Header.Cell(cell.children, cell.countColumnsSpanned);
	};
	var toRowCell = function (cell) {
	    return new Table_1.Table.Row.Cell(cell.children, cell.countColumnsSpanned);
	};
	//# sourceMappingURL=tryToParseTableOrChart.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Table_1 = __webpack_require__(39);
	var PatternHelpers_1 = __webpack_require__(11);
	var getInlineSyntaxNodes_1 = __webpack_require__(46);
	var CollectionHelpers_1 = __webpack_require__(13);
	var Strings_1 = __webpack_require__(70);
	var TableCell = (function (_super) {
	    __extends(TableCell, _super);
	    function TableCell() {
	        _super.apply(this, arguments);
	    }
	    return TableCell;
	}(Table_1.Table.Cell));
	exports.TableCell = TableCell;
	function getTableCells(row, config) {
	    row = row.trim();
	    var cells = [];
	    var charIndexOfStartOfNextCell = 0;
	    var charIndex = 0;
	    function collectCell(args) {
	        var cellMarkup = row.slice(charIndexOfStartOfNextCell, charIndex);
	        var cellChildren = getInlineSyntaxNodes_1.getInlineSyntaxNodes(cellMarkup.trim(), config);
	        cells.push(new TableCell(cellChildren, args.countColumnsSpanned));
	    }
	    for (; charIndex < row.length; charIndex++) {
	        var char = row[charIndex];
	        if (char === Strings_1.ESCAPER_CHAR) {
	            charIndex++;
	            continue;
	        }
	        var result = DELIMITER_PATTERN.exec(row.slice(charIndex));
	        if (!result) {
	            continue;
	        }
	        var delimiter = result[0];
	        collectCell({ countColumnsSpanned: delimiter.length });
	        charIndexOfStartOfNextCell = charIndex + delimiter.length;
	        charIndex += delimiter.length - 1;
	    }
	    var lastCell = CollectionHelpers_1.last(cells);
	    var shouldCollectAnotherCell = charIndexOfStartOfNextCell < row.length
	        || (lastCell.children.length !== 0
	            && lastCell.countColumnsSpanned === 1);
	    if (shouldCollectAnotherCell) {
	        collectCell({ countColumnsSpanned: 1 });
	    }
	    return cells;
	}
	exports.getTableCells = getTableCells;
	var DELIMITER_PATTERN = PatternHelpers_1.patternStartingWith(PatternHelpers_1.oneOrMore(';'));
	//# sourceMappingURL=getTableCells.js.map

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var getOutlineSyntaxNodes_1 = __webpack_require__(41);
	var getIndentedBlock_1 = __webpack_require__(89);
	var PatternHelpers_1 = __webpack_require__(11);
	function getLabeledBlockParser(labels, SyntaxNodeType) {
	    return function tryToParseLabeledBlock(args) {
	        var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	        var labelLinePattern = PatternHelpers_1.solelyAndIgnoringCapitalization(PatternHelpers_1.either.apply(void 0, labels.map(PatternHelpers_1.escapeForRegex)) + PatternHelpers_1.optional(':'));
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
	            config: args.config
	        });
	        args.then([new SyntaxNodeType(children)], markupLineConsumer.countLinesConsumed);
	        return true;
	    };
	}
	exports.getLabeledBlockParser = getLabeledBlockParser;
	//# sourceMappingURL=getLabeledBlockParser.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var LineConsumer_1 = __webpack_require__(42);
	var Paragraph_1 = __webpack_require__(33);
	var LineBlock_1 = __webpack_require__(31);
	var getInlineSyntaxNodes_1 = __webpack_require__(46);
	var Patterns_1 = __webpack_require__(12);
	var isLineFancyOutlineConvention_1 = __webpack_require__(87);
	var tryToPromoteMediaToOutline_1 = __webpack_require__(100);
	function parseParagraphOrLineBlock(args) {
	    var markupLineConsumer = new LineConsumer_1.LineConsumer(args.markupLines);
	    var inlineSyntaxNodesPerLine = [];
	    var isOnFirstLine = true;
	    var _loop_1 = function() {
	        var inlineSyntaxNodes;
	        var wasLineConsumed = markupLineConsumer.consume({
	            linePattern: Patterns_1.NON_BLANK_PATTERN,
	            if: function (line) { return isOnFirstLine || !isLineFancyOutlineConvention_1.isLineFancyOutlineConvention(line, args.config); },
	            thenBeforeConsumingLine: function (line) {
	                inlineSyntaxNodes = getInlineSyntaxNodes_1.getInlineSyntaxNodes(line, args.config);
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isWhitespace_1 = __webpack_require__(84);
	var Link_1 = __webpack_require__(62);
	var MediaSyntaxNode_1 = __webpack_require__(67);
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var InlineUpDocument_1 = __webpack_require__(102);
	var getInlineSyntaxNodes_1 = __webpack_require__(46);
	function parseInlineDocument(markup, config) {
	    var children = getInlineSyntaxNodes_1.getInlineSyntaxNodesForInlineDocument(markup, config);
	    return new InlineUpDocument_1.InlineUpDocument(children);
	}
	exports.parseInlineDocument = parseInlineDocument;
	//# sourceMappingURL=parseInlineDocument.js.map

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var InlineSyntaxNodeContainer_1 = __webpack_require__(18);
	var InlineUpDocument = (function (_super) {
	    __extends(InlineUpDocument, _super);
	    function InlineUpDocument() {
	        _super.apply(this, arguments);
	    }
	    InlineUpDocument.prototype.INLINE_UP_DOCUMENT = function () { };
	    return InlineUpDocument;
	}(InlineSyntaxNodeContainer_1.InlineSyntaxNodeContainer));
	exports.InlineUpDocument = InlineUpDocument;
	//# sourceMappingURL=InlineUpDocument.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var HtmlRenderer_1 = __webpack_require__(104);
	function getHtml(document, config) {
	    return new HtmlRenderer_1.HtmlRenderer(document, config).result;
	}
	exports.getHtml = getHtml;
	function getInlineHtml(document, config) {
	    return new HtmlRenderer_1.HtmlRenderer(document, config).result;
	}
	exports.getInlineHtml = getInlineHtml;
	//# sourceMappingURL=getHtml.js.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Renderer_1 = __webpack_require__(105);
	var Link_1 = __webpack_require__(62);
	var PlainText_1 = __webpack_require__(83);
	var Italic_1 = __webpack_require__(51);
	var UnorderedList_1 = __webpack_require__(34);
	var OrderedList_1 = __webpack_require__(32);
	var Heading_1 = __webpack_require__(17);
	var ElementHelpers_1 = __webpack_require__(106);
	var EscapingHelpers_1 = __webpack_require__(107);
	var PatternHelpers_1 = __webpack_require__(11);
	var HtmlRenderer = (function (_super) {
	    __extends(HtmlRenderer, _super);
	    function HtmlRenderer() {
	        _super.apply(this, arguments);
	        this.spoilerCount = 0;
	        this.nsfwCount = 0;
	        this.nsflCount = 0;
	        this.isInsideLink = false;
	        this.isInsideTableOfContents = false;
	    }
	    HtmlRenderer.prototype.renderDocument = function (document) {
	        var tableOfContents = document.tableOfContents.entries.length
	            ? this.tableOfContents(document.tableOfContents)
	            : '';
	        return tableOfContents + this.renderAll(document.children);
	    };
	    HtmlRenderer.prototype.renderInlineDocument = function (inlineDocument) {
	        return this.renderAll(inlineDocument.children);
	    };
	    HtmlRenderer.prototype.blockquote = function (blockquote) {
	        return this.element('blockquote', blockquote.children, attrsFor(blockquote));
	    };
	    HtmlRenderer.prototype.unorderedList = function (list) {
	        var _this = this;
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('ul', list.items.map(function (listItem) { return _this.unorderedListItem(listItem); }), attrsFor(list));
	    };
	    HtmlRenderer.prototype.orderedList = function (list) {
	        var _this = this;
	        var attrs = {};
	        var start = list.start();
	        if (start != null) {
	            attrs.start = start;
	        }
	        if (list.order() === OrderedList_1.OrderedList.Order.Descrending) {
	            attrs.reversed = ElementHelpers_1.NO_ATTRIBUTE_VALUE;
	        }
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('ol', list.items.map(function (listItem) { return _this.orderedListItem(listItem); }), attrsFor(list, attrs));
	    };
	    HtmlRenderer.prototype.descriptionList = function (list) {
	        var _this = this;
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('dl', list.items.map(function (item) { return _this.descriptionListItem(item); }), attrsFor(list));
	    };
	    HtmlRenderer.prototype.lineBlock = function (lineBlock) {
	        var _this = this;
	        var attrs = attrsFor(lineBlock, { class: ElementHelpers_1.classAttrValue('lines') });
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('div', lineBlock.lines.map(function (line) { return _this.line(line); }), attrs);
	    };
	    HtmlRenderer.prototype.codeBlock = function (codeBlock) {
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('pre', [ElementHelpers_1.htmlElement('code', codeBlock.code)], attrsFor(codeBlock));
	    };
	    HtmlRenderer.prototype.paragraph = function (paragraph) {
	        return this.element('p', paragraph.children, attrsFor(paragraph));
	    };
	    HtmlRenderer.prototype.heading = function (heading) {
	        var attrs = {};
	        if (heading.ordinalInTableOfContents) {
	            attrs.id = this.idOfActualEntryInDocument(heading);
	        }
	        return this.element('h' + Math.min(6, heading.level), heading.children, attrsFor(heading, attrs));
	    };
	    HtmlRenderer.prototype.thematicBreak = function (thematicBreak) {
	        return ElementHelpers_1.singleTagHtmlElement('hr', attrsFor(thematicBreak));
	    };
	    HtmlRenderer.prototype.emphasis = function (emphasis) {
	        return this.element('em', emphasis.children);
	    };
	    HtmlRenderer.prototype.stress = function (stress) {
	        return this.element('strong', stress.children);
	    };
	    HtmlRenderer.prototype.italic = function (italic) {
	        return this.element('i', italic.children);
	    };
	    HtmlRenderer.prototype.bold = function (bold) {
	        return this.element('b', bold.children);
	    };
	    HtmlRenderer.prototype.inlineCode = function (inlineCode) {
	        return ElementHelpers_1.htmlElement('code', inlineCode.code);
	    };
	    HtmlRenderer.prototype.exampleInput = function (exampleInput) {
	        return ElementHelpers_1.htmlElement('kbd', exampleInput.input);
	    };
	    HtmlRenderer.prototype.referenceToTableOfContentsEntry = function (reference) {
	        var entry = reference.entry;
	        var representation = entry
	            ? new Link_1.Link(entry.representationOfContentWithinTableOfContents(), ElementHelpers_1.internalUrl(this.idOfActualEntryInDocument(entry)))
	            : new Italic_1.Italic([new PlainText_1.PlainText(reference.snippetFromEntry)]);
	        return representation.render(this);
	    };
	    HtmlRenderer.prototype.normalParenthetical = function (normalParenthetical) {
	        return this.parenthetical(normalParenthetical);
	    };
	    HtmlRenderer.prototype.squareParenthetical = function (squareParenthetical) {
	        return this.parenthetical(squareParenthetical, 'square-brackets');
	    };
	    HtmlRenderer.prototype.highlight = function (highlight) {
	        return this.element('mark', highlight.children);
	    };
	    HtmlRenderer.prototype.inlineQuote = function (inlineQuote) {
	        return this.element('q', inlineQuote.children);
	    };
	    HtmlRenderer.prototype.inlineSpoiler = function (inlineSpoiler) {
	        return this.revealable({
	            conventionName: 'spoiler',
	            termForTogglingVisibility: this.config.terms.rendered.toggleSpoiler,
	            conventionCount: ++this.spoilerCount,
	            revealable: inlineSpoiler,
	            tagNameForGenericContainers: 'span'
	        });
	    };
	    HtmlRenderer.prototype.inlineNsfw = function (inlineNsfw) {
	        return this.revealable({
	            conventionName: 'nsfw',
	            termForTogglingVisibility: this.config.terms.rendered.toggleNsfw,
	            conventionCount: ++this.nsfwCount,
	            revealable: inlineNsfw,
	            tagNameForGenericContainers: 'span'
	        });
	    };
	    HtmlRenderer.prototype.inlineNsfl = function (inlineNsfl) {
	        return this.revealable({
	            conventionName: 'nsfl',
	            termForTogglingVisibility: this.config.terms.rendered.toggleNsfl,
	            conventionCount: ++this.nsflCount,
	            revealable: inlineNsfl,
	            tagNameForGenericContainers: 'span'
	        });
	    };
	    HtmlRenderer.prototype.spoilerBlock = function (spoilerBlock) {
	        return this.revealable({
	            conventionName: 'spoiler',
	            termForTogglingVisibility: this.config.terms.rendered.toggleSpoiler,
	            conventionCount: ++this.spoilerCount,
	            revealable: spoilerBlock,
	            tagNameForGenericContainers: 'div',
	            attrsForOuterContainer: attrsFor(spoilerBlock)
	        });
	    };
	    HtmlRenderer.prototype.nsfwBlock = function (nsfwBlock) {
	        return this.revealable({
	            conventionName: 'nsfw',
	            termForTogglingVisibility: this.config.terms.rendered.toggleNsfw,
	            conventionCount: ++this.nsfwCount,
	            revealable: nsfwBlock,
	            tagNameForGenericContainers: 'div',
	            attrsForOuterContainer: attrsFor(nsfwBlock)
	        });
	    };
	    HtmlRenderer.prototype.nsflBlock = function (nsflBlock) {
	        return this.revealable({
	            conventionName: 'nsfl',
	            termForTogglingVisibility: this.config.terms.rendered.toggleNsfl,
	            conventionCount: ++this.nsflCount,
	            revealable: nsflBlock,
	            tagNameForGenericContainers: 'div',
	            attrsForOuterContainer: attrsFor(nsflBlock)
	        });
	    };
	    HtmlRenderer.prototype.referenceToFootnote = function (footnote) {
	        if (this.isInsideTableOfContents) {
	            return '';
	        }
	        var innerLink = this.footnoteReferenceInnerLink(footnote);
	        return this.element('sup', [innerLink], {
	            id: this.footnoteReferenceId(footnote.referenceNumber),
	            class: ElementHelpers_1.classAttrValue('footnote-reference')
	        });
	    };
	    HtmlRenderer.prototype.footnoteBlock = function (footnoteBlock) {
	        var _this = this;
	        var attrs = attrsFor(footnoteBlock, { class: ElementHelpers_1.classAttrValue('footnotes') });
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('dl', footnoteBlock.footnotes.map(function (footnote) { return _this.footnoteInFootnoteBlock(footnote); }), attrs);
	    };
	    HtmlRenderer.prototype.table = function (table) {
	        var _this = this;
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('table', [
	            this.tableCaption(table.caption),
	            this.tableHeader(table.header),
	            table.rows.map(function (row) { return _this.tableRow(row); }).join('')
	        ], attrsFor(table));
	    };
	    HtmlRenderer.prototype.link = function (link) {
	        if (this.isInsideLink || !this.isUrlAllowed(link.url)) {
	            return this.renderAll(link.children);
	        }
	        this.isInsideLink = true;
	        var html = this.element('a', link.children, attrsFor(link, { href: link.url }));
	        this.isInsideLink = false;
	        return html;
	    };
	    HtmlRenderer.prototype.image = function (image) {
	        if (!this.isUrlAllowed(image.url)) {
	            return '';
	        }
	        var attrs = attrsFor(image, {
	            src: image.url,
	            alt: image.description,
	            title: image.description
	        });
	        return ElementHelpers_1.singleTagHtmlElement('img', attrs);
	    };
	    HtmlRenderer.prototype.audio = function (audio) {
	        return this.playableMediaElement(audio, 'audio');
	    };
	    HtmlRenderer.prototype.video = function (video) {
	        return this.playableMediaElement(video, 'video');
	    };
	    HtmlRenderer.prototype.plainText = function (plainText) {
	        return EscapingHelpers_1.escapeHtmlContent(plainText.content);
	    };
	    HtmlRenderer.prototype.parenthetical = function (parenthetical) {
	        var extraCssClassNames = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            extraCssClassNames[_i - 1] = arguments[_i];
	        }
	        var attrs = {
	            class: ElementHelpers_1.classAttrValue.apply(void 0, ['parenthetical'].concat(extraCssClassNames))
	        };
	        return this.element('small', parenthetical.children, attrs);
	    };
	    HtmlRenderer.prototype.unorderedListItem = function (listItem) {
	        return this.element('li', listItem.children);
	    };
	    HtmlRenderer.prototype.tableOfContents = function (tableOfContents) {
	        this.isInsideTableOfContents = true;
	        var html = ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('nav', [
	            this.tableOfContentsTitle(),
	            this.tableOfContentsEntries(tableOfContents.entries)
	        ], { class: ElementHelpers_1.classAttrValue("table-of-contents") });
	        this.isInsideTableOfContents = false;
	        return html;
	    };
	    HtmlRenderer.prototype.tableOfContentsTitle = function () {
	        var title = new Heading_1.Heading([
	            new PlainText_1.PlainText(this.config.terms.rendered.tableOfContents)], { level: 1 });
	        return title.render(this);
	    };
	    HtmlRenderer.prototype.tableOfContentsEntries = function (entries) {
	        var _this = this;
	        var listItems = entries.map(function (entry) {
	            return new UnorderedList_1.UnorderedList.Item([
	                _this.tableOfContentsEntry(entry)
	            ]);
	        });
	        return new UnorderedList_1.UnorderedList(listItems).render(this);
	    };
	    HtmlRenderer.prototype.tableOfContentsEntry = function (entry) {
	        return new Heading_1.Heading([this.linkToActualEntryInDocument(entry)], { level: entry.level + 1 });
	    };
	    HtmlRenderer.prototype.linkToActualEntryInDocument = function (entry) {
	        return new Link_1.Link(entry.representationOfContentWithinTableOfContents(), ElementHelpers_1.internalUrl(this.idOfActualEntryInDocument(entry)));
	    };
	    HtmlRenderer.prototype.orderedListItem = function (listItem) {
	        var attrs = {};
	        if (listItem.ordinal != null) {
	            attrs.value = listItem.ordinal;
	        }
	        return this.element('li', listItem.children, attrs);
	    };
	    HtmlRenderer.prototype.descriptionListItem = function (listItem) {
	        var _this = this;
	        return (listItem.subjects.map(function (subject) { return _this.descriptionSubject(subject); }).join('')
	            + this.description(listItem.description));
	    };
	    HtmlRenderer.prototype.descriptionSubject = function (subject) {
	        return this.element('dt', subject.children);
	    };
	    HtmlRenderer.prototype.description = function (description) {
	        return this.element('dd', description.children);
	    };
	    HtmlRenderer.prototype.line = function (line) {
	        return this.element('div', line.children);
	    };
	    HtmlRenderer.prototype.footnoteReferenceInnerLink = function (footnoteReference) {
	        var referenceNumber = footnoteReference.referenceNumber;
	        return new Link_1.Link([new PlainText_1.PlainText(referenceNumber.toString())], ElementHelpers_1.internalUrl(this.footnoteId(referenceNumber)));
	    };
	    HtmlRenderer.prototype.footnoteInFootnoteBlock = function (footnote) {
	        var linkBackToReferenceContainer = this.element('dt', [this.footnoteLinkBackToReference(footnote)], { id: this.footnoteId(footnote.referenceNumber) });
	        var bodyContainer = this.element('dd', footnote.children);
	        return linkBackToReferenceContainer + bodyContainer;
	    };
	    HtmlRenderer.prototype.footnoteLinkBackToReference = function (footnote) {
	        var referenceNumber = footnote.referenceNumber;
	        return new Link_1.Link([new PlainText_1.PlainText(referenceNumber.toString())], ElementHelpers_1.internalUrl(this.footnoteReferenceId(referenceNumber)));
	    };
	    HtmlRenderer.prototype.playableMediaElement = function (media, tagName) {
	        var url = media.url, description = media.description;
	        if (!this.isUrlAllowed(url)) {
	            return '';
	        }
	        var attrs = attrsFor(media, {
	            src: url,
	            title: description,
	            controls: ElementHelpers_1.NO_ATTRIBUTE_VALUE,
	            loop: ElementHelpers_1.NO_ATTRIBUTE_VALUE
	        });
	        return this.element(tagName, this.playableMediaFallback(description, url), attrs);
	    };
	    HtmlRenderer.prototype.playableMediaFallback = function (content, url) {
	        return [new Link_1.Link([new PlainText_1.PlainText(content)], url)];
	    };
	    HtmlRenderer.prototype.revealable = function (args) {
	        var checkboxId = this.idFor(args.conventionName, args.conventionCount);
	        var label = ElementHelpers_1.htmlElement('label', args.termForTogglingVisibility, { for: checkboxId });
	        var checkbox = ElementHelpers_1.singleTagHtmlElement('input', {
	            id: checkboxId,
	            type: 'checkbox',
	            role: 'button'
	        });
	        var revealableContent = this.element(args.tagNameForGenericContainers, args.revealable.children, { role: 'alert' });
	        var attrsForOuterContainer = args.attrsForOuterContainer || {};
	        attrsForOuterContainer.class =
	            ElementHelpers_1.classAttrValue(args.conventionName, 'revealable');
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren(args.tagNameForGenericContainers, [label, checkbox, revealableContent], attrsForOuterContainer);
	    };
	    HtmlRenderer.prototype.tableCaption = function (caption) {
	        return (caption
	            ? ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('caption', this.renderEach(caption.children))
	            : '');
	    };
	    HtmlRenderer.prototype.tableHeader = function (header) {
	        var _this = this;
	        var headerRow = ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('tr', header.cells.map(function (cell) { return _this.tableHeaderCell(cell, 'col'); }));
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('thead', [headerRow]);
	    };
	    HtmlRenderer.prototype.tableHeaderCell = function (cell, scope) {
	        return this.tableCell('th', cell, { scope: scope });
	    };
	    HtmlRenderer.prototype.tableRow = function (row) {
	        var _this = this;
	        var cells = row.cells.map(function (cell) { return _this.tableRowCell(cell); });
	        if (row.headerCell) {
	            cells.unshift(this.tableHeaderCell(row.headerCell, 'row'));
	        }
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren('tr', cells);
	    };
	    HtmlRenderer.prototype.tableRowCell = function (cell) {
	        var attrs = {};
	        if (cell.isNumeric()) {
	            attrs.class = ElementHelpers_1.classAttrValue('numeric');
	        }
	        return this.tableCell('td', cell, attrs);
	    };
	    HtmlRenderer.prototype.tableCell = function (tagName, cell, attrs) {
	        if (attrs === void 0) { attrs = {}; }
	        if (cell.countColumnsSpanned > 1) {
	            attrs.colspan = cell.countColumnsSpanned;
	        }
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren(tagName, this.renderEach(cell.children), attrs);
	    };
	    HtmlRenderer.prototype.element = function (tagName, children, attrs) {
	        if (attrs === void 0) { attrs = {}; }
	        return ElementHelpers_1.htmlElementWithAlreadyEscapedChildren(tagName, this.renderEach(children), attrs);
	    };
	    HtmlRenderer.prototype.idOfActualEntryInDocument = function (entry) {
	        return this.idFor(this.config.terms.rendered.itemReferencedByTableOfContents, entry.ordinalInTableOfContents);
	    };
	    HtmlRenderer.prototype.footnoteId = function (referenceNumber) {
	        return this.idFor(this.config.terms.rendered.footnote, referenceNumber);
	    };
	    HtmlRenderer.prototype.footnoteReferenceId = function (referenceNumber) {
	        return this.idFor(this.config.terms.rendered.footnoteReference, referenceNumber);
	    };
	    HtmlRenderer.prototype.isUrlAllowed = function (url) {
	        return this.config.renderUnsafeContent || !UNSAFE_URL_SCHEME.test(url);
	    };
	    return HtmlRenderer;
	}(Renderer_1.Renderer));
	exports.HtmlRenderer = HtmlRenderer;
	function attrsFor(node, attrs) {
	    if (attrs === void 0) { attrs = {}; }
	    if (node.sourceLineNumber) {
	        attrs['data-up-source-line'] = node.sourceLineNumber;
	    }
	    return attrs;
	}
	var UNSAFE_URL_SCHEME = PatternHelpers_1.patternIgnoringCapitalizationAndStartingWith(PatternHelpers_1.either('javascript', 'data', 'file', 'vbscript') + ':');
	//# sourceMappingURL=HtmlRenderer.js.map

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var UpDocument_1 = __webpack_require__(15);
	var PatternPieces_1 = __webpack_require__(10);
	var Renderer = (function () {
	    function Renderer(document, config) {
	        this.document = document;
	        this.config = config;
	    }
	    Object.defineProperty(Renderer.prototype, "result", {
	        get: function () {
	            this._result =
	                this._result || this.renderEitherTypeOfDocument(this.document);
	            return this._result;
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	        var rawId = [this.config.idPrefix].concat(parts).join(' ');
	        return rawId
	            .trim()
	            .replace(WHITESPACE_PATTERN, '-');
	    };
	    Renderer.prototype.renderEitherTypeOfDocument = function (document) {
	        return (document instanceof UpDocument_1.UpDocument
	            ? this.renderDocument(document)
	            : this.renderInlineDocument(document));
	    };
	    return Renderer;
	}());
	exports.Renderer = Renderer;
	var WHITESPACE_PATTERN = new RegExp(PatternPieces_1.SOME_WHITESPACE, 'g');
	//# sourceMappingURL=Renderer.js.map

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EscapingHelpers_1 = __webpack_require__(107);
	function htmlElement(tagName, unescapedContent, attrs) {
	    if (attrs === void 0) { attrs = {}; }
	    return htmlElementWithAlreadyEscapedChildren(tagName, [EscapingHelpers_1.escapeHtmlContent(unescapedContent)], attrs);
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
	function classAttrValue() {
	    var names = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        names[_i - 0] = arguments[_i];
	    }
	    return names
	        .map(function (name) { return 'up-' + name; })
	        .join(' ');
	}
	exports.classAttrValue = classAttrValue;
	function internalUrl(id) {
	    return '#' + id;
	}
	exports.internalUrl = internalUrl;
	exports.NO_ATTRIBUTE_VALUE = null;
	function htmlStartTag(tagName, attrs) {
	    var tagNameWithAttrs = [tagName].concat(htmlAttrs(attrs)).join(' ');
	    return "<" + tagNameWithAttrs + ">";
	}
	function htmlAttrs(attrs) {
	    var alphabetizedAttrNames = Object.keys(attrs).sort();
	    return alphabetizedAttrNames.map(function (attrName) { return htmlAttr(attrs, attrName); });
	}
	function htmlAttr(attrs, attrName) {
	    var value = attrs[attrName];
	    return (value === exports.NO_ATTRIBUTE_VALUE
	        ? attrName
	        : attrName + "=\"" + EscapingHelpers_1.escapeHtmlAttrValue(value) + "\"");
	}
	//# sourceMappingURL=ElementHelpers.js.map

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";
	function escapeHtmlContent(content) {
	    return htmlEscape(content, /[&<]/g);
	}
	exports.escapeHtmlContent = escapeHtmlContent;
	function escapeHtmlAttrValue(attrValue) {
	    return htmlEscape(String(attrValue), /[&"]/g);
	}
	exports.escapeHtmlAttrValue = escapeHtmlAttrValue;
	function htmlEscape(html, charsToEscape) {
	    return html.replace(charsToEscape, function (char) { return ESCAPED_HTML_ENTITIES_BY_CHAR[char]; });
	}
	var ESCAPED_HTML_ENTITIES_BY_CHAR = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '"': '&quot;'
	};
	//# sourceMappingURL=EscapingHelpers.js.map

/***/ }
/******/ ]);