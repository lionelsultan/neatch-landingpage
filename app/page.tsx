import Navigation from "./components/Navigation";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function Hero() {
  return (
    <section
      className="hero-gradient hero-pattern min-h-screen flex items-center pt-16"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Nous trouvons les meilleurs consultants pour réaliser vos projets dans les délais, avec la qualité attendue.
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed">
            Nous sommes impartiaux dans nos choix.
            Ethique, transparence, qualité et accompagnement sur-mesure pour vos projets de transformation digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-brand-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-50 transition-colors btn-lift"
            >
              Demander un échange
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Conseil digital & Delivery",
      description:
        "Accompagnement stratégique et opérationnel pour vos projets digitaux",
      items: [
        {
          iconPath:
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
          title: "Gouvernance",
          text: "Structuration et pilotage de votre organisation digitale",
        },
        {
          iconPath:
            "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
          title: "Product Management",
          text: "Définition de la vision produit et priorisation des roadmaps",
        },
        {
          iconPath:
            "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
          title: "Pilotage de projet",
          text: "Coordination des équipes et suivi des livrables",
        },
        {
          iconPath:
            "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
          title: "Amélioration continue",
          text: "Optimisation des processus et performance des équipes",
        },
      ],
    },
    {
      title: "Mise en relation & Staffing",
      description:
        "Accès à un vivier qualifié de consultants freelances sélectionnés",
      items: [
        {
          iconPath:
            "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
          title: "Vivier qualifié",
          text: "Consultants sélectionnés sur leurs compétences et savoir-être",
        },
        {
          iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
          title: "Matching précis",
          text: "Adéquation entre besoins client et profils consultants",
        },
        {
          iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
          title: "Flexibilité",
          text: "Montée en charge rapide et ajustement des ressources",
        },
        {
          iconPath:
            "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
          title: "Transparence",
          text: "Visibilité totale sur les tarifs et conditions",
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Nos services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Deux piliers complémentaires pour accompagner votre transformation
            digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-neutral-200 rounded-2xl p-8 card-hover"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-8">{service.description}</p>
              <ul className="space-y-6" role="list">
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
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
                          d={item.iconPath}
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-600">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    {
      number: "01",
      title: "Cadrage du besoin",
      description:
        "Échange approfondi pour comprendre votre contexte, vos enjeux et vos attentes.",
    },
    {
      number: "02",
      title: "Sélection & matching",
      description:
        "Identification des profils adaptés dans notre vivier et présentation de candidats qualifiés.",
    },
    {
      number: "03",
      title: "Démarrage & suivi",
      description:
        "Onboarding structuré et points de suivi réguliers pour assurer la réussite de la mission.",
    },
    {
      number: "04",
      title: "Amélioration continue",
      description:
        "Feedback et ajustements pour optimiser la collaboration dans la durée.",
    },
  ];

  return (
    <section id="methode" className="py-20 md:py-28 bg-neutral-50" aria-labelledby="methode-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="methode-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Notre méthode
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Un processus structuré pour garantir la qualité et la réussite de
            vos projets
          </p>
        </div>

        <div className="hidden lg:block" aria-label="Étapes de notre méthode">
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-brand-200" aria-hidden="true" />
            <ol className="grid grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <li key={idx} className="relative">
                  <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 relative z-10">
                    <span aria-hidden="true">{step.number}</span>
                    <span className="sr-only">Étape {idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ol className="lg:hidden space-y-8" aria-label="Étapes de notre méthode">
          {steps.map((step, idx) => (
            <li key={idx} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold">
                  <span aria-hidden="true">{step.number}</span>
                  <span className="sr-only">Étape {idx + 1}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-brand-200 mx-auto mt-4" aria-hidden="true" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center" role="list" aria-label="Indicateurs clés">
          <div className="bg-white rounded-xl p-6 shadow-sm" role="listitem">
            <div className="text-3xl font-bold text-brand-600 mb-2">{"<48h"}</div>
            <div className="text-sm text-neutral-700">
              Réponse initiale moyenne
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm" role="listitem">
            <div className="text-3xl font-bold text-brand-600 mb-2">3</div>
            <div className="text-sm text-neutral-700">
              Profils présentés en moyenne
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm" role="listitem">
            <div className="text-3xl font-bold text-brand-600 mb-2">100%</div>
            <div className="text-sm text-neutral-700">
              Transparence tarifaire
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm" role="listitem">
            <div className="text-3xl font-bold text-brand-600 mb-2">Suivi</div>
            <div className="text-sm text-neutral-700">
              Tout au long de la mission
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-neutral-500 mt-4">
          * Indicateurs moyens non contractuels, pouvant varier selon le
          contexte
        </p>
      </div>
    </section>
  );
}

function ForClients() {
  const benefits = [
    {
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Réduction du temps de staffing",
      description:
        "Accélérez vos recrutements grâce à notre vivier pré-qualifié de consultants disponibles.",
    },
    {
      iconPath:
        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Adéquation garantie",
      description:
        "Chaque consultant est sélectionné pour ses compétences techniques et son savoir-être.",
    },
    {
      iconPath:
        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "Gouvernance et suivi",
      description:
        "Un accompagnement structuré tout au long de la mission pour garantir le succès.",
    },
  ];

  return (
    <section id="clients" className="py-20 md:py-28 bg-brand-50" aria-labelledby="clients-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="clients-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Pour les clients
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Vous cherchez des consultants qualifiés sans les contraintes des
              ESN traditionnelles ? Nous vous accompagnons avec transparence et
              réactivité.
            </p>
            <ul className="space-y-6" role="list">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-600 shadow-sm">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={benefit.iconPath}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center mt-8 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors btn-lift"
            >
              Décrire votre besoin
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="hidden lg:block" aria-hidden="true">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-brand-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForFreelances() {
  const benefits = [
    {
      iconPath:
        "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Missions directes",
      description:
        "Accédez à des missions qualifiées en direct, sans intermédiaires superflus.",
    },
    {
      iconPath:
        "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
      title: "Accompagnement",
      description:
        "Support tout au long de vos missions pour vous concentrer sur l'essentiel.",
    },
    {
      iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Transparence totale",
      description:
        "Clarté sur les conditions, les tarifs et les attentes des missions.",
    },
  ];

  return (
    <section id="freelances" className="py-20 md:py-28 bg-white" aria-labelledby="freelances-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 hidden lg:block" aria-hidden="true">
            <div className="bg-neutral-50 rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-brand-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 id="freelances-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Pour les freelances
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Vous êtes consultant indépendant et cherchez des missions
              enrichissantes ? Rejoignez notre vivier pour accéder à des
              opportunités de qualité.
            </p>
            <ul className="space-y-6" role="list">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={benefit.iconPath}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center mt-8 border-2 border-brand-500 text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
            >
              Rejoindre le vivier
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Une approche rafraîchissante du staffing. La transparence et la réactivité ont fait toute la différence sur notre projet de transformation.",
      author: "Responsable IT",
      company: "Secteur Luxe",
    },
    {
      quote:
        "Enfin un partenaire qui comprend nos enjeux et propose des profils vraiment adaptés. Le suivi tout au long de la mission est un vrai plus.",
      author: "Directeur de projet",
      company: "Secteur Banque",
    },
    {
      quote:
        "Les missions proposées correspondent parfaitement à mes compétences. L'accompagnement est professionnel et les conditions toujours claires.",
      author: "Consultant freelance",
      company: "Product Owner",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-neutral-50" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Retours d&apos;expérience de nos clients et consultants
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm card-hover"
            >
              <svg
                className="w-10 h-10 text-brand-600 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="block font-semibold text-neutral-900">
                      {testimonial.author}
                    </span>
                    <span className="block text-sm text-neutral-500">
                      {testimonial.company}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Services />
        <Method />
        <ForClients />
        <ForFreelances />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
