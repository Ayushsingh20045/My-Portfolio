import { Cross, Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
   <>
   <nav className=' w-full  md:flex md:items-center md:justify-between md:px-15 px-4  flex items-center  justify-between '>
   <div className="logo">
    <img src="logo.png" alt="" className='w-32 h-24' />
   </div>
   {/* mobile view button*/}
   <div
   onClick={()=>setIsOpen(!isOpen)}
   className="md:hidden mr-2">
          {isOpen ? <X className='text-white ' /> : <Menu className='text-white' />}
   </div>

   {/* mobile nav */}
        <div
          className={`absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 md:hidden transition-all duration-300 ${isOpen ? "block" : "hidden"
            }`}
        >
          <a className='text-white font-semibold tracking-wide' href="#home">Home</a>
          <a className='text-white font-semibold tracking-wide' href="#about">About</a>
          <a className='text-white font-semibold tracking-wide' href="#projects">Projects</a>
          <a className='text-white font-semibold tracking-wide' href="#contact">Contact</a>
          <a href="/public/NewMainResume - Copy.pdf" target='_blank'
            className='text-white font-semibold tracking-wide' >Resume</a>
        </div>
      


   {/* laptopview */}
   <div className="links flex hidden md:block">
    <ul className='flex text-white font-semibold gap-8 text-lg cursor-pointer mr-8'>
     
            <ul className="flex gap-6 tracking-wide">

              <li>
                <a href="#home" className="nav-item">Home</a>
              </li>
              <li>
                <a href="#about" className="nav-item">About</a>
              </li>
              <li>
                <a href="#projects" className="nav-item">Projects</a>
              </li>
              <li>
                <a href="#contact" className="nav-item">Contact</a>
              </li>
              <li>
                <a href="/public/NewMainResume - Copy.pdf" 
                target='_blank'
                className="nav-item">Resume</a>
              </li>
            </ul>
    
    </ul>
    
   </div>

 

   </nav>
   
   </>
  )
}

export default Navbar
