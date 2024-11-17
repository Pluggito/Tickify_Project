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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      } 
      reader.readAsDataURL(file);
    }
  };

  const handleNextPhase = (e) => {
    e.preventDefault();
    const missingFields = Object.entries(eventDetails).filter(([key, value]) => !value);
    if (missingFields.length > 0 || !image) {
      setValidation(`Missing fields: ${missingFields.map(([key]) => key).join(', ')}`);
    } else {
      setValidation("");
      setCurrentPhase((prevPhase) => prevPhase + 1);
    }
  };

  return (
    <div className="Event-container">
      {/* Phase 1: Event Info */}
      {currentPhase === 1 && (
        <form className="Event-form">
          <FontAwesomeIcon icon={faCircleXmark} className="close-icon1" />
          <div className="first-content">
            <h3>Event Info</h3>
            <p>Tell us more about your events</p>
          </div>

          <div className="inputs">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={eventDetails.name}
              placeholder="What is your event name?"
              onChange={handleInputChange}
              autoComplete="off"
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
              autoComplete="off"
            />
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
            <div className="date-time-group">
              <span className="date-time-label">Ends</span>
              <div className="input-container">
                <FontAwesomeIcon icon={faCalendar} className="icon-group" />
                <input
                  type="date"
                  name="endDate"
                  value={eventDetails.endDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faClock} className="icon-group" />
                <input
                  type="time"
                  name="endTime"
                  value={eventDetails.endTime}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="imageInput">
            <label htmlFor="imageUpload">Select an image to upload:</label>
            <input
              type="file"
              id="imageUpload"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
             <input
                type="text"
                id="image"
                value={image}
                placeholder="Image URL will appear here"
                readOnly
            />
           
          { /* <button type="submit" className="upload-button">Upload</button> */}
          </div>
                       

          <p style={{ color: "red", textAlign: "center" }}>{validation}</p>
          <div style={{ textAlign: "center" }}>
            <button onClick={handleNextPhase} className="next-phase">
              Continue
            </button>
          </div>
        </form>
      )}

      {/* Phase 2: Confirmation */}
      {currentPhase === 2 && (
        <div className="Event-form">
            
          <button onClick={() => alert("Event submitted!")}>Finish</button>
        </div>
      )}
    </div>
  );
} 
