import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <header>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Primer Visualization Project</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/AnalysisOverview">Analysis Overview</Nav.Link>
              <Nav.Link href="/TrendsOverTime">Trends Over Time</Nav.Link>
              <Nav.Link href="/CountriesAndRegions">
                Countries & Regions
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </header>
  );
}

export default Header;
