import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from "./components/Navigation";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const iconPaths = {
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  spark: "M13 2 5 14h6l-1 8 8-12h-6l1-8Z",
  network: "M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3-15 6.5 10M8.7 17.2l6.6-10.4",
  map: "M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Zm0 0V3m6 18V6",
  building: "M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16m-8-12h4m-4 4h4m-4 4h4m-8 4h16m-4 0v-9h2a2 2 0 0 1 2 2v7",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m14-11a4 4 0 1 0-8 0m14 11v-2a4 4 0 0 0-3-3.87m-2-8.26a4 4 0 0 1 0 7.75",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3-12-2 5-5 2 2-5 5-2Z",
  layers: "m12 3 9 5-9 5-9-5 9-5Zm-7 9 7 4 7-4M5 16l7 4 7-4",
  radar: "M12 20a8 8 0 1 0-8-8m8 8v-8l5.7-5.7M8.5 12a3.5 3.5 0 0 0 3.5 3.5",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3.5-10 2.5 2.5L16 9",
  search: "m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z",
  check: "M20 6 9 17l-5-5",
  handshake: "M8 12h3l2 2a2 2 0 0 0 3 0l3-3M3 12l3-3 4 4m11-1-3-3-4 4M7 16l2 2a2 2 0 0 0 3 0l1-1",
  briefcase: "M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1m-9 0h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm-2 5h18",
  trophy: "M8 21h8m-4-4v4m6-17v5a6 6 0 0 1-12 0V4h12Zm0 2h3v2a3 3 0 0 1-3 3M6 6H3v2a3 3 0 0 0 3 3",
  chevron: "m6 9 6 6 6-6",
} as const;

type IconName = keyof typeof iconPaths;

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

