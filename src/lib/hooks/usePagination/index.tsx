import { useState, useEffect } from "react"

const getPageRange: Function = (data: Array<string | number>, itemPerPage: number): Array<number> => {
    const numberOfPage: number = Math.ceil(data.length / itemPerPage)
    const pageRange: Array<number> = []

    for (let i = 1; i <= numberOfPage; i++) {
        pageRange.push(i)
    }

    return pageRange
}

const getItemPerPage: Function = (data: Array<string | number>, page: number, itemPerPage: number):  Array<string | number> => data.slice((page - 1) * itemPerPage, page * itemPerPage)

const usePagination = (data: Array<string | number>, page: number, itemPerPage: number) => {
    const [pageRange, setPageRange] = useState<Array<string | number>>([])
    const [currentItemPerPage, setCurrentItemPerPage] = useState<Array<string | number>>([])

    useEffect(() => {
        const range = getPageRange(data, itemPerPage)
        setPageRange([...range])
    
        const currentItemPerPage = getItemPerPage(data, page, itemPerPage)
        setCurrentItemPerPage([...currentItemPerPage])

    }, [data, setPageRange, page, setCurrentItemPerPage])

    return { currentItemPerPage,  pageRange: pageRange}
}

export default usePagination
