declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'

// Pagination hook
export interface PaginationReturn {
    numberOfPage: Array<string>,
    dataBatchPerPage: Array<string>,
}

// DataTable component
export interface DataTableProps {
    headers: Array<string>,
    rows: Array<Array<string>>,
    itemPerPageRanges: Array<number>,
    labels: {
        search: string,
        display: string,
        export: string,
        first: string,
        previous: string,
        next: string,
        last: string,
    },
    className?: string,
    theme: "light" | "dark",
}

export interface SortData {
    index: number,
    order: "asc" | "desc"
}

export interface HiddenColumns {
    value: string;
    index: number;
}

export interface HiddenColumns {
    value: string;
    index: number;
}

export interface DataTableBodyProps {
    content: Array<Array<string>>,
    selectedColumnIndex: number,
    hiddenColumns: Array<HiddenColumns>
}

export interface DataTableBodyCellProps {
    indexOfCell: number,
    contentOfCell: string,
    selectedColumnIndex: number,
}

interface DataTableFooterProps {
    numberOfPage: Array<number>,
    setPage: Function,
    currentPage: number,
    headers: Array<string>,
    rows: Array<Array<string>>,
    firstLabel: string,
    previousLabel: string,
    nextLabel: string,
    lastLabel: string,
    exportLabel: string,
}

interface DataTableHeaderProps {
    content: Array<string>,
    hiddenColumns: Array<HiddenColumns>,
    changeSortOrder: Function,
    setSelectedColumnIndex: Function,
    dataOrder: any,
    selectedColumnIndex: number,
    theme: "light" | "dark",
}

interface DataTableHeaderCellProps {
    indexOfTheCell: number,
    contentOfTheCell: string,
    changeSortOrder: Function,
    setSelectedColumnIndex: Function,
    selectedColumnIndex: number,
    theme: "light" | "dark",
}

interface DataTableToolbarProps {
    setItemPerPage: Function,
    setDataFiltered: Function,
    setPage: Function,
    handleHiddenColumns: Function,
    data: Array<Array<string>>,
    headers: Array<string>,
    indexToSearch: number,
    itemPerPageRanges: Array<number>,
    searchLabel: string,
    displayLabel: string,
}