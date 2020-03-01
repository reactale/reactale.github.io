webpackHotUpdate("static\\development\\pages\\tales-flow.js",{

/***/ "./components/page-modules/talesFlow/TalesFlow.js":
/*!********************************************************!*\
  !*** ./components/page-modules/talesFlow/TalesFlow.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utils/util */ "./utils/util.js");
/* harmony import */ var _controlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./controlPanel/ControlPanel */ "./components/page-modules/talesFlow/controlPanel/ControlPanel.js");
/* harmony import */ var _controlPanel_JoyStick__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./controlPanel/JoyStick */ "./components/page-modules/talesFlow/controlPanel/JoyStick.js");
/* harmony import */ var _FlowST__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FlowST */ "./components/page-modules/talesFlow/FlowST.js");
/* harmony import */ var _FlowConnector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FlowConnector */ "./components/page-modules/talesFlow/FlowConnector.js");
/* harmony import */ var _ModalEditChoice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ModalEditChoice */ "./components/page-modules/talesFlow/ModalEditChoice.js");
/* harmony import */ var _common_modal_FullScreenEdit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/modal/FullScreenEdit */ "./components/common/modal/FullScreenEdit.js");
/* harmony import */ var _flowMaker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./flowMaker */ "./components/page-modules/talesFlow/flowMaker.js");
/* harmony import */ var _redux_actionCreators_createTaleActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../redux/actionCreators/createTaleActions */ "./redux/actionCreators/createTaleActions.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../utils/constants */ "./utils/constants.js");
/* harmony import */ var _redux_actionTypes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../redux/actionTypes */ "./redux/actionTypes.js");









var _jsxFileName = "D:\\Code\\GIthub-Reactale\\reactale-static\\components\\page-modules\\talesFlow\\TalesFlow.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
  return {
    outerContainer: {
      position: 'relative',
      marginLeft: 35,
      height: "calc(100vh - 100px)"
    },
    svgContainer: {
      border: "7px double ".concat(theme.palette.primary.main),
      height: "100%",
      overflow: "auto",
      margin: "".concat(theme.spacing(1), "px 0"),
      borderRadius: theme.spacing(1)
    },
    mainSVG: {
      height: 2000,
      minWidth: "100%",
      width: 2000,
      "-webkit-user-select": "none",

      /* Chrome all / Safari all */
      "-moz-user-select": "none",

      /* Firefox all */
      "-ms-user-select": "none",

      /* IE 10+ */
      userSelect: "none",
      borderRadius: 15,
      "& *": {
        "-webkit-user-select": "none",

        /* Chrome all / Safari all */
        "-moz-user-select": "none",

        /* Firefox all */
        "-ms-user-select": "none",

        /* IE 10+ */
        userSelect: "none"
      }
    },
    joystick: {
      position: "absolute",
      bottom: 83,
      left: 30
    }
  };
});

