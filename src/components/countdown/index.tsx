"use client";
import React from "react";
import { CountdownProps, TimeLeft } from "./CountDown.structure";

export default function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = React.useCallback((): TimeLeft => {
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
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, setTimeLeft, calculateTimeLeft]);

  return (
    <>
      <span className="text-2xl text-center pt-[60px]">
        Contagem Regressiva para o grande momento 💘
      </span>
      <div className="flex gap-4 justify-center items-center mt-10  my-4 py-4">
        {timeLeft &&
          Object.keys(timeLeft).map((interval) => (
            <div key={interval} className="flex flex-col text-center mr-4">
              <h1 className="text-4xl font-semibold">
                {timeLeft[interval as keyof TimeLeft]}
              </h1>
              <h2 className="text-base">{interval}</h2>
            </div>
          ))}
      </div>
    </>
  );
}
