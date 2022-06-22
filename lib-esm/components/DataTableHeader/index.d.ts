import React from "react";
interface HiddenColumns {
    value: string;
    index: number;
}
interface DataTableHeaderProps {
    content: Array<string>;
    hiddenColumns: Array<HiddenColumns>;
    changeSortOrder: Function;
    setSelectedColumnIndex: Function;
    dataOrder: any;
    selectedColumnIndex: number;
    theme: "light" | "dark";
}
export declare const DataTableHeader: React.FC<DataTableHeaderProps>;
export {};
