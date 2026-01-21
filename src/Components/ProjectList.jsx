import React from 'react'
import Spotify from '../assets/Spotify.jpg';
import Project from './Project';


function ProjectList() {
    const projects = [
        {
            id :1,
            image : Spotify,
            title: "Spotify Clone",
            description : "This is a Spotify landing page in which i created using HTML, CSS, and Bootstrap.",
            demolink: "clonespotifylandingpage.netlify.app",
        },

        {
            id :2,
            image : Spotify,
            title: "Spotify Clone",
            description : "This is a Spotify landing page in which i created using HTML, CSS, and Bootstrap.",
        },

        {
            id :3,
            image : Spotify,
            title: "Spotify Clone",
            description : "This is a Spotify landing page in which i created using HTML, CSS, and Bootstrap.",
        },

        {
            id :4,
            image : Spotify,
            title: "Spotify Clone",
            description : "This is a Spotify landing page in which i created using HTML, CSS, and Bootstrap.",
        },

        {
            id :5,
            image : Spotify,
            title: "Spotify Clone",
            description : "This is a Spotify landing page in which i created using HTML, CSS, and Bootstrap.",
        },

    ]

    const ProjectLists = projects.map((project, index) =>
      <Project 
         key={index}
         image={project.image}
         title={project.title}
         description = {project.description}
        //  demolink = {project.demolink}
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
