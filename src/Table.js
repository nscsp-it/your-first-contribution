import React from 'react'
import MaterialTable from 'material-table'

export const Table=()=>{
    const data = [
        {name: 'Ramesh', age:12},
        {name: 'Harry', age:13},
        {name: 'Kevin', age:15},
        {name: 'Smith', age:15},
    ]

    const columns=[
        {
            title: 'Name', field: 'name'
        },
        {
            title: 'Age' , field: 'age'
        }
    ]
    return <div>
        <MaterialTable title="Material Table"
        
        data = {data}
        columns={columns}
        options={
            {search:false,
            paging: false
            }
        }

        />
    </div>
}