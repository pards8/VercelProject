
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Mop() {
  const [selectedPayment, setSelectedPayment] = useState('cod');

  return (
    <div className="container vh-100 d-flex flex-column pt-3" style={{ backgroundColor: '#f4c542' }}>
      <div className="mb-3 ps-3">
        <button className="btn btn-link p-0" style={{ fontSize: '1.5rem', color: 'black' }}>&larr;</button>
      </div>

      {/* Step icons placeholder */}
      <div className="d-flex justify-content-center mb-3">
        <div className="mx-2 rounded-circle bg-dark" style={{ width: 20, height: 20 }}></div>
        <div className="mx-2 rounded-circle border border-dark bg-light" style={{ width: 20, height: 20 }}></div>
        <div className="mx-2 rounded-circle bg-dark" style={{ width: 20, height: 20 }}></div>
      </div>

      <div className="bg-white rounded p-2 mb-3 d-flex justify-content-between align-items-center mx-2">
        <strong>Address</strong>
        <i className="bi bi-pencil"></i>
      </div>

      <div className="px-3">
        <h5 className="fw-bold">Mode Of Payment</h5>

        <div className="p-3 mt-2 mb-2 rounded shadow-sm" style={{ backgroundColor: '#eee' }}>
          <div className="form-check d-flex justify-content-between">
            <label className="form-check-label fw-bold" htmlFor="cod">
              COD - cash on delivery
            </label>
            <input
              className="form-check-input"
              type="radio"
              id="cod"
              name="payment"
              checked={selectedPayment === 'cod'}
              onChange={() => setSelectedPayment('cod')}
            />
          </div>
        </div>

        <div className="p-3 rounded shadow-sm text-center" style={{ backgroundColor: '#eee' }}>
          <h6 className="fw-bold">G-cash Payment</h6>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=GCashPlaceholder&size=100x100"
            alt="GCash QR"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="mt-auto p-3 bg-white rounded-top shadow-sm">
        <div className="d-flex justify-content-between">
          <span>Subtotal:</span>
          <span>₱384.00</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Delivery fee:</span>
          <span>₱20.00</span>
        </div>
        <div className="d-flex justify-content-between fw-bold">
          <span>Total:</span>
          <span>₱404.00</span>
        </div>

        <Link
          to="/finish"
          className="btn mt-3 w-100 fw-bold"
          style={{ backgroundColor: '#4F2D0D', color: 'white' }}
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default Mop;
