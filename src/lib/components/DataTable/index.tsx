import { useState } from "react"
import { usePagination } from "../../hooks/usePagination"
import DataTableToolbar from "../DataTableToolbar"
import DataTableHeader from "../DataTableHeader"
import DataTableBody from "../DataTableBody"
import DataTableFooter from "../DataTableFooter"
import "../../style.scss"
import { useEffect } from "react"

interface Props {
    headers: Array<string>,
    rows: Array<Array<string>>,
    itemPerPageRanges: Array<number>,
    searchLabel: string,
    className?: string,
    theme: "light" | "dark",
}

interface SortData {
    index: number,
    order: "asc" | "desc"
}

interface HiddenColumns {
    value: string;
    index: number;
} 

const DataTable: React.FC<Props> = (props): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [currentItemPerPage, setcurrentItemPerPage] = useState<number>(5)
    const [dataFiltered, setDataFiltered] = useState<Array<Array<string>>>(props.rows)
    const [dataSorted, setDataSorted] = useState<SortData>({ index: 0, order: "asc" })
    const [selectedColumnIndex, setSelectedColumnIndex] = useState<number>(0)
    const [hiddenColumns, setHiddenColimns] = useState<Array<HiddenColumns>>([])

    const { numberOfPage, dataBatchPerPage } = usePagination(dataFiltered, currentPage, currentItemPerPage, dataSorted)

    useEffect(() => {
        if(hiddenColumns.map(hc => hc.index).includes(selectedColumnIndex)) {
            const nearestDisplayedItem = props.headers.find(item => !hiddenColumns.map(hc => hc.value).includes(item))
            let nearestDisplayedIndex = null
            if(nearestDisplayedItem !== undefined){
                nearestDisplayedIndex = props.headers.indexOf(nearestDisplayedItem)
                setSelectedColumnIndex(nearestDisplayedIndex)
            }
        }
    }, [hiddenColumns])

    return (
        <div className={`${props.className ? `${props.className} ${props.theme === "dark" ? "data-table" : "data-table__light"}` : `${props.theme === "dark" ? "data-table" : "data-table__light"}`}`}>
            <DataTableToolbar
                setItemPerPage={setcurrentItemPerPage}
                setPage={setCurrentPage}
                setDataFiltered={setDataFiltered}
                data={props.rows}
                headers={props.headers}
                indexToSearch={dataSorted.index}
                itemPerPageRanges={props.itemPerPageRanges}
                searchLabel={props.searchLabel}
                handleHiddenColumns={setHiddenColimns}
            />
            <div className="data-table-conatiner">
                <table>
                    <DataTableHeader
                        content={props.headers}
                        changeSortOrder={setDataSorted}
                        dataOrder={dataSorted}
                        setSelectedColumnIndex={setSelectedColumnIndex}
                        selectedColumnIndex={selectedColumnIndex}
                        theme={props.theme}
                        hiddenColumns={hiddenColumns}
                    />
                    <DataTableBody
                        content={dataBatchPerPage}
                        selectedColumnIndex={selectedColumnIndex}
                        hiddenColumns={hiddenColumns}
                    />
                </table>
            </div>
            <DataTableFooter
                numberOfPage={numberOfPage}
                setPage={setCurrentPage}
                currentPage={currentPage}
                rows={props.rows}
                headers={props.headers}
            />
        </div>
    )
}

export default DataTable