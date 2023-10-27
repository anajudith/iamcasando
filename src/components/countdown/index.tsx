"use client";
import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-10-10") - +new Date();
    let timeLeft: any = {};

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setIsFlipped(!isFlipped);
    }, 1000);
    return () => clearTimeout(timer);
  });

  const addLeadingZeros = (value: number) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };

  return (
    <div className="flex flex-col justify-center bg-blue-400 items-center pb-[50px] mb-[90px] h-[200px]">
      <span className="text-4xl my-[20px]">Contagem Regressiva</span>
      <div
        className={`perspective-1000 w-64 h-32 relative transition-transform transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full bg-blue-500 backface-hidden ">
          <p className="flex justify-center items-center h-full text-white text-3xl">
            <span>{addLeadingZeros(timeLeft.days)}</span>:
            <span>{addLeadingZeros(timeLeft.hours)}</span>:
            <span>{addLeadingZeros(timeLeft.minutes)}</span>:
            <span>{addLeadingZeros(timeLeft.seconds)}</span>
          </p>
        </div>
        <div className="absolute w-full h-full bg-red-500 backface-hidden transform rotate-y-180">
          <p className="flex justify-center items-center h-full text-white text-3xl">
            <span>{addLeadingZeros(timeLeft.days)}</span>:
            <span>{addLeadingZeros(timeLeft.hours)}</span>:
            <span>{addLeadingZeros(timeLeft.minutes)}</span>:
            <span>{addLeadingZeros(timeLeft.seconds)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
