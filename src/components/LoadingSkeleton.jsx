import React from 'react';
import '../styles/LoadingSkeleton.css'

const LoadingSkeleton = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

export default LoadingSkeleton;
