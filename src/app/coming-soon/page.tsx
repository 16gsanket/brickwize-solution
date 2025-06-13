"use client";

import { useEffect, useState } from "react";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-07-01T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/ddodvrq4x/image/upload/v1749832715/samples/brickwize-solution_bg.webp')" }}
    >
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-2xl shadow-xl text-center max-w-lg w-full text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Building Solution</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Brick By Brick</h2>
        <h3 className="text-xl sm:text-2xl italic mb-6">…wizely!!</h3>

        <div className="flex justify-center gap-4 text-lg sm:text-xl font-mono">
          <div className="flex flex-col">
            <span className="text-3xl font-bold">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
