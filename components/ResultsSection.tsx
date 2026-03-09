"use client";

export default function ResultsSection() {
  return (
    <section className="py-24" style={{ background: "linear-gradient(to bottom, #F5F7F6, #E7F5EC)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Row - Headline + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Headline LEFT */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-justify md:text-left">
              Designed for Joint & Muscle Comfort. Our DMSO cream for joint & muscle areas is crafted for daily topical routines, supporting comfort in commonly active areas such as knees, shoulders, neck, and muscles.
            </h2>
          </div>

          {/* New Image RIGHT */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/Vigority.jpg"
              alt="Product usage"
              className="w-full max-w-md h-auto rounded-xl object-cover shadow-lg"
            />
          </div>

        </div>

        {/* Existing Image Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          <ImageCard
            image="/images/result1.jpg"
            label="Knee Soreness"
          />

          <ImageCard
            image="/images/result2.jpg"
            label="Neck & Shoulder Tension"
          />

        </div>

      </div>
    </section>
  );
}

function ImageCard({
  image,
  label,
}: {
  image: string;
  label: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={label}
        className="w-full h-auto object-cover"
      />
      <div className="p-4 text-center text-gray-700 font-semibold">
        {label}
      </div>
    </div>
  );
}