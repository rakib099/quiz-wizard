import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
          <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="statistics">Statistics</NavLink>
            <NavLink className="nav-link" to="blog">Blog</NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;