import React from 'react';
import ProjectList from './ProjectList';


function Project(props) {
  
  return (
   
        <div id="portfolio" className=' bg-gray-900 p-3 w-full max-w-[250px] rounded hover:scale-101 transition-all duration-100'>
          <img src={props.image} alt="Spotify cover image" className='h-auto w-55 rounded' />
          <div className='m-1.5'>
            <span className='font-bold'>{props.title}</span><br />
            <p className='text-sm text-gray-500'>{props.description}</p>
            <div className='flex justify-center mt-2.5 '>
              <a href="" className=' text-white  rounded-full text-sm px-5 py-3 cursor-pointer
              bg-gradient-to-r from-purple-600 to-purple-800 hover:scale-105 transition-all duration-300 font-semibold'>Demo</a>
            </div>
          </div>
        </div>
      
  )
}

export default Project
 