import React from 'react'
import './style/Sec_3.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Sec_3() {
  return (
    <>
    <div className="nw-container">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand >SIGN UP TO NEWSLATTER</Navbar.Brand>
       
          
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Send</Button>
          </Form>
       
      </Container>
    </Navbar>
    </div>
    </>
  )
}
