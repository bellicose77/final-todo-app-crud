import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
const UpdateTask = () => {
    const [singletask,setSingletask]=useState({})
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/task/${id}`)
        .then(res=>res.json())
        .then(data=>setSingletask(data))
    },[])
    return (
        <>
     <h2>this is update:{id}</h2>
     <p>{singletask.name}</p>
    <Form >
    <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={singletask.name} placeholder="Enter name" />
   </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </>
    );
};

export default UpdateTask;