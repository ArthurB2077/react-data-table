import React, { useEffect, useState } from "react";
import { DataTableHeaderCell } from "../DataTableHeaderCell";
export const DataTableHeader = ({ dataOrder, changeSortOrder, content, setSelectedColumnIndex, selectedColumnIndex, theme, hiddenColumns }) => {
    // Index and order parameter of the column to sort
    const [sortParameter, setSortParameter] = useState(dataOrder);
    useEffect(() => {
        changeSortOrder(sortParameter);
    }, [sortParameter, changeSortOrder]);
    return (React.createElement("thead", { className: "data-table-header" },
        React.createElement("tr", { className: "data-table-row" }, content.map((item, index) => {
            if (!hiddenColumns.map(hc => hc.value).includes(item)) {
                return (React.createElement(DataTableHeaderCell, { key: `${item}-${index}`, indexOfTheCell: index, contentOfTheCell: item, changeSortOrder: setSortParameter, setSelectedColumnIndex: setSelectedColumnIndex, selectedColumnIndex: selectedColumnIndex, theme: theme }));
            }
            else {
                return null;
            }
        }))));
};
//# sourceMappingURL=index.js.map