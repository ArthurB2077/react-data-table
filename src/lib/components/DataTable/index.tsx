import { useState, useEffect } from "react"
import { usePagination } from "../../hooks/usePagination"
import DataTableToolbar from "../DataTableToolbar"
import DataTableHeader from "../DataTableHeader"
import DataTableBody from "../DataTableBody"
import DataTableFooter from "../DataTableFooter"
import "../../assets/style/data-table.scss"
import { DataTableProps, SortData, HiddenColumns } from "../../types"

const DataTable: React.FC<DataTableProps> = (props): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [currentItemPerPage, setcurrentItemPerPage] = useState<number>(props.itemPerPageRanges[0])
    // State used to store the current filtered by search data
    const [dataFiltered, setDataFiltered] = useState<Array<Array<string>>>(props.rows)
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
            const nearestDisplayedItem: string | undefined = props.headers.find(item => !hiddenColumns.map(hc => hc.value).includes(item))
            let nearestDisplayedIndex: number | null = null
            // Check if their is a column that is not hidden at all
            if(nearestDisplayedItem !== undefined){
                // Find the index of the nearest displayed column
                nearestDisplayedIndex = props.headers.indexOf(nearestDisplayedItem)
                setSelectedColumnIndex(nearestDisplayedIndex)
            }
        }
    }, [hiddenColumns, props.headers, selectedColumnIndex])

    return (
        <div 
            className={
                `${props.className ? 
                    `${props.className} ${props.theme === "dark" ? "data-table" : "data-table__light"}`
                    : 
                    `${props.theme === "dark" ? "data-table" : "data-table__light"}`
                }`
            }
        >
            <DataTableToolbar
                headers={props.headers}
                data={props.rows}
                searchLabel={props.searchLabel}
                itemPerPageRanges={props.itemPerPageRanges}
                indexToSearch={dataSorted.index}
                setItemPerPage={setcurrentItemPerPage}
                setPage={setCurrentPage}
                setDataFiltered={setDataFiltered}
                handleHiddenColumns={setHiddenColimns}
            />
            <div className="data-table-container">
                <table>
                    <DataTableHeader
                        content={props.headers}
                        theme={props.theme}
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
                headers={props.headers}
                rows={props.rows}
                numberOfPage={numberOfPage}
                setPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default DataTable