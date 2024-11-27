import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from "./Frontend/Components/Discover/Discover";
import Features from "./Frontend/Components/Features/Features";
import Footer from "./Frontend/Components/Footer/Footer";
import Hero from "./Frontend/Components/Hero/Hero";
import Navbar from "./Frontend/Components/Navbar/Navbar";
import EventsCategory from './Frontend/Pages/EventsCategory';
import About from './Frontend/Pages/About';
import Advert from './Frontend/Pages/Advert';
import LoginSignUp from './Frontend/Pages/Admin/LoginSignup';
import Pricing from './Frontend/Pages/Pricing';
import Contact from './Frontend/Pages/Contact';
import SignUp from './Frontend/Pages/Admin/SignUp';
import ForgetPassword from './Frontend/Pages/Admin/ForgetPassword';
import CreateEvents from './Frontend/Pages/CreateEvent/CreateEvents';
import { AuthProvider } from './Backend/context/AuthContext';
import TestPage from './Backend/Auth/TestPage';
import LiveEvent from './Frontend/Pages/CreateEvent/LiveEvent';
import OnlineEvent from './Frontend/Pages/CreateEvent/OnlineEvent';
import EmailLinkPage from './Frontend/Pages/Admin/EmailLinkPage';
import WaitingPage from './Frontend/Pages/Admin/WaitingPage';

const App = () => {
  return (
     <AuthProvider>
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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          {/* Login Pages */}
          <Route path="/login-sign-up" element={<LoginSignUp />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path='/email-link' element={<EmailLinkPage/>}/>
          <Route path='/waiting' element={<WaitingPage/>}/>

          {/* Create Events */}
          <Route path="/create-events" element={<CreateEvents />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/live-event" element={<LiveEvent />} />
          <Route path="/online-event" element={<OnlineEvent />} />
        </Routes>
      </Router>
    </AuthProvider> 
  );
};

export default App;
