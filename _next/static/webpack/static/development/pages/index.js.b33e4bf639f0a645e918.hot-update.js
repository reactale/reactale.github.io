webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/utils/urls.js":
/*!***************************!*\
  !*** ./src/utils/urls.js ***!
  \***************************/
/*! exports provided: config, GET_APP_VER, URL_GET_STORY, URL_CREATE_STORYURL, URL_CREATE_TALE, URL_LOGIN, URL_SIGNUP, URL_LOGOUT, URL_ALLTALES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_APP_VER", function() { return GET_APP_VER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_GET_STORY", function() { return URL_GET_STORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_CREATE_STORYURL", function() { return URL_CREATE_STORYURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_CREATE_TALE", function() { return URL_CREATE_TALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_LOGIN", function() { return URL_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SIGNUP", function() { return URL_SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_LOGOUT", function() { return URL_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_ALLTALES", function() { return URL_ALLTALES; });
const env = 'b'; // can be a/b/c 

const root = {
  "a": "",
  "b": "http://localhost/reactalev2",
  "c": "/everest"
};
const ext = {
  "a": "",
  "b": ".php",
  "c": ".json"
};
const config = {
  origin: 'https://reactale.github.io',
  appType: 'NEXT',
  // 'APP' or 'NEXT' or 'WEB'
  defaultImg: '/static/img/bg/small/storytelling-4203628_640.jpg'
};
const GET_APP_VER = "".concat(root[env], "/rtale/api/getappver").concat(ext[env]);
const URL_GET_STORY = "".concat(root[env], "/rtale/api/v2/getstory").concat(ext[env]);
const URL_CREATE_STORYURL = "".concat(root[env], "/rtale/api/v2/createuniqueurl").concat(ext[env]);
const URL_CREATE_TALE = "".concat(root[env], "/rtale/api/v2/createstory").concat(ext[env]);
const URL_LOGIN = "".concat(root[env], "/rtale/api/v2/signin").concat(ext[env]);
const URL_SIGNUP = "".concat(root[env], "/rtale/api/v2/signup").concat(ext[env]);
const URL_LOGOUT = "".concat(root[env], "/rtale/api/v2/signout").concat(ext[env]);
const URL_ALLTALES = "".concat(root[env], "/rtale/api/v2/getallstories").concat(ext[env]);

/***/ })

})
//# sourceMappingURL=index.js.b33e4bf639f0a645e918.hot-update.js.map