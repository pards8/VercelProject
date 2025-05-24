 import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Recieve = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => setShowMenu(!showMenu);

  const orderData = [
    {
      orderNo: "#6969",
      address: "Camastilisan, Calaca",
      items: "1x Ube Turon & 3x Burger w/ Fries(BF)",
      time: "3:45 PM",
      phone: "0921-456-7890",
    },
    {
      orderNo: "#6969",
      address: "Brgy uno, Lian",
      items: "1x Ube Turon & 3x Burger w/ Fries(BF)",
      time: "3:45 PM",
      phone: "0921-456-7890",
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
          <strong>Messiah Cafe</strong>
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
        <Button style={{ backgroundColor: '#ffeb99', color: '#000' }}>
  ORDER TO DELIVER
</Button>


        <Button as={Link} to="/ongoing" variant="light">
  ONGOING DELIVERIES
</Button>
      </div>

      {/* Orders */}
      <Container className="py-3">
        {orderData.map((order, index) => (
          <Card key={index} className="mb-3 shadow-sm">
            <Card.Header className="bg-dark text-white text-center">
              ORDER TO DELIVER
            </Card.Header>
            <Card.Body className="bg-light">
              <p><strong>Order No.</strong> {order.orderNo}</p>
              <p><strong>📍 Address:</strong> {order.address}</p>
              <p><strong>📦 Items:</strong> {order.items}</p>
              <p><strong>⏰ Time:</strong> {order.time}</p>
              <p><strong>📞 Phone:</strong> {order.phone}</p>
              <div className="d-flex justify-content-around">
                <Button variant="danger" >
                  📍 Start Delivery
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Recieve;
