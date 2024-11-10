import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function Footer() {
    const [subscribeInput, setSubscribeInput] = useState ('Subscribe Now');
    const [email, setEmail] = useState('');


        function subscribe (){
          setSubscribeInput('Subscibed')
            setEmail(''); 

            setTimeout(() => {
                setSubscribeInput('Subscribe Now');
            }, 3000);
        }

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1 */}
                <div className="footer-column">
                    <h4>Tickify</h4>
                    <p>Tickify is a global self-service ticketing platform for live experiences that allows anyone to create, share, find, and attend events that fuel their passions and enrich their lives.</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/tickify.click" className="social-icon"><FontAwesomeIcon icon={faInstagram} size='3x'/></a>
                        <a href="/" className="social-icon"><FontAwesomeIcon icon={faTwitter} size='3x'/></a>
                        <a href="/" className="social-icon"><FontAwesomeIcon icon={faLinkedin} size='3x'/></a>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="footer-column">
                    <h4>Plan Events</h4>
                    <div className="footer-links">
                        <a href="/">Create and Set Up</a>
                        <a href="/">Sell Tickets</a>
                        <a href="/">Online RSVP</a>
                        <a href="/">Online Events</a>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="footer-column">
                    <h4>Tickify</h4>
                    <div className="footer-links">
                        <a href="/">About Us</a>
                        <a href="/">Contact Us</a>
                        <a href="/">Help Center</a>
                        <a href="/">How it Works</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms & Conditons</a>
                    </div>
                </div>

                {/* Column 4 */}
                <div className="footer-column">
                    <h4>Stay In The Loop</h4>
                    <p>Join our mailing list to stay in the loop with our newest events and concerts.</p>
                    <div className="subscribeSection">
                        <input 
                        type="email" 
                        placeholder="Enter your email address." 
                        id='subscribeInput'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                          <button className="subscribeButton" onClick={subscribe} type='button'>
                            {subscribeInput}
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', paddingTop: '20px', fontSize: '16px', color: '#fff', fontWeight: 'bold'}}>
                Copyright © 2024. Tickify, Inc. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
