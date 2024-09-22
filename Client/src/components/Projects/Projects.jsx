// import ProjectCard from "./ProjectCard"
import '../BottomNavbar/BottomNavbar.css'
import buzzvibe from '../../assets/project_images/buzzvibe.jpg'
import kioskmeet from '../../assets/project_images/kioskmeet.jpg'
import widgetwall from '../../assets/project_images/widgetwall.jpg'
import compilex from '../../assets/project_images/compilex.jpg'
import squadspeak from '../../assets/project_images/squadSpeak.jpg'
import jobspool from '../../assets/project_images/jobspool.jpg'

import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className="about-me-container  flex flex-col flex-wrap justify-center items-left gap-9  text-white">
      
      <p className="mt-[20px] about-me-title PolySansBulky text-5xl flex flex-row justify-center items-center text-black">
        Projects
      </p>

      <div className='flex flex-col flex-wrap'>

          <div className='flex flex-row gap-5 flex-wrap justify-center'>
            <ProjectCard firebase="Firebase" source={buzzvibe} name="BuzzVibe - Social Media Application" githubLink="https://github.com/aryanploxxx/BuzzVibe-Social-Media-Application" externalLink="https://widget-wall-chrome-extension.vercel.app/"/>
            <ProjectCard source={widgetwall} name="Productivity Management Chrome Extension" githubLink="https://github.com/aryanploxxx/WidgetWall-Chrome-Extension" externalLink="https://widget-wall-chrome-extension.vercel.app/"/>
            <ProjectCard source={jobspool} name="JobsPool - Job Search Platform" githubLink="https://github.com/aryanploxxx/Jobs-Portal-React" externalLink="https://aryan-jobs-portal-frontend.vercel.app/"/>
         
            <ProjectCard source={kioskmeet} name="KioskMeet - One Stop Campus Solution" githubLink="https://github.com/aryanploxxx/KioskMeet-Minor-Project" externalLink=""/>
            <ProjectCard source={compilex} name="CompileX - Online Coding Platform" githubLink="https://github.com/pritpalcodes/CodeRaiders-Tally-Codebrewers-24" externalLink=""/>
            <ProjectCard source={squadspeak} name="SquadSpeak - Chatting Application" githubLink="https://github.com/aryanploxxx/SquadSpeak-Chat-App" externalLink=""/>
          </div>
        
      </div>
    
    </div>
  )
}

export default Projects