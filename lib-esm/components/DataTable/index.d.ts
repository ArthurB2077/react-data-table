import React from "react";
import "../../assets/style/data-table.css";
interface DataTableProps {
    headers: Array<string>;
    rows: Array<Array<string>>;
    itemPerPageRanges: Array<number>;
    labels: {
        search: string;
        display: string;
        export: string;
        first: string;
        previous: string;
        next: string;
        last: string;
    };
    className?: string;
    theme: "light" | "dark";
}
export declare const DataTable: React.FC<DataTableProps>;
export {};
