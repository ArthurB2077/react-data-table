import { useState, useEffect } from "react";
// Function that return an array including all the pages for the pagination
const getNumberOfPage = (data, itemPerPage) => {
    const numberOfPage = Math.ceil(data.length / itemPerPage);
    const pageRange = [];
    for (let i = 1; i <= numberOfPage; i++) {
        pageRange.push(i);
    }
    return pageRange;
};
// Function that return the batch of data needed to be displayed regarding the current page and item per page
const getItemPerPage = (data, page, itemPerPage) => data.slice((page - 1) * itemPerPage, page * itemPerPage);
const isDate = (str) => {
    let noSpace = str.replace(/\s/g, '');
    if (noSpace.length < 3) {
        return false;
    }
    return Date.parse(noSpace) > 0;
};
const identifyDataType = (data) => {
    if (isDate(data)) {
        return "date";
    }
    else if (!isNaN(parseInt(data))) {
        return "number";
    }
    else {
        return "string";
    }
};
// Function that return a sorted array depending on the type of data for a chosen column
const sort = (arrayToSort, filterByIndex, order) => {
    let sortedArray = arrayToSort;
    if (arrayToSort.length > 0) {
        switch (identifyDataType(arrayToSort[0][filterByIndex])) {
            case "date":
                const sortedByDate = arrayToSort.sort((a, b) => {
                    const date1 = new Date(a[filterByIndex]).getTime();
                    const date2 = new Date(b[filterByIndex]).getTime();
                    return order === "asc" ? date1 - date2 : date2 - date1;
                });
                sortedArray = sortedByDate;
                break;
            case "number":
                const sortedByNumber = arrayToSort.sort((a, b) => {
                    const number1 = parseInt(a[filterByIndex]);
                    const number2 = parseInt(b[filterByIndex]);
                    return order === "asc" ? number1 - number2 : number2 - number1;
                });
                sortedArray = sortedByNumber;
                break;
            case "string":
                const sortedByString = order === "asc" ? arrayToSort.sort((a, b) => {
                    if (a[filterByIndex].toLocaleLowerCase() < b[filterByIndex].toLocaleLowerCase()) {
                        return -1;
                    }
                    else if (a[filterByIndex].toLocaleLowerCase() > b[filterByIndex].toLocaleLowerCase()) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                })
                    :
                        arrayToSort.sort((a, b) => {
                            if (a[filterByIndex].toLocaleLowerCase() > b[filterByIndex].toLocaleLowerCase()) {
                                return -1;
                            }
                            else if (a[filterByIndex].toLocaleLowerCase() < b[filterByIndex].toLocaleLowerCase()) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                sortedArray = sortedByString;
                break;
            default:
                break;
        }
        return sortedArray;
    }
    else {
        return sortedArray;
    }
};
// Hook that return an array including all the pages for the paginatio an the items for the current page and the item per page
export const usePagination = (data, page, itemPerPage, sortData) => {
    const [numberOfPage, setNumberOfPage] = useState([]);
    const [dataBatchPerPage, setDataBatchPerPage] = useState([]);
    useEffect(() => {
        const sortedData = sort(data, sortData.index, sortData.order);
        const newNumberOfpage = getNumberOfPage(sortedData, itemPerPage);
        const newDataBatchPerPage = getItemPerPage(sortedData, page, itemPerPage);
        setNumberOfPage([...newNumberOfpage]);
        setDataBatchPerPage([...newDataBatchPerPage]);
    }, [data, page, itemPerPage, setNumberOfPage, setDataBatchPerPage, sortData.index, sortData.order]);
    return ({
        numberOfPage: numberOfPage,
        dataBatchPerPage: dataBatchPerPage
    });
};
//# sourceMappingURL=index.js.map