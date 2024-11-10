import './Discover.css';
import photo1 from '../../assets/pexels-foteros-352505.jpg';
// import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Discover(){
        

    return(
        <div className="container"> 
        <div className='dicoverBlock'>
        <h1 className='discover'>Discover</h1>
        <FontAwesomeIcon icon={faArrowRight} className='iconArrow' size='1x'/>
        </div>
         

            <div className='events'>
                <div className='discoverEvents'>
                    <img src={photo1} alt='display 1' className='photo'/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <p className='testing'>Tickets Available</p>
                </div>
                <div className='discoverEvents'>
                    <img src={photo1} alt='display 1' className='photo' />
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <p className='testing'>Tickets Available</p>                    
                </div>
                <div className='discoverEvents'>
                    <img src={photo1} alt='display 1' className='photo'/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <p className='testing'>Tickets Available</p>
                </div>

            </div>


            <div className='eventCreation'>
                <h2>Make your own Event</h2>
                <p>Effortlessly design and organize your event, from small gatherings to large festivals, with our simple, seamless tools.</p>
                <button className='eventButton'><Link to="/Tickify_Project/create-events" style={{ textDecoration: 'none', color: 'white' }}>Create Events</Link></button>
            </div>

       
        </div>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Discover />);