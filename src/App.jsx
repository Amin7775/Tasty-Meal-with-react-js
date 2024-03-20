import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import './font.css'
function Main() {
 

  return (
    <>
    <div className="roboto">
      <Header></Header>
      <div className="bg-[#2c2012] border-t border-black border-dotted">
      <Outlet></Outlet>
      </div>
    </div>
    </>
  )
}

export default Main
