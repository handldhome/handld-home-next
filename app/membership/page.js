import PlanComparison from "@/components/PlanComparison";
import CTAButton from "@/components/CTAButton";

export const metadata = { title: "Membership | Handld Home Services" };

export default function MembershipPage() {
  return (
    <>
      <section className="section section-cream">
        <div className="container">
          <h1 className="text-4xl font-extrabold text-brand-navy">Membership</h1>
          <p className="mt-3 text-gray-700 max-w-prose">
            Join Handld to lock in savings, priority scheduling, and recurring care.
          </p>
          <div className="mt-6"><CTAButton>Join Handld</CTAButton></div>
        </div>
      </section>
      <PlanComparison />
    </>
  );
}
