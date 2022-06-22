"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = void 0;
var react_1 = require("react");
var react_2 = require("react");
var usePagination_1 = require("../../hooks/usePagination");
var DataTableToolbar_1 = require("../DataTableToolbar");
var DataTableHeader_1 = require("../DataTableHeader");
var DataTableBody_1 = require("../DataTableBody");
var DataTableFooter_1 = require("../DataTableFooter");
require("../../assets/style/data-table.css");
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
//# sourceMappingURL=index.js.map