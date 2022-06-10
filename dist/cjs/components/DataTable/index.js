"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const usePagination_1 = require("../../hooks/usePagination");
const DataTableToolbar_1 = require("../DataTableToolbar");
const DataTableHeader_1 = require("../DataTableHeader");
const DataTableBody_1 = require("../DataTableBody");
const DataTableFooter_1 = require("../DataTableFooter");
require("../../assets/style/data-table.css");
const DataTable = ({ itemPerPageRanges, rows, headers, className, theme, labels }) => {
    const [currentPage, setCurrentPage] = (0, react_2.useState)(1);
    const [currentItemPerPage, setcurrentItemPerPage] = (0, react_2.useState)(itemPerPageRanges[0]);
    // State used to store the current filtered by search data
    const [dataFiltered, setDataFiltered] = (0, react_2.useState)(rows);
    // State used to store the current sort data
    const [dataSorted, setDataSorted] = (0, react_2.useState)({ index: 0, order: "asc" });
    const [selectedColumnIndex, setSelectedColumnIndex] = (0, react_2.useState)(0);
    // Hidden columns are store in an array by their index and value of their header
    const [hiddenColumns, setHiddenColimns] = (0, react_2.useState)([]);
    // Hooks which return an array of the total number of pages and the current data display for the current page
    const { numberOfPage, dataBatchPerPage } = (0, usePagination_1.usePagination)(dataFiltered, currentPage, currentItemPerPage, dataSorted);
    (0, react_2.useEffect)(() => {
        // Check if the current selected columns need to be hidden and if so selected the next available column
        if (hiddenColumns.map(hc => hc.index).includes(selectedColumnIndex)) {
            // First columns in headers that are not hidden
            const nearestDisplayedItem = headers.find(item => !hiddenColumns.map(hc => hc.value).includes(item));
            let nearestDisplayedIndex = null;
            // Check if their is a column that is not hidden at all
            if (nearestDisplayedItem !== undefined) {
                // Find the index of the nearest displayed column
                nearestDisplayedIndex = headers.indexOf(nearestDisplayedItem);
                setSelectedColumnIndex(nearestDisplayedIndex);
            }
        }
    }, [hiddenColumns, headers, selectedColumnIndex]);
    return (react_1.default.createElement("div", { className: `${className ?
            `${className} ${theme === "dark" ? "data-table" : "data-table__light"}`
            :
                `${theme === "dark" ? "data-table" : "data-table__light"}`}` },
        react_1.default.createElement(DataTableToolbar_1.DataTableToolbar, { headers: headers, data: rows, searchLabel: labels.search, displayLabel: labels.display, itemPerPageRanges: itemPerPageRanges, indexToSearch: dataSorted.index, setItemPerPage: setcurrentItemPerPage, setPage: setCurrentPage, setDataFiltered: setDataFiltered, handleHiddenColumns: setHiddenColimns }),
        react_1.default.createElement("div", { className: "data-table-container" },
            react_1.default.createElement("table", null,
                react_1.default.createElement(DataTableHeader_1.DataTableHeader, { content: headers, theme: theme, dataOrder: dataSorted, selectedColumnIndex: selectedColumnIndex, hiddenColumns: hiddenColumns, changeSortOrder: setDataSorted, setSelectedColumnIndex: setSelectedColumnIndex }),
                react_1.default.createElement(DataTableBody_1.DataTableBody, { content: dataBatchPerPage, selectedColumnIndex: selectedColumnIndex, hiddenColumns: hiddenColumns }))),
        react_1.default.createElement(DataTableFooter_1.DataTableFooter, { headers: headers, rows: rows, numberOfPage: numberOfPage, setPage: setCurrentPage, currentPage: currentPage, firstLabel: labels.first, previousLabel: labels.previous, nextLabel: labels.next, lastLabel: labels.last, exportLabel: labels.export })));
};
exports.DataTable = DataTable;
//# sourceMappingURL=index.js.map