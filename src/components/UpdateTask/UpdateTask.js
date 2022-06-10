import React from 'react';
import { Form } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
const UpdateTask = () => {
    const {id} = useParams();
    return (
        <>
            <h2>this is update:{id}</h2>
    <Form >
    <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" onChange={handleName} placeholder="Enter name" />
   </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" onChange={handleEmail} placeholder="Enter email" />
   </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={handlePassword} placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </>
    );
};

export default UpdateTask;