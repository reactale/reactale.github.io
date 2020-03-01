webpackHotUpdate("static\\development\\pages\\tales-flow.js",{

/***/ "./components/page-modules/talesFlow/controlPanel/ControlPanel.js":
/*!************************************************************************!*\
  !*** ./components/page-modules/talesFlow/controlPanel/ControlPanel.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ZoomOutMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ZoomOutMap */ "./node_modules/@material-ui/icons/ZoomOutMap.js");
/* harmony import */ var _material_ui_icons_ZoomOutMap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ZoomOutMap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AddBox */ "./node_modules/@material-ui/icons/AddBox.js");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Gamepad */ "./node_modules/@material-ui/icons/Gamepad.js");
/* harmony import */ var _material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Gamepad__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_TouchApp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/TouchApp */ "./node_modules/@material-ui/icons/TouchApp.js");
/* harmony import */ var _material_ui_icons_TouchApp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TouchApp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Create */ "./node_modules/@material-ui/icons/Create.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_OpenWith__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/OpenWith */ "./node_modules/@material-ui/icons/OpenWith.js");
/* harmony import */ var _material_ui_icons_OpenWith__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_OpenWith__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "D:\\Code\\GIthub-Reactale\\reactale-static\\components\\page-modules\\talesFlow\\controlPanel\\ControlPanel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    panel: {
      width: 40,
      backgroundImage: "linear-gradient(".concat(theme.palette.primary.main, ", ").concat(theme.palette.primary.dark, ")"),
      position: 'absolute',
      left: 0,
      top: 50,
      height: "calc(100vh - 60px)",
      overflow: "auto"
    },
    btnPane: {
      color: '#fff',
      padding: "".concat(theme.spacing(2), "px 0"),
      '& li': {
        height: 44,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      '& li+li': {
        borderTop: '1px solid #fff'
      },
      '& li:active': {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__["red"].A400
      },
      '& li svg': {
        fontSize: 27
      }
    },
    fa: {
      fontSize: '24px !important',
      width: 25,
      height: 25
    },
    autoMagic: {
      transform: 'rotate(-90deg)'
    },
    toggleJStick: {// transform: 'rotate(45deg)',
      // fontSize: '26px !important' 
    }
  };
});

var ControlPanel = function ControlPanel(props) {
  var classes = useStyles();
  var history = props.history,
      deleteComponent = props.deleteComponent,
      paintFlowboard = props.paintFlowboard,
      toggleJStick = props.toggleJStick,
      openFSE = props.openFSE;

  var backToEdit = function backToEdit() {
    var r = history ? history : next_router__WEBPACK_IMPORTED_MODULE_1___default.a;
    r.push('/edit-tale/[id]', '/edit-tale/current'); // NextRouter.push({pathname: '/edit-tale', query: {id: 'current'} })
  };

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.panel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("ul", {
    className: classes.btnPane,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("li", {
    title: "Back to Editor",
    onClick: backToEdit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx("li", {
    title: "Add component",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx("li", {
    title: "Select component",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faMousePointer"],
    className: classes.fa,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("li", {
    title: "Edit component",
    onClick: openFSE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faPencilAlt"],
    className: classes.fa,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx("li", {
    title: "Save all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), __jsx("li", {
    title: "Toggle joystick",
    onClick: toggleJStick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_icons_OpenWith__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.toggleJStick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx("li", {
    title: "Auto format",
    onClick: paintFlowboard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faMagic"],
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.fa, classes.autoMagic),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx("li", {
    title: "Increase draw area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_icons_ZoomOutMap__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("li", {
    title: "Delete selected",
    onClick: deleteComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ControlPanel);

/***/ })

})
//# sourceMappingURL=tales-flow.js.0fa054ab6b03d3336325.hot-update.js.map