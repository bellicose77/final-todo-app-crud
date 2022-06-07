import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Home = () => {
    const [tasks,setTasks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[])


    return (
        <div>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
     
      <th>First Name</th>
      <th>Email </th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      {
           tasks.map(task=>{
            <td>{task.name}</td>
            <td>{task.email}</td>
           }
          
           )
      }
      </tr>
     
   
    
  </tbody>
</Table>
        </div>
    );
};

export default Home;