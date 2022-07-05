"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-family:sans-serif ;\n    background-color: lightblue;\n}\n\n.flex {\n    display:flex;\n}\n\n.container{\n    display: grid;\n    height: 100vh;\n    grid-template-columns: 1fr 3fr 4fr;\n    grid-template-rows: 1fr 9fr 1fr;\n    border: 3px solid black;\n    color: green;\n}\n/* probably would want minmax's for sizing too */\n.header{\n    grid-column: 1/4;\n    grid-row: 1;\n    border-bottom: 3px solid black;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebar{\n    grid-column: 1;\n    grid-row: 2;\n    border-right: 3px solid black;\n}\n\n.daily-tasks {\n    margin-left: 15px;\n    gap: 20px;\n}\n\n.box{\n    display: flex;\n    gap: 15px;\n    align-items: center;\n}\n\nbutton{\n    height: 20px;\n}\n\n.daily-tasks:hover{\n    background-color: rebeccapurple;\n}\n\n.project-tasks-today{\n    margin-left: 15px;\n    gap: 20px;\n}\n\n.within-week{\n    margin-left: 15px;\n    gap: 20px;\n}\n\n.projects{\n    justify-content: center;\n}\n\n.main-info{\n    grid-column: 2;\n    grid-row: 2;\n    flex-flow: column;\n    align-items: center;\n}\n\n.image{\n    grid-column: 3;\n    grid-row: 2;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    color: white;\n}\n\na{\n    text-decoration: none;\n}\n\n.image a:visited, .image a:link {\n    color: white;\n  }\n\n.footer{\n    grid-column: 1/4;\n    grid-row: 3;\n    border-top: 3px solid black;\n    justify-content: center;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,+BAA+B;IAC/B,uBAAuB;IACvB,YAAY;AAChB;AACA,gDAAgD;AAChD;IACI,gBAAgB;IAChB,WAAW;IACX,8BAA8B;IAC9B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,WAAW;IACX,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,4BAA4B;IAC5B,2BAA2B;IAC3B,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;EACd;;AAEF;IACI,gBAAgB;IAChB,WAAW;IACX,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["body{\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-family:sans-serif ;\n    background-color: lightblue;\n}\n\n.flex {\n    display:flex;\n}\n\n.container{\n    display: grid;\n    height: 100vh;\n    grid-template-columns: 1fr 3fr 4fr;\n    grid-template-rows: 1fr 9fr 1fr;\n    border: 3px solid black;\n    color: green;\n}\n/* probably would want minmax's for sizing too */\n.header{\n    grid-column: 1/4;\n    grid-row: 1;\n    border-bottom: 3px solid black;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebar{\n    grid-column: 1;\n    grid-row: 2;\n    border-right: 3px solid black;\n}\n\n.daily-tasks {\n    margin-left: 15px;\n    gap: 20px;\n}\n\n.box{\n    display: flex;\n    gap: 15px;\n    align-items: center;\n}\n\nbutton{\n    height: 20px;\n}\n\n.daily-tasks:hover{\n    background-color: rebeccapurple;\n}\n\n.project-tasks-today{\n    margin-left: 15px;\n    gap: 20px;\n}\n\n.within-week{\n    margin-left: 15px;\n    gap: 20px;\n}\n\n.projects{\n    justify-content: center;\n}\n\n.main-info{\n    grid-column: 2;\n    grid-row: 2;\n    flex-flow: column;\n    align-items: center;\n}\n\n.image{\n    grid-column: 3;\n    grid-row: 2;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    color: white;\n}\n\na{\n    text-decoration: none;\n}\n\n.image a:visited, .image a:link {\n    color: white;\n  }\n\n.footer{\n    grid-column: 1/4;\n    grid-row: 3;\n    border-top: 3px solid black;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_module_daily__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/module-daily */ "./src/modules/module-daily.js");
/* harmony import */ var _modules_module_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/module-image */ "./src/modules/module-image.js");
/* harmony import */ var _modules_module_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/module-projects */ "./src/modules/module-projects.js");





console.log("tessssst");

function wipeDOM(){
    const mainInfo = document.querySelector('.main-info');
    while(mainInfo.firstChild){
        mainInfo.removeChild(mainInfo.firstChild);
    }
}

_modules_module_image__WEBPACK_IMPORTED_MODULE_2__.imgRender();

const dailyTasksButton = document.querySelector('.daily-tasks');
const removeButtons = document.getElementsByClassName('remove-task');

