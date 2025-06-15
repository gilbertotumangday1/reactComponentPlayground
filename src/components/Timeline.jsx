import React from 'react';
import './Timeline.css';

const Timeline = ({ children }) => {
  return (
    <div className="timeline">
      <div className="timeline-line">
        <div className="timeline-dot" />
        <div className="timeline-dot" />
        <div className="timeline-dot" />
        <div className="timeline-dot" />
        <div className="timeline-dot" />
      </div>
      <div className="timeline-boxes">
        {React.Children.map(children, (child) => (
          <div className="timeline-box">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 