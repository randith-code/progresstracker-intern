import React, {useState} from "react";
import {ReactComponent as WriteIcon } from '../assets/WriteIcon.svg'
import ModelOverlay from "./ModelOverlay";
import GetTitleModel from "./GetTitleModel";


const WriteButton = () => {

    const [isVisible, setIsVisible] = useState(false)

    return(
        <>
            <button 
                className="group flex gap-3 text-blue-700 hover:text-white hover:bg-blue-700 rounded-md border border-blue-700 py-1 px-3"
                onClick={() => setIsVisible(true)}
            >
                <WriteIcon className="stroke-blue-700 group-hover:stroke-white"/>
                Write
            </button>
            <ModelOverlay visibility={isVisible} setVisibility={setIsVisible}>
                <GetTitleModel setVisibility={setIsVisible}/>
            </ModelOverlay>
        </>
    )
}

export default WriteButton