var TalesFlow = function TalesFlow(props) {
  var classes = useStyles();
  var storylets = props.storylets,
      choices = props.choices,
      start = props.start,
      history = props.history,
      createNewTale = props.createNewTale,
      deleteStorylet = props.deleteStorylet,
      deleteChoice = props.deleteChoice,
      createNewChoice = props.createNewChoice,
      updateChoiceText = props.updateChoiceText;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({}),
      fb = _useState[0],
      setFb = _useState[1]; // fb is flowboard object


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({}),
      fbC = _useState2[0],
      setFbC = _useState2[1]; // fbC is flowboardConnectors object


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      isJStickVis = _useState3[0],
      setJStickVis = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      draggedStID = _useState4[0],
      setDraggedStID = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    x: 0,
    y: 0
  }),
      prevMPos = _useState5[0],
      setPrevMPos = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    id: '',
    type: ''
  }),
      selectedObj = _useState6[0],
      setSelectedObj = _useState6[1]; // type will be "ST" or "CH" or "IN" or "OUT"


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({}),
      editChoiceData = _useState7[0],
      setEditChoiceData = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({}),
      fseParam = _useState8[0],
      setFSEParam = _useState8[1]; // Full Screen Edit    


  var closeFSE = function closeFSE() {
    return setFSEParam({});
  }; // component is either a St or a Ch object


  var openFSE = function openFSE() {
    //console.log(component)
    var component;

    if (!selectedObj.id || selectedObj.type === 'IN' || selectedObj.type === 'OUT') {
      alert('Select a storylet or choice (connector) first. Then click on delete.');
      return;
    } else if (selectedObj.id[0] === 'S') component = storylets[selectedObj.id];else if (selectedObj.id[0] === 'C') component = choices[selectedObj.id];

    setFSEParam({
      component: component,
      isVisible: true
    });
  };
  /**
   * flowBoard: {
   *      stID1: {
   *                  id: stID1,
   *                  x: value,
   *                  y: value,
   *                  transformStyle: someCSSTransformStyle
   *             },
   *      stID2: {
   *                  id: stID2,
   *                  x: value,
   *                  y: value,
   *                  transformStyle: someCSSTransformStyle
   *              }
   * }
   */


  var paintFlowboard = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function () {
    var flowBoard = Object(_flowMaker__WEBPACK_IMPORTED_MODULE_22__["createFlowboard"])(storylets, choices);
    var flowConnectors = Object(_flowMaker__WEBPACK_IMPORTED_MODULE_22__["createFlowConnectors"])(storylets, choices, flowBoard); // console.log("Inside paintFlowboard ............................. flowBoard = ", flowBoard)

    setFb(flowBoard);
    setFbC(flowConnectors);
  }, [storylets, choices]);
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    //if a refresh is done on TalesFlow Page
    // Then start creation process from here
    if (!start) {
      createNewTale();
    }

    paintFlowboard();
  }, [createNewTale, start, paintFlowboard]);

  var handleSelection = function handleSelection(id, type) {
    // if prev selectedObj was 'out'
    // and this is 'IN'
    // Then create a choice (connection)
    if (selectedObj.type === 'OUT' && type === 'IN') {
      var fromStID = selectedObj.id;
      var toStID = id;
      var ftid = fromStID + '---' + toStID;
      setEditChoiceData({
        isOpen: true,
        fromStID: fromStID,
        toStID: toStID,
        type: fbC[ftid] ? 'Edit' : 'Create',
        text: fbC[ftid] ? choices[fbC[ftid].cid].text : ''
      }); // if (fbC[ftid]) {
      //     console.log('Connection already exists...')
      // } else {
      //     console.log(`Create connector from ${selectedObj.id} to ${id}`)
      // }
    } // Now update the state


    setSelectedObj({
      id: id,
      type: type
    });
  };

  var saveEditCreateChoice = function saveEditCreateChoice(fromStID, toStID, text, type) {
    // is it create new
    if (type === 'Create') {
      createNewChoice(fromStID, toStID, text);
    } else if (type === 'Edit') {
      var ftid = fromStID + '---' + toStID;
      var cID = fbC[ftid].cid;
      updateChoiceText(cID, text);
    } else {
      console.log('Could not understand the type in saveEditCreateChoice');
    }

    setEditChoiceData({});
  };
  /**
   * Whenever an ST is dragged/moved, we need to update the associated connectors
   * @param {*} fbi => the updated flowboard item
   */


  var updateConnectors = function updateConnectors(fbi) {
    var newFBC = _objectSpread({}, fbC);

    var wireShiftFTX = _utils_constants__WEBPACK_IMPORTED_MODULE_24__["FLOW_WIRE_SHIFT_X"];
    var wireShiftFY = _utils_constants__WEBPACK_IMPORTED_MODULE_24__["FLOW_WIRE_SHIFT_FROM_Y"];
    var wireShiftTY = _utils_constants__WEBPACK_IMPORTED_MODULE_24__["FLOW_WIRE_SHIFT_TO_Y"]; // Go thru all the flowboard-Connectors
    // to see with whom this stID is connected

    for (var i in newFBC) {
      var c = newFBC[i];
      var ftidParts = c.id.split('---'); // id is basically ftid

      var fromStID = ftidParts[0];
      var toStID = ftidParts[1]; // if from id is this ST

      if (fbi.id === fromStID) {
        c = _objectSpread({}, c);
        c.x1 = fbi.x + wireShiftFTX;
        c.y1 = fbi.y + wireShiftFY;
        newFBC = _objectSpread({}, newFBC, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, c.id, c));
      } // elseif to id is this ST
      else if (fbi.id === toStID) {
          c = _objectSpread({}, c);
          c.x2 = fbi.x + wireShiftFTX;
          c.y2 = fbi.y + wireShiftTY;
          newFBC = _objectSpread({}, newFBC, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, c.id, c));
        }
    }

    setFbC(newFBC);
  };

  var markDraggedStID = function markDraggedStID(ev, stID) {
    ev.stopPropagation(); // console.log('setDraggedStID')

    setDraggedStID(stID);
    setPrevMPos({
      x: ev.pageX,
      y: ev.pageY
    });
  };

  var unmarkDraggedStID = function unmarkDraggedStID(ev) {
    ev.stopPropagation(); // console.log('unsetDraggedStID')

    setDraggedStID('');
    setPrevMPos({
      x: 0,
      y: 0
    });
  };

  var moveST = function moveST(stID, xDisplace, yDisplace) {
    if (!stID || !fb[stID]) return; // Important, don't remove

    var prevElX = fb[stID].x;
    var prevElY = fb[stID].y;
    var newFBI = {
      id: stID,
      x: prevElX + xDisplace,
      y: prevElY + yDisplace
    };
    newFBI.transformStyle = Object(_flowMaker__WEBPACK_IMPORTED_MODULE_22__["getTransformStyle"])(newFBI);

    var newFB = _objectSpread({}, fb, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, stID, newFBI));

    setFb(newFB); //ALSO NEED TO UPDATE THE CONNECTORS POSITION

    updateConnectors(newFBI);
  };

  var moveDraggetST = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.throttle(function (ev) {
    //ev.stopPropagation()
    // console.log("moving 1")
    if (draggedStID) {
      // console.log("moving 2")
      var mouseDiffX = ev.pageX - prevMPos.x;
      var mouseDiffY = ev.pageY - prevMPos.y;
      moveST(draggedStID, mouseDiffX, mouseDiffY);
      setPrevMPos({
        x: ev.pageX,
        y: ev.pageY
      });
    }
  }, 1000);

  var moveWithJStick = function moveWithJStick(xDisplace, yDisplace) {
    if (selectedObj.type === 'ST') {
      moveST(selectedObj.id, xDisplace, yDisplace);
    }
  };

  var moveLeft = function moveLeft() {
    return moveWithJStick(-_utils_constants__WEBPACK_IMPORTED_MODULE_24__["FLOW_SPEED"], 0);
  };

  var moveRight = function moveRight() {
    return moveWithJStick(_utils_constants__WEBPACK_IMPORTED_MODULE_24__["FLOW_SPEED"], 0);
  };

  var moveUp = function moveUp() {
    return moveWithJStick(0, -_utils_constants__WEBPACK_IMPORTED_MODULE_24__["FLOW_SPEED"]);
  };

  var moveDown = function moveDown() {
    return moveWithJStick(0, _utils_constants__WEBPACK_IMPORTED_MODULE_24__["FLOW_SPEED"]);
  };

  var deleteComponent = function deleteComponent() {
    if (!selectedObj.id || selectedObj.type === 'IN' || selectedObj.type === 'OUT') {
      alert('Select a storylet or choice (connector) first. Then click on delete.');
    } else if (selectedObj.id === start) {
      alert('Start storylet can not be deleted. Please edit it to your choice.');
    } else {
      var comName = '';
      if (selectedObj.id[0] === 'S') comName = 'STORYLET';else if (selectedObj.id[0] === 'C') comName = 'CHOICE';

      if (false) {}

      var r = window.confirm("Are you sure you want to delete ".concat(comName, " ").concat(selectedObj.id, ". Once deleted, it may not be recovered back."));

      if (r) {
        if (comName === 'STORYLET') deleteStorylet(selectedObj.id);else if (comName === 'CHOICE') deleteChoice(selectedObj.id);
      }
    }
  }; // If props have changed, but useEffect has not updated flowboard yet
  // stop the rendering


  if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(storylets).length !== _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(fb).length || _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(choices).length !== _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(fbC).length) {
    return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, "Updating ...");
  } // Else return


  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, __jsx(_controlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_16__["default"], {
    history: history,
    deleteComponent: deleteComponent,
    paintFlowboard: paintFlowboard,
    toggleJStick: function toggleJStick() {
      return setJStickVis(!isJStickVis);
    },
    openFSE: openFSE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }), __jsx("div", {
    className: classes.outerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, __jsx("div", {
    className: classes.svgContainer,
    onClick: function onClick() {
      return setSelectedObj({});
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, __jsx("svg", {
    className: classes.mainSVG,
    onMouseUp: function onMouseUp(e) {
      return unmarkDraggedStID(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(fbC).map(function (c) {
    return __jsx(_FlowConnector__WEBPACK_IMPORTED_MODULE_19__["default"], {
      c: c,
      key: c.id,
      selectedObj: selectedObj,
      handleSelection: handleSelection,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    });
  }), //console.log("props.storylets", storylets)
  _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(fb).map(function (fbi) {
    var st = storylets[fbi.id];
    return __jsx(_FlowST__WEBPACK_IMPORTED_MODULE_18__["default"], {
      stid: st.id,
      title: st.title,
      transformStyle: fbi.transformStyle,
      start: start,
      key: st.id,
      selectedObj: selectedObj,
      handleSelection: handleSelection,
      handleMouseDown: markDraggedStID,
      handleMouseUp: unmarkDraggedStID,
      handleMouseMove: moveDraggetST,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    });
  }))), __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])(classes.joystick, !isJStickVis && 'hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, __jsx(_controlPanel_JoyStick__WEBPACK_IMPORTED_MODULE_17__["default"], {
    moveLeft: moveLeft,
    moveRight: moveRight,
    moveUp: moveUp,
    moveDown: moveDown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }))), __jsx(_ModalEditChoice__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    isOpen: editChoiceData.isOpen
  }, editChoiceData, {
    handleClose: function handleClose() {
      return setEditChoiceData({});
    },
    handleSave: saveEditCreateChoice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  })), __jsx(_common_modal_FullScreenEdit__WEBPACK_IMPORTED_MODULE_21__["default"], {
    isOpen: fseParam.isVisible,
    handleClose: closeFSE,
    component: fseParam.component,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    start: state.wipTale.start,
    storylets: state.wipTale.storylets,
    choices: state.wipTale.choices
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createNewTale: function createNewTale() {
      return dispatch(Object(_redux_actionCreators_createTaleActions__WEBPACK_IMPORTED_MODULE_23__["actionCreateNewTale"])());
    },
    deleteStorylet: function deleteStorylet(stID) {
      return dispatch({
        type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_25__["STORYLET_DELETE"],
        payload: stID
      });
    },
    deleteChoice: function deleteChoice(cID) {
      return dispatch({
        type: _redux_actionTypes__WEBPACK_IMPORTED_MODULE_25__["CHOICE_DELETE"],
        payload: cID
      });
    },
    createNewChoice: function createNewChoice(fromStID, toStID, text) {
      return dispatch(Object(_redux_actionCreators_createTaleActions__WEBPACK_IMPORTED_MODULE_23__["actionCreateChoice"])(fromStID, toStID, text));
    },
    updateChoiceText: function updateChoiceText(cID, value) {
      return dispatch(Object(_redux_actionCreators_createTaleActions__WEBPACK_IMPORTED_MODULE_23__["actionUpdateCText"])(cID, value));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispatchToProps)(TalesFlow));

/***/ })

})
//# sourceMappingURL=tales-flow.js.e52113ab197da0ef920b.hot-update.js.map