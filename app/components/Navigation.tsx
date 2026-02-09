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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#methode", label: "Méthode" },
    { href: "#clients", label: "Clients" },
    { href: "#freelances", label: "Freelances" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-brand-500" : "text-white"
            }`}
            aria-label="Neatch - Accueil"
          >
            Neatch
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-neutral-700 hover:text-brand-600"
                    : "text-white hover:text-brand-100"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-brand-700 transition-colors btn-lift"
            >
              Parler de votre besoin
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-neutral-700 hover:bg-neutral-100"
                : "text-white hover:bg-white/10"
            }`}
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
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4 px-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-neutral-700 font-medium hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 bg-brand-600 text-white text-center px-5 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors"
            >
              Parler de votre besoin
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
