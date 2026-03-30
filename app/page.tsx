import Navigation from "./components/Navigation";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function Hero() {
  return (
    <section
      className="hero-gradient min-h-screen flex items-center pt-16"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-5xl">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 mb-6">
            Conseil indépendant en transformation IT, Product Management et delivery
          </p>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Aligner stratégie produit, gouvernance agile et exécution terrain.
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-4xl">
            Neatch accompagne les organisations qui doivent structurer un programme,
            sécuriser un delivery complexe ou remettre de la clarté entre business,
            produit, architecture et IT. Nous aidons aussi nos clients finaux à
            recruter les chefs de projet, Product Owners, Scrum Masters et Product
            Managers dont ils ont besoin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-brand-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-50 transition-colors btn-lift btn-glow"
            >
              Échanger sur votre contexte
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors btn-glow"
            >
              Voir les interventions
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
      title: "Structuration & cadrage",
      description:
        "Clarifier la cible, les responsabilités et les priorités avant que l’exécution ne se dégrade.",
      items: [
        {
          iconPath:
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
          title: "Stratégie produit",
          text: "Vision, roadmap, arbitrages et alignement avec les priorités business.",
        },
        {
          iconPath:
            "M7 8h10M7 12h4m1 8h5a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2h5zm0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5",
          title: "Gouvernance",
          text: "Comitologie utile, rôles clairs, décisions accélérées et visibilité fiable.",
        },
        {
          iconPath:
            "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
          title: "Cadrage de programme",
          text: "Objectifs, dépendances, trajectoire et conditions de réussite explicités.",
        },
      ],
    },
    {
      title: "Pilotage & sécurisation du delivery",
      description:
        "Remettre du rythme, de la coordination et de la maîtrise dans des environnements complexes.",
      items: [
        {
          iconPath:
            "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
          title: "Coordination multi-équipes",
          text: "Produit, architecture, métiers, delivery et management remis en phase.",
        },
        {
          iconPath:
            "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
          title: "Gouvernance agile à l’échelle",
          text: "Rituels, synchronisation et amélioration continue inspirés des pratiques SAFe.",
        },
        {
          iconPath:
            "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
          title: "Sécurisation des trajectoires",
          text: "Lecture des risques, arbitrages, alertes et plans d’action orientés résultat.",
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="services-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Comment nous intervenons
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Des interventions ciblées pour remettre de la cohérence entre stratégie,
            organisation et exécution, avec la possibilité d’identifier et de
            recruter les profils clés côté client final.
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
      title: "Diagnostic",
      description:
        "Comprendre le contexte, les enjeux, les irritants de gouvernance et les risques delivery.",
    },
    {
      number: "02",
      title: "Cadrage",
      description:
        "Poser un cadre de décision, clarifier les rôles et définir une trajectoire réaliste.",
    },
    {
      number: "03",
      title: "Orchestration",
      description:
        "Coordonner les parties prenantes, fluidifier les arbitrages et remettre les équipes en mouvement.",
    },
    {
      number: "04",
      title: "Autonomie",
      description:
        "Installer des pratiques durables pour que l’organisation gagne en maîtrise dans la durée.",
    },
  ];

  const indicators = [
    { value: "15 ans", label: "d’expérience IT et conseil" },
    { value: "8+ ans", label: "à la tête de Neatch" },
    { value: "4 secteurs", label: "luxe, banque, santé, énergies" },
    { value: "Global", label: "grands groupes et contextes internationaux" },
  ];

  return (
    <section
      id="methode"
      className="py-20 md:py-28 bg-neutral-50"
      aria-labelledby="methode-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="methode-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Notre approche
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Une logique simple: rendre les décisions plus claires et l’exécution plus fiable.
          </p>
        </div>

        <div className="hidden lg:block" aria-label="Étapes de notre approche">
          <div className="relative">
            <div
              className="absolute top-8 left-0 right-0 h-0.5 bg-brand-200"
              aria-hidden="true"
            />
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

        <ol className="lg:hidden space-y-8" aria-label="Étapes de notre approche">
          {steps.map((step, idx) => (
            <li key={idx} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold">
                  <span aria-hidden="true">{step.number}</span>
                  <span className="sr-only">Étape {idx + 1}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className="w-0.5 h-full bg-brand-200 mx-auto mt-4"
                    aria-hidden="true"
                  />
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

        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          role="list"
          aria-label="Indicateurs clés"
        >
          {indicators.map((indicator) => (
            <div
              key={indicator.label}
              className="bg-white rounded-xl p-6 shadow-sm"
              role="listitem"
            >
              <div className="text-3xl font-bold text-brand-600 mb-2">
                {indicator.value}
              </div>
              <div className="text-sm text-neutral-700">{indicator.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Situations() {
  const situations = [
    {
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Programme stratégique qui patine",
      description:
        "Priorités mouvantes, arbitrages trop lents, dépendances mal pilotées et visibilité incertaine.",
    },
    {
      iconPath:
        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Organisation produit ou agile à renforcer",
      description:
        "Besoin de remettre du cadre, des responsabilités explicites et une gouvernance utilisable.",
    },
    {
      iconPath:
        "M7 8h10M7 12h10M7 16h6m9-4A9 9 0 113 12a9 9 0 0113-8.485",
      title: "Transformation sous forte exposition",
      description:
        "Contexte international, enjeux business élevés, comitologie exigeante et attente forte sur le delivery.",
    },
  ];

  return (
    <section
      id="situations"
      className="py-20 md:py-28 bg-brand-50"
      aria-labelledby="situations-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              id="situations-title"
              className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
            >
              Quand faire appel à Neatch
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              L’intervention est utile quand il faut simultanément clarifier la
              direction, fluidifier la coordination et sécuriser l’exécution.
            </p>
            <ul className="space-y-6" role="list">
              {situations.map((situation, idx) => (
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
                        d={situation.iconPath}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {situation.title}
                    </h3>
                    <p className="text-neutral-600">{situation.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center mt-8 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors btn-lift btn-glow"
            >
              Partager votre situation
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
                    d="M9 17v-2a4 4 0 014-4h6m-6 10H5a2 2 0 01-2-2V7a2 2 0 012-2h6m4 0h6a2 2 0 012 2v8a2 2 0 01-2 2h-6m0-12v12"
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

function Founder() {
  const highlights = [
    {
      iconPath:
        "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "15 ans entre conseil, produit et delivery",
      description:
        "Parcours construit entre Accenture, EY Fabernovel, EDF Renouvelables, CHANEL, Hoppen et Christian Dior Couture.",
    },
    {
      iconPath:
        "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
      title: "Capacité à faire le lien",
      description:
        "Business, produit, architecture, IT, management et équipes terrain alignés autour d’une même trajectoire.",
    },
    {
      iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Approche senior et indépendante",
      description:
        "Intervention directe, peu de friction, forte exigence de clarté et de qualité de pilotage.",
    },
  ];

  return (
    <section
      id="fondateur"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="fondateur-title"
    >
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
            <h2
              id="fondateur-title"
              className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
            >
              Un cabinet fondé par un opérateur du terrain
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Lionel Sultan intervient à l’interface entre stratégie, gouvernance agile
              et exécution opérationnelle. Son parcours lui permet d’agir aussi bien sur
              le cadrage d’une transformation que sur la remise en maîtrise d’un delivery.
            </p>
            <ul className="space-y-6" role="list">
              {highlights.map((highlight, idx) => (
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
                        d={highlight.iconPath}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-neutral-600">{highlight.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center mt-8 border-2 border-brand-500 text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors btn-glow"
            >
              Contacter Lionel Sultan
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

function References() {
  const references = [
    {
      company: "Christian Dior Couture",
      role: "Release Train Engineer | depuis 2021",
      text: "Coordination d’un Agile Release Train dans un environnement international exigeant, avec pilotage des dépendances, des risques, des arbitrages et de la visibilité delivery.",
    },
    {
      company: "CHANEL",
      role: "Senior Project Manager",
      text: "Pilotage d’une implémentation Salesforce Service Cloud à l’international pour plus de 400 utilisateurs finaux, avec budget supérieur à 700 k€.",
    },
    {
      company: "EDF Renouvelables",
      role: "Senior Product Owner / Project Manager",
      text: "Pilotage pendant 2,5 ans de projets structurants autour de Salesforce, mobilité terrain, contrôle interne et maintenance, sur des budgets de plusieurs millions d’euros.",
    },
    {
      company: "Hoppen / Exolis",
      role: "Product Manager, PO, PM, Agile Coach",
      text: "Conduite de projets stratégiques en santé, dont des dispositifs liés au suivi COVID et à l’accompagnement d’établissements de référence.",
    },
    {
      company: "EY Fabernovel",
      role: "Senior Digital Consultant",
      text: "Missions de product management, cadrage stratégique et études d’aide à la décision pour des grands comptes et institutions.",
    },
    {
      company: "Accenture",
      role: "Consultant intégration, management et stratégie",
      text: "Socle de conseil acquis sur des sujets de stratégie, organisation et transformation des systèmes d’information dans la banque.",
    },
  ];

  return (
    <section
      id="references"
      className="py-20 md:py-28 bg-neutral-50"
      aria-labelledby="references-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="references-title"
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Références d’intervention
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Expérience acquise dans des contextes où la qualité de pilotage et la fiabilité
            du delivery ne sont pas négociables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((reference) => (
            <article
              key={reference.company}
              className="bg-white rounded-2xl p-8 shadow-sm card-hover"
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {reference.company}
              </h3>
              <p className="text-sm font-medium text-brand-600 mb-4">
                {reference.role}
              </p>
              <p className="text-neutral-700 leading-relaxed">{reference.text}</p>
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
        <Situations />
        <Founder />
        <References />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
