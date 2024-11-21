import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Css/Reset.css";
import { resetPassword } from "../../../Backend/Auth/auth";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // Extract query parameters from the URL
  const query = new URLSearchParams(location.search);
  const oobCode = query.get("oobCode"); // Retrieve oobCode directly

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await resetPassword(oobCode, newPassword);
      navigate("/login-sign-up"); // Navigate to login page after successful reset
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="ResetContainer">
      <div className="form-wrapper">
        <h1 className="form-name">New Password</h1>
        <p className="description">Enter your new password.</p>
        <form id="forgot-password-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">New Password</label>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              name="email"
              placeholder="Enter your new password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="email"
              placeholder="Confirm your new password"
              required
            />
          </div>
          <button type="button" onClick={handleResetPassword} className="btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
