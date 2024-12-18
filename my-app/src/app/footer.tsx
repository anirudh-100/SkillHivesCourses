'use client';
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold mb-6 md:mb-0">
            Skill<span className="text-blue-400">Hives</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="/" className="hover:text-blue-400 transition duration-300">
              Home
            </a>
            <a href="/v1/gallery" className="hover:text-blue-400 transition duration-300">
              Gallery
            </a>
            <a href="/v1/aboutus" className="hover:text-blue-400 transition duration-300">
              About
            </a>
            <a href="/v1/contactus" className="hover:text-blue-400 transition duration-300">
              Contact
            </a>
            <a href="/v1/store" className="hover:text-blue-400 transition duration-300">
              Store
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-blue-400 transition duration-300">
              <FiFacebook />
            </a>
            <a href="#" className="text-xl hover:text-blue-400 transition duration-300">
              <FiTwitter />
            </a>
            <a href="#" className="text-xl hover:text-blue-400 transition duration-300">
              <FiInstagram />
            </a>
            <a href="#" className="text-xl hover:text-blue-400 transition duration-300">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="text-center text-sm mt-10">
          &copy; {new Date().getFullYear()} SkillHives. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
