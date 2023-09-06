import React from 'react';
import { FaCoffee, FaMusic, FaRunning } from 'react-icons/fa';
import '../styles/interests.css';

const Interests = () => {
  return (
    <section className="interests-container">
      <h2>Interests</h2>
      <div className="interest-card">
        <div className="activity coffee">
          <FaCoffee aria-label="Coffee icon" />
        </div>
        <p>Drinking lots of coffee</p>
      </div>

      <div className="interest-card">
        <div className="activity music">
          <FaMusic aria-label="Music icon" />
        </div>
        <p>Listening to music</p>
      </div>

      <div className="interest-card">
        <div className="activity running">
          <FaRunning aria-label="Running icon" />
        </div>
        <p>Running or walking</p>
      </div>
    </section>
  );
};

export default Interests;
