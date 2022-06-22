import React, { useState } from "react";
import { renderActiveSortSVG, renderInactiveSortSVG } from "../../assets/svgRender";
export var DataTableHeaderCell = function (_a) {
    var indexOfTheCell = _a.indexOfTheCell, contentOfTheCell = _a.contentOfTheCell, changeSortOrder = _a.changeSortOrder, setSelectedColumnIndex = _a.setSelectedColumnIndex, selectedColumnIndex = _a.selectedColumnIndex, theme = _a.theme;
    var _b = useState("asc"), sortOrder = _b[0], setSortOrder = _b[1];
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
    return (React.createElement("th", { id: "".concat(indexOfTheCell), className: "".concat(selectedColumnIndex === indexOfTheCell ? "data-table-header-cell__selected" : "data-table-header-cell "), scope: "col", key: "header-".concat(indexOfTheCell), onClick: function (e) { return onSortByHeader(e); }, style: { display: "" } },
        React.createElement("div", { className: "data-table-header-cell-content" },
            React.createElement("div", { className: "data-table-header-cell-text" }, contentOfTheCell),
            selectedColumnIndex === indexOfTheCell ?
                (renderActiveSortSVG("", "".concat(theme === "dark" ? "#bababa" : "#000000")))
                :
                    (renderInactiveSortSVG("", "".concat(theme === "dark" ? "#bababa" : "#000000"))))));
};
//# sourceMappingURL=index.js.map