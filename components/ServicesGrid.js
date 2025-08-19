import CTAButton from "./CTAButton";

const SERVICES = [
  { title: "Window Washing", desc: "Crystal-clear windows inside & out." },
  { title: "Gutter Cleaning", desc: "Prevent clogs and water damage." },
  { title: "Pressure Washing", desc: "Driveways, patios, home exteriors." },
  { title: "Trash Bin Cleaning", desc: "Sanitized, deodorized bins." },
  { title: "Pest Control (Exterior)", desc: "Keep pests at bay around the home." },
  { title: "Handyman Tasks", desc: "Small fixes & seasonal odds and ends." },
];

export default function ServicesGrid({ cta = true }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-brand-navy">Services</h2>
        <p className="mt-3 text-gray-600 max-w-prose">Exterior-focused services performed by pros—
          efficient, tidy, and on time.</p>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="card p-6">
              <h3 className="text-xl font-semibold text-brand-navy">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
        {cta && <div className="mt-8"><CTAButton>Get My Custom Quote</CTAButton></div>}
      </div>
    </section>
  );
}
