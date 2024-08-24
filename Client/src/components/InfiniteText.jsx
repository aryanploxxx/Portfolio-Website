import './InfiniteText.css' 
import './BottomNavbar'
import { TfiArrowTopRight } from "react-icons/tfi";
import { useEffect, useState } from 'react';

const InfiniteText = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value as needed
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <div className='moving-text-container w-full mt-[90px] mb-[150px] py-5 text-white text-6xl font-mono overflow-auto border-y border-white/30 bg-white/10 backdrop-blur-md shadow-lg'>
        <div className="moving-text w-full flex flex-row items-center justify-start gap-10">
            <h1>WEB DEVELOPER</h1>
            <TfiArrowTopRight className='mt-5'/>
            <h1>GRAPHIC DESIGNER</h1>
            <TfiArrowTopRight className='mt-5'/>
        </div>
    </div>
  )
}

export default InfiniteText