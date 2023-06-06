import { Outlet } from "react-router-dom"
import Navbar from "./Pages/Shared/Navbar/Navbar"
import Footer from "./Pages/Shared/Footer/Footer"


function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
