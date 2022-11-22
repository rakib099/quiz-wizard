import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const style = {
        color: "#f46969"
    }

    return (
        <Navbar className='p-3 nav-bar' variant="light">
        <Container>
          <Navbar.Brand className='fw-bold' style={style} href="/">
          <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{''}
            uiz Wizard
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink style={style} className="nav-link fw-bold" to="/">Home</NavLink>
            <NavLink style={style} className="nav-link fw-bold" to="statistics">Statistics</NavLink>
            <NavLink style={style} className="nav-link fw-bold" to="blog">Blog</NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;