import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="bg-brandSoft py-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        <Image
          src="/images/product-jar.png"
          alt="Product jar"
          width={500}
          height={500}
        />

        <div>

          <h2 className="text-3xl font-bold mb-6">
            Comfort For Active Daily Living
          </h2>

          <ul className="space-y-3">

            <li>✔ Helps soothe dry or irritated skin</li>
            <li>✔ Supports comfort during movement</li>
            <li>✔ Calms redness and itching</li>
            <li>✔ Lightweight non-greasy finish</li>

          </ul>

        </div>

      </div>

    </section>
  );
}