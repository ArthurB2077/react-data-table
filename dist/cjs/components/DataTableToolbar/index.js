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
exports.DataTableToolbar = void 0;
const react_1 = __importStar(require("react"));
const svgRender_1 = require("../../assets/svgRender");
const DataTableToolbar = ({ setItemPerPage, setDataFiltered, setPage, data, headers, indexToSearch, itemPerPageRanges, searchLabel, displayLabel, handleHiddenColumns }) => {
    // State used to store if the display select is open or not
    const [selectOpen, setSelectOpen] = (0, react_1.useState)(false);
    // Function used to set a new value for the item per page abd reset the current page to 1
    const onChangeItemPerPage = (event) => {
        setItemPerPage(event.target.value);
        setPage(1);
    };
    // Function used to set a new value for the search input, filter the data and reset the current page to 1
    const onInputSeach = (event) => {
        const newData = data.filter(row => row[indexToSearch].toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
        setDataFiltered(newData);
        setPage(1);
    };
    // Function used to select wich columns to hide
    const handleDisplayedColumns = (event, index) => {
        const columnToHide = {
            value: event.target.value,
            index: index,
        };
        if (!event.target.checked) {
            handleHiddenColumns((state) => [...state, columnToHide]);
        }
        else {
            handleHiddenColumns((state) => [...state].filter(item => item.value !== event.target.value));
        }
    };
    return (react_1.default.createElement("div", { className: "data-table-toolbar" },
        react_1.default.createElement("select", { className: "data-table-toolbar-select", onChange: (event) => onChangeItemPerPage(event) }, itemPerPageRanges.map((itemPerPage, index) => {
            return (react_1.default.createElement("option", { key: index, value: itemPerPage }, itemPerPage));
        })),
        react_1.default.createElement("div", { className: "data-table-toolbar-input-container" },
            react_1.default.createElement("div", { className: "data-table-toolbar-input-checkbox" },
                react_1.default.createElement("div", { className: "data-table-dropdown", onClick: () => setSelectOpen(!selectOpen) },
                    react_1.default.createElement("p", { className: "data-table-dropdown-label" }, displayLabel),
                    react_1.default.createElement("span", { className: `data-table-dropdown-icon` }, (0, svgRender_1.renderDownChevronSVG)(`data-table-dropdown-svg${selectOpen ? "" : "__closed"}`))),
                react_1.default.createElement("div", { className: `data-table-select-check-container${selectOpen ? "" : "__closed"}` }, headers && headers.map((item, index) => {
                    return (react_1.default.createElement("label", { key: `${item}-${index}`, htmlFor: item },
                        react_1.default.createElement("input", { type: "checkbox", id: item, defaultChecked: true, onChange: (e) => handleDisplayedColumns(e, index), value: item }),
                        item));
                }))),
            react_1.default.createElement("div", { className: "data-table-toolbar-input" },
                react_1.default.createElement("label", null, searchLabel),
                react_1.default.createElement("input", { onInput: (event) => onInputSeach(event) })))));
};
exports.DataTableToolbar = DataTableToolbar;
//# sourceMappingURL=index.js.map