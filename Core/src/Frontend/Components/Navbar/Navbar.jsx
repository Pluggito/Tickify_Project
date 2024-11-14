import './Navbar.css';
import logo from '../../assets/Logo 1.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Backend/context/AuthContext';
import { signOut } from '../../../Backend/Auth/auth';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; */

// THIS IS THE NAVBAR FOR THE TICKET SITE

export default function Navbar() {

  const { userLoggedIn , currentUser } = useAuth()
  
  return (
    <nav>
      <div className='info'>
        <img src={logo} alt='logo'/>
        <h1 style={{ cursor: 'pointer' }}>Tickify.click</h1>
      </div>

      {/* JUST TO SHOW THE PERSON LOGGED IN */}
      <div>
        {userLoggedIn ? <p>Logged in as {currentUser.email} </p> : "" }
      </div>

      <ul>
        <li><Link to="/Tickify_Project/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
        <li><Link to="/Tickify_Project/discovers" style={{ textDecoration: 'none', color: 'black' }}>Discover</Link></li>
        <li><Link to="/Tickify_Project/advert" style={{ textDecoration: 'none', color: 'black' }}>Advert</Link></li>
        <li><Link to="/Tickify_Project/pricing" style={{ textDecoration: 'none', color: 'black' }}>Pricing</Link></li>
        <li><Link to="/Tickify_Project/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></li>

        {/* THIS IS THE ICON FOR THE USER */}
         {/*<FontAwesomeIcon icon={faUser} size="2x" style={{color: '#b30d0d', cursor: 'pointer'}} />*/} 


        <div>
          {/* IF THE USER IS LOGGED IN, IT WILL SHOW THE LOGOUT BUTTON */}
          {/* IF NO ONE IS LOGGED IN, IT WLL SHOW GET STARTED BUTTON */}
         {userLoggedIn ?  <p onClick={signOut} style={{cursor: 'pointer', color: '#b30d0d'}} >Logout</p>

         : <button className='get-started'><Link to="/Tickify_Project/login-sign-up" style={{ textDecoration: 'none', color: "white" }}>Get Started</Link></button>}
        </div>
      </ul>
    </nav>
  );
}
