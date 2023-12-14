// NavbarHeader.tsx
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';

interface NavbarHeaderProps {
  id: string;
  title: string;
}

const NavbarHeader: React.FC<NavbarHeaderProps> = ({ id, title }) => (
  <>
    <Navbar.Brand href="#">{title}</Navbar.Brand>
    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${id}`} />
  </>
);

export default NavbarHeader;
