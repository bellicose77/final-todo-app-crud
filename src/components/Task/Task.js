import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Task = () => {
     const [user,setUser]=useState("");
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
     const navigate = useNavigate();
   
     const handleInput = e =>{

     }
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
        fetch('http://localhost:5000/task',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userData)

        }
       
        )
        .then(res =>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("data inserted successfully");
                setUser('');
                setEmail('');
                setPassword('');
            }
        })
       
       
        //console.log(userData);
    }

    return (
        <div>
            <h2>Add Your task:</h2>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control name = "name" type="text" onChange={handleInput} placeholder="Enter name" />
   </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" type="email" onChange={handleInput} placeholder="Enter email" />
   </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" onChange={handleInput} placeholder="Password" />
    </Form.Group>
    <Button  variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Task;