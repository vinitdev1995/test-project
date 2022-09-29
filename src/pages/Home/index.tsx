import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
    FirstTableColumn,
    SecondTableColumn,
    ThirdTableColumn,
    TableData,
} from '../../constants/table.constant';

function Home(): JSX.Element {
    return (
        <div className="TableContainer">
            <h1>Table 1</h1>
            <div className="ag-theme-alpine firstTableSection">
                <AgGridReact
                    rowData={TableData}
                    columnDefs={FirstTableColumn}
                />
            </div>

            <h1>Table 2</h1>
            <div className="ag-theme-alpine secondTableSection">
                <AgGridReact
                    rowData={TableData}
                    columnDefs={SecondTableColumn}
                />
            </div>

            <h1>Table 3</h1>
            <div className="ag-theme-alpine thirdTableSection">
                <AgGridReact
                    rowData={TableData}
                    columnDefs={ThirdTableColumn}
                />
            </div>
        </div>
    );
}

export default Home;
