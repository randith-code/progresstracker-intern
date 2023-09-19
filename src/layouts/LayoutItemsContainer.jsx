import React, { useState } from "react"
import NavBar from "./NavBar"
import SlideBar from "./SlideBar"
import MobileSlider from "../components/MobileSlider"

const LayoutItemsContainer = (props) => {

    const [open, setOpen] = useState(false)

    return(
        <div className='w-screen h-screen flex flex-col'>
            <NavBar open={open} setOpen={setOpen}/>
            <div className="relative w-full flex-1 flex">
                <MobileSlider open={open} setOpen={setOpen}/>
                <SlideBar open={open}/>
                <div className="flex-1 flex flex-col items-center  bg-gray-100">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default LayoutItemsContainer