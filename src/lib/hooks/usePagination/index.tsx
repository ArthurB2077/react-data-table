
import { useState, useEffect } from "react"

const getNumberOfPage: Function = (data: Array<string | number>, itemPerPage: number): Array<number> => {
    const numberOfPage: number = Math.ceil(data.length / itemPerPage)
    const pageRange: Array<number> = []

    for (let i = 1; i <= numberOfPage; i++) {
        pageRange.push(i)
    }

    return pageRange
}

const getItemPerPage: Function = (data: Array<string | number>, page: number, itemPerPage: number):  Array<string | number> => data.slice((page - 1) * itemPerPage, page * itemPerPage)

export const usePagination: Function = (data: Array<string | number>, page: number, itemPerPage: number) => {
    const [numberOfPage, setNumberOfPage] = useState<Array<string | number>>([])
    const [dataBatchPerPage, setDataBatchPerPage] = useState<Array<string | number>>([])

    useEffect(() => {
        const newNumberOfpage = getNumberOfPage(data, itemPerPage)
        const newDataBatchPerPage = getItemPerPage(data, page, itemPerPage)
        // console.log("page", page)
        // console.log("newNumberOfpage", newNumberOfpage)

        setNumberOfPage([...newNumberOfpage])
        setDataBatchPerPage([...newDataBatchPerPage])

    }, [data, page, itemPerPage, setNumberOfPage, setDataBatchPerPage])

    // console.log("data", data)
    // console.log("getNumberOfPage(data, itemPerPage)", getNumberOfPage(data, itemPerPage))
    // console.log("getItemPerPage(data, page, itemPerPage", getItemPerPage(data, page, itemPerPage))

    return ({
        numberOfPage: numberOfPage,
        dataBatchPerPage: dataBatchPerPage
    })
}
