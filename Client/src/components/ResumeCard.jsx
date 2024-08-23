import { LuDownload } from "react-icons/lu";

const ResumeCard = () => {
  return (
    <div className="p-2 border rounded-2xl border-white/30 text-xl flex items-center gap-2 poppins-regular">
        <LuDownload />
        <span className="text-md">resume</span>
    </div>
  )
}

export default ResumeCard