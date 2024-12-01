
import './Hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



import ticketPhoto from '../../assets/ticket-image.png';



export default function Hero(){

     const narration = `Join our community today, and let’s make some memories!`
return(
<div className='Hero'>  
    <div className='heroSection'>
          {/* <motion.img
              src={newDisplayPhoto}
              alt="displayPhoto"
              loading="lazy"
              className="leftImage"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 0.95, scale: 1 }}
             transition={{ duration: 3, ease: "easeInOut" }}
            />
 */ }  
        <div className='Header'>
        <motion.h1 
            className='Title'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
        >
            Welcome to Tickify
        </motion.h1>
        <motion.p className='Description' animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 3, delay: 0.2}}>{narration}</motion.p>
        <div className='buttonContainer'>
            <button className='get-started-button'><Link to='/sign-up' style={{textDecoration: 'none', color: 'white'}}> Get Started</Link></button>
        </div>
        </div>   
    </div>
    <img src={ticketPhoto} alt='ticket-photo' className='ticket-image'/>
</div>  

)
}