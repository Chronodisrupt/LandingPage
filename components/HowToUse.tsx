"use client";

export default function HowToUse() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-green-700 text-center mb-16">
          HOW TO USE
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Steps */}
            <div className="grid grid-cols-2 gap-6 mb-10">

              <Step number="1" text="Apply to clean, dry skin" />
              <Step number="2" text="Use a small amount" />
              <Step number="3" text="Massage gently until fully absorbed" />
              <Step number="4" text="Use as needed" />

            </div>

            {/* Important Notes */}
            <div className="mb-8">
              <h4 className="font-bold text-gray-800 mb-3">
                IMPORTANT
              </h4>

              <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                <li>
                  Patch test recommended before first use
                </li>
                <li>
                  Apply <span className="text-green-600 font-semibold">2–3 times</span> daily
                </li>
                <li>
                  Massage until fully absorbed
                </li>
                <li>
                  Leave at least <span className="text-green-600 font-semibold">4 hours</span> between applications
                </li>
                <li>
                  Recommended for ages <span className="text-green-600 font-semibold">17+</span>
                </li>
              </ul>
            </div>

            {/* Safety Statement */}
            <p className="text-green-600 font-semibold text-lg">
              SAFE & EFFECTIVE FOR THE WHOLE FAMILY
            </p>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full flex justify-center md:justify-end">
            <img
              src="/images/how-to-use.png"
              alt="Applying cream to leg"
              className="rounded-xl shadow-md w-full max-w-md object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* STEP COMPONENT */
function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="bg-green-600 text-white text-sm px-4 py-1 rounded-full font-semibold whitespace-nowrap">
        Step {number}
      </span>

      <p className="text-gray-700 text-sm leading-snug">
        {text}
      </p>
    </div>
  );
}