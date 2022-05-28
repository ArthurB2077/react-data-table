import React, { useEffect, useState } from "react"
import DataTableHeaderCell from "../DataTableHeaderCell"

interface Props {
    content: Array<string>,
    changeSortOrder: Function,
    dataOrder: any,
};

const DataTableHeader: React.FC<Props> = (props): JSX.Element => {
    const [sortedData, setSortedData] = useState<any>(props.dataOrder)

    useEffect(() => {
        props.changeSortOrder(sortedData)
    }, [sortedData])

    return(
        <thead className="data-table-header">
            <tr className="data-table-row">
                {
                    props.content.map((item, index) => {
                        return(
                            <DataTableHeaderCell key={`${item}-${index}`} indexOfTheCell={index} contentOfTheCell={item} changeSortOrder={setSortedData}/>
                        )
                    })
                }
            </tr>
        </thead>
    );
};

export default DataTableHeader;