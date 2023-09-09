import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Import an icon of your choice
import Interests from '../components/Interests';

const Hero = () => {
  return (
    <div className="relative bg-indigo-900 px-6 py-20 lg:px-8 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-4">
          <span className="text-3xl lg:text-4xl font-bold tracking-tight">
            Hi, I'm Pieter Deane
          </span>
        </div>
        <p className="text-lg leading-6">
          Software developer passionate about crafting solutions that enhance people's lives.
        </p>
        <p className="text-lg leading-6 mt-2">
          I thrive on creating innovations and solving challenges.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <Link
            to="/contact"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-4"
          >
            Connect with me
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-200 hover:text-indigo-300 flex items-center"
          >
            Discover more <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
      <Interests />
    </div>
  );
};

export default Hero;
