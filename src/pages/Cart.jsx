import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const cartItems = [
  {
    id: 1,
    code: 'CCBE',
    price: 135,
    image: '/asset/chaochicharon.jpg'
  },
  {
    id: 2,
    code: 'CSIE',
    price: 114,
    image: '/asset/chaosisig.jpg'
  },
  {
    id: 3,
    code: 'CHE',
    price: 135,
    image: '/asset/chaoshanghai.jpg'
  }
];

const Cart = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  

  return (
    <Container fluid className="p-3" style={{ backgroundColor: '#F1C75B', minHeight: '100vh' }}>
      {/* Back & Stepper */}
      <div className="d-flex align-items-center mb-3">
        <Button variant="link"  className="p-0 me-2 fw-bold fs-4" style={{ color: 'black' }}>&larr;</Button>
        <h3 className="mb-0 fw-bold">Menu</h3>
      </div>

      <div className="d-flex justify-content-center mb-3">
        Cart
      </div>

      {/* Cart Items */}
      <div className="bg-white rounded-4 p-3 mb-4 shadow-sm">
        {cartItems.map((item) => (
          <Row key={item.id} className="align-items-center mb-3">
            <Col xs={3}>
              <img src={item.image} alt={item.code} className="img-fluid rounded" />
            </Col>
            <Col xs={3} className="fw-bold">{item.code}</Col>
            <Col xs={4} className="d-flex align-items-center">
              <Button variant="outline-dark" size="sm" className="me-1"><FaMinus /></Button>
              <span className="mx-1">1</span>
              <Button variant="outline-dark" size="sm" className="ms-1"><FaPlus /></Button>
            </Col>
            <Col xs={2} className="text-end text-danger">
              <FaTrash />
            </Col>
            <Col xs={12} className="ps-3 text-muted">₱{item.price.toFixed(2)}</Col>
          </Row>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-light p-3 rounded-4 shadow-sm">
        <p className="mb-1">Please review your order</p>
        <h5 className="fw-bold">Subtotal: <span className="float-end">₱ {subtotal.toFixed(2)}</span></h5>
       <Link
  to="/receive"
  className="btn w-100 mt-3 fw-bold"
  style={{ backgroundColor: '#4F2D0D', border: 'none', color: 'white' }}
>
  Proceed to Check Out
</Link>
      </div>
    </Container>
  );
};

export default Cart;
