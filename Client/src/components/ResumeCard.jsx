import { LuDownload } from "react-icons/lu";
import "./BottomNavbar.css"

const ResumeCard = () => {
  return (
    <div className="py-1 px-3 border rounded-xl bg-white/90 text-black border-white/30 flex items-center gap-3 poppins-regular">
        <LuDownload className="navbar-icon"/>
        <span className="navbar-text poppins-medium">resume</span>
    </div>
  )
}

export default ResumeCard