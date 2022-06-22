(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("react-delta-table", [], factory);
	else if(typeof exports === 'object')
		exports["react-delta-table"] = factory();
	else
		root["react-delta-table"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/data-table.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style/data-table.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".data-table {\n  margin: auto;\n  border-spacing: 0;\n  font-family: 'Roboto', sans-serif;\n  background-color: transparent;\n  color: #ffffff;\n  width: fit-content;\n  width: 100%; }\n  .data-table .data-table-toolbar {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n    .data-table .data-table-toolbar .data-table-toolbar-select {\n      background-color: #1c1c1c;\n      color: #ffffff;\n      border: none;\n      border-radius: 12px;\n      padding: 10px 5px;\n      font-size: 12px; }\n    .data-table .data-table-toolbar .data-table-toolbar-input-container {\n      display: flex; }\n      .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input {\n        background-color: #1c1c1c;\n        color: #ffffff;\n        border: none;\n        padding: 10px;\n        font-size: 12px;\n        border-radius: 12px; }\n        .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input input {\n          border: none;\n          border-radius: 2px;\n          padding: 2px;\n          font-size: 12px; }\n      .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox {\n        display: flex;\n        align-items: center;\n        background-color: #1c1c1c;\n        color: #ffffff;\n        border: none;\n        font-size: 12px;\n        position: relative;\n        border-radius: 10px;\n        padding-left: 30px;\n        padding-right: 30px;\n        margin-right: 20px;\n        font-size: 12px; }\n        .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown {\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          border: none;\n          font-size: 12px;\n          background-color: #1c1c1c;\n          color: #ffffff;\n          display: flex;\n          align-items: center; }\n          .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-label {\n            margin-right: 10px; }\n          .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-icon .data-table-dropdown-svg {\n            fill: #ffffff;\n            width: 12px;\n            height: 12px; }\n            .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-icon .data-table-dropdown-svg__closed {\n              fill: #ffffff;\n              width: 12px;\n              height: 12px;\n              transform: rotate(180deg); }\n          .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown:hover {\n            cursor: pointer; }\n        .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container {\n          position: absolute;\n          background-color: #000000;\n          color: #ffffff;\n          display: flex;\n          flex-direction: column;\n          top: 100%;\n          width: calc(100% - 20px);\n          left: 0;\n          padding: 10px;\n          border-radius: 12px; }\n          .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container input:hover {\n            cursor: pointer; }\n          .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container__closed {\n            display: none; }\n  .data-table .data-table-container {\n    overflow-x: auto; }\n    .data-table .data-table-container table {\n      border-spacing: 0;\n      border-color: #000000;\n      border-collapse: collapse;\n      margin: auto;\n      width: 100%; }\n      .data-table .data-table-container table .data-table-header {\n        color: #bababa;\n        background-color: #1c1c1c;\n        font-size: 14px; }\n        .data-table .data-table-container table .data-table-header .data-table-row {\n          padding: 0; }\n          .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell {\n            padding: 15px; }\n            .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content {\n              margin: auto;\n              display: flex;\n              align-items: center; }\n              .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content:hover {\n                cursor: pointer; }\n              .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content .data-table-header-cell-text {\n                margin-right: 5px; }\n          .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected {\n            padding: 15px;\n            background-color: rgba(186, 186, 186, 0.1); }\n            .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content {\n              margin: auto;\n              display: flex;\n              align-items: center; }\n              .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content:hover {\n                cursor: pointer; }\n              .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content .data-table-header-cell-text {\n                margin-right: 5px; }\n      .data-table .data-table-container table .data-table-body {\n        color: #ffffff;\n        background-color: #262626;\n        font-size: 14px; }\n        .data-table .data-table-container table .data-table-body .data-table-row {\n          padding: 0; }\n          .data-table .data-table-container table .data-table-body .data-table-row .data-table-body-cell {\n            padding: 15px; }\n          .data-table .data-table-container table .data-table-body .data-table-row .data-table-body-cell__selected {\n            padding: 15px;\n            background-color: rgba(186, 186, 186, 0.2); }\n  .data-table .data-table-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n    .data-table .data-table-footer .data-table-footer-pagination {\n      margin-top: 10px;\n      margin-bottom: 10px; }\n      .data-table .data-table-footer .data-table-footer-pagination button {\n        background-color: #1c1c1c;\n        color: #ffffff;\n        border: none;\n        border-radius: 12px;\n        padding: 10px;\n        font-size: 12px;\n        margin-right: 5px; }\n        .data-table .data-table-footer .data-table-footer-pagination button:hover {\n          cursor: pointer;\n          opacity: 0.8; }\n      .data-table .data-table-footer .data-table-footer-pagination select {\n        background-color: #1c1c1c;\n        color: #ffffff;\n        border: none;\n        padding: 10px 5px;\n        font-size: 12px;\n        border-radius: 12px;\n        margin-right: 5px; }\n      .data-table .data-table-footer .data-table-footer-pagination .selected-button {\n        opacity: 0.5; }\n        .data-table .data-table-footer .data-table-footer-pagination .selected-button:hover {\n          cursor: inherit;\n          opacity: 0.5; }\n    .data-table .data-table-footer .data-table-footer-export {\n      display: flex;\n      align-items: center;\n      border-radius: 12px;\n      border: none;\n      padding: 5px 10px;\n      color: #ffffff;\n      background-color: #1c1c1c; }\n      .data-table .data-table-footer .data-table-footer-export p {\n        font-size: 12px;\n        font-weight: 600;\n        font-style: normal;\n        padding: 0;\n        margin: 0; }\n      .data-table .data-table-footer .data-table-footer-export span svg {\n        width: 25px;\n        height: 25px;\n        margin-left: 20px; }\n      .data-table .data-table-footer .data-table-footer-export span:hover {\n        cursor: pointer; }\n\n/* Designing for scroll-bar */\n::-webkit-scrollbar {\n  width: 5px;\n  height: 10px; }\n\n::-webkit-scrollbar-track {\n  background: gainsboro;\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb {\n  background: #1c1c1c;\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n.data-table__light {\n  margin: auto;\n  border-spacing: 0;\n  font-family: 'Roboto', sans-serif;\n  background-color: transparent;\n  color: #000000;\n  width: fit-content;\n  width: 100%; }\n  .data-table__light .data-table-toolbar {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n    .data-table__light .data-table-toolbar .data-table-toolbar-select {\n      background-color: #ffffff;\n      color: #000000;\n      border: 1px solid #c4c2c2;\n      border-radius: 12px;\n      padding: 10px 5px;\n      font-size: 12px; }\n    .data-table__light .data-table-toolbar .data-table-toolbar-input-container {\n      display: flex; }\n      .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input {\n        background-color: #ffffff;\n        color: #000000;\n        border: 1px solid rgba(0, 0, 0, 0.25);\n        padding: 10px;\n        font-size: 12px;\n        border-radius: 12px; }\n        .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input input {\n          border: 1px solid rgba(0, 0, 0, 0.25);\n          border-radius: 2px;\n          padding: 2px;\n          font-size: 12px; }\n      .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox {\n        display: flex;\n        align-items: center;\n        background-color: #ffffff;\n        color: #000000;\n        border: 1px solid rgba(0, 0, 0, 0.25);\n        font-size: 12px;\n        position: relative;\n        border-radius: 10px;\n        padding-left: 30px;\n        padding-right: 30px;\n        margin-right: 20px;\n        font-size: 12px; }\n        .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown {\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          border: none;\n          font-size: 12px;\n          background-color: #ffffff;\n          color: #000000;\n          display: flex;\n          align-items: center; }\n          .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-label {\n            margin-right: 10px; }\n          .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-icon .data-table-dropdown-svg {\n            fill: #000000;\n            width: 12px;\n            height: 12px; }\n            .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-icon .data-table-dropdown-svg__closed {\n              fill: #000000;\n              width: 12px;\n              height: 12px;\n              transform: rotate(180deg); }\n          .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown:hover {\n            cursor: pointer; }\n        .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container {\n          position: absolute;\n          background-color: #ffffff;\n          color: #000000;\n          display: flex;\n          flex-direction: column;\n          top: 100%;\n          width: calc(100% - 20px);\n          left: 0;\n          padding: 10px;\n          border-radius: 12px;\n          border: 1px solid rgba(0, 0, 0, 0.25); }\n          .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container input:hover {\n            cursor: pointer; }\n          .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container__closed {\n            display: none; }\n  .data-table__light .data-table-container {\n    overflow-x: auto; }\n    .data-table__light .data-table-container table {\n      border-spacing: 0;\n      border-color: #c4c2c2;\n      border-collapse: collapse;\n      margin: auto;\n      width: 100%;\n      border: 1px solid #c4c2c2; }\n      .data-table__light .data-table-container table .data-table-header {\n        color: #000000;\n        background-color: rgba(196, 194, 194, 0.5);\n        font-size: 14px; }\n        .data-table__light .data-table-container table .data-table-header .data-table-row {\n          padding: 0; }\n          .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell {\n            padding: 15px; }\n            .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content {\n              margin: auto;\n              display: flex;\n              align-items: center; }\n              .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content:hover {\n                cursor: pointer; }\n              .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content .data-table-header-cell-text {\n                margin-right: 5px; }\n          .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected {\n            padding: 15px;\n            background-color: rgba(196, 194, 194, 0.6); }\n            .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content {\n              margin: auto;\n              display: flex;\n              align-items: center; }\n              .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content:hover {\n                cursor: pointer; }\n              .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content .data-table-header-cell-text {\n                margin-right: 5px; }\n      .data-table__light .data-table-container table .data-table-body {\n        color: #000000;\n        background-color: #ffffff;\n        font-size: 14px; }\n        .data-table__light .data-table-container table .data-table-body .data-table-row {\n          padding: 0; }\n          .data-table__light .data-table-container table .data-table-body .data-table-row .data-table-body-cell {\n            padding: 15px; }\n          .data-table__light .data-table-container table .data-table-body .data-table-row .data-table-body-cell__selected {\n            padding: 15px;\n            background-color: rgba(155, 155, 155, 0.1); }\n  .data-table__light .data-table-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n    .data-table__light .data-table-footer .data-table-footer-pagination {\n      margin-top: 10px;\n      margin-bottom: 10px; }\n      .data-table__light .data-table-footer .data-table-footer-pagination button {\n        background-color: #ffffff;\n        color: #000000;\n        border: 1px solid #c4c2c2;\n        border-radius: 12px;\n        padding: 10px;\n        font-size: 12px;\n        margin-right: 5px; }\n        .data-table__light .data-table-footer .data-table-footer-pagination button:hover {\n          cursor: pointer;\n          opacity: 0.8; }\n      .data-table__light .data-table-footer .data-table-footer-pagination select {\n        background-color: #ffffff;\n        color: #000000;\n        border: 1px solid #c4c2c2;\n        padding: 10px 5px;\n        font-size: 12px;\n        border-radius: 12px;\n        margin-right: 5px; }\n      .data-table__light .data-table-footer .data-table-footer-pagination .selected-button {\n        opacity: 0.5; }\n        .data-table__light .data-table-footer .data-table-footer-pagination .selected-button:hover {\n          cursor: inherit;\n          opacity: 0.5; }\n    .data-table__light .data-table-footer .data-table-footer-export {\n      display: flex;\n      align-items: center;\n      border-radius: 12px;\n      border: 1px solid #c4c2c2;\n      padding: 5px 10px;\n      background-color: #ffffff; }\n      .data-table__light .data-table-footer .data-table-footer-export p {\n        font-size: 12px;\n        font-weight: 600;\n        font-style: normal;\n        padding: 0;\n        margin: 0; }\n      .data-table__light .data-table-footer .data-table-footer-export span svg {\n        width: 25px;\n        height: 25px;\n        margin-left: 20px; }\n      .data-table__light .data-table-footer .data-table-footer-export span:hover {\n        cursor: pointer; }\n\n::-webkit-scrollbar {\n  width: 5px;\n  height: 10px; }\n\n::-webkit-scrollbar-track {\n  background: gainsboro;\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb {\n  background: #1c1c1c;\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n", "",{"version":3,"sources":["webpack://./src/assets/style/data-table.css"],"names":[],"mappings":"AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,iCAAiC;EACjC,6BAA6B;EAC7B,cAAc;EACd,kBAAkB;EAClB,WAAW,EAAE;EACb;IACE,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB,EAAE;IACrB;MACE,yBAAyB;MACzB,cAAc;MACd,YAAY;MACZ,mBAAmB;MACnB,iBAAiB;MACjB,eAAe,EAAE;IACnB;MACE,aAAa,EAAE;MACf;QACE,yBAAyB;QACzB,cAAc;QACd,YAAY;QACZ,aAAa;QACb,eAAe;QACf,mBAAmB,EAAE;QACrB;UACE,YAAY;UACZ,kBAAkB;UAClB,YAAY;UACZ,eAAe,EAAE;MACrB;QACE,aAAa;QACb,mBAAmB;QACnB,yBAAyB;QACzB,cAAc;QACd,YAAY;QACZ,eAAe;QACf,kBAAkB;QAClB,mBAAmB;QACnB,kBAAkB;QAClB,mBAAmB;QACnB,kBAAkB;QAClB,eAAe,EAAE;QACjB;UACE,4BAA4B;UAC5B,6BAA6B;UAC7B,YAAY;UACZ,eAAe;UACf,yBAAyB;UACzB,cAAc;UACd,aAAa;UACb,mBAAmB,EAAE;UACrB;YACE,kBAAkB,EAAE;UACtB;YACE,aAAa;YACb,WAAW;YACX,YAAY,EAAE;YACd;cACE,aAAa;cACb,WAAW;cACX,YAAY;cACZ,yBAAyB,EAAE;UAC/B;YACE,eAAe,EAAE;QACrB;UACE,kBAAkB;UAClB,yBAAyB;UACzB,cAAc;UACd,aAAa;UACb,sBAAsB;UACtB,SAAS;UACT,wBAAwB;UACxB,OAAO;UACP,aAAa;UACb,mBAAmB,EAAE;UACrB;YACE,eAAe,EAAE;UACnB;YACE,aAAa,EAAE;EACzB;IACE,gBAAgB,EAAE;IAClB;MACE,iBAAiB;MACjB,qBAAqB;MACrB,yBAAyB;MACzB,YAAY;MACZ,WAAW,EAAE;MACb;QACE,cAAc;QACd,yBAAyB;QACzB,eAAe,EAAE;QACjB;UACE,UAAU,EAAE;UACZ;YACE,aAAa,EAAE;YACf;cACE,YAAY;cACZ,aAAa;cACb,mBAAmB,EAAE;cACrB;gBACE,eAAe,EAAE;cACnB;gBACE,iBAAiB,EAAE;UACzB;YACE,aAAa;YACb,0CAA0C,EAAE;YAC5C;cACE,YAAY;cACZ,aAAa;cACb,mBAAmB,EAAE;cACrB;gBACE,eAAe,EAAE;cACnB;gBACE,iBAAiB,EAAE;MAC7B;QACE,cAAc;QACd,yBAAyB;QACzB,eAAe,EAAE;QACjB;UACE,UAAU,EAAE;UACZ;YACE,aAAa,EAAE;UACjB;YACE,aAAa;YACb,0CAA0C,EAAE;EACtD;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B,EAAE;IAChC;MACE,gBAAgB;MAChB,mBAAmB,EAAE;MACrB;QACE,yBAAyB;QACzB,cAAc;QACd,YAAY;QACZ,mBAAmB;QACnB,aAAa;QACb,eAAe;QACf,iBAAiB,EAAE;QACnB;UACE,eAAe;UACf,YAAY,EAAE;MAClB;QACE,yBAAyB;QACzB,cAAc;QACd,YAAY;QACZ,iBAAiB;QACjB,eAAe;QACf,mBAAmB;QACnB,iBAAiB,EAAE;MACrB;QACE,YAAY,EAAE;QACd;UACE,eAAe;UACf,YAAY,EAAE;IACpB;MACE,aAAa;MACb,mBAAmB;MACnB,mBAAmB;MACnB,YAAY;MACZ,iBAAiB;MACjB,cAAc;MACd,yBAAyB,EAAE;MAC3B;QACE,eAAe;QACf,gBAAgB;QAChB,kBAAkB;QAClB,UAAU;QACV,SAAS,EAAE;MACb;QACE,WAAW;QACX,YAAY;QACZ,iBAAiB,EAAE;MACrB;QACE,eAAe,EAAE;;AAEzB,6BAA6B;AAC7B;EACE,UAAU;EACV,YAAY,EAAE;;AAEhB;EACE,qBAAqB;EACrB,mBAAmB,EAAE;;AAEvB;EACE,mBAAmB;EACnB,mBAAmB,EAAE;;AAEvB;EACE,gBAAgB,EAAE;;AAEpB;EACE,YAAY;EACZ,iBAAiB;EACjB,iCAAiC;EACjC,6BAA6B;EAC7B,cAAc;EACd,kBAAkB;EAClB,WAAW,EAAE;EACb;IACE,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB,EAAE;IACrB;MACE,yBAAyB;MACzB,cAAc;MACd,yBAAyB;MACzB,mBAAmB;MACnB,iBAAiB;MACjB,eAAe,EAAE;IACnB;MACE,aAAa,EAAE;MACf;QACE,yBAAyB;QACzB,cAAc;QACd,qCAAqC;QACrC,aAAa;QACb,eAAe;QACf,mBAAmB,EAAE;QACrB;UACE,qCAAqC;UACrC,kBAAkB;UAClB,YAAY;UACZ,eAAe,EAAE;MACrB;QACE,aAAa;QACb,mBAAmB;QACnB,yBAAyB;QACzB,cAAc;QACd,qCAAqC;QACrC,eAAe;QACf,kBAAkB;QAClB,mBAAmB;QACnB,kBAAkB;QAClB,mBAAmB;QACnB,kBAAkB;QAClB,eAAe,EAAE;QACjB;UACE,4BAA4B;UAC5B,6BAA6B;UAC7B,YAAY;UACZ,eAAe;UACf,yBAAyB;UACzB,cAAc;UACd,aAAa;UACb,mBAAmB,EAAE;UACrB;YACE,kBAAkB,EAAE;UACtB;YACE,aAAa;YACb,WAAW;YACX,YAAY,EAAE;YACd;cACE,aAAa;cACb,WAAW;cACX,YAAY;cACZ,yBAAyB,EAAE;UAC/B;YACE,eAAe,EAAE;QACrB;UACE,kBAAkB;UAClB,yBAAyB;UACzB,cAAc;UACd,aAAa;UACb,sBAAsB;UACtB,SAAS;UACT,wBAAwB;UACxB,OAAO;UACP,aAAa;UACb,mBAAmB;UACnB,qCAAqC,EAAE;UACvC;YACE,eAAe,EAAE;UACnB;YACE,aAAa,EAAE;EACzB;IACE,gBAAgB,EAAE;IAClB;MACE,iBAAiB;MACjB,qBAAqB;MACrB,yBAAyB;MACzB,YAAY;MACZ,WAAW;MACX,yBAAyB,EAAE;MAC3B;QACE,cAAc;QACd,0CAA0C;QAC1C,eAAe,EAAE;QACjB;UACE,UAAU,EAAE;UACZ;YACE,aAAa,EAAE;YACf;cACE,YAAY;cACZ,aAAa;cACb,mBAAmB,EAAE;cACrB;gBACE,eAAe,EAAE;cACnB;gBACE,iBAAiB,EAAE;UACzB;YACE,aAAa;YACb,0CAA0C,EAAE;YAC5C;cACE,YAAY;cACZ,aAAa;cACb,mBAAmB,EAAE;cACrB;gBACE,eAAe,EAAE;cACnB;gBACE,iBAAiB,EAAE;MAC7B;QACE,cAAc;QACd,yBAAyB;QACzB,eAAe,EAAE;QACjB;UACE,UAAU,EAAE;UACZ;YACE,aAAa,EAAE;UACjB;YACE,aAAa;YACb,0CAA0C,EAAE;EACtD;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B,EAAE;IAChC;MACE,gBAAgB;MAChB,mBAAmB,EAAE;MACrB;QACE,yBAAyB;QACzB,cAAc;QACd,yBAAyB;QACzB,mBAAmB;QACnB,aAAa;QACb,eAAe;QACf,iBAAiB,EAAE;QACnB;UACE,eAAe;UACf,YAAY,EAAE;MAClB;QACE,yBAAyB;QACzB,cAAc;QACd,yBAAyB;QACzB,iBAAiB;QACjB,eAAe;QACf,mBAAmB;QACnB,iBAAiB,EAAE;MACrB;QACE,YAAY,EAAE;QACd;UACE,eAAe;UACf,YAAY,EAAE;IACpB;MACE,aAAa;MACb,mBAAmB;MACnB,mBAAmB;MACnB,yBAAyB;MACzB,iBAAiB;MACjB,yBAAyB,EAAE;MAC3B;QACE,eAAe;QACf,gBAAgB;QAChB,kBAAkB;QAClB,UAAU;QACV,SAAS,EAAE;MACb;QACE,WAAW;QACX,YAAY;QACZ,iBAAiB,EAAE;MACrB;QACE,eAAe,EAAE;;AAEzB;EACE,UAAU;EACV,YAAY,EAAE;;AAEhB;EACE,qBAAqB;EACrB,mBAAmB,EAAE;;AAEvB;EACE,mBAAmB;EACnB,mBAAmB,EAAE;;AAEvB;EACE,gBAAgB,EAAE","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n.data-table {\n  margin: auto;\n  border-spacing: 0;\n  font-family: 'Roboto', sans-serif;\n  background-color: transparent;\n  color: #ffffff;\n  width: fit-content;\n  width: 100%; }\n  .data-table .data-table-toolbar {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n    .data-table .data-table-toolbar .data-table-toolbar-select {\n      background-color: #1c1c1c;\n      color: #ffffff;\n      border: none;\n      border-radius: 12px;\n      padding: 10px 5px;\n      font-size: 12px; }\n    .data-table .data-table-toolbar .data-table-toolbar-input-container {\n      display: flex; }\n      .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input {\n        background-color: #1c1c1c;\n        color: #ffffff;\n        border: none;\n        padding: 10px;\n        font-size: 12px;\n        border-radius: 12px; }\n        .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input input {\n          border: none;\n          border-radius: 2px;\n          padding: 2px;\n          font-size: 12px; }\n      .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox {\n        display: flex;\n        align-items: center;\n        background-color: #1c1c1c;\n        color: #ffffff;\n        border: none;\n        font-size: 12px;\n        position: relative;\n        border-radius: 10px;\n        padding-left: 30px;\n        padding-right: 30px;\n        margin-right: 20px;\n        font-size: 12px; }\n        .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown {\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          border: none;\n          font-size: 12px;\n          background-color: #1c1c1c;\n          color: #ffffff;\n          display: flex;\n          align-items: center; }\n          .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-label {\n            margin-right: 10px; }\n          .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-icon .data-table-dropdown-svg {\n            fill: #ffffff;\n            width: 12px;\n            height: 12px; }\n            .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-icon .data-table-dropdown-svg__closed {\n              fill: #ffffff;\n              width: 12px;\n              height: 12px;\n              transform: rotate(180deg); }\n          .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown:hover {\n            cursor: pointer; }\n        .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container {\n          position: absolute;\n          background-color: #000000;\n          color: #ffffff;\n          display: flex;\n          flex-direction: column;\n          top: 100%;\n          width: calc(100% - 20px);\n          left: 0;\n          padding: 10px;\n          border-radius: 12px; }\n          .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container input:hover {\n            cursor: pointer; }\n          .data-table .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container__closed {\n            display: none; }\n  .data-table .data-table-container {\n    overflow-x: auto; }\n    .data-table .data-table-container table {\n      border-spacing: 0;\n      border-color: #000000;\n      border-collapse: collapse;\n      margin: auto;\n      width: 100%; }\n      .data-table .data-table-container table .data-table-header {\n        color: #bababa;\n        background-color: #1c1c1c;\n        font-size: 14px; }\n        .data-table .data-table-container table .data-table-header .data-table-row {\n          padding: 0; }\n          .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell {\n            padding: 15px; }\n            .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content {\n              margin: auto;\n              display: flex;\n              align-items: center; }\n              .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content:hover {\n                cursor: pointer; }\n              .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content .data-table-header-cell-text {\n                margin-right: 5px; }\n          .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected {\n            padding: 15px;\n            background-color: rgba(186, 186, 186, 0.1); }\n            .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content {\n              margin: auto;\n              display: flex;\n              align-items: center; }\n              .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content:hover {\n                cursor: pointer; }\n              .data-table .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content .data-table-header-cell-text {\n                margin-right: 5px; }\n      .data-table .data-table-container table .data-table-body {\n        color: #ffffff;\n        background-color: #262626;\n        font-size: 14px; }\n        .data-table .data-table-container table .data-table-body .data-table-row {\n          padding: 0; }\n          .data-table .data-table-container table .data-table-body .data-table-row .data-table-body-cell {\n            padding: 15px; }\n          .data-table .data-table-container table .data-table-body .data-table-row .data-table-body-cell__selected {\n            padding: 15px;\n            background-color: rgba(186, 186, 186, 0.2); }\n  .data-table .data-table-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n    .data-table .data-table-footer .data-table-footer-pagination {\n      margin-top: 10px;\n      margin-bottom: 10px; }\n      .data-table .data-table-footer .data-table-footer-pagination button {\n        background-color: #1c1c1c;\n        color: #ffffff;\n        border: none;\n        border-radius: 12px;\n        padding: 10px;\n        font-size: 12px;\n        margin-right: 5px; }\n        .data-table .data-table-footer .data-table-footer-pagination button:hover {\n          cursor: pointer;\n          opacity: 0.8; }\n      .data-table .data-table-footer .data-table-footer-pagination select {\n        background-color: #1c1c1c;\n        color: #ffffff;\n        border: none;\n        padding: 10px 5px;\n        font-size: 12px;\n        border-radius: 12px;\n        margin-right: 5px; }\n      .data-table .data-table-footer .data-table-footer-pagination .selected-button {\n        opacity: 0.5; }\n        .data-table .data-table-footer .data-table-footer-pagination .selected-button:hover {\n          cursor: inherit;\n          opacity: 0.5; }\n    .data-table .data-table-footer .data-table-footer-export {\n      display: flex;\n      align-items: center;\n      border-radius: 12px;\n      border: none;\n      padding: 5px 10px;\n      color: #ffffff;\n      background-color: #1c1c1c; }\n      .data-table .data-table-footer .data-table-footer-export p {\n        font-size: 12px;\n        font-weight: 600;\n        font-style: normal;\n        padding: 0;\n        margin: 0; }\n      .data-table .data-table-footer .data-table-footer-export span svg {\n        width: 25px;\n        height: 25px;\n        margin-left: 20px; }\n      .data-table .data-table-footer .data-table-footer-export span:hover {\n        cursor: pointer; }\n\n/* Designing for scroll-bar */\n::-webkit-scrollbar {\n  width: 5px;\n  height: 10px; }\n\n::-webkit-scrollbar-track {\n  background: gainsboro;\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb {\n  background: #1c1c1c;\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n.data-table__light {\n  margin: auto;\n  border-spacing: 0;\n  font-family: 'Roboto', sans-serif;\n  background-color: transparent;\n  color: #000000;\n  width: fit-content;\n  width: 100%; }\n  .data-table__light .data-table-toolbar {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n    .data-table__light .data-table-toolbar .data-table-toolbar-select {\n      background-color: #ffffff;\n      color: #000000;\n      border: 1px solid #c4c2c2;\n      border-radius: 12px;\n      padding: 10px 5px;\n      font-size: 12px; }\n    .data-table__light .data-table-toolbar .data-table-toolbar-input-container {\n      display: flex; }\n      .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input {\n        background-color: #ffffff;\n        color: #000000;\n        border: 1px solid rgba(0, 0, 0, 0.25);\n        padding: 10px;\n        font-size: 12px;\n        border-radius: 12px; }\n        .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input input {\n          border: 1px solid rgba(0, 0, 0, 0.25);\n          border-radius: 2px;\n          padding: 2px;\n          font-size: 12px; }\n      .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox {\n        display: flex;\n        align-items: center;\n        background-color: #ffffff;\n        color: #000000;\n        border: 1px solid rgba(0, 0, 0, 0.25);\n        font-size: 12px;\n        position: relative;\n        border-radius: 10px;\n        padding-left: 30px;\n        padding-right: 30px;\n        margin-right: 20px;\n        font-size: 12px; }\n        .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown {\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          border: none;\n          font-size: 12px;\n          background-color: #ffffff;\n          color: #000000;\n          display: flex;\n          align-items: center; }\n          .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-label {\n            margin-right: 10px; }\n          .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-icon .data-table-dropdown-svg {\n            fill: #000000;\n            width: 12px;\n            height: 12px; }\n            .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown .data-table-dropdown-icon .data-table-dropdown-svg__closed {\n              fill: #000000;\n              width: 12px;\n              height: 12px;\n              transform: rotate(180deg); }\n          .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-dropdown:hover {\n            cursor: pointer; }\n        .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container {\n          position: absolute;\n          background-color: #ffffff;\n          color: #000000;\n          display: flex;\n          flex-direction: column;\n          top: 100%;\n          width: calc(100% - 20px);\n          left: 0;\n          padding: 10px;\n          border-radius: 12px;\n          border: 1px solid rgba(0, 0, 0, 0.25); }\n          .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container input:hover {\n            cursor: pointer; }\n          .data-table__light .data-table-toolbar .data-table-toolbar-input-container .data-table-toolbar-input-checkbox .data-table-select-check-container__closed {\n            display: none; }\n  .data-table__light .data-table-container {\n    overflow-x: auto; }\n    .data-table__light .data-table-container table {\n      border-spacing: 0;\n      border-color: #c4c2c2;\n      border-collapse: collapse;\n      margin: auto;\n      width: 100%;\n      border: 1px solid #c4c2c2; }\n      .data-table__light .data-table-container table .data-table-header {\n        color: #000000;\n        background-color: rgba(196, 194, 194, 0.5);\n        font-size: 14px; }\n        .data-table__light .data-table-container table .data-table-header .data-table-row {\n          padding: 0; }\n          .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell {\n            padding: 15px; }\n            .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content {\n              margin: auto;\n              display: flex;\n              align-items: center; }\n              .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content:hover {\n                cursor: pointer; }\n              .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell .data-table-header-cell-content .data-table-header-cell-text {\n                margin-right: 5px; }\n          .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected {\n            padding: 15px;\n            background-color: rgba(196, 194, 194, 0.6); }\n            .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content {\n              margin: auto;\n              display: flex;\n              align-items: center; }\n              .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content:hover {\n                cursor: pointer; }\n              .data-table__light .data-table-container table .data-table-header .data-table-row .data-table-header-cell__selected .data-table-header-cell-content .data-table-header-cell-text {\n                margin-right: 5px; }\n      .data-table__light .data-table-container table .data-table-body {\n        color: #000000;\n        background-color: #ffffff;\n        font-size: 14px; }\n        .data-table__light .data-table-container table .data-table-body .data-table-row {\n          padding: 0; }\n          .data-table__light .data-table-container table .data-table-body .data-table-row .data-table-body-cell {\n            padding: 15px; }\n          .data-table__light .data-table-container table .data-table-body .data-table-row .data-table-body-cell__selected {\n            padding: 15px;\n            background-color: rgba(155, 155, 155, 0.1); }\n  .data-table__light .data-table-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n    .data-table__light .data-table-footer .data-table-footer-pagination {\n      margin-top: 10px;\n      margin-bottom: 10px; }\n      .data-table__light .data-table-footer .data-table-footer-pagination button {\n        background-color: #ffffff;\n        color: #000000;\n        border: 1px solid #c4c2c2;\n        border-radius: 12px;\n        padding: 10px;\n        font-size: 12px;\n        margin-right: 5px; }\n        .data-table__light .data-table-footer .data-table-footer-pagination button:hover {\n          cursor: pointer;\n          opacity: 0.8; }\n      .data-table__light .data-table-footer .data-table-footer-pagination select {\n        background-color: #ffffff;\n        color: #000000;\n        border: 1px solid #c4c2c2;\n        padding: 10px 5px;\n        font-size: 12px;\n        border-radius: 12px;\n        margin-right: 5px; }\n      .data-table__light .data-table-footer .data-table-footer-pagination .selected-button {\n        opacity: 0.5; }\n        .data-table__light .data-table-footer .data-table-footer-pagination .selected-button:hover {\n          cursor: inherit;\n          opacity: 0.5; }\n    .data-table__light .data-table-footer .data-table-footer-export {\n      display: flex;\n      align-items: center;\n      border-radius: 12px;\n      border: 1px solid #c4c2c2;\n      padding: 5px 10px;\n      background-color: #ffffff; }\n      .data-table__light .data-table-footer .data-table-footer-export p {\n        font-size: 12px;\n        font-weight: 600;\n        font-style: normal;\n        padding: 0;\n        margin: 0; }\n      .data-table__light .data-table-footer .data-table-footer-export span svg {\n        width: 25px;\n        height: 25px;\n        margin-left: 20px; }\n      .data-table__light .data-table-footer .data-table-footer-export span:hover {\n        cursor: pointer; }\n\n::-webkit-scrollbar {\n  width: 5px;\n  height: 10px; }\n\n::-webkit-scrollbar-track {\n  background: gainsboro;\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb {\n  background: #1c1c1c;\n  border-radius: 10px; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.1.0';

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

// ATTENTION

var REACT_ELEMENT_TYPE =  Symbol.for('react.element');
var REACT_PORTAL_TYPE =  Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE =  Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE =  Symbol.for('react.provider');
var REACT_CONTEXT_TYPE =  Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE =  Symbol.for('react.memo');
var REACT_LAZY_TYPE =  Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE =  Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL =  Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./src/assets/style/data-table.css":
/*!*****************************************!*\
  !*** ./src/assets/style/data-table.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_data_table_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./data-table.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/data-table.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_data_table_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_data_table_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_data_table_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_data_table_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/svgRender/index.tsx":
/*!****************************************!*\
  !*** ./src/assets/svgRender/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderDownChevronSVG = exports.renderInactiveSortSVG = exports.renderActiveSortSVG = exports.renderJsonSVG = exports.renderCsvSVG = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var renderCsvSVG = function (className) {
    return (react_1.default.createElement("svg", { className: className, viewBox: "-79 0 512 512" },
        react_1.default.createElement("path", { d: "m353.101562 485.515625h-353.101562v-485.515625h273.65625l79.445312 79.449219zm0 0", fill: "#e3e4d8" }),
        react_1.default.createElement("path", { d: "m273.65625 0v79.449219h79.445312zm0 0", fill: "#d0cebd" }),
        react_1.default.createElement("path", { d: "m0 353.101562h353.101562v158.898438h-353.101562zm0 0", fill: "#2f9171" }),
        react_1.default.createElement("g", { fill: "#a09893" },
            react_1.default.createElement("path", { d: "m114.757812 167.722656h-61.792968c-4.871094 0-8.828125-3.953125-8.828125-8.824218v-35.3125c0-4.871094 3.957031-8.828126 8.828125-8.828126h61.792968c4.875 0 8.828126 3.957032 8.828126 8.828126v35.3125c0 4.871093-3.953126 8.824218-8.828126 8.824218zm-52.964843-17.652344h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m176.550781 167.722656h-61.792969c-4.871093 0-8.828124-3.953125-8.828124-8.824218v-35.3125c0-4.871094 3.957031-8.828126 8.828124-8.828126h61.792969c4.875 0 8.828125 3.957032 8.828125 8.828126v35.3125c0 4.871093-3.953125 8.824218-8.828125 8.824218zm-52.964843-17.652344h44.136718v-17.65625h-44.136718zm0 0" }),
            react_1.default.createElement("path", { d: "m238.34375 167.722656h-61.792969c-4.871093 0-8.828125-3.953125-8.828125-8.824218v-35.3125c0-4.871094 3.957032-8.828126 8.828125-8.828126h61.792969c4.875 0 8.828125 3.957032 8.828125 8.828126v35.3125c0 4.871093-3.953125 8.824218-8.828125 8.824218zm-52.964844-17.652344h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m300.136719 167.722656h-61.792969c-4.871094 0-8.828125-3.953125-8.828125-8.824218v-35.3125c0-4.871094 3.957031-8.828126 8.828125-8.828126h61.792969c4.875 0 8.828125 3.957032 8.828125 8.828126v35.3125c0 4.871093-3.953125 8.824218-8.828125 8.824218zm-52.964844-17.652344h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m114.757812 203.035156h-61.792968c-4.871094 0-8.828125-3.957031-8.828125-8.828125v-35.308593c0-4.875 3.957031-8.828126 8.828125-8.828126h61.792968c4.875 0 8.828126 3.953126 8.828126 8.828126v35.308593c0 4.871094-3.953126 8.828125-8.828126 8.828125zm-52.964843-17.65625h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m176.550781 203.035156h-61.792969c-4.871093 0-8.828124-3.957031-8.828124-8.828125v-35.308593c0-4.875 3.957031-8.828126 8.828124-8.828126h61.792969c4.875 0 8.828125 3.953126 8.828125 8.828126v35.308593c0 4.871094-3.953125 8.828125-8.828125 8.828125zm-52.964843-17.65625h44.136718v-17.65625h-44.136718zm0 0" }),
            react_1.default.createElement("path", { d: "m238.34375 203.035156h-61.792969c-4.871093 0-8.828125-3.957031-8.828125-8.828125v-35.308593c0-4.875 3.957032-8.828126 8.828125-8.828126h61.792969c4.875 0 8.828125 3.953126 8.828125 8.828126v35.308593c0 4.871094-3.953125 8.828125-8.828125 8.828125zm-52.964844-17.65625h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m300.136719 203.035156h-61.792969c-4.871094 0-8.828125-3.957031-8.828125-8.828125v-35.308593c0-4.875 3.957031-8.828126 8.828125-8.828126h61.792969c4.875 0 8.828125 3.953126 8.828125 8.828126v35.308593c0 4.871094-3.953125 8.828125-8.828125 8.828125zm-52.964844-17.65625h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m114.757812 238.34375h-61.792968c-4.871094 0-8.828125-3.953125-8.828125-8.828125v-35.308594c0-4.871093 3.957031-8.828125 8.828125-8.828125h61.792968c4.875 0 8.828126 3.957032 8.828126 8.828125v35.308594c0 4.875-3.953126 8.828125-8.828126 8.828125zm-52.964843-17.652344h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m176.550781 238.34375h-61.792969c-4.871093 0-8.828124-3.953125-8.828124-8.828125v-35.308594c0-4.871093 3.957031-8.828125 8.828124-8.828125h61.792969c4.875 0 8.828125 3.957032 8.828125 8.828125v35.308594c0 4.875-3.953125 8.828125-8.828125 8.828125zm-52.964843-17.652344h44.136718v-17.65625h-44.136718zm0 0" }),
            react_1.default.createElement("path", { d: "m238.34375 238.34375h-61.792969c-4.871093 0-8.828125-3.953125-8.828125-8.828125v-35.308594c0-4.871093 3.957032-8.828125 8.828125-8.828125h61.792969c4.875 0 8.828125 3.957032 8.828125 8.828125v35.308594c0 4.875-3.953125 8.828125-8.828125 8.828125zm-52.964844-17.652344h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m300.136719 238.34375h-61.792969c-4.871094 0-8.828125-3.953125-8.828125-8.828125v-35.308594c0-4.871093 3.957031-8.828125 8.828125-8.828125h61.792969c4.875 0 8.828125 3.957032 8.828125 8.828125v35.308594c0 4.875-3.953125 8.828125-8.828125 8.828125zm-52.964844-17.652344h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m114.757812 273.65625h-61.792968c-4.871094 0-8.828125-3.957031-8.828125-8.828125v-35.3125c0-4.871094 3.957031-8.824219 8.828125-8.824219h61.792968c4.875 0 8.828126 3.953125 8.828126 8.824219v35.3125c0 4.871094-3.953126 8.828125-8.828126 8.828125zm-52.964843-17.65625h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m176.550781 273.65625h-61.792969c-4.871093 0-8.828124-3.957031-8.828124-8.828125v-35.3125c0-4.871094 3.957031-8.824219 8.828124-8.824219h61.792969c4.875 0 8.828125 3.953125 8.828125 8.824219v35.3125c0 4.871094-3.953125 8.828125-8.828125 8.828125zm-52.964843-17.65625h44.136718v-17.65625h-44.136718zm0 0" }),
            react_1.default.createElement("path", { d: "m238.34375 273.65625h-61.792969c-4.871093 0-8.828125-3.957031-8.828125-8.828125v-35.3125c0-4.871094 3.957032-8.824219 8.828125-8.824219h61.792969c4.875 0 8.828125 3.953125 8.828125 8.824219v35.3125c0 4.871094-3.953125 8.828125-8.828125 8.828125zm-52.964844-17.65625h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m300.136719 273.65625h-61.792969c-4.871094 0-8.828125-3.957031-8.828125-8.828125v-35.3125c0-4.871094 3.957031-8.824219 8.828125-8.824219h61.792969c4.875 0 8.828125 3.953125 8.828125 8.824219v35.3125c0 4.871094-3.953125 8.828125-8.828125 8.828125zm-52.964844-17.65625h44.136719v-17.65625h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m114.757812 308.964844h-61.792968c-4.871094 0-8.828125-3.953125-8.828125-8.828125v-35.308594c0-4.875 3.957031-8.828125 8.828125-8.828125h61.792968c4.875 0 8.828126 3.953125 8.828126 8.828125v35.308594c0 4.875-3.953126 8.828125-8.828126 8.828125zm-52.964843-17.65625h44.136719v-17.652344h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m176.550781 308.964844h-61.792969c-4.871093 0-8.828124-3.953125-8.828124-8.828125v-35.308594c0-4.875 3.957031-8.828125 8.828124-8.828125h61.792969c4.875 0 8.828125 3.953125 8.828125 8.828125v35.308594c0 4.875-3.953125 8.828125-8.828125 8.828125zm-52.964843-17.65625h44.136718v-17.652344h-44.136718zm0 0" }),
            react_1.default.createElement("path", { d: "m238.34375 308.964844h-61.792969c-4.871093 0-8.828125-3.953125-8.828125-8.828125v-35.308594c0-4.875 3.957032-8.828125 8.828125-8.828125h61.792969c4.875 0 8.828125 3.953125 8.828125 8.828125v35.308594c0 4.875-3.953125 8.828125-8.828125 8.828125zm-52.964844-17.65625h44.136719v-17.652344h-44.136719zm0 0" }),
            react_1.default.createElement("path", { d: "m300.136719 308.964844h-61.792969c-4.871094 0-8.828125-3.953125-8.828125-8.828125v-35.308594c0-4.875 3.957031-8.828125 8.828125-8.828125h61.792969c4.875 0 8.828125 3.953125 8.828125 8.828125v35.308594c0 4.875-3.953125 8.828125-8.828125 8.828125zm-52.964844-17.65625h44.136719v-17.652344h-44.136719zm0 0" })),
        react_1.default.createElement("path", { d: "m105.929688 485.515625h-35.230469c-14.644531 0-26.5625-11.914063-26.5625-26.5625v-52.804687c0-14.644532 11.917969-26.5625 26.5625-26.5625h35.230469c4.875 0 8.828124 3.953124 8.828124 8.828124 0 4.871094-3.953124 8.828126-8.828124 8.828126h-35.230469c-4.917969 0-8.90625 4-8.90625 8.90625v52.804687c0 4.910156 3.988281 8.910156 8.90625 8.910156h35.230469c4.875 0 8.828124 3.953125 8.828124 8.828125 0 4.871094-3.953124 8.824219-8.828124 8.824219zm0 0", fill: "#fff" }),
        react_1.default.createElement("path", { d: "m172.136719 485.515625h-30.894531c-4.875 0-8.828126-3.953125-8.828126-8.824219 0-4.875 3.953126-8.828125 8.828126-8.828125h30.894531c7.300781 0 13.242187-5.941406 13.242187-13.242187 0-7.300782-5.941406-13.242188-13.242187-13.242188h-8.828125c-17.035156 0-30.894532-13.859375-30.894532-30.894531 0-17.039063 13.859376-30.898437 30.894532-30.898437h30.898437c4.871094 0 8.828125 3.953124 8.828125 8.828124 0 4.871094-3.957031 8.828126-8.828125 8.828126h-30.898437c-7.296875 0-13.238282 5.941406-13.238282 13.242187 0 7.296875 5.941407 13.238281 13.238282 13.238281h8.828125c17.039062 0 30.898437 13.859375 30.898437 30.898438 0 17.035156-13.859375 30.894531-30.898437 30.894531zm0 0", fill: "#fff" }),
        react_1.default.createElement("path", { d: "m264.828125 485.515625c-3.609375 0-6.851563-2.195313-8.203125-5.542969l-35.308594-88.273437c-1.808594-4.53125.386719-9.667969 4.917969-11.476563 4.535156-1.800781 9.664063.394532 11.476563 4.917969l27.117187 67.785156 27.109375-67.785156c1.816406-4.523437 6.9375-6.738281 11.476562-4.917969 4.527344 1.816406 6.726563 6.945313 4.914063 11.476563l-35.308594 88.273437c-1.339843 3.347656-4.582031 5.542969-8.191406 5.542969zm0 0", fill: "#fff" })));
};
exports.renderCsvSVG = renderCsvSVG;
var renderJsonSVG = function (className) {
    return (react_1.default.createElement("svg", { className: className, viewBox: "0 0 56 56" },
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { style: { fill: "#E9E9E0" }, d: "M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074\n                    c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z" }),
            react_1.default.createElement("polygon", { style: { fill: "#D9D7CA" }, points: "37.5,0.151 37.5,12 49.349,12 " }),
            react_1.default.createElement("path", { style: { fill: "#9777A8" }, d: "M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z" }),
            react_1.default.createElement("g", null,
                react_1.default.createElement("path", { style: { fill: "#FFFFFF" }, d: "M17.021,42.719v7.848c0,0.474-0.087,0.873-0.26,1.196s-0.405,0.583-0.697,0.779\n                        s-0.627,0.333-1.005,0.41c-0.378,0.077-0.768,0.116-1.169,0.116c-0.2,0-0.436-0.021-0.704-0.062s-0.547-0.104-0.834-0.191\n                        s-0.563-0.185-0.827-0.294s-0.487-0.232-0.67-0.369l0.697-1.107c0.091,0.063,0.221,0.13,0.39,0.198s0.354,0.132,0.554,0.191\n                        s0.41,0.111,0.629,0.157s0.424,0.068,0.615,0.068c0.483,0,0.868-0.094,1.155-0.28s0.439-0.504,0.458-0.95v-7.711H17.021z" }),
                react_1.default.createElement("path", { style: { fill: "#FFFFFF" }, d: "M25.184,50.238c0,0.364-0.075,0.718-0.226,1.06s-0.362,0.643-0.636,0.902s-0.61,0.467-1.012,0.622\n                        s-0.856,0.232-1.367,0.232c-0.219,0-0.444-0.012-0.677-0.034s-0.467-0.062-0.704-0.116c-0.237-0.055-0.463-0.13-0.677-0.226\n                        s-0.398-0.212-0.554-0.349l0.287-1.176c0.128,0.073,0.289,0.144,0.485,0.212s0.398,0.132,0.608,0.191s0.419,0.107,0.629,0.144\n                        s0.405,0.055,0.588,0.055c0.556,0,0.982-0.13,1.278-0.39s0.444-0.645,0.444-1.155c0-0.31-0.104-0.574-0.314-0.793\n                        s-0.472-0.417-0.786-0.595s-0.654-0.355-1.019-0.533s-0.706-0.388-1.025-0.629s-0.583-0.526-0.793-0.854s-0.314-0.738-0.314-1.23\n                        c0-0.446,0.082-0.843,0.246-1.189s0.385-0.641,0.663-0.882s0.602-0.426,0.971-0.554s0.759-0.191,1.169-0.191\n                        c0.419,0,0.843,0.039,1.271,0.116s0.774,0.203,1.039,0.376c-0.055,0.118-0.118,0.248-0.191,0.39s-0.142,0.273-0.205,0.396\n                        s-0.118,0.226-0.164,0.308s-0.073,0.128-0.082,0.137c-0.055-0.027-0.116-0.063-0.185-0.109s-0.166-0.091-0.294-0.137\n                        s-0.296-0.077-0.506-0.096s-0.479-0.014-0.807,0.014c-0.183,0.019-0.355,0.07-0.52,0.157s-0.31,0.193-0.438,0.321\n                        s-0.228,0.271-0.301,0.431s-0.109,0.313-0.109,0.458c0,0.364,0.104,0.658,0.314,0.882s0.47,0.419,0.779,0.588\n                        s0.647,0.333,1.012,0.492s0.704,0.354,1.019,0.581s0.576,0.513,0.786,0.854S25.184,49.7,25.184,50.238z" }),
                react_1.default.createElement("path", { style: { fill: "#FFFFFF" }, d: "M35.082,47.914c0,0.848-0.107,1.595-0.321,2.242s-0.511,1.185-0.889,1.613s-0.82,0.752-1.326,0.971\n                        s-1.06,0.328-1.661,0.328s-1.155-0.109-1.661-0.328s-0.948-0.542-1.326-0.971s-0.675-0.966-0.889-1.613s-0.321-1.395-0.321-2.242\n                        s0.107-1.593,0.321-2.235s0.511-1.178,0.889-1.606s0.82-0.754,1.326-0.978s1.06-0.335,1.661-0.335s1.155,0.111,1.661,0.335\n                        s0.948,0.549,1.326,0.978s0.675,0.964,0.889,1.606S35.082,47.066,35.082,47.914z M30.844,51.729c0.337,0,0.658-0.066,0.964-0.198\n                        s0.579-0.349,0.82-0.649s0.431-0.695,0.567-1.183s0.21-1.082,0.219-1.784c-0.009-0.684-0.08-1.265-0.212-1.743\n                        s-0.314-0.873-0.547-1.183s-0.497-0.533-0.793-0.67s-0.608-0.205-0.937-0.205c-0.337,0-0.658,0.063-0.964,0.191\n                        s-0.579,0.344-0.82,0.649s-0.431,0.699-0.567,1.183c-0.137,0.483-0.21,1.075-0.219,1.777c0.009,0.684,0.08,1.267,0.212,1.75\n                        s0.314,0.877,0.547,1.183s0.497,0.528,0.793,0.67S30.516,51.729,30.844,51.729z" }),
                react_1.default.createElement("path", { style: { fill: "#FFFFFF" }, d: "M44.68,42.924V53h-1.668l-3.951-6.945V53h-1.668V42.924h1.668l3.951,6.945v-6.945H44.68z" })),
            react_1.default.createElement("g", null,
                react_1.default.createElement("path", { style: { fill: "#9777A8" }, d: "M19.5,19v-4c0-0.551,0.448-1,1-1c0.553,0,1-0.448,1-1s-0.447-1-1-1c-1.654,0-3,1.346-3,3v4\n                        c0,1.103-0.897,2-2,2c-0.553,0-1,0.448-1,1s0.447,1,1,1c1.103,0,2,0.897,2,2v4c0,1.654,1.346,3,3,3c0.553,0,1-0.448,1-1\n                        s-0.447-1-1-1c-0.552,0-1-0.449-1-1v-4c0-1.2-0.542-2.266-1.382-3C18.958,21.266,19.5,20.2,19.5,19z" }),
                react_1.default.createElement("circle", { style: { fill: "#9777A8" }, cx: "27.5", cy: "18.5", r: "1.5" }),
                react_1.default.createElement("path", { style: { fill: "#9777A8" }, d: "M39.5,21c-1.103,0-2-0.897-2-2v-4c0-1.654-1.346-3-3-3c-0.553,0-1,0.448-1,1s0.447,1,1,1\n                        c0.552,0,1,0.449,1,1v4c0,1.2,0.542,2.266,1.382,3c-0.84,0.734-1.382,1.8-1.382,3v4c0,0.551-0.448,1-1,1c-0.553,0-1,0.448-1,1\n                        s0.447,1,1,1c1.654,0,3-1.346,3-3v-4c0-1.103,0.897-2,2-2c0.553,0,1-0.448,1-1S40.053,21,39.5,21z" }),
                react_1.default.createElement("path", { style: { fill: "#9777A8" }, d: "M27.5,24c-0.553,0-1,0.448-1,1v3c0,0.552,0.447,1,1,1s1-0.448,1-1v-3\n                        C28.5,24.448,28.053,24,27.5,24z" })))));
};
exports.renderJsonSVG = renderJsonSVG;
var renderActiveSortSVG = function (className, fill) {
    return (react_1.default.createElement("svg", { className: className, viewBox: "0 0 24 24", width: "12", height: "12", fill: fill },
        react_1.default.createElement("path", { d: "M18.873,11.021H5.127a2.126,2.126,0,0,1-1.568-3.56L10.046.872a2.669,2.669,0,0,1,3.939.034l6.431,6.528a2.126,2.126,0,0,1-1.543,3.587ZM12,24.011a2.667,2.667,0,0,1-1.985-.887L3.584,16.6a2.125,2.125,0,0,1,1.543-3.586H18.873a2.125,2.125,0,0,1,1.568,3.558l-6.487,6.589A2.641,2.641,0,0,1,12,24.011Z" })));
};
exports.renderActiveSortSVG = renderActiveSortSVG;
var renderInactiveSortSVG = function (className, fill) {
    return (react_1.default.createElement("svg", { className: className, viewBox: "0 0 24 24", width: "12", height: "12", fill: fill },
        react_1.default.createElement("path", { d: "M18.873,11.021H5.127a2.126,2.126,0,0,1-1.568-3.56L10.046.872a2.669,2.669,0,0,1,3.939.034l6.431,6.528a2.126,2.126,0,0,1-1.543,3.587ZM5.011,8.837a.115.115,0,0,0,0,.109.111.111,0,0,0,.114.075H18.873a.111.111,0,0,0,.114-.075.109.109,0,0,0-.022-.135L12.528,2.276A.7.7,0,0,0,12,2.021a.664.664,0,0,0-.5.221L5.01,8.838ZM12,24.011a2.667,2.667,0,0,1-1.985-.887L3.584,16.6a2.125,2.125,0,0,1,1.543-3.586H18.873a2.125,2.125,0,0,1,1.568,3.558l-6.487,6.589A2.641,2.641,0,0,1,12,24.011Zm-6.873-9a.125.125,0,0,0-.092.209l6.437,6.534a.7.7,0,0,0,.528.257.665.665,0,0,0,.5-.223l6.493-6.6h0a.112.112,0,0,0,0-.108.111.111,0,0,0-.114-.074Z" })));
};
exports.renderInactiveSortSVG = renderInactiveSortSVG;
var renderDownChevronSVG = function (className) {
    return (react_1.default.createElement("svg", { className: className, viewBox: "0 0 256 256" },
        react_1.default.createElement("polygon", { points: "225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093" })));
};
exports.renderDownChevronSVG = renderDownChevronSVG;


/***/ }),

/***/ "./src/components/DataTable/index.tsx":
/*!********************************************!*\
  !*** ./src/components/DataTable/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTable = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var usePagination_1 = __webpack_require__(/*! ../../hooks/usePagination */ "./src/hooks/usePagination/index.tsx");
