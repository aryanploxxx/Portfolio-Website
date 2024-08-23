import { LuDownload } from "react-icons/lu";
import "./BottomNavbar.css"

const ResumeCard = () => {
  return (
    <div className="p-2 border rounded-2xl border-white/30 flex items-center gap-2 poppins-regular">
        <LuDownload className="navbar-icon"/>
        <span className="navbar-text poppins-medium">resume</span>
    </div>
  )
}

export default ResumeCard