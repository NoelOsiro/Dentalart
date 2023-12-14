// HeaderBar.tsx
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarHeader from './navbarHeader';
import OffcanvasHeader from './OffcanvasHeader';
import NavbarLinks from './NavbarLinks';
import Offcanvas from 'react-bootstrap/Offcanvas';

const HeaderBar: React.FC = () => (
  <Navbar expand={false} className="bg-body-tertiary mb-3">
    <Container fluid>
      <NavbarHeader id="false" title="Gulf Tree Implant Centre" />
      <Navbar.Offcanvas
        id="false"
        aria-labelledby="offcanvasNavbarLabel-expand-false"
        placement="end"
      >
        <OffcanvasHeader id="false" title="Gulf Tree Implant Centre" />
        <Offcanvas.Body>
          <NavbarLinks />
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
);

export default HeaderBar;
