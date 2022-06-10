import React, { useState } from "react"
import { renderDownChevronSVG } from "../../assets/svgRender"
import { DataTableToolbarProps } from "../../types"

export const DataTableToolbar: React.FC<DataTableToolbarProps> = ({
    setItemPerPage,
    setDataFiltered,
    setPage,
    data,
    headers,
    indexToSearch,
    itemPerPageRanges,
    searchLabel,
    displayLabel,
    handleHiddenColumns
}): JSX.Element => {
    // State used to store if the display select is open or not
    const [selectOpen, setSelectOpen] = useState<boolean>(false)
    
    // Function used to set a new value for the item per page abd reset the current page to 1
    const onChangeItemPerPage: Function = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setItemPerPage(event.target.value)
        setPage(1)
    }

    // Function used to set a new value for the search input, filter the data and reset the current page to 1
    const onInputSeach: Function = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const newData = data.filter(row => row[indexToSearch].toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
        setDataFiltered(newData)
        setPage(1)
    }

    // Function used to select wich columns to hide
    const handleDisplayedColumns: Function = (event: React.ChangeEvent<HTMLInputElement>, index: number): void => {
        const columnToHide: {
            value: string;
            index: number;
        } = {
            value: event.target.value,
            index: index,
        }
        if(!event.target.checked) {
            handleHiddenColumns((state: any) => [...state, columnToHide])
        } else {
            handleHiddenColumns((state: any) => [...state].filter(item => item.value !== event.target.value))
        }
    }

    return (
        <div className="data-table-toolbar">
            <select className="data-table-toolbar-select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChangeItemPerPage(event)}>
                {itemPerPageRanges.map((itemPerPage: number, index: number) => {
                    return (
                        <option key={index} value={itemPerPage}>{itemPerPage}</option>
                    )
                })}
            </select>
            <div className="data-table-toolbar-input-container">
                <div className="data-table-toolbar-input-checkbox">
                    <div className="data-table-dropdown" onClick={() => setSelectOpen(!selectOpen)}>
                        <p className="data-table-dropdown-label">
                            {displayLabel}
                        </p>
                        <span className={`data-table-dropdown-icon`}>
                            {renderDownChevronSVG(`data-table-dropdown-svg${selectOpen ? "" : "__closed"}`)}
                        </span>
                    </div>
                    <div className={`data-table-select-check-container${selectOpen ? "" : "__closed"}`}>
                    {headers && headers.map((item, index) => {
                            return(
                                <label key={`${item}-${index}`} htmlFor={item}>
                                    <input type="checkbox" id={item} defaultChecked onChange={(e) => handleDisplayedColumns(e, index)} value={item}/>
                                    {item}
                                </label>
                            )
                        })}
                    </div>
                </div>
                <div className="data-table-toolbar-input">
                    <label>{searchLabel}</label>
                    <input onInput={(event) => onInputSeach(event)} />
                </div>
            </div>
        </div>
    )
}