var DataTableToolbar_1 = __webpack_require__(/*! ../DataTableToolbar */ "./src/components/DataTableToolbar/index.tsx");
var DataTableHeader_1 = __webpack_require__(/*! ../DataTableHeader */ "./src/components/DataTableHeader/index.tsx");
var DataTableBody_1 = __webpack_require__(/*! ../DataTableBody */ "./src/components/DataTableBody/index.tsx");
var DataTableFooter_1 = __webpack_require__(/*! ../DataTableFooter */ "./src/components/DataTableFooter/index.tsx");
__webpack_require__(/*! ../../assets/style/data-table.css */ "./src/assets/style/data-table.css");
var DataTable = function (_a) {
    var itemPerPageRanges = _a.itemPerPageRanges, rows = _a.rows, headers = _a.headers, className = _a.className, theme = _a.theme, labels = _a.labels;
    var _b = (0, react_2.useState)(1), currentPage = _b[0], setCurrentPage = _b[1];
    var _c = (0, react_2.useState)(itemPerPageRanges[0]), currentItemPerPage = _c[0], setcurrentItemPerPage = _c[1];
    // State used to store the current filtered by search data
    var _d = (0, react_2.useState)(rows), dataFiltered = _d[0], setDataFiltered = _d[1];
    // State used to store the current sort data
    var _e = (0, react_2.useState)({ index: 0, order: "asc" }), dataSorted = _e[0], setDataSorted = _e[1];
    var _f = (0, react_2.useState)(0), selectedColumnIndex = _f[0], setSelectedColumnIndex = _f[1];
    // Hidden columns are store in an array by their index and value of their header
    var _g = (0, react_2.useState)([]), hiddenColumns = _g[0], setHiddenColimns = _g[1];
    // Hooks which return an array of the total number of pages and the current data display for the current page
    var _h = (0, usePagination_1.usePagination)(dataFiltered, currentPage, currentItemPerPage, dataSorted), numberOfPage = _h.numberOfPage, dataBatchPerPage = _h.dataBatchPerPage;
    (0, react_2.useEffect)(function () {
        // Check if the current selected columns need to be hidden and if so selected the next available column
        if (hiddenColumns.map(function (hc) { return hc.index; }).includes(selectedColumnIndex)) {
            // First columns in headers that are not hidden
            var nearestDisplayedItem = headers.find(function (item) { return !hiddenColumns.map(function (hc) { return hc.value; }).includes(item); });
            var nearestDisplayedIndex = null;
            // Check if their is a column that is not hidden at all
            if (nearestDisplayedItem !== undefined) {
                // Find the index of the nearest displayed column
                nearestDisplayedIndex = headers.indexOf(nearestDisplayedItem);
                setSelectedColumnIndex(nearestDisplayedIndex);
            }
        }
    }, [hiddenColumns, headers, selectedColumnIndex]);
    return (react_1.default.createElement("div", { className: "".concat(className ?
            "".concat(className, " ").concat(theme === "dark" ? "data-table" : "data-table__light")
            :
                "".concat(theme === "dark" ? "data-table" : "data-table__light")) },
        react_1.default.createElement(DataTableToolbar_1.DataTableToolbar, { headers: headers, data: rows, searchLabel: labels.search, displayLabel: labels.display, itemPerPageRanges: itemPerPageRanges, indexToSearch: dataSorted.index, setItemPerPage: setcurrentItemPerPage, setPage: setCurrentPage, setDataFiltered: setDataFiltered, handleHiddenColumns: setHiddenColimns }),
        react_1.default.createElement("div", { className: "data-table-container" },
            react_1.default.createElement("table", null,
                react_1.default.createElement(DataTableHeader_1.DataTableHeader, { content: headers, theme: theme, dataOrder: dataSorted, selectedColumnIndex: selectedColumnIndex, hiddenColumns: hiddenColumns, changeSortOrder: setDataSorted, setSelectedColumnIndex: setSelectedColumnIndex }),
                react_1.default.createElement(DataTableBody_1.DataTableBody, { content: dataBatchPerPage, selectedColumnIndex: selectedColumnIndex, hiddenColumns: hiddenColumns }))),
        react_1.default.createElement(DataTableFooter_1.DataTableFooter, { headers: headers, rows: rows, numberOfPage: numberOfPage, setPage: setCurrentPage, currentPage: currentPage, firstLabel: labels.first, previousLabel: labels.previous, nextLabel: labels.next, lastLabel: labels.last, exportLabel: labels.export })));
};
exports.DataTable = DataTable;


