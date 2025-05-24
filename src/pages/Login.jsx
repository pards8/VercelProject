import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    // For now, we'll just navigate to the Customer page
    navigate("/customer");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center p-3" style={{ backgroundColor: "#e3b662" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="text-center mb-4">
          <img src="/asset/meslogo.png" alt="Messiah Cafe" className="img-fluid" style={{ maxHeight: "225px" }} />
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input 
              type="text" 
              className="form-control rounded-pill shadow-sm" 
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input 
              type="password" 
              className="form-control rounded-pill shadow-sm" 
              required
            />
          </div>
          <div className="d-flex justify-content-between gap-2">
            <button 
              type="button" 
              className="btn btn-outline-secondary w-50 rounded-pill" 
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button 
              type="submit" 
              className="btn btn-primary w-50 rounded-pill"
            >
              Login
            </button>
          </div>
          <p className="text-center mt-3">
            <span
              onClick={() => navigate("/delivery-login")}
              style={{ color: "#004085", cursor: "pointer", textDecoration: "underline" }}
            >
              Login as Delivery
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;