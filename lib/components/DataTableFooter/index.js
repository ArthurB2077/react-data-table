"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableFooter = void 0;
var react_1 = require("react");
var svgRender_1 = require("../../assets/svgRender");
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
//# sourceMappingURL=index.js.map