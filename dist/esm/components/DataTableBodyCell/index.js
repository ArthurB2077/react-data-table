import React from "react";
export const DataTableBodyCell = ({ indexOfCell, contentOfCell, selectedColumnIndex }) => {
    return (React.createElement(React.Fragment, null, indexOfCell === selectedColumnIndex ?
        (React.createElement("td", { className: "data-table-body-cell__selected" }, contentOfCell))
        :
            (React.createElement("td", { className: "data-table-body-cell" }, contentOfCell))));
};
//# sourceMappingURL=index.js.map