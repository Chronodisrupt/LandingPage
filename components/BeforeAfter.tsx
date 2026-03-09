import Image from "next/image";

export default function BeforeAfter() {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Made For Everyday Use
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Image
            src="/images/use1.jpg"
            alt="muscle discomfort"
            width={600}
            height={400}
            className="rounded-lg"
          />

          <Image
            src="/images/use2.jpg"
            alt="neck shoulders"
            width={600}
            height={400}
            className="rounded-lg"
          />

        </div>

      </div>

    </section>
  );
}