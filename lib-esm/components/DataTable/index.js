import React from "react";
import { useState, useEffect } from "react";
import { usePagination } from "../../hooks/usePagination";
import { DataTableToolbar } from "../DataTableToolbar";
import { DataTableHeader } from "../DataTableHeader";
import { DataTableBody } from "../DataTableBody";
import { DataTableFooter } from "../DataTableFooter";
import "../../assets/style/data-table.css";
export var DataTable = function (_a) {
    var itemPerPageRanges = _a.itemPerPageRanges, rows = _a.rows, headers = _a.headers, className = _a.className, theme = _a.theme, labels = _a.labels;
    var _b = useState(1), currentPage = _b[0], setCurrentPage = _b[1];
    var _c = useState(itemPerPageRanges[0]), currentItemPerPage = _c[0], setcurrentItemPerPage = _c[1];
    // State used to store the current filtered by search data
    var _d = useState(rows), dataFiltered = _d[0], setDataFiltered = _d[1];
    // State used to store the current sort data
    var _e = useState({ index: 0, order: "asc" }), dataSorted = _e[0], setDataSorted = _e[1];
    var _f = useState(0), selectedColumnIndex = _f[0], setSelectedColumnIndex = _f[1];
    // Hidden columns are store in an array by their index and value of their header
    var _g = useState([]), hiddenColumns = _g[0], setHiddenColimns = _g[1];
    // Hooks which return an array of the total number of pages and the current data display for the current page
    var _h = usePagination(dataFiltered, currentPage, currentItemPerPage, dataSorted), numberOfPage = _h.numberOfPage, dataBatchPerPage = _h.dataBatchPerPage;
    useEffect(function () {
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
    return (React.createElement("div", { className: "".concat(className ?
            "".concat(className, " ").concat(theme === "dark" ? "data-table" : "data-table__light")
            :
                "".concat(theme === "dark" ? "data-table" : "data-table__light")) },
        React.createElement(DataTableToolbar, { headers: headers, data: rows, searchLabel: labels.search, displayLabel: labels.display, itemPerPageRanges: itemPerPageRanges, indexToSearch: dataSorted.index, setItemPerPage: setcurrentItemPerPage, setPage: setCurrentPage, setDataFiltered: setDataFiltered, handleHiddenColumns: setHiddenColimns }),
        React.createElement("div", { className: "data-table-container" },
            React.createElement("table", null,
                React.createElement(DataTableHeader, { content: headers, theme: theme, dataOrder: dataSorted, selectedColumnIndex: selectedColumnIndex, hiddenColumns: hiddenColumns, changeSortOrder: setDataSorted, setSelectedColumnIndex: setSelectedColumnIndex }),
                React.createElement(DataTableBody, { content: dataBatchPerPage, selectedColumnIndex: selectedColumnIndex, hiddenColumns: hiddenColumns }))),
        React.createElement(DataTableFooter, { headers: headers, rows: rows, numberOfPage: numberOfPage, setPage: setCurrentPage, currentPage: currentPage, firstLabel: labels.first, previousLabel: labels.previous, nextLabel: labels.next, lastLabel: labels.last, exportLabel: labels.export })));
};
//# sourceMappingURL=index.js.map