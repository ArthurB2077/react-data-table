"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableHeader = void 0;
var react_1 = require("react");
var DataTableHeaderCell_1 = require("../DataTableHeaderCell");
var DataTableHeader = function (_a) {
    var dataOrder = _a.dataOrder, changeSortOrder = _a.changeSortOrder, content = _a.content, setSelectedColumnIndex = _a.setSelectedColumnIndex, selectedColumnIndex = _a.selectedColumnIndex, theme = _a.theme, hiddenColumns = _a.hiddenColumns;
    // Index and order parameter of the column to sort
    var _b = (0, react_1.useState)(dataOrder), sortParameter = _b[0], setSortParameter = _b[1];
    (0, react_1.useEffect)(function () {
        changeSortOrder(sortParameter);
    }, [sortParameter, changeSortOrder]);
    return (react_1.default.createElement("thead", { className: "data-table-header" },
        react_1.default.createElement("tr", { className: "data-table-row" }, content.map(function (item, index) {
            if (!hiddenColumns.map(function (hc) { return hc.value; }).includes(item)) {
                return (react_1.default.createElement(DataTableHeaderCell_1.DataTableHeaderCell, { key: "".concat(item, "-").concat(index), indexOfTheCell: index, contentOfTheCell: item, changeSortOrder: setSortParameter, setSelectedColumnIndex: setSelectedColumnIndex, selectedColumnIndex: selectedColumnIndex, theme: theme }));
            }
            else {
                return null;
            }
        }))));
};
exports.DataTableHeader = DataTableHeader;
//# sourceMappingURL=index.js.map