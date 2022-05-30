import React from "react"
import DataTableBodyCell from "../DataTableBodyCell"

interface Props {
    content: Array<Array<string>>,
    selectedColumnIndex: number,
};

const DataTableBody: React.FC<Props> = (props): JSX.Element => {

    return(
        <tbody className="data-table-body">
                {
                    props.content.map((item, index) => {
                        return(
                            <tr key={`row-${index}`} className="data-table-row">
                                {
                                    item.map((itemChild, indexChild) => {
                                        return(
                                            <DataTableBodyCell key={`cell-${indexChild}`} contentOfCell={itemChild} indexOfCell={indexChild} selectedColumnIndex={props.selectedColumnIndex}/>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
        </tbody>
    );
};

export default DataTableBody;