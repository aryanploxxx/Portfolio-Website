import "./BottomNavbar.css"
import ResumeCard from "./ResumeCard"
import { RiHome3Line } from "react-icons/ri";

const BottomNavbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bottom-navbar text-white px-5 py-3 border border-white/30 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg">
        <RiHome3Line className="navbar-icon text-2xl"/>
        <ResumeCard />
        <span className="navbar-text  poppins-medium">contact</span>
        <span className="navbar-text  poppins-medium">projects</span>
    </div>
  )
}

export default BottomNavbar