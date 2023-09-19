import React from "react";
import {ReactComponent as FileIcon} from '../assets/FileIcon.svg'

const File = (props) => {

    return(
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="w-3/5 flex flex-col items-center px-1 md:px-0 py-0 md:py-2 rounded-md bg-gray-100">
                <FileIcon className="w-full"/>
                <p>{props.title}</p>
            </div>
        </a>
    )
}

export default File