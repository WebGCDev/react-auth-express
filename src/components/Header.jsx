import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import styles from '../css/modules/Header.module.css';

function Header() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <Navbar expand="lg" className={styles.header}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sport Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
          {isLoggedIn ? (
            <Button variant="outline-light" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
