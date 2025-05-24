import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate("/login"); // redirect to login page
  };

  return (
    <div style={{ backgroundColor: "#e3b662", minHeight: "100vh" }} className="d-flex align-items-center justify-content-center p-4">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center fw-bold mb-4">Registration Form</h2>
        <form onSubmit={handleRegisterClick}>
          <input type="text" placeholder="Name" className="form-control mb-3 rounded-pill" required />
          <input type="email" placeholder="Email" className="form-control mb-3 rounded-pill" required />
          <input type="password" placeholder="Password" className="form-control mb-3 rounded-pill" required />
          <button type="submit" className="btn btn-primary w-100 rounded-pill">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
