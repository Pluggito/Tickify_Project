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
        <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
        <li><Link to="/discovers" style={{ textDecoration: 'none', color: 'black' }}>Discover</Link></li>
        <li><Link to="/advert" style={{ textDecoration: 'none', color: 'black' }}>Advert</Link></li>
        <li><Link to="/ticket" style={{ textDecoration: 'none', color: 'black' }}>Ticket</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></li>
        <div>
          <button className='login'><Link to="/login-sign-up" style={{ textDecoration: 'none', color: "white" }}>Login</Link></button>
        </div>
      </ul>
    </nav>
  );
}
