import {React,useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import {  FaBars } from 'react-icons/fa';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleClick = () => {
    window.location.href = "mailto:murshinaz02@gmail.com?subject=Hello&body=I want to connect with you.";
  }
  return (
    <nav className="w-full h-20 sticky top-0 z-50 bg-black/30 backdrop-blur-lg text-white flex items-center justify-between px-6 md:px-10 shadow-md">

      {/* Left - Logo */}
      <div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-300  to-purple-700 bg-clip-text text-transparent italic tracking-wide transition-all duration-300 hover:scale-110">
          MN
        </h1>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-8 text-lg font-medium">
        <Link
          to='home'
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="hover:text-purple-400 hover:underline underline-offset-4 transition-all duration-300 hover:-translate-y-1"
        >
          Home
        </Link>
        <Link
          to='aboutme'
          smooth={true}
          duration={500}
          className="hover:text-purple-400 hover:underline underline-offset-4 transition-all duration-300 hover:-translate-y-1"
        >
          AboutMe
        </Link>
        <Link
          to='portfolio'
          smooth={true}
          duration={500}
          className="hover:text-purple-400 hover:underline underline-offset-4 transition-all duration-300 hover:-translate-y-1"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-purple-400 hover:underline underline-offset-4 transition-all duration-300 hover:-translate-y-1"
        >
          Contact
        </Link>
      </div>

      {/* Right - Button */}
      <div className='hidden md:block'>
        <button onClick={handleClick} className="bg-gradient-to-r from-purple-600 to-purple-800 hover:bg-purple-700 px-5 py-2.5 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
          Connect with Me
        </button>
      </div>

      {/* Humburger Icon */}
      <div className='md:hidden'>
         <button onClick={toggleMenu} className='text-2xl'>
          {isOpen ? <FaTimes /> : <FaBars />}
         </button>
      </div>

    {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/95 text-white flex flex-col items-center space-y-6 py-6 z-40 transition-all duration-300 md:hidden">
          {["home", "aboutme", "portfolio", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="text-xl hover:text-purple-400 transition-all duration-300 capitalize cursor-pointer"
            >
              {section}
            </Link>
          ))}

          <button
            onClick={handleClick}
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:bg-purple-700 px-6 py-2.5 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Connect with Me
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
