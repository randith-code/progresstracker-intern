import React,{ useRef } from "react";
import createDocument from "../services/createDucument";

const GetTitleModel = (props) => {

    const titleRef = useRef()

    const getCurrentDateTimeAsString = () => {
        const currentDateTime = new Date();
        const dateString = currentDateTime.toLocaleDateString();
        const timeString = currentDateTime.toLocaleTimeString();
        return `${dateString} ${timeString}`;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let fileName = `${titleRef.current.value}_${getCurrentDateTimeAsString()}`
        createDocument(fileName)
        props.setVisibility(false)
    }

    return(
        <form
            className="w-1/3 h-1/3 flex flex-col items-center justify-evenly bg-white rounded-md" 
            onSubmit={handleSubmit} 
            onClick={(e) => {e.stopPropagation()}}
        >
            <label className="text-lg" htmlFor="title">
                Title : &nbsp;
                <input className="outline-none border border-gray-500 p-1 rounded-md " ref={titleRef} type="text" />
            </label>
            <button
                className="flex gap-3 text-blue-700 hover:text-white hover:bg-blue-700 rounded-md border border-blue-700 py-1 px-3"  
                type="submit"
            >
                Create Document
            </button>
        </form>
    )
}

export default GetTitleModel