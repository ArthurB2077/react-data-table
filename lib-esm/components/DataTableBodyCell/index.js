import React from "react";
export var DataTableBodyCell = function (_a) {
    var indexOfCell = _a.indexOfCell, contentOfCell = _a.contentOfCell, selectedColumnIndex = _a.selectedColumnIndex;
    return (React.createElement(React.Fragment, null, indexOfCell === selectedColumnIndex ?
        (React.createElement("td", { className: "data-table-body-cell__selected" }, contentOfCell))
        :
            (React.createElement("td", { className: "data-table-body-cell" }, contentOfCell))));
};
//# sourceMappingURL=index.js.map