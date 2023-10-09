import React,{ useRef } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from 'firebase/firestore'

const GetTitleModel = (props) => {

    const diaryRef = useRef()
    const tittleRef = useRef()
    const diaryCollectionRef = collection(db, 'diarynotes')
    const user = JSON.parse(localStorage.getItem("user"));


    const getCurrentDateTimeAsString = () => {
        const currentDateTime = new Date();
        const dateString = currentDateTime.toLocaleDateString();
        const timeString = currentDateTime.toLocaleTimeString();
        return `${dateString} ${timeString}`;
    }

    console.log(user)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const diaryNote = {
            owner: user.displayName,
            email: user.email,
            tittle: tittleRef.current.value,
            content: diaryRef.current.value,
            createdDate: getCurrentDateTimeAsString()
        }

        const res = await addDoc(diaryCollectionRef, diaryNote)
        if(res){
            props.setVisibility(false)
        }
      
    }

    return(
        <form
            className="w-1/3 h-2/3 flex flex-col items-start justify-evenly bg-white rounded-md" 
            onSubmit={handleSubmit} 
            onClick={(e) => {e.stopPropagation()}}
        >
            <input className="outline-none border border-gray-500 p-1 rounded-md mx-3" placeholder="Title" ref={tittleRef} type="text" />
            <label className="text-lg px-3" htmlFor="title">
                Daily note : &nbsp;
            </label>
            <textarea className="outline-none border border-gray-500 p-1 rounded-md mx-3 w-11/12 h-3/5" ref={ diaryRef } type="text" />
            <button
                className=" mx-3 flex gap-3 text-blue-700 hover:text-white hover:bg-blue-700 rounded-md border border-blue-700 py-1 px-3"  
                type="submit"
            >
                Add Note
            </button>
        </form>
    )
}

export default GetTitleModel