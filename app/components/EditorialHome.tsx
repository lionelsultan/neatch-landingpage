"use client";

import Image from "next/image";
import { useState } from "react";
import { references } from "../data/references";

function ReferenceList() {
  return <details className="reference-library"><summary>Voir toutes les références</summary><div className="reference-library-list">{references.map(reference => <details className="reference-entry" key={`${reference.company}-${reference.period}`}><summary><strong>{reference.company}</strong><span>{reference.period}</span></summary><h3>{reference.role}</h3><p>{reference.context}</p><div className="reference-columns"><div><h4>Travaux clés</h4><ul>{reference.assignments.map(item => <li key={item}>{item}</li>)}</ul></div><div><h4>Résultats / impact</h4><ul>{reference.outcomes.map(item => <li key={item}>{item}</li>)}</ul></div></div></details>)}</div></details>;
}

const faqs = [
    {
      question: "Neatch est-elle une agence ou un cabinet de conseil ?",
      answer:
        "Neatch est d’abord ma structure d’intervention personnelle. Le client échange avec la personne qui cadre, pilote et sécurise la mission. L’identification de consultants existe aussi, mais comme activité complémentaire quand une équipe doit être renforcée.",
    },
    {
      question: "Sur quels sujets pouvez-vous intervenir directement ?",
      answer:
        "J’interviens sur des enjeux de transformation IT, gouvernance agile, Product Management, coordination multi-équipes et sécurisation du delivery. La mission peut porter sur le cadrage, l’orchestration, les arbitrages ou la remise en maîtrise d’une trajectoire.",
    },
    {
      question: "Pouvez-vous aussi aider à identifier un consultant ?",
      answer:
        "Oui, lorsque le besoin consiste à renforcer une équipe cliente. La valeur vient du travail de recherche et de qualification en amont : LinkedIn, plateformes freelance, réseau personnel, premiers échanges, entretiens de qualification et lecture terrain du profil. Le client ne reçoit pas une pile de CV, mais une sélection courte de consultants déjà filtrés.",
    },
    {
      question: "Comment travaillez-vous avec des plateformes comme Malt ou Freelance Republik ?",
      answer:
        "Je les considère comme des partenaires. Si le bon freelance est chez eux, mon rôle est de le repérer, de vérifier son adéquation avec la mission et de faciliter sa montée vers le client. Je prends une commission d’apport d’affaires pour le travail de sourcing et de qualification, sans court-circuiter l’écosystème qui porte le freelance.",
    },
    {
      question: "Quels profils pouvez-vous identifier ?",
      answer:
        "Principalement des chefs de projet, Product Owners, Product Managers, profils PMO, delivery managers ou consultants transformation. L’objectif est de trouver une personne adaptée au contexte, pas seulement un intitulé de poste.",
    },
    {
      question: "Comment qualifiez-vous les consultants ?",
      answer:
        "Je regarde l’expérience réelle, la capacité à comprendre le contexte, la posture avec les équipes, le niveau d’autonomie, la clarté de communication et les situations déjà vécues. Mon expérience de mission me permet de challenger les réponses au-delà du CV.",
    },
    {
      question: "Comment démarre une collaboration ?",
      answer:
        "Elle démarre par un échange de cadrage pour comprendre le contexte, le niveau d’urgence, les livrables attendus, les contraintes et les points de décision. Ensuite, je propose un mode d’intervention clair. Si le sujet demande de renforcer l’équipe, j’ajoute une démarche d’identification ciblée.",
    },
    {
      question: "Pourquoi passer par vous pour identifier un consultant ?",
      answer:
        "Parce que la recherche prend du temps et que le mauvais casting coûte cher. Je fais le travail de repérage, de tri et d’entretiens, puis je recommande uniquement des profils que je considère capables de tenir la mission.",
    },
  ];

function FAQSection() {
  return <section id="faq" className="wrap faq-section"><details><summary>Questions fréquentes</summary><div className="faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></details></section>;
}

