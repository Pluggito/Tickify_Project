import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ForgetPaswword from './Frontend/Pages/Admin/ForgetPassword';
import CreateEvents from './Frontend/Pages/CreateEvents'
import { AuthProvider } from './Backend/context/AuthContext';
import TestPage from './Backend/Auth/TestPage';


const App = () => {
  return (
    <AuthProvider>

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
        <Route path="/Tickify_Project/pricing" element={<Pricing />} />
        <Route path="/Tickify_Project/contact" element={<Contact />} />

        {/*Login page*/}
        <Route path="/Tickify_Project/login-sign-up" element={<LoginSignUp />} />
        <Route path="/Tickify_Project/sign-up" element={<SignUp />} />    
        <Route path='/Tickify_Project/forgetpassword' element={<ForgetPaswword />} /> 
        <Route path='/Tickify_Project/create-events' element={<CreateEvents />} />
        <Route path='/Tickify_Project/test' element={<TestPage />} />

      </Routes> 
    </Router>
    </AuthProvider>
  );
};

export default App;