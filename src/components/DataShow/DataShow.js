import React from 'react';
import { Button } from 'react-bootstrap';

const DataShow = (props) => {
    const {name,email,password} = props.task;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td><Button>X</Button><Button>Update</Button></td>
            </tr>
            
        </>
    );
};

export default DataShow;