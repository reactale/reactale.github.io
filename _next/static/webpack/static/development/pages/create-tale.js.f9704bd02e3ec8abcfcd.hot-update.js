webpackHotUpdate("static\\development\\pages\\create-tale.js",{

/***/ "./components/page-modules/createTale/CreateTaleFinish.js":
/*!****************************************************************!*\
  !*** ./components/page-modules/createTale/CreateTaleFinish.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ExportTaleModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExportTaleModal */ "./components/page-modules/createTale/ExportTaleModal.js");
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/urls */ "./utils/urls.js");
/* harmony import */ var _common_cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/cards */ "./components/common/cards/index.js");
/* harmony import */ var _exportFeatureText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exportFeatureText */ "./components/page-modules/createTale/exportFeatureText.js");


var _jsxFileName = "D:\\Code\\GIthub-Reactale\\reactale-static\\components\\page-modules\\createTale\\CreateTaleFinish.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // import Container from '@material-ui/core/Container'


 // import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'








function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

var CreateTaleFinish = function CreateTaleFinish(props) {
  var wipTale = props.wipTale;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isExpTaleModalVisible = _useState[0],
      setExpTModalVis = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      expTale = _useState2[0],
      setExpTale = _useState2[1];

  var getWIPTale = function getWIPTale() {
    var storyboard = wipTale.storyboard,
        tale = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(wipTale, ["storyboard"]);

    return tale;
  };

  var exportWIPTale = function exportWIPTale() {
    var tale = getWIPTale();
    console.log(tale);
    var content = btoa(encodeURIComponent(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(tale)));
    download("".concat(tale.info.name, "_").concat(tale.id, ".txt"), content);
    setExpTale(content);
    setExpTModalVis(true);
  };

  var saveTaleLocal = function saveTaleLocal() {
    var tale = getWIPTale();

    if (true) {
      var allReactales = JSON.parse(window.localStorage.getItem("allReactales")) || {};
      allReactales[tale.id] = tale;
      window.localStorage.setItem("allReactales", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(allReactales));
      alert("Saved succesfully. " + localStorageSpace());
    } else {}
  };

  var saveTaleOnline = function saveTaleOnline() {
    var tale = getWIPTale(); // console.log(tale)

    fetch(_utils_urls__WEBPACK_IMPORTED_MODULE_8__["URL_CREATE_TALE"], {
      method: "POST",
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(tale)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return console.log(res);
    });
  };

  var localStorageSpace = function localStorageSpace() {
    var allStrings = '';
    if (false) {}

    for (var key in window.localStorage) {
      if (window.localStorage.hasOwnProperty(key)) {
        allStrings += window.localStorage[key];
      }
    }

    return allStrings ? 3 + allStrings.length * 16 / (8 * 1024) + ' KB' : 'Empty (0 KB)';
  };

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_ExportTaleModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: isExpTaleModalVisible,
    handleClose: function handleClose() {
      return setExpTModalVis(false);
    },
    expTaleContent: expTale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 1,
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_common_cards__WEBPACK_IMPORTED_MODULE_9__["InfoCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Export Reactale"), "Export this reactale", __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Feature"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, _exportFeatureText__WEBPACK_IMPORTED_MODULE_10__["default"].exportTale.features.map(function (t) {
    return __jsx("li", {
      key: t,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, t);
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    color: "primary",
    className: "margin-right-15 margin-top-15",
    onClick: exportWIPTale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Export Reactale"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_common_cards__WEBPACK_IMPORTED_MODULE_9__["InfoCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Save Offline"), "Save this reactale offline in local device", __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Feature"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, _exportFeatureText__WEBPACK_IMPORTED_MODULE_10__["default"].saveLocal.features.map(function (t) {
    return __jsx("li", {
      key: t,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, t);
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    color: "primary",
    className: "margin-right-15 margin-top-15",
    onClick: saveTaleLocal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Save Offline"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_common_cards__WEBPACK_IMPORTED_MODULE_9__["InfoCard"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Save Online"), "Save this reactale online", __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Feature"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, _exportFeatureText__WEBPACK_IMPORTED_MODULE_10__["default"].saveOnline.features.map(function (t) {
    return __jsx("li", {
      key: t,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, t);
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    color: "primary",
    className: "margin-top-15",
    onClick: saveTaleOnline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Save Online")))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    wipTale: state.wipTale
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(CreateTaleFinish));

/***/ })

})
//# sourceMappingURL=create-tale.js.f9704bd02e3ec8abcfcd.hot-update.js.map