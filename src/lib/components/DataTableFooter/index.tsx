import React from "react"

interface Props {
    numberOfPage: Array<number>,
    setPage: Function
}

const DataTableFooter: React.FC<Props> = ({ numberOfPage, setPage }): JSX.Element => {

    return(
        <div>
            {numberOfPage.map((page, index) => {
                return (<button key={`page-${index}`} onClick={ () => setPage(page) }>{page}</button>)
            })}
        </div>
    )
}

export default DataTableFooter