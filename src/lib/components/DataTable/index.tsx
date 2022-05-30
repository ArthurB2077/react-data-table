import { useState } from "react"
import { usePagination } from "../../hooks/usePagination"
import DataTableToolbar from "../DataTableToolbar"
import DataTableHeader from "../DataTableHeader"
import DataTableBody from "../DataTableBody"
import DataTableFooter from "../DataTableFooter"
import "../../style.scss"

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

const DataTable: React.FC<Props> = (props): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [currentItemPerPage, setcurrentItemPerPage] = useState<number>(5)
    const [dataFiltered, setDataFiltered] = useState<Array<Array<string>>>(props.rows)
    const [dataSorted, setDataSorted] = useState<SortData>({ index: 0, order: "asc" })
    const [selectedColumnIndex, setSelectedColumnIndex] = useState<number>(0)
    
    const { numberOfPage, dataBatchPerPage } = usePagination(dataFiltered, currentPage, currentItemPerPage, dataSorted)

    return(
        <div className={`${props.className ? `${props.className} ${props.theme === "dark" ? "data-table" : "data-table__light"}` : `${props.theme === "dark" ? "data-table" : "data-table__light"}`}`}>
            <DataTableToolbar 
                setItemPerPage={setcurrentItemPerPage}
                setPage={setCurrentPage}
                setDataFiltered={setDataFiltered}
                data={props.rows}
                indexToSearch={dataSorted.index}
                itemPerPageRanges={props.itemPerPageRanges}
                searchLabel={props.searchLabel}
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
                    />
                    <DataTableBody 
                        content={dataBatchPerPage}
                        selectedColumnIndex={selectedColumnIndex}
                    />
                </table>
            </div>
            <DataTableFooter
                numberOfPage={numberOfPage}
                setPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default DataTable