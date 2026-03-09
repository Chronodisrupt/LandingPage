"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Daniel R.",
    text: "I’ve struggled with joint stiffness for years. After using Vigority DMSO Cream for just a few days, my knees and shoulders feel so much better. It absorbs quickly and isn’t greasy at all.",
  },
  {
    name: "Michelle T.",
    text: "After long workdays, my back and shoulders ache badly. This cream gives relief within minutes. It’s become part of my nightly routine.",
  },
  {
    name: "Jason M.",
    text: "I use this after workouts, and my muscles recover faster. Lightweight, fast-absorbing, and it really works better than anything else I’ve tried.",
  },
  {
    name: "Linda K.",
    text: "My hands and joints used to feel stiff every morning. Now, after a week of daily use, I feel much more comfortable and active.",
  },
  {
    name: "Robert T.",
    text: "I finally found a cream that actually helps. My shoulders, neck, and knees feel supported without any sticky residue.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const review = testimonials[index];

  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(to bottom, #E7F5EC, #9fdbb4)" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative">

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Real Customer Results
        </h3>

        {/* Review Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-300">

          <div className="text-green-500 text-2xl mb-4">
            ★★★★★
          </div>

          <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
            {review.text}
          </p>

          <p className="font-semibold text-gray-900 text-lg">
            {review.name}
          </p>

        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
        >
          ›
        </button>

      </div>
    </section>
  );
}