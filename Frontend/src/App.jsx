import Discover from "./Components/Discover/Discover";
import Features from "./Components/Features/Features";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import DateShortForm from "./Date";




const App = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Discover/>
    <Features />
    </div>
  )
}

export default App