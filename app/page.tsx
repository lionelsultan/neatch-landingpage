import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Handshake,
  Layers3,
  Map,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Building2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from "./components/Navigation";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const principles = [
  {
    icon: Target,
    tag: "Prestation personnelle",
    title: "Intervenir là où la mission doit avancer",
    description:
      "J’interviens directement sur les sujets exposés : transformation IT, Product Management, gouvernance agile, coordination multi-équipes et sécurisation du delivery.",
  },
  {
    icon: Sparkles,
    tag: "Exigence terrain",
    title: "Cadrer, arbitrer et remettre du rythme",
    description:
      "Ma valeur vient de la compréhension rapide du contexte, de la capacité à clarifier les priorités et de décisions concrètes avec les équipes.",
  },
  {
    icon: Users,
    tag: "Culture delivery",
    title: "Faire le lien entre stratégie et exécution",
    description:
      "J’aide à traduire les enjeux en trajectoire praticable, avec une attention constante aux dépendances, aux équipes et aux décisions qui bloquent.",
  },
];

const audiences = [
  {
    icon: Map,
    title: "Direction métier ou produit",
    description:
      "Vous devez clarifier une trajectoire, prioriser, structurer une roadmap ou remettre du lien entre besoin métier, produit et exécution.",
  },
  {
    icon: Building2,
    title: "DSI ou direction de programme",
    description:
      "Vous avez besoin d’un interlocuteur capable de comprendre les contraintes IT, les dépendances applicatives et les arbitrages de delivery.",
  },
  {
    icon: Users,
    title: "Equipe projet ou transformation",
    description:
      "Vous voulez sécuriser une mission sensible, relancer une dynamique ou mettre de l’ordre dans un dispositif devenu trop flou.",
  },
];

const methodSteps = [
  {
    number: "01",
    icon: Compass,
    title: "Comprendre",
    description:
      "Clarifier le contexte, les enjeux, les irritants, les contraintes et les décisions à obtenir.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Structurer",
    description:
      "Transformer un contexte complexe en trajectoire lisible : priorités, gouvernance, rôles, dépendances et points de décision.",
  },
  {
    number: "03",
    icon: Radar,
    title: "Piloter",
    description:
      "Animer les échanges utiles, suivre les risques, faire circuler l’information et maintenir le rythme d’exécution.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Sécuriser",
    description:
      "Rendre les arbitrages visibles, stabiliser les livrables et aider les équipes à tenir une trajectoire crédible.",
  },
];

const fieldPhotos = [
  {
    src: "/field/workshop-campaign.jpg",
    alt: "Workshop convivial autour d’une table de travail",
  },
];

const indicators = [
  ["15 ans", "d’expérience terrain"],
  ["8+ ans", "à la tête de Neatch"],
  ["Produit", "roadmap, cadrage, priorisation"],
  ["Delivery", "pilotage, gouvernance, arbitrages"],
];

const identificationPoints = [
  {
    icon: Search,
    title: "Repérer les bons profils",
    description:
      "Quand une mission nécessite un renfort, je peux chercher dans mon réseau, sur LinkedIn ou sur les plateformes spécialisées pour faire émerger des consultants adaptés au contexte.",
  },
  {
    icon: CheckCircle2,
    title: "Qualifier avant de recommander",
    description:
      "Je challenge l’expérience, la posture, l’autonomie, la compréhension du besoin et la capacité réelle d’exécution avant toute mise en relation.",
  },
  {
    icon: Handshake,
    title: "Respecter les canaux existants",
    description:
      "Si le bon profil vient d’une plateforme ou d’un partenaire, le cadre reste lisible : chacun garde son rôle, avec une logique d’apport transparente.",
  },
];

const referenceStats = [
  { value: "14", label: "références client" },
  { value: "6", label: "secteurs couverts" },
  { value: "12", label: "équipes coordonnées chez Dior" },
  { value: "2,3 M€+", label: "de budgets pilotés" },
];

