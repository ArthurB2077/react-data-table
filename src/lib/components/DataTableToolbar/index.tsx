interface Props {
    setItemPerPage: Function,
    setDataFiltered: Function,
    setPage: Function,
    data: Array<Array<string>>,
    indexToSearch: number,
}

const DataTableToolbar: React.FC<Props> = ({ setItemPerPage, setDataFiltered, setPage, data, indexToSearch }): JSX.Element => {

    const onChangeItemPerPage: Function = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setItemPerPage(event.target.value)
        setPage(1)
    }

    const onInputSeach: Function = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const newData = data.filter(row => row[indexToSearch].toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
        console.log("event.target.value", event.target.value)
        console.log("newData", newData)
        console.log("data", data)
        setDataFiltered(newData)
        setPage(1)
    }

    return(
        <>
            <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChangeItemPerPage(event)}>
                <option>5</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
            </select>
            <label>Recherche: </label>
            <input onInput={(event) => onInputSeach(event)}/>
        </>
    )
}

export default DataTableToolbar