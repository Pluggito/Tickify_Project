import './Discover.css';
import photo1 from '../../assets/pexels-foteros-352505.jpg';
// import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



export default function Discover(){
        
//trying to get the event details from the create events page

    return(
        <>
        <div className="container"> 
        <div className='dicoverBlock'>
        <h1 className='discover'>Discover</h1>
        <FontAwesomeIcon icon={faArrowRight} className='iconArrow' size='1x'/>
        </div>
         

            <div className='events'>
                <div className='discoverEvents'>
                    <img src={photo1} alt='display 1' className='photo photo1' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>
                </div>
                <div className='discoverEvents'>
                    <img src={photo1} alt='display 1' className='photo photo2' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>                  
                </div>
                <div className='discoverEvents'>
                    <img src={photo1} alt='display 1' className='photo photo3' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>
                </div>
                <div className='discoverEvents'>
                    <img src={photo1} alt='display 1' className='photo photo3' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>
                </div>
                <div className='discoverEvents'>
                    <img src={photo1} alt='display 1' className='photo photo3' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>
                </div>
                <div className='discoverEvents'>
                    <img src={photo1} alt='display 1' className='photo photo3' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>
                </div>

            </div>
            <div className='discoverButtonContainer'>
            <p className='discoverButton'><Link to="/discovers" style={{ textDecoration: 'none', color: '#b30d0d',fontSize: '1.2rem' }} className='discoverButton-text'>View All Events</Link></p>
            </div>                  
        </div>

        <div className='eventCreation'>
            <div>

            </div>
        <div className='eventCreation-container'>
        <h2>Make your own Event</h2>
        <p>Effortlessly design and organize your event, from small gatherings to large festivals, with our simple, seamless tools.</p>
        <button className='eventButton'><Link to="/create-events" style={{ textDecoration: 'none' }} className='eventButton-text'>Create Events</Link></button>
        </div>

        </div>

        </>
        
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Discover />);

