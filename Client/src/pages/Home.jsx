import AboutMe from "../components/AboutMe"
import BottomNavbar from "../components/BottomNavbar"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"
import InfiniteText from "../components/InfiniteText"
import LandingPage from "../components/LandingPage"
import Projects from "../components/Projects"

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      
      <LandingPage />
      <AboutMe />
      <InfiniteText />
      <Projects />
      <ContactMe />
      
      
      
      
      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 mb-4 z-50 flex justify-center cursor-pointer">
        <BottomNavbar />
      </div>

      <Footer />
    </div>
  )
}

export default Home