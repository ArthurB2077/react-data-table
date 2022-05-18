import React, { useEffect } from "react"
import { JsxEmit } from "typescript"

interface Props {
    pageRange: Array<string | number>, 
    setPage: Function, 
    page: any, 
    itemPerPage: any
}

const DataTableFooter: React.FC<Props> = ({ pageRange, setPage, page, itemPerPage }): JSX.Element => {
    useEffect(() => {
        if(itemPerPage.length < 1 && page !== 1) {
            setPage(page -1)
        }
    }, [itemPerPage, page, setPage])

    return(
        <div>
            {pageRange.map((el, index) => (
                <button
                    key={index}
                    // className={`${styles.button} ${
                    // page === el ? styles.activeButton : styles.inactiveButton
                    // }`}
                    onClick={() => setPage(el)}
                >
                    {el}
                </button>
            ))}
        </div>
    )
}

export default DataTableFooter