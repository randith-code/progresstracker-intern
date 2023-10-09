import './App.css'
import React,{ useEffect } from 'react'
import LayoutItemsContainer from './layouts/LayoutItemsContainer'
import Tasks from './components/Tasks'
import StudyMaterials from './components/StudyMaterials'
import InternDiary from './components/InternDiary'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  const scope = 'https://www.googleapis.com/auth/documents'

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
