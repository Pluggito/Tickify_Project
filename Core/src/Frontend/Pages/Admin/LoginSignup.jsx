import { useState } from "react";
import { useNavigate } from "react-router";
import "../Css/Login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Backend/context/AuthContext";
import { logIn } from "../../../Backend/Auth/auth";
//import PreLoader from '../../../PreLoader';
// import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactLoading from "react-loading";

// THIS IS THE LOGIN PAGE FOR THE TICKET BUYER

export default function TicketLogin() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // CURRENTUSER VARIABLE CONTAINS THE CURRENT USER
  // USERLOGGEDIN VARIABLE CONTAINS THE BOOLEAN FOR WEATHER A USER IS LOGGED IN
  const { currentUser, userLoggedIn } = useAuth();
  const navigate = useNavigate();

  //THIS IS THE FUNCTION TO LOGIN
  const login = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      //IF THE LOGIN IS SUCCESSFUL IT WILL NAVIGATE TO THE HOME PAGE
      navigate("/");
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false); // Hide loader
    }
  }


  const text = `Don't have an account? `;

  if (loading) {
    // Show preloader while `loading` is true
    return (
      <div className="preloader-wrapper">
        <ReactLoading
          type="spinningBubbles"
          color="#b30d0d"
          height={100}
          width={100}
        />
      </div>
    );
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="left-section">
          <h1>Tickify</h1>
          <p>Your gateway to seamless event experiences</p>
        </div>
        <form className="login-form" autoComplete="off">
          <h2>Welcome Back </h2>
          <p>Please log in to access your tickets</p>
          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <p>
            Forgot password?{" "}
            <Link
              to="/forgetpassword"
              style={{ cursor: "pointer", color: "#b30d0d" }}
            >
              Click here
            </Link>
          </p>
          <button type="submit" className="login-btn" onClick={login}>
            Log In
          </button>
          <p className="signup-text" style={{ color: "black" }}>
            {text}
            <Link to="/sign-up">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

