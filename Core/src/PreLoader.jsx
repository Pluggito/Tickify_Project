
import { motion } from "framer-motion";
import './Frontend/PreLoader.css';
// import ticketIcon from '../../assets/ticket-icon.png'; // Replace with actual path or use a placeholder

export default function PreLoader() {
  return (
    <div className="preloader">
      <motion.img
        src="https://via.placeholder.com/100"
        alt="Ticket Icon"
        className="ticketIcon"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.h2
        className="loadingText"
        initial={{ color: "#000" }}
        animate={{
          color: ["#000", "#b30d0d", "#8B0000", "#000"],
        }}
        transition={{
          duration: 3, // Duration for one complete cycle
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        Loading Your Experience...
      </motion.h2>
    </div>
  );
}
