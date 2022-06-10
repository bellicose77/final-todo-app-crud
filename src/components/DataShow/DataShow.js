import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DataShow = ({task,handleDelete}) => {
    const {_id,name,email,password} = task;

    
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td><Button onClick={()=>handleDelete(_id)}>X</Button>
                <Link to='/update/:id'>Update</Link>
                </td>
            </tr>
            
        </>
    );
};

export default DataShow;