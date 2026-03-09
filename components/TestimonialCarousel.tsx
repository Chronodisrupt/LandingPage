"use client";

export default function FactsSection() {
  return (
    <section
      className="py-24"
      style={{ background: "linear-gradient(to bottom, #E7F5EC,rgb(187, 235, 204))" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Facts About Vigority DMSO Cream
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Designed for daily comfort and active lifestyles. Discover how
            Vigority DMSO Cream supports joints, muscles, and everyday mobility.
          </p>
        </div>

        {/* Premium Image Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image 1 */}
          <div className="md:mt-16">
            <img
              src="/images/fact1.jpg"
              alt="Fast Absorption"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <p className="mt-4 text-gray-800 font-medium text-lg text-center">
              Comfort for active & daily living.
            </p>
          </div>

          {/* Image 2 */}
          <div className="md:mt-16">
            <img
              src="/images/fact2.png"
              alt="Joint Support"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <p className="mt-4 text-gray-800 font-medium text-lg text-center">
              Non-Gresy Fast-Absorbent.
            </p>
          </div>

          {/* Image 3 */}
          <div className="md:mt-16">
            <img
              src="/images/fact3.png"
              alt="Muscle Recovery"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <p className="mt-4 text-gray-800 font-medium text-lg text-center">
              Natural Blend
            </p>
          </div>

          {/* Image 4 */}
          <div className="md:mt-16">
            <img
              src="/images/fact4.png"
              alt="Daily Routine"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <p className="mt-4 text-gray-800 font-medium text-lg text-center">
              Advanced DMSO Formula
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}