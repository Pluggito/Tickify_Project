import './Navbar.css';
import logo from '../../assets/Logo 1.png';


export default function Navbar() {
    return ( /* <nav>
        <div className='info'>
        <img src={logo} alt='logo'/>
        <h1>Tickify.click</h1>
        </div>

        <ul>
        <li><a href={About}>Home</a></li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>

        </ul>

            <div className='info2'>
            <a href='/' className='pricing'>pricing</a>
              <button className='login'>Login</button> <hr/>
                 <button className='getStarted'>Get Started</button>
            </div> 
       
    </nav> */

            <nav>
                <div className='info'>
                    <img src={logo} alt='logo'/>
                    <h1 style={{cursor: 'pointer'}}>Tickify.click</h1>
                </div>

                <ul>
                    <li>Discover</li>
                    <li>Advert</li>
                    <li>Ticket</li>
                    <li>Contact</li>
                    <div>
                    <button className='login'>Login</button>
                    </div>
                   
                </ul>

            </nav>

            
     )
}