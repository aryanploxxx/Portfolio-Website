import ProjectCard from "./ProjectCard"
import './BottomNavbar.css'

const Projects = () => {
  return (
    <div className="projects-container flex flex-col flex-wrap justify-center items-left gap-5 w-full md:w-[70%] text-white">
    
      <p className="about-me-title mb-5 w-[calc(100%-2rem)] mx-4 md:w-1/5 md:mx-0 flex flex-row justify-center items-center border border-white/30 rounded-xl bg-white/10 backdrop-blur-md shadow-lg font-['Gilroy'] font-light text-3xl tracking-[2px] px-4 py-2">
        projects
      </p>
     
      <div className="flex flex-col md:flex-row md:flex-wrap gap-2 justify-between">
        <ProjectCard url="../src/assets/project_images/buzzvibe.jpg" name="BuzzVibe - Social Media Application" githubLink="https://github.com/aryanploxxx/BuzzVibe-Social-Media-Application" externalLink="https://buzzvibe-social-media-aryan.vercel.app"/>
        <ProjectCard url="../src/assets/project_images/kioskmeet.jpg" name="KioskMeet - One Stop Campus Solution" githubLink="https://github.com/aryanploxxx/KioskMeet-Minor-Project" externalLink=""/>
        <ProjectCard url="../src/assets/project_images/widgetwall.jpg" name="WidgetWall - Productivity Management Chrome Extension" githubLink="https://github.com/aryanploxxx/WidgetWall-Chrome-Extension" externalLink="https://widget-wall-chrome-extension.vercel.app/"/>
        <ProjectCard url="../src/assets/project_images/compilex.jpg" name="CompileX - Online Coding Platform" githubLink="https://github.com/pritpalcodes/CodeRaiders-Tally-Codebrewers-24" externalLink=""/>
        <ProjectCard url="../src/assets/project_images/squadspeak.jpg" name="SquadSpeak - Chatting Application" githubLink="https://github.com/aryanploxxx/SquadSpeak-Chat-App" externalLink=""/>
        <ProjectCard url="../src/assets/project_images/jobspool.jpg" name="JobsPool - Job Search Platform" githubLink="https://github.com/aryanploxxx/Jobs-Portal-React" externalLink="https://aryan-jobs-portal-frontend.vercel.app/"/>
      </div>
      
    </div>
  )
}

export default Projects