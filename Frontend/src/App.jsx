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
