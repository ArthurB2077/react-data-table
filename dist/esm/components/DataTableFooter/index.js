import React, { useRef } from "react";
import { renderCsvSVG, renderJsonSVG } from "../../assets/svgRender";
export const DataTableFooter = ({ numberOfPage, setPage, currentPage, headers, rows, firstLabel, previousLabel, nextLabel, lastLabel, exportLabel }) => {
    // Fake links to trigger download
    const hiddenCSVDowloadLinkRef = useRef(null);
    const hiddenJSONDowloadLinkRef1 = useRef(null);
    // Function that format and trigger download of the data to csv format
    const downloadToCSV = (headers, rows) => {
        const joinAllColumns = [headers, ...rows];
        const joinComma = joinAllColumns.map(arr => arr.join(";"));
        const joinCommaWithBackspace = joinComma.join("\n");
        if (window.Blob === undefined || window.URL === undefined || window.URL.createObjectURL === undefined) {
            alert("Your browser doesn't support Blobs");
            return;
        }
        if (hiddenCSVDowloadLinkRef !== null && hiddenCSVDowloadLinkRef.current !== null) {
            const csvFile = new Blob([joinCommaWithBackspace], { type: "text/csv" });
            hiddenCSVDowloadLinkRef.current.download = "data";
            hiddenCSVDowloadLinkRef.current.href = window.URL.createObjectURL(csvFile);
            hiddenCSVDowloadLinkRef.current.click();
        }
    };
    // Function that format and trigger download of the data to json format
    const downloadToJSON = (headers, rows) => {
        const data = rows.map(rw => {
            let rowObject = {};
            rw.forEach((item, index) => rowObject[headers[index]] = item);
            return rowObject;
        });
        const json = JSON.stringify(data);
        if (window.Blob === undefined || window.URL === undefined || window.URL.createObjectURL === undefined) {
            alert("Your browser doesn't support Blobs");
            return;
        }
        if (hiddenJSONDowloadLinkRef1 !== null && hiddenJSONDowloadLinkRef1.current !== null) {
            const jsonFile = new Blob([json], { type: "application/json" });
            hiddenJSONDowloadLinkRef1.current.download = "data";
            hiddenJSONDowloadLinkRef1.current.href = window.URL.createObjectURL(jsonFile);
            hiddenJSONDowloadLinkRef1.current.click();
        }
    };
    return (React.createElement("div", { className: "data-table-footer" },
        React.createElement("div", { className: "data-table-footer-pagination" },
            React.createElement("button", { disabled: currentPage === numberOfPage[0], className: `${currentPage === numberOfPage[0] ? "selected-button" : ""}`, onClick: () => setPage(numberOfPage[0]) }, firstLabel),
            React.createElement("button", { onClick: () => {
                    if (currentPage !== numberOfPage[0]) {
                        setPage(currentPage - 1);
                    }
                }, disabled: currentPage === numberOfPage[0], className: `${currentPage === numberOfPage[0] ? "selected-button" : ""}` }, previousLabel),
            React.createElement("select", { onChange: (event) => setPage(parseInt(event.target.value)), value: currentPage }, numberOfPage.map((page, index) => {
                return (React.createElement("option", { key: `page-${index}`, value: page }, page));
            })),
            React.createElement("button", { onClick: () => {
                    if (currentPage !== numberOfPage[numberOfPage.length - 1]) {
                        setPage(currentPage + 1);
                    }
                }, disabled: currentPage === numberOfPage[numberOfPage.length - 1], className: `${currentPage === numberOfPage[numberOfPage.length - 1] ? "selected-button" : ""}` }, nextLabel),
            React.createElement("button", { disabled: currentPage === numberOfPage[numberOfPage.length - 1], className: `${currentPage === numberOfPage[numberOfPage.length - 1] ? "selected-button" : ""}`, onClick: () => setPage(numberOfPage[numberOfPage.length - 1]) }, lastLabel)),
        React.createElement("div", { className: "data-table-footer-export" },
            React.createElement("p", null, exportLabel),
            React.createElement("a", { ref: hiddenCSVDowloadLinkRef, href: ".", style: { display: "none" } }, "Download CSV"),
            React.createElement("span", { onClick: () => downloadToCSV(headers, rows) }, renderCsvSVG("")),
            React.createElement("a", { ref: hiddenJSONDowloadLinkRef1, href: ".", style: { display: "none" } }, "Download JSON"),
            React.createElement("span", { onClick: () => downloadToJSON(headers, rows) }, renderJsonSVG("")))));
};
//# sourceMappingURL=index.js.map