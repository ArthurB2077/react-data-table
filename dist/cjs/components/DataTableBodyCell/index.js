"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableBodyCell = void 0;
const react_1 = __importDefault(require("react"));
const DataTableBodyCell = ({ indexOfCell, contentOfCell, selectedColumnIndex }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null, indexOfCell === selectedColumnIndex ?
        (react_1.default.createElement("td", { className: "data-table-body-cell__selected" }, contentOfCell))
        :
            (react_1.default.createElement("td", { className: "data-table-body-cell" }, contentOfCell))));
};
exports.DataTableBodyCell = DataTableBodyCell;
//# sourceMappingURL=index.js.map