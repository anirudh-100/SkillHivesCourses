import React from "react";
import Image from "next/image"; // Import next/image for optimized images

interface Mentor {
  name: string;
  image: string;
}

const mentors: Mentor[] = [
  { name: "Olivia", image: "/oliviaf.jpg" },
  { name: "Nilavra", image: "/nilavraf.jpg" },
  { name: "Maneeshima", image: "/maneeshima.jpg" },
  { name: "Jenus", image: "/jenusf.jpg" },
];

const MentorGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Mentors
      </h1>

      <div className="flex justify-center gap-8 flex-wrap">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px] h-[500px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fadeIn"
          >
            <div className="h-[400px] overflow-hidden relative">
              <Image
                src={mentor.image}
                alt={mentor.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold text-gray-700">
                {mentor.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorGalleryPage;
