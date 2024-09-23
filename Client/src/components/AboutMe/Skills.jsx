import SkillTab from "./SkillTab"
import { SiCplusplus, SiJavascript, SiMysql, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiExpress, SiTailwindcss, SiGit, SiGithub, SiDocker, SiVisualstudiocode, SiMongodb, SiWindows, SiLinux } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";

import "./AboutMe.css"

const Skills = () => {
    const skillsArray = [
        { name: "C++", icon: SiCplusplus },
        { name: "JavaScript", icon: SiJavascript },
        { name: "SQL", icon: FaDatabase },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "NodeJS", icon: SiNodedotjs },
        { name: "React", icon: SiReact },
        { name: "NextJS", icon: RiNextjsFill },
        { name: "ExpressJS", icon: SiExpress },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Docker", icon: SiDocker },
        { name: "Visual Studio Code", icon: SiVisualstudiocode },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: BiLogoPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Redis", icon: DiRedis },
        { name: "Windows", icon: SiWindows },
        { name: "Linux", icon: SiLinux },
    ]

    return (
        <div className="flex flex-col flex-wrap justify-center items-left gap-5 text-black w-[80%]">
            <p className="mt-[70px] about-me-title PolySansBulky text-5xl flex flex-row justify-center items-center text-black">
            Skills
            </p>
            <div className="border border-black/10 p-10  rounded-2xl bg-white shadow-lg flex flex-wrap justify-center PolySansSlim">
                {
                    skillsArray.map((skill, index) => (
                        <SkillTab key={index} name={skill.name} icon={skill.icon} />
                    ))
                }
            </div>
        </div>
    )
}

export default Skills