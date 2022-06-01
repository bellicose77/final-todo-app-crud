import React from 'react';
import { Button, Col, Row } from "react-bootstrap";

const Navbar = () => {
    return (
        <>
        <Row className="mx-0">
  <Button as={Col} variant="primary">Button #1</Button>
  <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
  <Button as={Col} variant="success">Button #3</Button>
</Row>
       </>
    );
};

export default Navbar;