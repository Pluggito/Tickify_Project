import { useState } from 'react';
import './Css/Login.css';

export default function TicketLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function login(){
    setEmail('')
    setPassword('')
};

  const text = [
    {newUser:`Don't have an account? `}
  ]

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="left-section">
          <h1>Tickify</h1>
          <p>Your gateway to seamless event experiences</p>
        </div>
        <form className="login-form" autoComplete="off">
          <h2>Welcome Back</h2>
          <p>Please log in to access your tickets</p>
          <div className="input-group">
        <input
            type="email"
            id="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
        <div className="forgot-password">Lost Password? <span>Click Here</span>
        </div>
          <button type="submit" className="login-btn" onClick={login}>Log In</button>
          <p className="signup-text">{text.newUser}<a href="/signup">Sign up</a></p>
        </form>
      </div>
    </div>
  );
}
