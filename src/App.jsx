import React, { Suspense,useEffect,useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

// Lazy-loaded components

const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Projects = React.lazy(() => import('./pages/projects'));
const Skills = React.lazy(() => import('./pages/skills'));
const Contact = React.lazy(() => import('./pages/contact'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
   

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
    
  }

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </div>
  );
}
