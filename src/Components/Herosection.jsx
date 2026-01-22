import React from 'react';

function Herosection() {
  return (
    <section id="home" className="flex justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="w-full max-w-4xl text-center">
      
       <img src="src\assets\linkedinphoto.jpg" alt="profilephoto" className='h-30 w-30 rounded-full mx-auto mb-2 border-2' /> 
     
      {/**/}
      <p className="text-base sm:text-md md:text-md text-gray-200 leading-relaxed font-medium tracking-wide">
        Hi, I'm <span className="text-purple-400 font-semibold">Murshida Nasrin</span> <br />
        A passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> specializing in the <span className="text-purple-400 font-semibold">MERN stack</span> – MongoDB, Express, React, and Node.js.
        <br /><br />
        Skilled in building fast, responsive, and user-friendly web applications from front-end to back-end. Enthusiastic about transforming ideas
        into real-world solutions through clean design and powerful APIs.
        <br /><br />
        <span className="italic text-gray-300">Let’s build something amazing together!</span>
      </p>
      <a
        href="/public/Murshida Nasrin.pdf"
        download
        className="inline-block mt-8 py-3 px-7 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:scale-105 transition-all duration-300 text-white font-semibold cursor-pointer"
      >
        Download Resume
      </a>
     </div> 
     
   </section>
    
       
  );
}

export default Herosection
