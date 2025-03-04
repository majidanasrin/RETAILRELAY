import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Added Link import
import '../styles/signup.css';  

function Signup() {
  const [userType, setUserType] = useState(""); 
  const navigate = useNavigate(); 

  const handleSignup = (e) => {
    e.preventDefault(); 
    if (userType === "Retailer") {
      navigate("/retailersetup");
    } else if (userType === "Supplier") {
      navigate("/suppliersetup");
    } else {
      alert("Please select a user type!"); 
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <img src="/logo.png" alt="RetailRelay Logo" className="logo" />
        <h2>SIGN UP</h2>
        <p>Join our Retailer/Supplier network</p>

        <form onSubmit={handleSignup}>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>User Type</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
            <option value="">Select Type</option>
            <option value="Retailer">Retailer</option>
            <option value="Supplier">Supplier</option>
          </select>

          <label>Password</label>
          <input type="password" placeholder="Create a password" required />

          <p className="password-note">Must be at least 8 characters long</p>

          <div className="checkbox-container">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button type="submit">Create Account</button>
        </form>

        <p className="signin-link">
          Already have an account? <Link to="/signin-supplier">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
