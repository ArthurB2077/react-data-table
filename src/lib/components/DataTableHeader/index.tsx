import React, { useEffect, useState } from "react"
import DataTableHeaderCell from "../DataTableHeaderCell"
import { DataTableHeaderProps, SortData } from "../../types"

const DataTableHeader: React.FC<DataTableHeaderProps> = ({
    dataOrder,
    changeSortOrder,
    content,
    setSelectedColumnIndex,
    selectedColumnIndex,
    theme,
    hiddenColumns
}): JSX.Element => {
    // Index and order parameter of the column to sort
    const [sortParameter, setSortParameter] = useState<SortData>(dataOrder)

    useEffect(() => {
        changeSortOrder(sortParameter)
    }, [sortParameter])

    return (
        <thead className="data-table-header">
            <tr className="data-table-row">
                {content.map((item, index) => {
                    if(!hiddenColumns.map(hc => hc.value).includes(item))
                        return (
                            <DataTableHeaderCell
                                key={`${item}-${index}`}
                                indexOfTheCell={index}
                                contentOfTheCell={item}
                                changeSortOrder={setSortParameter}
                                setSelectedColumnIndex={setSelectedColumnIndex}
                                selectedColumnIndex={selectedColumnIndex}
                                theme={theme}
                            />
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default DataTableHeader