import { assets } from '../assets/asset';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Backend/context/AuthContext';
import { signOut } from '../../Backend/Auth/auth';
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
      console.log('Found sections:', sections.length); // Debug log
      
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          const backgroundColor = window.getComputedStyle(section).backgroundColor;
          console.log('Section background:', backgroundColor);
          
          const rgb = backgroundColor.match(/\d+/g);
          if (rgb) {
            const brightness = (parseInt(rgb[0]) * 299 + 
                             parseInt(rgb[1]) * 587 + 
                             parseInt(rgb[2]) * 114) / 1000;
            console.log('Brightness:', brightness);
            
            setNavbarColor(brightness < 140 ? 'light' : 'dark');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className={`sticky top-0 z-50 flex items-center justify-between 
      transition-all duration-300 ease-in-out backdrop-blur-md border-b rounded-b-lg h-auto
      ${navbarColor === 'dark' 
        ? 'bg-white/90 border-gray-200 text-white' 
        : 'bg-white/50 border-white/10 text-black'}`}>
      
      {/* Logo Section */}
      <div className="flex items-center justify-center ">
        <img src={assets.logo_icon1} alt="logo" className="w-[100px] h-[100px] ml-[50px]" />
        <h2 className='font-bold text-black font-space'>Tickify.Click</h2>
      </div>

      {/* User Email Display */}
      <div>
        {userLoggedIn && 
          <p className={`${navbarColor === 'dark' ? 'text-gray-800' : 'text-white'}`}>
            Logged in as {currentUser.email}
          </p>
        }
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-8 mr-10">
        {['Home', 'Discover', 'Advert', 'Pricing', 'Contact'].map((item) => (
          <li key={item} className="relative group">
            <Link 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className={`font-[Space Grotesk] text-base transition-colors duration-300
                ${navbarColor === 'dark' 
                  ? 'text-gray-800 hover:text-[#b30d0d]' 
                  : 'text-black hover:text-[#b30d0d]'}`}
            >
              {item}
            </Link>
            <span className="absolute left-0 bottom-[-12px] w-0 h-[3px] bg-[#b30d0d] 
              transition-all duration-500 group-hover:w-full"/>
          </li>
        ))}

        {/* User Menu */}
        <div>
          {userLoggedIn ? (
            <div className="relative">
              <FontAwesomeIcon 
                icon={faUser} 
                size="lg" 
                onClick={toggleDropdown}
                className={`cursor-pointer transition-colors duration-300
                  ${navbarColor === 'dark' 
                    ? 'text-gray-800 hover:text-[#b30d0d]' 
                    : 'text-white hover:text-[#b30d0d]'}`}
              />
              {dropdownVisible && (
                <div className="absolute top-[50px] right-[35px] bg-white border border-gray-200 
                  shadow-lg rounded-md overflow-hidden">
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#b30d0d] cursor-pointer">
                      <Link to="">Profile</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#b30d0d] cursor-pointer"
                      onClick={signOut}>
                      logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button className="bg-black text-white px-4 py-3 rounded-full w-[105px] 
              font-[Space Grotesk] -mt-2.5 transition-transform duration-500 hover:scale-110">
              <Link to="/login-sign-up" className="no-underline text-white">
                Login
              </Link>
            </button>
          )}
        </div>
      </ul>
    </nav>
  );
}
