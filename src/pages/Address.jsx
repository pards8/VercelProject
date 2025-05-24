import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const Address = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3b662" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src="/asset/meslogo.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
              style={{ marginRight: "8px" }}
            />
            Messiah Cafe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/customer">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/address">Address</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Address Form */}
      <Container className="mt-4 mb-5" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Address</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBarangay">
            <Form.Label>Barangay</Form.Label>
            <Form.Control type="text" placeholder="" className="shadow-sm" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formStreet">
            <Form.Label>Street</Form.Label>
            <Form.Control type="text" placeholder="" className="shadow-sm" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formHouseNo">
            <Form.Label>House No.</Form.Label>
            <Form.Control type="text" placeholder="" className="shadow-sm" />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="success" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Address;
