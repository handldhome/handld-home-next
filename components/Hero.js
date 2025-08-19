import CTAButton from "./CTAButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section section-cream">
      <div className="container grid md:grid-cols-2 items-center gap-10">
        <div>
          {/* HEADLINE + SUB — paste your current site's copy here */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-navy">
            Home maintenance, handled.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            {/* Replace this sentence block with the exact hero subcopy from your current site */}
            Window washing, gutter cleaning, pressure washing & more — all scheduled and managed for you.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <CTAButton>Get My Custom Quote</CTAButton>
            {/* Removed the “How it Works” ghost button per request */}
          </div>
        </div>

        <div className="relative">
          <div className="card p-0 overflow-hidden">
            {/* Put your hero image at /public/hero.jpg */}
            <Image
              src="/hero.jpg"
              alt="Handld exterior home service"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
