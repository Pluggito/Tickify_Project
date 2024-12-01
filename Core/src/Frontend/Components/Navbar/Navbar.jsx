import './Navbar.css';
import logo from '../../assets/Logo 1.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Backend/context/AuthContext';
import { signOut } from '../../../Backend/Auth/auth';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';

// THIS IS THE NAVBAR FOR THE TICKET SITE

export default function Navbar() {

  const { userLoggedIn , currentUser } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false); 

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); 
  };

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
        <li><Link to="/" className='links'>Home</Link></li>
        <li><Link to="/discovers"className='links' >Discover</Link></li>
        <li><Link to="/advert" className='links'>Advert</Link></li>
        <li><Link to="/pricing" className='links'>Pricing</Link></li>
        <li><Link to="/contact" className='links'>Contact</Link></li>

        {/* THIS IS THE ICON FOR THE USER */}
       


        <div>
          {/* IF THE USER IS LOGGED IN, IT WILL SHOW THE LOGOUT BUTTON */}
          {/* IF NO ONE IS LOGGED IN, IT WLL SHOW GET STARTED BUTTON */}
         
         {userLoggedIn ? <div>
          <FontAwesomeIcon 
          icon={faUser} 
          size="lg" 
          style={{color: '#b30d0d', cursor: 'pointer'}} 
          onClick={toggleDropdown}
          className='user-icon'/>
          {dropdownVisible && (
            <div className='dropdown-menu'>
            <ul>
              <li><Link to="">Profile</Link></li>
              <li onClick={signOut}>logout</li>
            </ul>
            </div>
          )}
         </div>

         : <button className='login-button'><Link to="/login-sign-up" style={{ textDecoration: 'none', color: "white" }}>Login</Link></button>}
        </div>
      </ul>
    </nav>
  );
}
