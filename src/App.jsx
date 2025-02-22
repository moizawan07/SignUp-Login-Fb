import { useState } from 'react'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import './App.css'
import SignUp from  './components/signup/Index'
import Login from  './components/login/Index'
import Home from './components/home/Index'

function App() {
  return(
    <BrowserRouter>
       <Routes>
           <Route path='/'        element={<SignUp />}/>
           <Route path='/login'   element={<Login />}/>
           <Route path='/home'    element={<Home />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
