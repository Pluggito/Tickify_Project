import { useState } from "react"
import './Css/Create.css'

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
           
            </form>
          
        </div>
    )
}

