import React, { useState } from "react";
import { renderDownChevronSVG } from "../../assets/svgRender";
export const DataTableToolbar = ({ setItemPerPage, setDataFiltered, setPage, data, headers, indexToSearch, itemPerPageRanges, searchLabel, displayLabel, handleHiddenColumns }) => {
    // State used to store if the display select is open or not
    const [selectOpen, setSelectOpen] = useState(false);
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
    return (React.createElement("div", { className: "data-table-toolbar" },
        React.createElement("select", { className: "data-table-toolbar-select", onChange: (event) => onChangeItemPerPage(event) }, itemPerPageRanges.map((itemPerPage, index) => {
            return (React.createElement("option", { key: index, value: itemPerPage }, itemPerPage));
        })),
        React.createElement("div", { className: "data-table-toolbar-input-container" },
            React.createElement("div", { className: "data-table-toolbar-input-checkbox" },
                React.createElement("div", { className: "data-table-dropdown", onClick: () => setSelectOpen(!selectOpen) },
                    React.createElement("p", { className: "data-table-dropdown-label" }, displayLabel),
                    React.createElement("span", { className: `data-table-dropdown-icon` }, renderDownChevronSVG(`data-table-dropdown-svg${selectOpen ? "" : "__closed"}`))),
                React.createElement("div", { className: `data-table-select-check-container${selectOpen ? "" : "__closed"}` }, headers && headers.map((item, index) => {
                    return (React.createElement("label", { key: `${item}-${index}`, htmlFor: item },
                        React.createElement("input", { type: "checkbox", id: item, defaultChecked: true, onChange: (e) => handleDisplayedColumns(e, index), value: item }),
                        item));
                }))),
            React.createElement("div", { className: "data-table-toolbar-input" },
                React.createElement("label", null, searchLabel),
                React.createElement("input", { onInput: (event) => onInputSeach(event) })))));
};
//# sourceMappingURL=index.js.map