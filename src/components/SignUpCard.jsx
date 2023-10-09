import React, {useRef, useState} from "react";
import { useAuth } from "../store/Auth/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from 'firebase/firestore'

const SignupCard = (props) => {

    const emailRef = useRef()
    const passwordRef  = useRef()
    const confirmPasswordRef = useRef()
    const userNameRef = useRef()
    const roleRef = useRef()
    const [error,setError] = useState()
    const [loading, setLoading] = useState(false)
    const { signup, updateProfile, currentUser } = useAuth()
    const navigate = useNavigate()
    const internCollectionRef = collection(db, "interns")


    const handleSubmit = async(e) => {
        e.preventDefault()


        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('passwords do not match')
        }

        try{
            setError('')
            setLoading(true)
            const userCredentials = await signup(emailRef.current.value, passwordRef.current.value)

            if(userCredentials){
                await updateProfile(userNameRef.current.value)
                console.log(userCredentials)


                const intern ={
                    uid: userCredentials.user.uid,
                    name: userNameRef.current.value,
                    email: emailRef.current.value,
                    role: roleRef.current.value
                }

                await addDoc(internCollectionRef, intern)
                navigate('/')
            }

        }
        catch{
            setError('Failed to sign up.')
        }

        setLoading(false)
    }

    return(
    <span className="flex flex-col gap-8 bg-white drop-shadow-lg w-3/4 sm:w-1/2 p-5 rounded-md">
        <h1 className="text-xl text-blue-700 font-semibold">SignUp</h1>
        <p className="text-gray-700 text-sm">
            Help others to build up their career.
        </p>
        {error ? <p className="text-center text-xs text-red-600">{error}</p> : null}
        <form onSubmit={handleSubmit} className="flex flex-col" action="">
            <label className="flex flex-col py-2" htmlFor="userName">
                User Name
                <input ref={userNameRef} className="outline-none border border-gray-500 py-1 px-2 rounded-md" type="text" id="userName" />
            </label>
            <label className="flex flex-col py-2" htmlFor="email">
                Email
                <input ref={emailRef} className="outline-none border border-gray-500 py-1 px-2 rounded-md" id="email" type="email" />
            </label>

            <label className="flex flex-col py-2" htmlFor="password">
                Password
                <input ref={passwordRef} className="outline-none border border-gray-500 py-1 px-2 rounded-md" type="password" name="password" />
            </label>
            <label className="flex flex-col py-2" htmlFor="confirmPassword">
                Confirm Password
                <input ref={confirmPasswordRef} className="outline-none border border-gray-500 py-1 px-2 rounded-md" type="password" name="confirmPassword" />
            </label>
            <label className="flex flex-col py-2" htmlFor="role">
                Role
                <select ref={roleRef} defaultValue="QA" className="border border-gray-500 rounded-md py-1 px-2" id="role">
                    <option value="QA">Quality Assurance</option>
                    <option value="ForntEnd">Front-End</option>
                    <option value="BackEnd">Back-End</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </label>
            <button disabled={loading} type="submit" className="bg-blue-700 text-white rounded-md py-2 my-2">SignUp</button>
            <hr className="my-2"/>
            <p className="text-center text-sm">Already have an account? <span onClick={() => props.setCard(true)} className="text-blue-700 cursor-pointer">Login</span></p>
        </form>
    </span>
    )
}

export default SignupCard