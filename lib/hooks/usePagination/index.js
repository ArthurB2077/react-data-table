"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagination = void 0;
var react_1 = require("react");
// Function that return an array including all the pages for the pagination
var getNumberOfPage = function (data, itemPerPage) {
    var numberOfPage = Math.ceil(data.length / itemPerPage);
    var pageRange = [];
    for (var i = 1; i <= numberOfPage; i++) {
        pageRange.push(i);
    }
    return pageRange;
};
// Function that return the batch of data needed to be displayed regarding the current page and item per page
var getItemPerPage = function (data, page, itemPerPage) { return data.slice((page - 1) * itemPerPage, page * itemPerPage); };
var isDate = function (str) {
    var noSpace = str.replace(/\s/g, '');
    if (noSpace.length < 3) {
        return false;
    }
    return Date.parse(noSpace) > 0;
};
var identifyDataType = function (data) {
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
var sort = function (arrayToSort, filterByIndex, order) {
    var sortedArray = arrayToSort;
    if (arrayToSort.length > 0) {
        switch (identifyDataType(arrayToSort[0][filterByIndex])) {
            case "date":
                var sortedByDate = arrayToSort.sort(function (a, b) {
                    var date1 = new Date(a[filterByIndex]).getTime();
                    var date2 = new Date(b[filterByIndex]).getTime();
                    return order === "asc" ? date1 - date2 : date2 - date1;
                });
                sortedArray = sortedByDate;
                break;
            case "number":
                var sortedByNumber = arrayToSort.sort(function (a, b) {
                    var number1 = parseInt(a[filterByIndex]);
                    var number2 = parseInt(b[filterByIndex]);
                    return order === "asc" ? number1 - number2 : number2 - number1;
                });
                sortedArray = sortedByNumber;
                break;
            case "string":
                var sortedByString = order === "asc" ? arrayToSort.sort(function (a, b) {
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
                        arrayToSort.sort(function (a, b) {
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
var usePagination = function (data, page, itemPerPage, sortData) {
    var _a = (0, react_1.useState)([]), numberOfPage = _a[0], setNumberOfPage = _a[1];
    var _b = (0, react_1.useState)([]), dataBatchPerPage = _b[0], setDataBatchPerPage = _b[1];
    (0, react_1.useEffect)(function () {
        var sortedData = sort(data, sortData.index, sortData.order);
        var newNumberOfpage = getNumberOfPage(sortedData, itemPerPage);
        var newDataBatchPerPage = getItemPerPage(sortedData, page, itemPerPage);
        setNumberOfPage(__spreadArray([], newNumberOfpage, true));
        setDataBatchPerPage(__spreadArray([], newDataBatchPerPage, true));
    }, [data, page, itemPerPage, setNumberOfPage, setDataBatchPerPage, sortData.index, sortData.order]);
    return ({
        numberOfPage: numberOfPage,
        dataBatchPerPage: dataBatchPerPage
    });
};
exports.usePagination = usePagination;
//# sourceMappingURL=index.js.map