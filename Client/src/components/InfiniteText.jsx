import './InfiniteText.css' 
import { TfiArrowTopRight } from "react-icons/tfi";

const InfiniteText = () => {
  return (
    <div className='moving-text-container w-full -mt-10 py-5 text-white text-6xl font-mono overflow-auto border-y border-white/30 bg-white/10 backdrop-blur-md shadow-lg'>
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