import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ seconds, onComplete }) => {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    // Initialize count from props when component mounts
    setCount(seconds);
  }, [seconds]);

  useEffect(() => {
    if (count <= 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    
    console.log("Current count:", count);
    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="countdown-overlay">
      <div className="countdown">
        <h2>Starting in</h2>
        <div className="countdown-number">{count}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;