import BottomNavbar from "../components/BottomNavbar"

const Home = () => {
  return (
    <div className="h-full w-full">
        <div className="fixed bottom-0 left-0 right-0 mb-4 z-50 flex justify-center cursor-pointer">
          <BottomNavbar />
        </div>
    </div>
  )
}

export default Home