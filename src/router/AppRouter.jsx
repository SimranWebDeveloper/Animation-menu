import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Menu from '../Menu/Menu'

const AppRouter = () => {

    const[isOpen,setIsOpen]=useState(false)

  return (
    <>
      <BrowserRouter>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      
          <Menu isOpen={isOpen}></Menu>
        {/* <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about'element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
        </Routes> */}
      </BrowserRouter>
    </>
  )
}

export default AppRouter
