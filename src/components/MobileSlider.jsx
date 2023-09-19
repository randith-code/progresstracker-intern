import React from "react";
import { NavLink } from "react-router-dom";
import { Tittle } from "../layouts/SlideBar";
import {ReactComponent as Task} from "../assets/Task.svg";
import {ReactComponent as StudyMaterials} from "../assets/StudyMaterials.svg";
import {ReactComponent as Diary} from "../assets/Diary.svg";

const MobileSlider = (props) => {

    let visibility = (props.open) ? 'flex' : 'hidden'

    return(
        <div className={`absolute ${visibility} sm:hidden top-0 left-0 w-full bg-white z-10 h-full`}>
            <span className="w-full h-5/6 flex flex-col gap-2 items-center">
                <NavLink onClick={() => {props.setOpen(false)}} to='/' className='w-full' >
                    <Tittle>
                        <Task className="fill-slate-600 group-hover:fill-blue-700"/>
                        <h2 className="group-hover:text-blue-700">Tasks</h2>
                    </Tittle>
                </NavLink>
                <NavLink onClick={() => {props.setOpen(false)}} to='/studymaterials' className='w-full'>
                    <Tittle>
                        <StudyMaterials className="fill-slate-600  group-hover:fill-blue-700"/>
                        <h2 className="group-hover:text-blue-700">Study Materials</h2>
                    </Tittle>
                </NavLink>
                <NavLink onClick={() => {props.setOpen(false)}} to='/diary' className='w-full'>
                    <Tittle>
                        <Diary className="fill-slate-600 group-hover:fill-blue-700"/>
                        <h2 className="group-hover:text-blue-700">Intern Diary</h2>
                    </Tittle>
                </NavLink>
           </span>
        </div>
    )
}

export default MobileSlider