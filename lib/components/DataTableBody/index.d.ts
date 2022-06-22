import React from "react";
interface HiddenColumns {
    value: string;
    index: number;
}
interface DataTableBodyProps {
    content: Array<Array<string>>;
    selectedColumnIndex: number;
    hiddenColumns: Array<HiddenColumns>;
}
export declare const DataTableBody: React.FC<DataTableBodyProps>;
export {};
