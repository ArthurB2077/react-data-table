import React from "react";
import { DataTableBodyCell } from "../DataTableBodyCell";
export const DataTableBody = ({ content, hiddenColumns, selectedColumnIndex, }) => {
    return (React.createElement("tbody", { className: "data-table-body" }, content.map((item, index) => {
        return (React.createElement("tr", { key: `row-${index}`, className: "data-table-row" }, item.map((itemChild, indexChild) => {
            if (!hiddenColumns.map(hc => hc.index).includes(indexChild)) {
                return (React.createElement(DataTableBodyCell, { key: `cell-${indexChild}`, contentOfCell: itemChild, indexOfCell: indexChild, selectedColumnIndex: selectedColumnIndex }));
            }
            else {
                return null;
            }
        })));
    })));
};
//# sourceMappingURL=index.js.map