

export default function LiveEvent(){
  return ( <div>
    <div className="Live-event-header">
      <h1>Create a New Event</h1>
    </div>
    <div className="Live-event-body">
      <form>
        <input type="text" placeholder="Event Name" />
        <input type="text" placeholder="Event Description" />
        <input type="date" placeholder="Event Date" />
       
      </form>
    </div>
  </div>)
}
