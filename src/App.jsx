import React, { useEffect, useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import Navbar from './components/Navigation/Navbar'
import Links from './components/Navigation/Links'


const App = () => {

  let path = useLocation().pathname
  console.log(path);
  
  const [color, setcolor] = useState('white')
  console.log(path)

  


    useEffect(function() {
      if(path == '/agence' || path =='/projects') {
        setcolor('black')
      } else {
        setcolor('white')
      }
    }, [path])
      
   
    
  
    useGSAP(()=>{
      const tl = gsap.timeline()
        gsap.from(".app",{
          opacity:0,
          delay:1.7,
          scale:1.2
        })
        
    }, [path])

  return (
    <div className='app'>
      <Navbar color={color} />
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/links' element={<Links/>}/>
      </Routes>
    </div>
  )
}

export default App