// import { useState } from 'react';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import ProjectList from './Components/ProjectList';
import Footer from './Components/Footer';
function App() {

  return (
    <>
      <Navbar/>
      <Herosection />
      <Aboutme />
      <ProjectList/>
      <Contact />
      <Footer/>
    </>

    

  )
}

export default App
