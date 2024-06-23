// src/components/Header.jsx
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Header.css'; // Import the CSS file

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container className="justify-content-center">
      <Navbar.Brand href="#home" className="centered-brand">Recipes App</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
