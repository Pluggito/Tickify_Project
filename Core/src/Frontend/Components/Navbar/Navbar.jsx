import './Navbar.css';
import logo from '../../assets/Logo 1.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Backend/context/AuthContext';
import { signOut } from '../../../Backend/Auth/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { userLoggedIn, currentUser } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [navbarColor, setNavbarColor] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section, #Section, #hero');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const backgroundColor = window.getComputedStyle(section).backgroundColor;
          console.log('Current section background:', backgroundColor);
          
          const rgb = backgroundColor.match(/\d+/g);
          if (rgb) {
            const brightness = (parseInt(rgb[0]) * 299 + 
                             parseInt(rgb[1]) * 587 + 
                             parseInt(rgb[2]) * 114) / 1000;
            console.log('Brightness:', brightness);
            console.log('Setting navbar to:', brightness < 128 ? 'light' : 'dark');
            setNavbarColor(brightness < 128 ? 'light' : 'dark');
          } else {
            console.log('No valid background color found');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className={navbarColor}>
      <div className='info'>
        <img src={logo} alt='logo'/>
        <h1 style={{ cursor: 'pointer' }}>Tickify.click</h1>
      </div>

      <div>
        {userLoggedIn ? <p>Logged in as {currentUser.email}</p> : ""}
      </div>

      <ul>
        {['Home', 'Discover', 'Advert', 'Pricing', 'Contact'].map((item) => (
          <li key={item}>
            <Link 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className='links'
            >
              {item}
            </Link>
          </li>
        ))}

        <div>
          {userLoggedIn ? (
            <div>
              <FontAwesomeIcon 
                icon={faUser} 
                size="lg" 
                onClick={toggleDropdown}
                className='user-icon'
              />
              {dropdownVisible && (
                <div className='dropdown-menu'>
                  <ul>
                    <li><Link to="">Profile</Link></li>
                    <li onClick={signOut}>logout</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button className='login-button'>
              <Link to="/login-sign-up" style={{ textDecoration: 'none', color: "white" }}>
                Login
              </Link>
            </button>
          )}
        </div>
      </ul>
    </nav>
  );
}
