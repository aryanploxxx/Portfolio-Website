import "./BottomNavbar.css"
import ResumeCard from "./ResumeCard"
import { RiHome2Fill } from "react-icons/ri";

const BottomNavbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bottom-navbar text-2xl text-white p-5 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg">
        <RiHome2Fill />
        <ResumeCard />
        <span className="text-md">contact</span>
        <span className="text-md">projects</span>
    </div>
  )
}

export default BottomNavbar