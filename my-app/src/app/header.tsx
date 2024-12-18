'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // For menu icons

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-chromegreen-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold tracking-wider cursor-pointer hover:text-orange-400 transition duration-300">
            <span className="text-blue-400"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link href="/v1/gallery" className="hover:text-blue-400 transition duration-300">
            Gallery
          </Link>
          <Link href="/v1/aboutus" className="hover:text-blue-400 transition duration-300">
            About
          </Link>
          <Link href="/v1/contactus" className="hover:text-blue-400 transition duration-300">
            Contact
          </Link>
          <Link href="/v1/store" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Store
            </Link>
            <Link href="/v1/services" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Services
            </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-700">
          <ul className="flex flex-col p-4 space-y-4">
            <Link href="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/v1/gallery" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link href="/v1/aboutus" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/v1/contactus" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/v1/store" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Store
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
