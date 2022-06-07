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
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          tasks.map(task=><tr><td>{task.name}</td>
              <td>{task.email}</td>
              <td>{task.password}</td>
          </tr>)
      }
     
   
    
  </tbody>
</Table>
        </div>
    );
};

export default Home;