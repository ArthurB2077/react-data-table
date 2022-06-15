import React from "react";
interface DataTableToolbarProps {
    setItemPerPage: Function;
    setDataFiltered: Function;
    setPage: Function;
    handleHiddenColumns: Function;
    data: Array<Array<string>>;
    headers: Array<string>;
    indexToSearch: number;
    itemPerPageRanges: Array<number>;
    searchLabel: string;
    displayLabel: string;
}
export declare const DataTableToolbar: React.FC<DataTableToolbarProps>;
export {};
