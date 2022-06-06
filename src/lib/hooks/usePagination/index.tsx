
import { useState, useEffect } from "react"

interface PaginationReturn {
    numberOfPage: (string | number)[],
    dataBatchPerPage:(string | number)[],
}

const getNumberOfPage: Function = (data: Array<string | number>, itemPerPage: number): Array<number> => {
    const numberOfPage: number = Math.ceil(data.length / itemPerPage)
    const pageRange: Array<number> = []

    for (let i = 1; i <= numberOfPage; i++) {
        pageRange.push(i)
    }

    return pageRange
}

const getItemPerPage: Function = (data: Array<string | number>, page: number, itemPerPage: number):  Array<string | number> => data.slice((page - 1) * itemPerPage, page * itemPerPage)

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
    if(arrayToSort.length > 0) {
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
                    if(a[filterByIndex].toLocaleLowerCase() < b[filterByIndex].toLocaleLowerCase()) {
                        return -1
                    } else if (a[filterByIndex].toLocaleLowerCase() > b[filterByIndex].toLocaleLowerCase()) {
                        return 1
                    } else {
                        return 0
                    }
                }) 
                : 
                arrayToSort.sort((a, b) => {
                    if(a[filterByIndex].toLocaleLowerCase() > b[filterByIndex].toLocaleLowerCase()) {
                        return -1
                    } else if (a[filterByIndex].toLocaleLowerCase() < b[filterByIndex].toLocaleLowerCase()) {
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
    } else {
        return arrayToSort
    }
}

export const usePagination: Function = (data: Array<string | number>, page: number, itemPerPage: number, sortData: any): PaginationReturn => {
    const [numberOfPage, setNumberOfPage] = useState<Array<string | number>>([])
    const [dataBatchPerPage, setDataBatchPerPage] = useState<Array<string | number>>([])

    useEffect(() => {
        const sortedData = sort(data, sortData.index, sortData.order)
        const newNumberOfpage = getNumberOfPage(sortedData, itemPerPage)
        const newDataBatchPerPage = getItemPerPage(sortedData, page, itemPerPage)

        setNumberOfPage([...newNumberOfpage])
        setDataBatchPerPage([...newDataBatchPerPage])

    }, [data, page, itemPerPage, setNumberOfPage, setDataBatchPerPage, sortData.index, sortData.order])

    return ({
        numberOfPage: numberOfPage,
        dataBatchPerPage: dataBatchPerPage
    })
}
