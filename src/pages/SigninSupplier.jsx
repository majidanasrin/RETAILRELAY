import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SigninSupplier.css"; 

function SigninSupplier() {
  const [userType, setUserType] = useState("Retail Shop Owner");

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/logo.png" alt="RetailRelay Logo" className="logo" />
        <h2>Login as {userType}</h2>

        {/* User Type Toggle */}
        <div className="user-switch">
          <button
            className={userType === "Retail Shop Owner" ? "active" : ""}
            onClick={() => setUserType("Retail Shop Owner")}
          >
            Retail Shop Owner
          </button>
          <button
            className={userType === "Supplier" ? "active" : ""}
            onClick={() => setUserType("Supplier")}
          >
            Supplier
          </button>
        </div>

        {/* Login Form */}
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit">Log In</button>
        </form>

        {/* Signup Link */}
        <p className="signup-link">
          Don’t have an account? <Link to="/">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default SigninSupplier;
