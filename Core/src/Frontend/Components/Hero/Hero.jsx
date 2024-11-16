import displayPhoto from '../../assets/background image.jpg';
import './Hero.css';
import { motion } from 'framer-motion';
// import splashImage from '../../assets/Splash-image.png';


export default function Hero(){


     {/*const splashVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
       //   scale: [0.5, 1, 0.8],
        //  opacity: [0, 1, 0.5],
        // rotate: [0, 45, 0],
          transition: {
            duration: 4, // Length of animation
            delay: 0.1,
            ease: "easeInOut",
         
          },
        }
     } */}

    const narration = `We don't just sell tickets—we create unforgettable experiences. No more hassle with complicated systems. Our platform is built for the modern event-goer, offering quick, secure, and seamless ticketing solutions. Whether you're here for the hottest concert in town or a low-key event, we’ve got your back. Join our community today, and let’s make some memories!`
return(
<div className='Hero'>
<div className='container'>
    <div className='heroSection'>
        <div className='imageContainer'>
        <motion.img
              src={displayPhoto}
              alt="displayPhoto"
              loading="lazy"
              className="leftImage"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 0.95, scale: 1 }}
             transition={{ duration: 3, ease: "easeInOut" }}
            />
     { /*  <motion.img
              src={splashImage}
              alt="splashImage"
              loading="lazy"
              className="splashImage"
             // initial={{opacity: 0, scale: 0.7}}
              // animate={{opacity: 0.8, scale: 1}}
             // transition={{ duration: 4, ease: "easeInOut" }}
              
            /> */}
        </div>
        <div style={{alignItems: 'center', justifyContent: 'center'}}>
        <motion.h1 
            className='Title'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
        >
            Welcome
        </motion.h1>
        <motion.h2 className='Name' animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 2, delay: 0.1 }}>At Tickify,</motion.h2>        
        <motion.p className='Description' animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 3, delay: 0.2}}>{narration}</motion.p>
        </div>       
    </div>
</div>
</div>
)
}