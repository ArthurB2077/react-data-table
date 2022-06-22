"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableBody = void 0;
var react_1 = require("react");
var DataTableBodyCell_1 = require("../DataTableBodyCell");
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
//# sourceMappingURL=index.js.map