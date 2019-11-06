import React from 'react';
import { Nav, Navbar } from 'reactstrap';

const NavPage = (props) => {
  return (
    <Nav className="bg-info py-2">
      <Navbar className="pl-5">
        <a href="#" target="_blank" className="navbar navbar-brand">
          <h3>The Band</h3>
        </a>
      </Navbar>
    </Nav>
  );
};

export default NavPage;