import { useState } from "react"
import { usePagination } from "../../hooks/usePagination"
import DataTableToolbar from "../DataTableToolbar"
import DataTableHeader from "../DataTableHeader"
import DataTableBody from "../DataTableBody"
import DataTableFooter from "../DataTableFooter"
import "../../style.scss"

interface Props {
    headers: Array<string>,
    rows: Array<Array<string>>
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
    
    const { numberOfPage, dataBatchPerPage } = usePagination(dataFiltered, currentPage, currentItemPerPage, dataSorted)

    return(
        <div className="data-table">
            <DataTableToolbar setItemPerPage={setcurrentItemPerPage} setPage={setCurrentPage} setDataFiltered={setDataFiltered} data={props.rows} indexToSearch={dataSorted.index}/>
            <div className="data-table-conatiner">
                <table>
                    <DataTableHeader content={props.headers} changeSortOrder={setDataSorted} dataOrder={dataSorted}/>
                    <DataTableBody content={dataBatchPerPage} />
                </table>
            </div>
            <DataTableFooter numberOfPage={numberOfPage} setPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}

export default DataTable