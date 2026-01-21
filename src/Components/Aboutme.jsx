
import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaPhp, FaBootstrap, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiMysql } from 'react-icons/si';

function Aboutme() {
    return (
        <div id="aboutme" className='flex flex-col md:flex-row  justify-center gap-10 px-6 py-12 md:px-16 md:py-24  rounded-2xl shadow-lg m-6 items-stretch'>

            {/* Left Side - About Me */}
            <div className='w-full md:w-1/2 text-left p-3'>
                <h1 className="text-4xl font-bold text-purple-500 mb-6 text-center md:text-left">About Me</h1>
                <p className="leading-relaxed text-gray-300 text-base md:text-lg">
                    Full Stack Web Developer specializing in the MERN stack — MongoDB, Express, React, and Node.js.
                    Skilled in building scalable, responsive web applications from front-end to back-end.
                </p>
                <p className="leading-relaxed text-gray-300 text-base md:text-lg mt-4">
                    Passionate about clean code, intuitive design, and solving real-world problems through technology.
                    Always exploring new tools and creative solutions.
                </p>
                <p className="leading-relaxed text-gray-300 text-base md:text-lg mt-4">
                    Open to exciting projects and collaborations.
                </p>
            </div>

            <div className="hidden md:flex justify-center items-stretch">
                <div className="w-px bg-gray-400 h-full scale-x-50 origin-left"></div>
            </div>

            {/* Right Side - Tools Used */}
            <div className="w-full md:w-1/2 text-left p-3">
                <h2 className='text-lg font-bold text-purple-300 mb-2'>Essential Tools I Use</h2>
                <p className="text-gray-300">
                    Discover the powerful Tools and Technologies I use to create exceptional, high performing websites & applications.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {/* MongoDB */}
                    <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <SiMongodb className="text-green-500 text-2xl hover:scale-110 transition-transform" />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>MongoDB</span>
                            <span className='text-gray-400 text-sm'>Database</span>
                        </div>
                    </div>

                    {/* Express */}
                    <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <SiExpress className='text-gray-300 text-2xl hover:scale-110 transition-transform' />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>Express</span>
                            <span className='text-gray-400 text-sm'>Backend Framework</span>
                        </div>
                    </div>

                    {/* React */}
                    <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <FaReact className="text-blue-400 text-2xl hover:scale-110 transition-transform" />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>React</span>
                            <span className='text-gray-400 text-sm'>Frontend Library</span>
                        </div>
                    </div>

                    {/* Node.js */}
                    <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <FaNodeJs className="text-green-400 text-2xl hover:scale-110 transition-transform" />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>Node.js</span>
                            <span className='text-gray-400 text-sm'>Runtime Environment</span>
                        </div>
                    </div>

                    {/* {JavaScript} */}
                    <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <FaJs className="text-yellow-400 text-2xl hover:scale-110 transition-transform" />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>JavaScript</span>
                            <span className='text-gray-400 text-sm'>Interaction</span>
                        </div>
                    </div>

                    {/* {Tailwind Css} */}
                    <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <SiTailwindcss className="text-cyan-400 text-2xl hover:scale-110 transition-transform" />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>Tailwind CSS</span>
                            <span className='text-gray-400 text-sm'>CSS Framework</span>
                        </div>
                    </div>

                    {/* {PHP} */}
                    {/* <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <FaPhp className="text-indigo-300 text-2xl hover:scale-110 transition-transform" />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>PHP</span>
                            <span className='text-gray-400 text-sm'>Server-side Language</span>
                        </div>
                    </div> */}

                    {/* {MySQL} */}
                    <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <SiMysql className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>MySQL</span>
                            <span className='text-gray-400 text-sm'>Relational Database</span>
                        </div>
                    </div>

                    {/* Bootstrap */}
                    <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <FaBootstrap style={{color:'#7952B3'}} className=" text-2xl hover:scale-110 transition-transform" />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>Bootstrap</span>
                            <span className='text-gray-400 text-sm'>CSS FrameWork</span>
                        </div>
                    </div>

                    {/* Css */}
                    <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <FaCss3Alt className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>CSS - Cascading Style Sheet</span>
                            <span className='text-gray-400 text-sm'>Styling Language</span>
                        </div>
                    </div>

                    {/* HTML */}
                    <div className='border rounded-xl p-3 flex items-center gap-3 w-full hover:scale-105 transition-transform'>
                        <SiMysql className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
                        <div className='flex flex-col'>
                            <span className='text-white font-medium text-sm'>HTML-HyperText Markup Language</span>
                            <span className='text-gray-400 text-sm'>Structure of webpage</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;

