import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      
      <Nav.Link as Link to="/add">Task</Nav.Link>
      <Nav.Link href="#features">Show task</Nav.Link>
      <Nav.Link href="#pricing">Info</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;