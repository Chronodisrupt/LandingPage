"use client";

export default function ResultsTestimonials() {
  const testimonials = [
    {
      title: "Lightweight and Easy to Use",
      review:
        "I like how smooth this cream feels on the skin. It spreads easily and absorbs fast without leaving any greasy residue. I've been using it as part of my daily routine after workouts and it feels very refreshing.",
      name: "Daniel R.",
    },
    {
      title: "Perfect for Daily Use",
      review:
        "This cream has become part of my everyday skin care routine. The aloe and magnesium give it a soothing feel and the texture is very light compared to other creams I've tried.",
      name: "Michelle T.",
    },
    {
      title: "Great Texture and Absorption",
      review:
        "What I noticed first is how quickly it absorbs. It feels more like a gel-cream and doesn't leave the skin sticky. I apply it after long days or physical activity and it feels very comfortable.",
      name: "Jason M.",
    },
    {
      title: "Very Gentle on the Skin",
      review:
        "I was looking for something simple to use daily and this works well for me. The formula feels clean and the combination of aloe and botanical ingredients makes it feel soothing on the skin.",
      name: "Linda K.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-[#E7F5EC] to-[#EDF5F0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Real Results. Real Comfort.
          </h2>
          <p className="text-gray-700 text-lg">
            A lightweight DMSO cream designed to support skin conditioning
            and everyday comfort for active areas like knees, shoulders,
            neck, and muscles.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-xl text-center hover:scale-105 transition-transform"
            >
              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {t.title}
              </h3>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.888a1 1 0 00.95.69h4.096c.969 0 1.371 1.24.588 1.81l-3.32 2.415a1 1 0 00-.364 1.118l1.262 3.888c.3.921-.755 1.688-1.538 1.118l-3.32-2.414a1 1 0 00-1.175 0l-3.32 2.414c-.783.57-1.838-.197-1.538-1.118l1.262-3.888a1 1 0 00-.364-1.118L2.293 9.315c-.783-.57-.38-1.81.588-1.81h4.096a1 1 0 00.95-.69l1.262-3.888z" />
                    </svg>
                  ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t.review}
              </p>

              {/* Customer */}
              <p className="font-semibold text-gray-900 mb-1">{t.name}</p>

              {/* Verified */}
              <p className="text-green-600 text-sm font-medium">
                ✔ Verified Customer
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}