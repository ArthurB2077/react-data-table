import { useState } from "react"

interface Props {
    setItemPerPage: Function,
    setDataFiltered: Function,
    setPage: Function,
    handleHiddenColumns: Function,
    data: Array<Array<string>>,
    headers: Array<string>,
    indexToSearch: number,
    itemPerPageRanges: Array<number>,
    searchLabel: string,
}

const DataTableToolbar: React.FC<Props> = ({ setItemPerPage, setDataFiltered, setPage, data, headers, indexToSearch, itemPerPageRanges, searchLabel, handleHiddenColumns }): JSX.Element => {
    const [selectOpen, setSelectOpen] = useState<boolean>(false)
    
    const onChangeItemPerPage: Function = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setItemPerPage(event.target.value)
        setPage(1)
    }

    const onInputSeach: Function = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const newData = data.filter(row => row[indexToSearch].toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
        setDataFiltered(newData)
        setPage(1)
    }

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
                        <p className="data-table-dropdown-label">Display</p>
                        <span className={`data-table-dropdown-icon`}>
                            <svg className={`data-table-dropdown-svg${selectOpen ? "__closed" : ""}`} viewBox="0 0 256 256">
                                <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093"/>
                            </svg>
                        </span>
                    </div>
                    <div className={`data-table-select-check-container${selectOpen ? "__closed" : ""}`}>
                    {headers && headers.map((item, index) => {
                            return(
                                <label htmlFor={item}>
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

export default DataTableToolbar