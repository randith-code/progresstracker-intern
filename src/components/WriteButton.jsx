import React from "react";
import {ReactComponent as WriteIcon } from '../assets/WriteIcon.svg'
const WriteButton = () => {
    return(
        <button className="group flex gap-3 text-blue-700 hover:text-white hover:bg-blue-700 rounded-md border border-blue-700 py-1 px-3">
            <WriteIcon className="stroke-blue-700 group-hover:stroke-white"/>
            Write
        </button>
    )
}

export default WriteButton