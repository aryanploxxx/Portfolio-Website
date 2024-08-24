/* eslint-disable react/prop-types */
import './BottomNavbar.css'
const SkillTab = ({ name, icon: Icon }) => {
  return (
    <div className="skillsTab inline-flex items-center px-2 py-1 m-1 rounded-md text-2xl text-white bg-white/10 backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105">
      <Icon className="mr-1" />
      {name}
    </div>
  )
}

export default SkillTab