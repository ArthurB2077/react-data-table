interface Props {
    setItemPerPage: Function
}

const DataTableToolbar: React.FC<Props> = ({ setItemPerPage }): JSX.Element => {

    return(
        <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setItemPerPage(event.target.value)}>
            <option>5</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
        </select>
    )
}

export default DataTableToolbar