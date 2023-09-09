import React from 'react';
import { Link } from 'react-router-dom';
import Interests from '../components/Interests';

const Hero = () => {
  return (
    <div className="relative bg-indigo-900 px-6 pt-14 lg:px-8 text-white">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Pieter Deane</h1>
        <p className="mt-6 text-lg leading-8">
          Software Developer Passionate About Building Software That Improves People's Lives.
        </p>
        <p className="mt-6 text-lg leading-8">I Love Building New Things and Solving Problems.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/contact"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Get in Touch
          </Link>
          <Link
            to="/about"
            aria-label="Learn More about Pieter Deane"
            className="text-sm font-semibold leading-6 text-gray-200 hover:text-indigo-300"
          >
            Learn More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <Interests />
    </div>
  );
};

export default Hero;

