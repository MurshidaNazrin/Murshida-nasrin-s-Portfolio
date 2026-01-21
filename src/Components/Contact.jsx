import React, { useRef } from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLocationDot,FaLinkedin,FaGithub } from "react-icons/fa6";
import emailJs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs.sendForm('service_p0zpj6a',
      'template_z33o5me',
       form.current,
       't846DWznzi11-FyrB'            
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      form.current.reset();  
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message. Try again later.")
    });
  };
  return (
    <div id='contact' className="min-h-screen bg-gray-950 text-white py-10 px-4">
      <h1 className="text-center font-bold text-4xl text-purple-500 mb-10">Get in Touch</h1>

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto bg-gray-900 p-10 rounded-xl shadow-lg">
        
        {/* Left Section - Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-purple-400">Let's talk</h3>
          <p>i'm currently available to take on new projects,so feel free to send me a message about anything that you want me to work on.
            You can contact anytime.
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-2 hover:text-purple-600 cursor-pointer">
                <MdEmail className= "text-xl" />
                <a href="mailto:murshidanaz02@gmail.com">
               <span>murshidanaz02@gmail.com</span></a>
            </li>
            <li className="flex items-center gap-2 hover:text-purple-600 cursor-pointer">
              <MdPhone className= "text-xl" /><a href="tel:+918129196052">
               <span>+91 81291 96052</span></a>
            </li>
            <li className="flex items-center gap-2 hover:text-purple-600 cursor-pointer">
              <FaLocationDot className= "text-xl" /><a href='https://maps.app.goo.gl/R5YimsUJGs6xWiXK8'>
               <span>Kerala</span></a>
            </li>
            <li className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/murshida-nasrin" className=" hover:scale-110 transition-all duration-300 hover:text-purple-600"><FaLinkedin className='text-2xl'/></a>
              <a href="https://github.com/MurshidaNazrin" className=" hover:scale-110 transition-all duration-300 hover:text-purple-600"><FaGithub className='text-2xl'/></a>
            </li>
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 space-y-6">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email" 
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Type your message..."
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:scale-105 transition-all duration-300 font-semibold cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
