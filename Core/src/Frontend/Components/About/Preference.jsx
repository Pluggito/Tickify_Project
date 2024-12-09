import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import "./Preference.css"

export default function Preference() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Create progress values for each line outside the map function
    const lineProgresses = Array.from({ length: 4 }, (_, i) => 
        useTransform(
            scrollYProgress,
            [i * 0.2, i * 0.2 + 0.3],
            ["100%", "-100%"]
        )
    );

    const text = `We don't just sell tickets—we create unforgettable experiences. No more hassle with complicated systems. Our platform is built for the modern event-goer, offering quick, secure, and seamless ticketing solutions. Whether you're here for the hottest concert in town or a low-key event, we've got your back.`;
    const lines = text.split('. ');

    return (
        <div id="Section" ref={containerRef}>
            <div className="about-section">
                {lines.map((line, index) => (
                    <motion.p 
                        key={index}
                        style={{
                            backgroundPosition: lineProgresses[index]
                        }}
                        className="gradient-text"
                    >
                        {line}{index !== lines.length - 1 ? '.' : ''}
                    </motion.p>
                ))}
            </div>
        </div>
    );
}