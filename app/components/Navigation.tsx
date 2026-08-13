"use client";

import Link from "next/link";
import { useState, useEffect, useId } from "react";
import BrandLogo from "./BrandLogo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#principes", label: "Principes" },
    { href: "#methode", label: "Méthode" },
    { href: "#references", label: "Références" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-white/10 bg-neutral-950/82 shadow-2xl shadow-black/20 backdrop-blur-2xl" : "bg-neutral-950/18 backdrop-blur-xl"
      }`}
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="inline-flex h-10 items-center rounded-md bg-white px-3 shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-50"
            aria-label="Neatch - Accueil"
          >
            <BrandLogo priority className="h-6 w-auto mix-blend-multiply sm:h-7" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Échanger avec Lionel
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls={mobileMenuId}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            id={mobileMenuId}
            className="mt-2 rounded-lg border border-white/10 bg-neutral-950/95 px-4 py-4 shadow-2xl lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 font-semibold text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 block rounded-md bg-white px-5 py-3 text-center font-semibold text-neutral-950 transition-colors hover:bg-cyan-100"
            >
              Échanger avec Lionel
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
