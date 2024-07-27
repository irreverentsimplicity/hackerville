'use client'
import React, { useState, useEffect } from "react";

const Counter = ({ font = "Courier" }) =>  {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Convert date string to Date object
  const targetDate = new Date("July 16, 2024 12:00:00 UTC");

  useEffect(() => {
    // Calculate remaining time in seconds
    const remainingSeconds = Math.floor((targetDate - new Date()) / 1000);

    // Update state with remaining time
    setRemainingTime({
      days: Math.floor(remainingSeconds / 86400),
      hours: Math.floor((remainingSeconds % 86400) / 3600),
      minutes: Math.floor((remainingSeconds % 3600) / 60),
      seconds: remainingSeconds % 60,
    });
  }, []);

  // Update every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate remaining time in seconds
      const remainingSeconds = Math.floor((targetDate - new Date()) / 1000);

      // Update state with remaining time
      setRemainingTime({
        days: Math.floor(remainingSeconds / 86400),
        hours: Math.floor((remainingSeconds % 86400) / 3600),
        minutes: Math.floor((remainingSeconds % 3600) / 60),
        seconds: remainingSeconds % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      <span style={{ fontSize: 48, fontFamily: font }}>
        {remainingTime.days}
      </span>
      <span style={{ fontSize: 10, fontFamily: font }}>days</span>
      <span style={{ fontSize: 48, fontFamily: font }}>
        {remainingTime.hours}
      </span>
      <span style={{ fontSize: 10, fontFamily: font }}>hours</span>
      <span style={{ fontSize: 48, fontFamily: font }}>
        {remainingTime.minutes}
      </span>
      <span style={{ fontSize: 10, fontFamily: font }}>minutes</span>
      <span style={{ fontSize: 48, fontFamily: font }}>
        {remainingTime.seconds}
      </span>
      <span style={{ fontSize: 10, fontFamily: font }}>seconds</span>
    </span>
  );
};

export default Counter;