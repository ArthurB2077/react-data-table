import { RefCallback, useEffect, useState } from "react"
import DataTableToolbar from "../DataTableToolbar";
import DataTableHeader from "../DataTableHeader";
import DataTableBody from "../DataTableBody";
import DataTableFooter from "../DataTableFooter";
import { usePagination } from "../../hooks/usePagination"
import "../../style.scss";
import { reverse } from "dns";

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

const sort: Function = (arrayToSort: Array<Array<string>>, filterByIndex: number, order: string): Array<Array<string>> =>  {
    switch (identifyDataType(arrayToSort[0][filterByIndex])) {
        case "date":
            const sortedDate = arrayToSort.sort((a: string[], b: string[]): number => {
                const date1 = new Date(a[filterByIndex]).getTime()
                const date2 = new Date(b[filterByIndex]).getTime()
                
                if(order === "asc") {
                    return date1 - date2;
                } else {
                    return date2 - date1;
                }
            })
            return(sortedDate)
            break
        case "number":
            const sortedNumber = arrayToSort.sort((a: string[], b: string[]): number => {
                const number1 = parseInt(a[filterByIndex])
                const number2 = parseInt(b[filterByIndex])
                
                if(order === "asc") {
                    return number1 - number2;
                } else {
                    return number2 - number1;
                }
            })
            return(sortedNumber)
            break
        case "string":
            const sortedString = order === "asc" ? arrayToSort.sort((a, b) => {
                if(a[filterByIndex] < b[filterByIndex]) {
                    return -1
                } else if (a[filterByIndex] > b[filterByIndex]) {
                    return 1
                } else {
                    return 0
                }
            }) 
            : 
            arrayToSort.sort((a, b) => {
                if(a[filterByIndex] > b[filterByIndex]) {
                    return -1
                } else if (a[filterByIndex] < b[filterByIndex]) {
                    return 1
                } else {
                    return 0
                }
            }) 
            return(sortedString)
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

    console.log(sort(props.rows, 2, "desc"))

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