import { useState } from "react";
import "../Css/Create.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCircleXmark, faClock } from "@fortawesome/free-solid-svg-icons";

export default function CreateEvents() {
  const [eventDetails, setEventDetails] = useState({
    name: "",
    venueName: "",
    title: "",
    address: "",
    date: "",
    time: "",
    endDate: "",
    endTime: "",
  });

  const [image, setImage] = useState("");
  const [currentPhase, setCurrentPhase] = useState(1);
  const [validation, setValidation] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleNextPhase = (e) => {
    e.preventDefault();
    if (currentPhase === 1) {
      if (
        eventDetails.name &&
        eventDetails.title &&
        eventDetails.venueName &&
        eventDetails.address &&
        eventDetails.date &&
        eventDetails.time &&
        image
      ) {
        setValidation("");
        setCurrentPhase((prevPhase) => prevPhase + 1); // Move to the next phase
      } else {
        setValidation("Please fill in all fields before proceeding.");
      }
    }
  };

  return (
    <div className="Event-container">
      {/* Phase 1: Event Info */}
      {currentPhase === 1 && (
        <form className="Event-form">
          <FontAwesomeIcon icon={faCircleXmark} className="close-icon1" />
          <div className="first-content" style={{ borderBottom: "5px solid black" }}>
            <h3>Event Info</h3>
            <p>Tell us more about your events</p>
          </div>

          <div className="second-content">
            <div className="inputs">
              <label htmlFor="name">Event Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={eventDetails.name}
                placeholder="What is your event name?"
                onChange={handleInputChange}
              />
            </div>

            <div className="inputs">
              <label htmlFor="title">Event Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={eventDetails.title}
                placeholder="Tell us a bit about your event"
                onChange={handleInputChange}
              />
            </div>

            <div className="inputs">
              <label htmlFor="venueName">Venue Name</label>
              <input
                type="text"
                name="venueName"
                id="venueName"
                value={eventDetails.venueName}
                placeholder="Where will the events take place?"
                onChange={handleInputChange}
              />
            </div>

            <div className="inputs">
              <label htmlFor="address">Venue Address</label>
              <input
                type="text"
                name="address"
                id="address"
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
                  name="date"
                  value={eventDetails.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faClock} className="icon-group" />
                <input
                  type="time"
                  name="time"
                  value={eventDetails.time}
                  onChange={handleInputChange}
                />
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
                            name="end-date"
                            value={eventDetails.endDate}
                            onChange={handleInputChange}/>
                        </div>
                        <div className="input-container">
                                <FontAwesomeIcon icon={faClock} className="icon-group" />
                            <input type="time" placeholder="End time" 
                            value={eventDetails.endTime}
                            onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>

                <div className="imageInput">
                <label htmlFor="imageUpload">Select an image to upload:</label>
                <input type="file" id="imageUpload" name="image" accept="image/*" 
                value={image}
                onChange={(e) => setImage(e.target.result)}/>
                <button type="submit" className="upload-button">Upload</button>
                                </div>
          <p style={{ color: "red" , textAlign: "center"}}>{validation}</p>
          <div style={{ textAlign: "center" }}>
            <button
              
              onClick={handleNextPhase}
              className="next-phase"
            >
              Next
            </button>
          </div>
        </form>
      )}

      {/* Phase 2: Confirmation or Additional Fields */}
      {currentPhase === 2 && (
        <div className="Event-form">
          <h3>Event Confirmation</h3>
          <p>Review your event details</p>
          <ul>
            <li>
              <strong>Event Name:</strong> {eventDetails.name}
            </li>
            <li>
              <strong>Title:</strong> {eventDetails.title}
            </li>
            <li>
              <strong>Venue:</strong> {eventDetails.venueName}, {eventDetails.address}
            </li>
            <li>
              <strong>Starts:</strong> {eventDetails.date} at {eventDetails.time}
            </li>
          </ul>
          <p
            style={{ color: "black", font: "bold 1.5rem Arial", cursor: "pointer" }}
            onClick={() => alert("Event submitted!")}
          >
            Finish
          </p>
        </div>
      )}
    </div>
  );
}