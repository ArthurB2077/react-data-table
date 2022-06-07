declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'

export interface DataTableProps {
    headers: Array<string>,
    rows: Array<Array<string>>,
    itemPerPageRanges: Array<number>,
    searchLabel: string,
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