/***/ }),

/***/ "./src/components/DataTableBody/index.tsx":
/*!************************************************!*\
  !*** ./src/components/DataTableBody/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTableBody = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var DataTableBodyCell_1 = __webpack_require__(/*! ../DataTableBodyCell */ "./src/components/DataTableBodyCell/index.tsx");
var DataTableBody = function (_a) {
    var content = _a.content, hiddenColumns = _a.hiddenColumns, selectedColumnIndex = _a.selectedColumnIndex;
    return (react_1.default.createElement("tbody", { className: "data-table-body" }, content.map(function (item, index) {
        return (react_1.default.createElement("tr", { key: "row-".concat(index), className: "data-table-row" }, item.map(function (itemChild, indexChild) {
            if (!hiddenColumns.map(function (hc) { return hc.index; }).includes(indexChild)) {
                return (react_1.default.createElement(DataTableBodyCell_1.DataTableBodyCell, { key: "cell-".concat(indexChild), contentOfCell: itemChild, indexOfCell: indexChild, selectedColumnIndex: selectedColumnIndex }));
            }
            else {
                return null;
            }
        })));
    })));
};
exports.DataTableBody = DataTableBody;


/***/ }),

/***/ "./src/components/DataTableBodyCell/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/DataTableBodyCell/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTableBodyCell = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var DataTableBodyCell = function (_a) {
    var indexOfCell = _a.indexOfCell, contentOfCell = _a.contentOfCell, selectedColumnIndex = _a.selectedColumnIndex;
    return (react_1.default.createElement(react_1.default.Fragment, null, indexOfCell === selectedColumnIndex ?
        (react_1.default.createElement("td", { className: "data-table-body-cell__selected" }, contentOfCell))
        :
            (react_1.default.createElement("td", { className: "data-table-body-cell" }, contentOfCell))));
};
exports.DataTableBodyCell = DataTableBodyCell;


