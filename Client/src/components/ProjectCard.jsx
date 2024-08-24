/* eslint-disable react/prop-types */
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({url, name, githubLink, externalLink}) => {
    return (
      <div className="w-[calc(100%-2rem)] mx-4 md:w-[49%] md:mx-0 p-1 border border-white/30 rounded-xl bg-white/10 backdrop-blur-md shadow-lg mb-4">
        
        <div className="relative h-full group">
          
          <img
            src={url}
            alt="Project thumbnail"
            className="object-cover w-full rounded-lg h-full"
          />

          {/* Project name with glassmorphism effect */}
          <div className="absolute bottom-2 left-2 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/30 rounded-md">
            <span className="text-white text-sm font-semibold">{name}</span>
          </div>

          {/* Content to be displayed on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white p-4 flex flex-row items-center justify-center gap-5 text-6xl">
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="cursor-pointer border border-white/30 p-2 rounded-full bg-black"/>
                  </a>
                )}
                {externalLink && (
                  <a href={externalLink} target="_blank" rel="noopener noreferrer">
                    <RiExternalLinkLine className="cursor-pointer border border-white/30 p-2 rounded-full bg-black"/>
                  </a>
                )}
            </div>
          </div>

        </div>

      </div>
    );
  };
  
  export default ProjectCard;