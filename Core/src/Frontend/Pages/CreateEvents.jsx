import { useState } from "react"
import './Css/Create.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function CreateEvents (){

    const[eventDetails, setEventDetails] = useState ({
        name: '',
        title: '',
        address: '',
    });

    const [dateInput, setDateInput] = useState ('');


    const getMonthAndDay = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date)) return {month: '', day: ''}; 
        const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const day = date.getDate();
        return { month, day };
    }

    const getInformation = () =>{

    } 

 return (
        <div className="Event-container">
            <form className="Event-form">
                <FontAwesomeIcon icon={faCircleXmark} className="close-icon1" />
             <div className="first-content" style={{borderBottom: '5px solid white'}}>
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
                         onChange={(e) => setEventDetails(e.target.value)}
                         />

                        </div>

                    <div className="inputs">
                    <label htmlFor="event-name">Event Title</label> 
                        <input 
                        type="text"
                         name="event-name"
                         id="event-name"
                         value={eventDetails.name}
                         placeholder="Tell us a bit about your event"
                         onChange={(e) => setEventDetails(e.target.value)}
                         />

                        </div>
                       
                        <div className="inputs">
                        <label htmlFor="event-date">Event Date</label> 

                        <input 
                        type="date"
                         name="event-date"
                         id="event-date"
                         value={dateInput}
                         placeholder="Where will the events take place?"
                         onChange={(e) => setDateInput(e.target.value)}/>
                     </div>

                        <div className="inputs">
                        <label htmlFor="event-address">Event Address</label> 

                        <input 
                        type="text"
                         name="event-address"
                         id="event-address"
                         value={eventDetails.address}
                         placeholder="Set the venue address"
                         onChange={(e) => setEventDetails(e.target.value)}
                         />
                        </div>
                    </div>

                    <div className="third-content">
                        <div className="third-content-container">
                            <div className="third-content-container-left">
                                <label>Start
                                    <input type="time"
                                     name="start-time" 
                                     id="start-time" />
                                </label>

                                <input type='date'
                                name="start-date"
                                id="start-date" />
                            </div>
                            <div className="third-content-container-right">
                            <label>End
                                    <input type="time"
                                     name="end-time" 
                                     id="end-time" />
                                </label>

                                <input type='date'
                                name="end-date"
                                id="end-date" />
                            </div>
                         
                        </div>
                    </div>
           
            </form>
          
        </div>
    )
}

