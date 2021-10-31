import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  // Get User
  const { user, logOut } = useAuth();

  return (
    <Navbar expand="lg" bg="light" className="py-3" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fs-4 text-blue fw-bold">
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

            {user.email && (
              <Nav.Link as={NavLink} to="/manage-orders">
                Manage Orders
              </Nav.Link>
            )}
            {user.email && (
              <Nav.Link as={NavLink} to="/myorder">
                My Orders
              </Nav.Link>
            )}
            {user.email && (
              <Nav.Link as={NavLink} to="/addevent">
                Add New Package
              </Nav.Link>
            )}
            {user.email && (
              <Nav.Link as={NavLink} to="#">
                Sign in as{" "}
                <span className="text-orange fw-bold">
                  {" "}
                  {user.displayName}{" "}
                </span>
              </Nav.Link>
            )}
            {user.email ? (
              <Nav.Link
                as={NavLink}
                to="/login"
                className="btn btn-danger text-white"
                onClick={logOut}
              >
                Log Out
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                LogIn
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
