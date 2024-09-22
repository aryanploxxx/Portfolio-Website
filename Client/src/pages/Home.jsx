import { Element } from "react-scroll"

import AboutMe from "../components/AboutMe/AboutMe"
import BottomNavbar from "../components/BottomNavbar/BottomNavbar"
import ContactMe from "../components/ContactMe/ContactMe"
import LandingPage from "../components/HeroSection/LandingPage"
import Projects from "../components/Projects/Projects"
import Skills from "../components/AboutMe/Skills"

const Home = () => {
  return (
    <div className="overflow-hidden">

      <Element name="home" className=" overflow-hidden h-screen w-screen flex flex-col items-center">
        <LandingPage />
      </Element>
      
      <Element name="about" className="w-screen mt-28 flex justify-center rounded-t-[50px]">
        <AboutMe />
      </Element>

      <Element name="skills" className="w-screen mt-2 flex justify-center rounded-t-[50px]">
        <Skills />
      </Element>
      
      <Element name="projects" className="w-screen mt-20 flex justify-center items-center">
        <Projects />
      </Element>
      
      <Element name="contact"className="w-screen h-screen mt-28 bg-black mt-[50px] rounded-t-[70px] flex justify-center items-center">
        <ContactMe />
      </Element>


      <div className="fixed bottom-0 left-0 right-0 mb-4 z-50 flex justify-center cursor-pointer">
        <BottomNavbar />
      </div>
    </div>
  )
}

export default Home