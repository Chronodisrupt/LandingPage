export default function HowItWorks() {

  const steps = [
    "Apply to clean dry skin",
    "Use a small amount",
    "Massage gently until absorbed",
    "Use up to 3 times daily",
  ];

  return (
    <section className="bg-brandSoft py-20">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold mb-12">How To Use</h2>

        <div className="grid md:grid-cols-4 gap-6">

          {steps.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Step {i + 1}</h3>
              <p>{s}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}