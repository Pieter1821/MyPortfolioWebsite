import { Link } from 'react-router-dom';
import Interests from './Interests';

const Hero = () => {
  return (
    <div className="relative px-6 pt-14 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-400 to-orange-200 text-white">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Pieter Deane</h1>
        <p className="mt-6 text-lg leading-8">
          Software developer passionate about building software that improves people's lives.
        </p>
        <p className="mt-6 text-lg leading-8">I love building new things and solving problems.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/contact"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Get in touch
          </Link>
          <Link to="/about" aria-label="Learn more about Pieter Deane" className="text-sm font-semibold leading-6 text-gray-200 hover:text-gray-100">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <Interests/>
    </div>
  );
};


export default Hero;
