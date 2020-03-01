webpackHotUpdate("static\\development\\pages\\edit-tale\\[id].js",{

/***/ "./components/common/storylet/Storylet.js":
/*!************************************************!*\
  !*** ./components/common/storylet/Storylet.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _Choice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Choice */ "./components/common/storylet/Choice.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AddBox */ "./node_modules/@material-ui/icons/AddBox.js");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_icons_ReactoIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/icons/ReactoIcon */ "./components/common/icons/ReactoIcon.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actionTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/actionTypes */ "./redux/actionTypes.js");
/* harmony import */ var _redux_actionCreators_createTaleActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../redux/actionCreators/createTaleActions */ "./redux/actionCreators/createTaleActions.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
var _jsxFileName = "D:\\Code\\GIthub-Reactale\\reactale-static\\components\\common\\storylet\\Storylet.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    textField: {
      display: "flex",
      marginTop: theme.spacing(2)
    },
    box: {
      border: "5px double ".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["orange"][500]),
      borderRadius: 4,
      position: "relative"
    },
    title: {
      border: "5px double ".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["orange"][500]),
      position: "absolute",
      background: '#fff',
      padding: '0 5px',
      borderRadius: 4,
      top: -20,
      left: 8,
      fontSize: 14
    },
    joiner: {
      position: "absolute",
      height: theme.spacing(5),
      borderLeft: "5px double ".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["orange"][500]),
      width: 1,
      left: "50%",
      top: -45
    },
    choiceContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between"
    },
    addChoiceBtn: {
      alignSelf: "center",
      height: 90,
      borderRadius: 6,
      margin: "0 ".concat(theme.spacing(1), "px"),
      textAlign: "center",
      fontSize: 16,
      lineHeight: " 20px",
      '& span': {
        display: "block"
      },
      '& svg': {
        fontSize: 36
      }
    },
    idTag: {
      fontSize: 14,
      display: 'inline-block',
      backgroundColor: '#eee',
      padding: '2px 5px',
      borderRadius: 2,
      '& .ico': {} // '& input': {
      //     fontSize: 14,
      //     backgroundColor: 'inherit',
      //     outline: 'none',
      //     border: 'none',
      //     width: 60
      // }

    },
    btnPanel: {
      position: "absolute",
      top: 0,
      right: 0,
      '& .ico': {
        boxSizing: 'content-box',
        padding: "15px 8px",
        color: theme.palette.primary.main,
        cursor: 'pointer',
        // borderRadius: '50%',
        verticalAlign: "middle",
        fontSize: 18,
        display: 'inline-block',
        width: 30,
        height: 20
      },
      '& .ico:active': {
        backgroundColor: '#eee'
      }
    }
  };
});

var Storylet = function Storylet(props) {
  var classes = useStyles();
  var st = props.st,
      sbI = props.sbI,
      sbItem = props.sbItem,
      createAChoice = props.createAChoice,
      choices = props.choices,
      openFSE = props.openFSE;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.box,
    px: 1,
    pb: 2,
    pt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, sbI !== 0 && __jsx("span", {
    className: classes.joiner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("span", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Storylet"), __jsx("div", {
    className: classes.idTag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "ID: ", st.id)), __jsx("div", {
    className: classes.btnPanel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"],
    className: "ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), __jsx(_common_icons_ReactoIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"],
    className: "ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPencilAlt"],
    className: "ico",
    title: "Edit this Storylet",
    onClick: function onClick() {
      return openFSE(st);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), __jsx("form", {
    noValidate: true,
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Storylet title",
    variant: "outlined",
    className: classes.textField,
    value: st.title,
    onChange: function onChange(e) {
      return props.typingStValue(st.id, "title", e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Storylet body",
    multiline: true,
    rows: "6",
    variant: "outlined",
    className: classes.textField,
    value: st.text,
    onChange: function onChange(e) {
      return props.typingStValue(st.id, "text", e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.box,
    pt: 2,
    pb: 2,
    my: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("span", {
    className: classes.joiner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), __jsx("span", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Choices"), __jsx("div", {
    className: classes.choiceContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, st.choices && st.choices.map(function (cID) {
    return __jsx(_Choice__WEBPACK_IMPORTED_MODULE_4__["default"], {
      c: choices[cID],
      stID: st.id,
      sbI: sbI,
      isSelected: sbItem.selectedCID === cID,
      key: cID,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    });
  }), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.addChoiceBtn,
    variant: "extended",
    color: "primary",
    onClick: function onClick() {
      return createAChoice(props.st.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), __jsx("span", {
    className: "txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Add Choice")))));
};

var UpdateStField = function UpdateStField(stID, fieldName, value, dispatch) {
  dispatch({
    type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_11__["STORYLET_UPDATE_FIELD"],
    payload: {
      stID: stID,
      fieldName: fieldName,
      value: value
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    choices: state.wipTale.choices
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    typingStValue: function typingStValue(stID, fieldName, value) {
      return UpdateStField(stID, fieldName, value, dispatch);
    },
    createAChoice: function createAChoice(stID) {
      return dispatch(Object(_redux_actionCreators_createTaleActions__WEBPACK_IMPORTED_MODULE_12__["actionCreateChoice"])(stID));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Storylet));

/***/ })

})
//# sourceMappingURL=[id].js.bb9431f9571eb59f439f.hot-update.js.map