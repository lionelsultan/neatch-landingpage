import Navigation from "./components/Navigation";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const ArrowIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4 4m4-4H3" />
  </svg>
);

function WorkspacePreview() {
  const roadmap = [
    { label: "Mission", value: "Delivery senior", tone: "bg-blue-100 text-blue-900" },
    { label: "Sourcing", value: "42 profils lus", tone: "bg-amber-100 text-amber-900" },
    { label: "Shortlist", value: "3 validés", tone: "bg-emerald-100 text-emerald-900" },
  ];

  return (
    <div className="notion-window" aria-label="Aperçu d'un espace de pilotage Neatch">
      <div className="notion-window-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Qualification consultant
            </p>
            <h2 className="mt-1 text-xl font-bold text-neutral-950">
              Programme produit & delivery
            </h2>
          </div>
          <div className="rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700">
            Semaine 29
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {roadmap.map((item) => (
            <div key={item.label} className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
              <div className="text-xs text-neutral-500">{item.label}</div>
              <div className={`mt-2 inline-flex rounded-md px-2 py-1 text-xs font-semibold ${item.tone}`}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-neutral-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-neutral-950">Filtre terrain</h3>
            <span className="text-xs text-neutral-500">Avant présentation client</span>
          </div>
          <div className="space-y-3">
            {[
              ["Recherche LinkedIn, plateformes et réseau", "Fait", "bg-emerald-100 text-emerald-900"],
              ["Entretiens de qualification par Lionel", "En cours", "bg-blue-100 text-blue-900"],
              ["Adéquation contexte, posture, séniorité", "À valider", "bg-amber-100 text-amber-900"],
            ].map(([task, state, tone]) => (
              <div key={task} className="flex items-center justify-between gap-3 rounded-md border border-neutral-100 bg-stone-50 px-3 py-2">
                <span className="text-sm text-neutral-800">{task}</span>
                <span className={`shrink-0 rounded px-2 py-1 text-xs font-semibold ${tone}`}>{state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-paper pt-28 md:pt-34" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="mb-5 inline-flex rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm font-semibold text-neutral-700 shadow-sm">
              Lionel Sultan, freelance senior derrière Neatch
            </p>
            <h1
              id="hero-title"
              className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-neutral-950 sm:text-6xl lg:text-7xl"
            >
              Trouvez l&apos;expert qui fera avancer votre mission.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 sm:text-xl">
              Neatch est ma structure de freelance. J&apos;interviens directement sur
              des sujets IT, produit et delivery exigeants, et j&apos;aide aussi mes
              clients comme les plateformes à faire émerger les bons consultants.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="notion-button notion-button-primary">
                Échanger sur votre contexte
                <ArrowIcon />
              </a>
              <a href="#services" className="notion-button notion-button-secondary">
                Voir les missions
              </a>
            </div>
          </div>
          <WorkspacePreview />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      tag: "Mission directe",
      title: "Intervenir moi-même sur vos sujets complexes",
      description:
        "Transformation IT, Product Management, gouvernance agile, coordination multi-équipes et sécurisation du delivery avec une expérience senior du terrain.",
    },
    {
      tag: "Sélection",
      title: "Trouver les consultants capables d'aider",
      description:
        "Recherche fastidieuse sur LinkedIn, plateformes freelance comme Malt ou Freelance Republik, et réseau personnel pour identifier des profils pertinents, disponibles et crédibles.",
    },
    {
      tag: "Filtre terrain",
      title: "Présenter uniquement des profils qualifiés",
      description:
        "Chaque consultant passe par mes entretiens : compréhension du parcours, posture, séniorité, adéquation au contexte client et capacité réelle d'exécution.",
    },
  ];

  return (
    <section id="services" className="notion-section bg-white" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <p className="section-kicker">Missions</p>
          <h2 id="services-title">Un freelance senior, pas une agence.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="notion-card">
              <span className="notion-chip">{service.tag}</span>
              <h3 className="mt-5 text-2xl font-bold leading-tight text-neutral-950">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-neutral-700">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    ["01", "Comprendre", "Clarifier le contexte, les enjeux, le niveau d'urgence et le type de profil nécessaire."],
    ["02", "Chercher", "Explorer LinkedIn, les plateformes freelance et mon réseau, puis faire remonter les bons profils vers la mission."],
    ["03", "Qualifier", "Mener les entretiens, tester la posture terrain et vérifier l'adéquation avec la mission."],
    ["04", "Présenter", "Transmettre une shortlist utile : peu de profils, mais des profils que j'assume de recommander."],
  ];

  const indicators = [
    ["15 ans", "d'expérience terrain"],
    ["8+ ans", "à la tête de Neatch"],
    ["1 filtre", "entretiens menés par Lionel"],
    ["Allié", "clients, plateformes, freelances"],
  ];

  return (
    <section id="methode" className="notion-section bg-stone-50" aria-labelledby="methode-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="section-heading mb-0">
            <p className="section-kicker">Méthode</p>
            <h2 id="methode-title">Le travail invisible qui évite les mauvais castings.</h2>
            <p>
              La valeur vient du temps passé à chercher, trier, appeler et challenger
              les profils avant qu&apos;ils arrivent chez le client.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <ol className="divide-y divide-neutral-200" aria-label="Étapes de notre approche">
              {steps.map(([number, title, description]) => (
                <li key={number} className="grid gap-4 py-5 sm:grid-cols-[72px_1fr]">
                  <div className="font-mono text-sm font-bold text-neutral-400">{number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-950">{title}</h3>
                    <p className="mt-1 text-neutral-700">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="Indicateurs clés">
          {indicators.map(([value, label]) => (
            <div key={label} className="metric-tile" role="listitem">
              <div className="text-3xl font-black text-neutral-950">{value}</div>
              <div className="mt-1 text-sm text-neutral-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partnerPoints = [
    {
      title: "Je fais émerger vos freelances",
      description:
        "Quand un profil pertinent existe déjà sur Malt, Freelance Republik ou une autre plateforme, mon rôle est de l'identifier et de le pousser vers la bonne mission.",
    },
    {
      title: "Je ne court-circuite pas la relation",
      description:
        "Le cadre commercial reste clair : plateforme, client, freelance et apporteur d'affaires savent quel rôle chacun joue dans la mise en relation.",
    },
    {
      title: "Je prends ma commission d'apport",
      description:
        "La valeur que j'apporte est le sourcing, le tri, les entretiens et la recommandation. Je suis rémunéré pour cet apport, sans me substituer au canal qui porte le freelance.",
    },
  ];

  return (
    <section id="partenaires" className="notion-section bg-white" aria-labelledby="partenaires-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-950 p-6 text-white shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-neutral-400">
                Plateformes & partenaires
              </p>
              <h2 id="partenaires-title" className="text-4xl font-black leading-tight md:text-5xl">
                Un allié pour faire monter vos freelances sur les bonnes missions.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                Pour les plateformes et acteurs du freelancing, Neatch est un relais de
                qualification. Je rapproche les besoins clients des bons profils, y compris
                ceux déjà présents chez vous, avec une logique d&apos;apport d&apos;affaires
                transparente.
              </p>
            </div>

            <div className="grid gap-3">
              {partnerPoints.map((point) => (
                <article key={point.title} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                  <h3 className="text-xl font-bold text-white">{point.title}</h3>
                  <p className="mt-2 leading-7 text-neutral-300">{point.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 text-sm text-neutral-300 md:grid-cols-3">
            <div>
              <span className="block font-bold text-white">Pour le client</span>
              moins de bruit, plus de profils réellement qualifiés.
            </div>
            <div>
              <span className="block font-bold text-white">Pour la plateforme</span>
              un freelance de son écosystème positionné sur une mission pertinente.
            </div>
            <div>
              <span className="block font-bold text-white">Pour le freelance</span>
              une opportunité mieux cadrée, portée par une recommandation terrain.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Situations() {
  const situations = [
    "Vous avez besoin d'un profil produit, projet, agile ou delivery vraiment opérationnel.",
    "Vous voulez éviter de perdre du temps avec des candidats mal ciblés ou trop théoriques.",
    "Vous cherchez quelqu'un capable de comprendre vite un contexte complexe et exposé.",
  ];

  return (
    <section id="situations" className="notion-section bg-white" aria-labelledby="situations-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-[#fbf7ee] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">Contextes</p>
              <h2 id="situations-title" className="text-4xl font-black leading-tight text-neutral-950 md:text-5xl">
                Quand le choix du consultant devient critique.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                J&apos;interviens quand la mission exige plus qu&apos;un CV : une posture,
                une expérience terrain, une capacité à naviguer entre business, produit,
                IT et management.
              </p>
              <a href="#contact" className="notion-button notion-button-primary mt-7">
                Partager votre situation
                <ArrowIcon />
              </a>
            </div>
            <ul className="space-y-3" role="list">
              {situations.map((situation) => (
                <li key={situation} className="notion-row">
                  <span className="notion-checkbox" aria-hidden="true" />
                  <span>{situation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const highlights = [
    "Accenture, EY Fabernovel, EDF Renouvelables, CHANEL, Hoppen, Christian Dior Couture.",
    "Interface entre business, produit, architecture, IT, management et équipes terrain.",
    "Capacité à évaluer les consultants parce que j'ai moi-même fait ces missions sur le terrain.",
  ];

  return (
    <section id="fondateur" className="notion-section bg-stone-50" aria-labelledby="fondateur-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="founder-note">
            <div className="text-5xl font-black text-neutral-950">LS</div>
            <div className="mt-8 space-y-2 text-sm text-neutral-600">
              <p>Freelance senior</p>
              <p>Fondateur de Neatch</p>
              <p>Sourcing et qualification de consultants</p>
            </div>
          </div>
          <div>
            <p className="section-kicker">Profil</p>
            <h2 id="fondateur-title" className="text-4xl font-black leading-tight text-neutral-950 md:text-5xl">
              Neatch, c&apos;est Lionel Sultan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Je suis freelance, avec une forte expérience du terrain en transformation IT,
              produit, gouvernance agile et delivery. Cette expérience me permet d&apos;intervenir
              directement, mais aussi de reconnaître les consultants capables d&apos;aider mes clients.
            </p>
            <ul className="mt-7 space-y-3" role="list">
              {highlights.map((highlight) => (
                <li key={highlight} className="notion-row bg-white">
                  <span className="notion-bullet" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="notion-button notion-button-secondary mt-7">
              Contacter Lionel Sultan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function References() {
  const references = [
    ["Christian Dior Couture", "Release Train Engineer | depuis 2021"],
    ["CHANEL", "Senior Project Manager"],
    ["EDF Renouvelables", "Senior Product Owner / Project Manager"],
    ["Hoppen / Exolis", "Product Manager, PO, PM, Agile Coach"],
    ["EY Fabernovel", "Senior Digital Consultant"],
    ["Accenture", "Consultant intégration, management et stratégie"],
  ];

  return (
    <section id="references" className="notion-section bg-white" aria-labelledby="references-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <p className="section-kicker">Références</p>
          <h2 id="references-title">Des contextes où la qualité de pilotage compte.</h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="grid grid-cols-[1fr_1.35fr] border-b border-neutral-200 bg-stone-50 px-4 py-3 text-sm font-semibold text-neutral-500">
            <span>Organisation</span>
            <span>Rôle</span>
          </div>
          {references.map(([company, role]) => (
            <div key={company} className="grid grid-cols-[1fr_1.35fr] border-b border-neutral-100 px-4 py-4 last:border-b-0">
              <span className="font-semibold text-neutral-950">{company}</span>
              <span className="text-neutral-700">{role}</span>
            </div>
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
        <Partners />
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
