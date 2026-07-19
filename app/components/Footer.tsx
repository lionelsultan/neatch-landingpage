"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white py-14 text-neutral-950" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 block text-2xl font-black text-neutral-950" aria-label="Neatch - Accueil">
              Neatch
            </Link>
            <p className="max-w-md text-neutral-600">
              Structure de Lionel Sultan, freelance senior en transformation IT,
              Product Management, delivery et qualification de consultants.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  Missions
                </a>
              </li>
              <li>
                <a
                  href="#methode"
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  Méthode
                </a>
              </li>
              <li>
                <a
                  href="#partenaires"
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  Partenaires
                </a>
              </li>
              <li>
                <a
                  href="#situations"
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  Contextes
                </a>
              </li>
              <li>
                <a
                  href="#fondateur"
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  Profil
                </a>
              </li>
              <li>
                <a
                  href="#references"
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  Références
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@neatch.com"
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  contact@neatch.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/lionelsultan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  LinkedIn
                  <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
                </a>
              </li>
              <li>
                <a
                  href="/legal"
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 md:flex-row">
          <p className="text-sm text-neutral-600">
            &copy; {currentYear} Neatch E.U.R.L. Tous droits réservés.
          </p>
          <p className="text-sm text-neutral-500">SIREN : 831282066</p>
        </div>
      </div>
    </footer>
  );
}
