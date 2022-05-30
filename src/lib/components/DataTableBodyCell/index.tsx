import React from "react"

interface Props  {
    indexOfCell: number,
    contentOfCell: string,
    selectedColumnIndex: number,
}

const DataTableBodyCell: React.FC<Props> = ({ indexOfCell, contentOfCell, selectedColumnIndex }): JSX.Element => {

    return(
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