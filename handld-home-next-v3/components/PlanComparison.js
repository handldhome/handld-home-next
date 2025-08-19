import CTAButton from "./CTAButton";

export default function PlanComparison() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-brand-navy">A La Carte vs. Handld</h2>
        <p className="mt-3 text-gray-600 max-w-prose">
          Choose per-service pricing or lock in member benefits with Handld.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-brand-navy">A La Carte</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Pay per visit</li>
              <li>• Flexible one-offs</li>
              <li>• Great for trying us out</li>
            </ul>
            <div className="mt-6"><CTAButton>Book A La Carte</CTAButton></div>
          </div>
          <div className="card p-6 border-2 border-brand-navy">
            <h3 className="text-xl font-semibold text-brand-navy">Handld Membership</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Save ~30% on services</li>
              <li>• Priority scheduling</li>
              <li>• Recurring care, zero hassle</li>
            </ul>
            <div className="mt-6"><CTAButton>Join Handld</CTAButton></div>
          </div>
        </div>
      </div>
    </section>
  );
}