/***/ }),

/***/ "./src/components/DataTableFooter/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/DataTableFooter/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTableFooter = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var svgRender_1 = __webpack_require__(/*! ../../assets/svgRender */ "./src/assets/svgRender/index.tsx");
var DataTableFooter = function (_a) {
    var numberOfPage = _a.numberOfPage, setPage = _a.setPage, currentPage = _a.currentPage, headers = _a.headers, rows = _a.rows, firstLabel = _a.firstLabel, previousLabel = _a.previousLabel, nextLabel = _a.nextLabel, lastLabel = _a.lastLabel, exportLabel = _a.exportLabel;
    // Fake links to trigger download
    var hiddenCSVDowloadLinkRef = (0, react_1.useRef)(null);
    var hiddenJSONDowloadLinkRef1 = (0, react_1.useRef)(null);
    // Function that format and trigger download of the data to csv format
    var downloadToCSV = function (headers, rows) {
        var joinAllColumns = __spreadArray([headers], rows, true);
        var joinComma = joinAllColumns.map(function (arr) { return arr.join(";"); });
        var joinCommaWithBackspace = joinComma.join("\n");
        if (window.Blob === undefined || window.URL === undefined || window.URL.createObjectURL === undefined) {
            alert("Your browser doesn't support Blobs");
            return;
        }
        if (hiddenCSVDowloadLinkRef !== null && hiddenCSVDowloadLinkRef.current !== null) {
            var csvFile = new Blob([joinCommaWithBackspace], { type: "text/csv" });
            hiddenCSVDowloadLinkRef.current.download = "data";
            hiddenCSVDowloadLinkRef.current.href = window.URL.createObjectURL(csvFile);
            hiddenCSVDowloadLinkRef.current.click();
        }
    };
    // Function that format and trigger download of the data to json format
    var downloadToJSON = function (headers, rows) {
        var data = rows.map(function (rw) {
            var rowObject = {};
            rw.forEach(function (item, index) { return rowObject[headers[index]] = item; });
            return rowObject;
        });
        var json = JSON.stringify(data);
        if (window.Blob === undefined || window.URL === undefined || window.URL.createObjectURL === undefined) {
            alert("Your browser doesn't support Blobs");
            return;
        }
        if (hiddenJSONDowloadLinkRef1 !== null && hiddenJSONDowloadLinkRef1.current !== null) {
            var jsonFile = new Blob([json], { type: "application/json" });
            hiddenJSONDowloadLinkRef1.current.download = "data";
            hiddenJSONDowloadLinkRef1.current.href = window.URL.createObjectURL(jsonFile);
            hiddenJSONDowloadLinkRef1.current.click();
        }
    };
    return (react_1.default.createElement("div", { className: "data-table-footer" },
        react_1.default.createElement("div", { className: "data-table-footer-pagination" },
            react_1.default.createElement("button", { disabled: currentPage === numberOfPage[0], className: "".concat(currentPage === numberOfPage[0] ? "selected-button" : ""), onClick: function () { return setPage(numberOfPage[0]); } }, firstLabel),
            react_1.default.createElement("button", { onClick: function () {
                    if (currentPage !== numberOfPage[0]) {
                        setPage(currentPage - 1);
                    }
                }, disabled: currentPage === numberOfPage[0], className: "".concat(currentPage === numberOfPage[0] ? "selected-button" : "") }, previousLabel),
            react_1.default.createElement("select", { onChange: function (event) { return setPage(parseInt(event.target.value)); }, value: currentPage }, numberOfPage.map(function (page, index) {
                return (react_1.default.createElement("option", { key: "page-".concat(index), value: page }, page));
            })),
            react_1.default.createElement("button", { onClick: function () {
                    if (currentPage !== numberOfPage[numberOfPage.length - 1]) {
                        setPage(currentPage + 1);
                    }
                }, disabled: currentPage === numberOfPage[numberOfPage.length - 1], className: "".concat(currentPage === numberOfPage[numberOfPage.length - 1] ? "selected-button" : "") }, nextLabel),
            react_1.default.createElement("button", { disabled: currentPage === numberOfPage[numberOfPage.length - 1], className: "".concat(currentPage === numberOfPage[numberOfPage.length - 1] ? "selected-button" : ""), onClick: function () { return setPage(numberOfPage[numberOfPage.length - 1]); } }, lastLabel)),
        react_1.default.createElement("div", { className: "data-table-footer-export" },
            react_1.default.createElement("p", null, exportLabel),
            react_1.default.createElement("a", { ref: hiddenCSVDowloadLinkRef, href: ".", style: { display: "none" } }, "Download CSV"),
            react_1.default.createElement("span", { onClick: function () { return downloadToCSV(headers, rows); } }, (0, svgRender_1.renderCsvSVG)("")),
            react_1.default.createElement("a", { ref: hiddenJSONDowloadLinkRef1, href: ".", style: { display: "none" } }, "Download JSON"),
            react_1.default.createElement("span", { onClick: function () { return downloadToJSON(headers, rows); } }, (0, svgRender_1.renderJsonSVG)("")))));
};
exports.DataTableFooter = DataTableFooter;


