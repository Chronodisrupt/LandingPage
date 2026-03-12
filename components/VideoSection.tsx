"use client";

import { useState } from "react";

export default function VideoSection() {
  const [play, setPlay] = useState(false);

  return (
    <section className="bg-white py-24" 
    style={{ background: "linear-gradient(to bottom,rgb(247, 252, 249),rgb(187, 235, 204))" }}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - TEXT */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            DMSO Formula.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Watch how our fast-absorbing formula is applied and how it helps
            support healthier skin. Designed for everyday use on commonly
            affected areas such as the knees, shoulders, neck, and muscles.
          </p>

          {/* Trust points */}
          <div className="space-y-3 text-gray-700">

            <div className="flex items-center gap-3">
              <span className="text-green-600">✓</span>
              <p>Fast-absorbing topical formula</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-600">✓</span>
              <p>Designed for daily use</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-600">✓</span>
              <p>Supports comfort in active areas</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE - VIDEO */}
        <div className="relative">

          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative bg-black">

            {!play ? (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setPlay(true)}
              >
                <img
                  src="/images/thumbnail.jpg"
                  alt="Product demonstration"
                  className="w-full h-full object-cover"
                />

                {/* Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="relative flex items-center justify-center">

                    {/* Glow */}
                    <div className="absolute w-24 h-24 bg-green-400/30 rounded-full blur-2xl"></div>

                    {/* Button */}
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full
                      bg-gradient-to-br from-green-500 to-green-700
                      shadow-xl
                      transition-transform duration-300
                      group-hover:scale-110">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>

                    </div>

                  </div>

                </div>

              </div>
            ) : (
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
              >
                <source src="/videos/vigority.mp4" type="video/mp4" />
              </video>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}