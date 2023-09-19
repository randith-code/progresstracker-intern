import React from "react"
import File from "./File"

const StudyMaterials = () => {
    return(
        <div className="w-11/12 h-5/6 max-h-full overflow-y-scroll my-auto bg-white rounded-md grid grid-cols-3 gap-8 p-4">
            <File 
                title='Redux'
                link='https://v2.tailwindcss.com/docs/max-height'
            />   
            <File 
                title='Redux'
                link='https://v2.tailwindcss.com/docs/max-height'
            />    
            <File 
                title='Redux'
                link='https://v2.tailwindcss.com/docs/max-height'
            />      
        </div>
    )
}

export default StudyMaterials