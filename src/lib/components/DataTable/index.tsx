import { useEffect, useState } from "react"
import DataTableToolbar from "../DataTableToolbar";
import DataTableHeader from "../DataTableHeader";
import DataTableBody from "../DataTableBody";
import DataTableFooter from "../DataTableFooter";
import { usePagination } from "../../hooks/usePagination"
import "../../style.scss";

interface Props {
    headers: Array<string>,
    rows: Array<Array<string>>
};

const DataTable: React.FC<Props> = (props): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [currentItemPerPage, setcurrentItemPerPage] = useState<number>(5)
    const [dataFiltered, setDataFiltered] = useState<Array<Array<string>>>(props.rows)
    const { numberOfPage, dataBatchPerPage } = usePagination(dataFiltered, currentPage, currentItemPerPage)

    return(
        <>
            <DataTableToolbar setItemPerPage={setcurrentItemPerPage} setPage={setCurrentPage} setDataFiltered={setDataFiltered} data={props.rows}/>
            <table className="data-table">
                <DataTableHeader content={props.headers} />
                <DataTableBody content={dataBatchPerPage} />
            </table>
            <DataTableFooter numberOfPage={numberOfPage} setPage={setCurrentPage}/>
        </>
    );
};

export default DataTable;