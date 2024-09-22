import '../BottomNavbar/BottomNavbar.css'
import contact_bg from '../../assets/contact-bg.jpg'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import CopyToClipboardButton from './CopyToClipboardButton';
import './ContactMe.css'
const ContactMe = () => {

  const defineBG = {
    backgroundImage: `url(${contact_bg})`,
    backgroundColor: "#1a1819",
    backgroundRepeat: "no-repeat",
    backgroundSize: "70% 100%",
    backgroundPosition: "top center"
  };

  return (
    <div className='contact-me-container w-full h-full flex flex-col rounded-t-[70px] justify-center gap-7 items-center' style={defineBG}>
      
      <p className="contact-me-title about-me-title PolySansBulky text-5xl flex flex-row justify-center items-center text-[#f5f5f4] ">
        Contact Me
      </p>
      
      <p className='contact-me-description text-white PolySansSlim text-3xl text-center'>
        Excited to explore new opportunities! Whether you have questions, collaboration ideas, proposals, or just want to connect, feel free to reach out. Let’s join forces and build something remarkable together!
      </p>
      
      <div className='emailClass px-5 py-3 m-5 bg-white rounded-xl hover:cursor-text PolySansMedian flex flex-row items-center'>
        <span>email:</span> &nbsp; 
        <span className='PolySansSlim mr-5'>aryangupta8291@gmail.com</span>
        <span>
          <CopyToClipboardButton content="aryangupta8291@gmail.com"/>
        </span>
      </div>

      <div className='socials-container flex flex-row gap-5 text-5xl mb-5'>
        
        <div>
          <a href="https://github.com/aryanploxxx" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-white hover:text-[#f5f5f4] transition-all'/>
          </a>
        </div>
        
        <div>
          <a href="https://linkedin.com/in/aryanploxxx" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin className='text-white hover:text-[#f5f5f4] transition-all'/>
          </a>
        </div>
        
        <div>
          <a href="https://x.com/aryangupta_03" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className='text-white hover:text-[#f5f5f4] transition-all'/>
          </a>
        </div>
      
      </div>

    </div>
  )
}

export default ContactMe