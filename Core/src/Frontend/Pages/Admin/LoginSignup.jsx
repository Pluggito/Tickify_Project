import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../Css/Login.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Backend/context/AuthContext';
import { logIn } from '../../../Backend/Auth/auth';

// THIS IS THE LOGIN PAGE FOR THE TICKET BUYER

export default function TicketLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // I DONT THINK WE NEED THIS
 //  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  // CURRENTUSER VARIABLE CONTAINS THE CURRENT USER
  // USERLOGGEDIN VARIABLE CONTAINS THE BOOLEAN FOR WEATHER A USER IS LOGGED IN
  const { currentUser, userLoggedIn  } = useAuth();
  console.log(currentUser?.displayName,currentUser?.photoURL )
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


  const text = `Don't have an account? `;

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
            autoComplete='off'
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
          <p>Forgot password? <Link to="/Tickify_Project/forgetpassword"style={{cursor: 'pointer', color: '#b30d0d'}}>Click here</Link></p>
          <button type="submit" className="login-btn" onClick={login}>Log In</button>
          <p className="signup-text" style={{color: 'black'}}>{text}<Link to="/Tickify_Project/sign-up">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
}
