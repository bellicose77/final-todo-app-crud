import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


const Header = () => {
    return (
        <div>
    <Navbar bg="dark" variant="dark">
    <Container>
      
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      
      <Nav.Link as={Link}  to="/home" >Home</Nav.Link>
      <Nav.Link as={Link}  to="/task">Task</Nav.Link>
      <Nav.Link as={Link}  to="/update">Update</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;