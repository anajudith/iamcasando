"use client";
import React from "react";
import { CountdownProps, TimeLeft } from "./CountDown.structure";

// refatorar código
const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-10  my-4 py-4">
      <span className="text-2xl">
        Contagem Regressiva para o grande momento 💘
      </span>
      <div className="flex flex-row">
        {timeLeft &&
          Object.keys(timeLeft).map((interval) => (
            <div key={interval} className="flex flex-col text-center mr-4">
              <div className="text-4xl font-semibold">
                {timeLeft[interval as keyof TimeLeft]}
              </div>
              <div className="text-base">{interval}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Countdown;
