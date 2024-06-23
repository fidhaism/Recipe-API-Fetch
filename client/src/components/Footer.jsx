import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => (
  <Navbar bg="dark" variant="dark" fixed="bottom">
    <Container>
      <Navbar.Text className="text-center w-100 text-light">
        &copy; 2024 Recipes App
      </Navbar.Text>
    </Container>
  </Navbar>
);

export default Footer;
