interface Props {
    content: Array<string>
};

const DataTableHeader: React.FC<Props> = (props): JSX.Element => {

    return(
        <thead className="data-table-header">
            <tr className="data-table-row">
                {
                    props.content.map((item, index) => <th className="data-table-header-cell" scope="col" key={`header-${index}`}>{item}</th>)
                }
            </tr>
        </thead>
    );
};

export default DataTableHeader;