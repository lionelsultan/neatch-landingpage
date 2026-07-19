"use client";

import Link from "next/link";
import { useState, useEffect, useId } from "react";

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
    { href: "#services", label: "Missions" },
    { href: "#methode", label: "Méthode" },
    { href: "#partenaires", label: "Partenaires" },
    { href: "#situations", label: "Contextes" },
    { href: "#fondateur", label: "Profil" },
    { href: "#references", label: "Références" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-neutral-200 bg-white/90 backdrop-blur-xl" : "bg-white/80 backdrop-blur-xl"
      }`}
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-2xl font-black text-neutral-950 transition-colors"
            aria-label="Neatch - Accueil"
          >
            Neatch
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-neutral-700 transition-colors hover:text-neutral-950"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Échanger avec Lionel
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-2 text-neutral-800 transition-colors hover:bg-neutral-100 lg:hidden"
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
            className="mt-2 rounded-lg border border-neutral-200 bg-white px-4 py-4 shadow-lg lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 font-semibold text-neutral-700 transition-colors hover:text-neutral-950"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 block rounded-md bg-neutral-950 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Échanger avec Lionel
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
