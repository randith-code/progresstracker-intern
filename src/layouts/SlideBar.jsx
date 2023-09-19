import React from "react";
import {ReactComponent as Task} from '../assets/Task.svg'
import {ReactComponent as StudyMaterials} from '../assets/StudyMaterials.svg'
import {ReactComponent as Diary} from '../assets/Diary.svg'
import { NavLink } from "react-router-dom";


export const Tittle = (props) => {
    return(
        <div className="w-10/12 border-b-2 flex justify-center border-gray-300 hover:border-blue-400 m-2">
            <div className="w-5/6 flex hover:bg-blue-50 justify-center pt-2">
                <span className="group w-5/6 flex gap-2 hover:text-blue-700">
                    {props.children}
                </span>
            </div>
        </div>
    )
}

const SlideBar = (props) => {
    
    return(
        <section className={`w-full sm:w-1/5 hidden sm:flex flex-col justify-center items-center bg-white drop-shadow-lg`}>
           <span className="w-full h-5/6 flex flex-col gap-2 items-center">
                <NavLink to='/' className='w-full' >
                    <Tittle>
                        <Task className="fill-slate-600 group-hover:fill-blue-700"/>
                        <h2 className="group-hover:text-blue-700">Tasks</h2>
                    </Tittle>
                </NavLink>
                <NavLink to='/studymaterials' className='w-full'>
                    <Tittle>
                        <StudyMaterials className="fill-slate-600  group-hover:fill-blue-700"/>
                        <h2 className="group-hover:text-blue-700">Study Materials</h2>
                    </Tittle>
                </NavLink>
                <NavLink to='/diary' className='w-full'>
                    <Tittle>
                        <Diary className="fill-slate-600 group-hover:fill-blue-700"/>
                        <h2 className="group-hover:text-blue-700">Intern Diary</h2>
                    </Tittle>
                </NavLink>
           </span>
        </section>
    )
}

export default SlideBar

