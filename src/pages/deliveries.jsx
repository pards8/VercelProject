import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBell, FaMapMarkerAlt, FaPhone, FaClock, FaListAlt } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

function OrderCard() {
  return (
    <div className="bg-light rounded p-3 my-3 shadow-sm">
      <h6 className="bg-brown text-white text-center p-2 rounded" style={{ backgroundColor: "#5d3b1a" }}>
        ORDER TO DELIVER
      </h6>
      <p><FaListAlt /> <strong>Order No.:</strong> #6969</p>
      <p><FaMapMarkerAlt /> <strong>Address:</strong> 78 Palmera Rd., Brgy. Greenfields</p>
      <p><strong>Items:</strong> 1x Ube Turon & 3x Burger w/ Fries (BF)</p>
      <p><FaClock /> <strong>Time:</strong> 3:45 PM</p>
      <p><FaPhone /> <strong>Phone:</strong> 0921-456-7890</p>
      <div className="d-flex justify-content-around mt-3">
        <button className="btn btn-outline-dark">
          <FaMapMarkerAlt /> Navigate
        </button>
        <button className="btn btn-danger">
          <MdDeliveryDining /> Start Delivery
        </button>
      </div>
    </div>
  );
}

function OrderToDeliver() {
  return (
    <div className="container mt-3">
      <OrderCard />
      <OrderCard />
    </div>
  );
}

function OngoingDeliveries() {
  return (
    <div className="container mt-3">
      <h5 className="text-center text-muted">Ongoing Deliveries (Static Placeholder)</h5>
    </div>
  );
}

export default function Delivery() {
  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3b662" }}>
        <div className="container-fluid">
          <button className="btn">
            <FaBell />
          </button>
          <Link className="navbar-brand mx-auto d-flex align-items-center" to="/delivery">
            <img
              src="/asset/meslogo.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2"
            />
            <span className="fw-bold">Messiah Cafe</span>
          </Link>
          <button className="btn">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Page Tabs */}
      <div className="d-flex justify-content-around p-2" style={{ backgroundColor: "#f7dc9c" }}>
        <Link to="/delivery" className="btn btn-warning fw-bold">ORDER TO DELIVER</Link>
        <Link to="/delivery/ongoing" className="btn fw-bold">ONGOING DELIVERIES</Link>
      </div>

      {/* Routing */}
      <Routes>
        <Route path="/delivery" element={<OrderToDeliver />} />
        <Route path="/delivery/ongoing" element={<OngoingDeliveries />} />
      </Routes>
    </div>
  );
}
