export default function ContactForm() {
  return (
    <section id="contact" className="notion-section bg-white" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-950 p-6 text-white shadow-sm sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-neutral-400">Contact</p>
            <h2 id="contact-title" className="mb-6 text-4xl font-black leading-tight md:text-5xl">
              Parlons de votre contexte
            </h2>
            <p className="mb-8 text-lg leading-8 text-neutral-300">
              Client final, plateforme ou cabinet de freelances : si vous avez besoin
              d&apos;un consultant qualifié pour une mission produit, projet, agile ou
              delivery, prenons un temps d&apos;échange.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-white text-neutral-950">
                  <svg
                    className="h-5 w-5"
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
                  <div className="font-bold text-white">Email</div>
                  <a
                    href="mailto:contact@neatch.com"
                    className="text-neutral-300 transition-colors hover:text-white"
                  >
                    contact@neatch.com
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-white text-neutral-950">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white">LinkedIn</div>
                  <a
                    href="https://linkedin.com/in/lionelsultan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 transition-colors hover:text-white"
                  >
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
