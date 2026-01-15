import Hero from "./components/hero"
import Navbar from "./components/navbar"
import About from "./components/about"
import Services from "./components/services"
import Projects from "./components/Projects"
import Contact from "./components/contact"

function App() {
  return (
    <div className="bg-[#0e0c1e]">
     <Navbar/>
     <Hero/>
     <About/>
    <Services/>
    <Projects/>
    <Contact/>
     
    </div>
  )
}

export default App