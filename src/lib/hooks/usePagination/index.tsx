
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

    useEffect(() => {
        console.log("page", page)
        console.log("itemPerPage", itemPerPage)

    }, [page, itemPerPage])

    console.log("data", data)
    console.log("getNumberOfPage(data, itemPerPage)", getNumberOfPage(data, itemPerPage))
    console.log("getItemPerPage(data, page, itemPerPage", getItemPerPage(data, page, itemPerPage))

    return ({
        numberOfPage: getNumberOfPage(data, itemPerPage),
        dataBatchPerPage: getItemPerPage(data, page, itemPerPage)
    })
}
