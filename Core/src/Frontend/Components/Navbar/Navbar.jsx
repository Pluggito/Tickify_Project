import './Navbar.css';
import logo from '../../assets/Logo 1.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className='info'>
        <img src={logo} alt='logo'/>
        <h1 style={{ cursor: 'pointer' }}>Tickify.click</h1>
      </div>

      <ul>
        <li><Link to="/Tickify_Project/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
        <li><Link to="/Tickify_Project/discovers" style={{ textDecoration: 'none', color: 'black' }}>Discover</Link></li>
        <li><Link to="/Tickify_Project/advert" style={{ textDecoration: 'none', color: 'black' }}>Advert</Link></li>
        <li><Link to="/Tickify_Project/pricing" style={{ textDecoration: 'none', color: 'black' }}>Pricing</Link></li>
        <li><Link to="/Tickify_Project/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></li>
        <div>
          <button className='get-started'><Link to="/Tickify_Project/login-sign-up" style={{ textDecoration: 'none', color: "white" }}>Get Started</Link></button>
        </div>
      </ul>
    </nav>
  );
}
