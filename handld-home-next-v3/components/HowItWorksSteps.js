import CTAButton from "./CTAButton";

const STEPS = [
  { n: 1, title: "Tell us about your home", desc: "60-second questionnaire—no phone tag." },
  { n: 2, title: "Get your quote", desc: "Clear pricing for each service, member or a la carte." },
  { n: 3, title: "Set your schedule", desc: "We coordinate recurring visits with 2–3 hour windows." },
  { n: 4, title: "We handle it", desc: "Pros show up on time, do meticulous work, and keep you updated." },
];

export default function HowItWorksSteps({ cta = true }) {
  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-brand-navy">How it Works</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="card p-6 text-center">
              <div className="badge w-10 h-10 mx-auto">{s.n}</div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
        {cta && <div className="mt-8"><CTAButton>Start in 60 Seconds</CTAButton></div>}
      </div>
    </section>
  );
}
