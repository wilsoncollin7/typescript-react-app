import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
// styling
import './header.css'

const Header: React.FC = () => {
  return (
    <Navbar className="navBar shadow-lg">
      <Navbar.Brand>
        <NavLink to="/">Post</NavLink>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
