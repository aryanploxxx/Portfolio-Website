/* eslint-disable react/prop-types */
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button"
// import { Link } from "react-router-dom";

const ProjectCard = ({source, name, githubLink, externalLink, firebase}) => {
    return (
      <div className="relative flex flex-col my-2 bg-white shadow-sm  rounded-lg w-96">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md object-cover">
        <img src={source} alt="project-image" className="h-full"  />
        <div className="absolute bottom-2 left-2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-md">
        <span className="text-white text-sm font-semibold">{name}</span>
        </div>
        </div>
        
        <div className="ml-2.5 w-full gap-x-2 flex flex-row justify-left flex-wrap ">
        <div className="mb-1 rounded-full border border-black py-0.5 px-2.5 text-xs text-black transition-all shadow-sm w-20 text-center">
          React
        </div>
        <div className="mb-1 rounded-full border border-black py-0.5 px-2.5 text-xs text-black transition-all shadow-sm w-20 text-center">
          NodeJS
        </div>
        <div className="mb-1 rounded-full border border-black py-0.5 px-2.5 text-xs text-black transition-all shadow-sm w-20 text-center">
          MongoDB
        </div>
        <div className="mb-1 rounded-full border border-black py-0.5 px-2.5 text-xs text-black transition-all shadow-sm w-20 text-center">
          ExpressJS
        </div>
        <div className="mb-1 mt-1 rounded-full border border-black py-0.5 px-2.5 text-xs text-black transition-all shadow-sm w-24 text-center">
          Tailwind CSS
        </div>
        { firebase &&
          <div className="mb-1 mt-1 rounded-full border border-black py-0.5 px-2.5 text-xs text-black transition-all shadow-sm w-20 text-center">
            {firebase}
          </div>
        }
        </div>
        
        <div className="flex flex-row gap-2">
          {externalLink && (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className={"m-3 mr-0 " + (githubLink ? "w-1/2 " : "w-full ") + " flex flex-row justify-center items-center"}>
            <Button className="w-full flex flex-row justify-center items-center">
              <RiExternalLinkLine className="mr-2 text-xl text-white cursor-pointer rounded-full bg-black"/>
              Link
            </Button>
            </a>
          )}

          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className={"m-3 ml-2.5 " + (externalLink ? "w-1/2 " : "w-full ") + " flex flex-row justify-center items-center"}>
            <Button className="w-full flex flex-row justify-center items-center">
              <FaGithub className="mr-2 text-xl text-white cursor-pointer rounded-full bg-black"/>
              GitHub
            </Button>
            </a>
          )}
        </div>
      </div>
    );
  };
  
  export default ProjectCard;