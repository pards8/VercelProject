import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" className="mb-4">
      <Container fluid>
        {/* Logo/Brand section */}
        <Navbar.Brand href="#">
          <img
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt="Brand Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Bootstrap
        </Navbar.Brand>

        {/* Mobile toggle button */}
        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        {/* Collapsible content */}
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" active>
              Home
            </Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>

            {/* Dropdown menu */}
            <NavDropdown title="Dropdown" id="navbarDropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" disabled>
              Disabled
            </Nav.Link>
          </Nav>

          {/* Search form */}
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;