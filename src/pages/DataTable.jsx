import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const DataTable = ({tcolumn, tdata, title, addNew}) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-3 text-green-900  border-green-700">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="border border-green-700 px-1 py-.5 rounded-sm cursor-pointer">View</div>
            </Link>
            <div
              className="border border-red-700 text-red-900 px-1 py-.5 rounded-sm cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 450, width: '100%' }}>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='text-xl font-bold text-gray-600 mb-3'>{title}s</h1>
        {addNew !== 'none' && <Link to={`/add-new-${addNew}`}>
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />} >
            Add New {title}
          </Button>
        </Link>}
      </div>
      <DataGrid
        rows={tdata}
        columns={tcolumn.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable