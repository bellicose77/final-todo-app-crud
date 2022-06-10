import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
const UpdateTask = () => {
    const [singletask,setSingletask]=useState({name:'',email:'',password:''})
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/task/${id}`)
        .then(res=>res.json())
        .then(data=>setSingletask(data))
    },[]);
    const handleName = e =>{
        const updateName = e.target.value;
        const username={...singletask}
        username.name=updateName;
        setSingletask(username);
    }
    const handleEmail = e =>{
           const updateEmail = e.target.value;
           const useremail = {...singletask}
           useremail.email=updateEmail;
           setSingletask(useremail);
    }
    const handlePassword = e =>{
        const updatepassword = e.target.value;
        const useremail = {...singletask}
        useremail.password = updatepassword;
        setSingletask(useremail);

    }
    const handleUpdateSubmit = e =>{
        
        fetch(`http://localhost:5000/update/${id}`,{
            
        method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(singletask)

        })
        e.preventDefault();
    }
    return (
        <>
     <h2>this is update:{id}</h2>
     <p>{singletask.name}</p>
    <Form onSubmit={handleUpdateSubmit}>
    <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" onChange={handleName} value={singletask.name} placeholder="Enter name" />
   </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" onChange={handleEmail} value={singletask.email} placeholder="Enter email" />
   </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={handlePassword} value={singletask.password} placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </>
    );
};

export default UpdateTask;