import * as React from 'react';

import { DataGridPro } from '@mui/x-data-grid-pro';


export default function DataGridProDemo(props) {


  return (
    <div id='datagrid' style={{display: "block",
    margin: "auto",
    position:" relative",height: '20em', width: '65%' }}>
      <DataGridPro
        {...props}
        loading={props.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
