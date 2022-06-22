"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableHeaderCell = void 0;
var react_1 = require("react");
var svgRender_1 = require("../../assets/svgRender");
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
//# sourceMappingURL=index.js.map