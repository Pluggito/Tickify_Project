import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function Footer() {
    const [subscribeInput, setSubscribeInput] = useState('Subscribe Now');
    const [email, setEmail] = useState('');

    function subscribe() {
        setSubscribeInput('Subscribed');
        setEmail('');
        setTimeout(() => {
            setSubscribeInput('Subscribe Now');
        }, 3000);
    }

    return (
        <footer className="bg-[#c10000] text-white py-10 text-left mt-12">
            <div className="max-w-7xl mx-auto flex justify-between flex-wrap px-4">
                {/* Column 1 */}
                <div className="flex-1 min-w-[200px] mx-2.5">
                    <h4 className="font-bold mb-4 text-xl">Tickify</h4>
                    <p className="leading-relaxed">
                        Tickify is a global self-service ticketing platform for live experiences 
                        that allows anyone to create, share, find, and attend events that fuel 
                        their passions and enrich their lives.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.instagram.com/tickify.click" 
                            className="text-white hover:scale-105 transition-transform duration-500">
                            <FontAwesomeIcon icon={faInstagram} size='3x'/>
                        </a>
                        <a href="/" 
                            className="text-white hover:scale-105 transition-transform duration-500">
                            <FontAwesomeIcon icon={faTwitter} size='3x'/>
                        </a>
                        <a href="/" 
                            className="text-white hover:scale-105 transition-transform duration-500">
                            <FontAwesomeIcon icon={faLinkedin} size='3x'/>
                        </a>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex-1 min-w-[200px] mx-2.5">
                    <h4 className="font-bold mb-4 text-xl">Plan Events</h4>
                    <div className="flex flex-col gap-2.5">
                        {['Create and Set Up', 'Sell Tickets', 'Online RSVP', 'Online Events']
                            .map((item, index) => (
                                <a key={index} href="/" 
                                    className="text-white no-underline hover:scale-105 
                                    transition-all duration-500">
                                    {item}
                                </a>
                        ))}
                    </div>
                </div>

                {/* Column 3 */}
                <div className="flex-1 min-w-[200px] mx-2.5">
                    <h4 className="font-bold mb-4 text-xl">Tickify</h4>
                    <div className="flex flex-col gap-2.5">
                        {['About Us', 'Contact Us', 'Help Center', 'How it Works', 
                          'Privacy Policy', 'Terms & Conditions'].map((item, index) => (
                            <a key={index} href="/" 
                                className="text-white no-underline hover:scale-105 
                                transition-all duration-500">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 4 */}
                <div className="flex-1 min-w-[200px] mx-2.5">
                    <h4 className="font-bold mb-4 text-xl">Stay In The Loop</h4>
                    <p>Join our mailing list to stay in the loop with our newest events and concerts.</p>
                    <div className="flex flex-row gap-2.5 p-8 justify-center items-center 
                        rounded-[40px] w-[400px] h-10 -ml-20 mt-5 bg-white">
                        <input 
                            type="email" 
                            placeholder="Enter your email address." 
                            className="p-auto my-10 h-10 w-[350px] rounded-[17.5px] text-center 
                                border-none bg-transparent z-[3] outline-none 
                                font-bold text-sm font-[Space Grotesk]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button 
                            className="w-[270px] h-[50px] rounded-[25px] px-8 bg-black text-white 
                                font-bold text-base font-[Space Grotesk] cursor-pointer 
                                transition-all duration-500 tracking-wide hover:scale-102"
                            onClick={subscribe}
                            type='button'>
                            {subscribeInput}
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center pt-5 text-base text-white font-bold">
                Copyright © 2024. Tickify, Inc. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
