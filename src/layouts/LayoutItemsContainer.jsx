import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import SlideBar from "./SlideBar"
import MobileSlider from "../components/MobileSlider"
import { Outlet, useNavigate } from "react-router-dom"

const LayoutItemsContainer = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if ("user" in localStorage) {
          const user = JSON.parse(localStorage.getItem("user"));
        } else {
            navigate('/login')
        }
      },[]);

    return(
        <div className='w-screen h-screen flex flex-col'>
            <NavBar open={open} setOpen={setOpen}/>
            <div className="relative w-full flex-1 flex">
                <MobileSlider open={open} setOpen={setOpen}/>
                <SlideBar open={open}/>
                <div className="flex-1 flex flex-col items-center  bg-gray-100">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default LayoutItemsContainer