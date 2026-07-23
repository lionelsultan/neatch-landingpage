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
    { label: "Cadrage", value: "Enjeux clarifiés", tone: "bg-blue-100 text-blue-900" },
    { label: "Pilotage", value: "Risques suivis", tone: "bg-amber-100 text-amber-900" },
    { label: "Delivery", value: "Trajectoire tenue", tone: "bg-emerald-100 text-emerald-900" },
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
              Intervention terrain
            </p>
            <h3 className="mt-1 text-xl font-bold text-neutral-950">
              Pilotage d&apos;une mission Discovery &amp; Delivery
            </h3>
          </div>
          <div className="rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700">
            Cadrage, arbitrages, exécution
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
            <h3 className="font-semibold text-neutral-950">Points de vigilance</h3>
            <span className="text-xs text-neutral-500">Suivi de mission</span>
          </div>
          <div className="space-y-3">
            {[
              ["Objectifs, contraintes et dépendances", "Cadré", "bg-emerald-100 text-emerald-900"],
              ["Coordination métier, produit et IT", "En cours", "bg-blue-100 text-blue-900"],
              ["Décisions, risques et trajectoire", "Suivi", "bg-amber-100 text-amber-900"],
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
              Strategy, Product, GenAI, Project management
            </p>
            <h1
              id="hero-title"
              className="max-w-4xl text-4xl font-black leading-[0.98] tracking-normal text-neutral-950 sm:text-6xl lg:text-7xl"
            >
              Votre projet, sécurisé de bout en bout.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 sm:text-xl">
              J&apos;accompagne, en tant que freelance, les organisations sur la gestion de
              leurs projets digitaux, quand il faut cadrer vite, remettre de la clarté,
              piloter l&apos;exécution et faire avancer les équipes dans des contextes complexes.
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
                  Strategy, Product, GenAI, Project management
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
      tag: "Culture delivery",
      title: "Faire le lien entre stratégie et exécution",
      description:
        "J'aide à traduire les enjeux en trajectoire praticable, avec une attention constante aux dépendances, aux équipes et aux décisions qui bloquent.",
    },
  ];

  return (
    <section id="principes" className="notion-section scroll-reveal bg-white" aria-labelledby="principes-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <p className="section-kicker">Principes fondateurs</p>
          <h2 id="principes-title">Une expertise personnelle, directement mobilisable.</h2>
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
      title: "Direction métier ou produit",
      description:
        "Vous devez clarifier une trajectoire, prioriser, structurer une roadmap ou remettre du lien entre besoin métier, produit et exécution.",
    },
    {
      title: "DSI ou direction de programme",
      description:
        "Vous avez besoin d'un interlocuteur capable de comprendre les contraintes IT, les dépendances applicatives et les arbitrages de delivery.",
    },
    {
      title: "Equipe projet ou transformation",
      description:
        "Vous voulez sécuriser une mission sensible, relancer une dynamique ou mettre de l'ordre dans un dispositif devenu trop flou.",
    },
  ];

  return (
    <section id="audiences" className="notion-section scroll-reveal bg-stone-50" aria-labelledby="audiences-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <p className="section-kicker">Pour qui</p>
          <h2 id="audiences-title">Trois contextes, une même exigence terrain.</h2>
          <p>
            Neatch intervient quand une mission demande une lecture terrain, une
            capacité de structuration et une présence capable de faire avancer les
            décisions avec les équipes.
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
      description: "Clarifier le contexte, les enjeux, les irritants, les contraintes et les décisions à obtenir.",
      image: {
        src: "/field/workshop-campaign.jpg",
        alt: "Workshop convivial autour d'une table de travail",
      },
    },
    {
      number: "02",
      title: "Structurer",
      description: "Transformer un contexte complexe en trajectoire lisible : priorités, gouvernance, rôles, dépendances et points de décision.",
    },
    {
      number: "03",
      title: "Piloter",
      description: "Animer les échanges utiles, suivre les risques, faire circuler l'information et maintenir le rythme d'exécution.",
      image: {
        src: "/field/entretien-rodeo.jpg",
        alt: "Entretien professionnel dans une salle de réunion",
      },
    },
    {
      number: "04",
      title: "Sécuriser",
      description: "Rendre les arbitrages visibles, stabiliser les livrables et aider les équipes à tenir une trajectoire crédible.",
    },
  ];

  const indicators = [
    ["15 ans", "d'expérience terrain"],
    ["8+ ans", "à la tête de Neatch"],
    ["Produit", "roadmap, cadrage, priorisation"],
    ["Delivery", "pilotage, gouvernance, arbitrages"],
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
              La valeur vient de la capacité à comprendre vite, structurer sans alourdir,
              faire parler les bons interlocuteurs et transformer les décisions en
              exécution concrète.
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

function ConsultantIdentification() {
  const identificationPoints = [
    {
      title: "Repérer les bons profils",
      description:
        "Quand une mission nécessite un renfort, je peux chercher dans mon réseau, sur LinkedIn ou sur les plateformes spécialisées pour faire émerger des consultants adaptés au contexte.",
    },
    {
      title: "Qualifier avant de recommander",
      description:
        "Je challenge l'expérience, la posture, l'autonomie, la compréhension du besoin et la capacité réelle d'exécution avant toute mise en relation.",
    },
    {
      title: "Respecter les canaux existants",
      description:
        "Si le bon profil vient d'une plateforme ou d'un partenaire, le cadre reste lisible : chacun garde son rôle, avec une logique d'apport transparente.",
    },
  ];

  return (
    <section id="identification" className="notion-section scroll-reveal bg-white" aria-labelledby="identification-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="dark-panel rounded-2xl border border-neutral-200 bg-neutral-950 p-6 text-white shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-neutral-400">
                Activité complémentaire
              </p>
              <h2 id="identification-title" className="text-4xl font-black leading-tight md:text-5xl">
                Identifier les bons consultants quand il faut renforcer une équipe.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                Cette activité vient en complément de mon expertise personnelle. Quand
                mon client a besoin d&apos;élargir le dispositif, je l&apos;aide à identifier
                des consultants crédibles, disponibles et cohérents avec le moment de
                la mission.
              </p>
            </div>

            <div className="grid gap-3">
              {identificationPoints.map((point) => (
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
              moins de bruit, plus de profils réellement utiles.
            </div>
            <div>
              <span className="block font-bold text-white">Pour l&apos;équipe</span>
              un renfort positionné au bon moment et au bon endroit.
            </div>
            <div>
              <span className="block font-bold text-white">Pour le consultant</span>
              une mission mieux cadrée, portée par une recommandation terrain.
            </div>
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
        <References />
        <ConsultantIdentification />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
