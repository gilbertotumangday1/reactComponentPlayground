import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-text">{text}</div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 