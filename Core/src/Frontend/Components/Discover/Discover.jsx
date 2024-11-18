import './Discover.css';
import photo1 from '../../assets/pexels-foteros-352505.jpg';
// import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import '../../Pages/CreateEvent/CreateEvents';
import { useAuth } from '../../../Backend/context/AuthContext';
export default function Discover(){

  {/* const dayinfo = props.day;
    const monthinfo = props.month;
    const name = props.eventdetails; */}  
        
//trying to get the event details from the create events page
    
    // USERLOGGEDIN STORES A BOOL TO KNOW IF A USER IS LOGGED IN OR NOT
    const { userLoggedIn } = useAuth()
    const navigate = useNavigate()

    // FUNCTION TO CHECK IF A USER IS LOGGED IN BEFORE ALLOWING THEM TO CREATE AN EVENT
    const createEvent = () =>{
        if (userLoggedIn) {
            navigate("/create-events")
        }else{
            navigate("/login-sign-up" )
        }

    }

    return(
        <>
        <div className="container"> 
        <div className='dicoverBlock'>
        <h1 className='discover'>Discover</h1>
        <FontAwesomeIcon icon={faArrowRight} className='iconArrow' size='1x'/>
        </div>
         

            <div className='events'>
                <div className='discoverEvents box-1'>
                    <img src={photo1} alt='display 1' className='photo photo1' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>
                </div>
                <div className='discoverEvents box-2'>
                    <img src={photo1} alt='display 1' className='photo photo2' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>                  
                </div>
                <div className='discoverEvents box-3'>
                    <img src={photo1} alt='display 1' className='photo photo3' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>
                </div>
                <div className='discoverEvents box-4'>
                    <img src={photo1} alt='display 1' className='photo photo3' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>
                </div>
                <div className='discoverEvents box-5'>
                    <img src={photo1} alt='display 1' className='photo photo3' loading="lazy"/>
                    <p className='month'>AUG</p>
                    <p className='date'>20th</p>
                    <div className='event-name'>
                    <p className='testing'>Event Name</p>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className='iconArrow1' size='1x'/>
                </div>
                <div className='discoverEvents box-6'>
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
        {/* <button className='eventButton'><Link to="/create-events" style={{ textDecoration: 'none' }} className='eventButton-text'>Create Events</Link></button> */}
        <button onClick={createEvent} className='eventButton , eventButton-text' style={{ textDecoration: 'none' }}>Create Events</button>
        </div>

        </div>

        </>
        
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Discover />);

