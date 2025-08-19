export default function Reviews() {
  const REVIEWS = [
    { name: "Pasadena Homeowner", text: "So easy. They showed up on time and the results were spotless." },
    { name: "La Cañada Homeowner", text: "Love the recurring schedule—zero hassle and fair pricing." },
    { name: "Altadena Homeowner", text: "Professional crew, great communication, everything just handled." },
  ];
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-brand-navy">Reviews</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card p-6">
              <p className="text-gray-700">“{r.text}”</p>
              <p className="mt-4 text-sm font-semibold text-brand-navy">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
