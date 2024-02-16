import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Dashboard from './pages/Dashboard.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/sign-in' element={<Signin/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/Projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}
