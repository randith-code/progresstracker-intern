import './App.css'
import LayoutItemsContainer from './layouts/LayoutItemsContainer'
import Tasks from './components/Tasks'
import StudyMaterials from './components/StudyMaterials'
import InternDiary from './components/InternDiary'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <LayoutItemsContainer>
          <Routes>
            <Route path='/' element={<Tasks/>}/>
            <Route path='/studymaterials' element={<StudyMaterials/>}/>
            <Route path='/diary' element={<InternDiary/>}/>
          </Routes>
      </LayoutItemsContainer>
    </BrowserRouter>
    </>
  )
}

export default App
