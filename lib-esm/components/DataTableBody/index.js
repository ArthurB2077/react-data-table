import React from "react";
import { DataTableBodyCell } from "../DataTableBodyCell";
export var DataTableBody = function (_a) {
    var content = _a.content, hiddenColumns = _a.hiddenColumns, selectedColumnIndex = _a.selectedColumnIndex;
    return (React.createElement("tbody", { className: "data-table-body" }, content.map(function (item, index) {
        return (React.createElement("tr", { key: "row-".concat(index), className: "data-table-row" }, item.map(function (itemChild, indexChild) {
            if (!hiddenColumns.map(function (hc) { return hc.index; }).includes(indexChild)) {
                return (React.createElement(DataTableBodyCell, { key: "cell-".concat(indexChild), contentOfCell: itemChild, indexOfCell: indexChild, selectedColumnIndex: selectedColumnIndex }));
            }
            else {
                return null;
            }
        })));
    })));
};
//# sourceMappingURL=index.js.map