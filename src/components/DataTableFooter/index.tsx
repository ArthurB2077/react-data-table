import React, { useRef } from "react"
import { renderCsvSVG, renderJsonSVG } from "../../assets/svgRender"
import { DataTableFooterProps } from "../../types"

export const DataTableFooter: React.FC<DataTableFooterProps> = ({
    numberOfPage,
    setPage,
    currentPage,
    headers,
    rows,
    firstLabel,
    previousLabel,
    nextLabel,
    lastLabel,
    exportLabel
}): JSX.Element => {
    // Fake links to trigger download
    const hiddenCSVDowloadLinkRef = useRef<HTMLAnchorElement | null>(null)
    const hiddenJSONDowloadLinkRef1 = useRef<HTMLAnchorElement | null>(null)

    // Function that format and trigger download of the data to csv format
    const downloadToCSV: Function = (headers: DataTableFooterProps["headers"], rows: DataTableFooterProps["rows"]): void => {
        const joinAllColumns = [headers, ...rows]
        const joinComma = joinAllColumns.map(arr => arr.join(";"))
        const joinCommaWithBackspace = joinComma.join("\n")

        if (window.Blob === undefined || window.URL === undefined || window.URL.createObjectURL === undefined) {
            alert("Your browser doesn't support Blobs")
            return
        }

        if (hiddenCSVDowloadLinkRef !== null && hiddenCSVDowloadLinkRef.current !== null) {
            const csvFile = new Blob([joinCommaWithBackspace], { type: "text/csv" })
            hiddenCSVDowloadLinkRef.current.download = "data"
            hiddenCSVDowloadLinkRef.current.href = window.URL.createObjectURL(csvFile)
            hiddenCSVDowloadLinkRef.current.click()
        }
    }

    // Function that format and trigger download of the data to json format
    const downloadToJSON: Function = (headers: DataTableFooterProps["headers"], rows: DataTableFooterProps["rows"]): void => {
        const data = rows.map(rw => {
            let rowObject: any = {}
            rw.forEach((item, index) => rowObject[headers[index]] = item)

            return rowObject
        })
        const json = JSON.stringify(data)

        if (window.Blob === undefined || window.URL === undefined || window.URL.createObjectURL === undefined) {
            alert("Your browser doesn't support Blobs")
            return
        }

        if (hiddenJSONDowloadLinkRef1 !== null && hiddenJSONDowloadLinkRef1.current !== null) {
            const jsonFile = new Blob([json], { type: "application/json" })
            hiddenJSONDowloadLinkRef1.current.download = "data"
            hiddenJSONDowloadLinkRef1.current.href = window.URL.createObjectURL(jsonFile)
            hiddenJSONDowloadLinkRef1.current.click()
        }
    }

    return (
        <div className="data-table-footer">
            <div className="data-table-footer-pagination">
                <button 
                    disabled={currentPage === numberOfPage[0]} 
                    className={`${currentPage === numberOfPage[0] ? "selected-button" : ""}`} 
                    onClick={() => setPage(numberOfPage[0])}
                >
                    {firstLabel}
                </button>
                <button
                    onClick={() => {
                        if (currentPage !== numberOfPage[0]) {
                            setPage(currentPage - 1)
                        }
                    }}
                    disabled={currentPage === numberOfPage[0]}
                    className={`${currentPage === numberOfPage[0] ? "selected-button" : ""}`}
                >
                    {previousLabel}
                </button>
                <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setPage(parseInt(event.target.value))} value={currentPage}>
                    {numberOfPage.map((page, index) => {
                        return (<option key={`page-${index}`} value={page}>{page}</option>)
                    })}
                </select>
                <button
                    onClick={() => {
                        if (currentPage !== numberOfPage[numberOfPage.length - 1]) {
                            setPage(currentPage + 1)
                        }
                    }}
                    disabled={currentPage === numberOfPage[numberOfPage.length - 1]}
                    className={`${currentPage === numberOfPage[numberOfPage.length - 1] ? "selected-button" : ""}`}
                >
                    {nextLabel}
                </button>
                <button 
                    disabled={currentPage === numberOfPage[numberOfPage.length - 1]} 
                    className={`${currentPage === numberOfPage[numberOfPage.length - 1] ? "selected-button" : ""}`} 
                    onClick={() => setPage(numberOfPage[numberOfPage.length - 1])}
                >
                    {lastLabel}
                </button>
            </div>
            <div className="data-table-footer-export">
                <p>{exportLabel}</p>
                <a ref={hiddenCSVDowloadLinkRef} href="." style={{ display: "none" }}>Download CSV</a>
                <span onClick={() => downloadToCSV(headers, rows)}>
                    {renderCsvSVG("")}
                </span>
                <a ref={hiddenJSONDowloadLinkRef1} href="." style={{ display: "none" }}>Download JSON</a>
                <span onClick={() => downloadToJSON(headers, rows)}>
                   {renderJsonSVG("")}
                </span>
            </div>
        </div>
    )
}