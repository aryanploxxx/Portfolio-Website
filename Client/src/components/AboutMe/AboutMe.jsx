import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className="about-me-container flex flex-col flex-wrap justify-center items-center gap-9 w-[80%] text-white">
      
      <p className="about-me-title PolySansBulky text-5xl flex flex-row justify-center items-center text-black">
        About Me
      </p>
     
      <p className="about-me-description border border-black/10 p-14 rounded-2xl bg-white font-['Gilroy'] font-normal leading-none text-center w-full text-black shadow-lg">
        i craft <span className="">beautiful digital experiences, </span>one pixel at a time with a passion for perfection & a dash of creativity!
      </p>

    </div>
  )
}

export default AboutMe