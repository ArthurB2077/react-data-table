import { RefCallback, useEffect, useState } from "react"
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

const isDate: Function = (str: string): boolean => {
    let noSpace = str.replace(/\s/g, '')
    if( noSpace.length < 3) {
      return false
    }
    return Date.parse(noSpace) > 0
}

const identifyDataType: Function = (data: string): string => {
    if(isDate(data)) {
        return "date"
    } else if(!isNaN(parseInt(data))) {
        return "number"
    } else {
        return "string"
    }
}

const sort: Function = (arrayToSort: Array<Array<string>>, filterByIndex: number): Array<Array<string>> =>  {
    switch (identifyDataType(arrayToSort[0][filterByIndex])) {
        case "date":
            const sortedArray = arrayToSort.sort((a: string[], b: string[]): number => {
                const date1 = new Date(a[filterByIndex]).getTime()
                const date2 = new Date(b[filterByIndex]).getTime()
                
                return date1 - date2;
            })
            return(sortedArray)
            break
        case "number":
            return(arrayToSort)
            break
        case "string":
            return(arrayToSort)
            break
        default:
            return(arrayToSort)
                
    }
}

const DataTable: React.FC<Props> = (props): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [currentItemPerPage, setcurrentItemPerPage] = useState<number>(5)
    const [dataFiltered, setDataFiltered] = useState<Array<Array<string>>>(props.rows)
    const { numberOfPage, dataBatchPerPage } = usePagination(dataFiltered, currentPage, currentItemPerPage)

    console.log(sort(props.rows, 2))

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