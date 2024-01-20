import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import Error from './components/Error';
import { AnimatePresence } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { DarkModeContext } from './contexts/DarkmodeContext';

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Projects = React.lazy(() => import('./pages/projects'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Contact = React.lazy(() => import('./pages/contact'));

export default function App() {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <div className="App">
      <Router>
        <Navbar />
        <main role="main" className="content">
          <Suspense
            fallback={
              <div className="loading" aria-label="Loading">
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