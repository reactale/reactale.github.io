webpackHotUpdate("static\\development\\pages\\edit-tale\\[id].js",{

/***/ "./components/page-modules/createTale/CreateTale.js":
/*!**********************************************************!*\
  !*** ./components/page-modules/createTale/CreateTale.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_AccountTree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountTree */ "./node_modules/@material-ui/icons/AccountTree.js");
/* harmony import */ var _material_ui_icons_AccountTree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountTree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ImportTaleModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImportTaleModal */ "./components/page-modules/createTale/ImportTaleModal.js");
/* harmony import */ var _CreateTaleIntro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CreateTaleIntro */ "./components/page-modules/createTale/CreateTaleIntro.js");
/* harmony import */ var _CreateTaleBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CreateTaleBody */ "./components/page-modules/createTale/CreateTaleBody.js");
/* harmony import */ var _CreateTaleFinish__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CreateTaleFinish */ "./components/page-modules/createTale/CreateTaleFinish.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/util */ "./utils/util.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actionCreators_createTaleActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../redux/actionCreators/createTaleActions */ "./redux/actionCreators/createTaleActions.js");
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/urls */ "./utils/urls.js");
var _jsxFileName = "D:\\Code\\GIthub-Reactale\\reactale-static\\components\\page-modules\\createTale\\CreateTale.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { makeStyles } from '@material-ui/core/styles'

















var CreateTale = function CreateTale(props) {
  var routeHook = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // console.log('routeHook = ', routeHook)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      visibleTabIndex = _useState[0],
      setVisibleTab = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Create"),
      pageTitle = _useState2[0],
      setPageTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isImportModalOpen = _useState3[0],
      setIsImportModalOpen = _useState3[1];

  var id = props.id,
      createNewTale = props.createNewTale,
      saveAndResetAll = props.saveAndResetAll,
      match = props.match,
      setTaleAsWIP = props.setTaleAsWIP,
      history = props.history;

  var handleTabSwitch = function handleTabSwitch(event, newValue) {
    setVisibleTab(newValue);
  };

  var goTo = function goTo(url) {
    return next_router__WEBPACK_IMPORTED_MODULE_1___default.a ? next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(url) : history.push(url);
  };

  var setReactaleForEditing = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var storyID = routeHook ? routeHook.query.id : match.params.id; // console.log(storyID)
    // If it is a local story
    // Then the ID should start with "local"

    if (storyID.indexOf("local") >= 0) {
      storyID = storyID.trim().replace("local-", ""); // FOR SSR

      if (true) {
        var allReactales = JSON.parse(window.localStorage.getItem("allReactales")) || {};
        var theTale = allReactales[storyID];
        setTaleAsWIP(theTale);
      } else {}
    }
  }, [match, setTaleAsWIP, routeHook]);

  var setImportedTaleForEditing = function setImportedTaleForEditing(tale) {
    setTaleAsWIP(tale);
    setIsImportModalOpen(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // if already an ID is present,
    // then already a story is in progress of create / edit
    var path = routeHook ? routeHook.pathname : match.url;

    if (path === '/create-tale' && !id) {
      createNewTale();
    } // edting current in progress tale
    // coming back from FLowTale
    else if (Object(_utils_util__WEBPACK_IMPORTED_MODULE_13__["startsWith"])(path, '/edit-tale/current')) {
        // Do nothing
        console.log('back from TalesFlow');
      } // else Edit Reactale
      else if (Object(_utils_util__WEBPACK_IMPORTED_MODULE_13__["startsWith"])(path, '/edit-tale/')) {
          setPageTitle("Edit");
          setReactaleForEditing();
        } // Already something in progress
        // Do nothing
        else {
            console.log('inside create-edit... else case...');
          }

    return function () {
      console.log("Leaving Story Create Page... Now is a good time to save changes so far..."); //saveAndResetAll()
    };
  }, [id, createNewTale, saveAndResetAll, match, setReactaleForEditing]);
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    p: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h4",
    component: "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, pageTitle, " Reactale"), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mt: 2,
    mb: 4,
    className: "flex-space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, pageTitle, " a Reactale or import one to edit it."), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    color: "primary",
    className: "margin-right-15 margin-top-15",
    onClick: function onClick() {
      return setIsImportModalOpen(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Import Reactale"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    color: "primary",
    className: "margin-top-15",
    startIcon: __jsx("span", {
      className: "talesflowicon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx(_material_ui_icons_AccountTree__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })),
    onClick: function onClick() {
      return goTo('/tales-flow');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "TalesFlow"))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    square: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: visibleTabIndex,
    indicatorColor: "primary",
    textColor: "primary",
    onChange: handleTabSwitch,
    centered: true,
    "aria-label": "tabs to create the story",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Finish",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: visibleTabIndex !== 0 ? 'hide' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_CreateTaleIntro__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: visibleTabIndex !== 1 ? 'hide' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(_CreateTaleBody__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: visibleTabIndex !== 2 ? 'hide' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_CreateTaleFinish__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), __jsx(_ImportTaleModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isOpen: isImportModalOpen,
    handleClose: function handleClose() {
      return setIsImportModalOpen(false);
    },
    setForEditing: setImportedTaleForEditing,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    id: state.wipTale.id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createNewTale: function createNewTale() {
      return dispatch(Object(_redux_actionCreators_createTaleActions__WEBPACK_IMPORTED_MODULE_15__["actionCreateNewTale"])());
    },
    saveAndResetAll: function saveAndResetAll() {
      return dispatch(Object(_redux_actionCreators_createTaleActions__WEBPACK_IMPORTED_MODULE_15__["actionSaveTaleAndReset"])());
    },
    setTaleAsWIP: function setTaleAsWIP(tale) {
      return dispatch(Object(_redux_actionCreators_createTaleActions__WEBPACK_IMPORTED_MODULE_15__["actionSetTaleAsWIP"])(tale));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispatchToProps)(CreateTale));

/***/ })

})
//# sourceMappingURL=[id].js.a2fedbef0f2982bddb73.hot-update.js.map