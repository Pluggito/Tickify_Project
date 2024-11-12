import { useState } from 'react';
import './Css/Login.css';
import { logIn, signOut, signUp } from '../../Backend/Auth/auth';
import { useAuth } from '../../Backend/context/AuthContext';
import { useNavigate } from 'react-router';

export default function TicketLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // I DONT THINK WE NEED THIS
 //  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  // CURRENTUSER VARIABLE CONTAINS THE CURRENT USER
  // USERLOGGEDIN VARIABLE CONTAINS THE BOOLEAN FOR WEATHER A USER IS LOGGED IN
  const { currentUser, userLoggedIn  } = useAuth();
  const navigate = useNavigate()

//THIS IS THE FUNCTION TO LOGIN 
const login = async (e) =>{
    e.preventDefault()
    try {
        await logIn(email,password);

        //YOU CAN ADD LOADING ANIMATION HERE.....

        //IF THE LOGIN IS SUCCESSFUL IT WILL NAVIGATE TO THE HOME PAGE
        navigate('/Tickify_Project/')
    } catch (error) {
        console.error(error.message)
    }
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
          <h2>Welcome Back {currentUser?.email} </h2>
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
          <button type="submit" className="login-btn" onClick={(e) => login(e)}>Log In</button>
          <p className="signup-text">{text.newUser}<a href="/signup">Sign up</a></p>
        </form>
      </div>
    </div>
  );
}
