import { useState } from "react"
import './Css/Create.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCircleXmark, faClock } from "@fortawesome/free-solid-svg-icons";


export default function CreateEvents (){

    //event details state
    const[eventDetails, setEventDetails] = useState ({
        name: '',
        venueName: '',
        title: '',
        address: '',
        day: '',
        month: '',
    });
    //date input state
    const [dateInput, setDateInput] = useState('');
   
    


    const getMonthAndDay = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date)) return {month: '', day: ''}; 
        const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const day = date.getDate();
        return { month, day };
    }

    const handleConvert = () => {
        const { month, day } = getMonthAndDay(dateInput);
        setEventDetails(prevDetails => ({
            ...prevDetails,
            month,
            day
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    


    

 return (
        <div className="Event-container">
            <form className="Event-form">
                <FontAwesomeIcon icon={faCircleXmark} className="close-icon1" />
             <div className="first-content" style={{borderBottom: '5px solid black'}}>
                        <h3>Event info</h3>
                        <p>Tell us more about your events</p>
                    </div>

                    <div className="second-content">
                    <div className="inputs">
                    <label htmlFor="event-title">Event Name</label> 
                        <input 
                        type="text"
                         name="event-name"
                         id="event-name"
                         value={eventDetails.name}
                         placeholder="What is your event name?"
                         onChange={handleInputChange}
                         />

                        </div>

                    <div className="inputs">
                    <label htmlFor="event-name">Event Title</label> 
                        <input 
                        type="text"
                         name="event-title"
                         id="event-title"
                         value={eventDetails.title}
                         placeholder="Tell us a bit about your event"
                         onChange={handleInputChange}
                         />

                        </div>
                       
                        <div className="inputs">
                        <label htmlFor="venue-name">Venue Name</label> 

                        <input 
                        type="text"
                         name="venue-name"
                         id="venue-name"
                         value={eventDetails.venueName}
                         placeholder="Where will the events take place?"
                         onChange={handleInputChange}/>
                     </div>

                        <div className="inputs">
                        <label htmlFor="event-address">Venue Address</label> 

                        <input 
                        type="text"
                         name="event-address"
                         id="event-address"
                         value={eventDetails.address}
                         placeholder="Set the venue address"
                         onChange={handleInputChange}
                         />
                        </div>
                    </div>

                    
                    <div className="date-time-container">
                    <div className="date-time-group">
                        <span className="date-time-label">Starts</span>
                        <div className="input-container">
                            <FontAwesomeIcon icon={faCalendar} className="icon-group" />
                            <input 
                            type="date" 
                            placeholder="Start date"
                            value={dateInput}
                            onChange={(e) => setDateInput(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                           <FontAwesomeIcon icon={faClock} className="icon-group" />
                            <input 
                            type="time"
                            placeholder="Start time"/>
                        </div>
                    </div>

                   
                    <div className ="date-time-group">
                        <span className="date-time-label">Ends</span>
                        <div className="input-container">
                                <FontAwesomeIcon icon={faCalendar} className="icon-group" />
                            <input 
                            type="date" 
                            placeholder="End date"
                            id="end-date"
                            name="end-date"/>
                        </div>
                        <div className="input-container">
                                <FontAwesomeIcon icon={faClock} className="icon-group" />
                            <input type="time" placeholder="End time" />
                        </div>
                    </div>
                </div>
            <div style={{textAlign: 'center'}}>
            <p style={{color: 'black', font: 'bold 1.5rem Arial',cursor: "pointer"}} onClick={handleConvert}>Next</p>   
            </div>
                       
            </form>

          
          
        </div>
    )
}

