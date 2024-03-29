import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/SignIn.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Header from './Components/Header.jsx'
import SignUp from './pages/SignUp.jsx'
import Footer from './Components/Footer.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
          <Route path='/sign-in' element={<Signin/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/Projects' element={<Projects/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
