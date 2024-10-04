import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/NotFound.css";

const NotFound = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = '/';
    }
  }, [countdown]);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Oops! Page Not Found</h2>
        <p className="not-found-description">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-button">
            Go Back Home
          </Link>
          <p className="not-found-countdown">
            Redirecting in {countdown} seconds...
          </p>
        </div>
      </div>
      <div className="not-found-animation">
        <div className="planet"></div>
        <div className="astronaut">
          <div className="astronaut-body"></div>
          <div className="astronaut-head"></div>
          <div className="astronaut-arm left"></div>
          <div className="astronaut-arm right"></div>
          <div className="astronaut-leg left"></div>
          <div className="astronaut-leg right"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;