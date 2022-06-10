import React, { useState } from "react"
import { DataTableHeaderCellProps } from "../../types"
import { renderActiveSortSVG, renderInactiveSortSVG } from "../../assets/svgRender"

export const DataTableHeaderCell: React.FC<DataTableHeaderCellProps> = ({
    indexOfTheCell,
    contentOfTheCell,
    changeSortOrder,
    setSelectedColumnIndex,
    selectedColumnIndex,
    theme
}): JSX.Element => {
    const [sortOrder, setSortOrder] = useState<string>("asc")

    // Function that change the sort order and the selected column when clicking on the header cell
    const onSortByHeader: Function = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (sortOrder === "asc") {
            setSortOrder("desc")
        } else {
            setSortOrder("asc")
        }

        if (event) {
            if (event.currentTarget) {
                if (event.currentTarget.id) {
                    const index = event.currentTarget.id
                    const order = sortOrder
                    changeSortOrder({
                        index: parseInt(index),
                        order: order,
                    })
                    setSelectedColumnIndex(parseInt(index))
                }
            }
        }
    }

    return (
        <th 
            id={`${indexOfTheCell}`}
            className={`${selectedColumnIndex === indexOfTheCell ? "data-table-header-cell__selected" : "data-table-header-cell "}`}
            scope="col"
            key={`header-${indexOfTheCell}`}
            onClick={(e) => onSortByHeader(e)}
            style={{display: ""}}
        >
            <div className="data-table-header-cell-content">
                <div className="data-table-header-cell-text">
                    {contentOfTheCell}
                </div>
                {selectedColumnIndex === indexOfTheCell ?
                    (
                        renderActiveSortSVG("", `${theme === "dark" ? "#bababa" : "#000000"}`)
                    )
                    :
                    (
                        renderInactiveSortSVG("", `${theme === "dark" ? "#bababa" : "#000000"}`)
                    )
                }
            </div>
        </th>
    )
}