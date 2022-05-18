interface Props {
    content: Array<Array<string>>
};

const DataTableBody: React.FC<Props> = (props): JSX.Element => {

    return(
        <tbody className="data-table-body">
                {
                    props.content.map(item => {
                        return(
                            <tr className="data-table-row">
                                {
                                    item.map(itemChild => {
                                        return(
                                            <td className="data-table-body-cell">{itemChild}</td>
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