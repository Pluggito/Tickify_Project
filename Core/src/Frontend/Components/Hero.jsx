import { useEffect, useState } from 'react';
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const welcomeText = "Welcome to";
    const titleText = "Tickify";

    return (
        <section id="hero" className="w-full h-screen relative bg-[rgb(240,238,235)]
            bg-[radial-gradient(rgba(0,0,0,0.02)_1px,rgba(0,0,0,0)_1px)] bg-[size:4px_4px]">
            <div className="justify-center items-center">
                <div className="absolute top-[45%] left-[20%] transform translate-x-[50px] 
                    translate-y-[50px] text-black tracking-[1px]">
                    <motion.h5
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-bold text-base font-space"
                    >
                        {welcomeText.split('').map((letter, index) => (
                            <span key={index}>{letter}</span>
                        ))}
                    </motion.h5>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-bold text-[100px] font-[Poppins]"
                    >
                        {titleText.split('').map((letter, index) => (
                            <span 
                                key={index} 
                                style={{ color: color }}
                            >
                                {letter}
                            </span>
                        ))}
                    </motion.h2>
                </div>
            </div>
        </section>
    );
}
