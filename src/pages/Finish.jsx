import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Finish() {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-between pt-4 pb-4" style={{ backgroundColor: '#f4c542' }}>

      {/* Confirmation Message */}
      <div className="bg-light rounded shadow p-4 text-center mx-2">
        <div className="mb-3">
          <span style={{ fontSize: '2rem', color: 'green' }}>✅</span>
        </div>
        <h4 className="fw-bold">ORDER CONFIRMED</h4>
        <p className="mt-2">
          The restaurant is preparing your meal. You can track your order in real-time within the app.
        </p>
      </div>

      {/* Back to Home Button */}
      <div className="mx-2">
        <Link
          to="/customer"
          className="btn w-100 fw-bold"
          style={{ backgroundColor: '#4F2D0D', color: 'white' }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Finish;
