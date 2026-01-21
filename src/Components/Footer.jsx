import React from 'react';
import { MdEmail } from 'react-icons/md';
import {FaLinkedin,FaGithub } from "react-icons/fa6";


function Footer() {
  return (
    <div className='mt-15 px-4 sm:px-6 md:px-10 lg:px-15'>
        <div className="flex justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 bg-clip-text text-transparent italic tracking-wide ">
          MN
        </h1>
      </div>
          <div className='flex gap-2 justify-center items-center mt-2 text-sm sm:text-base sm:items-center'>
            <MdEmail className= "text-xl" />
                         <span>murshidanaz02@gmail.com</span>
        </div>

{/* horizontal line */}
       <hr className='mt-10 mx-4 sm:mx-14 lg:mx-20 border-gray-500' />

       <div className='flex flex-col sm:flex-row justify-between items-center gap-4 px-2 sm:px-4 md:px-10 text-xs sm:text-sm mx-10 mt-2 mb-10 '>
        <p className='text-center sm:text-left text-sm'> © 2025 Murshida Nasrin. All rights reserved.</p>
        <ul className=' justify-items-end gap-2 inline-flex '>
          <li className='hover:text-purple-600 hover:scale-105 transition-all duration-300'><a href="https://www.linkedin.com/in/murshida-nasrin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='text-xl cursor-pointer'/></a></li>
          <li className='hover:text-purple-600 hover:scale-105 transition-all duration-300'><a href="https://github.com/MurshidaNazrin">
            <FaGithub className='text-xl cursor-pointer'/></a></li>
          <li className='hover:text-purple-600 hover:scale-105 transition-all duration-300'><a href="mailto:murshinaz02@gmail.com">
            <MdEmail className='text-xl cursor-pointer'/></a></li>
        </ul>
       </div>
    </div>
  )
}

export default Footer



