import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import { AnimatePresence } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { DarkModeContext } from './contexts/DarkmodeContext';
import NotFound from './components/NotFound';



const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Contact = React.lazy(() => import('./pages/Contact'));

export default function App() {
  const darkModeContext = useContext(DarkModeContext);

  useEffect(() => {
    const root = document.documentElement;
    if (darkModeContext?.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkModeContext?.darkMode]);


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
              <Route path="*" element={<NotFound />} />
            </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
}