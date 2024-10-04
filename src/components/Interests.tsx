
import { FaCoffee, FaMusic, FaRunning } from 'react-icons/fa';
import "../styles/Interests.css";

const activities = [
  {
    icon: <FaCoffee aria-label="Coffee icon" />,
    text: 'Drinking lots of coffee',
    className: 'coffee',
  },
  {
    icon: <FaMusic aria-label="Music icon" />,
    text: 'Listening to music',
    className: 'music',
  },
  {
    icon: <FaRunning aria-label="Running icon" />,
    text: 'Running or walking',
    className: 'running',
  },
];

const Interests = () => {
  return (
    <div className="interests-container">
      <div className="header-container">
        <h1>Interests</h1>
      </div>
      {activities.map((activity, index) => (
        <div key={index} className={`interest-card ${activity.className}`}>
          <div className="activity">{activity.icon}</div>
          <p>{activity.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Interests;
