"use strict";
(() => {
var exports = {};
exports.id = 421;
exports.ids = [421];
exports.modules = {

/***/ 4747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_secure)
});

;// CONCATENATED MODULE: external "buffer"
const external_buffer_namespaceObject = require("buffer");
;// CONCATENATED MODULE: ./pages/api/secure.js

/* harmony default export */ const api_secure = (async (req, res)=>{
    const projectId = process.env.IPFS_PROJECT_ID;
    const projectSecret = process.env.API_KEY_SECRET;
    const auth = `Basic ${external_buffer_namespaceObject.Buffer.from(`${projectId}:${projectSecret}`).toString('base64')}`;
    res.status(200).json({
        data: auth
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4747));
module.exports = __webpack_exports__;

})();