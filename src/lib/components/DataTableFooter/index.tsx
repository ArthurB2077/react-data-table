import React from "react"

interface Props {
    numberOfPage: Array<number>,
    setPage: Function,
    currentPage: number,
}

const DataTableFooter: React.FC<Props> = ({ numberOfPage, setPage, currentPage }): JSX.Element => {
    return (
        <div className="data-table-footer">
            <button disabled={currentPage === numberOfPage[0]} className={`${currentPage === numberOfPage[0] ? "selected-button" : ""}`} onClick={() => setPage(numberOfPage[0])}>First</button>
            <button
                onClick={() => {
                    if (currentPage !== numberOfPage[0]) {
                        setPage(currentPage - 1)
                    }
                }}
                disabled={currentPage === numberOfPage[0]}
                className={`${currentPage === numberOfPage[0] ? "selected-button" : ""}`}
            >
                Prev
            </button>
            <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setPage(parseInt(event.target.value))} value={currentPage}>
                {numberOfPage.map((page, index) => {
                    return (<option key={`page-${index}`} value={page}>{page}</option>)
                })}
            </select>
            <button
                onClick={() => {
                    if (currentPage !== numberOfPage[numberOfPage.length - 1]) {
                        setPage(currentPage + 1)
                    }
                }}
                disabled={currentPage === numberOfPage[numberOfPage.length - 1]}
                className={`${currentPage === numberOfPage[numberOfPage.length - 1] ? "selected-button" : ""}`}
            >
                Next
            </button>
            <button disabled={currentPage === numberOfPage[numberOfPage.length - 1]} className={`${currentPage === numberOfPage[numberOfPage.length - 1] ? "selected-button" : ""}`} onClick={() => setPage(numberOfPage[numberOfPage.length - 1])}>Last</button>
        </div>
    )
}

export default DataTableFooter