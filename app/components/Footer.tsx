"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white mb-4 block" aria-label="Neatch - Accueil">
              Neatch
            </a>
            <p className="text-neutral-300 max-w-md">
              Conseil digital et mise en relation de consultants. Nous
              accompagnons les entreprises dans leur transformation avec
              transparence et qualité.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#methode"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Méthode
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#freelances"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Freelances
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@neatch.com"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  contact@neatch.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/lionelsultan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  LinkedIn
                  <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
                </a>
              </li>
              <li>
                <a
                  href="/legal"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-300 text-sm">
            &copy; {currentYear} Neatch E.U.R.L. Tous droits réservés.
          </p>
          <p className="text-neutral-400 text-sm">SIREN : 831282066</p>
        </div>
      </div>
    </footer>
  );
}
