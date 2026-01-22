import React from 'react'
import Spotify from '../assets/Spotify.jpg';
import clothHub from '../assets/clothhub.jpg';
import shoeplanet from '../assets/shoeplanet.jpg';
import LMS from '../assets/LMS.jpg';
import EMS from '../assets/EMS.jpg';
import Project from './Project';


function ProjectList() {
    const projects = [
        {
            id :1,
            image : Spotify,
            title: "Spotify Clone",
            description : "This is a Spotify landing page in which is created using HTML, CSS, and Bootstrap.",
            demolink: "https://clonespotifylandingpage.netlify.app",
        },

        {
            id :2,
            image : clothHub,
            title: "ClothHub",
            description : "This is a E-commerce webpage in which is created using HTML, CSS, JavaScript.",
            demolink: "https://e-commerce-one-lake-63.vercel.app",
        },

        {
            id :3,
            image : shoeplanet,
            title: "Shoe Planet",
            description : "A clone E-commerce webpage of the showPlanet website.",
            demolink:"https://shoe-planet-clone-website.vercel.app/"
        },

        {
            id :4,
            image : LMS,
            title: "BibleoHub",
            description : "A simple Library management system using node.js , HTML, and CSS.",
            demolink:"https://github.com/MurshidaNazrin/LMS-Library-Management-System",
        },

        {
            id :5,
            image : EMS,
            title: "Employee Management system",
            description : "This is a Simple Employee Management system using Express.js, node.js, react.js and tailwind css.",
            demolink:"https://github.com/MurshidaNazrin/EMS-Employee-Management-System",
        },

    ]

    const ProjectLists = projects.map((project, index) =>
      <Project 
         key={index}
         image={project.image}
         title={project.title}
         description = {project.description}
         demolink = {project.demolink}
      />
);
  return (
     <div>
      <h1 className='text-center text-4xl font-bold text-purple-500'>Projects</h1>
      <div className="container mx-auto px-4">
      <div className=' mt-10 mb-20 grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center'>
      {ProjectLists}
   </div>
   </div> 
   </div>
  )
}

export default ProjectList
