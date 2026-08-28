"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function FAQ() {
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
        "Principalement des chefs de projet, Product Owners, Product Managers, Scrum Masters, profils PMO, delivery managers ou consultants transformation. L’objectif est de trouver une personne adaptée au contexte, pas seulement un intitulé de poste.",
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

  return (
    <section id="faq" className="site-section bg-stone-50" aria-labelledby="faq-title">
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

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={faq.question} className="overflow-hidden">
              <AccordionItem value={`faq-${idx}`} className="border-b-0">
                <AccordionTrigger className="px-5 py-5 text-base font-bold text-neutral-950 hover:bg-muted/60 hover:no-underline">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-base leading-7 text-neutral-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
