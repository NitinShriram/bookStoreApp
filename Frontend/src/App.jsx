import React from 'react'
import Home from './home/Home'
import {Route,Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './contact/Contact'
import About from './about/About'

function App() {
  return (
    <>
    <div className='dark:bg-stone-950 dark:text-white'>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
