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
exports.DataTableToolbar = void 0;
var react_1 = require("react");
var svgRender_1 = require("../../assets/svgRender");
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
//# sourceMappingURL=index.js.map