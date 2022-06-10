"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableHeader = void 0;
const react_1 = __importStar(require("react"));
const DataTableHeaderCell_1 = require("../DataTableHeaderCell");
const DataTableHeader = ({ dataOrder, changeSortOrder, content, setSelectedColumnIndex, selectedColumnIndex, theme, hiddenColumns }) => {
    // Index and order parameter of the column to sort
    const [sortParameter, setSortParameter] = (0, react_1.useState)(dataOrder);
    (0, react_1.useEffect)(() => {
        changeSortOrder(sortParameter);
    }, [sortParameter, changeSortOrder]);
    return (react_1.default.createElement("thead", { className: "data-table-header" },
        react_1.default.createElement("tr", { className: "data-table-row" }, content.map((item, index) => {
            if (!hiddenColumns.map(hc => hc.value).includes(item)) {
                return (react_1.default.createElement(DataTableHeaderCell_1.DataTableHeaderCell, { key: `${item}-${index}`, indexOfTheCell: index, contentOfTheCell: item, changeSortOrder: setSortParameter, setSelectedColumnIndex: setSelectedColumnIndex, selectedColumnIndex: selectedColumnIndex, theme: theme }));
            }
            else {
                return null;
            }
        }))));
};
exports.DataTableHeader = DataTableHeader;
//# sourceMappingURL=index.js.map