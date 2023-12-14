// NavbarLinks.tsx
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarLinks: React.FC = () => (
  <Nav className="justify-content-end flex-grow-1 pe-3">
    <Nav.Link href="/home">Home</Nav.Link>
    <Nav.Link href="#action2">Check In</Nav.Link>
    <Nav.Link href="#action2">Patients</Nav.Link>
    <NavDropdown title="Account" id={`offcanvasNavbarDropdown-expand-false`}>
      <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
      <NavDropdown.Item href="#action4">Profile</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
    </NavDropdown>
  </Nav>
);

export default NavbarLinks;
