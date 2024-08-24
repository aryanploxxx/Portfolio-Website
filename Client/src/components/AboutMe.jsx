import Skills from "./Skills"

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col flex-wrap justify-center items-left gap-5 w-[70%] text-white">
      
      <p className="about-me-title mb-5 w-1/5 flex flex-row justify-center items-center border border-white/30 rounded-xl bg-white/10 backdrop-blur-md shadow-lg font-['Gilroy'] font-light text-3xl tracking-[2px] px-4 py-2">
        about me
      </p>
     
      <p className="about-me-description w-full font-['Gilroy'] font-bold">
        i craft <span className="highlight text-[#c1ef7b]">beautiful digital experiences, </span>one pixel at a time with a passion for perfection & a dash of creativity!
      </p>

      <Skills />
    </div>
  )
}

export default AboutMe