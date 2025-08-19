"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/membership", label: "Membership" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/logo-dark.png" alt="Handld Home Services" width={44} height={44} />
          <span className="font-semibold text-brand-navy">Handld Home Services</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <Link key={n.href} className="text-sm hover:text-brand-navy no-underline" href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link href="https://handldhome.typeform.com/to/lEaYy0ka" className="btn btn-primary no-underline">
            Get My Quote
          </Link>
        </nav>
        <div className="md:hidden">
          <Link href="https://handldhome.typeform.com/to/lEaYy0ka" className="btn btn-primary no-underline">
            Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