/***/ }),

/***/ "./src/components/DataTableHeader/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/DataTableHeader/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTableHeader = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var DataTableHeaderCell_1 = __webpack_require__(/*! ../DataTableHeaderCell */ "./src/components/DataTableHeaderCell/index.tsx");
var DataTableHeader = function (_a) {
    var dataOrder = _a.dataOrder, changeSortOrder = _a.changeSortOrder, content = _a.content, setSelectedColumnIndex = _a.setSelectedColumnIndex, selectedColumnIndex = _a.selectedColumnIndex, theme = _a.theme, hiddenColumns = _a.hiddenColumns;
    // Index and order parameter of the column to sort
    var _b = (0, react_1.useState)(dataOrder), sortParameter = _b[0], setSortParameter = _b[1];
    (0, react_1.useEffect)(function () {
        changeSortOrder(sortParameter);
    }, [sortParameter, changeSortOrder]);
    return (react_1.default.createElement("thead", { className: "data-table-header" },
        react_1.default.createElement("tr", { className: "data-table-row" }, content.map(function (item, index) {
            if (!hiddenColumns.map(function (hc) { return hc.value; }).includes(item)) {
                return (react_1.default.createElement(DataTableHeaderCell_1.DataTableHeaderCell, { key: "".concat(item, "-").concat(index), indexOfTheCell: index, contentOfTheCell: item, changeSortOrder: setSortParameter, setSelectedColumnIndex: setSelectedColumnIndex, selectedColumnIndex: selectedColumnIndex, theme: theme }));
            }
            else {
                return null;
            }
        }))));
};
exports.DataTableHeader = DataTableHeader;


