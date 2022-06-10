import React from "react";
import { useState, useEffect } from "react";
import { usePagination } from "../../hooks/usePagination";
import { DataTableToolbar } from "../DataTableToolbar";
import { DataTableHeader } from "../DataTableHeader";
import { DataTableBody } from "../DataTableBody";
import { DataTableFooter } from "../DataTableFooter";
import "../../assets/style/data-table.css";
export const DataTable = ({ itemPerPageRanges, rows, headers, className, theme, labels }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItemPerPage, setcurrentItemPerPage] = useState(itemPerPageRanges[0]);
    // State used to store the current filtered by search data
    const [dataFiltered, setDataFiltered] = useState(rows);
    // State used to store the current sort data
    const [dataSorted, setDataSorted] = useState({ index: 0, order: "asc" });
    const [selectedColumnIndex, setSelectedColumnIndex] = useState(0);
    // Hidden columns are store in an array by their index and value of their header
    const [hiddenColumns, setHiddenColimns] = useState([]);
    // Hooks which return an array of the total number of pages and the current data display for the current page
    const { numberOfPage, dataBatchPerPage } = usePagination(dataFiltered, currentPage, currentItemPerPage, dataSorted);
    useEffect(() => {
        // Check if the current selected columns need to be hidden and if so selected the next available column
        if (hiddenColumns.map(hc => hc.index).includes(selectedColumnIndex)) {
            // First columns in headers that are not hidden
            const nearestDisplayedItem = headers.find(item => !hiddenColumns.map(hc => hc.value).includes(item));
            let nearestDisplayedIndex = null;
            // Check if their is a column that is not hidden at all
            if (nearestDisplayedItem !== undefined) {
                // Find the index of the nearest displayed column
                nearestDisplayedIndex = headers.indexOf(nearestDisplayedItem);
                setSelectedColumnIndex(nearestDisplayedIndex);
            }
        }
    }, [hiddenColumns, headers, selectedColumnIndex]);
    return (React.createElement("div", { className: `${className ?
            `${className} ${theme === "dark" ? "data-table" : "data-table__light"}`
            :
                `${theme === "dark" ? "data-table" : "data-table__light"}`}` },
        React.createElement(DataTableToolbar, { headers: headers, data: rows, searchLabel: labels.search, displayLabel: labels.display, itemPerPageRanges: itemPerPageRanges, indexToSearch: dataSorted.index, setItemPerPage: setcurrentItemPerPage, setPage: setCurrentPage, setDataFiltered: setDataFiltered, handleHiddenColumns: setHiddenColimns }),
        React.createElement("div", { className: "data-table-container" },
            React.createElement("table", null,
                React.createElement(DataTableHeader, { content: headers, theme: theme, dataOrder: dataSorted, selectedColumnIndex: selectedColumnIndex, hiddenColumns: hiddenColumns, changeSortOrder: setDataSorted, setSelectedColumnIndex: setSelectedColumnIndex }),
                React.createElement(DataTableBody, { content: dataBatchPerPage, selectedColumnIndex: selectedColumnIndex, hiddenColumns: hiddenColumns }))),
        React.createElement(DataTableFooter, { headers: headers, rows: rows, numberOfPage: numberOfPage, setPage: setCurrentPage, currentPage: currentPage, firstLabel: labels.first, previousLabel: labels.previous, nextLabel: labels.next, lastLabel: labels.last, exportLabel: labels.export })));
};
//# sourceMappingURL=index.js.map