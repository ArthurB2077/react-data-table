import React, { useEffect, useState } from "react"
import DataTableHeaderCell from "../DataTableHeaderCell"

interface Props {
    content: Array<string>,
    changeSortOrder: Function,
    setSelectedColumnIndex: Function,
    dataOrder: any,
    selectedColumnIndex: number
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
                            <DataTableHeaderCell key={`${item}-${index}`} indexOfTheCell={index} contentOfTheCell={item} changeSortOrder={setSortedData} setSelectedColumnIndex={props.setSelectedColumnIndex} selectedColumnIndex={props.selectedColumnIndex}/>
                        )
                    })
                }
            </tr>
        </thead>
    );
};

export default DataTableHeader;