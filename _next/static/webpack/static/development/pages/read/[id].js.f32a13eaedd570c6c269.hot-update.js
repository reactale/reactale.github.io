webpackHotUpdate("static\\development\\pages\\read\\[id].js",{

/***/ "./pages/read/[id].js":
/*!****************************!*\
  !*** ./pages/read/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_page_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/page-modules */ "./src/components/page-modules/index.js");
/* harmony import */ var _src_components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/layout */ "./src/components/layout/index.js");
var _jsxFileName = "D:\\Code\\GIthub-Reactale\\reactale-v2-fe\\pages\\read\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Tale = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    tale
  } = props;
  return __jsx(_src_components_layout__WEBPACK_IMPORTED_MODULE_3__["MasterLayout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, tale.info.name), __jsx(_src_components_page_modules__WEBPACK_IMPORTED_MODULE_2__["ReadTaleSSR"], {
    tale: tale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

Tale.getInitialProps = async context => {
  // console.log("router.query.id", context.query.id)
  const {
    id
  } = context.query;
  const res = await __webpack_require__("./reactales/tales lazy recursive ^\\.\\/.*\\.json$")("./".concat(id, ".json"));
  console.log(res);
  return {
    tale: res
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Tale);

/***/ })

})
//# sourceMappingURL=[id].js.f32a13eaedd570c6c269.hot-update.js.map