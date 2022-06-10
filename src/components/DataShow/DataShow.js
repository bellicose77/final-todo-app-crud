import React from 'react';
import { Button } from 'react-bootstrap';

const DataShow = ({task,handleDelete}) => {
    const {_id,name,email,password} = task;

    
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td><Button onClick={()=>handleDelete(_id)}>X</Button><Button>Update</Button></td>
            </tr>
            
        </>
    );
};

export default DataShow;