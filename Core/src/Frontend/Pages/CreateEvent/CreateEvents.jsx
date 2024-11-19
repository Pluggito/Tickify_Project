import { useState } from "react";
import "../Css/Create.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";

export default function CreateEvents() {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleEventType = (eventType) => {
    setSelectedEvent(eventType)
  }   

  const handleContinue = () => {
    if(selectedEvent === "live"){
      navigate('/live-event');
    }
    else if(selectedEvent === "online"){
      navigate('/online-event');
    }
  }

  return (
   <div className="create-event-container">
    <div className="create-event-content">
         <h1>Create a New Event</h1>
      </div>
      <div className="create-event-mode" >
        <div className="create-event-mode-item" onClick={() => handleEventType("live")} 
          style={{
            color: selectedEvent === "live" ? '#b30d0d' : '',
            borderColor: selectedEvent === "live" ? '#b30d0d' : ''
          }}>
          <FontAwesomeIcon icon={faCalendarPlus} className="create-event-mode-item-icon"/>
          <h3 className="create-event-mode-item-heading-1">Live Event</h3>
          <p className="create-event-mode-item-description-1"> Create a live event for your audience to attend in real-time.</p>
        </div>
        <div className="create-event-mode-item" onClick={() => handleEventType("online")} 
          style={{
            color: selectedEvent === "online" ? '#b30d0d' : '',
            borderColor: selectedEvent === "online" ? '#b30d0d' : ''
          }}>
        <FontAwesomeIcon icon={faDisplay} className="create-event-mode-item-icon"/>
          <h3 className="create-event-mode-item-heading-2">Online Event</h3>
          <p className="create-event-mode-item-description-2"> Create a virtual event for your audience to attend at a specific time.</p>
        </div>
      </div>
      <button className="create-event-mode-item-button" onClick={handleContinue}>Continue</button>
    </div>
  );
} 
