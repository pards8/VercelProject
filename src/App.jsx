import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Customer from "./pages/Customer";
import Profile from "./pages/Profile";
import Address from "./pages/Address";
import DeliveryLogin from "./pages/Delivery-login";
import Delivery from "./pages/delivery"; 
import Cart from './pages/Cart';
import Receive from './pages/Receive';
import Mop from './pages/Mop';
import Finish from './pages/Finish';
import Ongoing from './pages/Ongoing'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<Address />} />
        <Route path="/delivery-login" element={<DeliveryLogin />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/mop" element={<Mop />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/ongoing" element={<Ongoing />} />
        

      

      </Routes>
    </Router>
  );
}

export default App;
