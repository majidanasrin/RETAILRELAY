import React from "react";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <div className="forgot-password-header">
          <img src="/assets/shield-icon.png" alt="Shield Icon" className="icon" />
          <h2>Forgot Password</h2>
          <p>Enter your email address and we'll send you instructions to reset your password.</p>
        </div>
        <form>
          <label>Email address</label>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="reset-button">Reset Password</button>
        </form>
        <Link to="/signin-supplier" className="back-to-login">← Back to Login</Link>
        <p className="contact-support">
          Need help? <a href="/support">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