dailyTasksButton.addEventListener('click', () => {
    wipeDOM()
    _modules_module_daily__WEBPACK_IMPORTED_MODULE_1__.renderUI();
    _modules_module_daily__WEBPACK_IMPORTED_MODULE_1__.dailyTasksLibrary.forEach(_modules_module_daily__WEBPACK_IMPORTED_MODULE_1__.renderTasks);
    Array.from(removeButtons).forEach(removeButtonWiring);
});

function removeButtonWiring(button){
    button.addEventListener('click', (function (e) {
        console.log('12');
        _modules_module_daily__WEBPACK_IMPORTED_MODULE_1__.dailyTasksLibrary.splice(e.target.dataset.indexNumber, 1);
        wipeDOM();
        _modules_module_daily__WEBPACK_IMPORTED_MODULE_1__.renderUI();
        _modules_module_daily__WEBPACK_IMPORTED_MODULE_1__.renderTasks();
}));
};



/***/ }),

/***/ "./src/modules/module-daily.js":
/*!*************************************!*\
  !*** ./src/modules/module-daily.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dailyTasksLibrary": () => (/* binding */ dailyTasksLibrary),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "renderUI": () => (/* binding */ renderUI)
/* harmony export */ });


const mainInfo = document.querySelector('.main-info');
const dailyTasksLibrary = [];

const createTasks = (taskName, taskTime) => {
    return {taskName, taskTime}
};

const task1 = createTasks('Wake Up!','8:00');
dailyTasksLibrary.push(task1);



function renderUI(){
    const UIContainer = document.createElement('div');
    UIContainer.classList.add('box');
    mainInfo.appendChild(UIContainer);

    const h3 = document.createElement('h2');
    h3.textContent = 'Add a Task! :)';
    UIContainer.appendChild(h3);

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('add-task');
    addTaskButton.textContent = '+';
    UIContainer.appendChild(addTaskButton);
};

function renderTasks(task){
    let tick = 0

    for(let i = 0; i < dailyTasksLibrary.length; i++){
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('box');
    mainInfo.appendChild(taskContainer);

    const text = document.createElement('p');
    text.textContent = task.taskName;
    taskContainer.appendChild(text);

    const time = document.createElement('p');
    time.textContent = task.taskTime;
    taskContainer.appendChild(time);

    const removeTaskButton = document.createElement('button');
    removeTaskButton.classList.add('remove-task');
    removeTaskButton.dataset.indexNumber= tick;
    tick++;
    removeTaskButton.textContent = '-';
    taskContainer.appendChild(removeTaskButton);
    }
};




/***/ }),

/***/ "./src/modules/module-image.js":
/*!*************************************!*\
  !*** ./src/modules/module-image.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imgRender": () => (/* binding */ imgRender)
/* harmony export */ });
/* harmony import */ var _img_art_alain_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././img/art-alain.jpg */ "./src/img/art-alain.jpg");
/* harmony import */ var _img_art_nicola_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././img/art-nicola.jpg */ "./src/img/art-nicola.jpg");
/* harmony import */ var _img_art_daniel_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././img/art-daniel.jpg */ "./src/img/art-daniel.jpg");
/* harmony import */ var _img_art_road_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././img/art-road.jpg */ "./src/img/art-road.jpg");
/* harmony import */ var _img_art_lance_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././img/art-lance.jpg */ "./src/img/art-lance.jpg");
/* harmony import */ var _img_art_ross_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .././img/art-ross.jpg */ "./src/img/art-ross.jpg");
/* harmony import */ var _img_art_prometheus_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././img/art-prometheus.jpg */ "./src/img/art-prometheus.jpg");

;







const imgCollection = [];

const  imgCombiner = (imgUrl, artistLinks, statement) => {
    return {imgUrl, artistLinks, statement}   
};

