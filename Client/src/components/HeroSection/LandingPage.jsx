/* eslint-disable react/no-unescaped-entities */
import bckgrounfimg from '../../assets/bg.svg';
import ui_avatar from '../../assets/ui-avatar-transformed.png';
// import { styles } from './LandingPage.module.css';
// import Scrolling from './Scrolling';
import './LandingPage.css';

const LandingPage = () => {

  const defineBG = {
    backgroundImage: `url(${bckgrounfimg})`,
    backgroundColor: "#f5f5f4",
    backgroundRepeat: "no-repeat",
    backgroundSize: "70% 100%",
    backgroundPosition: "top right"
  };

  return (
    <div className="overflow-hidden h-screen w-screen text-7xl" style={defineBG}>
      <div className='relative overflow-hidden flex flex-col w-full justify-center items-center'>
        
        <div className='flex flex-col justify-center items-center relative top-14 w-full'>
          
          <span className='greetings hover:text-white hover:bg-black PolySansNeutral p-2 px-7 mb-3 text-xl rounded-full border border-black z-10'>
            Hello!
          </span>
          
          <span className="name PolySansMedian">
            I'm Aryan.
          </span>
          
          <span className='designation text-8xl PolySansNeutralItalic'>
            Software Engineer.
          </span>
        
        </div>
        
        {/* <Scrolling /> */}
        {/* <Scrolling /> */}
        {/* <AboutMe /> */}

        <div className='ui-avatar overflow-hidden bottom-0 left-1/2 transform w-[30%]'>
          <img src={ui_avatar} className='z-1 w-full'/>
        </div>
      
      </div>
    </div>
  );
};

export default LandingPage;