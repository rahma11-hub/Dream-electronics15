import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
   } from "react-icons/fa";

const Contact = () => {
  return (
    <div data-aos="fade-up" className="min-h-screen  flex items-center justify-center shadow-lg  ">
      <div  className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none
             focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none
             focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none
             focus:border-indigo-500" rows="4"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-blue-700
           text-white px-4 py-2 rounded-2xl hover:bg-blue-500 focus:outline-none">Send Message</button>
       {/* social media links */}
       <div>
        <div className="flex items-center gap-3 mt-6  text-blue-700 justify-center">
         <a href="#">
          <FaInstagram className="text-3xl " />
            </a>
            <a href="#">
           <FaFacebook className="text-3xl" />
             </a>
            <a href="#">
           <FaLinkedin className="text-3xl " />
                </a> 
              </div>
              <a href=""><p className='text-center mt-2 underline'>Sign Up</p></a>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
