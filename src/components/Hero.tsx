
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Interests from './Interests';



const Hero = () => {
  return (
    <div className="relative bg-indigo-900 dark:bg-gray-100 px-6 py-20 lg:px-8 text-white dark:text-gray-900">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-10">
          <span className="text-3xl lg:text-4xl font-bold tracking-tight">Hi, I'm Pieter Deane</span>
        </div>
        <p className="text-24px leading-6">
          Software developer passionate about crafting solutions that enhance people's lives.
        </p>
        <p className="text-24px leading-6 mt-2">I thrive on creating innovations and solving challenges.</p>
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
  );
};

export default Hero;
