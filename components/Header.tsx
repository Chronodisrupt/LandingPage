"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* LEFT — Mobile Menu */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* LOGO */}
        <div className="flex items-center justify-center md:justify-start flex-1 md:flex-none">

          <a href="#promo-banner">          <Image
            src="/images/logo.jpg"
            alt="Vigority"
            width={120}
            height={40}
            className="h-8 w-auto"
          /></a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#hero-section" className="hover:text-gray-900">Home</a>
          <a href="#testimonial-carousel" className="hover:text-gray-900">About</a>
          <a href="#how-to-use" className="hover:text-gray-900">How to Use</a>
          <a href="#reviews" className="hover:text-gray-900">Reviews</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">

          {/* CTA Desktop Only */}
          <button className="hidden lg:inline-flex border border-brand px-4 py-2 rounded-lg text-sm font-semibold text-brand hover:bg-brand hover:text-white transition">
            <a href="https://vigority.com/products/dmso-cream?_pos=1&_psq=DMSO&_ss=e&_v=1.0">Sample Trial Kit</a>
          </button>

          <Search size={20} className="cursor-pointer text-gray-700 hover:text-black" />
          <User size={20} className="cursor-pointer text-gray-700 hover:text-black" />
          <ShoppingCart size={20} className="cursor-pointer text-gray-700 hover:text-black" />

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white/30 backdrop-blur-md">

          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">

            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Shipping Policy</a>
            <a href="#" className="hover:text-black">Return Policy</a>
            <a href="#" className="hover:text-black">How to Use</a>
            <a href="#" className="hover:text-black">Reviews</a>
            <a href="#" className="hover:text-black">Contact Us</a>

          </nav>

        </div>
      )}

    </header>
  );
}