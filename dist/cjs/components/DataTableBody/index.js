"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableBody = void 0;
const react_1 = __importDefault(require("react"));
const DataTableBodyCell_1 = require("../DataTableBodyCell");
const DataTableBody = ({ content, hiddenColumns, selectedColumnIndex, }) => {
    return (react_1.default.createElement("tbody", { className: "data-table-body" }, content.map((item, index) => {
        return (react_1.default.createElement("tr", { key: `row-${index}`, className: "data-table-row" }, item.map((itemChild, indexChild) => {
            if (!hiddenColumns.map(hc => hc.index).includes(indexChild)) {
                return (react_1.default.createElement(DataTableBodyCell_1.DataTableBodyCell, { key: `cell-${indexChild}`, contentOfCell: itemChild, indexOfCell: indexChild, selectedColumnIndex: selectedColumnIndex }));
            }
            else {
                return null;
            }
        })));
    })));
};
exports.DataTableBody = DataTableBody;
//# sourceMappingURL=index.js.map