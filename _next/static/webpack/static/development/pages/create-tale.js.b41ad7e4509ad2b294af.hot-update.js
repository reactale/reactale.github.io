webpackHotUpdate("static\\development\\pages\\create-tale.js",{

/***/ "./src/redux/reducers/wipTaleReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/wipTaleReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This is hold and manage the state of the current WIP Tale
 * id: StoryID
 * start: Start Storylet ID
 */


const START_ST_ID = 'ST000'; // BY MY STRICTEST CONVENTION 

const getInitTaleState = () => ({
  id: null,
  start: null,
  info: {
    name: '',
    description: '',
    genre: 'Other',
    lang: 'English',
    tags: '',
    authorEmail: '',
    originalAuthor: '',
    storyUrl: '',
    // The PKey
    desiredUrl: '',
    // For local modification only, until storyUrl is got from Server on 1st Online Save
    imgUrl: ''
  },
  idCounter: 0,
  storylets: {},
  choices: {},
  storyboard: [] // sbI = { stID, selectedCID }  StoryBoardItems[]

});

const createStorylet = st => {
  st = st || {};
  return {
    id: st.id,
    title: st.title || '',
    text: st.text || '',
    choices: st.choices || [] // This will hold only Choice IDs

  };
};

const createChoice = c => {
  c = c || {};
  return {
    id: c.id,
    text: c.text || '',
    next: c.next || null
  };
};

const wipTaleReducer = (state = getInitTaleState(), action) => {
  switch (action.type) {
    /**
     * Create a new Tale, START Storylet ID will always be "st0"
     */
    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["TALE_CREATE"]:
      {
        const storyID = 'R' + new Date().getTime() + Math.random().toString().replace('.', ''); // required for local-file-naming-collision-avoid etc

        const newST = createStorylet({
          id: START_ST_ID
        });

        let wipTale = _objectSpread({}, state, {
          id: storyID,
          start: START_ST_ID,
          storylets: {
            [START_ST_ID]: newST
          },
          storyboard: [{
            stID: START_ST_ID
          }]
        });

        return wipTale;
      }

    /**
     * To work on an existing Tale, we need to set it as WIP Tale
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["TALE_SET_AS_WIP"]:
      {
        return _objectSpread({}, action.payload, {
          storyboard: [{
            stID: START_ST_ID
          }]
        });
      }

    /**
     * Update the "info" object of Tale, while typing in text fields 
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["TALE_UPDATE_INFO"]:
      {
        return _objectSpread({}, state, {
          info: action.payload
        });
      }

    /**
     * Before leaving the Tale creation / edit page, it's good
     * to reset the state
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["TALE_STATE_CLEANUP"]:
      {
        return getInitTaleState();
      }

    /**
     * If already exists a storylet with STID, do nothing
     * Else create one
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["STORYLET_CREATE"]:
      {
        const stID = action.payload.stID;

        if (state.storylets[stID]) {
          return state;
        } else {
          const newST = createStorylet({
            id: stID
          });
          return _objectSpread({}, state, {
            idCounter: state.idCounter + 1,
            storylets: _objectSpread({}, state.storylets, {
              [stID]: newST
            })
          });
        }
      }

    /**
     * Delete the storylet of given stID as payload
     * Delete all its choices
     * Loop thru all storylets and delete all choices pointing to this one
     * 
     * So basically, when we delete a storylet, we also delete all 
     * incoming and outgoing connectors (choice)
     * i.e. deleting 1 storylet and lots of choices
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["STORYLET_DELETE"]:
      {
        let stID = action.payload;
        let st = state.storylets[stID];

        let storylets = _objectSpread({}, state.storylets);

        let choices = _objectSpread({}, state.choices); // Delete all outgoing choices


        for (let cID of st.choices) {
          delete choices[cID];
        } // Now loop thru all the storylets, except this one
        // And delete choices which point to this storylet


        for (let id in storylets) {
          if (id === stID) continue;
          storylets[id].choices = storylets[id].choices.filter(cID => {
            let ch = choices[cID];

            if (ch.next === stID) {
              delete choices[cID];
              return false;
            }

            return true;
          });
        } // Finally delete this ST


        delete storylets[stID];

        let newState = _objectSpread({}, state, {
          storylets,
          choices
        }); // console.log(newState)


        return newState;
      }

    /**
     * Update the given storylet field of given STID as typed
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["STORYLET_UPDATE_FIELD"]:
      {
        const {
          stID,
          fieldName,
          value
        } = action.payload;

        const newST = _objectSpread({}, state.storylets[stID]);

        newST[fieldName] = value;
        return _objectSpread({}, state, {
          storylets: _objectSpread({}, state.storylets, {
            [stID]: newST
          })
        });
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["STORYLET_UPDATE_ALL_TEXT"]:
      {
        const {
          stID,
          title,
          text
        } = action.payload;

        const newST = _objectSpread({}, state.storylets[stID], {
          title,
          text
        });

        return _objectSpread({}, state, {
          storylets: _objectSpread({}, state.storylets, {
            [stID]: newST
          })
        });
      }

    /**
     * ADD a single Storyboard Item to Storyboard array
     * Each Storyboard Item will be an object with STID, selectedCID (optional) etc
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["STORYBOARD_ADD_SINGLE"]:
      {
        return _objectSpread({}, state, {
          storyboard: [...state.storyboard, {
            stID: action.payload.stID
          }]
        });
      }

    /**
     * Add s SBI to a particular spot of SB
     * If isRemoveOnly=true, that means user has deselected a Choice checkbox 
     * but nothing is selected
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["STORYBOARD_INSERT_AT"]:
      {
        const {
          sbI,
          nextStID,
          isRemoveOnly
        } = action.payload;
        let newSB = [...state.storyboard];
        newSB = newSB.slice(0, sbI + 1);

        if (!isRemoveOnly) {
          newSB.push({
            stID: nextStID
          });
        }

        return _objectSpread({}, state, {
          storyboard: newSB
        });
      }

    /**
     * Select a particular Choice of a Storylet, means for that particular
     * SBI we need to mark the CID as selected
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["STORYBOARD_SELECT_CHOICE"]:
      {
        const {
          sbI,
          cID
        } = action.payload;
        let newSB = [...state.storyboard];
        newSB[sbI] = _objectSpread({}, newSB[sbI], {
          selectedCID: cID
        });
        return _objectSpread({}, state, {
          storyboard: newSB
        });
      }

    /**
     * Create a new choice with the given data,
     * Parameters in action.payload contains
     * fromStID { mandatory }
     * toStID { optional }
     * text { optional }
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHOICE_CREATE"]:
      {
        let {
          fromStID,
          toStID,
          text
        } = action.payload;

        let fromST = _objectSpread({}, state.storylets[fromStID]);

        let idCounter = state.idCounter; // if toStID was not provided, create it

        toStID = toStID || 'S' + Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__["make3Figure"])(++idCounter); // if toST does not exist create it

        let toST = state.storylets[toStID] ? _objectSpread({}, state.storylets[toStID]) : createStorylet({
          id: toStID
        }); // Now create the Choice

        let cID = 'C' + Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__["make3Figure"])(++idCounter);
        const newChoice = createChoice({
          id: cID,
          next: toStID,
          text
        });
        fromST.choices = [...fromST.choices, cID];
        return _objectSpread({}, state, {
          idCounter: idCounter,
          choices: _objectSpread({}, state.choices, {
            [cID]: newChoice
          }),
          storylets: _objectSpread({}, state.storylets, {
            [toStID]: toST,
            [fromStID]: fromST
          })
        });
      }

    /**
     * Update the given choice text as typed
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHOICE_UPDATE_TEXT"]:
      {
        const {
          cID,
          value
        } = action.payload;

        const newChoice = _objectSpread({}, state.choices[cID]);

        newChoice.text = value;
        return _objectSpread({}, state, {
          choices: _objectSpread({}, state.choices, {
            [cID]: newChoice
          })
        });
      }

    /**
     * CHOICE_DELETE => delete a choice of given ID
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHOICE_DELETE"]:
      {
        const cID = action.payload;

        let choices = _objectSpread({}, state.choices); // Go thru all the storylets
        // And delete this cID from whoever has this choice
        // Note: each choice is unique, one to one connector
        // i.e. one choice belongs to 1 storylet only
        // and it points to only 1 storylet with its next


        let st;

        for (let id in state.storylets) {
          if (state.storylets[id].choices.indexOf(cID) > -1) {
            st = _objectSpread({}, state.storylets[id]);
            break;
          }
        } // remove this cID from its parent st


        st.choices = [...st.choices];
        st.choices.splice(st.choices.indexOf(cID), 1); // now delete this choice

        delete choices[cID];
        return _objectSpread({}, state, {
          storylets: _objectSpread({}, state.storylets, {
            [st.id]: st
          }),
          choices
        });
      }

    /**
     * Add the given choice to the given Storylet's choices array
     */

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["ADD_CID_TO_STID"]:
      {
        const {
          stID,
          cID
        } = action.payload;

        const newST = _objectSpread({}, state.storylets[stID]);

        newST.choices = [...newST.choices, cID];
        return _objectSpread({}, state, {
          storylets: _objectSpread({}, state.storylets, {
            [stID]: newST
          })
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (wipTaleReducer);

/***/ })

})
//# sourceMappingURL=create-tale.js.b41ad7e4509ad2b294af.hot-update.js.map