import displayPhoto from '../../assets/background image.jpg';
import './Hero.css';



export default function Hero(){

    const narration = `We don't just sell tickets—we create unforgettable experiences. No more hassle with complicated systems. Our platform is built for the modern event-goer, offering quick, secure, and seamless ticketing solutions. Whether you're here for the hottest concert in town or a low-key event, we’ve got your back. Join our community today, and let’s make some memories!`
return(
<div className='Hero'>
<div className='container'>
    <div className='heroSection'>
        <img src={displayPhoto} alt='displayPhoto' loading="lazy"/>
        <div style={{alignItems: 'center', justifyContent: 'center'}}>
        <h1 className='Title'>At Tickify,</h1>        
        <p className='Description'>{narration}</p>
        </div>       
    </div>
</div>
</div>
)
}