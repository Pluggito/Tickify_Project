import './Navbar.css';
import logo from '../../assets/Logo 1 compressed.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Backend/context/AuthContext';
import { signOut } from '../../../Backend/Auth/auth';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'; 
import { useState } from 'react';
// THIS IS THE NAVBAR FOR THE TICKET SITE

export default function Navbar() {

  const { userLoggedIn , currentUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    setDropdownOpen(false); // Close dropdown after sign out
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
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

      
             



        <div className="auth-menu">
          {userLoggedIn ? (
            <div className="user-dropdown" style={{display: 'flex', alignItems: 'center'}}>
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                onClick={toggleDropdown}
                className='user-icon'
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <Link to="/profile" onClick={() => setDropdownOpen(false)}>Profile</Link>
                    </li>
                    <li onClick={handleSignOut}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button className="get-started">
              <Link to="/login-sign-up" style={{ textDecoration: 'none', color: 'white' }}>
                Get Started
              </Link>
            </button>
          )}
        </div>
      </ul>
    </nav>
 
   
    
  );
}