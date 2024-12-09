import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Css/Reset.css";
import { resetPassword, verifyEmail } from "../../../Backend/Auth/auth";
import ReactLoading from "react-loading";
import { useAuth } from "../../../Backend/context/AuthContext";

const EmailLinkPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth()

  // Extract query parameters from the URL
  const query = new URLSearchParams(location.search);
  const oobCode = query.get("oobCode");
  const mode = query.get("mode");

  // Handle password reset
  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await resetPassword(oobCode, newPassword);
      setStatusMessage("Password Reset Successful");
      navigate("/login-sign-up");
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle email verification
  const handleEmailVerification = async () => {
    setLoading(true);
    try {
      if (!oobCode) {
        throw new Error("Invalid verification code.");
      }

      await verifyEmail(oobCode);
      setStatusMessage("Email verified successfully. Redirecting...");
      setTimeout(() => navigate("/login-sign-up"), 3000); // Redirect after 3 seconds
    } catch (error) {
      console.error("Email verification failed:", error);
      alert(
        "Failed to verify email. Please try again or request a new link."
      );
    } finally {
      setLoading(false);
    }
  };

  // Automatically handle email verification when `mode` is "verifyEmail"
  useEffect(() => {
    if (mode === "verifyEmail") {
      handleEmailVerification();
    }
  }, [mode]);


  return (
    <div>
      {mode === "resetPassword" ? (
        <div className="ResetContainer">
          <div className="form-wrapper">
            <h1 className="form-name">New Password</h1>
            <p className="description">Enter your new password.</p>
            <form
              id="forgot-password-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                  id="newPassword"
                  placeholder="Enter your new password"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your new password"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleResetPassword}
                className="btn"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      ) : mode === "verifyEmail" ? (
        <div>
          <h1>{statusMessage || "Verifying Email..."}</h1>
        </div>
      ) : (
        <div>
          <h1>Invalid action or link.</h1>
        </div>
      )}
    </div>
  );
};

export default EmailLinkPage;