/***/ }),

/***/ "./src/components/DataTableHeaderCell/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/DataTableHeaderCell/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTableHeaderCell = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var svgRender_1 = __webpack_require__(/*! ../../assets/svgRender */ "./src/assets/svgRender/index.tsx");
var DataTableHeaderCell = function (_a) {
    var indexOfTheCell = _a.indexOfTheCell, contentOfTheCell = _a.contentOfTheCell, changeSortOrder = _a.changeSortOrder, setSelectedColumnIndex = _a.setSelectedColumnIndex, selectedColumnIndex = _a.selectedColumnIndex, theme = _a.theme;
    var _b = (0, react_1.useState)("asc"), sortOrder = _b[0], setSortOrder = _b[1];
    // Function that change the sort order and the selected column when clicking on the header cell
    var onSortByHeader = function (event) {
        if (sortOrder === "asc") {
            setSortOrder("desc");
        }
        else {
            setSortOrder("asc");
        }
        if (event) {
            if (event.currentTarget) {
                if (event.currentTarget.id) {
                    var index = event.currentTarget.id;
                    var order = sortOrder;
                    changeSortOrder({
                        index: parseInt(index),
                        order: order,
                    });
                    setSelectedColumnIndex(parseInt(index));
                }
            }
        }
    };
    return (react_1.default.createElement("th", { id: "".concat(indexOfTheCell), className: "".concat(selectedColumnIndex === indexOfTheCell ? "data-table-header-cell__selected" : "data-table-header-cell "), scope: "col", key: "header-".concat(indexOfTheCell), onClick: function (e) { return onSortByHeader(e); }, style: { display: "" } },
        react_1.default.createElement("div", { className: "data-table-header-cell-content" },
            react_1.default.createElement("div", { className: "data-table-header-cell-text" }, contentOfTheCell),
            selectedColumnIndex === indexOfTheCell ?
                ((0, svgRender_1.renderActiveSortSVG)("", "".concat(theme === "dark" ? "#bababa" : "#000000")))
                :
                    ((0, svgRender_1.renderInactiveSortSVG)("", "".concat(theme === "dark" ? "#bababa" : "#000000"))))));
};
exports.DataTableHeaderCell = DataTableHeaderCell;


