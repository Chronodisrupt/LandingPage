"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* LEFT — NEWSLETTER */}
        <div className="max-w-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Interested in our Newsletter?
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Get the latest updates with news and promotions.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          <button className="w-full bg-gray-900 text-white py-2.5 text-sm rounded-md font-medium hover:bg-black transition">
            Subscribe now
          </button>
        </div>

        {/* MIDDLE — LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Explore
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Contact us</li>
            <li className="hover:text-gray-900 cursor-pointer">Shipping Policy</li>
            <li className="hover:text-gray-900 cursor-pointer">Return Policy</li>
            <li className="hover:text-gray-900 cursor-pointer">Search</li>
            <li className="hover:text-gray-900 cursor-pointer">About us</li>
          </ul>
        </div>

        {/* RIGHT — BRAND */}
        <div className="text-center md:text-left">

          {/* Logo */}
          <div className="mb-4 flex justify-center md:justify-start">
            <img
              src="/images/logo1.jpg"
              alt="Vigority Logo"
              className="h-12"
            />
          </div>

          <p className="text-gray-600 leading-relaxed">
            At Vigority, we believe in simple, high-quality formulations
            designed to support everyday skin comfort and wellness.
          </p>

        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Vigority. All rights reserved.
      </div>
    </footer>
  );
}