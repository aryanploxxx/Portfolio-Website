import "./BottomNavbar.css"
import ResumeCard from "./ResumeCard"
import { RiHome3Line } from "react-icons/ri";
import { Link } from 'react-scroll';

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar PolySansSlim flex flex-row justify-between items-center text-[#1d1d1d] px-5 py-3 border border-white/30 rounded-xl bg-[#fbfdfd] backdrop-blur-lg shadow-lg">
        
        <Link to="home" smooth={true} duration={500}>
          <RiHome3Line className="navbar-icon text-2xl cursor-pointer"/>
        </Link>
        
        <ResumeCard />
        
        <Link to="projects" smooth={true} duration={500}>
          <span className="navbar-text poppins-medium cursor-pointer">projects</span>
        </Link>
        
        <Link to="contact" smooth={true} duration={500}>
          <span className="navbar-text poppins-medium cursor-pointer">contact</span>
        </Link>
    
    </div>
  )
}

export default BottomNavbar