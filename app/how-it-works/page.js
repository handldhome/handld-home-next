import HowItWorksSteps from "@/components/HowItWorksSteps";
import CTAButton from "@/components/CTAButton";

export const metadata = { title: "How It Works | Handld Home Services" };

export default function HIWPage() {
  return (
    <>
      <section className="section section-cream">
        <div className="container">
          <h1 className="text-4xl font-extrabold text-brand-navy">How it Works</h1>
          <p className="mt-3 text-gray-700 max-w-prose">
            Simple onboarding, clear pricing, and recurring care.
          </p>
          <div className="mt-6"><CTAButton>Get My Quote</CTAButton></div>
        </div>
      </section>
      <HowItWorksSteps cta={false} />
      <section className="section">
        <div className="container">
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-semibold text-brand-navy">Questions?</h2>
            <p className="mt-2 text-gray-700">We’ll help you choose services and cadence for your home.</p>
            <div className="mt-4">
              <CTAButton>Talk to Us</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
