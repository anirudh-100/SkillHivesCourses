'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Simple email regex validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailError(emailPattern.test(value) ? '' : 'Please enter a valid email address.');
  };

  // Gallery section animation
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gallerySection = document.getElementById('gallery-section');
      if (gallerySection) {
        const gallerySectionTop = gallerySection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (gallerySectionTop < windowHeight - 100) {
          setShowGallery(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container mx-auto">
      {/* Updated Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="text-2xl font-bold tracking-wider cursor-pointer hover:text-orange-400 transition duration-300">
              Skill<span className="text-blue-400">Hives</span>
            </span>
          </Link>
        </div>
        <nav className="flex items-center">
          {/* Navigation links could go here */}
        </nav>
        <Link href="/v1/services">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative hero bg-gradient-to-r from-yellow-700 to-orange-500 p-0 h-[500px] transition-all duration-300">
        <div className="absolute inset-0">
          <Image
            src="/heroimage.jpg"
            alt="SkillHives Banner"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-end h-full px-16 text-white">
          <div className="max-w-lg text-right">
            <h1 className="text-5xl font-bold mb-4 animate-fadeIn">A World of Possibilities</h1>
            <p className="text-lg mb-6 animate-fadeIn delay-200">
              Driving a million careers to the road of success.
            </p>
            <Link href="/v1/services">
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 animate-fadeIn delay-400 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery-section"
        className={`gallery p-16 bg-white transition-all duration-700 transform ${
          showGallery ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
        <div className="grid grid-cols-4 gap-8">
          {['nilavraf.jpg', 'oliviaf.jpg', 'jenusf.jpg', 'maneeshima.jpg'].map((image, index) => (
            <div key={index} className="gallery-item bg-gray-100 p-6 rounded shadow hover:shadow-lg transition-all duration-300">
              <Link href="/v1/gallery">
                <Image
                  src={`/${image}`}
                  alt={`Gallery Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded transition-all duration-300 transform hover:scale-105"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Book a Free Mock Interview Section */}
      <section className="book-demo p-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-4">Book a Free Mock Interview Session</h2>
        <p className="text-center text-lg mb-8 text-gray-600">
          Take the first step towards your dream career with a free mock interview.
        </p>
        <form className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-transform transform hover:scale-105">
            Book Now
          </button>
        </form>
      </section>

      {/* Location Section */}
      <section className="location p-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">Our Location</h2>
        <div className="text-center text-lg mb-4 text-gray-600">
          Visit us at our headquarters in Sarita Vihar, New Delhi, or get in touch online.
        </div>
        <div className="w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7000.374019518637!2d77.2924961!3d28.5289981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c2a958c735%3A0x6b9d774f2c3b8b40!2sSarita%20Vihar%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1717356329745!5m2!1sen!2sus"
            width="100%"
            height="450"
            className="rounded shadow-lg"
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
