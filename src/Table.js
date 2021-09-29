import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';

const columns = [
  { field: 'id', headerName: 'ID', width: 300 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 250,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 250,
    editable: true,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 250,
    editable: true,
  },
  {
    field: 'ftc',
    headerName: 'First time contributor ? ',
    width: 200,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: uuidv4(), lastName: 'Adhikari', firstName: 'Andrew',country: 'United States', ftc: 'no' },
  { id: uuidv4(), lastName: 'Baidya', firstName: 'Josep',country: 'United States', ftc: 'yes' },
  { id: uuidv4(), lastName: 'World', firstName: 'Hello',country: 'United States', ftc: 'yes' },
  { id: uuidv4(), lastName: 'World-2', firstName: 'Hello-2',country: 'United States', ftc: 'yes' }
  
];

export const DataGridDemo=()=> {
  return (
   <div className = "centered"> 
         <div style={{ height: 800 , width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
   </div>
  
  );
}
