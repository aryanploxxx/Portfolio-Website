import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className="about-me-container flex flex-col flex-wrap justify-center items-center gap-9 w-[70%] text-white">
      
      <p className="about-me-title PolySansBulky text-5xl flex flex-row justify-center items-center text-black">
        About Me
      </p>
     
      <p className="about-me-description font-['Gilroy'] font-normal leading-none text-center w-full text-black">
        i craft <span className="">beautiful digital experiences, </span>one pixel at a time with a passion for perfection & a dash of creativity!
      </p>

    </div>
  )
}

export default AboutMe