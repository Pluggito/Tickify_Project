import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from "./Components/Discover/Discover";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import EventsCategory from './Pages/EventsCategory';
import About from './Pages/About';
import Advert from './Pages/Advert';
import LoginSignUp from './Pages/LoginSignUp';
import Ticket from './Pages/Ticket';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Discover />
              <Features />
              <Footer />
            </>
          } 
        />
        <Route path="/discovers" element={<EventsCategory />} />
        <Route path="/advert" element={<Advert />} />
        <Route path="/about" element={<About />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login-sign-up" element={<LoginSignUp />} />
        
      </Routes>
    </Router>
  );
};

export default App;
