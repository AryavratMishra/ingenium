"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalLogo() {
  const pathname = usePathname();

  // Hide the global logo on the home page (both landing and navigation views)
  // and the time core page
  if (pathname === "/" || pathname === "/countdown") {
    return null;
  }

  return (
    <Link
      href="/?state=navigation"
      className="absolute top-6 left-1/2 -translate-x-1/2 z-50 mix-blend-screen flex justify-center items-center cursor-pointer transition-transform hover:scale-105"
    >
      <img src="/favicon.png" alt="ingenium logo" className="w-16 h-16 sm:w-20 sm:h-20" />
    </Link>
  );
}
