import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DeliveryLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/delivery"); // Navigate to delivery.jsx
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e3b662",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Container style={{ maxWidth: "400px", textAlign: "center" }}>
        <img
          src="/asset/meslogo.png"
          alt="Messiah Cafe Logo"
          style={{ width: "140px", marginBottom: "2rem" }}
        />

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label style={{ color: "#fff", textAlign: "left", display: "block" }}>
              Username
            </Form.Label>
            <Form.Control
              type="text"
              style={{
                borderRadius: "30px",
                backgroundColor: "#e1e1e1",
                border: "none",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="password">
            <Form.Label style={{ color: "#fff", textAlign: "left", display: "block" }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              style={{
                borderRadius: "30px",
                backgroundColor: "#e1e1e1",
                border: "none",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
              }}
            />
          </Form.Group>
          <p className="text-center mt-3">
            <span
              onClick={() => navigate("/login")}
              style={{ color: "#004085", cursor: "pointer", textDecoration: "underline" }}
            >
              Login as Customer
            </span>
            </p>

          <Button
            type="submit"
            style={{
              borderRadius: "10px",
              backgroundColor: "#e1e1e1",
              border: "none",
              color: "#333",
              padding: "8px 30px",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            LogIn
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default DeliveryLogin;
