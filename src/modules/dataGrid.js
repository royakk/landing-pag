import * as React from 'react';

import { DataGridPro } from '@mui/x-data-grid-pro';


export default function DataGridProDemo(props) {

console.log(props.style1)
  return (
    <div id='datagrid' style={props.style1}>
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
