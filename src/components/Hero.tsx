import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Interests from './Interests';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-indigo-900 to-indigo-700 dark:from-gray-100 dark:to-gray-300 text-white dark:text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,32,44,0.8)] to-[rgba(255,255,255,0.8)] opacity-50"></div>
      <div className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-10">
            <span className="text-3xl lg:text-4xl font-bold tracking-tight">Hi, I'm Pieter Deane</span>
          </div>
          <p className="text-xl leading-8">
            Software developer passionate about crafting solutions that enhance people's lives.
          </p>
          <p className="text-xl leading-8 mt-2">I thrive on creating innovations and solving challenges.</p>
          <div className="mt-10 flex items-center justify-center space-x-4">
            <Link
              to="/contact"
              className="rounded-md bg-indigo-600 dark:bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:bg-indigo-700 dark:focus:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Connect with me
            </Link>
            <Link
              to="/about"
              className="text-sm font-semibold leading-6 text-gray-200 dark:text-gray-800 hover:text-indigo-300 dark:hover:text-indigo-400 flex items-center transition duration-300 ease-in-out transform hover:translate-x-1"
            >
              Discover more <FaArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
        <Interests />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 50C840 53 960 67 1080 63.3C1200 60 1320 40 1380 30L1440 20V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="currentColor"
            className="text-white dark:text-gray-100"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;