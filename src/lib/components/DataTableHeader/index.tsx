import React from "react"
import ActiveSort from "../../icons/ActiveSort.png"
import InactiveSort from "../../icons/InactiveSort.png"

interface Props {
    content: Array<string>
};

const DataTableHeader: React.FC<Props> = (props): JSX.Element => {
    return(
        <thead className="data-table-header">
            <tr className="data-table-row">
                {
                    props.content.map((item, index) => {
                        return(
                            <>
                                <th className="data-table-header-cell" scope="col" key={`header-${index}`}>
                                    {item}
                                    <img src={ActiveSort} alt={"Sort"} style={{width: "15px", height: "15px"}}/>
                                </th>
                            </>
                        )
                    })
                }
            </tr>
        </thead>
    );
};

export default DataTableHeader;