import { ArrowUpRight, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactForm() {
  return (
    <section id="contact" className="site-section bg-white" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-950 p-6 text-white shadow-sm sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-neutral-400">Contact</p>
            <h2 id="contact-title" className="mb-6 text-4xl font-black leading-tight md:text-5xl">
              Parlons de votre contexte
            </h2>
            <p className="mb-8 text-lg leading-8 text-neutral-300">
              Si vous avez un sujet IT, produit, projet, agile ou delivery à cadrer,
              piloter ou sécuriser, prenons un temps d’échange. Nous clarifierons
              le contexte, les enjeux, le niveau d’urgence et le mode d’intervention
              le plus utile.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="group flex min-h-40 flex-col justify-between border-white/10 bg-white/[0.06] p-5 text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1]">
                <span className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-neutral-950 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </span>
                  <Button asChild variant="outline" size="icon" className="border-white/10 bg-transparent text-neutral-300 hover:bg-white hover:text-neutral-950">
                    <a href="mailto:contact@neatch.com" aria-label="Envoyer un email à Neatch">
                      <ArrowUpRight />
                    </a>
                  </Button>
                </span>
                <span>
                  <span className="block text-lg font-bold text-white">Email</span>
                  <span className="mt-1 block text-lg text-neutral-300 transition-colors group-hover:text-white">
                    contact@neatch.com
                  </span>
                </span>
              </Card>

              <Card className="group flex min-h-40 flex-col justify-between border-white/10 bg-white/[0.06] p-5 text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1]">
                <span className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-neutral-950 shadow-sm">
                    <UserRound className="h-5 w-5" />
                  </span>
                  <Button asChild variant="outline" size="icon" className="border-white/10 bg-transparent text-neutral-300 hover:bg-white hover:text-neutral-950">
                    <a
                      href="https://linkedin.com/in/lionelsultan"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contacter Lionel Sultan sur LinkedIn"
                    >
                      <ArrowUpRight />
                    </a>
                  </Button>
                </span>
                <span>
                  <span className="block text-lg font-bold text-white">LinkedIn</span>
                  <span className="mt-1 block text-lg text-neutral-300 transition-colors group-hover:text-white">
                    Contacter Lionel Sultan
                    <span className="sr-only"> sur LinkedIn, s’ouvre dans un nouvel onglet</span>
                  </span>
                </span>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
