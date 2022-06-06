import React, { useEffect, useState } from "react"
import DataTableHeaderCell from "../DataTableHeaderCell"

interface HiddenColumns {
    value: string;
    index: number;
} 

interface Props {
    content: Array<string>,
    hiddenColumns: Array<HiddenColumns>,
    changeSortOrder: Function,
    setSelectedColumnIndex: Function,
    dataOrder: any,
    selectedColumnIndex: number,
    theme: "light" | "dark",
};

const DataTableHeader: React.FC<Props> = ({ dataOrder, changeSortOrder, content, setSelectedColumnIndex, selectedColumnIndex, theme, hiddenColumns }): JSX.Element => {
    const [sortedData, setSortedData] = useState<any>(dataOrder)

    useEffect(() => {
        changeSortOrder(sortedData)
    }, [sortedData])

    return (
        <thead className="data-table-header">
            <tr className="data-table-row">
                {
                    content.map((item, index) => {
                        if(!hiddenColumns.map(hc => hc.value).includes(item))
                            return (
                                <DataTableHeaderCell
                                    key={`${item}-${index}`}
                                    indexOfTheCell={index}
                                    contentOfTheCell={item}
                                    changeSortOrder={setSortedData}
                                    setSelectedColumnIndex={setSelectedColumnIndex}
                                    selectedColumnIndex={selectedColumnIndex}
                                    theme={theme}
                                />
                            )
                    })
                }
            </tr>
        </thead>
    );
};

export default DataTableHeader;