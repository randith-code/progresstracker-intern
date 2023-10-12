import React from "react";
import {ReactComponent as Close} from '../assets/Close.svg'
import { db } from "../firebase/firebaseConfig";
import { doc, updateDoc } from 'firebase/firestore'

const TaskDetailsModel = (props) => {

    const btnRef = React.useRef()

    const handleClick = async() => {

    const taskRef = doc(db, "tasks", props.id)
       try{
            const res = await updateDoc(taskRef, {
                status: "completed"
            })
            if(res){
                btnRef.current.disabaled
            }
       }
       catch{
            console.log('task status updating failed..!')
       }

    }

    return(
        <div onClick={(e) => {e.stopPropagation()}} className="bg-white z-20 flex flex-col items-center p-4 rounded-md w-fit">
            <span className="w-10/12 flex justify-end">
                <Close className='cursor-pointer' onClick={() => {props.setVisibility(false)}}/>
            </span>
            <table className="w-10/12 my-5">
               <tbody>
                <tr>
                        <td className="text-right">Title &nbsp;: &nbsp;</td>
                        <td>{props.title}</td>
                    </tr>
                    <tr>
                        <td className="text-right">Asigned Date &nbsp;: &nbsp;</td>
                        <td>{props.startDate}</td>
                    </tr>
                    <tr>
                        <td className="text-right">Due Date &nbsp;: &nbsp;</td>
                        <td>{props.dueDate}</td>
                    </tr>
                    <tr>
                        <td className="text-right">Instructor &nbsp;: &nbsp;</td>
                        <td>{props.instructor}</td>
                    </tr>
                    <tr>
                        <td className="text-right">Materials or Reference links &nbsp;: &nbsp;</td>
                        <td>{props.links}</td>
                    </tr>
               </tbody>
            </table>
            <span className="w-10/12 flex justify-end">
                <button disabled={(props.status == 'completed') ? true :false} 
                ref={btnRef} 
                onClick={handleClick} 
                className={(props.status == 'completed') ? "bg-gray-400 rounded-md py-1 px-3 text-white": "bg-blue-700 rounded-md py-1 px-3 text-white"}
                >
                    Mark as done
                </button>
            </span>
        </div>
    )
}

export default TaskDetailsModel