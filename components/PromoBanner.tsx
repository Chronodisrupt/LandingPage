"use client";

import { useEffect, useState } from "react";

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(0);

  // Example: 6 hour countdown
  useEffect(() => {
    const target = new Date().getTime() + 6 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft(distance);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <section className="w-full bg-brand py-4">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Promo Text */}
        <p className="text-white font-semibold text-center md:text-left">
          LIMITED OFFER — 30% OFF YOUR FIRST HERMON PURCHASE
        </p>

        {/* Timer */}
        <div className="flex gap-3">

          <TimerCard value={hours} label="Hours" />
          <TimerCard value={minutes} label="Minutes" />
          <TimerCard value={seconds} label="Seconds" />

        </div>

      </div>
    </section>
  );
}

function TimerCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white rounded-lg px-4 py-2 text-center min-w-[60px]">

      <div className="text-brand text-xl font-bold">
        {String(value).padStart(2, "0")}
      </div>

      <div className="text-xs text-gray-500">
        {label}
      </div>

    </div>
  );
}