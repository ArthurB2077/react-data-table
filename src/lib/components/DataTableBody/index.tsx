interface Props {
    content: Array<Array<string>>
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
                                            <td key={`cell-${indexChild}`} className="data-table-body-cell">{itemChild}</td>
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