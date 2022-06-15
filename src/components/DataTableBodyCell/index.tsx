import React from "react"

interface DataTableBodyCellProps {
    indexOfCell: number,
    contentOfCell: string,
    selectedColumnIndex: number,
}


export const DataTableBodyCell: React.FC<DataTableBodyCellProps> = ({
    indexOfCell,
    contentOfCell,
    selectedColumnIndex
}): JSX.Element => {
    return (
        <>
            {indexOfCell === selectedColumnIndex ?
                (
                    <td className="data-table-body-cell__selected">{contentOfCell}</td>
                )
                :
                (
                    <td className="data-table-body-cell">{contentOfCell}</td>
                )
            }
        </>
    )
}