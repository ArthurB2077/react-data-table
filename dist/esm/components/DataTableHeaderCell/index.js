import React, { useState } from "react";
import { renderActiveSortSVG, renderInactiveSortSVG } from "../../assets/svgRender";
export const DataTableHeaderCell = ({ indexOfTheCell, contentOfTheCell, changeSortOrder, setSelectedColumnIndex, selectedColumnIndex, theme }) => {
    const [sortOrder, setSortOrder] = useState("asc");
    // Function that change the sort order and the selected column when clicking on the header cell
    const onSortByHeader = (event) => {
        if (sortOrder === "asc") {
            setSortOrder("desc");
        }
        else {
            setSortOrder("asc");
        }
        if (event) {
            if (event.currentTarget) {
                if (event.currentTarget.id) {
                    const index = event.currentTarget.id;
                    const order = sortOrder;
                    changeSortOrder({
                        index: parseInt(index),
                        order: order,
                    });
                    setSelectedColumnIndex(parseInt(index));
                }
            }
        }
    };
    return (React.createElement("th", { id: `${indexOfTheCell}`, className: `${selectedColumnIndex === indexOfTheCell ? "data-table-header-cell__selected" : "data-table-header-cell "}`, scope: "col", key: `header-${indexOfTheCell}`, onClick: (e) => onSortByHeader(e), style: { display: "" } },
        React.createElement("div", { className: "data-table-header-cell-content" },
            React.createElement("div", { className: "data-table-header-cell-text" }, contentOfTheCell),
            selectedColumnIndex === indexOfTheCell ?
                (renderActiveSortSVG("", `${theme === "dark" ? "#bababa" : "#000000"}`))
                :
                    (renderInactiveSortSVG("", `${theme === "dark" ? "#bababa" : "#000000"}`)))));
};
//# sourceMappingURL=index.js.map