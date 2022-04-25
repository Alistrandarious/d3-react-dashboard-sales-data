import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'

function Header() {
  return (
    <header>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Primer Visualization Project</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/TrendsOverTime">Trends over time</Nav.Link>
              <Nav.Link href="/CountriesAndRegions">Countries & Regions</Nav.Link>
              <Nav.Link href="/ResponseTime">Response Time</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </>
    </header>
  );
}

export default Header;
