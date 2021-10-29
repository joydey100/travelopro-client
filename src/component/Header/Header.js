import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" className="py-3" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fs-4">
          Travelopro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              LogIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
