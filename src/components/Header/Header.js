import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Task</Nav.Link>
      <Nav.Link href="#features">Show task</Nav.Link>
      <Nav.Link href="#pricing">Info</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;