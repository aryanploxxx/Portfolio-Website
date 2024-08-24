import AboutMe from "../components/AboutMe"
import BottomNavbar from "../components/BottomNavbar"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"
import InfiniteText from "../components/InfiniteText"
import LandingPage from "../components/LandingPage"
import Projects from "../components/Projects"
import { Element } from 'react-scroll'

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      
      <Element name="home" className="flex flex-col items-center w-full">
        <LandingPage />
      </Element>
      
      <Element name="about" className="w-full flex justify-center">
        <AboutMe />
      </Element>
      
      <InfiniteText />
      
      <Element name="projects" className="w-full flex justify-center">
        <Projects />
      </Element>
      
      <Element name="contact" className="w-full flex justify-center">
        <ContactMe />
      </Element>
      
      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 mb-4 z-50 flex justify-center cursor-pointer">
        <BottomNavbar />
      </div>

      <Footer />
    </div>
  )
}

export default Home