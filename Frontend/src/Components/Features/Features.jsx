import './Features.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';


export default function Features(){

    const feature = {
        title: "Online Ticketing and Registration", featureDescription: 'Off'


    }

    return(
        <div className="container">
            <h1 className='features'>Features</h1>

            <div className='featureTitle'>
                <div >
                    <div>
                    <FontAwesomeIcon icon={faTicket}/>
                    </div>
                
                <FontAwesomeIcon icon={faPeopleArrows} />
                </div>
            </div>
        </div>
    )

}

ReactDOM.render(<Features />, document.getElementById('root'));