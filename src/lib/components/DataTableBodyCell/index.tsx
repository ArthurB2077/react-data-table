import React from "react"
import { DataTableBodyCellProps } from "../../types"

const DataTableBodyCell: React.FC<DataTableBodyCellProps> = ({
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

export default DataTableBodyCell