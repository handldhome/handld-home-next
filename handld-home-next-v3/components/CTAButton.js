import Link from "next/link";

export default function CTAButton({ children = "Get My Quote", className = "" }) {
  return (
    <Link href="https://handldhome.typeform.com/to/lEaYy0ka" className={`btn btn-primary no-underline ${className}`}>
      {children}
    </Link>
  );
}