/***/ }),

/***/ "./src/components/DataTableToolbar/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/DataTableToolbar/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTableToolbar = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var svgRender_1 = __webpack_require__(/*! ../../assets/svgRender */ "./src/assets/svgRender/index.tsx");
var DataTableToolbar = function (_a) {
    var setItemPerPage = _a.setItemPerPage, setDataFiltered = _a.setDataFiltered, setPage = _a.setPage, data = _a.data, headers = _a.headers, indexToSearch = _a.indexToSearch, itemPerPageRanges = _a.itemPerPageRanges, searchLabel = _a.searchLabel, displayLabel = _a.displayLabel, handleHiddenColumns = _a.handleHiddenColumns;
    // State used to store if the display select is open or not
    var _b = (0, react_1.useState)(false), selectOpen = _b[0], setSelectOpen = _b[1];
    // Function used to set a new value for the item per page abd reset the current page to 1
    var onChangeItemPerPage = function (event) {
        setItemPerPage(event.target.value);
        setPage(1);
    };
    // Function used to set a new value for the search input, filter the data and reset the current page to 1
    var onInputSeach = function (event) {
        var newData = data.filter(function (row) { return row[indexToSearch].toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()); });
        setDataFiltered(newData);
        setPage(1);
    };
    // Function used to select wich columns to hide
    var handleDisplayedColumns = function (event, index) {
        var columnToHide = {
            value: event.target.value,
            index: index,
        };
        if (!event.target.checked) {
            handleHiddenColumns(function (state) { return __spreadArray(__spreadArray([], state, true), [columnToHide], false); });
        }
        else {
            handleHiddenColumns(function (state) { return __spreadArray([], state, true).filter(function (item) { return item.value !== event.target.value; }); });
        }
    };
    return (react_1.default.createElement("div", { className: "data-table-toolbar" },
        react_1.default.createElement("select", { className: "data-table-toolbar-select", onChange: function (event) { return onChangeItemPerPage(event); } }, itemPerPageRanges.map(function (itemPerPage, index) {
            return (react_1.default.createElement("option", { key: index, value: itemPerPage }, itemPerPage));
        })),
        react_1.default.createElement("div", { className: "data-table-toolbar-input-container" },
            react_1.default.createElement("div", { className: "data-table-toolbar-input-checkbox" },
                react_1.default.createElement("div", { className: "data-table-dropdown", onClick: function () { return setSelectOpen(!selectOpen); } },
                    react_1.default.createElement("p", { className: "data-table-dropdown-label" }, displayLabel),
                    react_1.default.createElement("span", { className: "data-table-dropdown-icon" }, (0, svgRender_1.renderDownChevronSVG)("data-table-dropdown-svg".concat(selectOpen ? "" : "__closed")))),
                react_1.default.createElement("div", { className: "data-table-select-check-container".concat(selectOpen ? "" : "__closed") }, headers && headers.map(function (item, index) {
                    return (react_1.default.createElement("label", { key: "".concat(item, "-").concat(index), htmlFor: item },
                        react_1.default.createElement("input", { type: "checkbox", id: item, defaultChecked: true, onChange: function (e) { return handleDisplayedColumns(e, index); }, value: item }),
                        item));
                }))),
            react_1.default.createElement("div", { className: "data-table-toolbar-input" },
                react_1.default.createElement("label", null, searchLabel),
                react_1.default.createElement("input", { onInput: function (event) { return onInputSeach(event); } })))));
};
exports.DataTableToolbar = DataTableToolbar;


