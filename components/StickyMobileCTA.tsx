"use client";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden flex justify-between items-center">

      <span className="font-semibold">$29.99</span>

      <a
        href="https://www.amazon.com/dp/B0GHTGK83T"
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Buy Now
      </a>

    </div>
  );
}