import React, { useState } from "react"
import ActiveSort from "../../icons/ActiveSort.png"
import InactiveSort from "../../icons/InactiveSort.png"

interface Props {
    indexOfTheCell: number,
    contentOfTheCell: string,
    changeSortOrder: Function,
}

const DataTableHeaderCell: React.FC<Props> = ({ indexOfTheCell, contentOfTheCell, changeSortOrder }): JSX.Element => {
    const [sortOrder, setSortOrder] = useState<string>("asc")

    const onSortByHeader: Function = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (sortOrder === "asc") {
            setSortOrder("desc")
        } else {
            setSortOrder("asc")
        }

        if(event) {
            if(event.currentTarget) {
                if(event.currentTarget.id) {
                    const index = event.currentTarget.id
                    const order = sortOrder
                    changeSortOrder({
                        index: parseInt(index),
                        order: order,
                    })
                }
            }
        }
    }

    return(
        <>
            <th id={`${indexOfTheCell}`} className="data-table-header-cell" scope="col" key={`header-${indexOfTheCell}`} onClick={(e) => onSortByHeader(e)}>
                {contentOfTheCell}
                {sortOrder === "asc" ? 
                    (
                        <img src={ActiveSort} alt={"Sort ascendant"} style={{width: "15px", height: "15px", pointerEvents: "none"}}/>
                    )
                    :
                    (
                        <img src={InactiveSort} alt={"Sort descendent"} style={{width: "15px", height: "15px", pointerEvents: "none"}}/>
                    )
                }
            </th>
        </>
    )
}

export default DataTableHeaderCell