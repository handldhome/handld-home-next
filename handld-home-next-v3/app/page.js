import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import HowItWorksSteps from "../components/HowItWorksSteps";
import PlanComparison from "../components/PlanComparison";
import Reviews from "../components/Reviews";

export default function Page() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <HowItWorksSteps />
      <PlanComparison />
      <Reviews />
    </>
  );
}
