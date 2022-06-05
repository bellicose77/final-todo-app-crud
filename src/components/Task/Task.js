import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Task = () => {
     const [user,setUser]=useState("");
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");

     const handleName = e =>{
         const Name = e.target.value;
         setUser(Name);
         console.log(user);
     }

     const handleEmail = e =>{
         const Email = e.target.value;
         setEmail(Email);
         console.log(Email);
     };
     const handlePassword= e =>{
         const Password = e.target.value;
         setPassword(Password);
         console.log(password);
     }
    const handleSubmit = e =>{
        e.preventDefault();
        const userData = {
            name:user,
            email:email,
            password:password

        }
       
        console.log(userData);
    }
    return (
        <div>
            <h2>Add Your task:</h2>
    <Form onSubmit={handleSubmit}>
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
        </div>
    );
};

export default Task;