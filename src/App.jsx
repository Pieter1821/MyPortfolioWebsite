import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import Error from './components/Error';
import { AnimatePresence } from 'framer-motion';

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Projects = React.lazy(() => import('./pages/projects'));
const Skills = React.lazy(() => import('./pages/skills'));
const Contact = React.lazy(() => import('./pages/contact'));

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main role="main" className="content">
          <Suspense
            fallback={
              <div className="loading" aria-label="Loading">
                <h1>Loading...</h1>
                <Spinner />
              </div>
            }
          >
            <AnimatePresence mode='wait'>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
