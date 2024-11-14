import React, { useState } from "react";
import "../.././Frontend/Pages/Css/Login.css";
import { useAuth } from "../context/AuthContext";
import { logIn,  signUp } from "./auth";
const TestPage = () => {
  const [logInEmail, setLoginEmail] = useState("");
  const [logInPassword, setLoginPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSIgnInPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [error, setError] = useState('');

  const { currentUser } = useAuth();

  console.log(currentUser.displayName)

  //THIS IS THE FUNCTION TO LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(logInEmail, logInPassword);

      //YOU CAN ADD LOADING ANIMATION HERE.....

      //IF THE LOGIN IS SUCCESSFUL IT WILL NAVIGATE TO THE HOME PAGE
      // navigate('/Tickify_Project/')

      alert(logInEmail + " is Logged in");
    } catch (error) {
      console.error(error.message);
    }

    //SIGN-UP METHOND
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(signInEmail, signInPassword,signInUsername);
      //   navigate('/Tickify_Project/')
      alert("Account was created for " + signInEmail);
    } catch (err) {
      setError(err.message);
      console.error(error)
    }
  };
  return (
    <>
      {/* LOGIN */}

      <div>
        <p>Login</p>
        <form>
          <input
            onChange={(e) => setLoginEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleLogin} type="submit">
            Login
          </button>
          <button type="button">Logout</button>
        </form>
      </div>
      <br />

      {/* SIGN UP */}

      <form>
        <input
          onChange={(e) => setSignInUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) => setSignInEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setSIgnInPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleSignUp} type="submit">
          Sign Up
        </button>
      </form>

      {/* PROFILE */}
      <h2>{currentUser.email}</h2>
    </>
  );
};

export default TestPage;
