import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="p-4 rounded-lg bg-slate-100 shadow-sm">
      <div className="flex gap-4 text-2xl font-mono">
        <div className="text-center">
          <div className="font-bold">{timeLeft.days}</div>
          <div className="text-sm">Days</div>
        </div>
        <div className="text-center">
          <div className="font-bold">{timeLeft.hours}</div>
          <div className="text-sm">Hours</div>
        </div>
        <div className="text-center">
          <div className="font-bold">{timeLeft.minutes}</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div className="text-center">
          <div className="font-bold">{timeLeft.seconds}</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;