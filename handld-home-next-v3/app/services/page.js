import ServicesGrid from "../../components/ServicesGrid";
import CTAButton from "../../components/CTAButton";

export const metadata = { title: "Services | Handld Home Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="section section-cream">
        <div className="container">
          <h1 className="text-4xl font-extrabold text-brand-navy">Services</h1>
          <p className="mt-3 text-gray-700 max-w-prose">
            Exterior-focused maintenance by skilled pros.
          </p>
          <div className="mt-6"><CTAButton>Get My Quote</CTAButton></div>
        </div>
      </section>
      <ServicesGrid cta={false} />
      <section className="section">
        <div className="container">
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-semibold text-brand-navy">Ready to get started?</h2>
            <p className="mt-2 text-gray-700">Answer a few quick questions—we’ll take it from there.</p>
            <div className="mt-4">
              <CTAButton>Start in 60 Seconds</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
