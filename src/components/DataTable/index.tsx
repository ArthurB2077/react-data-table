import React from "react"
import { useState, useEffect } from "react"
import { usePagination } from "../../hooks/usePagination"
import { DataTableToolbar } from "../DataTableToolbar"
import { DataTableHeader } from "../DataTableHeader"
import { DataTableBody } from "../DataTableBody"
import { DataTableFooter } from "../DataTableFooter"
import { DataTableProps, SortData, HiddenColumns } from "../../types"
import "../../assets/style/data-table.css"

export const DataTable: React.FC<DataTableProps> = ({
    itemPerPageRanges,
    rows,
    headers,
    className,
    theme,
    labels
}): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [currentItemPerPage, setcurrentItemPerPage] = useState<number>(itemPerPageRanges[0])
    // State used to store the current filtered by search data
    const [dataFiltered, setDataFiltered] = useState<Array<Array<string>>>(rows)
    // State used to store the current sort data
    const [dataSorted, setDataSorted] = useState<SortData>({ index: 0, order: "asc" })
    const [selectedColumnIndex, setSelectedColumnIndex] = useState<number>(0)
    // Hidden columns are store in an array by their index and value of their header
    const [hiddenColumns, setHiddenColimns] = useState<Array<HiddenColumns>>([])

    // Hooks which return an array of the total number of pages and the current data display for the current page
    const { numberOfPage, dataBatchPerPage } = usePagination(dataFiltered, currentPage, currentItemPerPage, dataSorted)

    useEffect(() => {
        // Check if the current selected columns need to be hidden and if so selected the next available column
        if(hiddenColumns.map(hc => hc.index).includes(selectedColumnIndex)) {
            // First columns in headers that are not hidden
            const nearestDisplayedItem: string | undefined = headers.find(item => !hiddenColumns.map(hc => hc.value).includes(item))
            let nearestDisplayedIndex: number | null = null
            // Check if their is a column that is not hidden at all
            if(nearestDisplayedItem !== undefined){
                // Find the index of the nearest displayed column
                nearestDisplayedIndex = headers.indexOf(nearestDisplayedItem)
                setSelectedColumnIndex(nearestDisplayedIndex)
            }
        }
    }, [hiddenColumns, headers, selectedColumnIndex])

    return (
        <div 
            className={
                `${className ? 
                    `${className} ${theme === "dark" ? "data-table" : "data-table__light"}`
                    : 
                    `${theme === "dark" ? "data-table" : "data-table__light"}`
                }`
            }
        >
            <DataTableToolbar
                headers={headers}
                data={rows}
                searchLabel={labels.search}
                displayLabel={labels.display}
                itemPerPageRanges={itemPerPageRanges}
                indexToSearch={dataSorted.index}
                setItemPerPage={setcurrentItemPerPage}
                setPage={setCurrentPage}
                setDataFiltered={setDataFiltered}
                handleHiddenColumns={setHiddenColimns}
            />
            <div className="data-table-container">
                <table>
                    <DataTableHeader
                        content={headers}
                        theme={theme}
                        dataOrder={dataSorted}
                        selectedColumnIndex={selectedColumnIndex}
                        hiddenColumns={hiddenColumns}
                        changeSortOrder={setDataSorted}
                        setSelectedColumnIndex={setSelectedColumnIndex}
                    />
                    <DataTableBody
                        content={dataBatchPerPage}
                        selectedColumnIndex={selectedColumnIndex}
                        hiddenColumns={hiddenColumns}
                    />
                </table>
            </div>
            <DataTableFooter
                headers={headers}
                rows={rows}
                numberOfPage={numberOfPage}
                setPage={setCurrentPage}
                currentPage={currentPage}
                firstLabel={labels.first}
                previousLabel={labels.previous}
                nextLabel={labels.next}
                lastLabel={labels.last}
                exportLabel={labels.export}
            />
        </div>
    )
}