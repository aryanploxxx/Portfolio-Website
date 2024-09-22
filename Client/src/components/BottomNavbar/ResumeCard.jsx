import { LuDownload } from "react-icons/lu";
import "./BottomNavbar.css"

const ResumeCard = () => {
  return (
    <a href="https://bit.ly/aryan-website-resume" target="_blank" rel="noopener noreferrer" className="py-1 px-3 border rounded-xl text-white bg-black/90 border-black/30 flex items-center gap-3 poppins-regular">
        <LuDownload className="navbar-icon"/>
        <span className="navbar-text poppins-medium">resume</span>
    </a>
  )
}

export default ResumeCard