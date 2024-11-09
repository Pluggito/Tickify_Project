import Discover from "./Components/Discover/Discover";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";





const App = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Discover/>
    <Features />
    <Footer />
    </div>
  )
}

export default App