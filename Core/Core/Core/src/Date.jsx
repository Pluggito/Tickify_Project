import { useState } from "react";


export default function DateShortForm(){

    const [dateInput, setDateInput] = useState('');
    const[shortMonth, setShortMonth] = useState('');
    const[day, setDay] = useState('');

    const getMonthAndDay = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date)) return {month: '', day: ''}; // Check for valid date
        const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
         const day = date.getDate();
         return { month, day };
      };

      const handleConvert = () => {
        const { month, day } = getMonthAndDay(dateInput);
        setShortMonth(month);
        setDay(day);
      };

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>

        <input 
        type="date" 
        value={dateInput}
        placeholder="Please enter date"
        onChange={(e) => setDateInput(e.target.value)}/>

        <button onClick={handleConvert}>Get Short Month</button>
        {shortMonth && day && <p style={{color: 'black'}}>Short Month: {shortMonth} Short Day: {day}</p>}
                
        </div>
       
    )
}

