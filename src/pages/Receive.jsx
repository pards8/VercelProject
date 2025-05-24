import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Receive() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    navigate('/mop'); // go to Mop.jsx
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-start align-items-center pt-5" style={{ backgroundColor: '#f4c542' }}>
      <div className="w-100 mb-3 ps-3">
        <button className="btn btn-link p-0" style={{ fontSize: '1.5rem', color: 'black' }}>&larr;</button>
      </div>

      <div className="card text-center p-4 shadow" style={{ borderRadius: '1rem', width: '100%', maxWidth: '400px' }}>
        <h4 className="fw-bold">How would you like to receive your order?</h4>
        <div className="mt-3">
          <p>🍽️ <strong>Dine-in</strong><br />Enjoy your meal at our place.</p>
          <p>🛵 <strong>Delivery</strong><br />We'll bring it right to your doorstep.</p>
        </div>
      </div>

      <div className="w-100 mt-4 px-3" style={{ maxWidth: '400px' }}>
        <div className="form-check border rounded d-flex justify-content-between align-items-center px-3 py-2 mb-3 bg-white">
          <label className="form-check-label fw-bold" htmlFor="dinein">🍽️ Dine-IN</label>
          <input
            className="form-check-input"
            type="radio"
            name="orderType"
            id="dinein"
            value="dinein"
            checked={selectedOption === 'dinein'}
            onChange={handleOptionChange}
          />
        </div>

        <div className="form-check border rounded d-flex justify-content-between align-items-center px-3 py-2 mb-3 bg-white">
          <label className="form-check-label fw-bold" htmlFor="delivery">🛵 Delivery</label>
          <input
            className="form-check-input"
            type="radio"
            name="orderType"
            id="delivery"
            value="delivery"
            checked={selectedOption === 'delivery'}
            onChange={handleOptionChange}
          />
        </div>

        <div className="form-check border rounded d-flex justify-content-between align-items-center px-3 py-2 bg-white">
          <label className="form-check-label fw-bold" htmlFor="pickup">🏛️ Pick Up</label>
          <input
            className="form-check-input"
            type="radio"
            name="orderType"
            id="pickup"
            value="pickup"
            checked={selectedOption === 'pickup'}
            onChange={handleOptionChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Receive;
