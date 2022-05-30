import React from "react"

interface Props  {
    indexOfCell: number,
    contentOfCell: string,
}

const DataTableBodyCell: React.FC<Props> = ({ indexOfCell, contentOfCell }): JSX.Element => {

    return(
        <td className={`data-table-body-cell ${indexOfCell === 0 ? "data-table-body-cell-first" : ""}`}>{contentOfCell}</td>
    )
}

export default DataTableBodyCell