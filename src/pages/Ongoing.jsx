import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Ongoing = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => setShowMenu(!showMenu);

  const deliveries = [
    {
      name: "Alice Reyes",
      address: "102 Mango St., Brgy. Maligaya",
      items: "2x Chicken Wings & 1x Nachos (Large)",
      time: "4:15 PM",
      phone: "0917-555-1234",
      orderNo: "#4567",
    },
    {
      name: "Mark Santos",
      address: "45 Santol Ave., Brgy. Mabuhay",
      items: "1x Beef Wrap & 2x Milk Tea (Large)",
      time: "5:00 PM",
      phone: "0999-888-2222",
      orderNo: "#4568",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar bg="warning" expand={false} className="px-3 py-2">
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <span role="img" aria-label="bell" className="me-2">🔔</span>
          <img src="/asset/meslogo.png" width="30"
              height="30" alt="Logo" className="me-2" />
          <strong>essiah Cafe</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggle} />
        <Navbar.Offcanvas show={showMenu} onHide={handleToggle} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>want to logout?</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <Nav.Link as={Link} to="/delivery-login">Logout</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>

      {/* Tabs */}
      <div className="d-flex justify-content-around bg-warning py-2">
        <Button variant="light" as={Link} to="/delivery">ORDER TO DELIVER</Button>
        <Button style={{ backgroundColor: '#ffeb99', color: '#000' }}>
          ONGOING DELIVERIES
        </Button>
      </div>

      {/* Delivery Cards */}
      <Container className="py-3">
        {deliveries.map((delivery, index) => (
          <Card key={index} className="mb-3 shadow-sm">
            <Card.Header className="bg-dark text-white text-center">
              ONGOING DELIVERIES
            </Card.Header>
            <Card.Body className="bg-light">
              <p><strong>👤 Name:</strong> {delivery.name}</p>
              <p><strong>📍 Address:</strong> {delivery.address}</p>
              <p><strong>📦 Items:</strong> {delivery.items}</p>
              <p><strong>⏰ Time:</strong> {delivery.time}</p>
              <p><strong>📞 Phone:</strong> {delivery.phone}</p>
              <div className="d-flex justify-content-between align-items-center">
                <strong className="ms-1">Order No. {delivery.orderNo}</strong>
                <Button variant="secondary">
                  Marked as done
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Ongoing;
