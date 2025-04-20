import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full min-h-[22rem] sm:min-h-[30rem] md:min-h-[38rem] bg-center bg-cover flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-[90%] sm:max-w-[80%] mx-auto">
        <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-white leading-snug">
          {text}
        </h1>
        <div className="mt-4 sm:mt-6">
          <Link
            to="/addjob"
            className="inline-block px-5 py-3 text-sm sm:text-base font-medium text-white capitalize transition duration-300 bg-gray-600 rounded-md hover:bg-gray-500"
          >
            Post Job & Hire Expert
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
