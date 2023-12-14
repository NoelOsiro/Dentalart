import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

interface OffcanvasHeaderProps {
  id: string;
  title: string;
}

const OffcanvasHeader: React.FC<OffcanvasHeaderProps> = ({ id, title }) => (
  <Offcanvas.Header closeButton>
    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${id}`}>{title}</Offcanvas.Title>
  </Offcanvas.Header>
);

export default OffcanvasHeader;
