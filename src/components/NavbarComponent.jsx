import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="nav-logo">
          Brijesh 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="my-nav" className="nav-toggle" />

        <Navbar.Collapse id="my-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home" className="nav-item">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-item">About</Nav.Link>
            <Nav.Link href="#skills" className="nav-item">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-item">Projects</Nav.Link>
            <Nav.Link href="#resume" className="nav-item">Resume</Nav.Link>

            <Nav.Link href="#contact" className="contact-btn">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
