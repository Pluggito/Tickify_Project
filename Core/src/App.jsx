import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from "./Frontend/Components/Discover/Discover";
import Features from "./Frontend/Components/Features/Features";
import Footer from "./Frontend/Components/Footer/Footer";
import Hero from "./Frontend/Components/Hero/Hero";
import Navbar from "./Frontend/Components/Navbar/Navbar";
import EventsCategory from './Frontend/Pages/EventsCategory';
import About from '../src/Frontend/Pages/About';
import Advert from './Frontend/Pages/Advert';
import LoginSignUp from './Frontend/Pages/LoginSignUp';
import Ticket from './Frontend/Pages/Ticket';
import Contact from './Frontend/Pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/Tickify_Project/" 
          element={
            <>
              <Hero />
              <Discover />
              <Features />
              <Footer />
            </>
          } 
        />
        <Route path="/Tickify_Project/discovers" element={<EventsCategory />} />
        <Route path="/Tickify_Project/advert" element={<Advert />} />
        <Route path="/Tickify_Project/about" element={<About />} />
        <Route path="/Tickify_Project/ticket" element={<Ticket />} />
        <Route path="/Tickify_Project/contact" element={<Contact />} />

        {/*Login page*/}
        <Route path="/Tickify_Project/login-sign-up" element={<LoginSignUp />} />
        
      </Routes>
    </Router>
  );
};

export default App;