export default function EditorialHome() {
  const [light, setLight] = useState(true);
  return <div className={`editorial-site${light ? " light" : ""}`}>


  <header><nav className="wrap" aria-label="Navigation principale"><a href="#main-content" aria-label="Neatch, accueil"><Image className="logo" src="/neatch-logo-wordmark.png" alt="Neatch" width="119" height="31" /></a><div className="nav-links"><a href="#expertise">Expertise</a><a href="#references">Missions</a><a href="#methode">Approche</a></div><div className="nav-end"><button className="theme" type="button" onClick={() => setLight(!light)} aria-pressed={light} aria-label={light ? "Activer le thème sombre" : "Activer le thème clair"}>◐</button><a className="nav-cta" href="#contact">Parlons de votre projet <span className="arrow">↗</span></a></div></nav></header>
  <main id="main-content">
    <section className="hero" aria-labelledby="hero-title"><div className="wrap"><div className="hero-inner"><div><div className="eyebrow mono"><span className="dot"></span>Conseil indépendant · IT, Product &amp; Delivery</div><h1 id="hero-title">Transformer<br />les décisions<br /><span>en résultats.</span></h1><p className="intro">Quand les enjeux s’accélèrent, la trajectoire doit rester claire. Je vous aide à cadrer, aligner et faire avancer vos missions digitales critiques.</p><div className="actions"><a className="primary" href="#contact">Échanger sur votre contexte <span>↗</span></a><a className="text-link" href="#references">Explorer les missions ↓</a></div><div className="person"><Image src="/lionel-sultan.png" alt="Portrait de Lionel Sultan" width="43" height="43" /><div><strong>Lionel Sultan — Fondateur de Neatch</strong><small>15 ans d’expérience, au plus près des équipes.</small></div></div></div><div className="studio-portrait"><div className="portrait-top"><span>INDÉPENDANT PAR CONVICTION</span><span>↗</span></div><div className="portrait-frame"><Image src="/lionel-sultan.png" alt="Lionel Sultan, fondateur de Neatch" width={800} height={800} priority /></div><div className="portrait-caption"><span>Votre interlocuteur.<br />Du cap au terrain.</span><span>15 ans<br />d’expérience</span></div><div className="portrait-name">Lionel<span>Sultan.</span></div></div></div><div className="hero-bottom"><div className="hero-signature"><p>Clarté dans les décisions. Impact sur le terrain.</p><div className="hero-disciplines" aria-label="Domaines d’intervention"><span>Stratégie</span><span>Produit</span><span>GenAI</span><span>Delivery</span></div></div></div></div></section>
    <section id="clients" className="clients" aria-label="Sélection de références client"><div className="wrap clients-inner"><h2 className="clients-heading">Des environnements qui exigent le meilleur</h2><ul className="clients-grid" role="list"><li className="client dior">Dior</li><li className="client chanel">CHANEL</li><li className="client edf">EDF<span>Renouvelables</span></li><li className="client bnp">BNP PARIBAS</li></ul></div></section>
    <span id="principes" /><section className="section wrap" id="expertise"><div className="section-head"><div><span className="mono muted">01 / Expertise</span><h2>Une vision d’ensemble.<br />Une implication concrète.</h2></div><p>Un interlocuteur senior pour relier les enjeux métier, les équipes produit et la réalité de l’exécution.</p></div><div className="services"><article className="service"><span className="mono service-number">01 / Donner le cap</span><span className="service-icon" aria-hidden="true">⌖</span><h3>Stratégie &amp; cadrage</h3><p>Rendre le contexte lisible, poser les priorités et transformer l’ambition en trajectoire praticable.</p><span className="tag">Transformation IT · Arbitrages</span></article><article className="service"><span className="mono service-number">02 / Créer de la valeur</span><span className="service-icon" aria-hidden="true">◇</span><h3>Product management</h3><p>Relier les besoins métier à une roadmap claire, avec des décisions utiles et des équipes alignées.</p><span className="tag">Vision produit · Priorisation</span></article><article className="service"><span className="mono service-number">03 / Tenir la trajectoire</span><span className="service-icon" aria-hidden="true">↗</span><h3>Delivery &amp; gouvernance</h3><p>Orchestrer les dépendances, fluidifier les décisions et sécuriser l’exécution dans les contextes exigeants.</p><span className="tag">Agilité · Coordination · GenAI</span></article></div></section>
    <section className="section work" id="references"><div className="wrap"><div className="section-head"><div><span className="mono muted">02 / Missions sélectionnées</span><h2>La confiance se construit.<br />Les résultats se voient.</h2></div><p>Du luxe à l’énergie, une même exigence : faire avancer des projets qui comptent.</p></div><div className="cases"><article className="case featured"><div className="case-top mono"><span>Luxe / Supply &amp; Business Units</span><span>01 ↗</span></div><h3>Christian Dior Couture</h3><p>Orchestrer le delivery d’un domaine où produit, métier et IT doivent avancer ensemble.</p><div className="result"><div><strong>12</strong><small>équipes coordonnées</small></div><div><strong><span style={{"fontSize": "11px", "letterSpacing": "normal", "color": "var(--muted)"}}>Plus de </span>2M€</strong><small>de budget géré par PI</small></div></div><details><summary>Dans les coulisses de la mission</summary><p>Release Train Engineer au sein de la DSI, Product Management sur Merchandise Planning. Pilotage d’un projet supply chain basé sur Anaplan et mise en place d’agents GitHub Copilot pour aider au pilotage du delivery.</p></details></article><article className="case small"><div className="case-top"><h3>CHANEL</h3><span className="mono">CRM ↗</span></div><p>Déployer une application CRM mobile pour rapprocher les équipes en boutique de leur clientèle.</p><div className="highlight">400+ utilisateurs en France et à l’international</div></article><article className="case small"><div className="case-top"><h3>EDF Renouvelables</h3><span className="mono">Énergie ↗</span></div><p>Fluidifier l’accès aux sites de maintenance avec la solution mobile Smart Access.</p><div className="highlight">Plus de 80 % de réduction du temps d’attente</div></article></div><div className="work-footer"><span>Une sélection issue du parcours de Lionel Sultan.</span><ReferenceList /></div></div></section>
    <section className="section wrap" id="methode"><div className="section-head"><div><span className="mono muted">03 / Approche</span><h2>Moins de flou.<br />Plus de mouvement.</h2></div><p>Une intervention personnelle, une méthode lisible et des décisions qui se traduisent en action.</p></div><div className="method-grid"><article className="step"><span className="mono muted">01</span><h3>Comprendre</h3><p>Les enjeux, les contraintes et ce qui bloque réellement.</p></article><article className="step"><span className="mono muted">02</span><h3>Structurer</h3><p>Les priorités, les rôles et les points de décision.</p></article><article className="step"><span className="mono muted">03</span><h3>Piloter</h3><p>Les échanges utiles et le rythme de l’exécution.</p></article><article className="step"><span className="mono muted">04</span><h3>Sécuriser</h3><p>Les arbitrages, les livrables et la suite de la trajectoire.</p></article></div></section>
    <FAQSection /><section className="contact wrap" id="contact"><div className="contact-box"><div><span className="eyebrow mono"><span className="dot"></span>La prochaine étape</span><h2>Un contexte complexe ?<br />Commençons par en parler.</h2><p>Un premier échange pour clarifier vos enjeux et le mode d’intervention le plus utile.</p></div><div className="contact-links"><a className="primary" href="mailto:contact@neatch.com">Échanger avec Lionel <span>↗</span></a><a className="text-link" href="https://www.linkedin.com/in/lionelsultan" target="_blank" rel="noopener noreferrer">Retrouvons-nous sur LinkedIn ↗</a></div></div></section>
  </main>
  <footer><div className="wrap"><a href="#main-content" aria-label="Neatch, retour en haut"><Image className="logo" src="/neatch-logo-wordmark.png" alt="Neatch" width="86" height="22" /></a><span>© 2026 Neatch · Conseil indépendant, impact collectif.</span><a href="#faq">Questions fréquentes</a><a href="/legal">Mentions légales ↗</a></div></footer>
  </div>;
}
