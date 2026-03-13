import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero-section" className="bg-white py-16 lg:py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-8 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Reviews */}
          <div className="flex items-center gap-2 mb-4 text-yellow-500">
            ⭐⭐⭐⭐⭐
            <span className="text-gray-600 text-sm ml-2">
              4.8/5 from 12,000+ customers
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Fast Relief From Topical Joint & Muscle Discomfort
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Vigority DMSO Cream 99.9% Pure for Topical Joint & Muscle Comfort.
            Pharmaceutical grade formula with Arnica, Magnesium, Turmeric,
            OptiMSM and Aloe Vera.
          </p>

          {/* Benefits */}
          <ul className="space-y-2 text-gray-700 mb-8">

            <li>✔ Deep-Feel Absorption</li>
            <li>✔ Magnesium</li>
            <li>✔ Arnica</li>
            <li>✔ Aloe Vera</li>
            <li>✔ Turmeric</li>
            <li>✔ OptiMSM</li>

          </ul>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="https://vigority.com/products/dmso-cream?_pos=1&_psq=DMSO&_ss=e&_v=1.0"
              className="bg-brand text-white px-8 py-4 rounded-lg font-semibold text-center hover:opacity-90 transition"
            >
              Get Treatment Kit
            </a>

            <a
              href="#learn"
              className="border border-gray-300 px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition"
            >
              Learn More
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">

          <Image
            src="/images/product-hero.png"
            alt="Vigority DMSO Cream product"
            width={520}
            height={520}
            className="w-full max-w-md object-contain"
          />

        </div>

      </div>

    </section>
    
  );
}