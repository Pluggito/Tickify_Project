import './Discover.css';
import photo1 from '../../assets/pexels-foteros-352505.jpg';
import { useState } from 'react';

export default function Discover(){

    const [ticketInfo, setTicketInfo] = useState ('');
    const [date, setDate] = useState();

   


        

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

            <input type="text"
             value={ticketInfo} 
             placeholder='ticket name'
             onChange={(e) => setTicketInfo(e.target.value)} />

             <input type="month"
             value={date}
             placeholder='Date'
             onChange={(e)=> setDate(e.target.value)} />

        </div>
    )
}