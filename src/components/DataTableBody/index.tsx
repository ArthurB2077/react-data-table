import React from "react"
import { DataTableBodyCell } from "../DataTableBodyCell"

interface HiddenColumns {
    value: string;
    index: number;
}

interface DataTableBodyProps {
    content: Array<Array<string>>,
    selectedColumnIndex: number,
    hiddenColumns: Array<HiddenColumns>
}

export const DataTableBody: React.FC<DataTableBodyProps> = ({
    content,
    hiddenColumns,
    selectedColumnIndex,
}): JSX.Element => {
    return (
        <tbody className="data-table-body">
            {
                content.map((item, index) => {
                    return (
                        <tr key={`row-${index}`} className="data-table-row">
                            {item.map((itemChild, indexChild) => {
                                if(!hiddenColumns.map(hc => hc.index).includes(indexChild)) {
                                    return (
                                        <DataTableBodyCell 
                                            key={`cell-${indexChild}`} 
                                            contentOfCell={itemChild} 
                                            indexOfCell={indexChild} 
                                            selectedColumnIndex={selectedColumnIndex} 
                                        />
                                    )
                                } else {
                                    return null
                                }
                            })}
                        </tr>
                    )
                })
            }
        </tbody>
    )
}