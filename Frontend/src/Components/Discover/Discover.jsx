import './Discover.css';
import photo1 from '../../assets/pexels-foteros-352505.jpg';

export default function Discover(){
        

    return(
        <div className="container"> 
            <h1 className='discover'>Discover</h1>

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
                <button className='eventButton'>Create Events</button>
            </div>

       
        </div>
    )
}