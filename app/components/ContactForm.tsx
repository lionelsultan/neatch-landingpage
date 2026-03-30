export default function ContactForm() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-neutral-50" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12">
          <div>
            <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Parlons de votre contexte
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Si vous devez clarifier une trajectoire produit, renforcer une
              gouvernance agile ou sécuriser un delivery complexe, prenons un temps
              d’échange.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-800">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Email</div>
                  <a
                    href="mailto:contact@neatch.com"
                    className="text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    contact@neatch.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-800">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h2.28a2 2 0 011.9 1.37l1.03 3.09a2 2 0 01-.45 2.05l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 012.05-.45l3.09 1.03A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Téléphone</div>
                  <a
                    href="tel:+33611084409"
                    className="text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    06 11 08 44 09
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-800">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">LinkedIn</div>
                  <a
                    href="https://linkedin.com/in/lionelsultan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="founder-link-aura inline-flex items-center gap-2.5 rounded-xl px-5 py-2.5 text-white"
                  >
                    <span className="founder-link-aura-send" aria-hidden="true">
                      <svg
                        className="founder-link-aura-send-mail h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3.75" y="5.5" width="16.5" height="13" rx="2.25" />
                        <path d="M4.5 7.25 12 12.5l7.5-5.25" />
                      </svg>
                      <svg
                        className="founder-link-aura-send-plane h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M2 20.5 22 12 2 3.5l2.8 6.9L14.2 12l-9.4 1.6L2 20.5z" />
                      </svg>
                    </span>
                    Contacter Lionel Sultan sur LinkedIn
                    <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
