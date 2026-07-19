"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Neatch est-elle une agence ou un cabinet de conseil ?",
      answer:
        "Non. Neatch est la structure de Lionel Sultan, freelance senior. Le client échange donc avec la personne qui connaît le terrain, intervient elle-même sur certaines missions et qualifie les consultants avant de les recommander.",
    },
    {
      question: "Sur quels sujets pouvez-vous intervenir directement ?",
      answer:
        "J’interviens sur des enjeux de transformation IT, gouvernance agile, Product Management, coordination multi-équipes et sécurisation du delivery. La mission peut porter sur le cadrage, l’orchestration, les arbitrages ou la remise en maîtrise d’une trajectoire.",
    },
    {
      question: "Quelle est la valeur ajoutée pour trouver un consultant ?",
      answer:
        "La valeur vient du travail de recherche et de qualification en amont : LinkedIn, plateformes freelance, réseau personnel, premiers échanges, entretiens de qualification et lecture terrain du profil. Le client ne reçoit pas une pile de CV, mais une sélection courte de consultants déjà filtrés.",
    },
    {
      question: "Comment travaillez-vous avec des plateformes comme Malt ou Freelance Republik ?",
      answer:
        "Je les considère comme des partenaires. Si le bon freelance est chez eux, mon rôle est de le repérer, de vérifier son adéquation avec la mission et de faciliter sa montée vers le client. Je prends une commission d’apport d’affaires pour le travail de sourcing et de qualification, sans court-circuiter l’écosystème qui porte le freelance.",
    },
    {
      question: "Quels profils pouvez-vous identifier ?",
      answer:
        "Principalement des chefs de projet, Product Owners, Product Managers, Scrum Masters, profils PMO, delivery managers ou consultants transformation. L’objectif est de trouver une personne adaptée au contexte, pas seulement un intitulé de poste.",
    },
    {
      question: "Comment qualifiez-vous les consultants ?",
      answer:
        "Je regarde l’expérience réelle, la capacité à comprendre le contexte, la posture avec les équipes, le niveau de séniorité, la clarté de communication et les situations déjà vécues. Mon expérience de mission me permet de challenger les réponses au-delà du CV.",
    },
    {
      question: "Comment démarre une collaboration ?",
      answer:
        "Elle démarre par un échange de cadrage pour comprendre le besoin : mission directe, recherche de consultant, niveau d’urgence, contexte, livrables attendus et contraintes. Ensuite, je propose un mode d’intervention ou une démarche de sourcing claire.",
    },
    {
      question: "Pourquoi passer par vous plutôt que chercher directement ?",
      answer:
        "Parce que la recherche prend du temps et que le mauvais casting coûte cher. Je fais le travail fastidieux de repérage, de tri et d’entretiens, puis je recommande uniquement des profils que je considère capables de tenir la mission.",
    },
  ];

  return (
    <section id="faq" className="notion-section bg-stone-50" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-kicker">FAQ</p>
          <h2 id="faq-title" className="mb-4 text-4xl font-black leading-tight text-neutral-950 md:text-5xl">
            Questions fréquentes
          </h2>
          <p className="text-lg text-neutral-700">
            Les points les plus souvent abordés lors des premiers échanges
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="overflow-hidden rounded-lg border border-neutral-200 bg-white"
              >
                <h3>
                  <button
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-stone-50"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="pr-4 font-bold text-neutral-950">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 flex-shrink-0 text-neutral-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className="accordion-content"
                  data-open={isOpen}
                >
                  <div>
                    <div className="px-5 pb-5 leading-7 text-neutral-700">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
