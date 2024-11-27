import { useState } from 'react'
import './App.css'
import List from './pages/List'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './pages/NavBar'
import Person from './pages/Person'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='List' element={<List/>} />
      <Route path="/person/:id" element={<Person />} />
    </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
