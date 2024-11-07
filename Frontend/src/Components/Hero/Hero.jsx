import displayPhoto from '../../assets/background image.jpg';
import './Hero.css';



export default function Hero(){
return(
<div id='Header'>
<div className='container'>
    <div className='heroSection'>
        <img src={displayPhoto} alt='displayPhoto'/>
        
        <p className='Description'><span>At Tickify,</span> We don't just sell tickets—we create unforgettable experiences. No more hassle with complicated systems. Our platform is built for the modern event-goer, offering quick, secure, and seamless ticketing solutions. Whether you're here for the hottest concert in town or a low-key event, we’ve got your back. Join our community today, and let’s make some memories!</p>
    </div>
</div>
</div>
)
}