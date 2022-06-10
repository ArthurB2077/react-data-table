"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableFooter = void 0;
const react_1 = __importStar(require("react"));
const svgRender_1 = require("../../assets/svgRender");
const DataTableFooter = ({ numberOfPage, setPage, currentPage, headers, rows, firstLabel, previousLabel, nextLabel, lastLabel, exportLabel }) => {
    // Fake links to trigger download
    const hiddenCSVDowloadLinkRef = (0, react_1.useRef)(null);
    const hiddenJSONDowloadLinkRef1 = (0, react_1.useRef)(null);
    // Function that format and trigger download of the data to csv format
    const downloadToCSV = (headers, rows) => {
        const joinAllColumns = [headers, ...rows];
        const joinComma = joinAllColumns.map(arr => arr.join(";"));
        const joinCommaWithBackspace = joinComma.join("\n");
        if (window.Blob === undefined || window.URL === undefined || window.URL.createObjectURL === undefined) {
            alert("Your browser doesn't support Blobs");
            return;
        }
        if (hiddenCSVDowloadLinkRef !== null && hiddenCSVDowloadLinkRef.current !== null) {
            const csvFile = new Blob([joinCommaWithBackspace], { type: "text/csv" });
            hiddenCSVDowloadLinkRef.current.download = "data";
            hiddenCSVDowloadLinkRef.current.href = window.URL.createObjectURL(csvFile);
            hiddenCSVDowloadLinkRef.current.click();
        }
    };
    // Function that format and trigger download of the data to json format
    const downloadToJSON = (headers, rows) => {
        const data = rows.map(rw => {
            let rowObject = {};
            rw.forEach((item, index) => rowObject[headers[index]] = item);
            return rowObject;
        });
        const json = JSON.stringify(data);
        if (window.Blob === undefined || window.URL === undefined || window.URL.createObjectURL === undefined) {
            alert("Your browser doesn't support Blobs");
            return;
        }
        if (hiddenJSONDowloadLinkRef1 !== null && hiddenJSONDowloadLinkRef1.current !== null) {
            const jsonFile = new Blob([json], { type: "application/json" });
            hiddenJSONDowloadLinkRef1.current.download = "data";
            hiddenJSONDowloadLinkRef1.current.href = window.URL.createObjectURL(jsonFile);
            hiddenJSONDowloadLinkRef1.current.click();
        }
    };
    return (react_1.default.createElement("div", { className: "data-table-footer" },
        react_1.default.createElement("div", { className: "data-table-footer-pagination" },
            react_1.default.createElement("button", { disabled: currentPage === numberOfPage[0], className: `${currentPage === numberOfPage[0] ? "selected-button" : ""}`, onClick: () => setPage(numberOfPage[0]) }, firstLabel),
            react_1.default.createElement("button", { onClick: () => {
                    if (currentPage !== numberOfPage[0]) {
                        setPage(currentPage - 1);
                    }
                }, disabled: currentPage === numberOfPage[0], className: `${currentPage === numberOfPage[0] ? "selected-button" : ""}` }, previousLabel),
            react_1.default.createElement("select", { onChange: (event) => setPage(parseInt(event.target.value)), value: currentPage }, numberOfPage.map((page, index) => {
                return (react_1.default.createElement("option", { key: `page-${index}`, value: page }, page));
            })),
            react_1.default.createElement("button", { onClick: () => {
                    if (currentPage !== numberOfPage[numberOfPage.length - 1]) {
                        setPage(currentPage + 1);
                    }
                }, disabled: currentPage === numberOfPage[numberOfPage.length - 1], className: `${currentPage === numberOfPage[numberOfPage.length - 1] ? "selected-button" : ""}` }, nextLabel),
            react_1.default.createElement("button", { disabled: currentPage === numberOfPage[numberOfPage.length - 1], className: `${currentPage === numberOfPage[numberOfPage.length - 1] ? "selected-button" : ""}`, onClick: () => setPage(numberOfPage[numberOfPage.length - 1]) }, lastLabel)),
        react_1.default.createElement("div", { className: "data-table-footer-export" },
            react_1.default.createElement("p", null, exportLabel),
            react_1.default.createElement("a", { ref: hiddenCSVDowloadLinkRef, href: ".", style: { display: "none" } }, "Download CSV"),
            react_1.default.createElement("span", { onClick: () => downloadToCSV(headers, rows) }, (0, svgRender_1.renderCsvSVG)("")),
            react_1.default.createElement("a", { ref: hiddenJSONDowloadLinkRef1, href: ".", style: { display: "none" } }, "Download JSON"),
            react_1.default.createElement("span", { onClick: () => downloadToJSON(headers, rows) }, (0, svgRender_1.renderJsonSVG)("")))));
};
exports.DataTableFooter = DataTableFooter;
//# sourceMappingURL=index.js.map