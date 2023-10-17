import React, { useEffect, useState } from "react";
import Task from "./Task";
import { SearchBar, Sort, sortByField } from "./SearchShortFilter";
import { db } from '../firebase/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

const Tasks = () => {

    const tasksCollectionRef = collection(db, "tasks")
    const user = JSON.parse(localStorage.getItem("user"));
    const [tasks, setTasks] = useState([])
    const [value, setValue] = useState('ascending')
    const [sortedArray, setSortedArray] = useState([]);


    useEffect(() => {

        if(user){
            const q = query(tasksCollectionRef, where("assignTo", "==", user.displayName))
            const getTasks = async() => {
                try{
                    const res = await getDocs(q)
                    setTasks(res.docs.map((doc) => ({...doc.data(), id: doc.id}))) 
                }
                catch{
                    console.log('tasks fetching is failed')
                }
            }

            getTasks()
        }
        else{
            return
        }
        
    },[])

    // console.log(tasks)
    useEffect(() => {
        setSortedArray(sortByField(tasks, "task", value))
    },[value,tasks])

    return(
        <div className="w-11/12 h-full flex flex-col items-center bg-white p-4 m-2 rounded-md">
            <div className="flex flex-col md:flex-row justify-around items-center w-11/12 py-4">
                <SearchBar/>
                <Sort setValue={setValue}/>
            </div>
            <div className="flex flex-col w-11/12 h-full p-2 gap-2 items-center bg-gray-100 rounded-md">
                <section className=" flex w-10/12 rounded-md">
                   <section className="w-2 rounded-l-md"></section>
                    <section className="flex flex-1 justify-around items-center py-2">
                        <h2>Title</h2>
                        <h2 className="hidden lg:block">Assigned Date</h2>
                        <h2>Due Date</h2>
                        <h2 className="hidden lg:block">Instructor</h2>
                    </section>
                </section>
                <section className="w-full max-h-60 md:max-h-96 overflow-y-scroll flex flex-col gap-2 items-center">
                    {sortedArray.map((task) => (
                         <Task
                            key={task.id}
                            id = {task.id}
                            status = {task.status} 
                            task={task.task}
                            startDate = {task.asignedDate}
                            dueDate = {task.dueDate}
                            instructor={task.instructor}
                            links ={task.links}
                        />
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Tasks