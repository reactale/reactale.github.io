webpackHotUpdate(5,{

/***/ "./components/page-modules/myTales/MyLocalTales.js":
/*!*********************************************************!*\
  !*** ./components/page-modules/myTales/MyLocalTales.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _common_cards_ComplexCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/cards/ComplexCard */ "./components/common/cards/ComplexCard.js");


var _jsxFileName = "D:\\Code\\GIthub-Reactale\\reactale-static\\components\\page-modules\\myTales\\MyLocalTales.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'



 // const useStyles = makeStyles(theme => ({
//     cardsContainer: {
//     }
// }))

var MyLocalTales = function MyLocalTales(props) {
  // const classes = useStyles()
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      localTales = _useState[0],
      setLocalTales = _useState[1];

  var history = props.history;

  var handlePreview = function handlePreview(id) {
    var r = history ? history : next_router__WEBPACK_IMPORTED_MODULE_3___default.a;
    r.push("/preview/[id]", "/preview/local-".concat(id));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var allReactales = JSON.parse(window.localStorage.getItem("allReactales")) || {};
    setLocalTales(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(allReactales));
  }, []);

  var goToEditTale = function goToEditTale(id) {
    var r = history ? history : next_router__WEBPACK_IMPORTED_MODULE_3___default.a;
    r.push("/edit-tale/[id]", "/edit-tale/local-".concat(id));
  };

  var deleteTale = function deleteTale(id) {
    if (false) {}
    var r = window.confirm('Are you sure you want to delete this local tale. It can not be recovered later (unless you have exported it and import it later)');
    if (!r) return;
    var allReactales = JSON.parse(window.localStorage.getItem("allReactales"));
    delete allReactales[id];
    window.localStorage.setItem("allReactales", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(allReactales));
    setLocalTales(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(allReactales));
    alert('Local tale deleted successfully');
  };

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    py: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, localTales.map(function (t) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      xl: 2,
      key: t.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(_common_cards_ComplexCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tale: t,
      expandable: false,
      handleReadTale: function handleReadTale() {
        return handlePreview(t.id);
      },
      handleEdit: goToEditTale,
      handleDelete: deleteTale,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyLocalTales);

/***/ })

})
//# sourceMappingURL=5.5a0bab033770f4e510fc.hot-update.js.map