import React, { useEffect, useState } from "react";
import { DataTableHeaderCell } from "../DataTableHeaderCell";
export var DataTableHeader = function (_a) {
    var dataOrder = _a.dataOrder, changeSortOrder = _a.changeSortOrder, content = _a.content, setSelectedColumnIndex = _a.setSelectedColumnIndex, selectedColumnIndex = _a.selectedColumnIndex, theme = _a.theme, hiddenColumns = _a.hiddenColumns;
    // Index and order parameter of the column to sort
    var _b = useState(dataOrder), sortParameter = _b[0], setSortParameter = _b[1];
    useEffect(function () {
        changeSortOrder(sortParameter);
    }, [sortParameter, changeSortOrder]);
    return (React.createElement("thead", { className: "data-table-header" },
        React.createElement("tr", { className: "data-table-row" }, content.map(function (item, index) {
            if (!hiddenColumns.map(function (hc) { return hc.value; }).includes(item)) {
                return (React.createElement(DataTableHeaderCell, { key: "".concat(item, "-").concat(index), indexOfTheCell: index, contentOfTheCell: item, changeSortOrder: setSortParameter, setSelectedColumnIndex: setSelectedColumnIndex, selectedColumnIndex: selectedColumnIndex, theme: theme }));
            }
            else {
                return null;
            }
        }))));
};
//# sourceMappingURL=index.js.map