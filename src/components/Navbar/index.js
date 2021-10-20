import React, { useContext } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SignupContext } from '../../ContextApi';
import SignUp from '../Signup';
import Login from '../Login';

const MobileNav = () => {
    return (

        <div className="p-4 md:hidden flex items-center justify-between w-full ">
            <div className="w-28">
                <Link to="/"><img className="w-full h-full cursor-pointer" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" /></Link>
            </div>
            <div className="flex items-center gap-3" >
                <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
                    Use App
                </button>
                <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                    <BiUser />
                </span>
            </div>
        </div>
    )

}
const LgNav = () => {
    
    const [open, setOpen, loginOpen , setLoginOpen] = useContext(SignupContext)
    return (
        <div className="flex items-center justify-around ">
            <div className="flex items-center justify-between my-1 py-4 text-gray-400 hidden lg:flex w-4/5">
                <div className="flex items-center">
                    <div className="w-24 h-6 mr-64">
                    <Link to="/"><img className="w-full h-full cursor-pointer" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" /></Link>
                    </div>
                    <div className="flex bg-white items-center px-2 gap-3 shadow-md">
                        <div className="flex items-center w-36">
                            <IoLocationSharp className="text-zomato-500" />
                            <input type="text" placeholder="Enter location" name="location" id="location" className="p-2 w-full rounded-md text-md" />
                        </div>
                        <span>|</span>
                        <div className="flex items-center w-80">
                            <AiOutlineSearch />
                            <input type="text" placeholder="Search for restaurant cuisine or a dish " name="location" id="location" className="p-2 rounded-md w-full  text-md" />
                        </div>

                    </div>
                </div>
                <div className="flex gap-8" >
                <button onClick={()=>(setLoginOpen(!loginOpen))} >
                    Log In

                    </button>
                <button onClick={() => (setOpen(!open))}>
                    Sign Up

                    </button>
                </div>
            </div>
        </div>
    )

}
const MdNav = () => {
    const [open, setOpen, loginOpen , setLoginOpen] = useContext(SignupContext)
    return (
        <div className="flex items-center w-full justify-around ">
            <div className="flex items-center justify-between my-1 py-4 text-gray-400 hidden md:flex lg:hidden w-full px-20">
                <div className="flex items-center">
                    <div className="w-24 h-6 mr-6">
                        <img className="w-full h-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" />
                    </div>
                    <div className="flex bg-white items-center px-1 gap-2 shadow-md">
                        <div className="flex items-center w-24">
                            <IoLocationSharp className="text-zomato-500" />
                            <input type="text" placeholder="location" name="location" id="location" className="p-2 w-full rounded-md text-md" />
                        </div>
                        <span>|</span>
                        <div className="flex items-center">
                            <AiOutlineSearch />
                            <input type="text" placeholder="Search for restaurant dish" name="location" id="location" className="p-2 rounded-md w-full  text-md" />
                        </div>

                    </div>
                </div>
                <div className="flex gap-8" >
                <button onClick={()=>(setLoginOpen(!loginOpen))} >
                    Log In

                    </button>
                <button onClick={() => (setOpen(!open))}>
                    Sign Up

                    </button>
                </div>
            </div>
        </div>
    )

}
function Navbar() {
    return (
        <>
            <nav >
                <MobileNav />
                <MdNav />
                <LgNav />
                <SignUp/>
                <Login/>
                <hr className="mx-40 my-2"/>
            </nav>

        </>
    )
}

export default Navbar;