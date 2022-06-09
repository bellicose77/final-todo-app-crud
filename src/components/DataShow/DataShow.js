import React from 'react';
import { Button } from 'react-bootstrap';

const DataShow = (props) => {
    const {_id,name,email,password} = props.task;

    const handleDelete=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/task/${id}`,{
            method:'DELETE'
            
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
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