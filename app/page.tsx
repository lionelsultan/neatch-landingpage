import Image from "next/image";
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
    { label: "Mission", value: "Product Owner", tone: "bg-blue-100 text-blue-900" },
    { label: "Sourcing", value: "42 profils lus", tone: "bg-amber-100 text-amber-900" },
    { label: "Shortlist", value: "3 validés", tone: "bg-emerald-100 text-emerald-900" },
  ];

  return (
    <div className="notion-window motion-float" aria-label="Aperçu d'un espace de pilotage Neatch">
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
            <h3 className="mt-1 text-xl font-bold text-neutral-950">
              Recherche d&apos;un Product Owner (secteur Retail / Luxe)
            </h3>
          </div>
          <div className="rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700">
            Fourchette TJM recherché : 800-850
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {roadmap.map((item) => (
            <div key={item.label} className="mini-status-card rounded-lg border border-neutral-200 bg-neutral-50 p-3">
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
              ["Adéquation contexte, posture, expérience", "À valider", "bg-amber-100 text-amber-900"],
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
    <section className="hero-paper pt-24 md:pt-32" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 md:pb-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="hero-copy">
            <p className="mb-5 inline-flex rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm font-semibold text-neutral-700 shadow-sm">
              Conseil IT, produit et delivery
            </p>
            <h1
              id="hero-title"
              className="max-w-4xl text-4xl font-black leading-[0.98] tracking-normal text-neutral-950 sm:text-6xl lg:text-7xl"
            >
              J&apos;interviens personnellement pour sécuriser vos missions IT.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 sm:text-xl">
              Neatch est la structure de Lionel Sultan. J&apos;interviens directement sur vos
              enjeux IT, produit et delivery : cadrage, pilotage, gouvernance, arbitrages
              et remise en mouvement des équipes. En complément, j&apos;aide mes clients à
              identifier les bons renforts au bon moment et au bon endroit.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-neutral-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur">
              <Image
                src="/lionel-sultan.png"
                alt="Portrait de Lionel Sultan"
                width={48}
                height={48}
                priority
                className="h-12 w-12 rounded-md object-cover object-[center_35%]"
              />
              <div>
                <p className="text-sm font-bold leading-tight text-neutral-950">
                  Lionel Sultan
                </p>
                <p className="mt-0.5 text-xs font-semibold text-neutral-500">
                  Conseil IT, produit &amp; delivery
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="notion-button notion-button-primary">
                Échanger sur votre contexte
                <ArrowIcon />
              </a>
              <a href="#principes" className="notion-button notion-button-secondary">
                Principes fondateurs
              </a>
            </div>
          </div>
          <WorkspacePreview />
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const principles = [
    {
      tag: "Prestation personnelle",
      title: "Intervenir là où la mission doit avancer",
      description:
        "J'interviens directement sur les sujets exposés : transformation IT, Product Management, gouvernance agile, coordination multi-équipes et sécurisation du delivery.",
    },
    {
      tag: "Exigence terrain",
      title: "Cadrer, arbitrer et remettre du rythme",
      description:
        "Ma valeur vient de la compréhension rapide du contexte, de la capacité à clarifier les priorités et de décisions concrètes avec les équipes.",
    },
    {
      tag: "Renfort ciblé",
      title: "Identifier les bons profils au bon moment",
      description:
        "Quand il faut compléter une équipe cliente, j'aide à repérer, qualifier et recommander les consultants capables de renforcer le dispositif au bon endroit.",
    },
  ];

  return (
    <section id="principes" className="notion-section scroll-reveal bg-white" aria-labelledby="principes-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <p className="section-kicker">Principes fondateurs</p>
          <h2 id="principes-title">Une prestation personnelle d&apos;abord, un renfort ciblé ensuite.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((service) => (
            <article key={service.title} className="notion-card motion-card">
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

function Audiences() {
  const audiences = [
    {
      title: "Client final",
      description:
        "Vous avez une mission critique à cadrer, relancer ou sécuriser, avec besoin d'un interlocuteur capable de comprendre vite le contexte métier et IT.",
    },
    {
      title: "Plateforme freelance",
      description:
        "Vous voulez faire émerger les bons profils de votre écosystème sur des besoins exigeants, avec une qualification terrain avant présentation.",
    },
    {
      title: "Cabinet ou partenaire",
      description:
        "Vous cherchez un relais expérimenté pour qualifier une mission, challenger une shortlist ou recommander un consultant que vous pouvez assumer.",
    },
  ];

  return (
    <section id="audiences" className="notion-section scroll-reveal bg-stone-50" aria-labelledby="audiences-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <p className="section-kicker">Pour qui</p>
          <h2 id="audiences-title">Trois contextes, une même exigence terrain.</h2>
          <p>
            Neatch intervient d&apos;abord pour traiter les sujets IT, produit et delivery
            qui demandent de l&apos;expérience terrain, puis pour aider à renforcer les
            équipes quand le contexte l&apos;exige.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="notion-card motion-card min-h-0">
              <h3 className="text-2xl font-bold leading-tight text-neutral-950">
                {audience.title}
              </h3>
              <p className="mt-4 leading-7 text-neutral-700">{audience.description}</p>
            </article>
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
      title: "Comprendre",
      description: "Clarifier le contexte, les enjeux, le niveau d'urgence et le mode d'intervention utile.",
      image: {
        src: "/field/workshop-campaign.jpg",
        alt: "Workshop convivial autour d'une table de travail",
      },
    },
    {
      number: "02",
      title: "Chercher",
      description: "Si un renfort est nécessaire, explorer LinkedIn, les plateformes freelance et mon réseau pour faire émerger les bons profils.",
    },
    {
      number: "03",
      title: "Qualifier",
      description: "Mener les entretiens, tester la posture terrain et vérifier l'adéquation avec la mission.",
      image: {
        src: "/field/entretien-rodeo.jpg",
        alt: "Entretien professionnel dans une salle de réunion",
      },
    },
    {
      number: "04",
      title: "Présenter",
      description: "Transmettre une shortlist utile : peu de profils, mais des profils que j'assume de recommander.",
    },
  ];

  const indicators = [
    ["15 ans", "d'expérience terrain"],
    ["8+ ans", "à la tête de Neatch"],
    ["1 filtre", "entretiens menés par Lionel"],
    ["Allié", "clients, plateformes, freelances"],
  ];

  const fieldPhotos = [
    {
      src: "/field/la-defense-bureau.jpg",
      alt: "Bureau de mission avec vue sur La Défense",
    },
    {
      src: "/field/poste-travail.png",
      alt: "Poste de travail utilisé pour piloter les missions",
    },
    {
      src: "/field/bureau-vue-paris.jpg",
      alt: "Espace de travail avec vue sur Paris",
    },
  ];

  return (
    <section id="methode" className="notion-section scroll-reveal bg-stone-50" aria-labelledby="methode-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="section-heading mb-0">
            <p className="section-kicker">Méthode</p>
            <h2 id="methode-title">Le travail invisible qui sécurise l&apos;intervention.</h2>
            <p>
              La valeur vient du cadrage initial, de la lecture terrain, puis du temps
              passé à chercher, trier, appeler et challenger les profils lorsqu&apos;un
              renfort externe est nécessaire.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-2" aria-label="Illustrations de missions terrain">
              {fieldPhotos.map((photo) => (
                <figure key={photo.src} className="method-photo overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 120px, 30vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <ol className="divide-y divide-neutral-200" aria-label="Étapes de notre approche">
              {steps.map((step) => (
                <li key={step.number} className="method-step grid gap-4 py-5 sm:grid-cols-[72px_1fr]">
                  <div className="font-mono text-sm font-bold text-neutral-400">{step.number}</div>
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-950">{step.title}</h3>
                      <p className="mt-1 text-neutral-700">{step.description}</p>
                    </div>
                    {step.image ? (
                      <div className="method-thumb relative h-20 w-32 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
                        <Image
                          src={step.image.src}
                          alt={step.image.alt}
                          fill
                          sizes="(min-width: 640px) 128px, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="Indicateurs clés">
          {indicators.map(([value, label]) => (
            <div key={label} className="metric-tile motion-card" role="listitem">
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
      title: "Un modèle d'apport transparent",
      description:
        "La rémunération correspond au sourcing, au tri, aux entretiens et à la recommandation, sans me substituer au canal qui porte le freelance.",
    },
  ];

  return (
    <section id="partenaires" className="notion-section scroll-reveal bg-white" aria-labelledby="partenaires-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="dark-panel rounded-2xl border border-neutral-200 bg-neutral-950 p-6 text-white shadow-sm sm:p-8 lg:p-10">
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
    "Accenture : Société Générale Banque de Détail, conception du logiciel d'octroi de crédit utilisé en agence, spécifications fonctionnelles, UX/UI et prototypes HTML.",
    "Accenture : Société Générale CIB / APTP, construction d'une plateforme de back-office post-trading, spécifications, transcodage API, XML ISO 20022 et cartographies applicatives.",
    "Accenture : BNP Paribas, Crédit Agricole Consumer Finance et BNP Paribas Cash Management, missions d'analyse fonctionnelle, recette, KYC, processus DSI, KPI ITIL et recommandations.",
    "Interface entre business, produit, architecture, IT, management et équipes terrain.",
    "Capacité à évaluer les consultants parce que j'ai moi-même fait ces missions sur le terrain.",
  ];

  return (
    <section id="fondateur" className="notion-section bg-stone-50" aria-labelledby="fondateur-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="founder-note overflow-hidden bg-white p-0">
            <div className="border-b border-neutral-200 bg-neutral-950 p-6 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                    Neatch
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-none">
                    Lionel Sultan
                  </h3>
                </div>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-neutral-200 shadow-sm">
                  <Image
                    src="/lionel-sultan.png"
                    alt="Portrait de Lionel Sultan"
                    width={800}
                    height={800}
                    priority={false}
                    className="h-full w-full object-cover object-[center_35%]"
                  />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-2 text-sm font-semibold text-neutral-800">
                <p>Fondateur de Neatch</p>
                <p>Consultant IT &amp; produit expérimenté</p>
                <p>Sourcing de profils freelances qualifiés</p>
              </div>
              <div className="mt-8 space-y-3 border-t border-neutral-200 pt-6 text-sm">
                <a
                  href="mailto:contact@neatch.com"
                  className="block font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950"
                >
                  contact@neatch.com
                </a>
                <a
                  href="https://linkedin.com/in/lionelsultan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950"
                >
                  linkedin.com/in/lionelsultan
                  <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
                </a>
                <p className="text-neutral-600">neatch.com</p>
              </div>
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
    {
      company: "Christian Dior Couture",
      role: "Release Train Engineer | depuis 2021",
      detail:
        "Domaine Supply & Business Units, 12 équipes, Scrum Master / Coach Agile, Product Manager Merchandise Planning et projet Supply Chain Anaplan.",
    },
    {
      company: "CHANEL",
      role: "Project Manager confirmé | CRM IT Europe",
      detail:
        "Application mobile Salesforce Service Cloud pour plus de 400 utilisateurs en France et à l'international, conception, recette, déploiement et budget de plus de 700 k€.",
    },
    {
      company: "EDF Renouvelables",
      role: "Chef de Projet AMOA confirmé | DSIN Groupe",
      detail:
        "Salesforce Sales Cloud, K2, Xamarin, application mobile terrain, SAP Plant Maintenance / Cordova et chantiers applicatifs liés à l'acquisition de Futuren.",
    },
    {
      company: "Hoppen / Exolis",
      role: "Directeur de Projet, Product Manager, Scrum Master / Coach Agile",
      detail:
        "Solutions de télésuivi COVID pour les ARS Normandie et Corse, déploiement en moins de deux semaines, conduite du changement et roadmap produit Engage.",
    },
    {
      company: "EY Fabernovel",
      role: "Consultant confirmé",
      detail:
        "Product Owner pour le lancement e-commerce Unilever, audit technique de startups MNH et stratégie digitale / refonte SI pour Keep Cool.",
    },
    {
      company: "Accenture",
      role: "Consultant confirmé",
      detail:
        "Société Générale, SGCIB / APTP, BNP Paribas, Crédit Agricole Consumer Finance : crédit, post-trading, KYC, processus DSI, API / XML et KPI ITIL.",
    },
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
            <span>Rôle &amp; mission</span>
          </div>
          {references.map((reference) => (
            <div key={reference.company} className="grid gap-3 border-b border-neutral-100 px-4 py-5 last:border-b-0 md:grid-cols-[1fr_1.35fr]">
              <span className="font-semibold text-neutral-950">{reference.company}</span>
              <span className="text-neutral-700">
                <span className="block font-semibold text-neutral-950">{reference.role}</span>
                <span className="mt-1 block leading-7">{reference.detail}</span>
              </span>
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
        <Principles />
        <Audiences />
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
