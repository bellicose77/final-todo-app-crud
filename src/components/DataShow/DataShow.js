import React from 'react';
import { Button } from 'react-bootstrap';

const DataShow = ({name,password,email}) => {
    return (
        <>
            <tr>
                <td>name</td>
                <td>{email}</td>
                <td>{password}</td>
            </tr>
            
        </>
    );
};

export default DataShow;