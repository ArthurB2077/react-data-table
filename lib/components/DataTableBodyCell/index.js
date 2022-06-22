"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableBodyCell = void 0;
var react_1 = require("react");
var DataTableBodyCell = function (_a) {
    var indexOfCell = _a.indexOfCell, contentOfCell = _a.contentOfCell, selectedColumnIndex = _a.selectedColumnIndex;
    return (react_1.default.createElement(react_1.default.Fragment, null, indexOfCell === selectedColumnIndex ?
        (react_1.default.createElement("td", { className: "data-table-body-cell__selected" }, contentOfCell))
        :
            (react_1.default.createElement("td", { className: "data-table-body-cell" }, contentOfCell))));
};
exports.DataTableBodyCell = DataTableBodyCell;
//# sourceMappingURL=index.js.map