const sunday =imgCombiner(_img_art_prometheus_jpg__WEBPACK_IMPORTED_MODULE_6__, "https://unsplash.com/es/@prometheusdesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 'photo by Prometheus Design on Unsplash');
const monday = imgCombiner(_img_art_alain_jpg__WEBPACK_IMPORTED_MODULE_0__, 'https://unsplash.com/@alainpictures?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 'photo by Alain on Unsplash');
const tuesday =  imgCombiner(_img_art_nicola_jpg__WEBPACK_IMPORTED_MODULE_1__, 'https://unsplash.com/@pavan_nicola?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 'photo by Nicola Pavan on Unsplash' );
const wednesday =imgCombiner(_img_art_daniel_jpg__WEBPACK_IMPORTED_MODULE_2__, "https://unsplash.com/@danielsantorfotografia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 'photo by Daniel Sánchez on Unsplash');
const thursday =imgCombiner(_img_art_road_jpg__WEBPACK_IMPORTED_MODULE_3__, "https://unsplash.com/es/@roadahead_2223?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 'photo by Road Ahead on Unsplash');
const friday =imgCombiner(_img_art_lance_jpg__WEBPACK_IMPORTED_MODULE_4__, "https://unsplash.com/@lancereis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 'photo by Lance Reis on Unsplash');
const saturday =imgCombiner(_img_art_ross_jpg__WEBPACK_IMPORTED_MODULE_5__, "https://unsplash.com/@rs2photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 'photo by Ross Stone on Unsplash');

imgCollection.push(sunday, monday, tuesday, wednesday, thursday, friday, saturday);

function imgRender(){
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    
    const img = document.querySelector('.image');
    img.style.backgroundImage = `url(${imgCollection[currentDay].imgUrl})`;  
    
    const symbolSpan = document.createElement("span");
    const link = document.createElement("a");
  
    link.setAttribute('href', `${imgCollection[currentDay].artistLinks}`);
    link.textContent = imgCollection[currentDay].statement;
  
    symbolSpan.appendChild(link);
    img.appendChild(symbolSpan);
}

/***/ }),

/***/ "./src/modules/module-projects.js":
/*!****************************************!*\
  !*** ./src/modules/module-projects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

console.log('test 3')

/***/ }),

/***/ "./src/img/art-alain.jpg":
/*!*******************************!*\
  !*** ./src/img/art-alain.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85e2077a0c3918a25aeb.jpg";

/***/ }),

/***/ "./src/img/art-daniel.jpg":
/*!********************************!*\
  !*** ./src/img/art-daniel.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3301fa05bb2253258210.jpg";

/***/ }),

/***/ "./src/img/art-lance.jpg":
/*!*******************************!*\
  !*** ./src/img/art-lance.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e8f6e194044f0da6afd.jpg";

/***/ }),

/***/ "./src/img/art-nicola.jpg":
/*!********************************!*\
  !*** ./src/img/art-nicola.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca4d58ff3c933e86d824.jpg";

/***/ }),

/***/ "./src/img/art-prometheus.jpg":
/*!************************************!*\
  !*** ./src/img/art-prometheus.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a1a01a617d226c88a01.jpg";

/***/ }),

/***/ "./src/img/art-road.jpg":
/*!******************************!*\
  !*** ./src/img/art-road.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b78331237bbe7464fa4d.jpg";

/***/ }),

