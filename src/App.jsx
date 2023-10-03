import './App.css'
import React,{ useEffect } from 'react'
import LayoutItemsContainer from './layouts/LayoutItemsContainer'
import Tasks from './components/Tasks'
import StudyMaterials from './components/StudyMaterials'
import InternDiary from './components/InternDiary'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { gapi } from 'gapi-script'



function App() {

  const scope = 'https://www.googleapis.com/auth/documents'

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        apiKey:process.env.REACT_APP_API_KEY,
        clientId:process.env.REACT_APP_CLIENT_ID,
        scope:scope
      })
    }

    gapi.load('client:auth2', start)
  })

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={ <LayoutItemsContainer/>}>
          <Route index element={<Tasks/>}/>
          <Route path='studymaterials' element={<StudyMaterials/>}/>
          <Route path='diary' element={<InternDiary/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
