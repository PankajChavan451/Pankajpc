import logo from "../assets/logo.png"
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function Header(){
    const navHeaders = [
      'Home',
      'Shop',
      'About',
      'Contact'
    ]
    const iconHeaders = [
      <FaUser/>,
      <CiSearch/>,
      <FaRegHeart/>,
      <IoCartOutline/>
    ]

    const renderNavbars = navHeaders.map((nav)=>{
      return (
        <a className="font-bold">
          {nav}
        </a>
      )
    })

    const renderIconNav = iconHeaders.map((icon) => {
      return (
        <div className="cursor-pointer">
          {icon}
        </div>
      )
    })


    return (
       <div className="flex flex-row h-20 w-full justify-around items-center gap-10">
          <img className="h-10 cursor-pointer" src={logo}/>
          <div className="flex flex-row gap-10 cursor-pointer">
            {renderNavbars}
          </div>
          <div className="flex flex-row gap-10 text-2xl"> 
            {renderIconNav}
          </div>
       </div>
    )
}
export default Header