/***/ "./src/img/art-ross.jpg":
/*!******************************!*\
  !*** ./src/img/art-ross.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f099aab0e85184712826.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGlCO0FBQ2pCLENBQTJDO0FBQ0U7QUFDQTtBQUNKO0FBQ0U7QUFDRjtBQUNZOztBQUVyRDs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQSwwQkFBMEIsb0RBQVU7QUFDcEMsMkJBQTJCLCtDQUFLO0FBQ2hDLDZCQUE2QixnREFBTTtBQUNuQyw2QkFBNkIsZ0RBQU07QUFDbkMsNEJBQTRCLDhDQUFJO0FBQ2hDLDBCQUEwQiwrQ0FBSztBQUMvQiw0QkFBNEIsOENBQUk7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaUNBQWlDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNDQUFzQztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hDUTtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2R1bGUtZGFpbHkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2R1bGUtaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2R1bGUtcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmIDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4uZmxleCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyIDFmcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuLyogcHJvYmFibHkgd291bGQgd2FudCBtaW5tYXgncyBmb3Igc2l6aW5nIHRvbyAqL1xcbi5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRhaWx5LXRhc2tzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmRhaWx5LXRhc2tzOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xcbn1cXG5cXG4ucHJvamVjdC10YXNrcy10b2RheXtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLndpdGhpbi13ZWVre1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1pbmZve1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1hZ2V7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5he1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5pbWFnZSBhOnZpc2l0ZWQsIC5pbWFnZSBhOmxpbmsge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuLmZvb3RlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBLGdEQUFnRDtBQUNoRDtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7RUFDZDs7QUFFRjtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZiA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmZsZXgge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciAxZnI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcbi8qIHByb2JhYmx5IHdvdWxkIHdhbnQgbWlubWF4J3MgZm9yIHNpemluZyB0b28gKi9cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kYWlseS10YXNrcyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5kYWlseS10YXNrczpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcXG59XFxuXFxuLnByb2plY3QtdGFza3MtdG9kYXl7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi53aXRoaW4td2Vla3tcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3Rze1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4taW5mb3tcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmltYWdle1xcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaW1hZ2UgYTp2aXNpdGVkLCAuaW1hZ2UgYTpsaW5rIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbi5mb290ZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgKiBhcyBkYWlseSBmcm9tICcuL21vZHVsZXMvbW9kdWxlLWRhaWx5JztcbmltcG9ydCAqIGFzIGltYWdlIGZyb20gJy4vbW9kdWxlcy9tb2R1bGUtaW1hZ2UnO1xuaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSAnLi9tb2R1bGVzL21vZHVsZS1wcm9qZWN0cyc7XG5cbmNvbnNvbGUubG9nKFwidGVzc3Nzc3RcIik7XG5cbmZ1bmN0aW9uIHdpcGVET00oKXtcbiAgICBjb25zdCBtYWluSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWluZm8nKTtcbiAgICB3aGlsZShtYWluSW5mby5maXJzdENoaWxkKXtcbiAgICAgICAgbWFpbkluZm8ucmVtb3ZlQ2hpbGQobWFpbkluZm8uZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5pbWFnZS5pbWdSZW5kZXIoKTtcblxuY29uc3QgZGFpbHlUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS10YXNrcycpO1xuY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlbW92ZS10YXNrJyk7XG5cbmRhaWx5VGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2lwZURPTSgpXG4gICAgZGFpbHkucmVuZGVyVUkoKTtcbiAgICBkYWlseS5kYWlseVRhc2tzTGlicmFyeS5mb3JFYWNoKGRhaWx5LnJlbmRlclRhc2tzKTtcbiAgICBBcnJheS5mcm9tKHJlbW92ZUJ1dHRvbnMpLmZvckVhY2gocmVtb3ZlQnV0dG9uV2lyaW5nKTtcbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVCdXR0b25XaXJpbmcoYnV0dG9uKXtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJzEyJyk7XG4gICAgICAgIGRhaWx5LmRhaWx5VGFza3NMaWJyYXJ5LnNwbGljZShlLnRhcmdldC5kYXRhc2V0LmluZGV4TnVtYmVyLCAxKTtcbiAgICAgICAgd2lwZURPTSgpO1xuICAgICAgICBkYWlseS5yZW5kZXJVSSgpO1xuICAgICAgICBkYWlseS5yZW5kZXJUYXNrcygpO1xufSkpO1xufTtcblxuIiwiZXhwb3J0e3JlbmRlclVJLCByZW5kZXJUYXNrcywgZGFpbHlUYXNrc0xpYnJhcnl9XG5cbmNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taW5mbycpO1xuY29uc3QgZGFpbHlUYXNrc0xpYnJhcnkgPSBbXTtcblxuY29uc3QgY3JlYXRlVGFza3MgPSAodGFza05hbWUsIHRhc2tUaW1lKSA9PiB7XG4gICAgcmV0dXJuIHt0YXNrTmFtZSwgdGFza1RpbWV9XG59O1xuXG5jb25zdCB0YXNrMSA9IGNyZWF0ZVRhc2tzKCdXYWtlIFVwIScsJzg6MDAnKTtcbmRhaWx5VGFza3NMaWJyYXJ5LnB1c2godGFzazEpO1xuXG5cblxuZnVuY3Rpb24gcmVuZGVyVUkoKXtcbiAgICBjb25zdCBVSUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFVJQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKFVJQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMy50ZXh0Q29udGVudCA9ICdBZGQgYSBUYXNrISA6KSc7XG4gICAgVUlDb250YWluZXIuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgIFVJQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyVGFza3ModGFzayl7XG4gICAgbGV0IHRpY2sgPSAwXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGFpbHlUYXNrc0xpYnJhcnkubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gdGFzay50YXNrTmFtZTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aW1lLnRleHRDb250ZW50ID0gdGFzay50YXNrVGltZTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gICAgY29uc3QgcmVtb3ZlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlbW92ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXRhc2snKTtcbiAgICByZW1vdmVUYXNrQnV0dG9uLmRhdGFzZXQuaW5kZXhOdW1iZXI9IHRpY2s7XG4gICAgdGljaysrO1xuICAgIHJlbW92ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnLSc7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVUYXNrQnV0dG9uKTtcbiAgICB9XG59O1xuXG5cbiIsImV4cG9ydHtpbWdSZW5kZXJ9XG5pbXBvcnQgYWxhaW4gZnJvbSAnLi4vLi9pbWcvYXJ0LWFsYWluLmpwZyc7XG5pbXBvcnQgbmljb2xhIGZyb20gJy4uLy4vaW1nL2FydC1uaWNvbGEuanBnJztcbmltcG9ydCBkYW5pZWwgZnJvbSAnLi4vLi9pbWcvYXJ0LWRhbmllbC5qcGcnO1xuaW1wb3J0IHJvYWQgZnJvbSAnLi4vLi9pbWcvYXJ0LXJvYWQuanBnJztcbmltcG9ydCBsYW5jZSBmcm9tICcuLi8uL2ltZy9hcnQtbGFuY2UuanBnJztcbmltcG9ydCByb3NzIGZyb20gJy4uLy4vaW1nL2FydC1yb3NzLmpwZyc7XG5pbXBvcnQgcHJvbWV0aGV1cyBmcm9tICcuLi8uL2ltZy9hcnQtcHJvbWV0aGV1cy5qcGcnO1xuXG5jb25zdCBpbWdDb2xsZWN0aW9uID0gW107XG5cbmNvbnN0ICBpbWdDb21iaW5lciA9IChpbWdVcmwsIGFydGlzdExpbmtzLCBzdGF0ZW1lbnQpID0+IHtcbiAgICByZXR1cm4ge2ltZ1VybCwgYXJ0aXN0TGlua3MsIHN0YXRlbWVudH0gICBcbn07XG5cbmNvbnN0IHN1bmRheSA9aW1nQ29tYmluZXIocHJvbWV0aGV1cywgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9lcy9AcHJvbWV0aGV1c2Rlc2lnbj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiwgJ3Bob3RvIGJ5IFByb21ldGhldXMgRGVzaWduIG9uIFVuc3BsYXNoJyk7XG5jb25zdCBtb25kYXkgPSBpbWdDb21iaW5lcihhbGFpbiwgJ2h0dHBzOi8vdW5zcGxhc2guY29tL0BhbGFpbnBpY3R1cmVzP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCcsICdwaG90byBieSBBbGFpbiBvbiBVbnNwbGFzaCcpO1xuY29uc3QgdHVlc2RheSA9ICBpbWdDb21iaW5lcihuaWNvbGEsICdodHRwczovL3Vuc3BsYXNoLmNvbS9AcGF2YW5fbmljb2xhP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCcsICdwaG90byBieSBOaWNvbGEgUGF2YW4gb24gVW5zcGxhc2gnICk7XG5jb25zdCB3ZWRuZXNkYXkgPWltZ0NvbWJpbmVyKGRhbmllbCwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AZGFuaWVsc2FudG9yZm90b2dyYWZpYT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiwgJ3Bob3RvIGJ5IERhbmllbCBTw6FuY2hleiBvbiBVbnNwbGFzaCcpO1xuY29uc3QgdGh1cnNkYXkgPWltZ0NvbWJpbmVyKHJvYWQsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vZXMvQHJvYWRhaGVhZF8yMjIzP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLCAncGhvdG8gYnkgUm9hZCBBaGVhZCBvbiBVbnNwbGFzaCcpO1xuY29uc3QgZnJpZGF5ID1pbWdDb21iaW5lcihsYW5jZSwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AbGFuY2VyZWlzP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLCAncGhvdG8gYnkgTGFuY2UgUmVpcyBvbiBVbnNwbGFzaCcpO1xuY29uc3Qgc2F0dXJkYXkgPWltZ0NvbWJpbmVyKHJvc3MsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHJzMnBob3RvZ3JhcGh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLCAncGhvdG8gYnkgUm9zcyBTdG9uZSBvbiBVbnNwbGFzaCcpO1xuXG5pbWdDb2xsZWN0aW9uLnB1c2goc3VuZGF5LCBtb25kYXksIHR1ZXNkYXksIHdlZG5lc2RheSwgdGh1cnNkYXksIGZyaWRheSwgc2F0dXJkYXkpO1xuXG5mdW5jdGlvbiBpbWdSZW5kZXIoKXtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY3VycmVudERheSA9IGN1cnJlbnREYXRlLmdldERheSgpO1xuICAgIFxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZScpO1xuICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1nQ29sbGVjdGlvbltjdXJyZW50RGF5XS5pbWdVcmx9KWA7ICBcbiAgICBcbiAgICBjb25zdCBzeW1ib2xTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAke2ltZ0NvbGxlY3Rpb25bY3VycmVudERheV0uYXJ0aXN0TGlua3N9YCk7XG4gICAgbGluay50ZXh0Q29udGVudCA9IGltZ0NvbGxlY3Rpb25bY3VycmVudERheV0uc3RhdGVtZW50O1xuICBcbiAgICBzeW1ib2xTcGFuLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGltZy5hcHBlbmRDaGlsZChzeW1ib2xTcGFuKTtcbn0iLCJleHBvcnR7fVxuY29uc29sZS5sb2coJ3Rlc3QgMycpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9