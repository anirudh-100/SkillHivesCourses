import React from 'react';

const services = [
  {
    title: 'Placement Assistance',
    image: '/aboutus4.webp',
    description:
      "Navigating life's intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey.",
  },
  {
    title: 'Communication',
    image: '/aboutus2.jpg',
    description:
      "Navigating life's intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey.",
  },
  {
    title: 'Inter Personal Skill Development',
    image: '/aboutus3.jpg',
    description:
      "Navigating life's intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey.",
  },
];

const feedbacks = [
  {
    name: 'Sakshi Dixit',
    profilePic: '/sakshi.jpg',
    rating: 5,
    message:
      'Initially my communication was poor but with the help of live classes, practice sheets & Mock interview after which it helped me to crack a Big4.',
  },
  {
    name: 'Dinesh Kr. Pandey',
    profilePic: '/Unknown.jpg',
    rating: 4,
    message:
      'I was confused which profession to choose as my career. SkillHive helped me to start my career in Sales & Marketing with an initial package of 8.4 LPA, thank you SkillHive.',
  },
  {
    name: 'Avirup Kundu',
    profilePic: '/Avirup.jpg',
    rating: 5,
    message:
      'Starting my role in Amazon as Web Architect Associate has been a joy, thanks to Skillhive for its excellent guidance & mentoring. Especially Olivia ma’am for her support throughout the journey.',
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover mb-6 rounded-md"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Feedback Segment */}
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Customer Feedback</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow flex items-center">
              <img
                src={feedback.profilePic}
                alt={feedback.name}
                className="w-24 h-24 rounded-full mr-6"
              />
              <div>
                <p className="text-gray-700 font-semibold mb-2">{feedback.name}</p>
                <p className="text-gray-600 italic mb-3">"{feedback.message}"</p>
                <p className="text-orange-500">{'★'.repeat(feedback.rating)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
