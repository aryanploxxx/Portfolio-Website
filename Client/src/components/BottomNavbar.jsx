import "./BottomNavbar.css"
import ResumeCard from "./ResumeCard"
import { RiHome2Fill } from "react-icons/ri";

const BottomNavbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bottom-navbar text-white px-5 py-4 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg">
        <RiHome2Fill className="navbar-icon text-xl"/>
        <ResumeCard />
        <span className="navbar-text  poppins-medium">contact</span>
        <span className="navbar-text  poppins-medium">projects</span>
    </div>
  )
}

export default BottomNavbar