/***/ }),

/***/ "./src/hooks/usePagination/index.tsx":
/*!*******************************************!*\
  !*** ./src/hooks/usePagination/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usePagination = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// Function that return an array including all the pages for the pagination
var getNumberOfPage = function (data, itemPerPage) {
    var numberOfPage = Math.ceil(data.length / itemPerPage);
    var pageRange = [];
    for (var i = 1; i <= numberOfPage; i++) {
        pageRange.push(i);
    }
    return pageRange;
};
// Function that return the batch of data needed to be displayed regarding the current page and item per page
var getItemPerPage = function (data, page, itemPerPage) { return data.slice((page - 1) * itemPerPage, page * itemPerPage); };
var isDate = function (str) {
    var noSpace = str.replace(/\s/g, '');
    if (noSpace.length < 3) {
        return false;
    }
    return Date.parse(noSpace) > 0;
};
var identifyDataType = function (data) {
    if (isDate(data)) {
        return "date";
    }
    else if (!isNaN(parseInt(data))) {
        return "number";
    }
    else {
        return "string";
    }
};
// Function that return a sorted array depending on the type of data for a chosen column
var sort = function (arrayToSort, filterByIndex, order) {
    var sortedArray = arrayToSort;
    if (arrayToSort.length > 0) {
        switch (identifyDataType(arrayToSort[0][filterByIndex])) {
            case "date":
                var sortedByDate = arrayToSort.sort(function (a, b) {
                    var date1 = new Date(a[filterByIndex]).getTime();
                    var date2 = new Date(b[filterByIndex]).getTime();
                    return order === "asc" ? date1 - date2 : date2 - date1;
                });
                sortedArray = sortedByDate;
                break;
            case "number":
                var sortedByNumber = arrayToSort.sort(function (a, b) {
                    var number1 = parseInt(a[filterByIndex]);
                    var number2 = parseInt(b[filterByIndex]);
                    return order === "asc" ? number1 - number2 : number2 - number1;
                });
                sortedArray = sortedByNumber;
                break;
            case "string":
                var sortedByString = order === "asc" ? arrayToSort.sort(function (a, b) {
                    if (a[filterByIndex].toLocaleLowerCase() < b[filterByIndex].toLocaleLowerCase()) {
                        return -1;
                    }
                    else if (a[filterByIndex].toLocaleLowerCase() > b[filterByIndex].toLocaleLowerCase()) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                })
                    :
                        arrayToSort.sort(function (a, b) {
                            if (a[filterByIndex].toLocaleLowerCase() > b[filterByIndex].toLocaleLowerCase()) {
                                return -1;
                            }
                            else if (a[filterByIndex].toLocaleLowerCase() < b[filterByIndex].toLocaleLowerCase()) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                sortedArray = sortedByString;
                break;
            default:
                break;
        }
        return sortedArray;
    }
    else {
        return sortedArray;
    }
};
// Hook that return an array including all the pages for the paginatio an the items for the current page and the item per page
var usePagination = function (data, page, itemPerPage, sortData) {
    var _a = (0, react_1.useState)([]), numberOfPage = _a[0], setNumberOfPage = _a[1];
    var _b = (0, react_1.useState)([]), dataBatchPerPage = _b[0], setDataBatchPerPage = _b[1];
    (0, react_1.useEffect)(function () {
        var sortedData = sort(data, sortData.index, sortData.order);
        var newNumberOfpage = getNumberOfPage(sortedData, itemPerPage);
        var newDataBatchPerPage = getItemPerPage(sortedData, page, itemPerPage);
        setNumberOfPage(__spreadArray([], newNumberOfpage, true));
        setDataBatchPerPage(__spreadArray([], newDataBatchPerPage, true));
    }, [data, page, itemPerPage, setNumberOfPage, setDataBatchPerPage, sortData.index, sortData.order]);
    return ({
        numberOfPage: numberOfPage,
        dataBatchPerPage: dataBatchPerPage
    });
};
exports.usePagination = usePagination;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataTable = void 0;
var DataTable_1 = __webpack_require__(/*! ./components/DataTable */ "./src/components/DataTable/index.tsx");
Object.defineProperty(exports, "DataTable", ({ enumerable: true, get: function () { return DataTable_1.DataTable; } }));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=react-delta-table.js.map