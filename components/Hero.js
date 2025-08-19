import CTAButton from "./CTAButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section section-cream">
      <div className="container grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-navy">
            Home maintenance, handled.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Window washing, gutter cleaning, pressure washing, trash bin cleaning and more—
            all scheduled and managed for you. Quick signup, set it and forget it.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <CTAButton />
            <a href="/how-it-works" className="btn btn-ghost no-underline">How it Works</a>
          </div>
        </div>
        <div className="relative">
          <div className="card p-4 md:p-6">
            <Image
              src="/hero-placeholder.jpg"
              alt="Handld team providing exterior home service"
              width={900} height={600}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