function ExpertisePanel() {
  const missions = [
    ["Luxury", "Dior, Chanel"],
    ["Energy", "EDF Renouvelables"],
    ["Finance", "BNP Paribas, Société Générale"],
  ];

  return (
    <aside className="expertise-panel" aria-label="Synthèse de l’expertise Neatch">
      <div className="expertise-portrait">
        <Image
          src="/lionel-sultan.png"
          alt="Lionel Sultan, fondateur de Neatch"
          fill
          sizes="(min-width: 1024px) 430px, 100vw"
          className="object-cover"
        />
      </div>
      <Card className="expertise-card">
        <div>
          <p className="section-kicker">Intervention senior</p>
          <h2>Lionel Sultan</h2>
          <p>
            Cadrage, product management, gouvernance agile et sécurisation du
            delivery pour des environnements exigeants.
          </p>
        </div>
        <div className="expertise-list">
          {missions.map(([sector, clients]) => (
            <div key={sector}>
              <span>{sector}</span>
              <strong>{clients}</strong>
            </div>
          ))}
        </div>
      </Card>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero-paper pt-24 md:pt-28" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              Strategy, Product, GenAI, Project Management
            </p>
            <h1
              id="hero-title"
              className="max-w-5xl text-5xl font-black leading-[0.96] tracking-normal text-neutral-950 sm:text-7xl lg:text-8xl"
            >
              Sécuriser les missions digitales critiques.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 sm:text-xl">
              Lionel Sultan intervient comme freelance senior pour cadrer vite,
              orchestrer les décisions et garder les équipes produit, métier et IT
              alignées quand le contexte devient complexe.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#contact">
                Échanger sur votre contexte
                  <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#references">Voir les références</a>
              </Button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["15 ans", "terrain"],
                ["12", "équipes Dior"],
                ["26", "missions"],
              ].map(([value, label]) => (
                <Card key={label} className="hero-stat">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </Card>
              ))}
            </div>
          </div>
          <ExpertisePanel />
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const principles = [
    {
      icon: "target",
      tag: "Prestation personnelle",
      title: "Intervenir là où la mission doit avancer",
      description:
        "J’interviens directement sur les sujets exposés : transformation IT, Product Management, gouvernance agile, coordination multi-équipes et sécurisation du delivery.",
    },
    {
      icon: "spark",
      tag: "Exigence terrain",
      title: "Cadrer, arbitrer et remettre du rythme",
      description:
        "Ma valeur vient de la compréhension rapide du contexte, de la capacité à clarifier les priorités et de décisions concrètes avec les équipes.",
    },
    {
      icon: "network",
      tag: "Culture delivery",
      title: "Faire le lien entre stratégie et exécution",
      description:
        "J’aide à traduire les enjeux en trajectoire praticable, avec une attention constante aux dépendances, aux équipes et aux décisions qui bloquent.",
    },
  ];

  return (
    <section id="principes" className="site-section scroll-reveal bg-white" aria-labelledby="principes-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <p className="section-kicker">Principes fondateurs</p>
          <h2 id="principes-title">Une expertise personnelle, directement mobilisable.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((service) => (
            <Card key={service.title} className="motion-card min-h-[270px] border-border/80 bg-card/90 shadow-sm">
              <CardHeader>
                <div className="icon-badge">
                  <Icon name={service.icon as IconName} />
                </div>
                <Badge variant="secondary" className="mt-5 w-fit">{service.tag}</Badge>
                <CardTitle className="mt-4 text-2xl font-bold leading-tight text-neutral-950">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-neutral-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  const audiences = [
    {
      icon: "map",
      title: "Direction métier ou produit",
      description:
        "Vous devez clarifier une trajectoire, prioriser, structurer une roadmap ou remettre du lien entre besoin métier, produit et exécution.",
    },
    {
      icon: "building",
      title: "DSI ou direction de programme",
      description:
        "Vous avez besoin d’un interlocuteur capable de comprendre les contraintes IT, les dépendances applicatives et les arbitrages de delivery.",
    },
    {
      icon: "users",
      title: "Equipe projet ou transformation",
      description:
        "Vous voulez sécuriser une mission sensible, relancer une dynamique ou mettre de l’ordre dans un dispositif devenu trop flou.",
    },
  ];

  return (
    <section id="audiences" className="site-section scroll-reveal bg-stone-50" aria-labelledby="audiences-title">
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
            <Card key={audience.title} className="motion-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="icon-badge icon-badge-small">
                    <Icon name={audience.icon as IconName} />
                  </div>
                  <CardTitle className="text-2xl font-bold leading-tight text-neutral-950">
                    {audience.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-neutral-700">{audience.description}</p>
              </CardContent>
            </Card>
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
      icon: "compass",
      title: "Comprendre",
      description: "Clarifier le contexte, les enjeux, les irritants, les contraintes et les décisions à obtenir.",
      image: {
        src: "/field/workshop-campaign.jpg",
        alt: "Workshop convivial autour d’une table de travail",
      },
    },
    {
      number: "02",
      icon: "layers",
      title: "Structurer",
      description: "Transformer un contexte complexe en trajectoire lisible : priorités, gouvernance, rôles, dépendances et points de décision.",
    },
    {
      number: "03",
      icon: "radar",
      title: "Piloter",
      description: "Animer les échanges utiles, suivre les risques, faire circuler l’information et maintenir le rythme d’exécution.",
      image: {
        src: "/field/entretien-rodeo.jpg",
        alt: "Entretien professionnel dans une salle de réunion",
      },
    },
    {
      number: "04",
      icon: "shield",
      title: "Sécuriser",
      description: "Rendre les arbitrages visibles, stabiliser les livrables et aider les équipes à tenir une trajectoire crédible.",
    },
  ];

  const indicators = [
    ["15 ans", "d’expérience terrain"],
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
    <section id="methode" className="site-section scroll-reveal bg-stone-50" aria-labelledby="methode-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="section-heading mb-0">
            <p className="section-kicker">Méthode</p>
            <h2 id="methode-title">Le travail invisible qui sécurise l’intervention.</h2>
            <p>
              La valeur vient de la capacité à comprendre vite, structurer sans alourdir,
              faire parler les bons interlocuteurs et transformer les décisions en
              exécution concrète.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-2" aria-label="Illustrations de missions terrain">
              {fieldPhotos.map((photo) => (
                <Card key={photo.src} className="method-photo overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 120px, 30vw"
                      className="object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <Card className="p-4">
            <ol className="divide-y divide-neutral-200" aria-label="Étapes de notre approche">
              {steps.map((step) => (
                <li key={step.number} className="method-step grid gap-4 py-5 sm:grid-cols-[72px_1fr]">
                  <div className="font-mono text-sm font-bold text-neutral-400">{step.number}</div>
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="icon-badge icon-badge-small">
                          <Icon name={step.icon as IconName} />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-950">{step.title}</h3>
                      </div>
                      <p className="mt-1 text-neutral-700">{step.description}</p>
                    </div>
                    {step.image ? (
                      <Card className="method-thumb relative h-20 w-32 overflow-hidden bg-neutral-100">
                        <Image
                          src={step.image.src}
                          alt={step.image.alt}
                          fill
                          sizes="(min-width: 640px) 128px, 100vw"
                          className="object-cover"
                        />
                      </Card>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="Indicateurs clés">
          {indicators.map(([value, label]) => (
            <Card key={label} className="metric-tile motion-card p-5" role="listitem">
              <div className="text-3xl font-black text-neutral-950">{value}</div>
              <div className="mt-1 text-sm text-neutral-600">{label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultantIdentification() {
  const identificationPoints = [
    {
      icon: "search",
      title: "Repérer les bons profils",
      description:
        "Quand une mission nécessite un renfort, je peux chercher dans mon réseau, sur LinkedIn ou sur les plateformes spécialisées pour faire émerger des consultants adaptés au contexte.",
    },
    {
      icon: "check",
      title: "Qualifier avant de recommander",
      description:
        "Je challenge l’expérience, la posture, l’autonomie, la compréhension du besoin et la capacité réelle d’exécution avant toute mise en relation.",
    },
    {
      icon: "handshake",
      title: "Respecter les canaux existants",
      description:
        "Si le bon profil vient d’une plateforme ou d’un partenaire, le cadre reste lisible : chacun garde son rôle, avec une logique d’apport transparente.",
    },
  ];

  return (
    <section id="identification" className="site-section scroll-reveal bg-white" aria-labelledby="identification-title">
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
                mon client a besoin d’élargir le dispositif, je l’aide à identifier
                des consultants crédibles, disponibles et cohérents avec le moment de
                la mission.
              </p>
            </div>

            <div className="grid gap-3">
              {identificationPoints.map((point) => (
                <Card key={point.title} className="border-white/10 bg-white/[0.06] p-5 text-white">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="icon-badge-dark">
                      <Icon name={point.icon as IconName} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{point.title}</h3>
                  </div>
                  <p className="mt-2 leading-7 text-neutral-300">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="mt-8 bg-white/10" />
          <div className="mt-6 grid gap-3 text-sm text-neutral-300 md:grid-cols-3">
            <div>
              <span className="block font-bold text-white">Pour le client</span>
              moins de bruit, plus de profils réellement utiles.
            </div>
            <div>
              <span className="block font-bold text-white">Pour l’équipe</span>
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
  const referenceStats = [
    { value: "26", label: "assignments documentés" },
    { value: "6", label: "secteurs couverts" },
    { value: "12", label: "équipes coordonnées chez Dior" },
    { value: "Millions €", label: "de budgets pilotés" },
  ];

  const references = [
    {
      company: "Christian Dior Couture",
      industry: "Luxury fashion",
      period: "Depuis 2021",
      role: "Release Train Engineer, Scrum Master, Product Management, Agile coaching",
      context: "Domaine Supply & Business Units, avec un dispositif de 12 équipes produit et IT.",
      assignments: [
        "Release Train Engineer pour le domaine Supply & Business Units",
        "Scrum Master pour Pricing Management et Distribution Planning",
        "Product Management pour Merchandise Planning et Distribution Planning",
        "Coaching agile des équipes Merchandise Planning et SCM Distribution Planning",
      ],
      outcomes: [
        "Gouvernance de delivery structurée",
        "Risques, dépendances et arbitrages rendus visibles",
        "Trajectoire produit et supply mieux coordonnée",
      ],
    },
    {
      company: "CHANEL",
      industry: "Luxury fashion",
      period: "CRM IT Europe",
      role: "Project Manager confirmé",
      context: "Déploiement international d’une application mobile CRM pour les équipes en boutique.",
      assignments: [
        "Conception et rollout d’une application Salesforce Service Cloud",
        "Pilotage projet, recette, coordination IT et métiers",
        "Suivi budgétaire d’un programme de plus de 700 k€",
      ],
      outcomes: [
        "Plus de 400 utilisateurs adressés en France et à l’international",
        "Déploiement cadré avec les équipes terrain",
        "Delivery sécurisé sur un contexte retail exigeant",
      ],
    },
    {
      company: "EDF Renouvelables",
      industry: "Energy",
      period: "DSIN Groupe",
      role: "Chef de Projet AMOA confirmé",
      context: "Portefeuille d’applications métier pour les équipes terrain, maintenance et développement foncier.",
      assignments: [
        "Blueprint, design, build et rollout d’un produit pour les Land Development Project Managers",
        "Nouvelles fonctionnalités pour une application mobile de maintenance éolienne",
        "Formalisation des besoins métier, wireframing et cadrage applicatif",
        "Chantiers Salesforce Sales Cloud, K2, Xamarin, SAP Plant Maintenance / Cordova",
      ],
      outcomes: [
        "Besoins métier transformés en trajectoires produit lisibles",
        "Applications terrain mieux alignées avec les usages opérationnels",
        "Coordination renforcée entre métiers, IT et équipes de delivery",
      ],
    },
    {
      company: "Hoppen / Exolis",
      industry: "Healthcare",
      period: "Pandémie COVID-19",
      role: "Directeur de Projet, Product Manager, Scrum Master / Coach Agile",
      context: "Mise en place rapide de solutions de télésuivi dans un contexte sanitaire contraint.",
      assignments: [
        "Software product design et rollout pour le Contact Tracing COVID-19",
        "Coaching agile pour construire et déployer dans des délais courts",
        "Roadmap produit Engage et conduite du changement",
      ],
      outcomes: [
        "Déploiements réalisés en moins de deux semaines",
        "Solutions mises à disposition des ARS Normandie et Corse",
        "Rythme projet maintenu dans un contexte d’urgence",
      ],
    },
    {
      company: "EY Fabernovel",
      industry: "Retail, services, organisations internationales",
      period: "Consulting digital",
      role: "Consultant confirmé",
      context: "Missions de stratégie digitale, cadrage produit et design de nouveaux services.",
      assignments: [
        "Product Owner pour le lancement e-commerce T.O. by Lipton chez Unilever",
        "Design d’une stratégie digitale pour la DSI de Keep Cool",
        "Conception d’un produit logiciel pour l’organisation quotidienne des délégations de l’OECD",
        "Design d’un nouveau programme de fidélité pour La Maison Plisson",
      ],
      outcomes: [
        "Offres digitales cadrées depuis les besoins jusqu’aux parcours",
        "Roadmaps et arbitrages rendus exploitables par les équipes",
        "Passage de l’intention stratégique au produit livrable",
      ],
    },
    {
      company: "Société Générale Banque de Détail",
      industry: "Financial services",
      period: "Accenture | 2012",
      role: "Conception du logiciel d’octroi de crédit utilisé en agence bancaire",
      context: "Refonte d’un parcours d’octroi de crédit en agence, avec enjeux métier, ergonomie et coordination projet.",
      assignments: [
        "Analyse des enjeux business et rédaction des spécifications fonctionnelles",
        "Étude des scénarios métiers, cinématiques et parcours utilisateur",
        "Pilotage des ateliers métiers, UX et UI designers",
        "Management d’une équipe de 4 consultants pour le benchmark et les prototypes HTML",
      ],
      outcomes: [
        "Parcours utilisateur optimisé pour les équipes en agence",
        "Prototypes HTML produits pour sécuriser les choix fonctionnels",
        "Suivi projet, allocation des ressources et pilotage budgétaire structurés",
      ],
    },
    {
      company: "Société Générale CIB / APTP",
      industry: "Financial services",
      period: "Accenture | 2013-2015",
      role: "Construction d’une plateforme de back office post-trading",
      context: "Branchement d’une plateforme de back office sur les flux du front office et coordination avec des équipes techniques anglophones.",
      assignments: [
        "Recueil et analyse des besoins",
        "Rédaction des spécifications et revues avec l’Indian Delivery Center",
        "Conception du document de transcodage des messages entrants SGCIB vers le bus APTP",
        "Standardisation des messages XML en provenance du front office, norme ISO 20022",
      ],
      outcomes: [
        "Interfaces API et flux XML clarifiés pour les équipes techniques",
        "Cartographies d’architecture applicative et fonctionnelle produites",
        "Coordination renforcée entre métier, architecture et delivery offshore",
      ],
    },
    {
      company: "BNP Paribas BNL",
      industry: "Financial services",
      period: "Accenture | 2016",
      role: "Optimisation de l’espace physique au sein des agences bancaires",
      context: "Mission de stratégie et innovation autour de l’expérience agence et des initiatives retail comparables.",
      assignments: [
        "Étude approfondie des initiatives de la concurrence",
        "Benchmark des pratiques retail transposables au réseau bancaire",
        "Formalisation de recommandations stratégiques pour l’optimisation des espaces",
      ],
      outcomes: [
        "Quarante recommandations stratégiques élaborées",
        "Vision benchmark structurée pour orienter les arbitrages",
        "Pistes d’optimisation concrètes pour les agences du groupe",
      ],
    },
    {
      company: "Crédit Agricole Consumer Finance",
      industry: "Financial services",
      period: "Accenture | 2013",
      role: "Chef de projet Organisation / refonte des processus de la DSI",
      context: "Transformation des processus opérationnels de la DSI et mise en place d’indicateurs de pilotage.",
      assignments: [
        "Analyse et modélisation des processus opérationnels de la DSI",
        "Élaboration et mise en place de nouveaux KPI sur la base d’ITIL",
        "Suivi et coordination du chantier de transformation",
        "Cadrage d’un cahier des charges pour la mise à jour du logiciel de gestion des achats",
      ],
      outcomes: [
        "Processus DSI clarifiés et modélisés",
        "Indicateurs de pilotage mieux alignés avec les pratiques ITIL",
        "Chantier de transformation suivi avec une trajectoire lisible",
      ],
    },
    {
      company: "Crédit Agricole Consumer Finance",
      industry: "Financial services",
      period: "Accenture | 2011",
      role: "Responsable d’étude sur la gestion des partenariats",
      context: "Analyse des synergies possibles entre les partenariats Sofinco et Finaref.",
      assignments: [
        "Modélisation des processus AS-IS",
        "Identification des enjeux métiers stratégiques",
        "Étude comparative des écosystèmes applicatifs Sofinco et Finaref",
        "Analyse fonctionnelle approfondie des applicatifs existants",
      ],
      outcomes: [
        "Synergies potentielles identifiées entre deux périmètres applicatifs",
        "Lecture fonctionnelle consolidée de l’existant",
        "Base d’arbitrage produite pour les décisions d’organisation",
      ],
    },
    {
      company: "BNP Paribas BGL",
      industry: "Financial services",
      period: "Accenture | 2011",
      role: "Business Analyst pour une solution d’octroi de crédit aux personnes morales",
      context: "Cadrage fonctionnel, ergonomie et recette d’une solution bancaire d’octroi de crédit.",
      assignments: [
        "Analyse des enjeux business",
        "Rédaction d’une partie des spécifications fonctionnelles",
        "Étude des fonctionnalités, de l’ergonomie et des scénarios métiers",
        "Élaboration de la stratégie de tests et participation à la recette",
      ],
      outcomes: [
        "Spécifications et scénarios métiers formalisés",
        "Stratégie de recette structurée",
        "Qualité fonctionnelle sécurisée avant mise à disposition",
      ],
    },
    {
      company: "BNP Paribas Cash Management",
      industry: "Financial services",
      period: "Accenture | 2016",
      role: "Implémentation des processus de KYC et d’intégration des clients",
      context: "Optimisation des processus KYC et cadrage fonctionnel autour de l’implémentation de JIRA.",
      assignments: [
        "Revue intégrale des processus existants",
        "Optimisation des processus KYC et d’intégration client",
        "Rédaction des spécifications fonctionnelles pour l’implémentation de JIRA",
      ],
      outcomes: [
        "Processus KYC revus et rationalisés",
        "Besoins fonctionnels rendus exploitables pour l’outillage",
        "Coordination entre équipes métier, IT et delivery",
        "Socle de mise en œuvre clarifié pour JIRA",
      ],
    },
  ];

  return (
    <section id="references" className="site-section bg-white" aria-labelledby="references-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <p className="section-kicker">Références</p>
          <h2 id="references-title">Une base d’expériences structurée par contexte, rôle et impact.</h2>
          <p>
            Les références sont organisées comme une base de missions : secteur,
            rôle tenu, contexte d’intervention, assignments clés et résultats observables.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {referenceStats.map((stat) => (
            <Card key={stat.label} className="bg-muted/50 p-4">
              <div className="mb-4 text-cyan-700">
                <Icon name={stat.label.includes("budget") ? "briefcase" : "trophy"} />
              </div>
              <div className="text-3xl font-black leading-none text-neutral-950">{stat.value}</div>
              <div className="mt-2 text-sm font-semibold text-neutral-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        <Accordion type="single" collapsible className="mt-8 space-y-3">
          {references.map((reference) => (
            <AccordionItem
              key={`${reference.company}-${reference.period}`}
              value={`${reference.company}-${reference.period}`}
              className="reference-toggle motion-card rounded-lg border bg-card px-0 shadow-sm"
            >
              <AccordionTrigger className="reference-summary hover:no-underline [&>svg]:hidden">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="icon-badge icon-badge-small">
                    <Icon name="briefcase" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-black leading-tight text-neutral-950 sm:text-2xl">
                      {reference.company}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-semibold text-neutral-600">
                      <span>{reference.industry}</span>
                      <span className="text-neutral-300" aria-hidden="true">/</span>
                      <span>{reference.role}</span>
                    </div>
                  </div>
                </div>
                <div className="reference-control flex shrink-0 items-center gap-2">
                  <Badge variant="outline" className="hidden bg-background text-neutral-600 sm:inline-flex">
                    {reference.period}
                  </Badge>
                  <span className="reference-toggle-pill">
                    <span className="reference-action">Voir le détail</span>
                    <span className="reference-chevron" aria-hidden="true">
                      <Icon name="chevron" className="h-4 w-4" />
                    </span>
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="reference-panel text-base">
                <Card className="mt-5 bg-muted/50 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-neutral-500">Rôle</p>
                    <Badge variant="outline" className="w-fit bg-background text-neutral-600 sm:hidden">
                      {reference.period}
                    </Badge>
                  </div>
                  <p className="mt-2 font-bold leading-6 text-neutral-950">{reference.role}</p>
                  <p className="mt-3 leading-7 text-neutral-700">{reference.context}</p>
                </Card>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wide text-neutral-500">
                      Assignments clés
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-700">
                      {reference.assignments.map((assignment) => (
                        <li key={assignment} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                          <span>{assignment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wide text-neutral-500">
                      Résultats / impact
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-700">
                      {reference.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
