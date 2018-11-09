import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const Header = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Data finder</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">
        Home
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
