import React from 'react'
import MaterialTable from 'material-table'

export const Table=()=>{
    const data = [
        {name: 'Andrew', fc: 'yes'},
        {name: 'Johny', fc: 'no'}
        
    ]

    const columns=[
        {
            title: 'Name', field: 'name'
        },
        {
            title: 'First contirbution ? ' , field: 'fc'
        }
    ]
    return <div>
        <MaterialTable title=""
        
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