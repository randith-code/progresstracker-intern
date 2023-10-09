import React, { useEffect, useState } from "react";
import { SearchBar, Sort, sortByField } from "./SearchShortFilter";
import DocumentThread from "./DocumentThread";
import WriteButton from "./WriteButton";
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from 'firebase/firestore'

const InternDiary = () => {

    const diaryCollectionRef = collection(db, "diarynotes")
    const user = JSON.parse(localStorage.getItem("user"));
    const [notes, setNotes] = useState([])
    const [value, setValue] = useState('ascending')
    const [sortedArray, setSortedArray] = useState([]);
    
    useEffect(() => {
        const q = query(diaryCollectionRef, where("owner", '==', user.displayName))
        const getDiaryNotes = async() => {
           try{
            const res = await getDocs(q)
            setNotes(res.docs.map((doc) => ({...doc.data(), id: doc.id}))) 
           }
           catch{
            console.log('couln\'t fetch notes..!')
           }
        }

        getDiaryNotes()
    },[])

    useEffect(() => {
        setSortedArray(sortByField(notes, "tittle", value))
    },[value,notes])

    return(
        <div className="w-11/12 h-5/6  my-auto bg-white rounded-md flex flex-col items-center p-4">
            <section className="flex flex-col md:flex-row gap-4 md:gap-0 justify-around items-center w-11/12 py-4">
                <SearchBar/>
                <Sort setValue={setValue}/>
                <WriteButton/>
            </section>
            <section className="flex flex-col w-full h-full max-h-full overflow-y-scroll p-2 gap-2 items-center bg-gray-100 rounded-md">
                {sortedArray.map((note) => (
                    <DocumentThread key={note.id} title={note.tittle} wroteDate={note.createdDate} content={note.content}/>
                ))}
            </section>
        </div>
    )
}

export default InternDiary