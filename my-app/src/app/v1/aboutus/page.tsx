'use client';  // Mark this file as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation instead of next/router

const AboutUs = () => {
  const router = useRouter(); // Initialize useRouter hook

  // Function to handle the "Start Learning Today" button click
  const handleStartLearning = () => {
    router.push('/v1/store'); // Navigate to the courses page
  };

  return (
    <div className="flex flex-col items-center p-8 max-w-6xl mx-auto bg-white">

      {/* Section 1: Introduction */}
      <div className="text-left max-w-2xl mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          SkillHive is dedicated to empowering students and job seekers with the essential skills
          and confidence to excel in interviews for top multinational corporations (MNCs). 
          Our comprehensive courses are designed to help individuals become the ideal candidates 
          for their desired roles. With a focus on practical learning, we ensure our students are 
          job-ready and equipped to take on challenges in the ever-evolving job market.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you're looking to enhance your technical skills, improve your soft skills, or gain 
          insights into the latest industry trends, SkillHive provides the resources and guidance you need 
          to succeed. Join us today and take the first step towards transforming your career!
        </p>
        <button 
          onClick={handleStartLearning} 
          className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800 transition duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Section 2: Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-16">
        <img 
          src="/aboutus1.jpg" 
          alt="Creative Brain" 
          className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl" 
        />
        <img 
          src="/aboutus2.jpg" 
          alt="Networking Illustration" 
          className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl" 
        />
        <img 
          src="/aboutus3.jpg" 
          alt="Business Meeting" 
          className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl" 
        />
        <img 
          src="/icon.jpg" 
          alt="Team Collaboration" 
          className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl" 
        />
      </div>

      {/* Section 3: Our Mission */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          At SkillHive, our mission is to provide accessible and high-quality learning experiences 
          that empower individuals to achieve their professional aspirations. Through expert-led courses, 
          hands-on projects, and personalized guidance, we aim to shape the future workforce and bridge 
          the skills gap in the global job market.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We are committed to fostering a learning environment that is inclusive, supportive, and focused on 
          real-world applications. Our goal is to equip every learner with the tools and confidence they need 
          to thrive in their careers and beyond.
        </p>
      </div>

      {/* Section 4: Testimonials */}
      <div className="bg-gray-50 p-12 rounded-lg shadow-lg mb-16 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Our Students Say</h3>
        <blockquote className="italic text-lg text-gray-700 mb-6">
          "SkillHive has transformed my career. The courses are detailed, the instructors are amazing, 
          and the community is incredibly supportive. I landed my dream job thanks to the skills I gained here!"
        </blockquote>
        <p className="text-right text-gray-600">— Anirudh Rai, Full-Stack Developer</p>
      </div>

      {/* Section 5: Call to Action */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 rounded-md text-center text-white mb-12">
        <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Career?</h3>
        <p className="text-lg mb-6">
          Join SkillHive today and take the first step toward building the career you've always dreamed of!
        </p>
        <button 
          onClick={handleStartLearning} 
          className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800 transition duration-300 transform hover:scale-105">
          Start Learning Today
        </button>
      </div>

    </div>
  );
};

export default AboutUs;
