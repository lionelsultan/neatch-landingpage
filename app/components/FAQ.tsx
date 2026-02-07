"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quelle est la différence avec une ESN traditionnelle ?",
      answer:
        "Contrairement aux ESN classiques, nous privilégions la transparence totale sur les tarifs et conditions. Pas de marges cachées, pas d'intermédiaires superflus. Notre modèle repose sur une relation directe et de confiance entre clients et consultants, avec un accompagnement personnalisé.",
    },
    {
      question: "Comment sélectionnez-vous vos consultants ?",
      answer:
        "Chaque consultant de notre vivier est évalué sur ses compétences techniques, son expérience terrain et son savoir-être. Nous privilégions la qualité à la quantité et veillons à l'adéquation entre le profil et les besoins spécifiques de chaque mission.",
    },
    {
      question: "Quels types de missions proposez-vous ?",
      answer:
        "Nous intervenons sur des missions de conseil digital et de transformation : product management, pilotage de projet, gouvernance IT, amélioration continue, accompagnement au changement. Les formats varient du renfort ponctuel à l'accompagnement long terme.",
    },
    {
      question: "Comment fonctionne votre modèle de rémunération ?",
      answer:
        "Notre modèle est transparent : le tarif présenté au client inclut la rémunération du consultant et notre commission d'intermédiation, clairement détaillée. Pas de frais cachés ni de marges obscures.",
    },
    {
      question: "Quels sont vos délais de mise à disposition ?",
      answer:
        "Nous nous engageons à une première réponse sous 48h en moyenne. Le délai de présentation de profils dépend de la spécificité du besoin, mais notre vivier pré-qualifié permet généralement des propositions rapides.",
    },
    {
      question: "Proposez-vous un suivi pendant les missions ?",
      answer:
        "Oui, absolument. Nous assurons des points réguliers avec le client et le consultant tout au long de la mission pour garantir la satisfaction mutuelle et ajuster si nécessaire.",
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
            Tout ce que vous devez savoir sur notre accompagnement
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
                  className="accordion-content"
                  data-open={isOpen}
                  hidden={!isOpen}
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
