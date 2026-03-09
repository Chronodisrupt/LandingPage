"use client";

interface Advantage {
  title: string;
  description: string;
  icon?: string; // optional, path to icon
}

const advantages: Advantage[] = [
  {
    title: "Fast Relief",
    description: "Targets affected areas quickly to reduce discomfort and irritation.",
    icon: "/images/advantage1.png",
  },
  {
    title: "Clinically Formulated",
    description: "Developed with trusted ingredients for safe and effective use.",
    icon: "/images/advantage2.png",
  },
  {
    title: "Non-Greasy Formula",
    description: "Absorbs quickly, leaving skin smooth and comfortable.",
    icon: "/images/advantage3.png",
  },
  {
    title: "Trusted by Customers",
    description: "Thousands of happy customers report real, noticeable results.",
    icon: "/images/advantage4.png",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-24" style={{ background: "linear-gradient(to right, #E7F5EC,rgb(237, 245, 240))" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Headline */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Real Benefits You Can Count On
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — Advantages List */}
          <div className="space-y-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex items-start gap-4">


                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {adv.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Large Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/advantages.jpg"
              alt="advantages"
              className="w-full max-w-md rounded-xl shadow-md object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}