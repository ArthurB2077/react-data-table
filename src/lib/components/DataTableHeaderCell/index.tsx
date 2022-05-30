import React, { useState } from "react"
import { isPropertySignature } from "typescript"

interface Props {
    indexOfTheCell: number,
    contentOfTheCell: string,
    changeSortOrder: Function,
    setSelectedColumnIndex: Function,
    selectedColumnIndex: number
}

const DataTableHeaderCell: React.FC<Props> = ({ indexOfTheCell, contentOfTheCell, changeSortOrder, setSelectedColumnIndex, selectedColumnIndex }): JSX.Element => {
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
                    setSelectedColumnIndex(parseInt(index))
                }
            }
        }
    }

    return(
        <th id={`${indexOfTheCell}`} className={`${selectedColumnIndex === indexOfTheCell ? "data-table-header-cell__selected" : "data-table-header-cell "}`} scope="col" key={`header-${indexOfTheCell}`} onClick={(e) => onSortByHeader(e)}>
            <div className="data-table-header-cell-content">
                <div className="data-table-header-cell-text">{contentOfTheCell}</div>
                {selectedColumnIndex === indexOfTheCell ? 
                    (
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="#bababa">
                            <path d="M18.873,11.021H5.127a2.126,2.126,0,0,1-1.568-3.56L10.046.872a2.669,2.669,0,0,1,3.939.034l6.431,6.528a2.126,2.126,0,0,1-1.543,3.587ZM12,24.011a2.667,2.667,0,0,1-1.985-.887L3.584,16.6a2.125,2.125,0,0,1,1.543-3.586H18.873a2.125,2.125,0,0,1,1.568,3.558l-6.487,6.589A2.641,2.641,0,0,1,12,24.011Z"/>
                        </svg>
                    )
                    :
                    (
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="#bababa">
                            <path d="M18.873,11.021H5.127a2.126,2.126,0,0,1-1.568-3.56L10.046.872a2.669,2.669,0,0,1,3.939.034l6.431,6.528a2.126,2.126,0,0,1-1.543,3.587ZM5.011,8.837a.115.115,0,0,0,0,.109.111.111,0,0,0,.114.075H18.873a.111.111,0,0,0,.114-.075.109.109,0,0,0-.022-.135L12.528,2.276A.7.7,0,0,0,12,2.021a.664.664,0,0,0-.5.221L5.01,8.838ZM12,24.011a2.667,2.667,0,0,1-1.985-.887L3.584,16.6a2.125,2.125,0,0,1,1.543-3.586H18.873a2.125,2.125,0,0,1,1.568,3.558l-6.487,6.589A2.641,2.641,0,0,1,12,24.011Zm-6.873-9a.125.125,0,0,0-.092.209l6.437,6.534a.7.7,0,0,0,.528.257.665.665,0,0,0,.5-.223l6.493-6.6h0a.112.112,0,0,0,0-.108.111.111,0,0,0-.114-.074Z"/>
                        </svg>                    
                    )
                }
            </div>
        </th>
    )
}

export default DataTableHeaderCell