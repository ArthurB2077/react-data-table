import React from "react";
interface DataTableFooterProps {
    numberOfPage: Array<number>;
    setPage: Function;
    currentPage: number;
    headers: Array<string>;
    rows: Array<Array<string>>;
    firstLabel: string;
    previousLabel: string;
    nextLabel: string;
    lastLabel: string;
    exportLabel: string;
}
export declare const DataTableFooter: React.FC<DataTableFooterProps>;
export {};
