import AboutMe from "../components/AboutMe"
import BottomNavbar from "../components/BottomNavbar"
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
      
      
      
      
      
      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 mb-4 z-50 flex justify-center cursor-pointer">
        <BottomNavbar />
      </div>
    </div>
  )
}

export default Home