"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Sur quels sujets Neatch intervient-elle le plus souvent ?",
      answer:
        "Principalement sur des enjeux de transformation IT, de gouvernance agile, de Product Management et de sécurisation du delivery. L’intervention peut porter sur le cadrage d’un programme, la coordination multi-équipes, la remise en maîtrise d’une trajectoire ou l’alignement entre business et IT. Neatch peut aussi aider ses clients finaux à recruter des chefs de projet, Product Owners, Scrum Masters et Product Managers.",
    },
    {
      question: "À quel moment faire appel à vous ?",
      answer:
        "Le bon moment est souvent celui où un programme ralentit, où les décisions deviennent difficiles, où les dépendances s’accumulent ou quand l’organisation a besoin d’un cadre plus solide pour exécuter. L’objectif est de remettre rapidement de la lisibilité et du rythme.",
    },
    {
      question: "Intervenez-vous au niveau stratégique ou opérationnel ?",
      answer:
        "Les deux. La valeur de l’intervention vient précisément de la capacité à relier vision stratégique, gouvernance et exécution opérationnelle. Le travail peut aller du cadrage de la cible à l’animation concrète des rituels, arbitrages et plans d’action.",
    },
    {
      question: "Travaillez-vous uniquement avec des grands groupes ?",
      answer:
        "Non. L’expérience a été construite dans des environnements exigeants, allant des grands groupes internationaux aux structures plus agiles. Ce qui compte est surtout le niveau d’enjeu, la complexité du contexte et la volonté d’avancer vite et proprement.",
    },
    {
      question: "Avez-vous une approche ou un cadre méthodologique particulier ?",
      answer:
        "Oui. L’approche s’appuie sur des pratiques éprouvées de gouvernance produit, de pilotage de programme et d’agilité à l’échelle, notamment dans des contextes inspirés de SAFe. Le cadre reste toujours adapté à la réalité du client, sans dogmatisme.",
    },
    {
      question: "Comment démarre une collaboration ?",
      answer:
        "La collaboration démarre par un échange de cadrage pour comprendre le contexte, les enjeux, les points de friction et les résultats attendus. À partir de là, une proposition d’intervention claire est définie, avec un mode de pilotage adapté.",
    },
    {
      question: "Pouvez-vous aussi aider à recruter des profils produit ou delivery ?",
      answer:
        "Oui. En complément du conseil, Neatch peut accompagner les clients finaux dans le recrutement de profils clés comme les chefs de projet, Product Owners, Scrum Masters et Product Managers, en fonction du contexte et du niveau d’exigence de la mission ou du poste.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-neutral-600">
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
                className="border border-neutral-200 rounded-xl overflow-hidden"
              >
                <h3>
                  <button
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-semibold text-neutral-900 pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-brand-500 flex-shrink-0 transition-transform duration-200 ${
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
                    <div className="px-6 pb-6 text-neutral-600">
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
