import { useState } from 'react'
import './App.css'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import Notfound from './pages/Notfound'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import { getEmotionImage } from './util/get-emotion-image'
import Button from './components/Button'

function App() {

  return (
    <>
      <Button></Button>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/New' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} /> 
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>

  )
}

export default App
