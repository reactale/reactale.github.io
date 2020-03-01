webpackHotUpdate("static\\development\\pages\\preview\\[id].js",{

/***/ "./components/layout/sidebar/Sidebar.js":
/*!**********************************************!*\
  !*** ./components/layout/sidebar/Sidebar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actionTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/actionTypes */ "./redux/actionTypes.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AddBox */ "./node_modules/@material-ui/icons/AddBox.js");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_BusinessCenter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/BusinessCenter */ "./node_modules/@material-ui/icons/BusinessCenter.js");
/* harmony import */ var _material_ui_icons_BusinessCenter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BusinessCenter__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "D:\\Code\\GIthub-Reactale\\reactale-static\\components\\layout\\sidebar\\Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











 // import AccountTreeIcon from '@material-ui/icons/AccountTree';


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    },
    listItem: {
      borderBottom: "1px solid " + theme.palette.primary.main
    },
    icoInList: {
      minWidth: 40
    },
    ico: {
      fontSize: 30
    }
  };
});
var navs = [{
  name: "Home",
  url: "/",
  icon: _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10___default.a
}, {
  name: "Create Tale",
  url: "/create-tale",
  icon: _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_11___default.a
}, // {
//     name: "Tales Flow",
//     url: "/tales-flow",
//     icon: AccountTreeIcon
// },
{
  name: "My Tales",
  url: "/my-tales",
  icon: _material_ui_icons_BusinessCenter__WEBPACK_IMPORTED_MODULE_12___default.a
}];

var Sidebard = function Sidebard(props) {
  var classes = useStyles();

  var sideList = function sideList(side) {
    return __jsx("div", {
      className: classes.list,
      role: "presentation",
      onClick: props.closeSidebar,
      onKeyDown: props.closeSidebar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, navs.map(function (nav, index) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: nav.name,
        href: nav.url,
        as: nav.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        button: true,
        className: classes.listItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.icoInList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx(nav.icon, {
        color: "primary",
        className: classes.ico,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
        primary: nav.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })));
    })));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: props.isSidebarOpen,
    onClose: props.closeSidebar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, sideList('left')));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSidebarOpen: state.ui.isSidebarOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeSidebar: function closeSidebar() {
      return dispatch({
        type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_9__["UI_SIDEBAR_CLOSE"]
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Sidebard));

/***/ })

})
//# sourceMappingURL=[id].js.f98258aae7330fc00dc3.hot-update.js.map