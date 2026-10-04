import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export default function FAQ() {
  const questions = [
    ["NEATCH est-il une agence ?", "Non. Lionel Sultan pilote personnellement les interventions et réunit, selon les besoins, des consultants d’ESN et des freelances issus de Malt, d’autres plateformes ou de son réseau. Il qualifie les profils et organise leurs contributions dans un cadre de delivery commun."],
    ["Quel est le périmètre de NEATCH ?", "La gouvernance et le delivery de programmes de transformation complexes, au croisement du métier, de l’IT, de l’architecture et des équipes."],
    ["Comment démarre une collaboration ?", "Un échange sur les objectifs, acteurs, contraintes et dépendances permet de définir un diagnostic et des résultats attendus."],
    ["Quelle place donnez-vous à l’IA ?", "Une couche opérationnelle pour consolider les données, préparer les décisions et détecter les risques, selon les accès et règles de confidentialité du programme."]
  ];
  return <section id="faq" className="mx-auto max-w-3xl px-6 py-20" aria-labelledby="faq-title"><h2 id="faq-title" className="mb-8 text-3xl">Questions fréquentes</h2><Accordion type="single" collapsible>{questions.map(([question, answer], index) => <AccordionItem value={String(index)} key={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></section>;
}
