interface Props {
    setItemPerPage: Function,
    setDataFiltered: Function,
    setPage: Function,
    data: Array<Array<string>>,
    indexToSearch: number,
    itemPerPageRanges: Array<number>,
    searchLabel: string,
}

const DataTableToolbar: React.FC<Props> = ({ setItemPerPage, setDataFiltered, setPage, data, indexToSearch, itemPerPageRanges, searchLabel }): JSX.Element => {

    const onChangeItemPerPage: Function = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setItemPerPage(event.target.value)
        setPage(1)
    }

    const onInputSeach: Function = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const newData = data.filter(row => row[indexToSearch].toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
        setDataFiltered(newData)
        setPage(1)
    }

    return(
        <div className="data-table-toolbar">
            <select className="data-table-toolbar-select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChangeItemPerPage(event)}>
                {itemPerPageRanges.map((itemPerPage: number, index: number) => {
                    return(
                        <option key={index} value={itemPerPage}>{itemPerPage}</option>
                    )
                })}
            </select>
            <div className="data-table-toolbar-input">
                <label>{searchLabel}</label>
                <input onInput={(event) => onInputSeach(event)}/>
            </div>
        </div>
    )
}

export default DataTableToolbar