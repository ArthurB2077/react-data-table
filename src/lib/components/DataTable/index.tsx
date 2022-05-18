import DataTableHeader from "../DataTableHeader";
import DataTableBody from "../DataTableBody";
import "../../style.scss";

interface Props {
    headers: Array<string>,
    rows: Array<Array<string>>
};

const DataTable: React.FC<Props> = (props): JSX.Element => {

    return(
        <table className="data-table">
            <DataTableHeader content={props.headers} />
            <DataTableBody content={props.rows} />
        </table>
    );
};

export default DataTable;