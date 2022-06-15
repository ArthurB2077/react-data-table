import React from "react";
interface DataTableHeaderCellProps {
    indexOfTheCell: number;
    contentOfTheCell: string;
    changeSortOrder: Function;
    setSelectedColumnIndex: Function;
    selectedColumnIndex: number;
    theme: "light" | "dark";
}
export declare const DataTableHeaderCell: React.FC<DataTableHeaderCellProps>;
export {};
