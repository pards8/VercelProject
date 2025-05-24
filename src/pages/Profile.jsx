import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../assets/profile-icon.jpg"; // Make sure this path is correct

function Profile() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

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

      {/* Profile Form */}
      <div className="container my-4">
        <div className="text-center">
          <img
            src={profileIcon}
            alt="Profile"
            className="rounded-circle mb-3"
            width="120"
            height="120"
          />
          <h5>Profile Picture</h5>
        </div>

        <form className="mt-4">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control shadow-sm" />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control shadow-sm" />
          </div>
          <div className="mb-3">
            <label className="form-label">Cellphone No.</label>
            <input type="tel" className="form-control shadow-sm" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control shadow-sm" />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success rounded-pill">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