const references = [
  {
    company: "Christian Dior Couture",
    industry: "Retail / Luxury",
    period: "2021-Aujourd’hui",
    role: "Release Train Engineer au sein de la DSI",
    context:
      "Mission en cours sur le domaine Supply & Business Units, avec un dispositif de 12 équipes produit et IT.",
    assignments: [
      "Release Train Engineer pour l’ensemble du domaine Supply & Business Units",
      "Mise en place d’agents autonomes GitHub Copilot pour aider au pilotage du delivery",
      "Scrum Master de plusieurs équipes et coaching agile",
      "Product Management pour les équipes Merchandise Planning",
      "Gestion de projet supply chain sur Anaplan, de la conception au déploiement",
    ],
    outcomes: [
      "Coordination d’un dispositif de 12 équipes",
      "Pilotage d’environ 1126 jours-homme sur un an",
      "Budget géré de plus d’1 M€",
      "Rôle reconnu par le client comme essentiel à la bonne conduite du projet",
    ],
  },
  {
    company: "CHANEL",
    industry: "Retail / Luxury",
    period: "2020",
    role: "Senior Project Manager au sein de la direction CRM IT Europe",
    context:
      "Mission de 7 mois sur un projet CRM mobile destiné aux équipes en boutique.",
    assignments: [
      "Gestion de projet CRM",
      "Accompagnement à la conception, à la recette et au déploiement",
      "Déploiement d’une application mobile basée sur Salesforce Service Cloud",
      "Coordination dans un contexte retail international et de pandémie mondiale",
    ],
    outcomes: [
      "Plus de 400 utilisateurs adressés en France et à l’international",
      "Renforcement du lien entre vendeurs en boutique et clientèle",
      "Budget projet de plus de 700 k€",
    ],
  },
  {
    company: "EXOLIS",
    industry: "Healthcare",
    period: "2020",
    role: "Directeur de Projet, Product Manager, Scrum Master / Coach Agile",
    context:
      "Mission de 6 mois pour concevoir et déployer des solutions de télésuivi dans un contexte sanitaire contraint.",
    assignments: [
      "Conception et déploiement d’une solution de télésuivi basée sur Apache Cordova",
      "Suivi administratif et social des cas contacts et patients COVID pour les ARS Normandie et Corse",
      "Conception, paramétrage et déploiement d’une solution de télésuivi médical pour le Centre François Baclesse de Caen",
      "Product Management sur la feuille de route du produit Engage",
      "Coaching agile dans le cadre de la mise en place de Scrum",
    ],
    outcomes: [
      "Application adaptée et déployée en moins de deux semaines",
      "Conduite du changement menée auprès des ARS",
      "Rôle de coach agile indiqué par le client comme déterminant pendant la surcharge de développement",
    ],
  },
  {
    company: "EDF Renouvelables",
    industry: "Energy",
    period: "2017-2020",
    role: "Chef de Projet AMOA Senior au sein de la DSIN Groupe",
    context:
      "Mission de 2,5 ans sur un portefeuille de projets métier, terrain, maintenance et contrôle interne.",
    assignments: [
      "Cadrage, conception et déploiement d’un projet Salesforce Sales Cloud d’envergure nationale",
      "Conception et déploiement d’une solution K2 on-premise pour l’auto-évaluation de contrôle interne",
      "Conception et déploiement de Smart Access sur Xamarin pour l’accès aux sites de maintenance",
      "Product Owner d’une application mobile d’inspection terrain",
      "Évolutions fonctionnelles et techniques d’une application de maintenance basée sur SAP Plant Maintenance et Cordova",
      "Pilotage de chantiers applicatifs, infrastructures, systèmes et réseau lors de l’acquisition de Futuren",
    ],
    outcomes: [
      "170 utilisateurs finaux accompagnés sur le projet Salesforce Sales Cloud",
      "Budget projet de plus de 600 k€ hors licences",
      "Réduction de plus de 80 % de la durée d’attente avant intervention sur site grâce à Smart Access",
      "140 techniciens de maintenance concernés en France",
      "190 techniciens de maintenance adressés sur le périmètre international",
    ],
  },
  {
    company: "UNILEVER",
    industry: "Consumer goods",
    period: "04/2016-06/2017",
    role: "Product Owner pour le lancement du premier site e-commerce d’Unilever",
    context:
      "Mission réalisée chez Fabernovel Innovate, dans un contexte international Grande-Bretagne, Bulgarie et France.",
    assignments: [
      "Gestion d’un projet e-commerce international",
      "Coordination quotidienne des prestataires intégration, design et CRM",
      "Rédaction des spécifications fonctionnelles générales et détaillées",
      "Tests fonctionnels et support technique quotidien",
      "Product management et optimisation du site existant",
    ],
    outcomes: [
      "Lancement e-commerce structuré avec les équipes métier et techniques",
      "Résolution de problématiques techniques liées à l’administration du site et à la supply chain",
      "Nouvelles fonctionnalités cadrées avec les équipes métier",
    ],
  },
  {
    company: "MNH",
    industry: "Healthcare / services",
    period: "04/2016-06/2017",
    role: "Chef de Projet dans le cadre d’un audit de startups",
    context:
      "Mission réalisée chez Fabernovel Innovate après le rachat de plusieurs startups par la MNH.",
    assignments: [
      "Pré-audit technique de trois startups",
      "Analyse des processus liés au PRA, à la cybersécurité et à la pérennité des solutions",
      "Étude d’interopérabilité des systèmes d’information des sociétés acquises",
      "Recommandation de solutions techniques pour favoriser l’interopérabilité",
    ],
    outcomes: [
      "Lecture technique consolidée des startups auditées",
      "Recommandations structurées pour préparer la création de nouvelles offres",
      "Risques SI et cybersécurité rendus plus lisibles",
    ],
  },
  {
    company: "KEEP COOL",
    industry: "Fitness / services",
    period: "04/2016-06/2017",
    role: "Définition d’une stratégie digitale pour l’optimisation du SI",
    context:
      "Mission réalisée chez Fabernovel Innovate sur l’audit du système d’information et des processus DSI.",
    assignments: [
      "Benchmark de solutions SI du marché sur la brique facturation",
      "Audit du SI et des processus DSI",
      "Formalisation de l’offre de refonte de la DSI",
      "Réalisation de budgets, planning et choix d’un prestataire technique",
    ],
    outcomes: [
      "Lancement d’une refonte du SI cadré à partir de l’audit",
      "Recommandations formulées sur les solutions SI du marché",
      "Trajectoire de refonte structurée avec budget, planning et prestataire",
    ],
  },
  {
    company: "BNP Paribas BNL",
    industry: "Financial services",
    period: "2016",
    role: "Optimisation de l’espace physique au sein des agences bancaires",
    context:
      "Mission de stratégie et innovation autour de l’expérience agence et des initiatives retail comparables.",
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
    company: "BNP Paribas Cash Management",
    industry: "Financial services",
    period: "2016",
    role: "Implémentation des processus de KYC et d’intégration des clients",
    context:
      "Optimisation des processus KYC et cadrage fonctionnel autour de l’implémentation de JIRA.",
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
  {
    company: "Société Générale CIB / APTP",
    industry: "Financial services",
    period: "2013-2015",
    role: "Construction d’une plateforme de back office post-trading",
    context:
      "Branchement d’une plateforme de back office sur les flux du front office et coordination avec des équipes techniques anglophones.",
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
    company: "Crédit Agricole Consumer Finance",
    industry: "Financial services",
    period: "2013",
    role: "Chef de projet Organisation / refonte des processus de la DSI",
    context:
      "Transformation des processus opérationnels de la DSI et mise en place d’indicateurs de pilotage.",
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
    company: "Société Générale Banque de Détail",
    industry: "Financial services",
    period: "2012",
    role: "Conception du logiciel d’octroi de crédit utilisé en agence bancaire",
    context:
      "Refonte d’un parcours d’octroi de crédit en agence, avec enjeux métier, ergonomie et coordination projet.",
    assignments: [
      "Analyse des enjeux business et rédaction des spécifications fonctionnelles",
      "Étude des scénarios métiers, cinématiques et parcours utilisateur",
      "Pilotage des ateliers métiers, UX et UI designers",
      "Management d’une équipe de 4 consultants pour le benchmark et les prototypes HTML",
    ],
    outcomes: [
      "Parcours utilisateur optimisé pour les équipes en agence",
      "Prototypes HTML produits pour sécuriser les choix fonctionnels",
      "Suivi budgétaire, allocation des ressources et pilotage projet structurés",
    ],
  },
  {
    company: "Crédit Agricole Consumer Finance",
    industry: "Financial services",
    period: "2011",
    role: "Responsable d’étude sur la gestion des partenariats",
    context:
      "Analyse des synergies possibles entre les partenariats Sofinco et Finaref.",
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
    period: "2011",
    role: "Business Analyst pour une solution d’octroi de crédit aux personnes morales",
    context:
      "Cadrage fonctionnel, ergonomie et recette d’une solution bancaire d’octroi de crédit.",
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
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <Badge variant="secondary">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-bold tracking-normal text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-background pt-24 md:pt-28" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_440px]">
          <div>
            <Badge variant="secondary">Strategy, Product, GenAI, Project Management</Badge>
            <h1
              id="hero-title"
              className="mt-5 max-w-5xl text-5xl font-bold tracking-normal text-foreground md:text-7xl"
            >
              Sécuriser les missions digitales critiques.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
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
                <Card key={label}>
                  <CardHeader>
                    <CardTitle>{value}</CardTitle>
                    <CardDescription>{label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src="/lionel-sultan.png"
                  alt="Lionel Sultan, fondateur de Neatch"
                  fill
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <Badge variant="outline" className="w-fit">
                Intervention senior
              </Badge>
              <CardTitle>Lionel Sultan</CardTitle>
              <CardDescription>
                Cadrage, product management, gouvernance agile et sécurisation du
                delivery pour des environnements exigeants.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {[
                ["Luxury", "Dior, Chanel"],
                ["Energy", "EDF Renouvelables"],
                ["Finance", "BNP Paribas, Société Générale"],
              ].map(([sector, clients]) => (
                <Card key={sector}>
                  <CardHeader>
                    <CardDescription>{sector}</CardDescription>
                    <CardTitle className="text-base">{clients}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section id="principes" className="bg-background py-20 md:py-28" aria-labelledby="principes-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Principes fondateurs"
          title="Une expertise personnelle, directement mobilisable."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title}>
                <CardHeader>
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="secondary" className="w-fit">
                    {service.tag}
                  </Badge>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section id="audiences" className="bg-muted/40 py-20 md:py-28" aria-labelledby="audiences-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pour qui"
          title="Trois contextes, une même exigence terrain."
          description="Neatch intervient quand une mission demande une lecture terrain, une capacité de structuration et une présence capable de faire avancer les décisions avec les équipes."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <Card key={audience.title}>
                <CardHeader>
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>{audience.title}</CardTitle>
                  <CardDescription>{audience.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="methode" className="bg-background py-20 md:py-28" aria-labelledby="methode-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Méthode"
              title="Le travail invisible qui sécurise l’intervention."
              description="La valeur vient de la capacité à comprendre vite, structurer sans alourdir, faire parler les bons interlocuteurs et transformer les décisions en exécution concrète."
            />
            <div className="grid gap-2" aria-label="Illustration de mission terrain">
              {fieldPhotos.map((photo) => (
                <Card key={photo.src}>
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <ol className="grid gap-4" aria-label="Étapes de notre approche">
                {methodSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <li key={step.number}>
                      <Card>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline">{step.number}</Badge>
                            <Icon className="h-5 w-5 text-muted-foreground" />
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                          </div>
                          <CardDescription>{step.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </li>
                  );
                })}
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="Indicateurs clés">
          {indicators.map(([value, label]) => (
            <Card key={label} role="listitem">
              <CardHeader>
                <CardTitle>{value}</CardTitle>
                <CardDescription>{label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultantIdentification() {
  return (
    <section id="identification" className="bg-muted/40 py-20 md:py-28" aria-labelledby="identification-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <Badge variant="secondary" className="w-fit">
              Activité complémentaire
            </Badge>
            <CardTitle id="identification-title" className="text-3xl md:text-5xl">
              Identifier les bons consultants quand il faut renforcer une équipe.
            </CardTitle>
            <CardDescription className="max-w-3xl text-lg leading-8">
              Cette activité vient en complément de mon expertise personnelle. Quand
              mon client a besoin d’élargir le dispositif, je l’aide à identifier
              des consultants crédibles, disponibles et cohérents avec le moment de
              la mission.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 lg:grid-cols-3">
              {identificationPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <Card key={point.title}>
                    <CardHeader>
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <CardTitle className="text-xl">{point.title}</CardTitle>
                      <CardDescription>{point.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
            <Separator className="my-6" />
            <div className="grid gap-3 md:grid-cols-3">
              {[
                ["Pour le client", "moins de bruit, plus de profils réellement utiles."],
                ["Pour l’équipe", "un renfort positionné au bon moment et au bon endroit."],
                ["Pour le consultant", "une mission mieux cadrée, portée par une recommandation terrain."],
              ].map(([title, description]) => (
                <Card key={title}>
                  <CardHeader>
                    <CardTitle className="text-base">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function References() {
  return (
    <section id="references" className="bg-background py-20 md:py-28" aria-labelledby="references-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Références"
          title="Mon expérience"
          description="Les références sont organisées comme une base de missions : secteur, rôle tenu, contexte d’intervention, assignments clés et résultats observables."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {referenceStats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader>
                {stat.label.includes("budget") ? (
                  <BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Trophy className="h-5 w-5 text-muted-foreground" />
                )}
                <CardTitle>{stat.value}</CardTitle>
                <CardDescription>{stat.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Accordion type="single" collapsible className="mt-8 grid gap-3">
          {references.map((reference) => (
            <Card key={`${reference.company}-${reference.period}`}>
              <AccordionItem value={`${reference.company}-${reference.period}`} className="border-b-0">
                <AccordionTrigger className="justify-start gap-4 px-6 text-left hover:no-underline">
                  <div className="grid min-w-0 flex-1 gap-2">
                    <div className="flex items-center gap-3">
                      <BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />
                      <span className="text-xl font-semibold text-foreground">
                        {reference.company}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {reference.industry} · {reference.role}
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="ml-auto hidden min-w-32 shrink-0 justify-center whitespace-nowrap sm:inline-flex"
                  >
                    {reference.period}
                  </Badge>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <Card>
                    <CardHeader>
                      <Badge variant="outline" className="w-fit sm:hidden">
                        {reference.period}
                      </Badge>
                      <CardTitle className="text-xl">{reference.role}</CardTitle>
                      <CardDescription>{reference.context}</CardDescription>
                    </CardHeader>
                  </Card>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Assignments clés</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-2 text-sm text-muted-foreground">
                          {reference.assignments.map((assignment) => (
                            <li key={assignment}>{assignment}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Résultats / impact</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-2 text-sm text-muted-foreground">
                          {reference.outcomes.map((outcome) => (
                            <li key={outcome}>{outcome}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Card>
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
