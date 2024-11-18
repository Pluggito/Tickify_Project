import './Features.css';
// import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';


export default function Features(){

    const feature = [ 
        {icon: faTicket, title: "Online Ticketing and Registration", Description: "Offer a simple, easy-to-use platform for creating and selling event tickets online. Organizers can " },
        {icon: faPeopleArrows, title: "Event Promotion and Social Sharing", Description: "Help event organizers reach their audience by providing social sharing tools and customizable event pages to spread the word."},
        {icon: faWallet, title: "Simple Payment Processing", Description: "Facilitate smooth and secure payment processing so that ticket buyers can quickly complete purchases."}


      ]

    return(
        <div className="container">
            <h1 className='features'>Features</h1>

            <div className='featureTitle'>
                    {feature.map((feature, index)=>
                    <div key={index} className='featureColumn'>
                        <FontAwesomeIcon icon={feature.icon} className='featureIcons' size='3x'/>
                        <h3 className='featureName'>{feature.title}</h3>
                        <p className='featureDescription'>{feature.Description}</p>
                    </div>
                    )}         
            </div>
        </div>
    )

}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Features />);