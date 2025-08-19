export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container section grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-brand-navy">About</h3>
          <p className="mt-3 text-gray-600 max-w-prose">
            Handld makes home maintenance effortless with tech-enabled scheduling,
            bundled services, and a neighborly team you can trust.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brand-navy">Contact</h3>
          <p className="mt-3 text-gray-600">
            Email: <a className="underline" href="mailto:Concierge@handldhome.com">Concierge@handldhome.com</a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="container py-6 text-sm text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Handld Home Services</span>
          <span>Pasadena, CA</span>
        </div>
      </div>
    </footer>
  );
}
