import React from 'react';
import { FaCoffee, FaMusic, FaRunning } from 'react-icons/fa';
import '../styles/interests.css';

const Interests = () => {
  return (
    <div className="interests-container">
      <div className="header-container">
        <h1>Interests</h1>
      </div>
      <div className="interest-card coffee">
        <div className="activity">
          <FaCoffee aria-label="Coffee icon" />
        </div>
        <p>Drinking lots of coffee</p>
      </div>

      <div className="interest-card music">
        <div className="activity">
          <FaMusic aria-label="Music icon" />
        </div>
        <p>Listening to music</p>
      </div>

      <div className="interest-card running">
        <div className="activity">
          <FaRunning aria-label="Running icon" />
        </div>
        <p>Running or walking</p>
      </div>
    </div>
  );
};

export default Interests;
