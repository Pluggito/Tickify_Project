import { useEffect, useState } from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

export default function Hero() {
    const [color, setColor] = useState('grey');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newColor = scrollY > 5 ? 'black' : 'grey';
            setColor(newColor);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const welcomeText = "Welcome to";
    const titleText = "Tickify";

    return (
        <div id="Hero">
            <div className='heroContainer'>
                <div className='intro'>
                    <motion.h5
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {welcomeText.split('').map((letter, index) => (
                            <span key={index}>{letter}</span>
                        ))}
                    </motion.h5>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {titleText.split('').map((letter, index) => (
                            <span key={index} style={{ color }}>{letter}</span>
                        ))}
                    </motion.h2>
                </div>
            </div>
        </div>
    );
}
