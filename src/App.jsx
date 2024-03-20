import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import './font.css'
function Main() {
 

  return (
    <>
    <div className="roboto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default Main
