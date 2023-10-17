import React, { useEffect, useState } from "react"
import File from "./File"
import { db } from "../firebase/firebaseConfig"
import { collection, query, where, getDocs} from 'firebase/firestore'

const StudyMaterials = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const [ownDetails, setOwnDetails] = useState()
    const [studyMaterials, setStudyMaterials] = useState([])

    useEffect(() => {
        if(user){
            const internsCollectionRef = collection(db,"interns")
            const getOwnDetails = async() => {
                const q = query(internsCollectionRef, where("email", "==", user.email))
                const res = await getDocs(q)

                setOwnDetails(res.docs.map((doc) => ({...doc.data(), id: doc.id})))
            }

            getOwnDetails()
        }
        else{
            return
        }
    },[])

    useEffect(() => {
        if(ownDetails){
            const materialCollectionRef = collection(db, ownDetails[0].role)
            const getMateials = async() => {
                const res = await getDocs(materialCollectionRef)
                setStudyMaterials(res.docs.map((doc) => ({...doc.data(), id: doc.id})))
            }

            getMateials()
        }
    },[ownDetails])

    return(
        <div className="w-11/12 h-5/6 max-h-full overflow-y-scroll my-auto bg-white rounded-md grid grid-cols-3 gap-8 p-4">
            {
                studyMaterials.map((material) => (
                    <File
                        key={material.id} 
                        title={material.tittle}
                        link={material.materialURL}
                    />   
                ))
            }    
        </div>
    )
}

export default StudyMaterials