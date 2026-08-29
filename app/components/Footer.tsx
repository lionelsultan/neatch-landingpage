"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background py-14 text-foreground" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="mb-5 inline-flex"
              aria-label="Neatch - Accueil"
            >
              <BrandLogo variant="lockup" className="h-24 w-auto" />
            </Link>
            <p className="max-w-md text-muted-foreground">
              Structure de Lionel Sultan pour intervenir personnellement sur
              les enjeux IT, produit et delivery : cadrage, pilotage,
              gouvernance, arbitrages et sécurisation de l’exécution.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Navigation</h3>
            <ul className="grid gap-2">
              {[
                ["#principes", "Principes fondateurs"],
                ["#methode", "Méthode"],
                ["#references", "Références"],
                ["#identification", "Identification"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Button asChild variant="link" className="h-auto p-0">
                    <a href={href}>{label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Contact</h3>
            <ul className="grid gap-2">
              <li>
                <Button asChild variant="link" className="h-auto p-0">
                  <a href="mailto:contact@neatch.com">contact@neatch.com</a>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="h-auto p-0">
                  <a
                    href="https://linkedin.com/in/lionelsultan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                    <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
                  </a>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="h-auto p-0">
                  <a href="/legal">Mentions légales</a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p>&copy; {currentYear} Neatch E.U.R.L. Tous droits réservés.</p>
            <p>
              Ce site ne dépose aucun cookie de suivi et limite la collecte de
              données au strict nécessaire.
            </p>
          </div>
          <p>SIREN : 831282066</p>
        </div>
      </div>
    </footer>
  );
}
