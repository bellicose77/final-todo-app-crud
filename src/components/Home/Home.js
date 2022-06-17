import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DataShow from '../DataShow/DataShow';

const Home = () => {
    const [tasks,setTasks] = useState([]);

    useEffect(()=>{
        fetch('https://arcane-wave-03801.herokuapp.com/tasks')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[]);
    const handleDelete=(id)=>{
      console.log(id);
      fetch(`https://arcane-wave-03801.herokuapp.com/task/${id}`,{
          method:'DELETE'
          
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount)
        {
          alert("deleted successfully");
          const lefttask=tasks.filter(task=>task._id!==id)
          setTasks(lefttask);
        }
      })
  }


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
          tasks.map(task=><DataShow key={task._id} task={task} handleDelete={handleDelete}></DataShow>)
      }
     
   
    
  </tbody>
</Table>
        </div>
    );
};

export default Home;